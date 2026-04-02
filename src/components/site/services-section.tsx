import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-[var(--line)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Structured service blocks with the same engineering-led visual restraint."
          description="The cards stay minimal and sharp: no shadows, no decorative effects, just hierarchy, borders, and copy doing the work."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="section-surface h-full p-6 hover:border-[var(--line-strong)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="border border-[var(--line)] p-3 text-[var(--foreground)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="mono-label">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-normal tracking-tight text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="copy-secondary mt-4 text-base leading-7">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
