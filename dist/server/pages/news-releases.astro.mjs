/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getAllPosts } from '../chunks/blogUtils_DPiN0YAU.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$NewReleaseAmplify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewReleaseAmplify;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section client:load data-astro-cid-otqf2rso> <div id="posts-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-otqf2rso> <!-- Posts will be inserted dynamically --> </div> <div id="button-container" class="mt-4 flex justify-center" data-astro-cid-otqf2rso> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "my-auto px-4 py-1.5 md:flex", "data-astro-cid-otqf2rso": true }, { "default": ($$result2) => renderTemplate`
View More
` })} </div> </section>  `;
}, "/home/blackridgeorg/public_html/src/components/NewReleases/NewReleaseAmplify.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Our Blog Posts", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">News Releases</h1> <p class="description mx-auto mt-0 max-w-2xl text-center md:text-lg">
Get latest perspectives, insights and analyses here
</p> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "NewReleaseAmplify", $$NewReleaseAmplify, { "posts": posts })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/news-releases/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/news-releases/index.astro";
const $$url = "/news-releases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
