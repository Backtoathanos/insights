import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from './Button_BaSqYn27.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$PostCardAmplify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCardAmplify;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section client:load> <!-- Posts Container --> <div id="posts-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"></div> <!-- Skeleton Container --> <div id="skeleton-container" class="grid hidden grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> <template id="skeleton-template"> <article class="blog-post"> <div class="aspect-[2/1] h-40 w-full animate-pulse rounded-md bg-base-200"></div> <div class="mt-3 flex items-center justify-between"> <div class="flex gap-2"> <div class="h-4 w-16 animate-pulse rounded bg-base-200"></div> <div class="h-4 w-20 animate-pulse rounded bg-base-200"></div> </div> <div class="h-4 w-24 animate-pulse rounded bg-base-200"></div> </div> <div class="mt-2"> <div class="h-5 w-3/4 animate-pulse rounded bg-base-200"></div> </div> </article> </template> </div> <!-- View More Button --> <div id="button-container" class="mt-4 flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "my-auto px-4 py-1.5 md:flex" }, { "default": ($$result2) => renderTemplate`
View More
` })} </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/PostCard/PostCardAmplify.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$BlogPostsLayout1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostsLayout1;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "PostCard", $$PostCardAmplify, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/BlogPostsLayout1.astro", void 0);

export { $$BlogPostsLayout1 as $ };
