import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="section-surface relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <div className="absolute left-10 top-0 h-32 w-32 rounded-full bg-sky-400/18 blur-3xl" />
            <div className="absolute bottom-0 right-8 h-32 w-32 rounded-full bg-cyan-300/12 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300/80">
                  Final CTA
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Want a landing page that feels this finished before real content is even added?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  This project was built to show what strong structure, polished
                  copy, elegant motion, and a premium frontend system can look
                  like in a portfolio setting. The brand is fictional, but the
                  execution standard is meant to feel real.
                </p>
              </div>

              <a
                href="#top"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-sky-100"
              >
                Revisit the preview
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
