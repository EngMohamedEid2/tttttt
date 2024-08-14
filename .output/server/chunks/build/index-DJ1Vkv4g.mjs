import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { a as useRouter, i as useRoute, d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    let menuItem = [
      {
        id: 1,
        active: true,
        title: "Home",
        icon: "ri-home-2",
        path: "/"
      },
      {
        id: 2,
        active: false,
        title: "Category",
        icon: "ri-apps",
        path: "/collections"
      },
      {
        id: 3,
        active: false,
        title: "Search",
        icon: "ri-search-2",
        path: "/search"
      },
      {
        id: 4,
        active: false,
        title: "My Wish",
        icon: "ri-heart-3",
        path: "/wishlist"
      },
      {
        id: 5,
        active: false,
        title: "Cart",
        icon: "ri-shopping-bag",
        path: "/cart"
      }
    ];
    useRouter();
    useRoute();
    function activeMenu(menu) {
      menuItem.forEach((item) => {
        menuItem.includes(menu);
        item.active = false;
      });
      menu.active = !menu.active;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-menu d-md-none d-block mobile-cart" }, _attrs))}><ul><!--[-->`);
      ssrRenderList(unref(menuItem), (menu) => {
        _push(`<li class="${ssrRenderClass({ "active": menu.active })}">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: menu.path,
          onClick: ($event) => activeMenu(menu)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: menu.active ? `${menu.icon}-fill` : `${menu.icon}-line`
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(menu.title)}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: menu.active ? `${menu.icon}-fill` : `${menu.icon}-line`
                }, null, 8, ["name"]),
                createVNode("span", null, toDisplayString(menu.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/MobileCart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
