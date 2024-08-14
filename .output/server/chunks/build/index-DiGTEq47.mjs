import { ref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { s as storeToRefs, f as useUserStore, r as useCheckoutStore } from './server.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash';
import 'axios';
import 'vue-i18n';
import 'swiper/vue';
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'swiper';
import '@vueuse/components';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    addresses: Object,
    type: {
      default: "shipping",
      type: String
    },
    modelValue: Object
  },
  emits: ["selectAddress"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    const selectedAddressId = ref(null);
    let emit = __emit;
    storeToRefs(useUserStore());
    ref({ show: false, type: props.type });
    ref(null);
    watch(() => props.addresses, (newAddresses) => {
      if (newAddresses && newAddresses.length > 0) {
        selectedAddressId.value = newAddresses[0].id;
        emit("selectAddress", selectedAddressId.value);
      }
    });
    if (props.addresses && props.addresses.length > 0) {
      selectedAddressId.value = props.addresses[0].id;
      useCheckoutStore().SetCheckoutAddress({ type: props.type, id: selectedAddressId.value });
      emit("selectAddress", selectedAddressId.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!((_a = __props.addresses) == null ? void 0 : _a.length)) {
        _push(`<div class="empty-box"><h2>${ssrInterpolate(_ctx.$t("No Address Found"))}</h2></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row g-3"><!--[-->`);
      ssrRenderList(__props.addresses, (address, index) => {
        var _a2, _b;
        _push(`<div class="col-xxl-6 col-lg-12 col-md-6"><label${ssrRenderAttr("for", `adddress-${__props.type}-${index}`)}><div class="delivery-address-box"><div><div class="form-check"><input class="form-check-input" type="radio"${ssrRenderAttr("value", address.id)}${ssrRenderAttr("name", `address-${__props.type}`)}${ssrRenderAttr("id", `address-${__props.type}-${address.id}`)}${ssrIncludeBooleanAttr(index == 0) ? " checked" : ""}></div><ul class="delivery-address-detail"><li><h4 class="fw-semibold">${ssrInterpolate(address == null ? void 0 : address.title)}</h4></li><li><p class="text-content"><span class="text-title">${ssrInterpolate(_ctx.$t("Address"))}: </span> ${ssrInterpolate(address == null ? void 0 : address.street)}, ${ssrInterpolate(address == null ? void 0 : address.city)}, ${ssrInterpolate((_a2 = address == null ? void 0 : address.state) == null ? void 0 : _a2.name)}, ${ssrInterpolate((_b = address == null ? void 0 : address.country) == null ? void 0 : _b.name)}</p></li>`);
        if (address == null ? void 0 : address.pincode) {
          _push(`<li><h6 class="text-content"><span class="text-title">${ssrInterpolate(_ctx.$t("Pin Code"))}:</span> ${ssrInterpolate(address == null ? void 0 : address.pincode)}</h6></li>`);
        } else {
          _push(`<!---->`);
        }
        if (address == null ? void 0 : address.phone) {
          _push(`<li><h6 class="text-content mb-0"><span class="text-title">${ssrInterpolate(_ctx.$t("Phone"))} :</span> +${ssrInterpolate(address == null ? void 0 : address.country_code)} ${ssrInterpolate(address == null ? void 0 : address.phone)}</h6></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div></label></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Checkout/address-block/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
