import React, { useEffect, useRef } from "react";

const ImportModal = ({
  open,
  onClose,
  onSubmit,
  defaultValue = "",
  importQuantity,
}) => {
  const inputRef = useRef(null);

  // focus input when modal opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  if (!open) return null; // don't render anything if not open

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-md">
        <h3 className="font-bold text-lg">Import Quantity</h3>
        <p className="text-sm text-gray-500 mb-4">
          Enter the number of items you want to import for this product.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            ref={inputRef}
            name="quantity"
            type="number"
            min="1"
            defaultValue={defaultValue}
            placeholder="Enter quantity"
            className="input input-bordered w-full"
            onChange={(e)=>importQuantity(e.target.value)}
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* modal backdrop clickable area — closes on clicking */}
      <div
        className="modal-backdrop"
        onClick={onClose}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImportModal;
