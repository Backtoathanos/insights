import { c as createComponent, b as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderSlot } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Button } from './Button_BaSqYn27.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$Admonition = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Admonition;
  const { variant } = Astro2.props;
  const icon = (() => {
    switch (variant) {
      case "tip":
        return "tabler/bulb";
      case "caution":
        return "tabler/alert-triangle";
      case "danger":
        return "tabler/flame";
      case "info":
        return "tabler/info-circle";
    }
  })();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "admonition my-3 rounded-lg border border-opacity-30 px-4 py-3 text-base-800 dark:text-base-200",
    {
      "border-success bg-success/10 text-success-content prose-code:bg-success/20 dark:prose-code:bg-success/20": variant === "tip"
    },
    {
      "border-warning bg-warning/10 text-warning-content prose-code:bg-warning/20 dark:prose-code:bg-warning/20": variant === "caution"
    },
    {
      "border-error bg-error/10 text-error-content prose-code:bg-error/20 dark:prose-code:bg-error/20": variant === "danger"
    },
    {
      "border-info bg-info/10 text-info-content prose-code:bg-info/20 dark:prose-code:bg-info/20": variant === "info"
    }
  ], "class:list")}> <div class="flex items-center gap-2 pb-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "size-7 text-base-800 dark:text-base-200", "aria-hidden": "true" })} <p class="0 text-sm font-bold"> ${variant.toUpperCase()} </p> </div> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/blackridgeorg/public_html/src/components/Admonition/Admonition.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$BlogCta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCta;
  const { description, buttonText, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="not-prose my-10 flex w-full flex-col items-center justify-between gap-4 rounded-md border border-base-200 bg-base-900 px-4 py-8 text-base-100 shadow-md md:flex-row md:px-8 md:py-14 dark:border-primary-500/80"> <p class="dark:main-text-gradient text-pretty text-center text-2xl font-medium md:text-start"> ${description} </p> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "class": "whitespace-nowrap", "arrow": "right", "href": href }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div>`;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/BlogCta.astro", void 0);

export { $$Admonition as $, $$BlogCta as a };
