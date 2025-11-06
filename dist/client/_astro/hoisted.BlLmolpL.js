import"./BaseLayout.astro_astro_type_script_index_0_lang.Ew17R0gt.js";import"https://code.jquery.com/jquery-3.6.0.min.js";import"./MobileNavDropdown.astro_astro_type_script_index_0_lang.CV5_KfF_.js";import"./_commonjsHelpers.BosuxZz1.js";const p="https://adminapi.blackridgeresearch.com/fetchAuthors";let i=!1;const o=document.getElementById("authors-container"),n=document.getElementById("skeleton-container"),f=document.getElementById("skeleton-template");async function b(){if(!i){i=!0,n.classList.remove("hidden"),n.innerHTML="";for(let t=0;t<6;t++)n.appendChild(f.content.cloneNode(!0));try{const a=await(await fetch(p)).json();n.innerHTML="",n.classList.add("hidden"),a.success&&a.data&&a.data.length>0&&(o.innerHTML="",a.data.forEach(e=>{const r=document.createElement("a");r.href=`/author-profiles/${e.fullname}`,r.className="hover-border-glow flex h-full flex-col justify-between rounded-xl border border-base-200 bg-base-100 p-4 shadow-md before:rounded-xl xs:p-8 dark:border-base-800 dark:bg-base-950 dark:text-base-100";const d=e.fullname.split(" ").map(m=>m[0]).join("").toUpperCase(),l=e.profile_photo&&e.profile_photo!=="/default-avatar.png"?`<img src="${e.profile_photo}" alt="${e.fullname}" class="mb-6 size-20 rounded-full object-cover border-2 border-primary-500 md:size-28" />`:`<div class="mb-6 size-20 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-2xl font-bold text-white md:size-28">${d}</div>`,s=100,c=e.description?e.description.length>s?e.description.substring(0,s)+"...":e.description:"Expert author at Blackridge Research";r.innerHTML=`
						${l}
						<h3 class="main-text-gradient mb-2 text-2xl font-medium leading-tight tracking-tight md:text-3xl md:leading-tight">
							${e.fullname}
						</h3>
						<span class="mb-6 inline-block text-primary-600 dark:text-primary-400">
							${e.utypeid===6?"Team Member":e.utypeid===7?"Contributor":"Author"}
						</span>
						<p class="text-base-600 dark:text-base-400">
							${c}
						</p>
						${e.aemailid?`<p class="mt-4 text-sm text-base-500">${e.aemailid}</p>`:""}
					`,o.appendChild(r)}))}catch(t){console.error("Error loading authors:",t)}finally{i=!1}}}document.addEventListener("DOMContentLoaded",async()=>{await b()});
