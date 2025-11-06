import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C19coWfX.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import { $ as $$Admonition } from './BlogCta_DIejJhaE.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Use TSConfig Path Aliases to Improve Your Code",
  "description": "Enable cleaner, more readable import statements with TSConfig path aliases. Learn how to set them up and improve your TypeScript code maintainability.",
  "draft": false,
  "authors": ["web-reaper"],
  "pubDate": "2023-08-14T00:00:00.000Z",
  "heroImage": "../tsconfig-paths-setup/heroImage.jpg",
  "categories": ["productivity"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-are-path-aliases",
    "text": "What Are Path Aliases?"
  }, {
    "depth": 2,
    "slug": "how-to-setup-path-aliases",
    "text": "How To Setup Path Aliases"
  }, {
    "depth": 3,
    "slug": "adding-path-aliases-to-your-tsconfig-file",
    "text": "Adding Path Aliases To Your TSConfig File"
  }, {
    "depth": 3,
    "slug": "using-path-aliases-in-your-code",
    "text": "Using Path Aliases In Your Code"
  }, {
    "depth": 2,
    "slug": "why-should-i-do-this",
    "text": "Why Should I Do This?"
  }, {
    "depth": 3,
    "slug": "annoying-relative-imports",
    "text": "Annoying Relative Imports"
  }, {
    "depth": 3,
    "slug": "refactoring-relative-imports",
    "text": "Refactoring Relative Imports"
  }, {
    "depth": 3,
    "slug": "alias-imports-version",
    "text": "Alias Imports Version"
  }, {
    "depth": 2,
    "slug": "additional-paths",
    "text": "Additional Paths"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "TSConfig path aliases are a powerful tool that can help you to improve the readability, maintainability, and error-proofing of your TypeScript code. This allows for easier to read clean code, and enables us to move files around without having to update import paths in every file."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "This is a huge time saver."
      })
    }), "\n", createVNode(_components.h2, {
      id: "what-are-path-aliases",
      children: "What Are Path Aliases?"
    }), "\n", createVNode(_components.p, {
      children: "The goal is to replace the following import statements:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-comment)"
            },
            children: "// relative import path"
          })
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
            children: " MyComponent "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"../../../components/MyComponent\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "with these import statements:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-comment)"
            },
            children: "// alias import path"
          })
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
            children: " MyComponent "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"@components/MyComponent\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["We can do this with a ", createVNode(_components.code, {
        children: "tsconfig.json"
      }), " or ", createVNode(_components.code, {
        children: "jsconfig.json"
      }), " file. We will be using TypeScript in this post."]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-setup-path-aliases",
      children: "How To Setup Path Aliases"
    }), "\n", createVNode(_components.h3, {
      id: "adding-path-aliases-to-your-tsconfig-file",
      children: "Adding Path Aliases To Your TSConfig File"
    }), "\n", createVNode(_components.p, {
      children: ["We need to update our ", createVNode(_components.code, {
        children: "tsconfig.json"
      }), " file to enable aliases. We will add a ", createVNode(_components.code, {
        children: "paths"
      }), " and ", createVNode(_components.code, {
        children: "baseUrl"
      }), " property to the ", createVNode(_components.code, {
        children: "compilerOptions"
      }), " object. Each path is relative to the ", createVNode(_components.code, {
        children: "baseUrl"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "This will tell TypeScript to replace the alias with the actual path when compiling the code."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\"compilerOptions\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\"baseUrl\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \".\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-comment)"
            },
            children: " // root of your \"paths\" below. Required if \"paths\" is defined"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\"paths\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\t\"@components/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"src/components/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-comment)"
            },
            children: "// enables us to use @components/MyComponent"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\t\t}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\t}"
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
    }), "\n", createVNode(_components.h3, {
      id: "using-path-aliases-in-your-code",
      children: "Using Path Aliases In Your Code"
    }), "\n", createVNode(_components.p, {
      children: "Now in all of your source files, you can import components like this:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-comment)"
            },
            children: "// Without path aliases"
          })
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
            children: " Hero "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"../../../components/Hero\""
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
            children: " Footer "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"../../../components/Footer\""
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
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-comment)"
            },
            children: "// With path aliases"
          })
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
            children: " Hero "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"@components/Hero\""
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
            children: " Footer "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"@components/Footer\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode($$Admonition, {
      variant: "info",
      children: createVNode(_components.p, {
        children: ["Frameworks like Astro and Next.js ship with built-in typescript support, although you may have to\ncreate the file ", createVNode(_components.code, {
          children: "tsconfig.json"
        }), ". Consult your framework’s documentation for more information."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "why-should-i-do-this",
      children: "Why Should I Do This?"
    }), "\n", createVNode(_components.p, {
      children: "Let’s say we have the following file structure:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── src/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── components/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── Hero.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   └── Footer.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    └── pages/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ├── index.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        └── solutions.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "annoying-relative-imports",
      children: "Annoying Relative Imports"
    }), "\n", createVNode(_components.p, {
      children: ["If we want to import ", createVNode(_components.code, {
        children: "Hero.tsx"
      }), " and ", createVNode(_components.code, {
        children: "Footer.tsx"
      }), " into ", createVNode(_components.code, {
        children: "index.tsx"
      }), " and ", createVNode(_components.code, {
        children: "solutions.tsx"
      }), ", we would need the following import statements:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
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
            children: " Hero "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"../components/Hero\""
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
            children: " Footer "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"../components/Footer\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "refactoring-relative-imports",
      children: "Refactoring Relative Imports"
    }), "\n", createVNode(_components.p, {
      children: ["Now lets say we want to refactor. We now have multiple “solutions” and want to have each on their own page, and have them under a ", createVNode(_components.code, {
        children: "solutions"
      }), " directory. The file structure now looks like:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── src/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── components/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── Hero.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   └── Footer.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    └── pages/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ├── index.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        └── solutions/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            ├── solution.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            └── solution2.tsx"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now we have to update the import paths of ", createVNode(_components.code, {
        children: "solution.tsx"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
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
            children: " Hero "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"../../components/Hero\""
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
            children: " Footer "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"../../components/Footer\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "You can see how this makes refactoring more of a chore. We have to update the import paths in every file that imports these components. This is a huge time sink and can lead to bugs if you forget to update the import paths."
    }), "\n", createVNode(_components.h3, {
      id: "alias-imports-version",
      children: "Alias Imports Version"
    }), "\n", createVNode(_components.p, {
      children: "Alternatively, if from the start we were using aliases, we would not have to update any files using the components. This is far better for maintainability:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
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
            children: " Hero "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"@components/Hero\""
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
            children: " Footer "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"@components/Footer\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode($$Admonition, {
      variant: "info",
      children: createVNode(_components.p, {
        children: ["With this method, ", createVNode(_components.em, {
          children: "every"
        }), " file that needs to import these components will import them the same\nway. This makes it easier to move files around without having to update import paths."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "additional-paths",
      children: "Additional Paths"
    }), "\n", createVNode(_components.p, {
      children: "This can be extended to any number of path aliases. Some other potential ones you might use:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\"compilerOptions\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\"baseUrl\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \".\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\"paths\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\t\"@config/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"src/data/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\t\"@js/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"src/js/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\t\"@layouts/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"src/layouts/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\t\"@components/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"src/components/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "\t\t\t\"@assets/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"src/assets/*\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\t\t}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "\t}"
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
    }), "\n", createVNode($$Admonition, {
      variant: "tip",
      children: createVNode(_components.p, {
        children: ["When updating ", createVNode(_components.code, {
          children: "tsconfig.json"
        }), ", you may need to restart your editor for the changes to take effect."]
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

const url = "src/content/blog/fr/tsconfig-paths-setup/index.mdx";
const file = "/home/blackridgeorg/public_html/src/content/blog/fr/tsconfig-paths-setup/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blackridgeorg/public_html/src/content/blog/fr/tsconfig-paths-setup/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
