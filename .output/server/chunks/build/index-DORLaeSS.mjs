import { d as __nuxt_component_1 } from './server.mjs';
import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  props: {
    Data: Object
  },
  emits: ["changePage"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    ref(1);
    let pages = ref([]), totalPages = ref(0);
    const SetPages = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      pages.value = [];
      totalPages.value = Math.ceil(((_a = props.Data) == null ? void 0 : _a.total) / ((_b = props.Data) == null ? void 0 : _b.per_page));
      let startpage = totalPages.value === 4 ? 1 : ((_c = props.Data) == null ? void 0 : _c.current_page) === 1 || ((_d = props.Data) == null ? void 0 : _d.current_page) - 2 === 0 ? 1 : ((_e = props.Data) == null ? void 0 : _e.current_page) === totalPages.value ? ((_f = props.Data) == null ? void 0 : _f.current_page) - 2 : ((_g = props.Data) == null ? void 0 : _g.current_page) - 1;
      let endPage = totalPages.value === 4 ? 4 : ((_h = props.Data) == null ? void 0 : _h.current_page) === 1 ? ((_i = props.Data) == null ? void 0 : _i.current_page) + 2 : ((_j = props.Data) == null ? void 0 : _j.current_page) + 1 <= totalPages.value ? ((_k = props.Data) == null ? void 0 : _k.current_page) + 1 : (_l = props.Data) == null ? void 0 : _l.current_page;
      for (let i = startpage; i <= endPage; i++) {
        i <= totalPages.value && pages.value.push(i);
      }
    };
    SetPages();
    watch(
      () => props.Data,
      () => {
        SetPages();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_1;
      if ((_a = __props.Data) == null ? void 0 : _a.total) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "custome-pagination section-b-space" }, _attrs))}><ul class="pagination justify-content-center"><li class="${ssrRenderClass([[{ disabled: __props.Data.current_page === 1 }], "page-item"])}"><a class="page-link" href="javascript:void(0)">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:arrow-left-s-line" }, null, _parent));
        _push(`</a></li>`);
        if (__props.Data.current_page > 3 && unref(totalPages) > 4) {
          _push(`<li class="page-item"><a class="page-link" href="javascript:void(0)"> 1 </a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.Data.current_page > 3 && unref(totalPages) > 4) {
          _push(`<li class="page-item"><a class="page-link">...</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(pages), (page, index) => {
          _push(`<li class="${ssrRenderClass([[{ active: __props.Data.current_page === page }], "page-item"])}"><a class="page-link" href="javascript:void(0)">${ssrInterpolate(page)}</a></li>`);
        });
        _push(`<!--]-->`);
        if (__props.Data.current_page + 1 < unref(totalPages) && unref(totalPages) > 4) {
          _push(`<li class="page-item"><a class="page-link">...</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.Data.current_page + 1 < unref(totalPages) && unref(totalPages) > 4) {
          _push(`<li class="page-item"><a class="page-link" href="javascript:void(0)">${ssrInterpolate(unref(totalPages))}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li class="${ssrRenderClass([[{ disabled: __props.Data.current_page === unref(totalPages) }], "page-item"])}"><a class="page-link" href="javascript:void(0)">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:arrow-right-s-line" }, null, _parent));
        _push(`</a></li></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Pagination/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
