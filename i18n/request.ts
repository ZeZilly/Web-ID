import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { defaultLocale, locales, type Locale } from "./config";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();
  
  // Check cookie first
  let locale = cookieStore.get("locale")?.value as Locale | undefined;
  
  // Fallback to Accept-Language header
  if (!locale) {
    const acceptLanguage = headersList.get("accept-language");
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage.split(",")[0].split("-")[0] as Locale;
      if (locales.includes(preferredLocale)) {
        locale = preferredLocale;
      }
    }
  }
  
  // Use default if none found
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
