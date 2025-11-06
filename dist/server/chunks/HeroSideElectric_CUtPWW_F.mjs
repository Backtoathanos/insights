import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { u as useTranslations, g as getRelativeLocaleUrl } from './translationUtils_XhrKexoJ.mjs';
import { $ as $$Button } from './Button_BaSqYn27.mjs';
import { $ as $$LightningAnimation } from './LightningAnimation_CoilaZe_.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$HeroSideElectric = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSideElectric;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const t = useTranslations(currLocale);
  return renderTemplate`<!-- "dark" class forces dark mode for this section -->${maybeRenderHead()}<section id="hero-electric" class="dark mt-14 overflow-x-clip bg-dark-bg"> <div class="site-container mx-auto px-4 pb-10 md:pt-10"> <div class="mx-auto grid max-w-md text-center md:max-w-5xl md:grid-cols-2 md:text-left xl:items-center"> <div class="h-full w-full flex-grow md:order-2" data-aos="fade-in" data-aos-trigger="#hero-electric" data-aos-delay="1" data-aos-duration="1"> <div class="-my-10 mx-auto max-w-[250px] md:my-0 md:ml-0 md:max-w-[520px]"> ${renderComponent($$result, "LightningAnimation", $$LightningAnimation, {})} </div> </div> <div class="mx-auto my-auto w-full pb-10 pt-4 md:ml-0 md:max-w-[560px] md:pt-10 lg:pr-10"> <div class="mx-auto max-w-[400px] md:ml-0"> <!-- <div
					class="mx-auto max-w-[400px] md:ml-0"
					data-aos="fade-up"
					data-aos-trigger="#hero-electric"
				> --> <h1 class="main-text-gradient mb-6 text-pretty text-5xl font-medium leading-tight tracking-tight md:text-6xl md:leading-tight"> ${t("hero_text")} </h1> </div> <p class="description mb-8 text-pretty lg:text-lg"> <!-- <p
					class="description mb-8 text-pretty lg:text-lg"
					data-aos="fade-up"
					data-aos-delay=".1"
					data-aos-trigger="#hero-electric"
				> --> ${t("hero_description")} </p> <div class="mt-6 flex flex-wrap justify-center gap-4 md:justify-start"> <!-- <div
					class="mt-6 flex flex-wrap justify-center gap-4 md:justify-start"
					data-aos="fade-up"
					data-aos-delay=".2"
					data-aos-trigger="#hero-electric"
				> --> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "href": getRelativeLocaleUrl(currLocale, "/registration").replace(/\/$/, "") }, { "default": ($$result2) => renderTemplate`
Get Started
` })} ${renderComponent($$result, "Button", $$Button, { "variant": "ghost", "arrow": "right", "href": "https://cosmicthemes.com/themes/amplify/", "target": "_blank", "rel": "noopener noreferrer" }, { "default": ($$result2) => renderTemplate`
Get Amplify
` })} </div> </div> </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Hero/HeroSideElectric.astro", void 0);

export { $$HeroSideElectric as $ };
