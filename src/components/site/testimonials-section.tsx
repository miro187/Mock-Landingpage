import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/site-content";

export function TestimonialsSection() {
  return (
    <section className="border-b border-[var(--line)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Demo testimonials that feel polished while staying obviously fictional."
          description="Instead of lorem ipsum, this section uses portfolio-aware mock quotes that reinforce the quality of the build without pretending these endorsements are real."
        />

        <Reveal delay={0.08} className="mt-6">
          <p className="mono-tag inline-flex text-[var(--foreground)]">
            All testimonial names, roles, and companies below are fictional and included for showcase realism only.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <article className="section-surface h-full p-6 sm:p-7">
                <div className="flex gap-1 text-[var(--foreground)]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="copy-secondary mt-6 text-lg leading-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-8 border-t border-[var(--line)] pt-5">
                  <p className="text-lg font-normal tracking-tight text-[var(--foreground)]">
                    {testimonial.name}
                  </p>
                  <p className="copy-tertiary mt-1 text-sm">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
