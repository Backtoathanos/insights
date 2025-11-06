const image = new Proxy({"src":"/_astro/book-demo-img.DJG9FZrl.jpg","width":800,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/book-demo-img.jpg";
							}
							
							return target[name];
						}
					});

export { image as i };
