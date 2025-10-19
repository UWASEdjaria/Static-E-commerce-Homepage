import React from 'react';
import ProductCard from '../components/ProductCard';

function Products() {
  const Electronics = [{ name: "Smartphone", price: "$699", image: "phone.jpg" }];
  const Fashion = [{ name: "Classic Dress", price: "$70", image: "dress.jpg" }];
  const Accessories = [{ name: "Leather Wallet", price: "$30", image: "wallet.jpg" }];
  const HomeDecor = [{ name: "Decorative Lamp", price: "$40", image: "decorative lamp.jpg" }];
  const Beauty = [{ name: "Perfume", price: "$70", image: "perfume.jpg" }];
  const Kitchenware = [{ name: "Cooking Pan", price: "$50", image: "pan.jpg" }];

  const Products = [
    ...Electronics,
    ...Fashion,
    ...Accessories,
    ...HomeDecor,
    ...Beauty,
    ...Kitchenware
  ];

  return (
    <div className='bg-gray-900'>
      <h2 className='flex justify-center items-center mt-4 text-yellow-600 font-bold text-2xl md:text-3xl lg:text-5xl'>
        Product Card
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6'>
        {Products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
