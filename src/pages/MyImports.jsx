import React, { useContext, useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const MyImports = () => {
  const [imports, setImports] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchImports = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/import?email=${user.email}`
        );
        const data = await res.json();
        setImports(data);
      } catch (error) {
        console.error("Error fetching imports:", error);
      }
    };
    fetchImports();

    document.title = "ImXport | MyImports"
  }, [user.email]);

  //remove product
  const handleRemove = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to remove this product from your imports.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/import/${id}`, {
            method: "DELETE",
          });
          const result = await res.json();
          if (result.deletedCount > 0) {
            setImports(imports.filter((item) => item._id !== id));
            Swal.fire("Removed!", "Product has been removed.", "success");
          }
        } catch (error) {
          Swal.fire("Error", "Failed to remove product.", error.message);
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-secondary mb-2">
            My Imported Products
          </h1>
          <p className="text-gray-500">
            Here you can see all the products you’ve imported from different
            suppliers.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-xl rounded-xl bg-base-200 ">
          {imports.length === 0 ? (
            <div className="text-center text-gray-500 text-2xl font-semibold h-screen py-10">
              <p>No Imported Product Found</p>
            </div>
          ) : (
            <table className="table w-full">
              <thead className="bg-primary text-white text-center">
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price(BDT)</th>
                  <th>Origin</th>
                  <th>Imported Quantity</th>
                  <th>Imported Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {imports.map((product) => (
                  <ProductTable
                    key={product.productId}
                    product={product}
                    handleRemove={handleRemove}
                  ></ProductTable>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyImports;
