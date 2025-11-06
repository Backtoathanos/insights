/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, u as unescapeHTML, F as Fragment } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$TestimonialsSwiperQuotes } from '../../chunks/TestimonialsSwiperQuotes_OhULQpxX.mjs';
import { a as $$TestimonialItemCard, $ as $$TestimonialsMarquee } from '../../chunks/TestimonialsMarquee_BpG8yAi2.mjs';
import { $ as $$Badge } from '../../chunks/Badge_DE2wIJxu.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../../chunks/translationUtils_XhrKexoJ.mjs';
import { $ as $$FaqAccordions } from '../../chunks/FaqAccordions_B39nMbcv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$TestimonialsColumns = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialsColumns;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const testimonialData = getTranslatedData("testimonialData", currLocale);
  return renderTemplate`${maybeRenderHead()}<section id="testimonials-columns" class="py-16 md:py-20"> <div class="site-container"> <div class="mx-auto mb-16 text-center md:max-w-4xl"> <!-- <div class="mx-auto mb-16 text-center md:max-w-4xl" data-aos="fade-up"> --> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`200+ Happy customers` })} <div> <h2 class="h2 inline">What our clients say</h2> </div> <p class="description mt-4 text-lg md:text-xl">
Use and reuse tons of responsive sections to create the perfect layout.
</p> </div> <div class="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- <div
			class="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
			data-aos="fade-up"
			data-aos-delay=".2"
		> --> ${testimonialData.map((testimonial, idx) => renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialItemCard, { ...testimonial, "class": "" })}`)} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Testimonials/TestimonialsColumns.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$FaqCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FaqCard;
  const { question, answer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-3"> <p class="text-lg font-medium dark:text-base-300">${question}</p> <div class="description prose mb-4 mr-auto mt-1 max-w-full leading-snug"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(answer)}` })} </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Faq/FaqCard.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$FaqCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqCards;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const faqData = getTranslatedData("faqData", currLocale);
  const faqCols = [];
  let faqsPerCol = Math.floor(faqData.length / 2);
  let remainder = faqData.length % 2;
  if (remainder === 0) {
    faqCols[0] = faqData.slice(0, faqsPerCol);
    faqCols[1] = faqData.slice(faqsPerCol, 2 * faqsPerCol);
  } else if (remainder === 1) {
    faqCols[0] = faqData.slice(0, faqsPerCol + 1);
    faqCols[1] = faqData.slice(faqsPerCol + 1, 2 * faqsPerCol + 1);
  } else {
    console.error("Something went wrong with the FAQ data in FaqCards.astro");
  }
  return renderTemplate`${maybeRenderHead()}<section id="faq-cards" class="site-container py-20 md:py-28"> <div class="mx-auto flex max-w-xl flex-col items-center"> <!-- <Badge>FAQ</Badge> --> <div class="flex justify-center"> <h2 class="h2 text-center">Frequently Asked Questions</h2> </div> <!-- <p class="description md:text-lg">
      Still have doubts? Here's everything we think you should know.
    </p> --> </div> <div class="mx-auto mt-16 grid w-full max-w-md gap-x-10 gap-y-3 lg:max-w-full lg:grid-cols-2 xl:gap-x-24"> ${faqCols.map((faqCol) => renderTemplate`<div class="flex w-full flex-col gap-10"> ${faqCol.map(({ question, answer }, idx) => renderTemplate`${renderComponent($$result, "FaqCard", $$FaqCard, { "question": question, "answer": answer })}`)} </div>`)} </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Faq/FaqCards.astro", void 0);

const $$TestimonialsFaq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Testimonial and FAQ sections", "description": "All of the Testimonial and FAQ sections included with the Amplify theme" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<hr class="pt-20"> ${renderComponent($$result2, "TestimonialsMarquee", $$TestimonialsMarquee, {})} ${renderComponent($$result2, "FaqAccordions", $$FaqAccordions, {})} ${renderComponent($$result2, "TestimonialsSwiperQuotes", $$TestimonialsSwiperQuotes, {})} ${renderComponent($$result2, "FaqCards", $$FaqCards, {})} ${renderComponent($$result2, "TestimonialsColumns", $$TestimonialsColumns, {})} ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/examples/testimonials-faq.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/examples/testimonials-faq.astro";
const $$url = "/examples/testimonials-faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TestimonialsFaq,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
