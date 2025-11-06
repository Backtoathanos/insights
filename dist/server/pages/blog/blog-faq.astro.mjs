export { renderers } from '../../renderers.mjs';

// FAQ Accordion functionality
function injectAccordionThemeCSS() {
	if (document.getElementById("faq-theme-style")) return;

	const style = document.createElement("style");
	style.id = "faq-theme-style";
	style.textContent = `
      .faq-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .faq-item {
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        position: relative;
        background: #ffffff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        border: 1px solid #e5e9f2;
      }
      .faq-item:hover {
        box-shadow: 0 4px 16px rgba(0, 97, 255, 0.1);
        border-color: #0061ff;
      }
      .faq-header {
        padding: 24px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        transition: all 0.3s ease;
      }
      .faq-header:hover {
        background-color: #f7f9fc;
      }
      .faq-question {
        font-size: 16px;
        font-weight: 500;
        flex: 1;
        text-align: left;
        transition: color 0.3s ease;
        color: #111827;
      }
      .arrow {
        width: 20px;
        height: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-left: 16px;
        transition: transform 0.3s ease;
        transform-origin: center;
      }
      .arrow svg {
        width: 14px !important;
        height: 14px !important;
        display: block;
      }
      .faq-item.active .arrow {
        transform: rotate(180deg);
      }
      .faq-content {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .faq-item.active .faq-content {
        max-height: 400px;
      }
      .faq-answer {
        padding: 20px 24px 24px;
        font-size: 14px;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease 0.1s;
        line-height: 1.6;
        color: #4b5563;
      }
      .faq-item.active .faq-answer {
        opacity: 1;
        transform: translateY(0);
      }
      .faq-item.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #0061ff;
        transform: scaleY(1);
        transition: transform 0.3s ease;
      }
      .faq-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #0061ff;
        transform: scaleY(0);
        transition: transform 0.3s ease;
      }
      .faq-item.active .faq-header {
        background: rgba(0, 97, 255, 0.05);
      }
      .dark .faq-item {
        background: #222;
        border: 1px solid #333;
        box-shadow: 0 2px 8px rgba(255, 255, 255, 0.05);
      }
      .dark .faq-header:hover {
        background-color: #262626;
      }
      .dark .faq-question {
        color: #f5f5f5;
      }
      .dark .faq-answer {
        color: #b3b3b3;
      }
      .dark .faq-item.active .faq-header {
        background: rgba(0, 97, 255, 0.1);
      }
      @media (max-width: 768px) {
        .faq-header {
          padding: 20px;
        }
        .faq-question {
          font-size: 16px;
        }
        .faq-answer {
          padding: 20px 20px 20px;
          font-size: 14px;
        }
      }
      .faq-header:focus {
        outline: 2px solid #0061ff;
        outline-offset: 2px;
      }
    `;
	document.head.appendChild(style);
}

function bindAccordionToggle() {
	const headers = document.querySelectorAll(".faq-header");
	headers.forEach((header) => {
		header.addEventListener("click", () => {
			const item = header.parentElement;
			const isActive = item.classList.contains("active");

			document.querySelectorAll(".faq-item").forEach((el) => {
				el.classList.remove("active");
				const h = el.querySelector(".faq-header");
				h?.setAttribute("aria-expanded", "false");
			});

			if (!isActive) {
				item.classList.add("active");
				header.setAttribute("aria-expanded", "true");
			}
		});
	});
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	injectAccordionThemeCSS();
	bindAccordionToggle();
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
