import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Button_BaSqYn27.mjs';
import { $ as $$Badge } from './Badge_DE2wIJxu.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from './translationUtils_XhrKexoJ.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { title, details } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hover-border-glow accordion group relative rounded-xl border border-base-200 bg-base-50 text-left font-medium text-base-900 dark:border-base-800 dark:bg-dark-bg dark:text-base-100"> <button class="accordion__button flex w-full flex-1 items-center justify-between gap-2 p-5 text-left text-base-900 transition duration-300 aria-expanded:text-base-700 dark:text-base-400 aria-expanded:dark:text-base-200" type="button"${addAttribute(`${title} accordion menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion menu content`, "aria-controls")}> ${title} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/chevron-down", "aria-hidden": "true", "class": "accordion__chevron size-6 shrink-0 -rotate-90 transition-transform" })} </button> <div${addAttribute(`${title} accordion menu content`, "id")}${addAttribute(`${title} accordion menu button`, "aria-labelledby")} class="accordion__content hidden max-h-0 overflow-hidden px-5 transition-all duration-300 ease-in-out"> <p class="description prose mb-4 mr-auto mt-1 max-w-lg leading-snug transition-[height]"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(details)}` })} </p> </div> </div> `;
}, "/home/blackridgeorg/public_html/src/components/Accordion/Accordion.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$FaqAccordions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqAccordions;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const faqData = getTranslatedData("faqData", currLocale);
  return renderTemplate`${maybeRenderHead()}<section id="faq-accordions" class="overflow-hidden py-20 md:py-28"> <div class="site-container grid gap-10 md:grid-cols-2 md:gap-16"> <div class="mr-auto max-w-lg md:max-w-none"> <!-- <div class="mr-auto max-w-lg md:max-w-none" data-aos="fade-right"> --> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`FAQ` })} <h2 class="h2">Provide some additional information with this FAQ Accordion.</h2> <!-- <p class="description mt-6 md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
        consequuntur doloremque saepe, laboriosam excepturi cumque nostrum
        tempora perferendis perspiciatis.
      </p> --> </div> <div class="flex flex-col gap-3"> <!-- <div class="flex flex-col gap-3" data-aos="fade-left"> --> ${faqData.map(({ question, answer }) => renderTemplate`${renderComponent($$result, "Accordion", $$Accordion, { "title": question, "details": answer })}`)} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Faq/FaqAccordions.astro", void 0);

export { $$FaqAccordions as $ };
