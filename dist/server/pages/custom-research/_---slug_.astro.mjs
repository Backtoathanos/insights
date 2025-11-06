/* empty css                                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$SubscriptionFaq } from '../../chunks/subscriptionFaq_BBPFbm2G.mjs';
import { a as $$Icon } from '../../chunks/Button_BaSqYn27.mjs';
import { t as testimonial1, c as testimonial2, d as testimonial3, e as testimonial4 } from '../../chunks/translationUtils_XhrKexoJ.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Ct7febRF.mjs';
export { renderers } from '../../renderers.mjs';

const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const url = "https://adminapi.blackridgeresearch.com/custom-research/listid/market-research-and-analysis-service";
  const response = await fetch(url);
  const data = await response.json();
  const pageData = data.data[0];
  const testimonials = [
    {
      author: "Sarah Chen",
      company: "CEO, TechFlow Solutions",
      content: "KalRock's market analysis completely changed how we approach our industry. Their competitive intelligence revealed opportunities we never knew existed, and we've increased our market share by 23% in just eight months.",
      img: testimonial1
    },
    {
      author: "Michael Rodriguez",
      company: "VP Marketing, HealthFirst Medical",
      content: "The customer research insights were game-changing. We redesigned our entire product line based on their findings and saw a 40% increase in customer satisfaction scores. Worth every penny.",
      img: testimonial2
    },
    {
      author: "Jennifer Park",
      company: "Founder, GreenTech Innovations",
      content: "Their market sizing analysis helped us secure $2.3M in Series A funding. Investors were impressed with the depth and accuracy of the market data. KalRock delivered exactly what we needed.",
      img: testimonial3
    },
    {
      author: "David Thompson",
      company: "COO, Retail Plus Group",
      content: "We were planning to enter three new markets but KalRock's analysis showed us which one had the real potential. We focused our resources and achieved profitability 6 months ahead of schedule.",
      img: testimonial4
    },
    {
      author: "Lisa Wang",
      company: "Director, Premium Services Co.",
      content: "The pricing analysis saved us from a major mistake. We were about to cut prices to compete, but their research showed our customers valued quality over cost. Revenue increased 18% instead.",
      img: testimonial1
    },
    {
      author: "Robert Kim",
      company: "Strategic Planning Manager, Future Industries",
      content: "Professional, thorough, and incredibly insightful. KalRock's trend analysis helped us pivot our business model before our competitors even saw the changes coming. Highly recommended.",
      img: testimonial2
    }
  ];
  const services = [
    {
      icon: "\u{1F50D}",
      title: "Competitor Analysis",
      description: "Get complete profiles of your competitors, their strategies, pricing, and market position to identify opportunities for differentiation."
    },
    {
      icon: "\u{1F4C8}",
      title: "Market Sizing Studies",
      description: "Understand the true size of your market opportunity with detailed analysis of market segments and growth potential."
    },
    {
      icon: "\u{1F465}",
      title: "Customer Research",
      description: "Deep dive into your customer behavior, preferences, and buying patterns to improve your marketing and product strategy."
    },
    {
      icon: "\u{1F310}",
      title: "Market Entry Analysis",
      description: "Evaluate new market opportunities and develop entry strategies for geographic expansion or new product launches."
    },
    {
      icon: "\u{1F4B0}",
      title: "Pricing Strategy Research",
      description: "Optimize your pricing with competitive pricing analysis and customer price sensitivity studies."
    },
    {
      icon: "\u{1F52E}",
      title: "Industry Trend Analysis",
      description: "Stay ahead of market changes with comprehensive trend analysis and forecasting to anticipate future opportunities and threats."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageData.meta_title || "Market Analysis and Assessment", "description": pageData.meta_desc || "Get clear market insights that drive smart business decisions" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-primary-900 to-primary-700 text-white"> <div class="site-container mx-auto px-5 py-20"> <div class="grid md:grid-cols-2 gap-4 items-center"> <div> <h1 class="!text-6xl md:text-5xl font-bold leading-tight mb-5">${pageData.hero_heading}</h1> <p class="text-xl opacity-90 mb-8">${pageData.hero_description}</p> <div class="flex gap-24 mb-8"> <div class="text-center"> <span class="block text-5xl font-bold">500+</span> <span class="block text-sm opacity-80">Markets Analyzed</span> <span class="text-xs opacity-80">Comprehensive market coverage</span> </div> <div class="text-center"> <span class="block text-5xl font-bold">92%</span> <span class="block text-sm opacity-80">Client Success Rate</span> <span class="text-xs opacity-80">Proven track record</span> </div> </div> <div class="bg-white/10 p-5 rounded-xl border-2 border-white/20 mt-5"> <h4 class="text-lg font-bold mb-4">Market Research Cost Comparison</h4> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"> <div class="bg-white p-4 rounded-lg"> <span class="block text-sm text-gray-500 opacity-80">Big Consulting Firms</span> <span class="block text-2xl font-bold text-primary-500">$25,000+</span> </div> <div class="bg-white p-4 rounded-lg"> <span class="block text-sm text-gray-500 opacity-80">Market Research Agencies</span> <span class="block text-2xl font-bold text-primary-500">$15,000+</span> </div> <div class="bg-primary-900 p-4 rounded-lg"> <span class="block text-sm text-white">Blackridge Research</span> <span class="block text-2xl font-bold text-white">$4,500</span> </div> </div> </div> </div> <div class="flex justify-end mr-4"> <div class="w-full max-w-md bg-white shadow-2xl rounded-xl"> <div class="p-8 space-y-6"> <div> <h3 class="text-xl font-bold text-black mb-2">Get Your Market Analysis Quote</h3> <p class="text-gray-600 text-sm leading-relaxed">
Tell us about your market research needs and get a detailed analysis proposal within 24 hours.
</p> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="text-sm font-medium text-black mb-2 block">Name</label> <input type="text" placeholder="Your full name" class="bg-input border border-border px-3 py-2 w-full rounded-md text-sm"> </div> <div> <label class="text-sm font-medium text-black mb-2 block">Email</label> <input type="email" placeholder="you@company.com" class="bg-input border border-border px-3 py-2 w-full rounded-md text-sm"> </div> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="text-sm font-medium text-black mb-2 block">Company</label> <input type="text" placeholder="Your company name" class="bg-input border border-border px-3 py-2 w-full rounded-md text-sm"> </div> <div> <label class="text-sm font-medium text-black mb-2 block">Phone</label> <div class="flex"> <select class="bg-input border border-border rounded-l-md px-3 py-2 text-sm text-black"> <option>🇺🇸 +1</option> <option>🇬🇧 +44</option> <option>🇨🇦 +1</option> </select> <input type="text" placeholder="+1" class="bg-input border border-border rounded-r-md border-l-0 px-3 py-2 text-sm w-full"> </div> </div> </div> <div> <label class="text-sm font-medium text-black mb-2 block">Project Details</label> <textarea placeholder="Tell us about your project requirements..." class="bg-input border border-border px-3 py-2 w-full rounded-md text-sm min-h-[6rem]"></textarea> </div> <div> <label class="text-sm font-medium text-black mb-2 block">Upload File (Optional)</label> <div class="relative"> <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx,.txt,.xlsx,.pptx"> <div class="bg-input border-2 border-dashed border-gray-400 rounded-md p-4 text-center hover:border-primary transition-colors"> <svg class="w-6 h-6 mx-auto mb-2 text-muted-foreground" fill="text-gray-600" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path> </svg> <p class="text-sm text-muted-foreground text-gray-600">
Click to upload supporting documents
</p> </div> </div> </div> <div class="flex gap-3"> <button class="flex-1 bg-gradient-to-br from-primary-900 to-primary-700 text-white py-2 px-4 rounded-md">Schedule Call</button> <button class="flex-1 border border-primary-800 text-primary-800 py-2 px-4 rounded-md">Request Quote</button> </div> <div class="flex items-start gap-3 p-4 bg-muted rounded-md"> <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="text-primary-800" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <div> <p class="text-sm font-bold text-black mb-1">100% Privacy Guaranteed</p> <p class="text-xs text-gray-600 leading-relaxed">
We value your privacy and will never share or sell your information with third parties.
                    You can unsubscribe anytime.
</p> </div> </div> </div> </div> </div> </div> </div> </section>  <section class="py-20 bg-gray-50 dark:bg-black"> <div class="site-container mx-auto px-5"> <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-5">${pageData.services_title}</h2> <div class="flex justify-center"> <p class="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">${unescapeHTML(pageData.services_description)}</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950"> <div class="text-5xl mb-6">🎯</div> <h3 class="text-gray-900 dark:text-white mb-4">${unescapeHTML(pageData.services_box1)}</h3> </div> <div class="hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950"> <div class="text-5xl mb-6">📊</div> <h3 class=" text-gray-900 dark:text-white mb-4">${unescapeHTML(pageData.services_box2)}</h3> </div> <div class="hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950"> <div class="text-5xl mb-6">🤔</div> <h3 class=" text-gray-900 dark:text-white mb-4">${unescapeHTML(pageData.services_box3)}</h3> </div> <div class="hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950"> <div class="text-5xl mb-6">💸</div> <h3 class="text-gray-900 dark:text-white mb-4">${unescapeHTML(pageData.services_box4)}</h3> </div> <div class="hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950"> <div class="text-5xl mb-6">🌍</div> <h3 class="text-gray-900 dark:text-white mb-4">${unescapeHTML(pageData.services_box5)}</h3> </div> <div class="hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950"> <div class="text-5xl mb-6">📈</div> <h3 class=" text-gray-900 dark:text-white mb-4">${unescapeHTML(pageData.services_box6)}</h3> </div> </div> </div> </section>   <section class="py-20 bg-white dark:bg-black"> <div class="site-container mx-auto px-5"> <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-5">${pageData.why_title}</h2> <div class="flex justify-center"> <p class="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">${unescapeHTML(pageData.why_description)}</p> </div> <div class="bg-gray-50 dark:bg-base-950 p-10 rounded-2xl border-l-4 border-blue-500"> <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">${unescapeHTML(pageData.why_box1)}</p> <!-- Show all content without hiding --> <div> <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">${unescapeHTML(pageData.why_box2)}</p> <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">${unescapeHTML(pageData.why_box3)}</p> <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">${unescapeHTML(pageData.why_box4)}</p> <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">${unescapeHTML(pageData.why_box5)}</p> <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">${unescapeHTML(pageData.why_box6)}</p> </div> <!-- Button to redirect to another page --> <a href="/your-target-page" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
Learn More
</a> </div> </div> </section>  <section class="py-20 bg-gray-50 dark:bg-black"> <div class="site-container mx-auto px-5"> <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-5">${pageData.hiw_title}</h2> <div class="flex justify-center"> <p class="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">${unescapeHTML(pageData.hiw_description)}</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Solution Card 1 --> <div class="p-8 bg-white dark:bg-base-950 border-l-4 border-blue-500 rounded-r-lg shadow-md"> <div>${unescapeHTML(pageData.hiw_box1)}</div> </div> <!-- Solution Card 2 --> <div class="p-8 bg-white dark:bg-base-950 border-l-4 border-blue-500 rounded-r-lg shadow-md"> <div>${unescapeHTML(pageData.hiw_box2)}</div> </div> <!-- Solution Card 3 --> <div class="p-8 bg-white dark:bg-base-950 border-l-4 border-blue-500 rounded-r-lg shadow-md"> <div>${unescapeHTML(pageData.hiw_box3)}</div> </div> <!-- Solution Card 4 --> <div class="p-8 bg-white dark:bg-base-950 border-l-4 border-blue-500 rounded-r-lg shadow-md"> <div>${unescapeHTML(pageData.hiw_box4)}</div> </div> <!-- Solution Card 5 --> <div class="p-8 bg-white dark:bg-base-950 border-l-4 border-blue-500 rounded-r-lg shadow-md"> <div>${unescapeHTML(pageData.hiw_box5)}</div> </div> <!-- Solution Card 6 --> <div class="p-8 bg-white dark:bg-base-950 border-l-4 border-blue-500 rounded-r-lg shadow-md"> <div>${unescapeHTML(pageData.hiw_box6)}</div> </div> </div> </div> </section>  <section class="py-20 bg-gray-50 dark:bg-black"> <div class="site-container mx-auto px-5"> <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-5">Our Market Research Services</h2> <p class="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">Choose the market analysis service that fits your business needs and budget.</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950"> <div class="text-5xl mb-6">${service.icon}</div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">${service.title}</h3> <p class="text-gray-600 dark:text-gray-300 mb-6">${service.description}</p> <a href="#" class="text-blue-500 dark:text-blue-400 font-bold text-sm hover:underline">
Learn More →
</a> </div>`)} </div> </div> </section>  <section class="py-20 bg-gradient-to-br from-gray-800 to-blue-800 text-white dark:from-gray-900 dark:to-blue-900"> <div class="site-container mx-auto px-5"> <h2 class="text-4xl font-bold text-center mb-5">How Our Market Analysis Process Works</h2> <p class="text-xl text-center opacity-90 mb-12">From initial consultation to final report delivery - here's what you can expect when working with us.</p> <!-- Zig-Zag Layout --> <div class="relative grid grid-cols-2 gap-x-10"> <!-- Vertical line in center --> <div class="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/30 transform -translate-x-1/2 z-0"></div> <!-- Step 1 --> <div class="flex justify-end pr-8 text-right relative z-10 mt-0"> <div class="max-w-xs"> <div class="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ml-auto mb-4">
1
</div> <h3 class="text-xl font-bold mb-2">Discovery Call</h3> <p class="opacity-90">We begin with a deep discussion to understand your goals and business context.</p> </div> </div> <!-- Step 2 --> <div class="flex justify-start pl-8 text-left relative z-10 mt-48"> <div class="max-w-xs"> <div class="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mr-auto mb-4">
2
</div> <h3 class="text-xl font-bold mb-2">Research Design</h3> <p class="opacity-90">We create a tailored research plan combining various methods for best results.</p> </div> </div> <!-- Step 3 --> <div class="flex justify-end pr-8 text-right relative z-10 mt-10"> <div class="max-w-xs"> <div class="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ml-auto mb-4">
3
</div> <h3 class="text-xl font-bold mb-2">Data Collection</h3> <p class="opacity-90">We gather data through surveys, expert interviews, and competitive insights.</p> </div> </div> <!-- Step 4 --> <div class="flex justify-start pl-8 text-left relative z-10 mt-48"> <div class="max-w-xs"> <div class="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mr-auto mb-4">
4
</div> <h3 class="text-xl font-bold mb-2">Analysis & Insights</h3> <p class="opacity-90">We break down the data into actionable insights aligned with your business.</p> </div> </div> <!-- Step 5 --> <div class="flex justify-end pr-8 text-right relative z-10 mt-12"> <div class="max-w-xs"> <div class="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ml-auto mb-4">
5
</div> <h3 class="text-xl font-bold mb-2">Report Delivery</h3> <p class="opacity-90">You receive a visual-rich, insightful, and strategic report ready for action.</p> </div> </div> <!-- Step 6 --> <div class="flex justify-start pl-8 text-left relative z-10 mt-72"> <div class="max-w-xs"> <div class="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mr-auto mb-4">
6
</div> <h3 class="text-xl font-bold mb-2">Strategy Session</h3> <p class="opacity-90">We guide you through the findings and help align them with next steps.</p> </div> </div> </div> </div> </section>   <section class="py-20 bg-gray-50 dark:bg-black"> <div class="site-container mx-auto px-5"> <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-5">What Our Clients Say About Our Market Research</h2> <p class="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">Real results from real businesses who transformed their strategy with our market intelligence.</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${testimonials.map((testimonial, index) => renderTemplate`<div class="bg-white dark:bg-base-950 p-8 rounded-2xl shadow-lg relative"> <div class="absolute -top-3 left-6 text-blue-500 text-5xl">"</div> <div class="flex items-center mb-4"> ${renderComponent($$result2, "Image", $$Image, { "src": testimonial.img, "alt": testimonial.author, "class": "w-12 h-12 rounded-full object-cover mr-4", "width": "48", "height": "48" })} <div> <div class="font-bold text-gray-900 dark:text-white">${testimonial.author}</div> <div class="text-gray-500 dark:text-gray-400 text-sm">${testimonial.company}</div> </div> </div> <p class="text-gray-600 dark:text-gray-300 italic mb-6">${testimonial.content}</p> <div class="flex space-x-1"> ${[...Array(5)].map((_, i) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "bi:star-fill", "class": "w-5 h-5 text-yellow-400" })}`)} </div> </div>`)} </div> </div> </section>  <section class="py-20 bg-gradient-to-br from-blue-500 to-gray-800 text-white"> <div class="site-container mx-auto px-5 text-center"> <h2 class="text-4xl font-bold mb-6">Ready to Make Smarter Business Decisions?</h2> <p class="text-xl opacity-90 mb-10">Stop guessing about your market. Get the insights you need to compete, grow, and win in your industry.</p> <div class="flex flex-col sm:flex-row justify-center gap-4"> <button onclick="scrollToForm()" class="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
Get Your Market Analysis Quote
</button> <!-- <a href="tel:+1234567890" class="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5">
          <Icon name="tabler/phone" class="h-5 w-5 inline mr-2" /> Call (555) 123-4567
        </a> --> </div> <div class="mt-10 text-sm opacity-80"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler/file-check", "class": "h-4 w-4 inline mr-1" })} 72-hour report delivery
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler/file-check", "class": "h-4 w-4 inline mr-1" })} 100% confidential
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler/file-check", "class": "h-4 w-4 inline mr-1" })} Satisfaction guaranteed
</div> </div> </section> ${renderComponent($$result2, "SubscriptionFaq", $$SubscriptionFaq, {})} ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/custom-research/[...slug].astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/custom-research/[...slug].astro";
const $$url = "/custom-research/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
