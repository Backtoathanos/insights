import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$Icon } from './Button_BaSqYn27.mjs';
import { g as getRelativeLocaleUrl } from './translationUtils_XhrKexoJ.mjs';
import { $ as $$Badge } from './Badge_DE2wIJxu.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$PricingOnePrice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingOnePrice;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const pricingData = {
    name: "Solo",
    description: "All features for one low monthly price.",
    price: {
      monthly: 19
    },
    cardBullets: [
      "Price Per User",
      "Unlimited Projects",
      "No Attribution Required",
      "150+ Integrations",
      "Email Support"
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="overflow-clip py-16 lg:py-20"> <div class="site-container"> <div class="grid gap-10 md:grid-cols-2 lg:gap-20"> <div class="mx-auto flex h-full max-w-lg flex-col md:mr-auto"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Pricing` })} <h2 class="h2">Elevate your brand with a beautiful website.</h2> <p class="description mt-4 text-lg tracking-tight">
Simple one plan pricing that fits for everyone. No hidden fees, no extra charges.
</p> </div> <div class="relative mx-auto w-full max-w-lg rounded-xl border border-primary-300 bg-base-100 p-8 before:absolute before:inset-0.5 before:-z-10 before:rounded-md before:bg-blue-500 before:blur md:ml-auto md:max-w-md lg:p-12 dark:bg-base-950"> <h3 class="mb-6 text-lg font-medium tracking-tight text-primary-600 dark:text-primary-400"> ${pricingData.name} </h3> <p class="mt-6 text-4xl font-medium tracking-tight">
From $${pricingData.price.monthly} / mo
</p> <p class="description mx-auto mt-2 tracking-tight"> ${pricingData.description} </p> <div class="relative z-10"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "class": "mt-8", "href": getRelativeLocaleUrl(currLocale, "/registration") }, { "default": ($$result2) => renderTemplate`
Get Started
` })} </div> <p class="mt-8">What you'll get</p> <ul class="mt-2"> ${pricingData.cardBullets.map((bullet) => renderTemplate`<li class="flex items-center py-1.5"> <div class="mr-2 inline-block"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/point", "class": "size-4", "aria-hidden": "true" })} </div> <span class="description font-medium tracking-tight">${bullet}</span> </li>`)} </ul> </div> </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Pricing/PricingOnePrice.astro", void 0);

export { $$PricingOnePrice as $ };
