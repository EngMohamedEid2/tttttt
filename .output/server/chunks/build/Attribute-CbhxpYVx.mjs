import { v as useCollectionStore, s as storeToRefs, H as HandleRequest } from './server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "Attribute",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    let store = useCollectionStore();
    let { filter, attribute, selectedAttributes } = storeToRefs(useCollectionStore());
    let { data, error } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("attribute", { key: "getAllAttributeInFilter1" })), __temp = await __temp, __restore(), __temp);
    if (!error.value) {
      attribute.value = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(attribute), (attributes, index) => {
        _push(`<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#attributes-dropdown${index}`)}><span>${ssrInterpolate(attributes.name)}</span></button></h2><div${ssrRenderAttr("id", `attributes-dropdown${index}`)} class="accordion-collapse collapse show"><div class="accordion-body"><ul class="category-list custom-padding custom-height"><!--[-->`);
        ssrRenderList(attributes == null ? void 0 : attributes.attribute_values, (attribute_value, index2) => {
          _push(`<li><div class="form-check ps-0 m-0 category-list-box"><input class="checkbox_animated" type="checkbox"${ssrRenderAttr("id", attribute_value.value)}${ssrRenderAttr("value", attribute_value.slug)}${ssrIncludeBooleanAttr(Array.isArray(unref(store).filterObject.selectedAttributes) ? ssrLooseContain(unref(store).filterObject.selectedAttributes, attribute_value.slug) : unref(store).filterObject.selectedAttributes) ? " checked" : ""}><label class="form-check-label color-label-box"${ssrRenderAttr("for", attribute_value.value)}>`);
          if (attributes.style === "color") {
            _push(`<div class="color-box" style="${ssrRenderStyle({ "background-color": attribute_value.hex_color })}"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="name">${ssrInterpolate(attribute_value.value)}</span></label></div></li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/filter/Attribute.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
