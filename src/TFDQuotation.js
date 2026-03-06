import React, { useState } from "react";

// ─────────── SVG Icons ───────────
const I = {
    lock: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
    doc: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
    crown: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20" /><path d="M4 20V9l4 3 4-7 4 7 4-3v11" /></svg>,
    zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    rocket: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /></svg>,
    dollar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
    building: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22V12h6v10" /><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01" /></svg>,
    shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    chart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    bolt: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    clipboard: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>,
    handshake: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" /></svg>,
    launch: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /></svg>,
    check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
};

// ─────────── Password Gate ───────────
function PasswordGate({ onUnlock }) {
    const [pw, setPw] = useState("");
    const [err, setErr] = useState(false);
    const CODE = "tfd2026";

    const check = () => {
        if (pw.toLowerCase().trim() === CODE) onUnlock();
        else setErr(true);
    };

    return (
        <div style={{
            minHeight: "100vh", display: "flex", alignItems: "center",
            justifyContent: "center", padding: 24
        }}>
            <div style={{
                background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20,
                padding: "48px 40px", maxWidth: 400, width: "100%", textAlign: "center"
            }}>
                <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>{I.lock}</div>
                <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
                    Private Document
                </h2>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 24 }}>
                    Enter passcode to access the quotation
                </p>
                <input
                    type="password"
                    value={pw}
                    onChange={e => { setPw(e.target.value); setErr(false); }}
                    onKeyDown={e => e.key === "Enter" && check()}
                    placeholder="Enter passcode"
                    style={{
                        width: "100%", padding: "14px 18px", borderRadius: 12,
                        border: err ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.15)",
                        background: "rgba(255,255,255,0.06)", color: "#fff",
                        fontSize: 16, outline: "none", marginBottom: 8, boxSizing: "border-box"
                    }}
                />
                {err && <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 8 }}>Incorrect passcode</p>}
                <button onClick={check} style={{
                    width: "100%", padding: "14px 0", borderRadius: 12, border: "none",
                    background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                    color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer",
                    marginTop: 8
                }}>
                    Unlock
                </button>
            </div>
        </div>
    );
}

// ─────────── Shared Styles ───────────
const S = {
    section: { maxWidth: 1000, margin: "0 auto", padding: "80px 24px" },
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
    divider: { borderTop: "1px solid rgba(255,255,255,0.06)", margin: "0" }
};

