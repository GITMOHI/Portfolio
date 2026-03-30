import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Junior Software Engineer',
            company: 'Lab3',
            type: 'Full-time',
            duration: '2024 - Present',
            description:
                'Working as a Junior Software Engineer, leading frontend development initiatives and contributing to full-stack web applications. Collaborating with cross-functional teams to deliver high-quality scalable solutions.',
            responsibilities: [
                'Developing and maintaining React-based web applications',
                'Building RESTful APIs using Node.js and Express',
                'Collaborating with design and backend teams',
                'Code review and mentoring junior developers',
            ],
            current: true,
        },
        {
            id: 2,
            title: 'Software Engineer Intern',
            company: 'Lab3',
            type: 'Internship',
            duration: '2023 - 2024',
            description:
                'Started my journey at Lab3 as an intern, where I gained hands-on experience in modern web development practices and contributed to multiple client projects.',
            responsibilities: [
                'Implemented responsive UI components using React',
                'Worked on bug fixes and feature enhancements',
                'Participated in daily standups and sprint planning',
                'Learned industry best practices and coding standards',
            ],
            current: false,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-surface-gradFrom to-surface-gradTo dark:from-zinc-950 dark:to-zinc-900">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto max-w-5xl px-6 py-12 sm:px-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Career</p>
                    <h1 className="mb-3 mt-2 font-display text-4xl font-normal text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                        Experience
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">Professional journey at Lab3</p>
                </motion.div>

                <div className="relative">
                    <div className="absolute bottom-0 left-8 top-0 w-1 -translate-x-1/2 transform bg-gradient-to-b from-brand via-brand-mid to-zinc-300 dark:to-zinc-600 md:left-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className={`relative mb-16 ${
                                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                            }`}
                        >
                            <div className="absolute left-8 z-10 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-brand bg-white shadow-lg dark:bg-zinc-950 md:left-1/2">
                                {exp.current && (
                                    <div className="absolute inset-0 animate-ping rounded-full bg-brand opacity-75 motion-reduce:animate-none" />
                                )}
                            </div>

                            <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className={`rounded-2xl border-l-4 bg-white p-8 shadow-xl dark:bg-zinc-900/80 ${
                                        exp.current ? 'border-brand' : 'border-zinc-300 dark:border-zinc-600'
                                    }`}
                                >
                                    {exp.current && (
                                        <div className="mb-4 inline-block">
                                            <span className="rounded-full bg-gradient-to-r from-brand to-brand-mid px-4 py-2 text-xs font-bold text-white shadow-md">
                                                Current role
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-4 flex items-start gap-4">
                                        <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-md dark:border-zinc-700 dark:bg-zinc-950">
                                            <img
                                                src="/images/lab3.png"
                                                alt={exp.company}
                                                className="h-14 w-14 object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="mb-1 font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                                {exp.title}
                                            </h2>
                                            <p className="mb-1 text-lg font-semibold text-brand">{exp.company}</p>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                                    {exp.type}
                                                </span>
                                                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                                    {exp.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mb-6 leading-relaxed text-zinc-700 dark:text-zinc-300">{exp.description}</p>

                                    <div>
                                        <h3 className="mb-3 font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">
                                            Key responsibilities
                                        </h3>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * idx }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                                                    <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block rounded-full bg-gradient-to-r from-brand to-brand-mid px-8 py-4 text-white shadow-lg">
                        <p className="text-lg font-bold">To be continued</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WorkExperience;
