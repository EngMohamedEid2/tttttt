import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$1 from './index-3nSzk2YZ.mjs';
import _sfc_main$2 from './index-BtYfkuY0.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from './server.mjs';
import '@vueuse/components';
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
import './index-CdatWNO3.mjs';
import './NonEmptyField-CvQGP-Qy.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './EmailField-BojWyXd0.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/core';
import './NumberField-D_3QVr37.mjs';
import './form-BZIsiZ8w.mjs';
import './country_code-DDslUgiY.mjs';
import './formValidator-CtAl43Qx.mjs';
import './PasswordField-7r8oKleI.mjs';
import './RePasswordField-DTJ5pMq3.mjs';

const _imports_0 = publicAssetsURL("/images/inner-page/dashboard-profile.png");
const _sfc_main = {
  __name: "ProfileInformation",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    var _a, _b, _c, _d, _e;
    let props = __props;
    let initialProfileData = ref({
      name: "",
      email: "",
      country_code: "",
      phone: "",
      status: 0
    });
    let editProfile = ref(false);
    let chnagePassword = ref(false);
    initialProfileData.value.name = (_a = props.user) == null ? void 0 : _a.name;
    initialProfileData.value.email = (_b = props.user) == null ? void 0 : _b.email;
    initialProfileData.value.country_code = (_c = props.user) == null ? void 0 : _c.country_code;
    initialProfileData.value.phone = (_d = props.user) == null ? void 0 : _d.phone;
    initialProfileData.value.status = (_e = props.user) == null ? void 0 : _e.status;
    function profileModal({ state = true }) {
      editProfile.value = state;
    }
    function changePasswordModal({ state = true }) {
      chnagePassword.value = state;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_WidgetsModalsEditProdileModal = _sfc_main$1;
      const _component_WidgetsModalsChnagePasswordModal = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-xxl-7"><div class="dashboard-title mb-3"><h3>${ssrInterpolate("Profile Information")}</h3></div><div class="table-responsive"><table class="table"><tbody><tr><td>${ssrInterpolate("Name")}:</td><td>${ssrInterpolate((_a2 = __props.user) == null ? void 0 : _a2.name)}</td></tr><tr><td>${ssrInterpolate("Phone")}:</td><td>+${ssrInterpolate((_b2 = __props.user) == null ? void 0 : _b2.country_code)} ${ssrInterpolate((_c2 = __props.user) == null ? void 0 : _c2.phone)}</td></tr>`);
      if (__props.user.address) {
        _push(`<tr><td>${ssrInterpolate("Address")}:</td><td>${ssrInterpolate(__props.user.address[0].street)} ${ssrInterpolate(__props.user.address[0].city)}, ${ssrInterpolate(__props.user.address[0].state.name)}, ${ssrInterpolate(__props.user.address[0].country.name)} ${ssrInterpolate(__props.user.address[0].pincode)}</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div><div class="dashboard-title mb-3"><h3>${ssrInterpolate("Login Details")}</h3></div><div class="table-responsive"><table class="table"><tbody><tr><td>${ssrInterpolate("Email")} :</td><td>${ssrInterpolate((_d2 = __props.user) == null ? void 0 : _d2.email)} <a href="javascript:void(0)">${ssrInterpolate("Edit")}</a></td></tr><tr><td>${ssrInterpolate("Password")} :</td><td> \u25CF\u25CF\u25CF\u25CF\u25CF\u25CF <a href="javascript:void(0)">${ssrInterpolate("Edit")}</a></td></tr></tbody></table></div></div><div class="col-xxl-5"><div class="profile-image"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="dashboard-profile"></div></div></div>`);
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(editProfile),
        onClose: ($event) => profileModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsEditProdileModal, {
              initialData: unref(initialProfileData),
              onClose: ($event) => profileModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsEditProdileModal, {
                initialData: unref(initialProfileData),
                onClose: ($event) => profileModal({ state: false })
              }, null, 8, ["initialData", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(chnagePassword),
        onClose: ($event) => changePasswordModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsChnagePasswordModal, {
              onClose: ($event) => changePasswordModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsChnagePasswordModal, {
                onClose: ($event) => changePasswordModal({ state: false })
              }, null, 8, ["onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Dashboard/ProfileInformation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
