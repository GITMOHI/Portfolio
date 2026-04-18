import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io5';
import { TfiLinkedin } from 'react-icons/tfi';
import { GITHUB_URL, LINKEDIN_URL } from '../constants/social';

const SiteFooter = () => {
    return (
        <footer className="site-footer border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 sm:flex-row sm:px-8 lg:px-12">
                <div className="text-center sm:text-left">
                    <p className="font-display text-lg text-zinc-900 dark:text-zinc-100">
                        Mohi<span className="text-brand">.</span>
                    </p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        Software engineer · Lab3 · Chittagong, Bangladesh
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition hover:text-brand dark:text-zinc-400"
                        aria-label="LinkedIn"
                    >
                        <TfiLinkedin className="h-5 w-5" />
                    </a>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 transition hover:text-brand dark:text-zinc-400"
                        aria-label="GitHub"
                    >
                        <IoLogoGithub className="h-6 w-6" />
                    </a>
                    <NavLink
                        to="/contact"
                        className="text-sm font-semibold text-brand hover:text-brand-hover"
                    >
                        Email me
                    </NavLink>
                </div>
            </div>
            <div className="border-t border-zinc-100 py-4 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
                © {new Date().getFullYear()} Mohiuddin. Crafted with care.
            </div>
        </footer>
    );
};

export default SiteFooter;
