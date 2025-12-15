import { ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-3Fh-jQka.mjs';
import { Icon } from '@iconify/vue';
import { _ as _export_sfc } from './server.mjs';
import { useRouter } from 'vue-router';
import { s as supabase } from './supabaseClient-5e-HC0v9.mjs';
import { u as useUserStore } from './user-CmAlD9lZ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CshMov4q.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><footer class="w-full bg-gray-900 text-gray-200 mt-10"><div class="max-w-[1450px] mx-auto px-4 py-10"><div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6"><div class="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4"><h3 class="text-lg font-semibold text-red-400 mb-3 text-center">Call Center</h3><p class="text-sm leading-relaxed text-gray-300"> Call Center, Disputes &amp; Reports, Buyer Protection, Report IPR infringement, Regulated Information. </p></div><div class="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4"><h3 class="text-lg font-semibold text-red-400 mb-3 text-center">About</h3><p class="text-sm leading-relaxed text-gray-300"> Help Center, Disputes &amp; Reports, Buyer Protection, Report IPR infringement, Regulated Information. </p></div><div class="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4"><h3 class="text-lg font-semibold text-red-400 mb-3 text-center">Help</h3><p class="text-sm leading-relaxed text-gray-300"> Help Center, Disputes &amp; Reports, Buyer Protection, Report IPR infringement, Regulated Information. </p></div><div class="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4"><h3 class="text-lg font-semibold text-red-400 mb-3 text-center">AliExpress Multi-Language Sites</h3><p class="text-sm leading-relaxed text-gray-300"> Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew, Polish. </p></div><div class="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4"><h3 class="text-lg font-semibold text-red-400 mb-3 text-center">Browse by Category</h3><p class="text-sm leading-relaxed text-gray-300"> All Popular, Product, Promotion, Low Price, Great Value, Reviews, Blog, Seller Portal, BLACK FRIDAY, AliExpress Assistant. </p></div><div class="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4"><h3 class="text-lg font-semibold text-red-400 mb-3 text-center">Alibaba Group</h3><p class="text-sm leading-relaxed text-gray-300"> Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688. </p></div></div></div></footer><div class="w-full bg-red-900 text-white text-sm"><div class="max-w-[1200px] mx-auto p-4 text-center"> ©️2025 Khalid Mamoun. All rights reserved. </div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "Footer" });
const _sfc_main = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const userStore = useUserStore();
    const isAccountMenu = ref(false);
    const isCartHover = ref(false);
    const isMobileMenu = ref(false);
    const searchItem = ref("");
    const isSearching = ref(false);
    const avatar = ref("/images/default-avatar.png");
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        userStore.user = session.user;
        if (session.user.user_metadata?.avatar) {
          avatar.value = session.user.user_metadata.avatar + "?t=" + (/* @__PURE__ */ new Date()).getTime();
        }
        const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
        guestCart.forEach((item) => userStore.addItem(item));
        localStorage.removeItem("guestCart");
      } else {
        userStore.user = null;
        avatar.value = "/images/default-avatar.png";
        userStore.clearCart();
      }
    });
    function isUserLoggedIn() {
      return !!userStore.user;
    }
    const allProducts = ref([]);
    const filteredProducts = computed(() => {
      if (!searchItem.value) return [];
      return allProducts.value.filter((p) => p.title.toLowerCase().includes(searchItem.value.toLowerCase()));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "MainLayout",
        class: "w-full relative min-h-screen"
      }, _attrs))}><div class="w-full bg-[#FAFAFA] md:block hidden"><ul class="flex items-center justify-end text-xs text-[#333] font-light px-2 h-10 max-w-[1200px] mx-auto"><li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Sell on AliExpress</li><li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Cookie preferences</li><li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Help</li><li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Buyer Protection</li><li class="flex items-center gap-1 px-3 hover:text-[#FF46F6] cursor-pointer border-r-0">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ic:sharp-install-mobile",
        width: "17"
      }, null, _parent));
      _push(` App </li><li class="${ssrRenderClass([isAccountMenu.value ? "font-bold bg-white border border-[#FF46F6] z-40 rounded-md shadow-md text-[#FF46F6]" : "border border-transparent text-red-500 font-bold", "relative flex items-center px-2 gap-1 cursor-pointer select-none"])}">`);
      if (isUserLoggedIn()) {
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
        _push(`<div class="absolute bg-white w-[220px] text-[#333] z-50 top-[38px] left-[-83px] border border-gray-200 rounded-lg shadow-md mt-3">`);
        if (!isUserLoggedIn()) {
          _push(`<div class="flex items-center gap-1 px-3 mb-3">`);
          _push(ssrRenderComponent(unref(__nuxt_component_0), {
            to: "/auth",
            class: "bg-[#FF4646] w-full text-white text-center p-2 rounded-sm font-semibold text-[16px] mt-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Login / Sign up`);
              } else {
                return [
                  createTextVNode("Login / Sign up")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="text-center font-semibold py-3"><div class="bg-red-500 p-2 text-white font-bold mb-2">Hello, ${ssrInterpolate(unref(userStore).user.email)}</div><div class="flex flex-col gap-2 mb-3 px-2"><button class="text-red-500 text-[13px] p-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200 font-bold">Switch to Google</button><button class="text-red-500 text-[13px] p-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200 font-bold">Switch to GitHub</button></div><ul><li class="text-[13px] p-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200 font-bold">My Profile</li><li class="text-[13px] p-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200 font-bold">My Orders</li><li class="text-[13px] py-2 px-4 hover:bg-gray-200 cursor-pointer font-bold">Log out</li></ul></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></div><div class="w-full bg-white mt-4 border-b border-gray-200 border-t"><div class="flex items-center gap-4 max-w-[1150px] w-full px-3 mx-auto">`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), {
        to: "/",
        class: "flex-shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="160"${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "160",
                src: _imports_0,
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-grow relative"><div class="flex items-center border-2 border-[#FF4646] rounded-md w-full"><input${ssrRenderAttr("value", searchItem.value)} class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" placeholder="Search..." type="text"><button class="flex items-center h-full p-2 px-4 bg-[#FF4646]">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ph:magnifying-glass",
        class: "text-[22px]",
        color: "#ffffff"
      }, null, _parent));
      _push(`</button></div>`);
      if (isSearching.value && filteredProducts.value.length > 0) {
        _push(`<div class="absolute bg-white w-full mt-1 max-h-64 overflow-auto border border-gray-200 rounded-md z-50"><ul><!--[-->`);
        ssrRenderList(filteredProducts.value, (product) => {
          _push(`<li class="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"><img${ssrRenderAttr("src", product.image)} class="w-10 h-10 object-contain rounded border" alt="product image"><span class="truncate">${ssrInterpolate(product.title)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), {
        to: "/shoppingcart",
        class: "relative flex-shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute -top-2 -right-2 flex items-center justify-center bg-[#FF4646] text-white text-xs font-semibold w-5 h-5 rounded-full"${_scopeId}>${ssrInterpolate(unref(userStore).checkout.length)}</span>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "ph:shopping-cart-simple-light",
              width: "33",
              color: isCartHover.value ? "#FF4646" : "#000000",
              onMouseenter: ($event) => isCartHover.value = true,
              onMouseleave: ($event) => isCartHover.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "absolute -top-2 -right-2 flex items-center justify-center bg-[#FF4646] text-white text-xs font-semibold w-5 h-5 rounded-full" }, toDisplayString(unref(userStore).checkout.length), 1),
              createVNode(unref(Icon), {
                icon: "ph:shopping-cart-simple-light",
                width: "33",
                color: isCartHover.value ? "#FF4646" : "#000000",
                onMouseenter: ($event) => isCartHover.value = true,
                onMouseleave: ($event) => isCartHover.value = false
              }, null, 8, ["color", "onMouseenter", "onMouseleave"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="md:hidden block flex-shrink-0">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ci:hamburger-md",
        width: "32"
      }, null, _parent));
      _push(`</button></div></div>`);
      if (isMobileMenu.value) {
        _push(`<div class="fixed inset-0 bg-black/40 z-40 md:hidden"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([isMobileMenu.value ? "translate-x-0" : "translate-x-full", "fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out"])}"><div class="p-4 flex justify-between items-center border-b border-gray-200 text-gray-700"><h2 class="text-lg font-bold flex items-center gap-2">Menu</h2><button>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "iconamoon:close-bold",
        width: "28",
        color: "#FF4646"
      }, null, _parent));
      _push(`</button></div><ul class="flex flex-col text-gray-700 text-base px-4 pt-3"><li class="py-3 border-b border-gray-200 font-bold flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:home-outline",
        width: "20",
        color: "#FF4646"
      }, null, _parent));
      _push(` Home</li><li class="py-3 border-b border-gray-200 font-bold flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:account-outline",
        width: "20",
        color: "#FF4646"
      }, null, _parent));
      _push(` My Profile</li><li class="py-3 border-b border-gray-200 font-bold flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:clipboard-list-outline",
        width: "20",
        color: "#FF4646"
      }, null, _parent));
      _push(` My Orders</li><li class="py-3 border-b border-gray-200 font-bold flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:cart-outline",
        width: "20",
        color: "#FF4646"
      }, null, _parent));
      _push(` Cart</li>`);
      if (isUserLoggedIn()) {
        _push(`<li class="py-3 font-bold flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "mdi:logout",
          width: "20",
          color: "#FF4646"
        }, null, _parent));
        _push(` Logout</li>`);
      } else {
        _push(`<li class="py-3 flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "mdi:login",
          width: "20",
          color: "#FF4646"
        }, null, _parent));
        _push(` Login / Sign Up</li>`);
      }
      _push(`</ul></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/MainLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=MainLayout-PqAgMAFQ.mjs.map
