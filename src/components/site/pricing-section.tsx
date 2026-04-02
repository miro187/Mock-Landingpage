import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { pricingTiers } from "@/data/site-content";

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-[var(--line)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Illustrative packages that complete the conversion flow without pretending to be real offers."
          description="These tiers are intentionally fictional and included to make the landing page feel complete for portfolio review. They show hierarchy, plan comparison, and CTA styling."
          centered
        />

        <Reveal delay={0.08} className="mx-auto mt-6 max-w-3xl text-center">
          <p className="mono-tag inline-flex text-[var(--foreground)]">
            Pricing is illustrative only and does not represent a real agency rate card.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.06}>
              <article
                className={[
                  "section-surface h-full p-6 sm:p-7",
                  tier.highlight
                    ? "border-[var(--line-strong)] bg-[rgba(31,34,40,0.05)]"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono-label">
                      {tier.name}
                    </p>
                    <p className="mt-5 font-mono text-5xl font-light tracking-[-0.05em] text-[var(--foreground)]">
                      {tier.price}
                    </p>
                    <p className="copy-tertiary mt-3 text-sm">{tier.cadence}</p>
                  </div>
                  {tier.highlight ? (
                    <span className="mono-tag text-[var(--foreground)]">
                      Most complete
                    </span>
                  ) : null}
                </div>

                <p className="copy-secondary mt-6 text-base leading-7">
                  {tier.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <span className="mt-0.5 border border-[var(--line)] p-1 text-[var(--foreground)]">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#final-cta"
                  className={[
                    "mono-button mt-8 inline-flex w-full items-center justify-center",
                    tier.highlight
                      ? "mono-button-dark"
                      : "mono-button-ghost",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {tier.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
