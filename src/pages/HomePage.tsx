import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProjectShowcase } from '@/components/sections/ProjectShowcase';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { useSEO } from '@/hooks/useSEO';

export function HomePage() {
  useSEO();
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <ProjectShowcase />
      <ProcessTimeline />
      <AboutPreview />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
