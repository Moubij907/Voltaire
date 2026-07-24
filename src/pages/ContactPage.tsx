import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { useSEO } from '@/hooks/useSEO';

export function ContactPage() {
  const { contact, business, services } = useConfig();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  useSEO({
    title: `Contact — ${business.name}`,
    description: `Get in touch with ${business.name}. Call ${contact.phone}, email ${contact.email}, or request a consultation online.`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-line bg-canvas px-4 py-3.5 text-ink placeholder:text-ink-muted/50 transition-all duration-300 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20';

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start with a conversation."
        subtitle="Tell us what you are trying to power. A master electrician will respond — usually within a few hours during business days."
      />

      <Section className="bg-canvas">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Request a consultation</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              {submitted ? (
                <div className="mt-10 flex flex-col items-start gap-4 rounded-3xl border border-accent-500/30 bg-accent-500/5 p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-ink">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink">Message received.</h3>
                  <p className="max-w-md text-base leading-relaxed text-ink-muted text-pretty">
                    Thank you, {form.name || 'there'}. A master electrician will reach out to you within a few hours. For urgent matters, call us directly at {contact.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2.5 block text-sm font-medium text-ink">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-2.5 block text-sm font-medium text-ink">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                        placeholder="(212) 555-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2.5 block text-sm font-medium text-ink">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2.5 block text-sm font-medium text-ink">Service needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.shortTitle}</option>
                      ))}
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2.5 block text-sm font-medium text-ink">Project details</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass}
                      placeholder="Tell us about the property, the problem, and any timeline you are working with."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-canvas transition-all duration-500 ease-premium hover:bg-accent-600 hover:text-ink"
                  >
                    Send request
                    <Send className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="space-y-6">
                {/* Direct contact */}
                <div className="rounded-3xl border border-line p-8">
                  <h3 className="text-label font-sans font-medium uppercase text-ink-muted">Direct</h3>
                  <div className="mt-6 space-y-5">
                    <a href={contact.phoneHref} className="flex items-center gap-3 text-ink transition-colors duration-300 hover:text-accent-600">
                      <Phone className="h-5 w-5 text-accent-600" />
                      <span className="font-display text-lg">{contact.phone}</span>
                    </a>
                    <a href={contact.emailHref} className="flex items-center gap-3 text-ink transition-colors duration-300 hover:text-accent-600">
                      <Mail className="h-5 w-5 text-accent-600" />
                      <span className="text-base">{contact.email}</span>
                    </a>
                    <div className="flex items-start gap-3 text-ink">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                      <span className="text-base leading-relaxed">{contact.address.line1}, {contact.address.city}, {contact.address.state} {contact.address.zip}</span>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="rounded-3xl border border-line p-8">
                  <h3 className="flex items-center gap-2 text-label font-sans font-medium uppercase text-ink-muted">
                    <Clock className="h-4 w-4" /> Hours
                  </h3>
                  <div className="mt-6 space-y-3.5">
                    {contact.hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-ink-muted">{h.day}</span>
                        <span className="font-medium text-ink">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency */}
                <div className="rounded-3xl bg-ink p-8">
                  <h3 className="text-label font-sans font-medium uppercase text-canvas/50">Emergency</h3>
                  <p className="mt-4 text-sm leading-relaxed text-canvas/60 text-pretty">{contact.emergencyNote}</p>
                  <a
                    href={contact.emergencyPhoneHref}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-400 hover:bg-accent-400"
                  >
                    <Phone className="h-4 w-4" />
                    {contact.emergencyPhone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Map */}
      <section className="border-t border-line bg-surface/40">
        <div className="relative h-[420px] w-full overflow-hidden">
          <iframe
            title="Map"
            src={contact.mapEmbedUrl}
            className="absolute inset-0 h-full w-full grayscale-[0.3]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
