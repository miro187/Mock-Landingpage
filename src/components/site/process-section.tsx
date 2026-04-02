import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="How It Works"
            title="A clear business-friendly process that feels polished, not vague."
            description="This section gives the fictional agency a concrete operating rhythm, which helps the whole landing page feel more complete and more credible."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="section-surface h-full rounded-[1.6rem] p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 font-display text-lg font-semibold text-blue-700">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
