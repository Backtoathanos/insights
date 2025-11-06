/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$HeroSwiper, a as $$BlackRidgeFeatureSwiper, b as $$BlackRidgeFeatureCardsMedium, c as $$HomepageBlogPosts, d as $$HomepageLatestReports, e as $$CtaBlackridgeHomepageV2 } from '../chunks/CtaBlackridgeHomepageV2_CWKOhFON.mjs';
import { $ as $$LogoCloudMarquee } from '../chunks/LogoCloudMarquee_Dy1r_jtq.mjs';
import { $ as $$TestimonialsColumnsBlackridge } from '../chunks/TestimonialsColumnsBlackridge_DFNZISs-.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { $ as $$CaseStudiesSection } from '../chunks/hero-bg-crop_DTsY_ezB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const siteData = getTranslatedData("siteData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": siteData.title, "description": siteData.description, "navTheme": "dark" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSwiper", $$HeroSwiper, {})}    ${renderComponent($$result2, "LogoCloudMarquee", $$LogoCloudMarquee, {})} ${renderComponent($$result2, "BlackRidgeFeatureSwiper", $$BlackRidgeFeatureSwiper, {})} ${renderComponent($$result2, "BlackRidgeFeatureCardsMedium", $$BlackRidgeFeatureCardsMedium, {})} ${renderComponent($$result2, "HomepageBlogPosts", $$HomepageBlogPosts, {})} ${renderComponent($$result2, "HomepageLatestReports", $$HomepageLatestReports, {})} ${renderComponent($$result2, "TestimonialsColumnsBlackridge", $$TestimonialsColumnsBlackridge, {})} ${renderComponent($$result2, "CaseStudiesSection", $$CaseStudiesSection, {})}  ${renderComponent($$result2, "CtaBlackridgeHomepageV2", $$CtaBlackridgeHomepageV2, {})}  ${maybeRenderHead()}<div class="-mb-16 bg-primary-100/30 dark:bg-inherit"></div>                      ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/[...page].astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/[...page].astro";
const $$url = "/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
