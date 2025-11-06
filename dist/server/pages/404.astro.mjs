/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { g as getRelativeLocaleUrl } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
import { $ as $$LightningAnimation } from '../chunks/LightningAnimation_CoilaZe_.mjs';
import { $ as $$Badge } from '../chunks/Badge_DE2wIJxu.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404", "description": "Error 404 page not found.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-20 md:py-20"> <div class="site-container"> <div class="dark grid items-center rounded-xl bg-dark-bg md:grid-cols-2"> <div class="-m-6 mx-auto w-full max-w-[250px] px-4 md:m-0 md:max-w-full" data-aos="fade-in" data-aos-delay="1"> ${renderComponent($$result2, "LightningAnimation", $$LightningAnimation, {})} </div> <div class="w-full px-4 py-8"> <div class="text-center md:max-w-xl md:text-left"> ${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`Error 404` })} <h1 class="h1 tracking-tight md:text-5xl">Oh no! Error 404</h1> <p class="description mb-6 text-lg md:text-xl">
Something went wrong, so this page is broken.
</p> <div class="relative z-10 flex flex-wrap justify-center md:justify-start"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "href": getRelativeLocaleUrl(currLocale, "/") }, { "default": ($$result3) => renderTemplate`Go back to homepage` })} </div> </div> </div> </div> </div> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/404.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
