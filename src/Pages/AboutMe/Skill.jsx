import React from 'react';

const Skill = ({ s }) => {
    return (
        <div className="group rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 shadow-soft transition duration-200 hover:border-brand/35 hover:shadow-card dark:border-zinc-700/80 dark:bg-zinc-950/60 dark:hover:border-brand/40 motion-reduce:transition-none">
            <img src={s.image} className="h-14 w-14 object-contain opacity-90 dark:opacity-100" alt="" />
            <h3 className="mt-4 font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.description}</p>
        </div>
    );
};

export default Skill;
