/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderScript } from '../chunks/astro/server_4dyRhzuK.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_JTMVWcRy.mjs';
import { a as $$MainLayout } from '../chunks/MainLayout_BLd3pVqN.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_F7DKfYpZ.mjs';
import { u as unvData } from '../chunks/camera_mfAdxoSb.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lovosis.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const content = await getCollection("uniview");
  const cards = content.map((item) => ({
    id: item.data.id,
    title: item.data.title,
    desc: item.data.desc,
    img: item.data.img.src,
    alt: item.data.alt,
    author: item.data.author,
    reviewBody: item.data.reviewBody,
    ratingValue: item.data.ratingValue,
    slug: item.slug,
    features: item.data.features,
    publishedTime: item.data.publishedTime
  }));
  const pageTitle = "UNV CCTV cameras in Dubai:Reasonably Priced Security Options";
  const description = "Welcome toLovosis Technology L.L.C. , a top supplier of cutting-edge security systems in the Middle East and the official UNV distributor in the United Arab Emirates.";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Lovosis Technology L.L.C",
        url: "https://lovosis.com",
        logo: "https://lovosis.come.com/pictures/logo.png",
        description,
        sameAs: [
          "https://www.facebook.com/p/LOVOSIS-TECHNOLOGY-100083060600975/",
          "https://www.instagram.com/_lovosis_group_of_companies_/reels/"
        ],
        email: "sales@lovosis.com",
        telephone: "+971552929644",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Satellite Market Naif Deira,Baghlaf Building Showroom No.5",
          addressLocality: "Dubai",
          addressCountry: "AE",
          addressRegion: "Dubai,United Arab Emirates",
          postalCode: "123421"
        }
      },
      {
        "@type": "WebPage",
        name: "Uniarch | Lovosis Technology",
        url: "https://lovosis.com/uniarch",
        description
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lovosis.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Uniview",
            "item": "https://lovosis.com/uniview"
          }
        ]
      },
      {
        "hasOfferCatalog": {
          "@type": "ItemList",
          "itemListElement": cards.map((card) => {
            return {
              "@type": "ListItem",
              "position": card.id,
              "item": {
                "@type": "Product",
                "name": card.title,
                "image": `${Astro2.url.origin}/${card.img}`,
                "description": card.desc,
                "brand": {
                  "@type": "Brand",
                  "name": "UNV"
                },
                "url": `${Astro2.url.origin}/uniview/${card.slug}`,
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "50"
                }
              }
            };
          })
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": description, "sd": structuredData, "class": "astro-s57pj24i" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="astro-s57pj24i"> <div class="astro-s57pj24i"> <div class="flex-item-center grid justify-center gap-5 lg:grid-cols-2 mt-16 astro-s57pj24i"> <div class="flex flex-col justify-center astro-s57pj24i"> <img src="/pictures/unvhero.jpg" alt="billboard image" class="rounded-lg astro-s57pj24i" width="600" height="500" loading="lazy"> </div> <div class="order-1 mt-16 items-start lg:order-2 astro-s57pj24i"> <h1 class="text-2xl font-bold text-neutral-800 dark:text-gray-200 md:text-4xl astro-s57pj24i">
UNV CCTV cameras in Dubai:Reasonably Priced Security Options
</h1> <p class="mt-2 line-clamp-8 text-base/relaxed text-gray-500 dark:text-gray-400 astro-s57pj24i">
Welcome to<strong class="astro-s57pj24i">Lovosis Technology L.L.C.</strong> , a top supplier of cutting-edge security systems in the Middle East
             and the official <strong class="astro-s57pj24i">UNV distributor in the United Arab Emirates</strong>. 
             Our specialty is offering premium <strong class="astro-s57pj24i">UNV CCTV cameras and security systems</strong> designed to 
             satisfy the rising need for dependable monitoring in the commercial, industrial, and residential sectors.<br class="astro-s57pj24i">
Protect your property with the best surveillance technology. Contact Lovosis Technology L.L.C. today for affordable <strong class="astro-s57pj24i">UNV CCTV cameras in the UAE</strong> </p> <div class="mt-8 grid w-full sm:inline-flex astro-s57pj24i"> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Contact Us", "url": "https://lovosis.com/contact/", "class": "astro-s57pj24i" })} </div> </div> </div> <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8  py-10   lg:py-14 h-auto  astro-s57pj24i"> ${unvData.map((item) => renderTemplate`<article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25 astro-s57pj24i"> <img alt=""${addAttribute(item.image, "src")} class="h-56 w-full object-cover astro-s57pj24i"> <div class="bg-white p-4 sm:p-6 dark:bg-gray-900 astro-s57pj24i"> <a href="#" class="astro-s57pj24i"> <h3 class="mt-0.5 text-lg text-gray-900 dark:text-white astro-s57pj24i"> ${item.title} </h3> </a> <p class="mt-2 line-clamp-3 text-base/relaxed text-gray-500 dark:text-gray-400 astro-s57pj24i"> ${item.description} </p> </div> </article>`)} </div> <div class="flex-item-center grid justify-center gap-5 lg:grid-cols-2 mt-16 astro-s57pj24i"> <div class="flex flex-col justify-center  astro-s57pj24i"> <h3 class="text-2xl font-bold text-neutral-800 dark:text-gray-200 md:text-4xl astro-s57pj24i">
Why Choose UNV Camera for Home Security?
</h3> <li class="p-2 mt-4 dark:text-gray-200 astro-s57pj24i"> Advanced Motion Detection and Analytics</li> <li class="p-2 dark:text-gray-200 astro-s57pj24i"> Superior Image Quality</li> <li class="p-2 dark:text-gray-200 astro-s57pj24i"> Seamless Integration</li> <li class="p-2 dark:text-gray-200 astro-s57pj24i"> Remote Access and Monitoring</li> <li class="p-2 dark:text-gray-200 astro-s57pj24i"> Cost-Effective Security</li> <li class="p-2 dark:text-gray-200 astro-s57pj24i"> Durability and Reliability</li> <div class="mt-8 grid w-full sm:inline-flex astro-s57pj24i"> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Contact Us", "url": "https://lovosis.com/contact/", "class": "astro-s57pj24i" })} </div> </div> <div class="order-1 mt-16 justify-center lg:order-2 astro-s57pj24i"> <img src="/pictures/unv.jpg" alt="billboard image" class="rounded-lg astro-s57pj24i" width="600" height="500" loading="lazy"> </div> </div> <section class="mx-auto max-w-[1400px] px-4 pt-8 astro-s57pj24i"> <div class="mx-auto mb-12 max-w-2xl astro-s57pj24i"> <h2 class="mb-6 text-center text-3xl font-bold astro-s57pj24i">UNV Products</h2> <div class="relative astro-s57pj24i"> <input type="text" id="search" class="focus:border-blue-500 focus:ring-blue-500 w-full rounded-lg border border-gray-300 px-4 py-3 pl-12 text-base shadow-sm focus:outline-none focus:ring-1 astro-s57pj24i" placeholder="Search tutorials..."> <svg class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 astro-s57pj24i" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class="astro-s57pj24i"></path> </svg> </div> </div> <section class="mx-auto max-w-[1400px] px-4 pb-8 astro-s57pj24i"> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 astro-s57pj24i"> ${cards.map((card) => renderTemplate`<div class="transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl astro-s57pj24i"> <img${addAttribute(card.img, "src")}${addAttribute(card.alt, "alt")} class="product-image h-56 w-full object-cover astro-s57pj24i"> <div class="flex flex-col items-center p-6 astro-s57pj24i"> <h3 class="text-xl font-semibold astro-s57pj24i">${card.title}</h3> <p class="mb-4 mt-3 text-gray-600 astro-s57pj24i">${card.desc}</p> <a${addAttribute(`/uniview/${card.slug}`, "href")} class="read-more-btn astro-s57pj24i">
Read More
</a> </div> </div>`)} </div> </section> <p id="no-results" class="mx-4 my-6 hidden rounded-lg bg-gray-50 py-8 text-center text-xl font-medium text-gray-600 shadow-inner astro-s57pj24i"> <span class="mb-2 block text-3xl astro-s57pj24i">🔍</span>
No matching results found
</p> </section></div> </div>  ${renderScript($$result2, "C:/xampp/htdocs/lovosistechnology/src/pages/uniview/index.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "C:/xampp/htdocs/lovosistechnology/src/pages/uniview/index.astro", undefined);

const $$file = "C:/xampp/htdocs/lovosistechnology/src/pages/uniview/index.astro";
const $$url = "/uniview";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
