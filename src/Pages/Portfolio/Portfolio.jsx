import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPaperPlane, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const genres = ['All', 'Web App', 'Frontend', 'Backend(Node.js)', 'Backend(Django)'];

    useEffect(() => {
        fetch('/Allprojects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setFiltered(data);
            });
    }, []);

    const handleFilter = (item) => {
        setActiveFilter(item);
        if (item === 'All') {
            setFiltered(projects);
            return;
        }
        const temp = projects.filter(p => p.genre === item);
        setFiltered(temp);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className='w-full bg-white min-h-screen'>
            {/* Header Section */}
            <div className='bg-gradient-to-br from-[#FFF5E6] to-white w-full py-16 px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='max-w-4xl mx-auto text-center space-y-6'
                >
                    <h1 className='font-black text-5xl text-gray-800 font-heading'>My Projects</h1>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                        Welcome to my portfolio. Here you'll find a collection of projects showcasing my skills in web development.
                        I'm currently available for freelance work. Want help building your software?
                    </p>

                    <div className='pt-4'>
                        <NavLink to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='btn bg-[#EEA73B] hover:bg-[#d89430] border-none text-white font-bold px-8 gap-2'
                            >
                                <FaPaperPlane />
                                <span>Hire Me</span>
                            </motion.button>
                        </NavLink>
                    </div>
                </motion.div>
            </div>

            {/* Filter Section */}
            <div className='max-w-7xl mx-auto px-8 py-12'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='flex flex-wrap justify-center gap-3 mb-12'
                >
                    {genres.map(item => (
                        <motion.button
                            key={item}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleFilter(item)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                activeFilter === item
                                    ? 'bg-[#EEA73B] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {item}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-center mb-8'
                >
                    <p className='text-gray-600 font-medium'>
                        Showing <span className='text-[#EEA73B] font-bold'>{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode='popLayout'>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    >
                        {filtered.map(item => {
                            const { id, image_link, project_heading, description } = item;
                            return (
                                <motion.div
                                    key={id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200'
                                >
                                    {/* Project Image */}
                                    <div className='relative h-56 overflow-hidden bg-gray-100'>
                                        <img
                                            src={image_link}
                                            alt={project_heading}
                                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                                        />
                                        {/* Overlay */}
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                                        {/* Hover Buttons */}
                                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0'>
                                            <button className='bg-white text-[#EEA73B] px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl hover:bg-[#EEA73B] hover:text-white transition-colors'>
                                                <FaExternalLinkAlt />
                                                <span>View Live</span>
                                            </button>
                                            <button className='bg-gray-900 text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl hover:bg-gray-800 transition-colors'>
                                                <FaGithub />
                                                <span>Source Code</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className='p-6'>
                                        <h3 className='text-xl font-bold text-gray-800 mb-3 font-heading group-hover:text-[#EEA73B] transition-colors line-clamp-1'>
                                            {project_heading}
                                        </h3>
                                        <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                                            {description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='text-center py-20'
                    >
                        <p className='text-gray-500 text-lg'>No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;