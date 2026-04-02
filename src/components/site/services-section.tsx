import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="A premium services section with enough detail to feel like a real offer."
          description="Each card is written as believable mock positioning rather than filler text, so the page stays useful as a serious portfolio piece."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="section-surface h-full rounded-[1.7rem] p-6 hover:-translate-y-1 hover:border-sky-300/28 hover:bg-slate-950/75">
                  <div className="flex items-center justify-between gap-4">
                    <div className="rounded-[1.1rem] border border-sky-300/18 bg-sky-400/10 p-3 text-sky-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
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
