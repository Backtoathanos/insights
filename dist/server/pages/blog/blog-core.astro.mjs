export { renderers } from '../../renderers.mjs';

// Core blog functionality
function hideSkeletons() {
	document.getElementById("toc-skeleton")?.classList.add("hidden");
	document.getElementById("mobile-toc-skeleton")?.classList.add("hidden");
	document.getElementById("toc-content")?.classList.remove("hidden");
	document.getElementById("category-skeleton")?.classList.add("hidden");
	document.getElementById("title-skeleton")?.classList.add("hidden");
	document.getElementById("image-skeleton")?.classList.add("hidden");
	document.getElementById("content-skeleton")?.classList.add("hidden");
	document.getElementById("blog-description")?.classList.remove("hidden");
	document.getElementById("contenttype")?.classList.remove("hidden");
	document.getElementById("blog-title-main")?.classList.remove("hidden");
	document.getElementById("image-container")?.classList.remove("hidden");
	document.getElementById("share-skeleton")?.classList.add("hidden");
	document.getElementById("product-skeleton")?.classList.add("hidden");
	document.getElementById("recent-posts-skeleton")?.classList.add("hidden");
	document.getElementById("sidebar-content")?.classList.remove("hidden");
	document.getElementById("related-posts-skeleton")?.classList.add("hidden");
	document.getElementById("comment-skeleton")?.classList.add("hidden");
	document.getElementById("related-posts-content")?.classList.remove("hidden");
	document.getElementById("comment-section-content")?.classList.remove("hidden");
	document.querySelectorAll(".description .hidden").forEach((el) => el.classList.remove("hidden"));
}

async function fetchBlogData(afterBlog) {
	try {
		const response = await fetch(
			`https://adminapi.blackridgeresearch.com/blog/listid/${afterBlog}`,
		);
		if (!response.ok) throw new Error("Failed to fetch blog data");
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error("Error fetching blog data:", error);
		return null;
	}
}

async function fetchBlogRelatedData(rcont, styp, nid) {
	try {
		const response = await fetch(
			`https://adminapi.blackridgeresearch.com/blog/live/related/${rcont}/${styp}/${nid}`,
		);
		if (!response.ok) throw new Error("Failed to fetch related data");
		return await response.json();
	} catch (error) {
		console.error("Error fetching related data:", error);
		return null;
	}
}

function updateUrl(id) {
	const newUrl = `${window.location.origin}/blog/${id}`;
	window.history.replaceState({}, "", newUrl);
}

