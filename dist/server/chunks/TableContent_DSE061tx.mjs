import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent, d as addAttribute } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$BaseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseCard;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg border border-base-200 bg-base-50 p-4 text-sm leading-tight dark:border-base-800 dark:bg-base-950"> <h4 class="mb-2 text-xl font-medium">${title}</h4> <hr class="mb-4 border-base-200 dark:border-base-800"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/blackridgeorg/public_html/src/components/SidebarCards/BaseCard.astro", void 0);

const $$TableContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, { "title": "Table of Contents", "data-astro-cid-c4g225os": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul${addAttribute(["flex flex-col gap-2"], "class:list")}${addAttribute("show-h3list", "id")} data-astro-cid-c4g225os> <li${addAttribute({ "pl-3": true, "not-prose": true }, "class:list")} data-astro-cid-c4g225os> <a href="#what-are-path-aliases" class="toc-link p-2 transition hover:to-blue-600 dark:hover:text-blue-400" data-astro-cid-c4g225os>
Loading...
</a> </li> </ul> ` })} `;
}, "/home/blackridgeorg/public_html/src/components/SidebarCards/TableContent.astro", void 0);

export { $$TableContent as $ };
