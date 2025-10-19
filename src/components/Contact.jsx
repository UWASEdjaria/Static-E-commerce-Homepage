
import React from 'react';

function Contact() {
  return (
    <section className="bg-white p-10 md:p-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">Have questions or need help? Reach out to us!</p>
      
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <textarea 
          placeholder="Your Message" 
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          rows="4"
        />
        <button 
          type="submit" 
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
