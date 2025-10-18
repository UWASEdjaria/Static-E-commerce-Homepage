import React from 'react'

function Home() {
  return (
    
    <div className='flex  justify-center items-center m-4 p-2 gap-4 bg-cover bg-center min-h-screen w-full'
    style={{backgroundImage:'url(fashion.jpg)'}}>
      
      {/* Banner or hero Section */}
      <section className='block text-orange-600 font-bold text-2xl sm:text-2xl md:text-3xl lg:text-5xl rounded-lg  bg-black/40  mt-4 p-6'>
        <h1>NEW ARRIVALS</h1>
        <h1>60 % OFF</h1>
        
      </section>
      
  
    </div>
    
  )
}

export default Home