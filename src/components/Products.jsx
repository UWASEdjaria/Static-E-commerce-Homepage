
import React from 'react'
import ProductCard from '../components/ProductCard'

function Products() {
       const Electronics = [
    { name: "Smartphone", price: "$699", image: "/phone.jpg" },
   
  ];

  const Fashion = [
  
    { name: "Classic Dress", price: "$70", image: "/dress.jpg" },
  ];

  const Accessories = [
    { name: "Leather Wallet", price: "$30", image: "/wallet.jpg" },
   
    
  ];
   const HomeDecor = [
    { name: "Decorative Lamp", price: "$40", image: "/lamp.jpg" },
  
  ];
  const Beauty = [
    { name: "Perfume", price: "$70", image: "/perfume.jpg" },
  ];
  const Kitchenware = [
    { name: "Cooking Pan", price: "$50", image: "/pan.jpg" },
  
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

