import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "RecursiveMenu",
  __ssrInlineRender: true,
  props: {
    menus: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_recursive_menu = resolveComponent("recursive-menu", true);
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.menus, (menu) => {
        _push(`<div>${ssrInterpolate(menu.label)} `);
        if (menu.children) {
          _push(ssrRenderComponent(_component_recursive_menu, {
            menus: menu.children
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/RecursiveMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
