import { _ as _export_sfc, s as __nuxt_component_2$1, g as useAppConfig, t as tv, a as __nuxt_component_0$1, n as isArrayOfArray, m as _sfc_main$a, l as _sfc_main$c, o as get, p as _sfc_main$8, q as pickLinkProps, r as _sfc_main$9 } from './server.mjs';
import { mergeProps, withCtx, createVNode, defineComponent, computed, unref, renderSlot, createTextVNode, useSlots, toRef, createBlock, createCommentVNode, openBlock, toDisplayString, resolveDynamicComponent, createSlots, Fragment, renderList, ref, provide, createElementBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderList } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent, NavigationMenuRoot, NavigationMenuList, NavigationMenuIndicator, NavigationMenuViewport, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui';
import { createReusableTemplate, reactivePick } from '@vueuse/core';
import { _ as _sfc_main$6 } from './Badge-CKnmMmEW.mjs';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const theme$2 = {
  "slots": {
    "root": "",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
  }
};
const _sfc_main$5 = {
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$2), ...((_a = appConfig.ui) == null ? void 0 : _a.collapsible) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(CollapsibleContent), {
              class: ui.value.content({ class: (_a2 = props.ui) == null ? void 0 : _a2.content })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "content")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(CollapsibleTrigger), {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(CollapsibleContent), {
                class: ui.value.content({ class: (_b = props.ui) == null ? void 0 : _b.content })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative flex gap-1.5 [&>div]:min-w-0",
    "list": "isolate min-w-0",
    "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5",
    "item": "min-w-0",
    "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingBadge": "shrink-0",
    "linkTrailingBadgeSize": "sm",
    "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childList": "",
    "childItem": "",
    "childLink": "group size-full px-3 py-2 rounded-md flex items-start gap-2 text-start",
    "childLinkWrapper": "flex flex-col items-start",
    "childLinkIcon": "size-5 shrink-0",
    "childLinkLabel": "font-semibold text-sm relative inline-flex",
    "childLinkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childLinkDescription": "text-sm text-muted",
    "separator": "px-2 h-px bg-border",
    "viewportWrapper": "absolute top-full left-0 flex w-full",
    "viewport": "relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]",
    "content": "absolute top-0 left-0 w-full sm:w-auto",
    "indicator": "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
    "arrow": "relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-[1] rounded-xs"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-primary",
        "childLink": "focus-visible:outline-primary"
      },
      "secondary": {
        "link": "focus-visible:before:ring-secondary",
        "childLink": "focus-visible:outline-secondary"
      },
      "success": {
        "link": "focus-visible:before:ring-success",
        "childLink": "focus-visible:outline-success"
      },
      "info": {
        "link": "focus-visible:before:ring-info",
        "childLink": "focus-visible:outline-info"
      },
      "warning": {
        "link": "focus-visible:before:ring-warning",
        "childLink": "focus-visible:outline-warning"
      },
      "error": {
        "link": "focus-visible:before:ring-error",
        "childLink": "focus-visible:outline-error"
      },
      "neutral": {
        "link": "focus-visible:before:ring-inverted",
        "childLink": "focus-visible:outline-inverted"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": "",
      "link": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center justify-between",
        "list": "flex items-center",
        "item": "py-2",
        "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        "childList": "grid p-2"
      },
      "vertical": {
        "root": "flex-col",
        "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0"
      }
    },
    "contentOrientation": {
      "horizontal": {
        "viewportWrapper": "justify-center",
        "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]"
      },
      "vertical": {
        "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)"
      }
    },
    "active": {
      "true": {
        "childLink": "bg-elevated text-highlighted",
        "childLinkIcon": "text-default"
      },
      "false": {
        "link": "text-muted",
        "linkLeadingIcon": "text-dimmed",
        "childLink": [
          "hover:bg-elevated/50 text-default hover:text-highlighted",
          "transition-colors"
        ],
        "childLinkIcon": [
          "text-dimmed group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "highlight": {
      "true": ""
    },
    "level": {
      "true": ""
    },
    "collapsed": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "contentOrientation": "horizontal",
      "class": {
        "childList": "grid-cols-2 gap-2"
      }
    },
    {
      "orientation": "horizontal",
      "contentOrientation": "vertical",
      "class": {
        "childList": "gap-1",
        "content": "w-60"
      }
    },
    {
      "orientation": "horizontal",
      "highlight": true,
      "class": {
        "link": [
          "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "orientation": "vertical",
      "highlight": true,
      "level": true,
      "class": {
        "link": [
          "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "class": {
        "link": [
          "hover:text-highlighted hover:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": true,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-elevated/50"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": false,
      "active": false,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-elevated/50"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": false,
      "class": {
        "link": "before:bg-elevated"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": true,
      "class": {
        "link": [
          "hover:before:bg-elevated/50",
          "before:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "class": {
        "link": [
          "hover:text-highlighted",
          "transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-primary"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-secondary"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-success"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-info"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-warning"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-error"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-inverted"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": false,
      "class": {
        "childList": "ms-5 border-s border-default",
        "childItem": "ps-1.5 -ms-px"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": true,
      "class": {
        "link": "px-1.5"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary",
    "variant": "pill"
  }
};
const _sfc_main$4 = {
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    trailingIcon: { type: String, required: false },
    externalIcon: { type: [Boolean, String], required: false, default: true },
    items: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    collapsed: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    content: { type: Object, required: false },
    contentOrientation: { type: null, required: false, default: "horizontal" },
    arrow: { type: Boolean, required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    modelValue: { type: String, required: false },
    defaultValue: { type: String, required: false },
    delayDuration: { type: Number, required: false, default: 0 },
    disableClickTrigger: { type: Boolean, required: false },
    disableHoverTrigger: { type: Boolean, required: false },
    skipDelayDuration: { type: Number, required: false },
    disablePointerLeaveClose: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(computed(() => ({
      as: props.as,
      modelValue: props.modelValue,
      defaultValue: props.defaultValue,
      delayDuration: props.delayDuration,
      skipDelayDuration: props.skipDelayDuration,
      orientation: props.orientation,
      disableClickTrigger: props.disableClickTrigger,
      disableHoverTrigger: props.disableHoverTrigger,
      disablePointerLeaveClose: props.disablePointerLeaveClose,
      unmountOnHide: props.unmountOnHide
    })), emits);
    const contentProps = toRef(() => props.content);
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: Object,
        index: Number,
        level: Number
      }
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.navigationMenu) || {} })({
        orientation: props.orientation,
        contentOrientation: props.contentOrientation,
        collapsed: props.collapsed,
        color: props.color,
        variant: props.variant,
        highlight: props.highlight,
        highlightColor: props.highlightColor || props.color
      });
    });
    const lists = computed(
      () => {
        var _a;
        return ((_a = props.items) == null ? void 0 : _a.length) ? isArrayOfArray(props.items) ? props.items : [props.items] : [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index
            }, () => {
              var _a2, _b, _c, _d, _e;
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index
              }, () => {
                var _a3, _b2, _c2;
                if (item.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$a, mergeProps({
                    size: ((_a3 = props.ui) == null ? void 0 : _a3.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                  }, item.avatar, {
                    class: ui.value.linkLeadingAvatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatar, active, disabled: !!item.disabled })
                  }), null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(_sfc_main$c, {
                    name: item.icon,
                    class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon, active, disabled: !!item.disabled })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if ((!__props.collapsed || __props.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_a2 = props.ui) == null ? void 0 : _a2.linkLabel }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && __props.externalIcon !== false) {
                  _push2(ssrRenderComponent(_sfc_main$c, {
                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                    class: ui.value.linkLabelExternalIcon({ class: (_b = props.ui) == null ? void 0 : _b.linkLabelExternalIcon, active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((!__props.collapsed || __props.orientation !== "vertical") && (item.badge || __props.orientation === "horizontal" && (((_c = item.children) == null ? void 0 : _c.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkTrailing({ class: (_e = props.ui) == null ? void 0 : _e.linkTrailing }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                  item,
                  active,
                  index
                }, () => {
                  var _a3, _b2, _c2, _d2, _e2, _f;
                  if (item.badge) {
                    _push2(ssrRenderComponent(_sfc_main$6, mergeProps({
                      color: "neutral",
                      variant: "outline",
                      size: ((_a3 = props.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                    }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                      class: ui.value.linkTrailingBadge({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadge })
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (__props.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length)) {
                    _push2(ssrRenderComponent(_sfc_main$c, {
                      name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                      class: ui.value.linkTrailingIcon({ class: (_e2 = props.ui) == null ? void 0 : _e2.linkTrailingIcon, active })
                    }, null, _parent2, _scopeId));
                  } else if (item.trailingIcon) {
                    _push2(ssrRenderComponent(_sfc_main$c, {
                      name: item.trailingIcon,
                      class: ui.value.linkTrailingIcon({ class: (_f = props.ui) == null ? void 0 : _f.linkTrailingIcon, active })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index
              }, () => {
                var _a2, _b, _c, _d, _e;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index
                  }, () => {
                    var _a3, _b2, _c2;
                    return [
                      item.avatar ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
                        key: 0,
                        size: ((_a3 = props.ui) == null ? void 0 : _a3.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                      }, item.avatar, {
                        class: ui.value.linkLeadingAvatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatar, active, disabled: !!item.disabled })
                      }), null, 16, ["size", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$c, {
                        key: 1,
                        name: item.icon,
                        class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon, active, disabled: !!item.disabled })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  (!__props.collapsed || __props.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.linkLabel({ class: (_a2 = props.ui) == null ? void 0 : _a2.linkLabel })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$c, {
                      key: 0,
                      name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                      class: ui.value.linkLabelExternalIcon({ class: (_b = props.ui) == null ? void 0 : _b.linkLabelExternalIcon, active })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  (!__props.collapsed || __props.orientation !== "vertical") && (item.badge || __props.orientation === "horizontal" && (((_c = item.children) == null ? void 0 : _c.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: ui.value.linkTrailing({ class: (_e = props.ui) == null ? void 0 : _e.linkTrailing })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index
                    }, () => {
                      var _a3, _b2, _c2, _d2, _e2, _f;
                      return [
                        item.badge ? (openBlock(), createBlock(_sfc_main$6, mergeProps({
                          key: 0,
                          color: "neutral",
                          variant: "outline",
                          size: ((_a3 = props.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                        }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                          class: ui.value.linkTrailingBadge({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadge })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                        __props.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) ? (openBlock(), createBlock(_sfc_main$c, {
                          key: 1,
                          name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                          class: ui.value.linkTrailingIcon({ class: (_e2 = props.ui) == null ? void 0 : _e2.linkTrailingIcon, active })
                        }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$c, {
                          key: 2,
                          name: item.trailingIcon,
                          class: ui.value.linkTrailingIcon({ class: (_f = props.ui) == null ? void 0 : _f.linkTrailingIcon, active })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, level = 0 }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && ((_a2 = item.children) == null ? void 0 : _a2.length) && !__props.collapsed ? _sfc_main$5 : unref(NavigationMenuItem)), {
              as: "li",
              value: item.value || String(index),
              "default-open": item.defaultOpen,
              "unmount-on-hide": __props.orientation === "vertical" && ((_b = item.children) == null ? void 0 : _b.length) && !__props.collapsed ? __props.unmountOnHide : void 0,
              open: item.open
            }, createSlots({
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c2, _d2;
                if (_push3) {
                  if (__props.orientation === "vertical" && item.type === "label") {
                    _push3(`<div class="${ssrRenderClass(ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ReuseLinkTemplate), {
                      item,
                      index
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (item.type !== "label") {
                    _push3(ssrRenderComponent(_sfc_main$8, mergeProps(__props.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !__props.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3, _c3, _d3, _e2, _f2;
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a4 = item.children) == null ? void 0 : _a4.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              var _a5, _b4;
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$9, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, 8, ["item", "active", "index"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$9, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_b4 = props.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          if (__props.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"])) {
                            _push4(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(contentProps.value, {
                              class: ui.value.content({ class: (_c3 = props.ui) == null ? void 0 : _c3.content })
                            }), {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                    item,
                                    active,
                                    index
                                  }, () => {
                                    var _a5;
                                    _push5(`<ul class="${ssrRenderClass(ui.value.childList({ class: (_a5 = props.ui) == null ? void 0 : _a5.childList }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.children, (childItem, childIndex) => {
                                      var _a6;
                                      _push5(`<li class="${ssrRenderClass(ui.value.childItem({ class: (_a6 = props.ui) == null ? void 0 : _a6.childItem }))}"${_scopeId4}>`);
                                      _push5(ssrRenderComponent(_sfc_main$8, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                        default: withCtx(({ active: childActive, ...childSlotProps }, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                                var _a7, _b4;
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(_sfc_main$9, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx((_4, _push8, _parent8, _scopeId7) => {
                                                      var _a8, _b5, _c4, _d4, _e3, _f3, _g, _h, _i, _j;
                                                      if (_push8) {
                                                        if (childItem.icon) {
                                                          _push8(ssrRenderComponent(_sfc_main$c, {
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`<div class="${ssrRenderClass(ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper }))}"${_scopeId7}><p class="${ssrRenderClass(ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive }))}"${_scopeId7}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                        if (childItem.target === "_blank" && __props.externalIcon !== false) {
                                                          _push8(ssrRenderComponent(_sfc_main$c, {
                                                            name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                            class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</p>`);
                                                        if (childItem.description) {
                                                          _push8(`<p class="${ssrRenderClass(ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive }))}"${_scopeId7}>${ssrInterpolate(childItem.description)}</p>`);
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</div>`);
                                                      } else {
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$c, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_f3 = props.ui) == null ? void 0 : _f3.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_g = props.ui) == null ? void 0 : _g.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_h = props.ui) == null ? void 0 : _h.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$c, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_i = props.ui) == null ? void 0 : _i.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_j = props.ui) == null ? void 0 : _j.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(_sfc_main$9, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_b4 = props.ui) == null ? void 0 : _b4.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a8, _b5, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$c, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$c, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a7;
                                                  return [
                                                    createVNode(_sfc_main$9, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a8, _b4, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$c, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$c, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(`</li>`);
                                    });
                                    _push5(`<!--]--></ul>`);
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active,
                                      index
                                    }, () => {
                                      var _a5;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: (_a5 = props.ui) == null ? void 0 : _a5.childList })
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a6;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: (_a6 = props.ui) == null ? void 0 : _a6.childItem })
                                            }, [
                                              createVNode(_sfc_main$8, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a7;
                                                      return [
                                                        createVNode(_sfc_main$9, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a8, _b4, _c4, _d4, _e3;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$c, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("div", {
                                                                class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                              }, [
                                                                createVNode("p", {
                                                                  class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$c, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2),
                                                                childItem.description ? (openBlock(), createBlock("p", {
                                                                  key: 0,
                                                                  class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                                }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_d3 = item.children) == null ? void 0 : _d3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                              "as-child": "",
                              active: active || item.active,
                              disabled: item.disabled,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => {
                                var _a5;
                                return [
                                  createVNode(_sfc_main$9, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ];
                              }),
                              _: 2
                            }, 1064, ["active", "disabled", "onSelect"])),
                            __props.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                              class: ui.value.content({ class: (_f2 = props.ui) == null ? void 0 : _f2.content })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active,
                                  index
                                }, () => {
                                  var _a5;
                                  return [
                                    createVNode("ul", {
                                      class: ui.value.childList({ class: (_a5 = props.ui) == null ? void 0 : _a5.childList })
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                        var _a6;
                                        return openBlock(), createBlock("li", {
                                          key: childIndex,
                                          class: ui.value.childItem({ class: (_a6 = props.ui) == null ? void 0 : _a6.childItem })
                                        }, [
                                          createVNode(_sfc_main$8, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                            default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a7;
                                                  return [
                                                    createVNode(_sfc_main$9, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a8, _b4, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$c, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$c, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ], 2);
                                      }), 128))
                                    ], 2)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.orientation === "vertical" && item.type === "label" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: (_c2 = props.ui) == null ? void 0 : _c2.label })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$8, mergeProps({ key: 1 }, __props.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) && !__props.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a4, _b3, _c3;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a4 = item.children) == null ? void 0 : _a4.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a5;
                              return [
                                createVNode(_sfc_main$9, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          __props.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: (_c3 = props.ui) == null ? void 0 : _c3.content })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active,
                                index
                              }, () => {
                                var _a5;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: (_a5 = props.ui) == null ? void 0 : _a5.childList })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a6;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: (_a6 = props.ui) == null ? void 0 : _a6.childItem })
                                      }, [
                                        createVNode(_sfc_main$8, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a7;
                                                return [
                                                  createVNode(_sfc_main$9, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a8, _b4, _c4, _d3, _e2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$c, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$c, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: (_d3 = props.ui) == null ? void 0 : _d3.childLinkLabelExternalIcon, active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: (_e2 = props.ui) == null ? void 0 : _e2.childLinkDescription, active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              __props.orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !__props.collapsed ? {
                name: "content",
                fn: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2;
                  if (_push3) {
                    _push3(`<ul class="${ssrRenderClass(ui.value.childList({ class: (_a3 = props.ui) == null ? void 0 : _a3.childList }))}"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.children, (childItem, childIndex) => {
                      var _a4;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: childIndex,
                        item: childItem,
                        index: childIndex,
                        level: level + 1,
                        class: ui.value.childItem({ class: (_a4 = props.ui) == null ? void 0 : _a4.childItem })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", {
                        class: ui.value.childList({ class: (_b2 = props.ui) == null ? void 0 : _b2.childList })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a4;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            class: ui.value.childItem({ class: (_a4 = props.ui) == null ? void 0 : _a4.childItem })
                          }, null, 8, ["item", "index", "level", "class"]);
                        }), 128))
                      ], 2)
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ])), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !__props.collapsed ? _sfc_main$5 : unref(NavigationMenuItem)), {
                as: "li",
                value: item.value || String(index),
                "default-open": item.defaultOpen,
                "unmount-on-hide": __props.orientation === "vertical" && ((_e = item.children) == null ? void 0 : _e.length) && !__props.collapsed ? __props.unmountOnHide : void 0,
                open: item.open
              }, createSlots({
                default: withCtx(() => {
                  var _a3, _b2;
                  return [
                    __props.orientation === "vertical" && item.type === "label" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$8, mergeProps({ key: 1 }, __props.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !__props.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a4, _b3, _c2;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a4 = item.children) == null ? void 0 : _a4.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a5;
                              return [
                                createVNode(_sfc_main$9, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          __props.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: (_c2 = props.ui) == null ? void 0 : _c2.content })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active,
                                index
                              }, () => {
                                var _a5;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: (_a5 = props.ui) == null ? void 0 : _a5.childList })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a6;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: (_a6 = props.ui) == null ? void 0 : _a6.childItem })
                                      }, [
                                        createVNode(_sfc_main$8, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a7;
                                                return [
                                                  createVNode(_sfc_main$9, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a8, _b4, _c3, _d2, _e2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$c, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: (_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: (_c3 = props.ui) == null ? void 0 : _c3.childLinkLabel, active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$c, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: (_d2 = props.ui) == null ? void 0 : _d2.childLinkLabelExternalIcon, active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: (_e2 = props.ui) == null ? void 0 : _e2.childLinkDescription, active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, [
                __props.orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) && !__props.collapsed ? {
                  name: "content",
                  fn: withCtx(() => {
                    var _a3;
                    return [
                      createVNode("ul", {
                        class: ui.value.childList({ class: (_a3 = props.ui) == null ? void 0 : _a3.childList })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a4;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            class: ui.value.childItem({ class: (_a4 = props.ui) == null ? void 0 : _a4.childItem })
                          }, null, 8, ["item", "index", "level", "class"]);
                        }), 128))
                      ], 2)
                    ];
                  }),
                  key: "0"
                } : void 0
              ]), 1032, ["value", "default-open", "unmount-on-hide", "open"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(rootProps), {
        "data-collapsed": __props.collapsed,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (list, listIndex) => {
              var _a3, _b2;
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(NavigationMenuList), {
                class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(list, (item, index) => {
                      var _a4;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: `list-${listIndex}-${index}`,
                        item,
                        index,
                        class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a4;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (__props.orientation === "vertical" && listIndex < lists.value.length - 1) {
                _push2(`<div class="${ssrRenderClass(ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator }))}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push2, _parent2, _scopeId);
            if (__props.orientation === "horizontal") {
              _push2(`<div class="${ssrRenderClass(ui.value.viewportWrapper({ class: (_a2 = props.ui) == null ? void 0 : _a2.viewportWrapper }))}"${_scopeId}>`);
              if (__props.arrow) {
                _push2(ssrRenderComponent(unref(NavigationMenuIndicator), {
                  class: ui.value.indicator({ class: (_b = props.ui) == null ? void 0 : _b.indicator })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a3, _b2;
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass(ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow }))}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(NavigationMenuViewport), {
                class: ui.value.viewport({ class: (_c = props.ui) == null ? void 0 : _c.viewport })
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "list-leading"),
              (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
                var _a3, _b2;
                return openBlock(), createBlock(Fragment, {
                  key: `list-${listIndex}`
                }, [
                  createVNode(unref(NavigationMenuList), {
                    class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a4;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  __props.orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator })
                  }, null, 2)) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              renderSlot(_ctx.$slots, "list-trailing"),
              __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.viewportWrapper({ class: (_d = props.ui) == null ? void 0 : _d.viewportWrapper })
              }, [
                __props.arrow ? (openBlock(), createBlock(unref(NavigationMenuIndicator), {
                  key: 0,
                  class: ui.value.indicator({ class: (_e = props.ui) == null ? void 0 : _e.indicator })
                }, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      createVNode("div", {
                        class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                      }, null, 2)
                    ];
                  }),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true),
                createVNode(unref(NavigationMenuViewport), {
                  class: ui.value.viewport({ class: (_f = props.ui) == null ? void 0 : _f.viewport })
                }, null, 8, ["class"])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_2 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      { label: "Inicio", to: "/" },
      { label: "Portafolio", to: "/portfolio" },
      { label: "Blog", to: "/blog" },
      { label: "Sobre m\xED", to: "/about" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UNavigationMenu = _sfc_main$4;
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-58269a46><div class="flex justify-between items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-v-58269a46>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo flex-shrink-0",
        style: { color: "var(--ui-primary)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`MiLogo`);
          } else {
            return [
              createTextVNode("MiLogo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UNavigationMenu, {
        items,
        orientation: "horizontal",
        class: "flex-1 text-right nav-menu"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="theme-toggle ml-4 flex-shrink-0 size-10" data-v-58269a46${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "theme-toggle ml-4 flex-shrink-0 size-10" })
            ];
          }
        })
      }, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-58269a46"]]);
const theme = {
  "base": "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};
const _sfc_main$2 = {
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.container) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-bb4b7815><div class="container mx-auto px-4" data-v-bb4b7815><p class="text-center" data-v-bb4b7815>\xA9 ${ssrInterpolate(unref(currentYear))} Tu Nombre. Todos los derechos reservados. <span class="separator" data-v-bb4b7815>|</span> <a href="mailto:tu@correo.com" class="contact-link" data-v-bb4b7815>Contacto</a></p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bb4b7815"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_UContainer = _sfc_main$2;
  const _component_NuxtPage = __nuxt_component_2$1;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen bg-ui-bg text-ui-text" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<main class="flex-grow">`);
  _push(ssrRenderComponent(_component_UContainer, { class: "py-4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
