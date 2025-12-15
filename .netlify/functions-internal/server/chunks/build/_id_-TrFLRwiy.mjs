import { ref, computed, watch, withCtx, createVNode, createBlock, openBlock, createCommentVNode, Fragment, renderList, toDisplayString, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _sfc_main$1 } from './MainLayout-PqAgMAFQ.mjs';
import { u as useUserStore } from './user-CmAlD9lZ.mjs';
import './virtual_public-3Fh-jQka.mjs';
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
import '@iconify/vue';
import './server.mjs';
import 'pinia';
import './supabaseClient-5e-HC0v9.mjs';
import '@supabase/supabase-js';
import './nuxt-link-CshMov4q.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const route = useRoute();
    Number(route.params.id);
    const product = ref(null);
    const currentImage = ref("");
    const isInCart = ref(false);
    const showLoginToast = ref(false);
    function updateCartState() {
      if (!product.value) return;
      isInCart.value = userStore.checkout.some((p) => p.id === product.value.id);
    }
    const priceFormatted = computed(() => product.value ? product.value.price.toLocaleString("en-EG") : "");
    const oldPriceFormatted = computed(() => product.value ? (product.value.price * 1.05).toLocaleString("en-EG") : "");
    function handleAddToCart() {
      if (!userStore.user) {
        showLoginToast.value = true;
        setTimeout(() => showLoginToast.value = false, 2500);
        return;
      }
      userStore.addItem({
        id: product.value.id,
        title: product.value.title,
        price: product.value.price,
        url: product.value.images[0],
        description: product.value.description
      });
      isInCart.value = true;
    }
    watch(() => userStore.checkout, updateCartState, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="ItemPage" class="mt-8 max-w-[1200px] mx-auto px-3"${_scopeId}>`);
            if (product.value) {
              _push2(`<div class="bg-white rounded-2xl shadow-lg p-6 md:flex gap-8 w-full"${_scopeId}><div class="md:w-[40%] w-full"${_scopeId}><div class="border border-gray-200 rounded-xl overflow-hidden"${_scopeId}><img class="object-contain w-full h-[420px] bg-white"${ssrRenderAttr("src", currentImage.value)} alt="صورة المنتج"${_scopeId}></div>`);
              if (product.value.images.length > 1) {
                _push2(`<div class="flex items-center justify-center mt-4 gap-3"${_scopeId}><!--[-->`);
                ssrRenderList(product.value.images, (img, index) => {
                  _push2(`<img${ssrRenderAttr("src", img)} width="70" class="${ssrRenderClass([currentImage.value === img ? "border-[#FF4646]" : "border-gray-200", "rounded-lg object-cover border-2 cursor-pointer transition-all duration-300 hover:scale-105"])}" alt="صورة مصغرة"${_scopeId}>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="md:w-[60%] w-full flex flex-col justify-start"${_scopeId}><h1 class="text-[20px] font-semibold text-gray-900 mb-2 leading-snug"${_scopeId}>${ssrInterpolate(product.value.title)}</h1><p class="text-sm text-gray-500 mb-3"${_scopeId}>${ssrInterpolate(product.value.description)}</p><div class="flex flex-wrap gap-1 mt-2 mb-3"${_scopeId}><span class="text-xs bg-red-500 text-white px-2 py-0.5 rounded"${_scopeId}>Welcome Deal</span><span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded"${_scopeId}>Top Selling</span><span class="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded"${_scopeId}>${ssrInterpolate(product.value.rating?.count || 5e3)}+ sold</span><span class="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded"${_scopeId}>Free Shipping</span></div><div class="flex items-end gap-3 mb-3"${_scopeId}><span class="text-3xl font-bold text-black"${_scopeId}>${ssrInterpolate(priceFormatted.value)} EGP</span><span class="text-sm line-through text-gray-400"${_scopeId}>${ssrInterpolate(oldPriceFormatted.value)} EGP</span></div><button class="${ssrRenderClass([isInCart.value ? "bg-green-500 hover:bg-green-600 text-white cursor-default" : "bg-red-500 hover:bg-red-700 text-white cursor-pointer", "w-fit px-10 py-3 rounded-md font-semibold transition mt-4"])}"${_scopeId}>${ssrInterpolate(isInCart.value ? "Item in Cart" : "Add to Cart")}</button></div></div>`);
            } else {
              _push2(`<div class="text-center text-gray-500 py-20"${_scopeId}>جاري التحميل...</div>`);
            }
            if (showLoginToast.value) {
              _push2(`<div class="font-bold text-center bg-yellow-400 text-black p-5 rounded-lg shadow-lg"${_scopeId}> Welcome in Ali Express ( Please Login To Add Item in Cart ) </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                id: "ItemPage",
                class: "mt-8 max-w-[1200px] mx-auto px-3"
              }, [
                product.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-white rounded-2xl shadow-lg p-6 md:flex gap-8 w-full"
                }, [
                  createVNode("div", { class: "md:w-[40%] w-full" }, [
                    createVNode("div", { class: "border border-gray-200 rounded-xl overflow-hidden" }, [
                      createVNode("img", {
                        class: "object-contain w-full h-[420px] bg-white",
                        src: currentImage.value,
                        alt: "صورة المنتج"
                      }, null, 8, ["src"])
                    ]),
                    product.value.images.length > 1 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center justify-center mt-4 gap-3"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(product.value.images, (img, index) => {
                        return openBlock(), createBlock("img", {
                          key: index,
                          onClick: ($event) => currentImage.value = img,
                          src: img,
                          width: "70",
                          class: ["rounded-lg object-cover border-2 cursor-pointer transition-all duration-300 hover:scale-105", currentImage.value === img ? "border-[#FF4646]" : "border-gray-200"],
                          alt: "صورة مصغرة"
                        }, null, 10, ["onClick", "src"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "md:w-[60%] w-full flex flex-col justify-start" }, [
                    createVNode("h1", { class: "text-[20px] font-semibold text-gray-900 mb-2 leading-snug" }, toDisplayString(product.value.title), 1),
                    createVNode("p", { class: "text-sm text-gray-500 mb-3" }, toDisplayString(product.value.description), 1),
                    createVNode("div", { class: "flex flex-wrap gap-1 mt-2 mb-3" }, [
                      createVNode("span", { class: "text-xs bg-red-500 text-white px-2 py-0.5 rounded" }, "Welcome Deal"),
                      createVNode("span", { class: "text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded" }, "Top Selling"),
                      createVNode("span", { class: "text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded" }, toDisplayString(product.value.rating?.count || 5e3) + "+ sold", 1),
                      createVNode("span", { class: "text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded" }, "Free Shipping")
                    ]),
                    createVNode("div", { class: "flex items-end gap-3 mb-3" }, [
                      createVNode("span", { class: "text-3xl font-bold text-black" }, toDisplayString(priceFormatted.value) + " EGP", 1),
                      createVNode("span", { class: "text-sm line-through text-gray-400" }, toDisplayString(oldPriceFormatted.value) + " EGP", 1)
                    ]),
                    createVNode("button", {
                      class: ["w-fit px-10 py-3 rounded-md font-semibold transition mt-4", isInCart.value ? "bg-green-500 hover:bg-green-600 text-white cursor-default" : "bg-red-500 hover:bg-red-700 text-white cursor-pointer"],
                      onClick: ($event) => handleAddToCart()
                    }, toDisplayString(isInCart.value ? "Item in Cart" : "Add to Cart"), 11, ["onClick"])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center text-gray-500 py-20"
                }, "جاري التحميل...")),
                createVNode(Transition, { name: "fade" }, {
                  default: withCtx(() => [
                    showLoginToast.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "font-bold text-center bg-yellow-400 text-black p-5 rounded-lg shadow-lg"
                    }, " Welcome in Ali Express ( Please Login To Add Item in Cart ) ")) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/item/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-TrFLRwiy.mjs.map
