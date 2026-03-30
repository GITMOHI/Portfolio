import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    };

    const inputClass =
        'w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 transition placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand';

    return (
        <div className="min-h-screen w-full bg-zinc-50 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 text-center"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Contact</p>
                    <h1 className="mt-2 font-display text-4xl font-normal text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                        Let&apos;s work together
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        Share a brief — I typically reply within a day or two.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
                >
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <h2 className="font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                Direct lines
                            </h2>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                                Freelance and full-time conversations welcome.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: FaPhone, title: 'Phone', text: '01625680207' },
                                { icon: FaEnvelope, title: 'Email', text: 'umohi559@gmail.com' },
                                { icon: FaMapMarkerAlt, title: 'Location', text: 'Chittagong, Bangladesh' },
                            ].map(({ icon: Icon, title, text }) => (
                                <motion.div
                                    key={title}
                                    whileHover={{ x: 6 }}
                                    className="flex items-start gap-4 rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-soft transition hover:border-brand/30 dark:border-zinc-700/80 dark:bg-zinc-900/50"
                                >
                                    <div className="rounded-xl bg-brand p-3 text-white shadow-soft">
                                        <Icon className="text-xl" aria-hidden />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-400">{text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold text-zinc-900 dark:text-zinc-100">Social</h3>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="rounded-full border border-zinc-200 bg-white p-3 text-zinc-700 transition hover:border-brand hover:bg-brand hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-brand focus-ring"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a
                                    href="#"
                                    className="rounded-full border border-zinc-200 bg-white p-3 text-zinc-700 transition hover:border-brand hover:bg-brand hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-brand focus-ring"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-card dark:border-zinc-700/80 dark:bg-zinc-900/50">
                            <h2 className="font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                Message
                            </h2>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                <div>
                                    <label className="mb-2 block font-semibold text-zinc-700 dark:text-zinc-300" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block font-semibold text-zinc-700 dark:text-zinc-300" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block font-semibold text-zinc-700 dark:text-zinc-300" htmlFor="subject">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                        placeholder="Project / role"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block font-semibold text-zinc-700 dark:text-zinc-300" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className={`${inputClass} resize-none`}
                                        placeholder="Context, timeline, links…"
                                    />
                                </div>

                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
                                    >
                                        {status}
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full cursor-pointer rounded-xl bg-brand py-4 text-base font-bold text-white shadow-soft transition hover:bg-brand-mid focus-ring"
                                >
                                    Send
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
