import { FaFilePdf, FaGithub, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';

const Resume = () => {
    const handleDownloadPDF = () => {
        window.print();
    };

    const sectionTitle = (label) => (
        <div className="mb-4 flex items-end gap-1">
            <span className="font-heading text-2xl font-bold text-resume">I</span>
            <span className="border-l-2 border-resume pl-2 font-heading text-lg font-bold uppercase tracking-wide text-resume">
                {label}
            </span>
        </div>
    );

    return (
        <div className="min-h-screen w-full bg-zinc-50 pb-16 dark:bg-zinc-950">
            <div className="border-b border-zinc-200/90 bg-white px-6 py-8 shadow-soft dark:border-zinc-800 dark:bg-zinc-900/50 sm:px-8">
                <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-resume">Résumé</p>
                        <h1 className="mt-1 font-display text-2xl font-normal text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                            Online CV
                        </h1>
                    </div>
                    <button
                        type="button"
                        onClick={handleDownloadPDF}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-resume px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-resume-hover focus-ring"
                    >
                        <FaFilePdf aria-hidden />
                        Print / PDF
                    </button>
                </div>
            </div>

            <div className="mx-auto mt-10 max-w-4xl px-6 sm:px-8">
                <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-card dark:border-zinc-700/80 dark:bg-zinc-900/50">
                    <div className="p-8 sm:p-12">
                        <div className="flex flex-col justify-between gap-8 border-b border-zinc-100 pb-10 dark:border-zinc-800 sm:flex-row sm:items-start">
                            <div>
                                <h2 className="font-heading text-4xl font-black tracking-wide text-resume">M O H I</h2>
                                <p className="mt-2 text-base text-zinc-700 dark:text-zinc-300">
                                    Junior Software Engineer at Lab3
                                </p>
                            </div>
                            <div className="space-y-2 border-zinc-200 sm:border-l sm:pl-6 dark:border-zinc-700">
                                <p className="flex items-center gap-2 text-xs text-zinc-700 underline dark:text-zinc-300">
                                    <FaPhone className="shrink-0" aria-hidden />
                                    01625680207
                                </p>
                                <p className="flex items-center gap-2 text-xs text-zinc-700 underline dark:text-zinc-300">
                                    <MdEmail className="shrink-0" aria-hidden />
                                    umohi559@gmail.com
                                </p>
                                <p className="flex items-center gap-2 text-xs text-zinc-700 underline dark:text-zinc-300">
                                    <FaGithub className="shrink-0" aria-hidden />
                                    github
                                </p>
                                <p className="flex items-center gap-2 text-xs text-zinc-700 underline dark:text-zinc-300">
                                    <SiLeetcode className="shrink-0" aria-hidden />
                                    leetcode
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                            <img
                                src="/images/bw1.jpg"
                                className="h-32 w-32 shrink-0 rounded-full object-cover ring-4 ring-resume/25 dark:ring-resume/40"
                                alt="Mohi"
                            />
                            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                                Summarise your career here. You can make a PDF version of your resume using our free
                                Sketch template here. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor
                                sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et
                                ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                                Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                                nibh.
                            </p>
                        </div>

                        <div className="mt-14">{sectionTitle('Education')}</div>
                        <div className="space-y-6">
                            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                <div>
                                    <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                                        Chittagong University of Engineering and Technology
                                    </p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        Bachelor of Science in Computer Science & Engineering
                                    </p>
                                </div>
                                <p className="shrink-0 text-sm text-zinc-700 dark:text-zinc-300">
                                    2020 – 2025 | Chittagong, Bangladesh
                                </p>
                            </div>
                            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                <div>
                                    <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                                        Armed Police Battalion Public School And College
                                    </p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        Higher Secondary School Certificate in Science (GPA- 5/5)
                                    </p>
                                </div>
                                <p className="shrink-0 text-sm text-zinc-700 dark:text-zinc-300">
                                    2020 – 2025 | Chittagong, Bangladesh
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">{sectionTitle('Work experience')}</div>
                        <div className="flex flex-col justify-between gap-4 border-b border-zinc-100 pb-8 dark:border-zinc-800 sm:flex-row sm:items-start">
                            <div className="flex gap-4">
                                <img src="/images/lab3.png" alt="Lab3" className="h-12 w-12 object-contain" />
                                <div>
                                    <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                                        Junior Software Engineer
                                    </p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Lab3</p>
                                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        Working as a Junior Software Engineer, contributing to web application
                                        development and collaborating with the team on various projects.
                                    </p>
                                </div>
                            </div>
                            <p className="shrink-0 text-sm text-zinc-700 dark:text-zinc-300">Present</p>
                        </div>

                        <div className="mt-10">{sectionTitle('Programming skills')}</div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <p>
                                <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                                    Programming languages:{' '}
                                </span>
                                C++, Javascript, Python
                            </p>
                            <p>
                                <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                                    Frontend libraries:{' '}
                                </span>
                                React.js, Redux
                            </p>
                            <p>
                                <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                                    Backend frameworks:{' '}
                                </span>
                                Node.js, Express.js, Django
                            </p>
                            <p>
                                <span className="font-semibold text-zinc-800 dark:text-zinc-100">Databases: </span>
                                MySQL, MongoDB
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
