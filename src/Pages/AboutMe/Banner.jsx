import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-evenly'>
                <div className='w-full lg:w-3/5 flex flex-col items-start ml-8 lg:-ml-20 lg:pt-10 pb-12 lg:pb-24'>
                    <div>
                        <h1 className='font-black text-4xl mb-2'>Mohi</h1>
                        <p className='text-2xl font-thin mb-4'>Junior Software Engineer at Lab3</p>
                        <p>I'm a Junior Software Engineer at Lab3, specializing in frontend and backend development for
                            complex scalable web apps. I write about software development on my blog. Want to know how I may
                            help your project? Check out my project portfolio and online resume.</p>
                    </div>

                    <div className='flex lg:flex-row gap-4 mt-8'>
                        <Link to="/projects">
                            <button className="btn md:btn-wide bg-[#5BC3D5] hover:bg-[#398d9c] border-none">
                                <div className='mr-1 md:mr-2 rounded-full bg-white p-1'>
                                    <FaArrowRight className='bg-white font-bold text-sm md:text-xl text-[#5BC3D5]'></FaArrowRight>
                                </div>
                                <p className='font-bold text-white text-sm md:text-base flex flex-row items-center'>
                                    <p className='hidden lg:block'>View</p> Projects
                                </p>
                            </button>
                        </Link>
                        <Link to="/resume">
                            <button className="btn md:btn-wide bg-[#3C3C3C] hover:bg-[#222121] border-none">
                                <div className='mr-1 md:mr-2 rounded-full bg-white p-1'>
                                    <IoDocumentTextOutline className='bg-white font-bold text-sm md:text-xl'></IoDocumentTextOutline>
                                </div>
                                <p className='font-bold text-white text-sm md:text-base flex flex-row items-center'>
                                    <p className='hidden lg:block'>View</p> Resume
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='px-8'>
                    <img src="../../../public/images/bn2.jpeg" className='w-full h-80 md:h-96 lg:py-10' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;