import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-Bmsaf34f.mjs';
import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$2 from './index-BAqQL5bv.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import './index-CdatWNO3.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object,
    questionAnswers: Object
  },
  setup(__props) {
    ref();
    let qnaID = ref([]);
    let qnaObject = ref({});
    let qnaunLikeId = ref([]);
    ref("");
    let questionanswerModal = ref(false);
    const skeletonLoader = ref(true);
    let skeletonItems = Array.from({ length: 9 }, (_, index) => index);
    function questionModal({ qna, state = true }) {
      questionanswerModal.value = state;
      qnaObject.value = qna;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsNoData = _sfc_main$1;
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_WidgetsModalsQuestionModal = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(skeletonLoader)) {
        _push(`<div class="question-answer skeleton-qa"><ul><!--[-->`);
        ssrRenderList(unref(skeletonItems), (item) => {
          _push(`<li><div class="question-box"><h5></h5><h6 class="font-weight-bold que"></h6></div><div class="answer-box"><h5></h5><div><p class="ans"></p><p class="ans"></p></div></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="post-question-box"><h4>${ssrInterpolate("Have Doubts Regarding This Product")} ? <a href="javascript:void(0)">${ssrInterpolate("Post Your Question")}</a></h4></div><div class="question-answer">`);
      if ((_a = __props.questionAnswers) == null ? void 0 : _a.length) {
        _push(`<ul><!--[-->`);
        ssrRenderList(__props.questionAnswers, (qna, index) => {
          _push(`<li><div class="question-box"><h5>${ssrInterpolate("q")}${ssrInterpolate(index + 1)}</h5><h6 class="font-weight-bold que">${ssrInterpolate(qna == null ? void 0 : qna.question)}</h6><ul class="link-dislike-box">`);
          if (!(qna == null ? void 0 : qna.answer)) {
            _push(`<li><a href="javascript:void(0)"><span>`);
            _push(ssrRenderComponent(_component_Icon, { name: "ri-edit-fill" }, null, _parent));
            _push(`</span></a></li>`);
          } else {
            _push(`<!---->`);
          }
          if (qna == null ? void 0 : qna.answer) {
            _push(`<li><a href="javascript:void(0)"><span>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: unref(qnaID).includes(qna.id) ? "ri:thumb-up-fill" : "ri:thumb-up-line"
            }, null, _parent));
            _push(` ${ssrInterpolate(unref(qnaID).includes(qna.id) ? qna.total_likes + 1 : qna.total_likes)}</span></a></li>`);
          } else {
            _push(`<!---->`);
          }
          if (qna == null ? void 0 : qna.answer) {
            _push(`<li><a href="javascript:void(0)"><span>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: unref(qnaunLikeId).includes(qna.id) ? "ri:thumb-down-fill" : "ri:thumb-down-line"
            }, null, _parent));
            _push(` ${ssrInterpolate(unref(qnaunLikeId).includes(qna.id) ? qna.total_likes + 1 : qna.total_likes)}</span></a></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></div><div class="answer-box">`);
          if (qna == null ? void 0 : qna.answer) {
            _push(`<div class="answer-box"><h5>${ssrInterpolate("a")}${ssrInterpolate(index + 1)}</h5><p class="ans">${ssrInterpolate(qna == null ? void 0 : qna.answer)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_b = __props.questionAnswers) == null ? void 0 : _b.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added",
          text: "No Question Posted Yet",
          description: "There are currently no question for this productoduct"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(questionanswerModal),
        onClose: ($event) => questionModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsQuestionModal, {
              product: __props.product,
              qna: unref(qnaObject),
              onClose: ($event) => questionModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsQuestionModal, {
                product: __props.product,
                qna: unref(qnaObject),
                onClose: ($event) => questionModal({ state: false })
              }, null, 8, ["product", "qna", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/QuestionsAnswers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
