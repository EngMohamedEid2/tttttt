import A from"./Dg0ZMghu.js";import P from"./-FQm2UNx.js";import{E as R,H as S,D as E}from"./DtU04-4_.js";import{d as H}from"./C8OBSjdZ.js";import{_ as L}from"./BFog50Ur.js";import{a as M,a6 as T,M as n,N as d,V as e,a9 as l,u as a,J as q,X as z,W,L as J,R as i,a7 as X}from"./DzwC5H-t.js";const j={class:"title-header"},x={class:"d-flex align-items-center"},G={key:0,class:"total-box mt-0"},I={class:"row"},K={class:"col-12"},O={class:"totle-contain wallet-bg"},Q={class:"wallet-point-box"},U=e("img",{src:L,alt:"wallet"},null,-1),Y={class:"totle-detail"},Z={class:"wallet-table"},ee={class:"user-dashboard-title"},te={class:"table-responsive"},le={key:0,class:"custome-pagination"},se={__name:"index",async setup(ae){let u,m,r=R();r.allCurrency();let _=M({paginate:10,page:1}),{data:o,pending:oe}=([u,m]=T(()=>S("wallet/consumer",{key:"getAllWallet",params:_})),u=await u,m(),u);const D=({toPage:s})=>{_.value.page=s};return(s,c)=>{var p,h,g,y,v,b,f,w,N,k,C,$;const B=A,V=P;return n(),d("div",null,[e("div",j,[e("div",x,[e("h5",null,l(s.$t("My Wallet")),1)])]),(g=(h=(p=a(o))==null?void 0:p.transactions)==null?void 0:h.data)!=null&&g.length?(n(),d("div",G,[e("div",I,[e("div",K,[e("div",O,[e("div",Q,[U,e("div",Y,[e("h5",null,l(s.$t("Wallet Balance")),1),e("h3",null,l(a(r).currency.symbol)+" "+l(Number(a(r).convertCurrency(a(o)?(y=a(o))==null?void 0:y.balance:0)).toFixed(2)),1)])])])])]),e("div",Z,[e("h4",ee,l(s.$t("Transactions")),1),e("div",te,[e("table",null,[e("tbody",null,[e("tr",null,[e("th",null,l(s.$t("No"))+".",1),e("th",null,l(s.$t("Date")),1),e("th",null,l(s.$t("Amount")),1),e("th",null,l(s.$t("Remark")),1),e("th",null,l(s.$t("Status")),1)]),(n(!0),d(q,null,z((b=(v=a(o))==null?void 0:v.transactions)==null?void 0:b.data,(t,F)=>(n(),d("tr",{key:F},[e("td",null,l(F+1),1),e("td",null,l(("dateFormatter"in s?s.dateFormatter:a(H))(t==null?void 0:t.created_at)),1),e("td",null,l(a(r).currency.symbol)+" "+l(Number(a(r).convertCurrency(t==null?void 0:t.amount)).toFixed(2)),1),e("td",null,l(t==null?void 0:t.detail),1),e("td",null,[e("div",{class:W(`status-${t==null?void 0:t.type}`)},[e("span",null,l(("transform"in s?s.transform:a(E))(t==null?void 0:t.type)),1)],2)])]))),128))])])])]),(N=(w=(f=a(o))==null?void 0:f.transactions)==null?void 0:w.data)!=null&&N.length?(n(),d("nav",le,[J(B,{Data:a(o).transactions,onChangePage:c[0]||(c[0]=t=>D({toPage:t}))},null,8,["Data"])])):i("",!0)])):i("",!0),($=(C=(k=a(o))==null?void 0:k.transactions)==null?void 0:C.data)!=null&&$.length?i("",!0):(n(),X(V,{key:1,class:W("no-data-added"),image:"/svg/empty-items.svg",text:"No Transaction Found",description:"No wallet balance activity detected"},null,8,["image"]))])}}},_e=se;export{_e as default};
