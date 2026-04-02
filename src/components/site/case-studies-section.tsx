import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/data/site-content";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Three believable fictional scenarios that show structure, outcomes, and KPI storytelling."
          description="The results below are illustrative only, but they are framed the way strong agency portfolio cards usually are: a use case, a summary, and crisp business outcomes."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.06}>
              <article className="section-surface h-full rounded-[1.8rem] p-6 sm:p-7 hover:-translate-y-1 hover:border-sky-300/28">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80">
                      {study.category}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                      {study.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  {study.summary}
                </p>

                <div className="mt-8 grid gap-3">
                  {study.outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="rounded-[1.2rem] border border-white/10 bg-slate-950/55 p-4"
                    >
                      <p className="font-display text-2xl font-semibold text-white">
                        {outcome.value}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {outcome.label}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
