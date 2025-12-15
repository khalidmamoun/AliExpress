import { _ as __nuxt_component_0 } from './nuxt-link-CshMov4q.mjs';
import { ref, computed, withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, toDisplayString, Fragment, renderList, withModifiers, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './MainLayout-PqAgMAFQ.mjs';
import { Icon } from '@iconify/vue';
import { u as useUserStore } from './user-CmAlD9lZ.mjs';
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
import 'vue-router';
import './virtual_public-3Fh-jQka.mjs';
import './supabaseClient-5e-HC0v9.mjs';
import '@supabase/supabase-js';

const _sfc_main$1 = {
  __name: "CheckoutItem",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 p-3 border border-gray-200 m-5 rounded-lg transition-all" }, _attrs))}><img${ssrRenderAttr("src", __props.product.url)}${ssrRenderAttr("alt", __props.product.title)} class="w-20 h-20 object-cover rounded-md"><div class="flex-1 flex flex-col justify-between"><div class="font-semibold text-md">${ssrInterpolate(__props.product.title)}</div><div class="text-gray-500 text-sm">${ssrInterpolate(__props.product.description)}</div></div><div class="font-bold text-lg">${ssrInterpolate(__props.product.price)} EGP</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkoutItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const hasAddress = ref(true);
    const isProcessing = ref(false);
    const address = ref({
      name: "Ali",
      address: "123 Street, Cairo",
      zip: "12345",
      city: "Cairo",
      country: "Egypt",
      phone: "01144698632"
    });
    const products = computed(() => userStore.checkout);
    const handleQuantityUpdate = ({ id, quantity }) => {
      const product = userStore.checkout.find((p) => p.id === id);
      if (product) {
        product.quantity = quantity;
        userStore.saveCart();
      }
    };
    const removeProduct = (id) => {
      const product = userStore.checkout.find((p) => p.id === id);
      if (product) userStore.removeItem(product);
    };
    const total = computed(
      () => userStore.checkout.reduce((sum, p) => sum + p.price * p.quantity, 0)
    );
    const pay = () => {
      isProcessing.value = true;
      setTimeout(() => {
        alert("Payment processed successfully!");
        isProcessing.value = false;
      }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="checkoutPage" class="mt-4 max-w-[1200px] mx-auto px-2"${_scopeId}><div class="md:flex gap-4 justify-between w-full"${_scopeId}><div class="md:w-[65%]"${_scopeId}><div class="bg-white rounded-xl shadow-md p-5"${_scopeId}><div class="text-xl font-semibold mb-4"${_scopeId}>Shipping Address</div>`);
            if (hasAddress.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/address",
                class: "mb-3 flex items-center text-blue-500 hover:text-red-500 transition-all font-medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: "mdi:plus",
                      size: "20",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Update Address `);
                  } else {
                    return [
                      createVNode(unref(Icon), {
                        icon: "mdi:plus",
                        size: "20",
                        class: "mr-2"
                      }),
                      createTextVNode(" Update Address ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="pt-5 border-t"${_scopeId}><div class="underline pb-1 font-semibold"${_scopeId}>Delivery Address</div><ul class="text-sm mt-3 space-y-2"${_scopeId}><li class="flex items-center gap-2"${_scopeId}><span class="text-gray-600"${_scopeId}>Contact Name:</span><span class="font-bold"${_scopeId}>${ssrInterpolate(address.value.name)}</span></li><li class="flex items-center gap-2"${_scopeId}><span class="text-gray-600"${_scopeId}>Phone:</span><span class="font-bold"${_scopeId}>${ssrInterpolate(address.value.phone)}</span></li><li class="flex items-center gap-2"${_scopeId}><span class="text-gray-600"${_scopeId}>Address:</span><span class="font-bold"${_scopeId}>${ssrInterpolate(address.value.address)}</span></li><li class="flex items-center gap-2"${_scopeId}><span class="text-gray-600"${_scopeId}>Zip Code:</span><span class="font-bold"${_scopeId}>${ssrInterpolate(address.value.zip)}</span></li><li class="flex items-center gap-2"${_scopeId}><span class="text-gray-600"${_scopeId}>City:</span><span class="font-bold"${_scopeId}>${ssrInterpolate(address.value.city)}</span></li><li class="flex items-center gap-2"${_scopeId}><span class="text-gray-600"${_scopeId}>Country:</span><span class="font-bold"${_scopeId}>${ssrInterpolate(address.value.country)}</span></li></ul></div></div>`);
            } else {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/address",
                class: "flex items-center text-blue-500 hover:text-red-400 font-medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: "mdi:plus",
                      size: "20",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Add New Address `);
                  } else {
                    return [
                      createVNode(unref(Icon), {
                        icon: "mdi:plus",
                        size: "20",
                        class: "mr-2"
                      }),
                      createTextVNode(" Add New Address ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div><div id="Items" class="bg-white rounded-lg p-4 mt-4 space-y-3"${_scopeId}>`);
            if (products.value.length === 0) {
              _push2(`<div class="text-center text-gray-500 py-6"${_scopeId}> Your Cart Is Empty </div>`);
            } else {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(products.value, (product) => {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1, {
                  product,
                  onUpdateQuantity: handleQuantityUpdate,
                  onRemoveItem: removeProduct
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></div><div class="block my-4 md:w-[30%] border border-gray-200 rounded-lg"${_scopeId}><div id="placeOrder" class="bg-white rounded-lg p-4 shadow"${_scopeId}><div class="text-2xl font-extrabold mb-2"${_scopeId}>Summary</div><div class="flex items-center justify-between my-4"${_scopeId}><div${_scopeId}>Total Shipping</div><div${_scopeId}>Free</div></div><div class="border-t"${_scopeId}><div class="flex items-center justify-between my-4"${_scopeId}><div class="font-semibold"${_scopeId}>Total</div><div class="text-2xl font-semibold"${_scopeId}> EGP <span class="font-extrabold"${_scopeId}>${ssrInterpolate(total.value)}</span></div></div><form${_scopeId}><div id="card-element" class="border border-gray-400 p-3 rounded-lg"${_scopeId}></div><p id="card-error" role="alert" class="text-red-700 text-center font-semibold mt-2"${_scopeId}></p><button${ssrIncludeBooleanAttr(isProcessing.value) ? " disabled" : ""} type="submit" class="mt-4 w-full text-white text-[21px] font-semibold p-2 rounded-full bg-gradient-to-r from-[#FE630c] to-[#FF3200] flex justify-center items-center"${_scopeId}>`);
            if (isProcessing.value) {
              _push2(`<svg class="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<!--[--> Place Order <!--]-->`);
            }
            _push2(`</button></form><div class="bg-white rounded-lg p-4 mt-4"${_scopeId}><div class="text-lg font-semibold mb-2 mt-2"${_scopeId}>AliExpress</div><p class="my-2"${_scopeId}> AliExpress keeps your information and payment safe. </p></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                id: "checkoutPage",
                class: "mt-4 max-w-[1200px] mx-auto px-2"
              }, [
                createVNode("div", { class: "md:flex gap-4 justify-between w-full" }, [
                  createVNode("div", { class: "md:w-[65%]" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-md p-5" }, [
                      createVNode("div", { class: "text-xl font-semibold mb-4" }, "Shipping Address"),
                      hasAddress.value ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(_component_NuxtLink, {
                          to: "/address",
                          class: "mb-3 flex items-center text-blue-500 hover:text-red-500 transition-all font-medium"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "mdi:plus",
                              size: "20",
                              class: "mr-2"
                            }),
                            createTextVNode(" Update Address ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "pt-5 border-t" }, [
                          createVNode("div", { class: "underline pb-1 font-semibold" }, "Delivery Address"),
                          createVNode("ul", { class: "text-sm mt-3 space-y-2" }, [
                            createVNode("li", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "text-gray-600" }, "Contact Name:"),
                              createVNode("span", { class: "font-bold" }, toDisplayString(address.value.name), 1)
                            ]),
                            createVNode("li", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "text-gray-600" }, "Phone:"),
                              createVNode("span", { class: "font-bold" }, toDisplayString(address.value.phone), 1)
                            ]),
                            createVNode("li", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "text-gray-600" }, "Address:"),
                              createVNode("span", { class: "font-bold" }, toDisplayString(address.value.address), 1)
                            ]),
                            createVNode("li", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "text-gray-600" }, "Zip Code:"),
                              createVNode("span", { class: "font-bold" }, toDisplayString(address.value.zip), 1)
                            ]),
                            createVNode("li", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "text-gray-600" }, "City:"),
                              createVNode("span", { class: "font-bold" }, toDisplayString(address.value.city), 1)
                            ]),
                            createVNode("li", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "text-gray-600" }, "Country:"),
                              createVNode("span", { class: "font-bold" }, toDisplayString(address.value.country), 1)
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createBlock(_component_NuxtLink, {
                        key: 1,
                        to: "/address",
                        class: "flex items-center text-blue-500 hover:text-red-400 font-medium"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Icon), {
                            icon: "mdi:plus",
                            size: "20",
                            class: "mr-2"
                          }),
                          createTextVNode(" Add New Address ")
                        ]),
                        _: 1
                      }))
                    ]),
                    createVNode("div", {
                      id: "Items",
                      class: "bg-white rounded-lg p-4 mt-4 space-y-3"
                    }, [
                      products.value.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center text-gray-500 py-6"
                      }, " Your Cart Is Empty ")) : (openBlock(), createBlock("div", { key: 1 }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(products.value, (product) => {
                          return openBlock(), createBlock("div", {
                            key: product.id
                          }, [
                            createVNode(_sfc_main$1, {
                              product,
                              onUpdateQuantity: handleQuantityUpdate,
                              onRemoveItem: removeProduct
                            }, null, 8, ["product"])
                          ]);
                        }), 128))
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "block my-4 md:w-[30%] border border-gray-200 rounded-lg" }, [
                    createVNode("div", {
                      id: "placeOrder",
                      class: "bg-white rounded-lg p-4 shadow"
                    }, [
                      createVNode("div", { class: "text-2xl font-extrabold mb-2" }, "Summary"),
                      createVNode("div", { class: "flex items-center justify-between my-4" }, [
                        createVNode("div", null, "Total Shipping"),
                        createVNode("div", null, "Free")
                      ]),
                      createVNode("div", { class: "border-t" }, [
                        createVNode("div", { class: "flex items-center justify-between my-4" }, [
                          createVNode("div", { class: "font-semibold" }, "Total"),
                          createVNode("div", { class: "text-2xl font-semibold" }, [
                            createTextVNode(" EGP "),
                            createVNode("span", { class: "font-extrabold" }, toDisplayString(total.value), 1)
                          ])
                        ]),
                        createVNode("form", {
                          onSubmit: withModifiers(($event) => pay(), ["prevent"])
                        }, [
                          createVNode("div", {
                            id: "card-element",
                            class: "border border-gray-400 p-3 rounded-lg"
                          }),
                          createVNode("p", {
                            id: "card-error",
                            role: "alert",
                            class: "text-red-700 text-center font-semibold mt-2"
                          }),
                          createVNode("button", {
                            disabled: isProcessing.value,
                            type: "submit",
                            class: "mt-4 w-full text-white text-[21px] font-semibold p-2 rounded-full bg-gradient-to-r from-[#FE630c] to-[#FF3200] flex justify-center items-center"
                          }, [
                            isProcessing.value ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "animate-spin h-6 w-6 text-white",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("circle", {
                                class: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                "stroke-width": "4"
                              }),
                              createVNode("path", {
                                class: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              })
                            ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(" Place Order ")
                            ], 64))
                          ], 8, ["disabled"])
                        ], 40, ["onSubmit"]),
                        createVNode("div", { class: "bg-white rounded-lg p-4 mt-4" }, [
                          createVNode("div", { class: "text-lg font-semibold mb-2 mt-2" }, "AliExpress"),
                          createVNode("p", { class: "my-2" }, " AliExpress keeps your information and payment safe. ")
                        ])
                      ])
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout-C7X3hu2p.mjs.map
