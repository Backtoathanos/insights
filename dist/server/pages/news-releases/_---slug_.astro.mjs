/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as renderSlot } from '../../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
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
    `https://adminapi.blackridgeresearch.com/newsrelease/listid/${formattedSlug}`
  );
  const data = await response2.json();
  if (data.success == false) {
    const endpoints = [
      {
        url: `https://adminapi.blackridgeresearch.com/pressrelease/listid/${formattedSlug}`,
        redirect: `/press-releases/${slug}`
      },
      {
        url: `https://adminapi.blackridgeresearch.com/projectprofiles/listid/${formattedSlug}`,
        redirect: `/project-profiles/${slug}`
      },
      {
        url: `https://adminapi.blackridgeresearch.com/blog/listid/${formattedSlug}`,
        redirect: `/blog/${slug}`
      }
    ];
    for (const endpoint of endpoints) {
      const response = await fetch(endpoint.url);
      const data2 = await response.json();
      if (data2.success) {
        return Astro2.redirect(endpoint.redirect, 307);
      }
    }
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  const rcont = data.data[0].rcont;
  const nid = data.data[0].nid;
  const styp = data.data[0].styp;
  data.data[0].styp2?.trim() || "0";
  const meta_title = data.data[0].meta_title;
  const meta_desc = data.data[0].meta_desc;
  return renderTemplate`${renderComponent($$result, "BaseLayoutNew", $$BaseLayoutNew, { "type": "general", "title": meta_title, "navTheme": "dark", "preconnect": true, "description": meta_desc, "data-astro-cid-mpehbva7": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div data-astro-cid-mpehbva7>${renderComponent($$result2, "NewsLaterPopup", $$NewsLaterPopup, { "data-astro-cid-mpehbva7": true })}</div><div id="skeleton-loader" class="site-container mt-20 md:mt-28" data-astro-cid-mpehbva7><div class="mx-auto max-w-[1500px] px-4" data-astro-cid-mpehbva7><div class="grid gap-8 lg:grid-cols-12" data-astro-cid-mpehbva7><!-- Left sidebar skeleton --><!-- <div class="hidden lg:col-span-3 lg:block">
					<div class="skeleton skeleton-title mb-4 w-3/4"></div>
					<div class="space-y-2">
						{[...Array(5)].map((_, i) => <div class="skeleton skeleton-text w-full" />)}
					</div>
				</div> --><div class="hidden lg:col-span-3 lg:block" data-astro-cid-mpehbva7></div><!-- Main content skeleton --><div class="lg:col-span-6" data-astro-cid-mpehbva7><div class="space-y-4" data-astro-cid-mpehbva7><div class="skeleton skeleton-text w-1/3" data-astro-cid-mpehbva7></div><div class="skeleton skeleton-title w-3/4" data-astro-cid-mpehbva7></div><div class="flex items-center gap-4" data-astro-cid-mpehbva7><div class="skeleton skeleton-avatar" data-astro-cid-mpehbva7></div><div class="skeleton skeleton-text w-32" data-astro-cid-mpehbva7></div></div><div class="skeleton skeleton-image" data-astro-cid-mpehbva7></div><div class="mt-8 space-y-4" data-astro-cid-mpehbva7>${[...Array(6)].map((_, i) => renderTemplate`<div class="space-y-2" data-astro-cid-mpehbva7><div class="skeleton skeleton-text w-full" data-astro-cid-mpehbva7></div><div class="skeleton skeleton-text w-5/6" data-astro-cid-mpehbva7></div><div class="skeleton skeleton-text w-3/4" data-astro-cid-mpehbva7></div></div>`)}</div></div></div><!-- Right sidebar skeleton --><div class="hidden lg:col-span-3 lg:block" data-astro-cid-mpehbva7><div class="space-y-6" data-astro-cid-mpehbva7><div data-astro-cid-mpehbva7><div class="skeleton skeleton-title mb-2 w-1/2" data-astro-cid-mpehbva7></div><div class="flex gap-2" data-astro-cid-mpehbva7>${[...Array(4)].map((_, i) => renderTemplate`<div class="skeleton skeleton-text h-12 w-12" data-astro-cid-mpehbva7></div>`)}</div></div><div class="skeleton skeleton-image" data-astro-cid-mpehbva7></div><div class="space-y-4" data-astro-cid-mpehbva7>${[...Array(3)].map((_, i) => renderTemplate`<div class="skeleton skeleton-text w-full" data-astro-cid-mpehbva7></div>`)}</div></div></div></div></div></div><article class="site-container mt-20 md:mt-28" style="display: none;" data-astro-cid-mpehbva7><div class="site-container" data-astro-cid-mpehbva7><div class="grid lg:grid-cols-12" data-astro-cid-mpehbva7><div class="lg:col-span-6 lg:col-start-4" data-astro-cid-mpehbva7><div class="mx-auto hidden max-w-[650px] text-sm" data-astro-cid-mpehbva7><p id="blog-title" data-astro-cid-mpehbva7>Loading..</p></div></div></div></div><!-- article content --><div class="mx-auto max-w-[1500px] px-4 lg:mt-8" data-astro-cid-mpehbva7><div class="w-full" data-astro-cid-mpehbva7><div class="mx-auto flex flex-col gap-x-6 gap-y-8 lg:grid lg:max-w-none lg:grid-cols-12" data-astro-cid-mpehbva7><!-- left sidebar --><aside class="lg:col-span-3 lg:block" data-astro-cid-mpehbva7><div class="top-20 lg:sticky" data-astro-cid-mpehbva7><div class="mx-auto hidden max-w-[650px] overflow-y-auto pb-4 lg:block lg:h-[calc(100vh-5rem)]" data-astro-cid-mpehbva7><!-- <TableContent /> --></div></div></aside><div class="text-base-content mx-auto w-full max-w-[650px] text-base lg:col-span-6" data-astro-cid-mpehbva7><!-- Blog post info --><div class="flex w-full flex-col items-start" data-astro-cid-mpehbva7><div class="" data-astro-cid-mpehbva7><!-- categories --><div class="flex w-full gap-3 md:text-lg" id="contenttype" data-astro-cid-mpehbva7></div><!-- title --><h1 class="main-text-gradient mb-4 mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl md:leading-tight" id="blog-title-main" data-astro-cid-mpehbva7>
Loading..
</h1><div class="mt-2 flex w-full flex-wrap items-center justify-between gap-2" data-astro-cid-mpehbva7><div class="description flex flex-wrap items-center gap-2 text-sm" data-astro-cid-mpehbva7><div class="mb-auto flex" data-astro-cid-mpehbva7><figure data-astro-cid-mpehbva7>${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": `image`, "width": 100, "quality": "high", "loading": "eager", "class": "h-7 w-7 rounded-full border border-base-300 object-cover dark:border-base-700", "data-astro-cid-mpehbva7": true })}</figure><div class="my-auto ml-2" data-astro-cid-mpehbva7></div></div><!-- Date --><div class="flex items-center gap-1.5" data-astro-cid-mpehbva7><span data-astro-cid-mpehbva7>Last Updated on</span><span id="lastupdated-on" data-astro-cid-mpehbva7>Last Updated on</span></div></div>${renderComponent($$result2, "FollowUsSection", $$FollowUsSection, { "data-astro-cid-mpehbva7": true })}</div></div><!-- blog post main image --><div class="mt-6 overflow-hidden rounded-lg border border-base-300 dark:border-base-700" data-astro-cid-mpehbva7>${renderComponent($$result2, "Image", $$Image, { "src": imageSrc, "alt": "", "width": imageWidth, "height": imageHeight, "quality": "high", "class": "max-h-[70vh] object-cover", "loading": "eager", "id": "blog-image", "data-astro-cid-mpehbva7": true })}</div></div><div class="mt-10 lg:hidden" data-astro-cid-mpehbva7><!-- Mobile table of contents placeholder --></div><section id="blog-description" class="prose mx-auto mt-16 max-w-[650px]" data-astro-cid-mpehbva7>${renderSlot($$result2, $$slots["default"])}</section><!-- <section class="mt-12">
							<a id="read-next-link" class="block">
								<div
									class="rounded-lg border-l-4 border-blue-600 bg-gray-100 p-6 transition-all hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-900"
								>
									<h3 class="text-sm font-semibold uppercase tracking-wide text-blue-600">
										Read Next
									</h3>
									<p
										id="read-next-title"
										class="mt-2 text-lg font-medium leading-relaxed text-gray-800 dark:text-white"
									>
									</p>
								</div>
							</a>
						</section> --></div><!-- right sidebar --><aside class="lg:col-span-3 lg:block" data-astro-cid-mpehbva7><div class="top-20 lg:sticky" data-astro-cid-mpehbva7><div class="fade-section flex flex-col gap-6 pb-4 pr-2 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto" data-fade-in data-astro-cid-mpehbva7><div data-astro-cid-mpehbva7><h3 class="text-lg font-semibold" data-astro-cid-mpehbva7>Share This Post</h3><div class="mt-2 flex w-full flex-wrap justify-center gap-1" data-astro-cid-mpehbva7>${renderComponent($$result2, "ShareButtons", $$ShareButtons, { "title": `What Are Path Aliases?`, "url": Astro2.url, "link": true, "class": "flex-auto", "whatsapp": true, "data-astro-cid-mpehbva7": true })}</div></div>${renderComponent($$result2, "ProductCard", $$ProductCard, { "data-astro-cid-mpehbva7": true })}${renderComponent($$result2, "RecentPopularPostsCard", $$RecentPopularPostsCard, { "data-astro-cid-mpehbva7": true })}</div></div></aside></div></div></div></article><div class="mt-10 flex flex-col gap-10 md:gap-16" data-astro-cid-mpehbva7>${renderComponent($$result2, "RelatedPostsSwiper", $$RelatedPostsSwiper, { "rcont": rcont, "styp": styp, "nid": nid, "data-astro-cid-mpehbva7": true })}${renderComponent($$result2, "CommentSection", $$CommentSection, { "data-astro-cid-mpehbva7": true })}</div>` })}`;
}, "/home/blackridgeorg/public_html/src/pages/news-releases/[...slug].astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/news-releases/[...slug].astro";
const $$url = "/news-releases/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
