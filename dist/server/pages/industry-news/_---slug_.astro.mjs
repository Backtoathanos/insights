/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as renderSlot } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$TableContent } from '../../chunks/TableContent_DSE061tx.mjs';
import { i as image } from '../../chunks/agreement-business_BkcocvzW.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_Ct7febRF.mjs';
import { $ as $$FollowUsSection } from '../../chunks/FollowUsSection_N28q5n0W.mjs';
import { $ as $$ShareButtons, a as $$ProductCard, b as $$CommentSection } from '../../chunks/CommentSection_vmGN9lyF.mjs';
import { $ as $$RecentPopularPostsCard, a as $$RelatedPostsSwiper } from '../../chunks/RelatedPostsSwiper_CPYWRZjP.mjs';
import { $ as $$BaseLayoutNew } from '../../chunks/BaseLayoutNew_CYC5OcQ9.mjs';
import { $ as $$NewsLaterPopup } from '../../chunks/NewsLaterPopup_dcdPCFFW.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const imageSrc = "/default-image.jpg";
  const imageWidth = 700;
  const imageHeight = 300;
  const { slug } = Astro2.params;
  let formattedSlug = slug.replace(/\//g, "_");
  formattedSlug = formattedSlug.replace(/[:/]/g, "-");
  formattedSlug = formattedSlug.replace(/[?/]/g, "-");
  const response2 = await fetch(
    `https://adminapi.blackridgeresearch.com/blog/listid/${formattedSlug}`
  );
  const data = await response2.json();
  const nid = data.data[0].nid;
  const rcont = data.data[0].rcont;
  const styp = data.data[0].styp;
  const styp2 = data.data[0].styp2;
  let showstype = styp2 == "" ? styp : styp2;
  const meta_title = data.data[0].meta_title;
  const meta_desc = data.data[0].meta_desc;
  return renderTemplate`${renderComponent($$result, "BaseLayoutNew", $$BaseLayoutNew, { "type": "general", "title": meta_title, "navTheme": "dark", "preconnect": true, "description": meta_desc, "data-astro-cid-onfomhwu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-onfomhwu> ${renderComponent($$result2, "NewsLaterPopup", $$NewsLaterPopup, { "data-astro-cid-onfomhwu": true })} </div> <article class="mt-20 md:mt-28" data-astro-cid-onfomhwu> <div class="site-container" data-astro-cid-onfomhwu> <div class="grid lg:grid-cols-12" data-astro-cid-onfomhwu> <div class="lg:col-span-6 lg:col-start-4" data-astro-cid-onfomhwu> <div class="mx-auto hidden max-w-[650px] text-sm" data-astro-cid-onfomhwu> <p id="blog-title" data-astro-cid-onfomhwu>Loading..</p> </div> </div> </div> </div> <!-- article content --> <div class="mx-auto max-w-[1500px] px-4 lg:mt-8" data-astro-cid-onfomhwu> <div class="w-full" data-astro-cid-onfomhwu> <div class="mx-auto flex flex-col gap-x-6 gap-y-8 lg:grid lg:max-w-none lg:grid-cols-12" data-astro-cid-onfomhwu> <!-- left sidebar --> <aside class="lg:col-span-3 lg:block" data-astro-cid-onfomhwu> <div class="top-20 lg:sticky" data-astro-cid-onfomhwu> <div class="mx-auto hidden max-w-[650px] overflow-y-auto pb-4 lg:block lg:h-[calc(100vh-5rem)]" data-astro-cid-onfomhwu> <!-- You can put a CTA or whatever else you want here --> <!-- <div class="h-full w-full bg-blue-500"></div> --> ${renderComponent($$result2, "TableContent", $$TableContent, { "data-astro-cid-onfomhwu": true })} </div> </div> </aside> <div class="text-base-content mx-auto w-full max-w-[650px] text-base lg:col-span-6" data-astro-cid-onfomhwu> <!-- Blog post info --> <div class="flex w-full flex-col items-start" data-astro-cid-onfomhwu> <div class="" data-astro-cid-onfomhwu> <!-- categories --> <div class="contenttype flex w-full gap-3 md:text-lg" data-astro-cid-onfomhwu>${showstype}</div> <!-- title --> <h1 class="main-text-gradient mb-4 mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl md:leading-tight" id="blog-title-main" data-astro-cid-onfomhwu>
Loading..
</h1> <div class="mt-2 flex w-full flex-wrap items-center justify-between gap-2" data-astro-cid-onfomhwu> <div class="description flex flex-wrap items-center gap-2 text-sm" data-astro-cid-onfomhwu> <div class="mb-auto flex" data-astro-cid-onfomhwu> <figure data-astro-cid-onfomhwu> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": `image`, "width": 100, "quality": "high", "loading": "eager", "class": "h-7 w-7 rounded-full border border-base-300 object-cover dark:border-base-700", "data-astro-cid-onfomhwu": true })} </figure> <div class="my-auto ml-2" data-astro-cid-onfomhwu></div> </div> <!-- Date --> <div class="flex items-center gap-1.5" data-astro-cid-onfomhwu> <span data-astro-cid-onfomhwu>Last Updated on</span> <span id="lastupdated-on" data-astro-cid-onfomhwu>Last Updated on</span> </div> </div> ${renderComponent($$result2, "FollowUsSection", $$FollowUsSection, { "data-astro-cid-onfomhwu": true })} </div> </div> <!-- blog post main image --> <div class="mt-6 overflow-hidden rounded-lg border border-base-300 dark:border-base-700" data-astro-cid-onfomhwu> ${renderComponent($$result2, "Image", $$Image, { "src": imageSrc, "alt": "", "width": imageWidth, "height": imageHeight, "quality": "high", "class": "max-h-[70vh] object-cover", "loading": "eager", "id": "blog-image", "data-astro-cid-onfomhwu": true })} </div> </div> <div class="mt-10 lg:hidden" data-astro-cid-onfomhwu> <!-- You can put a CTA or whatever else you want here --> <!-- <div class="h-full w-full bg-blue-500"></div> --> <!-- <TableOfContents headings={headings} levels={3} /> --> </div> <section id="blog-description" class="prose mx-auto mt-16 max-w-[650px]" data-astro-cid-onfomhwu> ${renderSlot($$result2, $$slots["default"])} </section> <!-- button to go back to all posts --> <!-- <div class="mt-8 border-t-2 border-base-200 dark:border-base-800">
              <div class="mt-8 flex">
                <Button
                  variant="outline"
                  arrow="left"
                >
                  back_to_all_posts
                </Button>
              </div>
            </div> --> </div> <!-- right sidebar --> <aside class="lg:col-span-3 lg:block" data-astro-cid-onfomhwu> <div class="top-20 lg:sticky" data-astro-cid-onfomhwu> <div class="fade-section flex flex-col gap-6 pb-4 pr-2 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto" data-fade-in data-astro-cid-onfomhwu> <div data-astro-cid-onfomhwu> <h3 class="text-lg font-semibold" data-astro-cid-onfomhwu>Share This Post</h3> <div class="mt-2 flex w-full flex-wrap justify-center gap-1" data-astro-cid-onfomhwu> ${renderComponent($$result2, "ShareButtons", $$ShareButtons, { "title": `What Are Path Aliases?`, "url": Astro2.url, "link": true, "class": "flex-auto", "whatsapp": true, "data-astro-cid-onfomhwu": true })} </div> </div> ${renderComponent($$result2, "ProductCard", $$ProductCard, { "data-astro-cid-onfomhwu": true })} ${renderComponent($$result2, "RecentPopularPostsCard", $$RecentPopularPostsCard, { "data-astro-cid-onfomhwu": true })} <!-- <NewsletterCard /> --> <!-- <RecentPostsCard /> --> <!-- <CategoriesCard /> --> </div> </div> </aside> </div> </div> </div> </article> <div class="mt-10 flex flex-col gap-10 md:gap-16" data-astro-cid-onfomhwu> ${renderComponent($$result2, "RelatedPostsSwiper", $$RelatedPostsSwiper, { "rcont": rcont, "styp": styp, "nid": nid, "data-astro-cid-onfomhwu": true })} ${renderComponent($$result2, "CommentSection", $$CommentSection, { "data-astro-cid-onfomhwu": true })} <!-- <FollowUsSection /> --> </div> ` })}   `;
}, "/home/blackridgeorg/public_html/src/pages/industry-news/[...slug].astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/industry-news/[...slug].astro";
const $$url = "/industry-news/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
