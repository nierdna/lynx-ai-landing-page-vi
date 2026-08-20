// Server Component — SSR + SEO
import Image from "next/image";
import { useTranslations } from "next-intl";

const COMPANY_LINKS = [
  { key: "overview", href: "#overview" },
  { key: "team", href: "#team" },
  { key: "projects", href: "#projects" },
  { key: "certifications", href: "#certifications" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const serviceLinks = t.raw("servicesLinks") as string[];

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: "18px" }}>
              <Image
                src="/img/logo.png"
                alt="LYNX AI SOLUTION"
                width={140}
                height={38}
                style={{ height: "38px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p>{t("tagline")}</p>
            <p style={{ marginTop: "12px" }}>
              {t("brandNote")}
            </p>
          </div>
          <div className="footer-col">
            <h5>{t("servicesTitle")}</h5>
            <ul>
              {serviceLinks.map((label) => (
                <li key={label}><a href="#services">{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t("companyTitle")}</h5>
            <ul>
              {COMPANY_LINKS.map((item) => (
                <li key={item.key}><a href={item.href}>{t(`companyLinks.${item.key}`)}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t("contactTitle")}</h5>
            <ul>
              <li><a href="mailto:info@lynxsolution.vn">info@lynxsolution.vn</a></li>
              <li><a href="tel:+84929862699">+84 929 862 699</a></li>
              <li><a href="https://chomchom.com.vn" target="_blank" rel="noopener noreferrer">chomchom.com.vn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CTCP LYNX AI SOLUTION · MST 0111115574</p>
          <p>{t("legal")}</p>
        </div>
      </div>
    </footer>
  );
}
