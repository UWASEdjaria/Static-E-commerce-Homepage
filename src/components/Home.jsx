import React from 'react'
import ProductCard from '../components/Products'

function Home() {
  
   const Products = [
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
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-cover bg-center min-h-screen'>
      
      {/* Banner or hero Section */}
      <section className='block text-orange-600 font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl rounded-lg  bg-black/40  mt-4 p-6'>
        <h1>Welcome to Djaria Shop — your one-stop destination!</h1>
        <h1>for fashion, electronics, and home essentials</h1>
        
      </section>
      {/*product cards*/}


      <button className="flex justify-center items-end bg-orange-500 text-white italic  mt-4 rounded-lg py-2 px-2 transition-all cursor-pointer hover:scale-105 duration-300">Shop now</button>
     
    </div>
    
  )
}

export default Home