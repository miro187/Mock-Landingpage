import type { LucideIcon } from "lucide-react";
import { ArrowRight, BarChart3, Bot, Sparkles, Zap } from "lucide-react";

const overviewCards: Array<{
  label: string;
  value: string;
  icon: LucideIcon;
}> = [
  { label: "Queues resolved", value: "348", icon: Bot },
  { label: "Savings modeled", value: "14.2h", icon: Zap },
  { label: "Trend delta", value: "+18%", icon: BarChart3 },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-x-10 -top-8 h-32 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="hero-glow panel-grid section-surface relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-white">Live orchestration preview</p>
            <p className="mt-1 text-sm text-slate-400">
              Illustrative dashboard components built in code
            </p>
          </div>
          <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
            Mock data only
          </span>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-300">Pipeline health</p>
                <p className="mt-1 font-display text-3xl font-semibold text-white">
                  99.94%
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-200/80">
                  Status
                </p>
                <p className="text-sm font-semibold text-emerald-100">Healthy</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Lead routing", "82% load", "82%", "bg-sky-400"],
                ["Onboarding prep", "66% load", "66%", "bg-cyan-300"],
                ["Weekly reporting", "91% load", "91%", "bg-blue-500"],
              ].map(([label, value, width, color]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/6">
                    <div
                      className={`h-2 rounded-full ${color}`}
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
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 p-3"
                  >
                    <Icon className="h-5 w-5 text-sky-300" />
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-400/12 p-2 text-sky-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Assistant brief</p>
                  <p className="text-sm text-slate-400">Weekly executive summary ready</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 rounded-[1.2rem] border border-white/8 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Alerts reviewed</span>
                  <span className="font-semibold text-white">12 / 12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Upside surfaced</span>
                  <span className="font-semibold text-white">EUR 18.4k</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Action items</span>
                  <span className="font-semibold text-white">4 owners assigned</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">Process handoff</p>
                  <p className="text-sm text-slate-400">Example automation path</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  3 min sync
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {["Form intake", "AI enrichment", "Owner approval", "Client update"].map(
                  (step) => (
                    <div
                      key={step}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                    >
                      <span className="text-sm text-slate-200">{step}</span>
                      <ArrowRight className="h-4 w-4 text-sky-300" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
