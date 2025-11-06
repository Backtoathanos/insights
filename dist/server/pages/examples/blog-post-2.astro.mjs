/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderSlot, s as spreadAttributes } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { g as getRelativeLocaleUrl, f as getEntries, u as useTranslations } from '../../chunks/translationUtils_XhrKexoJ.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_Ct7febRF.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$Button } from '../../chunks/Button_BaSqYn27.mjs';
import 'clsx';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { s as slugify, h as humanize, f as formatDate } from '../../chunks/textUtils_tlWO4DlQ.mjs';
import { g as getAllPosts } from '../../chunks/blogUtils_DPiN0YAU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://www.blackridgeresearch.com");
const $$Category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Category;
  const { category } = Astro2.props;
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<a class="inline-block text-sm font-medium tracking-tight text-primary-600 transition-colors hover:text-primary-700 md:text-base dark:text-primary-400 dark:hover:text-primary-300"${addAttribute(getRelativeLocaleUrl(currLocale, `/tag/${slugify(category)}`), "href")}> ${humanize(category)} </a>`;
}, "/home/blackridgeorg/public_html/src/components/Category/Category.astro", void 0);

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$BlogLayoutCenter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogLayoutCenter;
  const { post } = Astro2.props;
  const { title, description, authors, categories, pubDate, updatedDate, heroImage } = post.data;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const t = useTranslations(currLocale);
  const authorsData = await getEntries(authors);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "type": "blog", "title": title, "description": description, "image": heroImage, "authorsData": authorsData, "postFrontmatter": post.data }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="site-container mt-20 md:mt-28"> <!-- Blog post info --> <div class="flex w-full flex-col items-center"> <div class="mx-auto flex w-full max-w-[800px]"> <div class="mx-auto text-center"> <!-- categories --> <div class="flex w-full justify-center gap-3 md:text-lg"> ${categories.map((category) => renderTemplate`${renderComponent($$result2, "Category", $$Category, { "category": category })}`)} </div> <!-- title --> <div class="flex justify-center"> <h1 class="h2 mt-4">${title}</h1> </div> <div class="description mt-2 flex w-full flex-wrap justify-center gap-3"> <!-- author info --> ${authorsData.map((authorData) => renderTemplate`<div class="mb-auto flex"> <figure> ${renderComponent($$result2, "Image", $$Image, { "src": authorData.data.avatar, "alt": `${authorData.data.name} avatar`, "width": 100, "quality": "high", "loading": "eager", "class": "h-7 w-7 rounded-full border border-base-300 object-cover dark:border-base-700" })} </figure> <div class="my-auto ml-2">${authorData.data.name}</div> </div>`)} <span>&bull;</span> <!-- Date --> <time class="my-auto h-full"${addAttribute(pubDate.toISOString(), "datetime")}>${formatDate(pubDate, currLocale)} </time> </div> </div> </div> <!-- blog post main image --> <div class="mt-6 max-w-[1000px] overflow-hidden rounded-xl border border-base-300 dark:border-base-700"> ${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": ` ${title}`, "width": 2e3, "quality": "high", "class": "max-h-[70vh] object-cover", "loading": "eager", "format": "webp" })} </div> </div> <!-- article content --> <div class="mt-10 w-full"> <div class="mx-auto max-w-2xl"> <div class="text-base-content text-base"> ${updatedDate && renderTemplate`<div class="mb-6 italic"> <time${addAttribute(updatedDate.toISOString(), "datetime")}> ${t("updated")}: ${formatDate(updatedDate, currLocale)} </time> </div>`} <section id="blog-post-content" class="prose mx-auto"> ${renderSlot($$result2, $$slots["default"])} </section> <!-- button to go back to all posts --> <div class="mt-16 flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline", "arrow": "left", "href": getRelativeLocaleUrl(currLocale, "/blog").replace(/\/$/, "") }, { "default": ($$result3) => renderTemplate`${t("back_to_all_posts")}` })} </div> </div> </div> </div> </article> ` })}`;
}, "/home/blackridgeorg/public_html/src/layouts/BlogLayoutCenter.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { href } = Astro2.props;
  const domain = "https://www.blackridgeresearch.com";
  let attr = {};
  if (!href.includes(domain) && !href.startsWith("/") && !href.startsWith("#")) {
    attr["target"] = "_blank";
    attr["rel"] = "noopener noreferrer";
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(attr)}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/blackridgeorg/public_html/src/components/MarkdownComponents/ExternalLink.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$BlogPost2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost2;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  const post = posts[0];
  const { Content, headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogLayoutCenter", $$BlogLayoutCenter, { "post": post, "headings": headings }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, { "components": { a: $$ExternalLink } })} ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/examples/blog-post-2.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/examples/blog-post-2.astro";
const $$url = "/examples/blog-post-2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BlogPost2,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
