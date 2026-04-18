import { FaFilePdf, FaGithub, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';

const SUMMARY =
    'Software engineer building full-stack web products at Lab3. I care about clear UI architecture, maintainable APIs, and shipping features with solid test coverage and documentation. Comfortable across React, Node.js, and Django-backed systems.';

const CONTACT = [
    {
        icon: FaPhone,
        label: 'Phone',
        value: '01625680207',
        href: 'tel:+8801625680207',
    },
    {
        icon: MdEmail,
        label: 'Email',
        value: 'umohi559@gmail.com',
        href: 'mailto:umohi559@gmail.com',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        value: 'github.com',
        href: 'https://github.com',
    },
    {
        icon: SiLeetcode,
        label: 'LeetCode',
        value: 'Profile',
        href: 'https://leetcode.com',
    },
];

const EDUCATION = [
    {
        school: 'Chittagong University of Engineering and Technology',
        degree: 'Bachelor of Science in Computer Science & Engineering',
        period: '2020 – 2025',
        location: 'Chittagong, Bangladesh',
        logo: '/images/cuet.png',
        href: 'https://cuet.ac.bd/',
    },
    {
        school: 'Armed Police Battalion Public School And College',
        degree: 'Higher Secondary School Certificate in Science (GPA 5/5)',
        period: '2020 – 2025',
        location: 'Chittagong, Bangladesh',
    },
];

const EXPERIENCE = [
    {
        company: 'Lab3',
        logo: '/images/lab3.png',
        title: 'Junior Software Engineer',
        type: 'Full-time',
        period: '2024 – Present',
        highlights: [
            'Ship and maintain React-based web applications with attention to performance and accessibility.',
            'Build and integrate RESTful APIs using Node.js and Express.',
            'Collaborate with design and backend teams in an agile delivery cycle.',
        ],
    },
];

const SKILL_GROUPS = [
    { label: 'Languages', skills: ['C++', 'JavaScript', 'Python'] },
    { label: 'Frontend', skills: ['React', 'Redux'] },
    { label: 'Backend', skills: ['Node.js', 'Express.js', 'Django'] },
    { label: 'Data', skills: ['MySQL', 'MongoDB'] },
];

function SectionLabel({ children }) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-gradient-to-r from-resume to-transparent" aria-hidden />
            <h2 className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-resume">{children}</h2>
            <span className="h-px min-w-0 flex-1 bg-zinc-200 dark:bg-zinc-700" aria-hidden />
        </div>
    );
}

