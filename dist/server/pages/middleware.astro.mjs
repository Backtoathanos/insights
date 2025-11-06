export { renderers } from '../renderers.mjs';

async function onRequest({ request, redirect }, next) {
  const blockedPaths = [
    '/.env',
    '/config.env',
    '/.environment',
    '/login.php',
    '/index.php'
  ];

  // Block direct access to sensitive files
  if (blockedPaths.some(path => request.url.includes(path))) {
    return new Response('Not found', { status: 404 });
  }

  // Normalize URLs (remove duplicate slashes)
  const url = new URL(request.url);
  if (url.pathname.includes('//')) {
    return redirect(url.pathname.replace(/\/+/g, '/'));
  }

  // Try to proceed with the request
  try {
    const response = await next();

    // If the response is 404, redirect to /404
    if (response.status === 404) {
      return redirect('/404');
    }

    return response;
  } catch (error) {
    // If any error occurs (e.g., API fetch fails), redirect to 404
    return redirect('/404');
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  onRequest
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
