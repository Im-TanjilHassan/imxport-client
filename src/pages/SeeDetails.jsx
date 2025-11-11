import React from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { FaStar, FaGlobe, FaBoxOpen, FaMoneyBillWave } from "react-icons/fa";

const SeeDetails = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader></Loader>;
  }

  if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  const {
    imageUrl,
      productName,
    category,
    description,
    price,
    origin,
    rating,
    quantity,
  } = product;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full md:w-[85%] rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Right Info */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-secondary">{productName}</h1>

          <div>
            <p className="font-semibold text-gray-500 text-xl">
              Category
            </p>
            <p className="text-secondary font-bold">{category}</p>
          </div>

          <div className="flex items-center space-x-12">
            {/* Rating */}
            <div className="flex-col justify-center items-center gap-2 rounded-xl space-y-3">
              <FaStar className="text-yellow-500 mx-auto text-2xl" />
              <span className="font-medium">{rating} / 5</span>
            </div>

            {/* Origin + Quantity */}
            <div className="flex-col justify-center items-center gap-2 rounded-xl space-y-3">
              <FaGlobe className="text-secondary mx-auto text-2xl" />
              <p className="font-semibold">{origin}</p>
            </div>
            <div className="flex-col justify-center items-center gap-2 rounded-xl space-y-3">
              <FaBoxOpen className="text-secondary mx-auto text-2xl" />
              <p className="font-semibold">Available: {quantity}</p>
            </div>
          </div>
          {/* Price */}
          <div className="flex items-center gap-2 text-2xl font-bold text-primary">
            <FaMoneyBillWave size={22} />
            {price} BDT
          </div>

                  {/* Button */}
                  {
                      quantity < 0 ? (
                      <button className="btn btn-primary btn-wide mt-4 text-lg font-semibold" disabled={true}>
            Import Now
          </button>
   ) : (<button className="btn btn-secondary hover:btn-primary btn-wide mt-4 text-lg font-semibold">
            Import Now
          </button>)
                  }
          
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 bg-base-200 p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">About this product</h2>
        <p className="text-base text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SeeDetails;
