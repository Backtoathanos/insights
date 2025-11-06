import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { u as useTranslations, g as getRelativeLocaleUrl } from './translationUtils_XhrKexoJ.mjs';
import { $ as $$Button } from './Button_BaSqYn27.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { h as heroImage } from './storm-2_B1WdmwJn.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$HeroSideImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSideImage;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const t = useTranslations(currLocale);
  return renderTemplate`<!-- "dark" class forces dark mode for this section -->${maybeRenderHead()}<section id="hero-side" class="mt-14 overflow-x-clip"> <div class="site-container mx-auto px-4 py-16 md:py-20"> <div class="mx-auto grid max-w-md gap-10 text-center md:max-w-5xl md:grid-cols-2 md:text-left xl:items-center"> <div class="mx-auto my-auto w-full pt-4 md:ml-0 md:max-w-[560px] md:py-10 lg:pr-10"> <div class="mx-auto max-w-[400px] md:ml-0" data-aos="fade-up" data-aos-trigger="#hero-side"> <h1 class="main-text-gradient mb-6 text-pretty text-5xl font-medium leading-tight tracking-tight md:text-6xl md:leading-tight"> ${t("hero_text")} </h1> </div> <p class="description mb-8 text-pretty lg:text-lg"> <!-- <p
					class="description mb-8 text-pretty lg:text-lg"
					data-aos="fade-up"
					data-aos-delay=".1"
					data-aos-trigger="#hero-side"
				> --> ${t("hero_description")} </p> <div class="mt-6 flex flex-wrap justify-center gap-4 md:justify-start"> <!-- <div
					class="mt-6 flex flex-wrap justify-center gap-4 md:justify-start"
					data-aos="fade-up"
					data-aos-delay=".2"
					data-aos-trigger="#hero-side"
				> --> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "href": getRelativeLocaleUrl(currLocale, "/registration").replace(/\/$/, "") }, { "default": ($$result2) => renderTemplate`
Get Started
` })} ${renderComponent($$result, "Button", $$Button, { "variant": "ghost", "arrow": "right", "href": "https://cosmicthemes.com/themes/amplify/", "target": "_blank", "rel": "noopener noreferrer" }, { "default": ($$result2) => renderTemplate`
Get Amplify
` })} </div> </div> <div class="flex h-full w-full flex-grow items-center"> <!-- <div
				class="flex h-full w-full flex-grow items-center"
				data-aos="fade-in"
				data-aos-trigger="#hero-side"
				data-aos-delay=".5"
			> --> <div class="relative h-full overflow-hidden rounded-xl border border-base-200 dark:border-base-800"> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "class": "min-h-full w-auto object-cover", "alt": "hero", "loading": "eager", "width": 500, "densities": [1.5, 2] })} </div> </div> </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Hero/HeroSideImage.astro", void 0);

export { $$HeroSideImage as $ };
