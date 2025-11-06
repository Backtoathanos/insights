import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C19coWfX.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { $ as $$Admonition } from './BlogCta_DIejJhaE.mjs';
import 'clsx';

const frontmatter = {
  "title": "French Elements",
  "description": "Elements in use on MDX pages",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "heading-example",
    "text": "Heading example"
  }, {
    "depth": 1,
    "slug": "heading-1",
    "text": "Heading 1"
  }, {
    "depth": 2,
    "slug": "heading-2",
    "text": "Heading 2"
  }, {
    "depth": 3,
    "slug": "heading-3",
    "text": "Heading 3"
  }, {
    "depth": 4,
    "slug": "heading-4",
    "text": "Heading 4"
  }, {
    "depth": 5,
    "slug": "heading-5",
    "text": "Heading 5"
  }, {
    "depth": 6,
    "slug": "heading-6",
    "text": "Heading 6"
  }, {
    "depth": 3,
    "slug": "admonition",
    "text": "Admonition"
  }, {
    "depth": 3,
    "slug": "emphasis",
    "text": "Emphasis"
  }, {
    "depth": 3,
    "slug": "link",
    "text": "Link"
  }, {
    "depth": 3,
    "slug": "paragraph",
    "text": "Paragraph"
  }, {
    "depth": 3,
    "slug": "ordered-list",
    "text": "Ordered List"
  }, {
    "depth": 3,
    "slug": "unordered-list",
    "text": "Unordered List"
  }, {
    "depth": 3,
    "slug": "code-and-syntax-highlighting",
    "text": "Code and Syntax Highlighting"
  }, {
    "depth": 3,
    "slug": "blockquote",
    "text": "Blockquote"
  }, {
    "depth": 3,
    "slug": "tables",
    "text": "Tables"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    del: "del",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h4, {
      id: "heading-example",
      children: "Heading example"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "This would be french, except that I don’t speak french and don’t want to get something horribly wrong!"
      }), " Content collections are subdivided into language folders like “src/content/blog/en” and “src/content/blog/fr”."]
    }), "\n", createVNode(_components.p, {
      children: ["Here is an example of headings. You can use this heading by the following markdown rules. For example: use ", createVNode(_components.code, {
        children: "#"
      }), " for heading 1 and use ", createVNode(_components.code, {
        children: "######"
      }), " for heading 6."]
    }), "\n", createVNode(_components.h1, {
      id: "heading-1",
      children: "Heading 1"
    }), "\n", createVNode(_components.h2, {
      id: "heading-2",
      children: "Heading 2"
    }), "\n", createVNode(_components.h3, {
      id: "heading-3",
      children: "Heading 3"
    }), "\n", createVNode(_components.h4, {
      id: "heading-4",
      children: "Heading 4"
    }), "\n", createVNode(_components.h5, {
      id: "heading-5",
      children: "Heading 5"
    }), "\n", createVNode(_components.h6, {
      id: "heading-6",
      children: "Heading 6"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "admonition",
      children: "Admonition"
    }), "\n", createVNode(_components.p, {
      children: "This is my own component which is auto-imported in all mdx files. You can use it like:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
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
              color: "var(--astro-code-token-constant)"
            },
            children: "Admonition"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " variant"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"info\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">Your text here</"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "Admonition"
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
    }), "\n", createVNode($$Admonition, {
      variant: "tip",
      children: ["Admonition ", createVNode(_components.code, {
        children: "variant=\"tip\""
      }), ". Use this to provide a cool tip."]
    }), "\n", createVNode($$Admonition, {
      variant: "caution",
      children: createVNode(_components.p, {
        children: ["Admonition ", createVNode(_components.code, {
          children: "variant=\"caution\""
        }), ". Use this to warn people of potential issues."]
      })
    }), "\n", createVNode($$Admonition, {
      variant: "danger",
      children: createVNode(_components.p, {
        children: ["Admonition ", createVNode(_components.code, {
          children: "variant=\"danger\""
        }), ". Use this to tell people not to do something."]
      })
    }), "\n", createVNode($$Admonition, {
      variant: "info",
      children: createVNode(_components.p, {
        children: ["Admonition ", createVNode(_components.code, {
          children: "variant=\"info\""
        }), ". Use this to provide extra secret sauce."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "emphasis",
      children: "Emphasis"
    }), "\n", createVNode(_components.p, {
      children: ["The emphasis, aka italics, with ", createVNode(_components.em, {
        children: "asterisks"
      }), " or ", createVNode(_components.em, {
        children: "underscores"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Strong emphasis, aka bold, with ", createVNode(_components.strong, {
        children: "asterisks"
      }), " or ", createVNode(_components.strong, {
        children: "underscores"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["The combined emphasis with ", createVNode(_components.strong, {
        children: "asterisks and ***"
      }), "underscores***."]
    }), "\n", createVNode(_components.p, {
      children: ["Strikethrough uses two tildes. ", createVNode(_components.del, {
        children: "Scratch this."
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "link",
      children: "Link"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.google.com",
        children: "I’m an inline-style link"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.google.com",
        children: "I’m an inline-style link with title"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.cosmicthemes.com",
        children: "I’m a reference-style link"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://cosmicthemes.com",
        children: "You can use numbers for reference-style link definitions"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Or leave it empty and use the ", createVNode(_components.a, {
        href: "https://www.webreaper.dev",
        children: "link text itself"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "example.com (but not on Github, for example)."
    }), "\n", createVNode(_components.p, {
      children: "Some text to show that the reference links can follow later."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "paragraph",
      children: "Paragraph"
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "ordered-list",
      children: "Ordered List"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "unordered-list",
      children: "Unordered List"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "List item"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "code-and-syntax-highlighting",
      children: "Code and Syntax Highlighting"
    }), "\n", createVNode(_components.p, {
      children: ["This is an ", createVNode(_components.code, {
        children: "Inline code"
      }), " sample."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " s "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"JavaScript syntax highlighting\""
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
              color: "var(--astro-code-token-function)"
            },
            children: "alert"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "(s);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.pre, {
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
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "blockquote",
      children: "Blockquote"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "This is a blockquote example."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "tables",
      children: "Tables"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Markdown"
          }), createVNode(_components.th, {
            children: "Less"
          }), createVNode(_components.th, {
            children: "Pretty"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.em, {
              children: "Still"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "renders"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "nicely"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "There must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don’t need to make the\nraw Markdown line up prettily. You can also use inline Markdown."
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

const url = "src/content/otherPages/fr/elements/index.mdx";
const file = "/home/blackridgeorg/public_html/src/content/otherPages/fr/elements/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blackridgeorg/public_html/src/content/otherPages/fr/elements/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
