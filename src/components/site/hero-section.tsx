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
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-sky-300/16 bg-sky-400/8 px-4 py-2 text-sm text-sky-100 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
                Portfolio preview only. All brands, metrics, pricing, testimonials, and contact details are fictional.
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[5rem] lg:leading-[0.96]">
                Automation systems that make modern teams look ten steps ahead.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                A fictional AI automation agency concept built to showcase premium
                landing-page craft: strong hierarchy, elegant motion, sharp UI
                structure, and mock business copy that still feels responsibly clear.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-sky-100"
                >
                  Explore mock case studies
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-white/10"
                >
                  View illustrative pricing
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
                    <p className="font-display text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
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
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
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
