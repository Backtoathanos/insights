import rss from '@astrojs/rss';
import { a as getTranslatedData, b as getCollection, g as getRelativeLocaleUrl } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { d as defaultLocale } from '../chunks/siteSettings.json_BHn8gCmX.mjs';
import { g as getAllPosts } from '../chunks/blogUtils_DPiN0YAU.mjs';
export { renderers } from '../renderers.mjs';

const siteData = getTranslatedData("siteData", defaultLocale);
const rssLocale = defaultLocale;
const authors = await getCollection("authors");
async function GET(context) {
  const posts = await getAllPosts(rssLocale);
  return rss({
    // ex. you can use a stylesheet from "public/rss/styles.xsl"
    // stylesheet: "/rss/styles.xsl",
    // `<title>` field in output xml
    title: siteData.title,
    trailingSlash: false,
    // `<description>` field in output xml
    description: siteData.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // media is needed for blog posts. recommended to add atom support
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom"
    },
    // add atom:link to be compatible with atom
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    // items (each post)
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: `${getAuthorEmail(post.data.authors[0].slug)} (${getAuthorName(
        post.data.authors[0].slug
      )})`,
      // custom data example, define in XML tags
      // this adds the blog post image
      customData: `<media:content
          type="image/${post.data.heroImage.format == "jpg" ? "jpeg" : "png"}"
          width="${post.data.heroImage.width}"
          height="${post.data.heroImage.height}"
          medium="image"
          url="${getImageUrl(post)}" />
      `,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: getRelativeLocaleUrl(rssLocale, `/blog/${post.slug}/`)
    }))
  });
}
const getAuthorName = (authorSlug) => {
  let authorName = "unk";
  authors.map((author) => {
    if (author.slug === authorSlug) {
      authorName = author.data.name;
    }
  });
  return authorName;
};
const getAuthorEmail = (authorSlug) => {
  let authorEmail = "";
  authors.map((author) => {
    if (author.slug === authorSlug) {
      authorEmail = author.data.email;
    }
  });
  return authorEmail;
};
const getImageUrl = (post) => {
  let imageUrl = "";
  let imageUrlEnd = "";
  imageUrlEnd = post.data.heroImage.src.toString();
  if (imageUrlEnd.startsWith("/@fs")) {
    imageUrl = imageUrlEnd;
  } else {
    imageUrl = "https://www.blackridgeresearch.com" + imageUrlEnd;
  }
  return imageUrl;
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
