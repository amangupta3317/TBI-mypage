import React from 'react';
import tbi from './tbi.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
        <div class="nav bg-white mx-auto flex flex-wrap p-3 flex-col sticky top-0 z-10">
     
            <ul class="flex justify-start">
                <li className='px-3'>
                    <img className='w-9 h-9' src={tbi} alt="tbi" />
                </li>
                <li class="mr-10 ">
                    <a class="text-2xl font-bold text-red-400 hover:text-blue" href="https://tbi.geu.ac.in/">TBI</a>
                </li>
                <li class="mr-6 pt-1 text-lg hover:bg-yellow-200">
                    {/* <a class="text-black hover:text-blue-800" href="#">Home</a> */}
                    <Link className='hover:text-red-600 ' to="/">Home</Link>
                </li>
                <li class="mr-6 pt-1 text-lg hover:bg-yellow-200">
                    {/* <a class="text-black hover:text-blue-800" href="#">About us</a> */}
                    <Link className='hover:text-red-600' to="/">About Us</Link>
                </li>
                <li class="ml-6 mr-1 pt-1 text-lg hover:bg-yellow-200">
                    {/* <a class="text-black " href="#">Contact</a> */}
                    <Link className='hover:text-red-600' to="https://geu.ac.in/contact/">Contact</Link>
                </li>
                <li className="ml-auto">
                    <Link to="/contact">
                    <button className="bg-blue-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded">
                        Enroll Now
                    </button>
                    </Link>
                </li>
            </ul>
</div>

  );
}

export default Navbar;
