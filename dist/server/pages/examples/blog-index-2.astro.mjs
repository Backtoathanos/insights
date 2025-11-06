/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$BlogPostsLayout1 } from '../../chunks/BlogPostsLayout1_DEcaJIc9.mjs';
import 'clsx';
import { g as getRelativeLocaleUrl } from '../../chunks/translationUtils_XhrKexoJ.mjs';
import { g as getAllPosts, c as countItems, s as sortByValue } from '../../chunks/blogUtils_DPiN0YAU.mjs';
import { h as humanize } from '../../chunks/textUtils_tlWO4DlQ.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$CategoryCloud = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoryCloud;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  const allCategories = posts.map((post) => post.data.categories).flat();
  const countedCategories = countItems(allCategories);
  const processedCategories = sortByValue(countedCategories);
  const { showCount = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-3 md:gap-4"> ${processedCategories.map(([category, count]) => renderTemplate`<a${addAttribute(getRelativeLocaleUrl(currLocale, `/tag/${category}/`), "href")} class="hover-border-glow rounded-md border border-base-200 bg-base-100 px-4 py-2 text-sm font-medium md:text-base dark:border-base-800 dark:bg-base-950"> ${humanize(category)} ${showCount && renderTemplate`<span class="text-xs opacity-70">${count}</span>`} </a>`)} </div>`;
}, "/home/blackridgeorg/public_html/src/components/CategoryCloud/CategoryCloud.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$BlogIndex2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogIndex2;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Our Blog Posts", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-hidden"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">Latest Articles</h1> <!-- <p class="description mx-auto mt-0 max-w-2xl text-center md:text-lg">
          Use and re-use tons of responsive sections to create the perfect
          layout. Sections are organised into convenient categories.
        </p> --> </div> <div class="mb-10 mt-4 flex md:mb-20"> ${renderComponent($$result2, "CategoryCloud", $$CategoryCloud, {})} </div> </div> ${renderComponent($$result2, "BlogPostsLayout", $$BlogPostsLayout1, { "posts": posts })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/examples/blog-index-2.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/examples/blog-index-2.astro";
const $$url = "/examples/blog-index-2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BlogIndex2,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
