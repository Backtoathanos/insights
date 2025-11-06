/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
/* empty css                                 */
import { g as getAllPosts } from '../chunks/blogUtils_DPiN0YAU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$CustomCardAmplify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CustomCardAmplify;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section client:load class="mt-10" data-astro-cid-d7dncziv> <!-- Posts Container --> <div id="posts-container" class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-d7dncziv></div> <!-- Skeleton Loading --> <div id="skeleton-container" class="grid hidden grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-d7dncziv> <template id="skeleton-template" data-astro-cid-d7dncziv> <div class="flex flex-col gap-4 p-6 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700" data-astro-cid-d7dncziv> <div class="h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" data-astro-cid-d7dncziv></div> <div class="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" data-astro-cid-d7dncziv></div> <div class="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700" data-astro-cid-d7dncziv></div> <div class="mt-4 h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" data-astro-cid-d7dncziv></div> </div> </template> </div> <!-- View More Button --> <div id="button-container" class="mt-12 text-center" data-astro-cid-d7dncziv> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "px-6 py-3", "data-astro-cid-d7dncziv": true }, { "default": ($$result2) => renderTemplate`
Load More Research
` })} </div> </section>  `;
}, "/home/blackridgeorg/public_html/src/components/CustomCards/CustomCardAmplify.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$Customlayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Customlayout;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "CustomCardAmplify", $$CustomCardAmplify, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/Customlayout.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Custom-research | Blackridge Research & Consulting", "description": "Learn from our custom-research posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">Custom-Research</h1> <p class="description  mt-0  md:text-lg">
Get latest perspectives, insights and analyses here
</p> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "Customlayout", $$Customlayout, { "posts": posts })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/custom-research/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/custom-research/index.astro";
const $$url = "/custom-research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
