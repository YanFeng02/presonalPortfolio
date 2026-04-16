import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // If Resend API key is configured, send via Resend
    const apiKey = process.env.RESEND_API_KEY;
    const toAddress = process.env.CONTACT_TO_EMAIL || 'fengyanfrank@126.com';
    const fromAddress = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    if (apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: `Portfolio Contact <${fromAddress}>`,
        to: [toAddress],
        reply_to: email,
        subject: `New message from ${name} — via portfolio`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #f5f5f7; border-radius: 16px;">
            <h2 style="margin: 0 0 24px; font-size: 24px; color: #1d1d1f; letter-spacing: -0.02em;">New portfolio message</h2>
            <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
              <div style="font-size: 13px; color: #86868b; margin-bottom: 4px;">From</div>
              <div style="font-size: 16px; color: #1d1d1f; margin-bottom: 16px;"><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</div>
              <div style="font-size: 13px; color: #86868b; margin-bottom: 4px;">Message</div>
              <div style="font-size: 15px; color: #1d1d1f; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
            </div>
            <div style="font-size: 12px; color: #86868b; text-align: center;">Sent from your portfolio contact form</div>
          </div>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Failed to send — please email directly' },
          { status: 500 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    // Fallback: no API key configured — signal client to use mailto
    return NextResponse.json({ ok: true, fallback: true });
  } catch (err) {
    console.error('Contact error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
