import { ref, withCtx, unref, createVNode, withModifiers, createBlock, openBlock, Fragment, createTextVNode, toRefs, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './MainLayout-PqAgMAFQ.mjs';
import { Icon } from '@iconify/vue';
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
import './server.mjs';
import 'pinia';
import 'vue-router';
import './supabaseClient-5e-HC0v9.mjs';
import '@supabase/supabase-js';
import './nuxt-link-CshMov4q.mjs';

const _sfc_main$1 = {
  __name: "Textinput",
  __ssrInlineRender: true,
  props: {
    input: String,
    placeholder: String,
    max: Number,
    inputType: {
      type: String,
      default: "text"
    },
    error: {
      type: String,
      default: ""
    }
  },
  emits: ["update:input"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { input, error } = toRefs(props);
    let isFocused = ref(false);
    const emit = __emit;
    const inputComputed = computed({
      get: () => input.value,
      set: (val) => emit("update:input", val)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("maxlength", __props.max)}${ssrRenderAttr("type", __props.inputType)}${ssrRenderDynamicModel(__props.inputType, inputComputed.value, null)} autocomplete="off" class="${ssrRenderClass([[
        "border",
        unref(error) ? "border-red-500" : unref(isFocused) ? "border-red-500 bg-red-50" : "border-[#EFF0FB] bg-white"
      ], "w-full text-sm rounded-lg p-3 placeholder-gray-500 focus:outline-none transition-colors duration-200"])}">`);
      if (unref(error)) {
        _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/textinput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "address",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    const contactName = ref("");
    const address = ref("");
    const zipCode = ref("");
    const city = ref("");
    const country = ref("");
    const error = ref(null);
    const isWorking = ref(false);
    const submit = async () => {
      isWorking.value = true;
      error.value = null;
      if (!contactName.value)
        error.value = { type: "contactName", message: "Contact Name is required" };
      else if (!address.value)
        error.value = { type: "address", message: "Address is required" };
      else if (!zipCode.value)
        error.value = { type: "zipCode", message: "Zip Code is required" };
      else if (!city.value)
        error.value = { type: "city", message: "City is required" };
      else if (!country.value)
        error.value = { type: "country", message: "Country is required" };
      if (error.value) {
        isWorking.value = false;
        return;
      }
      try {
        console.log("Submitting:", {
          contactName: contactName.value,
          address: address.value,
          zipCode: zipCode.value,
          city: city.value,
          country: country.value
        });
        await new Promise((resolve) => setTimeout(resolve, 1e3));
      } finally {
        isWorking.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="AddressPage" class="min-h-screen w-full flex justify-center items-start pt-10 px-3"${_scopeId}><div class="bg-white w-full max-w-[500px] rounded-xl p-5 border border-gray-200"${_scopeId}><h1 class="text-2xl font-bold mb-4 text-center"${_scopeId}> Address Details </h1><form class="space-y-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mb-5 border border-gray-300 rounded-lg",
              placeholder: "Contact Name",
              input: contactName.value,
              "onUpdate:input": ($event) => contactName.value = $event,
              inputType: "text",
              error: error.value?.type === "contactName" ? error.value.message : ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mb-5 border border-gray-300 rounded-lg",
              placeholder: "Address",
              input: address.value,
              "onUpdate:input": ($event) => address.value = $event,
              inputType: "text",
              error: error.value?.type === "address" ? error.value.message : ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mb-5 border border-gray-300 rounded-lg",
              placeholder: "Zip Code",
              input: zipCode.value,
              "onUpdate:input": ($event) => zipCode.value = $event,
              inputType: "text",
              error: error.value?.type === "zipCode" ? error.value.message : ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mb-5 border border-gray-300 rounded-lg",
              placeholder: "City",
              input: city.value,
              "onUpdate:input": ($event) => city.value = $event,
              inputType: "text",
              error: error.value?.type === "city" ? error.value.message : ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "mb-5 border border-gray-300 rounded-lg",
              placeholder: "Country",
              input: country.value,
              "onUpdate:input": ($event) => country.value = $event,
              inputType: "text",
              error: error.value?.type === "country" ? error.value.message : ""
            }, null, _parent2, _scopeId));
            _push2(`<button${ssrIncludeBooleanAttr(isWorking.value) ? " disabled" : ""} type="submit" class="mt-4 bg-gradient-to-r from-[#FE630c] to-[#FF3200] text-white text-[20px] font-semibold py-2 rounded-lg p-5 cursor-pointer flex justify-center m-auto disabled:opacity-50"${_scopeId}>`);
            if (!isWorking.value) {
              _push2(`<!--[-->Update Address<!--]-->`);
            } else {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "eos-icons:loading",
                size: "45"
              }, null, _parent2, _scopeId));
            }
            _push2(`</button></form></div></div>`);
          } else {
            return [
              createVNode("div", {
                id: "AddressPage",
                class: "min-h-screen w-full flex justify-center items-start pt-10 px-3"
              }, [
                createVNode("div", { class: "bg-white w-full max-w-[500px] rounded-xl p-5 border border-gray-200" }, [
                  createVNode("h1", { class: "text-2xl font-bold mb-4 text-center" }, " Address Details "),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "space-y-3"
                  }, [
                    createVNode(_sfc_main$1, {
                      class: "mb-5 border border-gray-300 rounded-lg",
                      placeholder: "Contact Name",
                      input: contactName.value,
                      "onUpdate:input": ($event) => contactName.value = $event,
                      inputType: "text",
                      error: error.value?.type === "contactName" ? error.value.message : ""
                    }, null, 8, ["input", "onUpdate:input", "error"]),
                    createVNode(_sfc_main$1, {
                      class: "mb-5 border border-gray-300 rounded-lg",
                      placeholder: "Address",
                      input: address.value,
                      "onUpdate:input": ($event) => address.value = $event,
                      inputType: "text",
                      error: error.value?.type === "address" ? error.value.message : ""
                    }, null, 8, ["input", "onUpdate:input", "error"]),
                    createVNode(_sfc_main$1, {
                      class: "mb-5 border border-gray-300 rounded-lg",
                      placeholder: "Zip Code",
                      input: zipCode.value,
                      "onUpdate:input": ($event) => zipCode.value = $event,
                      inputType: "text",
                      error: error.value?.type === "zipCode" ? error.value.message : ""
                    }, null, 8, ["input", "onUpdate:input", "error"]),
                    createVNode(_sfc_main$1, {
                      class: "mb-5 border border-gray-300 rounded-lg",
                      placeholder: "City",
                      input: city.value,
                      "onUpdate:input": ($event) => city.value = $event,
                      inputType: "text",
                      error: error.value?.type === "city" ? error.value.message : ""
                    }, null, 8, ["input", "onUpdate:input", "error"]),
                    createVNode(_sfc_main$1, {
                      class: "mb-5 border border-gray-300 rounded-lg",
                      placeholder: "Country",
                      input: country.value,
                      "onUpdate:input": ($event) => country.value = $event,
                      inputType: "text",
                      error: error.value?.type === "country" ? error.value.message : ""
                    }, null, 8, ["input", "onUpdate:input", "error"]),
                    createVNode("button", {
                      disabled: isWorking.value,
                      type: "submit",
                      class: "mt-4 bg-gradient-to-r from-[#FE630c] to-[#FF3200] text-white text-[20px] font-semibold py-2 rounded-lg p-5 cursor-pointer flex justify-center m-auto disabled:opacity-50"
                    }, [
                      !isWorking.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode("Update Address")
                      ], 64)) : (openBlock(), createBlock(unref(Icon), {
                        key: 1,
                        icon: "eos-icons:loading",
                        size: "45"
                      }))
                    ], 8, ["disabled"])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=address-B1-PKoRE.mjs.map
