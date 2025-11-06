/* empty css                                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, b as createAstro } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$FeatureCardsSmall, a as $$FeatureNumbers } from '../../chunks/FeatureNumbers_CbZR6JiT.mjs';
import { $ as $$FeatureCardsSmall2, a as $$FeatureIntegrations } from '../../chunks/FeatureIntegrations_CH0kI9v2.mjs';
import { $ as $$FeatureCardMedium } from '../../chunks/FeatureCardMedium_DWXleBNV.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_Ct7febRF.mjs';
import { a as $$Icon, $ as $$Button } from '../../chunks/Button_BaSqYn27.mjs';
import { $ as $$Badge } from '../../chunks/Badge_DE2wIJxu.mjs';
import { h as heroImage } from '../../chunks/storm-2_B1WdmwJn.mjs';
import { v as video } from '../../chunks/placeholder-space_Bvf7_apZ.mjs';
/* empty css                                       */
import { g as getRelativeLocaleUrl } from '../../chunks/translationUtils_XhrKexoJ.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { s as sideImage, $ as $$FeatureCodeToggle, a as $$FeatureSteps } from '../../chunks/FeatureCodeToggle_BIlforRs.mjs';
export { renderers } from '../../renderers.mjs';

const $$FeatureCardsMedium = createComponent(($$result, $$props, $$slots) => {
  const featureData = [
    {
      icon: "tabler/wand",
      title: "Real-time insights",
      text: `Data syncs across your team instantly. Real-time access, with 99.9% uptime.`
    },
    {
      icon: "tabler/calendar-check",
      title: "Connect all our contacts",
      text: `Sync with your calendar apps and contacts. Google, Outlook, ProtonMail, and more.`
    },
    {
      icon: "tabler/heart",
      title: "Dashboards for all businesses",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus
            rerum.`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="feature-cards-medium" class="overflow-hidden py-12 md:py-16"> <div class="site-container"> <div id="trigger-medium-cards" class="grid gap-4 md:grid-cols-3"> <!-- <div id="trigger-medium-cards" class="grid gap-4 md:grid-cols-3" data-aos="fade-up"> --> ${featureData.map((feature, idx) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCardMedium, { "title": feature.title, "text": feature.text, "icon": feature.icon })}`)} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureCardsMedium.astro", void 0);

const $$FeatureVideo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="feature-video" class="overflow-x-clip py-16 md:py-20" data-astro-cid-stpaqwrg> <div class="site-container" data-astro-cid-stpaqwrg> <div class="mx-auto max-w-5xl" data-astro-cid-stpaqwrg> <div class="flex justify-center" data-astro-cid-stpaqwrg> ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-stpaqwrg": true }, { "default": ($$result2) => renderTemplate`Video` })} </div> <div class="mx-auto flex max-w-2xl justify-center text-center" data-astro-cid-stpaqwrg> <h2 class="h2 relative mx-4" data-astro-cid-stpaqwrg>How we can help you</h2> </div> <div class="relative mx-auto mt-10 flex max-w-4xl justify-center" data-astro-cid-stpaqwrg> <!-- Button to play video --> <button class="group relative h-full rounded-xl border border-base-200 dark:border-base-800" aria-label="play video" id="feature-video__play-button" data-astro-cid-stpaqwrg> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": "logo", "loading": "lazy", "height": 1200, "class": "z-10 mx-auto rounded-xl", "data-astro-cid-stpaqwrg": true })} <div class="absolute left-0 top-0 m-auto flex h-full w-full items-center justify-center" data-astro-cid-stpaqwrg> <div class="relative m-auto aspect-square h-[20%] max-h-16 md:max-h-20" data-astro-cid-stpaqwrg> <!-- background glow of play button --> <div class="absolute inset-2 z-10 rounded-full bg-primary-500/70 motion-safe:animate-ping" data-astro-cid-stpaqwrg></div> <!-- play button --> <div class="relative z-20 h-full w-full rounded-full border-2 border-primary-400 bg-base-900 p-2 text-base-200 transition-all duration-300 group-hover:bg-base-800 sm:p-4" data-astro-cid-stpaqwrg> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/player-play", "class": "m-auto aspect-square h-full w-full", "aria-hidden": "true", "data-astro-cid-stpaqwrg": true })} </div> </div> </div> </button> <!-- html video. Shown when play button is pressed --> <div id="feature-video__video-items" class="fixed inset-0 z-40 hidden h-screen w-screen" data-astro-cid-stpaqwrg> <div class="relative flex h-full w-full items-center justify-center" data-astro-cid-stpaqwrg> <!-- backdrop button to close video --> <button id="feature-video__backdrop-button" class="absolute inset-0 z-30 h-full w-full bg-base-900 transition-all" data-astro-cid-stpaqwrg></button> <!-- Video --> <div class="site-container relative m-auto h-fit w-fit max-w-[1000px] p-3 sm:p-6" data-astro-cid-stpaqwrg> <!-- HTML video example --> <video id="feature-video__video" class="relative z-30 w-full max-w-[1000px] rounded-xl" loop controls muted playsinline preload="metadata" data-astro-cid-stpaqwrg> <source${addAttribute(video, "src")} type="video/mp4" data-astro-cid-stpaqwrg> </video> <!-- X button to close video --> <button id="feature-video__close-button" aria-label="close video" class="group absolute right-0 top-0 z-30 h-7 w-7 rounded-full border-2 border-base-50 transition-all hover:border-primary-400" data-astro-cid-stpaqwrg> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/x", "class": "m-auto aspect-square h-full max-h-14 w-full text-base-50 transition group-hover:text-primary-400", "aria-hidden": "true", "data-astro-cid-stpaqwrg": true })} </button> </div> </div> </div> </div> </div> </div> </section>  `;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureVideo.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardSideImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCardSideImage;
  const { badge, image, title, buttonText, href, description, imageSide, ...rest } = Astro2.props;
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto grid gap-8 rounded-xl md:grid-cols-2 md:gap-12 lg:gap-16"> <!-- text --> <div class="col-span-1 flex items-center"> <div class="md:py-6"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`${badge}` })} <div class="flex"> <h2 class="h2">${title}</h2> </div> <div> <p class="description mr-auto mt-2 max-w-md text-pretty"> ${description} </p> </div> <div class="z-20 mt-8 flex"> ${renderComponent($$result, "Button", $$Button, { "variant": "outline", "href": getRelativeLocaleUrl(currLocale, href), "arrow": "right" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> </div> </div> <!-- image --> <div class="h-full overflow-hidden rounded-xl border border-base-200 dark:border-base-800"> ${renderComponent($$result, "Image", $$Image, { "class": "min-h-full w-auto object-cover", "src": image, "alt": title, "height": 700 })} </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardSideImage.astro", void 0);

const $$FeatureSideImage = createComponent(($$result, $$props, $$slots) => {
  const featureData = [
    {
      badge: "the best",
      image: sideImage,
      title: "Highest quality",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/registration",
      buttonText: "Get Started"
    },
    {
      badge: "around",
      image: heroImage,
      title: "Guaranteed satisfaction",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/registration",
      buttonText: "Get Started"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="feature-side-image" class="my-12 overflow-hidden py-12"> <div class="site-container"> <!-- <div class="mx-auto mb-16 text-center md:max-w-4xl" data-aos="fade-up">
      <h2 class="h2 mb-4">The best choice for your needs</h2>
    </div> --> <div class="flex flex-col gap-16 md:gap-24"> ${featureData.map((feature, idx) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCardSideImage, { "badge": feature.badge, "title": feature.title, "description": feature.description, "image": feature.image, "imageSide": idx % 2 === 0 ? "right" : "left", "href": feature.href, "buttonText": feature.buttonText })}`)} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureSideImage.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Feature sections", "description": "All of the feature sections included with the Amplify theme" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<hr class="pt-16"> ${renderComponent($$result2, "FeatureCodeToggle", $$FeatureCodeToggle, {})} ${renderComponent($$result2, "FeatureSteps", $$FeatureSteps, {})} ${renderComponent($$result2, "FeatureCardsSmall", $$FeatureCardsSmall, {})} ${renderComponent($$result2, "FeatureNumbers", $$FeatureNumbers, {})} ${renderComponent($$result2, "FeatureVideo", $$FeatureVideo, {})} ${renderComponent($$result2, "FeatureCardsSmall2", $$FeatureCardsSmall2, {})} ${renderComponent($$result2, "FeatureIntegrations", $$FeatureIntegrations, {})} ${renderComponent($$result2, "FeatureSideImage", $$FeatureSideImage, {})} ${renderComponent($$result2, "FeatureCardsMedium", $$FeatureCardsMedium, {})} ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/examples/features.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/examples/features.astro";
const $$url = "/examples/features";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Features,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
