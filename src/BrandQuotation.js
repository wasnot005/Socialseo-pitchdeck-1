import React, { useState, useMemo } from "react";
import Layout from "./Layout";

// ─────────── SVG Icons ───────────
const I = {
    lock: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
    doc: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
    video: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
    globe: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    insta: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
    fb: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    yt: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>,
    x: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>,
    tiktok: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>,
    threads: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-3 0-5-2-5-5s2-5 5-5 5 2 5 5v7c0 3.31-2.69 6-6 6s-6-2.69-6-6v-1" /><path d="M12 12c3 0 5-2 5-5" /></svg>,
};

// ─────────── Shared Styles ───────────
const S = {
    section: { maxWidth: 1100, margin: "0 auto", padding: "80px 24px" },
    pill: {
        display: "inline-block", padding: "6px 16px", borderRadius: 50,
        background: "rgba(139,92,246,0.15)", color: "#a78bfa",
        fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase",
        marginBottom: 16, border: "1px solid rgba(139,92,246,0.25)"
    },
    h2: { color: "#fff", fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 16 },
    p: { color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.7, marginBottom: 24 },
    card: {
        background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 32
    },
    divider: { borderTop: "1px solid rgba(255,255,255,0.06)", margin: "0" },
    slider: {
        width: "100%", height: "6px", borderRadius: "5px", background: "rgba(255,255,255,0.1)",
        outline: "none", appearance: "none", cursor: "pointer", transition: "0.2s"
    },
    toggle: (active) => ({
        padding: "12px 20px", borderRadius: 12, border: "1px solid",
        borderColor: active ? "#8b5cf6" : "rgba(255,255,255,0.1)",
        background: active ? "rgba(139,92,246,0.15)" : "transparent",
        color: active ? "#fff" : "rgba(255,255,255,0.4)",
        cursor: "pointer", transition: "0.2s", fontWeight: 700, fontSize: 14
    }),
    platformBtn: (active) => ({
        display: "flex", alignItems: "center", gap: 8,
        padding: "8px 16px", borderRadius: 50, border: "1px solid",
        borderColor: active ? "#3b82f6" : "rgba(255,255,255,0.1)",
        background: active ? "rgba(59,130,246,0.15)" : "transparent",
        color: active ? "#fff" : "rgba(255,255,255,0.3)",
        cursor: "pointer", transition: "0.2s", fontSize: 12, fontWeight: 600
    })
};

// ─────────── Custom Styles for Slider ───────────
const SliderStyles = () => (
    <style>{`
        input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #a78bfa;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
        }
        input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #a78bfa;
            cursor: pointer;
            border: none;
        }
    `}</style>
);

const Header = () => (
    <div style={{ padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
            background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50,
            padding: "8px 20px", display: "flex", alignItems: "center", gap: 10
        }}>
            {I.doc}
            <span style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>Custom Social SEO Proposal</span>
        </div>
    </div>
);

