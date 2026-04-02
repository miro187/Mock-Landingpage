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
              title="Positioned like a polished business website, while staying transparent about the fictional content."
              description="The goal here is a more grounded, professional tone: cleaner messaging, clearer structure, and a more credible presentation style than a loud template demo."
            />

            <Reveal delay={0.1}>
              <div className="section-surface mt-8 rounded-[1.8rem] p-6 sm:p-7">
                <p className="accent-line pt-6 text-base leading-8 text-slate-600">
                  Northpoint Systems is a fictional business identity created for
                  portfolio use. The aim is to demonstrate a client-ready standard
                  of design and frontend execution without implying real brand
                  partnerships, results, or endorsements.
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
                    <div className="w-fit rounded-[1.05rem] border border-blue-100 bg-blue-50 p-3 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                      {advantage.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
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
