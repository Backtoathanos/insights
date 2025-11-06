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
const $$SignupForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignupForm;
  const currLocale = getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="mb-12"> <h1 class="h2 mb-2 text-xl text-base-900 dark:text-base-200">Create your free account</h1> <p class="tracking-tight text-base-600 dark:text-base-400"> <span class="description">Already have an account?</span> <a class="whitespace-nowrap text-primary-500 transition duration-200 hover:text-primary-600"${addAttribute(getRelativeLocaleUrl(currLocale, "/login").replace(/\/$/, ""), "href")}>Log in</a> </p> </div> <div class="mb-6"> <form class="-m-2 flex flex-wrap" id="signup__form" name="signup__form"> <div class="w-full p-2"> <label class="block"> <input class="form__input w-full" id="signup__name" type="text" placeholder="Your Name" autofocus required> </label> </div> <div class="w-full p-2"> <label class="block"> <input class="form__input w-full" id="signup__email" type="email" placeholder="Email Address" required> </label> </div> <div class="w-full p-2"> <label class="relative block"> <input class="form__input w-full md:pr-40" id="signup__password" type="password" placeholder="Password" required> </label> </div> <div class="w-full p-2"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit", "class": "w-full rounded-md before:rounded-md" }, { "default": ($$result2) => renderTemplate`Create Account` })} <div class="-mx-2.5 my-2 flex items-center"> <div class="flex-1 p-2.5"> <div class="h-px bg-base-300 dark:bg-base-700"></div> </div> <div class="auto p-2.5"> <span class="text-sm tracking-tight text-base-600 dark:text-base-400">OR</span> </div> <div class="flex-1 p-2.5"> <div class="h-px bg-base-300 dark:bg-base-700"></div> </div> </div> <!-- Google sign in button --> <a class="flex w-full justify-center rounded-md bg-base-100 px-5 py-2.5 font-medium tracking-tight transition duration-200 hover:bg-base-200 focus:outline-none focus:ring-4 focus:ring-primary-300" href="#"> ${renderComponent($$result, "Icon", $$Icon, { "name": "amplify/google", "aria-hidden": "true", "class": "mr-3 size-6 shrink-0" })} <span class="hidden text-base-900 xs:block">Sign up with Google</span><span class="text-base-900 xs:hidden">Google</span> </a> </div> </form> </div> </div>`;
}, "/home/blackridgeorg/public_html/src/components/Forms/SignupForm.astro", void 0);

const $$Registration = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sign Up", "description": "Sign Up for this awesome software" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-24 md:pt-36"> <div class="mx-auto flex w-full max-w-md flex-col justify-center gap-6 px-4"> ${renderComponent($$result2, "SiteLogoSquare", $$SiteLogoSquare, {})} ${renderComponent($$result2, "SignupForm", $$SignupForm, {})} </div> </div> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/registration.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/registration.astro";
const $$url = "/registration";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Registration,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
