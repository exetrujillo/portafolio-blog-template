import { defineComponent, ref, computed, mergeProps, createVNode, resolveDynamicComponent, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "portfolio-project",
  __ssrInlineRender: true,
  setup(__props) {
    const headings = ref([]);
    const processedHeadings = computed(() => {
      const result = [];
      const stack = [];
      headings.value.forEach((heading) => {
        const newHeading = { id: heading.id, text: heading.text, level: heading.level, children: [] };
        while (stack.length > 0 && stack[stack.length - 1].level >= newHeading.level) {
          stack.pop();
        }
        if (stack.length > 0) {
          const parent = stack[stack.length - 1];
          parent.children.push(newHeading);
        } else {
          if (newHeading.level >= 2) {
            result.push(newHeading);
            stack.push(newHeading);
          } else {
            console.warn(`Encabezado de nivel inesperado ${newHeading.level} encontrado al principio del procesamiento. Se esperaba H2+.`);
            result.push(newHeading);
          }
        }
        if (newHeading.level < 6) {
          stack.push(newHeading);
        }
      });
      return result;
    });
    function renderTocLinks(links) {
      if (!links || links.length === 0) return null;
      return h("ul", { class: "ml-4 space-y-1" }, links.map(
        (link) => h("li", { key: link.id }, [
          h("a", { href: `#${link.id}`, class: "text-sm hover:underline text-ui-text" }, link.text),
          link.children && link.children.length > 0 ? renderTocLinks(link.children) : null
        ])
      ));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto py-8 px-4" }, _attrs))}><div class="mb-8"><h1 class="text-4xl font-bold mt-4 mb-2" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h1>`);
      if (_ctx.$slots.description) {
        _push(`<p class="italic text-xl mb-4" style="${ssrRenderStyle({ color: "var(--ui-text)" })}">`);
        ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-wrap gap-2 mb-4">`);
      ssrRenderSlot(_ctx.$slots, "tags", {}, null, _push, _parent);
      _push(`</div><div class="text-sm text-ui-text opacity-75 mb-6">`);
      ssrRenderSlot(_ctx.$slots, "meta", {}, null, _push, _parent);
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"><div class="lg:col-span-2">`);
      if (_ctx.$slots.image) {
        _push(`<div class="mb-8">`);
        ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="prose dark:prose-invert max-w-none" style="${ssrRenderStyle({ color: "var(--ui-text)" })}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div class="lg:col-span-1 sticky top-8 self-start portfolio-toc-container">`);
      if (processedHeadings.value.length > 0) {
        _push(`<div class="border p-4 rounded-lg" style="${ssrRenderStyle({
          borderColor: "var(--ui-border)",
          backgroundColor: "var(--ui-code-block-bg)",
          color: "var(--ui-text)"
        })}"><h2 class="text-lg font-semibold mb-3" style="${ssrRenderStyle({ color: "var(--ui-highlight)" })}"> \xCDndice del Proyecto </h2>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(renderTocLinks(processedHeadings.value)), null, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/portfolio-project.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
