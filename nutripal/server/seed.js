import dotenv from "dotenv";
import mongoose from "mongoose";
import { Food } from "./models.js";

dotenv.config();

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nutripal";

const foods = [
  { name: "Roti (chapati)", serving: "1 medium (40g)", calories: 120, protein: 3.1, carbs: 18, fat: 3.2, fiber: 2.0, category: "grains" },
  { name: "Rice (cooked)", serving: "1 cup (160g)", calories: 205, protein: 4.3, carbs: 45, fat: 0.4, fiber: 0.6, category: "grains" },
  { name: "Dal (lentils, cooked)", serving: "1 cup (198g)", calories: 230, protein: 17.9, carbs: 39.9, fat: 0.8, fiber: 15.6, category: "legumes" },
  { name: "Paneer", serving: "100g", calories: 265, protein: 18, carbs: 6.1, fat: 20.1, fiber: 0, category: "dairy" },
  { name: "Egg (boiled)", serving: "1 large", calories: 78, protein: 6.3, carbs: 0.6, fat: 5.3, fiber: 0, category: "protein" },
  { name: "Banana", serving: "1 medium", calories: 105, protein: 1.3, carbs: 27, fat: 0.3, fiber: 3.1, category: "fruit" },
  { name: "Milk (toned)", serving: "1 cup (250ml)", calories: 150, protein: 8, carbs: 12, fat: 8, fiber: 0, category: "dairy" },
  { name: "Chicken breast (cooked)", serving: "100g", calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, category: "protein" },
  { name: "Curd (dahi)", serving: "1 cup (245g)", calories: 150, protein: 8.5, carbs: 11.4, fat: 7.9, fiber: 0, category: "dairy" },
  { name: "Apple", serving: "1 medium", calories: 95, protein: 0.5, carbs: 25, fat: 0.3, fiber: 4.4, category: "fruit" }
];

async function run() {
  await mongoose.connect(uri, { dbName: "nutripal" });
  console.log("Connected, seeding foods...");
  await Food.deleteMany({});
  await Food.insertMany(foods);
  console.log("Seeded", foods.length, "foods.");
  await mongoose.disconnect();
  console.log("Done.");
}

run().catch(e => { console.error(e); process.exit(1); });
