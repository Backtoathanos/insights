import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C19coWfX.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import './BlogCta_DIejJhaE.mjs';
import 'clsx';

const frontmatter = {
  "language": "React",
  "order": 1,
  "icon": "tabler/brand-react",
  "draft": false
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(_components.pre, {
    class: "astro-code css-variables",
    style: {
      backgroundColor: "var(--astro-code-color-background)",
      color: "var(--astro-code-color-text)",
      overflowX: "auto"
    },
    tabindex: "0",
    "data-language": "tsx",
    children: createVNode(_components.code, {
      children: [createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: "import"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: " React "
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: "from"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-string-expression)"
          },
          children: " \"react\""
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: ";"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: "import"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: " ReactDOM "
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: "from"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-string-expression)"
          },
          children: " \"react-dom\""
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: ";"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line"
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: "class"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-function)"
          },
          children: " App"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: " extends"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-function)"
          },
          children: " React"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: "."
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-function)"
          },
          children: "Component"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: " {"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-comment)"
          },
          children: "  // react comment"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: "  const test "
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-string-expression)"
          },
          children: " \"test\""
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: ";"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-constant)"
          },
          children: "  console"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-function)"
          },
          children: ".log"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: "(test);"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line"
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-function)"
          },
          children: "  render"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: "() {"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: "    return"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: " <"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-string-expression)"
          },
          children: "h1"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: ">Hello, World!</"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-string-expression)"
          },
          children: "h1"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: ">;"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: "  }"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: "}"
        })
      }), "\n", createVNode(_components.span, {
        class: "line"
      })]
    })
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
const url = "src/content/codeToggles/react/index.mdx";
const file = "/home/blackridgeorg/public_html/src/content/codeToggles/react/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blackridgeorg/public_html/src/content/codeToggles/react/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
