/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, F as Fragment } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { a as $$Icon, $ as $$Button } from '../../chunks/Button_BaSqYn27.mjs';
import { g as getRelativeLocaleUrl } from '../../chunks/translationUtils_XhrKexoJ.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$PricingOnePrice } from '../../chunks/PricingOnePrice_DVTj1Cxe.mjs';
import { $ as $$PricingTable } from '../../chunks/PricingTable_CcEryxjB.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$PricingThreeCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PricingThreeCards;
  const pricingData = [
    {
      name: "Basic",
      description: "Essential features for beginners. Get started with ease",
      featured: false,
      price: {
        monthly: 29,
        yearly: 19
      },
      features: ["Basic Features", "1 user", "2 GB Free Access", "Limited Support"],
      href: "/registration",
      linkText: "Get Started"
    },
    {
      name: "Professional",
      description: "Perfect for solo professionals. Unlock advanced features",
      featured: true,
      price: {
        monthly: 49,
        yearly: 39
      },
      features: ["Pro features", "Up to 10 users", "50 GB Free Access", "Priority support"],
      href: "/registration",
      linkText: "Get Started"
    },
    {
      name: "Enterprise",
      description: "Scale your business faster. Comprehensive plan for large companies",
      featured: false,
      price: {
        monthly: 99,
        yearly: 79
      },
      features: ["Pro features", "Unlimited Users", "200 GB Free Access", "Premium Support"],
      href: "/registration",
      linkText: "Get Started"
    }
  ];
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="py-16 md:py-20"> <div class="site-container relative"> <div class="flex justify-center"> <!-- <Badge>Pricing</Badge> --> </div> <div class="flex justify-center"> <h2 class="h2 inline text-center">A plan for every business</h2> </div> <!-- Toggle switch for monthly or yearly pricing --> <div class="mt-6 flex justify-center"> <label for="pricing-plan__toggle" class="relative inline-flex cursor-pointer select-none items-center"> <input type="checkbox" name="pricing-plan__toggle" id="pricing-plan__toggle" class="pricing-plan__toggle sr-only" aria-label="Toggle between monthly and yearly pricing"> <span class="description flex items-center">Monthly</span> <span class="pricing-plan__slider mx-4 flex h-7 w-[56px] items-center rounded-full border border-base-300 bg-base-100 p-1 duration-200 dark:border-base-700 dark:bg-base-900"> <span class="pricing-plan__dot size-5 rounded-full bg-base-800 duration-200 dark:bg-base-200"></span> </span> <span class="description flex items-center">Yearly</span> </label> </div> <!-- works for 3 pricing plans, adjust grid cols here to support more or less --> <div class="mx-auto mt-16 grid w-full gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3"> ${pricingData.map((plan) => renderTemplate`<div class="pricing-plan w-full"> <div${addAttribute(["relative flex h-full flex-col justify-between rounded-xl border bg-base-100 p-8 text-center dark:bg-base-950", [
    {
      "border-primary-300 before:absolute before:inset-0.5 before:-z-10 before:rounded-xl before:bg-blue-500 before:blur": plan.featured === true
    },
    {
      "border-base-200 dark:border-base-800": plan.featured !== true
    }
  ]], "class:list")}> <div class=""> <h3${addAttribute(["mb-8 text-lg font-medium tracking-tight", [
    {
      "text-primary-600 dark:text-primary-400": plan.featured === true
    },
    {
      "text-base-800 dark:text-base-300": plan.featured !== true
    }
  ]], "class:list")}> ${plan.name} </h3> ${plan.price.custom === true ? (
    // if custom price, show "Custom" instead of price
    renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <h4> <span class="text-4xl font-medium tracking-tight">Custom</span> </h4> <span aria-hidden="true" class="description invisible inline-block tracking-tight">
per user, per month
</span> ` })}`
  ) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="pricing-plan__monthly-price"> <h4 class="text-4xl font-medium tracking-tight">
$${plan.price.monthly} / mo
</h4> <span class="description inline-block text-sm tracking-tight">
(paid monthly)
</span> </div> <div class="pricing-plan__yearly-price hidden"> <h4 class="text-4xl font-medium tracking-tight">$${plan.price.yearly} / mo</h4> <span class="description inline-block text-sm tracking-tight">
(paid yearly)
</span> </div> ` })}`} <div class="mt-8 border-y border-base-200 py-8 dark:border-base-800"> <p${addAttribute(["description mx-auto max-w-xs tracking-tight", [
    {
      "text-base-800 dark:text-base-300": plan.featured === true
    }
  ]], "class:list")}> ${plan.description} </p> </div> <ul class="py-8"> ${plan.features.map((feature) => renderTemplate`<li class="mb-2.5 flex flex-wrap items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/check", "class": "size-5 text-primary-600 dark:text-primary-400", "aria-hidden": "true" })} <span${addAttribute(["font-medium tracking-tight", [
    {
      "text-base-800 dark:text-base-300": plan.featured !== true
    }
  ]], "class:list")}> ${feature} </span> </li>`)} </ul> </div> ${renderComponent($$result, "Button", $$Button, { "class": "mb-0", "variant": plan.featured === true ? "primary" : "outline", "href": getRelativeLocaleUrl(currLocale, plan.href) }, { "default": ($$result2) => renderTemplate`${plan.linkText}` })} </div> </div>`)} </div> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/Pricing/PricingThreeCards.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$PricingFourCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingFourCards;
  const pricingData = [
    {
      name: "Basic",
      description: "Essential features for beginners. Get started with ease",
      price: {
        monthly: 29,
        yearly: 19
      },
      features: ["Basic Features", "1 user", "2 GB Free Access", "Limited Support"],
      href: "/registration",
      linkText: "Get Started"
    },
    {
      name: "Professional",
      description: "Perfect for solo professionals. Unlock advanced features",
      featured: true,
      price: {
        monthly: 49,
        yearly: 39
      },
      features: ["Pro features", "Up to 10 users", "50 GB Free Access", "Priority support"],
      href: "/registration",
      linkText: "Get Started"
    },
    {
      name: "Enterprise",
      description: "Scale your business faster. Comprehensive plan",
      price: {
        monthly: 99,
        yearly: 79
      },
      features: ["Pro features", "Unlimited Users", "200 GB Free Access", "Premium Support"],
      href: "/registration",
      linkText: "Get Started"
    },
    {
      name: "Contact Us",
      description: "For bespoke solutions tailored to your business needs",
      price: {
        custom: true
      },
      features: ["White Glove Onboarding", "All Features", "unlimited Users", "Dedicated support"],
      href: "/contact-us",
      linkText: "Contact Us"
    }
  ];
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="py-16 md:py-20"> <div class="relative mx-auto max-w-7xl px-4"> <div class="flex justify-center"> <!-- <Badge>Pricing</Badge> --> </div> <div class="flex justify-center"> <h2 class="h2 inline text-center">A plan for every business</h2> </div> <!-- Toggle switch for monthly or yearly pricing --> <div class="mt-6 flex justify-center"> <label for="pricing-plan__toggle" class="relative inline-flex cursor-pointer select-none items-center"> <input type="checkbox" name="pricing-plan__toggle" id="pricing-plan__toggle" class="pricing-plan__toggle sr-only" aria-label="Toggle between monthly and yearly pricing"> <span class="description flex items-center">Monthly</span> <span class="pricing-plan__slider mx-4 flex h-7 w-[56px] items-center rounded-full border border-base-300 bg-base-100 p-1 duration-200 dark:border-base-700 dark:bg-base-900"> <span class="pricing-plan__dot size-5 rounded-full bg-base-800 duration-200 dark:bg-base-200"></span> </span> <span class="description flex items-center">Yearly</span> </label> </div> <!-- works for 3 pricing plans, adjust grid cols here to support more or less --> <div class="mx-auto mt-16 grid w-full gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-4"> ${pricingData.map((plan) => renderTemplate`<div class="pricing-plan w-full"> <div${addAttribute(["relative flex h-full flex-col justify-between rounded-xl border bg-base-100 p-8 text-center dark:bg-base-950", [
    {
      "border-primary-300 before:absolute before:inset-0.5 before:-z-10 before:rounded-xl before:bg-blue-500 before:blur": plan.featured === true
    },
    {
      "border-base-200 dark:border-base-800": plan.featured !== true
    }
  ]], "class:list")}> <div class=""> <h3${addAttribute(["mb-8 text-lg font-medium tracking-tight", [
    {
      "text-primary-600 dark:text-primary-400": plan.featured === true
    },
    {
      "text-base-800 dark:text-base-300": plan.featured !== true
    }
  ]], "class:list")}> ${plan.name} </h3> ${plan.price.custom === true ? (
    // if custom price, show "Custom" instead of price
    renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <h4> <span class="text-4xl font-medium tracking-tight">Custom</span> </h4> <span aria-hidden="true" class="description invisible inline-block tracking-tight">
per user, per month
</span> ` })}`
  ) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="pricing-plan__monthly-price"> <h4 class="text-4xl font-medium tracking-tight">
$${plan.price.monthly} / mo
</h4> <span class="description inline-block text-sm tracking-tight">
(paid monthly)
</span> </div> <div class="pricing-plan__yearly-price hidden"> <h4 class="text-4xl font-medium tracking-tight">$${plan.price.yearly} / mo</h4> <span class="description inline-block text-sm tracking-tight">
(paid yearly)
</span> </div> ` })}`} <div class="mt-8 border-y border-base-200 py-8 dark:border-base-800"> <p${addAttribute(["description mx-auto max-w-xs tracking-tight", [
    {
      "text-base-800 dark:text-base-300": plan.featured === true
    }
  ]], "class:list")}> ${plan.description} </p> </div> <ul class="py-8"> ${plan.features.map((feature) => renderTemplate`<li class="mb-2.5 flex flex-wrap items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/check", "class": "size-5 text-primary-600 dark:text-primary-400", "aria-hidden": "true" })} <span${addAttribute(["font-medium tracking-tight", [
    {
      "text-base-800 dark:text-base-300": plan.featured !== true
    }
  ]], "class:list")}> ${feature} </span> </li>`)} </ul> </div> ${renderComponent($$result, "Button", $$Button, { "class": "mb-0", "variant": plan.featured === true ? "primary" : "outline", "href": getRelativeLocaleUrl(currLocale, plan.href) }, { "default": ($$result2) => renderTemplate`${plan.linkText}` })} </div> </div>`)} </div> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/Pricing/PricingFourCards.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pricing sections", "description": "All of the pricing sections included with the Amplify theme" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<hr class="pt-20"> ${renderComponent($$result2, "PricingThreeCards", $$PricingThreeCards, {})} ${renderComponent($$result2, "PricingTable", $$PricingTable, {})} ${renderComponent($$result2, "PricingOnePrice", $$PricingOnePrice, {})} ${renderComponent($$result2, "PricingFourCards", $$PricingFourCards, {})} ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/examples/pricing.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/examples/pricing.astro";
const $$url = "/examples/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Pricing,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
