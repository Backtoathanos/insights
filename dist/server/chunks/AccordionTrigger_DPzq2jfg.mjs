import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'clsx';
import 'kleur/colors';
import { a as $$Icon } from './Button_BaSqYn27.mjs';

const $$Astro$3 = createAstro("https://www.blackridgeresearch.com");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    type = "single",
    defaultValue,
    class: className,
    controlElementClass,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["solar-accordion", className], "class:list")}${addAttribute(type, "data-type")}${addAttribute(defaultValue, "data-value")}${addAttribute(controlElementClass, "data-control-element-class")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/blackridgeorg/public_html/src/components/ui-lib/accordion/Accordion.astro", void 0);

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$AccordionContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AccordionContent;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "solar-accordion-content",
    "transform-gpu overflow-hidden text-sm dark:text-white",
    "data-[state=closed]:h-0 data-[state=closed]:animate-accordion-up",
    "data-[state=open]:animate-accordion-down",
    className
  ], "class:list")} data-state="closed"> <div class="overflow-hidden px-5 pb-4 pt-0"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/ui-lib/accordion/AccordionContent.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { value, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "solar-accordion-item",
    "border-x border-b first:rounded-t-lg first:border-t last:rounded-b-lg",
    "border-base-200 dark:border-base-800",
    className
  ], "class:list")}${addAttribute(value, "data-value")} data-state="closed"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/blackridgeorg/public_html/src/components/ui-lib/accordion/AccordionItem.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$AccordionTrigger = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionTrigger;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute([
    "solar-accordion-trigger",
    "flex w-full items-center justify-between gap-4 rounded-md px-5 py-4 text-left text-base font-medium transition-colors",
    "text-left text-base-800 hover:text-base-600 dark:text-base-400 dark:hover:text-base-200",
    "[&[data-state=open]>svg]:rotate-180",
    className
  ], "class:list")} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/chevron-down", "class": "size-4 shrink-0 transition-transform duration-200" })} </button>`;
}, "/home/blackridgeorg/public_html/src/components/ui-lib/accordion/AccordionTrigger.astro", void 0);

export { $$AccordionItem as $, $$AccordionTrigger as a, $$AccordionContent as b, $$Accordion as c };
