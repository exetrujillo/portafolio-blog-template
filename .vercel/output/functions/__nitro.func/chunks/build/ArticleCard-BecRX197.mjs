import { _ as _export_sfc, a as __nuxt_component_0$1, c as _sfc_main$b } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    excerpt: {},
    to: {},
    date: {},
    tags: {},
    image: {}
  },
  setup(__props) {
    const props = __props;
    const formattedDate = computed(() => {
      if (!props.date) return "Fecha no disponible";
      try {
        const date = new Date(props.date);
        if (isNaN(date.getTime())) {
          console.error("ArticleCard: String de fecha inv\xE1lido:", props.date);
          return props.date;
        }
        return date.toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      } catch (e) {
        console.error("ArticleCard: Error procesando fecha:", props.date, e);
        return "Error al formatear fecha";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$b;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.to,
        class: "article-card-link block w-full group focus:outline-none cursor-pointer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="article-card-body" data-v-fea59a48${_scopeId}><div class="${ssrRenderClass([_ctx.image ? "flex gap-6 items-start" : ""])}" data-v-fea59a48${_scopeId}>`);
            if (_ctx.image) {
              _push2(`<div class="flex-shrink-0" data-v-fea59a48${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: _ctx.image,
                alt: `Imagen principal para ${_ctx.title}`,
                class: "article-card-image w-40 h-35 object-cover rounded-md",
                loading: "lazy"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="article-card-content flex-grow" data-v-fea59a48${_scopeId}><h2 class="article-card-title" data-v-fea59a48${_scopeId}>${ssrInterpolate(_ctx.title)}</h2><p class="article-card-excerpt" data-v-fea59a48${_scopeId}>${ssrInterpolate(_ctx.excerpt)}</p>`);
            if (unref(formattedDate) !== "Fecha no disponible" && unref(formattedDate) !== "Error al formatear fecha") {
              _push2(`<p class="article-card-date" data-v-fea59a48${_scopeId}> Publicado: ${ssrInterpolate(unref(formattedDate))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.tags && _ctx.tags.length) {
              _push2(`<div class="article-card-tags flex flex-wrap gap-2 mt-4" data-v-fea59a48${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.tags, (tag) => {
                _push2(`<span class="article-card-tag" data-v-fea59a48${_scopeId}>${ssrInterpolate(tag)}</span>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "article-card-body" }, [
                createVNode("div", {
                  class: [_ctx.image ? "flex gap-6 items-start" : ""]
                }, [
                  _ctx.image ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex-shrink-0"
                  }, [
                    createVNode(_component_NuxtImg, {
                      src: _ctx.image,
                      alt: `Imagen principal para ${_ctx.title}`,
                      class: "article-card-image w-40 h-35 object-cover rounded-md",
                      loading: "lazy"
                    }, null, 8, ["src", "alt"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "article-card-content flex-grow" }, [
                    createVNode("h2", { class: "article-card-title" }, toDisplayString(_ctx.title), 1),
                    createVNode("p", { class: "article-card-excerpt" }, toDisplayString(_ctx.excerpt), 1),
                    unref(formattedDate) !== "Fecha no disponible" && unref(formattedDate) !== "Error al formatear fecha" ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "article-card-date"
                    }, " Publicado: " + toDisplayString(unref(formattedDate)), 1)) : createCommentVNode("", true),
                    _ctx.tags && _ctx.tags.length ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "article-card-tags flex flex-wrap gap-2 mt-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tags, (tag) => {
                        return openBlock(), createBlock("span", {
                          key: tag,
                          class: "article-card-tag"
                        }, toDisplayString(tag), 1);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])
                ], 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fea59a48"]]);

export { __nuxt_component_0 as _ };
