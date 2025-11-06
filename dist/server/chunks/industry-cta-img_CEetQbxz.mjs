const ctaImage = new Proxy({"src":"/_astro/industry-cta-img.BT8HXPHi.svg","width":632,"height":383,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/industry-cta-img.svg";
							}
							
							return target[name];
						}
					});

export { ctaImage as c };
