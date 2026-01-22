import React, { useEffect, useState } from 'react';
import Skill from './Skill';
import { FaArrowRight } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';




const Skills = () => {
   
    const [mySkills,setmySkills] = useState([]);
    useEffect(()=>{
        fetch('/skills.json')
        .then(res=>res.json())
        .then(data=>{
           setmySkills(data);
        })
    },[]);

    console.log(mySkills[0]);


    return (
        <div className='mt-8 ml-8 lg:ml-16'>
            <div className='space-y-3'>
                <div className=' border-l-4 pl-4 border-[#5BC3D5] text-3xl py-1 font-bold '>
                    What I do
                </div>
                <div className='w-5/6'>
                  I have more than 10 years' experience building software for clients all over the world. Below is a
                  quick overview of my main technical skill sets and technologies I use.
                  Want to find out more about my experience? Check out my online resume and project portfolio.
                </div>
            </div>


            <div className='grid grid-cols-2  lg:grid-cols-4 gap-10 mt-14 pr-4 lg:pr-16 mb-8'>
               {
                  mySkills.map(s=><Skill key = {s.name} s={s}></Skill>)
               }
            </div>

        </div>
    );
};

export default Skills;