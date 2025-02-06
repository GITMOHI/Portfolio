import React, { useEffect, useState } from 'react';
import FeatProject from './FeatProject';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const FeaturedProjects = () => {

    const [featProj,setfetProj]=useState([]);
    useEffect(()=>{
        fetch('../../../public/FeatProjects.json')
        .then(res=>res.json())
        .then(data=>setfetProj(data));
    },[]);

    return (
        <div className='mt-16 ml-8 lg:ml-16 mr-8 lg:mr-16'>
    
              <hr className='w-[100%] mb-16 text-center'></hr>
         
            <div className='space-y-3 mb-8 lg:mb-14'>
                <div className=' border-l-4 pl-4 border-[#5BC3D5] text-3xl py-1 font-bold '>
                    Featured Projects
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-7 grid-cols-1 space-x-5 space-y-4'>
               {
                 featProj.map(fp=><FeatProject key={fp.image_link} fp={fp}></FeatProject>)
               }
            </div>


            
            <div className='flex flex-row justify-center mt-16 mb-16'>
               <NavLink to="/portfolio"><button className="btn  bg-[#5BC3D5] hover:bg-[#398d9c]"><div className='mr-1 md:mr-2 rounded-full bg-white p-1'><FaArrowRight className=' bg-white font-bold  text-sm md:text-xl text-[#5BC3D5]'></FaArrowRight></div> <p className='font-bold text-white text-sm md:text-base flex flex-row items-center'><p className='hidden lg:block mr-2'>View </p> Portfolio</p></button></NavLink> 
            </div>


            

        </div>
    );
};

export default FeaturedProjects;