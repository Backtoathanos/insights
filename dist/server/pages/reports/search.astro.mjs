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
const $$ReportCardBlackridgeSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReportCardBlackridgeSearch;
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
  const search = getCookie("search");
  const apiUrl = search ? `https://adminapi.blackridgeresearch.com/reports/live/search?query=${encodeURIComponent(search)}` : "https://adminapi.blackridgeresearch.com/reports/live";
  getLocaleFromUrl(Astro2.url);
  await fetch(`${apiUrl}&page=1&limit=6`).then((res) => res.json()).then((data) => data.posts || []);
  return renderTemplate`${maybeRenderHead()}<section client:load> <div id="reports-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"> <!-- Reports will be dynamically inserted here --> </div> <div id="button-container" class="mt-4 flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "px-4 py-1.5" }, { "default": ($$result2) => renderTemplate`View More` })} </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/ReportCard/ReportCardBlackridgeSearch.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$BaseLayoutSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayoutSearch;
  const { reports, id = "homepage-reports-trigger" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=""> ${renderComponent($$result, "ReportCardBlackridge", $$ReportCardBlackridgeSearch, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/BaseLayoutSearch.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  getLocaleFromUrl(Astro2.url);
  const reports = await getCollection("reports", ({ data, id }) => {
    return data.draft !== true;
  });
  const filteredReports = filterCollectionByLanguage(reports, defaultLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Report Store | Blackridge Research & Consulting	", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">SEARCH REPORTS</h1> <p class="description mb-3 mt-2 md:text-lg">
Our offerings include three variants of report i.e country briefing reports, market
					briefing ,and market research reports which primarily very in bredth and depth of the
					study
</p> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "ReportLayout", $$BaseLayoutSearch, { "reports": filteredReports })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/reports/search.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/reports/search.astro";
const $$url = "/reports/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Search,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
