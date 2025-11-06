import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C19coWfX.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import './BlogCta_DIejJhaE.mjs';
import 'clsx';

const frontmatter = {
  "language": "Python",
  "order": 2,
  "icon": "tabler/brand-python",
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
    "data-language": "python",
    children: createVNode(_components.code, {
      children: [createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-comment)"
          },
          children: "# python comment"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: "s "
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-keyword)"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-string-expression)"
          },
          children: " \"Python syntax highlighting\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "var(--astro-code-token-function)"
          },
          children: "print"
        }), createVNode(_components.span, {
          style: {
            color: "var(--astro-code-color-text)"
          },
          children: " s"
        })]
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
const url = "src/content/codeToggles/python/index.mdx";
const file = "/home/blackridgeorg/public_html/src/content/codeToggles/python/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blackridgeorg/public_html/src/content/codeToggles/python/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
