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

const bgImage = new Proxy({"src":"/_astro/custom-research (1).DkswfSKU.jpg","width":1920,"height":435,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/custom-research (1).jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$CustomResearchs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CustomResearchs;
  const currLocale = getLocaleFromUrl(Astro2.url);
  getTranslatedData("teamData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Us", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="" class="mt-10"> <div> <!-- bg image --> <div class="h-full"> ${renderComponent($$result2, "Image", $$Image, { "src": bgImage, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-full w-full", "aria-hidden": "true" })} </div> </div> </section>  <section class="site-container mx-auto mt-5 py-10"> <div class=""> <!-- <Badge>the best around</Badge> --> <div class="text-center"> <h3 class="h2">Overview</h3> </div> <p class="description">
Syndicated research reports are standard reports published to cater larger audience and are
				optimized for preliminary or exploratory research. <br> <br>
On the other hand, custom research offers the flexibility to define research scope and
				methodology as per your requirements, being vital to deep dive and research niche areas to
				address your unique market intelligence needs critical for meeting your short-term and
				long-term goals.<br> <br>
Blackridge provides a wide range of Custom Research and Market Analysis services. We will
				listen to your goals and objectives and provide a customized, cost-effective research
				solution that fulfills your strategic business needs.
</p> </div> </section> <section class="site-container mx-auto mt-5 py-10"> <div class="text-center"> <h3 class="h2">Some of the Key Offerings</h3> </div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"> <div class="m-5 text-center"> <div class="flex justify-center"> <div class="my-2 w-10"> <!-- <Icon name="logos/astro" /> --> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm128-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM480 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path></svg> </div> </div> <h3 class="h3 mb-3">Market Sizing and Forecasting</h3> <p class="mb-3">
Quantitative analysis of markets, which includes market size, demand forecasting, and
					market segmentation, along with identification of growth hotspots.
</p> </div> <div class="m-5 text-center"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 32l32 0c17.7 0 32 14.3 32 32l0 32L96 96l0-32c0-17.7 14.3-32 32-32zm64 96l0 320c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32l0-59.1c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216L60.5 156c2-16 15.6-28 31.8-28l99.8 0zm227.8 0c16.1 0 29.8 12 31.8 28L459 216c3.3 26.4 12.1 51.8 25.8 74.6c17.8 29.7 27.2 63.7 27.2 98.3l0 59.1c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-320 99.8 0zM320 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 32-96 0 0-32zm-32 64l0 160-64 0 0-160 64 0z"></path></svg> </div> </div> <h3 class="h3 mb-3">Market Entry and Development</h3> <p class="mb-3">
Get an exploratory research to deep dive into the selected/target market to build a
					winning market entry strategy.
</p> </div> <div class="m-5 text-center"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg> </div> </div> <h3 class="h3 mb-3">Competitive Intelligence</h3> <p class="mb-3">
Get a comprehensive assessment and analysis of competitors to proactively position in the
					marketplace.
</p> </div> <div class="m-5 text-center"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"></path></svg> </div> </div> <h3 class="h3 mb-3">Opportunity Assessment</h3> <p class="mb-3">
Identify and seize business opportunities, and make informed strategic decisions with our
					business opportunity assessment.
</p> </div> <div class="m-5 text-center"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg class="text-white dark:fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 160l0 96C0 379.7 100.3 480 224 480s224-100.3 224-224l0-96-128 0 0 96c0 53-43 96-96 96s-96-43-96-96l0-96L0 160zm0-32l128 0 0-64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64zm320 0l128 0 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64z"></path></svg> </div> </div> <h3 class="h3 mb-3">Identification of Potential Customers</h3> <p class="mb-3">
Procure leads to meet your business development goals and expand your customer base.
</p> </div> <div class="m-5 text-center"> <div class="flex justify-center"> <div class="my-2 w-10"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg> </div> </div> <h3 class="h3 mb-3">Customer Insights</h3> <p class="mb-3">
Get unbiased insights and feedback from the market to help you understand, retain and
					expand your customer base.
</p> </div> </div> </section> <section> <div class="mx-auto max-w-3xl text-center"> <h2 class="h2">HOW CAN WE HELP?</h2> <p class="mx-auto mb-5 max-w-xl tracking-tight md:text-lg">
Get in touch to discuss your ambitions and we’ll help you get there.
</p> <div class="relative flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "outline", "href": "/contact-us", "target": "_blank", "arrow": "right", "rel": "noopener noreferrer", "class": "dark:border-base-100" }, { "default": ($$result3) => renderTemplate`
GET IN TOUCH
` })} </div> </div> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/custom-researchs.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/custom-researchs.astro";
const $$url = "/custom-researchs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CustomResearchs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
