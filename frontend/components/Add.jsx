// filepath: c:\Users\Simerjeet Singh\e-commerce\food-app\frontend\components\Add.jsx
import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    category: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const foodData = {
      name: formState.name || "",
      description: formState.description || "",
      price: formState.price || 0,
      countInStock: formState.countInStock || 0,
      category: formState.category || "",
    };

    try {
      const response = await axios.post("http://localhost:3000/api/foods/upload", foodData);
      console.log("✅ Upload Success:", response.data);
    } catch (error) {
      console.error("❌ Upload Error:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={onChangeHandler}
        placeholder="Name"
        required
      />
      <textarea
        name="description"
        value={formState.description}
        onChange={onChangeHandler}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="price"
        value={formState.price}
        onChange={onChangeHandler}
        placeholder="Price"
        required
      />
      <input
        type="number"
        name="countInStock"
        value={formState.countInStock}
        onChange={onChangeHandler}
        placeholder="Count in Stock"
        required
      />
      <input
        type="text"
        name="category"
        value={formState.category}
        onChange={onChangeHandler}
        placeholder="Category"
        required
      />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default Add;