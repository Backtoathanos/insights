const heroImage = new Proxy({"src":"/_astro/storm-2.Z1W8cJbT.webp","width":1344,"height":896,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/storm-2.webp";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
