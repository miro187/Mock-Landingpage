import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="section-surface relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff,#f4f8ff)] p-8 sm:p-10 lg:p-12">
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                  Final CTA
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Need a landing page that feels clean, credible, and ready for real business copy?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  This project is still a demo, but the goal is a stronger
                  presentation standard: calmer visuals, better spacing, cleaner
                  hierarchy, and a structure that could be adapted for a real
                  client site with minimal rewrites.
                </p>
              </div>

              <a
                href="#top"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Back to top
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
