"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { companyName, navLinks } from "@/data/site-content";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) {
      setIsOpen(false);
      return;
    }

    event.preventDefault();
    setIsOpen(false);

    window.history.pushState(null, "", href);

    window.setTimeout(() => {
      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      const headerHeight =
        document.querySelector("header") instanceof HTMLElement
          ? document.querySelector("header")!.offsetHeight
          : 0;

      const targetTop =
        window.scrollY + target.getBoundingClientRect().top - headerHeight - 12;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    }, 180);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]">
      <Container className="py-5">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="min-w-0 flex-1 font-mono text-sm uppercase tracking-[0.18em] text-[var(--foreground)]"
          >
            {companyName}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-link text-sm text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#pricing" className="mono-button mono-button-dark hidden md:inline-flex">
            View Pricing
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--line-strong)] text-[var(--foreground)] md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              className="overflow-hidden md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="mt-4 border-t border-[var(--line)] pt-4">
                <nav className="flex flex-col gap-3">
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="border border-[var(--line)] px-4 py-3 text-sm text-[var(--foreground)]"
                      onClick={(event) => handleMobileNavClick(event, item.href)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#pricing"
                    className="mono-button mono-button-dark inline-flex items-center justify-between"
                    onClick={(event) => handleMobileNavClick(event, "#pricing")}
                  >
                    View Pricing
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </nav>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
