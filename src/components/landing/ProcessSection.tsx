// Server Component — SSR + SEO
import { useTranslations } from "next-intl";

type Step = { title: string; desc: string };

export function ProcessSection() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Step[];
  const qa = t.raw("qa") as string[];

  return (
    <section id="process" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>{t("title")}</h2>
            <p className="lede">{t("lede")}</p>
          </div>
        </div>
        <div className="process-track fade-up">
          {steps.map((step, i) => (
            <div className="step-card" key={step.title}>
              <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="qa-row fade-up">
          {qa.map((item) => (
            <div className="qa-pill" key={item}>
              <span className="check">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
