/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, F as Fragment } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayoutNew } from '../../chunks/BaseLayoutNew_CYC5OcQ9.mjs';
import { a as $$Icon } from '../../chunks/Button_BaSqYn27.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Ourservicescard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ourservicescard;
  const { post, showDescription, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="overflow-hidden rounded-xl bg-black shadow-lg"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="h-60 w-full object-cover"> <div class="p-4"> <span class="rounded bg-blue-600 px-2 py-1 text-sm font-bold text-white"> ${post.category} </span> <h3 class="mt-2 text-lg font-semibold dark:text-white">${post.title}</h3> <!-- <p class="mt-1 text-sm text-gray-400">{post.date}</p>
		{showDescription && <p class="mt-2 text-gray-300">{post.description}</p>} --> </div> </a>`;
}, "/home/blackridgeorg/public_html/src/components/PostCard/ourservicescard.astro", void 0);

const $$Ourservices = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://adminapi.blackridgeresearch.com/glossary/edit/10");
  const services = await response.json();
  const serviceSlugs = [
    { title: "Global Project Tender Tracker", slug: "global-project-tender-tracker" },
    { title: "Solar Intelligence Hub", slug: "solar-intelligence-hub" },
    { title: "Wind Intelligence Hub", slug: "wind-intelligence-hub" },
    { title: "Custom Research", slug: "custom-research" },
    { title: "Reports", slug: "reports" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="related-posts-swiper" class="overflow-hidden bg-primary-100/30 py-12 dark:bg-inherit" data-astro-cid-t7j55oh6> <div class="site-container" data-astro-cid-t7j55oh6> <div class="flex items-center justify-between" data-astro-cid-t7j55oh6> <h3 class="h2 mb-0" data-astro-cid-t7j55oh6>Our Services</h3> <!-- swiper navigation --> <div class="flex items-center justify-end" data-astro-cid-t7j55oh6> <div class="description flex items-center gap-2 opacity-80" data-astro-cid-t7j55oh6> <button class="related-posts__swiper-prev cursor-pointer p-1 transition-colors hover:text-secondary-500" data-astro-cid-t7j55oh6> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/arrow-narrow-left", "class": "size-10 lg:size-8", "data-astro-cid-t7j55oh6": true })} <span class="sr-only" data-astro-cid-t7j55oh6>Previous</span> </button> <button class="related-posts__swiper-next cursor-pointer p-1 transition-colors hover:text-secondary-500" data-astro-cid-t7j55oh6> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/arrow-narrow-right", "class": "size-10 lg:size-8", "data-astro-cid-t7j55oh6": true })} <span class="sr-only" data-astro-cid-t7j55oh6>Next</span> </button> </div> </div> </div> <div class="mt-4 overflow-x-clip" data-astro-cid-t7j55oh6> <!-- swiper --> <div class="related-posts__swiper relative mt-6" data-astro-cid-t7j55oh6> <div class="swiper-wrapper" data-astro-cid-t7j55oh6> ${services.slice(0, 1).map((service, idx) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-t7j55oh6": true }, { "default": ($$result2) => renderTemplate`${serviceSlugs.map((slug, index) => renderTemplate`<div class="swiper-slide"${addAttribute(`simage_${index + 1}`, "key")} data-astro-cid-t7j55oh6> ${renderComponent($$result2, "Ourservicescard", $$Ourservicescard, { "post": {
    title: service[`stitle_${index + 1}`],
    image: service[`simage_${index + 1}`],
    category: service.industry || "General",
    date: service.created_date,
    description: service.description || "No description available"
  }, "showDescription": true, "link": `/${slug.slug}`, "Direct": true, "dynamic": true, "route": true, "without": true, "glossary": true, "data-astro-cid-t7j55oh6": true })} </div>`)}` })}`)} </div> <!-- Optional Pagination --> <div class="swiper-scrollbar" data-astro-cid-t7j55oh6></div> </div> </div> </div> </section>  `;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/ourservices.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayoutNew", $$BaseLayoutNew, { "type": "general", "title": "Glossary", "navTheme": "dark", "preconnect": true, "description": "Glossary description", "data-astro-cid-wgq3jerc": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", '<div id="skeleton-loader" class="site-container mt-20 md:mt-28" data-astro-cid-wgq3jerc><div class="mb-5 p-6" data-astro-cid-wgq3jerc><div class="skeleton skeleton-title w-3/4" data-astro-cid-wgq3jerc></div><div class="mt-3 space-y-2" data-astro-cid-wgq3jerc><div class="skeleton skeleton-text w-full" data-astro-cid-wgq3jerc></div><div class="skeleton skeleton-text w-5/6" data-astro-cid-wgq3jerc></div><div class="skeleton skeleton-text w-3/4" data-astro-cid-wgq3jerc></div><div class="skeleton skeleton-text w-2/3" data-astro-cid-wgq3jerc></div></div></div></div><article id="content-container" class="site-container mt-20 md:mt-28" data-astro-cid-wgq3jerc><div class="mb-5 p-6" data-astro-cid-wgq3jerc><h1 id="glossary-title" class="h2" data-astro-cid-wgq3jerc></h1><p id="glossary-description" class="mt-3" data-astro-cid-wgq3jerc></p></div></article><div class="ml-10 mr-10 mt-10 flex flex-col gap-10 md:gap-16" data-astro-cid-wgq3jerc>', "</div><script>\n    document.addEventListener('DOMContentLoaded', async () => {\n      const skeletonLoader = document.getElementById('skeleton-loader');\n      const contentContainer = document.getElementById('content-container');\n      \n      try {\n        const url = new URL(window.location.href);\n        const pathParts = url.pathname.split('/glossary/');\n        const id = pathParts[1]?.replace(/\\//g, '_').replace(/[:?]/g, '-');\n        \n        if (!id) {\n          throw new Error('Invalid glossary term ID');\n        }\n\n        const response = await fetch(\n          `https://adminapi.blackridgeresearch.com/glossary/listid/${id}`\n        );\n        \n        if (!response.ok) {\n          throw new Error('Failed to fetch glossary data');\n        }\n\n        const { data } = await response.json();\n        \n        if (data) {\n          // Update content\n          document.getElementById('glossary-title').textContent = data.title;\n          document.getElementById('glossary-description').textContent = data.description;\n          \n          // Switch visibility\n          skeletonLoader.style.display = 'none';\n          contentContainer.style.display = 'block';\n        } else {\n          throw new Error('Glossary term not found');\n        }\n      } catch (error) {\n        console.error('Error:', error);\n        document.getElementById('glossary-title').textContent = 'Error loading term';\n        skeletonLoader.style.display = 'none';\n        contentContainer.style.display = 'block';\n      }\n    });\n  <\/script>"], ["", '<div id="skeleton-loader" class="site-container mt-20 md:mt-28" data-astro-cid-wgq3jerc><div class="mb-5 p-6" data-astro-cid-wgq3jerc><div class="skeleton skeleton-title w-3/4" data-astro-cid-wgq3jerc></div><div class="mt-3 space-y-2" data-astro-cid-wgq3jerc><div class="skeleton skeleton-text w-full" data-astro-cid-wgq3jerc></div><div class="skeleton skeleton-text w-5/6" data-astro-cid-wgq3jerc></div><div class="skeleton skeleton-text w-3/4" data-astro-cid-wgq3jerc></div><div class="skeleton skeleton-text w-2/3" data-astro-cid-wgq3jerc></div></div></div></div><article id="content-container" class="site-container mt-20 md:mt-28" data-astro-cid-wgq3jerc><div class="mb-5 p-6" data-astro-cid-wgq3jerc><h1 id="glossary-title" class="h2" data-astro-cid-wgq3jerc></h1><p id="glossary-description" class="mt-3" data-astro-cid-wgq3jerc></p></div></article><div class="ml-10 mr-10 mt-10 flex flex-col gap-10 md:gap-16" data-astro-cid-wgq3jerc>', "</div><script>\n    document.addEventListener('DOMContentLoaded', async () => {\n      const skeletonLoader = document.getElementById('skeleton-loader');\n      const contentContainer = document.getElementById('content-container');\n      \n      try {\n        const url = new URL(window.location.href);\n        const pathParts = url.pathname.split('/glossary/');\n        const id = pathParts[1]?.replace(/\\\\//g, '_').replace(/[:?]/g, '-');\n        \n        if (!id) {\n          throw new Error('Invalid glossary term ID');\n        }\n\n        const response = await fetch(\n          \\`https://adminapi.blackridgeresearch.com/glossary/listid/\\${id}\\`\n        );\n        \n        if (!response.ok) {\n          throw new Error('Failed to fetch glossary data');\n        }\n\n        const { data } = await response.json();\n        \n        if (data) {\n          // Update content\n          document.getElementById('glossary-title').textContent = data.title;\n          document.getElementById('glossary-description').textContent = data.description;\n          \n          // Switch visibility\n          skeletonLoader.style.display = 'none';\n          contentContainer.style.display = 'block';\n        } else {\n          throw new Error('Glossary term not found');\n        }\n      } catch (error) {\n        console.error('Error:', error);\n        document.getElementById('glossary-title').textContent = 'Error loading term';\n        skeletonLoader.style.display = 'none';\n        contentContainer.style.display = 'block';\n      }\n    });\n  <\/script>"])), maybeRenderHead(), renderComponent($$result2, "Ourservices", $$Ourservices, { "data-astro-cid-wgq3jerc": true })) })}`;
}, "/home/blackridgeorg/public_html/src/pages/glossary/[...slug].astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/glossary/[...slug].astro";
const $$url = "/glossary/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
