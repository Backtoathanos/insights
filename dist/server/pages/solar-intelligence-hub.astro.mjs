/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { a as agreement, t as trans } from '../chunks/trans_laptop2_BYBU_Me9.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Ct7febRF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$SolarIntelligenceHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SolarIntelligenceHub;
  const currLocale = getLocaleFromUrl(Astro2.url);
  getTranslatedData("teamData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Solar Intelligence Hub | Blackridge Research & Consulting", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="" class="mt-10 bg-primary-600"> <div class="grid grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-2"> <div class="ml-24 mt-24 text-white"> <h1 class="h2 font-semibold text-white">Solar Intelligence Hub</h1> <p>A Global Solar Intelligence Service</p> </div> <div class="text-center"> <div class="flex justify-center p-3"> <div class=""> ${renderComponent($$result2, "Image", $$Image, { "src": agreement, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-80 w-auto p-2", "aria-hidden": "true" })} </div> </div> </div> </div> </section> <div class="col-sm-12 mt-10 text-center"> <a href="/contact-us" class="mr-10 bg-black p-2 text-white dark:bg-white dark:text-black">See it in Action <i class="fas fa-long-arrow-alt-right"></i></a> </div>  <div class="mb-2 mt-5 bg-gray-300 p-4 text-xl font-semibold dark:text-black"> <h3 class="ml-10">Who Needs This Service?</h3> </div> <section class="site-container mx-auto mt-3 py-3"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> <div class="p-4"> <h4 class="font-semibold">Types of Companies:</h4> <ul class="list-inside list-disc"> <li>Solar PV Module Manufacturers</li> <li>Solar PV Inverter Companies</li> <li>TCP/Developers</li> <li>Power Plant Owners/Utilities</li> <li>Operation & Maintenance (O&M) Companies</li> <li>Logistics and Warehousing</li> <li>Others</li> </ul> </div> <div class="p-3"> <div class="space-y-2"> <h4 class="font-semibold">Types of Roles</h4> <ul class="list-inside list-disc"> <li>Business Development Teams</li> <li>Processor Management</li> <li>Project Managers</li> <li>Marketing Teams</li> <li>Strategy, Competitor Intelligence Teams</li> <li>Product Managers among others</li> </ul> </div> </div> </div> </section> <div class="mb-2 mt-5 bg-green-700 p-4 text-xl font-semibold dark:text-black"> <h3 class="ml-10">What’s Included</h3> </div> <section class="site-container mx-auto mt-3 py-3"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> <div class="space-y-4"> <div> <h4 class="font-semibold">Solar Power Installation Database</h4> <p>
Covers installation data for more than 200 countries from 1990. This tool helps in
						visualizing installation data with live dashboards and reports.
</p> </div> <div> <h4 class="font-semibold">
Solar PV Module Manufacturer Market Share (Historical & Forecast)
</h4> <p>
Covers both historical and forecasted market share of top 10 players in the PV module
						manufacturing sector.
</p> </div> <div> <h4 class="font-semibold">Solar Power Plant Projects Tracker</h4> <p>
Over 10,000+ projects across the world above 1 MW capacity. More than 30 parameters for
						the key projects. Existing projects, project tenders, projects in all phases of
						development are captured here.
</p> </div> <div> <h4 class="font-semibold">Company Profile Database</h4> <p>
Covers company profiles of key players in the Solar power ecosystem. List of relevant
						products and services, latest financial data for public companies, key competitor
						information, recent developments, M&A activity, are some of the details provided for all
						the companies profiled. SWOT analysis will be provided on request.
</p> </div> </div> <div class="p-3"> <div class="flex justify-center p-3"> <div class=""> ${renderComponent($$result2, "Image", $$Image, { "src": agreement, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-100 w-auto p-2", "aria-hidden": "true" })} </div> </div> <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2"> <div class="p-6 text-center"> <h3 class="text-2xl font-semibold">200+</h3> <p>Countries</p> </div> <div class="p-6 text-center"> <h3 class="text-2xl font-semibold">10000+</h3> <p>Projects</p> </div> <div class="p-6 text-center"> <h3 class="text-2xl font-semibold">100+</h3> <p>Companies</p> </div> <div class="p-6 text-center"> <h3 class="text-2xl font-semibold">10+</h3> <p>Types of Companies</p> </div> </div> </div> </div> </section> <section class="site-container mx-auto mt-3 py-3"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> <div class="p-3"> <div class="flex justify-center p-3"> <div class=""> ${renderComponent($$result2, "Image", $$Image, { "src": trans, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-200 p-2", "aria-hidden": "true" })} </div> </div> </div> <div class="space-y-4"> <div> <h4 class="font-semibold">Renewable Energy Policy Database</h4> <p>
Provides a comprehensive overview of policies, measures, targets, and regulatory
						environment relevant to deployment of renewables for major countries across the globe.
</p> </div> <div> <h4 class="font-semibold">Sector and Regional Reports</h4> <p>
These reports contain deep-dive market analysis along with the outlook for the next five
						years.
</p> </div> <div> <h4 class="font-semibold">Analyst Support</h4> <p>
Analyst Access - Direct access to analyst team to address any queries and
						clarifications. <br>
- Quarterly Market Outlook Updates
</p> </div> <div> <h4 class="font-semibold">Company Profile Database</h4> <p>
Covers company profiles of key players in the Solar power ecosystem. List of relevant
						products and services, latest financial data for public companies, key competitor
						information, recent developments, M&A activity, are some of the details provided for all
						the companies profiled. SWOT analysis will be provided on request.
</p> </div> </div> </div> </section> <div class="mb-2 mt-5 bg-primary-500 p-4 text-xl font-semibold dark:text-black"> <h3 class="ml-10">Benefits of this Service</h3> </div> <section class="site-container mx-auto mt-3 py-3"> <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> <div class="p-4"> <ul> <li> <span>✓ </span> Sophisticated live dashboards to enable data analysis and accelerate time-to-insight
						generation
</li> <li> <span>✓ </span> Track and analyze&nbsp;government policy and regulatory environment and developments
</li> <li> <span>✓ </span> Keep up with the latest major developments including tendering activity,
						contract awards, planned tenders, M&amp;A activity for opportunity identification and to
						stay ahead of the competition.
</li> </ul> </div> <div class="p-3"> <ul> <li> <span>✓ </span> Identify and screen business development opportunities quickly, through access
						to our projects tracker (especially to track tenders and contract awards) and company profile
						database
</li> <li> <span>✓ </span> Save time, resources and potential loss of missing out on opportunities with
						access to the Global solar intelligence service
</li> <li> <span>✓ </span> Gain&nbsp;competitive edge, improve decision making with the aid of access
						to Global solar intelligence service
</li> </ul> </div> </div> <div class="col-sm-12 mt-10 text-center"> <a href="/contact-us" class="mr-10 bg-black p-2 text-white dark:bg-white dark:text-black">REQUEST FOR PRICING INFORMATION <i class="fas fa-long-arrow-alt-right"></i></a> <a href="/contact-us" class="mr-10 bg-black p-2 text-white dark:bg-white dark:text-black">REQUEST FOR A DEMO <i class="fas fa-long-arrow-alt-right"></i></a> <a href="/contact-us" class="mr-10 bg-black p-2 text-white dark:bg-white dark:text-black">ALREADY HAVE ACCESS <i class="fas fa-long-arrow-alt-right"></i></a> </div> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/solar-intelligence-hub.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/solar-intelligence-hub.astro";
const $$url = "/solar-intelligence-hub";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SolarIntelligenceHub,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
