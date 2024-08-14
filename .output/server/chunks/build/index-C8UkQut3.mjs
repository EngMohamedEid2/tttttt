import _sfc_main$1 from './Horizontal-Dkn6eSRD.mjs';
import _sfc_main$2 from './Vertical-DcNKOdfj.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './server.mjs';
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
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    style: [String, Object],
    classes: String,
    close: Boolean,
    product: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsProductBoxHorizontal = _sfc_main$1;
      const _component_WidgetsProductBoxVertical = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "horizontal") {
        _push(ssrRenderComponent(_component_WidgetsProductBoxHorizontal, {
          product: __props.product,
          classes: __props.classes,
          close: __props.close
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "vertical") {
        _push(ssrRenderComponent(_component_WidgetsProductBoxVertical, { product: __props.product }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/ProductBox/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
