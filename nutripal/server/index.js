import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import crypto from "crypto";
import CryptoJS from "crypto-js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { searchFoods, getFoodById } from "./foodDatabase.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*" }));

const PORT = process.env.PORT || 8081;

// --- Mongo connection ---
async function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nutripal";
  await mongoose.connect(uri, { dbName: "nutripal" });
  console.log("MongoDB connected");
}
connectDB().catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

// --- Schemas & Models ---
import { User, Profile, Food, Log } from "./models.js";

// --- Helpers ---
function bmi({ heightCm, weightKg }) {
  const h = heightCm / 100;
  return weightKg / (h * h);
}

// Mifflin St Jeor; defaults if age/sex missing are set in model
function maintenanceCalories({ weightKg, heightCm, age, sex, activityLevel }) {
  const w = weightKg,
    h = heightCm,
    a = age;
  const s = sex === "female" ? -161 : 5;
  const bmr = 10 * w + 6.25 * h - 5 * a + s;
  const factors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };
  const f = factors[activityLevel] || 1.2;
  return Math.round(bmr * f);
}

function goalCalories(profile) {
  if (!profile?.targetWeightKg) return maintenanceCalories(profile);
  const diffKg = profile.targetWeightKg - profile.weightKg; // + for gain, - for loss
  // Aim to change ~0.5 kg/week. ~7700 kcal per kg.
  const weeks = Math.max(1, Math.round(Math.abs(diffKg) / 0.5));
  const dailyDelta = Math.round((diffKg * 7700) / (7 * weeks)); // + surplus, - deficit
  return Math.max(1200, maintenanceCalories(profile) + dailyDelta); // don't go below 1200
}

// --- Authentication Middleware ---
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
}

// --- Authentication Routes ---
app.post("/api/auth/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Username, email, and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email or username already exists" });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/auth/logout", (req, res) => {
  // Since we're using JWT tokens, logout is handled client-side by removing the token
  res.json({ message: "Logout successful" });
});

