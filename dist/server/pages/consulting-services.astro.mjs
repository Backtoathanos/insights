/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../chunks/translationUtils_XhrKexoJ.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Ct7febRF.mjs';
export { renderers } from '../renderers.mjs';

const bgImage = new Proxy({"src":"/_astro/Consulting-Services-new.DjoIGZ3-.jpg","width":1920,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/Consulting-Services-new.jpg";
							}
							
							return target[name];
						}
					});

const bgImageget = new Proxy({"src":"/_astro/how-we-help.DWeGzzG4.jpg","width":1980,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/how-we-help.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$ConsultingServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConsultingServices;
  const currLocale = getLocaleFromUrl(Astro2.url);
  getTranslatedData("teamData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Consulting Services | Blackridge Research & Consulting", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="" class="mt-10"> <div> <!-- bg image --> <div class="h-full"> ${renderComponent($$result2, "Image", $$Image, { "src": bgImage, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-full w-full", "aria-hidden": "true" })} </div> </div> </section>  <section class="site-container mx-auto mt-5 py-10"> <div class=""> <!-- <Badge>the best around</Badge> --> <div class="text-center"> <h3 class="h3">Overview</h3> </div> <p class="">
In today’s dynamic and complex world, change is the only constant. It is essential,
				therefore, for any organization to adapt to the changes in the industry and stay ahead of
				current and potential competitors. By undertaking needed changes, organizations will also
				benefit through improved revenue generation, growth and customer satisfaction.
</p> </div> <div class="mt-10"> <!-- <Badge>the best around</Badge> --> <div class="text-center"> <h3 class="h3">Types Of Enagagement</h3> </div> <p class="">
We provide consulting services on a project-based or continued engagement basis. Please get
				in touch with us to <span class="text-blue-400"> Know more</span> </p> </div> </section> <section class="site-container mt-5 py-10"> <div class="text-center"> <h3 class="h3">Key Offerings</h3> </div> <div class="sm:grid-col-1 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"> <div class="m-5 border bg-white px-3 py-12 text-center shadow-lg dark:bg-black"> <div class="flex justify-center"> <div class="my-2 w-10"> <!-- <Icon name="logos/astro" /> --> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm128-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM480 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path></svg> </div> </div> <h3 class="h3 mb-3">Market Assessment</h3> <p class="mb-3">
Get a detailed perspective of the market scenario at a granular level to identify trends,
					growth opportunities, threats and many more in the marketplace to make well informed
					decisions..
</p> </div> <div class="m-5 border bg-white px-3 py-12 text-center shadow-lg dark:bg-black"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"></path></svg> </div> </div> <h3 class="h3 mb-3">Strategy</h3> <p class="mb-3">
Identify and prioritize issues, challenges and goals to develop a winning strategy along
					with monitoring and managing the implementation/execution of strategic initiatives.
</p> </div> <div class="m-5 border bg-white px-3 py-12 text-center shadow-lg dark:bg-black"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm88 40c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zM232 88l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zm144-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16z"></path></svg> </div> </div> <h3 class="h3 mb-3">Commercial Due diligence</h3> <p class="mb-3">
Analyze and review the capabilities and the attractiveness of the target company to
					evaluate potential risks and improve the success rate of a merger or acquisition
</p> </div> <div class="m-5 border bg-white px-3 py-12 text-center shadow-lg dark:bg-black"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"></path></svg> </div> </div> <h3 class="h3 mb-3">Market Entry and Development</h3> <p class="mb-3">
We’ll assist you at every stage with the development and implementation of an optimal
					strategy for successful entry and long-term development.
</p> </div> <div class="m-5 border bg-white px-3 py-12 text-center shadow-lg dark:bg-black"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 160l0 96C0 379.7 100.3 480 224 480s224-100.3 224-224l0-96-128 0 0 96c0 53-43 96-96 96s-96-43-96-96l0-96L0 160zm0-32l128 0 0-64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64zm320 0l128 0 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64z"></path></svg> </div> </div> <h3 class="h3 mb-3">Technology Mapping</h3> <p class="mb-3">
Achieve/maintain competitive advantage and devise investment plans by identifying gaps in
					between current and required technological position.
</p> </div> <div class="m-5 border bg-white px-3 py-12 text-center shadow-lg dark:bg-black"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"></path></svg> </div> </div> <h3 class="h3 mb-3">M&A Advisory</h3> <p class="mb-3">
Provides end-to-end M&A advisory services, from devising strategy to selecting the right
					target company, from performing due diligence to closing the deal.
</p> </div> <div class="m-5 border bg-white px-3 py-12 text-center shadow-lg dark:bg-black"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg> </div> </div> <h3 class="h3 mb-3">Competitive Analysis</h3> <p class="mb-3">
Get an in-depth look at your competitors’ activities and acquire knowledgeable insights to
					devise strategy in developing and/or maintaining competitive edge.
</p> </div> <div class="m-5 border bg-white px-3 py-12 text-center shadow-lg dark:bg-black"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 32l32 0c17.7 0 32 14.3 32 32l0 32L96 96l0-32c0-17.7 14.3-32 32-32zm64 96l0 320c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32l0-59.1c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216L60.5 156c2-16 15.6-28 31.8-28l99.8 0zm227.8 0c16.1 0 29.8 12 31.8 28L459 216c3.3 26.4 12.1 51.8 25.8 74.6c17.8 29.7 27.2 63.7 27.2 98.3l0 59.1c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-320 99.8 0zM320 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32-96 0 0-32zm-32 64l0 160-64 0 0-160 64 0z"></path></svg> </div> </div> <h3 class="h3 mb-3">Opportunity Assessment</h3> <p class="mb-3">
Identify and seize business opportunities, and make informed strategic decisions with our
					business opportunity assessment.
</p> </div> </div> </section> <section id="cta-center" class="dark overflow-hidden"> <div class="relative overflow-hidden py-10 lg:py-10"> <!-- bg image --> <div class="absolute inset-0 h-full overflow-hidden"> <!-- mobile image --> <!-- <Image
          src={bgImage}
          alt="background"
          loading="lazy"
          width={600}
          densities={[1, 1.5, 2]}
          class="h-full w-full object-cover brightness-50 sm:hidden"
          aria-hidden="true"
        /> --> <!-- desktop image --> ${renderComponent($$result2, "Image", $$Image, { "src": bgImageget, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "hidden h-full w-full object-cover brightness-50 sm:block", "aria-hidden": "true" })} </div> <div class="site-container relative"> <div class="mx-auto max-w-3xl text-center"> <h2 class="h2 mb-8 text-base-50">HOW CAN WE HELP?</h2> <p class="mx-auto mb-20 max-w-xl tracking-tight text-base-200 md:text-xl">
Get in touch to discuss your ambitions and we’ll help you get there.
</p> <div class="relative flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline", "href": "/contact-us", "target": "_blank", "arrow": "right", "rel": "noopener noreferrer", "class": "px-8 py-3.5 text-lg dark:border-base-100" }, { "default": ($$result3) => renderTemplate`
GET IN TOUCH
` })} </div> </div> </div> </div> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/consulting-services.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/consulting-services.astro";
const $$url = "/consulting-services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ConsultingServices,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
