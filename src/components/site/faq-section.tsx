"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/site-content";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="border-b border-[var(--line)] py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions to round out the full business-site experience."
            description="The accordion interaction adds a small but useful layer of polish and shows that the page is more than a static design comp."
          />

          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className="section-surface overflow-hidden"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 text-xl font-normal tracking-tight text-[var(--foreground)]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={[
                        "h-5 w-5 shrink-0 text-slate-500 transition-transform",
                        isOpen ? "rotate-180" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                      >
                        <div className="copy-secondary border-t border-[var(--line)] px-5 pb-5 pt-4 text-base leading-7 sm:px-6">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
