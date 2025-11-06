/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$Button, a as $$Icon } from '../chunks/Button_BaSqYn27.mjs';
import { g as getRelativeLocaleUrl } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$SiteLogoSquare } from '../chunks/SiteLogoSquare_BwHGFi5a.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoginForm;
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="mb-12"> <h1 class="h2 mb-2 text-xl text-base-900 dark:text-base-200">Log in to your account</h1> <p class="tracking-tight text-base-600 dark:text-base-400"> <span class="description">Don’t have an account?</span> <a class="whitespace-nowrap text-primary-500 transition duration-200 hover:text-primary-600"${addAttribute(getRelativeLocaleUrl(currLocale, "/registration").replace(/\/$/, ""), "href")}>Create a free account</a> </p> </div> <div class="mb-6"> <form class="-m-2 flex flex-wrap" id="login__form" name="login__form"> <div class="w-full p-2"> <label class="block"> <input class="form__input w-full" id="login__email" type="email" placeholder="Email Address" autofocus required> </label> </div> <div class="w-full p-2"> <label class="relative block transition"> <input class="form__input w-full md:pr-40" id="login__password" type="password" placeholder="Password" required> <a class="inline-block pb-4 text-sm tracking-tight text-primary-500 transition duration-200 hover:text-primary-600 sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:transform sm:p-0 sm:px-1"${addAttribute(getRelativeLocaleUrl(currLocale, "/password-reset").replace(/\/$/, ""), "href")}>Forgot Password?</a> </label> </div> <div class="w-full p-2"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit", "class": "w-full rounded-md before:rounded-md" }, { "default": ($$result2) => renderTemplate`Sign In` })} <div class="-mx-2.5 my-2 flex items-center"> <div class="flex-1 p-2.5"> <div class="h-px bg-base-300 dark:bg-base-700"></div> </div> <div class="auto p-2.5"> <span class="text-sm tracking-tight text-base-600 dark:text-base-400">OR</span> </div> <div class="flex-1 p-2.5"> <div class="h-px bg-base-300 dark:bg-base-700"></div> </div> </div> <!-- Google sign in button --> <a class="flex w-full justify-center rounded-md bg-base-200 px-5 py-2.5 font-medium tracking-tight transition duration-200 hover:bg-base-300 focus:outline-none focus:ring-4 focus:ring-primary-300" href="#"> ${renderComponent($$result, "Icon", $$Icon, { "name": "amplify/google", "aria-hidden": "true", "class": "mr-3 size-6 shrink-0" })} <span class="hidden text-base-900 xs:block">Sign in with Google</span><span class="text-base-900 xs:hidden">Google</span> </a> </div> </form> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Forms/LoginForm.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Login", "description": "Login to this awesome software" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-24 md:pt-36"> <div class="mx-auto flex w-full max-w-md flex-col justify-center gap-6 px-4"> ${renderComponent($$result2, "SiteLogoSquare", $$SiteLogoSquare, {})} ${renderComponent($$result2, "LoginForm", $$LoginForm, {})} </div> </div> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/login.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
