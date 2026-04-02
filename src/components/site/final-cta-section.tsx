import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="section-surface relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="mono-label">Final CTA</p>
                <h2 className="mt-4 text-4xl font-normal tracking-tight text-[var(--foreground)] sm:text-5xl">
                  Need a landing page that feels clean, credible, and ready for real business copy?
                </h2>
                <p className="copy-secondary mt-5 max-w-2xl text-lg leading-8">
                  This project is still a demo, but the goal is a stronger
                  presentation standard: calmer visuals, better spacing, cleaner
                  hierarchy, and a structure that could be adapted for a real
                  client site with minimal rewrites.
                </p>
              </div>

              <a
                href="#top"
                className="mono-button mono-button-dark inline-flex items-center justify-center gap-2"
              >
                Back To Top
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