function generateSchemaMarkup(blogData) {
	// Helper function to extract plain text from HTML
	const extractText = (html) => {
		if (!html) return "";
		const temp = document.createElement("div");
		temp.innerHTML = html;
		return temp.textContent || temp.innerText || "";
	};

	// Format dates
	const publishedDate = new Date(blogData.created_date);
	const modifiedDate = new Date(blogData.last_updated || blogData.created_date);

	// Construct URLs
	const currentUrl =
		window.location.href || `https://www.blackridgeresearch.com/blog/${blogData.page_title}`;
	const categoryUrl = `https://www.blackridgeresearch.com/blog/category/${(
		blogData.industry || "insights"
	)
		.toLowerCase()
		.replace(/\s+/g, "-")}`;

	// Process keywords
	const keywords = [];
	if (blogData.meta_key) keywords.push(...blogData.meta_key.split(/\s*,\s*/));
	if (blogData.tags)
		keywords.push(...blogData.tags.split(/\s*,\s*/).map((tag) => tag.replace(/-/g, " ")));
	const uniqueKeywords = [...new Set(keywords)];

	/**
	 * Extracts unique FAQs from HTML content
	 * @param {string} html - The HTML content
	 * @returns {Array} - Array of unique FAQ objects
	 */
	const extractUniqueFAQs = (html) => {
		if (!html) return [];

		const faqs = [];
		const uniqueQuestions = new Set();
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = html;

		// Find all FAQ containers - adjust selectors as needed
		const faqItems = tempDiv.querySelectorAll(".faq-item, .faq-container");

		faqItems.forEach((item) => {
			const questionElem = item.querySelector(".faq-question, .question");
			const answerElem = item.querySelector(".faq-answer, .answer");

			if (questionElem && answerElem) {
				const questionText = extractText(questionElem.innerHTML);
				const answerText = extractText(answerElem.innerHTML);

				// Only add if question is unique
				if (questionText && !uniqueQuestions.has(questionText)) {
					uniqueQuestions.add(questionText);
					faqs.push({
						"@type": "Question",
						name: questionText,
						acceptedAnswer: {
							"@type": "Answer",
							text: answerText,
						},
					});
				}
			}
		});

		return faqs;
	};

	/**
	 * Generates fallback FAQs based on blog metadata
	 * @returns {Array} - Array of generated FAQ objects
	 */
	const generateFallbackFAQs = () => {
		const faqs = [];
		const uniqueQuestions = new Set();

		// Industry-specific question
		if (blogData.industry || blogData.industry2) {
			const industry = blogData.industry || blogData.industry2;
			const question = `What are the key trends in ${industry}?`;

			if (!uniqueQuestions.has(question)) {
				uniqueQuestions.add(question);
				faqs.push({
					"@type": "Question",
					name: question,
					acceptedAnswer: {
						"@type": "Answer",
						text: `This article covers the latest developments in ${industry} based on our market research.`,
					},
				});
			}
		}

		// Title-based question
		if (blogData.title) {
			const title = blogData.title.split("(")[0].trim();
			const question = `What makes ${title} important?`;

			if (!uniqueQuestions.has(question)) {
				uniqueQuestions.add(question);
				faqs.push({
					"@type": "Question",
					name: question,
					acceptedAnswer: {
						"@type": "Answer",
						text:
							blogData.meta_desc ||
							`This analysis provides insights into ${title} and its market impact.`,
					},
				});
			}
		}

		// Standard questions
		const standardQuestions = [
			{
				question: "How current is this information?",
				answer: `This article was published on ${publishedDate.toLocaleDateString()} and ${
					publishedDate.getTime() !== modifiedDate.getTime()
						? `last updated on ${modifiedDate.toLocaleDateString()}`
						: "has not been updated since publication"
				}.`,
			},
			{
				question: "Where can I find more research on this topic?",
				answer:
					"Visit our reports section or contact our research team for detailed market analysis.",
			},
		];

		standardQuestions.forEach(({ question, answer }) => {
			if (!uniqueQuestions.has(question)) {
				uniqueQuestions.add(question);
				faqs.push({
					"@type": "Question",
					name: question,
					acceptedAnswer: {
						"@type": "Answer",
						text: answer,
					},
				});
			}
		});

		return faqs;
	};

	// Extract or generate FAQs
	const extractedFAQs = extractUniqueFAQs(blogData.description);
	const finalFAQs = extractedFAQs.length > 0 ? extractedFAQs : generateFallbackFAQs();

	// Construct the complete schema object
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				name: "Blackridge Research & Consulting",
				url: "https://www.blackridgeresearch.com",
				sameAs: [
					"https://www.linkedin.com/company/blackridge-research",
					"https://twitter.com/blackridgeresearch",
					"https://www.facebook.com/blackridgeresearch",
				],
				contactPoint: {
					"@type": "ContactPoint",
					telephone: "+1 (917) 993 7467",
					contactType: "customer service",
					email: "support@blackridgeresearch.com",
					areaServed: "Worldwide",
					availableLanguage: ["English"],
				},
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: "https://www.blackridgeresearch.com/",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Blog",
						item: "https://www.blackridgeresearch.com/blog",
					},
					{
						"@type": "ListItem",
						position: 3,
						name: blogData.industry || "Industry Insights",
						item: categoryUrl,
					},
					{
						"@type": "ListItem",
						position: 4,
						name: blogData.title || "Blog Post",
						item: currentUrl,
					},
				],
			},
			{
				"@type": "BlogPosting",
				headline: blogData.title || "Industry Insights",
				alternativeHeadline: blogData.meta_title || blogData.title || "",
				description:
					blogData.meta_desc || extractText(blogData.description)?.substring(0, 160) || "",
				datePublished: publishedDate.toISOString(),
				dateModified: modifiedDate.toISOString(),
				author: {
					"@type": "Person",
					name: blogData.author || "Blackridge Research Analyst",
					url: "https://www.blackridgeresearch.com/about-us",
				},
				publisher: {
					"@type": "Organization",
					name: "Blackridge Research & Consulting",
					url: "https://www.blackridgeresearch.com",
				},
				image: {
					"@type": "ImageObject",
					url: blogData.image_name
						? `https://adminapi.blackridgeresearch.com/uploads/${blogData.image_name}`
						: "https://www.blackridgeresearch.com/default-blog-image.jpg",
					width: 1200,
					height: 628,
				},
				keywords: uniqueKeywords,
				articleSection: blogData.industry2 || blogData.industry || "Industry Insights",
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": currentUrl,
				},
				about: {
					"@type": "Thing",
					name: blogData.industry || "Market Research",
				},
				isAccessibleForFree: true,
				genre: "Business & Industry",
				// Embed FAQs directly in the BlogPosting
				mainEntity:
					finalFAQs.length > 0
						? {
								"@type": "ItemList",
								itemListElement: finalFAQs.map((faq, index) => ({
									"@type": "ListItem",
									position: index + 1,
									item: faq,
								})),
							}
						: undefined,
			},
		],
	};

	// Remove empty or undefined properties
	if (schema["@graph"][2].mainEntity === undefined) {
		delete schema["@graph"][2].mainEntity;
	}

	// Inject into page
	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.text = JSON.stringify(schema);
	document.head.appendChild(script);

	return schema;
}

