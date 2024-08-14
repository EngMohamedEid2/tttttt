import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { e as useDataStore, s as storeToRefs, H as HandleRequest, d as __nuxt_component_1 } from './server.mjs';
import { ref, withAsyncContext, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useDataStore().GetProduct();
    storeToRefs(useDataStore());
    let product = ref();
    let show = ref(false);
    let min = ref(10);
    let popup_enable = ref(true);
    [__temp, __restore] = withAsyncContext(() => HandleRequest(`product`, {
      key: "getProductTopToSave"
    })), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      if (unref(product)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["media recently-purchase", { show: unref(popup_enable) ? unref(show) : unref(popup_enable) }]
        }, _attrs))}><img${ssrRenderAttr(
          "src",
          unref(product).product_thumbnail ? unref(product).product_thumbnail.original_url : "/images/product.png"
        )} class="media-height" alt="product"><div class="media-body"><div><div class="title d-block mb-0">${ssrInterpolate(_ctx.$t("Someone Recently Purchased"))}</div>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/product/${unref(product).slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="product-name"${_scopeId}>${ssrInterpolate(unref(product).name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "product-name" }, toDisplayString(unref(product).name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<small class="timeAgo">${ssrInterpolate(unref(min))} ${ssrInterpolate(_ctx.$t("Minutes Ago"))}</small></div></div><a href="javascript:void(0)" class="close-popup">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:close-fill" }, null, _parent));
        _push(`</a></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/RecentlyPurchasePoppup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
