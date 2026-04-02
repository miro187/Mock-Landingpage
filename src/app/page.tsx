import { AboutSection } from "@/components/site/about-section";
import { CaseStudiesSection } from "@/components/site/case-studies-section";
import { SiteFooter } from "@/components/site/footer";
import { FaqSection } from "@/components/site/faq-section";
import { FinalCtaSection } from "@/components/site/final-cta-section";
import { HeroSection } from "@/components/site/hero-section";
import { PricingSection } from "@/components/site/pricing-section";
import { ProcessSection } from "@/components/site/process-section";
import { ServicesSection } from "@/components/site/services-section";
import { SiteHeader } from "@/components/site/site-header";
import { SocialProofSection } from "@/components/site/social-proof-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[16rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-3xl" />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <CaseStudiesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
