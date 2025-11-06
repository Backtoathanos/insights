import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C19coWfX.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import './BlogCta_DIejJhaE.mjs';
import 'clsx';

const __0____tailwind_gradient_underline_spongebob_transitions_jpeg__ = new Proxy({"src":"/_astro/spongebob-transitions.pKcVFVHh.jpeg","width":610,"height":587,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/content/blog/en/tailwind-gradient-underline/spongebob-transitions.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Creating a Gradient Underline with Tailwind CSS",
  "description": "This is a short post on how to create a gradient underline with Tailwind CSS to separate sections of your page, or just to make your links look cool!",
  "draft": false,
  "authors": ["web-reaper", "second-author"],
  "pubDate": "2023-07-10T00:00:00.000Z",
  "heroImage": "../tailwind-gradient-underline/heroImage.jpg",
  "categories": ["cool code"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-create-a-gradient-underline",
    "text": "How to create a gradient underline"
  }, {
    "depth": 3,
    "slug": "gradient-underline-color",
    "text": "Gradient underline color"
  }, {
    "depth": 3,
    "slug": "gradient-underline-height",
    "text": "Gradient underline height"
  }, {
    "depth": 3,
    "slug": "positioning-the-gradient-underline",
    "text": "Positioning the gradient underline"
  }, {
    "depth": 2,
    "slug": "final-code",
    "text": "Final code"
  }, {
    "depth": 3,
    "slug": "generic-gradient-underline",
    "text": "Generic gradient underline"
  }, {
    "depth": 3,
    "slug": "link-underline-on-hover",
    "text": "Link underline on hover"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "astro-image": "astro-image",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This is a short post on how to create a gradient underline with Tailwind CSS to separate sections of your page, or just to make your links look cool! I’ll explain the code below, but if you just want to see the code, you can skip to the end."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-create-a-gradient-underline",
      children: "How to create a gradient underline"
    }), "\n", createVNode(_components.p, {
      children: ["We create this as an ", createVNode(_components.code, {
        children: "absolute"
      }), " positioned element, which requires the parent element to be ", createVNode(_components.code, {
        children: "relative"
      }), ". This allows us to position the element relative to the parent (surpise). In this case we are going to have it underline the parent element, although you could adjust this positioning."]
    }), "\n", createVNode(_components.h3, {
      id: "gradient-underline-color",
      children: "Gradient underline color"
    }), "\n", createVNode(_components.p, {
      children: ["We’re going to use the ", createVNode(_components.code, {
        children: "bg-gradient-to-r"
      }), " utility to create a gradient from left to right. Direction really doesn’t matter, the point is that it’s a gradient. For the starting color we’re going to make it transparent, go to your desired color, and go back to transparent. We can do this with the utilities ", createVNode(_components.code, {
        children: "bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0"
      }), ". This will create a gradient from transparent to ", createVNode(_components.code, {
        children: "sky-500"
      }), " to transparent. You can adjust the opacity of the middle color to whatever you want. I chose ", createVNode(_components.code, {
        children: "70"
      }), " because it looked good to me."]
    }), "\n", createVNode(_components.h3, {
      id: "gradient-underline-height",
      children: "Gradient underline height"
    }), "\n", createVNode(_components.p, {
      children: ["Let’s set the height of the underline to ", createVNode(_components.code, {
        children: "h-px"
      }), ". This will make it 1px tall. You can adjust this to whatever you want."]
    }), "\n", createVNode(_components.h3, {
      id: "positioning-the-gradient-underline",
      children: "Positioning the gradient underline"
    }), "\n", createVNode(_components.p, {
      children: ["We want the gradient underline to span the bottom edge of the parent element. So the first utility we want to use is ", createVNode(_components.code, {
        children: "inset-x-0"
      }), " to have it go from the left edge to the right edge, then ", createVNode(_components.code, {
        children: "bottom-0"
      }), " to put it at the bottom. You can find more info about these utilities in the ", createVNode(_components.a, {
        href: "https://tailwindcss.com/docs/top-right-bottom-left#placing-a-positioned-element",
        children: "Tailwind Docs"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["If you need to adjust the vertical location of the underline, you can do so using the ", createVNode(_components.code, {
        children: "bottom"
      }), " utility. For instance, if you want to move it down slightly to overlap a bottom border, you can use ", createVNode(_components.code, {
        children: "-bottom-px"
      }), " to move it down 1px."]
    }), "\n", createVNode(_components.h2, {
      id: "final-code",
      children: "Final code"
    }), "\n", createVNode(_components.h3, {
      id: "generic-gradient-underline",
      children: "Generic gradient underline"
    }), "\n", createVNode(_components.p, {
      children: ["Here I use the color ", createVNode(_components.code, {
        children: "sky-500"
      }), " from the Tailwind color palette. You can use whatever color you want."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"relative\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\t<"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "span"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "\t\tclass"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\t></"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "link-underline-on-hover",
      children: "Link underline on hover"
    }), "\n", createVNode(_components.p, {
      children: "This is very similar to the above, but I’ve added a hover effect to the underline. There’s also a transition because who doesn’t like transitions?"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "",
        src: __0____tailwind_gradient_underline_spongebob_transitions_jpeg__
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"group relative border-2 p-2\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\tMy Link!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\t<"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "span"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "\t\tclass"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\t></"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/en/tailwind-gradient-underline/index.mdx";
const file = "/home/blackridgeorg/public_html/src/content/blog/en/tailwind-gradient-underline/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blackridgeorg/public_html/src/content/blog/en/tailwind-gradient-underline/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
