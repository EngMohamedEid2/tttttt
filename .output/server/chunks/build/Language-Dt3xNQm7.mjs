import _sfc_main$1 from './index-CdatWNO3.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import { ref, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { OnClickOutside } from '@vueuse/components';
import { useI18n } from 'vue-i18n';
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
import 'swiper/vue';
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'swiper';

const _sfc_main = {
  __name: "Language",
  __ssrInlineRender: true,
  props: {
    style: { type: [String, Object], default: "basic" }
  },
  setup(__props) {
    const i18n = useI18n();
    let active = ref(false);
    let languages = ref([
      {
        language: "English",
        code: "en",
        icon: "us"
      },
      {
        language: "Arabic",
        code: "ar",
        icon: "sa"
      }
    ]);
    let selectedLanguage = ref({
      language: "English",
      code: "en",
      icon: "us"
    });
    function updateLang(language) {
      i18n.locale.value = language.code;
      selectedLanguage.value = language;
      if (language.code === "ar")
        ;
    }
    function selectLanguage(language) {
      active.value = false;
      localStorage.setItem("lang", JSON.stringify(language));
      updateLang(language);
    }
    function openDropDown() {
      active.value = !active.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "basic") {
        _push(ssrRenderComponent(unref(OnClickOutside), {
          class: "modal-content",
          onTrigger: ($event) => isRef(active) ? active.value = false : active = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_WidgetsButton, {
                classes: "btn dropdown-toggle",
                type: "button",
                id: "open_dropdown_basic_btn",
                onOnClick: ($event) => openDropDown()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([unref(selectedLanguage).icon, "iti-flag"])}"${_scopeId2}></div><span${_scopeId2}>${ssrInterpolate(unref(selectedLanguage).language)}</span>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["iti-flag", unref(selectedLanguage).icon]
                      }, null, 2),
                      createVNode("span", null, toDisplayString(unref(selectedLanguage).language), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="${ssrRenderClass([{ show: unref(active) }, "dropdown-menu dropdown-menu-end language-dropdown"])}"${_scopeId}><!--[-->`);
              ssrRenderList(unref(languages), (language) => {
                _push2(`<li${_scopeId}><button class="dropdown-item"${_scopeId}><div class="${ssrRenderClass([language.icon, "iti-flag"])}"${_scopeId}></div><span${_scopeId}>${ssrInterpolate(language.language)}</span></button></li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                createVNode(_component_WidgetsButton, {
                  classes: "btn dropdown-toggle",
                  type: "button",
                  id: "open_dropdown_basic_btn",
                  onOnClick: ($event) => openDropDown()
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: ["iti-flag", unref(selectedLanguage).icon]
                    }, null, 2),
                    createVNode("span", null, toDisplayString(unref(selectedLanguage).language), 1)
                  ]),
                  _: 1
                }, 8, ["onOnClick"]),
                createVNode("ul", {
                  class: ["dropdown-menu dropdown-menu-end language-dropdown", { show: unref(active) }]
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (language) => {
                    return openBlock(), createBlock("li", { key: language }, [
                      createVNode("button", {
                        class: "dropdown-item",
                        onClick: ($event) => selectLanguage(language)
                      }, [
                        createVNode("div", {
                          class: ["iti-flag", language.icon]
                        }, null, 2),
                        createVNode("span", null, toDisplayString(language.language), 1)
                      ], 8, ["onClick"])
                    ]);
                  }), 128))
                ], 2)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "standard") {
        _push(ssrRenderComponent(unref(OnClickOutside), {
          class: "modal-content",
          onTrigger: ($event) => isRef(active) ? active.value = false : active = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_WidgetsButton, {
                classes: "btn dropdown-toggle",
                type: "button",
                id: "open_dropdown_standard_btn",
                onOnClick: ($event) => openDropDown()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="iti-flag {{ selectedLanguage.icon }}"${_scopeId2}></div><span${_scopeId2}>${ssrInterpolate(unref(selectedLanguage).language)}</span>`);
                    _push3(ssrRenderComponent(_component_Icon, { name: "ri-arrow-{{ active ? 'up' : 'down' }}-s-line" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "iti-flag {{ selectedLanguage.icon }}" }),
                      createVNode("span", null, toDisplayString(unref(selectedLanguage).language), 1),
                      createVNode(_component_Icon, { name: "ri-arrow-{{ active ? 'up' : 'down' }}-s-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="${ssrRenderClass([{ show: unref(active) }, "dropdown-menu"])}"${_scopeId}><!--[-->`);
              ssrRenderList(unref(languages), (language) => {
                _push2(`<li${_scopeId}><a class="dropdown-item" href="javascript:void(0)"${_scopeId}><div class="${ssrRenderClass([language.icon, "iti-flag"])}"${_scopeId}></div><span${_scopeId}>${ssrInterpolate(language.language)}</span></a></li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                createVNode(_component_WidgetsButton, {
                  classes: "btn dropdown-toggle",
                  type: "button",
                  id: "open_dropdown_standard_btn",
                  onOnClick: ($event) => openDropDown()
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "iti-flag {{ selectedLanguage.icon }}" }),
                    createVNode("span", null, toDisplayString(unref(selectedLanguage).language), 1),
                    createVNode(_component_Icon, { name: "ri-arrow-{{ active ? 'up' : 'down' }}-s-line" })
                  ]),
                  _: 1
                }, 8, ["onOnClick"]),
                createVNode("ul", {
                  class: ["dropdown-menu", { show: unref(active) }]
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(languages), (language) => {
                    return openBlock(), createBlock("li", { key: language }, [
                      createVNode("a", {
                        class: "dropdown-item",
                        href: "javascript:void(0)",
                        onClick: ($event) => selectLanguage(language)
                      }, [
                        createVNode("div", {
                          class: ["iti-flag", language.icon]
                        }, null, 2),
                        createVNode("span", null, toDisplayString(language.language), 1)
                      ], 8, ["onClick"])
                    ]);
                  }), 128))
                ], 2)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/Language.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
