/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderComponent } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$HeroSideElectric } from '../../chunks/HeroSideElectric_CUtPWW_F.mjs';
import { a as $$Icon } from '../../chunks/Button_BaSqYn27.mjs';
/* empty css                                       */
import { $ as $$FeatureCardsSmall, a as $$FeatureNumbers } from '../../chunks/FeatureNumbers_CbZR6JiT.mjs';
import { $ as $$FeatureCodeToggle, a as $$FeatureSteps } from '../../chunks/FeatureCodeToggle_BIlforRs.mjs';
import { $ as $$TestimonialsMarquee } from '../../chunks/TestimonialsMarquee_BpG8yAi2.mjs';
import { $ as $$PricingTable } from '../../chunks/PricingTable_CcEryxjB.mjs';
import { $ as $$CtaCardBgImage } from '../../chunks/CtaCardBgImage_DVC_r1z5.mjs';
import { $ as $$FaqAccordions } from '../../chunks/FaqAccordions_B39nMbcv.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../../chunks/translationUtils_XhrKexoJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$LogoCloudStatic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LogoCloudStatic;
  const { class: Classname, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="logo-cloud-static"${addAttribute(["flex items-end justify-center py-10", Classname], "class:list")} data-astro-cid-bxegmnlu> <div class="mx-4 grid grow gap-y-8 text-base-800 md:max-w-5xl md:grid-cols-3 dark:text-base-400"${spreadAttributes(rest)} data-astro-cid-bxegmnlu> <div class="m-auto flex items-center justify-center text-center md:ml-0 md:max-w-[270px] md:justify-start md:text-left" data-astro-cid-bxegmnlu> <h2 class="text-xl font-medium leading-tight tracking-tight text-base-900 md:text-3xl md:leading-tight dark:text-base-300" data-astro-cid-bxegmnlu>
Trusted by brands all over the world.
</h2> </div> <div class="md:col-span-2" data-astro-cid-bxegmnlu> <div class="grid w-full grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3" data-astro-cid-bxegmnlu> <div class="flex px-8" data-astro-cid-bxegmnlu> ${renderComponent($$result, "Icon", $$Icon, { "name": "logos/astro", "class": "logo py-2", "aria-label": "logo", "data-astro-cid-bxegmnlu": true })} </div> <div class="flex px-8" data-astro-cid-bxegmnlu> ${renderComponent($$result, "Icon", $$Icon, { "name": "logos/dribbble", "class": "logo", "aria-label": "logo", "data-astro-cid-bxegmnlu": true })} </div> <div class="flex px-8" data-astro-cid-bxegmnlu> ${renderComponent($$result, "Icon", $$Icon, { "name": "logos/sanity", "class": "logo py-2", "aria-label": "logo", "data-astro-cid-bxegmnlu": true })} </div> <div class="flex px-8" data-astro-cid-bxegmnlu> ${renderComponent($$result, "Icon", $$Icon, { "name": "logos/contentfull", "class": "logo", "aria-label": "logo", "data-astro-cid-bxegmnlu": true })} </div> <div class="flex px-8" data-astro-cid-bxegmnlu> ${renderComponent($$result, "Icon", $$Icon, { "name": "logos/github", "class": "logo", "aria-label": "logo", "data-astro-cid-bxegmnlu": true })} </div> <div class="flex px-8" data-astro-cid-bxegmnlu> ${renderComponent($$result, "Icon", $$Icon, { "name": "logos/notion", "class": "logo", "aria-label": "logo", "data-astro-cid-bxegmnlu": true })} </div> </div> </div> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/LogoCloud/LogoCloudStatic.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Landing2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing2;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const siteData = getTranslatedData("siteData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": siteData.title, "description": siteData.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSideElectric", $$HeroSideElectric, {})}    ${renderComponent($$result2, "LogoCloudStatic", $$LogoCloudStatic, { "class": "dark bg-dark-bg md:-mt-10 md:pb-20" })}   ${renderComponent($$result2, "FeatureCodeToggle", $$FeatureCodeToggle, {})} ${renderComponent($$result2, "FeatureSteps", $$FeatureSteps, {})} ${renderComponent($$result2, "FeatureCardsSmall", $$FeatureCardsSmall, {})} ${renderComponent($$result2, "FeatureNumbers", $$FeatureNumbers, {})}  ${renderComponent($$result2, "TestimonialsMarquee", $$TestimonialsMarquee, {})}   ${renderComponent($$result2, "PricingTable", $$PricingTable, {})}    ${renderComponent($$result2, "CtaCardBgImage", $$CtaCardBgImage, {})}  ${renderComponent($$result2, "FaqAccordions", $$FaqAccordions, {})}  ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/examples/landing2.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/examples/landing2.astro";
const $$url = "/examples/landing2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Landing2,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
