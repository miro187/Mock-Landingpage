import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { showcaseBrands } from "@/data/site-content";

export function SocialProofSection() {
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <Reveal className="section-surface rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300/80">
                Mock social proof
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                Fictional showcase brands used to complete the portfolio presentation.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Every logo below is a text-based mock identity created only for
                demo purposes. They are included to mirror the rhythm of a real
                SaaS landing page without implying real clients.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
              {showcaseBrands.map((brand) => (
                <div
                  key={brand}
                  className="rounded-[1.3rem] border border-white/10 bg-slate-950/55 px-4 py-4 text-center text-sm font-semibold tracking-[0.24em] text-slate-200 hover:border-sky-300/25 hover:text-white"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
