import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader"
import ExportTable from "../components/ExportTable";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [exportsData, setExportsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    const fetchExports = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/exports?email=${user.email}`
        );
        const data = await res.json();
        setExportsData(data);
      } catch (error) {
        console.error("Error fetching export data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExports();
  }, [user]);
    
    console.log(exportsData);
    

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:5000/exports/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your export has been deleted.", "success");
          setExportsData(exportsData.filter((item) => item._id !== id));
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to delete product.", "error");
      }
    }
  };

  const handleUpdate = () => {
    Swal.fire(
      "Feature Coming Soon!",
      "Update feature is under development.",
      "info"
    );
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">
          My Exported Products
        </h1>
        <p className="text-gray-500">
          Here you can see all the products you’ve exported, manage them easily,
          or update information.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border shadow-xl rounded-xl bg-base-200">
        <table className="table w-full">
          <thead className="bg-primary text-white text-center">
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price (BDT)</th>
              <th>Origin</th>
              <th>Available Quantity</th>
              <th>Exported Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exportsData.length > 0 ? (
              exportsData.map((product) => (
                <ExportTable
                  key={product._id}
                  product={product}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                ></ExportTable>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-gray-500 py-6">
                  No export products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyExports;
