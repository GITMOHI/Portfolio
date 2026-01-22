import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent successfully! I will get back to you soon.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        // Clear status after 5 seconds
        setTimeout(() => setStatus(''), 5000);
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='max-w-7xl mx-auto px-8 py-12'>
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <h1 className='text-5xl font-black text-gray-800 mb-4 font-heading'>Get In Touch</h1>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid grid-cols-1 lg:grid-cols-2 gap-12'
                >
                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className='space-y-8'>
                        <div>
                            <h2 className='text-3xl font-bold text-gray-800 mb-6 font-heading'>Contact Information</h2>
                            <p className='text-gray-600 mb-8'>
                                I'm currently available for freelance work and open to discussing new projects and opportunities.
                            </p>
                        </div>

                        <div className='space-y-6'>
                            <motion.div
                                whileHover={{ x: 10 }}
                                className='flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors'
                            >
                                <div className='bg-[#5BC3D5] p-3 rounded-full'>
                                    <FaPhone className='text-white text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-gray-800 mb-1'>Phone</h3>
                                    <p className='text-gray-600'>01625680207</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className='flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors'
                            >
                                <div className='bg-[#5BC3D5] p-3 rounded-full'>
                                    <FaEnvelope className='text-white text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-gray-800 mb-1'>Email</h3>
                                    <p className='text-gray-600'>umohi559@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className='flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors'
                            >
                                <div className='bg-[#5BC3D5] p-3 rounded-full'>
                                    <FaMapMarkerAlt className='text-white text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-gray-800 mb-1'>Location</h3>
                                    <p className='text-gray-600'>Chittagong, Bangladesh</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className='pt-8'>
                            <h3 className='font-bold text-gray-800 mb-4'>Connect with me</h3>
                            <div className='flex gap-4'>
                                <a
                                    href='#'
                                    className='bg-gray-100 p-3 rounded-full hover:bg-[#5BC3D5] hover:text-white transition-colors'
                                >
                                    <FaLinkedin className='text-2xl' />
                                </a>
                                <a
                                    href='#'
                                    className='bg-gray-100 p-3 rounded-full hover:bg-[#5BC3D5] hover:text-white transition-colors'
                                >
                                    <FaGithub className='text-2xl' />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <div className='bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl'>
                            <h2 className='text-3xl font-bold text-gray-800 mb-6 font-heading'>Send a Message</h2>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label className='block text-gray-700 font-semibold mb-2' htmlFor='name'>
                                        Your Name
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5BC3D5] bg-white text-gray-900'
                                        placeholder='John Doe'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 font-semibold mb-2' htmlFor='email'>
                                        Your Email
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5BC3D5] bg-white text-gray-900'
                                        placeholder='john@example.com'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 font-semibold mb-2' htmlFor='subject'>
                                        Subject
                                    </label>
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5BC3D5] bg-white text-gray-900'
                                        placeholder='Project Inquiry'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 font-semibold mb-2' htmlFor='message'>
                                        Message
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows='5'
                                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5BC3D5] resize-none bg-white text-gray-900'
                                        placeholder='Tell me about your project...'
                                    ></textarea>
                                </div>

                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg'
                                    >
                                        {status}
                                    </motion.div>
                                )}

                                <button
                                    type='submit'
                                    className='w-full bg-[#5BC3D5] hover:bg-[#4a9fb0] text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl'
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
