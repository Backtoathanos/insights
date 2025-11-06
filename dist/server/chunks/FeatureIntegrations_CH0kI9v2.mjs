import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Button_BaSqYn27.mjs';
import { $ as $$Badge } from './Badge_DE2wIJxu.mjs';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardSmall2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureCardSmall2;
  const { title, text, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(rest)}> <div class="h-full"> <div class="flex gap-3"> <div class="relative mb-auto rounded-full border border-primary-600 bg-base-100 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-blue-500 before:opacity-0 before:blur dark:border-primary-300 dark:bg-base-950 before:dark:opacity-100"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/check", "class": "size-8 shrink-0 p-1", "aria-hidden": "true" })} </div> <div class="flex flex-col items-start"> <h3 class="inline text-lg font-medium text-base-900 dark:text-base-100"> ${title} </h3> <p class="description mt-2">${text}</p> </div> </div> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardSmall2.astro", void 0);

const $$FeatureCardsSmall2 = createComponent(($$result, $$props, $$slots) => {
  const featureData = [
    {
      title: "Connect all our contacts",
      text: `Sync with your calendar apps and contacts. Google, Outlook, ProtonMail, and more.`
    },
    {
      title: "Dashboards for all businesses",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum, reiciendis quisquam cum sunt.`
    },
    {
      title: "Synced to the cloud",
      text: `Your data is accessible from everywhere, syncing across all your devices.`
    },
    {
      title: "Your business intelligence, simplified",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum.`
    },
    {
      title: "Real-time insights at your fingertips",
      text: `Data syncs across your team instantly. Real-time access, with 99.9% uptime.`
    },
    {
      title: "Connects to popular apps",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum, reiciendis quisquam cum sunt.`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="feature-cards-small-2" class="overflow-hidden py-16 md:py-20"> <div class="site-container relative"> <div class="mb-16 mr-auto md:max-w-4xl"> <h2 class="h2 inline" id="trigger-cards-small-2">Feature Snapshot</h2> <!-- <h2 class="h2 inline" id="trigger-cards-small-2" data-aos="fade-right">Feature Snapshot</h2> --> </div> <!-- <div
			class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3"
			data-aos="fade-right"
			data-aos-delay=".3"
			data-aos-trigger="#trigger-cards-small-2"
		> --> <div class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3"> ${featureData.map((feature, idx) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCardSmall2, { "title": feature.title, "text": feature.text })}`)} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureCardsSmall2.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardIntegration = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCardIntegration;
  const { icon, company, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-[12rem] flex-shrink-0 p-3 md:w-[16rem] lg:w-[20rem]"${spreadAttributes(rest)}> <div class="hover-border-glow rounded-xl border border-base-200 bg-base-100 before:rounded-xl dark:border-base-800 dark:bg-base-950"> <div class="flex flex-col items-center p-6"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "size-12 rounded-full bg-base-50 p-px md:size-16", "aria-hidden": "true" })} <p class="mt-3 font-medium tracking-tight md:text-lg">${company}</p> </div> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardIntegration.astro", void 0);

const $$FeatureIntegrations = createComponent(($$result, $$props, $$slots) => {
  const featureData = {
    topRow: [
      {
        icon: "amplify/brands/dropbox",
        company: "Dropbox"
      },
      {
        icon: "amplify/brands/shopify",
        company: "Shopify"
      },
      {
        icon: "amplify/brands/hubspot",
        company: "Hubspot"
      },
      {
        icon: "amplify/brands/slack",
        company: "Slack"
      },
      {
        icon: "amplify/brands/shopify",
        company: "Shopify"
      },
      {
        icon: "amplify/brands/zapier",
        company: "Zapier"
      },
      {
        icon: "amplify/brands/hubspot",
        company: "Hubspot"
      }
    ],
    botRow: [
      {
        icon: "amplify/brands/intercom",
        company: "Intercom"
      },
      {
        icon: "amplify/brands/zapier",
        company: "Zapier"
      },
      {
        icon: "amplify/brands/kickstarter",
        company: "Kickstarter"
      },
      {
        icon: "amplify/brands/mailchimp",
        company: "Mailchimp"
      },
      {
        icon: "amplify/brands/dropbox",
        company: "Dropbox"
      },
      {
        icon: "amplify/brands/intercom",
        company: "Intercom"
      },
      {
        icon: "amplify/brands/hubspot",
        company: "Hubspot"
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section id="feature-integrations" class="mx-auto max-w-[1800px] overflow-x-hidden px-4 py-16 md:py-20"> <div class="site-container"> <div class="mx-auto mb-16 max-w-xl text-center"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`300+ tools available` })} <h2 class="h2 main-text-gradient">Integrate it with your favourite tools</h2> <!-- <p class="description mt-4 text-xl tracking-tight">
        Use and reuse tons of responsive sections to create the perfect layout.
        Sections are ready.
      </p> --> </div> </div> <div class="relative"> <!-- left fade-out --> <div class="absolute -left-px top-0 z-10 h-full w-[15%] bg-gradient-to-r from-base-50 from-20% to-transparent dark:from-dark-bg"></div> <!-- right fade-out --> <div class="absolute -right-px top-0 z-10 h-full w-[15%] bg-gradient-to-r from-transparent to-base-50 to-80% dark:to-dark-bg"></div> <div class="relative flex flex-col gap-0 overflow-hidden"> <!-- marquee top row --> <div class="marquee-top-integrations relative flex gap-0 overflow-hidden"> <div class="flex min-w-full shrink-0 animate-marquee-integrations items-center justify-around gap-0"> ${featureData.topRow.map((card, idx) => renderTemplate`${renderComponent($$result, "FeatureCardIntegration", $$FeatureCardIntegration, { "icon": card.icon, "company": card.company })}`)} </div> <div aria-hidden="true" class="flex min-w-full shrink-0 animate-marquee-integrations items-center justify-around gap-0"> ${featureData.topRow.map((card, idx) => renderTemplate`${renderComponent($$result, "FeatureCardIntegration", $$FeatureCardIntegration, { "icon": card.icon, "company": card.company })}`)} </div> </div> <!-- marquee bottom row --> <div class="marquee-bot-integrations relative flex gap-0 overflow-hidden"> <div class="flex min-w-full shrink-0 animate-marquee-integrations items-center justify-around gap-0 [animation-direction:reverse]"> ${featureData.botRow.map((card, idx) => renderTemplate`${renderComponent($$result, "FeatureCardIntegration", $$FeatureCardIntegration, { "icon": card.icon, "company": card.company })}`)} </div> <div aria-hidden="true" class="flex min-w-full shrink-0 animate-marquee-integrations items-center justify-around gap-0 [animation-direction:reverse]"> ${featureData.botRow.map((card, idx) => renderTemplate`${renderComponent($$result, "FeatureCardIntegration", $$FeatureCardIntegration, { "icon": card.icon, "company": card.company })}`)} </div> </div> </div> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureIntegrations.astro", void 0);

export { $$FeatureCardsSmall2 as $, $$FeatureIntegrations as a };
