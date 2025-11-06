export { renderers } from '../renderers.mjs';

const apiUrl = "https://adminapi.blackridgeresearch.com/blog/mostrecentnews";
const getAllPostsData = await fetch(`${apiUrl}`).then((res) => res.json());
const GET = async (context) => {
  const urls = getAllPostsData.map((row) => {
    return `
            <url>
                <loc>${context.site}news-releases/${row.page_title}</loc>
                <news:news>
                    <news:publication>
                        <news:name>${escapeXml("Blackridge Research & Consulting")}</news:name>
                        <news:language>en</news:language>
                    </news:publication>
                    <news:publication_date>${row.last_updated}</news:publication_date>
                    <news:title>${escapeXml(row.title)}</news:title>
                    <news:keywords>${escapeXml(row.tags)}</news:keywords>
                </news:news>
                <image:image>
                    <image:loc>https://adminapi.blackridgeresearch.com/uploads/${row.image_name}</image:loc>
                    <image:license>https://www.blackridgeresearch.com/terms-of-service</image:license>
                </image:image>
            </url>`;
  }).join("");
  function escapeXml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
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
