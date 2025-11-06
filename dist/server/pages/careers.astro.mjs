/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { i as image } from '../chunks/agreement-business_BkcocvzW.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Ct7febRF.mjs';
export { renderers } from '../renderers.mjs';

const bgImage = new Proxy({"src":"/_astro/Careers-banner (1).CrpGx8-P.jpg","width":1978,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/Careers-banner (1).jpg";
							}
							
							return target[name];
						}
					});

const office = new Proxy({"src":"/_astro/office.zmepvcsz.jpg","width":500,"height":300,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/office.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Careers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Careers;
  const currLocale = getLocaleFromUrl(Astro2.url);
  getTranslatedData("teamData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Careers | Blackridge Research & Consulting", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="" class="mt-10"> <div> <!-- bg image --> <div class="h-full"> ${renderComponent($$result2, "Image", $$Image, { "src": bgImage, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-full w-full", "aria-hidden": "true" })} </div> </div> </section>  <section class="site-container mx-auto mt-5 py-3"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> <div class="p-3"> <p class="description">
At Blackridge Research & Consulting you will have numerous growth opportunities and career
					paths; you will be part of a dynamic team that strives for excellence in work and social
					engagements. <br><br>
Our people at Blackridge Research & Consulting are all focused on a single purpose –
					delivering remarkable insight and service to our clients across the globe. We do this by
					gathering the most dedicated and energetic people who share our passion and vision for
					creating exceptional client outcomes, and empowering them to make a difference. If you’re
					someone with exceptional critical thinking, who enjoys creating innovative ways to reach
					ambitious goals, who is open to receiving honest feedback, and who likes asking and being
					asked “why?” —then we should talk.
</p> </div> <div class="flex h-full justify-center p-3"> <div class="h-80 border border-gray-300"> ${renderComponent($$result2, "Image", $$Image, { "src": office, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-80 w-auto p-2", "aria-hidden": "true" })} </div> </div> </div> </section> <section class="site-container mx-auto mt-5 py-3"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> <div class="flex justify-center p-3"> <div class="h-80 border border-gray-300"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-80 w-auto p-2", "aria-hidden": "true" })} </div> </div> <div class="p-3"> <h1 class="h3">Empower your future</h1> <p class="description">
We dress casual and encourage our people to work together in a collegial and collaborative
					team-based environment. While much of learning happens on the job, we also want to
					cultivate the skills and capabilities you need to succeed. We empower them to act like
					owners by making decisions based on a combination of rigorous analysis and an open,
					creative mindset. This enables us to continuously improve our day-to-day activities, and
					ultimately the Firm as a whole.
</p> <h1 class="h3">Be rewarded</h1> <p class="description">
We expect nothing but the best from our people. In return, we reward innovative thinking,
					outstanding client service and hardwork.
</p> </div> </div> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/careers.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/careers.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Careers,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
