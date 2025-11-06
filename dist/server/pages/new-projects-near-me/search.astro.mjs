/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$IndustrySearchResults = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IndustrySearchResults;
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
  getCookie("search");
  return renderTemplate`${maybeRenderHead()}<section client:load> <div id="projects-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> <!-- Projects will be dynamically inserted here --> </div> <div id="button-container" class="mt-4 flex justify-center"> <button id="view-more-button" class="btn btn-primary px-4 py-1.5">View More</button> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/layouts/IndustrySearchResults.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Industry Projects Search | Blackridge Research & Consulting", "description": "Search for industry projects and tenders." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <h1 class="h1">SEARCH INDUSTRY PROJECTS</h1> <p class="description mb-3 mt-2 md:text-lg">
Search our comprehensive database of industry projects, tenders and opportunities
</p> </div> </div> <div class=""> ${renderComponent($$result2, "IndustrySearchResults", $$IndustrySearchResults, {})} </div> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/new-projects-near-me/search.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/new-projects-near-me/search.astro";
const $$url = "/new-projects-near-me/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Search,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
