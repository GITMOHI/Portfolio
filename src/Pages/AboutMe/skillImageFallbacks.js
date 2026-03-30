/**
 * Stable CDN logos when skills.json `image` URLs break (hotlink, CDN moves, CORS).
 * Keys must match `name` in public/skills.json.
 */
export const SKILL_IMAGE_FALLBACKS = {
    'HTML & CSS':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    JavaScript:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    Django: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'Express.js':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    MongoDB:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    'Version Control (Git)':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'RESTful APIs':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
};

export function getSkillImageFallback(name) {
    if (!name || typeof name !== 'string') return null;
    return SKILL_IMAGE_FALLBACKS[name.trim()] ?? null;
}
