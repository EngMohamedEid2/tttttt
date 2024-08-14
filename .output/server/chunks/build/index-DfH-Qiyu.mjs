import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$1 from './index-CdatWNO3.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import { ref, onUnmounted, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-B7AuSzxX.mjs';
import Cookies from 'js-cookie';
import '@vueuse/components';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const openModal = () => {
      showModal.value = true;
      Cookies.set("exit", "true");
    };
    const closeModal = () => {
      showModal.value = false;
    };
    const handleMouseOut = (event) => {
      if (event.clientY <= 0) {
        openModal();
        (void 0).removeEventListener("mouseout", handleMouseOut);
      }
    };
    onUnmounted(() => {
      (void 0).removeEventListener("mouseout", handleMouseOut);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, mergeProps({
        showModal: unref(showModal),
        modalClass: "theme-modal modal-lg exit-modal",
        onClose: ($event) => closeModal()
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-header p-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsButton, {
              classes: "btn btn-close",
              id: "profile_modal_close_btn",
              onOnClick: ($event) => closeModal()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "ri-close-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "ri-close-line" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="modal-box"${_scopeId}><div class="modal-image"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="newsletter"${_scopeId}></div><div class="modal-content"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="modal-logo" alt="logo"${_scopeId}><h2 class="text-title"${_scopeId}>${ssrInterpolate(_ctx.$t("Wait"))}<span class="theme-color"${_scopeId}>!</span></h2><h5${_scopeId}>${ssrInterpolate(_ctx.$t("I am sorry to see you go"))}</h5><p${_scopeId}>${ssrInterpolate("In order to earn 10 off your first purchase provide your email address")}</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "modal-header p-0" }, [
                createVNode(_component_WidgetsButton, {
                  classes: "btn btn-close",
                  id: "profile_modal_close_btn",
                  onOnClick: ($event) => closeModal()
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, { name: "ri-close-line" })
                  ]),
                  _: 1
                }, 8, ["onOnClick"])
              ]),
              createVNode("div", { class: "modal-box" }, [
                createVNode("div", { class: "modal-image" }, [
                  createVNode("img", {
                    src: _imports_0,
                    class: "img-fluid",
                    alt: "newsletter"
                  })
                ]),
                createVNode("div", { class: "modal-content" }, [
                  createVNode("div", null, [
                    createVNode("img", {
                      src: _imports_1,
                      class: "modal-logo",
                      alt: "logo"
                    }),
                    createVNode("h2", { class: "text-title" }, [
                      createTextVNode(toDisplayString(_ctx.$t("Wait")), 1),
                      createVNode("span", { class: "theme-color" }, "!")
                    ]),
                    createVNode("h5", null, toDisplayString(_ctx.$t("I am sorry to see you go")), 1),
                    createVNode("p", null, toDisplayString("In order to earn 10 off your first purchase provide your email address"))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/ExitModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
