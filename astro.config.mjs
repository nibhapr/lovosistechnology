import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://lovosis.com/",
  /*image: {
    domains: ["images.unsplash.com"],
  },
  pages: ["./src/pages", "./src/pages/products/[id].astro"],
  components: [
    "./src/components",
   "./src/components/sections/products/[id].astro",
  ],*/

  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
       
        locales: {
          en: "en",
          fr: "fr",
        },
      },
    }),
    starlight({
      title: "Lovosis Doc",
      defaultLocale: "root",
   
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
      
     
     
      },
     
      sidebar: [
        {
          label: "Quick Start Guides",
       
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Tools & Equipment",
          items: [
            {
              label: "Tool Guides",
              link: "tools/tool-guides/",
            },
            {
              label: "Equipment Care",
              link: "tools/equipment-care/",
            },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: {
            directory: "support",
          },
        },
        {
          label: "Advanced Topics",
          autogenerate: {
            directory: "advanced",
          },
        },
      ],
      social: {
        github: "https://github.com/mearashadowfax/ScrewFast",
      },
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter:
          "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://lovosis.com/" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://lovosis.com/" + "/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    react(),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercelStatic(),
});
