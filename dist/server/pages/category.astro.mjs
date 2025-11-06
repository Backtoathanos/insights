/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getRelativeLocaleUrl } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$CategoryAmplify = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryAmplify;
  const { icon, title, text, page_url, class: className, ...rest } = Astro2.props;
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(rest)}> <a${addAttribute(`${getRelativeLocaleUrl(currLocale, `/category/${page_url}`)}`, "href")}> <div${addAttribute(["hover-border-glow mx-auto flex h-full max-w-md flex-col rounded-xl border border-base-200 bg-base-50 p-6 text-center shadow-md md:p-8 dark:border-base-800 dark:bg-base-950", [className]], "class:list")}> <div class="flex justify-center py-4"> <img${addAttribute(icon.startsWith("http") ? icon : `https://adminapi.blackridgeresearch.com/uploads/${icon}`, "src")}${addAttribute(title, "alt")} loading="lazy"> </div> <h3 class="mt-4 text-lg font-bold tracking-tight text-base-900 md:text-xl dark:text-base-100"> ${title} </h3> <p class="description mt-4 text-pretty">${text}</p> </div> </a> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Category/CategoryAmplify.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const limit = 6;
  const skip = 0;
  const res = await fetch(`https://adminapi.blackridgeresearch.com/category/published?limit=${limit}&skip=${skip}`);
  const json = await res.json();
  console.log("API Response:", JSON.stringify(json));
  const initialPosts = json.posts || [];
  const showViewMore = initialPosts.length === limit;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Category", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section id="feature-cards-medium" class="overflow-hidden py-12 md:py-16 mt-10"> <div class="site-container"> <div class="flex justify-center"> <h2 class="h2 text-center">Category</h2> </div> <div id="category-container" class="mt-8 grid gap-4 md:grid-cols-3 md:gap-8 lg:gap-16"> ', " </div> ", ' </div> </section> <script type="module">\n		let skip = {initialPosts.length};\n		const limit = {limit};\n		const btn = document.getElementById(\'view-more\');\n		const container = document.getElementById(\'category-container\');\n\n		function getImageUrl(icon) {\n			if (!icon) return "/default-icon.svg";\n			return icon.startsWith("http") \n				? icon \n				: `https://adminapi.blackridgeresearch.com/uploads/${icon}`;\n		}\n\n		if (btn) {\n			btn.addEventListener(\'click\', async () => {\n				const res = await fetch(`https://adminapi.blackridgeresearch.com/category/published?limit=${limit}&skip=${skip}`);\n				const data = await res.json();\n				const newPosts = data.posts || [];\n\n				newPosts.forEach(post => {\n					const imageUrl = getImageUrl(post.category_icon);\n					const div = document.createElement("div");\n					div.className = "rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg";\n					div.innerHTML = `\n						<img src="${imageUrl}" class="mx-auto mb-4 h-12 w-12 object-contain" />\n						<h3 class="text-lg font-semibold">${post.category}</h3>\n						<p class="text-sm text-gray-600 mt-2">${post.description || \'No description available\'}</p>\n					`;\n					container.appendChild(div);\n				});\n\n				skip += limit;\n\n				if (newPosts.length < limit) {\n					btn.style.display = \'none\'; // Hide if no more\n				}\n			});\n		}\n	<\/script> '], [" ", '<section id="feature-cards-medium" class="overflow-hidden py-12 md:py-16 mt-10"> <div class="site-container"> <div class="flex justify-center"> <h2 class="h2 text-center">Category</h2> </div> <div id="category-container" class="mt-8 grid gap-4 md:grid-cols-3 md:gap-8 lg:gap-16"> ', " </div> ", ' </div> </section> <script type="module">\n		let skip = {initialPosts.length};\n		const limit = {limit};\n		const btn = document.getElementById(\'view-more\');\n		const container = document.getElementById(\'category-container\');\n\n		function getImageUrl(icon) {\n			if (!icon) return "/default-icon.svg";\n			return icon.startsWith("http") \n				? icon \n				: \\`https://adminapi.blackridgeresearch.com/uploads/\\${icon}\\`;\n		}\n\n		if (btn) {\n			btn.addEventListener(\'click\', async () => {\n				const res = await fetch(\\`https://adminapi.blackridgeresearch.com/category/published?limit=\\${limit}&skip=\\${skip}\\`);\n				const data = await res.json();\n				const newPosts = data.posts || [];\n\n				newPosts.forEach(post => {\n					const imageUrl = getImageUrl(post.category_icon);\n					const div = document.createElement("div");\n					div.className = "rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg";\n					div.innerHTML = \\`\n						<img src="\\${imageUrl}" class="mx-auto mb-4 h-12 w-12 object-contain" />\n						<h3 class="text-lg font-semibold">\\${post.category}</h3>\n						<p class="text-sm text-gray-600 mt-2">\\${post.description || \'No description available\'}</p>\n					\\`;\n					container.appendChild(div);\n				});\n\n				skip += limit;\n\n				if (newPosts.length < limit) {\n					btn.style.display = \'none\'; // Hide if no more\n				}\n			});\n		}\n	<\/script> '])), maybeRenderHead(), initialPosts.map((feature) => renderTemplate`${renderComponent($$result2, "CategoryAmplify", $$CategoryAmplify, { "title": feature.category, "text": feature.description, "icon": feature.category_icon ? feature.category_icon : "flaticon/industrial", "page_url": feature.page_url })}`), showViewMore && renderTemplate`<div class="text-center mt-8"> <button id="view-more" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
View More
</button> </div>`) })}`;
}, "/home/blackridgeorg/public_html/src/pages/category/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/category/index.astro";
const $$url = "/category";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
