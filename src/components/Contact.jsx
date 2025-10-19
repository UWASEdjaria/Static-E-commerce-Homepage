import React from 'react';

function Contact() {
  return (
    <section className="flex flex-col min-h-screen bg-gray-900 p-10 md:p-20 text-center">
      <h2 className="text-yellow-300text-3xl md:text-4xl font-bold mb-4 text-yellow-500">Contact Us</h2>
      <p className="text-yellow-400 mb-6">Have questions or need help? Reach out to us!</p>
      
      <form className="bg-gray-800 w-full max-w-md mx-auto flex flex-col gap-4 p-6 rounded-lg shadow-lg">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-3 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="p-3 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-500"
        />
        <textarea 
          placeholder="Your Message" 
          className="p-3 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-500"
          rows="4"
        />
        <button 
          type="submit" 
          className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-bold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
