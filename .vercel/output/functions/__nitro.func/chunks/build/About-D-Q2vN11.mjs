import { _ as _sfc_main$1 } from './Card-BQ325JBK.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from './server.mjs';
import 'reka-ui';
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
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    useHead({
      title: "Sobre M\xED - Mi Perfil",
      meta: [
        { name: "description", content: "Conoce m\xE1s sobre mi experiencia, habilidades y trayectoria profesional." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))} data-v-a712a667><div class="mb-12 text-center relative" data-v-a712a667><h1 class="text-5xl font-extrabold mb-6 relative about-title" data-v-a712a667> Sobre M\xED </h1></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-a712a667><div class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible), "opacity-0 translate-y-8": !unref(isVisible) }, "md:col-span-1 transform transition-all duration-500"])}" data-v-a712a667>`);
      _push(ssrRenderComponent(_component_UCard, {
        class: "mb-6 transition-all duration-500 hover:transform hover:translateY(-5px)",
        style: { boxShadow: "0 4px 20px rgba(var(--ui-primary-rgb), 0.1)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center mb-4" data-v-a712a667${_scopeId}><div class="w-32 h-32 rounded-full bg-(--ui-bg-elevated) flex items-center justify-center text-3xl border-2" style="${ssrRenderStyle({ borderColor: "var(--ui-primary)" })}" data-v-a712a667${_scopeId}> \u{1F464} </div></div><h2 class="text-2xl font-semibold mb-2 text-center" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-a712a667${_scopeId}>Tu Nombre</h2><p class="text-center mb-4" data-v-a712a667${_scopeId}>Desarrollador Web</p><div class="space-y-2 mt-6" data-v-a712a667${_scopeId}><div class="flex items-center" data-v-a712a667${_scopeId}><span class="font-semibold mr-2" data-v-a712a667${_scopeId}>Email:</span><a href="mailto:tu@email.com" class="hover:underline text-(--ui-primary) transition-all duration-300 hover:translate-x-1 inline-block" data-v-a712a667${_scopeId}>tu@email.com</a></div><div class="flex items-center" data-v-a712a667${_scopeId}><span class="font-semibold mr-2" data-v-a712a667${_scopeId}>Ubicaci\xF3n:</span><span data-v-a712a667${_scopeId}>Tu Ciudad, Pa\xEDs</span></div></div><div class="flex justify-center space-x-4 mt-6" data-v-a712a667${_scopeId}><a href="#" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)" data-v-a712a667${_scopeId}><span data-v-a712a667${_scopeId}>\u{1F426}</span></a><a href="#" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)" data-v-a712a667${_scopeId}><span data-v-a712a667${_scopeId}>\u{1F4BC}</span></a><a href="#" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)" data-v-a712a667${_scopeId}><span data-v-a712a667${_scopeId}>\u{1F4F7}</span></a><a href="#" class="text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)" data-v-a712a667${_scopeId}><span data-v-a712a667${_scopeId}>\u{1F419}</span></a></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center mb-4" }, [
                createVNode("div", {
                  class: "w-32 h-32 rounded-full bg-(--ui-bg-elevated) flex items-center justify-center text-3xl border-2",
                  style: { borderColor: "var(--ui-primary)" }
                }, " \u{1F464} ")
              ]),
              createVNode("h2", {
                class: "text-2xl font-semibold mb-2 text-center",
                style: { color: "var(--ui-primary)" }
              }, "Tu Nombre"),
              createVNode("p", { class: "text-center mb-4" }, "Desarrollador Web"),
              createVNode("div", { class: "space-y-2 mt-6" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("span", { class: "font-semibold mr-2" }, "Email:"),
                  createVNode("a", {
                    href: "mailto:tu@email.com",
                    class: "hover:underline text-(--ui-primary) transition-all duration-300 hover:translate-x-1 inline-block"
                  }, "tu@email.com")
                ]),
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("span", { class: "font-semibold mr-2" }, "Ubicaci\xF3n:"),
                  createVNode("span", null, "Tu Ciudad, Pa\xEDs")
                ])
              ]),
              createVNode("div", { class: "flex justify-center space-x-4 mt-6" }, [
                createVNode("a", {
                  href: "#",
                  class: "text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)"
                }, [
                  createVNode("span", null, "\u{1F426}")
                ]),
                createVNode("a", {
                  href: "#",
                  class: "text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)"
                }, [
                  createVNode("span", null, "\u{1F4BC}")
                ]),
                createVNode("a", {
                  href: "#",
                  class: "text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)"
                }, [
                  createVNode("span", null, "\u{1F4F7}")
                ]),
                createVNode("a", {
                  href: "#",
                  class: "text-2xl transition-all duration-300 hover:transform hover:scale-110 hover:text-(--ui-primary)"
                }, [
                  createVNode("span", null, "\u{1F419}")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-2" data-v-a712a667><section class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible), "opacity-0 translate-y-8": !unref(isVisible) }, "mb-8 transform transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: "0.1s" })}" data-v-a712a667><h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-a712a667>Biograf\xEDa</h2><p class="mb-4" data-v-a712a667> Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Con experiencia en tecnolog\xEDas frontend y backend, me especializo en construir aplicaciones web modernas. </p><p data-v-a712a667> Cuando no estoy programando, disfruto de [tus hobbies o intereses]. Siempre estoy buscando nuevos desaf\xEDos y oportunidades para aprender y crecer profesionalmente. </p></section><section class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible), "opacity-0 translate-y-8": !unref(isVisible) }, "mb-8 transform transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: "0.2s" })}" data-v-a712a667><h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-a712a667>Habilidades</h2><div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-v-a712a667><!--[-->`);
      ssrRenderList(["JavaScript/TypeScript", "Vue.js/Nuxt", "HTML/CSS", "Tailwind CSS", "Node.js", "Git"], (skill, index) => {
        _push(`<div class="transition-all duration-300 hover:transform hover:translateY(-2px) p-3 rounded-md" style="${ssrRenderStyle({
          backgroundColor: "var(--ui-bg-elevated)",
          border: "1px solid var(--ui-border)",
          transitionDelay: `${0.05 * index}s`
        })}" data-v-a712a667>${ssrInterpolate(skill)}</div>`);
      });
      _push(`<!--]--></div></section><section class="${ssrRenderClass([{ "opacity-100 translate-y-0": unref(isVisible), "opacity-0 translate-y-8": !unref(isVisible) }, "transform transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: "0.3s" })}" data-v-a712a667><h2 class="text-2xl font-bold mb-4 border-b border-(--ui-border) pb-2" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-a712a667>Experiencia</h2><div class="space-y-6" data-v-a712a667><div class="transition-all duration-500 hover:transform hover:translateY(-2px) p-4 rounded-md" style="${ssrRenderStyle({ backgroundColor: "var(--ui-bg)", boxShadow: "0 2px 10px rgba(var(--ui-primary-rgb), 0.05)" })}" data-v-a712a667><h3 class="text-xl font-semibold" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-a712a667>Desarrollador Frontend</h3><p class="text-sm text-(--ui-text-muted)" data-v-a712a667>Empresa XYZ \u2022 2020 - Presente</p><p class="mt-2" data-v-a712a667> Desarrollo de aplicaciones web utilizando Vue.js, Nuxt y otras tecnolog\xEDas modernas. Implementaci\xF3n de dise\xF1os responsivos y optimizaci\xF3n de rendimiento. </p></div><div class="transition-all duration-500 hover:transform hover:translateY(-2px) p-4 rounded-md" style="${ssrRenderStyle({ backgroundColor: "var(--ui-bg)", boxShadow: "0 2px 10px rgba(var(--ui-primary-rgb), 0.05)" })}" data-v-a712a667><h3 class="text-xl font-semibold" style="${ssrRenderStyle({ color: "var(--ui-primary)" })}" data-v-a712a667>Desarrollador Web Junior</h3><p class="text-sm text-(--ui-text-muted)" data-v-a712a667>Empresa ABC \u2022 2018 - 2020</p><p class="mt-2" data-v-a712a667> Mantenimiento y desarrollo de sitios web corporativos. Colaboraci\xF3n en proyectos de e-commerce y aplicaciones internas. </p></div></div></section></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a712a667"]]);

export { About as default };
