import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/data/site-content";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="border-b border-[var(--line)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Three believable fictional scenarios that show structure, outcomes, and KPI storytelling."
          description="The results below are illustrative only, but they are framed the way strong agency portfolio cards usually are: a use case, a summary, and crisp business outcomes."
        />

        <div className="mt-12 grid gap-4 xl:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.06}>
              <article className="section-surface h-full p-6 sm:p-7 hover:border-[var(--line-strong)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono-label">
                      {study.category}
                    </p>
                    <h3 className="mt-4 text-2xl font-normal tracking-tight text-[var(--foreground)]">
                      {study.title}
                    </h3>
                  </div>
                  <span className="border border-[var(--line)] p-2 text-[var(--foreground)]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="copy-secondary mt-5 text-base leading-7">
                  {study.summary}
                </p>

                <div className="mt-8 grid gap-3">
                  {study.outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="border border-[var(--line)] bg-white p-4"
                    >
                      <p className="font-mono text-3xl font-light tracking-[-0.04em] text-[var(--foreground)]">
                        {outcome.value}
                      </p>
                      <p className="copy-tertiary mt-2 text-sm leading-6">
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
