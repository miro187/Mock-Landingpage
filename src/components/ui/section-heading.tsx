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
      <p className="mono-label mb-4">{eyebrow}</p>
      <h2 className="text-3xl font-normal tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[1.88rem] lg:leading-[1.2]">
        {title}
      </h2>
      <p className="copy-secondary mt-5 text-base leading-7 sm:text-lg">
        {description}
      </p>
    </Reveal>
  );
}
