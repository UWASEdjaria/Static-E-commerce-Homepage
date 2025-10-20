import React from 'react';

function Contact() {
  return (
    <section className="flex flex-col min-h-screen bg-gray-900 p-10 md:p-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">Contact Us</h2>
      <p className="text-yellow-400 mb-6">Have questions or need help? Reach out to us!</p>
     
      {/* Simple Contact Information */}
      <p className="text-yellow-300 mb-1">Email: jaja345@gmail.com</p>
      <p className="text-yellow-300 mb-1">Address: 123 Main Street, Kigali, Rwanda</p>
      <p className="text-yellow-300 mb-6">WhatsApp: +250 700 000 000</p>
      
      <form className="bg-gray-800 w-full max-w-md mx-auto flex flex-col gap-4 p-6 rounded-lg shadow-lg">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-3 border border-gray-600 rounded-lg shadow-lg text-white placeholder-gray-400 transition-all hover:scale-105 duration-300 ease-in-out"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="p-3 border border-gray-600 rounded-md text-white placeholder-gray-400 transition-all hover:scale-105 duration-300 ease-in-out"
        />
        <textarea 
          placeholder="Your Message" 
          className="p-3 border border-gray-600 rounded-md text-white placeholder-gray-400 transition-all hover:scale-105 duration-300 ease-in-out"
          rows="4"
        />
        <button 
          type="submit" 
          className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-bold transition-all hover:scale-105 duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
