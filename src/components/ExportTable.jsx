import React from 'react';
import { Link } from 'react-router';

const ExportTable = ({
  product,
  handleDelete,
  handleOpenModal,
}) => {
  const { _id, productName, imageUrl, price, origin, quantity, createdAt } =
    product;
  return (
    <tr
      className="hover:bg-primary-content text-center font-semibold"
    >
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
      <td>{quantity}</td>
      <td>{createdAt}</td>
      <td className="flex py-7 justify-around gap-2">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-error text-white"
        >
          Delete
        </button>
        <button
          onClick={() => handleOpenModal(product)}
          className="btn btn-sm bg-orange-400 text-white"
        >
          Update
        </button>
        <Link to={`/allProducts/${_id}`}>
          <button className="btn btn-sm btn-secondary text-white">
            See Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ExportTable;