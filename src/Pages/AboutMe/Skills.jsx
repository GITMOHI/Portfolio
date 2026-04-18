import React, { useEffect, useState } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [mySkills, setmySkills] = useState([]);

    useEffect(() => {
        fetch('/skills.json')
            .then((res) => res.json())
            .then((data) => {
                setmySkills(data);
            });
    }, []);

    return (
        <section
            className="border-b border-zinc-200/80 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-900/40 sm:py-20 lg:py-24"
            aria-labelledby="skills-heading"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Stack</p>
                    <h2
                        id="skills-heading"
                        className="mt-3 border-l-4 border-brand pl-4 font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl"
                    >
                        Technical depth
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                        Tools and domains I work in daily. Pair this with case studies in{' '}
                        <span className="text-zinc-900 dark:text-zinc-200">Work</span> for proof, not just keywords.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {mySkills.map((s) => (
                        <Skill key={s.name} s={s} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
