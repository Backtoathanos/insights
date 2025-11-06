/* empty css                                                      */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML, d as addAttribute, F as Fragment } from '../../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BZKhPsJH.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../../chunks/_astro_assets_Ct7febRF.mjs';
import { p as payarrowImage, i as info, d as dinnerclub, m as mastercard, a as paypal, b as pci, r as razorpay, v as visa, n as need, c as phonecall, e as email } from '../../../chunks/send-mail_C100tcPb.mjs';
import { $ as $$SubscriptionFaq } from '../../../chunks/subscriptionFaq_BBPFbm2G.mjs';
import { $ as $$TestimonialsColumnsBlackridge } from '../../../chunks/TestimonialsColumnsBlackridge_DFNZISs-.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  let industryData = null;
  let paymentData = null;
  let currencyData = [];
  let nid = null;
  try {
    let formattedSlug = slug.replace(/\//g, "_");
    formattedSlug = formattedSlug.replace(/[:/]/g, "-");
    formattedSlug = formattedSlug.replace(/[?/]/g, "-");
    const slugResponse = await fetch(
      `https://adminapi.blackridgeresearch.com/industry/listid/${formattedSlug}`
    );
    if (!slugResponse.ok) {
      throw new Error(`Failed to fetch industry by slug: ${slugResponse.status}`);
    }
    const slugData = await slugResponse.json();
    if (!slugData || !slugData.id) {
      throw new Error("No industry data found from slug");
    }
    nid = slugData.id.nid;
    const industryResponse = await fetch(`https://adminapi.blackridgeresearch.com/industry/edit/${nid}`);
    if (!industryResponse.ok) {
      throw new Error(`Failed to fetch industry details: ${industryResponse.status}`);
    }
    const industryJson = await industryResponse.json();
    industryData = industryJson[0];
    const currencyResponse = await fetch("https://adminapi.blackridgeresearch.com/currency_master");
    if (!currencyResponse.ok) {
      throw new Error(`Currency fetch failed: ${currencyResponse.status}`);
    }
    const currencyJson = await currencyResponse.json();
    if (currencyJson?.success && currencyJson?.currency_data?.length) {
      currencyData = Object.keys(currencyJson.currency_data[0]).filter(
        (key) => !["nid", "created_date", "sts"].includes(key)
      );
    }
    const paymentResponse = await fetch(
      `https://adminapi.blackridgeresearch.com/payment_data/${nid}`
    );
    if (!paymentResponse.ok) {
      throw new Error(`Failed to fetch payment data: ${paymentResponse.status}`);
    }
    const paymentJson = await paymentResponse.json();
    if (paymentJson?.success && paymentJson?.payments_data?.length) {
      paymentData = paymentJson.payments_data[0];
    } else {
      throw new Error("No payment data found");
    }
  } catch (err) {
    err.message;
    console.error("Fetch error:", err);
  }
  const defaultPrices = {
    sul: "3990",
    tl: "4490",
    cl: "8990",
    el: "10490"
  };
  const prices = paymentData ? {
    sul: paymentData.price_sul || defaultPrices.sul,
    tl: paymentData.price_tl || defaultPrices.tl,
    cl: paymentData.price_cl || defaultPrices.cl,
    el: paymentData.price_el || defaultPrices.el
  } : defaultPrices;
  const addons = paymentData ? [
    {
      title: paymentData.addons1_title || "Under-Construction",
      prices: {
        sul: paymentData.addons1_sul || "400",
        tl: paymentData.addons1_tl || "800",
        cl: paymentData.addons1_cl || "1200",
        el: paymentData.addons1_el || "1600"
      }
    },
    {
      title: paymentData.addons2_title || "Completed",
      prices: {
        sul: paymentData.addons2_sul || "600",
        tl: paymentData.addons2_tl || "1200",
        cl: paymentData.addons2_cl || "1800",
        el: paymentData.addons2_el || "2400"
      }
    }
  ].filter((addon) => addon.title) : [
    {
      title: "Under-Construction",
      prices: { sul: "400", tl: "800", cl: "1200", el: "1600" }
    },
    {
      title: "Completed",
      prices: { sul: "600", tl: "1200", cl: "1800", el: "2400" }
    }
  ];
  const timeline = paymentData?.timeline || "5-6 Business Days";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": industryData?.meta_title || "Subscription", "description": industryData?.meta_desc || "Choose your subscription plan", "data-astro-cid-ixuhtx4s": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="site-container overflow-x-clip" data-astro-cid-ixuhtx4s> <div class="pt-28 md:pt-36" data-astro-cid-ixuhtx4s> <!-- Container --> <!-- Back Arrow and Title --> <div class="mx-auto flex flex-col items-center space-y-4 text-center" data-astro-cid-ixuhtx4s> <!-- Back Icon and Heading --> <div class="mb-6 flex items-center space-x-2" data-astro-cid-ixuhtx4s> <span class="cursor-pointer text-2xl hover:text-gray-600 dark:hover:text-gray-300" data-astro-cid-ixuhtx4s><a href="#" onclick="history.back()" data-astro-cid-ixuhtx4s> ${renderComponent($$result2, "Image", $$Image, { "src": payarrowImage, "alt": "Back", "class": "h-8 w-8", "data-astro-cid-ixuhtx4s": true })} </a></span> <h1 class="text-4xl font-bold" data-astro-cid-ixuhtx4s>${unescapeHTML(industryData.header_title)}</h1> </div> <!-- Subheading --> <div class="mt-6" data-astro-cid-ixuhtx4s> <h2 class="text-lg font-semibold text-black sm:text-xl dark:text-white" data-astro-cid-ixuhtx4s>
Choose the Right Plan for You
</h2> <p class="mt-2 max-w-3xl text-left text-xs text-gray-600 sm:text-base dark:text-gray-300" data-astro-cid-ixuhtx4s>
Unlock the power of our software with flexible licensing options to suit your needs.
						Whether you're a solo operator or a large corporation, we've got you covered. Choose the
						plan that's right for you and experience the benefits of our software to the fullest.
</p> </div> </div> </div> <!-- plans --> <div class="container mx-auto px-4 py-12" data-astro-cid-ixuhtx4s> <h1 class="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white" data-astro-cid-ixuhtx4s>
Choose Your License
</h1> <div class="flex flex-wrap" data-astro-cid-ixuhtx4s> <div class="mb-8 w-full text-center font-bold md:w-full " data-astro-cid-ixuhtx4s>
Select your currency
<select class="price-typ rounded-md dark:bg-black" name="currency" id="currency" data-astro-cid-ixuhtx4s> ${currencyData.map((cur) => renderTemplate`<option${addAttribute(cur, "value")}${addAttribute(cur === "INR", "selected")} data-astro-cid-ixuhtx4s> ${cur} </option>`)} </select> </div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4" data-astro-cid-ixuhtx4s> <!-- Single User License --> <div class="dark:bg-dark-800 flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105" data-license="sul" data-astro-cid-ixuhtx4s> <div class="bg-white p-6" data-astro-cid-ixuhtx4s> <h2 class="mb-2 text-xl font-bold text-black" data-astro-cid-ixuhtx4s>Single User License</h2> <p class="mb-4 text-gray-600" data-astro-cid-ixuhtx4s>
Perfect for solo users requiring full dashboard access.
</p> <div class="my-6" data-astro-cid-ixuhtx4s> <span class="price-display text-3xl font-bold text-gray-800"${addAttribute(prices.sul, "data-inr-price")} data-astro-cid-ixuhtx4s>₹${prices.sul}</span> </div> <!-- Add this new element for total price --> <div class="total-price-container hidden" data-astro-cid-ixuhtx4s> <div class="border-t border-gray-300 my-2" data-astro-cid-ixuhtx4s></div> <div class="flex justify-between items-center" data-astro-cid-ixuhtx4s> <span class="font-semibold dark:text-black" data-astro-cid-ixuhtx4s>Total:</span> <span class="total-price text-2xl font-bold dark:text-[#3192EF]" data-astro-cid-ixuhtx4s>₹0</span> </div> </div> <div class="selected-addons mb-4 space-y-2 hidden" data-astro-cid-ixuhtx4s></div> <button class="w-full rounded bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-3 font-bold text-white transition-colors duration-300 " data-astro-cid-ixuhtx4s>
SUBSCRIBE NOW
</button> </div> <div class="flex flex-grow flex-col border-t border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-black" data-astro-cid-ixuhtx4s> <h3 class="mb-3 font-semibold text-gray-800 dark:text-white" data-astro-cid-ixuhtx4s>
Core Features for a Powerful Start
</h3> <ul class="space-y-2" data-astro-cid-ixuhtx4s> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Single User Access Only
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Interactive Dashboard Access
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Multi-Language Support
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Personalized Training and Support
</li> </ul> <div class="mt-auto pt-4" data-astro-cid-ixuhtx4s> <a href="#" class="flex items-center text-blue-600 hover:underline dark:text-blue-400" data-astro-cid-ixuhtx4s>See all features ➤</a> </div> </div> </div> <!-- Team License --> <div class="dark:bg-dark-800 relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-purple-800 bg-white shadow-md transition-transform duration-300 hover:scale-105" data-license="tl" data-astro-cid-ixuhtx4s> <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg bg-gradient-to-r from-purple-500 to-purple-800 px-3 py-1 text-sm font-bold text-white" data-astro-cid-ixuhtx4s>
MOST POPULAR
</div> <div class="bg-white p-6 mt-2" data-astro-cid-ixuhtx4s> <h2 class="mb-2 text-xl font-bold text-black" data-astro-cid-ixuhtx4s>Team License</h2> <p class="mb-4 text-gray-600" data-astro-cid-ixuhtx4s>Access upto 5 Users within the Same Organization.</p> <div class="my-6" data-astro-cid-ixuhtx4s> <span class="price-display text-3xl font-bold text-gray-800"${addAttribute(prices.tl, "data-inr-price")} data-astro-cid-ixuhtx4s>₹${prices.tl}</span> </div> <!-- Add this new element for total price --> <div class="total-price-container hidden" data-astro-cid-ixuhtx4s> <div class="border-t border-gray-300 my-2" data-astro-cid-ixuhtx4s></div> <div class="flex justify-between items-center" data-astro-cid-ixuhtx4s> <span class="font-semibold dark:text-black" data-astro-cid-ixuhtx4s>Total:</span> <span class="total-price text-2xl font-bold dark:text-black" data-astro-cid-ixuhtx4s>₹0</span> </div> </div> <div class="selected-addons mb-4 space-y-2 hidden" data-astro-cid-ixuhtx4s></div> <button class="w-full rounded bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-3 font-bold text-white transition-colors duration-300" data-astro-cid-ixuhtx4s>
SUBSCRIBE NOW
</button> </div> <div class="flex flex-grow flex-col border-t border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-black" data-astro-cid-ixuhtx4s> <h3 class="mb-3 font-semibold text-gray-800 dark:text-white" data-astro-cid-ixuhtx4s>
Everything in Single User License Plus
</h3> <ul class="space-y-2" data-astro-cid-ixuhtx4s> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Access upto 5 Users within the Same Organization
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Integrated Sales Tools
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Corporate Admin
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Customized Email Alerts
</li> </ul> <div class="mt-auto pt-4" data-astro-cid-ixuhtx4s> <a href="#" class="flex items-center text-blue-600 hover:underline dark:text-blue-400" data-astro-cid-ixuhtx4s>See all features ➤</a> </div> </div> </div> <!-- Corporate License --> <div class="dark:bg-dark-800 flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105" data-license="cl" data-astro-cid-ixuhtx4s> <div class="p-6" data-astro-cid-ixuhtx4s> <h2 class="mb-2 text-xl font-bold text-black" data-astro-cid-ixuhtx4s>Corporate License</h2> <p class="mb-4 text-gray-600" data-astro-cid-ixuhtx4s>
Unlimited access for seamless enterprise-wide integration.
</p> <div class="my-6" data-astro-cid-ixuhtx4s> <span class="price-display text-3xl font-bold text-gray-800"${addAttribute(prices.cl, "data-inr-price")} data-astro-cid-ixuhtx4s>₹${prices.cl}</span> </div> <!-- Add this new element for total price --> <div class="total-price-container hidden" data-astro-cid-ixuhtx4s> <div class="border-t border-gray-300 my-2" data-astro-cid-ixuhtx4s></div> <div class="flex justify-between items-center" data-astro-cid-ixuhtx4s> <span class="font-semibold dark:text-black" data-astro-cid-ixuhtx4s>Total:</span> <span class="total-price text-2xl font-bold dark:text-gray-800" data-astro-cid-ixuhtx4s>₹0</span> </div> </div> <div class="selected-addons mb-4 space-y-2 hidden" data-astro-cid-ixuhtx4s></div> <button class="w-full rounded bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-3 font-bold text-white transition-colors duration-300 " data-astro-cid-ixuhtx4s>
SUBSCRIBE NOW
</button> </div> <div class="flex flex-grow flex-col border-t border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-black" data-astro-cid-ixuhtx4s> <h3 class="mb-3 font-semibold text-gray-800 dark:text-white" data-astro-cid-ixuhtx4s>
Everything in Team License Plus
</h3> <ul class="space-y-2" data-astro-cid-ixuhtx4s> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Top-tier Onboarding and Support
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Unlimited Access to all your Employees
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Dedicated Account Manager and Analyst
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
White Label (Your Custom Logo and Brand Colors)
</li> </ul> <div class="mt-auto pt-4" data-astro-cid-ixuhtx4s> <a href="#" class="flex items-center text-blue-600 hover:underline dark:text-blue-400" data-astro-cid-ixuhtx4s>See all features ➤</a> </div> </div> </div> <!-- Corporate PLUS License --> <div class="dark:bg-dark-800 relative flex h-full flex-col overflow-hidden rounded-lg   bg-white shadow-md transition-transform duration-300 hover:scale-105" data-license="el" data-astro-cid-ixuhtx4s> <div class="p-6" data-astro-cid-ixuhtx4s> <h2 class="mb-2 text-xl font-bold text-gray-800" data-astro-cid-ixuhtx4s>Corporate PLUS License</h2> <p class="mb-4 text-gray-600" data-astro-cid-ixuhtx4s>Comprehensive access with advanced customization</p> <div class="my-6" data-astro-cid-ixuhtx4s> <span class="price-display text-3xl font-bold text-gray-800"${addAttribute(prices.el, "data-inr-price")} data-astro-cid-ixuhtx4s>₹${prices.el}</span> </div> <!-- Add this new element for total price --> <div class="total-price-container hidden" data-astro-cid-ixuhtx4s> <div class="border-t border-gray-300 my-2" data-astro-cid-ixuhtx4s></div> <div class="flex justify-between items-center" data-astro-cid-ixuhtx4s> <span class="font-semibold dark:text-black" data-astro-cid-ixuhtx4s>Total:</span> <span class="total-price text-2xl font-bold dark:text-gray-800" data-astro-cid-ixuhtx4s>₹0</span> </div> </div> <div class="selected-addons mb-4 space-y-2 hidden" data-astro-cid-ixuhtx4s></div> <button class="w-full rounded bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-3 font-bold text-white transition-colors duration-300" data-astro-cid-ixuhtx4s>
SUBSCRIBE NOW
</button> </div> <div class="flex flex-grow flex-col border-t border-gray-200 bg-gray-50 p-6 dark:bg-black" data-astro-cid-ixuhtx4s> <h3 class="mb-3 font-semibold text-gray-800 dark:text-white" data-astro-cid-ixuhtx4s>
Everything in Corporate License Plus
</h3> <ul class="space-y-2" data-astro-cid-ixuhtx4s> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Quarterly Industry Reports
</li> <li class="flex items-center text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <svg class="mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ixuhtx4s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ixuhtx4s></path> </svg>
Customizable Platform
</li> </ul> <div class="mt-auto pt-4" data-astro-cid-ixuhtx4s> <a href="#" class="flex items-center text-blue-600 hover:underline dark:text-blue-400" data-astro-cid-ixuhtx4s>See all features ➤</a> </div> </div> </div> </div> </div> </div> <div data-astro-cid-ixuhtx4s> <table class="w-full" data-astro-cid-ixuhtx4s> <tbody data-astro-cid-ixuhtx4s> <!-- Header Row --> <tr class="bg-gray-100 dark:bg-gray-800" data-astro-cid-ixuhtx4s> <td colspan="5" class="py-3 text-center" data-astro-cid-ixuhtx4s> <h1 class="text-base font-bold text-gray-800 dark:text-gray-200" data-astro-cid-ixuhtx4s>
Customize your plan with Pro add-ons
</h1> </td> </tr> ${addons.map((addon, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ixuhtx4s": true }, { "default": ($$result3) => renderTemplate`  <tr data-astro-cid-ixuhtx4s> <td colspan="5" class="py-3 pl-2 text-left" data-astro-cid-ixuhtx4s> <h6 class="text-base font-medium text-gray-800 dark:text-gray-200" data-astro-cid-ixuhtx4s> ${index === 0 ? "Add Other Project Stages to Plan" : ""} </h6> </td> </tr>  <tr${addAttribute(index % 2 === 0 ? "bg-gray-100 dark:bg-gray-900" : "", "class")} data-astro-cid-ixuhtx4s> <td class="w-1/5 px-4 py-3 text-left text-gray-800 dark:text-gray-200" data-astro-cid-ixuhtx4s> <a href="javascript:void(0)" class="flex items-center gap-1"${addAttribute(addon.title === "Under-Construction" ? "Monitor ongoing construction projects to identify timely subcontracting, supply, or service opportunities, and to keep an eye on competitor activities and progress." : "Access a comprehensive database of completed projects to identify O&M opportunities, analyze competitor activity, and uncover potential acquisition targets.", "title")} data-astro-cid-ixuhtx4s> ${addon.title} ${renderComponent($$result3, "Image", $$Image, { "src": info, "class": "h-4 w-4", "alt": "info", "data-astro-cid-ixuhtx4s": true })} </a> </td> <!-- Prices for each license type --> <td class="py-3 text-center" data-astro-cid-ixuhtx4s> <label class="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <input type="checkbox" class="form-checkbox h-4 w-4 rounded-sm text-blue-600 dark:bg-gray-800"${addAttribute(`addon_${index}_sul`, "name")}${addAttribute(`${addon.title}|${addon.prices.sul}`, "value")} data-license="sul"${addAttribute(addon.prices.sul, "data-price")}${addAttribute(addon.title, "data-title")} data-astro-cid-ixuhtx4s>
$${addon.prices.sul} </label> </td> <td class="py-3 text-center" data-astro-cid-ixuhtx4s> <label class="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 dark:bg-gray-800"${addAttribute(`addon_${index}_tl`, "name")}${addAttribute(`${addon.title}|${addon.prices.tl}`, "value")} data-license="tl"${addAttribute(addon.prices.tl, "data-price")}${addAttribute(addon.title, "data-title")} data-astro-cid-ixuhtx4s>
$${addon.prices.tl} </label> </td> <td class="py-3 text-center" data-astro-cid-ixuhtx4s> <label class="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 dark:bg-gray-800"${addAttribute(`addon_${index}_cl`, "name")}${addAttribute(`${addon.title}|${addon.prices.cl}`, "value")} data-license="cl"${addAttribute(addon.prices.cl, "data-price")}${addAttribute(addon.title, "data-title")} data-astro-cid-ixuhtx4s>
$${addon.prices.cl} </label> </td> <td class="py-3 text-center" data-astro-cid-ixuhtx4s> <label class="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300" data-astro-cid-ixuhtx4s> <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 dark:bg-gray-800"${addAttribute(`addon_${index}_el`, "name")}${addAttribute(`${addon.title}|${addon.prices.el}`, "value")} data-license="el"${addAttribute(addon.prices.el, "data-price")}${addAttribute(addon.title, "data-title")} data-astro-cid-ixuhtx4s>
$${addon.prices.el} </label> </td> </tr> ` })}`)} </tbody> </table> <div class="flex justify-center" data-astro-cid-ixuhtx4s> <p data-astro-cid-ixuhtx4s>Timeline: ${timeline}</p> </div> </div> <!-- Payment Logos --> <div class="flex flex-wrap items-center justify-center gap-10 py-8" data-astro-cid-ixuhtx4s> ${renderComponent($$result2, "Image", $$Image, { "src": dinnerclub, "alt": "dinner-club", "height": 150, "width": 150, "data-astro-cid-ixuhtx4s": true })} ${renderComponent($$result2, "Image", $$Image, { "src": mastercard, "alt": "mastercard", "height": 100, "width": 100, "data-astro-cid-ixuhtx4s": true })} ${renderComponent($$result2, "Image", $$Image, { "src": paypal, "alt": "paypal", "height": 150, "width": 150, "data-astro-cid-ixuhtx4s": true })} ${renderComponent($$result2, "Image", $$Image, { "src": pci, "alt": "pci", "height": 150, "width": 150, "data-astro-cid-ixuhtx4s": true })} ${renderComponent($$result2, "Image", $$Image, { "src": razorpay, "alt": "razorpay", "height": 150, "width": 150, "data-astro-cid-ixuhtx4s": true })} ${renderComponent($$result2, "Image", $$Image, { "src": visa, "alt": "visa", "height": 100, "width": 100, "data-astro-cid-ixuhtx4s": true })} <!-- Need Assistance Section --> </div> <div class="flex flex-col items-start justify-center gap-8 px-4 py-8 md:flex-row md:items-center" data-astro-cid-ixuhtx4s> <!-- Centered Title --> <div class="flex items-center gap-2" data-astro-cid-ixuhtx4s> ${renderComponent($$result2, "Image", $$Image, { "src": need, "class": "h-20 w-20", "alt": "info", "data-astro-cid-ixuhtx4s": true })} <h2 class="text-xl font-semibold text-gray-900 dark:text-white" data-astro-cid-ixuhtx4s>Need Assistance</h2> </div> </div> <div class="flex flex-col items-start justify-center gap-8 px-4 py-8 md:flex-row md:items-center" data-astro-cid-ixuhtx4s> <!-- Phone --> <div class="flex items-start gap-4" data-astro-cid-ixuhtx4s> ${renderComponent($$result2, "Image", $$Image, { "src": phonecall, "class": "h-20 w-20", "alt": "info", "data-astro-cid-ixuhtx4s": true })} <div class="text-gray-800 dark:text-gray-200" data-astro-cid-ixuhtx4s> <p data-astro-cid-ixuhtx4s><strong data-astro-cid-ixuhtx4s>Americas (USA):</strong> +1 (917) 993 7467</p> <p data-astro-cid-ixuhtx4s><strong data-astro-cid-ixuhtx4s>Asia (India):</strong> +91 8500 460 460</p> </div> </div> <!-- Email --> <div class="flex items-center gap-3" data-astro-cid-ixuhtx4s> ${renderComponent($$result2, "Image", $$Image, { "src": email, "class": "h-20 w-20", "alt": "info", "data-astro-cid-ixuhtx4s": true })} <p class="text-gray-800 dark:text-gray-200" data-astro-cid-ixuhtx4s>sales@blackridgeresearch.com</p> </div> </div> <!-- Footer Note --> <div class="px-4 pb-8 text-center text-sm text-gray-600 dark:text-gray-400" data-astro-cid-ixuhtx4s> <p data-astro-cid-ixuhtx4s>Subscription automatically renews. Cancel at any time to stop future charges.</p> <p data-astro-cid-ixuhtx4s>
Already have a Subscription? <a href="#" class="text-blue-600 hover:underline" data-astro-cid-ixuhtx4s>Renew Now</a> </p> </div> ${renderComponent($$result2, "TestimonialsColumnsBlackridge", $$TestimonialsColumnsBlackridge, { "data-astro-cid-ixuhtx4s": true })} ${renderComponent($$result2, "SubscriptionFaq", $$SubscriptionFaq, { "data-astro-cid-ixuhtx4s": true })} <!-- sticky header --> <!-- Sticky header --> <div id="sticky-header" class="fixed left-0 right-0 top-0 z-50 -translate-y-full bg-white shadow-md transition-transform duration-300 dark:bg-gray-900" data-astro-cid-ixuhtx4s> <div class="site-container mx-auto px-4 py-4" data-astro-cid-ixuhtx4s> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4" data-astro-cid-ixuhtx4s> <!-- Single User License --> <div class="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md " data-astro-cid-ixuhtx4s> <div class="bg-white  p-6" data-astro-cid-ixuhtx4s> <h2 class="mb-2 text-lg font-bold text-black" data-astro-cid-ixuhtx4s>Single User License</h2> <div class="my-3" data-astro-cid-ixuhtx4s> <span class="text-xl font-bold text-gray-800" data-astro-cid-ixuhtx4s>$3990</span> </div> <button class="w-full rounded bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 text-sm font-bold text-white transition-colors duration-300" data-astro-cid-ixuhtx4s>
SUBSCRIBE NOW
</button> </div> </div> <!-- Team License --> <div class="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-purple-800 bg-white shadow-md " data-astro-cid-ixuhtx4s> <div class="absolute right-0 top-0 rounded-bl-lg bg-gradient-to-r from-purple-500 to-purple-800 px-3 py-1 text-xs font-bold text-white" data-astro-cid-ixuhtx4s>
MOST POPULAR
</div> <div class="bg-white  p-6" data-astro-cid-ixuhtx4s> <h2 class="mb-2 text-lg font-bold text-black " data-astro-cid-ixuhtx4s>Team License</h2> <div class="my-3" data-astro-cid-ixuhtx4s> <span class="text-xl font-bold text-gray-800" data-astro-cid-ixuhtx4s>$4490</span> </div> <button class="w-full rounded bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 " data-astro-cid-ixuhtx4s>
SUBSCRIBE NOW
</button> </div> </div> <!-- Corporate License --> <div class="dark:bg-dark-800 flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105" data-astro-cid-ixuhtx4s> <div class="p-6" data-astro-cid-ixuhtx4s> <h2 class="mb-2 text-lg font-bold text-gray-800" data-astro-cid-ixuhtx4s>Corporate License</h2> <div class="my-3" data-astro-cid-ixuhtx4s> <span class="text-xl font-bold text-gray-800" data-astro-cid-ixuhtx4s>$8990</span> </div> <button class="w-full rounded bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 " data-astro-cid-ixuhtx4s>
SUBSCRIBE NOW
</button> </div> </div> <!-- Corporate PLUS License --> <div class="dark:bg-dark-800 relative flex h-full flex-col overflow-hidden rounded-lg  bg-white shadow-md transition-transform duration-300 hover:scale-105" data-astro-cid-ixuhtx4s> <div class="p-6" data-astro-cid-ixuhtx4s> <h2 class="mb-2 text-lg font-bold text-gray-800" data-astro-cid-ixuhtx4s>Corporate PLUS License</h2> <div class="my-3" data-astro-cid-ixuhtx4s> <span class="text-xl font-bold text-gray-800" data-astro-cid-ixuhtx4s>$10490</span> </div> <button class="w-full rounded bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 " data-astro-cid-ixuhtx4s>
SUBSCRIBE NOW
</button> </div> </div> </div> </div> </div> </div> ` })}    `;
}, "/home/blackridgeorg/public_html/src/pages/new-projects-near-me/[...slug]/subscribe/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/new-projects-near-me/[...slug]/subscribe/index.astro";
const $$url = "/new-projects-near-me/[...slug]/subscribe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
