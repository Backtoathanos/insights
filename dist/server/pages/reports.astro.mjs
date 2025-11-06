/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { b as getCollection } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getLocaleFromUrl, f as filterCollectionByLanguage } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
/* empty css                                 */
import { d as defaultLocale } from '../chunks/siteSettings.json_BHn8gCmX.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$ReportCardBlackridge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReportCardBlackridge;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(["", '<section client:load data-astro-cid-dtv2zyju> <div id="reports-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-dtv2zyju> <!-- Skeletons will be rendered by default --> ', ' </div> <!-- Hidden loader for pagination --> <div id="skeleton-loader" class="grid hidden grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-dtv2zyju> ', ' </div> <div id="button-container" class="mt-4 flex justify-center" data-astro-cid-dtv2zyju> ', ' </div> </section> <script type="module">\n	const apiUrl = "https://adminapi.blackridgeresearch.com/reports/live";\n	const reportsContainer = document.getElementById("reports-container");\n	const skeletonLoader = document.getElementById("skeleton-loader");\n	const button = document.getElementById("view-more-button");\n\n	let currentPage = 1;\n	let totalPages = 1;\n	let isLoading = false;\n\n	const fetchReports = async (page) => {\n		try {\n			const response = await fetch(`${apiUrl}?page=${page}&limit=6`);\n			if (!response.ok) throw new Error("Failed to fetch");\n			return await response.json();\n		} catch (err) {\n			console.error(err);\n			return null;\n		}\n	};\n\n	const formatDate = (dateStr) => {\n		const date = new Date(dateStr);\n		return date.toLocaleDateString("en-US", {\n			month: "short",\n			day: "numeric",\n			year: "numeric",\n		});\n	};\n\n	const renderReports = (reports, replace = true) => {\n		if (replace) reportsContainer.innerHTML = "";\n		reports.forEach((report) => {\n			const article = document.createElement("article");\n			article.className = "report-item";\n			article.innerHTML = `\n				<a href="/reports/${report.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">\n					<figure>\n						${\n							report.image_name\n								? `<img src="https://adminapi.blackridgeresearch.com/uploads/${report.image_name}" alt="${report.rtitle}" class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />`\n								: `<div class="placeholder h-auto w-full bg-gray-200">No Image</div>`\n						}\n					</figure>\n				</a>\n				<div>\n					<div class="mt-3 flex items-center justify-between text-primary-600">\n						<div class="flex gap-2">\n							<span class="badge">${report.rtype}</span>\n							<span class="badge">${report.rgeography}</span>\n						</div>\n						<p class="text-sm text-base-600 dark:text-base-400">${formatDate(report.created_date)}</p>\n					</div>\n					<div class="mt-2">\n						<a href="/reports/${report.page_title}" class="group">\n							<h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">${report.rtitle}</h2>\n						</a>\n					</div>\n				</div>\n			`;\n			reportsContainer.appendChild(article);\n		});\n	};\n\n	document.addEventListener("DOMContentLoaded", async () => {\n		const initial = await fetchReports(currentPage);\n		if (initial?.posts?.length) {\n			renderReports(initial.posts);\n			totalPages = initial.totalPages || 1;\n			if (totalPages <= 1) button.style.display = "none";\n		}\n\n		button.addEventListener("click", async () => {\n			if (isLoading || currentPage >= totalPages) return;\n			isLoading = true;\n			currentPage += 1;\n			skeletonLoader.classList.remove("hidden");\n\n			const more = await fetchReports(currentPage);\n			skeletonLoader.classList.add("hidden");\n			if (more?.posts?.length) renderReports(more.posts, false);\n			if (currentPage >= totalPages) button.style.display = "none";\n\n			isLoading = false;\n		});\n	});\n<\/script>'], ["", '<section client:load data-astro-cid-dtv2zyju> <div id="reports-container" class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-dtv2zyju> <!-- Skeletons will be rendered by default --> ', ' </div> <!-- Hidden loader for pagination --> <div id="skeleton-loader" class="grid hidden grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-dtv2zyju> ', ' </div> <div id="button-container" class="mt-4 flex justify-center" data-astro-cid-dtv2zyju> ', ' </div> </section> <script type="module">\n	const apiUrl = "https://adminapi.blackridgeresearch.com/reports/live";\n	const reportsContainer = document.getElementById("reports-container");\n	const skeletonLoader = document.getElementById("skeleton-loader");\n	const button = document.getElementById("view-more-button");\n\n	let currentPage = 1;\n	let totalPages = 1;\n	let isLoading = false;\n\n	const fetchReports = async (page) => {\n		try {\n			const response = await fetch(\\`\\${apiUrl}?page=\\${page}&limit=6\\`);\n			if (!response.ok) throw new Error("Failed to fetch");\n			return await response.json();\n		} catch (err) {\n			console.error(err);\n			return null;\n		}\n	};\n\n	const formatDate = (dateStr) => {\n		const date = new Date(dateStr);\n		return date.toLocaleDateString("en-US", {\n			month: "short",\n			day: "numeric",\n			year: "numeric",\n		});\n	};\n\n	const renderReports = (reports, replace = true) => {\n		if (replace) reportsContainer.innerHTML = "";\n		reports.forEach((report) => {\n			const article = document.createElement("article");\n			article.className = "report-item";\n			article.innerHTML = \\`\n				<a href="/reports/\\${report.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">\n					<figure>\n						\\${\n							report.image_name\n								? \\`<img src="https://adminapi.blackridgeresearch.com/uploads/\\${report.image_name}" alt="\\${report.rtitle}" class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />\\`\n								: \\`<div class="placeholder h-auto w-full bg-gray-200">No Image</div>\\`\n						}\n					</figure>\n				</a>\n				<div>\n					<div class="mt-3 flex items-center justify-between text-primary-600">\n						<div class="flex gap-2">\n							<span class="badge">\\${report.rtype}</span>\n							<span class="badge">\\${report.rgeography}</span>\n						</div>\n						<p class="text-sm text-base-600 dark:text-base-400">\\${formatDate(report.created_date)}</p>\n					</div>\n					<div class="mt-2">\n						<a href="/reports/\\${report.page_title}" class="group">\n							<h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">\\${report.rtitle}</h2>\n						</a>\n					</div>\n				</div>\n			\\`;\n			reportsContainer.appendChild(article);\n		});\n	};\n\n	document.addEventListener("DOMContentLoaded", async () => {\n		const initial = await fetchReports(currentPage);\n		if (initial?.posts?.length) {\n			renderReports(initial.posts);\n			totalPages = initial.totalPages || 1;\n			if (totalPages <= 1) button.style.display = "none";\n		}\n\n		button.addEventListener("click", async () => {\n			if (isLoading || currentPage >= totalPages) return;\n			isLoading = true;\n			currentPage += 1;\n			skeletonLoader.classList.remove("hidden");\n\n			const more = await fetchReports(currentPage);\n			skeletonLoader.classList.add("hidden");\n			if (more?.posts?.length) renderReports(more.posts, false);\n			if (currentPage >= totalPages) button.style.display = "none";\n\n			isLoading = false;\n		});\n	});\n<\/script>'])), maybeRenderHead(), Array.from({ length: 6 }).map(() => renderTemplate`<article class="report-item space-y-3" data-astro-cid-dtv2zyju> <div class="skeleton h-48 w-full" data-astro-cid-dtv2zyju></div> <div class="flex justify-between" data-astro-cid-dtv2zyju> <div class="skeleton h-4 w-20" data-astro-cid-dtv2zyju></div> <div class="skeleton h-4 w-12" data-astro-cid-dtv2zyju></div> </div> <div class="skeleton h-6 w-3/4" data-astro-cid-dtv2zyju></div> </article>`), Array.from({ length: 6 }).map(() => renderTemplate`<article class="report-item space-y-3" data-astro-cid-dtv2zyju> <div class="skeleton h-48 w-full" data-astro-cid-dtv2zyju></div> <div class="flex justify-between" data-astro-cid-dtv2zyju> <div class="skeleton h-4 w-20" data-astro-cid-dtv2zyju></div> <div class="skeleton h-4 w-12" data-astro-cid-dtv2zyju></div> </div> <div class="skeleton h-6 w-3/4" data-astro-cid-dtv2zyju></div> </article>`), renderComponent($$result, "Button", $$Button, { "id": "view-more-button", "variant": "primary", "class": "px-4 py-1.5", "data-astro-cid-dtv2zyju": true }, { "default": ($$result2) => renderTemplate`View More` }));
}, "/home/blackridgeorg/public_html/src/components/ReportCard/ReportCardBlackridge.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$ReportsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReportsLayout;
  const { reports, id = "homepage-reports-trigger" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=""> ${renderComponent($$result, "ReportCardBlackridge", $$ReportCardBlackridge, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/ReportsLayout.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  getLocaleFromUrl(Astro2.url);
  const reports = await getCollection("reports", ({ data, id }) => {
    return data.draft !== true;
  });
  const filteredReports = filterCollectionByLanguage(reports, defaultLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Report Store | Blackridge Research & Consulting	", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">REPORTS STORE</h1> <p class="description mb-3 mt-2 md:text-lg">
Our offerings include three variants of report i.e country briefing reports, market
					briefing ,and market research reports which primarily very in bredth and depth of the
					study
</p> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "ReportLayout", $$ReportsLayout, { "reports": filteredReports })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/reports/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/reports/index.astro";
const $$url = "/reports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
