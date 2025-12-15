import { _ as __nuxt_component_0 } from './nuxt-link-CshMov4q.mjs';
import { computed, ref, watch, withCtx, createTextVNode, createVNode, createBlock, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './MainLayout-PqAgMAFQ.mjs';
import { u as useUserStore } from './user-CmAlD9lZ.mjs';
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
import 'pinia';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './virtual_public-3Fh-jQka.mjs';
import '@iconify/vue';
import './supabaseClient-5e-HC0v9.mjs';
import '@supabase/supabase-js';

const _imports_0 = publicAssetsURL("/images/emptycart.png");
const _sfc_main = {
  __name: "shoppingcart",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter();
    const isUserLoggedIn = computed(() => !!userStore.user);
    const products = ref([]);
    watch(() => userStore.checkout, () => {
      products.value = [...userStore.checkout];
    }, { deep: true });
    function increaseQuantity(item) {
      userStore.addItem(item);
    }
    function decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        userStore.saveCart();
      } else {
        removeItem(item);
      }
    }
    function removeItem(item) {
      userStore.removeItem(item);
    }
    const subtotal = computed(
      () => products.value.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    );
    function goToCheckout() {
      if (!isUserLoggedIn.value) {
        router.push("/auth");
        return;
      }
      if (products.value.length === 0) return;
      router.push("/checkout");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="shoppingCartPage" class="mt-8 max-w-[1200px] mx-auto px-4"${_scopeId}>`);
            if (!isUserLoggedIn.value) {
              _push2(`<div class="bg-white rounded-3xl shadow-lg min-h-[500px] flex items-center justify-center"${_scopeId}><div class="text-center px-6 pb-10"${_scopeId}><img class="mx-auto mb-6" width="280"${ssrRenderAttr("src", _imports_0)} alt="Empty Cart"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/auth",
                class: "bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-12 py-3 rounded-full transition-shadow shadow-md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Sign in `);
                  } else {
                    return [
                      createTextVNode(" Sign in ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if (products.value.length > 0) {
              _push2(`<div class="md:flex gap-6 justify-between mx-auto w-full"${_scopeId}><div class="md:w-[68%] space-y-6"${_scopeId}><div class="bg-white rounded-3xl p-6 shadow-md transition-shadow"${_scopeId}><div class="text-2xl font-bold mb-3 text-gray-800"${_scopeId}> Shopping Cart [ ${ssrInterpolate(products.value.length)} ] </div></div><div id="Items" class="space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(products.value, (product) => {
                _push2(`<div class="flex gap-4 items-start bg-green-50 rounded-lg p-4 shadow-sm"${_scopeId}><img${ssrRenderAttr("src", product.url)} class="w-24 h-24 object-contain rounded-lg border"${_scopeId}><div class="flex-1 flex flex-col justify-between"${_scopeId}><div${_scopeId}><h3 class="font-semibold text-lg text-green-800"${_scopeId}>${ssrInterpolate(product.title)}</h3><p class="text-green-900 text-sm mt-1"${_scopeId}>${ssrInterpolate(product.description)}</p><div class="flex gap-3 items-center mt-2"${_scopeId}><span class="font-bold text-green-800"${_scopeId}>${ssrInterpolate(product.price.toLocaleString("en-EG"))} EGP</span><span class="text-yellow-800 line-through"${_scopeId}>${ssrInterpolate((product.price * 1.05).toLocaleString("en-EG"))} EGP</span></div></div><div class="flex items-center gap-2 mt-3"${_scopeId}><button class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"${_scopeId}>-</button><span class="font-semibold text-green-800"${_scopeId}>${ssrInterpolate(product.quantity)}</span><button class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"${_scopeId}>+</button><button class="cursor-pointer font-bold ml-auto text-red-600 hover:text-red-800"${_scopeId}> 🗑️Delete </button></div></div></div>`);
              });
              _push2(`<!--]--></div></div><div class="hidden md:block md:w-[30%]"${_scopeId}><div class="bg-white rounded-3xl p-4 shadow-md sticky top-6"${_scopeId}><h3 class="text-xl font-bold mb-4"${_scopeId}>Summary</h3><div class="flex justify-between mb-2"${_scopeId}><span${_scopeId}>Subtotal:</span><span${_scopeId}>${ssrInterpolate(subtotal.value.toLocaleString("en-EG"))} EGP</span></div><div class="flex justify-between font-bold border-t pt-2"${_scopeId}><span${_scopeId}>Total:</span><span${_scopeId}>${ssrInterpolate(subtotal.value.toLocaleString("en-EG"))} EGP</span></div><button class="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition-shadow shadow-md cursor-pointer"${_scopeId}> Checkout </button></div></div></div>`);
            } else {
              _push2(`<div class="bg-white rounded-3xl shadow-lg min-h-[500px] flex items-center justify-center"${_scopeId}><div class="text-center px-6 pb-10"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                id: "shoppingCartPage",
                class: "mt-8 max-w-[1200px] mx-auto px-4"
              }, [
                !isUserLoggedIn.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-white rounded-3xl shadow-lg min-h-[500px] flex items-center justify-center"
                }, [
                  createVNode("div", { class: "text-center px-6 pb-10" }, [
                    createVNode("img", {
                      class: "mx-auto mb-6",
                      width: "280",
                      src: _imports_0,
                      alt: "Empty Cart"
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "/auth",
                      class: "bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-12 py-3 rounded-full transition-shadow shadow-md"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign in ")
                      ]),
                      _: 1
                    })
                  ])
                ])) : products.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "md:flex gap-6 justify-between mx-auto w-full"
                }, [
                  createVNode("div", { class: "md:w-[68%] space-y-6" }, [
                    createVNode("div", { class: "bg-white rounded-3xl p-6 shadow-md transition-shadow" }, [
                      createVNode("div", { class: "text-2xl font-bold mb-3 text-gray-800" }, " Shopping Cart [ " + toDisplayString(products.value.length) + " ] ", 1)
                    ]),
                    createVNode("div", {
                      id: "Items",
                      class: "space-y-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(products.value, (product) => {
                        return openBlock(), createBlock("div", {
                          key: product.id,
                          class: "flex gap-4 items-start bg-green-50 rounded-lg p-4 shadow-sm"
                        }, [
                          createVNode("img", {
                            src: product.url,
                            class: "w-24 h-24 object-contain rounded-lg border"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "flex-1 flex flex-col justify-between" }, [
                            createVNode("div", null, [
                              createVNode("h3", { class: "font-semibold text-lg text-green-800" }, toDisplayString(product.title), 1),
                              createVNode("p", { class: "text-green-900 text-sm mt-1" }, toDisplayString(product.description), 1),
                              createVNode("div", { class: "flex gap-3 items-center mt-2" }, [
                                createVNode("span", { class: "font-bold text-green-800" }, toDisplayString(product.price.toLocaleString("en-EG")) + " EGP", 1),
                                createVNode("span", { class: "text-yellow-800 line-through" }, toDisplayString((product.price * 1.05).toLocaleString("en-EG")) + " EGP", 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center gap-2 mt-3" }, [
                              createVNode("button", {
                                onClick: ($event) => decreaseQuantity(product),
                                class: "px-2 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
                              }, "-", 8, ["onClick"]),
                              createVNode("span", { class: "font-semibold text-green-800" }, toDisplayString(product.quantity), 1),
                              createVNode("button", {
                                onClick: ($event) => increaseQuantity(product),
                                class: "px-2 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
                              }, "+", 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => removeItem(product),
                                class: "cursor-pointer font-bold ml-auto text-red-600 hover:text-red-800"
                              }, " 🗑️Delete ", 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "hidden md:block md:w-[30%]" }, [
                    createVNode("div", { class: "bg-white rounded-3xl p-4 shadow-md sticky top-6" }, [
                      createVNode("h3", { class: "text-xl font-bold mb-4" }, "Summary"),
                      createVNode("div", { class: "flex justify-between mb-2" }, [
                        createVNode("span", null, "Subtotal:"),
                        createVNode("span", null, toDisplayString(subtotal.value.toLocaleString("en-EG")) + " EGP", 1)
                      ]),
                      createVNode("div", { class: "flex justify-between font-bold border-t pt-2" }, [
                        createVNode("span", null, "Total:"),
                        createVNode("span", null, toDisplayString(subtotal.value.toLocaleString("en-EG")) + " EGP", 1)
                      ]),
                      createVNode("button", {
                        onClick: goToCheckout,
                        class: "mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition-shadow shadow-md cursor-pointer"
                      }, " Checkout ")
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 2,
                  class: "bg-white rounded-3xl shadow-lg min-h-[500px] flex items-center justify-center"
                }, [
                  createVNode("div", { class: "text-center px-6 pb-10" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: ""
                    })
                  ])
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shoppingcart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shoppingcart-Cj7tpb8H.mjs.map
