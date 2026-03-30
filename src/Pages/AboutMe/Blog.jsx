import React from 'react';

const Blog = ({ b }) => {
    const { blog_name, description, image_url } = b;
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-zinc-700/80 dark:bg-zinc-900/50 dark:hover:border-zinc-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                    src={image_url}
                    alt={`Cover: ${blog_name}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-zinc-950/60" />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h2 className="font-heading text-lg font-bold leading-snug text-zinc-900 transition-colors group-hover:text-brand dark:text-zinc-100">
                    {blog_name}
                </h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {description}
                </p>
                <span className="mt-4 inline-flex text-sm font-semibold text-brand">Read essay →</span>
            </div>
        </article>
    );
};

export default Blog;
