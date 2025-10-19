import React from "react";

function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-purple-600 font-semibold">{price}</p>

        {/* Add to Cart Button */}
        <button
          className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300"
          onClick={() => alert(`You added ${name} to your cart!`)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
