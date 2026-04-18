import { isSmtpConfigured, parseAndValidateContactBody, sendContactEmail } from '../server/send-contact-email.js';

function readJsonBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', (c) => chunks.push(c));
        req.on('end', () => {
            try {
                const raw = Buffer.concat(chunks).toString('utf8');
                if (!raw) {
                    resolve(null);
                    return;
                }
                resolve(JSON.parse(raw));
            } catch (e) {
                reject(e);
            }
        });
        req.on('error', reject);
    });
}

export default async function handler(req, res) {
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

    try {
        const raw = await readJsonBody(req);
        const payload = parseAndValidateContactBody(raw);
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
}
