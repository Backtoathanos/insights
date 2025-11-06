/* empty css                                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$HeroSideImage } from '../../chunks/HeroSideImage_BIXyL-a8.mjs';
import { $ as $$LogoCloudMarquee } from '../../chunks/LogoCloudMarquee_Dy1r_jtq.mjs';
import { $ as $$FeatureCardsSmall2, a as $$FeatureIntegrations } from '../../chunks/FeatureIntegrations_CH0kI9v2.mjs';
import { $ as $$FeatureCodeToggle, a as $$FeatureSteps } from '../../chunks/FeatureCodeToggle_BIlforRs.mjs';
import { $ as $$TestimonialsSwiperQuotes } from '../../chunks/TestimonialsSwiperQuotes_OhULQpxX.mjs';
import { $ as $$PricingOnePrice } from '../../chunks/PricingOnePrice_DVTj1Cxe.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_Ct7febRF.mjs';
import { $ as $$Button } from '../../chunks/Button_BaSqYn27.mjs';
import { $ as $$FaqAccordions } from '../../chunks/FaqAccordions_B39nMbcv.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../../chunks/translationUtils_XhrKexoJ.mjs';
export { renderers } from '../../renderers.mjs';

const bgImage = new Proxy({"src":"/_astro/storm-bg.iIFQO88Q.webp","width":3808,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/storm-bg.webp";
							}
							
							return target[name];
						}
					});

const bgImageMobile = new Proxy({"src":"/_astro/storm-bg-mobile2.BHqyImqU.webp","width":2172,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/storm-bg-mobile2.webp";
							}
							
							return target[name];
						}
					});

const $$CtaBgImage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cta-center" class="dark overflow-hidden"> <div class="relative overflow-hidden py-24 lg:py-36"> <!-- bg image --> <div class="absolute inset-0 h-full overflow-hidden"> <!-- mobile image --> ${renderComponent($$result, "Image", $$Image, { "src": bgImageMobile, "alt": "background", "loading": "lazy", "width": 600, "densities": [1, 1.5, 2], "class": "h-full w-full object-cover brightness-50 sm:hidden", "aria-hidden": "true" })} <!-- desktop image --> ${renderComponent($$result, "Image", $$Image, { "src": bgImage, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "hidden h-full w-full object-cover brightness-50 sm:block", "aria-hidden": "true" })} </div> <div class="site-container relative"> <div class="mx-auto max-w-3xl text-center"> <h2 class="h2 mb-8 text-base-50">Make your next website incredible</h2> <p class="mx-auto mb-20 max-w-xl tracking-tight text-base-200 md:text-xl">
A template for the next killer SaaS. Multiple pages and sections, blog, i18n, animations,
					CMS - all ready to go.
</p> <div class="relative flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "variant": "outline", "href": "https://cosmicthemes.com/themes/amplify/", "target": "_blank", "arrow": "right", "rel": "noopener noreferrer", "class": "px-8 py-3.5 text-lg dark:border-base-100" }, { "default": ($$result2) => renderTemplate`
Get Amplify
` })} </div> </div> </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Cta/CtaBgImage.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Landing3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing3;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const siteData = getTranslatedData("siteData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": siteData.title, "description": siteData.description }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "HeroSideImage", $$HeroSideImage, {})} ${renderComponent($$result2, "LogoCloudMarquee", $$LogoCloudMarquee, {})}   ${renderComponent($$result2, "FeatureCodeToggle", $$FeatureCodeToggle, {})} ${renderComponent($$result2, "FeatureCardsSmall2", $$FeatureCardsSmall2, {})}  ${renderComponent($$result2, "FeatureSteps", $$FeatureSteps, {})}     ${renderComponent($$result2, "FeatureIntegrations", $$FeatureIntegrations, {})}   ${renderComponent($$result2, "TestimonialsSwiperQuotes", $$TestimonialsSwiperQuotes, {})}   ${renderComponent($$result2, "PricingOnePrice", $$PricingOnePrice, {})}    ${renderComponent($$result2, "CtaBgImage", $$CtaBgImage, {})}  ${renderComponent($$result2, "FaqAccordions", $$FaqAccordions, {})}  ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/examples/landing3.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/examples/landing3.astro";
const $$url = "/examples/landing3";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Landing3,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
