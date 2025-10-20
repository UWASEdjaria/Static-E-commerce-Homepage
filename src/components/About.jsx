import React from 'react';

function About() {
  return (
    <div>
    <section className="flex flex-col justify-center items-center min-h-screen px-6 md:px-12 bg-gray-900"
    style={{ backgroundImage: "url('contact.jpg')" }}>
      <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-6 text-center">About Us</h2>
      
      <p className="text-white text-lg md:text-xl leading-relaxed text-center max-w-3xl mb-6">
        Welcome to our store! From trendy clothes to must-have accessories,
         we have everything you need to look your best and feel great. Quality, style, 
         and comfort are always our priority.
      </p>
      
      <p className="text-white text-lg md:text-xl leading-relaxed text-center max-w-3xl">
        Explore a wide range of products across our categories:
        <ul className="list-disc list-inside mt-2">
          <li>Electronics – Smartphones, Smart Watches, Laptops</li>
          <li>Fashion – Dresses, Jackets, T-Shirts, Sneakers</li>
          <li>Accessories – Wallets, Bags, Scarves</li>
          <li>Home Decor – Lamps, Wall Art, Decorative Items</li>
          <li>Beauty & Skincare – Perfumes, Creams, Accessories</li>
          <li>Kitchenware – Cooking Pans, Utensils, Essentials</li>
        </ul>
      </p>
    </section>
    </div>
  );
}

export default About;
