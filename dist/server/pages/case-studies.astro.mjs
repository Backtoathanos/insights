/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getRelativeLocaleUrl } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { a as $$Icon, $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
import { h as humanize } from '../chunks/textUtils_tlWO4DlQ.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
/* empty css                                 */
import { g as getAllPosts } from '../chunks/blogUtils_DPiN0YAU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://www.blackridgeresearch.com");
const $$CaseStudiesCardamplify = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CaseStudiesCardamplify;
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
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["rounded-lg bg-base-50 shadow-md dark:bg-base-950", className], "class:list")}${spreadAttributes(rest)} data-astro-cid-3wqidhr4> <div class="relative" data-astro-cid-3wqidhr4> <a${addAttribute(caseStudyUrl, "href")} class="relative flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-t-md border border-base-300 sm:justify-normal dark:border-base-700" data-astro-cid-3wqidhr4> <figure class="h-full w-full" data-astro-cid-3wqidhr4> ${heroImage?.src ? renderTemplate`<img${addAttribute(heroImage.src, "src")}${addAttribute(heroImage.width, "width")}${addAttribute(heroImage.height, "height")}${addAttribute(heroImage.alt, "alt")} class="h-full w-full object-cover" loading="lazy" data-astro-cid-3wqidhr4>` : renderTemplate`<div class="flex h-full w-full items-center justify-center bg-gray-200" data-astro-cid-3wqidhr4> <span class="text-gray-500" data-astro-cid-3wqidhr4>No Image Available</span> </div>`} </figure> </a> <div class="absolute bottom-4 left-4 flex items-center gap-1 rounded-md bg-base-100 px-2 py-1 text-xs font-medium dark:bg-base-900" data-astro-cid-3wqidhr4> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-3 text-primary-700 dark:text-primary-400", "name": "tabler/world", "data-astro-cid-3wqidhr4": true })} <span data-astro-cid-3wqidhr4>${humanize(category)}</span> </div> </div> <div class="space-y-3 p-4" data-astro-cid-3wqidhr4> <a${addAttribute(caseStudyUrl, "href")} data-astro-cid-3wqidhr4> <h3 class="line-clamp-2 text-pretty text-lg font-bold" data-astro-cid-3wqidhr4>${title}</h3> </a> <p${addAttribute(`descriptionText-${slug}`, "id")} class="description line-clamp-3 text-pretty text-xs" data-astro-cid-3wqidhr4> ${description} </p> <button${addAttribute(`seeMoreDescriptionBtn-${slug}`, "id")} class="mt-1 text-xs text-blue-500 underline" data-astro-cid-3wqidhr4>
See More
</button> <div class="rounded-md bg-primary-100/20 px-2.5 py-3 dark:bg-primary-950/20" data-astro-cid-3wqidhr4> <p class="text-sm font-semibold" data-astro-cid-3wqidhr4>Key Impact & Business Outcomes</p> <p${addAttribute(`keyImpactText-${slug}`, "id")} class="description collapsed mt-1 whitespace-pre-line text-xs" data-astro-cid-3wqidhr4> ${keyImpact} </p> <button${addAttribute(`seeMoreBtn-${slug}`, "id")} class="mt-1 text-xs text-blue-500 underline" data-astro-cid-3wqidhr4>
See More
</button> </div> <div class="flex" data-astro-cid-3wqidhr4> ${renderComponent($$result, "Button", $$Button, { "variant": "ghost", "href": caseStudyUrl, "class": "-ml-2 px-2 text-sm", "arrow": "right", "data-astro-cid-3wqidhr4": true }, { "default": ($$result2) => renderTemplate`
Read Case Study
` })} </div> </div> </article>  `;
}, "/home/blackridgeorg/public_html/src/components/CaseStudies/CaseStudiesCardamplify.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$CaseStudyAmplify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CaseStudyAmplify;
  getLocaleFromUrl(Astro2.url);
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
  const limit = 6;
  const apiUrl = `https://adminapi.blackridgeresearch.com/cases/live?page=1&limit=${limit}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const initialCaseStudies = data.posts || [];
  const totalCount = data.total || initialCaseStudies.length;
  const showViewMore = totalCount > initialCaseStudies.length;
  return renderTemplate(_a || (_a = __template(["", `<section class="site-container mx-auto mt-5 py-20"> <div class="mx-auto flex max-w-[950px] flex-col items-center justify-center text-center"> <h2 class="h2">Our Success Stories</h2> <p class="description">
Discover how we've helped leading companies transform their business through data-driven
			insights.
</p> </div> <div class="site-container mx-auto mt-12 max-w-md md:max-w-none"> <div id="case-studies" class="grid gap-8 gap-y-16 md:grid-cols-3"> `, " </div> ", ' </div> <script type="module">\n		const button = document.getElementById("view-more-btn");\n		const container = document.getElementById("case-studies");\n\n		let currentPage = 1;\n		const limit = 6;\n\n		const getImageUrl = (imageName) => {\n			if (!imageName) return "/images/default-case-study.webp";\n			const ext = imageName.split(".").pop().toLowerCase();\n			const supported = ["jpeg", "jpg", "png", "tiff", "webp", "gif", "svg", "avif"];\n			if (!supported.includes(ext)) return "/images/default-case-study.webp";\n			return `https://adminapi.blackridgeresearch.com/uploads/${imageName}`;\n		};\n\n		button?.addEventListener("click", async () => {\n			currentPage++;\n			const url = `https://adminapi.blackridgeresearch.com/cases/live?page=${currentPage}&limit=${limit}`;\n\n			try {\n				const res = await fetch(url);\n				const data = await res.json();\n				const posts = data.posts || [];\n\n				if (posts.length === 0) {\n					button.style.display = "none";\n					return;\n				}\n\n				posts.forEach((study) => {\n					const div = document.createElement("div");\n					div.className = "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md";\n					div.innerHTML = `\n						<img src="${getImageUrl(study.image_name)}" alt="${study.title}" width="600" height="400" class="mb-4 rounded" />\n						<h3 class="text-xl font-bold">${study.title}</h3>\n						<p class="mt-2">${study.short_description}</p>\n					`;\n					container.appendChild(div);\n				});\n\n				if (posts.length < limit) {\n					button.style.display = "none";\n				}\n			} catch (err) {\n				console.error("Failed to fetch more case studies:", err);\n				button.style.display = "none";\n			}\n		});\n	<\/script> </section>'], ["", `<section class="site-container mx-auto mt-5 py-20"> <div class="mx-auto flex max-w-[950px] flex-col items-center justify-center text-center"> <h2 class="h2">Our Success Stories</h2> <p class="description">
Discover how we've helped leading companies transform their business through data-driven
			insights.
</p> </div> <div class="site-container mx-auto mt-12 max-w-md md:max-w-none"> <div id="case-studies" class="grid gap-8 gap-y-16 md:grid-cols-3"> `, " </div> ", ' </div> <script type="module">\n		const button = document.getElementById("view-more-btn");\n		const container = document.getElementById("case-studies");\n\n		let currentPage = 1;\n		const limit = 6;\n\n		const getImageUrl = (imageName) => {\n			if (!imageName) return "/images/default-case-study.webp";\n			const ext = imageName.split(".").pop().toLowerCase();\n			const supported = ["jpeg", "jpg", "png", "tiff", "webp", "gif", "svg", "avif"];\n			if (!supported.includes(ext)) return "/images/default-case-study.webp";\n			return \\`https://adminapi.blackridgeresearch.com/uploads/\\${imageName}\\`;\n		};\n\n		button?.addEventListener("click", async () => {\n			currentPage++;\n			const url = \\`https://adminapi.blackridgeresearch.com/cases/live?page=\\${currentPage}&limit=\\${limit}\\`;\n\n			try {\n				const res = await fetch(url);\n				const data = await res.json();\n				const posts = data.posts || [];\n\n				if (posts.length === 0) {\n					button.style.display = "none";\n					return;\n				}\n\n				posts.forEach((study) => {\n					const div = document.createElement("div");\n					div.className = "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md";\n					div.innerHTML = \\`\n						<img src="\\${getImageUrl(study.image_name)}" alt="\\${study.title}" width="600" height="400" class="mb-4 rounded" />\n						<h3 class="text-xl font-bold">\\${study.title}</h3>\n						<p class="mt-2">\\${study.short_description}</p>\n					\\`;\n					container.appendChild(div);\n				});\n\n				if (posts.length < limit) {\n					button.style.display = "none";\n				}\n			} catch (err) {\n				console.error("Failed to fetch more case studies:", err);\n				button.style.display = "none";\n			}\n		});\n	<\/script> </section>'])), maybeRenderHead(), initialCaseStudies.map((study) => renderTemplate`${renderComponent($$result, "CaseStudiesCard", $$CaseStudiesCardamplify, { "title": study.title, "slug": study.page_title || study.title.toLowerCase().replace(/\s+/g, "-"), "description": study.short_description, "cards": [
    { title: "43%", description: "Market Share" },
    { title: "$120M", description: "Revenue Growth" }
  ], "category": study.styp || "Case Study", "heroImage": {
    src: getImageUrl(study.image_name),
    width: 600,
    height: 400,
    alt: study.title || "Case study image"
  }, "keyImpact": study.key_impact || "Significant business impact achieved" })}`), showViewMore && renderTemplate`<div id="load-more-wrapper" class="mt-8 flex justify-center md:mt-16"> ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "id": "view-more-btn" }, { "default": ($$result2) => renderTemplate`
View More
` })} </div>`);
}, "/home/blackridgeorg/public_html/src/components/CaseStudy/CaseStudyAmplify.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$CaseStudyLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CaseStudyLayout;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "CaseStudyAmplify", $$CaseStudyAmplify, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/Case-studyLayout.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Case Studies | Blackridge Research & Consulting", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">Case Studies</h1> <!-- <p class="description mx-auto mt-0 max-w-2xl text-center md:text-lg">
					Get latest perspectives, insights and analyses here
				</p> --> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "CaseStudyLayout", $$CaseStudyLayout, { "posts": posts })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/case-studies/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/case-studies/index.astro";
const $$url = "/case-studies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
