import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            title: "Junior Software Engineer",
            company: "Lab3",
            type: "Full-time",
            duration: "2024 - Present",
            description: "Working as a Junior Software Engineer, leading frontend development initiatives and contributing to full-stack web applications. Collaborating with cross-functional teams to deliver high-quality scalable solutions.",
            responsibilities: [
                "Developing and maintaining React-based web applications",
                "Building RESTful APIs using Node.js and Express",
                "Collaborating with design and backend teams",
                "Code review and mentoring junior developers"
            ],
            current: true
        },
        {
            id: 2,
            title: "Software Engineer Intern",
            company: "Lab3",
            type: "Internship",
            duration: "2023 - 2024",
            description: "Started my journey at Lab3 as an intern, where I gained hands-on experience in modern web development practices and contributed to multiple client projects.",
            responsibilities: [
                "Implemented responsive UI components using React",
                "Worked on bug fixes and feature enhancements",
                "Participated in daily standups and sprint planning",
                "Learned industry best practices and coding standards"
            ],
            current: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]'>
            {/* Timeline Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='max-w-5xl mx-auto px-8 py-12'
            >
                {/* Simple Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-center mb-16'
                >
                    <h1 className='text-4xl font-black text-gray-800 mb-3 font-heading'>Work Experience</h1>
                    <p className='text-lg text-gray-600'>My professional journey at Lab3</p>
                </motion.div>
                <div className='relative'>
                    {/* Vertical Timeline Line */}
                    <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5BC3D5] via-[#4a9fb0] to-gray-300 transform -translate-x-1/2'></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className={`relative mb-16 ${
                                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                            }`}
                        >
                            {/* Timeline Dot */}
                            <div className='absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#5BC3D5] z-10 shadow-lg'>
                                {exp.current && (
                                    <div className='absolute inset-0 rounded-full bg-[#5BC3D5] animate-ping opacity-75'></div>
                                )}
                            </div>

                            {/* Content Card */}
                            <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className={`bg-white rounded-2xl shadow-xl p-8 border-l-4 ${
                                        exp.current
                                            ? 'border-[#5BC3D5]'
                                            : 'border-gray-300'
                                    }`}
                                >
                                    {/* Current Badge */}
                                    {exp.current && (
                                        <div className='inline-block mb-4'>
                                            <span className='bg-gradient-to-r from-[#5BC3D5] to-[#4a9fb0] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md'>
                                                CURRENT POSITION
                                            </span>
                                        </div>
                                    )}

                                    {/* Company Logo and Header */}
                                    <div className='flex items-start gap-4 mb-4'>
                                        <div className='bg-white p-3 rounded-xl shadow-md border border-gray-200'>
                                            <img
                                                src="../../../public/images/lab3.png"
                                                alt={exp.company}
                                                className='w-14 h-14 object-contain'
                                            />
                                        </div>
                                        <div className='flex-1'>
                                            <h2 className='text-2xl font-bold text-gray-800 font-heading mb-1'>
                                                {exp.title}
                                            </h2>
                                            <p className='text-lg text-[#5BC3D5] font-semibold mb-1'>
                                                {exp.company}
                                            </p>
                                            <div className='flex flex-wrap gap-2 items-center'>
                                                <span className='text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full'>
                                                    {exp.type}
                                                </span>
                                                <span className='text-sm font-semibold text-gray-700'>
                                                    {exp.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className='text-gray-700 mb-6 leading-relaxed'>
                                        {exp.description}
                                    </p>

                                    {/* Responsibilities */}
                                    <div>
                                        <h3 className='text-lg font-bold text-gray-800 mb-3 font-heading'>
                                            Key Responsibilities:
                                        </h3>
                                        <ul className='space-y-2'>
                                            {exp.responsibilities.map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * idx }}
                                                    className='flex items-start gap-3'
                                                >
                                                    <span className='mt-1.5 w-2 h-2 rounded-full bg-[#5BC3D5] flex-shrink-0'></span>
                                                    <span className='text-gray-600'>
                                                        {item}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className='text-center mt-12'
                >
                    <div className='inline-block bg-gradient-to-r from-[#5BC3D5] to-[#4a9fb0] text-white px-8 py-4 rounded-full shadow-lg'>
                        <p className='font-bold text-lg'>Journey Continues...</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WorkExperience;
