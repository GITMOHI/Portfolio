import {
    isSmtpConfigured,
    parseAndValidateContactBody,
    sendContactEmail,
} from './server/send-contact-email.js';

/** Dev-only: serve POST/GET /api/contact so `npm run dev` matches Vercel. */
export function contactApiPlugin() {
    return {
        name: 'contact-api-dev',
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                const url = req.url?.split('?')[0] || '';
                if (url !== '/api/contact') {
                    next();
                    return;
                }

                res.setHeader('Content-Type', 'application/json');

                if (req.method === 'GET') {
                    res.statusCode = 200;
                    res.end(JSON.stringify({ configured: isSmtpConfigured() }));
                    return;
                }

                if (req.method !== 'POST') {
                    res.statusCode = 405;
                    res.end(JSON.stringify({ error: 'Method not allowed' }));
                    return;
                }

                const raw = await new Promise((resolve, reject) => {
                    const chunks = [];
                    req.on('data', (c) => chunks.push(c));
                    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
                    req.on('error', reject);
                });

                try {
                    const body = raw ? JSON.parse(raw) : null;
                    const payload = parseAndValidateContactBody(body);
                    await sendContactEmail(payload);
                    res.statusCode = 200;
                    res.end(JSON.stringify({ ok: true }));
                } catch (err) {
                    if (err?.code === 'SMTP_NOT_CONFIGURED') {
                        res.statusCode = 503;
                        res.end(JSON.stringify({ error: 'Contact form is not configured' }));
                        return;
                    }
                    const msg = err?.message || '';
                    if (
                        msg.startsWith('Invalid ') ||
                        msg === 'Invalid JSON body' ||
                        err instanceof SyntaxError
                    ) {
                        res.statusCode = 400;
                        res.end(JSON.stringify({ error: 'Invalid form data' }));
                        return;
                    }
                    console.error('contact mail error', err);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Failed to send message' }));
                }
            });
        },
    };
}
