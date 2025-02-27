import { f as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro/server_Bujn4LRl.mjs';
import 'clsx';

const frontmatter = {
  "id": 12,
  "title": "IPC6824EL-X42-W-VH1",
  "desc": "4MP 42X LightHunter Laser Network PTZ Camera",
  "img": "/src/assets/content/Pro/IPC6824EL-X42-W-VH1.png",
  "images": ["/src/assets/camera/Pro/IPC6824EL-X42-W-VH1/IPC6824EL-X42-W-VH1-3.png", "/src/assets/camera/Pro/IPC6824EL-X42-W-VH1/IPC6824EL-X42-W-VH1-2.png", "/src/assets/camera/Pro/IPC6824EL-X42-W-VH1/IPC6824EL-X42-W-VH1-1.png"],
  "alt": "4MP 42X LightHunter Laser Network PTZ Camera",
  "author": "Dipin koodali",
  "reviewBody": "unv is the best product",
  "ratingValue": 5,
  "features": ["2688×1520 @ 60fps high-resolution video", "42X optical zoom for capturing fine details", "Smart intrusion detection with false alarm filtering", "Supports front-end blocklist and allowlist comparison", "People counting and crowd density monitoring", "Multi-target detection with human, motor vehicle, and non-motor vehicle recognition", "Optical and self-adaptive defog for enhanced visibility", "LightHunter technology for superior low-light performance", "IR illumination up to 500m (1640ft), proportional to zoom level", "Gyroscope stabilization for steady and clear imaging", "Built-in wiper for lens cleaning", "Power options: AC 24V ±25%, DC 24V ±25%, or PoE", "7 alarm inputs, 2 alarm outputs, 1 audio input, 1 audio output", "IP67 weatherproof protection"],
  "publishedTime": "2025-01-15",
  "modifiedTime": "2025-02-01"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/uniview/content-12.mdx";
const file = "C:/xampp/htdocs/lovosistechnology/src/content/uniview/content-12.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/xampp/htdocs/lovosistechnology/src/content/uniview/content-12.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
