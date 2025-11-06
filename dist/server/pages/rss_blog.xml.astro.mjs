import rss from '@astrojs/rss';
import { a as getTranslatedData } from '../chunks/translationUtils_XhrKexoJ.mjs';
import { d as defaultLocale } from '../chunks/siteSettings.json_BHn8gCmX.mjs';
export { renderers } from '../renderers.mjs';

getTranslatedData("siteData", defaultLocale);
const apiUrl = "https://adminapi.blackridgeresearch.com/blog/live?page=1&limit=1000000";
const posts = await fetch(`${apiUrl}`).then((res) => res.json());
async function GET(context) {
  const now = /* @__PURE__ */ new Date();
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const url = context.site;
  return rss({
    // ex. you can use a stylesheet from "public/rss/styles.xsl"
    // stylesheet: "/rss/styles.xsl",
    // `<title>` field in output xml
    title: "Blackridge Research and Consulting | Blog",
    trailingSlash: false,
    // `<description>` field in output xml
    description: "Stay informed with the latest industry developments, project updates, and strategic insights from Blackridge Research & Consulting.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site + "/blog",
    // media is needed for blog posts. recommended to add atom support
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom"
    },
    // add atom:link to be compatible with atom
    customData: `<language>en</language>
    <copyright>Copyright ${year}, Blackridge Research & Consulting</copyright>
    <lastBuildDate>${formatRssDate(now)}</lastBuildDate>
    <atom:link href="${context.site}rss_blog.xml" rel="self" type="application/rss+xml" />`,
    // items (each post)
    items: posts.posts.map((post) => ({
      // link: getRelativeLocaleUrl(rssLocale, `/blog/${post.page_title}/`),
      // title: post.title,
      // description: post.meta_desc,
      // pubDate: post.last_updated,
      // guid: btoa(post.nid),
      // category:"Blog",
      customData: `
                <link>${url + "blog/" + post.page_title}</link>
                <title>${post.title}</title>
                <description><![CDATA[${post.meta_desc}]]></description>
                <media:content 
                url="https://adminapi.blackridgeresearch.com/uploads/${post.meta_image_name}"
                type="image/${returnExtention(post.meta_image_name)}" 
                medium="image" 
                width="800" 
                height="600" />
                <pubDate>${post.last_updated}</pubDate>
                <guid isPermaLink="true">${url + "blog/" + post.page_title}</guid>
                <category>Blog</category>
            `
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
function returnExtention(fileName) {
  let returnExt = "";
  if (fileName != "" && fileName != void 0) {
    returnExt = fileName.split(".").pop().toLowerCase();
  }
  return returnExt;
}
function formatRssDate(dateInput) {
  const date = new Date(dateInput);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const dayName = weekdays[date.getUTCDay()];
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const absOffset = Math.abs(offset);
  const offsetHours = String(Math.floor(absOffset / 60)).padStart(2, "0");
  const offsetMinutes = String(absOffset % 60).padStart(2, "0");
  return `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds} ${sign}${offsetHours}${offsetMinutes}`;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
