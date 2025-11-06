/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { b as getCollection } from '../../chunks/translationUtils_XhrKexoJ.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getLocaleFromUrl, f as filterCollectionByLanguage } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from '../../chunks/Button_BaSqYn27.mjs';
import { d as defaultLocale } from '../../chunks/siteSettings.json_BHn8gCmX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$BlogCardSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogCardSearch;
  function getCookie(name) {
    if (typeof document !== "undefined") {
      const cookies = document.cookie.split("; ");
      for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
          return decodeURIComponent(value);
        }
      }
    }
    return null;
  }
  getCookie("blog_search");
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section client:load> <!-- Posts Container --> <div id="posts-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"></div> <!-- Skeleton Container --> <div id="skeleton-container" class="grid hidden grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> <template id="skeleton-template"> <article class="blog-post"> <div class="aspect-[2/1] h-40 w-full animate-pulse rounded-md bg-base-200"></div> <div class="mt-3 flex items-center justify-between"> <div class="flex gap-2"> <div class="h-4 w-16 animate-pulse rounded bg-base-200"></div> <div class="h-4 w-20 animate-pulse rounded bg-base-200"></div> </div> <div class="h-4 w-24 animate-pulse rounded bg-base-200"></div> </div> <div class="mt-2"> <div class="h-5 w-3/4 animate-pulse rounded bg-base-200"></div> </div> </article> </template> </div> <!-- View More Button --> <div id="button-container" class="mt-4 flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "my-auto px-4 py-1.5 md:flex" }, { "default": ($$result2) => renderTemplate`
View More
` })} </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/PostCard/BlogCardSearch.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$BlogLayoutSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayoutSearch;
  const { posts, id = "homepage-blog-trigger" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=""> ${renderComponent($$result, "BlogCardSearch", $$BlogCardSearch, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/BlogLayoutSearch.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  getLocaleFromUrl(Astro2.url);
  const blogPosts = await getCollection("blog", ({ data, id }) => {
    return data.draft !== true;
  });
  const filteredPosts = filterCollectionByLanguage(blogPosts, defaultLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog Search | Blackridge Research & Consulting", "description": "Search our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <h1 class="h1">SEARCH BLOG POSTS</h1> <p class="description mb-3 mt-2 md:text-lg">
Search through our collection of blog posts and articles
</p> </div> </div> ${renderComponent($$result2, "BlogLayoutSearch", $$BlogLayoutSearch, { "posts": filteredPosts })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/blog/search.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/blog/search.astro";
const $$url = "/blog/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Search,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
