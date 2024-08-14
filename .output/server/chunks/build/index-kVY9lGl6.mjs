import _sfc_main$1 from './index-BX6k5hJy.mjs';
import _sfc_main$2 from './index-DEbpnvkR.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { s as storeToRefs, e as useDataStore } from './server.mjs';
import './index-Ciwgdybr.mjs';
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
import './Category-1rvSbpeA.mjs';
import './Attribute-CbhxpYVx.mjs';
import './Price-BZgpsa8Q.mjs';
import './Rating-D50GE10J.mjs';
import './index-C9z-JUPy.mjs';
import './SearchDropdownInput-BRStx1Rm.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-link-D35ckuRb.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';
import './index-DORLaeSS.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    filter: Object,
    offCanvasMenu: Boolean,
    layout: String
  },
  setup(__props) {
    let { offCanvasMenu } = storeToRefs(useDataStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopCollectionWidgetsSidebar = _sfc_main$1;
      const _component_ShopCollectionWidgetsCollectionProduct = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-b-space shop-section filter-offcanvas" }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-12"><div class="${ssrRenderClass([{ show: unref(offCanvasMenu) }, "overlay"])}"></div><div class="${ssrRenderClass([{ show: unref(offCanvasMenu) }, "left-box top-filter"])}">`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsSidebar, { filter: __props.filter }, null, _parent));
      _push(`</div></div><div class="col-12">`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsCollectionProduct, {
        filter: __props.filter,
        activeMenu: unref(offCanvasMenu)
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/OffCanvasFilter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
