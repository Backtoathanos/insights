import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
/* empty css                          */
/* empty css                            */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { a as $$Icon } from './Button_BaSqYn27.mjs';
import { $ as $$Badge } from './Badge_DE2wIJxu.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from './translationUtils_XhrKexoJ.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$TestimonialItemQuotes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialItemQuotes;
  const { avatar, name, title, testimonial } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex h-full flex-col"> <div class="relative mx-auto mb-10 max-w-3xl pb-6 pt-10 text-center sm:px-6"> ${renderComponent($$result, "Icon", $$Icon, { "name": "amplify/quotes-top", "class": "absolute left-0 top-0 size-14 text-primary-200 dark:text-primary-400", "aria-hidden": "true" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "amplify/quotes-bottom", "class": "absolute -bottom-6 right-0 size-14 text-primary-200 dark:text-primary-400", "aria-hidden": "true" })} <div class="relative"> <!-- <Badge>Quotes</Badge> --> <h3 class="description text-lg font-medium"> ${testimonial} </h3> </div> </div> <div class="flex flex-col items-center pb-4"> ${renderComponent($$result, "Image", $$Image, { "src": avatar, "alt": name, "height": 160, "class": "size-16 rounded-full object-cover" })} <h3 class="h3 mt-4 font-medium">${name}</h3> <p class="description mt-1 leading-tight">${title}</p> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Testimonials/TestimonialItemQuotes.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$TestimonialsSwiperQuotes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialsSwiperQuotes;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const testimonialData = getTranslatedData("testimonialData", currLocale);
  return renderTemplate`${maybeRenderHead()}<section id="testimonial-swiper-quotes" class="overflow-clip py-16 md:py-20"> <div class="site-container"> <div class="flex flex-col items-center justify-center"> <!-- <div class="flex flex-col items-center justify-center" data-aos="fade-right"> --> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Testimonials` })} <div class="flex justify-center"> <h2 class="h2 text-center">Our customers love us</h2> </div> </div> <div class="mt-6 overflow-hidden pb-10"> <!-- <div class="mt-6 overflow-hidden pb-10" data-aos="fade-left"> --> <!-- swiper --> <div class="testimonials__swiper--quotes relative"> <!-- Additional required wrapper --> <div class="swiper-wrapper"> <!-- Slides --> ${testimonialData.map((testimonial, idx) => renderTemplate`<div class="swiper-slide"> ${renderComponent($$result, "TestimonialItemQuotes", $$TestimonialItemQuotes, { ...testimonial })} </div>`)} </div> <!-- If we need pagination --> <div class="swiper-pagination"></div> <!-- If we need navigation buttons --> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> <!-- If we need scrollbar --> <div class="swiper-scrollbar"></div> </div> </div> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/Testimonials/TestimonialsSwiperQuotes.astro", void 0);

export { $$TestimonialsSwiperQuotes as $ };
