import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FaLaptopCode, FaBriefcase, FaRegPaperPlane } from 'react-icons/fa';

const Nav = () => {
    const { pathname } = useLocation();

    const itemClass = (to) => {
        return ({ isActive }) => {
            const aboutPaths = pathname === '/' || pathname === '/aboutme';
            const active = isActive || (to === '/aboutme' && aboutPaths);
            return `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none ${
                active
                    ? 'bg-white/95 text-gray-900 shadow-soft'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
            }`;
        };
    };

    return (
        <nav className="mt-2 px-4 pb-10">
            <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-2 font-bold">
                    <CgProfile className="shrink-0 opacity-80" aria-hidden />
                    <NavLink to="/aboutme" className={itemClass('/aboutme')} end>
                        About Me
                    </NavLink>
                </div>
                <div className="flex flex-row items-center gap-2 font-bold">
                    <FaLaptopCode className="shrink-0 opacity-80" aria-hidden />
                    <NavLink to="/projects" className={itemClass('/projects')}>
                        Projects
                    </NavLink>
                </div>
                <div className="flex flex-row items-center gap-2 font-bold">
                    <FaLaptopCode className="shrink-0 opacity-80" aria-hidden />
                    <NavLink to="/resume" className={itemClass('/resume')}>
                        Resume
                    </NavLink>
                </div>
                <div className="flex flex-row items-center gap-2 font-bold">
                    <FaBriefcase className="shrink-0 opacity-80" aria-hidden />
                    <NavLink to="/workexperience" className={itemClass('/workexperience')}>
                        Work Experience
                    </NavLink>
                </div>
                <div className="flex flex-row items-center gap-2 font-bold">
                    <FaLaptopCode className="shrink-0 opacity-80" aria-hidden />
                    <NavLink to="/blog" className={itemClass('/blog')}>
                        Blog
                    </NavLink>
                </div>
                <div className="flex flex-row items-center gap-2 font-bold">
                    <FaLaptopCode className="shrink-0 opacity-80" aria-hidden />
                    <NavLink to="/contact" className={itemClass('/contact')}>
                        Contact
                    </NavLink>
                </div>

                <div className="pt-6">
                    <NavLink
                        to="/contact"
                        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-sidebar px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                        <FaRegPaperPlane aria-hidden />
                        Hire me
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
