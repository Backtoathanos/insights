import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";const d="https://adminapi.blackridgeresearch.com/blog/live/newsrelease/projectnews";let s=1,i=1;async function o(e=1,t=6){return(await fetch(`${d}?page=${e}&limit=${t}`)).json()}function m(e){const t={month:"long",day:"numeric",year:"numeric"};return new Date(e).toLocaleDateString("en-US",t)}function l(e){return`
      <article class="blog-post">
        <a href="/news-releases/${e.page_title}/" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">
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
              ${m(e.created_date)}
            </p>
          </div>
          <div class="mt-2">
            <a href="/news-releases/${e.page_title}/" class="group">
              <h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">${e.title}</h2>
            </a>
          </div>
        </div>
      </article>
    `}document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("view-more-button"),t=document.getElementById("posts-container"),a=document.getElementById("loader-container"),r=await o();t.innerHTML="",r.posts.forEach(n=>{t.innerHTML+=l(n)}),i=r.totalPages,e.addEventListener("click",async()=>{s+=1,a.classList.remove("hidden");const n=await o(s);a.classList.add("hidden"),n.posts.forEach(c=>{t.innerHTML+=l(c)}),s>=i&&(e.style.display="none")})});
