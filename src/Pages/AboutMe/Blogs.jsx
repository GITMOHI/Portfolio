import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const Blogs = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then((res) => res.json())
            .then((data) => setblogs(data));
    }, []);

    return (
        <section className="bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-20 lg:py-24" aria-labelledby="blogs-heading">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Writing</p>
                    <h2
                        id="blogs-heading"
                        className="mt-3 border-l-4 border-brand pl-4 font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl"
                    >
                        Essays & notes
                    </h2>
                    <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
                        Long-form thoughts on building software.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((b) => (
                        <Blog key={b.blog_name} b={b} />
                    ))}
                </div>

                <div className="mt-14 flex justify-center">
                    <Link
                        to="/blog"
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-brand-hover focus-ring"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20" aria-hidden>
                            <FaArrowRight className="text-lg text-white" />
                        </span>
                        All writing
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
