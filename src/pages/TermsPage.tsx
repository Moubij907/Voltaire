import { useConfig } from '@/context/ConfigContext';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { useSEO } from '@/hooks/useSEO';

export function TermsPage() {
  const { business, contact } = useConfig();
  useSEO({ title: `Terms of Service — ${business.name}`, description: 'Terms of service and engagement.' });

  const sections = [
    {
      heading: 'Services',
      body: `${business.name} provides licensed electrical contracting services including panel upgrades, EV charger installation, lighting design, smart home automation, commercial electrical work, and emergency service. All work is performed by licensed electricians and is subject to the terms outlined in your individual service agreement or estimate.`,
    },
    {
      heading: 'Estimates and pricing',
      body: `Estimates are provided in writing and are valid for 30 days unless otherwise stated. Fixed-price estimates are binding once accepted; time-and-materials work is billed at the rates stated in your agreement. Any change to scope is documented and approved by you before work proceeds.`,
    },
    {
      heading: 'Permits and inspections',
      body: `We file all required electrical permits and schedule inspections as part of our service. Permit fees are included in your estimate unless stated otherwise. You are responsible for providing access to the property for inspection and for any work required by the inspector that falls outside the original scope.`,
    },
    {
      heading: 'Warranty',
      body: `All workmanship is warrantied for five years from the date of completion. Manufacturer warranties on equipment, fixtures, and devices are passed through in full. Warranty claims must be reported to us in writing. Warranty does not cover damage caused by misuse, modification by third parties, or acts of nature.`,
    },
    {
      heading: 'Payment',
      body: `Payment terms are specified in your service agreement. Typically, 50% is due at scheduling and 50% upon completion and inspection. Commercial projects may be billed in milestones. Accepted payment methods include check, ACH transfer, and major credit cards.`,
    },
    {
      heading: 'Cancellation',
      body: `You may cancel a scheduled appointment with 24 hours notice at no charge. Cancellations within 24 hours may incur a fee. Work in progress may be cancelled with payment for work completed up to the cancellation date.`,
    },
    {
      heading: 'Liability',
      body: `${business.name} carries $2,000,000 general liability and $1,000,000 workers compensation insurance. Our liability is limited to the scope of work performed and does not extend to pre-existing conditions, third-party work, or consequential damages.`,
    },
    {
      heading: 'Contact',
      body: `Questions about these terms can be directed to ${contact.email} or ${contact.phone}.`,
    },
  ];

  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" subtitle={`The terms under which ${business.name} provides electrical services.`} />
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
