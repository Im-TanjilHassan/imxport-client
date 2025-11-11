import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const {_id, productName, imageUrl, price, origin, status, quantity } = product;

  const [heart, setHeart] = useState(false);

  return (
    <div className="card bg-base-100 transition-all duration-300 border rounded-2xl rounded-tr-[4rem] shadow-xl/30 p-2">
      <div className=" flex justify-between items-center p-4">
        <h2 className="text-secondary font-bold text-xl">{productName}</h2>
        <div
          onClick={() => setHeart(!heart)}
          className="border rounded-full text-xl p-1 cursor-pointer"
        >
          <FaRegHeart
            className={`hover:text-red-500 ${heart && "text-red-500"}`}
          />
        </div>
      </div>
      <figure className="h-56">
        <img
          src={imageUrl}
          alt={productName}
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <div className=" grid grid-cols-2 justify-center items-center gap-2">
          <p className="text-md font-semibold text-gray-600">
            Price: <span className="font-medium text-lg">{price} $</span>
          </p>
          <p className="text-md text-gray-600 font-semibold">
            Origin: <span className="text-lg font-bold">{origin}</span>
          </p>
          <p className="text-md text-gray-600 font-semibold">
            Status: <span className="text-lg font-bold">{status}</span>
          </p>
          <p className="text-md text-gray-600 font-semibold">
            Available:{" "}
            <span className="text-lg font-bold">{quantity} pice</span>
          </p>
        </div>
        <div className="card-actions justify-end mt-3">
          <Link to={`/allProducts/${_id}`} className="w-full">
            <button className="btn btn-sm btn-secondary hover:btn-primary w-full">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
