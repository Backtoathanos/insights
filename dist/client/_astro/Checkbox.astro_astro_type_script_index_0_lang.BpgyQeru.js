const l=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    class=""
    aria-hidden="true"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <>
        <g stroke-width="2">
          <>
            <path
              stroke-dasharray="66"
              stroke-dashoffset="66"
              d="M12 3H19V21H5V3H12Z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="66;0"
              />
            </path>
            <path
              stroke-dasharray="10"
              stroke-dashoffset="10"
              d="M9 13L11 15L15 11"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="1s"
                dur="0.2s"
                values="10;0"
              />
            </path>
          </>
        </g>
        <path
          stroke-dasharray="12"
          stroke-dashoffset="12"
          d="M14.5 3.5V6.5H9.5V3.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="12;0"
          />
        </path>
      </>
    </g>
  </svg>
  `,u=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M11 17H7q-2.075 0-3.538-1.463T2 12q0-2.075 1.463-3.538T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4v2Zm-3-4v-2h8v2H8Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17h-4Z"
    />
  </svg>
  `;let r;function d(){r=document.querySelectorAll(".copy-link-button"),r&&r.forEach(o=>{o.addEventListener("click",()=>{navigator.clipboard.writeText(window.location.href);const e=o.querySelector(".tooltip-text"),a=o.querySelector(".share-button-svg");e&&a&&(e.classList.add("text-success"),e.textContent="copied!",a.innerHTML=l,setTimeout(()=>{a.innerHTML=u,e.classList.remove("text-success"),e.textContent="copy link"},3e3))})})}d();document.addEventListener("astro:after-swap",d);document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("open-popup-button"),e=document.getElementById("popup-down");if(o&&e){o.addEventListener("click",()=>{e.classList.remove("hidden")});const a=e.querySelector(".fixed.inset-0"),n=e.querySelector("button");a&&a.addEventListener("click",()=>{e.classList.add("hidden")}),n&&n.addEventListener("click",()=>{e.classList.add("hidden")})}});document.addEventListener("DOMContentLoaded",function(){function o(){const e=new FormData;let a=!0;const n=document.querySelector(".fnames").value,s=document.querySelector(".emails").value,i=document.querySelector(".messages").value;if(document.querySelectorAll(".alert-badge").forEach(function(t){t.remove()}),n.trim()===""){a=!1;const t=document.createElement("p");t.className="alert-badge",t.style.color="red",t.textContent="Please enter Name",document.querySelector(".fname").after(t)}if(s.trim()===""){a=!1;const t=document.createElement("p");t.className="alert-badge",t.style.color="red",t.textContent="Please enter Work Email",document.querySelector(".email").after(t)}a?(e.append("fname",n),e.append("message",i),e.append("email",s),e.append("company_name",""),e.append("fnumber",""),e.append("phone_code",""),e.append("country_code",""),e.append("area_interests",""),e.append("apage","Leave a Comment"),e.append("apageurl",window.location.href),fetch("https://adminapi.blackridgeresearch.com/contact/add",{method:"POST",body:e}).then(t=>{if(t.ok)alert("Submitted successfully!"),location.reload();else throw new Error("Failed to submit form")}).catch(t=>{console.error("Error adding data:",t),alert("Failed to add data. Please try again.")})):alert("Please fill required fields.")}document.getElementById("comment_section").addEventListener("submit",function(e){e.preventDefault(),o()})});const c=()=>{document.querySelectorAll('.solar-checkbox input[type="checkbox"]').forEach(e=>{e.addEventListener("change",a=>{const n=a.target,s=n.checked;n.setAttribute("aria-checked",s.toString())})})};c();document.addEventListener("astro:after-swap",c);
