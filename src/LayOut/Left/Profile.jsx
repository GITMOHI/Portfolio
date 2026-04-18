import React from 'react';
import { TfiLinkedin } from 'react-icons/tfi';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants/social';

const Profile = ({ color }) => {
    const iconWrap =
        'flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-soft transition hover:bg-white';

    return (
        <div className="border-b border-white/10 px-4 pb-8 pt-8">
            <div className="flex flex-col items-center space-y-5">
                <h3 className="text-center text-2xl font-bold tracking-tight text-white">Mohi</h3>
                <div className="avatar">
                    <div className="w-32 rounded-full ring-4 ring-white/40 ring-offset-2 ring-offset-transparent">
                        <img
                            src="/images/bw.jpg"
                            alt="Mohi — Junior Software Engineer"
                            className="rounded-full object-cover"
                            width={128}
                            height={128}
                        />
                    </div>
                </div>
                <p className="max-w-[220px] text-center text-sm leading-relaxed text-white/90">
                    Hi, I&apos;m Mohi — Junior Software Engineer at Lab3.
                </p>

                <div className="flex flex-row flex-wrap justify-center gap-3 pt-2">
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconWrap}
                        aria-label="LinkedIn"
                    >
                        <TfiLinkedin style={{ color }} className="text-xl" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconWrap}
                        aria-label="Twitter"
                    >
                        <IoLogoTwitter style={{ color }} className="text-xl" />
                    </a>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconWrap}
                        aria-label="GitHub"
                    >
                        <IoLogoGithub style={{ color }} className="text-xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
