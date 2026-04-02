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
      <div className="hero-glow panel-grid section-surface relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-slate-900">Operations snapshot</p>
            <p className="mt-1 text-sm text-slate-600">
              Fictional dashboard modules used to complete the business presentation
            </p>
          </div>
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Mock data only
          </span>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Pipeline health</p>
                <p className="mt-1 font-display text-3xl font-semibold text-slate-900">
                  99.94%
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-700">
                  Status
                </p>
                <p className="text-sm font-semibold text-emerald-700">Healthy</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Lead routing", "82% load", "82%", "bg-sky-400"],
                ["Onboarding prep", "66% load", "66%", "bg-cyan-300"],
                ["Weekly reporting", "91% load", "91%", "bg-blue-500"],
              ].map(([label, value, width, color]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
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
                    className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-3"
                  >
                    <Icon className="h-5 w-5 text-blue-700" />
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-50 p-2 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Executive summary</p>
                  <p className="text-sm text-slate-600">Weekly review packet prepared</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 rounded-[1.2rem] border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Alerts reviewed</span>
                  <span className="font-semibold text-slate-900">12 / 12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Upside surfaced</span>
                  <span className="font-semibold text-slate-900">EUR 18.4k</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Action items</span>
                  <span className="font-semibold text-slate-900">4 owners assigned</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Process handoff</p>
                  <p className="text-sm text-slate-600">Illustrative workflow path</p>
                </div>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                  3 min sync
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {["Form intake", "AI enrichment", "Owner approval", "Client update"].map(
                  (step) => (
                    <div
                      key={step}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <span className="text-sm text-slate-700">{step}</span>
                      <ArrowRight className="h-4 w-4 text-blue-700" />
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
