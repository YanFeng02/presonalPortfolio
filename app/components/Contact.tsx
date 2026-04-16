'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Phone, Check, Loader2 } from 'lucide-react';

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
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-apple-blue/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.25em] uppercase text-apple-blue mb-6 text-center"
        >
          — Let's talk
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[36px] sm:text-[52px] md:text-[68px] lg:text-[84px] leading-[0.98] tracking-tightest font-semibold text-center max-w-4xl mx-auto"
        >
          <span className="gradient-text">Got a role in mind?</span>
          <br />
          <span className="gradient-text-blue">Let's build something.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 text-center text-lg text-apple-text/60 max-w-xl mx-auto"
        >
          Open to internship, part-time, and full-time roles across Australia and North America.
          Usually replies within 24 hours.
        </motion.p>

        <div className="mt-14 md:mt-20 grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12">
          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <a
              href="mailto:fengyanfrank@126.com"
              className="flex items-start gap-4 glass-light rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-apple-blue/20 transition-colors">
                <Mail size={16} className="text-apple-blue" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] tracking-wider uppercase text-apple-muted">Email</div>
                <div className="text-[14px] text-apple-text mt-0.5 truncate">fengyanfrank@126.com</div>
              </div>
            </a>

            <a
              href="tel:+61476921409"
              className="flex items-start gap-4 glass-light rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-apple-blue/20 transition-colors">
                <Phone size={16} className="text-apple-blue" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[11px] tracking-wider uppercase text-apple-muted">Phone</div>
                <div className="text-[14px] text-apple-text mt-0.5">+61 (0) 476 921 409</div>
              </div>
            </a>

            <div className="flex items-start gap-4 glass-light rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-apple-blue" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[11px] tracking-wider uppercase text-apple-muted">Based in</div>
                <div className="text-[14px] text-apple-text mt-0.5">Sydney, NSW · Open to remote</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://github.com/YanFeng02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass-light rounded-2xl p-4 hover:bg-white/[0.08] transition-all duration-500 text-[13px] text-apple-text btn-lift"
              >
                <Github size={15} strokeWidth={1.8} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass-light rounded-2xl p-4 hover:bg-white/[0.08] transition-all duration-500 text-[13px] text-apple-text btn-lift"
              >
                <Linkedin size={15} strokeWidth={1.8} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="glass-light rounded-3xl p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-[11px] tracking-wider uppercase text-apple-muted mb-2">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={120}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-apple-border rounded-xl px-4 py-3 text-[14px] text-apple-text placeholder:text-apple-muted/50 focus:outline-none focus:border-apple-blue/60 focus:bg-white/[0.05] transition-all duration-300"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] tracking-wider uppercase text-apple-muted mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={200}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-apple-border rounded-xl px-4 py-3 text-[14px] text-apple-text placeholder:text-apple-muted/50 focus:outline-none focus:border-apple-blue/60 focus:bg-white/[0.05] transition-all duration-300"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] tracking-wider uppercase text-apple-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                maxLength={5000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.03] border border-apple-border rounded-xl px-4 py-3 text-[14px] text-apple-text placeholder:text-apple-muted/50 focus:outline-none focus:border-apple-blue/60 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                placeholder="Tell me about the role, team, or what you'd like to talk about..."
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="text-[12px] text-apple-muted">
                {status === 'error' && (
                  <span className="text-red-400">{errorMsg || 'Something went wrong'} — </span>
                )}
                {status !== 'sent' && (
                  <span>
                    Prefer email?{' '}
                    <a
                      href={`mailto:fengyanfrank@126.com`}
                      className="text-apple-blue hover:text-apple-blueHover link-underline"
                    >
                      Write directly →
                    </a>
                  </span>
                )}
                {status === 'sent' && (
                  <span className="text-emerald-400 inline-flex items-center gap-1.5">
                    <Check size={14} /> Message sent. I'll be in touch shortly.
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium rounded-full btn-lift transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-apple-blue hover:bg-apple-blueHover text-white disabled:opacity-60'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Sending…
                  </>
                ) : status === 'sent' ? (
                  <>
                    <Check size={14} /> Sent
                  </>
                ) : (
                  <>
                    Send message <Send size={14} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
