import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";const d="https://adminapi.blackridgeresearch.com/blog/live/pressrelease";let a=2,i=1;document.addEventListener("DOMContentLoaded",async()=>{const l=document.getElementById("loader-container"),s=document.getElementById("posts-container"),n=document.getElementById("view-more-button"),o=document.getElementById("button-container");setTimeout(()=>{l.classList.add("hidden"),s.classList.remove("hidden"),o.classList.remove("hidden")},700),n.addEventListener("click",async()=>{a+=1;const r=await(await fetch(`${d}?page=${a}&limit=6`)).json();r.posts.forEach(e=>{const t=document.createElement("article");t.className="blog-post",t.innerHTML=`
          <a href="/press-releases/${e.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">
            <figure>
              ${e.image_name?`<img src="https://adminapi.blackridgeresearch.com/uploads/${e.image_name}" alt="${e.title}" class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />`:'<div class="placeholder h-auto w-full bg-gray-200">No Image Available</div>'}
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
              <a href="/press-releases/${e.page_title}" class="group">
                <h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">
                  ${e.title}
                </h2>
              </a>
            </div>
          </div>
        `,s.appendChild(t)}),i=r.totalPages,a>=i&&(n.style.display="none")})});
