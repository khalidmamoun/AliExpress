import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-3Fh-jQka.mjs';
import { Icon } from '@iconify/vue';
import { s as supabase } from './supabaseClient-5e-HC0v9.mjs';
import { useRouter } from 'vue-router';
import { u as useUserStore } from './user-CmAlD9lZ.mjs';
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
import '@supabase/supabase-js';
import 'pinia';
import './server.mjs';

const user = ref(null);
const router = useRouter();
function useAuth() {
  const fetchUser = async () => {
    const { data } = await supabase.auth.getSession();
    user.value = data.session?.user || null;
  };
  const logout = async () => {
    await supabase.auth.signOut();
    user.value = null;
    router.push("/");
  };
  return { user, logout, fetchUser };
}
const _sfc_main = {
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { user: user2 } = useAuth();
    const userStore = useUserStore();
    const isAccountMenu = ref(false);
    const isCartHover = ref(false);
    const isSearching = ref(false);
    const searchItem = ref("");
    const orders = ref([
      { id: 1, name: "Wireless Mouse", price: "$25", status: "Delivered", date: "2025-12-01" },
      { id: 2, name: "Mechanical Keyboard", price: "$75", status: "Processing", date: "2025-12-03" },
      { id: 3, name: "HD Monitor", price: "$150", status: "Shipped", date: "2025-12-05" }
    ]);
    const avatar = ref("/images/default-avatar.png");
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user?.user_metadata?.avatar) {
        avatar.value = session.user.user_metadata.avatar + "?t=" + (/* @__PURE__ */ new Date()).getTime();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="TopMenu" class="w-full bg-[#FAFAFA] md:block hidden"><ul class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 max-w-[1200px] mx-auto"><li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Sell on AliExpress</li><li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Cookie preferences</li><li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Help</li><li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Buyer Protection</li><li class="flex items-center gap-1 px-3 hover:text-[#FF46F6] cursor-pointer border-r-0">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ic:sharp-install-mobile",
        width: "17"
      }, null, _parent));
      _push(` App </li><li class="${ssrRenderClass([isAccountMenu.value ? "font-bold bg-white border border-[#FF46F6] z-40 rounded-b shadow-md text-[#FF46F6] p-2 rounded-md" : "border border-transparent text-red-500 font-bold", "relative flex items-center px-2 gap-1 cursor-pointer select-none"])}">`);
      if (unref(user2)) {
        _push(`<img${ssrRenderAttr("src", avatar.value)} class="w-7 h-7 rounded-full border border-gray-200 object-cover">`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "ph:user-thin",
          width: "17"
        }, null, _parent));
        _push(` Account <!--]-->`);
      }
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:chevron-down",
        width: "15",
        class: ["ml-1 transition-transform", isAccountMenu.value ? "rotate-180" : "rotate-0"]
      }, null, _parent));
      if (isAccountMenu.value) {
        _push(`<div class="absolute bg-white w-[220px] text-[#333333] z-50 top-[38px] left-[-83px] border border-gray-200 rounded-lg shadow-md mt-5">`);
        if (!unref(user2)) {
          _push(`<div class="flex items-center gap-1 px-3 mb-3">`);
          _push(ssrRenderComponent(unref(__nuxt_component_0), {
            to: "/auth",
            class: "bg-[#FF4646] w-full text-white text-center p-2 rounded-sm font-semibold text-[16px] mt-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Login / Sign up `);
              } else {
                return [
                  createTextVNode(" Login / Sign up ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="text-center font-semibold py-3"><div class="bg-red-500 p-2 text-white font-bold mb-2"> Hello, ${ssrInterpolate(unref(user2).email)}</div><div class="flex flex-col gap-2 mb-3 px-2"><button class="text-gray-700 font-black cursor-pointer px-2 py-1 rounded border hover:bg-gray-100"> Switch to Google </button><button class="text-gray-700 font-black cursor-pointer px-2 py-1 rounded border hover:bg-gray-100"> Switch to GitHub </button></div><ul><li class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 cursor-pointer border border-gray-200 font-bold"> My Profile </li><li class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 cursor-pointer font-bold border-b border-gray-200"> My Orders </li><li class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 cursor-pointer font-bold"> Log out </li></ul></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></div><div class="w-full min-h-screen"><div class="flex items-center w-full bg-white border-b border-gray-200"><div class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 mx-auto items-center">`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="170"${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "170",
                src: _imports_0,
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-[750px] w-full md:block hidden relative"><div class="flex items-center border-2 border-[#FF4646] rounded-md w-full"><input${ssrRenderAttr("value", searchItem.value)} class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" placeholder="Search..." type="text">`);
      if (isSearching.value) {
        _push(ssrRenderComponent(unref(Icon), { icon: "eos-icons:loading" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="flex items-center h-full p-2 px-4 bg-[#FF4646]">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ph:magnifying-glass",
        class: "text-[25px]",
        color: "#ffffff"
      }, null, _parent));
      _push(`</button></div></div>`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), {
        to: "/shoppingcart",
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="relative flex items-center cursor-pointer"${_scopeId}><span class="absolute -top-2 -right-2 flex items-center justify-center bg-[#FF4646] text-white text-xs font-semibold w-5 h-5 rounded-full"${_scopeId}>${ssrInterpolate(unref(userStore)?.cart ? unref(userStore).cart.length : 0)}</span>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "ph:shopping-cart-simple-light",
              width: "33",
              height: "33",
              color: isCartHover.value ? "#FF4646" : "#000000"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                class: "relative flex items-center cursor-pointer",
                onMouseenter: ($event) => isCartHover.value = true,
                onMouseleave: ($event) => isCartHover.value = false
              }, [
                createVNode("span", { class: "absolute -top-2 -right-2 flex items-center justify-center bg-[#FF4646] text-white text-xs font-semibold w-5 h-5 rounded-full" }, toDisplayString(unref(userStore)?.cart ? unref(userStore).cart.length : 0), 1),
                createVNode(unref(Icon), {
                  icon: "ph:shopping-cart-simple-light",
                  width: "33",
                  height: "33",
                  color: isCartHover.value ? "#FF4646" : "#000000"
                }, null, 8, ["color"])
              ], 40, ["onMouseenter", "onMouseleave"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="max-w-[1150px] mx-auto px-3 py-6"><h1 class="text-2xl font-bold text-gray-800">My Orders</h1><p class="text-gray-500 text-sm mt-1">Here is the list of your recent orders.</p></div><div class="max-w-[1150px] mx-auto px-3"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(orders.value, (order) => {
        _push(`<div class="border rounded-lg p-4 hover:shadow-lg transition-shadow"><h2 class="font-semibold text-lg">${ssrInterpolate(order.name)}</h2><p class="text-gray-600 mt-1">Price: <span class="font-bold">${ssrInterpolate(order.price)}</span></p><p class="text-gray-600 mt-1">Status: <span class="${ssrRenderClass({
          "text-green-600 font-bold": order.status === "Delivered",
          "text-yellow-600 font-bold": order.status === "Processing",
          "text-blue-600 font-bold": order.status === "Shipped"
        })}">${ssrInterpolate(order.status)}</span></p><p class="text-gray-500 mt-1 text-sm">Date: ${ssrInterpolate(order.date)}</p></div>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=orders-BPHKHx-E.mjs.map
