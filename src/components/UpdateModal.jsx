import Swal from "sweetalert2";

const UpdateModal = ({ product, onClose, onUpdate }) => {
  if (!product) return null;

    const {
      _id,
    productName,
    imageUrl,
    price,
    category,
    origin,
    quantity,
    description,
    } = product;
    
    console.log(product);
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedProduct = {
      productName: form.productName.value,
      imageUrl: form.imageUrl.value,
      category: form.category.value,
      price: form.price.value,
      origin: form.origin.value,
      quantity: form.quantity.value,
      description: form.description.value,
    };

    try {
      const res = await fetch(`http://localhost:3000/exports/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
        const data = await res.json();

      if (
        data.exportResult?.modifiedCount > 0 ||
        data.exportResult?.matchedCount > 0
      ) {
        Swal.fire({
          title: "Updated!",
          text: "Product updated successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        onUpdate(_id, updatedProduct);
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Update Product</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Name and Price */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                defaultValue={productName}
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
                defaultValue={price}
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
              defaultValue={imageUrl}
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
                defaultValue={quantity}
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
                defaultValue={category}
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
                defaultValue={origin}
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
              defaultValue={description}
              placeholder="Write a short description..."
              className="textarea textarea-bordered w-full h-24"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" onClick={onClose} className="btn btn-outline">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateModal;
