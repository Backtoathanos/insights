import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderComponent } from './astro/server_C19coWfX.mjs';
import { a as $$Icon, $ as $$Button } from './Button_BaSqYn27.mjs';
/* empty css                          */
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$ShareButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShareButtons;
  const {
    x = true,
    facebook = true,
    linkedin = true,
    pinterest = false,
    whatsapp = false,
    email = false,
    link = false,
    url,
    title,
    linktext = "Check out this great post!",
    class: className = "text-white",
    ...rest
  } = Astro2.props;
  let validtext = linktext.replace(/ /g, "%20");
  const svgStyle = "size-5";
  return renderTemplate`${x && renderTemplate`${maybeRenderHead()}<a${addAttribute(`share-button ${className}`, "class")}${addAttribute(`https://twitter.com/intent/tweet?url=${url}&text=${validtext}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"${spreadAttributes(rest)} data-astro-cid-225rakgd>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/brand-x", "class": svgStyle, "aria-hidden": "true", "data-astro-cid-225rakgd": true })}</a>`}${facebook && renderTemplate`<a${addAttribute(`share-button ${className}`, "class")}${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"${spreadAttributes(rest)} data-astro-cid-225rakgd>${renderComponent($$result, "Icon", $$Icon, { "name": "ri:facebook-fill", "class": svgStyle, "aria-hidden": "true", "data-astro-cid-225rakgd": true })}</a>`}${linkedin && renderTemplate`<a${addAttribute(`share-button ${className}`, "class")}${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${url}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="Share on Linkedin"${spreadAttributes(rest)} data-astro-cid-225rakgd>${renderComponent($$result, "Icon", $$Icon, { "name": "ri:linkedin-fill", "class": svgStyle, "aria-hidden": "true", "data-astro-cid-225rakgd": true })}</a>`}${pinterest && renderTemplate`<a${addAttribute(`share-button ${className}`, "class")}${addAttribute(`https://pinterest.com/pin/create/button/?url=${url}&media=&description=${validtext}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest"${spreadAttributes(rest)} data-astro-cid-225rakgd>${renderComponent($$result, "Icon", $$Icon, { "name": "ri:pinterest-fill", "class": svgStyle, "aria-hidden": "true", "data-astro-cid-225rakgd": true })}</a>`}${whatsapp && renderTemplate`<a${addAttribute(`share-button ${className}`, "class")}${addAttribute(`https://wa.me/?text=${validtext} ${url}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="Share on Whatsapp"${spreadAttributes(rest)} data-astro-cid-225rakgd>${renderComponent($$result, "Icon", $$Icon, { "name": "ri:whatsapp-line", "class": svgStyle, "aria-hidden": "true", "data-astro-cid-225rakgd": true })}</a>`}${email && renderTemplate`<a${addAttribute(`share-button ${className}`, "class")}${addAttribute(`mailto:?subject=${validtext} "${title}"&body=${url}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="Share through email"${spreadAttributes(rest)} data-astro-cid-225rakgd>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/mail", "class": svgStyle, "aria-hidden": "true", "data-astro-cid-225rakgd": true })}</a>`}${link && renderTemplate`<button${addAttribute(`share-button copy-link-button group relative ${className}`, "class")} aria-label="Copy link to post"${spreadAttributes(rest)} data-astro-cid-225rakgd><span class="tooltip-text group-hover:visible group-hover:opacity-100" data-astro-cid-225rakgd>copy link</span><div class="share-button-svg" data-astro-cid-225rakgd><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-225rakgd><path fill="currentColor" d="M11 17H7q-2.075 0-3.538-1.463T2 12q0-2.075 1.463-3.538T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4v2Zm-3-4v-2h8v2H8Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17h-4Z" data-astro-cid-225rakgd></path></svg></div></button>`}`;
}, "/home/blackridgeorg/public_html/src/components/ShareButtons/ShareButtons.astro", void 0);

