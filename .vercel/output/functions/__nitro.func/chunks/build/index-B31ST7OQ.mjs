import { _ as _export_sfc, b as useAsyncData, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withAsyncContext, withCtx, createTextVNode, unref, mergeProps, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './ProjectCard-CKLQFGdo.mjs';
import { _ as __nuxt_component_0$3 } from './ArticleCard-BecRX197.mjs';
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
import './Card-BQ325JBK.mjs';
import './Badge-CKnmMmEW.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    name: { default: "Tu Nombre" },
    title: { default: "Desarrollador Web | Dise\xF1ador | Creador" },
    description: { default: "Bienvenido a mi portafolio personal. Aqu\xED encontrar\xE1s mis proyectos, art\xEDculos y m\xE1s informaci\xF3n sobre mi trabajo." },
    primaryButtonText: { default: "Ver Portafolio" },
    primaryButtonLink: { default: "/portfolio" },
    secondaryButtonText: { default: "Sobre M\xED" },
    secondaryButtonLink: { default: "/about" },
    showAvatar: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section relative overflow-hidden py-24 w-full" }, _attrs))} data-v-a7416278><div class="absolute inset-0 w-full h-full bg-dots opacity-5 z-0" data-v-a7416278></div><div class="absolute -top-20 -left-20 w-64 h-64 bg-gradient-highlight opacity-20 rounded-full blur-2xl z-0" data-v-a7416278></div><div class="absolute -bottom-32 -right-20 w-80 h-80 bg-gradient-primary opacity-20 rounded-full blur-3xl z-0" data-v-a7416278></div><div class="w-full relative z-10" data-v-a7416278><div class="max-w-5xl mx-auto text-center px-4" data-v-a7416278>`);
      if (_ctx.showAvatar) {
        _push(`<div class="avatar-container mb-8 inline-block" data-v-a7416278><div class="avatar-ring p-1 rounded-full bg-gradient-primary" data-v-a7416278><div class="bg-ui-bg rounded-full p-1" data-v-a7416278><div class="w-24 h-24 rounded-full bg-ui-border flex items-center justify-center text-2xl font-bold text-ui-primary" data-v-a7416278>${ssrInterpolate(_ctx.name.charAt(0))}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="text-5xl md:text-6xl font-bold mb-4" data-v-a7416278><span class="text-gradient-highlight" data-v-a7416278>${ssrInterpolate(_ctx.name)}</span><span class="cursor-effect" data-v-a7416278></span></h1><div class="flex flex-wrap justify-center gap-2 mb-6" data-v-a7416278><!--[-->`);
      ssrRenderList(_ctx.title.split("|"), (skill, index2) => {
        _push(`<span class="${ssrRenderClass([{ "bg-primary-light": true }, "badge px-3 py-1 rounded-full text-sm font-medium"])}" data-v-a7416278>${ssrInterpolate(skill.trim())}</span>`);
      });
      _push(`<!--]--></div><p class="text-xl mb-8 max-w-2xl mx-auto text-ui-text" data-v-a7416278>${ssrInterpolate(_ctx.description)}</p><div class="flex flex-wrap justify-center gap-4" data-v-a7416278>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.primaryButtonLink,
        class: "btn-primary px-6 py-3 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg bg-gradient-primary text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.primaryButtonText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.primaryButtonText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.secondaryButtonLink,
        class: "btn-secondary px-6 py-3 rounded-full font-medium transition-all hover:scale-105 border-2 border-ui-primary text-ui-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.secondaryButtonText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.secondaryButtonText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="scroll-indicator mt-16" data-v-a7416278><div class="scroll-mouse mx-auto" data-v-a7416278><div class="scroll-wheel" data-v-a7416278></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a7416278"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "featured-projects",
      () => queryCollection("portfolio").select("title", "description", "path", "image", "tags").limit(3).all()
    )), __temp = await __temp, __restore(), __temp);
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "recent-posts",
      () => queryCollection("blog").select("title", "description", "date", "tags", "path", "image").limit(2).all()
    )), __temp = await __temp, __restore(), __temp);
    console.log("Proyectos cargados:", projects.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ProjectCard = __nuxt_component_0$2;
      const _component_ArticleCard = __nuxt_component_0$3;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-160bc83f>`);
      _push(ssrRenderComponent(_component_HeroSection, {
        name: "Tu Nombre",
        title: "Desarrollador Web | Dise\xF1ador | Creador de Contenido",
        description: "Transformando ideas en experiencias digitales \xFAnicas. Explora mi portafolio para descubrir c\xF3mo combino dise\xF1o y desarrollo para crear soluciones web elegantes y funcionales.",
        primaryButtonText: "Ver Proyectos",
        secondaryButtonText: "Con\xF3ceme"
      }, null, _parent));
      _push(`<section class="container mx-auto py-16 px-4" data-v-160bc83f><div class="flex justify-between items-center mb-8" data-v-160bc83f><h2 class="text-3xl font-bold titulo-portafolio" data-v-160bc83f>Proyectos Destacados</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        class: "text-primary hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver todos \u2192`);
          } else {
            return [
              createTextVNode("Ver todos \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!unref(projects) || unref(projects).length === 0) {
        _push(`<div class="text-center p-6 bg-gray-100 rounded-lg" data-v-160bc83f> No se encontraron proyectos. </div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-160bc83f><!--[-->`);
        ssrRenderList(unref(projects), (project, index2) => {
          _push(ssrRenderComponent(_component_ProjectCard, {
            key: index2,
            title: project.title || "Proyecto sin t\xEDtulo",
            description: project.description || "",
            to: project.path || "/portfolio",
            image: project.image || "",
            tags: project.tags || []
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section><section class="container mx-auto py-16 px-4 bg-gray-50 dark:bg-gray-800" data-v-160bc83f><div class="flex justify-between items-center mb-8" data-v-160bc83f><h2 class="text-3xl font-bold titulo-blog" data-v-160bc83f>Art\xEDculos Recientes</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-primary hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver todos \u2192`);
          } else {
            return [
              createTextVNode("Ver todos \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-160bc83f><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(ssrRenderComponent(_component_ArticleCard, {
          key: post.path,
          title: post.title,
          excerpt: post.description || "",
          to: post.path,
          date: post.date,
          tags: post.tags,
          image: post.image
        }, null, _parent));
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-160bc83f"]]);

export { index as default };
