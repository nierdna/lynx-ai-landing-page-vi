"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const TABS = [{ id: "arch" }, { id: "design" }, { id: "tech" }, { id: "infra" }, { id: "ai" }] as const;

type TabId = (typeof TABS)[number]["id"];

const PANELS: Record<TabId, { color: string; label: string }[]> = {
  arch: [
    { color: "#e78a53", label: "Microservices" },
    { color: "#5a3f2e", label: "Event-driven" },
    { color: "#43c16b", label: "Domain-driven Design" },
    { color: "#d4733b", label: "Clean Architecture" },
    { color: "#8a6f5d", label: "API Gateway · BFF" },
    { color: "#2a1810", label: "Serverless" },
  ],
  design: [
    { color: "#f24e1e", label: "Figma · FigJam" },
    { color: "#e78a53", label: "UI/UX Design" },
    { color: "#a259ff", label: "Design System" },
    { color: "#43c16b", label: "User Research" },
    { color: "#5a3f2e", label: "Wireframe · Prototype" },
    { color: "#d4733b", label: "Motion · Micro-interaction" },
    { color: "#2a1810", label: "Accessibility (WCAG)" },
    { color: "#f4a878", label: "Brand · Visual Identity" },
  ],
  tech: [
    { color: "#61dafb", label: "React · Next.js" },
    { color: "#3178c6", label: "TypeScript" },
    { color: "#68a063", label: "Node.js · NestJS" },
    { color: "#512bd4", label: ".NET · C#" },
    { color: "#3776ab", label: "Python · FastAPI" },
    { color: "#336791", label: "PostgreSQL · MySQL" },
    { color: "#dc382d", label: "Redis · MongoDB" },
    { color: "#02569b", label: "Flutter · React Native" },
  ],
  infra: [
    { color: "#ff9a44", label: "AWS · GCP · Azure" },
    { color: "#0db7ed", label: "Docker" },
    { color: "#326ce5", label: "Kubernetes" },
    { color: "#5c4ee5", label: "Terraform" },
    { color: "#e44c65", label: "GitHub Actions · GitLab CI" },
    { color: "#38b2ac", label: "Datadog · Grafana" },
  ],
  ai: [
    { color: "#10a37f", label: "OpenAI · Anthropic" },
    { color: "#ff6b9d", label: "PyTorch · TensorFlow" },
    { color: "#1c3d5a", label: "LangChain · LlamaIndex" },
    { color: "#e78a53", label: "Vector DB · Pinecone" },
    { color: "#43c16b", label: "Airflow · dbt" },
    { color: "#5a3f2e", label: "Hugging Face" },
  ],
};

export function CompetenciesSection() {
  const t = useTranslations("competencies");
  const [activeTab, setActiveTab] = useState<TabId>("arch");

  return (
    <section id="competencies" className="section">
      <div className="wrap">
        <div className="header-row fade-up" style={{ marginBottom: "36px" }}>
          <div className="left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>{t("title")}</h2>
            <p className="lede">{t("lede")}</p>
          </div>
        </div>

        <div className="tabs-shell fade-up">
          <div className="comp-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`comp-tab${activeTab === tab.id ? " active" : ""}`}
                data-tab={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {t(`tabs.${tab.id}`)}
              </button>
            ))}
          </div>

          {TABS.map((tab) => (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              className={`comp-panel${activeTab === tab.id ? " active" : ""}`}
              role="tabpanel"
            >
              {PANELS[tab.id].map((item) => (
                <div key={item.label} className="tech-item">
                  <span className="tech-dot" style={{ background: item.color }}></span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
