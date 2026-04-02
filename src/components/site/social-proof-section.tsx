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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Mock social proof
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                Fictional reference brands presented only to complete the layout.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                The names below are placeholders used for portfolio presentation.
                They are not real clients and are included only to show how a
                finished brand-strip section would look in a live project.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
              {showcaseBrands.map((brand) => (
                <div
                  key={brand}
                  className="rounded-[1.3rem] border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700 hover:border-blue-200 hover:bg-white hover:text-slate-900"
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
