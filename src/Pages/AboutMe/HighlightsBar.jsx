import React from 'react';

const items = [
    { label: 'Role', value: 'Full-stack engineer' },
    { label: 'Focus', value: 'React · Node · APIs' },
    { label: 'Based in', value: 'Chittagong, BD' },
    { label: 'Status', value: 'Open to opportunities' },
];

const HighlightsBar = () => {
    return (
        <section
            className="border-b border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-900/50"
            aria-label="Profile highlights"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 sm:px-8 lg:px-12">
                {items.map(({ label, value }) => (
                    <div key={label} className="text-center sm:text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                            {label}
                        </p>
                        <p className="mt-2 font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:text-base">
                            {value}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighlightsBar;
