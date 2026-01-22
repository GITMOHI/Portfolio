import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
    const [featProj, setfetProj] = useState([]);

    useEffect(() => {
        fetch('../../../public/FeatProjects.json')
            .then(res => res.json())
            .then(data => setfetProj(data));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className='mt-16 mb-12'>
            {/* Section Divider */}
            <div className='flex items-center justify-center mb-12'>
                <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
                <div className='px-6 py-2 bg-[#EEA73B] text-white font-bold rounded-full text-sm shadow-md'>
                    FEATURED WORK
                </div>
                <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
            </div>

            <div className='ml-8 lg:ml-16 mr-8 lg:mr-16'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='space-y-3 mb-10'
                >
                    <div className='border-l-4 pl-4 border-[#EEA73B] text-3xl py-1 font-bold'>
                        Featured Projects
                    </div>
                    <div className='w-5/6 text-gray-700'>
                        A selection of my best work showcasing my skills in web development and design.
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid md:grid-cols-2 gap-6'
                >
                    {featProj.map((fp, index) => (
                        <motion.div
                            key={fp.image_link}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200'
                        >
                            {/* Project Image */}
                            <div className='relative h-52 overflow-hidden bg-gray-100'>
                                <img
                                    src={fp.image_link}
                                    alt={fp.project_heading}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                {/* View Project Badge */}
                                <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                                    <div className='bg-white text-[#EEA73B] px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg'>
                                        <span>View Project</span>
                                        <FaExternalLinkAlt className='text-xs' />
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-gray-800 mb-3 font-heading group-hover:text-[#EEA73B] transition-colors'>
                                    {fp.project_heading}
                                </h3>
                                <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
                                    {fp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <div className='flex justify-center mt-12'>
                    <NavLink to="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='btn bg-[#EEA73B] hover:bg-[#d89430] border-none text-white font-bold px-8 gap-2'
                        >
                            <span>View All Projects</span>
                            <FaArrowRight />
                        </motion.button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;