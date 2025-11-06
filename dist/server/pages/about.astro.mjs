/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Ct7febRF.mjs';
import { $ as $$CtaCardBgImage } from '../chunks/CtaCardBgImage_DVC_r1z5.mjs';
import { $ as $$Badge } from '../chunks/Badge_DE2wIJxu.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../chunks/translationUtils_XhrKexoJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$Profile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Profile;
  const { image, name, title, bio } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="hover-border-glow h-full rounded-xl border border-base-200 bg-base-100 p-6 dark:border dark:border-base-800 dark:bg-base-950"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": name, "height": 112, "densities": [1.5, 2], "class": "mb-6 mr-auto aspect-square size-20 rounded-full border border-base-200 object-cover md:size-28 dark:border-base-800" })} <h3 class="main-text-gradient mb-2 text-2xl font-medium leading-tight tracking-tight md:text-3xl md:leading-tight"> ${name} </h3> <span class="mb-6 inline-block text-primary-600 dark:text-primary-400">${title}</span> <p class="description">${bio}</p> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Profile/Profile.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const teamData = getTranslatedData("teamData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Us", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="site-container mx-auto mt-16 py-20"> <div class="mb-16"> ${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`the best around` })} <h1 class="h1">Meet our team</h1> <p class="description text-lg md:text-xl">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate molestias fugit.
</p> </div> <!-- Team info --> <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${teamData.map((member) => renderTemplate`${renderComponent($$result2, "Profile", $$Profile, { "name": member.name, "title": member.title, "image": member.image, "bio": member.bio })}`)} </div> </section> ${renderComponent($$result2, "CtaCenter", $$CtaCardBgImage, {})} ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/about.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
