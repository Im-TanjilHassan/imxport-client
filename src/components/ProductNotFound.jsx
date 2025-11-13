import React from 'react';

const ProductNotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 text-center">
        {/* Text Section */}
        <h1 className="text-6xl font-extrabold text-primary mt-6">404</h1>
        <h2 className="text-2xl font-semibold mt-2 text-base-content">
          Oops! Product Not Found 😢
        </h2>
        <p className="max-w-md text-base-content/70 mt-3">
          The product you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
    );
};

export default ProductNotFound;