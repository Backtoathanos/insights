import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { $ as $$Button } from './Button_BaSqYn27.mjs';

const bgImage = new Proxy({"src":"/_astro/storm-bg-crop.DoXILvRp.webp","width":2568,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/storm-bg-crop.webp";
							}
							
							return target[name];
						}
					});

const $$CtaCardBgImage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cta-center" class="site-container overflow-hidden py-16 md:py-20"> <div class="dark relative overflow-hidden rounded-2xl border border-base-800 bg-base-900 px-8 py-16 md:px-10 md:py-24 dark:bg-base-950"> <!-- bg image --> <div class="absolute inset-0 h-full overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": bgImage, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-full w-full transform object-cover brightness-50", "aria-hidden": "true" })} </div> <div class="relative"> <div class="mx-auto max-w-3xl text-center"> <h2 class="h2 text-base-50">Make your next website incredible</h2> <p class="mx-auto mb-16 max-w-xl tracking-tight text-base-200 md:text-lg">
A template for the next killer SaaS. Multiple pages and sections, blog, i18n, animations,
					CMS - all ready to go.
</p> <div class="relative flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "variant": "outline", "href": "https://cosmicthemes.com/themes/amplify/", "target": "_blank", "arrow": "right", "rel": "noopener noreferrer", "class": "dark:border-base-100" }, { "default": ($$result2) => renderTemplate`
Get Amplify
` })} </div> </div> </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Cta/CtaCardBgImage.astro", void 0);

export { $$CtaCardBgImage as $ };
