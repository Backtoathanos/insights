const agreement = new Proxy({"src":"/_astro/trans_computer.Ds7fiOvU.png","width":2250,"height":1512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/trans_computer.png";
							}
							
							return target[name];
						}
					});

const trans = new Proxy({"src":"/_astro/trans_laptop2.CivlsytH.png","width":488,"height":349,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/trans_laptop2.png";
							}
							
							return target[name];
						}
					});

export { agreement as a, trans as t };
