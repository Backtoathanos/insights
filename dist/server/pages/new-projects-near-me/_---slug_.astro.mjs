/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, s as spreadAttributes, u as unescapeHTML } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { g as getRelativeLocaleUrl } from '../../chunks/translationUtils_XhrKexoJ.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_Ct7febRF.mjs';
import { a as $$Icon, $ as $$Button } from '../../chunks/Button_BaSqYn27.mjs';
import { $ as $$IndustryPopup, a as $$BookdemoPOPup, b as $$GetFreeTrailIndustry } from '../../chunks/bookdemoPOPup_DsAD73Si.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$LogoCloudMarquee } from '../../chunks/LogoCloudMarquee_Dy1r_jtq.mjs';
import { $ as $$AccordionItem, a as $$AccordionTrigger, b as $$AccordionContent, c as $$Accordion } from '../../chunks/AccordionTrigger_DPzq2jfg.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$TestimonialsColumnsBlackridge } from '../../chunks/TestimonialsColumnsBlackridge_DFNZISs-.mjs';
import { c as ctaImage } from '../../chunks/industry-cta-img_CEetQbxz.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro$e = createAstro("https://www.blackridgeresearch.com");
const $$IndustryProjectFaq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$IndustryProjectFaq;
  const { projectName } = Astro2.props;
  return renderTemplate`<!-- FAQ -->${maybeRenderHead()}<div class="site-container mt-20"> <h2 id="common-questions" class="h2 mb-6 text-pretty">
FAQs about ${projectName} projects and bids
</h2> <div class="prose max-w-none"> ${renderComponent($$result, "Accordion", $$Accordion, { "type": "single", "defaultValue": "item-1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-1" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`What is the Global Project Tracker?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate` <p>
The Global Project Tracker is a comprehensive database about construction projects
						around the world covering all phases of development.
</p> <p>
We find and track projects from the inception stage to completion encompassing all the
						major industry sectors.
</p> <p>
Each project profile includes details, such as the project description, status, scope,
						size, value, funding mode, location, major event dates, and milestones, as well as
						contact details of the project owner, contractors, and stakeholders.
</p> ` })} ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`How often is the database updated?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate` <p>
The database is updated daily, with new projects and tenders being added and updated in
						a timely manner.
</p> <p>
To make sure you have the most recent information, you should check the database often
						and sign up for alerts that will let you know about new projects and tenders that match
						your criteria.
</p> ` })} ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-3" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`Is the database only for new ${projectName} projects?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate`
No, the database includes both new construction projects (greenfield projects) and
					expansions, renovations, and upgrades to existing structures (brownfield projects).
` })} ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`Can I search for projects in a specific location?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate`
Yes, the database allows users to search for projects by location, so you can easily find
					construction industry projects and tenders in your area of interest.
` })} ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-5" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`Is the database only for construction companies?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate`
No, the database is for anyone interested in the construction industry. This includes
					manufacturers and suppliers, EPC companies/Developers/Contractors, banks and insurance
					companies, asset management, operation and maintenance (O&M) companies, logistics and
					warehousing firms, consulting companies, law firms, and investors, among others.
` })} ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-6" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`How can I subscribe to the Global Project Tracker?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate` <p>
If you are interested in subscribing to the Global Project Tracker, please contact our
						sales team via email or our contact form.
</p> <p>
If you tell us more about your requirements and goals, our team will make a proposal
						that fits your needs. Once you accept our proposal and complete the payment, we will
						send you login credentials to access the platform.
</p> <p>
A customer success specialist will also be available to show you how to use the
						platform, and a research analyst will be assigned to help you with any questions or
						problems that may come up during the active subscription period.
</p> ` })} ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-7" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`How do I submit a tender or bid through the database?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate` <p>
You will need to send an email to tender@blackridgeresearch.com to submit a tender in
						our database.
</p> <p>
Our team will share the submission guidelines to ensure your tender is live in our
						database.
</p> ` })} ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-8" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`How do you determine the price of the Global Project Tracker subscription?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate` <p>
The cost of Global Project Tracker subscription varies based on factors like the number
						of users, regions, sectors, project development stages, and additional features or
						services included in the package.
</p> <p>
Contact our sales team for personalized pricing options and to choose the ideal package
						for your requirements.
</p> ` })} ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": "item-9" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`Can I add more users to my subscription later?` })} ${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate` <p>Yes, it is possible to add more users to your subscription anytime.</p> <p>
For each extra user you add to your subscription, you will usually have to pay a
						per-user fee.
</p> ` })} ` })} ` })} </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/IndustryProjectFaq.astro", void 0);

const $$Astro$d = createAstro("https://www.blackridgeresearch.com");
const $$IndustryProjectRegions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$IndustryProjectRegions;
  const { projectName } = Astro2.props;
  const { industry } = Astro2.props;
  const { url } = Astro2;
  const country = industry?.country ?? "";
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const obj = {
    "country": country,
    "secondSlug": pathSegments[1],
    "thirdSlug": pathSegments[2],
    "fourthSlug": pathSegments[3]
  };
  const regionCoveredFlagsReq = await fetch("https://adminapi.blackridgeresearch.com/fetchRegionCoveredFlags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj)
  });
  const regionCoveredFlagsData = await regionCoveredFlagsReq.json();
  let flagsAccordionData = [];
  let displayRegions = false;
  if (regionCoveredFlagsData.data.isGlobal == true) {
    if (regionCoveredFlagsData.data.EuropeRegionCountries.length > 0 || regionCoveredFlagsData.data.MiddleEastCountries.length > 0 || regionCoveredFlagsData.data.NorthAmericaCountries.length > 0 || regionCoveredFlagsData.data.AsiaPacificCountries.length > 0 || regionCoveredFlagsData.data.SouthAmericaCountries.length > 0 || regionCoveredFlagsData.data.AfriceRegionCountries.length > 0) {
      displayRegions = true;
    }
    if (regionCoveredFlagsData.data.EuropeRegionCountries.length > 0) {
      flagsAccordionData.push({
        title: "Europe",
        data: regionCoveredFlagsData.data.EuropeRegionCountries
      });
    }
    if (regionCoveredFlagsData.data.MiddleEastCountries.length > 0) {
      flagsAccordionData.push({
        title: "Middle East",
        data: regionCoveredFlagsData.data.MiddleEastCountries
      });
    }
    if (regionCoveredFlagsData.data.NorthAmericaCountries.length > 0) {
      flagsAccordionData.push({
        title: "North America",
        data: regionCoveredFlagsData.data.NorthAmericaCountries
      });
    }
    if (regionCoveredFlagsData.data.AsiaPacificCountries.length > 0) {
      flagsAccordionData.push({
        title: "Asia-Pacific",
        data: regionCoveredFlagsData.data.AsiaPacificCountries
      });
    }
    if (regionCoveredFlagsData.data.SouthAmericaCountries.length > 0) {
      flagsAccordionData.push({
        title: "South America",
        data: regionCoveredFlagsData.data.SouthAmericaCountries
      });
    }
    if (regionCoveredFlagsData.data.AfriceRegionCountries.length > 0) {
      flagsAccordionData.push({
        title: "Africa",
        data: regionCoveredFlagsData.data.AfriceRegionCountries
      });
    }
  } else {
    if (regionCoveredFlagsData.data.mainCountryData.length > 0) {
      displayRegions = true;
      let data = {
        title: country,
        data: regionCoveredFlagsData.data.mainCountryData
      };
      flagsAccordionData.push(data);
    }
  }
  return renderTemplate`<!-- Regions -->${displayRegions && renderTemplate`${maybeRenderHead()}<div class="site-container mt-20"><div class="max-w-none"><div class="mb-6 text-2xl font-medium md:text-3xl"><h2>Regions Covered</h2></div>${renderComponent($$result, "Accordion", $$Accordion, { "type": "multiple", "defaultValue": "item-1" }, { "default": ($$result2) => renderTemplate`${flagsAccordionData.map((flagsData, index) => renderTemplate`${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "value": `item-${index + 1}` }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "AccordionTrigger", $$AccordionTrigger, {}, { "default": ($$result4) => renderTemplate`${flagsData.title}` })}${renderComponent($$result3, "AccordionContent", $$AccordionContent, {}, { "default": ($$result4) => renderTemplate`<div class="grid md:grid-cols-6">${flagsData.data.map((country2) => renderTemplate`<div class="flex items-center gap-2 border-b border-base-200 py-2 dark:border-base-800">${renderComponent($$result4, "Icon", $$Icon, { "name": `flags/${country2.flag_url.replace(".svg", "")}`, "class": "h-auto w-8 overflow-hidden rounded-sm" })}<a${addAttribute(`../../${pathSegments[1]}/${pathSegments[2]}/${country2.url}`, "href")} class="transition-opacity hover:opacity-80">${country2.country}</a></div>`)}</div>` })}` })}`)}` })}</div></div>`}`;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/IndustryProjectRegions.astro", void 0);

