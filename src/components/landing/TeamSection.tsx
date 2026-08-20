// Server Component — SSR + SEO
import { useTranslations } from "next-intl";

type TeamStat = { num: string; plus: boolean; label: string };
type Role = { title: string; desc: string };
type Leader = { role: string; name: string; desc: string };

const ROLE_ICONS = [
  { glyph: "👨‍💻", bg: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" },
  { glyph: "🤖", bg: "rgba(67,193,107,0.14)", color: "#2c8c4e" },
  { glyph: "🎨", bg: "rgba(90,63,46,0.10)", color: "var(--ink)" },
  { glyph: "☁️", bg: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" },
  { glyph: "📊", bg: "rgba(67,193,107,0.10)", color: "#2c8c4e" },
  { glyph: "🔍", bg: "rgba(90,63,46,0.08)", color: "var(--ink)" },
];

const LEADER_AVATARS = [
  "/img/team/ceo2.jpeg",
  "/img/team/cco2.jpeg",
  "/img/team/cto2.jpeg",
  "/img/team/cmo2.png",
];

export function TeamSection() {
  const t = useTranslations("team");
  const stats = t.raw("stats") as TeamStat[];
  const roles = t.raw("roles") as Role[];
  const leaders = t.raw("leaders") as Leader[];

  return (
    <section id="team" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>{t("title")}</h2>
            <p className="lede">{t("lede")}</p>
          </div>
        </div>
        <div className="team-stats fade-up">
          {stats.map((stat) => (
            <div className="team-stat-card" key={stat.label}>
              <div className="big">
                {stat.num}
                {stat.plus ? <span className="plus">+</span> : null}
              </div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="roles-grid fade-up">
          {roles.map((role, i) => {
            const icon = ROLE_ICONS[i % ROLE_ICONS.length];
            return (
              <div className="role-card" key={role.title}>
                <div className="icon-pill" style={{ background: icon.bg, color: icon.color }}>
                  {icon.glyph}
                </div>
                <div>
                  <h4>{role.title}</h4>
                  <p>{role.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="leader-head fade-up">
          <h3>{t("leaderTitle")}</h3>
          <p>{t("leaderLede")}</p>
        </div>
        <div className="leaders-grid fade-up">
          {leaders.map((leader, i) => (
            <article className="leader-card" key={leader.role}>
              <div className="leader-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LEADER_AVATARS[i]} alt={leader.name} loading="lazy" />
              </div>
              <div className="role">{leader.role}</div>
              <h4>{leader.name}</h4>
              <p>{leader.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
