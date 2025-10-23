import React from "react";
import { Card } from "./ui";

const BASE = {
  tiktok: { T1: 200, T2: 400, T3: 400 },
  all: { T1: 200, T2: 400, T3: 400 },
  scale4k: { T1: 800, T2: 1600, T3: 1600 },
  scale8k: { T1: 1600, T2: 3200, T3: 3200 },
};

const ROWS = [
  { id: "T1 BUS 1", tier: "T1", niche: "Business", notes: "Story-first; minimal captions; clean graphics." },
  { id: "T1 MOT 1", tier: "T1", niche: "Motivation", notes: "Story-first; minimal captions; clean graphics." },
  { id: "T1 VIR 1", tier: "T1", niche: "Viral Content", notes: "Personality-driven highlights; minimal captions." },
  { id: "T1 COM A", tier: "T1", niche: "Common", notes: "Cross-niche summaries; minimal captions." },
  { id: "T1 COM B", tier: "T1", niche: "Common", notes: "Cross-niche summaries; minimal captions." },

  { id: "T2 BUS 1", tier: "T2", niche: "Business", notes: "Text hooks; EN↔HI caption/hashtag tests; graphic/quote allowed." },
  { id: "T2 MOT 1", tier: "T2", niche: "Motivation", notes: "Text hooks; EN↔HI tests; thumbnail/title variants." },
  { id: "T2 VIR 1", tier: "T2", niche: "Viral Content", notes: "Reactions/green-screen; trend hooks; EN↔HI tests." },
  { id: "T2 COM A", tier: "T2", niche: "Common", notes: "Cross-niche summaries; fastest A/B loops." },
  { id: "T2 COM B", tier: "T2", niche: "Common", notes: "Cross-niche summaries; graphic/quote carousels." },

  { id: "T3 LAB 1", tier: "T3", niche: "Labs", notes: "Split-screen/meme; stitch/duet; subtitle-heavy tests." },
  { id: "T3 LAB 2", tier: "T3", niche: "Labs", notes: "Regional HI/Hinglish pilots; remixes/dubs." },
  { id: "T3 LAB 3", tier: "T3", niche: "Labs", notes: "New formats; re-seeding top winners." },
];

const BADGE = { T1: "bg-indigo-500", T2: "bg-purple-500", T3: "bg-pink-500" };

const MODE_OPTIONS = [
  { key: "tiktok", label: "Mode A · TikTok-Only", sub: "1,000/mo" },
  { key: "all", label: "Mode B · All-Platforms", sub: "1,000/mo" },
  { key: "scale", label: "Scale View", sub: "4k / 8k" },
];

function attachPostsPerMonth(rows, totals) {
  const byTier = { T1: [], T2: [], T3: [] };
  rows.forEach((row, index) => {
    if (byTier[row.tier]) {
      byTier[row.tier].push(index);
    }
  });

  const output = rows.map((row) => ({ ...row, posts: 0 }));
  ["T1", "T2", "T3"].forEach((tier) => {
    const indices = byTier[tier];
    if (!indices.length) return;
    const total = totals?.[tier] ?? 0;
    const base = indices.length ? Math.floor(total / indices.length) : 0;
    let remainder = total - base * indices.length;
    indices.forEach((index) => {
      output[index].posts = base + (remainder > 0 ? 1 : 0);
      if (remainder > 0) remainder -= 1;
    });
  });

  return output;
}

export default function PagePlanTable({ mode: controlledMode, onModeChange }) {
  const [scalePreset, setScalePreset] = React.useState("scale4k");
  const mode = controlledMode ?? "all";

  React.useEffect(() => {
    if (mode !== "scale" && scalePreset !== "scale4k") {
      setScalePreset("scale4k");
    }
  }, [mode, scalePreset]);

  const effectiveMode = mode === "scale" ? scalePreset : mode;
  const totals = BASE[effectiveMode] ?? { T1: 0, T2: 0, T3: 0 };
  const rowsWithPosts = attachPostsPerMonth(ROWS, totals);
  const totalSum = rowsWithPosts.reduce((sum, row) => sum + row.posts, 0);

  const handleModeChange = (nextMode) => {
    if (nextMode === mode) return;
    if (onModeChange) {
      onModeChange(nextMode);
    }
  };

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Page Plan (by Tier × Niche)</h2>
          <div className="flex flex-wrap gap-2">
            {MODE_OPTIONS.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => handleModeChange(option.key)}
                className={`px-3 py-1.5 rounded-full border border-white/15 text-sm transition-colors ${
                  mode === option.key
                    ? "bg-indigo-600 text-white"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                <div className="flex flex-col leading-tight text-left">
                  <span className="font-semibold">{option.label}</span>
                  <span className="text-xs text-white/70">{option.sub}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {mode === "scale" && (
          <div className="flex gap-2 mb-4">
            {["scale4k", "scale8k"].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setScalePreset(preset)}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                  scalePreset === preset
                    ? "bg-indigo-600 text-white"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {preset === "scale4k" ? "4k/mo" : "8k/mo"}
              </button>
            ))}
          </div>
        )}

        <Card className="bg-black/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/15 text-sm uppercase tracking-wide text-white/70">
                  <th className="p-4">Page ID</th>
                  <th className="p-4">Tier</th>
                  <th className="p-4">Niche</th>
                  <th className="p-4">Posts/Month</th>
                  <th className="p-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {rowsWithPosts.map((row) => (
                  <tr key={row.id} className="border-b border-white/10 last:border-b-0">
                    <td className="p-4 font-semibold">{row.id}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${BADGE[row.tier]}`}
                      >
                        Tier {row.tier.slice(1)}
                      </span>
                    </td>
                    <td className="p-4">{row.niche}</td>
                    <td className="p-4 font-bold text-lg">{row.posts.toLocaleString()}</td>
                    <td className="p-4 text-white/70">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-white/10">
                  <td className="p-4 font-bold" colSpan={3}>
                    Total
                  </td>
                  <td className="p-4 font-black text-lg">{totalSum.toLocaleString()}</td>
                  <td className="p-4 text-white/60">T1 = least • T2 = mid • T3 = most</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>

        <p className="mt-3 text-sm text-white/60">
          This allocation is a starting point and <span className="font-semibold">will change with experimentation</span> (80/20
          cull &amp; regenerate).
        </p>
      </div>
    </section>
  );
}
