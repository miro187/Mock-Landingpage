import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={["max-w-3xl", centered ? "mx-auto text-center" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </Reveal>
  );
}
