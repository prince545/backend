import React, { useState } from 'react';
import axios from 'axios';
import './Add.css';

const Add = () => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    category: 'Salad',
    price: '',
    countInStock: '',
    image: null,
    imagePreview: null,
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (formData.imagePreview) {
        URL.revokeObjectURL(formData.imagePreview);
      }
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate and ensure all fields are properly set
    if (!formData.productName || !formData.description || !formData.price || !formData.countInStock || !formData.image) {
      alert("Please fill in all required fields.");
      return;
    }

    if (isNaN(formData.price) || isNaN(formData.countInStock)) {
      alert("Price and Count In Stock must be valid numbers.");
      return;
    }

    const data = new FormData();
    data.append("productName", formData.productName);
    data.append("description", formData.description);
    data.append("price", parseFloat(formData.price)); // Ensure price is a number
    data.append("countInStock", parseInt(formData.countInStock, 10)); // Ensure countInStock is an integer
    data.append("category", formData.category);
    data.append("image", formData.image);

    try {
      const response = await axios.post("http://localhost:3000/api/foods/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("✅ Upload Success:", response.data);
    } catch (error) {
      console.error("❌ Upload Error:", error.response?.data || error.message);
      if (error.response?.status === 400) {
        console.error("❌ Bad Request Details:", error.response.data);
      }
      alert(`Error: ${error.response?.data?.error || "Server error"}`);
    }
  };

  return (
    <div className="add-container">
      <h2>Add New Product</h2>
      <form onSubmit={onSubmitHandler} className="add-form">
        <div className="image-upload">
          <label htmlFor="image" className="image-placeholder">
            Upload Image
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} hidden />
          </label>
          {formData.imagePreview && <img src={formData.imagePreview} alt="Preview" className="image-preview" />}
        </div>

        <div className="form-group">
          <label>Product Name</label>
          <input type="text" name="productName" value={formData.productName} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Product Description</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Product Category</label>
            <select name="category" value={formData.category} onChange={handleInputChange}>
              {['Salad', 'Rolls', 'Desserts', 'Sandwich', 'Cake', 'Pure Veg', 'Pasta', 'Noodles'].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Count In Stock</label>
            <input type="number" name="countInStock" value={formData.countInStock} onChange={handleInputChange} required />
          </div>
        </div>

        <button type="submit" className="add-button">ADD</button>
      </form>
    </div>
  );
};

export default Add;