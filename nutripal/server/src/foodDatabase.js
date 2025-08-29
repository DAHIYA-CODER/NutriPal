// Hardcoded food database with nutritional information
// All nutritional values are per 100g unless otherwise specified

export const foodDatabase = [
  // Fruits
  {
    id: 1,
    name: "Apple",
    brand: "",
    category: "Fruits",
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
    fiber: 2.4,
    sugar: 10.4,
    sodium: 1,
    serving_size: "1 medium (182g)"
  },
  {
    id: 2,
    name: "Banana",
    brand: "",
    category: "Fruits",
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fat: 0.3,
    fiber: 2.6,
    sugar: 12.2,
    sodium: 1,
    serving_size: "1 medium (118g)"
  },
  {
    id: 3,
    name: "Orange",
    brand: "",
    category: "Fruits",
    calories: 47,
    protein: 0.9,
    carbs: 12,
    fat: 0.1,
    fiber: 2.4,
    sugar: 9.4,
    sodium: 0,
    serving_size: "1 medium (154g)"
  },
  {
    id: 4,
    name: "Strawberries",
    brand: "",
    category: "Fruits",
    calories: 32,
    protein: 0.7,
    carbs: 8,
    fat: 0.3,
    fiber: 2,
    sugar: 4.9,
    sodium: 1,
    serving_size: "1 cup (152g)"
  },
  {
    id: 5,
    name: "Grapes",
    brand: "",
    category: "Fruits",
    calories: 62,
    protein: 0.6,
    carbs: 16,
    fat: 0.2,
    fiber: 0.9,
    sugar: 16,
    sodium: 2,
    serving_size: "1 cup (151g)"
  },
  
  // Vegetables
  {
    id: 6,
    name: "Broccoli",
    brand: "",
    category: "Vegetables",
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4,
    fiber: 2.6,
    sugar: 1.5,
    sodium: 33,
    serving_size: "1 cup chopped (91g)"
  },
  {
    id: 7,
    name: "Spinach",
    brand: "",
    category: "Vegetables",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    sugar: 0.4,
    sodium: 79,
    serving_size: "1 cup (30g)"
  },
  {
    id: 8,
    name: "Carrots",
    brand: "",
    category: "Vegetables",
    calories: 41,
    protein: 0.9,
    carbs: 10,
    fat: 0.2,
    fiber: 2.8,
    sugar: 4.7,
    sodium: 69,
    serving_size: "1 medium (61g)"
  },
  {
    id: 9,
    name: "Bell Pepper",
    brand: "",
    category: "Vegetables",
    calories: 31,
    protein: 1,
    carbs: 7,
    fat: 0.3,
    fiber: 2.5,
    sugar: 4.2,
    sodium: 4,
    serving_size: "1 medium (119g)"
  },
  {
    id: 10,
    name: "Tomato",
    brand: "",
    category: "Vegetables",
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    fiber: 1.2,
    sugar: 2.6,
    sodium: 5,
    serving_size: "1 medium (123g)"
  },
  
  // Proteins
  {
    id: 11,
    name: "Chicken Breast",
    brand: "",
    category: "Protein",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    sugar: 0,
    sodium: 74,
    serving_size: "100g cooked"
  },
  {
    id: 12,
    name: "Salmon",
    brand: "",
    category: "Protein",
    calories: 208,
    protein: 22,
    carbs: 0,
    fat: 12,
    fiber: 0,
    sugar: 0,
    sodium: 59,
    serving_size: "100g cooked"
  },
  {
    id: 13,
    name: "Ground Beef (85% lean)",
    brand: "",
    category: "Protein",
    calories: 250,
    protein: 26,
    carbs: 0,
    fat: 15,
    fiber: 0,
    sugar: 0,
    sodium: 75,
    serving_size: "100g cooked"
  },
  {
    id: 14,
    name: "Eggs",
    brand: "",
    category: "Protein",
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
    fiber: 0,
    sugar: 1.1,
    sodium: 124,
    serving_size: "2 large eggs (100g)"
  },
  {
    id: 15,
    name: "Tofu",
    brand: "",
    category: "Protein",
    calories: 76,
    protein: 8,
    carbs: 1.9,
    fat: 4.8,
    fiber: 0.3,
    sugar: 0.6,
    sodium: 7,
    serving_size: "100g"
  },
  
  // Grains & Starches
  {
    id: 16,
    name: "Brown Rice",
    brand: "",
    category: "Grains",
    calories: 111,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    fiber: 1.8,
    sugar: 0.4,
    sodium: 5,
    serving_size: "100g cooked"
  },
  {
    id: 17,
    name: "White Rice",
    brand: "",
    category: "Grains",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    fiber: 0.4,
    sugar: 0.1,
    sodium: 1,
    serving_size: "100g cooked"
  },
  {
    id: 18,
    name: "Quinoa",
    brand: "",
    category: "Grains",
    calories: 120,
    protein: 4.4,
    carbs: 22,
    fat: 1.9,
    fiber: 2.8,
    sugar: 0.9,
    sodium: 7,
    serving_size: "100g cooked"
  },
  {
    id: 19,
    name: "Oats",
    brand: "",
    category: "Grains",
    calories: 68,
    protein: 2.4,
    carbs: 12,
    fat: 1.4,
    fiber: 1.7,
    sugar: 0.3,
    sodium: 4,
    serving_size: "100g cooked"
  },
  {
    id: 20,
    name: "Sweet Potato",
    brand: "",
    category: "Vegetables",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    fiber: 3,
    sugar: 4.2,
    sodium: 54,
    serving_size: "100g baked"
  },
  
  // Dairy
  {
    id: 21,
    name: "Milk (2%)",
    brand: "",
    category: "Dairy",
    calories: 50,
    protein: 3.3,
    carbs: 4.8,
    fat: 2,
    fiber: 0,
    sugar: 4.8,
    sodium: 44,
    serving_size: "100ml"
  },
  {
    id: 22,
    name: "Greek Yogurt (Plain)",
    brand: "",
    category: "Dairy",
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    fiber: 0,
    sugar: 3.6,
    sodium: 36,
    serving_size: "100g"
  },
  {
    id: 23,
    name: "Cheddar Cheese",
    brand: "",
    category: "Dairy",
    calories: 403,
    protein: 25,
    carbs: 1.3,
    fat: 33,
    fiber: 0,
    sugar: 0.5,
    sodium: 621,
    serving_size: "100g"
  },
  
  // Nuts & Seeds
  {
    id: 24,
    name: "Almonds",
    brand: "",
    category: "Nuts",
    calories: 579,
    protein: 21,
    carbs: 22,
    fat: 50,
    fiber: 12,
    sugar: 4.4,
    sodium: 1,
    serving_size: "100g"
  },
  {
    id: 25,
    name: "Walnuts",
    brand: "",
    category: "Nuts",
    calories: 654,
    protein: 15,
    carbs: 14,
    fat: 65,
    fiber: 6.7,
    sugar: 2.6,
    sodium: 2,
    serving_size: "100g"
  },
  {
    id: 26,
    name: "Peanut Butter",
    brand: "",
    category: "Nuts",
    calories: 588,
    protein: 25,
    carbs: 20,
    fat: 50,
    fiber: 6,
    sugar: 9,
    sodium: 17,
    serving_size: "100g"
  },
  
  // Legumes
  {
    id: 27,
    name: "Black Beans",
    brand: "",
    category: "Legumes",
    calories: 132,
    protein: 8.9,
    carbs: 24,
    fat: 0.5,
    fiber: 8.7,
    sugar: 0.3,
    sodium: 2,
    serving_size: "100g cooked"
  },
  {
    id: 28,
    name: "Chickpeas",
    brand: "",
    category: "Legumes",
    calories: 164,
    protein: 8.9,
    carbs: 27,
    fat: 2.6,
    fiber: 7.6,
    sugar: 4.8,
    sodium: 7,
    serving_size: "100g cooked"
  },
  {
    id: 29,
    name: "Lentils",
    brand: "",
    category: "Legumes",
    calories: 116,
    protein: 9,
    carbs: 20,
    fat: 0.4,
    fiber: 7.9,
    sugar: 1.8,
    sodium: 2,
    serving_size: "100g cooked"
  },
  
  // Bread & Pasta
  {
    id: 30,
    name: "Whole Wheat Bread",
    brand: "",
    category: "Grains",
    calories: 247,
    protein: 13,
    carbs: 41,
    fat: 4.2,
    fiber: 6,
    sugar: 5.6,
    sodium: 432,
    serving_size: "100g"
  },
  {
    id: 31,
    name: "Pasta (Cooked)",
    brand: "",
    category: "Grains",
    calories: 131,
    protein: 5,
    carbs: 25,
    fat: 1.1,
    fiber: 1.8,
    sugar: 0.6,
    sodium: 1,
    serving_size: "100g cooked"
  },
  
  // Oils & Fats
  {
    id: 32,
    name: "Olive Oil",
    brand: "",
    category: "Oils",
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    sugar: 0,
    sodium: 2,
    serving_size: "100ml"
  },
  {
    id: 33,
    name: "Avocado",
    brand: "",
    category: "Fruits",
    calories: 160,
    protein: 2,
    carbs: 9,
    fat: 15,
    fiber: 7,
    sugar: 0.7,
    sodium: 7,
    serving_size: "100g"
  },
  
  // Beverages
  {
    id: 34,
    name: "Coffee (Black)",
    brand: "",
    category: "Beverages",
    calories: 2,
    protein: 0.3,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    sodium: 5,
    serving_size: "100ml"
  },
  {
    id: 35,
    name: "Green Tea",
    brand: "",
    category: "Beverages",
    calories: 1,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    sodium: 1,
    serving_size: "100ml"
  },
  
  // Seafood
  {
    id: 36,
    name: "Tuna (Canned in Water)",
    brand: "",
    category: "Protein",
    calories: 116,
    protein: 26,
    carbs: 0,
    fat: 0.8,
    fiber: 0,
    sugar: 0,
    sodium: 247,
    serving_size: "100g"
  },
  {
    id: 37,
    name: "Shrimp",
    brand: "",
    category: "Protein",
    calories: 99,
    protein: 18,
    carbs: 0.2,
    fat: 1.7,
    fiber: 0,
    sugar: 0,
    sodium: 111,
    serving_size: "100g cooked"
  },
  
  // More Fruits
  {
    id: 38,
    name: "Blueberries",
    brand: "",
    category: "Fruits",
    calories: 57,
    protein: 0.7,
    carbs: 14,
    fat: 0.3,
    fiber: 2.4,
    sugar: 10,
    sodium: 1,
    serving_size: "100g"
  },
  {
    id: 39,
    name: "Pineapple",
    brand: "",
    category: "Fruits",
    calories: 50,
    protein: 0.5,
    carbs: 13,
    fat: 0.1,
    fiber: 1.4,
    sugar: 10,
    sodium: 1,
    serving_size: "100g"
  },
  {
    id: 40,
    name: "Mango",
    brand: "",
    category: "Fruits",
    calories: 60,
    protein: 0.8,
    carbs: 15,
    fat: 0.4,
    fiber: 1.6,
    sugar: 14,
    sodium: 1,
    serving_size: "100g"
  },
  
  // More Vegetables
  {
    id: 41,
    name: "Cucumber",
    brand: "",
    category: "Vegetables",
    calories: 16,
    protein: 0.7,
    carbs: 4,
    fat: 0.1,
    fiber: 0.5,
    sugar: 1.7,
    sodium: 2,
    serving_size: "100g"
  },
  {
    id: 42,
    name: "Lettuce",
    brand: "",
    category: "Vegetables",
    calories: 15,
    protein: 1.4,
    carbs: 2.9,
    fat: 0.2,
    fiber: 1.3,
    sugar: 0.8,
    sodium: 28,
    serving_size: "100g"
  },
  {
    id: 43,
    name: "Onion",
    brand: "",
    category: "Vegetables",
    calories: 40,
    protein: 1.1,
    carbs: 9,
    fat: 0.1,
    fiber: 1.7,
    sugar: 4.2,
    sodium: 4,
    serving_size: "100g"
  },
  
  // Snacks & Processed Foods
  {
    id: 44,
    name: "Dark Chocolate (70%)",
    brand: "",
    category: "Snacks",
    calories: 546,
    protein: 7.9,
    carbs: 46,
    fat: 31,
    fiber: 11,
    sugar: 24,
    sodium: 20,
    serving_size: "100g"
  },
  {
    id: 45,
    name: "Potato Chips",
    brand: "",
    category: "Snacks",
    calories: 536,
    protein: 7,
    carbs: 53,
    fat: 34,
    fiber: 4.8,
    sugar: 0.3,
    sodium: 525,
    serving_size: "100g"
  },
  
  // More Protein Sources
  {
    id: 46,
    name: "Turkey Breast",
    brand: "",
    category: "Protein",
    calories: 135,
    protein: 30,
    carbs: 0,
    fat: 1,
    fiber: 0,
    sugar: 0,
    sodium: 1040,
    serving_size: "100g"
  },
  {
    id: 47,
    name: "Pork Tenderloin",
    brand: "",
    category: "Protein",
    calories: 143,
    protein: 26,
    carbs: 0,
    fat: 3.5,
    fiber: 0,
    sugar: 0,
    sodium: 62,
    serving_size: "100g cooked"
  },
  
  // Condiments & Seasonings
  {
    id: 48,
    name: "Honey",
    brand: "",
    category: "Sweeteners",
    calories: 304,
    protein: 0.3,
    carbs: 82,
    fat: 0,
    fiber: 0.2,
    sugar: 82,
    sodium: 4,
    serving_size: "100g"
  },
  {
    id: 49,
    name: "Ketchup",
    brand: "",
    category: "Condiments",
    calories: 112,
    protein: 1.7,
    carbs: 27,
    fat: 0.1,
    fiber: 0.3,
    sugar: 23,
    sodium: 1110,
    serving_size: "100g"
  },
  {
    id: 50,
    name: "Mustard",
    brand: "",
    category: "Condiments",
    calories: 66,
    protein: 3.7,
    carbs: 7.1,
    fat: 3.3,
    fiber: 3.3,
    sugar: 2.8,
    sodium: 1135,
    serving_size: "100g"
  },
  
  // Breakfast Items
  {
    id: 51,
    name: "Pancakes",
    brand: "",
    category: "Breakfast",
    calories: 227,
    protein: 6.2,
    carbs: 28,
    fat: 10,
    fiber: 1.5,
    sugar: 5.9,
    sodium: 439,
    serving_size: "100g"
  },
  {
    id: 52,
    name: "Bacon",
    brand: "",
    category: "Protein",
    calories: 541,
    protein: 37,
    carbs: 1.4,
    fat: 42,
    fiber: 0,
    sugar: 0,
    sodium: 1717,
    serving_size: "100g cooked"
  },
  
  // Frozen Foods
  {
    id: 53,
    name: "Frozen Mixed Vegetables",
    brand: "",
    category: "Vegetables",
    calories: 65,
    protein: 2.6,
    carbs: 13,
    fat: 0.4,
    fiber: 4.4,
    sugar: 4.9,
    sodium: 32,
    serving_size: "100g"
  },
  {
    id: 54,
    name: "Ice Cream (Vanilla)",
    brand: "",
    category: "Desserts",
    calories: 207,
    protein: 3.5,
    carbs: 24,
    fat: 11,
    fiber: 0.7,
    sugar: 21,
    sodium: 80,
    serving_size: "100g"
  },
  
  // Asian Foods
  {
    id: 55,
    name: "Soy Sauce",
    brand: "",
    category: "Condiments",
    calories: 8,
    protein: 1.3,
    carbs: 0.8,
    fat: 0,
    fiber: 0.1,
    sugar: 0.4,
    sodium: 5493,
    serving_size: "100ml"
  },
  {
    id: 56,
    name: "White Rice (Sushi)",
    brand: "",
    category: "Grains",
    calories: 130,
    protein: 2.4,
    carbs: 29,
    fat: 0.2,
    fiber: 0.3,
    sugar: 0,
    sodium: 1,
    serving_size: "100g cooked"
  },
  
  // Mexican Foods
  {
    id: 57,
    name: "Corn Tortilla",
    brand: "",
    category: "Grains",
    calories: 218,
    protein: 5.7,
    carbs: 45,
    fat: 2.9,
    fiber: 6.3,
    sugar: 1.1,
    sodium: 12,
    serving_size: "100g"
  },
  {
    id: 58,
    name: "Salsa",
    brand: "",
    category: "Condiments",
    calories: 36,
    protein: 1.6,
    carbs: 7,
    fat: 0.2,
    fiber: 1.4,
    sugar: 4.1,
    sodium: 430,
    serving_size: "100g"
  },
  
  // More Dairy
  {
    id: 59,
    name: "Cottage Cheese",
    brand: "",
    category: "Dairy",
    calories: 98,
    protein: 11,
    carbs: 3.4,
    fat: 4.3,
    fiber: 0,
    sugar: 2.7,
    sodium: 364,
    serving_size: "100g"
  },
  {
    id: 60,
    name: "Butter",
    brand: "",
    category: "Dairy",
    calories: 717,
    protein: 0.9,
    carbs: 0.1,
    fat: 81,
    fiber: 0,
    sugar: 0.1,
    sodium: 11,
    serving_size: "100g"
  },
  
  // Soups
  {
    id: 61,
    name: "Chicken Noodle Soup",
    brand: "",
    category: "Soups",
    calories: 62,
    protein: 3.1,
    carbs: 8.6,
    fat: 1.9,
    fiber: 0.5,
    sugar: 1.1,
    sodium: 343,
    serving_size: "100ml"
  },
  {
    id: 62,
    name: "Tomato Soup",
    brand: "",
    category: "Soups",
    calories: 74,
    protein: 1.6,
    carbs: 16,
    fat: 1.6,
    fiber: 1.4,
    sugar: 10,
    sodium: 471,
    serving_size: "100ml"
  },
  
  // Cereals
  {
    id: 63,
    name: "Cornflakes",
    brand: "",
    category: "Breakfast",
    calories: 357,
    protein: 7.5,
    carbs: 84,
    fat: 0.9,
    fiber: 3,
    sugar: 8.3,
    sodium: 660,
    serving_size: "100g"
  },
  {
    id: 64,
    name: "Granola",
    brand: "",
    category: "Breakfast",
    calories: 471,
    protein: 13,
    carbs: 64,
    fat: 20,
    fiber: 7,
    sugar: 21,
    sodium: 267,
    serving_size: "100g"
  },
  
  // Pizza & Fast Food
  {
    id: 65,
    name: "Pizza (Cheese)",
    brand: "",
    category: "Fast Food",
    calories: 266,
    protein: 11,
    carbs: 33,
    fat: 10,
    fiber: 2.3,
    sugar: 3.8,
    sodium: 598,
    serving_size: "100g"
  },
  {
    id: 66,
    name: "French Fries",
    brand: "",
    category: "Fast Food",
    calories: 365,
    protein: 4,
    carbs: 63,
    fat: 17,
    fiber: 3.8,
    sugar: 0.3,
    sodium: 246,
    serving_size: "100g"
  },
  
  // Beverages (Non-Alcoholic)
  {
    id: 67,
    name: "Orange Juice",
    brand: "",
    category: "Beverages",
    calories: 45,
    protein: 0.7,
    carbs: 10,
    fat: 0.2,
    fiber: 0.2,
    sugar: 8.1,
    sodium: 1,
    serving_size: "100ml"
  },
  {
    id: 68,
    name: "Coca Cola",
    brand: "Coca-Cola",
    category: "Beverages",
    calories: 42,
    protein: 0,
    carbs: 11,
    fat: 0,
    fiber: 0,
    sugar: 11,
    sodium: 2,
    serving_size: "100ml"
  },
  
  // Herbs & Spices
  {
    id: 69,
    name: "Garlic",
    brand: "",
    category: "Vegetables",
    calories: 149,
    protein: 6.4,
    carbs: 33,
    fat: 0.5,
    fiber: 2.1,
    sugar: 1,
    sodium: 17,
    serving_size: "100g"
  },
  {
    id: 70,
    name: "Ginger",
    brand: "",
    category: "Vegetables",
    calories: 80,
    protein: 1.8,
    carbs: 18,
    fat: 0.8,
    fiber: 2,
    sugar: 1.7,
    sodium: 13,
    serving_size: "100g"
  },
  
  // Baked Goods
  {
    id: 71,
    name: "Bagel",
    brand: "",
    category: "Grains",
    calories: 250,
    protein: 10,
    carbs: 49,
    fat: 1.7,
    fiber: 2.1,
    sugar: 5.1,
    sodium: 430,
    serving_size: "100g"
  },
  {
    id: 72,
    name: "Croissant",
    brand: "",
    category: "Grains",
    calories: 406,
    protein: 8.2,
    carbs: 45,
    fat: 21,
    fiber: 2.6,
    sugar: 8.2,
    sodium: 424,
    serving_size: "100g"
  },
  
  // Seafood (continued)
  {
    id: 73,
    name: "Cod",
    brand: "",
    category: "Protein",
    calories: 105,
    protein: 23,
    carbs: 0,
    fat: 0.9,
    fiber: 0,
    sugar: 0,
    sodium: 78,
    serving_size: "100g cooked"
  },
  {
    id: 74,
    name: "Crab",
    brand: "",
    category: "Protein",
    calories: 97,
    protein: 19,
    carbs: 0,
    fat: 1.5,
    fiber: 0,
    sugar: 0,
    sodium: 395,
    serving_size: "100g cooked"
  },
  
  // Dried Fruits
  {
    id: 75,
    name: "Raisins",
    brand: "",
    category: "Fruits",
    calories: 299,
    protein: 3.1,
    carbs: 79,
    fat: 0.5,
    fiber: 3.7,
    sugar: 59,
    sodium: 11,
    serving_size: "100g"
  },
  {
    id: 76,
    name: "Dates",
    brand: "",
    category: "Fruits",
    calories: 277,
    protein: 1.8,
    carbs: 75,
    fat: 0.2,
    fiber: 6.7,
    sugar: 66,
    sodium: 1,
    serving_size: "100g"
  },
  
  // Energy Bars
  {
    id: 77,
    name: "Protein Bar",
    brand: "",
    category: "Snacks",
    calories: 350,
    protein: 20,
    carbs: 35,
    fat: 12,
    fiber: 5,
    sugar: 15,
    sodium: 200,
    serving_size: "100g"
  },
  {
    id: 78,
    name: "Granola Bar",
    brand: "",
    category: "Snacks",
    calories: 471,
    protein: 6.1,
    carbs: 64,
    fat: 22,
    fiber: 4.4,
    sugar: 29,
    sodium: 79,
    serving_size: "100g"
  },
  
  // Smoothie Ingredients
  {
    id: 79,
    name: "Protein Powder (Whey)",
    brand: "",
    category: "Supplements",
    calories: 413,
    protein: 82,
    carbs: 8.7,
    fat: 7.8,
    fiber: 0,
    sugar: 8.7,
    sodium: 440,
    serving_size: "100g"
  },
  {
    id: 80,
    name: "Coconut Milk",
    brand: "",
    category: "Dairy Alternatives",
    calories: 230,
    protein: 2.3,
    carbs: 6,
    fat: 24,
    fiber: 0,
    sugar: 3.3,
    sodium: 15,
    serving_size: "100ml"
  },
  
  // International Foods
  {
    id: 81,
    name: "Hummus",
    brand: "",
    category: "Dips",
    calories: 166,
    protein: 8,
    carbs: 14,
    fat: 10,
    fiber: 6,
    sugar: 0.3,
    sodium: 379,
    serving_size: "100g"
  },
  {
    id: 82,
    name: "Falafel",
    brand: "",
    category: "Protein",
    calories: 333,
    protein: 13,
    carbs: 32,
    fat: 18,
    fiber: 4.9,
    sugar: 1.9,
    sodium: 294,
    serving_size: "100g"
  },
  
  // Pickled Foods
  {
    id: 83,
    name: "Pickles",
    brand: "",
    category: "Vegetables",
    calories: 11,
    protein: 0.3,
    carbs: 2.3,
    fat: 0.2,
    fiber: 1.2,
    sugar: 1.1,
    sodium: 1208,
    serving_size: "100g"
  },
  {
    id: 84,
    name: "Sauerkraut",
    brand: "",
    category: "Vegetables",
    calories: 19,
    protein: 0.9,
    carbs: 4.3,
    fat: 0.1,
    fiber: 2.9,
    sugar: 1.8,
    sodium: 661,
    serving_size: "100g"
  },
  
  // Meat Alternatives
  {
    id: 85,
    name: "Veggie Burger",
    brand: "",
    category: "Protein",
    calories: 172,
    protein: 11,
    carbs: 15,
    fat: 7.8,
    fiber: 4.2,
    sugar: 1.1,
    sodium: 398,
    serving_size: "100g"
  },
  {
    id: 86,
    name: "Tempeh",
    brand: "",
    category: "Protein",
    calories: 190,
    protein: 19,
    carbs: 9,
    fat: 11,
    fiber: 9,
    sugar: 0,
    sodium: 9,
    serving_size: "100g"
  },
  
  // Frozen Treats
  {
    id: 87,
    name: "Frozen Yogurt",
    brand: "",
    category: "Desserts",
    calories: 127,
    protein: 3.5,
    carbs: 28,
    fat: 0.9,
    fiber: 0,
    sugar: 20,
    sodium: 63,
    serving_size: "100g"
  },
  {
    id: 88,
    name: "Popsicle",
    brand: "",
    category: "Desserts",
    calories: 37,
    protein: 0,
    carbs: 9.7,
    fat: 0,
    fiber: 0,
    sugar: 8.8,
    sodium: 3,
    serving_size: "100g"
  },
  
  // Cooking Ingredients
  {
    id: 89,
    name: "Flour (All-Purpose)",
    brand: "",
    category: "Baking",
    calories: 364,
    protein: 10,
    carbs: 76,
    fat: 1,
    fiber: 2.7,
    sugar: 0.3,
    sodium: 2,
    serving_size: "100g"
  },
  {
    id: 90,
    name: "Sugar (White)",
    brand: "",
    category: "Sweeteners",
    calories: 387,
    protein: 0,
    carbs: 100,
    fat: 0,
    fiber: 0,
    sugar: 100,
    sodium: 0,
    serving_size: "100g"
  },
  
  // Specialty Items
  {
    id: 91,
    name: "Chia Seeds",
    brand: "",
    category: "Seeds",
    calories: 486,
    protein: 17,
    carbs: 42,
    fat: 31,
    fiber: 34,
    sugar: 0,
    sodium: 16,
    serving_size: "100g"
  },
  {
    id: 92,
    name: "Flax Seeds",
    brand: "",
    category: "Seeds",
    calories: 534,
    protein: 18,
    carbs: 29,
    fat: 42,
    fiber: 27,
    sugar: 1.6,
    sodium: 30,
    serving_size: "100g"
  },
  
  // Energy Drinks
  {
    id: 93,
    name: "Energy Drink",
    brand: "",
    category: "Beverages",
    calories: 45,
    protein: 0,
    carbs: 11,
    fat: 0,
    fiber: 0,
    sugar: 11,
    sodium: 105,
    serving_size: "100ml"
  },
  {
    id: 94,
    name: "Sports Drink",
    brand: "",
    category: "Beverages",
    calories: 25,
    protein: 0,
    carbs: 6,
    fat: 0,
    fiber: 0,
    sugar: 6,
    sodium: 41,
    serving_size: "100ml"
  },
  
  // Final Items
  {
    id: 95,
    name: "Coconut",
    brand: "",
    category: "Fruits",
    calories: 354,
    protein: 3.3,
    carbs: 15,
    fat: 33,
    fiber: 9,
    sugar: 6.2,
    sodium: 20,
    serving_size: "100g"
  },
  {
    id: 96,
    name: "Watermelon",
    brand: "",
    category: "Fruits",
    calories: 30,
    protein: 0.6,
    carbs: 8,
    fat: 0.2,
    fiber: 0.4,
    sugar: 6.2,
    sodium: 1,
    serving_size: "100g"
  },
  {
    id: 97,
    name: "Cantaloupe",
    brand: "",
    category: "Fruits",
    calories: 34,
    protein: 0.8,
    carbs: 8,
    fat: 0.2,
    fiber: 0.9,
    sugar: 7.9,
    sodium: 16,
    serving_size: "100g"
  },
  {
    id: 98,
    name: "Kiwi",
    brand: "",
    category: "Fruits",
    calories: 61,
    protein: 1.1,
    carbs: 15,
    fat: 0.5,
    fiber: 3,
    sugar: 9,
    sodium: 3,
    serving_size: "100g"
  },
  {
    id: 99,
    name: "Papaya",
    brand: "",
    category: "Fruits",
    calories: 43,
    protein: 0.5,
    carbs: 11,
    fat: 0.3,
    fiber: 1.7,
    sugar: 7.8,
    sodium: 8,
    serving_size: "100g"
  },
  {
    id: 100,
    name: "Pomegranate",
    brand: "",
    category: "Fruits",
    calories: 83,
    protein: 1.7,
    carbs: 19,
    fat: 1.2,
    fiber: 4,
    sugar: 14,
    sodium: 3,
    serving_size: "100g"
  },
  {
    id: 101,
    name: "Biryani with Vegetables",
    brand: "",
    category: "Main Dishes",
    calories: 165,
    protein: 4.2,
    carbs: 32,
    fat: 2.8,
    fiber: 2.1,
    sugar: 3.5,
    sodium: 420,
    serving_size: "100g"
  }
];

// Helper function to search foods
export function searchFoods(query, limit = 10) {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const searchTerm = query.toLowerCase().trim();
  
  const results = foodDatabase.filter(food => 
    food.name.toLowerCase().includes(searchTerm) ||
    food.category.toLowerCase().includes(searchTerm) ||
    food.brand.toLowerCase().includes(searchTerm)
  );
  
  return results.slice(0, limit);
}

// Helper function to get food by ID
export function getFoodById(id) {
  return foodDatabase.find(food => food.id === parseInt(id));
}

// Helper function to get foods by category
export function getFoodsByCategory(category, limit = 20) {
  const results = foodDatabase.filter(food => 
    food.category.toLowerCase() === category.toLowerCase()
  );
  
  return results.slice(0, limit);
}

// Helper function to get all categories
export function getAllCategories() {
  const categories = [...new Set(foodDatabase.map(food => food.category))];
  return categories.sort();
}