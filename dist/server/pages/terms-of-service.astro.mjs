/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C19coWfX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BZKhPsJH.mjs';
import { g as getLocaleFromUrl } from '../chunks/localeUtils_hlzOdIQk.mjs';
import { a as getTranslatedData } from '../chunks/translationUtils_XhrKexoJ.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Ct7febRF.mjs';
export { renderers } from '../renderers.mjs';

const bgImage = new Proxy({"src":"/_astro/Terms.Qyd5-hGQ.jpg","width":1920,"height":450,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/Terms.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://www.blackridgeresearch.com");
const $$TermsOfService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TermsOfService;
  const currLocale = getLocaleFromUrl(Astro2.url);
  getTranslatedData("teamData", currLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Terms of Service | Blackridge Research & Consulting", "description": "All about our super awesome small business team!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="" class="mt-10"> <div> <!-- bg image --> <div class="h-full"> ${renderComponent($$result2, "Image", $$Image, { "src": bgImage, "alt": "background", "loading": "lazy", "width": 1170, "densities": [1, 1.5, 2], "class": "h-full w-full", "aria-hidden": "true" })} </div> </div> </section> <section class="site-container mx-auto mt-5 py-20"> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">1. Use of the Blackridge Website</h3> <p class="description">
These Conditions of use (together with the documents referred to in them) set out the basis
				on which you may make use of the Starry Technologies Private Limited (the "Company",
				"Blackridge", "Blackridge Research & Consulting", "we", or "us") digital information
				services and other offerings which are accessed via, though not limited to,
				www.blackridgeresearch.com ("the Site"), and other sites whether as a guest or to access
				certain Blackridge products ("Products") as a permitted user under the Research Agreement(s)
				(or other subscription agreement(s) entered into between you or your employer or one of its
				affiliates ("the Client") and Blackridge ("Research Agreements"). <br><br>
Please read these Conditions of use carefully before you start to use the Site, together with
				the relevant Research Agreements (if applicable), as these will apply to your use of the Site.
				If you do not agree to these Conditions of use, you must not use the Site. <br><br>
You may print and keep a copy of these Conditions of use. They are a legal agreement between
				you and Blackridge and can only be modified with Blackridge's consent. Blackridge reserves the
				right to change these Conditions of use without your consent, as permitted under Section 11 below.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">2. Information about Blackridge</h3> <p class="description">
Starry Technologies Private Limited is registered in India with Company Identification
				Number (CIN) U72200TG2016PTC110555 and GST number36AAXCS3222L1ZT.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">3. Information about Blackridge</h3> <p class="description">
The information, data and other materials provided on the Site ("the Information") are
				provided for general information purposes only, and are not intended to address your
				particular requirements. If you require research on a specific area please email us at <span class="text-blue-400">info@blackridgeresearch.com</span> <br> <br>
Whilst we will endeavour to keep the Information accurate, we cannot and do not guarantee
				the accuracy of the Information, and we accept no responsibility, and shall have no
				liability, for any loss or damage which may arise from using or relying on the Information.
				If you believe any Information is inaccurate, please let us know by contacting us at the
				email address set out under section 12 of these Conditions of use so that we may review the
				Information and update it if appropriate. <br> <br>
The Information does not include, nor shall it be construed as including investment advice
				on, advice on the merits of, or a recommendation in relation to, buying, selling,
				subscribing for or underwriting any securities, shares or other financial investments of any
				kind. <br><br>
If notwithstanding the above you take any action or decision to buy, sell, subscribe for or
				underwrite any securities, shares or other financial investments, you do so entirely at your
				own risk and Blackridge shall have no liability whatsoever for any loss, damage, costs or
				expenses incurred or suffered by you as a result. <br> <br>
The Information does not constitute any form of advice or recommendation by Blackridge to
				you and is not intended to be relied upon by you in making (or refraining from making) any
				specific investment or other decisions, and you should take your own advice and/or
				independently verify such information before relying on it.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">4. Intellectual Property Rights</h3> <p class="description">
The Information (including any information, data or other materials made available if you
				are accessing a Product), and all designs, text and graphics on the Site and the selection
				or arrangement thereof, along with all software and databases forming part of the Site
				and/or provided by Blackridge (together, the "Materials") are owned by and are confidential
				to Blackridge or its licensors, and are protected by copyright, database rights and other
				intellectual property rights throughout the world. <br> <br>
All copyright, database rights and other intellectual property rights in the Materials are
				and shall remain vested in Blackridge or its licensors, and except as expressly provided or
				granted to you or the Client by Blackridge pursuant to a Subscription Agreement or
				otherwise, you or the Client will not acquire any right, title or interest in or to the
				Materials and no such rights are or shall be implied. <br> <br>
Where any of the Materials contain or have affixed to them trade marks, trade names, notices
				or other proprietary marks of Blackridge or its licensors, you may not alter, obscure,
				remove, interfere with or add to any of the said trade marks, trade names, notices or
				proprietary markings.<br> <br>
If you are accessing a Product made available on the Site, you may use the Materials
				contained in the Product in accordance with the terms of the applicable Research Agreement.
				If you wish to use such Materials for other purposes, you may only do so if you have first
				obtained Blackridge's prior written consent (which Blackridge may withhold in its absolute
				discretion). You may be held responsible for any infringement of Blackridge's intellectual
				property rights that arise out of or are connected with your granting any unauthorised user
				access to any Products made available on the Site.<br> <br>
For all other Materials made available on the Site, you may view, download and print such
				Materials for your own personal and private use provided that they are not altered or
				changed in any way and are not used, in whole or in part, in any other publication, in
				whatever medium. Otherwise, the Materials on the Site may not be stored, copied, reproduced,
				transmitted or otherwise made available on any network or in any other medium, in whole or
				in part, without the prior written consent of Blackridge.<br> <br>
Where the Materials comprise any software, you may not decompile, disassemble or reverse
				engineer any object code of such software, or underlying ideas or algorithms of the Software
				or modify, adapt, translate, recast, alter, or create derivative works from the Software or
				any portion of it, or provide or disclose any such Software or any portion of it to any
				third party, except and only to the extent that such activity is expressly permitted by
				applicable law, or by prior written approval of Blackridge (which approval may be
				conditioned, restricted, or denied in the sole discretion of Blackridge), notwithstanding
				this limitation.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">5. Linking Policy</h3> <p class="description">
Where the Site contains links to other websites and resources provided by third parties,
				please understand that these are independent from Blackridge and that Blackridge has no
				control over the content of such websites or resources. Whilst Blackridge believes such
				websites and resources may be of interest to you, Blackridge does not endorse or accept any
				responsibility for the content or the use of such websites and resources. Use of these links
				is therefore made at your own risk and Blackridge accepts no liability for any linked
				websites or resources. You must also take your own precautions to ensure what is selected is
				free from any viruses, worms, Trojan horses or other items of a destructive nature. <br> <br>
You may link to our home page, but only provided you comply with the following provisions.
				In linking to our home page you must do so in a way that is fair and legal and does not
				damage our reputation or take advantage of it. You must not establish a link in such a way
				as to suggest any form of association, approval or endorsement on our part when none exists.
				You must not establish a link from any website that is not owned by you. The Site must not
				be framed on any other website, nor may you modify the Site when linking to it. The website
				from which you are linking must not be indecent or inappropriate or unlawful, or in any way
				incompatible with the reputation of Blackridge. Blackridge will not be responsible for the
				content of any linked website. <br> <br>
Blackridge reserves the right, at any time, to withdraw linking permission without notice
				and to require you to remove any existing links.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">6. Limitation of Liability</h3> <p class="description">
Nothing in these Conditions of use excludes or limits our liability for death or personal
				injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any
				other liability that cannot be excluded or limited by Indian Laws <br> <br>
To the extent permitted by law, we exclude all conditions, warranties, representations or
				other terms which may apply to the Site or any content on it, whether express or implied.
				Subject to the provisions above, Blackridge will not be liable for the following types of
				loss or damage from claims arising out of or relating to these Conditions of use, howsoever
				caused and whether such claims are based on negligence, breach of contract, strict
				liability, breach of statutory duty or otherwise: <br> <br>
(a) loss of profits, business, contracts, revenue, goodwill or anticipated savings (whether
				such loss is direct or indirect, foreseeable or otherwise); or (b) indirect or consequential
				loss. <br> <br>
Different limitations and exclusions of liability apply to the accessing of Products on the
				Site, which are set out in the relevant Research Agreements granting the right to access
				those Products.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">7. Security and Right of Access to the Products</h3> <p class="description">
Where you have been provided with a user name and password in order to access and use a
				Product, you are solely responsible for all use of the said user name and password, and must
				ensure they are kept confidential at all times. You may not share the user name and password
				with or transfer them to any third party, including any other employees of the Client. You
				must notify Blackridge immediately if you become aware of any unauthorised use of your user
				name and password or any other breach of security regarding access and use of the Products
				that becomes known to you. <br> <br>
Access and use of each Product from the Site is limited to the authorised users and
				locations as specified in the relevant Subscription Agreements. If your entitlement to
				access and use a Product is the result of the Client entering into a Subscription Agreement
				with Blackridge, you have no independent right to access and use the Products, and your
				right to access and use the Products will cease when your employment with the Client
				terminates, or when the Client terminates its Subscription Agreements with Blackridge. You
				and the Client shall be responsible for notifying Blackridge of the termination of your
				employment, and for any unauthorised use of the Products by you after your employment with
				the Client ceases.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">8. Viruses</h3> <p class="description">
Blackridge does not guarantee that the Site will be secure or free from bugs or viruses <br> <br>
You are responsible for configuring your information technology, computer programs and
				platform in order to access the Site. You should use your own virus protection software. <br> <br>
You must not misuse the Site by knowingly introducing viruses, trojans, worms, logic bombs
				or other material which is malicious or technologically harmful. You must not attempt to
				gain unauthorised access to the Site, the server on which the Site is stored or any server,
				computer or database connected to the Site. You must not attack the Site via a
				denial-of-service attack or a distributed denial-of service attack. By breaching this
				provision, you wouldbe prosecuted based on the applicable Indian Laws. Blackridge will
				report any such breach to the relevant law enforcement authorities and we will co-operate
				with those authorities by disclosing your identity to them. In the event of such a breach,
				your right to use the Site will cease immediately
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">9. Privacy and Cookies</h3> <p class="description">
Blackridge's policy on data protection, privacy and cookies is set out in its <span class="border text-blue-400">privacy notice</span> and <span class="border text-blue-400">cookie policy</span>, which is incorporated by
				reference into these Conditions of use and which you should also read.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">10. Governing Law and Jurisdiction</h3> <p class="description">
These Conditions of use, their subject matter and their formation (and any non-contractual
				disputes or claims) are governed by Indian laws. Both parties agree to the exclusive
				jurisdiction of the Indian courts, except that Blackridge may pursue injunctive relief or
				similar to enforce the provisions of these Conditions of use in any appropriate forum.
</p> </div> <div class="mb-7"> <!-- <Badge>the best around</Badge> --> <h3 class="h3">11. General</h3> <p class="description">
Please read all the available information about any products made available on the Site
				before placing your order. Due to the confidential nature of the information contained in
				our market research reports, databases, cancellation of orders cannot be accepted after the
				report has been delivered.<br> <br>
In case of online download, the report will be delivered to you online/by email as per the
				timeline stated in the confirmation email which will be sent after the receipt of payment.
				However, in case of physical delivery of the print copy of the report, we will courier the
				report within 10 working days from the date of the receipt of payment.<br> <br>
To the extent that you access and use any Products made available on the Site, you
				acknowledge that you are bound by the terms of the Subscription Agreement(s) which have been
				entered into by yourself or the Client.<br> <br>
Any formal legal notices to Blackridge must be sent by first class post (receipt requested)
				or confirmed by fax to the address set out under section 12 below.<br> <br>
Failure by Blackridge to enforce a right does not result in a waiver of such right.<br> <br>
If any provision in these Conditions of use is deemed to be invalid, illegal or
				unenforceable, the rest of these Conditions of use will remain in full force and effect.<br> <br>
These Conditions of use, together with the Subscription Agreements (where you are accessing
				and using a Product) and privacy notice and cookie policy, constitute the entire agreement
				between you and Blackridge relating to your use of the Site, and supersede all other or
				previous agreements and understandings between you and Blackridge.<br> <br>
Blackridge may amend these Conditions of use at any time by posting such changes on this
				page of the Site. <br> <br>
Further information on these Conditions of use or any queries on them are available by
				contacting Blackridge using any of the detail below: <br> <br>
CIO, Blackridge Research & Consulting <br>
Dhruv Arcade, Road Number 1, Banjara Hills, <br>
Hyderabad, Telangana, India - 500034 <br>
Email address: <span class="text-blue-400">info@blackridgeresearch.com </span> </p> </div> </section> ` })}`;
}, "/home/blackridgeorg/public_html/src/pages/terms-of-service.astro", void 0);

const $$file = "/home/blackridgeorg/public_html/src/pages/terms-of-service.astro";
const $$url = "/terms-of-service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TermsOfService,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
