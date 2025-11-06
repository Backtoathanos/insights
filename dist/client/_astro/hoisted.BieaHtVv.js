import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";const m="https://adminapi.blackridgeresearch.com/blog/live/projectprofiles";let n=2,g=1,l=!1;document.addEventListener("DOMContentLoaded",async()=>{const i=document.getElementById("view-more-button"),t=document.getElementById("posts-container"),o=document.getElementById("initial-skeleton-loader"),d=await fetch(`${m}?page=1&limit=6`).then(e=>e.json());o&&o.remove(),d.posts.forEach(e=>{const a=c(e);t.appendChild(a)}),g=d.totalPages,i.addEventListener("click",async()=>{if(l||n>=g)return;l=!0,n+=1;const e=p(6);t.appendChild(e),i.classList.add("hidden");try{const s=await(await fetch(`${m}?page=${n}&limit=6`)).json();if(!s.posts||s.posts.length===0){t.removeChild(e);return}setTimeout(()=>{t.removeChild(e),s.posts.forEach(r=>{const h=c(r);t.appendChild(h)}),n>=s.totalPages?i.style.display="none":i.classList.remove("hidden"),l=!1},300)}catch(a){console.error("Error loading more posts",a),t.contains(e)&&t.removeChild(e),l=!1}});function c(e){const a=document.createElement("article");return a.className="blog-post",a.innerHTML=`
				<a href="/project-profiles/${e.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">
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
						<a href="/project-profiles/${e.page_title}" class="group">
							<h2 class="inline text-lg transition-colors hover:text-primary-600 md:text-xl dark:hover:text-primary-500">${e.title}</h2>
						</a>
					</div>
				</div>`,a}function p(e){const a=document.createElement("div");a.className="contents";for(let s=0;s<e;s++){const r=document.createElement("article");r.className="blog-post animate-pulse",r.innerHTML=`
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
				`,a.appendChild(r)}return a}});
