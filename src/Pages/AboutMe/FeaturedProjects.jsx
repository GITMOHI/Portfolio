import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
    const [featProj, setfetProj] = useState([]);

    useEffect(() => {
        fetch('/FeatProjects.json')
            .then((res) => res.json())
            .then((data) => setfetProj(data));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45 },
        },
    };

    return (
        <section
            className="border-b border-zinc-200/80 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-900/40 sm:py-20 lg:py-24"
            aria-labelledby="featured-heading"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-12 flex items-center justify-center gap-4">
                    <div className="h-px max-w-xs flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-600" />
                    <span className="rounded-full bg-portfolio px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-soft">
                        Case studies
                    </span>
                    <div className="h-px max-w-xs flex-1 bg-gradient-to-l from-transparent via-zinc-300 to-transparent dark:via-zinc-600" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-portfolio">Selected</p>
                    <h2
                        id="featured-heading"
                        className="mt-3 border-l-4 border-portfolio pl-4 font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl"
                    >
                        Featured work
                    </h2>
                    <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
                        Representative projects — interaction, performance, and clarity under constraints.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-12 grid gap-8 md:grid-cols-2"
                >
                    {featProj.map((fp) => (
                        <motion.div
                            key={fp.image_link}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            className="group overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card dark:border-zinc-700/80 dark:bg-zinc-950/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        >
                            <div className="relative h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                <img
                                    src={fp.image_link}
                                    alt={fp.project_heading}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-zinc-950/90" />
                                <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-portfolio shadow-lg dark:bg-zinc-900 dark:text-portfolio">
                                        View <FaExternalLinkAlt className="text-xs" aria-hidden />
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading text-xl font-bold text-zinc-900 transition-colors group-hover:text-portfolio dark:text-zinc-100">
                                    {fp.project_heading}
                                </h3>
                                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {fp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 flex justify-center">
                    <NavLink
                        to="/projects"
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-portfolio px-8 py-3.5 text-base font-bold text-white shadow-soft transition hover:bg-portfolio-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
                    >
                        Complete archive
                        <FaArrowRight aria-hidden />
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
