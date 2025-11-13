import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://imxport-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.title = "InXport | All Products";
  }, []);

  return (
    <div className="min-h-screen py-10 px-5 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-secondary">
          Our Products
        </h1>
        <p className="text-base md:text-lg text-paragraph mt-3 max-w-2xl mx-auto">
          Explore our latest imported and exported products, crafted with
          premium quality and available at the best prices.
        </p>
      </div>

      {/* Search + Count */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-paragraph text-sm md:text-base">
          Showing{" "}
          <span className="font-semibold">{filteredProducts.length}</span> of{" "}
          <span className="font-semibold">{products.length}</span> products
        </p>

        <div className="w-full md:w-1/3">
          <label className="input w-full input-bordered flex items-center gap-2 rounded-full">
            <input
              type="text"
              placeholder="Search by product name..."
              className="grow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 opacity-70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default AllProducts;
