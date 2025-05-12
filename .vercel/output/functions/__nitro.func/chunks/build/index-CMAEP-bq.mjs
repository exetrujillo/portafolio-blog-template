import { _ as __nuxt_component_0 } from './ProjectCard-CKLQFGdo.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as useAsyncData, u as useHead } from './server.mjs';
import { q as queryCollection } from './app-BMDqH26I.mjs';
import './Card-BQ325JBK.mjs';
import 'reka-ui';
import './Badge-CKnmMmEW.mjs';
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
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "portfolio-projects",
      () => queryCollection("portfolio").select("title", "description", "date", "path", "image", "tags").order("date", "DESC").all()
    )), __temp = await __temp, __restore(), __temp);
    const activeFilter = ref("all");
    const categories = computed(() => {
      if (!projects.value) return ["all"];
      const allTags = projects.value.flatMap((project) => project.tags || []).filter((tag, index2, self) => self.indexOf(tag) === index2);
      return ["all", ...allTags];
    });
    const filteredProjects = computed(() => {
      if (!projects.value) return [];
      if (activeFilter.value === "all") return projects.value;
      return projects.value.filter(
        (project) => {
          var _a;
          return (_a = project.tags) == null ? void 0 : _a.includes(activeFilter.value);
        }
      );
    });
    const isVisible = ref(false);
    useHead({
      title: "Portafolio - Mis Proyectos",
      meta: [
        { name: "description", content: "Explora mi colecci\xF3n de proyectos profesionales y personales." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 px-4" }, _attrs))} data-v-8980a50b><div class="max-w-6xl mx-auto" data-v-8980a50b><div class="mb-12 text-center relative" data-v-8980a50b><div class="absolute inset-0 flex items-center justify-center -z-10" data-v-8980a50b><div class="text-9xl font-black tracking-widest opacity-10" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-8980a50b>PROYECTOS</div></div><h1 class="text-5xl font-extrabold mb-6 relative portfolio-title" data-v-8980a50b> Mi Portafolio </h1><div class="w-24 h-1 mx-auto mb-6 rounded-full" style="${ssrRenderStyle({ backgroundColor: "var(--ui-primary)" })}" data-v-8980a50b></div><p class="text-xl max-w-2xl mx-auto mb-10" style="${ssrRenderStyle({ color: "var(--ui-text)" })}" data-v-8980a50b> Explora mi colecci\xF3n de proyectos creativos y t\xE9cnicos que destacan mis habilidades y experiencia. </p><div class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible), "opacity-0 translate-y-4": !unref(isVisible) }, "flex flex-wrap justify-center gap-3 mt-8"])}" style="${ssrRenderStyle({ "transition": "all 0.6s ease-out" })}" data-v-8980a50b><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<button class="${ssrRenderClass([{
          "transform scale-105": unref(activeFilter) === category,
          "opacity-70 hover:opacity-100": unref(activeFilter) !== category
        }, "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"])}" style="${ssrRenderStyle({
          backgroundColor: unref(activeFilter) === category ? "var(--ui-primary)" : "transparent",
          color: unref(activeFilter) === category ? "var(--ui-bg)" : "var(--ui-primary)",
          border: unref(activeFilter) === category ? "2px solid var(--ui-primary)" : "2px solid var(--ui-border)"
        })}" data-v-8980a50b>${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-8980a50b><!--[-->`);
      ssrRenderList(unref(filteredProjects), (project, index2) => {
        _push(`<div class="${ssrRenderClass([{
          "opacity-100 translate-y-0": unref(isVisible),
          "opacity-0 translate-y-8": !unref(isVisible)
        }, "transform transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: `${index2 * 0.1}s` })}" data-v-8980a50b>`);
        _push(ssrRenderComponent(_component_ProjectCard, {
          title: project.title,
          description: project.description,
          to: project.path,
          image: project.image,
          tags: project.tags
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(filteredProjects).length === 0) {
        _push(`<div class="text-center py-16" data-v-8980a50b><div class="text-6xl mb-4" data-v-8980a50b>\u{1F50D}</div><h3 class="text-2xl font-bold mb-2" data-v-8980a50b>No hay proyectos en esta categor\xEDa</h3><p class="text-lg" data-v-8980a50b>Intenta seleccionar otra categor\xEDa o vuelve a &quot;all&quot; para ver todos los proyectos.</p><button class="mt-6 px-6 py-2 rounded-md font-medium transition-all duration-300" style="${ssrRenderStyle({
          backgroundColor: "var(--ui-primary)",
          color: "var(--ui-bg)"
        })}" data-v-8980a50b> Ver todos los proyectos </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-20 text-center p-8 rounded-xl relative overflow-hidden" style="${ssrRenderStyle({ backgroundColor: "var(--ui-bg)", boxShadow: "0 4px 20px rgba(var(--ui-primary-rgb), 0.1)" })}" data-v-8980a50b><div class="absolute top-0 left-0 w-full h-1" style="${ssrRenderStyle({ backgroundColor: "var(--ui-accent)" })}" data-v-8980a50b></div><div class="absolute top-0 left-0 w-1 h-full" style="${ssrRenderStyle({ backgroundColor: "var(--ui-accent)" })}" data-v-8980a50b></div><div class="absolute bottom-0 right-0 w-full h-1" style="${ssrRenderStyle({ backgroundColor: "var(--ui-primary)" })}" data-v-8980a50b></div><div class="absolute top-0 right-0 w-1 h-full" style="${ssrRenderStyle({ backgroundColor: "var(--ui-primary)" })}" data-v-8980a50b></div><h2 class="text-3xl font-bold mb-4" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-8980a50b>\xBFTe interesa mi trabajo?</h2><p class="text-lg max-w-2xl mx-auto mb-8" style="${ssrRenderStyle({ color: "var(--ui-text)" })}" data-v-8980a50b> Si te gusta mi trabajo y est\xE1s pensando en un proyecto, no dudes en contactarme, en mi p\xE1gina &#39;Sobre M\xED&#39; encontrar\xE1s mis datos de contacto. </p><a href="/about" class="inline-block px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 hover:transform hover:scale-105" style="${ssrRenderStyle({
        backgroundColor: "var(--ui-primary)",
        color: "var(--ui-bg)",
        boxShadow: "0 4px 10px rgba(var(--ui-primary-rgb), 0.3)"
      })}" data-v-8980a50b> Cont\xE1ctame </a></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8980a50b"]]);

export { index as default };
