import{_ as y}from"./CmNfAwnt.js";import{_ as g}from"./UTXkSK51.js";import{E as x}from"./DtU04-4_.js";import{M as n,N as s,L as u,Z as p,V as o,a9 as e,R as f,u as r}from"./DzwC5H-t.js";const v={class:"offer-product"},C={class:"offer-detail"},b={class:"name"},k={key:0},V={class:"vertical-price"},N={class:"price theme-color"},B={key:0,class:"text-content"},L={__name:"Vertical",props:{product:Object,class:String},setup(t){let c=x();return c.allCurrency(),(S,$)=>{var l,i;const h=y,a=g;return n(),s("div",v,[u(a,{to:`/product/${t.product.slug}`,class:"offer-image"},{default:p(()=>{var d,m,_;return[u(h,{src:(d=t.product)!=null&&d.product_thumbnail?(_=(m=t.product)==null?void 0:m.product_thumbnail)==null?void 0:_.original_url:"/images/product.png",alt:"product"},null,8,["src"])]}),_:1},8,["to"]),o("div",C,[o("div",null,[u(a,{to:`/product/${t.product.slug}`,class:"text-title"},{default:p(()=>[o("h6",b,e(t.product.name),1)]),_:1},8,["to"]),t.product.unit?(n(),s("span",k,e(t.product.unit),1)):f("",!0),o("div",V,[o("h5",N,e(r(c).currency.symbol)+" "+e(r(c).convertCurrency((l=t.product)==null?void 0:l.sale_price)),1),t.product.discount?(n(),s("del",B,e(r(c).currency.symbol)+" "+e(r(c).convertCurrency((i=t.product)==null?void 0:i.price)),1)):f("",!0)])])])])}}};export{L as default};