const $$Astro$c = createAstro("https://www.blackridgeresearch.com");
const $$IndustryProjectTeaser = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$IndustryProjectTeaser;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const { capitalizedTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="site-container mt-20 overflow-x-scroll"> <table class="w-full border-collapse border-y border-gray-200 text-left dark:border-gray-800"> <thead class="bg-base-800 text-base-100 dark:bg-base-200 dark:text-base-900"> <tr> <th class="border-y border-gray-200 p-2 dark:border-gray-800">Project Name</th> <th class="border-y border-gray-200 p-2 dark:border-gray-800">Description</th> <th class="border-y border-gray-200 p-2 text-center dark:border-gray-800">Project Value/CapEx</th> <th class="border-y border-gray-200 p-2 text-center dark:border-gray-800">Location</th> <th class="border-y border-gray-200 p-2 text-center dark:border-gray-800">Project Owner Details</th> <th class="border-y border-gray-200 p-2 text-center dark:border-gray-800">Contact Details</th> </tr> </thead> <tbody> <tr> <td class="w-1/5 border-y border-gray-200 p-2 dark:border-gray-800"> <p>${capitalizedTitle}</p> <button class="text-secondary-700 hover:underline dark:text-secondary-300  open-popup">View Project</button> </td> <td class="w-1/5 border-y border-gray-200 p-2 dark:border-gray-800"> <div class="relative -ml-2 overflow-hidden"> <p aria-hidden="true" class="pr-auto max-w-[200px] select-none py-2 pl-2 text-xs text-base-700 blur-sm md:text-sm dark:text-base-300">
Here is a description of the project. Everything you need to know to make decisions...
</p> </div> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70 hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70 hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70 hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70 hover:opacity-90" })}</a> </td> </tr> <tr> <td class="border-y border-gray-200 p-2 dark:border-gray-800"> <p>${capitalizedTitle}</p> <button class="text-secondary-700 hover:underline dark:text-secondary-300  open-popup"${addAttribute(getRelativeLocaleUrl(currLocale, "/contact-us").replace(/\/$/, ""), "href")}>View Project</button> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800"> <div class="relative -ml-2 overflow-hidden"> <p aria-hidden="true" class="pr-auto max-w-[200px] select-none py-2 pl-2 text-xs text-base-700 blur-sm md:text-sm dark:text-base-300">
Here is a description of the project. Everything you need to know to make decisions...
</p> </div> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70 hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70 hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70 hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70 hover:opacity-90" })}</a> </td> </tr> <tr> <td class="h-[10px]"></td> </tr> <tr class=""> <td colspan="6" class="rounded-md bg-base-100 dark:bg-base-800"> <div class="grid w-full grid-cols-3"> <div class="col-span-2 my-16 ml-4 px-4 md:ml-16"> <p class="mb-10 mr-auto max-w-lg text-3xl font-bold md:text-4xl">
Subscribe to see more projects in your target area
</p> <div class="flex"> ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "class": "open-popup mr-16 mt-3 whitespace-nowrap", "arrow": "right" }, { "default": ($$result2) => renderTemplate`Book a Demo Now - it's free` })} </div> </div> <div class="flex items-center justify-center"> <canvas data-src="https://lottie.host/1205ea99-365d-4366-a7e9-b0d2a573e047/PSPA2w6P9J.lottie" data-background="transparent"${addAttribute(1, "data-speed")}${addAttribute(3e3, "data-intermission")} style="margin:auto;" class="lottie-canvas flex aspect-square h-auto w-full max-w-[260px] dark:grayscale dark:invert" data-autoplay id="lottiePlayer1"></canvas> </div> </div> </td> </tr> <tr> <td class="h-[10px]"></td> </tr> <tr> <td class="border-y border-gray-200 p-2 dark:border-gray-800"> <p>${capitalizedTitle}</p> <button class="text-secondary-700 hover:underline dark:text-secondary-300 open-popup"${addAttribute(getRelativeLocaleUrl(currLocale, "/contact-us").replace(/\/$/, ""), "href")}>View Project</button> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800"> <div class="relative -ml-2 overflow-hidden"> <p aria-hidden="true" class="pr-auto max-w-[200px] select-none py-2 pl-2 text-xs text-base-700 blur-sm md:text-sm dark:text-base-300">
Here is a description of the project. Everything you need to know to make decisions...
</p> </div> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70  hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70  hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70  hover:opacity-90" })}</a> </td> <td class="border-y border-gray-200 p-2 dark:border-gray-800 open-popup"> <a href="javascript:void(0)">${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/lock", "class": "m-auto size-6 opacity-70  hover:opacity-90" })}</a> </td> </tr> </tbody> </table> </div>`;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/IndustryProjectTeaser.astro", void 0);

const $$Astro$b = createAstro("https://www.blackridgeresearch.com");
const $$CtaBlackridgeIndustry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CtaBlackridgeIndustry;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section class="dark w-full overflow-hidden bg-dark-bg dark:bg-base-900"> <div class="site-container gap-8 md:grid md:h-[350px] md:grid-cols-2"> <div class="flex h-full flex-col justify-center px-4 text-start text-white"> <h2 class="mb-8 mt-8 text-3xl font-bold md:text-5xl">
Sign up to see more projects near you.
</h2> <!-- <p class="mb-10 text-pretty text-xl opacity-90">
      Get in touch to discuss your ambitions and we’ll help you get there.
    </p> --> <div class="mb-8 flex"> ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "class": "open-popup px-7 py-4", "arrow": "right" }, { "default": ($$result2) => renderTemplate`Book a FREE Demo Now!` })} </div> </div> <div class="mb-8 ml-auto md:mb-0"> ${renderComponent($$result, "Image", $$Image, { "src": ctaImage, "alt": "How can we help background", "class": "h-full w-auto" })} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Cta/CtaBlackridgeIndustry.astro", void 0);

const $$Astro$a = createAstro("https://www.blackridgeresearch.com");
const $$NbcLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$NbcLogo;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193 41" width="193" height="41"${addAttribute(className, "class")}${spreadAttributes(rest)}> <title>nbc-news-svg</title> <style>
		.nbc-0 {
			fill: #000000;
		}
		.nbc-1 {
			fill: #ffffff;
		}
		.nbc-2 {
			fill: #0088cc;
		}
		.nbc-3 {
			fill: #6360a6;
		}
		.nbc-4 {
			fill: #b44549;
		}
		.nbc-5 {
			fill: #d76f2c;
		}
		.nbc-6 {
			fill: #ecb731;
		}
		.nbc-7 {
			fill: #64b054;
		}
	</style> <g id="Layer"> <path id="Layer" fill-rule="evenodd" class="nbc-0" d="m147.2 10.9l5.6 11.8 1.8-4.1-3.5-7.7h4.4l1.4 2.9 1.1-2.9 4.6 0.1-3.7 7.8 2 4 5.2-11.9h5l-9.8 21.8-4.4-8.9-4.4 8.9-9.9-21.8zm-96.3-0.8l13 12.2v-11.5h4.2v21.3l-13-12.5v11.8h-4.2zm19.6 0.8h8.8c1.4 0 5.3 1.1 5.4 5.2 0.1 3.1-2.5 4.6-2.5 4.6 1.4 0.6 3.5 2.2 3.5 5.5 0 3.1-2.7 5.5-5.1 5.5h-10.1zm4.2 8.3h3.3c1.2-0.1 2.2-1.1 2.2-2.5 0-1.4-1.3-2.3-2.3-2.3h-3.2zm0 9h3.8c0.9-0.1 2.6-0.9 2.6-2.8 0-1.8-1.6-2.7-2.5-2.7h-3.9v5.5zm27.1-13c-4.4-2.9-10.5 0.1-10.8 5.6-0.2 6.6 6.4 9.4 10.8 6.5v4.3c-7.9 2.9-15.1-2.7-15.1-10.7 0-6.8 7.5-12.8 15.1-9.8zm76.9 8.6c-6.3-4.2-5.8-3.8-6.2-4.5-0.5-0.7-1.8-4.5 1.2-7.7 3.1-3.2 9.2-0.4 9.2-0.4v4.1c0 0-5.2-3-6.7-0.3-1.4 2.8 4 4.4 4 4.4 0 0 3.6 2.1 3.9 4.4 0.3 2.3 0.1 6.9-3.6 7.8 0 0-3.5 1.9-8.3-0.6v-4.6c0 0 2.1 2.2 5 2.1 2.8-0.1 3.7-3.3 1.5-4.7zm-37.3-13.2v3.9h-6.9v4.6h6.9v3.9h-6.9v5h6.9v3.5h-11.5v-20.9zm-30.7-0.7l13 12.4v-11.6h4.2v21.5l-12.9-12.6v11.9h-4.3z"></path> <path id="Layer" fill-rule="evenodd" class="nbc-1" d="m42.8 31.4q-0.9 0.4-2 0.4h-28.5c-1.6-0.1-3.2-1.5-3.6-3.1-0.5-1.6 0-3.2 1-4.4 1-1 2.4-1.4 3.8-1.3-1.4-0.9-1.9-2.4-1.7-4.1 0.1-1.4 1.2-2.8 2.5-3.4 1.5-0.7 3.4-0.3 4.6 0.9-0.2-0.9-0.3-2.1 0-3 0.4-1.3 1.7-2.5 3.1-2.8 1.8-0.4 3.5 0.3 4.5 1.8 0.2 0.3 0.3 0.6 0.5 0.9 0.5-1.4 2-2.6 3.5-2.8 1.5-0.2 3 0.5 4 1.8 0.8 1.1 1 2.7 0.5 4h0.1c1.1-1 2.8-1.4 4.3-0.8 1.4 0.4 2.6 1.9 2.7 3.4 0.3 1.6-0.3 3-1.5 4.1 1.8-0.1 3.6 0.9 4.4 2.6 0.6 1.5 0.4 3.5-0.7 4.7-0.5 0.5-0.9 0.9-1.5 1.1z"></path> <path id="Layer" fill-rule="evenodd" class="nbc-2" d="m39.8 23l-10.5 7.1 3.5-8.5 1.7-3.9c0.7-1.3 2-2.1 3.4-2.1 1.3 0 2.5 0.7 3.2 1.8 0.8 1.2 0.9 3.1 0.1 4.2q-0.1 0.2-0.3 0.4-0.2 0.2-0.3 0.4-0.2 0.2-0.4 0.3-0.2 0.2-0.4 0.3z"></path> <path id="Layer" fill-rule="evenodd" class="nbc-3" d="m34.5 16.4l-5.2 12.3-0.2-1.3-1.6-10.1q0-0.3 0-0.5 0.1-0.2 0.2-0.4 0.1-0.2 0.2-0.3 0.1-0.2 0.3-0.3l0.8-0.5c0-0.1-0.2-0.2-0.3-0.2h-1.5c-0.1-1.5 0.6-2.8 1.8-3.6 1-0.6 2.4-0.8 3.5-0.3 1.4 0.6 2.3 2 2.4 3.5 0 0.6-0.1 1.2-0.3 1.7z"></path> <path id="Layer" fill-rule="evenodd" class="nbc-4" d="m24.5 28.7l-5.1-12.3c-0.5-1.3-0.3-3.1 0.6-4.1 1-1.2 2.5-1.6 3.9-1.3 1.3 0.3 2.4 1.5 2.7 2.8 0.2 0.5 0.2 1 0.1 1.6l-2.2 13.3z"></path> <path id="Layer" fill-rule="evenodd" class="nbc-5" d="m13.6 22.6c-1.1-0.9-1.6-2.2-1.4-3.6 0.2-1.4 1.3-2.8 2.6-3.2 1.4-0.4 2.9-0.1 3.9 0.9 0.4 0.4 0.7 0.9 0.9 1.4l5 12-11-7.5z"></path> <path id="Layer" fill-rule="evenodd" class="nbc-6" d="m12.4 31.3c-1.3-0.1-2.4-0.8-3-2.1-0.7-1.3-0.5-3.1 0.4-4.2 0.9-1.1 2.3-1.7 3.7-1.4 0.6 0.1 1 0.3 1.5 0.6l10.7 7.2z"></path> <path id="Layer" fill-rule="evenodd" class="nbc-7" d="m41.4 31.3c1.4-0.1 2.4-0.8 3.1-2.1 0.6-1.3 0.5-3.1-0.4-4.2-1-1.1-2.4-1.7-3.7-1.4-0.6 0.1-1.1 0.3-1.5 0.6l-10.7 7.2h13.2z"></path> </g> </svg>`;
}, "/home/blackridgeorg/public_html/src/components/LogoCloud/NbcLogo.astro", void 0);

