import { _ as __nuxt_component_0 } from './ArticleCard-BecRX197.mjs';
import { defineComponent, withAsyncContext, ref, mergeProps, unref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, b as useAsyncData, u as useHead } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogList",
  __ssrInlineRender: true,
  props: {
    posts: {}
  },
  setup(__props) {
    const props = __props;
    const list = computed(() => {
      if (!Array.isArray(props.posts)) {
        return [];
      }
      return props.posts.map((p) => {
        const postPath = p.path || "/blog";
        return {
          title: p.title || "Sin t\xEDtulo",
          excerpt: p.description || "Sin descripci\xF3n",
          to: postPath,
          date: p.date || "",
          tags: p.tags || [],
          image: p.image
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArticleCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(list), (post, index2) => {
        _push(ssrRenderComponent(_component_ArticleCard, {
          key: index2,
          title: post.title,
          excerpt: post.excerpt,
          to: post.to,
          date: post.date,
          tags: post.tags,
          image: post.image
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(list).length === 0) {
        _push(`<p class="text-center text-gray-500">No hay art\xEDculos disponibles.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "recent-posts",
      () => queryCollection("blog").select("title", "description", "date", "tags", "path", "image").order("date", "DESC").limit(50).all()
    )), __temp = await __temp, __restore(), __temp);
    ref(false);
    useHead({
      title: "Blog - Tu Sitio",
      // Reemplaza 'Tu Sitio' con el nombre real de tu sitio
      meta: [
        { name: "description", content: "Explora los \xFAltimos art\xEDculos y reflexiones en mi blog personal/profesional." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogList = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 px-4" }, _attrs))} data-v-a6eeba5d><div class="max-w-6xl mx-auto" data-v-a6eeba5d><div class="mb-12 text-center relative" data-v-a6eeba5d><div class="absolute inset-0 flex items-center justify-center -z-10" data-v-a6eeba5d><div class="text-9xl font-black tracking-widest opacity-10" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-a6eeba5d>BLOG</div></div><h1 class="text-5xl font-extrabold mb-6 relative blog-title" data-v-a6eeba5d> Blog </h1><div class="w-24 h-1 mx-auto mb-6 rounded-full" style="${ssrRenderStyle({ backgroundColor: "var(--ui-primary)" })}" data-v-a6eeba5d></div><p class="text-xl max-w-2xl mx-auto mb-10" style="${ssrRenderStyle({ color: "var(--ui-text)" })}" data-v-a6eeba5d> Explora mis \xFAltimos art\xEDculos y reflexiones sobre desarrollo, tecnolog\xEDa y m\xE1s. </p></div>`);
      _push(ssrRenderComponent(_component_BlogList, { posts: unref(posts) }, null, _parent));
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a6eeba5d"]]);

export { index as default };
