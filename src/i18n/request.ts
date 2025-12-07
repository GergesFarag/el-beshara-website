// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers"; // هذه الطريقة الصحيحة في Next 16

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const currentLocale = cookieStore.get("locale")?.value || "en";

  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  };
});
