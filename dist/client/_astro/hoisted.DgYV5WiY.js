import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";function m(s){const l=document.cookie.split("; ");for(let o of l){const[i,r]=o.split("=");if(i===s)return decodeURIComponent(r)}return null}const u="https://adminapi.blackridgeresearch.com/industry/live",p=m("search"),y=p?`${u}/search?query=${encodeURIComponent(p)}`:u;let n=1,c=1,d=!1;document.addEventListener("DOMContentLoaded",async()=>{const s=document.getElementById("view-more-button"),l=document.getElementById("projects-container"),o=async t=>{try{const e=`${y}&page=${t}&limit=6`,a=await fetch(e);if(!a.ok)throw new Error("Failed to fetch data");return await a.json()}catch(e){return console.error("Error fetching projects:",e),null}},i=t=>{!t||!Array.isArray(t)||t.forEach(e=>{const a=document.createElement("article");a.className="project-item",a.innerHTML=`
          <a href="/industry/${e.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">
            <figure>
              <div class="placeholder h-auto w-full bg-gray-200">Industry Project</div>
            </figure>
          </a>
          <div>
            <div class="mt-3 flex items-center justify-between text-primary-600">
              <div class="flex gap-2">
                <span class="badge">${e.p_name1||"Industry"}</span>
                <span class="badge">${e.location1||""}</span>
              </div>
              <p class="whitespace-nowrap text-sm text-base-600 dark:text-base-400">
                ${new Date(e.created_date).toLocaleDateString()}
              </p>
            </div>
            <div class="mt-2">
              <a href="/industry/${e.page_title}" class="group">
                <h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">
                  ${e.header_title}
                </h2>
              </a>
            </div>
          </div>
        `,l.appendChild(a)})},r=await o(n);r&&Array.isArray(r.posts)&&(i(r.posts),c=r.totalPages||1,s.style.display=c>1?"flex":"none"),s.addEventListener("click",async()=>{if(d||n>=c)return;d=!0,n+=1;const t=await o(n);t&&Array.isArray(t.posts)&&i(t.posts),n>=c&&(s.style.display="none"),d=!1})});
