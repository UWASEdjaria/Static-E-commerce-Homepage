import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center text-yellow-500 bg-gray-900 border transition-all hover:scale-105 duration-300 ease-in-out w-full bg-amber-400shadow-lg px-4 py-4 rounded-lg'>
      <p className='text-2xl sm:text-2xl md:text-4xl lg:text-4xl italic font-bold'>Jaja Shop</p>
      <div className='flex flex-row space-x-6'>
        <Link className='hover:text-orange-500 transition-colors duration-300' to='/'>Home</Link>
        <Link className='hover:text-orange-500 transition-colors duration-300' to='/about'>About</Link>
        <Link className='hover:text-orange-500 transition-colors duration-300' to='/products'>Products</Link>
        <Link className='hover:text-orange-500 transition-colors duration-300' to='/contact'>Contact</Link>

      </div>
    </nav>
  );
}

export default Navbar;
