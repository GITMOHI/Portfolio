import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPaperPlane, FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const PAGE_SIZE_OPTIONS = [6, 9, 12];

const genres = ['All', 'Web App', 'Frontend', 'Backend(Node.js)', 'Backend(Django)'];

function buildPageList(current, total) {
    if (total <= 1) return [1];
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const set = new Set([1, total, current, current - 1, current + 1]);
    return [...set].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
}

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    useEffect(() => {
        fetch('/Allprojects.json')
            .then((res) => res.json())
            .then((data) => setProjects(Array.isArray(data) ? data : []));
    }, []);

    const filtered = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter((p) => p.genre === activeFilter);
    }, [projects, activeFilter]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

    useEffect(() => {
        setPage(1);
    }, [activeFilter, pageSize, filtered.length]);

    useEffect(() => {
        if (page > totalPages) setPage(totalPages);
    }, [page, totalPages]);

    const paginated = useMemo(() => {
        const start = (page - 1) * pageSize;
        return filtered.slice(start, start + pageSize);
    }, [filtered, page, pageSize]);

    const rangeStart = filtered.length === 0 ? 0 : (page - 1) * pageSize + 1;
    const rangeEnd = Math.min(page * pageSize, filtered.length);

    const pageNumbers = useMemo(() => buildPageList(page, totalPages), [page, totalPages]);

    const goPage = useCallback(
        (p) => {
            setPage(Math.min(Math.max(1, p), totalPages));
        },
        [totalPages]
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
        },
        exit: { opacity: 0, transition: { duration: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
        exit: {
            opacity: 0,
            y: 8,
            transition: { duration: 0.2 },
        },
    };

    const chipBase =
        'cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 motion-reduce:transition-none';
    const chipInactive =
        'border-zinc-200/90 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800/90 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-700/90';
    const chipActive =
        'border-portfolio/80 bg-portfolio text-white shadow-md shadow-portfolio/25 hover:bg-portfolio-hover dark:border-amber-400/60 dark:bg-amber-500 dark:text-zinc-950 dark:shadow-amber-500/20 dark:hover:bg-amber-400';

    return (
        <div className="min-h-screen w-full bg-zinc-50 dark:bg-zinc-950">
            <header className="relative overflow-hidden border-b border-zinc-200/90 dark:border-zinc-800">
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/90 via-white to-sky-50/40 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"
                    aria-hidden
                />
                <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-portfolio/15 blur-3xl dark:bg-amber-500/10" aria-hidden />
                <div className="relative mx-auto max-w-4xl px-6 py-14 text-center sm:px-8 sm:py-16">
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-portfolio dark:text-amber-400">
                            Selected work
                        </p>
                        <h1 className="mt-3 font-display text-4xl font-normal tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
                            Work
                        </h1>
                        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                            Case studies and builds across product, interface, and backend. Filter by stack,
                            then page through the archive.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <NavLink
                                to="/contact"
                                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-portfolio px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-portfolio/30 transition hover:bg-portfolio-hover focus-ring dark:bg-amber-500 dark:text-zinc-950 dark:shadow-amber-500/25 dark:hover:bg-amber-400"
                            >
                                <FaPaperPlane aria-hidden />
                                Start a conversation
                            </NavLink>
                            <span className="hidden text-sm text-zinc-500 dark:text-zinc-500 sm:inline">
                                {projects.length} projects in library
                            </span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:py-14">
                <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-soft backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-900/60 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                    <div className="flex flex-wrap gap-2 sm:gap-2.5" role="group" aria-label="Filter by category">
                        {genres.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setActiveFilter(item)}
                                className={`${chipBase} ${activeFilter === item ? chipActive : chipInactive}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-700/80 sm:border-t-0 sm:pt-0">
                        <label htmlFor="page-size" className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            Per page
                        </label>
                        <select
                            id="page-size"
                            value={pageSize}
                            onChange={(e) => setPageSize(Number(e.target.value))}
                            className="cursor-pointer rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-500"
                        >
                            {PAGE_SIZE_OPTIONS.map((n) => (
                                <option key={n} value={n}>
                                    {n}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <p className="mb-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
                    {filtered.length === 0 ? (
                        <>No projects match this filter.</>
                    ) : (
                        <>
                            Showing{' '}
                            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                                {rangeStart}–{rangeEnd}
                            </span>{' '}
                            of{' '}
                            <span className="font-semibold text-portfolio dark:text-amber-400">{filtered.length}</span>
                        </>
                    )}
                </p>

                <div id="work-grid" className="scroll-mt-28">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeFilter}-${page}-${pageSize}`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                        >
                            {paginated.map((item, idx) => {
                                const { id, image_link, project_heading, description } = item;
                                const key = `${id}-${(page - 1) * pageSize + idx}`;
                                return (
                                    <motion.article
                                        key={key}
                                        variants={itemVariants}
                                        layout
                                        className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-soft transition hover:border-zinc-300 hover:shadow-card dark:border-zinc-700/80 dark:bg-zinc-900/55 dark:hover:border-zinc-600"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                            <img
                                                src={image_link}
                                                alt={project_heading}
                                                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none" />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4 opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none sm:gap-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full max-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 bg-white px-5 py-2.5 text-sm font-bold text-portfolio shadow-lg transition hover:bg-portfolio hover:text-white dark:border-amber-400/35 dark:bg-zinc-800/95 dark:text-amber-300 dark:hover:border-amber-400/60 dark:hover:bg-amber-500/20 dark:hover:text-amber-100"
                                                >
                                                    <FaExternalLinkAlt aria-hidden className="text-xs" />
                                                    Live demo
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full max-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-full border border-zinc-400/40 bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-zinc-800 dark:border-emerald-500/40 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                                                >
                                                    <FaGithub aria-hidden className="text-sm" />
                                                    Source
                                                </button>
                                            </div>
                                            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-800 backdrop-blur-sm dark:bg-zinc-950/85 dark:text-amber-300/95">
                                                {item.genre || 'Project'}
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col p-5 sm:p-6">
                                            <h2 className="line-clamp-2 font-heading text-lg font-bold text-zinc-900 transition-colors group-hover:text-portfolio dark:text-zinc-100 dark:group-hover:text-amber-400 sm:text-xl">
                                                {project_heading}
                                            </h2>
                                            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                                {description}
                                            </p>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {filtered.length > 0 && totalPages > 1 && (
                    <nav
                        className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/90 pt-10 dark:border-zinc-800 sm:flex-row"
                        aria-label="Pagination"
                    >
                        <p className="order-2 text-xs text-zinc-500 dark:text-zinc-500 sm:order-1">
                            Page {page} of {totalPages}
                        </p>
                        <div className="order-1 flex items-center gap-1 sm:order-2">
                            <button
                                type="button"
                                onClick={() => goPage(page - 1)}
                                disabled={page <= 1}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 disabled:pointer-events-none disabled:opacity-40 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 focus-ring"
                                aria-label="Previous page"
                            >
                                <FaChevronLeft className="text-xs" aria-hidden />
                            </button>
                            <div className="flex items-center gap-1 px-2">
                                {pageNumbers.map((p, i) => {
                                    const prev = pageNumbers[i - 1];
                                    const showEllipsis = i > 0 && p - prev > 1;
                                    return (
                                        <React.Fragment key={p}>
                                            {showEllipsis && (
                                                <span className="px-2 text-zinc-400 dark:text-zinc-500" aria-hidden>
                                                    …
                                                </span>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => goPage(p)}
                                                className={`min-w-[2.5rem] rounded-xl px-3 py-2 text-sm font-semibold transition focus-ring ${
                                                    page === p
                                                        ? 'bg-portfolio text-white dark:bg-amber-500 dark:text-zinc-950'
                                                        : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'
                                                }`}
                                                aria-current={page === p ? 'page' : undefined}
                                            >
                                                {p}
                                            </button>
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                            <button
                                type="button"
                                onClick={() => goPage(page + 1)}
                                disabled={page >= totalPages}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 disabled:pointer-events-none disabled:opacity-40 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 focus-ring"
                                aria-label="Next page"
                            >
                                <FaChevronRight className="text-xs" aria-hidden />
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
