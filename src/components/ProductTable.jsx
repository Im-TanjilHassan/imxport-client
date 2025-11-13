import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ProductTable = ({ product, handleRemove }) => {
  const {
      _id,
      productId,
    productName,
    imageUrl,
    price,
    rating,
    origin,
    importedQuantity,
    importDate,
    } = product;

  return (
    <tr className="hover:bg-gray-200 text-center font-semibold">
      <td>
        <img
          src={imageUrl}
          alt={productName}
          className="w-16 h-16 object-cover rounded-md"
        />
      </td>
      <td className="font-semibold">{productName}</td>
      <td>{price}</td>
      <td>{origin}</td>
      <td>{rating}</td>
      <td>{importedQuantity}</td>
      <td>{importDate}</td>
      <td className="flex py-7 justify-between gap-2">
        <button
          onClick={() => handleRemove(_id)}
          className="btn btn-sm btn-error text-white"
        >
          Remove
        </button>
        <Link to={`/allProducts/${productId}`}>
          <button className="btn btn-sm btn-secondary text-white">
            See Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ProductTable;
