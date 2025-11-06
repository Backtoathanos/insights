import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";const p="https://adminapi.blackridgeresearch.com/blog/live/newsrelease";let d=1,c=1,o=!1;const s=document.getElementById("posts-container"),n=document.getElementById("view-more-button");document.addEventListener("DOMContentLoaded",async()=>{const t=g(6);s.appendChild(t),await m(d),n.addEventListener("click",async()=>{o||(d+=1,await m(d))})});async function m(t){o=!0;const i=g(6);s.appendChild(i),n.classList.add("hidden");try{const a=await(await fetch(`${p}?page=${t}&limit=6`)).json();c=a.totalPages,s.querySelectorAll(".animate-pulse").forEach(e=>e.remove()),a.posts.forEach(e=>{const l=document.createElement("article");l.className="blog-post",l.innerHTML=`
          <a href="/news-releases/${e.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">
            <figure>
              ${e.image_name?`<img src="https://adminapi.blackridgeresearch.com/uploads/${e.image_name}" alt="${e.title}" class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]" loading="lazy" />`:'<div class="placeholder h-auto w-full bg-gray-200">No Image Available</div>'}
            </figure>
          </a>
          <div>
            <div class="mt-3 flex items-center justify-between text-primary-600">
              <div class="flex gap-2">
                <span class="badge">${e.styp2}</span>
                <span class="badge">${e.industry}</span>
              </div>
              <p class="whitespace-nowrap text-sm text-base-600 dark:text-base-400">
                ${new Date(e.created_date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}
              </p>
            </div>
            <div class="mt-2">
              <a href="/news-releases/${e.page_title}" class="group">
                <h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">
                  ${e.title}
                </h2>
              </a>
            </div>
          </div>
        `,s.appendChild(l)}),t>=c?n.style.display="none":n.classList.remove("hidden")}catch(r){console.error("Error loading posts:",r),s.querySelectorAll(".animate-pulse").forEach(a=>a.remove())}finally{o=!1}}function g(t){const i=document.createDocumentFragment();for(let r=0;r<t;r++){const a=document.createElement("article");a.className="blog-post animate-pulse",a.innerHTML=`
        <div class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 bg-gray-200 sm:justify-normal dark:border-base-700 dark:bg-gray-700"></div>
        <div class="mt-3">
          <div class="flex items-center justify-between">
            <div class="flex gap-2">
              <span class="badge h-6 w-16 bg-gray-300 dark:bg-gray-600"></span>
              <span class="badge h-6 w-16 bg-gray-300 dark:bg-gray-600"></span>
            </div>
            <div class="h-4 w-20 bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div class="mt-4">
            <div class="h-5 w-full bg-gray-300 dark:bg-gray-600"></div>
            <div class="mt-2 h-4 w-3/4 bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
      `,i.appendChild(a)}return i}
