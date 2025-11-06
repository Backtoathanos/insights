import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { g as getRelativeLocaleUrl } from './translationUtils_XhrKexoJ.mjs';
import { a as $$Icon, $ as $$Button } from './Button_BaSqYn27.mjs';
import { h as humanize } from './textUtils_tlWO4DlQ.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$CaseStudiesCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CaseStudiesCard;
  const {
    title,
    description,
    heroImage,
    category,
    slug,
    // This is the page_title we'll use in the URL
    cards,
    keyImpact,
    class: className,
    ...rest
  } = Astro2.props;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const caseStudyUrl = getRelativeLocaleUrl(currLocale, `/case-studies/${slug}`).replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["rounded-lg bg-base-50 shadow-md dark:bg-base-950", className], "class:list")}${spreadAttributes(rest)} data-astro-cid-f5ean2zx> <div class="relative" data-astro-cid-f5ean2zx> <a${addAttribute(caseStudyUrl, "href")} class="relative flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-t-md border border-base-300 sm:justify-normal dark:border-base-700" data-astro-cid-f5ean2zx> <figure class="h-full w-full" data-astro-cid-f5ean2zx> ${heroImage?.src ? renderTemplate`<img${addAttribute(heroImage.src, "src")}${addAttribute(heroImage.width, "width")}${addAttribute(heroImage.height, "height")}${addAttribute(heroImage.alt, "alt")} class="h-full w-full object-cover" loading="lazy" data-astro-cid-f5ean2zx>` : renderTemplate`<div class="flex h-full w-full items-center justify-center bg-gray-200" data-astro-cid-f5ean2zx> <span class="text-gray-500" data-astro-cid-f5ean2zx>No Image Available</span> </div>`} </figure> </a> <div class="absolute bottom-4 left-4 flex items-center gap-1 rounded-md bg-base-100 px-2 py-1 text-xs font-medium dark:bg-base-900" data-astro-cid-f5ean2zx> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-3 text-primary-700 dark:text-primary-400", "name": "tabler/world", "data-astro-cid-f5ean2zx": true })} <span data-astro-cid-f5ean2zx>${humanize(category)}</span> </div> </div> <div class="space-y-3 p-4" data-astro-cid-f5ean2zx> <a${addAttribute(caseStudyUrl, "href")} data-astro-cid-f5ean2zx> <h3 class="line-clamp-2 text-pretty text-lg font-bold" data-astro-cid-f5ean2zx>${title}</h3> </a> <p${addAttribute(`descriptionText-${slug}`, "id")} class="description line-clamp-3 text-pretty text-xs" data-astro-cid-f5ean2zx> ${description} </p> <button${addAttribute(`seeMoreDescriptionBtn-${slug}`, "id")} class="mt-1 text-xs text-blue-500 underline" data-astro-cid-f5ean2zx>
See More
</button> <div class="rounded-md bg-primary-100/20 px-2.5 py-3 dark:bg-primary-950/20" data-astro-cid-f5ean2zx> <p class="text-sm font-semibold" data-astro-cid-f5ean2zx>Key Impact & Business Outcomes</p> <p${addAttribute(`keyImpactText-${slug}`, "id")} class="description collapsed mt-1 whitespace-pre-line text-xs" data-astro-cid-f5ean2zx> ${keyImpact} </p> <button${addAttribute(`seeMoreBtn-${slug}`, "id")} class="mt-1 text-xs text-blue-500 underline" data-astro-cid-f5ean2zx>
See More
</button> </div> <div class="flex" data-astro-cid-f5ean2zx> ${renderComponent($$result, "Button", $$Button, { "variant": "ghost", "href": caseStudyUrl, "class": "-ml-2 px-2 text-sm", "arrow": "right", "data-astro-cid-f5ean2zx": true }, { "default": ($$result2) => renderTemplate`
Read Case Study
` })} </div> </div> </article>  `;
}, "/home/blackridgeorg/public_html/src/components/CaseStudies/CaseStudiesCard.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$CaseStudiesSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseStudiesSection;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const DEFAULT_IMAGE_WIDTH = 600;
  const DEFAULT_IMAGE_HEIGHT = 400;
  const FALLBACK_IMAGE = "/images/default-case-study.webp";
  const SUPPORTED_FORMATS = ["jpeg", "jpg", "png", "tiff", "webp", "gif", "svg", "avif"];
  const isSupportedFormat = (url) => {
    if (!url) return false;
    const extension = url.split(".").pop().toLowerCase();
    return SUPPORTED_FORMATS.includes(extension);
  };
  const getImageUrl = (imageName) => {
    if (!imageName) return FALLBACK_IMAGE;
    const extension = imageName.split(".").pop().toLowerCase();
    const fullUrl = `https://adminapi.blackridgeresearch.com/uploads/${imageName}`;
    return extension === "svg" || isSupportedFormat(imageName) ? fullUrl : FALLBACK_IMAGE;
  };
  const limit = 3;
  const apiUrl = `https://adminapi.blackridgeresearch.com/cases/live?page=1&limit=${limit}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const caseStudies = data.posts || [];
  const totalCount = data.total || caseStudies.length;
  const SectionData = caseStudies.map((study) => ({
    title: study.title,
    slug: study.page_title || slugify(study.title),
    description: study.short_description,
    cards: [
      { title: "43%", description: "Market Share" },
      { title: "$120M", description: "Revenue Growth" }
    ],
    category: study.styp || "Case Study",
    heroImage: {
      src: getImageUrl(study.image_name),
      width: DEFAULT_IMAGE_WIDTH,
      height: DEFAULT_IMAGE_HEIGHT,
      alt: study.title || "Case study image"
    },
    keyImpact: study.key_impact || "Significant business impact achieved"
  }));
  return renderTemplate`${maybeRenderHead()}<section class="site-container mx-auto mt-5 bg-primary-100/40 py-20 dark:bg-black"> <div class="mx-auto flex max-w-[950px] flex-col items-center justify-center text-center"> <h2 class="h2">Our Success Stories</h2> <p class="description">
Discover how we've helped leading companies transform their business through data-driven
			insights
</p> </div> <div class="mx-auto mt-12 max-w-md md:max-w-none"> <div id="case-studies" class="grid gap-8 gap-y-16 md:grid-cols-3"> ${SectionData.map((section) => renderTemplate`${renderComponent($$result, "CaseStudiesCard", $$CaseStudiesCard, { ...section })}`)} </div> </div> ${totalCount > limit && renderTemplate`<div class="mt-8 flex justify-center md:mt-16"> ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "href": getRelativeLocaleUrl(currLocale, `/case-studies`).replace(/\/$/, ""), "arrow": "right" }, { "default": ($$result2) => renderTemplate`
View All Case Studies
` })} </div>`} </section>`;
}, "/home/blackridgeorg/public_html/src/components/CaseStudies/CaseStudiesSection.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-bg-crop.Dfi4Li9W.jpg","width":3490,"height":1696,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/hero-bg-crop.jpg";
							}
							
							return target[name];
						}
					});

export { $$CaseStudiesSection as $, heroImage as h };