function addExternalLinkIcons() {
	const blogDescription = document.getElementById("blog-description");
	if (!blogDescription) return;

	const externalLinks = blogDescription.querySelectorAll('a[target="_blank"]');

	externalLinks.forEach((link) => {
		// Check if icon already exists
		if (link.querySelector(".external-link-icon")) return;

		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("class", "external-link-icon");
		svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttribute("fill", "none");
		svg.setAttribute("stroke", "currentColor");
		svg.setAttribute("stroke-width", "2");
		svg.setAttribute("viewBox", "0 0 24 24");
		svg.style.width = "16px";
		svg.style.height = "16px";
		svg.style.marginLeft = "4px";
		svg.style.marginRight = "4px";
		svg.style.verticalAlign = "middle";
		svg.style.display = "inline-block";

		const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path1.setAttribute("d", "M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6");

		const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
		polyline.setAttribute("points", "15 3 21 3 21 9");

		const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
		line.setAttribute("x1", "10");
		line.setAttribute("y1", "14");
		line.setAttribute("x2", "21");
		line.setAttribute("y2", "3");

		svg.appendChild(path1);
		svg.appendChild(polyline);
		svg.appendChild(line);

		link.appendChild(svg);
	});
}

function bindDataToHtml(data) {
	if (!data || !data.length) return;

	styp = data[0].styp;
	styp2 = data[0].styp2 || "NA";
	nid = data[0].nid;
	rcont = data[0].rcont;

	document.getElementById("blog-title").textContent = data[0].title;
	document.getElementById("blog-title-main").textContent = data[0].title;
	document.getElementById("blog-image").src =
		`https://adminapi.blackridgeresearch.com/uploads/${data[0].image_name}`;
	document.getElementById("blog-image").alt = data[0].title;
	document.getElementById("blog-description").innerHTML = data[0].description.replace(
		/\r?\n/g,
		"<br>",
	);

	generateSchemaMarkup(data[0]);

	const contentTypeElement = document.getElementById("contenttype");
	if (contentTypeElement) {
		contentTypeElement.textContent = data[0].styp2 || data[0].styp || "NA";
	}

	const createdDate = new Date(data[0].last_updated);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const formattedDate = `${months[createdDate.getMonth()]} ${createdDate.getDate()}, ${createdDate.getFullYear()}`;

	const dateElement = document.getElementById("lastupdated-on");
	if (dateElement) {
		dateElement.textContent = formattedDate;
	}

	addExternalLinkIcons();
	injectAccordionThemeCSS();
	injectFrontendBlockStyles();
	bindAccordionToggle();
	hideSkeletons();
}

async function loadBlog() {
	try {
		const url = window.location.href;
		const blogIndex = url.indexOf("/blog/");
		let afterBlog =
			blogIndex !== -1
				? url
						.slice(blogIndex + 6)
						.split("?")[0]
						.replace(/\//g, "_")
						.replace(/[:?/]/g, "-")
				: null;

		if (!afterBlog) throw new Error("Invalid blog ID");

		const data = await fetchBlogData(afterBlog);
		if (data) {
			bindDataToHtml(data);
			updateUrl(data[0].page_title);
			await fetchBlogRelatedData(data[0].rcont, data[0].styp, data[0].nid);
			hideSkeletons();
		} else {
			throw new Error("Blog not found");
		}
	} catch (error) {
		console.error("Error loading blog:", error);
		document.getElementById("blog-title").textContent = error.message;
		hideSkeletons();
	}
}

document.addEventListener("DOMContentLoaded", loadBlog);

// Initialize on load

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	bindDataToHtml,
	hideSkeletons,
	loadBlog
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
