import React from "react";

function ProductCard({ name, price, image }) {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 m-5 text-yellow-400 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 w-full max-w-xs">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-yellow-400 text-lg font-bold">{name}</h2>
        <p className="text-yellow-400 font-semibold">{price}</p>

        {/* Add to Cart Button */}
        <button
          className="mt-3 w-full bg-yellow-400 hover:bg-yellow-700 text-white py-2 rounded-lg transition duration-300"
          onClick={() => alert(`You added ${name} to your cart!`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
