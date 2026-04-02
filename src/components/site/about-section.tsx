import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { advantages } from "@/data/site-content";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Positioned like a premium startup studio, but clearly framed as a fictional demo."
              description="The goal of this section is to show sharper positioning language, better information hierarchy, and a more finished sense of brand confidence than a template usually offers."
            />

            <Reveal delay={0.1}>
              <div className="section-surface mt-8 rounded-[1.8rem] p-6 sm:p-7">
                <p className="accent-line pt-6 text-base leading-8 text-slate-300">
                  VantaFlux AI exists only as a portfolio concept. That gives the
                  page room to demonstrate serious agency-style messaging, premium
                  UI structure, and believable business framing while staying
                  transparent about every claim being illustrative.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;

              return (
                <Reveal key={advantage.title} delay={index * 0.06}>
                  <article className="section-surface h-full rounded-[1.6rem] p-6">
                    <div className="w-fit rounded-[1.05rem] border border-sky-300/18 bg-sky-400/10 p-3 text-sky-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-white">
                      {advantage.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {advantage.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
