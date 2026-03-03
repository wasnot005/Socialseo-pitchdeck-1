import React from "react";
import { Card } from "./ui";

const GLOSSARY = [
    {
        key: "Podcast Clips",
        t1: "Best moments from Better Version Podcast; story-first cuts; clean edits.",
        t2t3: "Text hooks + A/B title tests; guest highlights; episode teasers.",
    },
    {
        key: "Business & Startups",
        t1: "Startup lessons, business principles; minimal captions.",
        t2t3: "Text hooks; frameworks, playbooks, case studies; myth-busts.",
    },
    {
        key: "Entrepreneurship",
        t1: "Agency scaling insights; founder lessons; clean format.",
        t2t3: "Bold hooks; provocative questions; listicles & challenges.",
    },
    {
        key: "Content & Marketing",
        t1: "Content strategy fundamentals; personal branding principles.",
        t2t3: "Tactical tips; platform comparisons; creator economy insights.",
    },
    {
        key: "Growth & Strategy",
        t1: null,
        t2t3: "Growth hacking; digital strategy; guest expert frameworks.",
    },
    {
        key: "Mindset & Success",
        t1: null,
        t2t3: "Discipline, goal-setting, success principles; motivational cuts.",
    },
];

export default function AshmitNicheGlossary() {
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
