/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderScript, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_4dyRhzuK.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_DthBEY5E.mjs';
import { a as $$MainLayout } from '../../chunks/MainLayout_BLd3pVqN.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://lovosis.com/");
async function getStaticPaths() {
  const contentEntries = await getCollection("westerdigital");
  return contentEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const {
    id,
    title,
    desc,
    img,
    images,
    alt,
    author,
    reviewBody,
    ratingValue,
    features,
    publishedTime
  } = entry.data;
  const imageUrl = img.src;
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: title,
    image: `${Astro2.url.origin}/${imageUrl}`,
    description: desc,
    brand: {
      "@type": "Brand",
      name: "Western Digital"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: ["AE", "SA", "BH", "KW", "OM", "QA"],
      warranty: "3 year replacement warranty",
      seller: {
        "@type": "Organization",
        name: "Lovosis Technology L.L.C",
        areaServed: "Middle East"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount: "50"
    },
    review: [
      {
        "@type": "Review",
        author,
        datePublished: publishedTime,
        reviewBody,
        reviewRating: {
          "@type": "Rating",
          ratingValue,
          bestRating: "5"
        }
      }
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Warranty",
        value: "3 Years Replacement Warranty"
      },
      {
        "@type": "PropertyValue",
        name: "Features",
        value: features?.join(", ")
      },
      {
        "@type": "PropertyValue",
        name: "Usage",
        value: "24/7 Surveillance Recording"
      }
    ]
  };
  const metaTags = [
    { name: "description", content: `${desc} | Official Western Digital distributor in UAE with 3-year warranty` },
    { name: "keywords", content: `${title}, Western Digital, surveillance hard drive, CCTV storage, security storage, UAE, Saudi Arabia, Dubai, Middle East, 3 year warranty` },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:image", content: `${Astro2.url.origin}/${imageUrl}` },
    { property: "og:type", content: "product" },
    { property: "og:locale", content: "en_AE" },
    { property: "og:locale:alternate", content: "ar_AE" },
    { name: "geo.region", content: "AE" },
    { name: "geo.placename", content: "Dubai" },
    { name: "geo.position", content: "25.276987;55.296249" },
    { name: "ICBM", content: "25.276987, 55.296249" }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": desc, "sd": structuredData, "metaTags": metaTags, "class": "astro-he7u7zyj" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 astro-he7u7zyj"> <section class="hero-section relative mb-8 overflow-hidden astro-he7u7zyj"> <div class="relative z-10 py-16 text-center text-white astro-he7u7zyj"> <h1 class="text-4xl font-bold astro-he7u7zyj">${title}</h1> <p class="mt-2 text-lg astro-he7u7zyj">${desc}</p> </div> </section> <div class="navigation-container mb-6 astro-he7u7zyj"> <a href="/westerdigital" class="back-button astro-he7u7zyj"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="back-icon astro-he7u7zyj"><path d="M19 12H5M12 19l-7-7 7-7" class="astro-he7u7zyj"></path></svg> <span class="astro-he7u7zyj">Back to Content Collection</span> </a> </div> <div class="relative astro-he7u7zyj"> <article class="card astro-he7u7zyj"> <div class="card-inner flex flex-col gap-6 md:flex-row astro-he7u7zyj"> <div class="card-image w-full px-0 sm:px-4 md:w-1/2 astro-he7u7zyj"> ${img && renderTemplate`<div class="image-container relative astro-he7u7zyj"> <img${addAttribute(img.src, "src")}${addAttribute(alt, "alt")}${addAttribute(img.width, "width")}${addAttribute(img.height, "height")} class="full-width-mobile active-image w-full rounded-lg shadow-md astro-he7u7zyj"> <button class="nav-arrow prev-arrow absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-100 bg-white/90 p-2 shadow-lg hover:bg-white astro-he7u7zyj"> <svg class="h-6 w-6 text-gray-800 astro-he7u7zyj" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" class="astro-he7u7zyj"></path> </svg> </button> <button class="nav-arrow next-arrow absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-100 bg-white/90 p-2 shadow-lg hover:bg-white astro-he7u7zyj"> <svg class="h-6 w-6 text-gray-800 astro-he7u7zyj" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="astro-he7u7zyj"></path> </svg> </button> </div>`} ${images && images.length > 0 && renderTemplate`<div class="hidden-images hidden astro-he7u7zyj"> ${images.map((image, index) => renderTemplate`<img${addAttribute(image.src, "src")}${addAttribute(`${alt} ${index + 1}`, "alt")}${addAttribute(image.width, "width")}${addAttribute(image.height, "height")} class="full-width-mobile w-full rounded-lg shadow-md astro-he7u7zyj" loading="lazy">`)} </div>`} </div> <div class="card-content w-full md:w-1/2 astro-he7u7zyj"> <h2 class="mb-2 text-2xl font-bold astro-he7u7zyj">${title}</h2> <p class="mb-4 text-gray-700 astro-he7u7zyj">${desc}</p> ${features && features.length > 0 && renderTemplate`<div class="mt-6 astro-he7u7zyj"> <h3 class="mb-2 text-xl font-semibold astro-he7u7zyj">Key Features:</h3> <ul class="list-disc pl-6 text-gray-700 astro-he7u7zyj"> ${features.map((feature, index) => renderTemplate`<li class="astro-he7u7zyj">${feature}</li>`)} </ul> </div>`} </div> </div> <div class="share-container mt-6 border-t border-gray-100 py-3 astro-he7u7zyj"> <p class="mb-2 text-sm font-medium text-gray-600 astro-he7u7zyj">
Share this camera:
</p> <div class="share-buttons flex space-x-3 astro-he7u7zyj"> <button class="share-btn astro-he7u7zyj" data-platform="whatsapp"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#25D366" class="astro-he7u7zyj"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" class="astro-he7u7zyj"></path></svg> </button> <button class="share-btn astro-he7u7zyj" data-platform="instagram"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#E1306C" class="astro-he7u7zyj"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" class="astro-he7u7zyj"></path></svg> </button> <button class="share-btn astro-he7u7zyj" data-platform="x"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#1DA1F2" class="astro-he7u7zyj"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195A4.92 4.92 0 0016.953 2a4.928 4.928 0 00-4.928 4.928c0 .391.044.766.127 1.125-4.092-.205-7.719-2.165-10.148-5.144a4.929 4.929 0 001.525 6.573A4.887 4.887 0 011.5 8.872v.071a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.224.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 19.54a14.88 14.88 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.21-.006-.422-.018-.632A10.016 10.016 0 0024 4.59z" class="astro-he7u7zyj"></path></svg> </button> <button class="share-btn astro-he7u7zyj" data-platform="facebook"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#1877F2" class="astro-he7u7zyj"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" class="astro-he7u7zyj"></path></svg> </button> </div> </div> </article> </div> </main> ` })} ${renderScript($$result, "C:/xampp/htdocs/lovosistechnology/src/pages/westerdigital/[...slug].astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/xampp/htdocs/lovosistechnology/src/pages/westerdigital/[...slug].astro", undefined);

const $$file = "C:/xampp/htdocs/lovosistechnology/src/pages/westerdigital/[...slug].astro";
const $$url = "/westerdigital/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
