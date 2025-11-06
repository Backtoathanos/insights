/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getRelativeLocaleUrl } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { $ as $$Button } from '../chunks/Button_BaSqYn27.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$SiteLogoSquare } from '../chunks/SiteLogoSquare_BwHGFi5a.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$PasswordResetForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PasswordResetForm;
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="mb-12"> <h1 class="h2 mb-2 text-xl text-base-900 dark:text-base-200">Reset password</h1> <p class="tracking-tight text-base-600 dark:text-base-400"> <span class="description">Already know your password?</span> <a class="whitespace-nowrap text-primary-500 transition duration-200 hover:text-primary-600"${addAttribute(getRelativeLocaleUrl(currLocale, "/login").replace(/\/$/, ""), "href")}>Sign in</a> </p> </div> <div class="mb-6"> <form class="-m-2 flex flex-wrap" id="resetpass__form" name="resetpass__form"> <div class="w-full p-2"> <label class="block"> <input class="form__input w-full" id="resetpass__email" type="email" placeholder="Email Address" required> </label> </div> <div class="w-full p-2"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit", "class": "w-full rounded-md before:rounded-md" }, { "default": ($$result2) => renderTemplate`Submit` })} </div> </form> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Forms/PasswordResetForm.astro", void 0);

const $$PasswordReset = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Password reset", "description": "Forgot your password? Reset it here" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-24 md:pt-36"> <div class="mx-auto flex w-full max-w-md flex-col justify-center gap-6 px-4"> ${renderComponent($$result2, "SiteLogoSquare", $$SiteLogoSquare, {})} ${renderComponent($$result2, "PasswordResetForm", $$PasswordResetForm, {})} </div> </div> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/password-reset.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/password-reset.astro";
const $$url = "/password-reset";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PasswordReset,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
