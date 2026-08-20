// Server Component — SSR + SEO
import { useTranslations } from "next-intl";

type Item = { title: string; desc: string };

const ADV_ICONS = [
  { glyph: "⚡", bg: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" },
  { glyph: "🎯", bg: "rgba(67,193,107,0.14)", color: "#2c8c4e" },
  { glyph: "🔒", bg: "rgba(90,63,46,0.10)", color: "var(--ink)" },
  { glyph: "🌱", bg: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" },
];

export function AdvantagesSection() {
  const t = useTranslations("advantages");
  const items = t.raw("items") as Item[];

  return (
    <section id="advantages" className="section" style={{ paddingTop: "48px" }}>
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>{t("title")}</h2>
          </div>
        </div>
        <div className="adv-grid fade-up">
          {items.map((item, i) => {
            const icon = ADV_ICONS[i % ADV_ICONS.length];
            return (
              <div className="adv-card" key={item.title}>
                <div className="adv-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="icon-pill" style={{ background: icon.bg, color: icon.color }}>
                  {icon.glyph}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Server Component — SSR + SEO
const CERT_BADGES = ["🏆", "⭐", "✓"];

export function CertificationsSection() {
  const t = useTranslations("certifications");
  const items = t.raw("items") as Item[];

  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>{t("title")}</h2>
          </div>
        </div>
        <div className="cert-grid fade-up">
          {items.map((item, i) => (
            <div className="cert-card" key={item.title}>
              <div className="cert-badge">{CERT_BADGES[i % CERT_BADGES.length]}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Server Component — SSR + SEO
export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section id="cta" className="section" style={{ paddingTop: "32px" }}>
      <div className="wrap">
        <div className="cta-card fade-up">
          <h2>{t("title")}</h2>
          <p>{t("desc")}</p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">{t("primary")}</a>
            <a href="mailto:info@lynxsolution.vn" className="btn btn-ghost">{t("secondary")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
