/* empty css                                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Ct7febRF.mjs';
import { $ as $$LogoCloudMarquee } from '../chunks/LogoCloudMarquee_Dy1r_jtq.mjs';
import { c as ctaImage } from '../chunks/industry-cta-img_CEetQbxz.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
import { $ as $$CaseStudiesSection } from '../chunks/hero-bg-crop_DTsY_ezB.mjs';
export { renderers } from '../renderers.mjs';

const $$Category1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog | Blackridge Research & Consulting", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="heroSwiper" class="dark"> <div class="w-full overflow-hidden bg-dark-bg"> <div class="pt-16 lg:pt-10"> <!-- swiper --> <div class="hero__swiper relative lg:py-6"> <!-- Additional required wrapper --> <div class="swiper-wrapper"> <div class="swiper-slide swiper-no-swiping"> <div class="site-container grid h-auto min-h-[25rem] w-full gap-x-2 gap-y-10 py-8 lg:grid-cols-12 lg:px-12 lg:py-8 2xl:px-0"> <div class="flex h-full items-center lg:col-span-7"> <div class="mr-auto max-w-[750px]"> <!-- heading --> <h1 class="text-2xl font-bold leading-tight text-base-100 sm:text-4xl md:text-5xl md:leading-tight">
Oil & Gas
</h1> <!-- description --> <p class="description mt-4 text-base font-medium md:text-lg">
Cut through the market noise. Focus on what matters—spot opportunities,
											mitigate risks, and make strategic decisions that drive growth and maximize
											your competitive edge.
</p> <!-- CTA --> <div class="mr-auto mt-8 flex max-w-xl flex-col gap-1.5 sm:h-14 sm:flex-row"> <div> <button class="rounded-md border border-white bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
Schedule a Consultation
</button> </div> <div> <button class="rounded-md border border-white px-4 py-3 text-white">
Download Brochure
</button> </div> </div> </div> </div> <div class="ml-10 mt-8 flex h-80 w-80 items-center justify-end overflow-hidden rounded-full sm:mt-0 lg:col-span-5"> ${renderComponent($$result2, "Image", $$Image, { "src": ctaImage, "class": "h-full w-full object-cover", "alt": "technology", "loading": "eager", "width": 300, "height": 300 })} </div> </div> </div> </div> </div> </div> </div> </section> ${renderComponent($$result2, "LogoCloudMarquee", $$LogoCloudMarquee, {})} <section class="site-container overflow-x-clip"> <div class="px-4 py-12 md:px-16 lg:px-24"> <div class="flex w-full justify-center"> <h2 class="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
Leading Market Intelligence for the Oil & Gas Industry
</h2> </div> <div class="mx-auto mt-4 grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2"> <!-- Left Image --> <div> ${renderComponent($$result2, "Image", $$Image, { "src": ctaImage, "alt": "Oil and Gas Industry", "class": "h-auto w-full rounded-md shadow-md" })} </div> <!-- Right Content --> <div> <p class="mb-4 text-sm text-gray-700 dark:text-gray-300">
At <span class="font-semibold">Blackridge Research & Consulting</span>, we provide
<span class="font-medium">data-driven market intelligence and strategic insights</span> to
						help energy companies, investors, and stakeholders
<span class="font-medium">navigate industry complexities, seize emerging opportunities, and drive sustainable
							growth</span>.
</p> <p class="mb-4 text-sm text-gray-700 dark:text-gray-300">
Our in-depth research covers the <span class="font-medium">entire oil & gas value chain</span>, enabling businesses to:
</p> <ul class="mb-4 list-none space-y-2 text-sm text-gray-700 dark:text-gray-300"> <li>
✔ <span class="font-semibold">Assess market potential</span> and industry trends
</li> <li>
✔ <span class="font-semibold">Track investment opportunities</span> and competitive landscapes
</li> <li>
✔ <span class="font-semibold">Gain deep competitive intelligence</span> on key players,
							market strategies, and industry shifts
</li> <li>
✔ <span class="font-semibold">Optimize decision-making</span> with real-time, accurate
							data
</li> <li>
✔ <span class="font-semibold">Stay ahead of the energy transition</span> and evolving
							regulations
</li> <li>
✔ <span class="font-semibold">Mitigate risks</span> and enhance operational efficiency
							in a volatile market
</li> </ul> <p class="mb-2 text-sm text-gray-700 dark:text-gray-300">
Whether you're an <span class="font-semibold">E&amp;P company, service provider, investor, or policymaker</span>, our trusted intelligence helps you
<span class="font-medium">mitigate risks, enhance efficiency, and maximize returns</span> in a rapidly changing global energy market.
</p> <p class="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
🛠️ Partner with us to fuel your next strategic move.
</p> </div> </div> </div> <div class=""> <div class="mx-auto my-10 max-w-3xl text-center"> <!-- Section Title --> <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
Latest Industry Insights
</h2> <p class="mt-2 text-base text-gray-600 dark:text-gray-300">
Stay informed with our comprehensive coverage of industry developments, project updates,
					and expert analysis
</p> </div> <!-- Tabs --> <div class="mt-8"> <div class="flex gap-4"> <button id="latestTab" class="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 shadow-lg hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700"> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"></path> </svg>
Latest
</button> <button id="popularTab" class="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-600 shadow-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-900"> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path d="M3 3v18h18"></path> </svg>
Popular
</button> </div> </div> <!-- Latest Blog Cards (visible by default) --> <div id="latestCards" class="mx-auto mt-6 space-y-4"> <!-- Card 1 --> <div class="flex items-start justify-between rounded-lg bg-gray-100 p-4 shadow-lg hover:shadow-sm dark:bg-gray-900"> <div> <span class="mb-1 inline-flex items-center rounded bg-gray-700 px-2 py-0.5 text-xs font-semibold text-white dark:bg-gray-900">Blog</span> <span class="ml-2 text-sm text-gray-500 dark:text-gray-400"><i class="far fa-calendar-alt"></i> Feb 15, 2025</span> <h3 class="mt-1 text-base font-medium text-gray-900 dark:text-white">
Top 10 Largest Data Center Providing Companies in the USA [2025]
</h3> </div> </div> <!-- Card 2 --> <div class="flex items-start justify-between rounded-lg bg-gray-100 p-4 shadow-lg hover:shadow-sm dark:bg-gray-900"> <div> <span class="mb-1 inline-flex items-center rounded bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">Project Profiles</span> <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Feb 15, 2025</span> <h3 class="mt-1 text-base font-medium text-gray-900 dark:text-white">
FPSO Bacalhau: Largest FPSO in Brazil
</h3> </div> </div> <!-- Card 3 --> <div class="flex items-start justify-between rounded-lg bg-gray-100 p-4 shadow-lg hover:shadow-sm dark:bg-gray-900"> <div> <span class="mb-1 inline-flex items-center rounded bg-green-700 px-2 py-0.5 text-xs font-semibold text-white">Industry Analysis</span> <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Feb 14, 2025</span> <h3 class="mt-1 text-base font-medium text-gray-900 dark:text-white">
Renewable Energy Market Trends Q1 2025
</h3> </div> </div> </div> <!-- Popular Blog Cards (hidden by default) --> <div id="popularCards" class="mx-auto mt-6 hidden space-y-4"> <!-- Popular Card 1 --> <div class="flex items-start justify-between rounded-lg bg-gray-100 p-4 shadow-lg hover:shadow-sm dark:bg-gray-900"> <div> <span class="mb-1 inline-flex items-center rounded bg-purple-600 px-2 py-0.5 text-xs font-semibold text-white">Trending</span> <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Feb 10, 2025</span> <h3 class="mt-1 text-base font-medium text-gray-900 dark:text-white">
The Future of Offshore Drilling: 2025 Outlook
</h3> </div> </div> <!-- Popular Card 2 --> <div class="flex items-start justify-between rounded-lg bg-gray-100 p-4 shadow-lg hover:shadow-sm dark:bg-gray-900"> <div> <span class="mb-1 inline-flex items-center rounded bg-orange-600 px-2 py-0.5 text-xs font-semibold text-white">Most Read</span> <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Feb 8, 2025</span> <h3 class="mt-1 text-base font-medium text-gray-900 dark:text-white">
LNG Market Expansion: New Projects Announced
</h3> </div> </div> <!-- Popular Card 3 --> <div class="flex items-start justify-between rounded-lg bg-gray-100 p-4 shadow-lg hover:shadow-sm dark:bg-gray-900"> <div> <span class="mb-1 inline-flex items-center rounded bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">Hot Topic</span> <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Feb 5, 2025</span> <h3 class="mt-1 text-base font-medium text-gray-900 dark:text-white">
Digital Transformation in Oil & Gas: 2025 Case Studies
</h3> </div> </div> </div> <!-- Button --> <div class="mt-8 text-center"> <a href="/blog" class="inline-flex items-center gap-2 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700">
View All Blog Articles
<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> <div class="mx-auto my-10 max-w-3xl text-center"> <!-- Section Title --> <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
Browse our Syndicated Reports
</h2> <p class="mt-2 text-base text-gray-600 dark:text-gray-300">
In-depth market intelligence on industry trends, competitive landscapes, and growth
				forecasts to support data-driven decision-making.
</p> </div> <!-- Reports Section --> <div class="m-auto max-w-6xl"> <!-- Tabs --> <div class="flex gap-4"> <button id="reportsLatestTab" class="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 shadow-lg hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700"> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"></path> </svg>
Latest
</button> <button id="reportsPopularTab" class="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-600 shadow-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-900"> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path d="M3 3v18h18"></path> </svg>
Popular
</button> </div> <!-- Latest Reports (visible by default) --> <div id="reportsLatestCards" class="flex flex-col justify-center gap-6 px-4 py-8 lg:flex-row"> <!-- Card 1 --> <div class="w-full max-w-sm overflow-hidden border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"> <div class="bg-gray-900 px-4 py-3 text-white dark:bg-gray-900"> <p class="text-xs font-medium">Market Research Report</p> <h2 class="mt-1 text-lg font-bold">Global Electric Aircraft Market</h2> </div> <div class="px-4 py-4"> <h3 class="mb-3 text-base font-semibold text-gray-800 dark:text-white">
US Data Center Market
</h3> <div class="mb-4 flex flex-wrap gap-2"> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">6-year Forecast</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Regional Analysis</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Investment Trends</span> </div> <div class="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400"> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h10"></path></svg> <span>180 pages</span> </div> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3h8v4M4 8h16v13H4z"></path></svg> <span>04/15/2024</span> </div> </div> <div class="flex items-center justify-between"> <button class="pl-5 text-center text-sm font-medium text-black hover:underline dark:text-blue-400">View Details</button> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "href": "", "id": "open-popup-button", "class": "relative before:absolute before:inset-0 before:-z-10 before:transform-gpu before:animate-ring-expand before:rounded-md before:ring-secondary-300 dark:before:ring-secondary-950" }, { "default": ($$result3) => renderTemplate`${"Download Free Sample"}` })} </div> </div> </div> <!-- Card 2 --> <div class="w-full max-w-sm overflow-hidden border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"> <div class="bg-gray-900 px-4 py-3 text-white dark:bg-gray-900"> <p class="text-xs font-medium">Industry Analysis</p> <h2 class="mt-1 text-lg font-bold">Renewable Energy Trends 2025</h2> </div> <div class="px-4 py-4"> <h3 class="mb-3 text-base font-semibold text-gray-800 dark:text-white">
Solar Power Market Outlook
</h3> <div class="mb-4 flex flex-wrap gap-2"> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">5-year Forecast</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Technology Analysis</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Policy Impact</span> </div> <div class="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400"> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h10"></path></svg> <span>150 pages</span> </div> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3h8v4M4 8h16v13H4z"></path></svg> <span>03/28/2024</span> </div> </div> <div class="flex items-center justify-between"> <button class="pl-5 text-center text-sm font-medium text-black hover:underline dark:text-blue-400">View Details</button> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "href": "", "id": "open-popup-button", "class": "relative before:absolute before:inset-0 before:-z-10 before:transform-gpu before:animate-ring-expand before:rounded-md before:ring-secondary-300 dark:before:ring-secondary-950" }, { "default": ($$result3) => renderTemplate`${"Download Free Sample"}` })} </div> </div> </div> <!-- Card 3 --> <div class="w-full max-w-sm overflow-hidden border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"> <div class="bg-gray-900 px-4 py-3 text-white dark:bg-gray-900"> <p class="text-xs font-medium">Technology Report</p> <h2 class="mt-1 text-lg font-bold">AI in Energy Sector</h2> </div> <div class="px-4 py-4"> <h3 class="mb-3 text-base font-semibold text-gray-800 dark:text-white">
Predictive Maintenance Solutions
</h3> <div class="mb-4 flex flex-wrap gap-2"> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Case Studies</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Vendor Analysis</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">ROI Metrics</span> </div> <div class="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400"> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h10"></path></svg> <span>120 pages</span> </div> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3h8v4M4 8h16v13H4z"></path></svg> <span>03/15/2024</span> </div> </div> <div class="flex items-center justify-between"> <button class="pl-5 text-center text-sm font-medium text-black hover:underline dark:text-blue-400">View Details</button> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "href": "", "id": "open-popup-button", "class": "relative before:absolute before:inset-0 before:-z-10 before:transform-gpu before:animate-ring-expand before:rounded-md before:ring-secondary-300 dark:before:ring-secondary-950" }, { "default": ($$result3) => renderTemplate`${"Download Free Sample"}` })} </div> </div> </div> </div> <!-- Popular Reports (hidden by default) --> <div id="reportsPopularCards" class="flex hidden flex-col justify-center gap-6 px-4 py-8 lg:flex-row"> <!-- Popular Card 1 --> <div class="w-full max-w-sm overflow-hidden border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"> <div class="bg-gray-900 px-4 py-3 text-white dark:bg-gray-900"> <p class="text-xs font-medium">Market Research Report</p> <h2 class="mt-1 text-lg font-bold">Oil & Gas Digitalization</h2> </div> <div class="px-4 py-4"> <h3 class="mb-3 text-base font-semibold text-gray-800 dark:text-white">
IoT Adoption in Energy Sector
</h3> <div class="mb-4 flex flex-wrap gap-2"> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Implementation Guide</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Vendor Comparison</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Cost Analysis</span> </div> <div class="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400"> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h10"></path></svg> <span>200 pages</span> </div> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3h8v4M4 8h16v13H4z"></path></svg> <span>02/28/2024</span> </div> </div> <div class="flex items-center justify-between"> <button class="pl-5 text-center text-sm font-medium text-black hover:underline dark:text-blue-400">View Details</button> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "href": "", "id": "open-popup-button", "class": "relative before:absolute before:inset-0 before:-z-10 before:transform-gpu before:animate-ring-expand before:rounded-md before:ring-secondary-300 dark:before:ring-secondary-950" }, { "default": ($$result3) => renderTemplate`${"Download Free Sample"}` })} </div> </div> </div> <!-- Popular Card 2 --> <div class="w-full max-w-sm overflow-hidden border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"> <div class="bg-gray-900 px-4 py-3 text-white dark:bg-gray-900"> <p class="text-xs font-medium">Industry Analysis</p> <h2 class="mt-1 text-lg font-bold">Carbon Capture Technologies</h2> </div> <div class="px-4 py-4"> <h3 class="mb-3 text-base font-semibold text-gray-800 dark:text-white">
Emerging Solutions for Emissions
</h3> <div class="mb-4 flex flex-wrap gap-2"> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Technology Review</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Policy Landscape</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Market Potential</span> </div> <div class="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400"> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h10"></path></svg> <span>175 pages</span> </div> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3h8v4M4 8h16v13H4z"></path></svg> <span>02/15/2024</span> </div> </div> <div class="flex items-center justify-between"> <button class="pl-5 text-center text-sm font-medium text-black hover:underline dark:text-blue-400">View Details</button> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "href": "", "id": "open-popup-button", "class": "relative before:absolute before:inset-0 before:-z-10 before:transform-gpu before:animate-ring-expand before:rounded-md before:ring-secondary-300 dark:before:ring-secondary-950" }, { "default": ($$result3) => renderTemplate`${"Download Free Sample"}` })} </div> </div> </div> <!-- Popular Card 3 --> <div class="w-full max-w-sm overflow-hidden border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"> <div class="bg-gray-900 px-4 py-3 text-white dark:bg-gray-900"> <p class="text-xs font-medium">Technology Report</p> <h2 class="mt-1 text-lg font-bold">Battery Storage Innovations</h2> </div> <div class="px-4 py-4"> <h3 class="mb-3 text-base font-semibold text-gray-800 dark:text-white">
Grid-Scale Storage Solutions
</h3> <div class="mb-4 flex flex-wrap gap-2"> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Technology Comparison</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Cost Analysis</span> <span class="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">Implementation Guide</span> </div> <div class="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400"> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h10"></path></svg> <span>160 pages</span> </div> <div class="flex items-center gap-1"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3h8v4M4 8h16v13H4z"></path></svg> <span>02/05/2024</span> </div> </div> <div class="flex items-center justify-between"> <button class="pl-5 text-center text-sm font-medium text-black hover:underline dark:text-blue-400">View Details</button> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "href": "", "id": "open-popup-button", "class": "relative before:absolute before:inset-0 before:-z-10 before:transform-gpu before:animate-ring-expand before:rounded-md before:ring-secondary-300 dark:before:ring-secondary-950" }, { "default": ($$result3) => renderTemplate`${"Download Free Sample"}` })} </div> </div> </div> </div> <!-- Button --> <div class="mt-8 text-center"> <a href="/blog" class="inline-flex items-center gap-2 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700">
View All Reports
<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> <div class="mx-auto my-10 max-w-3xl text-center"> <!-- Section Title --> <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
Custom Research Services
</h2> <p class="mt-2 text-base text-gray-600 dark:text-gray-300">
Empower your business decisions with our comprehensive research solutions. From market
				analysis to strategy development, we deliver actionable insights tailored to your needs.
</p> </div> <section> <div class=""> <!-- Section --> <div class="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"> <div class="mb-6 flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z"></path> </svg> <div> <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
Market Analysis and Assessment
</h2> <p class="text-sm text-gray-600 dark:text-gray-300">
Comprehensive market research and analysis to inform strategic decisions
</p> </div> </div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"> <!-- Item --> <div class="flex gap-3"> <svg class="mt-1 h-5 w-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M3 3h18v2H3V3zm0 6h18v2H3V9zm0 6h12v2H3v-2z"></path> </svg> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
Market Sizing and Forecasting
</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
Accurate measurement of market size, growth potential, and future projections
</p> </div> </div> <!-- Repeat for each item --> <div class="flex gap-3"> <svg class="mt-1 h-5 w-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 7V3L8 7h4zm6.707 2.293l-6-6a1 1 0 00-1.414 0l-6 6A1 1 0 006 10h12a1 1 0 00.707-1.707z"></path> </svg> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
Market Feasibility Studies
</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
Comprehensive assessment of market viability for new ventures
</p> </div> </div> <!-- Add other items similarly --> <div class="flex gap-3"> <svg class="mt-1 h-5 w-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 4C9.243 4 7 6.243 7 9s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM4 20h16v-2c0-2.67-5.33-4-8-4s-8 1.33-8 4v2z"></path> </svg> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
Identification of Potential Customers
</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
Discovery and profiling of prospective customer segments
</p> </div> </div> <!-- Continue with Market Segmentation, Share Analysis, Trends, etc --> </div> </div> <!-- Section 2 --> <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"> <div class="mb-6 flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M5 3a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z"></path> </svg> <div> <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
Product and Strategy Development
</h2> <p class="text-sm text-gray-600 dark:text-gray-300">
Comprehensive product strategy and development planning
</p> </div> </div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"> <div class="flex gap-3"> <svg class="mt-1 h-5 w-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M13 5h8v2h-8V5zM3 5h8v2H3V5zm0 6h18v2H3v-2zm0 6h8v2H3v-2z"></path> </svg> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
Value Chain Analysis
</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
Analysis of business activities to identify competitive advantages
</p> </div> </div> <div class="flex gap-3"> <svg class="mt-1 h-5 w-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M5 13l4 4L19 7"></path> </svg> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
Go To Market (GTM) Strategies
</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
Strategic planning for product launches and market entry
</p> </div> </div> </div> </div> </div> </section> <section> <div> <!-- Section Heading --> <div class="my-12 text-center"> <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
Global Project Tracker Database
</h2> <p class="mx-auto mt-2 max-w-2xl text-sm text-gray-600 md:text-base dark:text-gray-300">
Track over 10,000 active projects across the oil and gas value chain with comprehensive
						details on CAPEX, timelines, and stakeholders
</p> </div> <!-- Grid --> <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Card --> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M3 10h18M3 6h18M3 14h18M3 18h18"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">Refineries</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
2,500+ refinery projects including new builds, expansions, and modernization
									initiatives across 150 countries
</p> </div> </div> </div> <!-- Repeat Cards Below --> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">FPSO & FSO</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
175+ floating production vessel projects including newbuilds, conversions, and
									redeployments
</p> </div> </div> </div> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M4 6h16M4 12h16M4 18h16"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">LNG Liquefaction Plants</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
300+ active LNG liquefaction projects with detailed CAPEX, capacity, and timeline
									information
</p> </div> </div> </div> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M5 13l4 4L19 7"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">
LNG Regasification Plants
</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
400+ regasification terminal projects with status updates on construction and
									commissioning phases
</p> </div> </div> </div> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M3 12h18M3 6h18M3 18h18"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">Gas Processing Plants</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
1,000+ gas processing facility projects tracking expansions, modernizations, and
									new construction
</p> </div> </div> </div> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M4 6h16M4 12h8M4 18h16"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">Storage Terminal</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
600+ terminal development projects including new facilities and capacity additions
									worldwide
</p> </div> </div> </div> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="10"></circle> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">Storage Tanks</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
750+ storage tank construction and expansion projects with capacity and investment
									details
</p> </div> </div> </div> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M12 2L2 7l10 5 10-5-10-5zm0 20v-6"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">Pipeline</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
1,200+ pipeline projects covering new routes, expansions, and reversal projects
									globally
</p> </div> </div> </div> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M9 17v-6h13v6m0 4H2v-4h20v4z"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">Small Scale LNG</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
150+ small-scale LNG infrastructure projects including bunkering facilities and
									satellite stations
</p> </div> </div> </div> <div class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"> <div class="flex items-start gap-3"> <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M5 3v4h14V3M4 21h16a1 1 0 001-1V8H3v12a1 1 0 001 1z"></path> </svg> <div> <h3 class="font-semibold text-gray-900 dark:text-white">Upstream Projects</h3> <p class="text-sm text-gray-600 dark:text-gray-300">
3,000+ upstream projects covering offshore platforms, onshore facilities, and
									field development plans
</p> </div> </div> </div> </div> </div> <section></section> </section> </section> <section class="my-16 bg-blue-900 px-4 py-16 text-center text-white"> <h2 class="mb-4 text-2xl font-bold md:text-3xl">Find the Right Solution for You</h2> <p class="mx-auto mb-6 max-w-2xl text-base md:text-lg">
Let our experts help you navigate the complex Oil & Gas market landscape and make informed
			decisions.
</p> <a href="#contact" class="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2 text-sm font-medium text-blue-900 transition hover:bg-gray-100">
Get in Touch
<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </section> ${renderComponent($$result2, "CaseStudiesSection", $$CaseStudiesSection, {})} ` })} `;
}, "/home/blackridgeorg/public_html/src/pages/category1.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/category1.astro";
const $$url = "/category1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Category1,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
