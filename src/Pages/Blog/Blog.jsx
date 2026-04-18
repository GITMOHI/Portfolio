import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const normalizePost = (blog, index) => ({
    id: blog.id ?? index,
    title: blog.title ?? blog.blog_name ?? 'Blog post',
    excerpt: blog.excerpt ?? blog.description ?? '',
    image: blog.image ?? blog.image_url ?? '/images/19199295.jpg',
    date: blog.date ?? '',
    readTime: blog.readTime ?? '5 min read',
    category: blog.category ?? 'Article',
});

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then((res) => res.json())
            .then((data) => setBlogs(Array.isArray(data) ? data.map(normalizePost) : []))
            .catch(() => setBlogs([]));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="min-h-screen w-full bg-white dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 text-center"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Writing</p>
                    <h1 className="mt-2 font-display text-4xl font-normal text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                        Essays
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        Tutorials and engineering notes.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {blogs.map((blog) => (
                        <motion.article
                            key={blog.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-soft transition-shadow hover:shadow-card dark:border-zinc-700/80 dark:bg-zinc-900/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        >
                            <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                <img
                                    src={blog.image}
                                    alt={`Cover: ${blog.title}`}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                />
                                <div className="absolute right-4 top-4">
                                    <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-soft">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                {(blog.date || blog.readTime) && (
                                    <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                                        {blog.date && (
                                            <span className="flex items-center gap-1">
                                                <FaCalendarAlt aria-hidden />
                                                {blog.date}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <FaClock aria-hidden />
                                            {blog.readTime}
                                        </span>
                                    </div>
                                )}
                                <h2 className="font-heading text-xl font-bold text-zinc-900 transition-colors group-hover:text-brand dark:text-zinc-100">
                                    {blog.title}
                                </h2>
                                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {blog.excerpt}
                                </p>
                                <button
                                    type="button"
                                    className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
                                >
                                    Read more <FaArrowRight aria-hidden />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {blogs.length === 0 && (
                    <p className="py-20 text-center text-lg text-zinc-500 dark:text-zinc-400">No posts yet.</p>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 rounded-2xl bg-gradient-to-r from-brand to-brand-mid p-10 text-center shadow-card sm:p-12"
                >
                    <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">Stay updated</h2>
                    <p className="mx-auto mt-3 max-w-xl text-white/90">
                        Newsletter — wire this to your provider when ready.
                    </p>
                    <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 rounded-xl border-0 px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-white/80"
                        />
                        <button
                            type="button"
                            className="cursor-pointer rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white dark:bg-zinc-950 dark:ring-1 dark:ring-white/20"
                        >
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Blog;
