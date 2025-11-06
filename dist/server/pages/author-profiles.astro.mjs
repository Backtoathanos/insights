/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { $ as $$Badge } from '../chunks/Badge_DE2wIJxu.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import 'clsx';
import { g as getAllPosts } from '../chunks/blogUtils_DPiN0YAU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$AuthorsProfileCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AuthorsProfileCard;
  getLocaleFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section client:load class="py-12"> <div class="container mx-auto px-4"> <!-- Authors Container --> <div id="authors-container" class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"></div> <!-- Skeleton Container --> <div id="skeleton-container" class="grid hidden grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> <template id="skeleton-template"> <div class="h-full rounded-xl border border-base-200 bg-base-100 p-6 dark:border dark:border-base-800 dark:bg-base-950"> <div class="mb-6 size-20 animate-pulse rounded-full bg-base-200 md:size-28 dark:bg-base-800"></div> <div class="mb-4 h-8 w-3/4 animate-pulse rounded bg-base-200 dark:bg-base-800"></div> <div class="mb-6 h-4 w-1/2 animate-pulse rounded bg-base-200 dark:bg-base-800"></div> <div class="h-4 w-full animate-pulse rounded bg-base-200 dark:bg-base-800"></div> <div class="mt-2 h-4 w-2/3 animate-pulse rounded bg-base-200 dark:bg-base-800"></div> </div> </template> </div> </div> </section> `;
}, "/home/blackridgeorg/public_html/src/components/AuthorsCard/AuthorsProfileCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$AuthorPostLayout1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthorPostLayout1;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "AuthorsProfileCard", $$AuthorsProfileCard, {})} </div>`;
}, "/home/blackridgeorg/public_html/src/layouts/AuthorPostLayout1.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Authors Profiles", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="site-container mx-auto mt-16 py-20"> <div class="mb-16"> ${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`The People Behind the Insights ` })} <h1 class="h1">Meet Our Content Team</h1> <p class="description text-lg md:text-xl">
From expert-written blogs and detailed project coverage to timely analysis and industry
				news, our team of analysts and content writers at Blackridge works together to deliver
				accurate, easy-to-understand, and valuable information across sectors—keeping you informed
				and ahead.
</p> </div> <!-- Team info --> <!-- <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{
				teamData.map((member) => (
					<Profile name={member.name} title={member.title} image={member.image} bio={member.bio} />
				))
			}
		</div> --> ${renderComponent($$result2, "AuthorPostLayout1", $$AuthorPostLayout1, { "posts": posts })} </section>  ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/author-profiles/index.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/author-profiles/index.astro";
const $$url = "/author-profiles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
