const image = new Proxy({"src":"/_astro/agreement-business.Dbo-MEOL.jpg","width":500,"height":333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/agreement-business.jpg";
							}
							
							return target[name];
						}
					});

export { image as i };
