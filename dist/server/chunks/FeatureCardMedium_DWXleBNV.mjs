import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, a as renderComponent } from './astro/server_C19coWfX.mjs';
import { a as $$Icon } from './Button_BaSqYn27.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardMedium = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCardMedium;
  const { icon, title, text, class: className, ...rest } = Astro2.props;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(rest)}> <div${addAttribute(["hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950", [className]], "class:list")}> <div class="flex justify-center py-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "size-12 text-primary-500 dark:text-primary-500", "aria-hidden": "true" })} </div> <h3 class="mt-4 text-lg font-bold tracking-tight text-base-900 md:text-xl dark:text-base-100"> ${title} </h3> <p class="description mt-4 text-pretty">${text}</p> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardMedium.astro", void 0);

export { $$FeatureCardMedium as $ };