const productImage = new Proxy({"src":"/_astro/Global Project Tracker - Blackridge Research.Dde-YK1t.png","width":640,"height":360,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/Global Project Tracker - Blackridge Research.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductCard;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg border border-base-200 bg-base-100 p-4 text-sm leading-tight dark:border-base-800 dark:bg-base-900"> <div class="mx-auto max-w-md"> <!-- heading --> <h3 class="h3 text-pretty lg:text-2xl">Trusted by Industry Leading Companies</h3> <div class="mt-3 aspect-[2/1] h-auto w-full overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": productImage, "alt": "product", "width": 290, "densities": [1.5, 2], "class": "h-auto w-full object-cover" })} </div> <p class="mt-3 inline-block text-sm font-medium tracking-tight text-primary-600 transition-colors dark:text-primary-400">
Intelligence Hubs
</p> <p class="text-lg font-semibold">Global Project Tracker</p> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "href": "https://www.blackridgeresearch.com/demo", "class": "mt-2" }, { "default": ($$result2) => renderTemplate`Book Free Demo Now!` })} <!-- <SamplePopupDow id="popup-down" /> --> </div> </div> `;
}, "/home/blackridgeorg/public_html/src/components/SidebarCards/ProductCard.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const {
    id,
    label,
    value,
    checked,
    variant = "default",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["solar-checkbox text-foreground flex items-center space-x-2", className], "class:list")} data-astro-cid-3t2srn4a> <input type="checkbox"${addAttribute(id, "id")}${addAttribute([
    "peer size-4 shrink-0 transform-gpu rounded-sm border border-base-300 bg-base-50 transition-colors dark:border-base-700 dark:bg-base-900",
    "focus:outline-offset-background focus:outline-offset-0 focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
    "focus:not-focus-visible:ring-transparent focus:not-focus-visible:outline-none",
    "not-disabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
    {
      "focus:outline-ring checked:bg-base-900 checked:hover:bg-base-900 checked:dark:bg-base-200": variant === "default",
      "checked:bg-primary focus:outline-primary": variant === "primary",
      "checked:bg-secondary focus:outline-secondary": variant === "secondary"
    }
  ], "class:list")}${addAttribute(checked ? "true" : "false", "aria-checked")}${addAttribute(checked, "checked")}${spreadAttributes(rest)} data-astro-cid-3t2srn4a> ${label && renderTemplate`<label${addAttribute(id, "for")}${addAttribute([
    "peer-not-disabled:cursor-pointer description text-xs peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
  ], "class:list")} data-astro-cid-3t2srn4a> ${label} </label>`} </div>  `;
}, "/home/blackridgeorg/public_html/src/components/ui-lib/checkbox/Checkbox.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CommentSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="site-container grid gap-10"> <div class="grid gap-4 rounded-md border border-base-200 bg-base-100 p-8 md:py-16 lg:grid-cols-2 dark:border-base-800 dark:bg-base-900"> <div> <h3 class="text-2xl font-bold md:text-4xl">Leave a Comment</h3> <div class="description mt-4 leading-relaxed md:mt-8 md:text-lg"> <p class="text-pretty leading-relaxed">\nWe love hearing from our readers and value your feedback. If you have any questions or\n					comments about our content, feel free to leave a comment below.\n</p> <p class="text-pretty leading-relaxed">\nWe read every comment and do our best to respond to them all.\n</p> </div> </div> <div class=""> <form class="mt-4 space-y-4" id="comment_section"> <div class="flex space-x-4"> <input type="text" placeholder="Name" class="form__input fnames w-1/2" required> <input type="email" placeholder="Email" class="form__input emails w-1/2" required> </div> <textarea placeholder="Your comment" class="form__input messages w-full" rows="4" required></textarea> <div class="flex items-center space-x-2"> ', ' <!-- <label for="save-info" class="description text-xs">\n            Save my name and email in this browser for the next time I comment.\n          </label> --> </div> <div class="g-recaptcha" data-sitekey="6LfpwvYUAAAAADa5iKN5bsIHz_W6vhOY7dcSz82k"></div> ', ' </form> </div> </div> </div> <script src="https://www.google.com/recaptcha/api.js" async defer><\/script> '])), maybeRenderHead(), renderComponent($$result, "Checkbox", $$Checkbox, { "id": "save-info", "variant": "default", "label": "Save my name and email in this browser for the next time I comment." }), renderComponent($$result, "Button", $$Button, { "id": "submit", "type": "submit" }, { "default": ($$result2) => renderTemplate`Submit Comment` }));
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/CommentSection.astro", void 0);

export { $$ShareButtons as $, $$ProductCard as a, $$CommentSection as b };
