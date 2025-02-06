import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";



const Nav = () => {
    return (
        <div className='mt-4 '>
           <div className=' flex flex-col items-center ' >
               <div className='flex flex-col space-y-4'>
                  <div className='flex flex-row gap-2 items-center font-bold hover:text-gray-700'>
                  <CgProfile className='font-bold'></CgProfile> 
                  <NavLink to="/aboutme">About Me</NavLink>
                  </div>
                  <div  className='flex flex-row gap-2 items-center font-bold hover:text-gray-700'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink to="/portfolio">Portfolio</NavLink>
                  </div>
                  <div  className='flex flex-row gap-2 items-center font-bold hover:text-gray-700'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink to="/resume">Resume</NavLink>
                  </div>
                  <div  className='flex flex-row gap-2 items-center font-bold hover:text-gray-700'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink to="/portfolio">Services & pricing</NavLink>
                  </div>
                  <div  className='flex flex-row gap-2 items-center font-bold hover:text-gray-700'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink to="/portfolio">Blog</NavLink>
                  </div>
                  <div  className='flex flex-row gap-2 items-center font-bold hover:text-gray-700'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink to="/portfolio">Contact</NavLink>
                  </div>
                  <div  className='flex flex-row gap-2 items-center font-bold hover:text-gray-700'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink to="/portfolio">More Pages</NavLink>
                  </div>

                  <div className=''>
                    
                     <button className="btn hover:bg-gray-700 text-base bg-[#377681] border-none text-white font-bold"> <FaRegPaperPlane></FaRegPaperPlane> Hire Me</button>
                  </div>
                  
                  <div  className='pb-8'>
                     <div className='flex flex-row gap-2 text-white font-bold'>
                        <BsCircleHalf></BsCircleHalf>
                        <p>Dark Mode</p>
                     </div>
                 </div>
               
               
               </div>
           </div>
        </div>
    );
};

export default Nav;