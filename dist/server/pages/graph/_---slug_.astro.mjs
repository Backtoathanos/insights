/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const response = await fetch(`https://adminapi.blackridgeresearch.com/chart-builder/graphurl/${slug}`);
  const [chart] = await response.json();
  return renderTemplate(_a || (_a = __template(["", '<section class="py-12"> <div class=""> <!-- Chart Title --> <!-- <h1 class="text-3xl font-bold text-center mb-8">\n        {chart?.chart_title || "Chart"}\n      </h1> --> <!-- Chart Container --> <div> ', " </div> </div> </section> <script>\n    // Check if chart loaded successfully\n    document.addEventListener('DOMContentLoaded', () => {\n      if (!document.querySelector('#chartContainer')) {\n        document.getElementById('chart-fallback')?.classList.remove('hidden');\n      }\n    });\n  <\/script>"])), maybeRenderHead(), chart ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`  <div>${unescapeHTML(chart.chart_embed)}</div>  <div id="chart-fallback" class="hidden text-center py-12"> <p class="text-gray-600 mb-4">Having trouble loading the chart...</p> <button onclick="window.location.reload()" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
Try Again
</button> </div> ` })}` : renderTemplate`<!-- Show when chart data isn't available -->
          <div class="text-center py-12"> <p class="text-gray-600 mb-4">Chart not found</p> <a href="/charts" class="text-blue-500 hover:underline">
View available charts
</a> </div>`);
}, "/home/blackridgeorg/public_html/src/pages/graph/[...slug].astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/graph/[...slug].astro";
const $$url = "/graph/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
