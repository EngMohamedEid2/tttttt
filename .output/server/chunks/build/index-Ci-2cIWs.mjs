import _sfc_main$1 from './SkeletonProductBox-XWsjMSl0.mjs';
import _sfc_main$2 from './index-C8UkQut3.mjs';
import _sfc_main$3 from './index-Bmsaf34f.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { u as useWishlistStore } from './wishlist-DasiP7YX.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
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
import './Vertical-DcNKOdfj.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let { wishlist } = storeToRefs(useWishlistStore());
    let skeletonLoader = ref(true);
    let skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    if (!wishlist.value.length) {
      useWishlistStore().GetWishlist();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_WidgetsProductBoxSkeletonProductBox = _sfc_main$1;
      const _component_WidgetsProductBox = _sfc_main$2;
      const _component_WidgetsNoData = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wishlist-section section-b-space" }, _attrs))}><div class="container-fluid-lg">`);
      if (unref(skeletonLoader)) {
        _push(`<div><div class="row g-sm-3 g-2"><!--[-->`);
        ssrRenderList(unref(skeletonItems), (item) => {
          _push(`<div class="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">`);
          _push(ssrRenderComponent(_component_WidgetsProductBoxSkeletonProductBox, null, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="row g-sm-3 g-2"><!--[-->`);
        ssrRenderList(unref(wishlist), (product, index) => {
          _push(`<div class="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">`);
          _push(ssrRenderComponent(_component_WidgetsProductBox, {
            product,
            close: true,
            style: "horizontal",
            classes: "product-box-3"
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (!((_a = unref(wishlist)) == null ? void 0 : _a.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          class: "no-data-added",
          image: "/svg/empty-items.svg",
          text: "No Items Added",
          description: "It appears that nothing has been added to your wishlist. Explore categories if you want to."
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Wishlist/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
