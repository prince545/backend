import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
    let image_filename = req.file.filename;
    const food = new foodModel({
        name: req.body.name,
        image: image_filename,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });
    food.save()
        .then(() => {
            res.status(200).json({ message: "Food item added successfully" });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
            fs.unlinkSync(req.file.path); // Delete the file if there is an error
        });
}

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.status(200).json(foods);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const removeFood = async (req, res) => {
    try {
        const { id } = req.body;

        // Validate the id
        if (!id) {
            return res.status(400).json({ error: "Food ID is required." });
        }

        // Remove the food item by ID
        const deletedFood = await foodModel.findByIdAndDelete(id);

        if (!deletedFood) {
            return res.status(404).json({ error: "Food item not found." });
        }

        res.status(200).json({ message: "Food item removed successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export { addFood, listFood, removeFood };