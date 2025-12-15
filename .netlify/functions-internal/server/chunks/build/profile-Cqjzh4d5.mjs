import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-3Fh-jQka.mjs';
import { u as useUserStore } from './user-CmAlD9lZ.mjs';
import { Icon } from '@iconify/vue';
import { _ as __nuxt_component_0 } from './nuxt-link-CshMov4q.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import './server.mjs';
import 'vue-router';

const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useUserStore();
    const selectedFile = ref(null);
    const avatarUrl = ref("/images/default-avatar.png");
    const isUploading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col items-center py-10" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), {
        to: "/",
        class: "mb-6 flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Site Logo" class="w-36"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Site Logo",
                class: "w-36"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(store).user) {
        _push(`<div class="max-w-md w-full bg-white p-6 rounded-lg shadow-md text-center"><h1 class="text-2xl font-bold mb-6">My Profile</h1><p class="font-semibold text-lg mb-4">${ssrInterpolate(unref(store).user.email)}</p><div class="relative w-32 h-32 mx-auto mb-4"><img${ssrRenderAttr("src", avatarUrl.value)} class="w-32 h-32 rounded-full border-2 border-gray-300 object-cover" alt="Avatar"><label for="avatarInput" class="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "ph:pencil-simple",
          width: "20"
        }, null, _parent));
        _push(`</label></div><input id="avatarInput" type="file" class="hidden" accept="image/*"><div class="flex justify-center gap-4 mb-4"><button${ssrIncludeBooleanAttr(!selectedFile.value || isUploading.value) ? " disabled" : ""} class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer">${ssrInterpolate(isUploading.value ? "Uploading..." : "Save Image")}</button><button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"> Delete Image </button>`);
        _push(ssrRenderComponent(unref(__nuxt_component_0), {
          to: "/",
          class: "font-bold bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home Page `);
            } else {
              return [
                createTextVNode(" Home Page ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="text-center py-10"><p class="text-lg font-semibold text-gray-500">You are not logged in.</p>`);
        _push(ssrRenderComponent(unref(__nuxt_component_0), {
          to: "/",
          class: "text-blue-500 hover:underline mt-4 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Go to Home`);
            } else {
              return [
                createTextVNode("Go to Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-Cqjzh4d5.mjs.map
