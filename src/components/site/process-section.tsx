import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-[var(--line)] py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="How It Works"
            title="A process section reduced to sequence, spacing, and information hierarchy."
            description="Instead of decorative storytelling, the layout treats process as a structured system: numbered steps, terse copy, and clear pacing."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="section-surface h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-[var(--line-strong)] font-mono text-lg font-normal text-[var(--foreground)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-2xl font-normal tracking-tight text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="copy-secondary mt-3 text-base leading-7">
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
