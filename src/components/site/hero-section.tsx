import { ArrowRight, CirclePlay } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HeroVisual } from "@/components/site/hero-visual";
import { heroStats, trustHighlights } from "@/data/site-content";

export function HeroSection() {
  return (
    <section id="top" className="pt-10 sm:pt-14">
      <Container className="pb-20 pt-8 sm:pb-24 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                Portfolio preview using fictional names, figures, testimonials, and contact details.
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-[4.85rem] lg:leading-[0.98]">
                Operational AI systems with a cleaner, more professional business presence.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                This demo is intentionally fictional, but the presentation is built
                to feel client-ready: clear hierarchy, restrained motion, solid
                spacing, and business-focused copy instead of placeholder filler.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  View case studies
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:text-slate-900"
                >
                  Review pricing layout
                  <CirclePlay className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="section-surface rounded-[1.5rem] p-4"
                  >
                    <p className="font-display text-3xl font-semibold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {trustHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={32}>
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
