
import React from 'react'
import ProductCard from '../components/ProductCard'

function Products() {
       const Electronics = [
    { name: "Smartphone", price: "$699", image: "/phone.jpg" },
    { name: "Laptop", price: "$850", image: "/laptop.jpg" },
    { name: "Wireless Headphones", price: "$75", image: "/headphones.jpg" },
    { name: "Smart Watch", price: "$90", image: "/watch.jpg" },
  ];

  const Fashion = [
    { name: "Casual T-Shirt", price: "$25", image: "/tshirt.jpg" },
    { name: "Sneakers", price: "$60", image: "/shoes.jpg" },
    { name: "Winter Jacket", price: "$120", image: "/jacket.jpg" },
    { name: "Classic Dress", price: "$70", image: "/dress.jpg" },
  ];

  const Accessories = [
    { name: "Leather Wallet", price: "$30", image: "/wallet.jpg" },
    { name: "Stylish Bag", price: "$45", image: "/bag.jpg" },
    { name: "Sun Glasses", price: "$25", image: "/sunglasses.jpg" },
    { name: "Gold Necklace", price: "$150", image: "/necklace.jpg" },
  ];
  
  return (
    <>
        <h2 className='flex justify-center items-center mt-4 text-orange-600 font-bold text-2xl sm:text-2xl md:text-3xl lg:text-5x'>Product Card</h2>
      {Products.map((product, index) => (
        <ProductCard 
        key={index} 
        name={product.name} 
        price={product.price}
        image={product.image}/>
      ))}
    </>
  )
}

export default Products

