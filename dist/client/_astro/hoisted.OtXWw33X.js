import"./hoisted.gbJwoly6.js";import"./Checkbox.astro_astro_type_script_index_0_lang.BpgyQeru.js";import"./RelatedPostsSwiper.astro_astro_type_script_index_0_lang.CelzMKbk.js";import"./NewsLaterPopup.astro_astro_type_script_index_2_lang.28rcLJxP.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./create-element-if-not-defined.C9HaC2X_.js";import"./autoplay.B9NhfF4c.js";import"./_commonjsHelpers.BosuxZz1.js";function q(){const x=document.getElementById("skeleton-loader");x&&(x.style.display="none")}const B=document.querySelector("[data-fade-in]");B&&window.addEventListener("scroll",()=>{window.scrollY>300&&B.classList.add("visible")});const N=window.location.href,L=N.indexOf("/news-releases/");let w;L!==-1&&(w=N.slice(L+15),w=w.split("?")[0]);if(w){let x=function(){if(document.getElementById("faq-theme-style"))return;const e=document.createElement("style");e.id="faq-theme-style",e.textContent=`
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

  /* Dark mode */
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
  `,document.head.appendChild(e)},I=function(){if(document.getElementById("frontend-block-style"))return;const e=document.createElement("style");e.id="frontend-block-style",e.textContent=`
    /* --- Frontend NoteBox --- */
    .note-box {
      background-color: #e6f0fa;
      border-left: 4px solid #1e40b0;
      padding: 16px;
      margin: 16px 0;
      border-radius: 4px;
      font-family: 'Segoe UI', sans-serif;
      color: #333;
    }

    .dark .note-box {
      background-color: #1d2633;
      border-left: 4px solid #3b82f5;
      color: #e5e7eb;
    }

    /* --- Frontend CTA Box --- */
    .cta-box {
      background-color: #ffffff;
      border: 1px solid #d1d5db;
      border-left: 4px solid #2563eb;
      padding: 1.5rem;
      margin: 1.5rem 0;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      font-family: 'Segoe UI', sans-serif;
      color: #1f2937;
    }

    .dark .cta-box {
      background-color: #1e2a44;
      border: 1px solid #374151;
      border-left: 4px solid #3b82f6;
      color: #e5e7eb;
    }

    .cta-box p {
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
      line-height: 1.5;
    }

    .cta-box p.cta-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .cta-box p.cta-header-row span:first-child {
      font-size: 1.25rem;
      font-weight: 700;
      color: #000000;
    }

    .dark .cta-box p.cta-header-row span:first-child {
      color: #ffffff;
    }

    .cta-box a.cta-button {
      display: inline-flex;
      align-items: center;
      margin: 0.75rem 0;
      background-color: #3b82f6;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }

    .cta-box a.cta-button:hover {
      background-color: #2563eb;
    }
  `,document.head.appendChild(e)},j=function(e){e[0].styp,e[0].styp2,e[0].nid,e[0].rcont,z(e[0].rcont,e[0].styp,e[0].nid),document.getElementById("blog-title").textContent=e[0].title,document.getElementById("blog-title-main").textContent=e[0].title,document.getElementById("blog-image").src="https://adminapi.blackridgeresearch.com/uploads/"+e[0].image_name,document.getElementById("blog-image").alt=e[0].title,document.getElementById("blog-description").innerHTML=e[0].description.replace(/\r\n\r\n/g,""),document.getElementById("contenttype").textContent=e[0].styp2,e[0].styp2==""&&(document.getElementById("contenttype").textContent=e[0].styp),O(e[0]);const n=new Date(e[0].last_updated),t=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],c=n.getDate(),d=n.getFullYear(),p=`${t} ${c}, ${d}`;document.getElementById("lastupdated-on").textContent=p;const S=document.querySelector("article.site-container");S&&(S.style.display="block");const E=document.getElementById("blog-description");document.querySelectorAll("table").forEach(o=>{const g=document.createElement("div");g.classList.add("overflow-x-auto","w-full","rounded-lg","shadow-md","my-6"),o.classList.add("w-full","border-collapse","text-sm","font-sans","min-w-[600px]","m-0","border","border-gray-200","dark:border-gray-700","rounded-lg","overflow-hidden"),o.querySelectorAll("th, td").forEach(a=>{a.classList.add("border","border-gray-200","dark:border-gray-700","px-4","py-3")}),o.querySelectorAll("th").forEach(a=>{a.classList.add("border-b-2","border-gray-300","dark:border-gray-600")});const y=o.querySelector("tr:last-child");y&&y.querySelectorAll("td").forEach(r=>{r.classList.add("border-b-0")}),o.parentNode.insertBefore(g,o),g.appendChild(o);const m=o.querySelector("tr:first-child");m&&(m.classList.add("!bg-[#0c1071]","!text-white","dark:!bg-[#1116A5]"),m.querySelectorAll("th, td").forEach(a=>{a.classList.add("px-4","py-3","font-bold","text-base","text-left","border-b","border-[#ffffff30]")})),o.querySelectorAll("tr:not(:first-child)").forEach((a,r)=>{const i=r%2===0?"!bg-[#f8fafc]":"!bg-[#e9ecef]",h=r%2===0?"dark:!bg-[#1e293b]":"dark:!bg-[#0f172a]";a.classList.add(i,h,"hover:!bg-[#e2e8f0]","dark:hover:!bg-[#1e3a8a]","transition-colors","duration-200"),a.querySelectorAll("td").forEach(H=>{H.classList.add("px-4","py-3","text-sm","!text-[#1e293b]","dark:!text-[#f8fafc]","border-b","border-[#00000010]","dark:border-[#ffffff10]")});const f=a.querySelector("td:first-child"),s=a.querySelector("td:nth-child(2)"),u=a.querySelector("td:last-child");f&&f.classList.add("font-semibold","text-[#0c1071]","dark:text-[#93c5fd]"),s&&s.classList.add("font-medium"),u&&u.classList.add("font-bold","!text-[#2563eb]","dark:!text-[#60a5fa]")})}),E.querySelectorAll(".cta-box").forEach(o=>{o.className="w-full my-6 p-4 bg-white dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-500 rounded-lg shadow-md";const g=o.querySelectorAll(".star-icon");if(g.length>0){const r=g[0].parentElement;if(r){r.classList.add("flex","items-center","justify-end","mb-2"),g.forEach(h=>{const f=h.querySelector("svg");f&&f.classList.add("w-5","h-5","fill-current","text-yellow-400")});const i=r.querySelector("em");i&&i.classList.add("ml-2","text-sm","text-gray-500","italic","dark:text-gray-400")}}const b=o.querySelector("strong");b&&(b.className="block text-xl font-bold mb-3 text-gray-800 dark:text-white",b.parentElement.tagName==="P"&&(b.parentElement.className="mb-3"));const C=o.querySelectorAll("p"),y=Array.from(C).find(r=>r.textContent.trim()&&!r.querySelector("a")&&!r.querySelector("strong")&&!r.querySelector(".star-icon")&&!r.querySelector(".feature-icon")&&!r.querySelector(".avatar-icon"));y&&(y.className="text-gray-600 dark:text-gray-300 mb-4");const m=o.querySelector(".cta-button");if(m)if(m.className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 mb-4",!m.querySelector("svg"))m.innerHTML+=`
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>`;else{const r=m.querySelector("svg");r.className="w-5 h-5 ml-2"}const k=o.querySelectorAll(".feature-icon-first, .feature-icon-second");if(k.length>0){const r=k[0].parentElement;r&&(r.className="flex flex-wrap gap-1 text-sm mb-3",k.forEach(i=>{const h=i.querySelector("svg");h&&h.setAttribute("class","w-4 h-4 mr-1 text-blue-500"),Array.from(i.parentNode.childNodes).filter(s=>s.nodeType===3&&s.textContent.trim()).forEach(s=>{const u=document.createElement("span");u.className="flex items-center text-gray-600 dark:text-gray-300",u.textContent=s.textContent,s.replaceWith(u)})}))}const a=Array.from(o.querySelectorAll("em")).find(r=>r.textContent.includes("Joined by"));if(a){const r=a.parentElement;r.className="flex items-center text-sm text-gray-500 dark:text-gray-400 italic mt-3";const i=document.createElement("div");i.className="flex -space-x-2 mr-2",o.querySelectorAll(".avatar-icon").forEach(f=>{const s=document.createElement("img");s.src="https://randomuser.me/api/portraits/women/44.jpg",s.alt="User",s.className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover",s.onerror=function(){this.onerror=null,this.src="https://www.gravatar.com/avatar/default?s=200&d=mp"},i.appendChild(s),f.remove()}),i.children.length>0&&r.insertBefore(i,a)}}),E.querySelectorAll("p").forEach(o=>{o.style.lineHeight="",o.classList.add("custom-line-height")});const A=document.createElement("style");A.textContent=`
  .custom-line-height {
    line-height: 1.8 !important;
  }
`,document.head.appendChild(A),v(),v(),x(),I(),R()},R=function(){document.querySelectorAll(".faq-header").forEach(n=>{n.addEventListener("click",()=>{const l=n.parentElement,t=l.classList.contains("active");document.querySelectorAll(".faq-item").forEach(c=>{c.classList.remove("active"),c.querySelector(".faq-header")?.setAttribute("aria-expanded","false")}),t||(l.classList.add("active"),n.setAttribute("aria-expanded","true"))})})},O=function(e){const n=new Date(e.created_date||new Date),l=new Date(e.last_updated||n),t=window.location.href,c={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"Blackridge Research & Consulting",legalName:"Starry Technologies Private Limited",url:"https://www.blackridgeresearch.com",email:"info@blackridgeresearch.com",logo:{"@type":"ImageObject",url:"https://www.blackridgeresearch.com/new-projects-near-me/images/new/footer_logo.svg",width:200,height:60},sameAs:["https://www.facebook.com/blackridgeresearch","https://twitter.com/BlackridgeHQ","https://www.youtube.com/@BlackridgeResearchConsulting","https://www.instagram.com/blackridgehq"],contactPoint:{"@type":"ContactPoint",telephone:"+1-234-567-890",contactType:"customer service",email:"support@blackridgeresearch.com",areaServed:"Worldwide",availableLanguage:["English"]}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.blackridgeresearch.com/"},{"@type":"ListItem",position:2,name:"News",item:"https://www.blackridgeresearch.com/news-releases"},{"@type":"ListItem",position:3,name:e.title||"News Release",item:t}]},{"@type":"NewsArticle",headline:e.title||"News Release",alternativeHeadline:e.meta_title||"Latest Update from Blackridge Research",description:e.meta_desc||"News release from Blackridge Research & Consulting",datePublished:n.toISOString(),dateModified:l.toISOString(),author:{"@type":"Organization",name:"Blackridge Research & Consulting",legalName:"Starry Technologies Private Limited",email:"info@blackridgeresearch.com",url:"https://www.blackridgeresearch.com"},publisher:{"@type":"Organization",name:"Blackridge Research & Consulting",logo:{"@type":"ImageObject",url:"https://www.blackridgeresearch.com/new-projects-near-me/images/new/footer_logo.svg",width:200,height:60},sameAs:["https://www.facebook.com/blackridgeresearch","https://twitter.com/BlackridgeHQ","https://www.youtube.com/@BlackridgeResearchConsulting","https://www.instagram.com/blackridgehq"]},image:{"@type":"ImageObject",url:e.image_name?"https://adminapi.blackridgeresearch.com/uploads/"+e.image_name:"https://www.blackridgeresearch.com/default-news-image.jpg",width:1200,height:628},keywords:e.keywords?e.keywords.split(","):["Industry Update","Market Report",e.styp||"",e.styp2||""],articleSection:e.styp2||e.styp||"Business News",articleBody:e.description||"News content from Blackridge Research & Consulting",isAccessibleForFree:!0,speakable:{"@type":"SpeakableSpecification",cssSelector:["headline","description"]},mainEntityOfPage:{"@type":"WebPage","@id":t}}]},d=document.createElement("script");d.type="application/ld+json",d.text=JSON.stringify(c),document.head.appendChild(d),console.log("NewsArticle schema generated:",c)},v=function(){const e=document.getElementById("blog-description");if(!e)return;e.querySelectorAll('a[target="_blank"]').forEach(l=>{if(l.querySelector(".external-link-icon"))return;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("class","external-link-icon"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("fill","none"),t.setAttribute("stroke","currentColor"),t.setAttribute("stroke-width","2"),t.setAttribute("viewBox","0 0 24 24"),t.style.width="16px",t.style.height="16px",t.style.marginLeft="4px",t.style.marginRight="4px",t.style.verticalAlign="middle",t.style.display="inline-block";const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6");const d=document.createElementNS("http://www.w3.org/2000/svg","polyline");d.setAttribute("points","15 3 21 3 21 9");const p=document.createElementNS("http://www.w3.org/2000/svg","line");p.setAttribute("x1","10"),p.setAttribute("y1","14"),p.setAttribute("x2","21"),p.setAttribute("y2","3"),t.appendChild(c),t.appendChild(d),t.appendChild(p),l.appendChild(t)})};async function T(e){try{const n=await fetch(`https://adminapi.blackridgeresearch.com/newsrelease/listid/${e}`);if(!n.ok)throw new Error("Failed to fetch blog data");return(await n.json()).data}catch(n){return console.error("Error fetching blog data:",n),null}}async function z(e,n,l){try{const t=await fetch(`https://adminapi.blackridgeresearch.com/blog/live/related/${e}/${n}/${l}`);if(!t.ok)throw new Error("Failed to fetch related data");return await t.json()}catch(t){return console.error("Error fetching related data:",t),null}}async function _(){const e=await T(w);e?(j(e),q()):(document.getElementById("blog-title").textContent="Blog not found",q())}_()}else document.getElementById("blog-title").textContent="Invalid blog ID",q();
