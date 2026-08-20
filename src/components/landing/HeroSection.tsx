// Server Component — SSR + SEO
import { useTranslations } from "next-intl";

type HeroRow = { label: string; sub: string; val: string };
type HeroStat = { num: string; label: string };

const ROW_STYLES = [
  { icon: "🤖", bg: "rgba(231,138,83,0.14)", color: "var(--orange-deep)", valColor: undefined },
  { icon: "⚡", bg: "rgba(67,193,107,0.14)", color: "#2c8c4e", valColor: "#2c8c4e" },
  { icon: "☁️", bg: "rgba(90,63,46,0.10)", color: "var(--ink)", valColor: "var(--ink)" },
  { icon: "📊", bg: "rgba(231,138,83,0.10)", color: "var(--orange-deep)", valColor: undefined },
] as const;

export function HeroSection() {
  const t = useTranslations("hero");
  const rows = t.raw("rows") as HeroRow[];
  const stats = t.raw("stats") as HeroStat[];

  return (
    <section id="hero">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left fade-up">
            <div className="hero-eyebrow">
              <span className="pill">{t("badgeNew")}</span>
              <span>{t("eyebrow")}</span>
            </div>
            <h1 className="hero-title">
              {t("titleBefore")}
              <span className="accent">{t("titleAccent")}</span>
              {t("titleAfter")}
            </h1>
            <p className="hero-desc">{t("desc")}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">{t("ctaPrimary")}</a>
              <a href="#projects" className="btn btn-ghost">{t("ctaSecondary")}</a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack">
                <div>NL</div><div>HM</div><div>TQ</div><div>+</div>
              </div>
              <div>
                <div style={{ color: "var(--ink)", fontWeight: 600 }}>{t("trustTitle")}</div>
                <div>{t("trustSub")}</div>
              </div>
            </div>
          </div>

          <div className="hero-right fade-up" style={{ transitionDelay: "0.1s" }}>
            <div className="hero-visual">
              {/* Top-right KPI card */}
              <div className="ios-card ios-card-sm top">
                <div className="stat-mini">{t("kpiLabel")}</div>
                <div className="stat-big">{t("kpiValue")}</div>
                <div className="stat-trend">{t("kpiTrend")}</div>
                <div className="spark">
                  <svg viewBox="0 0 220 32" preserveAspectRatio="none">
                    <path d="M0,28 L20,22 L40,24 L60,18 L80,20 L100,12 L120,14 L140,8 L160,10 L180,5 L200,7 L220,2" fill="none" stroke="#e78a53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0,28 L20,22 L40,24 L60,18 L80,20 L100,12 L120,14 L140,8 L160,10 L180,5 L200,7 L220,2 L220,32 L0,32 Z" fill="rgba(231,138,83,0.12)" />
                  </svg>
                </div>
              </div>

              {/* Main dashboard card */}
              <div className="ios-card ios-card-main">
                <div className="head">
                  <div className="title">{t("dashTitle")}</div>
                  <span className="badge-dot">{t("dashLive")}</span>
                </div>
                {rows.map((row, i) => {
                  const style = ROW_STYLES[i] ?? ROW_STYLES[0];
                  return (
                    <div className="ios-row" key={row.label}>
                      <div className="left">
                        <div className="ico" style={{ background: style.bg, color: style.color }}>
                          {style.icon}
                        </div>
                        <div>
                          <div className="lbl">{row.label}</div>
                          <div className="sub">{row.sub}</div>
                        </div>
                      </div>
                      <div className="val" style={style.valColor ? { color: style.valColor } : undefined}>
                        {row.val}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom-left status card */}
              <div className="ios-card ios-card-sm bot">
                <div className="stat-mini">{t("runningLabel")}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, var(--orange), var(--orange-deep))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "22px" }}>⚙</div>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: 800 }}>{t("runningCount")}</div>
                    <div style={{ fontSize: "11px", color: "var(--ink-3)", fontWeight: 500 }}>{t("runningSub")}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "4px", marginTop: "10px" }}>
                  <div style={{ flex: 3, height: "6px", borderRadius: "3px", background: "var(--orange)" }}></div>
                  <div style={{ flex: 2, height: "6px", borderRadius: "3px", background: "var(--orange-soft)" }}></div>
                  <div style={{ flex: 1, height: "6px", borderRadius: "3px", background: "var(--cream-3)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats fade-up" style={{ transitionDelay: "0.2s" }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="hs-num">{stat.num}<span className="plus">+</span></div>
              <div className="hs-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
