import{h as D,G as I,B as L,y as T}from"./DtU04-4_.js";import F from"./-FQm2UNx.js";import P from"./DQRWMj7p.js";import Q from"./LxH7S5zr.js";import{a as c,I as R,M as l,N as n,u as r,V as o,J as N,X as j,R as _,ac as f,a9 as d,L as h,a7 as S,Z as W,al as E}from"./DzwC5H-t.js";import"./GifxIkZ0.js";const G={key:0,class:"question-answer skeleton-qa"},H=E('<div class="question-box"><h5></h5><h6 class="font-weight-bold que"></h6></div><div class="answer-box"><h5></h5><div><p class="ans"></p><p class="ans"></p></div></div>',2),U=[H],Y={class:"post-question-box"},J={class:"question-answer"},K={key:0},X={class:"question-box"},Z={class:"font-weight-bold que"},z={class:"link-dislike-box"},q={key:0},ee=["onClick"],se={key:1},te=["onClick"],oe={key:2},ie=["onClick"],le={class:"answer-box"},ne={key:0,class:"answer-box"},de={class:"ans"},ve={__name:"index",props:{product:Object,questionAnswers:Object},setup(v){c();let u=c([]),k=c({}),a=c([]),m=c(""),w=c(!1);const b=c(!0);let A=Array.from({length:9},(s,t)=>t);function p({qna:s,state:t=!0}){w.value=t,k.value=s}function x(s,t){if(t=="liked"){if(u.value.includes(s.id)){let i=u.value.indexOf(s.id);u.value.splice(i,1),m.value=""}else if(u.value.push(s.id),m.value=t,a.value.includes(s.id)){let i=a.value.indexOf(s.id);a.value.splice(i,1)}y(s.id,t)}else if(t=="disliked"){if(a.value.includes(s.id)){let i=a.value.indexOf(s.id);a.value.splice(i,1),m.value=""}else if(a.value.push(s.id),m.value=t,u.value.includes(s.id)){let i=u.value.indexOf(s.id);u.value.splice(i,1)}}y(s.id,t)}async function y(s,t){localStorage.getItem("usersAccount")&&await D("question-and-answer/feedback",{method:"post",headers:I(),baseURL:L,body:{question_and_answer_id:s,reaction:t}},"$BukEAbKB9a")}return R(()=>{setTimeout(()=>{b.value=!1},2e3)}),(s,t)=>{var g,C;const i=T,O=F,V=P,$=Q;return l(),n("div",null,[r(b)?(l(),n("div",G,[o("ul",null,[(l(!0),n(N,null,j(r(A),e=>(l(),n("li",{key:e},U))),128))])])):_("",!0),o("div",Y,[o("h4",null,[f(d("Have Doubts Regarding This Product")+" ? "),o("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=e=>{p({questionanswerModal:e})})},d("Post Your Question"))])]),o("div",J,[(g=v.questionAnswers)!=null&&g.length?(l(),n("ul",K,[(l(!0),n(N,null,j(v.questionAnswers,(e,M)=>(l(),n("li",{key:e},[o("div",X,[o("h5",null,d("q")+d(M+1),1),o("h6",Z,d(e==null?void 0:e.question),1),o("ul",z,[e!=null&&e.answer?_("",!0):(l(),n("li",q,[o("a",{href:"javascript:void(0)",onClick:B=>{p(e)}},[o("span",null,[h(i,{name:"ri-edit-fill"})])],8,ee)])),e!=null&&e.answer?(l(),n("li",se,[o("a",{href:"javascript:void(0)",onClick:B=>(x(e,"liked"),s.liked=!s.liked)},[o("span",null,[h(i,{name:r(u).includes(e.id)?"ri:thumb-up-fill":"ri:thumb-up-line"},null,8,["name"]),f(" "+d(r(u).includes(e.id)?e.total_likes+1:e.total_likes),1)])],8,te)])):_("",!0),e!=null&&e.answer?(l(),n("li",oe,[o("a",{href:"javascript:void(0)",onClick:B=>(x(e,"disliked"),s.disliked=!s.disliked)},[o("span",null,[h(i,{name:r(a).includes(e.id)?"ri:thumb-down-fill":"ri:thumb-down-line"},null,8,["name"]),f(" "+d(r(a).includes(e.id)?e.total_likes+1:e.total_likes),1)])],8,ie)])):_("",!0)])]),o("div",le,[e!=null&&e.answer?(l(),n("div",ne,[o("h5",null,d("a")+d(M+1),1),o("p",de,d(e==null?void 0:e.answer),1)])):_("",!0)])]))),128))])):_("",!0),(C=v.questionAnswers)!=null&&C.length?_("",!0):(l(),S(O,{key:1,classes:"no-data-added",text:"No Question Posted Yet",description:"There are currently no question for this productoduct"}))]),h($,{showModal:r(w),onClose:t[2]||(t[2]=e=>p({state:!1}))},{default:W(()=>[h(V,{product:v.product,qna:r(k),onClose:t[1]||(t[1]=e=>p({state:!1}))},null,8,["product","qna"])]),_:1},8,["showModal"])])}}};export{ve as default};
