import { _ as __nuxt_component_0 } from './nuxt-link-CshMov4q.mjs';
import { ref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, toRef, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { useRouter } from 'vue-router';
import { _ as _sfc_main$5 } from './MainLayout-PqAgMAFQ.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import './virtual_public-3Fh-jQka.mjs';
import '@iconify/vue';
import './supabaseClient-5e-HC0v9.mjs';
import '@supabase/supabase-js';
import './user-CmAlD9lZ.mjs';

const _sfc_main$4 = {
  __name: "Slider",
  __ssrInlineRender: true,
  setup(__props) {
    const slides = [
      {
        id: 1,
        title: "Organic Green Tea",
        image: "/images/slider/sliderhome1.png",
        description: "Refreshing and full of antioxidants for a healthy lifestyle."
      },
      {
        id: 2,
        title: "Wireless Headphones",
        image: "/images/slider/sliderhome2.png",
        description: "Experience crystal-clear sound with noise cancellation technology."
      },
      {
        id: 3,
        title: "Eco-friendly Notebook",
        image: "/images/slider/sliderhome3.png",
        description: "Made from recycled materials, perfect for daily journaling."
      }
    ];
    const currentSlide = ref(0);
    const sliderTransform = computed(() => ({
      transform: `translateX(-${currentSlide.value * 100}%)`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-8xl px-6 py-3" }, _attrs))} data-v-bbe9c413><div class="relative w-full aspect-[4/1] overflow-hidden rounded-2xl shadow-lg" data-v-bbe9c413><div class="flex h-full transition-transform duration-1000 ease-in-out" style="${ssrRenderStyle(sliderTransform.value)}" data-v-bbe9c413><!--[-->`);
      ssrRenderList(slides, (slide) => {
        _push(`<div class="w-full h-full flex-shrink-0 relative" data-v-bbe9c413><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="w-full h-full object-cover" data-v-bbe9c413><div class="absolute inset-0 bg-black/40" data-v-bbe9c413></div><div class="absolute bottom-5 left-5 md:left-10 text-white max-w-md" data-v-bbe9c413><h2 class="text-2xl md:text-3xl lg:text-4xl font-bold" data-v-bbe9c413>${ssrInterpolate(slide.title)}</h2><p class="mt-1 text-sm md:text-base lg:text-lg opacity-90" data-v-bbe9c413>${ssrInterpolate(slide.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><button class="nav-btn left-2 md:left-4" data-v-bbe9c413>‹</button><button class="nav-btn right-2 md:right-4" data-v-bbe9c413>›</button><div class="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2" data-v-bbe9c413><!--[-->`);
      ssrRenderList(slides, (slide, index2) => {
        _push(`<span class="${ssrRenderClass([currentSlide.value === index2 ? "bg-white scale-110" : "bg-white/50 hover:bg-white", "w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition"])}" data-v-bbe9c413></span>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Slider = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-bbe9c413"]]);
const _sfc_main$3 = {
  __name: "ProductSlider",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const products = ref([]);
    const currentIndex = ref(0);
    const visibleCount = ref(4);
    const isLargeScreen = ref(false);
    computed(
      () => Math.max(products.value.length - visibleCount.value, 0)
    );
    const sliderStyle = computed(() => ({
      transform: `translateX(-${currentIndex.value * (100 / visibleCount.value)}%)`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      if (isLargeScreen.value) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-6 py-16" }, _attrs))} data-v-4b92e018><div class="flex justify-end gap-3 mb-4" data-v-4b92e018><button class="arrow-btn" data-v-4b92e018>‹</button><button class="arrow-btn" data-v-4b92e018>›</button></div><div class="overflow-hidden" data-v-4b92e018><div class="flex transition-transform duration-700 ease-in-out" style="${ssrRenderStyle(sliderStyle.value)}" data-v-4b92e018><!--[-->`);
        ssrRenderList(products.value, (product) => {
          _push(`<div class="w-1/4 px-3 flex-shrink-0" data-v-4b92e018><div class="cursor-pointer bg-white rounded-2xl border hover:shadow-xl transition p-4 h-full flex flex-col relative" data-v-4b92e018><div class="absolute top-3 left-3 flex flex-col gap-1" data-v-4b92e018><span class="badge bg-red-500" data-v-4b92e018>Welcome Deal</span><span class="badge bg-orange-500" data-v-4b92e018>Top Selling</span></div><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.title)} class="h-40 mx-auto object-contain mb-4" data-v-4b92e018><h3 class="text-sm font-semibold text-gray-800 line-clamp-2 mb-1" data-v-4b92e018>${ssrInterpolate(product.title)}</h3><p class="text-xs text-gray-500 line-clamp-3 mb-3" data-v-4b92e018>${ssrInterpolate(product.description)}</p><div class="text-xs text-gray-400 mb-2" data-v-4b92e018> 259+ sold · Free Shipping </div><div class="mt-auto" data-v-4b92e018><div class="flex items-center gap-2" data-v-4b92e018><span class="text-lg font-bold text-red-500" data-v-4b92e018>${ssrInterpolate((product.price * 30).toFixed(2))} EGP </span><span class="text-sm line-through text-gray-400" data-v-4b92e018>${ssrInterpolate((product.price * 32).toFixed(2))} EGP </span></div><button class="mt-3 w-full bg-blue-500 text-white py-2 rounded-full cursor-pointer hover:bg-red-600 transition font-semibold text-sm" data-v-4b92e018> Show Details </button></div></div></div>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductSlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductSlider = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-4b92e018"]]), { __name: "ProductSlider" });
const _sfc_main$2 = {
  __name: "ProductComponent",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    const props = __props;
    const product = toRef(props, "product");
    const priceFormatted = computed(() => {
      return product.value.price.toLocaleString("en-EG");
    });
    const oldPriceFormatted = computed(() => {
      if (!product.value.price) return null;
      let oldPrice = product.value.price * 1.05;
      return oldPrice.toLocaleString("en-EG");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-100 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden h-full group" }, _attrs))}><div class="w-full aspect-[1/1] bg-gray-50 relative flex-shrink-0 flex items-center justify-center overflow-hidden"><img${ssrRenderAttr("src", product.value.image)} alt="product image" class="max-w-full max-h-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div></div><div class="p-4 flex flex-col flex-1"><h3 class="text-sm md:text-base font-semibold text-gray-900 truncate hover:text-indigo-600 transition-colors duration-300">${ssrInterpolate(product.value.title)}</h3><p class="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">${ssrInterpolate(product.value.description)}</p><div class="flex flex-wrap gap-1 mt-2"><span class="text-xs bg-red-500 text-white px-2 py-0.5 rounded">Welcome Deal</span><span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Top Selling</span><span class="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">${ssrInterpolate(product.value.rating?.count || 5e3)}+ sold</span><span class="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Free Shipping</span></div><div class="mt-auto flex items-center gap-3 mt-3"><span class="text-red-600 font-bold text-sm md:text-base">${ssrInterpolate(priceFormatted.value)} EGP </span>`);
      if (oldPriceFormatted.value) {
        _push(`<span class="text-gray-400 line-through text-xs md:text-sm">${ssrInterpolate(oldPriceFormatted.value)} EGP </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="mt-3 w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"> Show Product </button></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "SaleCountdown",
  __ssrInlineRender: true,
  setup(__props) {
    const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row justify-between items-center rounded-2xl p-6 shadow-lg mb-1 mt-10" }, _attrs))} data-v-382dae66><div class="text-center md:text-left mb-4 md:mb-0" data-v-382dae66><h2 class="text-3xl font-bold text-red-600" data-v-382dae66>For Sale</h2><p class="text-gray-700 mt-2" data-v-382dae66>Special discounts and offers available this month!</p></div><div class="text-center bg-white px-6 py-4 rounded-2xl shadow-md flex gap-4 items-center" data-v-382dae66><div class="flex flex-col" data-v-382dae66><span class="text-3xl font-bold text-red-600" data-v-382dae66>${ssrInterpolate(countdown.value.days)}</span><span class="text-xs text-gray-500" data-v-382dae66>Days</span></div><span class="text-2xl font-bold text-gray-400" data-v-382dae66>:</span><div class="flex flex-col" data-v-382dae66><span class="text-3xl font-bold text-red-600" data-v-382dae66>${ssrInterpolate(countdown.value.hours)}</span><span class="text-xs text-gray-500" data-v-382dae66>Hours</span></div><span class="text-2xl font-bold text-gray-400" data-v-382dae66>:</span><div class="flex flex-col" data-v-382dae66><span class="text-3xl font-bold text-red-600" data-v-382dae66>${ssrInterpolate(countdown.value.minutes)}</span><span class="text-xs text-gray-500" data-v-382dae66>Minutes</span></div><span class="text-2xl font-bold text-gray-400" data-v-382dae66>:</span><div class="flex flex-col" data-v-382dae66><span class="text-3xl font-bold text-red-600" data-v-382dae66>${ssrInterpolate(countdown.value.seconds)}</span><span class="text-xs text-gray-500" data-v-382dae66>Seconds</span></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SaleCountdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SaleCountdown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-382dae66"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([]);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_sfc_main$5, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Slider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SaleCountdown, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ProductSlider, { products: products.value }, null, _parent2, _scopeId));
            _push2(`<div class="text-center mb-8" data-v-2fd0dd73${_scopeId}><span class="text-xs uppercase tracking-widest text-red-500 font-semibold" data-v-2fd0dd73${_scopeId}>Special Selection</span><h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2" data-v-2fd0dd73${_scopeId}>Special Products For You</h2></div><div id="IndexPage" class="max-w-[1350px] mx-auto px-2 mt-8" data-v-2fd0dd73${_scopeId}>`);
            if (products.value.length) {
              _push2(`<div class="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4" data-v-2fd0dd73${_scopeId}><!--[-->`);
              ssrRenderList(products.value, (product) => {
                _push2(`<div class="h-full" data-v-2fd0dd73${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/item/${product.id}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$2, { product }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$2, { product }, null, 8, ["product"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center text-gray-500 py-20" data-v-2fd0dd73${_scopeId}>${ssrInterpolate(loading.value ? "Please Wait..." : "No Product")}</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(Slider),
              createVNode(SaleCountdown),
              createVNode(ProductSlider, { products: products.value }, null, 8, ["products"]),
              createVNode("div", { class: "text-center mb-8" }, [
                createVNode("span", { class: "text-xs uppercase tracking-widest text-red-500 font-semibold" }, "Special Selection"),
                createVNode("h2", { class: "text-3xl md:text-4xl font-bold text-gray-800 mt-2" }, "Special Products For You")
              ]),
              createVNode("div", {
                id: "IndexPage",
                class: "max-w-[1350px] mx-auto px-2 mt-8"
              }, [
                products.value.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(products.value, (product) => {
                    return openBlock(), createBlock("div", {
                      key: product.id,
                      class: "h-full"
                    }, [
                      createVNode(_component_NuxtLink, {
                        to: `/item/${product.id}`
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, { product }, null, 8, ["product"])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center text-gray-500 py-20"
                }, toDisplayString(loading.value ? "Please Wait..." : "No Product"), 1))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fd0dd73"]]);

export { index as default };
//# sourceMappingURL=index-FZexB4NR.mjs.map
