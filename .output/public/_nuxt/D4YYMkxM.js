import{F as d,D as m}from"./DtU04-4_.js";import{M as t,N as o,V as s,J as l,X as h,u as r,a9 as _,R as u}from"./DzwC5H-t.js";const f={class:"checkout-detail"},k={class:"row g-sm-4 g-3"},p={key:0,class:"payment-option"},g={class:"payment-category w-100"},v={class:"form-check custom-form-check hide-check-box w-100"},b=["checked","id","onChange"],x={class:"form-check-label text-uppercase",for:"{{payment.name}}"},N={__name:"index",props:{setting:Object},setup(i){return(a,y)=>{var c;return t(),o("div",f,[s("div",k,[(t(!0),o(l,null,h((c=i.setting)==null?void 0:c.payment_methods,(e,n)=>(t(),o("div",{class:"col-xxl-6",key:n},[e!=null&&e.status?(t(),o("div",p,[s("div",g,[s("div",v,[s("input",{class:"form-check-input",type:"radio",name:"payment_method",checked:n===0,id:e.name,onChange:C=>r(d)().SetPaymentOption(e.name)},null,40,b),s("label",x,_(("transform"in a?a.transform:r(m))(e.name)),1)])])])):u("",!0)]))),128))])])}}};export{N as default};
