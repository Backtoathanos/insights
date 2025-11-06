import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$Badge } from './Badge_DE2wIJxu.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from './translationUtils_XhrKexoJ.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$TestimonialItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialItemCard;
  const { class: className, avatar, name, title, testimonial, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hover-border-glow flex flex-col rounded-xl border border-base-200 bg-base-100 p-4 before:rounded-xl dark:border-base-800 dark:bg-base-950 dark:text-base-100", className], "class:list")}${spreadAttributes(rest)}> <p class="mb-6">${testimonial}</p> <div class="flex items-center gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": avatar, "alt": name, "height": 100, "class": "size-12 rounded-full object-cover" })} <div> <p class="font-medium leading-tight">${name}</p> <p class="description text-sm leading-tight tracking-tight">${title}</p> </div> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Testimonials/TestimonialItemCard.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$TestimonialsMarquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialsMarquee;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const testimonialData = getTranslatedData("testimonialData", currLocale);
  return renderTemplate`${maybeRenderHead()}<section id="testimonials-marquee-section" class="mx-auto max-w-[1800px] overflow-x-hidden px-4 py-16 md:py-20"> <div class="mb-10 flex flex-col justify-center text-center"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Testimonials` })} <div class="flex justify-center"> <h2 class="h2">Hear from our customers</h2> </div> </div> <div class="relative -mt-2"> <!-- left fade-out --> <div class="absolute -left-px top-0 z-20 h-full w-[10%] bg-gradient-to-r from-base-50 from-10% to-transparent dark:from-dark-bg"></div> <!-- right fade-out --> <div class="absolute -right-px top-0 z-20 h-full w-[10%] bg-gradient-to-r from-transparent to-base-50 to-90% dark:to-dark-bg"></div> <div class="relative h-full overflow-x-hidden py-4"> <div class="testimonial-marquee flex gap-6"> <div class="flex min-w-full shrink-0 animate-marquee-testimonials items-start justify-around gap-6"> ${testimonialData.map((testimonial, idx) => renderTemplate`<div class="w-[clamp(17rem,40vw,23rem)]"> ${renderComponent($$result, "TestimonialCard", $$TestimonialItemCard, { ...testimonial })} </div>`)} </div> <div aria-hidden="true" class="flex min-w-full shrink-0 animate-marquee-testimonials items-start justify-around gap-6"> ${testimonialData.map((testimonial, idx) => renderTemplate`<div class="w-[clamp(17rem,40vw,23rem)]"> ${renderComponent($$result, "TestimonialCard", $$TestimonialItemCard, { ...testimonial })} </div>`)} </div> </div> </div> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/Testimonials/TestimonialsMarquee.astro", void 0);

export { $$TestimonialsMarquee as $, $$TestimonialItemCard as a };
