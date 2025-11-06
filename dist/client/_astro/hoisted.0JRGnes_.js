import"./hoisted.gbJwoly6.js";import"./Checkbox.astro_astro_type_script_index_0_lang.BpgyQeru.js";import"./RelatedPostsSwiper.astro_astro_type_script_index_0_lang.CelzMKbk.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./create-element-if-not-defined.C9HaC2X_.js";import"./autoplay.B9NhfF4c.js";import"./_commonjsHelpers.BosuxZz1.js";function R(){const $=document.getElementById("skeleton-loader");$&&($.style.display="none")}const z=document.querySelector("[data-fade-in]");z&&window.addEventListener("scroll",()=>{window.scrollY>300&&z.classList.add("visible")});const D=window.location.href,O=D.indexOf("/project-profiles/");let M;O!==-1&&(M=D.slice(O+18),M=M.split("?")[0]);if(M){let $=function(e){const i=`${window.location.origin}/project-profiles/${id}`;window.history.replaceState({},"",i)},Y=function(e){setTimeout(X,50),e[0].styp,e[0].styp2,e[0].nid,e[0].rcont,K(e[0].rcont,e[0].styp,e[0].nid),document.getElementById("blog-title").textContent=e[0].title,document.getElementById("blog-title-main").textContent=e[0].title,document.getElementById("blog-image").src="https://adminapi.blackridgeresearch.com/uploads/"+e[0].image_name,document.getElementById("blog-image").alt=e[0].title,document.getElementById("blog-description").innerHTML=e[0].description;const i=new Date(e[0].last_updated),n=["January","February","March","April","May","June","July","August","September","October","November","December"][i.getMonth()],u=i.getDate(),y=i.getFullYear(),S=`${n} ${u}, ${y}`;document.getElementById("lastupdated-on").textContent=S;const E=document.getElementById("blog-description");document.querySelectorAll("table").forEach(t=>{const h=document.createElement("div");h.classList.add("overflow-x-auto","w-full","rounded-lg","shadow-md","my-6"),t.classList.add("w-full","border-collapse","text-sm","font-sans","min-w-[600px]","m-0","border","!border-gray-200","!dark:border-[#374151]","rounded-lg","overflow-hidden"),t.querySelectorAll("th, td").forEach(o=>{o.classList.add("border-x","border-gray-200","dark:border-[#374151]","px-4","py-3")}),t.querySelectorAll("th").forEach(o=>{o.classList.add("border-b-2","border-gray-300","dark:border-gray-600","!uppercase","!text-white","!tracking-wider","!font-medium")});const v=t.querySelector("tr:last-child");v&&v.querySelectorAll("td").forEach(r=>{r.classList.add("border-b-0")}),t.parentNode.insertBefore(h,t),h.appendChild(t);const x=t.querySelector("tr:first-child");x&&(x.classList.add("!bg-[#2563EB]","!text-white","dark:!bg-[#1E40AF]","!border-blue-700","not-prose"),x.querySelectorAll("th, td").forEach(o=>{o.classList.add("px-4","py-3","font-bold","text-base","text-left","border-b","border-gray-700")})),t.querySelectorAll("tr:not(:first-child)").forEach((o,r)=>{const p=r%2===0?"!bg-[#f8fafc]":"!bg-[#e9ecef]",g=r%2===0?"dark:!bg-[#111827]":"dark:!bg-[#030712]";o.classList.add(p,g,"hover:!bg-[#e2e8f0]","dark:hover:!bg-[#1F2937]","transition-colors","duration-200"),o.querySelectorAll("td").forEach(f=>{f.classList.add("px-4","py-3","text-sm","!text-[#1e293b]","dark:!text-[#f8fafc]","border-b","border-[#00000010]","dark:border-[#ffffff10]")});const k=o.querySelector("td:first-child"),l=o.querySelector("td:nth-child(1)"),s=o.querySelector("td:last-child");k&&k.classList.add("font-semibold","text-[#0c1071]","!dark:text-[#0c1071]"),l&&l.classList.add("font-medium","!text-[#0c1071]","!dark:text-[#0c1071]"),s&&s.classList.add("font-bold","!text-[#2563eb]","dark:!text-[#60a5fa]")})});const C=["h2","h3","h4","h5","h6"].filter(t=>E.querySelector(t));if(V(e[0]),C.length>0){const t=C[0],h=[],b=[0,0,0,0,0];E.querySelectorAll(t).forEach(o=>{const r=C.indexOf(o.tagName.toLowerCase())+1;b[r-1]++;for(let f=r;f<b.length;f++)b[f]=0;const p=o.textContent.trim(),g=p.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");o.id=g;let k="";for(let f=0;f<r;f++)f>0&&(k+="."),k+=b[f];o.textContent=`${k}. ${p.replace(/^\d+(\.\d+)*\.?\s*/,"")}`;const l=document.createElement("button");l.innerHTML=`
            <svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <path d="m9 15 6-6M11 6l.463-.536a5 5 0 0 1 7.071 7.072L18 13M13 18l-.397.534a5.068 5.068 0 0 1-7.127 0 4.972 4.972 0 0 1 0-7.071L6 11"></path>
            </svg>
        `,l.classList.add("copy-link-btn","ml-2","opacity-0","transition-opacity","duration-200","inline-flex","items-center","justify-center","w-6","h-6","rounded","hover:bg-gray-100","dark:hover:bg-gray-700"),l.title="Copy link to this section",l.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation();const I=new URL(window.location.href);I.hash=g;const j=I.toString();navigator.clipboard.writeText(j).then(()=>{const N=l.innerHTML;l.innerHTML=`
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                `,l.classList.add("text-green-500"),setTimeout(()=>{l.innerHTML=N,l.classList.remove("text-green-500")},2e3)})}),o.classList.add("group","flex","items-center"),o.appendChild(l),o.addEventListener("mouseenter",()=>{l.classList.remove("opacity-0"),l.classList.add("opacity-100")}),o.addEventListener("mouseleave",()=>{l.classList.remove("opacity-100"),l.classList.add("opacity-0")}),h.push({text:o.textContent,id:g,level:r});let s=o.nextElementSibling;for(;s&&!s.matches(t);){if(C.includes(s.tagName.toLowerCase())){const f=C.indexOf(s.tagName.toLowerCase())+1;b[f-1]++;for(let q=f;q<b.length;q++)b[q]=0;const I=s.textContent.trim(),j=I.toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[()]/g,"").replace(/[^\w-]/g,"").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");let N="";for(let q=0;q<f;q++)q>0&&(N+="."),N+=b[q];s.textContent=`${N}. ${I.replace(/^\d+(\.\d+)*\.?\s*/,"")}`,s.id=j;const L=l.cloneNode(!0);L.addEventListener("click",q=>{q.preventDefault(),q.stopPropagation();let P=window.location.href;P.endsWith("/")&&(P=P.slice(0,-1));const te=`${P}#${j}`;navigator.clipboard.writeText(te).then(()=>{const oe=L.innerHTML;L.innerHTML=`
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        `,L.classList.add("text-green-500"),setTimeout(()=>{L.innerHTML=oe,L.classList.remove("text-green-500")},2e3)})}),s.classList.add("group","flex","items-center"),s.appendChild(L),s.addEventListener("mouseenter",()=>{L.classList.remove("opacity-0"),L.classList.add("opacity-100")}),s.addEventListener("mouseleave",()=>{L.classList.remove("opacity-100"),L.classList.add("opacity-0")}),h.push({text:s.textContent,id:j,level:f})}s=s.nextElementSibling}});let A="",v=0,x=!1;for(h.forEach((o,r)=>{for(;v>o.level;)A+="</ul></li>",v--;const p=h[r+1];x=p&&p.level>o.level,x?A+=`
                <li class="toc-item" data-level="${o.level}">
                    <div class="toc-header flex items-center justify-between">
                        <a href="#${o.id}" class="toc-link transition hover:text-primary-600 dark:hover:text-primary-400">
                            ${o.text}
                        </a>
                        <button class="toc-collapse-btn ml-1 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg class="toc-arrow w-4 h-4 transform transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <ul class="toc-submenu hidden pl-4">
            `:A+=`
                <li class="toc-item" data-level="${o.level}">
                    <a href="#${o.id}" class="toc-link transition hover:text-primary-600 dark:hover:text-primary-400">
                        ${o.text}
                    </a>
                ${p&&p.level<o.level?"</ul></li>":"</li>"}
            `,v=o.level});v>0;)A+="</ul></li>",v--;const B=document.getElementById("show-h3list");B&&(B.innerHTML=A,document.querySelectorAll(".toc-collapse-btn").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation();const p=o.closest(".toc-item").querySelector(".toc-submenu"),g=o.querySelector(".toc-arrow");p.classList.toggle("hidden"),g.classList.toggle("rotate-180")})}))}const T=document.querySelector("article.site-container");T&&(T.style.display="block"),E.querySelectorAll(".cta-box").forEach(t=>{t.className="w-full my-6 p-4 bg-white dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-500 rounded-lg shadow-md";const h=t.querySelectorAll(".star-icon");if(h.length>0){const r=h[0].parentElement;if(r){r.classList.add("flex","items-center","justify-end","mb-2"),h.forEach(g=>{const k=g.querySelector("svg");k&&k.setAttribute("class","w-5 h-5 fill-current text-yellow-400")});const p=r.querySelector("em");p&&p.classList.add("ml-2","text-sm","text-gray-500","italic","dark:text-gray-400")}}const b=t.querySelector("strong");b&&(b.className="block text-xl font-bold mb-3 text-gray-800 dark:text-white",b.parentElement.tagName==="P"&&(b.parentElement.className="mb-3"));const A=t.querySelectorAll("p"),v=Array.from(A).find(r=>r.textContent.trim()&&!r.querySelector("a")&&!r.querySelector("strong")&&!r.querySelector(".star-icon")&&!r.querySelector(".feature-icon")&&!r.querySelector(".avatar-icon"));v&&(v.className="text-gray-600 dark:text-gray-300 mb-4");const x=t.querySelector(".cta-button");if(x)if(x.className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 mb-4",!x.querySelector("svg"))x.innerHTML+=`
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>`;else{const r=x.querySelector("svg");r.className="w-5 h-5 ml-2"}const B=t.querySelectorAll(".feature-icon-first, .feature-icon-second");if(B.length>0){const r=B[0].parentElement;r&&(r.className="flex flex-wrap gap-1 text-sm mb-3",B.forEach(p=>{const g=p.querySelector("svg");g&&g.setAttribute("class","w-4 h-4 mr-1 text-blue-500"),Array.from(p.parentNode.childNodes).filter(l=>l.nodeType===3&&l.textContent.trim()).forEach(l=>{const s=document.createElement("span");s.className="flex items-center text-gray-600 dark:text-gray-300",s.textContent=l.textContent,l.replaceWith(s)})}))}const o=Array.from(t.querySelectorAll("em")).find(r=>r.textContent.includes("Joined by"));if(o){const r=o.parentElement;r.className="flex items-center text-sm text-gray-500 dark:text-gray-400 italic mt-3";const p=document.createElement("div");p.className="flex -space-x-2 mr-2",t.querySelectorAll(".avatar-icon");const g=["https://www.blackridgeresearch.com/_image?href=%2F_astro%2Ftestimonial-1.DCj678NT.svg&h=100&f=svg","https://www.blackridgeresearch.com/_image?href=%2F_astro%2Ftestimonial-2.D9agYXkn.svg&h=100&f=svg","https://www.blackridgeresearch.com/_image?href=%2F_astro%2Ftestimonial-3.7-lJBd_8.svg&h=100&f=svg"];t.querySelectorAll(".avatar-icon").forEach((k,l)=>{const s=document.createElement("img");s.src=g[l%g.length],s.alt="User",s.className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover !mt-0 !mb-0",s.onerror=function(){this.onerror=null,this.src="https://www.gravatar.com/avatar/default?s=200&d=mp"};const f=document.createElement("div");f.className="relative inline-block",f.appendChild(s),p.appendChild(f)}),p.children.length>0&&r.insertBefore(p,o)}}),E.querySelectorAll("img").forEach(t=>{t.style.width="",t.style.height="",t.removeAttribute("width"),t.removeAttribute("height"),t.classList.add("resizable-image")}),E.querySelectorAll("p").forEach(t=>{t.style.lineHeight="",t.classList.add("custom-line-height")});const m=document.createElement("style");m.textContent=`
  .custom-line-height {
    line-height: 1.8 !important;
  }
`,document.head.appendChild(m),Q(),J(),W(),U()},U=function(){document.querySelectorAll(".faq-header").forEach(i=>{i.addEventListener("click",()=>{const w=i.parentElement,n=w.classList.contains("active");document.querySelectorAll(".faq-item").forEach(u=>{u.classList.remove("active"),u.querySelector(".faq-header")?.setAttribute("aria-expanded","false")}),n||(w.classList.add("active"),i.setAttribute("aria-expanded","true"))})})},J=function(){if(document.getElementById("faq-theme-style"))return;const e=document.createElement("style");e.id="faq-theme-style",e.textContent=`
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
  `,document.head.appendChild(e)},W=function(){if(document.getElementById("frontend-block-style"))return;const e=document.createElement("style");e.id="frontend-block-style",e.textContent=`
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
  `,document.head.appendChild(e)},Q=function(){const e=document.getElementById("blog-description");if(!e)return;e.querySelectorAll('a[target="_blank"]').forEach(w=>{if(w.querySelector(".external-link-icon"))return;const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("class","external-link-icon"),n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2"),n.setAttribute("viewBox","0 0 24 24"),n.style.width="16px",n.style.height="16px",n.style.marginLeft="4px",n.style.marginRight="4px",n.style.verticalAlign="middle",n.style.display="inline-block";const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6");const y=document.createElementNS("http://www.w3.org/2000/svg","polyline");y.setAttribute("points","15 3 21 3 21 9");const S=document.createElementNS("http://www.w3.org/2000/svg","line");S.setAttribute("x1","10"),S.setAttribute("y1","14"),S.setAttribute("x2","21"),S.setAttribute("y2","3"),n.appendChild(u),n.appendChild(y),n.appendChild(S),w.appendChild(n)})},V=function(e){const i=new Date(e.created_date||new Date),w=new Date(e.last_updated||i),n=window.location.href,u={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:"Blackridge Research & Consulting",legalName:"Starry Technologies Private Limited",url:"https://www.blackridgeresearch.com",email:"info@blackridgeresearch.com",logo:{"@type":"ImageObject",url:"https://www.blackridgeresearch.com/new-projects-near-me/images/new/footer_logo.svg",width:200,height:60},sameAs:["https://www.facebook.com/blackridgeresearch","https://twitter.com/BlackridgeHQ","https://www.youtube.com/@BlackridgeResearchConsulting","https://www.instagram.com/blackridgehq"],contactPoint:{"@type":"ContactPoint",telephone:"+1-234-567-890",contactType:"customer service",email:"support@blackridgeresearch.com",areaServed:"Worldwide",availableLanguage:["English"]}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.blackridgeresearch.com/"},{"@type":"ListItem",position:2,name:"Project-Profiles",item:"https://www.blackridgeresearch.com/project-profiles"},{"@type":"ListItem",position:3,name:e.title||"project-profiles",item:n}]},{"@type":"NewsArticle",headline:e.title||"project-profiles",alternativeHeadline:e.meta_title||"Latest Update from Blackridge Research",description:e.meta_desc||"project-profiles from Blackridge Research & Consulting",datePublished:i.toISOString(),dateModified:w.toISOString(),author:{"@type":"Organization",name:"Blackridge Research & Consulting",legalName:"Starry Technologies Private Limited",email:"info@blackridgeresearch.com",url:"https://www.blackridgeresearch.com"},publisher:{"@type":"Organization",name:"Blackridge Research & Consulting",logo:{"@type":"ImageObject",url:"https://www.blackridgeresearch.com/new-projects-near-me/images/new/footer_logo.svg",width:200,height:60},sameAs:["https://www.facebook.com/blackridgeresearch","https://twitter.com/BlackridgeHQ","https://www.youtube.com/@BlackridgeResearchConsulting","https://www.instagram.com/blackridgehq"]},image:{"@type":"ImageObject",url:e.image_name?"https://adminapi.blackridgeresearch.com/uploads/"+e.image_name:"https://www.blackridgeresearch.com/default-news-image.jpg",width:1200,height:628},keywords:e.keywords?e.keywords.split(","):["Industry Update","Market Report",e.styp||"",e.styp2||""],articleSection:e.styp2||e.styp||"Business News",articleBody:e.description||"News content from Blackridge Research & Consulting",isAccessibleForFree:!0,speakable:{"@type":"SpeakableSpecification",cssSelector:["headline","description"]},mainEntityOfPage:{"@type":"WebPage","@id":n}}]},y=document.createElement("script");y.type="application/ld+json",y.text=JSON.stringify(u),document.head.appendChild(y),console.log("Project-profiiles schema generated:",u)},X=function(){const e=document.querySelectorAll(".toc-link"),i=Array.from(document.querySelectorAll("h2, h3, h4, h5, h6")).filter(a=>a.id),w=document.querySelectorAll(".toc-collapse-btn");if(!e.length||!i.length)return;let n=null,u=!1;function y(a){const c=a.closest(".toc-item");if(c&&c.querySelector(".toc-submenu")){const d=c.querySelector(".toc-submenu"),m=c.querySelector(".toc-collapse-btn");d.classList.contains("hidden")&&(d.classList.remove("hidden"),m&&m.querySelector(".toc-arrow").classList.add("rotate-180"))}}function S(a){const c=[];let d=a;for(;d;)d=d.closest(".toc-item"),d&&(c.push(d),d=d.parentElement.closest(".toc-item"));document.querySelectorAll(".toc-item").forEach(m=>{if(!c.includes(m)&&m!==a?.closest(".toc-item")){const t=m.querySelector(".toc-submenu"),h=m.querySelector(".toc-collapse-btn");t&&!t.classList.contains("hidden")&&(t.classList.add("hidden"),h&&h.querySelector(".toc-arrow").classList.remove("rotate-180"))}})}function E(){e.forEach(a=>{a.classList.remove("active"),a.parentElement.classList.remove("active")})}function F(){if(u)return null;const a=window.scrollY+100;if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100)return i[i.length-1];for(let c=i.length-1;c>=0;c--){const d=i[c],m=d.offsetTop;if(a>=m)return d}return null}function H(){const a=F();if(!a){E();return}if(n&&n.getAttribute("href")===`#${a.id}`)return;E();const c=document.querySelector(`.toc-link[href="#${a.id}"]`);if(c){c.classList.add("active"),c.parentElement.classList.add("active"),n=c,y(c),S(c);const d=document.querySelector(".overflow-y-auto");if(d){const m=c.getBoundingClientRect(),t=d.getBoundingClientRect();(m.bottom>t.bottom||m.top<t.top)&&d.scrollTo({top:c.offsetTop-d.offsetTop-100,behavior:"smooth"})}}}e.forEach(a=>{a.addEventListener("click",c=>{c.preventDefault();const d=a.getAttribute("href"),m=document.querySelector(d);m&&(u=!0,window.removeEventListener("scroll",T),window.scrollTo({top:m.offsetTop-80,behavior:"smooth"}),history.pushState(null,null,d),E(),a.classList.add("active"),a.parentElement.classList.add("active"),n=a,y(a),S(a),setTimeout(()=>{u=!1,window.addEventListener("scroll",T)},1e3))})}),w.forEach(a=>{a.addEventListener("click",c=>{c.stopPropagation();const m=a.closest(".toc-item").querySelector(".toc-submenu"),t=a.querySelector(".toc-arrow");m.classList.toggle("hidden"),t.classList.toggle("rotate-180")})});let C;function T(){window.clearTimeout(C),C=setTimeout(()=>{u||H()},10)}if(window.addEventListener("scroll",T,{passive:!0}),H(),window.location.hash){const a=document.querySelector(window.location.hash);a&&(u=!0,setTimeout(()=>{window.scrollTo({top:a.offsetTop-80,behavior:"smooth"}),H(),u=!1},500))}};async function G(e){try{const i=await fetch(`https://adminapi.blackridgeresearch.com/projectprofiles/listid/${e}`);if(!i.ok)throw new Error("Failed to fetch project-profiles data");return await i.json()}catch(i){return console.error("Error fetching project-profiles data:",i),null}}async function K(e,i,w){try{const n=await fetch(`https://adminapi.blackridgeresearch.com/blog/live/related/${e}/${i}/${w}`);if(!n.ok)throw new Error("Failed to fetch related data");return await n.json()}catch(n){return console.error("Error fetching related data:",n),null}}const Z=`
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
`,_=document.createElement("style");_.textContent=Z,document.head.appendChild(_);async function ee(){const e=await G(M);e?(Y(e.data),R(),$(e[0].page_title)):(document.getElementById("blog-title").textContent="Blog not found",R())}ee()}else document.getElementById("blog-title").textContent="Invalid blog ID",R();
