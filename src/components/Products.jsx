import React from 'react'
import ProductCard from './Components/ProductCard'

function Products() {
  const   Products=[
      {name: "Winter Jacket", price: "$120", image: "fashion1.jpg" },
      {name: "Cozy Sweater", price: "$60", image: "fashion2.jpg" },
      {name: "Leather Boots", price: "$90", image: "fashion3.jpg" },
      {name: "Wool Scarf", price: "$25", image: "fashion4.jpg" },
      {name: "Beanie Hat", price: "$20", image: "fashion5.jpg" },
      {name: "Denim Jacket", price: "$80", image: "fashion6.jpg" },
      {name: "Gloves Set", price: "$30", image: "fashion7.jpg" },
      {name: "Winter Coat", price: "$150", image: "fashion8.jpg" },
  ]
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {Products.map((product, index) => (
        <ProductCard 
        key={index} 
        name={product.name} 
        price={product.price}
        image={product.image}/>
      ))}
    </div>
  )
}

export default Products