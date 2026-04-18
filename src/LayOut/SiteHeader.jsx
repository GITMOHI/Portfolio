import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';

const links = [
    { to: '/aboutme', label: 'About', end: true },
    { to: '/projects', label: 'Work' },
    { to: '/workexperience', label: 'Experience' },
    { to: '/blog', label: 'Writing' },
    { to: '/resume', label: 'Résumé' },
    { to: '/contact', label: 'Contact' },
];

function navLinkClass({ isActive, pathname, to, end: _end }) {
    const homeAbout = pathname === '/' || pathname === '/aboutme';
    const active = isActive || (to === '/aboutme' && homeAbout);
    return `relative font-medium tracking-wide transition-colors ${
        active
            ? 'text-brand'
            : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
    } ${active ? 'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand' : ''}`;
}

const SiteHeader = () => {
    const { theme, toggleTheme } = useTheme();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="site-header sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/80">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12">
                    <NavLink
                        to="/aboutme"
                        className="font-display text-xl font-normal tracking-tight text-zinc-900 dark:text-zinc-50"
                        onClick={() => setOpen(false)}
                    >
                        Mohi<span className="text-brand">.</span>
                    </NavLink>

                    <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
                        {links.map(({ to, label, end }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end}
                                className={(p) =>
                                    `text-sm ${navLinkClass({ isActive: p.isActive, pathname, to, end })}`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 focus-ring"
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? (
                                <HiOutlineSun className="h-5 w-5" aria-hidden />
                            ) : (
                                <HiOutlineMoon className="h-5 w-5" aria-hidden />
                            )}
                        </button>

                        <NavLink
                            to="/contact"
                            className="hidden rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-brand dark:hover:bg-brand-hover sm:inline-flex focus-ring"
                            onClick={() => setOpen(false)}
                        >
                            Let&apos;s talk
                        </NavLink>

                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200 md:hidden focus-ring"
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            onClick={() => setOpen((o) => !o)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                        >
                            {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {open && (
                <>
                    <button
                        type="button"
                        className="fixed inset-0 z-40 bg-zinc-950/50 backdrop-blur-sm md:hidden"
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                    />
                    <div
                        id="mobile-nav"
                        className="fixed inset-x-0 top-16 z-50 max-h-[min(70vh,520px)] overflow-y-auto border-b border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
                    >
                        <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Mobile">
                            {links.map(({ to, label, end }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    end={end}
                                    onClick={() => setOpen(false)}
                                    className={(p) =>
                                        `rounded-xl px-4 py-3 text-base font-medium ${navLinkClass({
                                            isActive: p.isActive,
                                            pathname,
                                            to,
                                            end,
                                        })}`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                onClick={() => setOpen(false)}
                                className="mt-4 rounded-xl bg-brand py-3 text-center text-base font-semibold text-white"
                            >
                                Let&apos;s talk
                            </NavLink>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
};

export default SiteHeader;
