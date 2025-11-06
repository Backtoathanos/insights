/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Glossary Search | Blackridge Research & Consulting`, "description": `Glossary search results` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <h1 class="h1">GLOSSARY SEARCH</h1> <p class="description mb-3 mt-2 md:text-lg" id="search-results-text">
Browse all glossary terms
</p> </div> </div> <!-- Glossary Results Container --> <div class="p-4"> <div id="glossary-container" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"></div> <!-- Skeleton Loading --> <div id="skeleton-container" class="grid hidden grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> <template id="skeleton-template"> <article class="glossary-item rounded-md border border-base-300 p-4 dark:border-base-700"> <div class="h-6 w-3/4 animate-pulse rounded bg-base-200"></div> <div class="mt-2 h-4 w-full animate-pulse rounded bg-base-200"></div> <div class="mt-2 h-4 w-1/2 animate-pulse rounded bg-base-200"></div> </article> </template> </div> <div id="button-container" class="mt-4 flex justify-center"> <button id="view-more-button" class="btn btn-primary px-4 py-1.5"> View More </button> </div> </div> </section>  ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/glossary/search.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/glossary/search.astro";
const $$url = "/glossary/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Search,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
