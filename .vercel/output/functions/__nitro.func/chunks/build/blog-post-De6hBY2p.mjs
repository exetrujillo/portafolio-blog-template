import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "blog-post",
  __ssrInlineRender: true,
  setup(__props) {
    const headings = ref([]);
    const processedHeadings = computed(() => {
      const result = [];
      let currentH2 = null;
      let currentH3 = null;
      let currentH4 = null;
      let currentH5 = null;
      headings.value.forEach((heading) => {
        if (heading.level === 2) {
          currentH2 = { ...heading, children: [] };
          currentH3 = null;
          currentH4 = null;
          currentH5 = null;
          result.push(currentH2);
        } else if (heading.level === 3 && currentH2) {
          currentH3 = { ...heading, children: [] };
          currentH4 = null;
          currentH5 = null;
          currentH2.children.push(currentH3);
        } else if (heading.level === 4 && currentH3) {
          currentH4 = { ...heading, children: [] };
          currentH5 = null;
          currentH3.children.push(currentH4);
        } else if (heading.level === 5 && currentH4) {
          currentH5 = { ...heading, children: [] };
          currentH4.children.push(currentH5);
        } else if (heading.level === 6 && currentH5) {
          currentH5.children.push({ ...heading, children: [] });
        }
      });
      return result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto py-8 px-4" }, _attrs))} data-v-770ff231><div class="mb-8 border p-6 rounded-lg shadow-sm" style="${ssrRenderStyle({
        borderColor: "var(--ui-border)",
        backgroundColor: "var(--ui-code-block-bg)",
        color: "var(--ui-text)"
      })}" data-v-770ff231><h1 class="font-bold" style="${ssrRenderStyle({
        color: "var(--ui-primary)",
        fontSize: "2.25rem",
        marginTop: "0.1rem",
        marginBottom: "1rem",
        fontWeight: 700
      })}" data-v-770ff231>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h1>`);
      if (_ctx.$slots.description) {
        _push(`<p class="italic text-lg mb-4" style="${ssrRenderStyle({ color: "var(--ui-text)" })}" data-v-770ff231>`);
        ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-sm opacity-75 mb-4" data-v-770ff231>`);
      ssrRenderSlot(_ctx.$slots, "meta", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.$slots.tags) {
        _push(`<div class="flex flex-wrap gap-2 mt-4" data-v-770ff231>`);
        ssrRenderSlot(_ctx.$slots, "tags", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.image) {
        _push(`<div class="mb-8" data-v-770ff231>`);
        ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (headings.value.length > 0) {
        _push(`<div class="mb-8 border p-4 rounded-lg" style="${ssrRenderStyle({
          borderColor: "var(--ui-border)",
          backgroundColor: "var(--ui-code-block-bg)",
          color: "var(--ui-text)"
        })}" data-v-770ff231><h2 class="text-lg font-semibold mb-3" style="${ssrRenderStyle({ color: "var(--ui-highlight)" })}" data-v-770ff231> \xCDndice de contenidos </h2><ol class="list-decimal pl-5 space-y-1" data-v-770ff231><!--[-->`);
        ssrRenderList(unref(processedHeadings), (h2, index) => {
          _push(`<li data-v-770ff231><a${ssrRenderAttr("href", `#${h2.id}`)} class="hover:underline transition-colors" style="${ssrRenderStyle({ color: "var(--ui-text)" })}" data-v-770ff231>${ssrInterpolate(h2.text)}</a>`);
          if (h2.children.length > 0) {
            _push(`<ol class="list-decimal pl-5 mt-1 mb-1" data-v-770ff231><!--[-->`);
            ssrRenderList(h2.children, (h3) => {
              _push(`<li data-v-770ff231><a${ssrRenderAttr("href", `#${h3.id}`)} class="hover:underline transition-colors" style="${ssrRenderStyle({ color: "var(--ui-text)", fontSize: "0.95rem" })}" data-v-770ff231>${ssrInterpolate(h3.text)}</a>`);
              if (h3.children.length > 0) {
                _push(`<ol class="list-decimal pl-5 mt-1 mb-1" data-v-770ff231><!--[-->`);
                ssrRenderList(h3.children, (h4) => {
                  _push(`<li data-v-770ff231><a${ssrRenderAttr("href", `#${h4.id}`)} class="hover:underline transition-colors" style="${ssrRenderStyle({ color: "var(--ui-text)", fontSize: "0.9rem" })}" data-v-770ff231>${ssrInterpolate(h4.text)}</a>`);
                  if (h4.children.length > 0) {
                    _push(`<ol class="list-decimal pl-5 mt-1 mb-1" data-v-770ff231><!--[-->`);
                    ssrRenderList(h4.children, (h5) => {
                      _push(`<li data-v-770ff231><a${ssrRenderAttr("href", `#${h5.id}`)} class="hover:underline transition-colors" style="${ssrRenderStyle({ color: "var(--ui-text)", fontSize: "0.85rem" })}" data-v-770ff231>${ssrInterpolate(h5.text)}</a>`);
                      if (h5.children.length > 0) {
                        _push(`<ol class="list-decimal pl-5 mt-1 mb-1" data-v-770ff231><!--[-->`);
                        ssrRenderList(h5.children, (h6) => {
                          _push(`<li data-v-770ff231><a${ssrRenderAttr("href", `#${h6.id}`)} class="hover:underline transition-colors" style="${ssrRenderStyle({ color: "var(--ui-text)", fontSize: "0.8rem" })}" data-v-770ff231>${ssrInterpolate(h6.text)}</a></li>`);
                        });
                        _push(`<!--]--></ol>`);
                      } else {
                        _push(`<!---->`);
                      }
                      _push(`</li>`);
                    });
                    _push(`<!--]--></ol>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`</li>`);
                });
                _push(`<!--]--></ol>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</li>`);
            });
            _push(`<!--]--></ol>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ol></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="prose dark:prose-invert max-w-none" style="${ssrRenderStyle({ color: "var(--ui-text)" })}" data-v-770ff231>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/blog-post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogPost = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-770ff231"]]);

export { blogPost as default };