const $$Astro$9 = createAstro("https://www.blackridgeresearch.com");
const $$FoxLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FoxLogo;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1568 669" width="1568" height="669"${addAttribute(className, "class")}${spreadAttributes(rest)}> <title>foxlogo-svg</title> <style>
		.fox-0 {
			fill: #004c97;
		}
	</style> <g id="Layer"> <path id="Layer" fill-rule="evenodd" class="fox-0" d="m402.7 0l12.4 182.9h-225.4v87.3h183.6v182.5h-185.2l0.5 216.3h-188.6v-669zm934.3 0l-81.2 144.4-79.5-144.4h-219.5l191.9 322.9-203.3 345.7 213.4 0.4 94.4-169.5 95.7 169.1h219.1l-207-347.9 188.1-320.7z"></path> <path id="Layer" fill-rule="evenodd" class="fox-0" d="m714.8 645.9c-178.5 0-322.8-144.3-322.8-322.9 0-178.6 144.3-323 322.8-323 178.5 0 322.8 144.4 322.8 323 0 178.6-144.3 322.9-322.8 322.9zm58.1-190.4v-265.3c0-30.3-26.9-57.4-57.2-57.4-30.2 0-54.7 27.1-54.7 57.4l-0.1 264.6c0 7.2 1.5 14.3 4.2 20.9 2.8 6.7 6.8 12.7 11.9 17.8 5.1 5.1 11.1 9.2 17.8 11.9 6.6 2.8 13.7 4.2 20.9 4.2 30.3 0 57.2-23.8 57.2-54.1z"></path> </g> </svg>`;
}, "/home/blackridgeorg/public_html/src/components/LogoCloud/FoxLogo.astro", void 0);

const $$Astro$8 = createAstro("https://www.blackridgeresearch.com");
const $$UpcomingProjectsFeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$UpcomingProjectsFeatureCard;
  const { title, description, lottieSrc } = Astro2.props;
  return renderTemplate`<!-- lottie animation card with text -->${maybeRenderHead()}<div class="flex gap-2 rounded-md px-4 py-4 transition-all hover:bg-base-50 hover:shadow-md dark:hover:bg-base-900"> <div class="flex items-start justify-center"> <canvas${addAttribute(lottieSrc, "data-src")} data-background="transparent"${addAttribute(1, "data-speed")}${addAttribute(3e3, "data-intermission")} class="lottie-canvas mb-auto mt-1 flex aspect-square h-auto w-[54px] dark:grayscale dark:invert" data-autoplay id="lottiePlayer1"></canvas> </div> <div> <h3 class="font-bold md:text-lg">${title}</h3> <p class="description mt-1 text-sm"> ${description} </p> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/UpcomingProjectsFeatureCard.astro", void 0);

const projectTrackerDashboard = new Proxy({"src":"/_astro/project-tracker-dashboard.C9QHp-fF.png","width":614,"height":353,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/project-tracker-dashboard.png";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://www.blackridgeresearch.com");
const $$UpcomingProjectsFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$UpcomingProjectsFeatures;
  const { industry } = Astro2.props;
  const country = industry?.country ?? "";
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 bg-primary-100/30 py-12 dark:bg-dark-bg"> <div class="site-container"> <div class="mx-auto flex max-w-[650px] items-center justify-center text-center"> <h2 class="h2">Find upcoming projects and tenders in ${country} with ease</h2> </div> <div class="mt-8 grid gap-6 md:grid-cols-3"> <div class="flex flex-col gap-8"> ${renderComponent($$result, "UpcomingProjectsFeatureCard", $$UpcomingProjectsFeatureCard, { "title": "Key Contact Details", "description": "Build a conversation with decision makers and get ahead of competitors early on", "lottieSrc": "https://lottie.host/467fa72b-902d-4d59-92cc-3c012f8a0dab/uujVEHpKVC.lottie" })} ${renderComponent($$result, "UpcomingProjectsFeatureCard", $$UpcomingProjectsFeatureCard, { "title": "Email Alerts", "description": "Stay up to-date and get important updates with customizable email alerts", "lottieSrc": "https://lottie.host/899217ca-b6d5-4cfc-927c-c280f1a53e96/8sDY7GRjGC.lottie" })} ${renderComponent($$result, "UpcomingProjectsFeatureCard", $$UpcomingProjectsFeatureCard, { "title": "Best in Industry Support", "description": "Get expert support and quick resolution of issues with our always available email, phone, and chat-based assistance", "lottieSrc": "https://lottie.host/401a0fa7-bbc9-476d-8462-db845e734d7f/1BtBYUFUzK.lottie" })} </div> <div class="py-10 md:px-6"> ${renderComponent($$result, "Image", $$Image, { "src": projectTrackerDashboard, "alt": "project tracking dashboard", "class": "h-auto w-full dark:opacity-80", "width": 400, "densities": [1.5, 2] })} </div> <div class="flex flex-col gap-8"> ${renderComponent($$result, "UpcomingProjectsFeatureCard", $$UpcomingProjectsFeatureCard, { "title": "Easy-to-use Interface", "description": "Clean and user friendly interface to quickly and easily find what you re looking for", "lottieSrc": "https://lottie.host/f83b0da4-6e99-4d77-82fd-fe28c4d0c065/URcrorUX4E.lottie" })} ${renderComponent($$result, "UpcomingProjectsFeatureCard", $$UpcomingProjectsFeatureCard, { "title": "Real-time Access to Continually Updated Data", "description": "Quickly act on new opportunities and make informed decisions.", "lottieSrc": "https://lottie.host/bf413890-210e-4fb7-9460-451b14149f02/FCcMoRshDH.lottie" })} ${renderComponent($$result, "UpcomingProjectsFeatureCard", $$UpcomingProjectsFeatureCard, { "title": "High Quality & Reliable Data", "description": "Accurate data enhances efficiency and enables to make informed decisions ", "lottieSrc": "https://lottie.host/6850b6a5-5b81-4cb6-a17e-9b8b7466b2cc/4ZppgxQLrr.lottie" })} </div> </div> <!-- featured on logos --> <h3 class="description mx-auto mt-10 max-w-xl px-4 text-center font-semibold uppercase opacity-80">
As featured on
</h3> <div class="mt-4 flex flex-wrap items-center justify-center gap-x-20 gap-y-6"> ${renderComponent($$result, "Icon", $$Icon, { "name": "logos/abc", "class": "h-16 w-auto px-10 dark:opacity-80 dark:grayscale dark:invert", "aria-label": "abc" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "logos/cbs", "class": "h-10 w-auto dark:opacity-80 dark:brightness-0 dark:contrast-100 dark:grayscale dark:invert", "aria-label": "cbs" })} ${renderComponent($$result, "FoxLogo", $$FoxLogo, { "class": "h-10 w-auto dark:opacity-80 dark:brightness-0 dark:contrast-100 dark:grayscale dark:invert", "aria-label": "fox" })} <!-- <Icon
        name="logos/fox"
        class="h-10 w-auto dark:opacity-80 dark:brightness-0 dark:contrast-100 dark:grayscale dark:invert"
        aria-label="fox"
      /> --> ${renderComponent($$result, "NbcLogo", $$NbcLogo, { "class": "h-14 w-auto dark:opacity-80 dark:grayscale dark:invert", "aria-label": "nbc" })} <!-- <Icon
        name="logos/nbc-news"
        class="h-16 w-auto dark:opacity-80 dark:brightness-0 dark:contrast-100 dark:grayscale dark:invert"
        aria-label="nbc"
      /> --> </div> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/UpcomingProjectsFeatures.astro", void 0);

const $$Astro$6 = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardMediumLottie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FeatureCardMediumLottie;
  const { icon, title, text, class: className, ...rest } = Astro2.props;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(rest)}> <div${addAttribute(["hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950", [className]], "class:list")}> <div class="flex justify-center py-4"> <div class="aspect-square rounded-full border border-base-200 p-2 dark:border-base-800"> <canvas${addAttribute(icon, "data-src")} data-background="transparent"${addAttribute(1, "data-speed")}${addAttribute(3e3, "data-intermission")} style="margin:auto;" class="lottie-canvas flex aspect-square size-12 dark:grayscale dark:invert" data-autoplay></canvas> </div> </div> <h3 class="mt-4 text-lg font-bold tracking-tight text-base-900 md:text-xl dark:text-base-100"> ${title} </h3> <p class="description mt-4 text-pretty">${text}</p> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardMediumLottie.astro", void 0);

const $$BlackRidgeIndustryCardsMedium = createComponent(($$result, $$props, $$slots) => {
  const featureData = [
    {
      icon: "/dotlottie/email.lottie",
      title: "Customized Email Alerts",
      text: `Stay informed with email alerts tailored to your preferences. Receive updates directly to your inbox that are most crucial to your business.`
    },
    {
      icon: "/dotlottie/sales-pipeline.lottie",
      title: "Integrated Sales Tools",
      text: `Streamline sales efforts with tools designed for collaborative teamwork, including opportunity assignment and note-taking functionalities.`
    },
    {
      icon: "/dotlottie/Translate.lottie",
      title: "Multi-Language Support",
      text: `Effortlessly translate the project profile into your preferred language, choosing from over 243 available languages.`
    },
    {
      icon: "/dotlottie/dashboard.lottie",
      title: "Interactive Dashboard Access",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/download.lottie",
      title: "Custom Download Option",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/share.lottie",
      title: "Ease of Project Profile Sharing",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/helpdesk.lottie",
      title: "24/5 - Priority Analyst Support",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/xls-file.lottie",
      title: "Export to Excel or CSV",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/update.lottie",
      title: "Future Platform Updates",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/settings-customization.lottie",
      title: "Customizable Platform",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/presentation.lottie",
      title: "Personalized Training and Support",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/cybersecurity.lottie",
      title: "World-Class Data Security",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/tag.lottie",
      title: "White Labeling",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/research.lottie",
      title: "Quarterly Industry Reports",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    },
    {
      icon: "/dotlottie/personnel.lottie",
      title: "Corporate Admin",
      text: `Browse our extensive collection of syndicated reports that provide crucial insights necessary to make smarter business decisions`
    }
  ];
  const firstSix = featureData.slice(0, 6);
  const theRest = featureData.slice(6);
  return renderTemplate`${maybeRenderHead()}<section id="feature-cards-medium" class="overflow-hidden py-12 md:py-16"> <div class="site-container"> <div class="flex flex-col items-center justify-center"> <h2 class="h2 text-center">Additional Features & Benefits</h2> <p class="description">Purpose-built features that solve real challenges and drive growth.</p> </div> <div id="trigger-medium-cards" class="mt-8 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-16"> ${firstSix.map((feature, idx) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCardMediumLottie, { "title": feature.title, "text": feature.text, "icon": feature.icon })}`)} <!-- {
				firstSix.map((feature, idx) => (
					<FeatureCard
						title={feature.title}
						text={feature.text}
						icon={feature.icon}
						data-aos-trigger="#trigger-medium-cards"
						data-aos-delay={0.25 * idx}
						data-aos="fade-right"
					/>
				))
			} --> </div> <div class="feature-cards-hidden sr-only mt-8 gap-4 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-16"> ${theRest.map((feature, idx) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCardMediumLottie, { "title": feature.title, "text": feature.text, "icon": feature.icon })}`)} </div> <div style="display: flex; justify-content: center;" class="business-plan-message sr-only mt-12"> <p style="display: flex; align-items: center;" class="text-gray-500"> <span style="margin-right: 8px;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <line x1="12" y1="16" x2="12" y2="12"></line> <line x1="12" y1="8" x2="12" y2="8"></line> </svg> </span>
Some features are only available in the "Enterprise Plans"
</p> </div> ${featureData.length > 6 && renderTemplate`<div class="mt-8 flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "id": "show-more-btn", "variant": "outline" }, { "default": ($$result2) => renderTemplate`
Show More
` })} </div>`} </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/Feature/BlackRidgeIndustryCardsMedium.astro", void 0);