const Hero = () => (
    <div style={{ ...S.section, textAlign: "center", paddingBottom: 40 }}>
        <div style={S.pill}>ROI FOCUSED SCALE</div>
        <h1 style={{ color: "#fff", fontSize: 48, fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            Unified Distribution<br />
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Strategic Calculator
            </span>
        </h1>
        <p style={{ ...S.p, maxWidth: 640, margin: "0 auto", fontSize: 18 }}>
            Configure your brand's content depth and redistribution reach in real-time.
        </p>
    </div>
);

const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

export default function BrandQuotation() {
    const [t1Active, setT1Active] = useState(true);
    const [t2Active, setT2Active] = useState(true);
    const [t3Active, setT3Active] = useState(true);

    const [platforms, setPlatforms] = useState(["Insta", "YouTube", "FB", "X", "TikTok"]);

    const [v1, setV1] = useState(200);   // Tier 1
    const [v2, setV2] = useState(300);   // Tier 2
    const [v3, setV3] = useState(500);   // Tier 3
    const [pages, setPages] = useState(100);

    const togglePlatform = (p) => {
        setPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
    };

    const calculation = useMemo(() => {
        const v1Count = t1Active ? v1 : 0;
        const v2Count = t2Active ? v2 : 0;
        const v3Count = t3Active ? v3 : 0;
        const totalVideos = v1Count + v2Count + v3Count;

        // Base Editor Rates (Raw)
        const t1Rate = 600;
        const t2Rate = 300;
        const t3Rate = 100;

        let rawProductionCost = (v1Count * t1Rate) + (v2Count * t2Rate) + (v3Count * t3Rate);
        if (totalVideos >= 1000) rawProductionCost *= 0.90;

        // Recalibrated marginMultiplier for "middle ground"
        // Target ~₹7.5L for the (200, 300, 500, 100) case.
        // Base Raw ≈ 615k. Multiplier needed ≈ 1.25x.
        const L = 1.35; // Loaded Margin Factor

        // Workforce Counts
        // More aggressive workforce scaling
        const editorCount = Math.ceil((v1Count / 20) + (v2Count / 50) + (v3Count / 100));
        const directorCount = Math.ceil(totalVideos / 300);
        const smmCount = Math.ceil(pages / 10);

        // Dynamic PM scaling
        let pmCount = 1;
        if (pages > 50 || totalVideos > 1500) pmCount = 2;
        if (pages > 150 || totalVideos > 3510) pmCount = 4;
        if (pages > 500) pmCount = 8;

        // Salary Costs (Already with Margin applied for display)
        const eCost = rawProductionCost * L;
        const dCost = (directorCount * 30000) * L;
        const sCost = (smmCount * 18000) * L;
        const pCost = (pmCount * 35000) * L;
        const aCost = (30000 + (pages * 200)) * L;

        const finalPrice = eCost + dCost + sCost + pCost + aCost;

        return {
            v1Count, v2Count, v3Count, totalVideos,
            eCost, dCost, sCost, pCost, aCost,
            finalPrice,
            editorCount, directorCount, smmCount, pmCount
        };
    }, [v1, v2, v3, pages, t1Active, t2Active, t3Active]);

    return (
        <Layout>
            <div style={{ minHeight: "100vh", color: "#fff", paddingBottom: 100 }}>
                <SliderStyles />
                <Header />
                <Hero />

                <div style={{ ...S.section, display: "grid", gridTemplateColumns: "1fr 400px", gap: 32, alignItems: "start" }}>

                    {/* Input Area */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                        <div style={S.card}>
                            <h4 style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>
                                Platform Distribution
                            </h4>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                {[
                                    { id: "Insta", icon: I.insta, label: "Instagram" },
                                    { id: "YouTube", icon: I.yt, label: "YouTube" },
                                    { id: "FB", icon: I.fb, label: "Facebook" },
                                    { id: "X", icon: I.x, label: "X (Twitter)" },
                                    { id: "TikTok", icon: I.tiktok, label: "TikTok" },
                                    { id: "Threads", icon: I.threads, label: "Threads" }
                                ].map((p) => (
                                    <button
                                        key={p.id}
                                        onClick={() => togglePlatform(p.id)}
                                        style={S.platformBtn(platforms.includes(p.id))}
                                    >
                                        {p.icon}
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={S.card}>
                            <h4 style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 700, marginBottom: 20, textTransform: "uppercase", letterSpacing: 1 }}>
                                Content Tiers (Enabled)
                            </h4>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                                <button onClick={() => setT1Active(!t1Active)} style={S.toggle(t1Active)}>Tier 1</button>
                                <button onClick={() => setT2Active(!t2Active)} style={S.toggle(t2Active)}>Tier 2</button>
                                <button onClick={() => setT3Active(!t3Active)} style={S.toggle(t3Active)}>Tier 3</button>
                            </div>
                        </div>

                        {t1Active && (
                            <div style={{ ...S.card, borderLeft: "4px solid #8b5cf6" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#8b5cf6" }} />
                                        <span style={{ fontWeight: 700 }}>Tier 1: Premium IP Creations</span>
                                    </div>
                                    <span style={{ color: "#a78bfa", fontSize: 24, fontWeight: 800 }}>{v1.toLocaleString()}</span>
                                </div>
                                <input type="range" min="10" max="2000" step="10" value={v1} onChange={(e) => setV1(parseInt(e.target.value))} style={S.slider} />
                            </div>
                        )}

                        {t2Active && (
                            <div style={{ ...S.card, borderLeft: "4px solid #3b82f6" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3b82f6" }} />
                                        <span style={{ fontWeight: 700 }}>Tier 2: Branded Growth Clips</span>
                                    </div>
                                    <span style={{ color: "#3b82f6", fontSize: 24, fontWeight: 800 }}>{v2.toLocaleString()}</span>
                                </div>
                                <input type="range" min="10" max="5000" step="10" value={v2} onChange={(e) => setV2(parseInt(e.target.value))} style={S.slider} />
                            </div>
                        )}

                        {t3Active && (
                            <div style={{ ...S.card, borderLeft: "4px solid #22c55e" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
                                        <span style={{ fontWeight: 700 }}>Tier 3: Volume Play</span>
                                    </div>
                                    <span style={{ color: "#22c55e", fontSize: 24, fontWeight: 800 }}>{v3.toLocaleString()}</span>
                                </div>
                                <input type="range" min="100" max="10000" step="100" value={v3} onChange={(e) => setV3(parseInt(e.target.value))} style={S.slider} />
                            </div>
                        )}

                        <div style={S.card}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    {I.globe}
                                    <span style={{ fontWeight: 700 }}>Distribution Network Scale</span>
                                </div>
                                <span style={{ color: "#fff", fontSize: 24, fontWeight: 800 }}>{pages.toLocaleString()} Pages</span>
                            </div>
                            <input type="range" min="5" max="1000" step="5" value={pages} onChange={(e) => setPages(parseInt(e.target.value))} style={S.slider} />
                        </div>

                    </div>

                    {/* Summary Sidebar */}
                    <div style={{ position: "sticky", top: 40, display: "flex", flexDirection: "column", gap: 20 }}>
                        <div style={{
                            ...S.card,
                            background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(99,102,241,0.15))",
                            border: "1px solid rgba(139,92,246,0.4)"
                        }}>
                            <div style={{ textAlign: "center", marginBottom: 32 }}>
                                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
                                    Monthly Strategic Investment
                                </div>
                                <div style={{ fontSize: 56, fontWeight: 900, color: "#fff", textShadow: "0 0 30px rgba(139,92,246,0.4)" }}>
                                    {formatCurrency(calculation.finalPrice)}
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                                <div style={{ background: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 12, textAlign: "center" }}>
                                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 4, textTransform: "uppercase" }}>Unique Clips</div>
                                    <div style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>{calculation.totalVideos.toLocaleString()}</div>
                                </div>
                                <div style={{ background: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 12, textAlign: "center" }}>
                                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 4, textTransform: "uppercase" }}>Posts Monthly</div>
                                    <div style={{ fontSize: 28, fontWeight: 900, color: "#22c55e" }}>{(calculation.totalVideos * platforms.length * Math.ceil(pages / 5)).toLocaleString()}+</div>
                                </div>
                            </div>

                            <hr style={{ ...S.divider, margin: "24px 0" }} />

                            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>
                                Workforce Allocation
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Content Editors</span>
                                    <span style={{ fontWeight: 700 }}>{calculation.editorCount}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Clip Directors</span>
                                    <span style={{ fontWeight: 700 }}>{calculation.directorCount}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Social Media Managers</span>
                                    <span style={{ fontWeight: 700 }}>{calculation.smmCount}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Account Managers</span>
                                    <span style={{ fontWeight: 700 }}>{calculation.pmCount}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                                    <span style={{ color: "rgba(255,255,255,0.4)" }}>Infrastructure & Support</span>
                                    <span style={{ fontWeight: 700 }}>Active</span>
                                </div>
                            </div>
                        </div>



                        <div style={{ ...S.card, padding: 24 }}>
                            <div style={{ display: "flex", gap: 10, alignItems: "center", color: "#a78bfa", marginBottom: 16 }}>
                                {I.check}
                                <span style={{ fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1 }}>Full Network Coverage</span>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                                {[
                                    "1 SMM per 10 premium pages",
                                    "Cross-Page Audience Engagement",
                                    "Platform-Wide Content Seeding",
                                    "Algorithm Momentum Management",
                                    "Asset Intellectual Property"
                                ].map((item, i) => (
                                    <li key={i} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", display: "flex", gap: 10, alignItems: "center" }}>
                                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#22c55e" }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