const Resume = () => {
    const handlePrint = () => window.print();

    return (
        <div className="min-h-screen w-full bg-zinc-100 pb-20 dark:bg-zinc-950">
            {/* Toolbar — hidden when printing */}
            <div className="resume-no-print border-b border-zinc-200/90 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
                <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-resume">Curriculum vitae</p>
                        <h1 className="mt-1.5 font-display text-2xl font-normal tracking-tight text-zinc-900 dark:text-zinc-50">
                            Résumé
                        </h1>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Screen view · optimized for print / PDF</p>
                    </div>
                    <button
                        type="button"
                        onClick={handlePrint}
                        className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-zinc-800 dark:bg-resume dark:hover:bg-resume-hover sm:w-auto focus-ring"
                    >
                        <FaFilePdf className="text-base" aria-hidden />
                        Export PDF
                    </button>
                </div>
            </div>

            <div className="mx-auto mt-8 max-w-5xl px-5 sm:px-8">
                <article className="resume-document overflow-hidden rounded-2xl border border-zinc-200/95 bg-white shadow-[0_2px_40px_-12px_rgba(0,0,0,0.12)] dark:border-zinc-700/90 dark:bg-zinc-900 dark:shadow-none">
                    {/* Document masthead */}
                    <header className="relative border-b border-zinc-100 bg-gradient-to-br from-white via-zinc-50/80 to-emerald-50/30 px-6 py-10 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-emerald-950/20 sm:px-10 sm:py-12">
                        <div
                            className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-resume to-resume-hover sm:w-1.5"
                            aria-hidden
                        />
                        <div className="relative pl-4 sm:pl-6">
                            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                                Software engineer
                            </p>
                            <h2 className="mt-2 font-display text-4xl font-normal tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                                Mohiuddin
                            </h2>
                            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">Junior Software Engineer · Lab3</p>
                            <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                <FaLocationDot className="shrink-0 text-resume" aria-hidden />
                                Chittagong, Bangladesh · Open to remote-friendly roles
                            </p>
                        </div>
                    </header>

                    <div className="grid gap-0 lg:grid-cols-12">
                        {/* Sidebar */}
                        <aside className="border-b border-zinc-100 bg-zinc-50/70 px-6 py-8 dark:border-zinc-800 dark:bg-zinc-950/50 lg:col-span-4 lg:border-b-0 lg:border-r">
                            <div className="mx-auto flex max-w-xs flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
                                <div className="relative">
                                    <img
                                        src="/images/bw1.jpg"
                                        alt=""
                                        className="h-36 w-36 rounded-2xl object-cover shadow-lg ring-4 ring-white dark:ring-zinc-800"
                                    />
                                    <div
                                        className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-white bg-resume dark:border-zinc-900"
                                        aria-hidden
                                    />
                                </div>
                                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                                    Contact
                                </p>
                                <ul className="mt-4 w-full space-y-3">
                                    {CONTACT.map(({ icon: Icon, label, value, href }) => (
                                        <li key={label}>
                                            <a
                                                href={href}
                                                className="group flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3 text-left transition hover:border-resume/40 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80 dark:hover:border-resume/50"
                                            >
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-resume dark:bg-emerald-950/50 dark:text-emerald-400">
                                                    <Icon className="text-lg" aria-hidden />
                                                </span>
                                                <span className="min-w-0">
                                                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                                                        {label}
                                                    </span>
                                                    <span className="block truncate text-sm font-medium text-zinc-800 group-hover:text-resume dark:text-zinc-200 dark:group-hover:text-emerald-400">
                                                        {value}
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mx-auto mt-10 max-w-xs lg:mx-0">
                                <SectionLabel>Core stack</SectionLabel>
                                <div className="flex flex-wrap gap-2">
                                    {SKILL_GROUPS.flatMap((g) => g.skills).map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-lg border border-zinc-200/90 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Main column */}
                        <div className="px-6 py-8 sm:px-10 sm:py-10 lg:col-span-8">
                            <section aria-labelledby="summary-heading">
                                <SectionLabel>Profile</SectionLabel>
                                <h3 id="summary-heading" className="sr-only">
                                    Professional summary
                                </h3>
                                <p className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">{SUMMARY}</p>
                            </section>

                            <section className="mt-12" aria-labelledby="exp-heading">
                                <SectionLabel>Experience</SectionLabel>
                                <h3 id="exp-heading" className="sr-only">
                                    Work experience
                                </h3>
                                <ul className="space-y-8">
                                    {EXPERIENCE.map((job) => (
                                        <li
                                            key={job.company + job.title}
                                            className="relative rounded-xl border border-zinc-100 bg-zinc-50/40 p-5 dark:border-zinc-800 dark:bg-zinc-950/40 sm:p-6"
                                        >
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                                <div className="flex gap-4">
                                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                                                        <img src={job.logo} alt="" className="h-10 w-10 object-contain" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">
                                                            {job.title}
                                                        </h4>
                                                        <p className="text-sm font-semibold text-resume">{job.company}</p>
                                                        <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                                                            {job.type}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-resume dark:bg-emerald-950/60 dark:text-emerald-300">
                                                    {job.period}
                                                </span>
                                            </div>
                                            <ul className="mt-5 space-y-2 border-t border-zinc-200/80 pt-5 dark:border-zinc-800">
                                                {job.highlights.map((line) => (
                                                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-resume" aria-hidden />
                                                        {line}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="mt-12" aria-labelledby="edu-heading">
                                <SectionLabel>Education</SectionLabel>
                                <h3 id="edu-heading" className="sr-only">
                                    Education
                                </h3>
                                <ul className="space-y-6">
                                    {EDUCATION.map((edu) => (
                                        <li
                                            key={edu.school}
                                            className="flex gap-4 border-l-2 border-resume/70 pl-5 dark:border-emerald-500/50"
                                        >
                                            {edu.logo ? (
                                                <a
                                                    href={edu.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:border-resume/40 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-emerald-500/50"
                                                    aria-label={`${edu.school} (opens in new tab)`}
                                                >
                                                    <img
                                                        src={edu.logo}
                                                        alt=""
                                                        className="h-10 w-10 object-contain p-0.5"
                                                    />
                                                </a>
                                            ) : null}
                                            <div className="min-w-0 flex-1">
                                                <h4 className="font-heading font-bold text-zinc-900 dark:text-zinc-100">
                                                    {edu.href ? (
                                                        <a
                                                            href={edu.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="transition hover:text-resume dark:hover:text-emerald-400"
                                                        >
                                                            {edu.school}
                                                        </a>
                                                    ) : (
                                                        edu.school
                                                    )}
                                                </h4>
                                                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{edu.degree}</p>
                                                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-500">
                                                    <span className="font-semibold text-zinc-600 dark:text-zinc-400">
                                                        {edu.period}
                                                    </span>
                                                    <span>·</span>
                                                    <span>{edu.location}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="mt-12" aria-labelledby="skills-heading">
                                <SectionLabel>Technical depth</SectionLabel>
                                <h3 id="skills-heading" className="sr-only">
                                    Technical skills
                                </h3>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {SKILL_GROUPS.map((group) => (
                                        <div key={group.label}>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                                {group.label}
                                            </p>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {group.skills.map((s) => (
                                                    <span
                                                        key={s}
                                                        className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                                                    >
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </article>

                <p className="resume-no-print mt-8 text-center text-xs text-zinc-400 dark:text-zinc-600">
                    References available upon request · Last updated {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Resume;
