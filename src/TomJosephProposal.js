import React from "react";
import Layout from "./Layout";

// ─────────── Icons ───────────
const I = {
    check: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    ai: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8" /><path d="m4.93 4.93 2.83 2.83" /><path d="M2 12h8" /><path d="m4.93 19.07 2.83-2.83" /><path d="M12 22v-8" /><path d="m19.07 19.07-2.83-2.83" /><path d="M22 12h-8" /><path d="m19.07 4.93-2.83 2.83" /><circle cx="12" cy="12" r="4" /></svg>,
    campus: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>,
    scale: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4-4-4" /><path d="M4 20V10a4 4 0 0 1 4-4h8" /></svg>,
    pillar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="M15 3v18" /><path d="M3 9h18" /><path d="M3 15h18" /></svg>,
};

// ─────────── Shared Styles ───────────
const S = {
    section: { maxWidth: 1100, margin: "0 auto", padding: "80px 24px" },
    card: {
        background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 32,
        transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)"
    },
    pill: (color = "#a78bfa") => ({
        display: "inline-block", padding: "6px 16px", borderRadius: 50,
        background: `${color}1a`, color: color,
        fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
        marginBottom: 16, border: `1px solid ${color}33`
    }),
};

const SectionHeader = ({ pill, title, desc, center = true }) => (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 48, maxWidth: 700, margin: center ? "0 auto 48px" : "0 0 48px" }}>
        {pill && <div style={S.pill()}>{pill}</div>}
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16, color: "#fff" }}>{title}</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.6 }}>{desc}</p>
    </div>
);

const PriceCard = ({ title, price, features, scope, icon }) => (
    <div style={{
        ...S.card,
        position: "relative",
        flex: 1,
        display: "flex",
        flexDirection: "column"
    }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 24 }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>{title}</h3>
            <div style={{ padding: 8, borderRadius: 12, background: "rgba(255,255,255,0.05)" }}>{icon}</div>
        </div>

        {price ? (
            <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 36, fontWeight: 900, color: "#fff" }}>{price}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>/month</span>
            </div>
        ) : (
            <div style={{ marginBottom: 24, padding: "8px 16px", background: "rgba(255,255,255,0.05)", borderRadius: 12, display: "inline-block" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#a78bfa", textTransform: "uppercase" }}>Empire Roadmap</span>
            </div>
        )}

        <div style={{ padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.05)", marginBottom: 24 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4, fontWeight: 800 }}>Deliverables</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>{scope}</div>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
            {features.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                    <div style={{ marginTop: 2 }}>{I.check}</div>
                    {f}
                </li>
            ))}
        </ul>
    </div>
);

