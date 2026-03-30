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
            .then((res) => res.json())
            .then((data) => {
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
        setFiltered(projects.filter((p) => p.genre === item));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.35 },
        },
        exit: {
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.25 },
        },
    };

    return (
        <div className="min-h-screen w-full bg-white dark:bg-zinc-950">
            <header className="border-b border-orange-200/60 bg-gradient-to-br from-surface-warm to-white dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
                <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 sm:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-portfolio">Archive</p>
                        <h1 className="mt-3 font-display text-4xl font-normal tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                            Work
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                            Production and exploratory builds across the stack. Available for selective freelance work.
                        </p>
                        <div className="mt-8">
                            <NavLink
                                to="/contact"
                                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-portfolio px-8 py-3.5 text-base font-bold text-white shadow-soft transition hover:bg-portfolio-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
                            >
                                <FaPaperPlane aria-hidden />
                                Start a conversation
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
                >
                    {genres.map((item) => (
                        <motion.button
                            key={item}
                            type="button"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleFilter(item)}
                            className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 motion-reduce:transition-none ${
                                activeFilter === item
                                    ? 'bg-portfolio text-white shadow-soft'
                                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                            }`}
                        >
                            {item}
                        </motion.button>
                    ))}
                </motion.div>

                <p className="mb-10 text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Showing <span className="font-bold text-portfolio">{filtered.length}</span> project
                    {filtered.length !== 1 ? 's' : ''}
                </p>

                <AnimatePresence mode="popLayout">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {filtered.map((item) => {
                            const { id, image_link, project_heading, description } = item;
                            return (
                                <motion.div
                                    key={id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layout
                                    className="group overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card dark:border-zinc-700/80 dark:bg-zinc-900/50"
                                >
                                    <div className="relative h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                        <img
                                            src={image_link}
                                            alt={project_heading}
                                            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none dark:from-zinc-950" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none">
                                            <button
                                                type="button"
                                                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-portfolio shadow-xl transition hover:bg-portfolio hover:text-white dark:bg-zinc-100"
                                            >
                                                <FaExternalLinkAlt aria-hidden />
                                                Live
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white shadow-xl transition hover:bg-zinc-800 dark:bg-zinc-950 dark:ring-1 dark:ring-zinc-700"
                                            >
                                                <FaGithub aria-hidden />
                                                Source
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="line-clamp-1 font-heading text-xl font-bold text-zinc-900 transition-colors group-hover:text-portfolio dark:text-zinc-100">
                                            {project_heading}
                                        </h3>
                                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                            {description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center text-lg text-zinc-500 dark:text-zinc-400"
                    >
                        Nothing in this filter.
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
