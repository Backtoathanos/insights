import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from './Button_BaSqYn27.mjs';
/* empty css                                */

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$ProjectNewsAmplify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectNewsAmplify;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section client:load data-astro-cid-hq3sxz7g> <div id="posts-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-hq3sxz7g> <!-- Skeleton Loading State (Image + Text) --> ${Array.from({ length: 6 }).map(() => renderTemplate`<article class="skeleton animate-pulse rounded-md border border-base-300 dark:border-base-700" data-astro-cid-hq3sxz7g> <div class="skeleton-image mb-4" data-astro-cid-hq3sxz7g></div> <div class="space-y-3 p-4" data-astro-cid-hq3sxz7g> <div class="flex justify-between" data-astro-cid-hq3sxz7g> <div class="flex gap-2" data-astro-cid-hq3sxz7g> <div class="skeleton-badge" data-astro-cid-hq3sxz7g></div> <div class="skeleton-badge" data-astro-cid-hq3sxz7g></div> </div> <div class="skeleton-date" data-astro-cid-hq3sxz7g></div> </div> <div class="skeleton-title" data-astro-cid-hq3sxz7g></div> <div class="skeleton-description" data-astro-cid-hq3sxz7g></div> </div> </article>`)} </div> <!-- Posts Display Section --> <div id="loader-container" class="grid hidden grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-hq3sxz7g> <!-- Additional Skeleton Loading Here (Same as Above) --> ${Array.from({ length: 6 }).map(() => renderTemplate`<article class="skeleton animate-pulse rounded-md border border-base-300 dark:border-base-700" data-astro-cid-hq3sxz7g> <div class="skeleton-image mb-4" data-astro-cid-hq3sxz7g></div> <div class="space-y-3 p-4" data-astro-cid-hq3sxz7g> <div class="flex justify-between" data-astro-cid-hq3sxz7g> <div class="flex gap-2" data-astro-cid-hq3sxz7g> <div class="skeleton-badge" data-astro-cid-hq3sxz7g></div> <div class="skeleton-badge" data-astro-cid-hq3sxz7g></div> </div> <div class="skeleton-date" data-astro-cid-hq3sxz7g></div> </div> <div class="skeleton-title" data-astro-cid-hq3sxz7g></div> <div class="skeleton-description" data-astro-cid-hq3sxz7g></div> </div> </article>`)} </div> <!-- View More Button --> <div id="button-container" class="mt-4 flex justify-center" data-astro-cid-hq3sxz7g> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "my-auto px-4 py-1.5 md:flex", "data-astro-cid-hq3sxz7g": true }, { "default": ($$result2) => renderTemplate`
View More
` })} </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/ProjectNews/ProjectNewsAmplify.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$ProjectNews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectNews;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "ProjectNewsAmplify", $$ProjectNewsAmplify, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/ProjectNews.astro", void 0);

export { $$ProjectNews as $ };
