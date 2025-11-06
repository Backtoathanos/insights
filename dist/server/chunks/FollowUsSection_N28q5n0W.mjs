import { c as createComponent, r as renderTemplate, a as renderComponent, d as addAttribute, m as maybeRenderHead } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Button_BaSqYn27.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FollowUsSection = createComponent(($$result, $$props, $$slots) => {
  const googleNewsUrl = "https://news.google.com/publications/CAAqBwgKMKucpgswk6e-Aw?ceid=IN:en&oc=3";
  return renderTemplate(_a || (_a = __template(["", '<div class="flex items-center gap-4"> <a', ' target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-50 px-3 py-1 text-xs font-medium transition-colors duration-200 hover:bg-base-100 dark:border-base-800 dark:bg-dark-bg dark:hover:bg-base-900"> ', '\nFollow Us\n</a> <!-- LinkedIn Custom Follow Button with LinkedIn Widget Script --> <!-- <a\n		href={linkedInUrl}\n		target="_blank"\n		rel="noopener noreferrer"\n		class="group inline-flex flex-col items-center overflow-hidden rounded-sm border border-base-200 transition-colors duration-200 dark:border-base-800 dark:bg-dark-bg dark:hover:bg-base-900"\n	>\n		<div\n			class="flex h-5 items-center bg-[#0077b5] text-white transition-colors group-hover:bg-[#006399]"\n		>\n			<Icon name="blackridge/linked-in" class="mx-1 my-auto size-3 shrink-0" />\n			<div class="h-5 w-px border-r border-base-100 dark:border-base-900"></div>\n			<span class="px-1 text-xs font-medium">Follow</span>\n		</div>\n		<p class="description text-center text-xs">4,794</p>\n	</a> --> </div> <!-- LinkedIn Follow Company Widget Script --> <script src="https://platform.linkedin.com/in.js" type="text/javascript"><\/script> <script type="IN/FollowCompany" data-id="14576044" data-counter="bottom"><\/script>'])), maybeRenderHead(), addAttribute(googleNewsUrl, "href"), renderComponent($$result, "Icon", $$Icon, { "name": "blackridge/google_news_icon", "class": "size-5" }));
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/FollowUsSection.astro", void 0);

export { $$FollowUsSection as $ };
