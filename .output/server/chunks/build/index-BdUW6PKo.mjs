import _sfc_main$1 from './index-CdatWNO3.mjs';
import { g as defineStore, s as storeToRefs, h as useFetch, B as BaseUrl, G as GetHeaders, f as useUserStore, d as __nuxt_component_1, H as HandleRequest } from './server.mjs';
import _sfc_main$2 from './NonEmptyField-CvQGP-Qy.mjs';
import __nuxt_component_2 from './SearchDropdown-DHfaS-o_.mjs';
import _sfc_main$3 from './NumberField-D_3QVr37.mjs';
import { ref, watch, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { A as AllCountryCode } from './country_code-DDslUgiY.mjs';
import { i as isFormValid } from './formValidator-CtAl43Qx.mjs';
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
import './inputFieldValidators-6AcCCHeQ.mjs';
import '@vueuse/core';

const useLocationStore = defineStore("location-store", () => {
  var countries = ref([]), ResponseCountries = ref([]), ResponseStates = ref([]), states = ref([]);
  const GetData = async () => {
    let { data: Countries, error: CountryError } = await HandleRequest(
      "country",
      { key: "getAllCountries" }
    );
    if (!CountryError.value) {
      ResponseCountries.value = Countries.value;
    }
    let { data: States, error: StateErrors } = await HandleRequest(
      "state",
      { key: "getAllStates" }
    );
    if (!StateErrors.value) {
      ResponseStates.value = States.value;
    }
  };
  GetData();
  return {
    countries,
    states,
    ResponseCountries,
    ResponseStates
  };
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    addressId: Object,
    user: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let emit = __emit;
    let { countries, states: allStates, ResponseStates, ResponseCountries } = storeToRefs(useLocationStore());
    let input = ref({
      title: { data: "" },
      street: { data: "" },
      city: { data: "" },
      phone: { data: "" },
      pincode: { data: "" },
      country_id: { data: "" },
      country_code: { data: "" },
      state_id: { data: "" }
    });
    let formSubmitted = ref(false);
    function getAddress() {
      if (typeof props.addressId == "number") {
        let filterUser = props.user.address.filter((item) => item.id == props.addressId)[0];
        Object.keys(input.value).forEach((key) => input.value[key].data = filterUser[key]);
      }
    }
    getAddress();
    ResponseCountries.value.filter((item) => item.id == input.value.country_id.data);
    let states = ref();
    watch(() => input.value.country_id, () => {
      setStatesArray();
    }, { deep: true });
    function setStatesArray() {
      var countryId = input.value.country_id.data;
      states.value = ResponseStates.value.filter((state) => state.country_id == countryId);
    }
    async function setAddressCard() {
      formSubmitted.value = true;
      if (isFormValid({ formData: input.value })) {
        if (typeof props.addressId == "number") {
          await useFetch("/address/" + props.addressId, {
            baseURL: BaseUrl,
            method: "put",
            headers: GetHeaders(),
            body: {
              title: input.value.title.data,
              street: input.value.street.data,
              city: input.value.city.data,
              phone: input.value.phone.data,
              pincode: input.value.pincode.data,
              country_code: input.value.country_code.data,
              country_id: input.value.country_id.data,
              state_id: input.value.state_id.data,
              user_id: props.user.id
            },
            key: "AddAddress"
          }, "$bRhwrZSLvD");
        } else {
          await useFetch("/address", {
            baseURL: BaseUrl,
            method: "post",
            headers: GetHeaders(),
            body: {
              title: input.value.title.data,
              street: input.value.street.data,
              city: input.value.city.data,
              phone: input.value.phone.data,
              pincode: input.value.pincode.data,
              country_code: input.value.country_code.data,
              country_id: input.value.country_id.data,
              state_id: input.value.state_id.data,
              user_id: props.user.id
            },
            key: "AddAddress"
          }, "$mzsXaH2gaW");
        }
      }
      useUserStore().UpdateUserInfo();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsInputFieldsNonEmptyField = _sfc_main$2;
      const _component_WidgetsInputFieldsSearchDropdown = __nuxt_component_2;
      const _component_WidgetsInputFieldsNumberField = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-header"><h3 class="fw-semibold">${ssrInterpolate(typeof __props.addressId == "number" ? "Edit Address" : "Add Address")}</h3>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-close",
        id: "address_modal_close_btn",
        onOnClick: () => {
          unref(emit)("close");
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-close-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-close-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><form><div class="modal-body address-form"><div class="row g-4"><div class="col-xxl-12"><div class=""><label class="form-label" for="pname">${ssrInterpolate("Title")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).title,
        "onUpdate:modelValue": ($event) => unref(input).title = $event,
        id: "title",
        placeholder: "Enter Title"
      }, null, _parent));
      _push(`</div></div><div class="col-12"><div class=""><label class="form-label" for="address1">${ssrInterpolate("Address")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).street,
        "onUpdate:modelValue": ($event) => unref(input).street = $event,
        id: "title",
        placeholder: "Enter Address"
      }, null, _parent));
      _push(`</div></div><div class="col-6"><div class=""><label class="form-label me-2" for="address1">${ssrInterpolate("Country")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsSearchDropdown, {
        "get-value-key": "id",
        "display-key": "name",
        "form-submitted": unref(formSubmitted),
        modelValue: unref(input).country_id,
        "onUpdate:modelValue": ($event) => unref(input).country_id = $event,
        placeholder: "Select Country",
        holdKey: true,
        "display-value": (_b = (_a = unref(input).country_id) == null ? void 0 : _a.selected) == null ? void 0 : _b.name,
        options: unref(ResponseCountries),
        initialData: unref(ResponseCountries).filter((item) => item.id == unref(input).country_id.data)[0]
      }, null, _parent));
      _push(`</div></div><div class="col-6"><div class=""><label class="form-label me-2" for="address1">${ssrInterpolate("State")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsSearchDropdown, {
        "get-value-key": "id",
        placeholder: "Select State",
        "display-key": "name",
        "form-submitted": unref(formSubmitted),
        modelValue: unref(input).state_id,
        "onUpdate:modelValue": ($event) => unref(input).state_id = $event,
        "display-value": (_d = (_c = unref(input).state_id) == null ? void 0 : _c.selected) == null ? void 0 : _d.name,
        options: unref(states),
        initialData: unref(ResponseStates).filter((item) => item.id == unref(input).state_id.data)[0]
      }, null, _parent));
      _push(`</div></div><div class="col-6"><div class=""><label class="form-label" for="address1">${ssrInterpolate("City")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).city,
        "onUpdate:modelValue": ($event) => unref(input).city = $event,
        id: "title",
        placeholder: "Enter City"
      }, null, _parent));
      _push(`</div></div><div class="col-6"><div class=""><label class="form-label" for="address1">${ssrInterpolate("Pincode")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).pincode,
        "onUpdate:modelValue": ($event) => unref(input).pincode = $event,
        id: "title",
        placeholder: "Enter Pincode"
      }, null, _parent));
      _push(`</div></div><div class="col-12 phone-field"><div class=""><div class="d-flex row"><label class="form-label" for="phone">${ssrInterpolate("Phone Number")}</label><span class="col-sm-2 col-3 pe-0">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsSearchDropdown, {
        formSubmitted: unref(formSubmitted),
        "select-first": true,
        getValueKey: "id",
        "display-key": "name",
        modelValue: unref(input).country_code,
        "onUpdate:modelValue": ($event) => unref(input).country_code = $event,
        "form-submitted": unref(formSubmitted),
        options: unref(AllCountryCode)
      }, null, _parent));
      _push(`</span><span class="col-sm-10 col-9 ps-0">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNumberField, {
        type: "number",
        formSubmitted: unref(formSubmitted),
        classes: "form-control",
        errorMessage: "phone number is required.",
        modelValue: unref(input).phone,
        "onUpdate:modelValue": ($event) => unref(input).phone = $event,
        id: "phone",
        placeholder: "Enter Phone Number"
      }, null, _parent));
      _push(`</span></div></div></div></div><div class="modal-footer">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-theme-outline btn-md fw-bold",
        type: "button",
        id: "cancel_addres_btn",
        onOnClick: () => {
          unref(emit)("close");
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("Cancel")}`);
          } else {
            return [
              createTextVNode(toDisplayString("Cancel"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn theme-bg-color btn-md fw-bold text-light",
        id: "submit_address_btn",
        onClick: ($event) => setAddressCard()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("Submit")}`);
          } else {
            return [
              createTextVNode(toDisplayString("Submit"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/AddressModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
