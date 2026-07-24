import { useConfig } from '@/context/ConfigContext';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { useSEO } from '@/hooks/useSEO';

export function PrivacyPage() {
  const { business, contact } = useConfig();
  useSEO({ title: `Privacy Policy — ${business.name}`, description: 'Privacy policy and data handling practices.' });

  const sections = [
    {
      heading: 'Information we collect',
      body: `When you contact us through our website, we collect the information you provide — your name, email address, phone number, and the details of your request. We also collect technical information automatically, such as your IP address and browser type, for security and analytics purposes.`,
    },
    {
      heading: 'How we use your information',
      body: `We use your contact information to respond to your inquiry, schedule consultations, and provide electrical services. We do not sell, rent, or share your personal information with third parties for marketing purposes. Technical data is used solely to maintain and improve our website.`,
    },
    {
      heading: 'Cookies and tracking',
      body: `Our website may use essential cookies to function properly and analytics tools to understand how visitors use the site. We do not use advertising cookies. You can control cookies through your browser settings at any time.`,
    },
    {
      heading: 'Data retention',
      body: `We retain customer contact information for as long as necessary to provide services and respond to inquiries. Project records and documentation are retained per New York State requirements for licensed contractors. You may request deletion of your personal data at any time.`,
    },
    {
      heading: 'Your rights',
      body: `You have the right to access, correct, or delete the personal information we hold about you. To exercise any of these rights, contact us at ${contact.email} or ${contact.phone}.`,
    },
    {
      heading: 'Contact',
      body: `If you have questions about this privacy policy or how we handle your data, please contact us at ${contact.email}, ${contact.phone}, or ${contact.address.line1}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}.`,
    },
  ];

  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle={`How ${business.name} collects, uses, and protects your information.`} />
      <Section className="bg-canvas" containerSize="prose-wide">
        <div className="space-y-14">
          <Reveal>
            <p className="text-sm text-ink-muted">Last updated: January 2025</p>
          </Reveal>
          {sections.map((s, i) => (
            <Reveal key={i} delay={i * 40}>
              <div>
                <h2 className="font-display text-2xl font-medium tracking-tight text-ink">{s.heading}</h2>
                <p className="mt-5 text-base leading-[1.7] text-ink-muted text-pretty">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
