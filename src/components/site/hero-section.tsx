import { ArrowRight, CirclePlay } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HeroVisual } from "@/components/site/hero-visual";
import { heroStats, trustHighlights } from "@/data/site-content";

export function HeroSection() {
  return (
    <section id="top" className="border-b border-[var(--line)]">
      <Container className="hero-shell flex items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full items-end gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mono-label">
                Northpoint Systems / Fictional Operations Studio / Portfolio Preview
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-10 font-mono text-[4.3rem] font-light leading-[0.9] tracking-[-0.06em] text-[var(--foreground)] sm:text-[5.8rem] lg:text-[8.5rem] xl:text-[10rem]">
                SYSTEMS
                <br />
                THAT SCALE.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="copy-secondary mt-8 max-w-xl text-base leading-7 sm:text-lg">
                Every company name, metric, testimonial, and case study on this page
                is fictional. The structure is the point: a calmer, sharper landing
                page system that feels more like product infrastructure than a
                generic startup template.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#case-studies" className="mono-button mono-button-dark inline-flex items-center justify-center gap-2">
                  View Case Studies
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#pricing" className="mono-button mono-button-ghost inline-flex items-center justify-center gap-2">
                  Review Pricing
                  <CirclePlay className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-14 grid gap-6 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-4xl font-light tracking-[-0.04em] text-[var(--foreground)]">
                      {stat.value}
                    </p>
                    <p className="copy-secondary mt-3 text-sm leading-6">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {trustHighlights.map((item) => (
                  <span key={item} className="mono-tag w-fit text-[var(--foreground)]">
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
