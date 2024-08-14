import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "Service",
  __ssrInlineRender: true,
  props: {
    sellerStore: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.sellerStore.status) {
        _push(`<section class="become-service section-b-space"><div class="container-fluid-lg"><div class="seller-title mb-5"><h2>${ssrInterpolate(__props.sellerStore.title)}</h2></div><div class="row"><div class="col-sm-6 col-lg-4 col-xxl-3"><div class="service-box">`);
        if (__props.sellerStore.service_1.image_url) {
          _push(`<div class="service-svg"><img${ssrRenderAttr("src", __props.sellerStore.service_1.image_url)} class="img-fluid" alt=""></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="service-detail"><h4>${ssrInterpolate(__props.sellerStore.service_1.title)}</h4><p>${ssrInterpolate(__props.sellerStore.service_1.description)}</p></div></div></div><div class="col-sm-6 col-lg-4 col-xxl-3"><div class="service-box">`);
        if (__props.sellerStore.service_2.image_url) {
          _push(`<div class="service-svg"><img${ssrRenderAttr("src", __props.sellerStore.service_2.image_url)} class="img-fluid" alt=""></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="service-detail"><h4>${ssrInterpolate(__props.sellerStore.service_2.title)}</h4><p>${ssrInterpolate(__props.sellerStore.service_2.description)}</p></div></div></div><div class="col-sm-6 col-lg-4 col-xxl-3"><div class="service-box">`);
        if (__props.sellerStore.service_3.image_url) {
          _push(`<div class="service-svg"><img${ssrRenderAttr("src", __props.sellerStore.service_3.image_url)} class="img-fluid" alt=""></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="service-detail"><h4>${ssrInterpolate(__props.sellerStore.service_3.title)}</h4><p>${ssrInterpolate(__props.sellerStore.service_3.description)}</p></div></div></div><div class="col-sm-6 col-lg-4 col-xxl-3"><div class="service-box">`);
        if (__props.sellerStore.service_4.image_url) {
          _push(`<div class="service-svg"><img${ssrRenderAttr("src", __props.sellerStore.service_4.image_url)} class="img-fluid" alt=""></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="service-detail"><h4>${ssrInterpolate(__props.sellerStore.service_4.title)}</h4><p>${ssrInterpolate(__props.sellerStore.service_4.description)}</p></div></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/BecomeSeller/Service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
