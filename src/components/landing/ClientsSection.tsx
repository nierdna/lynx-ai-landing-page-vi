// Server Component — SSR + SEO
import { useTranslations } from "next-intl";

const CLIENTS = [
  {
    name: "OWEN",
    domain: "owen.vn",
    href: "https://owen.vn/",
    logo: "https://owen.cdn.vccloud.vn/media/favicon/stores/1/logo_owen_file_icon.png",
  },
  {
    name: "Archimedes School",
    domain: "aschool.edu.vn",
    href: "https://aschool.edu.vn/",
    logo: "https://archimedes.nguyenminhanh.com.vn/wp-content/uploads/2026/01/LOGO-ARCHIMEDES--150x150.png",
  },
  {
    name: "NEM",
    domain: "nemshop.vn",
    href: "https://nemshop.vn/",
    logo: "http://theme.hstatic.net/200000182297/1000887316/14/favicon.png?v=3091",
  },
] as const;

const INDUSTRY_ICONS = ["🏦", "🏥", "🛍️", "📦", "🎓", "🏭"];

export function ClientsSection() {
  const t = useTranslations("clients");
  const industries = t.raw("industries") as string[];

  return (
    <section id="clients" className="section" style={{ paddingTop: "48px" }}>
      <div className="wrap">
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 style={{ marginTop: "12px" }}>{t("title")}</h2>
        </div>
        <div className="clients-grid fade-up">
          {CLIENTS.map((client) => (
            <a
              className="client-tile"
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={client.logo} alt={client.name} />
              <div>
                <div className="client-name">{client.name}</div>
                <div className="client-domain">{client.domain}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="fade-up" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "18px" }}>
            {t("industriesTitle")}
          </div>
          <div className="industry-row">
            {industries.map((industry, i) => (
              <span className="industry-pill" key={industry}>
                <span style={{ fontSize: "14px" }}>{INDUSTRY_ICONS[i % INDUSTRY_ICONS.length]}</span> {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
