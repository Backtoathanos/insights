const id = "fr/tailwind-gradient-underline/index.mdx";
						const collection = "blog";
						const slug = "fr/tailwind-gradient-underline";
						const body = "\nThis is a short post on how to create a gradient underline with Tailwind CSS to separate sections of your page, or just to make your links look cool! I'll explain the code below, but if you just want to see the code, you can skip to the end.\n\n## How to create a gradient underline\n\nWe create this as an `absolute` positioned element, which requires the parent element to be `relative`. This allows us to position the element relative to the parent (surpise). In this case we are going to have it underline the parent element, although you could adjust this positioning.\n\n### Gradient underline color\n\nWe're going to use the `bg-gradient-to-r` utility to create a gradient from left to right. Direction really doesn't matter, the point is that it's a gradient. For the starting color we're going to make it transparent, go to your desired color, and go back to transparent. We can do this with the utilities `bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0`. This will create a gradient from transparent to `sky-500` to transparent. You can adjust the opacity of the middle color to whatever you want. I chose `70` because it looked good to me.\n\n### Gradient underline height\n\nLet's set the height of the underline to `h-px`. This will make it 1px tall. You can adjust this to whatever you want.\n\n### Positioning the gradient underline\n\nWe want the gradient underline to span the bottom edge of the parent element. So the first utility we want to use is `inset-x-0` to have it go from the left edge to the right edge, then `bottom-0` to put it at the bottom. You can find more info about these utilities in the [Tailwind Docs](https://tailwindcss.com/docs/top-right-bottom-left#placing-a-positioned-element).\n\nIf you need to adjust the vertical location of the underline, you can do so using the `bottom` utility. For instance, if you want to move it down slightly to overlap a bottom border, you can use `-bottom-px` to move it down 1px.\n\n## Final code\n\n### Generic gradient underline\n\nHere I use the color `sky-500` from the Tailwind color palette. You can use whatever color you want.\n\n```html\n<div class=\"relative\">\n\t<span\n\t\tclass=\"absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0\"\n\t></span>\n</div>\n```\n\n### Link underline on hover\n\nThis is very similar to the above, but I've added a hover effect to the underline. There's also a transition because who doesn't like transitions?\n\n![](../tailwind-gradient-underline/spongebob-transitions.jpeg)\n\n```html\n<button class=\"group relative border-2 p-2\">\n\tMy Link!\n\t<span\n\t\tclass=\"absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100\"\n\t></span>\n</button>\n```\n";
						const data = {title:"Creating a Gradient Underline with Tailwind CSS",description:"This is a short post on how to create a gradient underline with Tailwind CSS to separate sections of your page, or just to make your links look cool!",authors:[{slug:"web-reaper",collection:"authors"},{slug:"second-author",collection:"authors"}],pubDate:new Date(1688947200000),heroImage:
						new Proxy({"src":"/_astro/heroImage.CO-5U07u.jpg","width":1920,"height":1152,"format":"jpg","fsPath":"/home/blackridgeorg/public_html/src/content/blog/fr/tailwind-gradient-underline/heroImage.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/content/blog/fr/tailwind-gradient-underline/heroImage.jpg";
							}
							
							return target[name];
						}
					})
					,categories:["cool code"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/blackridgeorg/public_html/src/content/blog/fr/tailwind-gradient-underline/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
