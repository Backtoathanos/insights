export { renderers } from '../renderers.mjs';

const apiUrl = "https://adminapi.blackridgeresearch.com/industry/live?page=8&limit=5000";
const getAllPostsData = await fetch(`${apiUrl}`).then((res) => res.json());
console.log("getAllPostsData, ", getAllPostsData);
const GET = async (context) => {
  const urls = getAllPostsData.posts.map((row) => {
    return `
            <url>
            <loc>${context.site}new-projects-near-mer/${row.page_title}</loc>
             <lastmod>${row.created_date}</lastmod>
              <priority>0.80</priority>
            </url>`;
  }).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            ${urls}
            </urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
