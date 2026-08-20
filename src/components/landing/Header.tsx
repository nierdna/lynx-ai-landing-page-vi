"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV_ITEMS = [
  { key: "overview", href: "#overview" },
  { key: "services", href: "#services" },
  { key: "competencies", href: "#competencies" },
  { key: "projects", href: "#projects" },
  { key: "team", href: "#team" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="top"
        style={scrolled ? { boxShadow: "0 8px 32px rgba(42,24,16,0.1)" } : undefined}
      >
        <a href="#hero" className="logo">
          <Image
            src="/img/logo.png"
            alt="LYNX AI SOLUTION"
            width={140}
            height={34}
            style={{ height: "34px", width: "auto", display: "block" }}
            priority
          />
        </a>
        <div className="nav-links" style={{ display: menuOpen ? "none" : undefined }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href}>
              {t(item.key)}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LocaleSwitcher />
          <a href="#contact" className="nav-cta">
            {t("contact")} <span style={{ fontSize: "11px" }}>→</span>
          </a>
        </div>
      </nav>
    </>
  );
}
