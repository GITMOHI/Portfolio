import React from 'react';

const items = [
    { label: 'Focus', value: 'Tailwind · React · TypeScript · Node · Golang' },
    {
        label: 'Education',
        value: (
            <a
                href="https://cuet.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="B.Sc. Computer Science and Engineering, Chittagong University of Engineering and Technology"
                className="inline-flex max-w-full items-center justify-center gap-2.5 rounded-lg text-left transition hover:text-brand dark:hover:text-emerald-400 sm:justify-start"
            >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/90 bg-white shadow-sm dark:border-zinc-600 dark:bg-zinc-800">
                    <img
                        src="/images/cuet.png"
                        alt=""
                        className="h-7 w-7 object-contain"
                        width={28}
                        height={28}
                    />
                </span>
                <span>CSE, CUET</span>
            </a>
        ),
    },
    { label: 'Based in', value: 'Chittagong, BD' },
    { label: 'Status', value: 'Open to opportunities' },
];

const HighlightsBar = () => {
    return (
        <section
            className="border-b border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-900/50"
            aria-label="Profile highlights"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-8 lg:px-12">
                {items.map(({ label, value }) => (
                    <div key={label} className="text-center sm:text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                            {label}
                        </p>
                        <div className="mt-2 font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:text-base">
                            {value}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighlightsBar;
