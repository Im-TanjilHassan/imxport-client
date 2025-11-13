import React, { useState } from "react";
import Swal from "sweetalert2";

const AddExport = () => {
    const [productData, setProductData] = useState({
      productName: "",
      price: "",
      imageUrl: "",
      quantity: "",
      category: "",
      description: "",
      origin: "",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const status =
      parseInt(productData.quantity) > 0 ? "available" : "Out of Stock";
    const createdAt = new Date().toISOString();

    const finalProduct = { ...productData, status, createdAt };

    // you can replace this with your backend API endpoint
    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalProduct),
      });

      if (res.ok) {
        Swal.fire({
          title: "Success!",
          text: "Product added successfully!",
          icon: "success",
          confirmButtonColor: "#4CAF50",
        });
        setProductData({
          productName: "",
          price: "",
          imageUrl: "",
          quantity: "",
          category: "",
          description: "",
          origin: "",
        });
      } else {
        Swal.fire("Error", "Failed to add product", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-gray-300 shadow-lg rounded-2xl">
      {/* Title and Description */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-primary">Add New Product</h2>
        <p className="text-gray-500 mt-2">
          Fill out the details below to add a new product to your collection.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleAddProduct} className="space-y-5">
        {/* Product Name and Price */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Product Name</span>
            </label>
            <input
              type="text"
              name="productName"
              value={productData.productName}
              onChange={handleChange}
              placeholder="Enter product name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price (৳)</span>
            </label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Image URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Image URL</span>
          </label>
          <input
            type="text"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Quantity, Category, Origin */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              placeholder="e.g. Electronics, Fashion..."
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Origin</span>
            </label>
            <input
              type="text"
              name="origin"
              value={productData.origin}
              onChange={handleChange}
              placeholder="Country of origin"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            placeholder="Write a short description..."
            className="textarea textarea-bordered w-full h-24"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full mt-4 text-lg font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddExport;
