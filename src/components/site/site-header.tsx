import { ArrowUpRight } from "lucide-react";
import { companyName, navLinks } from "@/data/site-content";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="pill-outline rounded-[1.4rem] px-4 py-3 shadow-[0_18px_50px_rgba(2,6,23,0.25)]">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="flex min-w-0 items-center gap-3 rounded-full px-2 py-1 text-sm text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-300 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.35)]">
                VF
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-base font-semibold">
                  {companyName}
                </span>
                <span className="block truncate text-xs text-slate-400">
                  Fictional showcase brand
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-white/6 px-4 py-2 text-sm font-medium text-white hover:border-sky-300/45 hover:bg-white/10"
            >
              View mock pricing
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 hover:border-sky-300/35 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
