import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";function m(n){const t=document.cookie.split("; ");for(let a of t){const[e,o]=a.split("=");if(e===n)return decodeURIComponent(o)}return null}const c=m("search"),u=c?`https://adminapi.blackridgeresearch.com/blog/live/search?query=${encodeURIComponent(c)}`:"https://adminapi.blackridgeresearch.com/blog/live";let r=1,l=1,i=!1;const p=document.getElementById("posts-container"),s=document.getElementById("skeleton-container"),g=document.getElementById("skeleton-template"),h=document.getElementById("button-container");async function d(n=1){if(!i){i=!0,s.classList.remove("hidden"),s.innerHTML="";for(let t=0;t<6;t++)s.appendChild(g.content.cloneNode(!0));try{const a=await(await fetch(`${u}&page=${n}&limit=6`)).json();s.innerHTML="",s.classList.add("hidden"),a.posts&&a.posts.length>0&&(a.posts.forEach(e=>{const o=document.createElement("article");o.className="blog-post",o.innerHTML=`
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
          `,p.appendChild(o)}),l=a.totalPages||1,r=n,r>=l&&h.classList.add("hidden"))}catch(t){console.error("Error loading posts:",t)}finally{i=!1}}}document.addEventListener("DOMContentLoaded",async()=>{await d(1),document.getElementById("view-more-button").addEventListener("click",async()=>{r<l&&await d(r+1)})});
