import{a as f,M as s,N as n,V as i,J as c,X as d,W as u,u as b,a9 as h,Q as v}from"./DzwC5H-t.js";const k={class:"product-section-box mt-0"},$={class:"nav nav-tabs custom-nav",id:"pills-tab"},y=["id","onClick"],C={class:"tab-content custom-tab",id:"pills-tabContent"},B=["id"],g={__name:"index",props:{tabs:Array,activeTab:Object},emits:["handleActive"],setup(l,{emit:m}){let o=f(0),p=m;function _({tab:a,index:r}){o.value=r,p("handleActive",a)}return(a,r)=>(s(),n("div",k,[i("ul",$,[(s(!0),n(c,null,d(l.tabs,(t,e)=>(s(),n("li",{class:"nav-item",role:"presentation",key:"a"+e},[i("button",{class:u(["nav-link",[{"tab-error":t.errors},{active:e==b(o)}]]),ref_for:!0,ref:`tabButton${e}`,id:`${t.id}-tab`,onClick:A=>_({tab:t,index:e}),type:"button"},h(a.$t(t.title)),11,y)]))),128))]),i("div",C,[(s(!0),n(c,null,d(l.tabs,(t,e)=>(s(),n("div",{class:u([[{"active show":e==b(o)}],"tab-pane fade"]),key:"a"+e,id:t.id,role:"tabpanel"},[v(a.$slots,t.id)],10,B))),128)),v(a.$slots,"bottom")])]))}};export{g as default};
