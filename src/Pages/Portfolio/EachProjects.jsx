import React from 'react';
import { FaEye } from "react-icons/fa6";
import { AnimatePresence,motion } from 'framer-motion';


const EachProjects = ({p}) => {

    const handlehover =(heading)=>{
        const element = document.getElementById(heading);
        // console.log(element);
        const list = element.classList;
        list.remove('hidden');
        list.add('absolute');
       
        const idd = heading+'layer';
        const e1 =  document.getElementById(idd);
        const l1 = e1.classList;
        l1.add('bg-[#0f0e0e]');
        l1.add('ease-in-out');
        l1.add('duration-700');
        l1.add('opacity-30');
        console.log(e1);

    } 

    const handlehoverleave =(heading)=>{
        const element = document.getElementById(heading);
        // console.log(element);
        const list = element.classList;
        list.remove('absolute');
        list.add('hidden');

        const idd = heading+'layer';
        const e1 =  document.getElementById(idd);
        const l1 = e1.classList;
        l1.remove('bg-[#0f0e0e]');
        l1.remove('opacity-30');
        console.log(e1);


    } 

    const{id,image_link,project_heading,description}=p;
    return (

        <div onMouseEnter={()=>{handlehover(project_heading)}} onMouseLeave={()=>{handlehoverleave(project_heading)}} className=' h-50 overflow-hidden relative flex flex-col  lg:flex-row items-start gap-4 bg-[#FAFAFA] border rounded-xl '>
           
            <div id={project_heading+"layer"} className='layer z-10 flex flex-col items-center justify-center   absolute w-full h-full transition ease-in-out cursor-pointer duration-200'>
            </div>


             <div id={project_heading} className=' z-50 w-[30%] hidden top-[30%] left-[40%] '>
                
               <p><button className=' hover:bg-white btn font-bold bg-white mb-3 flex flex-row w-52 text-base'><FaEye></FaEye>View Case Study</button></p>
               <p><button className=' hover:bg-white btn cursor-pointer font-bold bg-white text-blue-500 text-center  w-[70%] '>Live Link</button></p>
                
             </div>
            
            <img src={image_link} className='w-56 h-44' alt="" />
            <div className='space-y-2 p-4'>
                <h2 className='font-bold text-xl'>{project_heading}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default EachProjects;