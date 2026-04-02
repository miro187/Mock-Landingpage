import type { LucideIcon } from "lucide-react";
import { BarChart3, Bot, Zap } from "lucide-react";

const overviewCards: Array<{
  label: string;
  value: string;
  icon: LucideIcon;
}> = [
  { label: "Queues resolved", value: "348", icon: Bot },
  { label: "Savings modeled", value: "14.2h", icon: Zap },
  { label: "Trend delta", value: "+18%", icon: BarChart3 },
];

const weeklyBrief = [
  { label: "Items reviewed", value: "12" },
  { label: "Issues escalated", value: "2" },
  { label: "Manual follow-up", value: "3.4h/wk" },
];

const workflowSteps = [
  {
    title: "Form intake",
    description: "Required fields are checked automatically.",
  },
  {
    title: "Context pass",
    description: "Order and source data are attached to the record.",
  },
  {
    title: "Owner routing",
    description: "Qualified work moves to the correct team.",
  },
  {
    title: "Client update",
    description: "Status is logged and the reply is prepared.",
  },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="hero-glow panel-grid section-surface relative overflow-hidden border border-[var(--line)] p-5 sm:p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-4">
          <div>
            <p className="mono-label text-[var(--foreground)]">Operations Snapshot</p>
            <p className="copy-secondary mt-2 text-sm">
              Monochrome preview panel styled like a technical control surface
            </p>
          </div>
          <span className="mono-tag text-[var(--foreground)]">
            Mock data only
          </span>
        </div>

        <div className="grid gap-4">
          <div className="border border-[var(--line)] bg-white p-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mono-label">Pipeline Health</p>
                <p className="mt-3 font-mono text-4xl font-light tracking-[-0.04em] text-[var(--foreground)]">
                  99.94%
                </p>
              </div>
              <div className="border border-[var(--line-strong)] px-3 py-2 text-right">
                <p className="mono-label text-[var(--foreground)]">
                  Status
                </p>
                <p className="mt-1 text-sm text-[var(--foreground)]">Healthy</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Lead routing", "82% load", "82%"],
                ["Onboarding prep", "66% load", "66%"],
                ["Weekly reporting", "91% load", "91%"],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm copy-secondary">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 bg-[rgba(31,34,40,0.08)]">
                    <div
                      className="h-2 bg-[var(--foreground)]"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {overviewCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="border border-[var(--line)] bg-[rgba(31,34,40,0.02)] p-3"
                  >
                    <Icon className="h-5 w-5 text-[var(--foreground)]" />
                    <p className="mono-label mt-4">
                      {item.label}
                    </p>
                    <p className="mt-2 font-mono text-2xl font-light text-[var(--foreground)]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border border-[var(--line)] bg-white p-5">
              <div>
                <p className="mono-label text-[var(--foreground)]">Weekly Brief</p>
                <p className="mt-3 text-xl tracking-[-0.03em] text-[var(--foreground)]">
                  Prepared for leadership review.
                </p>
                <p className="copy-secondary mt-3 text-sm leading-6">
                  This block is intentionally compact and readable: fewer gimmicks,
                  clearer hierarchy, and enough room for the content to breathe.
                </p>
              </div>

              <div className="mt-6 border-y border-[var(--line)]">
                {weeklyBrief.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 border-b border-[var(--line)] py-3 last:border-b-0"
                  >
                    <span className="copy-secondary text-sm">{item.label}</span>
                    <span className="font-mono text-base text-[var(--foreground)]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="copy-tertiary mt-4 text-sm">
                Fictional operational summary for portfolio presentation only.
              </p>
            </div>

            <div className="border border-[var(--line)] bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono-label text-[var(--foreground)]">Workflow Path</p>
                  <p className="copy-secondary mt-2 text-sm leading-6">
                    Illustrative handoff sequence from intake to final response.
                  </p>
                </div>
                <span className="mono-tag text-[var(--foreground)]">
                  4 steps
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="border border-[var(--line)] bg-[rgba(31,34,40,0.02)] p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--line)] font-mono text-xs text-[var(--foreground)]"
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--foreground)]">
                          {step.title}
                        </p>
                        <p className="copy-secondary mt-1 text-sm leading-6">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
