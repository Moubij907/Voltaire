import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useConfig } from '@/context/ConfigContext';
import { Container } from '@/components/ui/Container';

export function Navbar() {
  const config = useConfig();
  const { business, navigation, contact, hero } = config;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-premium ${
        scrolled || open
          ? 'bg-canvas/80 backdrop-blur-2xl border-b border-line/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-5">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-3" aria-label={business.name}>
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-accent-500/10 transition-all duration-700 ease-premium group-hover:bg-accent-500/20 group-hover:scale-110" />
              <span className="h-2 w-2 rounded-full bg-accent-500 transition-transform duration-700 ease-premium group-hover:scale-125" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-medium tracking-tight text-ink transition-colors duration-300">{business.shortName}</span>
              <span className="mt-0.5 text-[0.58rem] font-sans uppercase tracking-[0.22em] text-ink-muted/80">
                {business.tagline.split(' ').slice(0, 2).join(' ')}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-400 ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-px left-4 right-4 h-px bg-accent-500 transition-transform duration-500 ease-premium ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ transformOrigin: 'left' }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={contact.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors duration-300 hover:text-ink"
            >
              <Phone className="h-3.5 w-3.5" />
              {contact.phone}
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-all duration-500 ease-premium hover:bg-accent-600 hover:text-ink"
            >
              {hero.primaryCta.label}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface/60 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-400 ease-premium ${open ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-ink transition-all duration-300 ease-premium ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-400 ease-premium ${open ? 'top-2 -rotate-45' : 'top-4'}`} />
            </span>
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-canvas transition-all duration-600 ease-premium lg:hidden ${
          open ? 'max-h-screen border-t border-line/40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Container>
          <div className="flex flex-col py-6">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-line/40 py-5 font-display text-2xl font-light tracking-tight transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-ink-muted'
                  }`
                }
              >
                {item.label}
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500/60" />
              </NavLink>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <a href={contact.phoneHref} className="flex items-center gap-3 text-base font-medium text-ink">
                <Phone className="h-4 w-4 text-accent-600" />
                {contact.phone}
              </a>
              <Link
                to="/contact"
                className="rounded-full bg-ink px-6 py-4 text-center text-sm font-medium text-canvas"
              >
                {hero.primaryCta.label}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </motion.header>
  );
}
