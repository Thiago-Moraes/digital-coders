import React from "react";
import { TrendingUp, Code2, Users2, Bot } from "lucide-react";
import { METRIC_STATS } from "@/data/mockData";

const ICON_MAP = {
  TrendingUp,
  Code2,
  Users2,
  Bot
};

export function StatsTicker() {
  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-5 rounded-2xl bg-surface-container/80 border border-outline-variant/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        {METRIC_STATS.map((metric, index) => {
          const Icon = ICON_MAP[metric.icon as keyof typeof ICON_MAP] || Code2;
          return (
            <div
              key={index}
              className="flex flex-col p-3.5 sm:p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/20 hover:border-primary-container/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary-fixed-dim to-secondary font-mono tracking-tight group-hover:scale-105 transition-transform">
                  {metric.value}
                </span>
                <div className="p-2 rounded-lg bg-surface-container-highest text-primary-container border border-outline-variant/40 group-hover:bg-primary-container/20 transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-on-surface">
                {metric.label}
              </span>
              <span className="text-[11px] sm:text-xs text-on-surface-variant mt-0.5 leading-snug">
                {metric.subtext}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
