import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";function u(o){const e=document.cookie.split("; ");for(let i of e){const[t,n]=i.split("=");if(t===o)return decodeURIComponent(n)}return null}const s=u("search"),y=s?`https://adminapi.blackridgeresearch.com/glossary/live/search?query=${encodeURIComponent(s)}`:"https://adminapi.blackridgeresearch.com/glossary/live";let l=1,d=1,c=!1;s&&(document.getElementById("search-results-text").innerHTML=`Results for: <span class="font-bold text-primary-600">"${s}"</span>`);async function p(o=1){if(c)return;c=!0;const e=document.getElementById("skeleton-container"),i=document.getElementById("skeleton-template");e.classList.remove("hidden"),e.innerHTML="";for(let t=0;t<6;t++)e.appendChild(i.content.cloneNode(!0));try{const n=await(await fetch(`${y}&page=${o}&limit=6`)).json();e.innerHTML="",e.classList.add("hidden");const m=document.getElementById("glossary-container");n.posts&&n.posts.length>0?(n.posts.forEach(a=>{const r=document.createElement("article");r.className="glossary-item rounded-md border border-base-300 p-4 dark:border-base-700 transition hover:shadow-md",r.style.cursor="pointer",r.innerHTML=`
    <a href="/glossary/${a.page_title}">
      <h2 class="text-lg font-bold md:text-xl">${a.title}</h2>
      <p class="mt-2 text-base-600 dark:text-base-400">${a.description}</p>
      ${a.industry?`<span class="mt-2 inline-block text-sm text-primary-600">${a.industry}</span>`:""}
    </a>
  `,m.appendChild(r)}),d=n.totalPages||1,l=o,l>=d&&document.getElementById("button-container").classList.add("hidden")):s&&o===1&&(m.innerHTML=`
            <div class="col-span-full mt-8 text-center">
              <p class="text-lg text-base-600 dark:text-base-400">
                No glossary terms found for "${s}"
              </p>
            </div>
          `,document.getElementById("button-container").classList.add("hidden"))}catch(t){console.error("Error loading glossary:",t)}finally{c=!1}}document.addEventListener("DOMContentLoaded",async()=>{await p(1),document.getElementById("view-more-button").addEventListener("click",async()=>{l<d&&await p(l+1)})});
