import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cloxious.com",
  server: { port: 8080 },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: true },
  },
});
