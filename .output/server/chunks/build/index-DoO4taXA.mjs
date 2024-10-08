import _sfc_main$1 from './index-BB3w89tg.mjs';
import _sfc_main$2 from './index-Ci-2cIWs.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { u as useWishlistStore } from './wishlist-DasiP7YX.mjs';
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
import './SkeletonProductBox-XWsjMSl0.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var breadcrumbs = { page: "Wishlist", links: [{ name: "Wishlist" }] };
    let { wishlist } = storeToRefs(useWishlistStore());
    if (!wishlist.value.length) {
      useWishlistStore().GetWishlistItems();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_ShopWishlist = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(ssrRenderComponent(_component_ShopWishlist, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wishlist/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
