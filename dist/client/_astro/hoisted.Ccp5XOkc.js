import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";function m(r){if(typeof document<"u"){const c=document.cookie.split("; ");for(let o of c){const[i,a]=o.split("=");if(i===r)return decodeURIComponent(a)}}return null}const u=m("search"),p=u,f=p?`https://adminapi.blackridgeresearch.com/reports/live/search?query=${encodeURIComponent(p)}`:"https://adminapi.blackridgeresearch.com/reports/live";let s=1,n=1,d=!1;document.addEventListener("DOMContentLoaded",async()=>{const r=document.getElementById("view-more-button"),c=document.getElementById("reports-container"),o=async t=>{try{const e=await fetch(`${f}&page=${t}&limit=6`);if(!e.ok)throw new Error("Failed to fetch data");return await e.json()}catch(e){return console.error("Error fetching reports:",e),null}},i=t=>{t.forEach(e=>{const l=document.createElement("article");l.className="report-item",l.innerHTML=`
          <a href="/reports/${e.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">
            <figure>
              ${e.image_name?`<img src="https://adminapi.blackridgeresearch.com/uploads/${e.image_name}" alt=" ${e.rtitle}" class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />`:'<div class="placeholder h-auto w-full bg-gray-200">No Image Available</div>'}
            </figure>
          </a>
          <div>
            <div class="mt-3 flex items-center justify-between text-primary-600">
              <div class="flex gap-2">
                <span class="badge">${e.rtype}</span>
                <span class="badge">${e.rgeography}</span>
              </div>
              <p class="whitespace-nowrap text-sm text-base-600 dark:text-base-400">
                ${new Date(e.created_date).toLocaleDateString()}
              </p>
            </div>
            <div class="mt-2">
              <a href="/reports/${e.page_title}" class="group">
                <h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">
                  ${e.rtitle}
                </h2>
              </a>
            </div>
          </div>
        `,c.appendChild(l)})},a=await o(s);a&&Array.isArray(a.posts)&&(i(a.posts),n=a.totalPages||1,n>1&&(r.style.display="flex")),r.addEventListener("click",async()=>{if(d||s>=n)return;d=!0,s+=1;const t=await o(s);t&&Array.isArray(t.posts)&&i(t.posts),s>=n&&(r.style.display="none"),d=!1})});
