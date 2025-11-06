import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Button } from './Button_BaSqYn27.mjs';
import { g as getRelativeLocaleUrl } from './translationUtils_XhrKexoJ.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$PricingTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingTable;
  const pricingData = {
    plans: [
      {
        name: "Basic",
        price: {
          monthly: 11,
          yearly: 9
        }
      },
      {
        name: "Professional",
        featured: true,
        price: {
          monthly: 59,
          yearly: 49
        }
      },
      {
        name: "Enterprise",
        price: {
          monthly: 119,
          yearly: 99
        }
      }
    ],
    featureTable: [
      {
        title: "Features",
        features: [
          {
            feature: "Integrations",
            plans: [true, true, true]
          },
          {
            feature: "Connect to your database",
            plans: [true, true, true]
          },
          {
            feature: "Import and export data",
            plans: [false, true, true]
          },
          {
            feature: "Team members",
            plans: [false, "Up to 5 users", "Up to 20 users"]
          },
          {
            feature: "Data Storage",
            plans: ["Up to 5 GB", "Up to 50 GB", "Unlimited"]
          }
        ]
      },
      {
        title: "Reporting",
        features: [
          {
            feature: "Basic reports",
            plans: [true, true, true]
          },
          {
            feature: "Advanced analytics",
            plans: [false, true, true]
          },
          {
            feature: "Professional reports",
            plans: [false, true, true]
          },
          {
            feature: "Custom reports",
            plans: [false, false, true]
          }
        ]
      },
      {
        title: "Support",
        features: [
          {
            feature: "Email support",
            plans: [true, true, true]
          },
          {
            feature: "Priority support",
            plans: [false, true, true]
          },
          {
            feature: "White-glove onboarding",
            plans: [false, false, true]
          }
        ]
      }
    ]
  };
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="py-16 md:py-20"> <div class="site-container relative"> <div class="flex justify-center"> <!-- <Badge>Pricing</Badge> --> </div> <div class="flex justify-center"> <h2 class="h2 inline text-center">A plan for every business</h2> </div> <!-- Toggle switch for monthly or yearly pricing --> <div class="mt-6 flex justify-center"> <label for="pricing-plan__toggle" class="relative inline-flex cursor-pointer select-none items-center"> <input type="checkbox" name="pricing-plan__toggle" id="pricing-plan__toggle" class="pricing-plan__toggle sr-only" aria-label="Toggle between monthly and yearly pricing"> <span class="description flex items-center">Monthly</span> <span class="pricing-plan__slider mx-4 flex h-7 w-[56px] items-center rounded-full border border-base-300 bg-white p-1 duration-200 dark:border-base-700 dark:bg-base-900"> <span class="pricing-plan__dot size-5 rounded-full bg-base-800 duration-200 dark:bg-base-100"></span> </span> <span class="description flex items-center">Yearly</span> </label> </div> <!-- This is designed for 3 pricing plans --> <div class="mx-auto mt-12 grid w-full grid-cols-3 md:mt-20 lg:grid-cols-4"> <!-- pricing plan top info --> <div class="col-span-3 grid gap-3 md:grid-cols-3 lg:col-start-2 lg:gap-0"> ${pricingData.plans.map((plan, planIdx) => (
    // pricing cards
    renderTemplate`<div class="pricing-plan relative mx-auto h-full w-full max-w-sm rounded-2xl lg:rounded-b-none"> <div class="relative h-full lg:pb-0"> <div${addAttribute(["relative z-10 flex h-full flex-col rounded-b-xl rounded-t-xl lg:rounded-b-none", [
      {
        "border border-primary-600 bg-base-100 lg:border-b-0 dark:border-primary-400 dark:bg-base-950": plan.featured === true
      }
    ]], "class:list")}> <div class="mx-auto flex h-full w-full max-w-[20rem] flex-col px-6 pb-6 text-center"> <div class="flex w-full justify-center pt-6"> <h3${addAttribute(["mb-8 text-lg font-medium tracking-tight", [
      {
        "text-primary-600 dark:text-primary-400": plan.featured === true
      },
      {
        "text-base-800 dark:text-base-300": plan.featured !== true
      }
    ]], "class:list")}> ${plan.name} </h3> </div> <div class="text-center"> <p class="mt-3 font-medium"></p><div class="pricing-plan__monthly-price"> <h4 class="text-4xl font-medium tracking-tight">
$${plan.price.monthly} / mo
</h4> <span class="description inline-block text-sm tracking-tight">
(paid monthly)
</span> </div> <div class="pricing-plan__yearly-price hidden"> <h4 class="text-4xl font-medium tracking-tight">
$${plan.price.yearly} / mo
</h4> <span class="description inline-block text-sm tracking-tight">
(paid yearly)
</span> </div>  </div> <ul class="mt-4 flex w-full flex-col gap-2 lg:sr-only"> ${pricingData.featureTable.map(
      (featureGroup) => (
        // features inside cards for mobile views
        featureGroup.features.map(
          (featureRow) => featureRow.plans[planIdx] !== false && renderTemplate`<li${addAttribute([
            "flex items-start",
            {
              "opacity-90": plan.featured !== true
            }
          ], "class:list")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/check", "class": "mt-0.5 size-5 shrink-0 text-primary-600 dark:text-primary-400", "aria-hidden": "true" })} <span class="ml-2 inline text-left leading-tight"> ${featureRow.feature} <span> ${// if the feature row has a string, show it
          typeof featureRow.plans[planIdx] === "string" && renderTemplate`<span class="ml-1 text-sm text-base-700 dark:text-base-300">
(${featureRow.plans[planIdx]})
</span>`} </span> </span> </li>`
        )
      )
    )} </ul> <div class="mt-auto"> ${renderComponent($$result, "Button", $$Button, { "variant": plan.featured === true ? "primary" : "outline", "href": getRelativeLocaleUrl(currLocale, "/registration").replace(/\/$/, ""), "class": `mt-4 py-1.5` }, { "default": ($$result2) => renderTemplate`
Get Started
` })} </div> </div> </div> </div> </div>`
  ))} </div> <!-- feature rows for desktop --> <div class="col-span-4 hidden lg:block"> ${// loop over feature groups
  pricingData.featureTable.map((featureGroup) => renderTemplate`<div> <div class="grid grid-cols-4 border-b border-base-300 text-lg dark:border-base-700"> <p class="pb-2 pt-6 font-medium">${featureGroup.title}</p> ${pricingData.plans.map((plan, planIdx) => renderTemplate`<div${addAttribute(`${plan.featured === true ? "-mt-px border-x border-primary-600 bg-base-200/30 dark:border-primary-400 dark:bg-base-800/20" : ""}`, "class")}></div>`)} </div> ${featureGroup.features.map((feature) => (
    // each feature group has feature name, and data for each plan to display in the row
    renderTemplate`<div class="grid grid-cols-4 border-b border-base-300 dark:border-base-700"> <p class="py-2 opacity-90 dark:opacity-80">${feature.feature}</p> ${feature.plans.map((plan, planIdx) => renderTemplate`<div${addAttribute(["flex items-center justify-center py-2", [
      {
        "-mt-px border-x border-primary-600 bg-base-200/30 dark:border-primary-400 dark:bg-base-800/20": pricingData.plans[planIdx].featured
      }
    ]], "class:list")}> ${// if the feature row has a string, show it
    typeof feature.plans[planIdx] === "string" ? renderTemplate`<span${addAttribute(
      pricingData.plans[planIdx].featured === true ? "" : "opacity-90 dark:opacity-80",
      "class"
    )}> ${feature.plans[planIdx]} </span>` : (
      // otherwise show a checkmark if true, or a dash icon if false
      plan === false ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/minus", "class": `size-3 shrink-0 opacity-90 dark:opacity-80`, "aria-hidden": "true" })}` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/check", "class": `size-5 shrink-0 text-primary-600 dark:text-primary-400 ${pricingData.plans[planIdx].featured === true ? "" : "opcaity-90 dark:opacity-80"}`, "aria-hidden": "true" })}`
    )} </div>`)} </div>`
  ))} </div>`)} </div> </div> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/Pricing/PricingTable.astro", void 0);

export { $$PricingTable as $ };
