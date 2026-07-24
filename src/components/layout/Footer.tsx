import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useConfig } from '@/context/ConfigContext';
import { Container } from '@/components/ui/Container';

const socialIcons: Record<string, LucideIcon> = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin, x: Linkedin };

export function Footer() {
  const config = useConfig();
  const { business, navigation, services, contact, social, serviceAreas } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      {/* Top — large brand statement */}
      <Container>
        <div className="grid grid-cols-1 gap-16 py-20 lg:grid-cols-12 lg:py-24">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link to="/" className="group flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-accent-500/10 transition-all duration-700 group-hover:bg-accent-500/20 group-hover:scale-110" />
                <span className="h-2 w-2 rounded-full bg-accent-500" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-medium tracking-tight text-ink">{business.shortName}</span>
                <span className="mt-1 text-[0.58rem] font-sans uppercase tracking-[0.22em] text-ink-muted/80">
                  {business.tagline.split(' ').slice(0, 2).join(' ')}
                </span>
              </span>
            </Link>
            <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed text-ink-muted text-pretty">{business.description}</p>

            <div className="mt-8 flex gap-3">
              {social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-all duration-400 ease-premium hover:border-accent-500 hover:bg-accent-500/5 hover:text-accent-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="text-label font-sans font-medium uppercase text-ink-muted">Services</h4>
              <ul className="mt-6 space-y-3.5">
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-sm text-ink transition-colors duration-300 hover:text-accent-600"
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-label font-sans font-medium uppercase text-ink-muted">Explore</h4>
              <ul className="mt-6 space-y-3.5">
                {navigation.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-sm text-ink transition-colors duration-300 hover:text-accent-600">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-label font-sans font-medium uppercase text-ink-muted">Contact</h4>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3 text-ink">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <span className="leading-relaxed">
                    {contact.address.line1}<br />
                    {contact.address.city}, {contact.address.state} {contact.address.zip}
                  </span>
                </li>
                <li>
                  <a href={contact.phoneHref} className="flex items-center gap-3 text-ink transition-colors duration-300 hover:text-accent-600">
                    <Phone className="h-4 w-4 shrink-0 text-accent-600" />
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={contact.emailHref} className="flex items-center gap-3 text-ink transition-colors duration-300 hover:text-accent-600">
                    <Mail className="h-4 w-4 shrink-0 text-accent-600" />
                    {contact.email}
                  </a>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {serviceAreas.slice(0, 3).map((area) => (
                  <span key={area.name} className="rounded-full border border-line px-2.5 py-1 text-[0.65rem] text-ink-muted">
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 py-7 sm:flex-row sm:items-center">
            <p className="text-xs text-ink-muted">
              © {year} {business.name}. Licensed & insured.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-ink-muted transition-colors duration-300 hover:text-ink">Privacy</Link>
              <Link to="/terms" className="text-xs text-ink-muted transition-colors duration-300 hover:text-ink">Terms</Link>
              <a
                href={contact.emergencyPhoneHref}
                className="flex items-center gap-1.5 text-xs font-medium text-ink-muted transition-colors duration-300 hover:text-accent-600"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-500" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-accent-500" />
                </span>
                24/7 emergency
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
