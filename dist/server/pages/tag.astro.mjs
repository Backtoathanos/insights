/* empty css                                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Recent Blog Posts", "description": "Recent Blog Posts Description" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip pt-28 md:pt-36"> <div class="mr-auto max-w-3xl"> <div class="flex"> <h1 class="h1">Categories</h1> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/tag/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/tag/index.astro";
const $$url = "/tag";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
