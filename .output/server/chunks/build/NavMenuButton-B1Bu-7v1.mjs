import { d as __nuxt_component_1 } from './server.mjs';
import { ref, onUpdated, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "NavMenuButton",
  __ssrInlineRender: true,
  props: {
    show: Boolean
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    const active = ref(false);
    onUpdated(() => {
      active.value = props.show;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "navbar-toggler d-xl-none d-inline navbar-menu-button",
        type: "button"
      }, _attrs))}><span class="navbar-toggler-icon me-md-3">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:align-left" }, null, _parent));
      _push(`</span></button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/NavMenuButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
