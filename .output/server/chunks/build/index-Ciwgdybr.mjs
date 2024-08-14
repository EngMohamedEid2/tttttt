import { v as useCollectionStore, i as useRoute, t as transform, a as useRouter, d as __nuxt_component_1 } from './server.mjs';
import { computed, unref, mergeProps, useSSRContext } from 'vue';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useCollectionStore();
    let filtersObj = {
      category: [],
      tag: [],
      rating: [],
      price: [],
      attribute: []
    };
    let filters = computed(() => {
      filtersObj.category = useRoute().query.category ? useRoute().query.category.split(",") : [];
      filtersObj.tag = useRoute().query.tag ? useRoute().query.tag.split(",") : [];
      filtersObj.rating = useRoute().query.rating ? useRoute().query.rating.split(",") : [];
      filtersObj.price = useRoute().query.price ? useRoute().query.price.split(",") : [];
      filtersObj.attribute = useRoute().query.attribute ? useRoute().query.attribute.split(",") : [];
      return [
        ...filtersObj == null ? void 0 : filtersObj.category,
        ...filtersObj == null ? void 0 : filtersObj.tag,
        ...filtersObj == null ? void 0 : filtersObj.rating.map(
          (val) => val.startsWith("rating ") ? val : `rating ${val}`
        ),
        ...filtersObj == null ? void 0 : filtersObj.price,
        ...filtersObj == null ? void 0 : filtersObj.attribute
      ];
    });
    function remove(tag) {
      let category = useRoute().query.category ? useRoute().query.category.split(",") : [];
      let attribute = useRoute().query.attribute ? useRoute().query.attribute.split(",") : [];
      let price = useRoute().query.price ? useRoute().query.price.split(",") : [];
      let rating = useRoute().query.rating ? useRoute().query.rating.split(",") : [];
      let tags = useRoute().query.tag ? useRoute().query.tag : "";
      let layout = useRoute().query.layout ? useRoute().query.layout : "";
      let sortBy = useRoute().query.sortBy ? useRoute().query.sortBy : "";
      let field = useRoute().query.field ? useRoute().query.field : "";
      let page = useRoute().query.page ? useRoute().query.page : "";
      if (category.includes(tag)) {
        category.splice(tag, 1);
      } else if (attribute.includes(tag)) {
        attribute.splice(tag, 1);
      } else if (price.includes(tag)) {
        price.splice(tag, 1);
      } else if (rating.includes(tag)) {
        rating.splice(tag, 1);
      } else if (tags == tag) {
        tags = "";
      }
      useRouter().push({
        path: useRoute().path,
        query: {
          layout,
          sortBy,
          field,
          category: category.join(","),
          attribute: attribute.join(","),
          price: price.join(","),
          rating: rating.join(","),
          tag: tags,
          page
        }
      });
      setTimeout(async () => {
        store.initialCheckedValue();
      }, 1e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      if (unref(filters).length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter-category" }, _attrs))}><div class="filter-title"><h2>Filters</h2><a href="javascript:void(0)">Clear All</a></div><ul><!--[-->`);
        ssrRenderList(unref(filters), (filterss) => {
          _push(`<li><a href="javascript:void(0)">${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))(filterss.replace("-", " ")))}</a>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ri:close-line",
            onClick: ($event) => remove(filterss)
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/filter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