export default function TomJosephProposal() {
    return (
        <Layout>
            <div style={{ minHeight: "100vh", color: "#fff", paddingBottom: 100, fontFamily: "Inter, sans-serif" }}>

                {/* Header / Brand */}
                <div style={{ position: "fixed", top: 32, left: 32, zIndex: 100, display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #8b5cf6, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20 }}>S</div>
                    <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Social SEO</div>
                </div>

                {/* Hero */}
                <section style={{ ...S.section, textAlign: "center", paddingTop: 160, paddingBottom: 80 }}>
                    <div style={S.pill()}>STRATEGIC PARTNERSHIP</div>
                    <h1 style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)", fontWeight: 950, lineHeight: 0.9, tracking: "-0.05em", marginBottom: 32 }}>
                        Tom Joseph:<br />
                        <span style={{ background: "linear-gradient(135deg, #a78bfa, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Academic Authority & Visionary Pilot
                        </span>
                    </h1>
                    <p style={{ fontSize: 22, color: "rgba(255,255,255,0.6)", maxWidth: 800, margin: "0 auto", lineHeight: 1.5 }}>
                        A systematic transformation of Kerala's leading academician into a global thought leader and investment magnet.
                    </p>
                </section>

                {/* Content Pillars */}
                <section style={S.section}>
                    <SectionHeader
                        pill="The Foundation"
                        title="Content Pillars"
                        desc="A high-authority brand is built on consistency across three core niches. We focus on the intersection of education, venture, and culture."
                    />

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                        <div style={S.card}>
                            <h4 style={{ color: "#a78bfa", fontWeight: 800, textTransform: "uppercase", fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>Pillar 01</h4>
                            <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>The Academic Legacy</h3>
                            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                                Insights on the future of higher education, the first private university system, and Kerala's academic landscape.
                            </p>
                        </div>
                        <div style={S.card}>
                            <h4 style={{ color: "#3b82f6", fontWeight: 800, textTransform: "uppercase", fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>Pillar 02</h4>
                            <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>VC & Deal Flow</h3>
                            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                                Thought leadership for investors and founders. Commentary on startup ecosystems, PE trends, and "Elevate" highlights.
                            </p>
                        </div>
                        <div style={S.card}>
                            <h4 style={{ color: "#22c55e", fontWeight: 800, textTransform: "uppercase", fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>Pillar 03</h4>
                            <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Campus Culture</h3>
                            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                                Student-centric vibe content. Behind the scenes of university life, film star visits, and campus innovation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Delivery Streams */}
                <section style={{ ...S.section, paddingTop: 40 }}>
                    <SectionHeader
                        pill="Execution Model"
                        title="Dual-Stream Distribution"
                        desc="Maximizing reach by leveraging AI for efficiency and your internal media team for raw authenticity."
                    />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                        <div style={S.card}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(167,139,250,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, padding: 12 }}>{I.ai}</div>
                            <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Founder AI Engine</h3>
                            <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 24, lineHeight: 1.6 }}>
                                <b>Hands-off growth.</b> We use an AI clone of Tom to generate high-quality thought leadership reels without him stepping into a studio once.
                            </p>
                            <div style={{ display: "grid", gap: 12 }}>
                                <div style={{ background: "rgba(255,255,255,0.02)", padding: 16, borderRadius: 16 }}>
                                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4, letterSpacing: 1 }}>Tone</div>
                                    <div style={{ fontWeight: 800 }}>English / International Authority</div>
                                </div>
                            </div>
                        </div>

                        <div style={S.card}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, padding: 12 }}>{I.campus}</div>
                            <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Campus Pulse Edits</h3>
                            <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 24, lineHeight: 1.6 }}>
                                <b>Operational synergy.</b> We take the raw media from your 30-member campus team and turn it into viral-quality distribution assets.
                            </p>
                            <div style={{ display: "grid", gap: 12 }}>
                                <div style={{ background: "rgba(255,255,255,0.02)", padding: 16, borderRadius: 16 }}>
                                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4, letterSpacing: 1 }}>Tone</div>
                                    <div style={{ fontWeight: 800 }}>Malayalam + English / Vibe Edits</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Investment Packages */}
                <section style={S.section}>
                    <SectionHeader
                        pill="Phased Investment"
                        title="Scaling Personal Leverage"
                        desc="Systematized rollout plans designed for immediate impact and long-term asset creation."
                    />

                    <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                        <PriceCard
                            title="Founder AI"
                            price="₹1,00,000"
                            scope="30 Videos / Month"
                            icon={I.ai}
                            features={[
                                "AI Clone Build & Training",
                                "30 High-Authority AI Reels",
                                "Global Scripting & Research",
                                "Full Account Management",
                                "Distribution Across 5 Platforms"
                            ]}
                        />
                        <PriceCard
                            title="Dual Hybrid"
                            price="₹1,97,000"
                            scope="60 Videos / Month"
                            icon={I.campus}
                            features={[
                                "Everything in Founder AI",
                                "30 Premium Campus Event Edits",
                                "Raw Media Processing Workflow",
                                "Bilingual Captions (Malayalam/Eng)",
                                "Recruitment Ad-Funnel Strategy",
                                "Priority Post-Production Support"
                            ]}
                        />
                        <PriceCard
                            title="Empire Scale"
                            scope="90 Videos / Month"
                            icon={I.scale}
                            features={[
                                "Everything in Dual Hybrid",
                                "Mass-Volume AI Production (60+)",
                                "Multilingual AI Audio Dubbing",
                                "Founder IP Asset Management",
                                "Performance Analytics Dashboard"
                            ]}
                        />
                    </div>
                </section>

            </div>
        </Layout>
    );
}
