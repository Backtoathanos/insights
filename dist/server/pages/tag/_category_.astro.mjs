/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from '../../chunks/Button_BaSqYn27.mjs';
import { g as getAllPosts } from '../../chunks/blogUtils_DPiN0YAU.mjs';
import { s as slugify, h as humanize } from '../../chunks/textUtils_tlWO4DlQ.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$TagsCardAmplify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TagsCardAmplify;
  const { tagParam } = Astro2.props;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(["", '<section client:load> <!-- Tag Filter Display --> <div id="tag-container" class="mb-4 flex flex-wrap gap-2 p-4"></div> <!-- Posts Container --> <div id="posts-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"></div> <!-- Skeleton Container --> <div id="skeleton-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> <template id="skeleton-template"> <article class="blog-post"> <div class="aspect-[2/1] h-40 w-full animate-pulse rounded-md bg-base-200"></div> <div class="mt-3 flex items-center justify-between"> <div class="flex gap-2"> <div class="h-4 w-16 animate-pulse rounded bg-base-200"></div> <div class="h-4 w-20 animate-pulse rounded bg-base-200"></div> </div> <div class="h-4 w-24 animate-pulse rounded bg-base-200"></div> </div> <div class="mt-2"> <div class="h-5 w-3/4 animate-pulse rounded bg-base-200"></div> </div> </article> </template> </div> <!-- View More Button --> <div id="button-container" class="mt-4 flex hidden justify-center"> ', ' </div> </section> <!-- Pass tagParam to client script --> <script type="application/json" id="astro-props"', "><\/script> "])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "my-auto px-4 py-1.5 md:flex" }, { "default": ($$result2) => renderTemplate`
View More
` }), addAttribute(tagParam, "data-tag-param"));
}, "/home/blackridgeorg/public_html/src/components/PostCard/TagsCardAmplify.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$TagPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagPostLayout;
  const { posts, tagParam } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "TagsCardAmplify", $$TagsCardAmplify, { "posts": posts, "tagParam": tagParam })} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/TagPostLayout.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  const filteredPosts = posts.filter((post) => {
    const slugifiedCategory = post.data.categories.map((category2) => slugify(category2));
    return slugifiedCategory.includes(category);
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Our Blog Posts on ${humanize(category)}`, "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">
Articles on <span class="">${humanize(category).toLowerCase()}</span> </h1> <!-- <p class="description mx-auto mt-0 max-w-2xl text-center md:text-lg">
          Use and re-use tons of responsive sections to create the perfect
          layout. Sections are organised into convenient categories.
        </p> --> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "TagPostLayout", $$TagPostLayout, { "posts": filteredPosts, "tagParam": category })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/tag/[category].astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/tag/[category].astro";
const $$url = "/tag/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
