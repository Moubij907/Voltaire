// Core configuration type system.
// Every niche is built from this single contract.
// Change one config object → rebrand the entire website.

export type IconName =
  | 'zap'
  | 'lightbulb'
  | 'car'
  | 'home'
  | 'shield'
  | 'plug'
  | 'wrench'
  | 'cpu'
  | 'battery'
  | 'gauge'
  | 'sun'
  | 'sparkles'
  | 'phone'
  | 'mail'
  | 'mapPin'
  | 'clock'
  | 'check'
  | 'arrowRight'
  | 'arrowUpRight'
  | 'star'
  | 'award'
  | 'badgeCheck'
  | 'leaf'
  | 'snowflake'
  | 'flame'
  | 'droplets'
  | 'wind'
  | 'hammer'
  | 'keyRound'
  | 'paintRoller'
  | 'bug'
  | 'truck'
  | 'building'
  | 'ruler'
  | 'users'
  | 'quote';

export interface NavItem {
  label: string;
  to: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: IconName;
  excerpt: string;
  overview: string;
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  gallery: string[];
  relatedProjectSlugs: string[];
  startingPrice?: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  neighborhood: string;
  category: string;
  year: string;
  timeline: string;
  challenge: string;
  solution: string;
  before: string;
  after: string;
  cover: string;
  gallery: string[];
  results: { label: string; value: string }[];
  clientQuote: { quote: string; name: string; role: string };
  serviceSlug: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceArea {
  name: string;
  description: string;
}

export interface License {
  name: string;
  issuer: string;
  number: string;
}

export interface Award {
  name: string;
  year: string;
  issuer: string;
}

export interface TrustBadge {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'linkedin' | 'x';
}

export interface AccentScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface CTAS {
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
}

export interface ContactInfo {
  phone: string;
  phoneHref: string;
  emergencyPhone: string;
  emergencyPhoneHref: string;
  email: string;
  emailHref: string;
  address: { line1: string; line2: string; city: string; state: string; zip: string };
  mapEmbedUrl: string;
  hours: { day: string; hours: string }[];
  emergencyNote: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface NicheConfig {
  niche: string;
  business: {
    name: string;
    shortName: string;
    tagline: string;
    establishedYear: number;
    description: string;
    story: string[];
  };
  hero: {
    eyebrow: string;
    headline: string;
    /** Optional explicit line breaks for the hero display headline — falls
     * back to natural wrapping of `headline` when omitted. */
    headlineLines?: string[];
    subheadline: string;
    primaryCta: CTAS['primary'];
    secondaryCta: CTAS['secondary'];
    trustBadges: TrustBadge[];
    image: string;
  };
  accent: {
    name: string;
    scale: AccentScale;
    cssVar: string;
  };
  navigation: NavItem[];
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  process: ProcessStep[];
  serviceAreas: ServiceArea[];
  licenses: License[];
  awards: Award[];
  trustBadges: TrustBadge[];
  team: TeamMember[];
  social: SocialLink[];
  contact: ContactInfo;
  seo: SEOConfig;
  cta: {
    headline: string;
    subheadline: string;
    primary: CTAS['primary'];
    secondary: CTAS['secondary'];
  };
}
