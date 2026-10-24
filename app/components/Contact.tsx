'use client';

import { useState } from 'react';
import Section from './Section';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // If server has no mail API configured, open user's mail client as graceful fallback
      if (data.fallback) {
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
        window.location.href = `mailto:fengyanfrank@126.com?subject=${subject}&body=${body}`;
      }

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Failed to send');
      // Always offer mailto as last resort
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <Section id="contact" title="Contact">
      <p className="leading-[1.75]">
        I'm looking for full-time roles in Australia starting December 2026, and I'm happy to talk
        about internships or part-time work too. I have a valid Australian work visa and usually
        reply within a day.
      </p>

      <dl className="mt-8 divide-y divide-line border-y border-line text-[14px]">
        <div className="grid grid-cols-[96px_1fr] py-2.5">
          <dt className="text-muted">Email</dt>
          <dd><a href="mailto:fengyanfrank@126.com" className="link">fengyanfrank@126.com</a></dd>
        </div>
        <div className="grid grid-cols-[96px_1fr] py-2.5">
          <dt className="text-muted">Phone</dt>
          <dd><a href="tel:+61421798034" className="link">0421 798 034</a></dd>
        </div>
        <div className="grid grid-cols-[96px_1fr] py-2.5">
          <dt className="text-muted">Location</dt>
          <dd>Sydney, NSW · Open to remote</dd>
        </div>
      </dl>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-[13px] text-muted mb-1.5">Name</label>
            <input
              id="name"
              type="text"
              required
              maxLength={120}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border border-line rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-muted transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[13px] text-muted mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              required
              maxLength={200}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border border-line rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-muted transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-[13px] text-muted mb-1.5">Message</label>
          <textarea
            id="message"
            required
            maxLength={5000}
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border border-line rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-muted transition-colors resize-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="px-5 py-2.5 text-[14px] font-medium rounded-full bg-fg text-bg hover:opacity-85 disabled:opacity-50 transition-opacity"
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Send message'}
          </button>
          <span className="text-[13px] text-muted">
            {status === 'sent' && "Thanks, I'll get back to you soon."}
            {status === 'error' && (errorMsg || 'Something went wrong. Please email me directly.')}
          </span>
        </div>
      </form>
    </Section>
  );
}
