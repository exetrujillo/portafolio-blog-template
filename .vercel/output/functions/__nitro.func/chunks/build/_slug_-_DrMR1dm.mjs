import { d as useRoute, b as useAsyncData, e as createError, u as useHead, f as __nuxt_component_0$2, c as _sfc_main$b } from './server.mjs';
import { _ as _sfc_main$1 } from './ContentRenderer-BpPtYmy5.mjs';
import { defineComponent, withAsyncContext, mergeProps, createSlots, withCtx, unref, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { q as queryCollection } from './app-BMDqH26I.mjs';
import { _ as _sfc_main$2 } from './Badge-CKnmMmEW.mjs';
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
    const { data: project } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => {
      return queryCollection("portfolio").path(route.path).select("title", "description", "date", "tags", "path", "body", "image").first();
    }, "$7IrgMF-sfc")), __temp = await __temp, __restore(), __temp);
    if (!project.value) {
      throw createError({ statusCode: 404, message: "Proyecto no encontrado" });
    }
    useHead({
      title: (_a = project.value) == null ? void 0 : _a.title,
      script: [
        {
          innerHTML: `
        document.addEventListener('DOMContentLoaded', function() {
          const proseContent = document.querySelector('.prose');
          if (proseContent) {
            const headings = proseContent.querySelectorAll('h2, h3, h4, h5, h6');
            headings.forEach(heading => {
              const links = heading.querySelectorAll('.header-anchor');
              links.forEach(link => {
                link.parentNode?.removeChild(link);
              });
            });
          }
        });
      `,
          type: "text/javascript"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      const _component_NuxtLayout = __nuxt_component_0$2;
      const _component_ContentRenderer = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "portfolio-project" }, _attrs), createSlots({
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate((_a3 = unref(project)) == null ? void 0 : _a3.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b2 = unref(project)) == null ? void 0 : _b2.title), 1)
            ];
          }
        }),
        meta: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            if ((_a3 = unref(project)) == null ? void 0 : _a3.date) {
              _push2(`<span${_scopeId}> Publicado: ${ssrInterpolate(new Date(unref(project).date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ((_b2 = unref(project)) == null ? void 0 : _b2.date) ? (openBlock(), createBlock("span", { key: 0 }, " Publicado: " + toDisplayString(new Date(unref(project).date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(project)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, { value: unref(project) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(project) ? (openBlock(), createBlock(_component_ContentRenderer, {
                key: 0,
                value: unref(project)
              }, null, 8, ["value"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, [
        ((_a2 = unref(project)) == null ? void 0 : _a2.image) ? {
          name: "image",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2;
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$b), {
                src: unref(project).image,
                alt: `Imagen principal para ${(_a3 = unref(project)) == null ? void 0 : _a3.title}`,
                class: "w-full object-cover rounded-lg",
                loading: "lazy"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$b), {
                  src: unref(project).image,
                  alt: `Imagen principal para ${(_b2 = unref(project)) == null ? void 0 : _b2.title}`,
                  class: "w-full object-cover rounded-lg",
                  loading: "lazy"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          key: "0"
        } : void 0,
        ((_b = unref(project)) == null ? void 0 : _b.description) ? {
          name: "description",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(project).description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(project).description), 1)
              ];
            }
          }),
          key: "1"
        } : void 0,
        ((_c = unref(project)) == null ? void 0 : _c.tags) && unref(project).tags.length > 0 ? {
          name: "tags",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(project).tags, (tag) => {
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  key: tag,
                  color: "primary",
                  variant: "soft",
                  class: "mr-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(tag)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(tag), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(project).tags, (tag) => {
                  return openBlock(), createBlock(unref(_sfc_main$2), {
                    key: tag,
                    color: "primary",
                    variant: "soft",
                    class: "mr-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tag), 1)
                    ]),
                    _: 2
                  }, 1024);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
