"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Menu, X } from "lucide-react";
import { companyName, navLinks } from "@/data/site-content";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-5">
      <Container>
        <div className="pill-outline rounded-[1.3rem] px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="flex min-w-0 flex-1 items-center gap-3 rounded-full text-sm text-slate-900"
            >
              <span className="truncate font-display text-base font-semibold tracking-tight sm:text-lg">
                {companyName}
              </span>
              <span className="hidden rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:inline-flex">
                Demo
              </span>
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#pricing"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100 md:inline-flex"
            >
              View pricing
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-slate-900 md:hidden"
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
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:border-blue-200 hover:text-slate-900"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="#pricing"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100"
                      onClick={() => setIsOpen(false)}
                    >
                      View pricing
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </nav>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
