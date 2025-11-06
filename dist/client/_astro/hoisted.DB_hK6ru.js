import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";const c="https://adminapi.blackridgeresearch.com/blog/live";let s=1,l=1,o=!1;const m=document.getElementById("posts-container"),a=document.getElementById("skeleton-container"),g=document.getElementById("skeleton-template"),u=document.getElementById("button-container");async function d(i=1){if(!o){o=!0,a.classList.remove("hidden"),a.innerHTML="";for(let t=0;t<6;t++)a.appendChild(g.content.cloneNode(!0));try{const n=await(await fetch(`${c}?page=${i}&limit=6`)).json();a.innerHTML="",a.classList.add("hidden"),n.posts&&n.posts.length>0&&(n.posts.forEach(e=>{const r=document.createElement("article");r.className="blog-post",r.innerHTML=`
            <a href="/blog/${e.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">
              <figure>
                ${e.image_name?`<img src="https://adminapi.blackridgeresearch.com/uploads/${e.image_name}" alt="${e.title}" class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]" loading="lazy" />`:'<div class="placeholder h-auto w-full bg-gray-200">No Image Available</div>'}
              </figure>
            </a>
            <div>
              <div class="mt-3 flex items-center justify-between text-primary-600">
                <div class="flex gap-2">
                  <span class="badge">${e.styp2||"General"}</span>
                  <span class="badge">${e.industry||"Industry"}</span>
                </div>
                <p class="whitespace-nowrap text-sm text-base-600 dark:text-base-400">
                  ${new Date(e.created_date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}
                </p>
              </div>
              <div class="mt-2">
                <a href="/blog/${e.page_title}" class="group">
                  <h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">
                    ${e.title}
                  </h2>
                </a>
              </div>
            </div>
          `,m.appendChild(r)}),l=n.totalPages,s=i,s>=l&&u.classList.add("hidden"))}catch(t){console.error("Error loading posts:",t)}finally{o=!1}}}document.addEventListener("DOMContentLoaded",async()=>{await d(1),document.getElementById("view-more-button").addEventListener("click",async()=>{s<l&&await d(s+1)})});
