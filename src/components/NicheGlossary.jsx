import React from "react";
import { Card } from "./ui";

const GLOSSARY = [
  {
    key: "Business",
    t1: "Story-first cuts; minimal captions.",
    t2t3: "Text hooks + EN↔HI tests; frameworks, playbooks, myth-busts.",
  },
  {
    key: "Motivation",
    t1: "Story-first cuts; minimal captions.",
    t2t3: "Text hooks; emotions > outcomes; listicles & challenges.",
  },
  {
    key: "Viral Content",
    t1: "Personality interviews; minimal captions.",
    t2t3: "Reactions/green-screen; celebrity discourse; headline tests.",
  },
  {
    key: "Common (T1/T2)",
    t1: "Cross-niche summaries; minimal captions.",
    t2t3: "Fastest A/B loops for titles, thumbs, captions.",
  },
  {
    key: "Labs (T3)",
    t1: null,
    t2t3: "Split-screen/memes/stitch; regional HI/Hinglish pilots; re-seeds.",
  },
];

export default function NicheGlossary() {
  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <Card title="Niche Glossary (Format Hints)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GLOSSARY.map((item) => (
              <div key={item.key} className="bg-white/5 p-4 rounded-lg">
                <div className="font-bold mb-1">{item.key}</div>
                {item.t1 && (
                  <p className="text-white/70 text-sm">
                    <span className="font-semibold">T1:</span> {item.t1}
                  </p>
                )}
                {item.t2t3 && (
                  <p className="text-white/70 text-sm mt-1">
                    <span className="font-semibold">T2/T3:</span> {item.t2t3}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="text-white/60 text-xs mt-3">
            T1 keeps captions minimal; testing lives in T2/T3 (incl. <span className="font-semibold">text hooks</span>).
          </p>
        </Card>
      </div>
    </section>
  );
}
