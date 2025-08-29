import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" }
}, { timestamps: true });

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  heightCm: { type: Number, required: true },
  weightKg: { type: Number, required: true },
  targetWeightKg: { type: Number, required: false },
  age: { type: Number, default: 25 },
  sex: { type: String, enum: ["male","female"], default: "male" },
  activityLevel: { type: String, enum: ["sedentary","light","moderate","active","very_active"], default: "sedentary" },
}, { timestamps: true });

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  serving: { type: String, default: "1 unit" },
  calories: { type: Number, required: true },
  protein: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  fat: { type: Number, default: 0 },
  fiber: { type: Number, default: 0 },
  category: { type: String, default: "other" }
}, { timestamps: true });

const LogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  items: [{
    foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
    name: String, // denormalize for resilience
    quantity: { type: Number, default: 1 }
  }]
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema);
export const Profile = mongoose.model("Profile", ProfileSchema);
export const Food = mongoose.model("Food", FoodSchema);
export const Log = mongoose.model("Log", LogSchema);