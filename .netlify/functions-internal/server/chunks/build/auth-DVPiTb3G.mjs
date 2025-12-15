import { _ as __nuxt_component_0 } from './nuxt-link-CshMov4q.mjs';
import { ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-3Fh-jQka.mjs';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';

const _sfc_main = {
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    ref("");
    ref("");
    const isLoading = ref(false);
    const error = ref("");
    const success = ref("");
    const user = ref(null);
    const providers = [
      { id: "google", name: "Google", icon: "/images/google.png" },
      { id: "github", name: "GitHub", icon: "/images/github.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex flex-col items-center justify-center bg-white px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="170"${ssrRenderAttr("src", _imports_0)} alt="Logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "170",
                src: _imports_0,
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-[400px] w-full bg-gray-50 p-6 rounded-lg shadow-md"><h1 class="text-center text-2xl font-bold mb-6">Login / Sign up</h1>`);
      if (isLoading.value) {
        _push(`<div class="flex justify-center mb-4">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "eos-icons:loading",
          class: "text-3xl animate-spin"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<p class="text-red-500 text-center mb-4">${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (success.value) {
        _push(`<p class="text-green-500 text-center mb-4">${ssrInterpolate(success.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(providers, (provider) => {
        _push(`<button class="mb-3 flex items-center justify-center gap-3 p-3 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold cursor-pointer"><img${ssrRenderAttr("src", provider.icon)}${ssrRenderAttr("alt", provider.name)} class="w-[30px]"> Login with ${ssrInterpolate(provider.name)}</button>`);
      });
      _push(`<!--]-->`);
      if (user.value) {
        _push(`<button class="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"> Logout </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=auth-DVPiTb3G.mjs.map
