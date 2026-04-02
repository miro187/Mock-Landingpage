import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { pricingTiers } from "@/data/site-content";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Illustrative packages that complete the conversion flow without pretending to be real offers."
          description="These tiers are intentionally fictional and included to make the landing page feel complete for portfolio review. They show hierarchy, plan comparison, and CTA styling."
          centered
        />

        <Reveal delay={0.08} className="mx-auto mt-6 max-w-3xl text-center">
          <p className="rounded-full border border-amber-300/20 bg-amber-400/8 px-4 py-3 text-sm text-amber-100/90">
            Pricing is illustrative only and does not represent a real agency rate card.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.06}>
              <article
                className={[
                  "section-surface h-full rounded-[1.9rem] p-6 sm:p-7",
                  tier.highlight
                    ? "border-sky-300/32 bg-[linear-gradient(180deg,rgba(26,53,93,0.92),rgba(9,18,33,0.96))] shadow-[0_24px_90px_rgba(59,130,246,0.2)]"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">
                      {tier.name}
                    </p>
                    <p className="mt-5 font-display text-5xl font-semibold text-white">
                      {tier.price}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{tier.cadence}</p>
                  </div>
                  {tier.highlight ? (
                    <span className="rounded-full border border-sky-300/24 bg-sky-300/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
                      Most complete
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 text-base leading-7 text-slate-300">
                  {tier.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                      <span className="mt-0.5 rounded-full bg-sky-400/12 p-1 text-sky-200">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#final-cta"
                  className={[
                    "mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold",
                    tier.highlight
                      ? "bg-white text-slate-950 hover:bg-sky-100"
                      : "border border-white/12 bg-white/6 text-white hover:border-sky-300/35 hover:bg-white/10",
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
