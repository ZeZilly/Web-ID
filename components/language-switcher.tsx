"use client";

import { useState, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (locale: Locale) => {
    startTransition(() => {
      document.cookie = `locale=${locale};path=/;max-age=31536000`;
      window.location.reload();
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300",
          "border border-border/50 hover:border-aurora/50",
          "bg-card/50 hover:bg-card",
          "text-sm font-medium text-muted-foreground hover:text-foreground",
          isPending && "opacity-50 cursor-not-allowed"
        )}
        disabled={isPending}
      >
        <span className="text-aurora font-mono text-xs">
          {localeFlags[currentLocale]}
        </span>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 min-w-[160px] rounded-lg border border-border/50 bg-card/95 backdrop-blur-xl shadow-lg overflow-hidden">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                  "hover:bg-secondary/50",
                  locale === currentLocale
                    ? "text-aurora bg-secondary/30"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="font-mono text-xs text-aurora/70">
                  {localeFlags[locale]}
                </span>
                <span className="text-sm">{localeNames[locale]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
