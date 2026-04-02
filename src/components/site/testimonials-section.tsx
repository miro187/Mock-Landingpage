import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/site-content";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Demo testimonials that feel polished while staying obviously fictional."
          description="Instead of lorem ipsum, this section uses portfolio-aware mock quotes that reinforce the quality of the build without pretending these endorsements are real."
        />

        <Reveal delay={0.08} className="mt-6">
          <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            All testimonial names, roles, and companies below are fictional and included for showcase realism only.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <article className="section-surface h-full rounded-[1.75rem] p-6 sm:p-7">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-8 border-t border-slate-200 pt-5">
                  <p className="font-display text-lg font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
