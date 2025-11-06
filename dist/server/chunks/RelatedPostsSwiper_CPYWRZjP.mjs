import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderComponent } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { g as getRelativeLocaleUrl } from './translationUtils_XhrKexoJ.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { f as formatDate, s as slugify, h as humanize } from './textUtils_tlWO4DlQ.mjs';
import { g as getLocaleFromUrl } from './localeUtils_hlzOdIQk.mjs';
import { $ as $$Button, a as $$Icon } from './Button_BaSqYn27.mjs';
/* empty css                          */
/* empty css                          */
import { g as getAllPosts } from './blogUtils_DPiN0YAU.mjs';

const $$Astro$3 = createAstro("https://www.blackridgeresearch.com");
const $$PostCardBlackridgeSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostCardBlackridgeSidebar;
  const { post, showDescription = false, class: className, ...rest } = Astro2.props;
  const { title, description, categories, authors, pubDate, images } = post.data;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const heroImage = images?.hero ?? {
    src: "https://adminapi.blackridgeresearch.com/uploads/default.jpg",
    width: 450,
    height: 300,
    format: "jpg"
  };
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["group", className], "class:list")}${spreadAttributes(rest)}> <a${addAttribute(getRelativeLocaleUrl(currLocale, `/blog/${post.slug}/`).replace(/\/$/, ""), "href")} class="flex gap-3"> <div class="my-auto aspect-square h-16 shrink-0 overflow-hidden rounded-sm"> <figure> ${renderComponent($$result, "Image", $$Image, { "src": heroImage.src, "alt": ` ${post.title}`, "width": heroImage.width, "height": heroImage.height, "format": heroImage.format, "densities": [1.5, 2], "quality": "high", "class": "h-auto min-h-full w-full object-cover" })} </figure> </div> <div class="flex flex-col justify-center"> <h3 class="line-clamp-2 text-sm font-medium transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400"> ${title} </h3> <time class="description mt-2 text-xs"${addAttribute(pubDate.toISOString(), "datetime")}> ${formatDate(pubDate, currLocale)} </time> </div> </a> </article>`;
}, "/home/blackridgeorg/public_html/src/components/PostCard/PostCardBlackridgeSidebar.astro", void 0);

const $$Astro$2 = createAstro("https://www.blackridgeresearch.com");
const $$RecentPopularPostsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RecentPopularPostsCard;
  getLocaleFromUrl(Astro2.url);
  const url = Astro2.url.pathname;
  const parts = url.split("/").filter((part) => part !== "");
  const firstSegment = parts[0];
  let response = await fetch("https://adminapi.blackridgeresearch.com/blog/recent/blog");
  let response2 = await fetch("https://adminapi.blackridgeresearch.com/blog/popular/blog");
  if (firstSegment == "news-releases") {
    response = await fetch("https://adminapi.blackridgeresearch.com/blog/recent/news-releases");
    response2 = await fetch("https://adminapi.blackridgeresearch.com/blog/popular/news-releases");
  } else if (firstSegment == "press-releases") {
    response = await fetch("https://adminapi.blackridgeresearch.com/blog/recent/press-releases");
    response2 = await fetch("https://adminapi.blackridgeresearch.com/blog/popular/press-releases");
  } else if (firstSegment == "project-profiles") {
    response = await fetch("https://adminapi.blackridgeresearch.com/blog/recent/project-profiles");
    response2 = await fetch("https://adminapi.blackridgeresearch.com/blog/popular/project-profiles");
  }
  const data = await response.json();
  const recentPosts = data;
  const data2 = await response2.json();
  const popularPosts = data2;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg border border-base-200 bg-base-50 p-4 text-sm leading-tight dark:border-base-800 dark:bg-base-950" data-astro-cid-g4s5desf> <div class="mb-4 grid grid-cols-2 gap-2" data-astro-cid-g4s5desf> ${renderComponent($$result, "Button", $$Button, { "type": "button", "variant": "outline", "class": "toggle-btn active", "data-target": "popular", "data-astro-cid-g4s5desf": true }, { "default": ($$result2) => renderTemplate`
