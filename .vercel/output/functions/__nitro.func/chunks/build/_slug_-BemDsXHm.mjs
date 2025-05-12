import { d as useRoute, b as useAsyncData, e as createError, u as useHead, f as __nuxt_component_0$2, c as _sfc_main$b } from './server.mjs';
import { _ as _sfc_main$1 } from './ContentRenderer-BpPtYmy5.mjs';
import { defineComponent, withAsyncContext, mergeProps, createSlots, withCtx, unref, createBlock, createCommentVNode, openBlock, createVNode, toDisplayString, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { q as queryCollection } from './app-BMDqH26I.mjs';
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
import 'property-information';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => {
      return queryCollection("blog").path(route.path).select("title", "description", "date", "tags", "path", "image", "body").first();
    }, "$fhvmE-Di65")), __temp = await __temp, __restore(), __temp);
    if (!article.value) {
      throw createError({ statusCode: 404, message: "Art\xEDculo no encontrado" });
    }
    useHead({
      title: (_a = article.value) == null ? void 0 : _a.title,
      script: [
        {
          innerHTML: `
        document.addEventListener('DOMContentLoaded', function() {
          const headings = document.querySelectorAll('.prose h2, .prose h3, .prose h4, .prose h5, .prose h6');
          headings.forEach(heading => {
            const links = heading.querySelectorAll('a');
            links.forEach(link => {
              if (link.classList.contains('header-anchor')) {
                const parent = link.parentNode;
                while (link.firstChild) {
                  parent.insertBefore(link.firstChild, link);
                }
                parent.removeChild(link);
              }
            });
          });
        });
      `,
          type: "text/javascript"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      const _component_NuxtLayout = __nuxt_component_0$2;
      const _component_NuxtImg = _sfc_main$b;
      const _component_ContentRenderer = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "blog-post" }, _attrs), createSlots({
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate((_a3 = unref(article)) == null ? void 0 : _a3.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b2 = unref(article)) == null ? void 0 : _b2.title), 1)
            ];
          }
        }),
        meta: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            _push2(`<div class="flex flex-col gap-2"${_scopeId}>`);
            if ((_a3 = unref(article)) == null ? void 0 : _a3.date) {
              _push2(`<span class="text-sm" style="${ssrRenderStyle({ color: "var(--ui-text)" })}"${_scopeId}> Publicado: ${ssrInterpolate(new Date(unref(article).date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-2" }, [
                ((_b2 = unref(article)) == null ? void 0 : _b2.date) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-sm",
                  style: { color: "var(--ui-text)" }
                }, " Publicado: " + toDisplayString(new Date(unref(article).date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(article)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, { value: unref(article) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(article) ? (openBlock(), createBlock(_component_ContentRenderer, {
                key: 0,
                value: unref(article)
              }, null, 8, ["value"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, [
        ((_a2 = unref(article)) == null ? void 0 : _a2.image) ? {
          name: "image",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2;
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: unref(article).image,
                alt: `Imagen principal para ${(_a3 = unref(article)) == null ? void 0 : _a3.title}`,
                class: "w-full object-cover rounded-md",
                loading: "lazy"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  src: unref(article).image,
                  alt: `Imagen principal para ${(_b2 = unref(article)) == null ? void 0 : _b2.title}`,
                  class: "w-full object-cover rounded-md",
                  loading: "lazy"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          key: "0"
        } : void 0,
        ((_b = unref(article)) == null ? void 0 : _b.description) ? {
          name: "description",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(article).description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(article).description), 1)
              ];
            }
          }),
          key: "1"
        } : void 0,
        ((_c = unref(article)) == null ? void 0 : _c.tags) && unref(article).tags.length > 0 ? {
          name: "tags",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(article).tags, (tag) => {
                _push2(`<span class="text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200" style="${ssrRenderStyle({
                  backgroundColor: "var(--ui-primary)",
                  color: "var(--ui-bg)",
                  opacity: "1"
                })}"${_scopeId}>${ssrInterpolate(tag)}</span>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(article).tags, (tag) => {
                  return openBlock(), createBlock("span", {
                    key: tag,
                    class: "text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200",
                    style: {
                      backgroundColor: "var(--ui-primary)",
                      color: "var(--ui-bg)",
                      opacity: "1"
                    }
                  }, toDisplayString(tag), 1);
                }), 128))
              ];
            }
          }),
          key: "2"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
