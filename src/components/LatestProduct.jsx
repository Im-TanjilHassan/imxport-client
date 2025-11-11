import React from 'react';
import ProductCard from './ProductCard';

const LatestProduct = ({ products }) => {
    console.log(products);
    
    return (
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-base-100">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Our Latest Products
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover our newest arrivals — handpicked with premium quality and
            stylish design, ready to make your collection stand out.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </section>
    );
};

export default LatestProduct;