import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { a as $$Icon } from './Button_BaSqYn27.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from './translationUtils_XhrKexoJ.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$TestimonialItemCardBlackridge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialItemCardBlackridge;
  const { class: className, avatar, name, title, testimonial, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-full"${spreadAttributes(rest)}> <div${addAttribute(["hover-border-glow flex h-full flex-col justify-between rounded-xl border border-base-200 bg-base-100 p-4 shadow-md before:rounded-xl xs:p-8 dark:border-base-800 dark:bg-base-950 dark:text-base-100", className], "class:list")}> <div> <div class="flex flex-wrap gap-1 text-yellow-500"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/star-filled", "class": "size-4" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/star-filled", "class": "size-4" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/star-filled", "class": "size-4" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/star-filled", "class": "size-4" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/star-filled", "class": "size-4" })} </div> <p class="mb-6 mt-4">${testimonial}</p> </div> <div class="flex items-center gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": avatar, "alt": name, "height": 100, "class": "size-12 rounded-full object-cover" })} <div> <p class="font-bold leading-tight">${name}</p> <p class="description mt-1 text-sm leading-tight tracking-tight"> ${title} </p> </div> </div> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Testimonials/TestimonialItemCardBlackridge.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$TestimonialsColumnsBlackridge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialsColumnsBlackridge;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const testimonialData = getTranslatedData("testimonialData", currLocale);
  return renderTemplate`${maybeRenderHead()}<section id="testimonials-columns" class="py-12 md:pb-20"> <div class="site-container"> <div class="mx-auto mb-16 text-center md:max-w-4xl"> <!-- <div class="mx-auto mb-16 text-center md:max-w-4xl" data-aos="fade-up"> --> <div> <h2 class="h2 inline">What people are saying about us</h2> </div> </div> <div class="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${testimonialData.map((testimonial, idx) => renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialItemCardBlackridge, { ...testimonial, "class": "" })}`)} <!-- {
				testimonialData.map((testimonial, idx) => (
					<TestimonialCard
						{...testimonial}
						class=""
						data-aos="fade-right"
						data-aos-delay={idx * 0.2}
					/>
				))
			} --> </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Testimonials/TestimonialsColumnsBlackridge.astro", void 0);

export { $$TestimonialsColumnsBlackridge as $ };
