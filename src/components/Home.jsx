import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; 


function Home() {
  const products = [
    { name: "Smart Watch", price: "$90", image: "/watch.jpg" },
    { name: "Wireless Headphones", price: "$75", image: "/headphones.jpg" },
    { name: "Casual T-Shirt", price: "$25", image: "/tshirt.jpg" },
    { name: "Sneakers", price: "$60", image: "/shoes.jpg" },
    { name: "Laptop", price: "$850", image: "/laptop.jpg" },
    { name: "Home Decor Lamp", price: "$40", image: "/lamp.jpg" },
    { name: "Winter Jacket", price: "$120", image: "/jacket.jpg" },
    { name: "Smartphone", price: "$699", image: "/phone.jpg" },
  ];

  return (
    <div className='bg-gray-900'>
    <div className='min-h-screen bg-cover bg-center  p-6'>
      
      {/* Hero Section */}
      <section className='text-yellow-300 font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl rounded-lg bg-black/40 mt-4 p-6 text-center'>
        <h1>Welcome to Djaria Shop — your one-stop destination!</h1>
        <h1>For fashion, electronics, and home essentials</h1>
        
      <Link
            to="/products"
            className="bg-yellow-500 text-white italic mt-4 rounded-lg py-2 px-4 hover:scale-105 transition-transform duration-300 inline-block"
          >
            Shop Now
          </Link>
      </section>

      {/* Product Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            name={product.name} 
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
