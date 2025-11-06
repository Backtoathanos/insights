import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import 'clsx';

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="mb-4 inline-block font-medium uppercase tracking-tight text-primary-700 dark:text-primary-400"> ${renderSlot($$result, $$slots["default"])} </span> <!-- other designs I tested if you're curious --> <!-- <span
  class="relative mb-6 inline-block rounded-full border border-primary-300 bg-base-50 px-3 py-1.5 font-medium tracking-tight before:absolute before:-inset-0.5 before:-z-10 before:rounded-full before:bg-primary-500 before:blur-sm dark:bg-dark-bg"
>
  <slot />
</span> --> <!-- <span
  class="mb-4 inline-block bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text px-3 py-1.5 text-lg font-medium tracking-tight text-transparent dark:from-primary-400 dark:to-primary-100"
>
  <slot />
</span> --> <!-- <span
  class="relative mb-6 inline-block rounded-full border border-primary-300 bg-primary-700 px-3 py-1.5 text-sm font-medium tracking-tight text-white before:absolute before:-inset-0.5 before:-z-10 before:rounded-full before:bg-primary-500 before:blur-sm"
>
  <slot />
</span> -->`;
}, "/home/blackridgeorg/public_html/src/components/Badge/Badge.astro", void 0);

export { $$Badge as $ };
