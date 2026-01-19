import React from 'react';
import { FaArrowRight, FaFileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className='bg-gradient-to-b from-white to-neutral-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-12 px-8 py-16 lg:py-24'>
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='w-full lg:w-1/2 space-y-8'
                    >
                        <div className='space-y-4'>
                            <div className='inline-block'>
                                <span className='px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold border border-primary-200'>
                                    Available for opportunities
                                </span>
                            </div>

                            <h1 className='text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-tight'>
                                Mohi
                            </h1>

                            <p className='text-xl lg:text-2xl text-neutral-600 font-medium'>
                                Junior Software Engineer at Lab3
                            </p>

                            <p className='text-lg text-neutral-600 leading-relaxed max-w-xl'>
                                I'm a Junior Software Engineer at Lab3, specializing in frontend and backend development for
                                complex scalable web apps. I write about software development on my blog. Want to know how I may
                                help your project? Check out my project portfolio and online resume.
                            </p>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='group px-8 py-4 bg-neutral-900 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center'
                                >
                                    <span>View Projects</span>
                                    <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
                                </motion.button>
                            </Link>

                            <Link to="/resume">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='px-8 py-4 bg-white border-2 border-neutral-300 text-neutral-900 rounded-lg font-semibold hover:border-neutral-900 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center'
                                >
                                    <FaFileAlt />
                                    <span>View Resume</span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='w-full lg:w-1/2'
                    >
                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-tr from-primary-200 to-accent-200 rounded-2xl transform rotate-3'></div>
                            <img
                                src="../../../public/images/bn2.jpeg"
                                className='relative w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl'
                                alt="Mohi"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;