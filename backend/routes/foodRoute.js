import express from 'express';
import multer from 'multer';
import Food from '../models/foodModel.js';
import { listFood, removeFood } from '../controller/foodcontroller.js';

const foodRouter = express.Router();

// Setup Multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save images in "uploads" folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// POST request to add a food item with image upload
foodRouter.post("/upload", upload.single("image"), async (req, res) => {
  const { name, description, price, countInStock, category } = req.body;

  // Validate required fields
  if (!name || !description || !price || !countInStock || !category) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const food = new Food({
      name,
      description,
      price,
      countInStock,
      category,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : "", // Save image path
    });

    await food.save();
    res.status(200).json({ message: "Food item added successfully", food });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
