import {Link}from'react-router-dom';


function Navbar(){
    return(
        <nav className='flex flex-col md:flex-row justify-between text-white  bg-orange-500   shadow-lg px-2 py-4 gap-6 m-2 rounded-lg transition-all hover:scale-105 duration-300'>
            <p className='text-2xl sm:text-2xl md:text-4xl lg:text-5xl'>Winter Fashion</p>
         <Link to='/'>Home</Link>
         <Link to='/About'>About</Link>
          <Link to='/Products'>Products</Link>
         <Link to='/Contact'>Contact</Link>
        
        </nav>
    )
}export default Navbar;