import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Button_BaSqYn27.mjs';

const $$SiteLogoSquare = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mr-auto flex items-center rounded-md border border-base-200 bg-base-50 align-middle text-base-800 dark:border-base-800 dark:bg-base-950 dark:text-base-200"> ${renderComponent($$result, "Icon", $$Icon, { "name": "amplify/amplify-logo", "class": "size-10 p-2 text-primary-500", "aria-hidden": "true" })} </div>`;
}, "/home/blackridgeorg/public_html/src/components/SiteLogo/SiteLogoSquare.astro", void 0);

export { $$SiteLogoSquare as $ };