// ─────────── Header ───────────
function Header() {
    return (
        <div style={{ padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{
                background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50,
                padding: "8px 20px", display: "flex", alignItems: "center", gap: 10
            }}>
                {I.doc}
                <span style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>Private Quotation</span>
                <span style={{
                    background: "rgba(239,68,68,0.15)", color: "#f87171", fontSize: 11,
                    padding: "2px 8px", borderRadius: 8, fontWeight: 600
                }}>CONFIDENTIAL</span>
            </div>
        </div>
    );
}

// ─────────── Hero ───────────
function Hero() {
    return (
        <div style={{ ...S.section, textAlign: "center", paddingBottom: 40 }}>
            <div style={S.pill}>QUOTATION</div>
            <h1 style={{ color: "#fff", fontSize: 48, fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
                The Founders Dream<br />
                <span style={{ background: "linear-gradient(135deg, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    × Social SEO
                </span>
            </h1>
            <p style={{ ...S.p, maxWidth: 600, margin: "0 auto", fontSize: 18 }}>
                A distribution engine that turns your content into a network of branded fan pages,
                each with its own identity, following, and growth trajectory.
            </p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, marginTop: 24 }}>
                This is not an editing service. This is infrastructure.
            </p>
        </div>
    );
}

// ─────────── Plan Card (Anchoring: highest first) ───────────
function PlanCard({ color, icon, name, price, clips, pages, posts, team }) {
    return (
        <div style={{
            ...S.card,
            border: "1px solid rgba(255,255,255,0.08)",
            position: "relative", overflow: "hidden"
        }}>
            <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>{icon}</div>
            <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>{name}</h3>
            <div style={{ marginBottom: 24 }}>
                <span style={{ color, fontSize: 36, fontWeight: 800 }}>{price}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}> /month</span>
            </div>

            <div style={{ display: "grid", gap: 12 }}>
                {[
                    { label: "Unique Clips", value: clips },
                    { label: "Fan Pages", value: pages },
                    { label: "Platforms", value: "YouTube, Instagram, Facebook, Twitter, TikTok" },
                    { label: "Total Posts/Month", value: posts },
                    { label: "Dedicated Team", value: team },
                ].map((row, i) => (
                    <div key={i} style={{
                        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                        padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)"
                    }}>
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{row.label}</span>
                        <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>
                            {row.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─────────── Plans Section ───────────
function Plans() {
    return (
        <div style={S.section}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div style={S.pill}>THREE OPTIONS</div>
                <h2 style={S.h2}>Choose the Scale That Fits</h2>
                <p style={S.p}>Each plan is designed around your revenue, content volume, and growth ambitions</p>
            </div>

            {/* Anchoring: show Full Domination first, then Scale, then Growth (recommended) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                <PlanCard
                    color="#a855f7"
                    icon={I.crown}
                    name="Full Domination"

                    price="₹28,00,000"
                    clips="10,000/month"
                    pages="1,000 branded pages"
                    posts="50,000 - 60,000"
                    team="12 Clip Directors, 10 SMMs, 7 Page Managers, 2 Account Managers"
                />
                <PlanCard
                    color="#3b82f6"
                    icon={I.zap}
                    name="Scale Network"

                    price="₹12,00,000"
                    clips="5,000/month"
                    pages="200 branded pages"
                    posts="25,000 - 35,000"
                    team="5 Clip Directors, 5 SMMs, 4 Page Managers, 1 Account Manager"
                />
                <PlanCard
                    color="#22c55e"
                    icon={I.rocket}
                    name="Growth Engine"

                    price="₹5,00,000"
                    clips="2,000/month"
                    pages="25 branded pages"
                    posts="10,000 - 17,000"
                    team="3 Clip Directors, 3 SMMs, 1 Account Manager"
                />
            </div>
        </div>
    );
}

// ─────────── Why No-Brainer ───────────
function WhyNoBrainer() {
    const points = [
        {
            icon: I.dollar,
            title: "It Pays for Itself",
            text: "Your guests already pay ₹1L+. Add distribution to the package and charge ₹1.25L to ₹1.5L. Even a ₹25K increase × 25 guests/month = ₹6.25L extra revenue. Plan A costs ₹5L. Net positive from Month 1."
        },
        {
            icon: I.building,
            title: "You're Creating IPs, Not Just Pages",
            text: "Each fan page is a brand: \"Startup Stories India\", \"Founders Motivation Daily\", \"Business Mentors Hindi\". Within months, many pages will have more followers than your current 23K Instagram. You own all of it."
        },
        {
            icon: I.shield,
            title: "A Moat Competitors Can't Cross",
            text: "Your competitors have zero fan pages. Once you have 25 to 1,000 pages with months of content and growing audiences, they would need 6-12 months just to start. By then you're 10x ahead. First mover advantage is everything."
        },
        {
            icon: I.chart,
            title: "Better Than Ad Spend",
            text: "100M organic impressions at a CPM of ₹50 to ₹100 equals ₹50L to ₹1 Cr worth of equivalent paid ads. You get this for a fraction. Organic reach compounds. Paid ads stop the moment you stop paying."
        },
        {
            icon: I.bolt,
            title: "Costs Drop as We Scale",
            text: "After 3-6 months, we introduce AI-automated editing workflows that reduce per-clip costs significantly. The same output at a lower price, or reinvest savings into scaling up."
        }
    ];

    return (
        <div style={S.section}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div style={S.pill}>WHY THIS WORKS</div>
                <h2 style={S.h2}>Five Reasons This Is a No-Brainer</h2>
            </div>
            <div style={{ display: "grid", gap: 20 }}>
                {points.map((p, i) => (
                    <div key={i} style={{ ...S.card, display: "flex", gap: 20, alignItems: "flex-start" }}>
                        <div style={{
                            width: 56, height: 56, borderRadius: 14,
                            background: "rgba(139,92,246,0.1)", display: "flex",
                            alignItems: "center", justifyContent: "center", flexShrink: 0
                        }}>
                            {p.icon}
                        </div>
                        <div>
                            <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{p.title}</h3>
                            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>{p.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─────────── Included / Not Included ───────────
function IncludedSection() {
    const included = [
        "Fan page creation and branding with unique logos, bios, and content pillars",
        "Clip selection and editing with hook-optimized captions, zooms, and overlays",
        "Multi-platform distribution across YouTube Shorts, Instagram Reels, Facebook Reels, Twitter/X, TikTok",
        "AI-driven posting schedule optimization per platform",
        "Top 10% remix multiplier where best-performing clips get 7+ derivatives",
        "Weekly performance snapshots",
        "Monthly strategy call to review results, adjust, and plan ahead",
        "Dedicated account manager as single point of contact"
    ];
    const notIncluded = [
        "Raw footage production (TFD already handles this)",
        "Guest management and scheduling",
        "Main channel management (your existing team continues)",
        "Paid advertising / ad boosting (organic only)"
    ];

    return (
        <div style={S.section}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                <div style={S.card}>
                    <h3 style={{ color: "#22c55e", fontSize: 20, fontWeight: 700, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                        {I.check} Included in Every Plan
                    </h3>
                    <div style={{ display: "grid", gap: 12 }}>
                        {included.map((item, i) => (
                            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <span style={{ color: "#22c55e", fontSize: 16, marginTop: 2 }}>●</span>
                                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={S.card}>
                    <h3 style={{ color: "rgba(255,255,255,0.4)", fontSize: 20, fontWeight: 700, marginBottom: 20 }}>
                        Not Included (Transparency)
                    </h3>
                    <div style={{ display: "grid", gap: 12 }}>
                        {notIncluded.map((item, i) => (
                            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 16, marginTop: 2 }}>○</span>
                                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─────────── Before / After Comparison ───────────
function BeforeAfter() {
    const rows = [
        { before: "60+ clients get 6 reels each", after: "60+ clients get clips across 25+ pages on 5 platforms" },
        { before: "23K followers on 1 account", after: "Combined reach across 100+ growing accounts" },
        { before: "Content dies in 48 hours", after: "Content compounds for months" },
        { before: "Guests struggle to justify ₹1L+", after: "Guests see ₹1L+ as a bargain for the distribution" },
        { before: "Competitors can enter anytime", after: "You own the distribution moat, 6-12 months head start" },
        { before: "Revenue capped by guest volume", after: "Revenue scales with the network" },
    ];

    return (
        <div style={S.section}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div style={S.pill}>THE SHIFT</div>
                <h2 style={S.h2}>Without vs. With Distribution</h2>
            </div>
            <div style={S.card}>
                <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
                    borderRadius: 12, overflow: "hidden"
                }}>
                    <div style={{
                        background: "rgba(239,68,68,0.08)", padding: "16px 20px",
                        borderBottom: "1px solid rgba(255,255,255,0.05)"
                    }}>
                        <span style={{ color: "#ef4444", fontSize: 14, fontWeight: 700 }}>WITHOUT</span>
                    </div>
                    <div style={{
                        background: "rgba(34,197,94,0.08)", padding: "16px 20px",
                        borderBottom: "1px solid rgba(255,255,255,0.05)"
                    }}>
                        <span style={{ color: "#22c55e", fontSize: 14, fontWeight: 700 }}>WITH DISTRIBUTION</span>
                    </div>
                    {rows.map((row, i) => (
                        <React.Fragment key={i}>
                            <div style={{
                                padding: "14px 20px",
                                borderBottom: "1px solid rgba(255,255,255,0.04)",
                                background: "rgba(239,68,68,0.03)"
                            }}>
                                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{row.before}</span>
                            </div>
                            <div style={{
                                padding: "14px 20px",
                                borderBottom: "1px solid rgba(255,255,255,0.04)",
                                background: "rgba(34,197,94,0.03)"
                            }}>
                                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 500 }}>{row.after}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─────────── Month-by-Month (Growth Engine) ───────────
function Timeline() {
    const months = [
        { month: "Month 1", desc: "25 pages live across 5 platforms. First 2,000 clips distributed. Algorithm begins learning." },
        { month: "Month 2-3", desc: "Algorithm picks up. Pages start gaining organic followers. Guest episodes trending on fan pages." },
        { month: "Month 4-6", desc: "Top-performing pages cross 10K followers independently. You can start showcasing distribution numbers to clients." },
        { month: "Month 6-9", desc: "Multiple pages surpass your current reach. Guest episodes have a second and third life across the network." },
        { month: "Month 9-12", desc: "Full distribution engine operational. Distribution becomes a core selling point in your guest packages." },
    ];

    return (
        <div style={S.section}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div style={S.pill}>GROWTH ENGINE TIMELINE</div>
                <h2 style={S.h2}>What Happens After You Start</h2>
                <p style={S.p}>Based on Plan A: Growth Engine</p>
            </div>
            <div style={{ position: "relative", paddingLeft: 32 }}>
                <div style={{
                    position: "absolute", left: 11, top: 8, bottom: 8, width: 2,
                    background: "linear-gradient(to bottom, #a78bfa, rgba(167,139,250,0.1))"
                }} />
                {months.map((m, i) => (
                    <div key={i} style={{ position: "relative", marginBottom: 32, paddingLeft: 24 }}>
                        <div style={{
                            position: "absolute", left: -27, top: 6, width: 14, height: 14,
                            borderRadius: "50%", background: "#a78bfa",
                            border: "3px solid rgba(15,15,30,0.8)"
                        }} />
                        <h4 style={{ color: "#a78bfa", fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{m.month}</h4>
                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─────────── Next Steps ───────────
function NextSteps() {
    return (
        <div style={{ ...S.section, textAlign: "center" }}>
            <div style={S.pill}>NEXT STEP</div>
            <h2 style={{ ...S.h2, marginBottom: 24 }}>Ready to Build the Engine?</h2>
            <div style={S.card}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, textAlign: "center" }}>
                    <div>
                        <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>{I.clipboard}</div>
                        <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Choose Your Plan</h4>
                        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, margin: 0 }}>Growth, Scale, or Domination</p>
                    </div>
                    <div>
                        <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>{I.handshake}</div>
                        <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Confirm on Call</h4>
                        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, margin: 0 }}>Walk through the plan together</p>
                    </div>
                    <div>
                        <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>{I.launch}</div>
                        <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Pages Live in 48 Hours</h4>
                        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, margin: 0 }}>We start building immediately</p>
                    </div>
                </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, marginTop: 40 }}>
                This document is confidential. Prepared exclusively for The Founders Dream.
            </p>
        </div>
    );
}

// ─────────── Main ───────────
export default function TFDQuotation() {
    const [unlocked, setUnlocked] = useState(false);

    if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

    return (
        <div style={{ minHeight: "100vh", color: "#fff" }}>
            <Header />
            <Hero />
            <hr style={S.divider} />
            <Plans />
            <hr style={S.divider} />
            <WhyNoBrainer />
            <hr style={S.divider} />
            <BeforeAfter />
            <hr style={S.divider} />
            <IncludedSection />
            <hr style={S.divider} />
            <Timeline />
            <hr style={S.divider} />
            <NextSteps />
        </div>
    );
}
