import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C19coWfX.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Ct7febRF.mjs';
import './BlogCta_DIejJhaE.mjs';
import 'clsx';

const frontmatter = {
  "title": "Privacy Policy",
  "description": "Example privacy policy"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "personal-information-collection",
    "text": "Personal Information Collection"
  }, {
    "depth": 2,
    "slug": "personal-information-retention",
    "text": "Personal Information Retention"
  }, {
    "depth": 2,
    "slug": "personal-data-from-third-parties",
    "text": "Personal Data from Third Parties"
  }, {
    "depth": 2,
    "slug": "your-rights",
    "text": "Your Rights"
  }, {
    "depth": 2,
    "slug": "minors",
    "text": "Minors"
  }, {
    "depth": 2,
    "slug": "third-party-links",
    "text": "Third Party Links"
  }, {
    "depth": 2,
    "slug": "merger-acquisition-or-asset-sale",
    "text": "Merger, acquisition, or asset sale"
  }, {
    "depth": 2,
    "slug": "contact-us",
    "text": "Contact us"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Last updated on Sep 9, 2023"
      })
    }), "\n", createVNode(_components.p, {
      children: "This privacy policy sets out how Example LLC collects, processes, and uses your Personal Information through your use of our Services."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "This is purely for example. Please consult a lawyer for your own privacy policy."
      })
    }), "\n", createVNode(_components.h2, {
      id: "personal-information-collection",
      children: "Personal Information Collection"
    }), "\n", createVNode(_components.p, {
      children: "We only collect and use Personal Information to the extent necessary to provide you with the Services. We collect Personal Information for the Website to provide you with a better online experience."
    }), "\n", createVNode(_components.h2, {
      id: "personal-information-retention",
      children: "Personal Information Retention"
    }), "\n", createVNode(_components.p, {
      children: "We keep Personal Information for the shortest time necessary to provide you with Services and to meet all our legal and compliance obligations. To determine this retention period, we take into account (i) the nature of the Personal Information gathered; and (ii) the nature of our legal and compliance obligations. All Personal Information no longer required by us is destroyed and/or erased."
    }), "\n", createVNode(_components.h2, {
      id: "personal-data-from-third-parties",
      children: "Personal Data from Third Parties"
    }), "\n", createVNode(_components.p, {
      children: "We may, from time to time, obtain Personal Information from third parties to enable us to better tailor our Services to you (Third Party Personal Information). When we obtain Third Party Personal Information, we will notify you within one month. If we use or share Third Party Personal Information, we will notify you immediately."
    }), "\n", createVNode(_components.h2, {
      id: "your-rights",
      children: "Your Rights"
    }), "\n", createVNode(_components.p, {
      children: "With respect to Personal Information we hold, you have the following rights:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Access: You may request from us access to your data that we hold on you."
      }), "\n", createVNode(_components.li, {
        children: "Rectification: If the data we hold on you is inaccurate, you may request that we correct it. If the data we hold is incomplete, you may request that we complete it."
      }), "\n", createVNode(_components.li, {
        children: "Erasure: Subject to certain conditions, you may request that we erase all of the data we hold on you."
      }), "\n", createVNode(_components.li, {
        children: "Restrictions: Subject to certain conditions, you may request that we restrict the processing of data we hold on you."
      }), "\n", createVNode(_components.li, {
        children: "Portability: Subject to certain conditions, you may request that we transfer all the data we hold on you to a third party (including yourself)."
      }), "\n", createVNode(_components.li, {
        children: "Objection: Subject to certain conditions, you may object to our processing of your data."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "minors",
      children: "Minors"
    }), "\n", createVNode(_components.p, {
      children: "We do not knowingly collect information on children under the age of 16 (“Child”). If you become aware that a Child has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a Child without their parent’s verifiable authorization to access our Services, we will take steps to remove that information from our servers."
    }), "\n", createVNode(_components.h2, {
      id: "third-party-links",
      children: "Third Party Links"
    }), "\n", createVNode(_components.p, {
      children: "Our website contains links to other third-party websites not owned or managed by Example LLC. This privacy policy applies to this website only. If you click a link to a third-party website, the privacy policy of that website will apply. We highly recommend that you read the privacy policies of other websites as they may be different from ours."
    }), "\n", createVNode(_components.h2, {
      id: "merger-acquisition-or-asset-sale",
      children: "Merger, acquisition, or asset sale"
    }), "\n", createVNode(_components.p, {
      children: "If Example LLC is involved in a merger, acquisition, or asset sale, your Personal Information may be transferred."
    }), "\n", createVNode(_components.h2, {
      id: "contact-us",
      children: "Contact us"
    }), "\n", createVNode(_components.p, {
      children: ["If you have any questions or suggestions about our privacy policy or want to know more information about Personal Information we hold, please contact us at ", createVNode(_components.a, {
        href: "mailto:support@example.com",
        children: "support@example.com"
      }), "."]
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

const url = "src/content/otherPages/en/privacy-policy/index.mdx";
const file = "/home/blackridgeorg/public_html/src/content/otherPages/en/privacy-policy/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/blackridgeorg/public_html/src/content/otherPages/en/privacy-policy/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
