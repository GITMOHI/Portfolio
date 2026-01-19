import React, { useEffect, useState } from 'react';
import Skill from './Skill';
import { FaArrowRight } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';




const Skills = () => {
   
    const [mySkills,setmySkills] = useState([]);
    useEffect(()=>{
        fetch('../../../public/skills.json')
        .then(res=>res.json())
        .then(data=>{
           setmySkills(data);
        })
    },[]);

    console.log(mySkills[0]);


    return (
        <div className='mt-20 px-8 max-w-7xl mx-auto'>
            <div className='space-y-6 mb-12'>
                <h2 className='text-4xl font-bold text-neutral-900 tracking-tight'>
                    What I do
                </h2>
                <p className='text-lg text-neutral-600 leading-relaxed max-w-3xl'>
                  I have more than 10 years' experience building software for clients all over the world. Below is a
                  quick overview of my main technical skill sets and technologies I use.
                  Want to find out more about my experience? Check out my online resume and project portfolio.
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8'>
               {
                  mySkills.map(s=><Skill key = {s.name} s={s}></Skill>)
               }
            </div>

        </div>
    );
};

export default Skills;