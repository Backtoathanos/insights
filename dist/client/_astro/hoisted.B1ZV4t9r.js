import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";const m=document.getElementById("astro-props")?.dataset?.tagParam||"",l=`https://adminapi.blackridgeresearch.com/tags/${m}`;let o=1,i=1;const g=document.getElementById("posts-container"),s=document.getElementById("skeleton-container"),u=document.getElementById("skeleton-template"),c=document.getElementById("button-container");async function p(){try{const t=await(await fetch(l)).json(),n=document.getElementById("tag-container");t.tags&&Array.isArray(t.tags)&&t.tags.forEach(e=>{const a=document.createElement("span");a.className="badge bg-base-300 text-sm",a.textContent=e,n.appendChild(a)})}catch(r){console.error("Error loading tags",r)}}async function d(r=1){s.classList.remove("hidden");for(let t=0;t<6;t++)s.appendChild(u.content.cloneNode(!0));try{const n=await(await fetch(`${l}?page=${r}&limit=6`)).json();s.innerHTML="",s.classList.add("hidden"),n.success&&Array.isArray(n.data)&&n.data.forEach(e=>{const a=document.createElement("article");a.className="blog-post",a.innerHTML=`
						<a href="/blog/${e.page_title}" class="flex aspect-[2/1] max-h-[30rem] shrink-0 justify-center overflow-hidden rounded-md border border-base-300 sm:justify-normal dark:border-base-700">
							<figure>
								${e.image_name?`<img src="https://adminapi.blackridgeresearch.com/uploads/${e.image_name}" alt="${e.title}" class="h-auto min-h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />`:'<div class="placeholder h-auto w-full bg-gray-200">No Image Available</div>'}
							</figure>
						</a>
						<div>
							<div class="mt-3 flex items-center justify-between text-primary-600">
								<div class="flex gap-2">
									${e.styp2?`<span class="badge">${e.styp2}</span>`:""}
									${e.industry?`<span class="badge">${e.industry}</span>`:""}
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
					`,g.appendChild(a)}),i=n.totalPages||1,o<i?c.classList.remove("hidden"):c.classList.add("hidden")}catch(t){console.error("Failed to load posts:",t),s.innerHTML="",s.classList.add("hidden")}}document.addEventListener("DOMContentLoaded",async()=>{await p(),await d(o),document.getElementById("view-more-button").addEventListener("click",async()=>{o++,await d(o)})});
