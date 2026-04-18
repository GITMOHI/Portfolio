import nodemailer from 'nodemailer';

const MAX = { name: 200, subject: 300, message: 8000 };

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/** @param {Record<string, string | undefined>} env */
export function isSmtpConfigured(env = process.env) {
    return Boolean(
        env.SMTP_HOST?.trim() &&
            env.SMTP_USER?.trim() &&
            env.SMTP_PASS?.trim() &&
            env.CONTACT_TO_EMAIL?.trim()
    );
}

/**
 * @param {unknown} body
 * @returns {{ name: string; email: string; subject: string; message: string }}
 */
export function parseAndValidateContactBody(body) {
    if (!body || typeof body !== 'object') {
        throw new Error('Invalid JSON body');
    }
    const { name, email, subject, message } = body;
    const n = typeof name === 'string' ? name.trim() : '';
    const e = typeof email === 'string' ? email.trim() : '';
    const s = typeof subject === 'string' ? subject.trim() : '';
    const m = typeof message === 'string' ? message.trim() : '';

    if (!n || n.length > MAX.name) throw new Error('Invalid name');
    if (!e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) throw new Error('Invalid email');
    if (!s || s.length > MAX.subject) throw new Error('Invalid subject');
    if (!m || m.length > MAX.message) throw new Error('Invalid message');

    return { name: n, email: e, subject: s, message: m };
}

/**
 * @param {{ name: string; email: string; subject: string; message: string }} payload
 * @param {Record<string, string | undefined>} [env]
 */
export async function sendContactEmail(payload, env = process.env) {
    if (!isSmtpConfigured(env)) {
        const err = new Error('SMTP is not configured');
        err.code = 'SMTP_NOT_CONFIGURED';
        throw err;
    }

    const port = Number(env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
        host: env.SMTP_HOST.trim(),
        port,
        secure: port === 465,
        auth: {
            user: env.SMTP_USER.trim(),
            pass: env.SMTP_PASS.trim(),
        },
    });

    const to = env.CONTACT_TO_EMAIL.trim();
    const from = env.SMTP_FROM?.trim() || env.SMTP_USER.trim();

    await transporter.sendMail({
        from: `"Portfolio contact" <${from}>`,
        to,
        replyTo: payload.email,
        subject: `[Portfolio] ${payload.subject}`,
        text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
        html: `<p><strong>From:</strong> ${escapeHtml(payload.name)} &lt;${escapeHtml(payload.email)}&gt;</p><p><strong>Message:</strong></p><p>${escapeHtml(payload.message).replace(/\n/g, '<br/>')}</p>`,
    });
}
