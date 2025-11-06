/* empty css                                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_BZKhPsJH.mjs';
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$PaymentSuccess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Onboarding - Blackridge Research & Consulting", "description": "Schedule your onboarding session and get started" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="site-container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8"> <!-- Hero Section --> <section class="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-2xl p-8 text-center text-white"> <div class="max-w-3xl mx-auto"> <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4"> <span class="text-lg"> ', `</span> </div> <div class="flex justify-center mb-4 text-black dark:text-white"> <h1 class="text-xl font-bold text-black  dark:text-white">Payment Successful</h1> </div> <h1 class="text-3xl sm:text-4xl font-bold mb-3  text-black dark:text-white">Welcome to Blackridge Research</h1> <p class="text-lg opacity-90 text-black dark:text-white">Let's get you set up with personalized training from our experts</p> </div> </section> <!-- Onboarding Progress Bar --> <section class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 mb-8    "> <div class="max-w-4xl mx-auto"> <h2 class="sr-only">Onboarding progress</h2> <!-- Labels --> <div class="flex justify-between mb-4 text-sm font-semibold text-gray-400 dark:text-gray-500"> <span class="text-blue-600 dark:text-blue-400">Payment</span> <span class="text-blue-600 dark:text-blue-400">Schedule</span> <span class="text-gray-500 dark:text-gray-400">Credentials</span> <span class="text-gray-500 dark:text-gray-400">Training</span> <span class="text-gray-500 dark:text-gray-400">Complete</span> </div> <!-- Track --> <div class="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"> <!-- Filled bar --> <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-full transition-all duration-500" style="width: 40%"></div> </div> </div> </section> <!-- Main Content --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Left Column - Info --> <div class="lg:col-span-2 space-y-6"> <!-- Quick Start Card --> <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl p-6"> <div class="flex items-start gap-4"> <div class="text-blue-600 dark:text-blue-400 text-2xl">\u26A1</div> <div> <h3 class="font-semibold text-lg mb-2">Quick Start Guide</h3> <p class="text-blue-800 dark:text-blue-200">
Your credentials will arrive within 24 hours. Schedule your onboarding now to get started immediately.
</p> </div> </div> </div> <!-- What to Expect --> <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"> <h2 class="text-2xl font-bold mb-6">Your Onboarding Includes</h2> <div class="space-y-6"> <div class="flex gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
\u23F0
</div> <div> <h3 class="font-semibold text-lg">30-Minute Orientation</h3> <p class="text-gray-600 dark:text-gray-400">
Tailored session to understand your specific needs in data centers, airports, and infrastructure.
</p> </div> </div> <div class="flex gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl">
\u{1F393}
</div> <div> <h3 class="font-semibold text-lg">Platform Walkthrough</h3> <p class="text-gray-600 dark:text-gray-400">
Hands-on training to navigate projects, filters, and analytics tools.
</p> </div> </div> <div class="flex gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xl">
\u{1F527}
</div> <div> <h3 class="font-semibold text-lg">Custom Configuration</h3> <p class="text-gray-600 dark:text-gray-400">
Set up alerts and preferences based on your sector and region focus.
</p> </div> </div> </div> </div> <!-- Needs Assessment --> <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"> <h2 class="text-2xl font-bold mb-6">Help Us Understand Your Needs</h2> <form class="space-y-6" id="onboardingForm"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="company" class="block text-sm font-medium mb-1">Company Name *</label> <input type="text" id="company" name="company" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"> </div> <div> <label for="role" class="block text-sm font-medium mb-1">Your Role *</label> <select id="role" name="role" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"> <option value="">Select your role</option> <option value="business-development">Business Development</option> <option value="project-manager">Project Manager</option> <option value="executive">Executive</option> <option value="other">Other</option> </select> </div> </div> <div> <label for="primary-sector" class="block text-sm font-medium mb-1">Primary Sector Interest *</label> <select id="primary-sector" name="primary-sector" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"> <option value="">Select primary sector</option> <option value="data-centers">Data Centers</option> <option value="airports">Airport Terminals</option> <option value="infrastructure">Infrastructure</option> </select> </div> <div> <label for="specific-needs" class="block text-sm font-medium mb-1">Specific Requirements</label> <textarea id="specific-needs" name="specific-needs" rows="4" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800" placeholder="What challenges are you hoping to solve with our platform?"></textarea> </div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
Submit Information
</button> </form> </div> </div> <!-- Right Column - Calendar --> <div class="space-y-6"> <!-- Calendar Widget --> <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 sticky top-6"> <h2 class="text-2xl font-bold mb-6 text-center">Schedule Your Session</h2> <div class="calendly-inline-widget" data-url="https://calendly.com/your-calendly-link/onboarding-session"></div> </div> <!-- Support Card --> <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"> <h3 class="font-semibold text-lg mb-4">Need Help?</h3> <div class="space-y-3"> <a href="mailto:support@blackridgeresearch.com" class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"> <span class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">\u2709\uFE0F</span>
Email Support
</a> <a href="tel:+918008004060" class="flex items-center gap-3 text-gray-700 dark:text:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"> <span class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">\u{1F4DE}</span>
+91 8008 004 060
</a> <a href="https://wa.me/918008004060" class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"> <span class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">\u{1F4AC}</span>
WhatsApp Chat
</a> </div> </div> </div> </div> </div>  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async><\/script> <script>
        // Form submission handler
        document.getElementById('onboardingForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Onboarding form submitted:', data);
            
            // Show success state
            const button = this.querySelector('button[type="submit"]');
            if (button) {
                button.disabled = true;
                button.innerHTML = \`
                    <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                \`;
                
                setTimeout(() => {
                    button.disabled = false;
                    button.textContent = 'Submitted \u2713';
                    button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                    button.classList.add('bg-green-600', 'hover:bg-green-700');
                    
                    setTimeout(() => {
                        button.textContent = 'Submit Information';
                        button.classList.remove('bg-green-600', 'hover:bg-green-700');
                        button.classList.add('bg-blue-600', 'hover:bg-blue-700');
                    }, 2000);
                }, 1500);
            }
        });

        // Initialize Calendly with prefill data
        document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const email = urlParams.get('email');
            const name = urlParams.get('name');
            
            if (email || name) {
                Calendly.initInlineWidget({
                    url: 'https://calendly.com/your-calendly-link/30min' + 
                         (email ? \`?email=\${encodeURIComponent(email)}\` : '') + 
                         (name ? \`&name=\${encodeURIComponent(name)}\` : ''),
                    parentElement: document.querySelector('.calendly-inline-widget'),
                    prefill: {
                        email: email || '',
                        name: name || ''
                    }
                });
            }
        });
    <\/script> `], [" ", '<div class="site-container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8"> <!-- Hero Section --> <section class="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-2xl p-8 text-center text-white"> <div class="max-w-3xl mx-auto"> <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4"> <span class="text-lg"> ', `</span> </div> <div class="flex justify-center mb-4 text-black dark:text-white"> <h1 class="text-xl font-bold text-black  dark:text-white">Payment Successful</h1> </div> <h1 class="text-3xl sm:text-4xl font-bold mb-3  text-black dark:text-white">Welcome to Blackridge Research</h1> <p class="text-lg opacity-90 text-black dark:text-white">Let's get you set up with personalized training from our experts</p> </div> </section> <!-- Onboarding Progress Bar --> <section class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 mb-8    "> <div class="max-w-4xl mx-auto"> <h2 class="sr-only">Onboarding progress</h2> <!-- Labels --> <div class="flex justify-between mb-4 text-sm font-semibold text-gray-400 dark:text-gray-500"> <span class="text-blue-600 dark:text-blue-400">Payment</span> <span class="text-blue-600 dark:text-blue-400">Schedule</span> <span class="text-gray-500 dark:text-gray-400">Credentials</span> <span class="text-gray-500 dark:text-gray-400">Training</span> <span class="text-gray-500 dark:text-gray-400">Complete</span> </div> <!-- Track --> <div class="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"> <!-- Filled bar --> <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-full transition-all duration-500" style="width: 40%"></div> </div> </div> </section> <!-- Main Content --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Left Column - Info --> <div class="lg:col-span-2 space-y-6"> <!-- Quick Start Card --> <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl p-6"> <div class="flex items-start gap-4"> <div class="text-blue-600 dark:text-blue-400 text-2xl">\u26A1</div> <div> <h3 class="font-semibold text-lg mb-2">Quick Start Guide</h3> <p class="text-blue-800 dark:text-blue-200">
Your credentials will arrive within 24 hours. Schedule your onboarding now to get started immediately.
</p> </div> </div> </div> <!-- What to Expect --> <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"> <h2 class="text-2xl font-bold mb-6">Your Onboarding Includes</h2> <div class="space-y-6"> <div class="flex gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
\u23F0
</div> <div> <h3 class="font-semibold text-lg">30-Minute Orientation</h3> <p class="text-gray-600 dark:text-gray-400">
Tailored session to understand your specific needs in data centers, airports, and infrastructure.
</p> </div> </div> <div class="flex gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl">
\u{1F393}
</div> <div> <h3 class="font-semibold text-lg">Platform Walkthrough</h3> <p class="text-gray-600 dark:text-gray-400">
Hands-on training to navigate projects, filters, and analytics tools.
</p> </div> </div> <div class="flex gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xl">
\u{1F527}
</div> <div> <h3 class="font-semibold text-lg">Custom Configuration</h3> <p class="text-gray-600 dark:text-gray-400">
Set up alerts and preferences based on your sector and region focus.
</p> </div> </div> </div> </div> <!-- Needs Assessment --> <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"> <h2 class="text-2xl font-bold mb-6">Help Us Understand Your Needs</h2> <form class="space-y-6" id="onboardingForm"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="company" class="block text-sm font-medium mb-1">Company Name *</label> <input type="text" id="company" name="company" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"> </div> <div> <label for="role" class="block text-sm font-medium mb-1">Your Role *</label> <select id="role" name="role" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"> <option value="">Select your role</option> <option value="business-development">Business Development</option> <option value="project-manager">Project Manager</option> <option value="executive">Executive</option> <option value="other">Other</option> </select> </div> </div> <div> <label for="primary-sector" class="block text-sm font-medium mb-1">Primary Sector Interest *</label> <select id="primary-sector" name="primary-sector" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"> <option value="">Select primary sector</option> <option value="data-centers">Data Centers</option> <option value="airports">Airport Terminals</option> <option value="infrastructure">Infrastructure</option> </select> </div> <div> <label for="specific-needs" class="block text-sm font-medium mb-1">Specific Requirements</label> <textarea id="specific-needs" name="specific-needs" rows="4" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800" placeholder="What challenges are you hoping to solve with our platform?"></textarea> </div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
Submit Information
</button> </form> </div> </div> <!-- Right Column - Calendar --> <div class="space-y-6"> <!-- Calendar Widget --> <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 sticky top-6"> <h2 class="text-2xl font-bold mb-6 text-center">Schedule Your Session</h2> <div class="calendly-inline-widget" data-url="https://calendly.com/your-calendly-link/onboarding-session"></div> </div> <!-- Support Card --> <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"> <h3 class="font-semibold text-lg mb-4">Need Help?</h3> <div class="space-y-3"> <a href="mailto:support@blackridgeresearch.com" class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"> <span class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">\u2709\uFE0F</span>
Email Support
</a> <a href="tel:+918008004060" class="flex items-center gap-3 text-gray-700 dark:text:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"> <span class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">\u{1F4DE}</span>
+91 8008 004 060
</a> <a href="https://wa.me/918008004060" class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"> <span class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">\u{1F4AC}</span>
WhatsApp Chat
</a> </div> </div> </div> </div> </div>  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async><\/script> <script>
        // Form submission handler
        document.getElementById('onboardingForm')?.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Onboarding form submitted:', data);
            
            // Show success state
            const button = this.querySelector('button[type="submit"]');
            if (button) {
                button.disabled = true;
                button.innerHTML = \\\`
                    <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                \\\`;
                
                setTimeout(() => {
                    button.disabled = false;
                    button.textContent = 'Submitted \u2713';
                    button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                    button.classList.add('bg-green-600', 'hover:bg-green-700');
                    
                    setTimeout(() => {
                        button.textContent = 'Submit Information';
                        button.classList.remove('bg-green-600', 'hover:bg-green-700');
                        button.classList.add('bg-blue-600', 'hover:bg-blue-700');
                    }, 2000);
                }, 1500);
            }
        });

        // Initialize Calendly with prefill data
        document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const email = urlParams.get('email');
            const name = urlParams.get('name');
            
            if (email || name) {
                Calendly.initInlineWidget({
                    url: 'https://calendly.com/your-calendly-link/30min' + 
                         (email ? \\\`?email=\\\${encodeURIComponent(email)}\\\` : '') + 
                         (name ? \\\`&name=\\\${encodeURIComponent(name)}\\\` : ''),
                    parentElement: document.querySelector('.calendly-inline-widget'),
                    prefill: {
                        email: email || '',
                        name: name || ''
                    }
                });
            }
        });
    <\/script> `])), maybeRenderHead(), renderComponent($$result2, "dotlottie-player", "dotlottie-player", { "src": "https://lottie.host/607d85f3-ec2f-4bd8-a0e9-44d33551bc66/s8ISauyM7b.lottie", "background": "transparent", "speed": "1", "style": "width: 240px; height: 240px; margin: auto;", "loop": true, "autoplay": true })) })}`;
}, "/home/blackridgeorg/public_html/src/pages/new-projects-near-me/[...slug]/subscribe/payment-success.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/new-projects-near-me/[...slug]/subscribe/payment-success.astro";
const $$url = "/new-projects-near-me/[...slug]/subscribe/payment-success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaymentSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
