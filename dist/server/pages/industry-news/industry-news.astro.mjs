/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { f as formatDate } from '../../chunks/textUtils_tlWO4DlQ.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from '../../chunks/Button_BaSqYn27.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$IndustryNews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndustryNews;
  const apiUrl = "https://adminapi.blackridgeresearch.com/blog/live/newsrelease/projectnews";
  const currLocale = getLocaleFromUrl(Astro2.url);
  const initialPosts = await fetch(`${apiUrl}?page=1&limit=6`).then((res) => res.json());
  return renderTemplate`${maybeRenderHead()}<section client:load> <div id="posts-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> ${initialPosts.posts.map((post) => renderTemplate`<article${addAttribute(post.nid, "key")} class="blog-post"> <a${addAttribute(`/news-releases/${post.page_title}`, "href")} class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700"> <figure> ${post.image_name ? renderTemplate`<img${addAttribute(`https://adminapi.blackridgeresearch.com/uploads/${post.image_name}`, "src")}${addAttribute(`${post.title}`, "alt")} class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]">` : renderTemplate`<div class="placeholder h-auto w-full bg-gray-200">No Image Available</div>`} </figure> </a> <div> <div class="mt-3 flex items-center justify-between text-primary-600"> <div class="flex gap-2"> <span class="badge">${post.styp2}</span> <span class="badge">${post.industry}</span> </div> <p class="whitespace-nowrap text-sm text-base-600 dark:text-base-400"> ${formatDate(post.created_date, currLocale)} </p> </div> <div class="mt-2"> <a${addAttribute(`/news-releases/${post.page_title}`, "href")} class="group"> <h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500"> ${post.title} </h2> </a> </div> </div> </article>`)} </div> <div id="button-container" class="mt-4 flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "my-auto px-4 py-1.5 md:flex" }, { "default": ($$result2) => renderTemplate`
View More
` })} </div> </section> `;
}, "/home/blackridgeorg/public_html/src/pages/industry-news/industry-news.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/industry-news/industry-news.astro";
const $$url = "/industry-news/industry-news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$IndustryNews,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
