import{i as d,a as v,y as u}from"./DtU04-4_.js";import{_ as m}from"./UTXkSK51.js";import{I as x,M as c,N as o,V as s,J as k,X as g,W as C,L as l,Z as y,a9 as E,u as b}from"./DzwC5H-t.js";const M={class:"mobile-menu d-md-none d-block mobile-cart"},N={__name:"index",setup($){let i=[{id:1,active:!0,title:"Home",icon:"ri-home-2",path:"/"},{id:2,active:!1,title:"Category",icon:"ri-apps",path:"/collections"},{id:3,active:!1,title:"Search",icon:"ri-search-2",path:"/search"},{id:4,active:!1,title:"My Wish",icon:"ri-heart-3",path:"/wishlist"},{id:5,active:!1,title:"Cart",icon:"ri-shopping-bag",path:"/cart"}],r=d(),e=v();const p=()=>{i.forEach(t=>{t.active=!1,(e==null?void 0:e.path)===t.path&&(t.active=!0)})};function _(t){i.forEach(n=>{i.includes(t),n.active=!1}),t.active=!t.active}return x(()=>{i.forEach(t=>{t.active=!1,(e==null?void 0:e.path)===t.path&&(t.active=!0)}),r.afterEach(p())}),(t,n)=>{const h=u,f=m;return c(),o("div",M,[s("ul",null,[(c(!0),o(k,null,g(b(i),a=>(c(),o("li",{class:C({active:a.active}),key:a},[l(f,{to:a.path,onClick:B=>_(a)},{default:y(()=>[l(h,{name:a.active?`${a.icon}-fill`:`${a.icon}-line`},null,8,["name"]),s("span",null,E(a.title),1)]),_:2},1032,["to","onClick"])],2))),128))])])}}},L=N;export{L as default};
