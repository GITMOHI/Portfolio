import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const Blogs = () => {

    const [blogs,setblogs]=useState([]);
    useEffect(()=>{
        fetch('../../../public/blog.json')
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[]);


    return (

        <div className='mt-16 ml-8 lg:ml-16 mr-8 lg:mr-16'>
            <div className='space-y-3 mb-8 lg:mb-14'>
                <div className=' border-l-4 pl-4 border-[#5BC3D5] text-3xl py-1 font-bold '>
                    Latest Blogs
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                blogs.map(b=><Blog key={b.blog_name} b = {b}></Blog>)
            }
            </div>

            <div className='flex flex-row justify-center mt-16 mb-16'>
               <NavLink to="/portfolio"><button className="btn  bg-[#5BC3D5] hover:bg-[#398d9c] border-none"><div className='mr-1 md:mr-2 rounded-full bg-white p-1'><FaArrowRight className=' bg-white font-bold  text-sm md:text-xl text-[#5BC3D5]'></FaArrowRight></div> <p className='font-bold text-white text-sm md:text-base flex flex-row items-center'><p className='hidden lg:block mr-2'>View </p> Blogs</p></button></NavLink> 
            </div>

        </div>

    );
};

export default Blogs;