import{z as a,a as r,i as M,s as y,d as q,I as b,y as B}from"./DtU04-4_.js";import S from"./sAT7XZK2.js";import{a as I,b as N,I as O,M as _,N as m,u as n,V as t,L as f,ac as x,a9 as D,R as k,W as u,$ as g}from"./DzwC5H-t.js";const F=a("/svg/grid-3.svg"),z=a("/svg/grid-4.svg"),h=a("/svg/grid.svg"),L=a("/svg/grid-5.svg"),T=a("/svg/list.svg"),U={class:"show-button"},W={key:0,class:"filter-button-group mt-0"},A={class:"filter-button d-inline-block d-lg-none"},E={class:"top-filter-menu"},H={class:"category-dropdown"},J=t("h5",{class:"text-content"},"Sort By :",-1),K={class:"grid-option d-none d-md-block"},P=t("img",{src:F,alt:"sort"},null,-1),Q=[P],X=t("a",{href:"javascript:void(0)"},[t("img",{src:z,class:"d-lg-inline-block d-none",alt:"sort"}),t("img",{src:h,class:"img-fluid d-lg-none d-inline-block",alt:"sort"})],-1),Y=[X],Z=t("a",{href:"javascript:void(0)"},[t("img",{src:L,class:"d-lg-inline-block d-none",alt:"sort"}),t("img",{src:h,class:"img-fluid d-lg-none d-inline-block",alt:"sort"})],-1),oo=[Z],to=t("a",{href:"javascript:void(0)"},[t("img",{src:T,alt:""})],-1),eo=[to],no={__name:"index",props:{filter:Object,show:Boolean,selectedGrid:{type:String,default:"collection_4_grid"}},emits:["setGridClass"],setup(c,{emit:C}){let d=c,G=r();M();let{offCanvasMenu:R}=y(q()),l=I("row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section"),{sortingOptions:$,sort:so}=y(b()),j=C,v=b();N(()=>r().query.layout,()=>{let o=r().query.layout;o&&i(o)},{deep:!0});function i(o){o=="collection_3_grid"?(l.value="row g-sm-4 g-3 product-list-section row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2",d.selectedGrid=o):o=="collection_4_grid"?(l.value="row g-sm-4 g-3 product-list-section row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2",d.selectedGrid=o):o=="collection_5_grid"?(l.value="row g-sm-4 g-3 product-list-section row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2",d.selectedGrid=o):o=="collection_list_view"?(l.value="row g-sm-4 g-3 product-list-section row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style",d.selectedGrid=o):o=="collection_no_sidebar"&&(l.value="row g-sm-4 g-3 product-list-section row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2",d.selectedGrid=o),j("setGridClass",l.value)}function w(){R.value=!0}return O(()=>{let o=r().query.layout;i(o)}),(o,e)=>{const p=B,V=S;return _(),m("div",U,[("useRoute"in o?o.useRoute:n(r))().query.layout!=="collection_no_sidebar"&&("useRoute"in o?o.useRoute:n(r))().query.layout!=="collection_offcanvas_filter"?(_(),m("div",W,[t("div",A,[t("a",{onClick:e[0]||(e[0]=s=>w())},[f(p,{name:"ri-filter-2-fill"}),x(" "+D(o.$t("Filter Menu")),1)])])])):k("",!0),t("div",E,[t("div",H,[n(G).query.layout=="collection_offcanvas_filter"?(_(),m("a",{key:0,href:"javascript:void(0)",class:"filter-offcanvas-title",onClick:e[1]||(e[1]=s=>w())},[f(p,{name:"ri:filter-2-fill"}),x(" Filter Menu ")])):k("",!0),J,f(V,{modelValue:n(v).filterObject.sort,"onUpdate:modelValue":e[2]||(e[2]=s=>n(v).filterObject.sort=s),options:n($),"dropdown-id":"sortByDropdown"},null,8,["modelValue","options"])]),t("div",K,[t("ul",null,[t("li",{class:u(["three-grid",[{active:c.selectedGrid=="collection_3_grid"}]])},[t("a",{href:"javascript:void(0)",onClick:e[3]||(e[3]=g(s=>i("collection_3_grid"),["prevent"]))},Q)],2),t("li",{class:u(["grid-btn d-xxl-inline-block d-none",[{active:c.selectedGrid=="collection_4_grid"}]]),onClick:e[4]||(e[4]=g(s=>i("collection_4_grid"),["prevent"]))},Y,2),t("li",{class:u(["grid-btn d-xxl-inline-block d-none",[{active:c.selectedGrid=="collection_5_grid"}]]),onClick:e[5]||(e[5]=g(s=>i("collection_5_grid"),["prevent"]))},oo,2),t("li",{class:u(["list-btn",[{active:c.selectedGrid=="collection_list_view"}]]),onClick:e[6]||(e[6]=g(s=>i("collection_list_view"),["prevent"]))},eo,2)])])])])}}};export{no as default};
