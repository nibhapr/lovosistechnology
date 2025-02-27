/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Bujn4LRl.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../../chunks/MainLayout_GvCgnbIB.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BPjAI-RA.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://lovosis.com/");
async function getStaticPaths() {
  const eventPosts = await getCollection("event");
  return eventPosts.map((event) => ({
    params: { slug: event.slug },
    props: { event }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  (await getCollection("event")).sort(
    (a, b) => a.data.id - b.data.id
  );
  const { event } = Astro2.props;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: event.data.title,
        description: event.data.description,
        startDate: event.data.startDate,
        endDate: event.data.endDate,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Dubai World Trade Centre",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sheikh Zayed Road",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            postalCode: "800DWTC (3982)",
            addressCountry: "AE"
          }
        },
        image: event.data.eventImage.src,
        organizer: {
          "@type": "Organization",
          name: "Lovosis Technology L.L.C",
          url: "https://lovosis.com",
          logo: "https://lovosis.com/pictures/lovosis-logo.png",
          description: event.data.description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Baghlaf Building Showroom No.5,Deira",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            addressCountry: "AE"
          }
        },
        performer: {
          "@type": "Organization",
          name: "Dahua Technology",
          url: "https://www.dahuasecurity.com",
          logo: "https://lovosis.com/pictures/dahua-logo.png"
        },
        offers: {
          "@type": "Offer",
          url: "https://lovosis.com/contacts",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2024-03-01T00:00:00+04:00"
        },
        audience: {
          "@type": "Audience",
          audienceType: "Security Professionals, System Integrators, Security Consultants"
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": event.data.title, "description": event.data.description, "sd": structuredData, "class": "astro-4vpraeb4" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="bg-white dark:bg-neutral-900 astro-4vpraeb4"><section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full astro-4vpraeb4"><div class="mb-20 rounded-2xl bg-white p-5 text-center dark:bg-neutral-500 md:p-12 astro-4vpraeb4"><h1 class="animate-fade-in-left text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 md:text-6xl md:leading-tight astro-4vpraeb4">${event.data.title}</h1><p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-200 astro-4vpraeb4">${event.data.subTitle}</p><div class="video-container mt-8 astro-4vpraeb4"><iframe${addAttribute(event.data.videoClip, "src")} title="Dahua Diamond Partner Agreement 2025" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border: 0;" class="astro-4vpraeb4"></iframe></div></div><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 astro-4vpraeb4"><div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 astro-4vpraeb4"><div class="relative astro-4vpraeb4"><img${addAttribute(event.data.eventImage.src, "src")} alt="Dahua Diamond Partnership Ceremony" class="w-full rounded-xl shadow-lg astro-4vpraeb4"></div><div class="space-y-4 astro-4vpraeb4"><h2 class="text-3xl font-bold text-neutral-800 dark:text-neutral-100 md:text-4xl astro-4vpraeb4">
Empowering Security Solutions with Dahua Partnership
</h2><p class="text-lg text-neutral-600 dark:text-neutral-300 astro-4vpraeb4">${event.data.contents}</p></div></div></div><div class="mb-20 mt-32 rounded-2xl text-center astro-4vpraeb4"><h1 class="animate-fade-in-left text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 md:text-4xl md:leading-tight astro-4vpraeb4">
Exclusive Dahua Product Portfolio
</h1></div><div class="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-1 astro-4vpraeb4"><ul id="cards" class="grid list-none grid-cols-1 grid-rows-4 gap-4 astro-4vpraeb4">${[
    {
      title: event.data.titleOne,
      description: event.data.descriptionOne,
      image: event.data.imageOne.src
    },
    {
      title: event.data.titleTwo,
      description: event.data.descriptionTwo,
      image: event.data.imageTwo.src
    },
    {
      title: event.data.titleThree,
      description: event.data.descriptionThree,
      image: event.data.imageThree.src
    },
    {
      title: event.data.titleFour,
      description: event.data.descriptionFour,
      image: event.data.imageFour.src
    }
  ].map((item) => renderTemplate`<li class="card sticky top-32 cursor-pointer rounded-lg bg-white pt-4 shadow-xl transition-all duration-300 dark:bg-neutral-600 astro-4vpraeb4"><div class="card__content relative grid grid-cols-1 gap-1 rounded-lg p-5 text-left md:grid-cols-2 astro-4vpraeb4"><div class="astro-4vpraeb4"><h2 class="text-4xl font-light dark:text-neutral-200 astro-4vpraeb4">${item.title}</h2><p class="text-base font-light leading-normal dark:text-neutral-300 astro-4vpraeb4">${item.description}</p></div><figure class="overflow-hidden astro-4vpraeb4"><img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="h-full w-full object-contain astro-4vpraeb4"></figure></div></li>`)}</ul></div></section></main>` })}`;
}, "C:/xampp/htdocs/lovosistechnology/src/pages/event/[...slug].astro", undefined);

const $$file = "C:/xampp/htdocs/lovosistechnology/src/pages/event/[...slug].astro";
const $$url = "/event/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
