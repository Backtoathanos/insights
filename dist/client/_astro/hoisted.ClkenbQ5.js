import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";const c="https://adminapi.blackridgeresearch.com/custom-research";let l=1;const s=6;let n=[],o=!1;const m=document.getElementById("posts-container"),a=document.getElementById("skeleton-container"),h=document.getElementById("skeleton-template"),i=document.getElementById("button-container");function p(t){t.forEach(e=>{const r=document.createElement("article");r.className="flex flex-col gap-4 p-6 border rounded-lg bg-white hover:shadow-md transition-shadow dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:hover:shadow-gray-700/30",r.innerHTML=`
        <div>
          <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
            Market Research
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400 ml-2">
            ${new Date(e.created_date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}
          </span>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          <a href="/custom-research/${e.title}" class="hover:text-primary-600 dark:hover:text-primary-400">
            ${e.hero_heading||e.title}
          </a>
        </h3>
        <p class="text-gray-600 dark:text-gray-300 line-clamp-3">
          ${e.hero_description||e.meta_desc||"Market research insights"}
        </p>
        <div class="mt-2">
          <a href="/custom-research/${e.title}" class="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
            Read Analysis
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      `,m.appendChild(r)})}async function d(){if(!o){o=!0,a.classList.remove("hidden"),a.innerHTML="";for(let t=0;t<s;t++)a.appendChild(h.content.cloneNode(!0));try{n.length===0&&(n=await(await fetch(c)).json()),a.innerHTML="",a.classList.add("hidden");const t=0,e=l*s,r=n.slice(t,e);p(r),e>=n.length?i.classList.add("hidden"):i.classList.remove("hidden")}catch(t){console.error("Error loading posts:",t)}finally{o=!1}}}document.addEventListener("DOMContentLoaded",async()=>{await d(),document.getElementById("view-more-button").addEventListener("click",async()=>{l++,await d()})});
