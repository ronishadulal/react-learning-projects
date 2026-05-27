'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Card = ({ products}) => {
  const router = useRouter();
  function callMe(){
  if (products?.id) {
  router.push(`/ecommerce/${products.id}`);
} 
   
  }
  return (
    <div onClick={callMe} className="w-64 bg-white shadow-md rounded-xl p-4 m-4 border border-gray-200 hover:shadow-lg transition">
      
      {/* Product Image */}
      <img
        src={products.image_url}
        alt={products.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      {/* Category */}
      <div className="text-xs text-gray-500 mb-1">
        {products.category}
      </div>

      {/* Product Name */}
      <h2 className="text-lg font-semibold mb-1">
        {products.name}
      </h2>

      {/* Rating */}
      <div className="flex items-center text-sm text-yellow-500 mb-1">
        ⭐ {products.rating}
        <span className="text-gray-500 ml-2">
          ({products.reviews_count} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="text-lg font-bold text-green-600 mb-2">
        ${products.price}
      </div>

      {/* Stock Status */}
      <div className={`text-sm mb-2 ${products.in_stock ? 'text-green-500' : 'text-red-500'}`}>
        {products.in_stock ? 'In Stock' : 'Out of Stock'}
      </div>

      {/* Colors */}
      <div className="flex flex-wrap gap-1 mb-2">
        {products.colors.map((color, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 px-2 py-1 rounded"
          >
            {color}
          </span>
        ))}
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap gap-1">
        {products.sizes.map((size, index) => (
          <span
            key={index}
            className="text-xs border px-2 py-1 rounded"
          >
            {size}
          </span>
        ))}
      </div>

    </div>
  );
};

export default Card;