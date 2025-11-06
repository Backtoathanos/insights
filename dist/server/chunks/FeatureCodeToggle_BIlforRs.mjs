import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { g as getRelativeLocaleUrl, b as getCollection } from './translationUtils_XhrKexoJ.mjs';
import { $ as $$Button, a as $$Icon } from './Button_BaSqYn27.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { $ as $$Badge } from './Badge_DE2wIJxu.mjs';
/* empty css                            */

const sideImage = new Proxy({"src":"/_astro/storm-1.J06fJ63d.webp","width":1344,"height":896,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/storm-1.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$FeatureSteps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureSteps;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const featureData = [
    {
      title: "Secured Payments",
      description: `Use a re-use tons of responsive section to create the perfect layout.`
    },
    {
      title: "Download the Code",
      description: `Use a re-use tons of responsive section to create the perfect layout.`
    },
    {
      title: "Start using Amplify",
      description: `Use a re-use tons of responsive section to create the perfect layout.`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="feature-steps" class="site-container overflow-hidden py-16 md:py-20"> <div class="grid gap-10 md:grid-cols-2"> <div class="w-full"> <div class="md:max-w-lg"> <div class="flex"> <h2 class="h2 mb-10">Three easy steps</h2> </div> <div class="mb-8 flex flex-col gap-8" id="feature-steps-trigger"> ${featureData.map((feature, idx) => renderTemplate`<div class="w-full">  <div class="flex flex-wrap gap-8"> <div class="w-auto"> <div class="mb-3 flex size-12 items-center justify-center rounded-full border border-base-200 bg-base-50 text-lg font-bold text-primary-600 dark:border-base-800 dark:bg-base-950 dark:text-primary-400"> <span class="">${idx + 1}</span> </div> </div> <div class="flex-1"> <div class="md:max-w-xs"> <h3 class="mb-3 text-xl font-semibold tracking-tight">${feature.title}</h3> <p class="description font-medium">${feature.description}</p> </div> </div> </div> </div>`)} </div> <div class="mx-auto flex justify-start"> <!-- <div
					class="mx-auto flex justify-start"
					data-aos="fade-right"
					data-aos-trigger="#feature-steps-trigger"
					data-aos-delay={0.75}
				> --> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "arrow": "right", "href": getRelativeLocaleUrl(currLocale, "signup").replace(/\/$/, "") }, { "default": ($$result2) => renderTemplate`
Get Started
` })} </div> </div> </div> <div class="overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": sideImage, "class": "h-full w-auto rounded-2xl border border-base-200 object-cover dark:border-base-800", "alt": "best value", "loading": "lazy", "width": 550, "densities": [1.5, 2] })} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureSteps.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCodeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCodeToggle;
  const codeToggles = await getCollection("codeToggles", ({ data }) => {
    return data.draft !== true;
  });
  const codeToggleData = await Promise.all(
    codeToggles.map(async (codeToggle) => {
      const { language, order, icon } = codeToggle.data;
      const { Content } = await codeToggle.render();
      return { language, order, icon, code: Content };
    })
  );
  codeToggleData.sort((a, b) => a.order - b.order);
  return renderTemplate`${maybeRenderHead()}<section id="feature-code-toggle" class="overflow-clip py-16 md:py-20" data-astro-cid-qaiegojv> <div class="mx-auto max-w-4xl px-6" data-astro-cid-qaiegojv> <div class="mx-auto max-w-2xl text-center" id="code-toggle-trigger" data-astro-cid-qaiegojv> <!-- <div class="mx-auto max-w-2xl text-center" data-aos="fade-left" id="code-toggle-trigger"> --> ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-qaiegojv": true }, { "default": ($$result2) => renderTemplate`Code for everyone` })} <div data-astro-cid-qaiegojv> <h2 class="h2 inline" data-astro-cid-qaiegojv>Simple integration</h2> </div> <p class="description mt-4 text-pretty text-xl tracking-tight" data-astro-cid-qaiegojv>
Showcase how you can use your tool in all sorts of different languages.
</p> </div> <!-- <div
			class="code-toggle mt-12 w-full overflow-clip rounded-2xl border border-base-800 bg-[var(--astro-code-color-background)] dark:bg-dark-bg"
			data-aos="fade-left"
			data-aos-trigger="#code-toggle-trigger"
			data-aos-delay=".3"
		> --> <div class="code-toggle mt-12 w-full overflow-clip rounded-2xl border border-base-800 bg-[var(--astro-code-color-background)] dark:bg-dark-bg" data-astro-cid-qaiegojv> <div class="tabs flex justify-start gap-2 overflow-x-scroll border-b border-base-800 p-4" data-astro-cid-qaiegojv> ${codeToggleData.map((codeToggle, idx) => renderTemplate`<button${addAttribute(`code toggle ${idx}`, "id")} class="code-toggle__tab relative flex flex-nowrap items-center gap-1 rounded-md border border-base-800 bg-[var(--astro-code-color-background)] px-2 py-1 text-base-200 transition duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-blue-500 before:opacity-0 before:blur before:transition hover:border-base-700 dark:bg-dark-bg dark:text-base-400"${addAttribute(idx, "data-tab")} aria-expanded="false" aria-haspopup="true"${addAttribute(`code content ${idx}`, "aria-controls")} data-astro-cid-qaiegojv> ${codeToggle.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": codeToggle.icon, "class": "code-toggle__icon size-4", "aria-hidden": "true", "data-astro-cid-qaiegojv": true })}`} <span data-astro-cid-qaiegojv>${codeToggle.language}</span> </button>`)} </div> <div class="code-window h-96 bg-[var(--astro-code-color-background)]" data-astro-cid-qaiegojv> <div class="relative z-10 h-full overflow-hidden" data-astro-cid-qaiegojv> ${codeToggleData.map((codeToggle, idx) => renderTemplate`<div${addAttribute(`code content ${idx}`, "id")} class="code-toggle__content prose absolute inset-x-0 z-10 hidden h-full max-w-none opacity-0 transition-all duration-300"${addAttribute(idx, "data-tab")}${addAttribute(`code toggle ${idx}`, "aria-labelledby")} data-astro-cid-qaiegojv>  ${renderComponent($$result, "codeToggle.code", codeToggle.code, { "data-astro-cid-qaiegojv": true })} </div>`)} </div> </div> </div> </div> </section>  <!-- note: some styling had to be done in src/styles/prose.scss --> `;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureCodeToggle.astro", void 0);

export { $$FeatureCodeToggle as $, $$FeatureSteps as a, sideImage as s };
