/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { a as getTranslatedData, g as getRelativeLocaleUrl } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Ct7febRF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutUs;
  const currLocale = getLocaleFromUrl(Astro2.url);
  getTranslatedData("teamData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Us | Blackridge Research & Consulting", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="cta-center" class="overflow-hidden"> <div class="dark relative overflow-hidden border border-base-800 bg-base-900 px-8 py-16 md:px-10 md:py-24 dark:bg-base-950"> <!-- bg image --> <div class="absolute inset-0 h-full overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "https://imagedelivery.net/zA7C1E09-z4Uj64Eb0zfkw/00b408e4-5a68-4453-e934-cb9790f85600/public", "alt": "background", "width": 1170, "height": 308, "decoding": "async", "fetchpriority": "high", "loading": "", "densities": [1, 1.5, 2], "class": "h-full w-full transform object-cover brightness-50", "aria-hidden": "true" })} </div> <div class="relative"> <div class="mx-auto max-w-3xl text-center"> <h2 class="h2 text-base-50">About Us</h2> </div> </div> </div> </section>  <section class="site-container mx-auto mt-5 py-20"> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">Overview</h3> <p class="description">
Blackridge Research & Consulting is a premier market research and consulting organization
				covering the Global energy transformation. We provide objective, independent and holistic
				view of the markets and present critical insights that are essential not only to help you
				make better business decisions but also to develop transformational business growth
				strategies.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">
Offerings
</h3><h3 class="h3">Intelligence Hubs</h3> <p class="description">
We have developed comprehensive intelligence hubs, which include several databases,
					project tracking platforms, and sophisticated live dashboards. These holistic intelligence
					hubs enable unparalleled data analysis and accelerate time-to-insight generation.
</p> <ul class="mt-7"> <li class="my-2"> <span class="text-blue-500"><a${addAttribute(getRelativeLocaleUrl(currLocale, `/solar-intelligence-hub`).replace(/\/$/, ""), "href")}>Learn more about our <b>Solar Intelligence Hub</b></a></span> </li> <li class="my-2"> <span class="text-blue-500"><a${addAttribute(getRelativeLocaleUrl(currLocale, `/wind-intelligence-hub`).replace(/\/$/, ""), "href")}>Explore the <b>Wind Intelligence Hub</b> in detail</a></span> </li> <li class="my-2"> <span class="text-blue-500"><a${addAttribute(getRelativeLocaleUrl(currLocale, `/global-project-tender-tracker`).replace(/\/$/, ""), "href")}>Discover how our <b>Project Tracker</b> works</a></span> </li> </ul> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">Syndicated Reports</h3> <p class="description">
We provide three different types of reports i.e. Country Briefing Reports, Market Briefing
					Reports, and Market Research Reports, which primarily vary in breadth and depth of the
					study.
</p> <ul class="mt-5"> <li class="my-2"> <span class="text-blue-500"><a${addAttribute(getRelativeLocaleUrl(currLocale, `/reports`).replace(/\/$/, ""), "href")}>Learn more about our <b>Syndicated Reports</b></a></span> </li> </ul> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">Subscription Services</h3> <p class="description">
We offer subscription services that provide unlimited access to several databases, data
					visualization tools, market research reports, analyst presentations, quarterly market
					outlook updates, and dedicated analyst team.
</p> <ul class="mt-5"> <li class="my-2"> <span class="text-blue-500"><a${addAttribute(getRelativeLocaleUrl(currLocale, `/subscription-services`).replace(/\/$/, ""), "href")}>Explore our <b>Subscription Services</b> in detail</a></span> </li> </ul> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">Custom Research</h3> <p class="description">
We provide tailor-made research and advisory services to address all your unique market
					intelligence needs and aid in your decision-making.
</p> <ul class="mt-5"> <li class="my-2"> <span class="text-blue-500"><a${addAttribute(getRelativeLocaleUrl(currLocale, `/custom-research`).replace(/\/$/, ""), "href")}>Learn more about our <b>Custom Research</b> services</a></span> </li> </ul> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">Consulting Services</h3> <p class="description">
We assist organizations in solving critical issues and exploring opportunities, aid in
					devising strategy and supporting the execution towards growth trajectory.
</p> <ul class="mt-5"> <li class="my-2"> <span class="text-blue-500"><a${addAttribute(getRelativeLocaleUrl(currLocale, `/consulting-services`).replace(/\/$/, ""), "href")}>Learn more about our <b>Consulting Services</b></a></span> </li> </ul> </div> </div> <section> <div class="mx-auto max-w-3xl text-center"> <h2 class="h2">HOW CAN WE HELP?</h2> <p class="mx-auto mb-5 max-w-xl tracking-tight md:text-lg">
Get in touch to discuss your ambitions and we’ll help you get there.
</p> <div class="relative flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline", "href": "/contact-us", "target": "_blank", "arrow": "right", "rel": "noopener noreferrer", "class": "dark:border-base-100" }, { "default": ($$result3) => renderTemplate`
GET IN TOUCH
` })} </div> </div> </section> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/about-us.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutUs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
