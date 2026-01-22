import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('../../../public/blog.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
            .catch(err => {
                console.error('Error loading blogs:', err);
                // Fallback data if JSON doesn't load
                setBlogs([
                    {
                        id: 1,
                        title: "Getting Started with React Hooks",
                        excerpt: "Learn how to use React Hooks to manage state and side effects in functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
                        date: "January 15, 2024",
                        readTime: "5 min read",
                        category: "React",
                        image: "../../../public/images/19199295.jpg"
                    },
                    {
                        id: 2,
                        title: "Building Scalable Node.js Applications",
                        excerpt: "Explore best practices for building scalable backend applications with Node.js and Express. Learn about architecture patterns, error handling, and performance optimization.",
                        date: "January 10, 2024",
                        readTime: "8 min read",
                        category: "Backend",
                        image: "../../../public/images/4882477.jpg"
                    },
                    {
                        id: 3,
                        title: "Mastering Tailwind CSS",
                        excerpt: "Discover how to create beautiful, responsive designs quickly using Tailwind CSS. Tips, tricks, and real-world examples included.",
                        date: "January 5, 2024",
                        readTime: "6 min read",
                        category: "CSS",
                        image: "../../../public/images/7217.jpg"
                    }
                ]);
            });
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
                duration: 0.6
            }
        }
    };

    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='max-w-7xl mx-auto px-8 py-12'>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <h1 className='text-5xl font-black text-gray-800 mb-4 font-heading'>Blog</h1>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Thoughts, tutorials, and insights on web development and software engineering
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {blogs.map((blog) => (
                        <motion.article
                            key={blog.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300'
                        >
                            {/* Blog Image */}
                            <div className='relative h-48 overflow-hidden bg-gray-200'>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                                />
                                <div className='absolute top-4 right-4'>
                                    <span className='bg-[#5BC3D5] text-white text-xs font-bold px-3 py-1 rounded-full'>
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div className='p-6'>
                                <div className='flex items-center gap-4 text-xs text-gray-500 mb-3'>
                                    <div className='flex items-center gap-1'>
                                        <FaCalendarAlt />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaClock />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>

                                <h2 className='text-xl font-bold text-gray-800 mb-3 font-heading hover:text-[#5BC3D5] transition-colors'>
                                    {blog.title}
                                </h2>

                                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                                    {blog.excerpt}
                                </p>

                                <button className='flex items-center gap-2 text-[#5BC3D5] font-semibold hover:gap-3 transition-all'>
                                    Read More <FaArrowRight />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Empty State */}
                {blogs.length === 0 && (
                    <div className='text-center py-20'>
                        <p className='text-gray-500 text-lg'>No blog posts available at the moment.</p>
                    </div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className='mt-16 text-center bg-gradient-to-r from-[#5BC3D5] to-[#4a9fb0] rounded-2xl p-12'
                >
                    <h2 className='text-3xl font-bold text-white mb-4 font-heading'>Want to stay updated?</h2>
                    <p className='text-white/90 mb-6 max-w-2xl mx-auto'>
                        Subscribe to my newsletter to get the latest articles and tutorials delivered to your inbox.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='flex-1 px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white bg-white text-gray-900'
                        />
                        <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold px-8 py-3 rounded-lg transition-colors'>
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Blog;