const $$Astro$5 = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardSideImageBlackridge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FeatureCardSideImageBlackridge;
  const {
    title,
    description,
    bulletPoints,
    buttonText,
    href,
    image,
    imageSide = "right"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto grid gap-12 rounded-xl md:grid-cols-12 md:gap-16 lg:gap-24"> <!-- <div
	class="mx-auto grid gap-12 rounded-xl md:grid-cols-12 md:gap-16 lg:gap-24"
	data-aos={\`\${imageSide === "left" ? "fade-right" : "fade-left"}\`}
> --> <!-- Text Content --> <div${addAttribute(`${imageSide === "left" ? "md:order-last" : ""} md:col-span-7 flex items-center`, "class")}> <div class=""> <h3 class="h2"> ${title} </h3> <p class="description mt-4"> ${description} </p> <ul class="mt-12 space-y-6"> ${bulletPoints.map((point) => renderTemplate`<li class="flex items-start gap-x-3"> <div class="mt-1 aspect-square rounded-full bg-primary-500 p-0.5 dark:bg-primary-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/check", "class": "-ml-px size-4 text-white dark:text-black" })} </div> <span class="font-semibold">${point}</span> </li>`)} </ul> ${buttonText && href && renderTemplate`<div class="mt-12 flex"> ${renderComponent($$result, "Button", $$Button, { "id": "open-popup", "variant": "secondary", "arrow": "right", "class": "open-popup" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div>`} </div> </div> <!-- Image --> <div class="md:col-span-5"> <div class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "blackridge/image-bg", "class": "mb-auto h-auto w-full text-primary-200/30 dark:hidden" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "blackridge/image-bg-dark", "class": "mb-auto hidden h-auto w-full text-primary-900/30 dark:block" })} <div class="absolute inset-10 z-10 flex items-center justify-center overflow-hidden rounded-md"> <!-- <video  class="h-full w-auto rounded-md object-cover"></video> --> <video autoplay muted loop playsinline preload="auto"${addAttribute(image, "src")}${addAttribute(title, "alt")} class="h-full w-auto rounded-md object-cover"></video> </div> <!-- <canvas
					data-src={image}
					data-background="transparent"
					data-speed={1}
					class="lottie-canvas h-full w-auto rounded-md object-cover dark:grayscale dark:invert"
					data-autoplay></canvas> --> </div> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardSideImageBlackridge.astro", void 0);

const image1 = "/_astro/GIF_1%20(1).DdCN8916.mp4";

const image2 = "/_astro/GIF_2%20(2).DkXmhJgy.mp4";

const image3 = "/_astro/GIF_3%20(2).Bz2EhRB8.mp4";

const image4 = "/_astro/GIF_4%20(1).Bolj2Imq.mp4";

const image5 = "/_astro/GIF_5%20(2).Dpq0n4at.mp4";

const $$FeatureSideImageBlackridge = createComponent(($$result, $$props, $$slots) => {
  const featureData = [
    {
      image: image1,
      title: "Discover New Sales Opportunities Quickly",
      description: "Find new projects, tenders, and opportunities in your target area with ease. Our powerful project search and filtering tools help you quickly find the opportunities that align with your current focus.",
      bulletPoints: [
        "Use advanced filtering to help you find the opportunities you want.",
        "Find companies involved and key personnel contact information.",
        "Secure new leads, build up sales pipeline and win more business."
      ],
      href: "/contact-us",
      buttonText: "Book Free Demo Now!"
    },
    {
      image: image2,
      title: "Get Comprehensive Project Data at Your Fingertips",
      description: "Easily access in-depth project profiles to gain key insights that help you make informed decisions faster. You'll save time digging for information and grow your business faster.",
      bulletPoints: [
        "Understand the background, scope, and key facts for every project.",
        "Track project timelines, CapEx, and budget details to align your strategy.",
        "Find the project owners, and other stakeholders involved in the project",
        "Stay informed with the most recent project updates and milestones."
      ]
    },
    {
      image: image3,
      title: "Connect with the Right People",
      description: "Boost your chances of securing more projects by easily tracking opportunities and connecting with the right companies and key decision-makers.",
      bulletPoints: [
        "Learn who the decision-makers are on any project and get phone number, email ID, LinkedIn URL to maximize your outreach efforts.",
        "Access to hard-to-find verified contact details, including phone numbers and email addresses.",
        "Connect directly with project owners, developers, GCs, and architects to build lasting relationships that fuel growth and success."
      ]
    },
    {
      image: image4,
      title: "Increase Your Bid-Hit Ratio",
      description: "Turn more bids into wins. Get the strategic intelligence you need to identify and secure the most profitable tender opportunities for your business.",
      bulletPoints: [
        "Shortlist the project tenders that align with your business goals.",
        "Make positive connections with key stakeholders.",
        "Prepare and submit a winning bid.Connect directly with project owners, developers, GCs, and architects to build lasting relationships that fuel growth and success.",
        "Expand your reach and grow your business."
      ]
    },
    {
      image: image5,
      title: "Save Time & Money Resources",
      description: "Save countless hours on manually finding new projects, tenders and project updates. Our dedicated team of over 100 researchers, combined with an AI powered intelligent opportunity-tracking system, handles the heavy lifting for you.",
      bulletPoints: [
        "Eliminate manual research with our AI-powered tracking.",
        "Free-up time and focus on closing more business.",
        "Reduce costs and risk by eliminating manual processes."
      ],
      href: "/contact-us",
      buttonText: "Book Free Demo Now!"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="feature-side-image" class="my-12 overflow-hidden py-12"> <div class="site-container"> <!-- <div class="mx-auto mb-16 text-center md:max-w-4xl" data-aos="fade-up">
      <h2 class="h2 mb-4">The best choice for your needs</h2>
    </div> --> <div class="flex flex-col gap-16 md:gap-24"> ${featureData.map((feature, idx) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCardSideImageBlackridge, { "title": feature.title, "description": feature.description, "image": feature.image, "bulletPoints": feature.bulletPoints, "imageSide": idx % 2 === 0 ? "left" : "right", "href": feature.href, "buttonText": feature.buttonText })}`)} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Feature/FeatureSideImageBlackridge.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://www.blackridgeresearch.com");
const $$FeatureCardSatgeLottie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FeatureCardSatgeLottie;
  const {
    icon,
    title,
    text,
    intermission = "2000",
    customSize = "72px",
    class: className,
    ...rest
  } = Astro2.props;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<div", ' style="height: 300px"> <div', '> <div class="flex justify-center py-4"> <div class="aspect-square rounded-full border border-base-200 p-2 dark:border-base-800"> ', ' </div> </div> <h3 class="mt-4 text-lg font-bold tracking-tight text-base-900 md:text-xl dark:text-base-100"> ', ' </h3> <p class="description mt-4 text-[#64748b]">', '</p> </div> </div> <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js"><\/script>'])), maybeRenderHead(), spreadAttributes(rest), addAttribute(["hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950", [className]], "class:list"), renderComponent($$result, "dotlottie-player", "dotlottie-player", { "src": icon, "background": "transparent", "speed": "1", "class": "flex aspect-square size-12 dark:grayscale dark:invert", "intermission": intermission, "style": `width: ${customSize}; height: ${customSize}; margin: auto;`, "loop": true, "autoplay": true }), title, text);
}, "/home/blackridgeorg/public_html/src/components/FeatureCard/FeatureCardSatgeLottie.astro", void 0);

const $$Astro$3 = createAstro("https://www.blackridgeresearch.com");
const $$BlackRidgeIndustryStageCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlackRidgeIndustryStageCard;
  const { url } = Astro2;
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const stages = [
    {
      icon: "https://lottie.host/2fced90a-940a-4b4a-9340-971bb5f559ae/ugj6rNxFkE.lottie",
      title: "All Stages",
      text: "Upcoming, Tenders, Contract Awards, Under-construction, and Completed Projects.",
      href: "c",
      current: pathSegments[2] !== "c",
      intermission: 2e3
    },
    {
      icon: "https://lottie.host/1fb2fbbe-a814-498d-8d53-d14077b22a91/qt3e4HEqgw.lottie",
      title: "Upcoming",
      text: "Announced, Study, Planning, and Design/FEED stage Projects.",
      href: "announced-upcoming",
      current: pathSegments[2] !== "announced-upcoming",
      intermission: 2e3
    },
    {
      icon: "https://lottie.host/399adfd1-87d2-4668-ab06-dee6747723c2/LgceKfJmhu.lottie",
      title: "Tenders",
      text: "Pre-qualification, Main Contract Bid, and Bid Evaluation Projects.",
      href: "tender-rfp-rfq-bid",
      current: pathSegments[2] !== "tender-rfp-rfq-bid",
      intermission: 5e3
    },
    {
      icon: "https://lottie.host/62c47ed6-7ffc-4d75-88d6-412fff32cfa7/E2zBBHDRhi.lottie",
      title: "Contract Awards",
      text: "Recent Project Awards",
      href: "contract-award",
      current: pathSegments[2] !== "contract-award",
      intermission: 2e3
    },
    {
      icon: "https://lottie.host/5bc2414a-faf5-4df4-b823-c55da0a1e0dc/yPnIdXE2MJ.lottie",
      title: "Under-construction",
      text: "Projects currently in pre-construction and under-construction.",
      href: "ongoing",
      current: pathSegments[2] !== "ongoing",
      intermission: 5e3
    },
    {
      icon: "https://lottie.host/f97b13e2-bf7b-47ea-b57a-020d48845cfc/zda6y1q8YO.lottie",
      title: "Completed",
      text: "Projects that have been successfully completed and are operational.",
      href: "completed-commissioned-operational",
      current: pathSegments[2] !== "completed-commissioned-operational",
      intermission: 8e3
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 py-12 md:py-16 dark:bg-black"> <div class="site-container"> <!-- Remove this section heading --> <!-- <div class="mb-12 flex flex-col items-center justify-center">
			<h2 class="h2 text-center">Stages Covered</h2>
		</div> --> <!-- Grid starts here --> <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12"> <!-- Use heading as first grid item --> <div class="text-center md:flex md:min-h-[300px] md:flex-col md:items-center md:justify-center"> <h2 class="text-4xl font-bold text-base-900 dark:text-base-100">Stages Covered</h2> </div> <!-- Render the cards except current one --> ${stages.filter((stage) => stage.current).map((stage) => renderTemplate`<a${addAttribute(`../${stage.href}/${pathSegments[3] || ""}`, "href")} class="block"> ${renderComponent($$result, "FeatureCardSatgeLottie", $$FeatureCardSatgeLottie, { "title": stage.title, "text": stage.text, "icon": stage.icon, "intermission": stage.title === "Completed" ? "8000" : "2000", "customSize": stage.title === "Completed" ? "87px" : "72px" })} </a>`)} </div> </div> </section>`;
}, "/home/blackridgeorg/public_html/src/components/Feature/BlackRidgeIndustryStageCard.astro", void 0);

