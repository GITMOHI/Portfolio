import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";



const Nav = () => {
    return (
        <div className='mt-4 '>
           <div className=' flex flex-col items-center ' >
               <div className='flex flex-col space-y-4'>
                  <div className='flex flex-row gap-2 items-center font-bold'>
                  <CgProfile className='font-bold'></CgProfile>
                  <NavLink
                     to="/aboutme"
                     className={({ isActive }) =>
                        isActive ? 'text-gray-900' : 'text-white hover:text-gray-300'
                     }
                  >
                     About Me
                  </NavLink>
                  </div>
                  <div className='flex flex-row gap-2 items-center font-bold'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                           isActive ? 'text-gray-900' : 'text-white hover:text-gray-300'
                        }
                     >
                        Projects
                     </NavLink>
                  </div>
                  <div className='flex flex-row gap-2 items-center font-bold'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                           isActive ? 'text-gray-900' : 'text-white hover:text-gray-300'
                        }
                     >
                        Resume
                     </NavLink>
                  </div>
                  <div className='flex flex-row gap-2 items-center font-bold'>
                     <FaBriefcase></FaBriefcase>
                     <NavLink
                        to="/workexperience"
                        className={({ isActive }) =>
                           isActive ? 'text-gray-900' : 'text-white hover:text-gray-300'
                        }
                     >
                        Work Experience
                     </NavLink>
                  </div>
                  <div className='flex flex-row gap-2 items-center font-bold'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                           isActive ? 'text-gray-900' : 'text-white hover:text-gray-300'
                        }
                     >
                        Blog
                     </NavLink>
                  </div>
                  <div className='flex flex-row gap-2 items-center font-bold'>
                     <FaLaptopCode></FaLaptopCode>
                     <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                           isActive ? 'text-gray-900' : 'text-white hover:text-gray-300'
                        }
                     >
                        Contact
                     </NavLink>
                  </div>

                  <div className='pb-8'>
                     <NavLink to="/contact">
                        <button className="btn hover:bg-gray-700 text-base bg-[#377681] border-none text-white font-bold"> <FaRegPaperPlane></FaRegPaperPlane> Hire Me</button>
                     </NavLink>
                  </div>
               
               
               </div>
           </div>
        </div>
    );
};

export default Nav;