import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    tabs: Array,
    activeTab: Object
  },
  emits: ["handleActive"],
  setup(__props, { emit: __emit }) {
    let activeTab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-section-box mt-0" }, _attrs))}><ul class="nav nav-tabs custom-nav" id="pills-tab"><!--[-->`);
      ssrRenderList(__props.tabs, (tab, index) => {
        _push(`<li class="nav-item" role="presentation"><button class="${ssrRenderClass([[{ "tab-error": tab.errors }, { active: index == unref(activeTab) }], "nav-link"])}"${ssrRenderAttr("id", `${tab.id}-tab`)} type="button">${ssrInterpolate(_ctx.$t(tab.title))}</button></li>`);
      });
      _push(`<!--]--></ul><div class="tab-content custom-tab" id="pills-tabContent"><!--[-->`);
      ssrRenderList(__props.tabs, (tab, index) => {
        _push(`<div class="${ssrRenderClass([[{ "active show": index == unref(activeTab) }], "tab-pane fade"])}"${ssrRenderAttr("id", tab.id)} role="tabpanel">`);
        ssrRenderSlot(_ctx.$slots, tab.id, {}, null, _push, _parent);
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/WapperTab/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
