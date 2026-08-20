// Server Component — SSR + SEO
import { useTranslations } from "next-intl";

const VALUE_DOTS = ["#e78a53", "#43c16b", "#5a3f2e", "#d4733b", "#2a1810"];

export function OverviewSection() {
  const t = useTranslations("overview");
  const values = t.raw("values") as string[];

  return (
    <section id="overview" className="section">
      <div className="wrap">
        <div className="overview-grid">
          <div className="fade-up">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "16px" }}>{t("title")}</h2>
            <p className="lede">{t("lede")}</p>
            <p className="lede" style={{ marginTop: "12px" }}>{t("ledeRetail")}</p>
            <div className="vm-stack">
              <div className="vm-row">
                <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>◎</div>
                <div>
                  <div className="label">{t("visionLabel")}</div>
                  <div className="body">{t("visionBody")}</div>
                </div>
              </div>
              <div className="vm-row">
                <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>↗</div>
                <div>
                  <div className="label">{t("missionLabel")}</div>
                  <div className="body">{t("missionBody")}</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "10px" }}>
                {t("valuesTitle")}
              </div>
              <div className="values-row">
                {values.map((value, i) => (
                  <span className="value-chip" key={value}>
                    <span className="dot" style={{ background: VALUE_DOTS[i % VALUE_DOTS.length] }}></span>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <div className="info-stack">
              <div className="info-row">
                <div>
                  <div className="lbl">{t("infoNameLabel")}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "2px" }}>{t("infoNameValue")}</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>🏢</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">{t("infoTaxLabel")}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "2px", fontVariantNumeric: "tabular-nums" }}>{t("infoTaxValue")}</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>📑</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">{t("infoHqLabel")}</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "2px", lineHeight: 1.45 }}>
                    {t("infoHqLine1")}<br />{t("infoHqLine2")}
                  </div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(90,63,46,0.10)", color: "var(--ink)" }}>📍</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">{t("infoSizeLabel")}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "2px" }}>{t("infoSizeValue")}</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" }}>👥</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">{t("infoBrandLabel")}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "2px" }}>
                    <a href="https://chomchom.com.vn" target="_blank" rel="noopener noreferrer">
                      {t("infoBrandValue")}
                    </a>
                  </div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>🛍️</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">{t("infoTaxOfficeLabel")}</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "2px" }}>{t("infoTaxOfficeValue")}</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(67,193,107,0.10)", color: "#2c8c4e" }}>✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