const industryHeader = new Proxy({"src":"/_astro/industry-header.Ds5W_cmF.jpg","width":400,"height":390,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/industry-header.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$RegionProjects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RegionProjects;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const { projectName } = Astro2.props;
  const { industry } = Astro2.props;
  const latitude = industry?.latitude ?? "";
  const longitude = industry?.longitude ?? "";
  const country = industry?.country ?? "";
  const stage = industry?.stage ?? "";
  const pathElements = industry?.page_title ? industry?.page_title.split("/") : [];
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary-100/30 py-10 dark:bg-dark-bg" data-astro-cid-xe5zwwj2> <div class="site-container grid gap-x-6 gap-y-20 md:grid-cols-2" data-astro-cid-xe5zwwj2> <div id="displayProjectFromOtherRegions" data-astro-cid-xe5zwwj2> <h3 class="h3 font-semibold" data-astro-cid-xe5zwwj2>Projects in other regions</h3> <ul class="mt-3 grid max-h-[312px] gap-2 overflow-y-scroll rounded-md bg-base-50 p-4 dark:bg-base-900" id="projectFromOtherRegions" data-astro-cid-xe5zwwj2> <!-- {projectFromOtherRegions.map((feature, idx) => (
				<li><a href={getRelativeLocaleUrl(currLocale, \`/new-projects-near-me/\${feature.page_title}\`).replace(/\\/$/, "")} class="region-project-link">{feature.header_title.replace(/(Find the Latest|Find All the|Find|with Ease\\.|Upcoming|Ongoing)/g,'').replace('<span>','').replace('</span>','')}</a>
			</li>
			  ))} --> </ul> </div> <!-- global projects in other sectors --> <div id="displayProjectFromOtherSectors" data-astro-cid-xe5zwwj2> <h3 class="h3 font-semibold" data-astro-cid-xe5zwwj2>${country} Projects in other Sectors</h3> <ul class="mt-3 grid max-h-[312px] gap-2 overflow-y-scroll rounded-md bg-base-50 p-4 dark:bg-base-900" id="projectFromOtherSectors" data-astro-cid-xe5zwwj2> <!-- {projectFromOtherSectors.data.map((feature, idx) => (
				<li><a href={getRelativeLocaleUrl(currLocale, \`/new-projects-near-me/\${feature.page_title}\`).replace(/\\/$/, "")} class="region-project-link">{feature.header_title.replace(/(Find the Latest|Find All the|Find|with Ease\\.|Upcoming|Ongoing)/g,'').replace('<span>','').replace('</span>','')}</a>
			</li>
			  ))}		 --> </ul> </div> </div> </section> <input type="hidden" name="reg_latitude" id="reg_latitude"${addAttribute(latitude, "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_longitude" id="reg_longitude"${addAttribute(longitude, "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_country" id="reg_country"${addAttribute(country, "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_stage" id="reg_stage"${addAttribute(stage, "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_path0" id="reg_path0"${addAttribute(pathElements[0], "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_path1" id="reg_path1"${addAttribute(pathElements[1], "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_sector" id="reg_sector"${addAttribute(industry?.sector, "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_sector2" id="reg_sector2"${addAttribute(industry?.sector2, "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_sector3" id="reg_sector3"${addAttribute(industry?.sector3, "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_sector4" id="reg_sector4"${addAttribute(industry?.sector4, "value")} data-astro-cid-xe5zwwj2> <input type="hidden" name="reg_url" id="reg_url"${addAttribute(Astro2.url.origin + getRelativeLocaleUrl(currLocale, `/new-projects-near-me/`).replace(/\/$/, ""), "value")} data-astro-cid-xe5zwwj2>  `;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/RegionProjects.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$IndustryProjectLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IndustryProjectLayout;
  const { industry } = Astro2.props;
  const header_title = industry?.header_title ?? "Default Title";
  industry?.header_desc ?? "Default Title";
  industry?.page_title;
  const meta_title = industry?.meta_title;
  const meta_desc = industry?.meta_desc;
  const nid = industry?.nid;
  const capitalize = (str) => {
    if (!str) return "";
    return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  const formattedTitle = industry?.page_title?.replace(/-/g, " ")?.split("/")[0]?.trim() ?? "";
  const capitalizedTitle = capitalize(formattedTitle).replace("Database", "");
  const currLocale = getLocaleFromUrl(Astro2.url);
  let dynamicSector = "";
  let projectStatusName = "";
  if (industry.sector4 == "") {
    dynamicSector = industry.sector3;
    if (industry.sector3 == "") {
      dynamicSector = industry.sector2;
      if (industry.sector2 == "") {
        dynamicSector = industry.sector;
      }
    }
  } else {
    dynamicSector = industry.sector4;
  }
  const pathSegments = Astro2.url.pathname.split("/").filter(Boolean);
  let dynamicUrlSector = pathSegments[1];
  if (pathSegments[2] == "announced-upcoming") {
    projectStatusName = "Upcoming";
  } else if (pathSegments[2] == "ongoing") {
    projectStatusName = "Ongoing";
  } else if (pathSegments[2] == "completed-commissioned-operational") {
    projectStatusName = "Completed";
  } else if (pathSegments[2] == "tender-rfp-rfq-bid") {
    projectStatusName = "Tenders";
  } else if (pathSegments[2] == "contract-award") {
    projectStatusName = "Contract Award";
  } else if (pathSegments[2] == "c") {
    projectStatusName = "All Stages";
  }
  return renderTemplate(_a || (_a = __template(["", ' <input type="hidden" name="urlpath" id="urlpath"', ' data-astro-cid-ayxajyrl> <input type="hidden" name="industrynid" id="industrynid"', ' data-astro-cid-ayxajyrl> <input type="hidden" name="url" id="url"', ' data-astro-cid-ayxajyrl>    <!-- Client-side script --> <script>\n	// Get the path without query string\n	const cleanPath = window.location.pathname;\n\n	// Combine with origin to form full URL\n	const newUrl = `${window.location.origin}${cleanPath}`;\n\n	// Update the URL (remove query params)\n	window.history.replaceState({}, "", newUrl);\n<\/script> '], ["", ' <input type="hidden" name="urlpath" id="urlpath"', ' data-astro-cid-ayxajyrl> <input type="hidden" name="industrynid" id="industrynid"', ' data-astro-cid-ayxajyrl> <input type="hidden" name="url" id="url"', ' data-astro-cid-ayxajyrl>    <!-- Client-side script --> <script>\n	// Get the path without query string\n	const cleanPath = window.location.pathname;\n\n	// Combine with origin to form full URL\n	const newUrl = \\`\\${window.location.origin}\\${cleanPath}\\`;\n\n	// Update the URL (remove query params)\n	window.history.replaceState({}, "", newUrl);\n<\/script> '])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "type": "general", "title": meta_title, "navTheme": "dark", "preconnect": true, "description": meta_desc, "data-astro-cid-ayxajyrl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-ayxajyrl> ${renderComponent($$result2, "IndustryPopup", $$IndustryPopup, { "data-astro-cid-ayxajyrl": true })} </div> <div data-astro-cid-ayxajyrl> ${renderComponent($$result2, "BookdemoPOPup", $$BookdemoPOPup, { "data-astro-cid-ayxajyrl": true })} ${renderComponent($$result2, "GetFreeTrail_industry", $$GetFreeTrailIndustry, { "data-astro-cid-ayxajyrl": true })} </div>  <div class="dark relative w-full overflow-hidden bg-black" data-astro-cid-ayxajyrl> <div class="absolute inset-0 -right-40 my-auto h-[390px] w-auto overflow-hidden opacity-50 md:right-0 lg:opacity-100" data-astro-cid-ayxajyrl> ${renderComponent($$result2, "Image", $$Image, { "src": industryHeader, "alt": "background", "loading": "eager", "height": 390, "densities": [1, 1.5], "class": "ml-auto h-full w-auto", "aria-hidden": "true", "data-astro-cid-ayxajyrl": true })} </div> <div class="site-container relative z-10 pt-10" data-astro-cid-ayxajyrl> <div class="h-full min-h-[32rem] w-full gap-x-2 gap-y-10 py-12 text-center lg:px-12 lg:py-20 2xl:px-0" data-astro-cid-ayxajyrl> <div class="flex h-full items-center" data-astro-cid-ayxajyrl> <div class="mx-auto flex max-w-[1100px] flex-col items-center" data-astro-cid-ayxajyrl> <!-- <p
              class="mb-4 inline-block font-bold tracking-tight text-secondary-400 md:text-lg"
            >
              Global Project Tracker Service
            </p> --> <!-- heading --> <h1 class="text-pretty text-2xl font-bold leading-tight text-base-100 sm:text-4xl md:text-5xl md:leading-tight" id="industry-title" data-astro-cid-ayxajyrl>${unescapeHTML(header_title)}</h1> <!-- description --> <!-- <p
							class="description mx-auto mt-6 max-w-[950px] text-sm font-medium opacity-90 md:text-base"
							id="industry-description"
							set:html={industry.header_desc.replace(/\\\\r\\\\n/g, "")}
						/> --> <p class="mx-auto mt-6 max-w-[950px] text-sm font-medium text-base-200 opacity-90 md:text-base" id="industry-description" data-astro-cid-ayxajyrl>${unescapeHTML(industry.header_desc.replace(/\\r\\n/g, "").replace(/\\'/g, "'").replace(
    /<p>/g,
    '<p class="mt-6 max-w-[950px] text-sm font-medium text-base-200 opacity-90 md:text-base">'
  ))}</p> <!-- CTA --> <div class="mt-6 flex flex-col gap-4 sm:flex-row" data-astro-cid-ayxajyrl> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "href": "", "class": "open-popup relative whitespace-nowrap before:absolute before:inset-0 before:-z-10 before:transform-gpu before:animate-ring-expand before:rounded-md before:ring-secondary-300 dark:before:ring-secondary-950", "data-astro-cid-ayxajyrl": true }, { "default": ($$result3) => renderTemplate`${"Book a Demo Now - it's free"}` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "outline", "class": "open-second-popup whitespace-nowrap", "data-astro-cid-ayxajyrl": true }, { "default": ($$result3) => renderTemplate`Get Free Limited Trial` })} <!-- <Button
								type="submit"
  href={\`\${Astro.url.pathname}/subscribe\`}
								variant="secondary"
								class="whitespace-nowrap"
							>
								Subscribe
							</Button> --> </div> <ul class="mt-8 flex flex-wrap justify-center gap-6 text-xs md:text-sm" data-astro-cid-ayxajyrl> <li class="flex items-center gap-1.5" data-astro-cid-ayxajyrl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler/circle-check", "class": "size-4 rounded-full text-green-600", "data-astro-cid-ayxajyrl": true })} <span class="description opacity-90" data-astro-cid-ayxajyrl>Free! No String Attached</span> </li> <li class="flex items-center gap-1.5" data-astro-cid-ayxajyrl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler/circle-check", "class": "size-4 rounded-full text-green-600", "data-astro-cid-ayxajyrl": true })} <span class="description opacity-90" data-astro-cid-ayxajyrl>Personalized</span> </li> <li class="flex items-center gap-1.5" data-astro-cid-ayxajyrl> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler/circle-check", "class": "size-4 rounded-full text-green-600", "data-astro-cid-ayxajyrl": true })} <span class="description opacity-90" data-astro-cid-ayxajyrl>15 to 20 minutes</span> </li> </ul> </div> </div> <div class="mx-auto mt-12 flex aspect-video max-w-[700px] items-center overflow-hidden" data-astro-cid-ayxajyrl> <!-- height is 720px, so max height should be 2x that --> <div id="iframe-container" class="aspect-video h-auto w-full" data-src="https://sendspark.com/embed/e6rv0a6xa7lex6iqkvdawmk1qgzoxtiz" data-title="Global Project Tracker Service" data-astro-cid-ayxajyrl></div> </div> </div> </div> </div>  ${renderComponent($$result2, "LogoCloudMarquee", $$LogoCloudMarquee, { "data-astro-cid-ayxajyrl": true })} <div class="site-container mt-6" data-astro-cid-ayxajyrl> <nav aria-label="breadcrumb" class="flex flex-wrap items-center text-sm" data-astro-cid-ayxajyrl> <ol class="flex flex-wrap items-center space-x-2 text-gray-600" data-astro-cid-ayxajyrl> <li data-astro-cid-ayxajyrl><a href="#" class="transition hover:text-blue-500" data-astro-cid-ayxajyrl>Home</a></li> <li data-astro-cid-ayxajyrl>/</li> <li data-astro-cid-ayxajyrl><a href="#" class="transition hover:text-blue-500" data-astro-cid-ayxajyrl>Global Project Tracker</a></li> <li data-astro-cid-ayxajyrl>/</li> <li class="relative" data-astro-cid-ayxajyrl> <button type="button" class="flex items-center font-medium text-blue-600 transition" id="bcSectorSelection" aria-haspopup="true" aria-expanded="false" data-astro-cid-ayxajyrl> <span data-astro-cid-ayxajyrl>${dynamicSector}</span> <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ayxajyrl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-ayxajyrl></path> </svg> </button> <div id="bcSectorData" style="display:none;width:300px;height:300px" class="absolute left-0 z-10 mt-2 w-40 overflow-scroll rounded border bg-white p-2 pt-0 shadow dark:bg-black" data-astro-cid-ayxajyrl> <ul class="bc-sector-list-industrypoc bg-white dark:bg-black" id="bcsectorSearch" style="width:100%" data-astro-cid-ayxajyrl> <li class="search-box w-full dark:bg-black" data-astro-cid-ayxajyrl> <input type="text" id="bc-sector-search-industrypoc" placeholder="Sector..." class="bc-sector-search-industrypoc w-full rounded-lg dark:bg-black" data-astro-cid-ayxajyrl> </li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../administrative-and-government-building-facility-database/c/global" data-astro-cid-ayxajyrl>
Administrative Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../agriculture-and-forestry-building-database/c/global" data-astro-cid-ayxajyrl>
Agriculture and Forestry Building
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../aircraft-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Aircraft Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../airport-terminal-facility-database/c/global" data-astro-cid-ayxajyrl>
Airport Terminal
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../aluminium-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Aluminium Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../amusement-park-and-recreational-center-construction-database/c/global" data-astro-cid-ayxajyrl>
Amusement Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../animal-shelter-facility-construction-database/c/global" data-astro-cid-ayxajyrl>
Animal Shelters
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../armory-building-ammunition-dump-construction-database/c/global" data-astro-cid-ayxajyrl>
Armories
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../assembly-plant-database/c/global" data-astro-cid-ayxajyrl>
Assembly Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../athletic-and-sports-stadium-complex-construction-and-renovation-database/c/global" data-astro-cid-ayxajyrl>
Athletic Fields
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../athletics-running-track-facility-construction-database/c/global" data-astro-cid-ayxajyrl>
Athletic Tracks
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../automobile-manufacturing-assembly-plant-database/c/global" data-astro-cid-ayxajyrl>
Automobile Manufacturing Units
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../barrack-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Barracks
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../battery-energy-storage-system-bess-database/c/global" data-astro-cid-ayxajyrl>
Battery Energy Storage
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../battery-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Battery Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../berth-mooring-facility-database/c/global" data-astro-cid-ayxajyrl>
Berth
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../beverage-production-plant-database/c/global" data-astro-cid-ayxajyrl>
Beverage Production Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../brewery-and-distillery-database/c/global" data-astro-cid-ayxajyrl>
Brewery and Distillery Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../biomass-power-plant-database/c/global" data-astro-cid-ayxajyrl>
Biomass Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../blue-hydrogen-h2-generation-production-plant-database/c/global" data-astro-cid-ayxajyrl>
Blue Hydrogen
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../bridge-viaduct-construction-database/c/global" data-astro-cid-ayxajyrl>
Bridge
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../broadcasting-station-and-tv-studio-construction-database/c/global" data-astro-cid-ayxajyrl>
Broadcasting Stations and Studios
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../bungalow-construction-database/c/global" data-astro-cid-ayxajyrl>
Bungalows
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../bus-terminal-building-and-facility-construction-database/c/global" data-astro-cid-ayxajyrl>
Bus Terminal
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../bio-gas-plant-database/c/global" data-astro-cid-ayxajyrl>
Bio Gas plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../cannery-food-processing-facility-database/c/global" data-astro-cid-ayxajyrl>
Cannery
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../casino-database/c/global" data-astro-cid-ayxajyrl>
Casinos
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../causeway-construction-database/c/global" data-astro-cid-ayxajyrl>
Causeways
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../cement-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Cement Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../chemical-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Chemical Manufacturing Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../church-cathedral-building-construction-and-renovation-database/c/global" data-astro-cid-ayxajyrl>
Church
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../cinema-hall-movie-theater-construction-database/c/global" data-astro-cid-ayxajyrl>
Cinema
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../civic-center-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Civic Centers
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../clinic-facility-database/c/global" data-astro-cid-ayxajyrl>
Clinics
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../coal-power-plant-database/c/global" data-astro-cid-ayxajyrl>
Coal Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../coastal-shore-protection-system-database/c/global" data-astro-cid-ayxajyrl>
Shore Protection System
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../carbon-capture-utilization-and-storage-ccus-database/c/global" data-astro-cid-ayxajyrl>
CCUS
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../cold-storage-plant-database/c/global" data-astro-cid-ayxajyrl>
Cold Storage Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../college-and-university-construction-database/c/global" data-astro-cid-ayxajyrl>
College and University
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../commercial-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Commercial Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../compressed-air-energy-storage-caes-database/c/global" data-astro-cid-ayxajyrl>
Compressed-Air Energy Storage (CAES)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../concentrated-solar-power-csp-database/c/global" data-astro-cid-ayxajyrl>
Concentrated Solar Power (CSP)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../condominium-database/c/global" data-astro-cid-ayxajyrl>
Condominium
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../construction-industry-and-sector-database/c/global" data-astro-cid-ayxajyrl>
Construction
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../conventional-commuter-railways-database/c/global" data-astro-cid-ayxajyrl>
Conventional Commuter Railway
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../cottage-database/c/global" data-astro-cid-ayxajyrl>
Cottages
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../crude-oil-refinery-plant-database/c/global" data-astro-cid-ayxajyrl>
Refineries
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../dam-reservoir-construction-database/c/global" data-astro-cid-ayxajyrl>
Dams
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../data-center-facility-database/c/global" data-astro-cid-ayxajyrl>
Data Centers
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../desalination-plant-database/c/global" data-astro-cid-ayxajyrl>
Desalination Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../detached-housing-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Detached Housing
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../district-cooling-plant-dcp-database/c/global" data-astro-cid-ayxajyrl>
District Cooling Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../dormitory-building-database/c/global" data-astro-cid-ayxajyrl>
Dormitories
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../drainage-system-construction-database/c/global" data-astro-cid-ayxajyrl>
Drainage System
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../dredging-database/c/global" data-astro-cid-ayxajyrl>
Dredging
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../drivein-movie-facility-database/c/global" data-astro-cid-ayxajyrl>
Drive-in Movie Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../duplex-apartment-construction-database/c/global" data-astro-cid-ayxajyrl>
Duplex Apartments
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../educational-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Educational Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../electric-power-transmission-and-distribution-t-and-d-infrastructure-database/c/global" data-astro-cid-ayxajyrl>
Electricity Transmission Infrastructure
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../electricity-transmission-tunnels-database/c/global" data-astro-cid-ayxajyrl>
Electricity Transmission Tunnels
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../electronics-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Electronics Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../ev-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
EV Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../energy-infrastructure-database/c/global" data-astro-cid-ayxajyrl>
Energy
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../furniture-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Furniture Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../fire-station-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Fire Stations
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../flood-control-and-protection-system-database/c/global" data-astro-cid-ayxajyrl>
Flood Control & Protection System
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../flyover-and-overpass-construction-database/c/global" data-astro-cid-ayxajyrl>
Flyovers
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../flywheel-energy-storage-fes-database/c/global" data-astro-cid-ayxajyrl>
Flywheel Energy Storage (FES)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../floating-offshore-wind-fow-power-plants-farms-windmill-parks-database/c/global" data-astro-cid-ayxajyrl>
Floating Offshore Wind
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../food-processing-plant-database/c/global" data-astro-cid-ayxajyrl>
Food Processing Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../fpso-and-fso-oil-and-gas-database/c/global" data-astro-cid-ayxajyrl>
FPSO & FSO
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../fsru-database/c/global" data-astro-cid-ayxajyrl>
FSRU
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../freight-and-material-railway-database/c/global" data-astro-cid-ayxajyrl>
Freight and Other Material Railway
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../automobile-garage-and-service-station-database/c/global" data-astro-cid-ayxajyrl>
Garages and Service Stations
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../gas-power-plant-database/c/global" data-astro-cid-ayxajyrl>
Gas Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../gas-processing-plant-database/c/global" data-astro-cid-ayxajyrl>
Gas Processing Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../gasification-plant-database/c/global" data-astro-cid-ayxajyrl>
Gasification Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../geothermal-power-plant-database/c/global" data-astro-cid-ayxajyrl>
Geothermal Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../glass-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Glass
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../golf-course-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Golf Course
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../green-hydrogen-h2-generation-production-plant-database/c/global" data-astro-cid-ayxajyrl>
Green Hydrogen
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../gridscale-utility-scale-energy-storage-system-ess-database/c/global" data-astro-cid-ayxajyrl>
Energy Storage
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../harbor-database/c/global" data-astro-cid-ayxajyrl>
Harbors
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../health-and-athletic-club-building-database/c/global" data-astro-cid-ayxajyrl>
Health & Athletic Club
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../healthcare-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Healthcare Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../heavy-machinery-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Heavy Machinery Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../high-rise-apartment-building-database/c/global" data-astro-cid-ayxajyrl>
High-Rise Apartments
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../holiday-vacation-home-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Holiday Homes
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../hospital-building-construction-and-renovation-database/c/global" data-astro-cid-ayxajyrl>
Hospitals
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../hotel-and-accommodation-building-database/c/global" data-astro-cid-ayxajyrl>
Hotels
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../hsr-high-speed-railway-database/c/global" data-astro-cid-ayxajyrl>
High Speed Railway
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../hybrid-power-generation-plant-database/c/global" data-astro-cid-ayxajyrl>
Hybrid Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../hydroelectric-power-plant-database/c/global" data-astro-cid-ayxajyrl>
Hydroelectric Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../hydrogen-h2-generation-production-plant-database/c/global" data-astro-cid-ayxajyrl>
Hydrogen
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../hyperloop-transportation-technology-database/c/global" data-astro-cid-ayxajyrl>
Hyperloop
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../ice-rink-construction-database/c/global" data-astro-cid-ayxajyrl>
Ice Rink
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../incinerator-waste-to-energy-wte-plant-database/c/global" data-astro-cid-ayxajyrl>
Incinerator (Waste-to-Energy)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../industrial-furnace-database/c/global" data-astro-cid-ayxajyrl>
Furnace
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../industrial-gas-production-plant-database/c/global" data-astro-cid-ayxajyrl>
Industrial Gasses
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../industrial-plant-database/c/global" data-astro-cid-ayxajyrl>
Industrial
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../infrastructure-development-database/c/global" data-astro-cid-ayxajyrl>
Infrastructure
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../institutional-building-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Institutional Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../irrigation-system-and-network-database/c/global" data-astro-cid-ayxajyrl>
Irrigation System
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../jail-prison-building-database/c/global" data-astro-cid-ayxajyrl>
Prison
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../jetty-facility-development-database/c/global" data-astro-cid-ayxajyrl>
Jetty
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../kiln-and-oven-plant-database/c/global" data-astro-cid-ayxajyrl>
Kilns & Oven plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../land-reclamation-and-rehabilitation-database/c/global" data-astro-cid-ayxajyrl>
Land Reclamation
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../launching-pad-database/c/global" data-astro-cid-ayxajyrl>
Launching Pads
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../lead-acid-battery-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Lead Acid Battery Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../leisure-and-hospitality-building-database/c/global" data-astro-cid-ayxajyrl>
Leisure and Hospitality Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../library-archive-building-database/c/global" data-astro-cid-ayxajyrl>
Libraries
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../light-rail-transit-database/c/global" data-astro-cid-ayxajyrl>
Light Rail Transit
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../lng-liquefaction-plant-database/c/global" data-astro-cid-ayxajyrl>
LNG Liquefaction Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../lng-regasification-plant-database/c/global" data-astro-cid-ayxajyrl>
LNG Regasification Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../lowrise-apartment-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Low-Rise Apartment
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Manufacturing Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../marine-and-inland-water-infrastructure-database/c/global" data-astro-cid-ayxajyrl>
Marine & Inland Water Infrastructure
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../mass-rapid-transit-metro-database/c/global" data-astro-cid-ayxajyrl>
Mass Rapid Transit/Metro
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../material-recovery-facility-mrf-database/c/global" data-astro-cid-ayxajyrl>
Material Recovery Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../metal-and-material-processing-plant-database/c/global" data-astro-cid-ayxajyrl>
Metal & Material Processing Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../metal-processing-plant-database/c/global" data-astro-cid-ayxajyrl>
Metal Processing Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../mining-database/c/global" data-astro-cid-ayxajyrl>
Mining
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../mining-tunnel-database/c/global" data-astro-cid-ayxajyrl>
Mining Tunnel
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../mining-washery-plant-database/c/global" data-astro-cid-ayxajyrl>
Mining Washery
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../missile-facility-launch-and-storage-database/c/global" data-astro-cid-ayxajyrl>
Missile Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../mixeduse-building-database/c/global" data-astro-cid-ayxajyrl>
Mixed-Use Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../modular-housing-database/c/global" data-astro-cid-ayxajyrl>
Modular Housing
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../monorail-train-database/c/global" data-astro-cid-ayxajyrl>
Monorail
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../monument-building-database/c/global" data-astro-cid-ayxajyrl>
Monuments
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../mosque-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Mosque
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../motel-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Motel
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../multifamily-housing-database/c/global" data-astro-cid-ayxajyrl>
Multi-Family Housing
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../museum-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Museums
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../nuclear-power-plant-npp-database/c/global" data-astro-cid-ayxajyrl>
Nuclear Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../nuclear-waste-disposal-site-database/c/global" data-astro-cid-ayxajyrl>
Nuclear Waste Disposal Sites
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../office-building-database/c/global" data-astro-cid-ayxajyrl>
Office Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../oil-and-gas-production-database/c/global" data-astro-cid-ayxajyrl>
Oil & Gas
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../oil-power-plant-facility-database/c/global" data-astro-cid-ayxajyrl>
Oil Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../oil-storage-tank-database/c/global" data-astro-cid-ayxajyrl>
Storage Tanks
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../ore-and-metal-refinery-database/c/global" data-astro-cid-ayxajyrl>
Ore & Metal Refineries
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../outdoor-ice-rink-database/c/global" data-astro-cid-ayxajyrl>
Outdoor Ice Rink
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../outdoor-leisure-facility-building-database/c/global" data-astro-cid-ayxajyrl>
Outdoor Leisure Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../outdoor-recreation-facility-database/c/global" data-astro-cid-ayxajyrl>
Outdoor Recreation Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../overhead-cable-database/c/global" data-astro-cid-ayxajyrl>
Overhead
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../overhead-power-transmission-line-database/c/global" data-astro-cid-ayxajyrl>
Overhead Transmission Line
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../pyrolysis-plant-database/c/global" data-astro-cid-ayxajyrl>
Pyrolysis Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../park-and-playground-database/c/global" data-astro-cid-ayxajyrl>
Park & Playground
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../parking-facility-database/c/global" data-astro-cid-ayxajyrl>
Parking Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../petrochemical-production-database/c/global" data-astro-cid-ayxajyrl>
Petrochemical
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../pharmaceutical-plant-database/c/global" data-astro-cid-ayxajyrl>
Pharmaceutical Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../plastics-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Plastics Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../pipeline-oil-and-gas-database/c/global" data-astro-cid-ayxajyrl>
Pipeline
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../port-facility-development-database/c/global" data-astro-cid-ayxajyrl>
Port Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../post-office-building-database/c/global" data-astro-cid-ayxajyrl>
Post Offices
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../prefabricated-apartment-database/c/global" data-astro-cid-ayxajyrl>
Prefabricated Apartments
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../prefabricated-multifamily-home-database/c/global" data-astro-cid-ayxajyrl>
Prefabricated Multi-Family Homes
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../prefabricated-singlefamily-home-database/c/global" data-astro-cid-ayxajyrl>
Prefabricated Single-Family Homes
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../public-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Public Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../pulp-and-paper-manufacturing-production-plant-database/c/global" data-astro-cid-ayxajyrl>
Paper & Pulp Mills
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../pumped-hydro-energy-storage-phs-plant-database/c/global" data-astro-cid-ayxajyrl>
Pumped Hydro Storage (PHS)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../pumping-station-database/c/global" data-astro-cid-ayxajyrl>
Pumping Stations
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../railway-train-infrastructure-database/c/global" data-astro-cid-ayxajyrl>
Rail Infrastructure
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../railway-production-unit-database/c/global" data-astro-cid-ayxajyrl>
Railway Production Units
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../railway-station-database/c/global" data-astro-cid-ayxajyrl>
Railway Stations
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../railway-tunnel-database/c/global" data-astro-cid-ayxajyrl>
Railway Tunnels
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../renewable-energy-database/c/global" data-astro-cid-ayxajyrl>
Renewable Energy
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../research-facility-center-database/c/global" data-astro-cid-ayxajyrl>
Research Facilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../research-laboratory-building-database/c/global" data-astro-cid-ayxajyrl>
Laboratory
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../residential-building-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Residential Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../resort-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Resorts
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../retail-bank-building-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Retail Bank Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../retail-building-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Retail Buildings
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../road-and-highway-construction-database/c/global" data-astro-cid-ayxajyrl>
Road
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../road-infrastructure-database/c/global" data-astro-cid-ayxajyrl>
Road Infrastructure
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../road-tunnel-database/c/global" data-astro-cid-ayxajyrl>
Road Tunnels
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../school-building-database/c/global" data-astro-cid-ayxajyrl>
Schools
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../sea-wall-quay-database/c/global" data-astro-cid-ayxajyrl>
Sea Walls/Quay
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../sea-water-cooling-swc-plant-database/c/global" data-astro-cid-ayxajyrl>
Sea Water Cooling Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../self-storage-database/c/global" data-astro-cid-ayxajyrl>
Self Storage
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../semiconductor-fabrication-plant-database/c/global" data-astro-cid-ayxajyrl>
Semiconductor Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../semidetached-home-construction-database/c/global" data-astro-cid-ayxajyrl>
Semi-Detached Homes
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../petroleum-products-and-gas-storage-terminal-database/c/global" data-astro-cid-ayxajyrl>
Storage Terminal
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../sewage-and-drainage-infrastructure-database/c/global" data-astro-cid-ayxajyrl>
Sewage Infrastructure
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../sewage-treatment-plant-stp-database/c/global" data-astro-cid-ayxajyrl>
Sewage Treatment Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../shopping-center-and-retail-hall-construction-database/c/global" data-astro-cid-ayxajyrl>
Shopping Centers & Retail Halls
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../silo-construction-database/c/global" data-astro-cid-ayxajyrl>
Silo
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../singlefamily-housing-database/c/global" data-astro-cid-ayxajyrl>
Single-Family Housing
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../ski-tow-database/c/global" data-astro-cid-ayxajyrl>
Ski Tow
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../small-scale-lng-sslng-plant-database/c/global" data-astro-cid-ayxajyrl>
Small Scale LNG (SSLNG)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../smelter-smelting-plant-database/c/global" data-astro-cid-ayxajyrl>
Smelters
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../solar-photovoltaic-pv-database/c/global" data-astro-cid-ayxajyrl>
Solar Photovoltaic Power Plant (PV)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../special-economic-zone-sez-database/c/global" data-astro-cid-ayxajyrl>
Special Economic Zone (SEZ)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../steel-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Steel Mills
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../storage-tank-and-tower-database/c/global" data-astro-cid-ayxajyrl>
Storage Tanks & Tower
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../switching-station-and-substation-database/c/global" data-astro-cid-ayxajyrl>
Switching Station & Substation
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../telecommunication-infrastructure-database/c/global" data-astro-cid-ayxajyrl>
Telecommunication
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../temple-construction-database/c/global" data-astro-cid-ayxajyrl>
Temple
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../terraced-housing-construction-database/c/global" data-astro-cid-ayxajyrl>
Terraced Housing
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../textile-manufacturing-plant-textile-mill-database/c/global" data-astro-cid-ayxajyrl>
Textile Mills
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../thermal-energy-storage-tes-database/c/global" data-astro-cid-ayxajyrl>
Thermal Energy Storage (TES)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../townhouse-building-construction-database/c/global" data-astro-cid-ayxajyrl>
Townhouse
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../transformer-power-and-distribution-manufacturing-plant-database/c/global" data-astro-cid-ayxajyrl>
Transformer (Power and Distribution) Manufacturing Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../tram-streetcar-line-database/c/global" data-astro-cid-ayxajyrl>
Streetcar/Tram
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../transformer-station-and-substation-database/c/global" data-astro-cid-ayxajyrl>
Transformer Stations & Substation
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../transportation-and-storage-logistics-building-database/c/global" data-astro-cid-ayxajyrl>
Transportation & Storage Buildings (Logistics)
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../truck-terminal-building-and-facility-construction-database/c/global" data-astro-cid-ayxajyrl>
Truck Terminal
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../ultracapacitor-energy-storage-database/c/global" data-astro-cid-ayxajyrl>
Ultracapacitor
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../underground-subway-rail-database/c/global" data-astro-cid-ayxajyrl>
Tubes/Underground Rail/Subway Rail
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../underground-electric-power-transmission-line-database/c/global" data-astro-cid-ayxajyrl>
Underground Transmission Line
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../underground-internet-cable-database/c/global" data-astro-cid-ayxajyrl>
Underground Cable
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../underpass-construction-database/c/global" data-astro-cid-ayxajyrl>
Underpass
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../underwater-submarine-cable-database/c/global" data-astro-cid-ayxajyrl>
Underwater/Submarine Cable
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../underwater-submarine-transmission-line-database/c/global" data-astro-cid-ayxajyrl>
Underwater Transmission Line
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../upstream-offshore-database/c/global" data-astro-cid-ayxajyrl>
Upstream - Offshore
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../upstream-onshore-database/c/global" data-astro-cid-ayxajyrl>
Upstream - Onshore
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../utility-water-wastewater-and-sewage-database/c/global" data-astro-cid-ayxajyrl>
Utilities
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../villa-design-and-construction-database/c/global" data-astro-cid-ayxajyrl>
Villas
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../warehouse-construction-database/c/global" data-astro-cid-ayxajyrl>
Warehouse
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../waste-disposal-plant-database/c/global" data-astro-cid-ayxajyrl>
Waste Disposal Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../waste-processing-management-plant-database/c/global" data-astro-cid-ayxajyrl>
Waste Processing Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../water-filtration-plant-wfp-database/c/global" data-astro-cid-ayxajyrl>
Filtration Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../water-infrastructure-database/c/global" data-astro-cid-ayxajyrl>
Water Infrastructure
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../water-storage-reservoir-wsr-database/c/global" data-astro-cid-ayxajyrl>
Reservoirs
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../water-supply-tunnel-database/c/global" data-astro-cid-ayxajyrl>
Water Tunnel
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../water-treatment-plant-wtp-database/c/global" data-astro-cid-ayxajyrl>
Water Treatment Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../wharf-construction-database/c/global" data-astro-cid-ayxajyrl>
Wharf
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../wind-power-plant-wpp-farm-park-windmill-database/c/global" data-astro-cid-ayxajyrl>
Wind Power Plants
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../onshore-wind-power-plant-database/c/global" data-astro-cid-ayxajyrl>
Onshore Wind Power Plant
</li> <li class="bc-sector border-solid-black bc-country-option bc-sector-search-industrypoc cursor-pointer px-3 py-2 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-600" data-url="../../offshore-wind-power-plants-farms-parks-database/c/global" data-astro-cid-ayxajyrl>
Offshore Wind Power Plants
</li> </ul> </div> </li> <li data-astro-cid-ayxajyrl>/</li> <li class="relative" data-astro-cid-ayxajyrl> <button type="button" class="flex items-center font-medium text-blue-600 transition" id="bcCountrySelection" aria-haspopup="true" aria-expanded="false" data-astro-cid-ayxajyrl> <span data-astro-cid-ayxajyrl>${industry.country}</span> <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ayxajyrl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-ayxajyrl></path> </svg> </button> <div id="bcCountryData" style="display:none;width:300px;height:300px" class="w-100 absolute left-0 z-10 mt-2 overflow-scroll rounded border bg-white p-2 shadow dark:bg-black" data-astro-cid-ayxajyrl> <ul class="bc-country-list-industrypoc bg-white dark:bg-black" id="bccountrySearch" style="width:100%" data-astro-cid-ayxajyrl> <li class="search-box w-full dark:bg-black" data-astro-cid-ayxajyrl> <input type="text" id="bc-country-search-industrypoc" placeholder="Search country..." class="bc-country-search-industrypoc w-full rounded-lg dark:bg-black dark:text-white" data-astro-cid-ayxajyrl> </li> </ul> </div> </li> <li data-astro-cid-ayxajyrl>/</li> <!-- Stage Dropdown --> ${industry.stage !== "MAIN" && renderTemplate`<li class="relative" data-astro-cid-ayxajyrl> <button type="button" class="projectWorkFlowShow flex items-center font-medium text-blue-600 transition" id="projectWorkFlowShow" aria-haspopup="true" aria-expanded="false" data-astro-cid-ayxajyrl> ${" "} <span data-astro-cid-ayxajyrl>${projectStatusName}</span> <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ayxajyrl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-ayxajyrl></path> </svg> </button> <div x-show="stageOpen" id="projectWorkFlow" style="display:none;" class="projectWorkFlowShow absolute left-0 z-10 mt-2 w-40 rounded border bg-white p-2 shadow" data-astro-cid-ayxajyrl> <ul data-astro-cid-ayxajyrl> ${pathSegments[2] !== "c" && renderTemplate`<li data-astro-cid-ayxajyrl> <a${addAttribute(`../c/${pathSegments[3]}`, "href")} class="block px-2 py-1 hover:bg-gray-100" data-astro-cid-ayxajyrl>
All Stages
</a> </li>`} ${pathSegments[2] !== "announced-upcoming" && renderTemplate`<li data-astro-cid-ayxajyrl> <a${addAttribute(`../announced-upcoming/${pathSegments[3]}`, "href")} class="block px-2 py-1 hover:bg-gray-100" data-astro-cid-ayxajyrl>
Upcoming
</a> </li>`} ${pathSegments[2] !== "tender-rfp-rfq-bid" && renderTemplate`<li data-astro-cid-ayxajyrl> <a${addAttribute(`../tender-rfp-rfq-bid/${pathSegments[3]}`, "href")} class="block px-2 py-1 hover:bg-gray-100" data-astro-cid-ayxajyrl>
Tenders
</a> </li>`} ${pathSegments[2] !== "contract-award" && renderTemplate`<li data-astro-cid-ayxajyrl> <a${addAttribute(`../contract-award/${pathSegments[3]}`, "href")} class="block px-2 py-1 hover:bg-gray-100" data-astro-cid-ayxajyrl>
Contract Awards
</a> </li>`} ${pathSegments[2] !== "ongoing" && renderTemplate`<li data-astro-cid-ayxajyrl> <a${addAttribute(`../ongoing/${pathSegments[3]}`, "href")} class="block px-2 py-1 hover:bg-gray-100" data-astro-cid-ayxajyrl>
Ongoing
</a> </li>`} ${pathSegments[2] !== "completed-commissioned-operational" && renderTemplate`<li data-astro-cid-ayxajyrl> <a${addAttribute(`../completed-commissioned-operational/${pathSegments[3]}`, "href")} class="block px-2 py-1 hover:bg-gray-100" data-astro-cid-ayxajyrl>
Completed
</a> </li>`} </ul> </div> </li>`} </ol> </nav> </div> <div class="my-8 mt-10 flex flex-col items-center justify-center" data-astro-cid-ayxajyrl> <p class="mb-4 text-lg font-medium text-gray-700" data-astro-cid-ayxajyrl>See projects in other countries</p> <form class="flex w-full max-w-md items-center gap-2" method="post" action="" data-astro-cid-ayxajyrl> <div class="mb-4 w-full max-w-md" data-astro-cid-ayxajyrl> <div class="flag-dropdown-industrypoc" data-astro-cid-ayxajyrl> <div class="selected-flag-industrypoc dark:bg-black" data-astro-cid-ayxajyrl> <div class="flag us max-w-md dark:text-white" id="displayCountrySelected" style="" data-astro-cid-ayxajyrl>
Select a Country
</div> <div class="down-arrow ml-auto" data-astro-cid-ayxajyrl></div> </div> <ul class="country-list-industrypoc bg-white dark:bg-black" id="countrySearch" style="width: 100%;display: none;z-index: 1;" data-astro-cid-ayxajyrl> <li class="search-box w-full dark:bg-black" data-astro-cid-ayxajyrl> <input type="text" id="country-search-industrypoc" placeholder="Search country..." class="country-search-industrypoc dark:bg-black dark:text-white" style="width:100%" data-astro-cid-ayxajyrl> </li> </ul> </div> </div> <button type="button" id="changetoCountryUrl" aria-label="Search" style="display:none;" class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" data-astro-cid-ayxajyrl> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ayxajyrl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15z" data-astro-cid-ayxajyrl></path> </svg> </button> </form> </div> ${renderComponent($$result2, "IndustryProjectTeaser", $$IndustryProjectTeaser, { "capitalizedTitle": capitalizedTitle, "data-astro-cid-ayxajyrl": true })} ${pathSegments[3] == "global" && renderTemplate`${renderComponent($$result2, "IndustryProjectRegions", $$IndustryProjectRegions, { "header_title": header_title, "industry": industry, "data-astro-cid-ayxajyrl": true })}`}${renderComponent($$result2, "BlackRidgeIndustryStageCard", $$BlackRidgeIndustryStageCard, { "data-astro-cid-ayxajyrl": true })} ${renderComponent($$result2, "UpcomingProjectsFeatures", $$UpcomingProjectsFeatures, { "industry": industry, "data-astro-cid-ayxajyrl": true })} ${renderComponent($$result2, "FeatureSideImageBlackridge", $$FeatureSideImageBlackridge, { "data-astro-cid-ayxajyrl": true })} ${renderComponent($$result2, "BlackRidgeIndustryCardsMedium", $$BlackRidgeIndustryCardsMedium, { "data-astro-cid-ayxajyrl": true })} <div class="mt-6 bg-primary-100/30 dark:bg-dark-bg" data-astro-cid-ayxajyrl> ${renderComponent($$result2, "TestimonialsColumnsBlackridge", $$TestimonialsColumnsBlackridge, { "data-astro-cid-ayxajyrl": true })} </div> ${renderComponent($$result2, "IndustryProjectFaq", $$IndustryProjectFaq, { "header_title": header_title, "data-astro-cid-ayxajyrl": true })} <div class="mt-12" data-astro-cid-ayxajyrl> ${renderComponent($$result2, "CtaBlackridgeIndustry", $$CtaBlackridgeIndustry, { "data-astro-cid-ayxajyrl": true })} </div> <div class="-mb-16" data-astro-cid-ayxajyrl> ${renderComponent($$result2, "RegionProjects", $$RegionProjects, { "header_title": header_title, "industry": industry, "data-astro-cid-ayxajyrl": true })} </div> ` }), addAttribute(dynamicUrlSector, "value"), addAttribute(nid, "value"), addAttribute(Astro2.url.origin + getRelativeLocaleUrl(currLocale, `/new-projects-near-me/`).replace(/\/$/, ""), "value"));
}, "/home/blackridgeorg/public_html/src/layouts/IndustryProjectLayout.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  let industry = "";
  try {
    let formattedSlug = slug.replace(/\//g, "_");
    formattedSlug = formattedSlug.replace(/[:/]/g, "-");
    formattedSlug = formattedSlug.replace(/[?/]/g, "-");
    const response = await fetch(
      `https://adminapi.blackridgeresearch.com/industry/listid/${formattedSlug}`
    );
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    if (!data.success) {
      return new Response(null, {
        status: 404,
        statusText: "Not Found"
      });
    }
    industry = data.id;
  } catch (error) {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  return renderTemplate`${renderComponent($$result, "IndustryProjectLayout", $$IndustryProjectLayout, { "industry": industry })}`;
}, "/home/blackridgeorg/public_html/src/pages/new-projects-near-me/[...slug]/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/new-projects-near-me/[...slug]/index.astro";
const $$url = "/new-projects-near-me/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
