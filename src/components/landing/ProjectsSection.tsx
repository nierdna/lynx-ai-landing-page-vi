// Server Component — SSR + SEO
import { useTranslations } from "next-intl";

const PROJECT_KEYS = ["chomchom", "erp", "crm", "zalo", "assistant"] as const;

type ProjectKey = (typeof PROJECT_KEYS)[number];

/** Ảnh bìa từng dự án; mã nào chưa có ảnh thì dùng glyph theo style .project-thumb .glyph */
const PROJECT_THUMBS: Record<ProjectKey, { image?: string; glyph?: string }> = {
  chomchom: { glyph: "👗" },
  erp: { image: "/img/project-erp.png" },
  crm: { image: "/img/project-crm.jpg" },
  zalo: { image: "/img/project-zalo.png" },
  assistant: { image: "/img/project-ai.jpg" },
};

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>{t("title")}</h2>
            <p className="lede">{t("lede")}</p>
          </div>
          <a href="#contact" className="btn-link">{t("link")}</a>
        </div>
        <div className="projects-grid fade-up">
          {PROJECT_KEYS.map((key) => {
            const thumb = PROJECT_THUMBS[key];
            const tags = t.raw(`items.${key}.tags`) as string[];
            const linkHref = t(`items.${key}.linkHref`);
            const linkLabel = t(`items.${key}.linkLabel`);
            const inhouse = key === "chomchom";

            return (
              <div className={`project-card${inhouse ? " featured" : ""}`} key={key}>
                <div className="project-thumb">
                  {thumb.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={thumb.image} alt={t(`items.${key}.imageAlt`)} loading="lazy" />
                  ) : (
                    <div className="glyph" role="img" aria-label={t(`items.${key}.imageAlt`)}>
                      {thumb.glyph}
                    </div>
                  )}
                </div>
                <div className="project-body">
                  {inhouse ? <span className="project-badge">{t("inhouseBadge")}</span> : null}
                  <h3>{t(`items.${key}.title`)}</h3>
                  <p className="desc">{t(`items.${key}.desc`)}</p>
                  <div className="project-tags">
                    {tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="outcome">
                    <span className="check">✓</span>
                    <span>{t(`items.${key}.outcome`)}</span>
                  </div>
                  {linkHref && linkLabel ? (
                    <a className="project-link" href={linkHref} target="_blank" rel="noopener noreferrer">
                      {linkLabel}
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
