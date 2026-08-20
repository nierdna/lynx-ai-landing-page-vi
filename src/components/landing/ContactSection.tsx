"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("contact");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("thanks"));
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>{t("title")}</h2>
            <p className="lede">{t("lede")}</p>
          </div>
        </div>
        <div className="contact-grid fade-up">
          <div className="contact-list">
            <div className="contact-row">
              <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>🌐</div>
              <div>
                <div className="lbl">{t("websiteLabel")}</div>
                <div className="val"><a href="https://www.lynxsolution.vn/" target="_blank" rel="noopener noreferrer">www.lynxsolution.vn</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>✉️</div>
              <div>
                <div className="lbl">{t("emailLabel")}</div>
                <div className="val"><a href="mailto:info@lynxsolution.vn">info@lynxsolution.vn</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-pill" style={{ background: "rgba(90,63,46,0.10)", color: "var(--ink)" }}>📞</div>
              <div>
                <div className="lbl">{t("phoneLabel")}</div>
                <div className="val"><a href="tel:+84929862699">+84 929 862 699</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-pill" style={{ background: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" }}>📍</div>
              <div>
                <div className="lbl">{t("hqLabel")}</div>
                <div className="val" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                  {t("hqLine1")}<br />{t("hqLine2")}
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row-2">
              <div className="field">
                <label>{t("nameLabel")}</label>
                <input type="text" required placeholder={t("namePlaceholder")} />
              </div>
              <div className="field">
                <label>{t("emailFieldLabel")}</label>
                <input type="email" required placeholder={t("emailPlaceholder")} />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label>{t("companyLabel")}</label>
                <input type="text" placeholder={t("companyPlaceholder")} />
              </div>
              <div className="field">
                <label>{t("phoneFieldLabel")}</label>
                <input type="tel" placeholder={t("phonePlaceholder")} />
              </div>
            </div>
            <div className="field">
              <label>{t("projectTypeLabel")}</label>
              <input type="text" placeholder={t("projectTypePlaceholder")} />
            </div>
            <div className="field">
              <label>{t("messageLabel")}</label>
              <textarea placeholder={t("messagePlaceholder")}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", height: "52px" }}>
              {t("submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