Popular
` })} ${renderComponent($$result, "Button", $$Button, { "type": "button", "variant": "outline", "class": "toggle-btn", "data-target": "recent", "data-astro-cid-g4s5desf": true }, { "default": ($$result2) => renderTemplate`
Recent
` })} </div> <div class="max-h-[228px] overflow-y-auto" data-astro-cid-g4s5desf> <!-- Recent Posts --> <ul class="posts-list hidden flex-col gap-4" data-list="recent" data-astro-cid-g4s5desf> ${recentPosts.map((post) => {
    return renderTemplate`<li data-astro-cid-g4s5desf> ${renderComponent($$result, "PostCardBlackridgeSidebar", $$PostCardBlackridgeSidebar, { "post": {
      slug: post.page_title,
      data: {
        title: post.title,
        pubDate: new Date(post.created_date),
        images: {
          hero: {
            src: post.image_name ? `https://adminapi.blackridgeresearch.com/uploads/${post.image_name}` : "https://adminapi.blackridgeresearch.com/uploads/default.jpg",
            width: 450,
            height: 300,
            format: "jpg"
          }
        }
      }
    }, "data-astro-cid-g4s5desf": true })} </li>`;
  })} </ul> <!-- Popular Posts --> <ul class="posts-list flex flex-col gap-4" data-list="popular" data-astro-cid-g4s5desf> ${popularPosts.map((post) => {
    return renderTemplate`<li data-astro-cid-g4s5desf> ${renderComponent($$result, "PostCardBlackridgeSidebar", $$PostCardBlackridgeSidebar, { "post": {
      slug: post.page_title,
      data: {
        title: post.title,
        pubDate: new Date(post.created_date),
        images: {
          hero: {
            src: post.image_name ? `https://adminapi.blackridgeresearch.com/uploads/${post.image_name}` : "https://adminapi.blackridgeresearch.com/uploads/default.jpg",
            width: 450,
            height: 300,
            format: "jpg"
          }
        }
      }
    }, "data-astro-cid-g4s5desf": true })} </li>`;
  })} </ul> </div> </div>  `;
}, "/home/blackridgeorg/public_html/src/components/SidebarCards/RecentPopularPostsCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.blackridgeresearch.com");
const $$PostCardBlackridge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCardBlackridge;
  const { post, showDescription = false, class: className, ...rest } = Astro2.props;
  const { title, meta_desc, image_name, created_date, page_title, tags, styp } = post;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const tagsArray = (tags ?? "").split(",").map((tag) => tag.trim()).filter(Boolean);
  const heroImage = `https://adminapi.blackridgeresearch.com/uploads/${image_name}`;
  const pubDate = new Date(created_date);
  let redirection = "blog";
  if (styp == "News_Release") {
    redirection = "news-releases";
  } else if (styp == "Project Profiles") {
    redirection = "project-profiles";
  } else if (styp == "Press Release") {
    redirection = "press-releases";
  }
  redirection = redirection.toLowerCase();
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["", className], "class:list")}${spreadAttributes(rest)}> <div class="relative"> <a${addAttribute(getRelativeLocaleUrl(currLocale, `/${redirection}/${page_title}/`).replace(/\/$/, ""), "href")} class="relative flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700"> <figure> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": ` ${title}`, "width": 450, "height": 225, "densities": [1.5, 2], "quality": "high", "class": "h-auto min-h-full w-full object-cover" })} </figure> </a> <div class="absolute right-4 top-4"> <!-- Categories (if needed) --> <div class="flex gap-2"> <!-- Add categories here if available --> </div> </div> </div> <div class=""> <div class="mt-3 flex items-center justify-between"> <!-- Author section (if needed) --> <div class="flex items-center"> <!-- Add author details here if available --> </div> <!-- Published date --> <p class="whitespace-nowrap text-sm text-base-600 dark:text-base-400"> ${formatDate(pubDate, currLocale)} </p> </div> <!-- Title --> <div class="mt-2"> <a${addAttribute(getRelativeLocaleUrl(currLocale, `/blog/${page_title}/`).replace(/\/$/, ""), "href")} class="group"> <div class="flex justify-between"> <h2 class="line-clamp-2 inline text-lg font-semibold transition-colors md:text-xl"> ${title} </h2> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/arrow-up-right", "class": "size-6 shrink-0 transition-colors group-hover:text-primary-500 md:size-7" })} </div> </a> </div> <!-- Description --> ${showDescription && renderTemplate`<p class="description mt-2 line-clamp-2 text-sm">${meta_desc}</p>`} <!-- Tags --> <div class="mt-3"> ${tagsArray.map((tag) => renderTemplate`<a${addAttribute(getRelativeLocaleUrl(currLocale, `/tag/${slugify(tag)}`).replace(/\/$/, ""), "href")} class="rounded-full border border-base-200 bg-base-100 px-2 py-0.5 text-xs uppercase shadow-sm dark:border-base-800 dark:bg-base-900"> ${humanize(tag)} </a>`)} </div> </div> </article>`;
}, "/home/blackridgeorg/public_html/src/components/PostCard/PostCardBlackridge.astro", void 0);

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$RelatedPostsSwiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedPostsSwiper;
  const currLocale = getLocaleFromUrl(Astro2.url);
  const posts = await getAllPosts(currLocale);
  posts.slice(0, 6);
  const { rcont, styp, nid } = Astro2.props;
  const apiUrl = `https://adminapi.blackridgeresearch.com/blog/live/related/${rcont}/${styp}/${nid}`;
  async function fetchRelatedPosts(apiUrl2) {
    try {
      const response = await fetch(apiUrl2);
      if (!response.ok) {
        throw new Error("Failed to fetch related posts");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching related posts:", error);
      return [];
    }
  }
  const relatedPosts = await fetchRelatedPosts(apiUrl);
  return renderTemplate`${maybeRenderHead()}<section id="related-posts-swiper" class="overflow-hidden bg-primary-100/30 py-12 dark:bg-inherit" data-astro-cid-hfide3lm> <div class="site-container" data-astro-cid-hfide3lm> <div class="flex items-center justify-between" data-astro-cid-hfide3lm> <h3 class="h2 mb-0" data-astro-cid-hfide3lm>Related Contents</h3> <!-- swiper navigation --> <div class="flex items-center justify-end" data-astro-cid-hfide3lm> <div class="description flex items-center gap-2 opacity-80" data-astro-cid-hfide3lm> <button class="related-posts__swiper-prev cursor-pointer p-1 transition-colors hover:text-secondary-500" data-astro-cid-hfide3lm> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/arrow-narrow-left", "class": "size-10 lg:size-8", "data-astro-cid-hfide3lm": true })} <span class="sr-only" data-astro-cid-hfide3lm>Previous</span> </button> <button class="related-posts__swiper-next cursor-pointer p-1 transition-colors hover:text-secondary-500" data-astro-cid-hfide3lm> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/arrow-narrow-right", "class": "size-10 lg:size-8", "data-astro-cid-hfide3lm": true })} <span class="sr-only" data-astro-cid-hfide3lm>Next</span> </button> </div> </div> </div> <div class="mt-4 overflow-x-clip" data-astro-cid-hfide3lm> <!-- swiper --> <div class="related-posts__swiper relative mt-6" data-astro-cid-hfide3lm> <!-- Swiper Wrapper --> <div class="swiper-wrapper" data-astro-cid-hfide3lm> <!-- Inject related posts into Swiper --> ${relatedPosts.map((post, idx) => renderTemplate`<div class="swiper-slide" data-astro-cid-hfide3lm> ${renderComponent($$result, "PostCard", $$PostCardBlackridge, { "post": post, "showDescription": true, "data-astro-cid-hfide3lm": true })} </div>`)} </div> <!-- Swiper Scrollbar --> <div class="swiper-scrollbar" data-astro-cid-hfide3lm></div> </div> </div> </div> </section>  `;
}, "/home/blackridgeorg/public_html/src/components/BlackRidgeOther/RelatedPostsSwiper.astro", void 0);

export { $$RecentPopularPostsCard as $, $$RelatedPostsSwiper as a };
