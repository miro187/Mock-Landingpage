import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { showcaseBrands } from "@/data/site-content";

export function SocialProofSection() {
  return (
    <section className="border-b border-[var(--line)] py-12 sm:py-16">
      <Container>
        <Reveal className="section-surface px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mono-label">Mock Social Proof</p>
              <h2 className="mt-4 text-3xl font-normal tracking-tight text-[var(--foreground)] sm:text-[1.88rem]">
                Fictional reference brands presented only to complete the layout.
              </h2>
              <p className="copy-secondary mt-4 text-sm leading-7 sm:text-base">
                The names below are placeholders used for portfolio presentation.
                They are not real clients and are included only to show how a
                finished brand-strip section would look in a live project.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
              {showcaseBrands.map((brand) => (
                <div
                  key={brand}
                  className="border border-[var(--line)] bg-white px-4 py-4 text-center font-mono text-xs uppercase tracking-[0.14em] text-[var(--foreground)] hover:border-[var(--line-strong)]"
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
