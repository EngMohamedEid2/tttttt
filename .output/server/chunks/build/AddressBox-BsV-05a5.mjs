import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "AddressBox",
  __ssrInlineRender: true,
  props: {
    address: Object,
    user: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="label"><label>${ssrInterpolate((_a = __props.address) == null ? void 0 : _a.title)}</label></div><div class="table-responsive address-table"><table class="table"><tbody><tr><td colspan="2">${ssrInterpolate((_b = __props.user) == null ? void 0 : _b.name)}</td></tr><tr><td>${ssrInterpolate(_ctx.$t("Address"))} :</td><td><p>${ssrInterpolate((_c = __props.address) == null ? void 0 : _c.street)}, ${ssrInterpolate((_d = __props.address) == null ? void 0 : _d.city)}, ${ssrInterpolate((_f = (_e = __props.address) == null ? void 0 : _e.state) == null ? void 0 : _f.name)}, ${ssrInterpolate((_h = (_g = __props.address) == null ? void 0 : _g.country) == null ? void 0 : _h.name)}</p></td></tr><tr><td>${ssrInterpolate(_ctx.$t("Pin Code"))} :</td><td>${ssrInterpolate((_i = __props.address) == null ? void 0 : _i.pincode)}</td></tr><tr><td>${ssrInterpolate(_ctx.$t("Phone"))} :</td><td>+${ssrInterpolate((_j = __props.address) == null ? void 0 : _j.country_code)} ${ssrInterpolate((_k = __props.address) == null ? void 0 : _k.phone)}</td></tr></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Addresses/AddressBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
