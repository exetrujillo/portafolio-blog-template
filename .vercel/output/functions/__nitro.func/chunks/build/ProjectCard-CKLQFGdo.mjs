import { _ as _export_sfc, a as __nuxt_component_0$1, c as _sfc_main$b } from './server.mjs';
import { _ as _sfc_main$1 } from './Card-BQ325JBK.mjs';
import { _ as _sfc_main$2 } from './Badge-CKnmMmEW.mjs';
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const excerpt = computed(() => {
      if (!props.description || props.description.trim() === "") {
        return "Haz clic para ver los detalles del proyecto.";
      }
      const maxLength = 120;
      return props.description.length > maxLength ? `${props.description.substring(0, maxLength)}...` : props.description;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UCard = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$b;
      const _component_UBadge = _sfc_main$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "project-card-link block w-full group focus:outline-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "project-card-body h-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="project-card-image-container mb-4" data-v-e055c43e${_scopeId2}>`);
                  if (__props.image) {
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: __props.image,
                      alt: __props.title,
                      class: "project-card-image w-full h-48 object-cover rounded-lg",
                      loading: "lazy"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center" data-v-e055c43e${_scopeId2}><span class="text-gray-400" data-v-e055c43e${_scopeId2}>Sin imagen</span></div>`);
                  }
                  _push3(`</div><h3 class="project-card-title" data-v-e055c43e${_scopeId2}>${ssrInterpolate(__props.title)}</h3><p class="project-card-description" data-v-e055c43e${_scopeId2}>${ssrInterpolate(excerpt.value)}</p>`);
                  if (__props.tags && __props.tags.length) {
                    _push3(`<div class="project-card-tags flex flex-wrap gap-2" data-v-e055c43e${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.tags, (tag) => {
                      _push3(ssrRenderComponent(_component_UBadge, {
                        key: tag,
                        color: "primary",
                        variant: "soft",
                        size: "sm",
                        class: "mr-1 mb-1"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(tag)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(tag), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "project-card-image-container mb-4" }, [
                      __props.image ? (openBlock(), createBlock(_component_NuxtImg, {
                        key: 0,
                        src: __props.image,
                        alt: __props.title,
                        class: "project-card-image w-full h-48 object-cover rounded-lg",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"
                      }, [
                        createVNode("span", { class: "text-gray-400" }, "Sin imagen")
                      ]))
                    ]),
                    createVNode("h3", { class: "project-card-title" }, toDisplayString(__props.title), 1),
                    createVNode("p", { class: "project-card-description" }, toDisplayString(excerpt.value), 1),
                    __props.tags && __props.tags.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "project-card-tags flex flex-wrap gap-2"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                        return openBlock(), createBlock(_component_UBadge, {
                          key: tag,
                          color: "primary",
                          variant: "soft",
                          size: "sm",
                          class: "mr-1 mb-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tag), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "project-card-body h-full" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "project-card-image-container mb-4" }, [
                    __props.image ? (openBlock(), createBlock(_component_NuxtImg, {
                      key: 0,
                      src: __props.image,
                      alt: __props.title,
                      class: "project-card-image w-full h-48 object-cover rounded-lg",
                      loading: "lazy"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"
                    }, [
                      createVNode("span", { class: "text-gray-400" }, "Sin imagen")
                    ]))
                  ]),
                  createVNode("h3", { class: "project-card-title" }, toDisplayString(__props.title), 1),
                  createVNode("p", { class: "project-card-description" }, toDisplayString(excerpt.value), 1),
                  __props.tags && __props.tags.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "project-card-tags flex flex-wrap gap-2"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                      return openBlock(), createBlock(_component_UBadge, {
                        key: tag,
                        color: "primary",
                        variant: "soft",
                        size: "sm",
                        class: "mr-1 mb-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tag), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e055c43e"]]);

export { __nuxt_component_0 as _ };
