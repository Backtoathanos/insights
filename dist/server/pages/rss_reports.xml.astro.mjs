import rss from '@astrojs/rss';
import { a as getTranslatedData, g as getRelativeLocaleUrl } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { d as defaultLocale } from '../chunks/siteSettings.json_BHn8gCmX.mjs';
export { renderers } from '../renderers.mjs';

const siteData = getTranslatedData("siteData", defaultLocale);
const rssLocale = defaultLocale;
const apiUrl = "https://adminapi.blackridgeresearch.com/reports/live?page=1&limit=1000000";
const posts = await fetch(`${apiUrl}`).then((res) => res.json());
async function GET(context) {
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
    customData: `<atom:link href="${context.site}rss_reports.xml" rel="self" type="application/rss+xml" />`,
    // items (each post)
    items: posts.posts.map((post) => ({
      title: post.rtitle,
      link: getRelativeLocaleUrl(rssLocale, `/reports/${post.page_title}/`),
      description: post.meta_desc,
      pubDate: post.last_updated,
      guid: btoa(post.nid)
      // custom data example, define in XML tags
      // this adds the blog post image
      //         customData: `<media:content
      //       type="image/${post.data.heroImage.format == "jpg" ? "jpeg" : "png"}"
      //       width="${post.data.heroImage.width}"
      //       height="${post.data.heroImage.height}"
      //       medium="image"
      //       url="${getImageUrl(post)}" />
      //   `,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
