/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getAllPosts } from '../../chunks/blogUtils_DPiN0YAU.mjs';
import { g as getLocaleFromUrl } from '../../chunks/localeUtils_hlzOdIQk.mjs';
import { $ as $$ProjectNews$1 } from '../../chunks/ProjectNews_DluWb5_L.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$ProjectNews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectNews;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Project News | Blackridge Research & Consulting", "description": "Learn from our blog posts about web development, design, and more." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container overflow-x-clip"> <div class="pt-28 md:pt-36"> <div class="mr-auto flex w-fit max-w-[950px] flex-col"> <!-- <Badge>Blog</Badge> --> <h1 class="h1">Project News</h1> <!-- <p class="description mx-auto mt-0 max-w-2xl text-center md:text-lg">
          Use and re-use tons of responsive sections to create the perfect
          layout. Sections are organised into convenient categories.
        </p> --> </div> <!-- <div class="mb-10 mt-4 flex md:mb-20">
				<CategoryCloud />
			</div> --> </div> ${renderComponent($$result2, "ProjectNews", $$ProjectNews$1, { "posts": posts })} </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/project-news/project-news.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/project-news/project-news.astro";
const $$url = "/project-news/project-news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ProjectNews,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
