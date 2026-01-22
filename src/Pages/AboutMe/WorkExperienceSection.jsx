import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WorkExperienceSection = () => {
    return (
        <div className='mt-12 mb-12'>
            {/* Section Divider */}
            <div className='flex items-center justify-center mb-12'>
                <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
                <div className='px-6 py-2 bg-[#5BC3D5] text-white font-bold rounded-full text-sm shadow-md'>
                    MY JOURNEY
                </div>
                <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
            </div>

            <div className='ml-8 lg:ml-16'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className='space-y-3 mb-8'>
                    <div className='border-l-4 pl-4 border-[#5BC3D5] text-3xl py-1 font-bold'>
                        Work Experience
                    </div>
                    <div className='w-5/6 text-gray-700'>
                        Currently working at Lab3 as a Junior Software Engineer, contributing to innovative web solutions.
                    </div>
                </div>

                {/* Compact Timeline View */}
                <div className='bg-gradient-to-r from-[#5BC3D5]/10 to-transparent rounded-2xl p-6 pr-4 lg:pr-16 relative overflow-hidden'>
                    {/* Background decoration */}
                    <div className='absolute top-0 right-0 w-32 h-32 bg-[#5BC3D5]/5 rounded-full -mr-16 -mt-16'></div>

                    {/* Timeline Line */}
                    <div className='absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#5BC3D5] to-[#5BC3D5]/30'></div>

                    <div className='relative space-y-6'>
                        {/* Current Position */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className='flex items-start gap-4 relative'
                        >
                            {/* Timeline Dot */}
                            <div className='relative z-10 mt-1.5'>
                                <div className='w-4 h-4 rounded-full bg-[#5BC3D5] border-4 border-white shadow-md'></div>
                                <div className='absolute inset-0 w-4 h-4 rounded-full bg-[#5BC3D5] animate-ping opacity-40'></div>
                            </div>

                            <div className='flex-1 bg-white rounded-xl p-4 shadow-md border border-[#5BC3D5]/20'>
                                <div className='flex items-start justify-between gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <img
                                            src="../../../public/images/lab3.png"
                                            alt="Lab3"
                                            className='w-10 h-10 object-contain'
                                        />
                                        <div>
                                            <h3 className='text-lg font-bold text-gray-800 font-heading'>
                                                Junior Software Engineer
                                            </h3>
                                            <p className='text-[#5BC3D5] font-semibold text-sm'>Lab3 • 2024 - Present</p>
                                        </div>
                                    </div>
                                    <span className='bg-[#5BC3D5] text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap'>
                                        CURRENT
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Previous Position */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className='flex items-start gap-4 relative'
                        >
                            {/* Timeline Dot */}
                            <div className='w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm mt-1.5 relative z-10'></div>

                            <div className='flex-1 bg-white rounded-xl p-4 shadow-md border border-gray-200'>
                                <div className='flex items-center gap-3'>
                                    <img
                                        src="../../../public/images/lab3.png"
                                        alt="Lab3"
                                        className='w-10 h-10 object-contain'
                                    />
                                    <div>
                                        <h3 className='text-lg font-bold text-gray-800 font-heading'>
                                            Software Engineer Intern
                                        </h3>
                                        <p className='text-gray-600 font-semibold text-sm'>Lab3 • 2023 - 2024</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* View More Button */}
                <div className='flex justify-center mt-8 lg:-ml-16'>
                    <Link to="/workexperience">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='btn bg-[#5BC3D5] hover:bg-[#398d9c] border-none text-white font-bold px-6 gap-2'
                        >
                            <span>View Full Experience Timeline</span>
                            <FaArrowRight />
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
            </div>
        </div>
    );
};

export default WorkExperienceSection;
