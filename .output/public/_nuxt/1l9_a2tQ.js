import{_ as B}from"./UTXkSK51.js";import{z as T,s as R,d as $}from"./DtU04-4_.js";import{a as C,I as q,M as t,N as l,ac as h,a9 as u,R as a,a7 as w,Z as g,W as o,u as v,V as r,J as b,X as f,L as z}from"./DzwC5H-t.js";const D=T("/images/mega-menu2.png"),E={key:0,class:"new-dropdown"},S={class:"row"},j={key:0,class:"dropdown-header {{ link.class }}"},A={key:0,class:"dropdown-column col-xl-3 d-xl-block d-none"},F={key:1,class:"dropdown-column col-xl-12 d-xl-block d-none"},H=r("div",{class:"menu-img-banner rounded overflow-hidden mx-0 mt-3 mb-0"},[r("img",{src:D,class:"img-fluid"})],-1),I=[H],J={class:"dropdown-column"},O=["src"],U={__name:"MenuList",props:{menu:Object,show:Boolean},setup(e){let{Products:k,Blogs:x}=R($()),L=C([]),N=C([]);q(async()=>{var c,i,d,y;L.value=(i=(c=k==null?void 0:k.value)==null?void 0:c.data)==null?void 0:i.slice(0,2),N.value=(y=(d=x==null?void 0:x.value)==null?void 0:d.data)==null?void 0:y.slice(0,2)});let m=C("");function V(c){m.value=m.value!=c?c:""}return(c,i)=>{var M;const d=B,y=U;return t(),l(b,null,[e.menu.type==="sub"?(t(),l("a",{key:0,class:"nav-link dropdown-toggle",onClick:i[0]||(i[0]=s=>V(e.menu.title))},[h(u(e.menu.title)+" ",1),e.menu.badge?(t(),l("label",E,u(e.menu.badge),1)):a("",!0)])):a("",!0),e.menu.type==="link"?(t(),w(d,{key:1,class:o(["dropdown-item",v(m)==e.menu.title?"show":""]),to:{path:`${e.menu.path}`,query:e.menu.params}},{default:g(()=>[h(u(e.menu.title)+" ",1),e.menu.label?(t(),l("label",{key:0,class:o(["menu-label",e.menu.labelClass])},u(e.menu.label),3)):a("",!0)]),_:1},8,["class","to"])):a("",!0),e.menu.megaMenu&&e.menu.megaMenuType==="link"?(t(),l("div",{key:2,class:o(["dropdown-menu dropdown-menu-2",v(m)==e.menu.title?"show":""])},[r("div",S,[(t(!0),l(b,null,f(e.menu.children,s=>(t(),l("div",{class:"dropdown-column col-xl-3",key:s},[(t(!0),l(b,null,f(s.children,n=>(t(),l("div",{key:n},[n.type==="sub"?(t(),l("h5",j,u(n.title),1)):a("",!0),n.type==="link"?(t(),w(d,{key:1,class:"dropdown-item",to:{path:`${n.path}`,query:n.params}},{default:g(()=>[h(u(n.title)+" ",1),n.label?(t(),l("label",{key:0,class:o(["menu-label",n.labelClass])},u(n.label),3)):a("",!0)]),_:2},1032,["to"])):a("",!0),n.type==="external_link"?(t(),w(d,{key:2,to:n.path,class:"dropdown-item",target:"_blank"},{default:g(()=>[h(u(n.title)+" ",1),n.label?(t(),l("label",{key:0,class:o(["menu-label",n.labelClass])},u(n.label),3)):a("",!0)]),_:2},1032,["to"])):a("",!0)]))),128))]))),128)),e.menu.slider==="banner"?(t(),l("div",A)):a("",!0),e.menu.slider==="banner_landscape"?(t(),l("div",F,I)):a("",!0)])],2)):a("",!0),e.menu.megaMenu&&e.menu.megaMenuType==="image"?(t(),l("div",{key:3,class:o(["dropdown-menu dropdown-menu-2 dropdown-image",v(m)==e.menu.title?"show":""])},[r("div",J,[(t(!0),l(b,null,f(e.menu.children,s=>(t(),w(d,{class:"dropdown-item",key:s,to:s.path},{default:g(()=>[r("img",{src:s.image,class:"img-fluid",alt:"imageMenu.title"},null,8,O),r("span",null,u(s.title),1)]),_:2},1032,["to"]))),128))])],2)):a("",!0),e.menu.children&&!e.menu.megaMenu?(t(),l("ul",{key:4,class:o(["dropdown-menu",v(m)==e.menu.title?"show":""])},[(t(!0),l(b,null,f((M=e.menu)==null?void 0:M.children,(s,n)=>(t(),l("li",{class:o(["nav-item",s.children?"dropdown":""]),key:s.title+n},[z(y,{menu:s},null,8,["menu"])],2))),128))],2)):a("",!0)],64)}}};export{U as default};
