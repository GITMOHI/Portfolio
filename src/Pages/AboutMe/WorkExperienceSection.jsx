import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WorkExperienceSection = () => {
    return (
        <section
            className="border-b border-zinc-200/80 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-20 lg:py-24"
            aria-labelledby="work-section-heading"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-12 flex items-center justify-center gap-4">
                    <div className="h-px max-w-xs flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-600" />
                    <span className="rounded-full bg-brand px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-soft">
                        Timeline
                    </span>
                    <div className="h-px max-w-xs flex-1 bg-gradient-to-l from-transparent via-zinc-300 to-transparent dark:via-zinc-600" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Career</p>
                        <h2
                            id="work-section-heading"
                            className="mt-3 border-l-4 border-brand pl-4 font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl"
                        >
                            Where I&apos;ve shipped
                        </h2>
                        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
                            Lab3 — product engineering with a tight feedback loop.
                        </p>
                    </div>

                    <div className="relative mt-10 overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-r from-brand/10 to-transparent p-6 dark:border-zinc-700/80 dark:from-brand/15 sm:p-8 lg:pr-16">
                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 dark:bg-brand/5" aria-hidden />
                        <div
                            className="absolute bottom-8 left-8 top-8 w-0.5 bg-gradient-to-b from-brand to-brand/30 dark:to-brand/20"
                            aria-hidden
                        />

                        <div className="relative space-y-6 pl-8 sm:pl-10">
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="relative z-10 mt-1.5 shrink-0">
                                    <div className="h-4 w-4 rounded-full border-4 border-white bg-brand shadow-md dark:border-zinc-900" />
                                    <div className="absolute inset-0 h-4 w-4 animate-ping rounded-full bg-brand/40 motion-reduce:animate-none" />
                                </div>
                                <div className="flex-1 rounded-xl border border-brand/25 bg-white p-5 shadow-soft dark:border-brand/30 dark:bg-zinc-950/80">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="/images/lab3.png"
                                                alt="Lab3"
                                                className="h-10 w-10 object-contain"
                                            />
                                            <div>
                                                <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">
                                                    Junior Software Engineer
                                                </h3>
                                                <p className="text-sm font-semibold text-brand">Lab3 · 2024 – Present</p>
                                            </div>
                                        </div>
                                        <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                                            Current
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start gap-4"
                            >
                                <div className="z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-4 border-white bg-zinc-300 shadow-sm dark:border-zinc-900 dark:bg-zinc-600" />
                                <div className="flex-1 rounded-xl border border-zinc-200 bg-white p-5 shadow-soft dark:border-zinc-700 dark:bg-zinc-950/80">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="/images/lab3.png"
                                            alt="Lab3"
                                            className="h-10 w-10 object-contain"
                                        />
                                        <div>
                                            <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">
                                                Software Engineer Intern
                                            </h3>
                                            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                                                Lab3 · 2023 – 2024
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/workexperience"
                            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-hover focus-ring"
                        >
                            Full timeline
                            <FaArrowRight aria-hidden />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkExperienceSection;
