/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getAllPosts } from '../chunks/blogUtils_DPiN0YAU.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { f as formatDate } from '../chunks/textUtils_tlWO4DlQ.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$PressReseasesAmplify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PressReseasesAmplify;
  const apiUrl = "https://adminapi.blackridgeresearch.com/blog/live/pressrelease";
  const currLocale = getLocaleFromUrl(Astro2.url);
  const initialPosts = await fetch(`${apiUrl}?page=1&limit=6`).then((res) => res.json());
  return renderTemplate`${maybeRenderHead()}<section client:load> <!-- Skeleton Loader --> <div id="loader-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> ${Array.from({ length: 6 }).map(() => renderTemplate`<article class="blog-post animate-pulse rounded-md border border-base-300 dark:border-base-700"> <div class="aspect-[2/1] w-full rounded-md bg-gray-200 dark:bg-gray-700"></div> <div class="mt-3 flex items-center justify-between"> <div class="flex gap-2"> <span class="h-5 w-16 rounded bg-gray-300 dark:bg-gray-600"></span> <span class="h-5 w-20 rounded bg-gray-300 dark:bg-gray-600"></span> </div> <div class="h-4 w-20 rounded bg-gray-300 dark:bg-gray-600"></div> </div> <div class="mt-3 space-y-2"> <div class="h-5 w-3/4 rounded bg-gray-300 dark:bg-gray-600"></div> <div class="h-5 w-1/2 rounded bg-gray-300 dark:bg-gray-600"></div> </div> </article>`)} </div> <!-- Actual Posts --> <div id="posts-container" class="grid hidden grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> ${initialPosts.posts.map((post) => renderTemplate`<article${addAttribute(post.nid, "key")} class="blog-post"> <a${addAttribute(`/press-releases/${post.page_title}`, "href")} class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700"> <figure> ${post.image_name ? renderTemplate`<img${addAttribute(`https://adminapi.blackridgeresearch.com/uploads/${post.image_name}`, "src")}${addAttribute(` ${post.title}`, "alt")} class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]">` : renderTemplate`<div class="placeholder h-auto w-full bg-gray-200">No Image Available</div>`} </figure> </a> <div> <div class="mt-3 flex items-center justify-between text-primary-600"> <div class="flex gap-2"> <span class="badge">${post.styp2}</span> <span class="badge">${post.industry}</span> </div> <p class="whitespace-nowrap text-sm text-base-600 dark:text-base-400"> ${formatDate(post.created_date, currLocale)} </p> </div> <div class="mt-2"> <a${addAttribute(`/press-releases/${post.page_title}`, "href")} class="group"> <h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500"> ${post.title} </h2> </a> </div> </div> </article>`)} </div> <!-- View More Button --> <div id="button-container" class="mt-4 flex hidden justify-center"> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "my-auto px-4 py-1.5 md:flex" }, { "default": ($$result2) => renderTemplate`
View More
` })} </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/Press-Releases/PressReseasesAmplify.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$PressReleases = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PressReleases;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "PressReseasesAmplify", $$PressReseasesAmplify, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/PressReleases.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Press Releases | Blackridge Research & Consulting", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">Press Releases</h1> <p class="description mx-auto mt-0 max-w-2xl text-center md:text-lg">
Get latest perspectives, insights and analyses here
</p> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "PressReleases", $$PressReleases, { "posts": posts })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/press-releases/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/press-releases/index.astro";
const $$url = "/press-releases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
