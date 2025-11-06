export { renderers } from '../../renderers.mjs';

// Table of Contents functionality
function setupTocHighlighting() {
	const tocLinks = document.querySelectorAll(".toc-link");
	const headers = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6")).filter((h) => h.id);
	const tocCollapseBtns = document.querySelectorAll(".toc-collapse-btn");

	if (!tocLinks.length || !headers.length) return;

	let currentActiveLink = null;
	let isProgrammaticScroll = false;

	function expandSection(link) {
		const parentItem = link.closest(".toc-item");
		if (parentItem && parentItem.querySelector(".toc-submenu")) {
			const submenu = parentItem.querySelector(".toc-submenu");
			const collapseBtn = parentItem.querySelector(".toc-collapse-btn");
			if (submenu.classList.contains("hidden")) {
				submenu.classList.remove("hidden");
				if (collapseBtn) collapseBtn.querySelector(".toc-arrow").classList.add("rotate-180");
			}
		}
	}

	function collapseInactiveSections(activeLink) {
		const activeParents = [];
		let current = activeLink;
		while (current) {
			current = current.closest(".toc-item");
			if (current) {
				activeParents.push(current);
				current = current.parentElement.closest(".toc-item");
			}
		}

		document.querySelectorAll(".toc-item").forEach((item) => {
			if (!activeParents.includes(item) && item !== activeLink?.closest(".toc-item")) {
				const submenu = item.querySelector(".toc-submenu");
				const collapseBtn = item.querySelector(".toc-collapse-btn");
				if (submenu && !submenu.classList.contains("hidden")) {
					submenu.classList.add("hidden");
					if (collapseBtn) collapseBtn.querySelector(".toc-arrow").classList.remove("rotate-180");
				}
			}
		});
	}

	function clearActiveLinks() {
		tocLinks.forEach((link) => {
			link.classList.remove("active");
			link.parentElement.classList.remove("active");
		});
	}

	function getCurrentHeader() {
		if (isProgrammaticScroll) return null;
		const scrollPosition = window.scrollY + 100;

		if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
			return headers[headers.length - 1];
		}

		for (let i = headers.length - 1; i >= 0; i--) {
			const header = headers[i];
			const headerTop = header.offsetTop;
			if (scrollPosition >= headerTop) return header;
		}
		return null;
	}

	function updateActiveLink() {
		const currentHeader = getCurrentHeader();
		if (!currentHeader) {
			clearActiveLinks();
			return;
		}

		if (currentActiveLink && currentActiveLink.getAttribute("href") === `#${currentHeader.id}`)
			return;

		clearActiveLinks();
		const correspondingLink = document.querySelector(`.toc-link[href="#${currentHeader.id}"]`);
		if (correspondingLink) {
			correspondingLink.classList.add("active");
			correspondingLink.parentElement.classList.add("active");
			currentActiveLink = correspondingLink;
			expandSection(correspondingLink);
			collapseInactiveSections(correspondingLink);

			const tocContainer = document.querySelector(".overflow-y-auto");
			if (tocContainer) {
				const linkRect = correspondingLink.getBoundingClientRect();
				const containerRect = tocContainer.getBoundingClientRect();
				if (linkRect.bottom > containerRect.bottom || linkRect.top < containerRect.top) {
					tocContainer.scrollTo({
						top: correspondingLink.offsetTop - tocContainer.offsetTop - 100,
						behavior: "smooth",
					});
				}
			}
		}
	}

	tocLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			const targetId = link.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				isProgrammaticScroll = true;
				window.removeEventListener("scroll", scrollHandler);

				window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: "smooth",
				});

				history.pushState(null, null, targetId);
				clearActiveLinks();
				link.classList.add("active");
				link.parentElement.classList.add("active");
				currentActiveLink = link;
				expandSection(link);
				collapseInactiveSections(link);

				setTimeout(() => {
					isProgrammaticScroll = false;
					window.addEventListener("scroll", scrollHandler);
				}, 1000);
			}
		});
	});

	tocCollapseBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.stopPropagation();
			const item = btn.closest(".toc-item");
			const submenu = item.querySelector(".toc-submenu");
			const arrow = btn.querySelector(".toc-arrow");
			submenu.classList.toggle("hidden");
			arrow.classList.toggle("rotate-180");
		});
	});

	let isScrolling;
	function scrollHandler() {
		window.clearTimeout(isScrolling);
		isScrolling = setTimeout(() => {
			if (!isProgrammaticScroll) updateActiveLink();
		}, 100);
	}

	window.addEventListener("scroll", scrollHandler, { passive: true });
	updateActiveLink();

	if (window.location.hash) {
		const targetElement = document.querySelector(window.location.hash);
		if (targetElement) {
			isProgrammaticScroll = true;
			setTimeout(() => {
				window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: "smooth",
				});
				updateActiveLink();
				isProgrammaticScroll = false;
			}, 500);
		}
	}
}

// TOC Styles
const tocStyles = `
    .toc-item.active {
      padding:10px !important;
      background-color: rgba(37, 99, 235, 0.05);
    }
    .toc-link.active {
      color: #2563eb;
      font-weight: 600;
      padding:6px;
      position: relative;
    }
    .toc-link.active::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 60%;
      background-color: #2563eb;
      border-radius: 2px;
    }
    .dark .toc-item.active {
      background-color: rgba(37, 99, 235, 0.1);
      padding:10px !important;
    }
    .dark .toc-link.active {
      color: #3b82f6;
      padding:16px 2px !important;
    }
    .dark .toc-link.active::before {
      background-color: #3b82f6;
      padding:16px 2px !important;
    }
    .toc-link {
      transition: color 0.2s ease;
    }
    .toc-item {
      transition: background-color 0.2s ease;
    }
    .toc-submenu {
      transition: max-height 0.3s ease, opacity 0.2s ease;
    }
    .toc-arrow {
      transition: transform 0.2s ease;
    }
  `;

const styleElement = document.createElement("style");
styleElement.textContent = tocStyles;
document.head.appendChild(styleElement);

// Initialize after content is loaded
document.addEventListener("DOMContentLoaded", () => {
	setTimeout(setupTocHighlighting, 500);
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
