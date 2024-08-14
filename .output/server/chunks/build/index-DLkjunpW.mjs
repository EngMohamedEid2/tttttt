import _sfc_main$1 from './index-CdatWNO3.mjs';
import { s as storeToRefs, f as useUserStore, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$2 from './AddressBox-BsV-05a5.mjs';
import _sfc_main$3 from './index-Bmsaf34f.mjs';
import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$4 from './index-BdUW6PKo.mjs';
import _sfc_main$5 from './index-DCnfHsij.mjs';
import { ref, withCtx, createVNode, createTextVNode, toDisplayString, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './NonEmptyField-CvQGP-Qy.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/core';
import './NumberField-D_3QVr37.mjs';
import './country_code-DDslUgiY.mjs';
import './formValidator-CtAl43Qx.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let { UserInfo } = storeToRefs(useUserStore());
    let user = ref(UserInfo);
    let addresModal = ref(false);
    let deleteModals = ref(false);
    let addressId = ref(0);
    function addressModal(id, state = true) {
      addresModal.value = state;
      addressId.value = id;
    }
    function deleteModal(id, state = true) {
      deleteModals.value = state;
      addressId.value = id;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_AccountAddressesAddressBox = _sfc_main$2;
      const _component_WidgetsNoData = _sfc_main$3;
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_WidgetsModalsAddressModal = _sfc_main$4;
      const _component_WidgetsModalsDeleteModal = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="dashboard-address"><div class="title-header"><div class="d-flex align-items-center w-100 justify-content-between"><h5>${ssrInterpolate(_ctx.$t("Saved Address"))}</h5>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 ms-auto",
        type: "button",
        id: "add_address",
        onClick: (data) => {
          addressModal({ data });
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-add-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("Add Address"))}`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-add-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("Add Address")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if ((_b = (_a = unref(user)) == null ? void 0 : _a.address) == null ? void 0 : _b.length) {
        _push(`<div class="row g-sm-4 g-3"><!--[-->`);
        ssrRenderList((_c = unref(user)) == null ? void 0 : _c.address, (address, index) => {
          _push(`<div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6"><div class="address-box">`);
          _push(ssrRenderComponent(_component_AccountAddressesAddressBox, {
            address,
            user: unref(user)
          }, null, _parent));
          _push(`<div class="button-group">`);
          _push(ssrRenderComponent(_component_WidgetsButton, {
            classes: "btn btn-sm add-button",
            type: "button",
            id: "edit_address" + address.id,
            onClick: ($event) => addressModal(address == null ? void 0 : address.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "ri-edit-box-line" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("Edit"))}`);
              } else {
                return [
                  createVNode(_component_Icon, { name: "ri-edit-box-line" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("Edit")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_WidgetsButton, {
            classes: "btn btn-sm add-button",
            type: "button",
            id: "remove_address" + address.id,
            onClick: ($event) => deleteModal(address == null ? void 0 : address.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "ri-delete-bin-line" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("Remove"))}`);
              } else {
                return [
                  createVNode(_component_Icon, { name: "ri-delete-bin-line" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("Remove")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!((_e = (_d = unref(user)) == null ? void 0 : _d.address) == null ? void 0 : _e.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          class: "no-data-added",
          image: "/svg/empty-items.svg",
          text: "No Address Found",
          description: "You have not add any address yet"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(addresModal),
        onClose: ($event) => isRef(addresModal) ? addresModal.value = false : addresModal = false,
        classes: "modal-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsAddressModal, {
              addressId: unref(addressId),
              user: unref(UserInfo),
              onClose: ($event) => isRef(addresModal) ? addresModal.value = false : addresModal = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsAddressModal, {
                addressId: unref(addressId),
                user: unref(UserInfo),
                onClose: ($event) => isRef(addresModal) ? addresModal.value = false : addresModal = false
              }, null, 8, ["addressId", "user", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(deleteModals),
        onClose: ($event) => isRef(deleteModals) ? deleteModals.value = false : deleteModals = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsDeleteModal, {
              addressId: unref(addressId),
              onClose: ($event) => isRef(deleteModals) ? deleteModals.value = false : deleteModals = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsDeleteModal, {
                addressId: unref(addressId),
                onClose: ($event) => isRef(deleteModals) ? deleteModals.value = false : deleteModals = false
              }, null, 8, ["addressId", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Addresses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
