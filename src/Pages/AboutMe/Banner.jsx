import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section
            className="relative overflow-hidden border-b border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            aria-labelledby="banner-heading"
        >
            <div
                className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl dark:bg-brand/10"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-portfolio/10 blur-3xl dark:bg-portfolio/5"
                aria-hidden
            />

            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                <div className="flex flex-col items-stretch gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
                    <div className="max-w-2xl shrink-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Software engineer</p>
                        <h1
                            id="banner-heading"
                            className="mt-4 font-display text-5xl font-normal tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl"
                        >
                            Mohiuddin
                        </h1>
                        <p className="mt-4 text-lg font-medium text-zinc-600 dark:text-zinc-400 sm:text-xl">
                            Junior Software Engineer · Lab3
                        </p>
                        <p className="mt-8 max-w-prose text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                            I design and build interfaces and services for scalable web products — from React
                            frontends to Node APIs. Calm code, measurable outcomes, and documentation that helps
                            the next developer.
                        </p>

                        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
                            <Link
                                to="/projects"
                                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-zinc-800 dark:bg-brand dark:hover:bg-brand-hover focus-ring"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15" aria-hidden>
                                    <FaArrowRight className="text-sm" />
                                </span>
                                View selected work
                            </Link>
                            <Link
                                to="/resume"
                                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-8 py-4 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:border-zinc-400 hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800 focus-ring"
                            >
                                <span
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800"
                                    aria-hidden
                                >
                                    <IoDocumentTextOutline className="text-base text-zinc-600 dark:text-zinc-300" />
                                </span>
                                Résumé
                            </Link>
                        </div>
                    </div>

                    <div className="flex w-full justify-center lg:max-w-md lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand/30 to-portfolio/20 blur-sm dark:from-brand/20 dark:to-portfolio/10" aria-hidden />
                            <img
                                src="/images/bn2.jpeg"
                                alt="Mohiuddin — software engineer"
                                className="relative h-80 w-full rounded-2xl object-cover shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10 sm:h-96 lg:h-[28rem]"
                                width={480}
                                height={640}
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
