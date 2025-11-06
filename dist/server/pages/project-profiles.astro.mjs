/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getAllPosts } from '../chunks/blogUtils_DPiN0YAU.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$ProjectProfileAmplify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectProfileAmplify;
  const apiUrl = "https://adminapi.blackridgeresearch.com/blog/live/projectprofiles";
  getLocaleFromUrl(Astro2.url);
  await fetch(`${apiUrl}?page=1&limit=6`).then((res) => res.json());
  return renderTemplate`${maybeRenderHead()}<section client:load data-astro-cid-55nuooai> <div id="posts-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-55nuooai> <!-- Initial Skeleton Loader --> <div id="initial-skeleton-loader" class="contents" data-astro-cid-55nuooai> ${Array.from({ length: 6 }).map(() => renderTemplate`<article class="blog-post animate-pulse" data-astro-cid-55nuooai> <div class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 bg-gray-200 sm:justify-normal dark:border-base-700 dark:bg-gray-700" data-astro-cid-55nuooai></div> <div class="mt-3" data-astro-cid-55nuooai> <div class="flex items-center justify-between" data-astro-cid-55nuooai> <div class="flex gap-2" data-astro-cid-55nuooai> <span class="badge h-6 w-16 bg-gray-300 dark:bg-gray-600" data-astro-cid-55nuooai></span> <span class="badge h-6 w-16 bg-gray-300 dark:bg-gray-600" data-astro-cid-55nuooai></span> </div> <div class="h-4 w-20 bg-gray-300 dark:bg-gray-600" data-astro-cid-55nuooai></div> </div> <div class="mt-4" data-astro-cid-55nuooai> <div class="h-5 w-full bg-gray-300 dark:bg-gray-600" data-astro-cid-55nuooai></div> <div class="mt-2 h-4 w-3/4 bg-gray-300 dark:bg-gray-600" data-astro-cid-55nuooai></div> </div> </div> </article>`)} </div> </div> <div id="button-container" class="mt-4 flex justify-center" data-astro-cid-55nuooai> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "my-auto px-4 py-1.5 md:flex", "data-astro-cid-55nuooai": true }, { "default": ($$result2) => renderTemplate`
View More
` })} </div> </section>  `;
}, "/home/blackridgeorg/public_html/src/components/ProjectProfile/ProjectProfileAmplify.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$ProjectProfiles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectProfiles;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "ProjectProfileAmplify", $$ProjectProfileAmplify, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/ProjectProfiles.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Project Profiles | Blackridge Research & Consulting", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">Project Profiles</h1> <p class="description mx-auto mt-0 max-w-2xl text-center md:text-lg">
Get latest perspectives, insights and analyses here
</p> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "ProjectProfiles", $$ProjectProfiles, { "posts": posts })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/project-profiles/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/project-profiles/index.astro";
const $$url = "/project-profiles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