app.get("/api/auth/me", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      id: user._id,
      username: user.username,
      email: user.email
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// --- Routes ---
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Profile
app.get("/api/profile", authenticateToken, async (req, res) => {
  const p = await Profile.findOne({ userId: req.user.userId }).lean();
  res.json(p || null);
});

app.post("/api/profile", authenticateToken, async (req, res) => {
  const { heightCm, weightKg, targetWeightKg, age, sex, activityLevel } =
    req.body;
  if (!heightCm || !weightKg)
    return res.status(400).json({ message: "heightCm & weightKg required" });
  await Profile.deleteMany({ userId: req.user.userId });
  const p = await Profile.create({
    userId: req.user.userId,
    heightCm,
    weightKg,
    targetWeightKg,
    age,
    sex,
    activityLevel,
  });
  res.json({
    profile: p,
    bmi: bmi(p),
    maintenance: maintenanceCalories(p),
    goalCalories: goalCalories(p),
  });
});

app.put("/api/profile", authenticateToken, async (req, res) => {
  const p = await Profile.findOne({ userId: req.user.userId });
  if (!p) return res.status(404).json({ message: "Profile not found" });
  Object.assign(p, req.body);
  await p.save();
  res.json({
    profile: p,
    bmi: bmi(p),
    maintenance: maintenanceCalories(p),
    goalCalories: goalCalories(p),
  });
});

// Foods
app.get("/api/foods", authenticateToken, async (req, res) => {
  const foods = await Food.find().sort({ name: 1 }).lean();
  res.json(foods);
});

app.post("/api/foods", authenticateToken, async (req, res) => {
  try {
    const f = await Food.create(req.body);
    res.json(f);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// FatSecret API configuration
const FATSECRET_CLIENT_ID = "cf1f8f19621840aa8cf758394b9b68b1";
const FATSECRET_CLIENT_SECRET = "693b637aabcb461e937593ffdb0571c5";
const FATSECRET_BASE_URL = "https://platform.fatsecret.com/rest/server.api";

// OAuth 2.0 helper functions for FatSecret API
let accessToken = null;
let tokenExpiry = null;

async function getAccessToken() {
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }

  const credentials = Buffer.from(
    `${FATSECRET_CLIENT_ID}:${FATSECRET_CLIENT_SECRET}`
  ).toString("base64");

  console.log("Requesting OAuth token...");
  const response = await fetch("https://oauth.fatsecret.com/connect/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  console.log("OAuth response:", data);

  if (data.access_token) {
    accessToken = data.access_token;
    tokenExpiry = Date.now() + data.expires_in * 1000 - 60000; // Refresh 1 minute early
    return accessToken;
  }

  throw new Error(`Failed to get access token: ${JSON.stringify(data)}`);
}

async function callFatSecretAPI(endpoint, params = {}) {
  const token = await getAccessToken();

  const queryParams = new URLSearchParams({
    format: "json",
    ...params,
  });

  const url = `${FATSECRET_BASE_URL}?${queryParams}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

// FatSecret Food Search API
app.get("/api/foods/search", async (req, res) => {
  const { query } = req.query;
  if (!query)
    return res.status(400).json({ message: "Query parameter required" });

  try {
    console.log("Searching for:", query);
    const foods = searchFoods(query, 10);
    
    // Transform hardcoded data to match expected format
    const transformedFoods = foods.map(food => ({
      fdcId: food.id,
      name: food.name,
      serving: food.serving_size,
      calories: food.calories,
      protein: food.protein,
      carbs: food.carbs,
      fat: food.fat,
      fiber: food.fiber,
      category: food.category.toLowerCase(),
      brand: food.brand || ""
    }));

    console.log(`Found ${transformedFoods.length} foods for query: ${query}`);
    res.json(transformedFoods);
  } catch (error) {
    console.error("Food search error:", error);
    res.status(500).json({ message: "Failed to search foods" });
  }
});

// Logs
import dayjs from "dayjs";
app.get("/api/logs/:date", authenticateToken, async (req, res) => {
  const { date } = req.params; // YYYY-MM-DD
  const log = await Log.findOne({ userId: req.user.userId, date }).populate("items.foodId").lean();
  res.json(log || { date, items: [] });
});

app.post("/api/logs/:date/add", authenticateToken, async (req, res) => {
  const { date } = req.params;
  const {
    foodName,
    quantity = 1,
  } = req.body;

  let food;

  // First try to find in MongoDB
  food = await Food.findOne({ name: new RegExp("^" + foodName + "$", "i") });
  
  // If not found in MongoDB, search in hardcoded database
  if (!food) {
    const hardcodedFoods = searchFoods(foodName, 10);
    const hardcodedFood = hardcodedFoods.find(f => f.name.toLowerCase() === foodName.toLowerCase());
    
    if (hardcodedFood) {
      // Create the food in MongoDB from hardcoded data
      food = await Food.create({
        name: hardcodedFood.name,
        serving: hardcodedFood.serving_size,
        calories: hardcodedFood.calories,
        protein: hardcodedFood.protein,
        carbs: hardcodedFood.carbs,
        fat: hardcodedFood.fat,
        fiber: hardcodedFood.fiber,
        category: hardcodedFood.category.toLowerCase()
      });
    }
  }
  
  if (!food) return res.status(404).json({ message: "Food not found" });

  let log = await Log.findOne({ userId: req.user.userId, date });
  if (!log) log = await Log.create({ userId: req.user.userId, date, items: [] });
  log.items.push({ foodId: food._id, name: food.name, quantity });
  await log.save();
  res.json(log);
});

app.delete("/api/logs/:date/items/:itemIndex", authenticateToken, async (req, res) => {
  const { date, itemIndex } = req.params;
  const index = parseInt(itemIndex);

  const log = await Log.findOne({ userId: req.user.userId, date });
  if (!log) return res.status(404).json({ message: "Log not found" });

  if (index < 0 || index >= log.items.length) {
    return res.status(400).json({ message: "Invalid item index" });
  }

  log.items.splice(index, 1);
  await log.save();

  const updatedLog = await Log.findOne({ userId: req.user.userId, date })
    .populate("items.foodId")
    .lean();
  res.json(updatedLog || { date, items: [] });
});

app.get("/api/summary/:date", authenticateToken, async (req, res) => {
  const p = await Profile.findOne({ userId: req.user.userId }).lean();
  const { date } = req.params;
  const log = await Log.findOne({ userId: req.user.userId, date }).populate("items.foodId").lean();
  const items = log?.items || [];
  const totals = items.reduce(
    (acc, it) => {
      const f = it.foodId || {};
      const q = it.quantity || 1;
      acc.calories += (f.calories || 0) * q;
      acc.protein += (f.protein || 0) * q;
      acc.carbs += (f.carbs || 0) * q;
      acc.fat += (f.fat || 0) * q;
      acc.fiber += (f.fiber || 0) * q;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );

  const goal = p ? goalCalories(p) : 2000;
  res.json({ date, totals, goal, items });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
  // Restart after adding delete functionality
});
