import _sfc_main$1 from './index-B9FN2ZvK.mjs';
import { i as useRoute } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './index-BB3w89tg.mjs';
import './nuxt-link-D35ckuRb.mjs';
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
import './index-Dm9iJoV3.mjs';
import './Images-LLHPLOmm.mjs';
import './index-BPCZWda6.mjs';
import './index-CJpnbIWS.mjs';
import './index-BJd3hL9t.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './compare-CJlobl4e.mjs';
import './wishlist-DasiP7YX.mjs';
import './index-HKl3TCDR.mjs';
import './index-De4InbXS.mjs';
import './index-36xWC6J0.mjs';
import './index-B8xgC6e1.mjs';
import './index-BAqQL5bv.mjs';
import './index-Dvm0mglo.mjs';
import './index-BeMhFN0r.mjs';
import './index-BcRmbEuH.mjs';
import './index-Ce_Crazo.mjs';
import './index-pGv8rus9.mjs';
import './index-BFJGnOqz.mjs';
import './index-Dlt19KKI.mjs';
import './index-Chsussq8.mjs';
import './index-Bmsaf34f.mjs';
import './index-4U42YdIQ.mjs';
import './index-BIIz-G6l.mjs';
import './index-BLH2nixh.mjs';
import './index-DDk_TMsi.mjs';
import './index-WMKtNC4F.mjs';
import './index-CyTwRXik.mjs';
import './index-uA_ar0VB.mjs';
import './index-D2hMtD5O.mjs';
import './Image-C9oxrcUc.mjs';
import './index-oENEhLu5.mjs';
import './Image-Pbz6eKoP.mjs';
import './index-xfyZBlSB.mjs';
import './Image-BXBp7EvI.mjs';
import './index-B8lFTWVo.mjs';
import './index-CgsvLzA0.mjs';
import './index-DP_8h5ta.mjs';
import './index-DFV7j_wu.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bj1ttgz6.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    console.log(useRoute().params);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopProductDetails = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ShopProductDetails, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
