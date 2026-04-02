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
              <article className="section-surface h-full rounded-[1.8rem] p-6 sm:p-7 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      {study.category}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900">
                      {study.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {study.summary}
                </p>

                <div className="mt-8 grid gap-3">
                  {study.outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4"
                    >
                      <p className="font-display text-2xl font-semibold text-slate-900">
                        {outcome.value}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
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
