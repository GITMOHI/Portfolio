import React, { useCallback, useState } from 'react';
import { getSkillImageFallback } from './skillImageFallbacks';

/** Simple Icons slugs — second CDN tier if devicon fails */
const SIMPLE_ICON_SLUG = {
    'Tailwind CSS': 'tailwindcss',
    Shadcn: 'shadcnui',
    TypeScript: 'typescript',
    React: 'react',
    Golang: 'go',
    'Node.js': 'nodedotjs',
    'Express.js': 'express',
    'Socket.IO': 'socketdotio',
    MongoDB: 'mongodb',
    PostgreSQL: 'postgresql',
    Firestore: 'firebase',
    GCP: 'googlecloud',
    'Version Control (Git)': 'git',
    'RESTful APIs': 'openapiinitiative',
};

const Skill = ({ s }) => {
    const fallbackSrc = getSkillImageFallback(s.name);
    const iconSlug = SIMPLE_ICON_SLUG[s.name?.trim()];
    const simpleIconSrc = iconSlug
        ? `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconSlug}.svg`
        : null;

    const [src, setSrc] = useState(s.image);
    /** json → devicon CDN → simple-icons SVG → local placeholder */
    const [tier, setTier] = useState('json');

    const handleError = useCallback(() => {
        if (tier === 'json' && fallbackSrc) {
            setSrc(fallbackSrc);
            setTier('devicon');
            return;
        }
        if (tier === 'devicon' && simpleIconSrc) {
            setSrc(simpleIconSrc);
            setTier('simple');
            return;
        }
        setTier('empty');
        setSrc(
            'data:image/svg+xml,' +
                encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="%23e4e4e7"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="%2371717a" font-size="20" font-family="system-ui,sans-serif">?</text></svg>'
                )
        );
    }, [tier, fallbackSrc, simpleIconSrc]);

    return (
        <div className="group rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 shadow-soft transition duration-200 hover:border-brand/35 hover:shadow-card dark:border-zinc-700/80 dark:bg-zinc-950/60 dark:hover:border-brand/40 motion-reduce:transition-none">
            <div className="flex h-14 w-14 items-center justify-center">
                <img
                    src={src}
                    alt=""
                    className={`max-h-14 max-w-14 object-contain opacity-90 dark:opacity-100 ${
                        tier === 'simple' ? 'dark:invert dark:opacity-90' : ''
                    }`}
                    onError={handleError}
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.description}</p>
        </div>
    );
};

export default Skill;
