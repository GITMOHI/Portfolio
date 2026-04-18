import React from 'react';

const CraftPrinciples = () => {
    return (
        <section className="border-b border-zinc-200/80 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-20">
            <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Principles</p>
                <blockquote className="mt-6 font-display text-2xl font-normal leading-snug text-zinc-800 dark:text-zinc-200 sm:text-3xl">
                    Clear interfaces, maintainable systems, and honest communication — the baseline for
                    software that lasts.
                </blockquote>
            </div>
        </section>
    );
};

export default CraftPrinciples;
