import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://cloxious.com",
  server: { port: 8080 },
  i18n: { locales: ["en", "es"], defaultLocale: "en" },
  vite: { plugins: [tailwindcss()] },
});
