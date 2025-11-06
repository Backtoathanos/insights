import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, d as addAttribute, l as renderTransition, n as renderHead, e as renderSlot } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$Seo, a as $$Nav, b as $$Footer } from './Footer_Da6ky9Yf.mjs';
import { s as siteSettings } from './siteSettings.json_BHn8gCmX.mjs';
/* empty css                               */
/* empty css                               */
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    type = "general",
    title,
    description,
    image,
    authors,
    postFrontmatter,
    noindex = false,
    preconnect = false
  } = Astro2.props;
  const currentPath = Astro2.url.pathname.split("/").filter(Boolean);
  let addAboutPageImage = false;
  if (currentPath && currentPath[0] == "about-us") {
    addAboutPageImage = true;
  }
  return renderTemplate(_a || (_a = __template(['<meta charset="utf-8"><meta name="viewport" content="width=device-width" , initial-scale="1.0">', `<!-- Favicons. I store these in public/favicons. Wherever you store them in the public folder is what you need these href's to match --><link rel="icon" href="/favicons/favicon.icon"><!-- Below is generated from https://realfavicongenerator.net/ --><link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg"><link rel="shortcut icon" href="/favicons/favicon.icon"><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"><link rel="manifest" href="/favicons/site.webmanifest"><!-- end favicons --><!-- other --><meta name="generator"`, '><link rel="sitemap" href="/sitemap-index.xml">', `<!-- Theme change setup. Run early to eliminate Flash of inAccurate coloR Theme (FART) --><script>
	function initTheme() {
		let colorTheme = localStorage.getItem("colorTheme");
		if (!colorTheme) {
			// if no color theme, default to dark as that's how the site is designed
			// Note: if you want to match the user's browser preference, you can use the below commented out code instead
			document.documentElement.classList.add("dark");
			localStorage.setItem("colorTheme", "dark");

			// if no color theme yet, use the users browser preferences
			// if (
			//   window.matchMedia &&
			//   window.matchMedia("(prefers-color-scheme: dark)").matches
			// ) {
			//   document.documentElement.classList.add("dark");
			//   localStorage.setItem("colorTheme", "dark");
			// } else {
			//   document.documentElement.classList.remove("dark");
			//   localStorage.setItem("colorTheme", "light");
			// }
		} else {
			// If there is, assign the theme based on the value in local storage
			if (colorTheme === "dark") {
				document.documentElement.classList.add("dark");
			} else if (colorTheme === "light") {
				document.documentElement.classList.remove("dark");
			}
		}
	}

	// runs on initial page load
	initTheme();

	// runs on view transitions navigation
	document.addEventListener("astro:after-swap", initTheme);
<\/script>`, "<!-- no fallback as I saw issues with firefox fallback -->", ""])), preconnect === true && renderTemplate`<link rel="preconnect" href="https://sendspark.com">`, addAttribute(Astro2.generator, "content"), addAboutPageImage && renderTemplate`<link rel="preload" as="image" href="https://imagedelivery.net/zA7C1E09-z4Uj64Eb0zfkw/00b408e4-5a68-4453-e934-cb9790f85600/public" fetchpriority="high">`, renderComponent($$result, "Seo", $$Seo, { "type": type, "title": title, "description": description, "image": image, "authors": authors, "postFrontmatter": postFrontmatter, "noindex": noindex }), siteSettings.useViewTransitions);
}, "/home/blackridgeorg/public_html/src/layouts/BaseHead.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    type = "general",
    title,
    description,
    navTheme = "dark",
    image,
    authorsData,
    postFrontmatter,
    preconnect = false,
    noindex = false
  } = Astro2.props;
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(currLocale, "lang")}${addAttribute(renderTransition($$result, "tyfwoq7n", "fade", ""), "data-astro-transition-scope")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "type": type, "preconnect": preconnect, "title": title, "description": description, "image": image ? image : void 0, "authors": authorsData ? authorsData : void 0, "postFrontmatter": postFrontmatter ? postFrontmatter : void 0, "noindex": noindex })}${renderHead()}</head> <body id="body"${addAttribute(`bg-base-50 dark:bg-dark-bg text-base-900 dark:text-base-200 ${"use-animations" }`, "class")}> <!-- put cookie consent first so it is seen first by screen readers --> <!-- <CookieConsent /> --> <div class="min-h-[100lvh]"> <div${addAttribute(`${navTheme == "dark" ? "dark" : ""}`, "class")}> ${renderComponent($$result, "Nav", $$Nav, {})} </div> <main> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} <!-- <FooterSimple /> --> <!-- Scroll animations -->  </body> </html>`;
}, "/home/blackridgeorg/public_html/src/layouts/BaseLayout.astro", "self");

export { $$BaseLayout as $ };
