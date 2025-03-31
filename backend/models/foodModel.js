// filepath: c:\Users\Simerjeet Singh\e-commerce\food-app\backend\models\foodModel.js
import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  imageUrl: { type: String, default: "" },  // Make imageUrl optional
  category: { type: String, required: true },
}, { timestamps: true });

const Food = mongoose.model('Food', foodSchema);

export default Food;