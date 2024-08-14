import { ref, watch, unref, isRef, withCtx, createVNode, withDirectives, withModifiers, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { _ as _export_sfc, a as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { OnClickOutside } from '@vueuse/components';
import { useDebounceFn } from '@vueuse/core';
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
  __name: "SearchDropdown",
  __ssrInlineRender: true,
  props: {
    displayValue: String,
    modelValue: Object,
    options: Array,
    formSubmitted: Boolean,
    initialData: {
      type: [Object, Boolean],
      default: false
    },
    placeholder: { default: "Select", type: String },
    NewRecordLink: { type: String },
    disableClearButton: Boolean,
    displayKey: {
      default: "name",
      type: String
    },
    getValueKey: String,
    selectFirst: [Boolean, Number, String],
    checkValidation: { type: Boolean, default: true },
    errormessage: String,
    helptext: String,
    holdKey: Boolean
  },
  emits: ["update:modelValue", "vendersearch"],
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a, _b;
    let props = __props;
    let emit = __emit, selectedValue = ref("");
    let showDropDown = ref(false), valuesToShow = ref([]), search = ref(""), isValid = ref(false);
    let objToEmit = props.modelValue;
    objToEmit.type = "dropdown";
    emit("update:modelValue", objToEmit);
    !props.initialData && props.selectFirst && ((_a = props == null ? void 0 : props.options) == null ? void 0 : _a.length) && handleSelect(props == null ? void 0 : props.options[0]);
    function handleSelect(option) {
      isValid.value = true;
      selectedValue.value = option[props.displayKey];
      let emitValues = props.modelValue;
      emitValues.data = props.getValueKey ? option[props.getValueKey] : option, emitValues.errorMessage = isValid.value ? 0 : "Please Select An Option", emitValues.selected = option;
      search.value = selectedValue.value;
      showDropDown.value = false;
      emit("update:modelValue", emitValues);
    }
    let modelData = props.modelValue.selected;
    modelData && handleSelect(modelData);
    props.initialData && handleSelect(props.initialData);
    ((_b = props.modelValue) == null ? void 0 : _b.data) && (isValid.value = true);
    valuesToShow.value = props.options || [];
    const CheckValidation = () => {
      let objToEmit2 = props.modelValue;
      props.formSubmitted && !isValid.value ? objToEmit2.errorMessage = "Please Select An Option" : objToEmit2.errorMessage = false;
      emit("update:modelValue", objToEmit2);
    };
    const ClearInput = () => {
      selectedValue.value = "";
      search.value = "";
      isValid.value = false;
      emit("update:modelValue", {});
    };
    const updateSearch = useDebounceFn((value) => {
      let valueToEmit = props.modelValue;
      valueToEmit.search = value;
      emit("update:modelValue", valueToEmit);
    }, 500, { maxWait: 2e3 });
    watch(() => {
      var _a2;
      return (_a2 = props.modelValue) == null ? void 0 : _a2.selected;
    }, () => {
      props.modelValue.selected && handleSelect(props.modelValue.selected);
    }, { deep: true });
    watch(() => [props.formSubmitted, props.modelValue], () => {
      CheckValidation();
    }, { deep: true });
    watch(() => {
      var _a2;
      return (_a2 = props.modelValue) == null ? void 0 : _a2.displayValue;
    }, () => {
      var _a2, _b2, _c;
      if ((_a2 = props.modelValue) == null ? void 0 : _a2.displayValue) {
        search.value = (_b2 = props.modelValue) == null ? void 0 : _b2.displayValue;
        selectedValue.value = (_c = props.modelValue) == null ? void 0 : _c.displayValue;
      }
    }, { deep: true });
    watch(() => props.options, () => {
      valuesToShow.value = props.options;
    }, { deep: true });
    watch(() => showDropDown, () => {
      showDropDown.value && (search.value = "");
    }, { deep: true });
    watch(() => search, () => {
      var _a2;
      valuesToShow.value = (_a2 = props.options) == null ? void 0 : _a2.filter((item) => {
        var _a3, _b2;
        return (_b2 = item[props.displayKey]) == null ? void 0 : _b2.toLowerCase().includes((_a3 = search.value) == null ? void 0 : _a3.toLowerCase());
      });
    }, { deep: true });
    __expose({ ClearInput });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c2ec5994>`);
      _push(ssrRenderComponent(unref(OnClickOutside), {
        class: "btn-group",
        onTrigger: () => {
          isRef(showDropDown) ? showDropDown.value = false : showDropDown = false;
          isRef(search) ? search.value = unref(selectedValue) : search = unref(selectedValue);
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="custom-select-box" data-v-c2ec5994${_scopeId}><input type="text"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", unref(search))} class="form-control form-select" data-v-c2ec5994${_scopeId}>`);
            if (unref(showDropDown)) {
              _push2(`<div class="box-content" data-v-c2ec5994${_scopeId}>`);
              if (unref(valuesToShow).length) {
                _push2(`<ul class="custom-scroll" data-v-c2ec5994${_scopeId}><!--[-->`);
                ssrRenderList(unref(valuesToShow), (option, index) => {
                  var _a2;
                  _push2(`<li class="w-100" data-v-c2ec5994${_scopeId}><div class="country d-flex align-items-center justify-content-start gap-2" data-v-c2ec5994${_scopeId}><div class="flag-box" data-v-c2ec5994${_scopeId}><div class="${ssrRenderClass([(_a2 = option == null ? void 0 : option.data) == null ? void 0 : _a2.class, "iti-flag"])}" data-v-c2ec5994${_scopeId}></div></div><span class="dial-code" data-v-c2ec5994${_scopeId}>${ssrInterpolate(option[unref(props).displayKey])}</span></div></li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                _push2(`<ul data-v-c2ec5994${_scopeId}><li data-v-c2ec5994${_scopeId}><a href="javascript:void(0)" data-v-c2ec5994${_scopeId}>No Records Found! `);
                if (__props.NewRecordLink) {
                  _push2(`<span data-v-c2ec5994${_scopeId}>click to Add New records</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</a></li></ul>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "custom-select-box" }, [
                withDirectives(createVNode("input", {
                  type: "text",
                  placeholder: __props.placeholder,
                  "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : search = $event,
                  onInput: ($event) => unref(updateSearch)($event.target.value),
                  onClick: withModifiers(($event) => isRef(showDropDown) ? showDropDown.value = !unref(showDropDown) : showDropDown = !unref(showDropDown), ["prevent"]),
                  class: "form-control form-select"
                }, null, 40, ["placeholder", "onUpdate:modelValue", "onInput", "onClick"]), [
                  [vModelText, unref(search)]
                ]),
                unref(showDropDown) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "box-content"
                }, [
                  unref(valuesToShow).length ? (openBlock(), createBlock("ul", {
                    key: 0,
                    class: "custom-scroll"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(valuesToShow), (option, index) => {
                      var _a2;
                      return openBlock(), createBlock("li", {
                        onClick: withModifiers(($event) => handleSelect(option), ["prevent"]),
                        key: index,
                        class: "w-100"
                      }, [
                        createVNode("div", { class: "country d-flex align-items-center justify-content-start gap-2" }, [
                          createVNode("div", { class: "flag-box" }, [
                            createVNode("div", {
                              class: ["iti-flag", (_a2 = option == null ? void 0 : option.data) == null ? void 0 : _a2.class]
                            }, null, 2)
                          ]),
                          createVNode("span", { class: "dial-code" }, toDisplayString(option[unref(props).displayKey]), 1)
                        ])
                      ], 8, ["onClick"]);
                    }), 128))
                  ])) : (openBlock(), createBlock("ul", { key: 1 }, [
                    createVNode("li", null, [
                      createVNode("a", {
                        href: "javascript:void(0)",
                        onClick: withModifiers(() => __props.NewRecordLink && ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(__props.NewRecordLink), ["prevent"])
                      }, [
                        createTextVNode("No Records Found! "),
                        __props.NewRecordLink ? (openBlock(), createBlock("span", { key: 0 }, "click to Add New records")) : createCommentVNode("", true)
                      ], 8, ["onClick"])
                    ])
                  ]))
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.formSubmitted && !unref(isValid)) {
        _push(`<p class="error-message" data-v-c2ec5994>${ssrInterpolate(__props.errormessage)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.helptext) {
        _push(`<p class="help-text" data-v-c2ec5994>*${ssrInterpolate(__props.helptext)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/InputFields/SearchDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2ec5994"]]);

export { __nuxt_component_2 as default };
