/**
 * Stable CDN logos when skills.json `image` URLs break (hotlink, CDN moves, CORS).
 * Keys must match `name` in public/skills.json.
 */
export const SKILL_IMAGE_FALLBACKS = {
    'Tailwind CSS':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    Shadcn: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shadcnui.svg',
    TypeScript:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    Golang: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'Express.js':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'Socket.IO': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/socketdotio.svg',
    MongoDB:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    PostgreSQL:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    Firestore:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
    GCP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    'Version Control (Git)':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'RESTful APIs':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
};

export function getSkillImageFallback(name) {
    if (!name || typeof name !== 'string') return null;
    return SKILL_IMAGE_FALLBACKS[name.trim()] ?? null;
}
