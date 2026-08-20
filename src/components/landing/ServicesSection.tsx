// Server Component — SSR + SEO
import { useTranslations } from "next-intl";

const SERVICE_KEYS = ["software", "ai", "cloud", "data", "ecommerce"] as const;

const SERVICE_ICONS: Record<(typeof SERVICE_KEYS)[number], { glyph: string; bg: string; color: string }> = {
  software: { glyph: "⌬", bg: "rgba(231,138,83,0.16)", color: "var(--orange-deep)" },
  ai: { glyph: "◊", bg: "rgba(67,193,107,0.14)", color: "#2c8c4e" },
  cloud: { glyph: "☁", bg: "rgba(90,63,46,0.10)", color: "var(--ink)" },
  data: { glyph: "▲", bg: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" },
  ecommerce: { glyph: "🛍", bg: "rgba(67,193,107,0.10)", color: "#2c8c4e" },
};

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section" style={{ paddingTop: "48px" }}>
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>{t("title")}</h2>
            <p className="lede">{t("lede")}</p>
          </div>
          <a href="#contact" className="btn-link">{t("link")}</a>
        </div>
        <div className="services-grid fade-up">
          {SERVICE_KEYS.map((key) => {
            const icon = SERVICE_ICONS[key];
            const tags = t.raw(`items.${key}.tags`) as string[];
            return (
              <div className="service-card" key={key}>
                <div className="icon-pill" style={{ background: icon.bg, color: icon.color }}>
                  {icon.glyph}
                </div>
                <h3>{t(`items.${key}.title`)}</h3>
                <p>{t(`items.${key}.desc`)}</p>
                <div className="tag-row">
                  {tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
