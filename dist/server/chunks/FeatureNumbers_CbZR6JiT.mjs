import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Button_BaSqYn27.mjs';
import { $ as $$Badge } from './Badge_DE2wIJxu.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureCardSmall;
  const { icon, title, text, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(rest)}> <div class="hover-border-glow flex h-full flex-col rounded-xl border border-base-200 bg-base-100 p-4 dark:border-base-800 dark:bg-base-950"> <div class="flex items-start"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "size-7 text-primary-600 dark:text-primary-400", "aria-hidden": "true" })} </div> <h3 class="mt-4 text-lg font-medium tracking-tight text-base-900 dark:text-base-100"> ${title} </h3> <p class="description mt-2">${text}</p> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardSmall.astro", void 0);

const $$FeatureCardsSmall = createComponent(($$result, $$props, $$slots) => {
  const featureData = [
    {
      icon: "tabler/calendar-check",
      title: "Connect all our contacts",
      text: `Sync with your calendar apps and contacts. Google, Outlook, ProtonMail, and more.`
    },
    {
      icon: "tabler/heart",
      title: "Dashboards for all businesses",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum, reiciendis quisquam cum sunt.`
    },
    {
      icon: "tabler/cloud",
      title: "Synced to the cloud",
      text: `Your data is accessible from everywhere, syncing across all your devices.`
    },
    {
      icon: "tabler/layout-grid",
      title: "Your business intelligence, simplified",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum.`
    },
    {
      icon: "tabler/wand",
      title: "Real-time insights at your fingertips",
      text: `Data syncs across your team instantly. Real-time access, with 99.9% uptime.`
    },
    {
      icon: "tabler/api-app",
      title: "Connects to popular apps",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum, reiciendis quisquam cum sunt.`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="feature-cards-small" class="py-16 md:py-20"> <div class="site-container relative"> <div class="mx-auto mb-16 text-center md:max-w-2xl"> <!-- <div class="mx-auto mb-16 text-center md:max-w-2xl" data-aos="fade-up"> --> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Features` })} <div class="flex justify-center"> <h2 class="h2 mb-4">Super slick animations</h2> </div> <p class="description text-pretty text-lg md:text-xl">
Lorem ipsum dolor sit amet consectetur, adipisicing elit corporis.
</p> </div> <div id="trigger-small-cards" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- <div
			id="trigger-small-cards"
			class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
			data-aos="fade-up"
		> --> ${featureData.map((feature, idx) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCardSmall, { "title": feature.title, "text": feature.text, "icon": feature.icon })}`)} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureCardsSmall.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardColorText2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCardColorText2;
  const { icon, title, text, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(rest)}> <div class="flex flex-col gap-3"> <!-- <Icon name={icon} class="mt-1 h-5 w-5" aria-hidden="true" /> --> <h3 class="text-5xl font-medium tracking-tight text-primary-600 dark:text-primary-400"> ${title} </h3> <p class="description pr-2">${text}</p> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardColorText2.astro", void 0);

const $$FeatureNumbers = createComponent(($$result, $$props, $$slots) => {
  const featureData = [
    {
      icon: "tabler/calendar-check",
      title: "1000",
      text: `Businesses improved with our tools`
    },
    {
      icon: "tabler/cloud",
      title: "200TB",
      text: `Data saved by companies`
    },
    {
      icon: "tabler/user",
      title: "20K",
      text: `Users across the globe`
    },
    {
      icon: "tabler/brand-twitter",
      title: "100K",
      text: `This is a lot of Twitter followers`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="feature-numbers" class="py-16 md:py-20"> <div class="site-container"> <div class="mr-auto max-w-xl"> <div class="flex" data-aos-trigger="#feature-numbers"> <!-- <div class="flex" data-aos="fade-up" data-aos-trigger="#feature-numbers"> --> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Trusted by thousands` })} </div> <h2 class="h2" data-aos-delay=".1" data-aos-trigger="#feature-numbers"> <!-- <h2 class="h2" data-aos="fade-up" data-aos-delay=".1" data-aos-trigger="#feature-numbers"> -->
Used by developers all over the world
</h2> <!-- <p
        class="description"
        data-aos="fade-up"
        data-aos-delay=".2"
        data-aos-trigger="#feature-numbers"
      >
        Our platform is trusted by thousands of developers worldwide. Join them
        and experience the power of our tools and services today.
      </p> --> </div> <div id="feature-numbers-cards" class="mt-8 grid gap-10 gap-y-16 xs:grid-cols-2 md:mt-16 md:grid-cols-4"> ${featureData.map((feature, idx) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCardColorText2, { "title": feature.title, "text": feature.text, "icon": feature.icon })}`)} <!-- {
				featureData.map((feature, idx) => (
					<FeatureCard
						title={feature.title}
						text={feature.text}
						icon={feature.icon}
						data-aos="fade-up"
						data-aos-delay={\`\${idx * 0.25 + 0}\`}
						data-aos-trigger="#feature-numbers-cards"
					/>
				))
			} --> </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureNumbers.astro", void 0);

export { $$FeatureCardsSmall as $, $$FeatureNumbers as a };
