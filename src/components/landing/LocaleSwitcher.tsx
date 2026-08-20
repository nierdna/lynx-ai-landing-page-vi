"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="locale-switch" role="group" aria-label="Language">
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          className={`locale-btn${locale === code ? " active" : ""}`}
          aria-current={locale === code ? "true" : undefined}
          onClick={() => router.replace(pathname, { locale: code })}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
