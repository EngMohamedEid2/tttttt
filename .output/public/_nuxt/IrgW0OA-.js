import{A as L,H as k,s as O,h as w,B as x,G as I,b as W,y as G}from"./DtU04-4_.js";import H from"./GifxIkZ0.js";import P from"./D3VAIRgR.js";import T from"./P0LQvH62.js";import j from"./D_CI-QPl.js";import{a as n,b as M,M as q,N as K,V as s,a9 as r,L as d,Z as h,u as t,ac as E,$ as Z}from"./DzwC5H-t.js";import{A as z}from"./CB-yGQMb.js";import{i as X}from"./WzxQA1z2.js";import"./CuHDJejB.js";const J=L("location-store",()=>{var m=n([]),_=n([]),l=n([]),p=n([]);return(async()=>{let{data:S,error:f}=await k("country",{key:"getAllCountries"});f.value||(_.value=S.value);let{data:c,error:e}=await k("state",{key:"getAllStates"});e.value||(l.value=c.value)})(),{countries:m,states:p,ResponseCountries:_,ResponseStates:l}}),Q={class:"modal-header"},Y={class:"fw-semibold"},ee={class:"modal-body address-form"},te={class:"row g-4"},se={class:"col-xxl-12"},oe={class:""},ae=s("label",{class:"form-label",for:"pname"},r("Title"),-1),de={class:"col-12"},le={class:""},ie=s("label",{class:"form-label",for:"address1"},r("Address"),-1),re={class:"col-6"},ne={class:""},ue=s("label",{class:"form-label me-2",for:"address1"},r("Country"),-1),ce={class:"col-6"},me={class:""},_e=s("label",{class:"form-label me-2",for:"address1"},r("State"),-1),pe={class:"col-6"},fe={class:""},be=s("label",{class:"form-label",for:"address1"},r("City"),-1),ye={class:"col-6"},ve={class:""},he=s("label",{class:"form-label",for:"address1"},r("Pincode"),-1),Se={class:"col-12 phone-field"},Ve={class:""},Ae={class:"d-flex row"},Ce=s("label",{class:"form-label",for:"phone"},r("Phone Number"),-1),ge={class:"col-sm-2 col-3 pe-0"},Ue={class:"col-sm-10 col-9 ps-0"},ke={class:"modal-footer"},$e={__name:"index",props:{addressId:Object,user:Object},emits:["close"],setup(m,{emit:_}){let l=m,p=_,{countries:D,states:S,ResponseStates:f,ResponseCountries:c}=O(J()),e=n({title:{data:""},street:{data:""},city:{data:""},phone:{data:""},pincode:{data:""},country_id:{data:""},country_code:{data:""},state_id:{data:""}}),i=n(!1);function R(){if(typeof l.addressId=="number"){let u=l.user.address.filter(o=>o.id==l.addressId)[0];Object.keys(e.value).forEach(o=>e.value[o].data=u[o])}}R(),c.value.filter(u=>u.id==e.value.country_id.data);let V=n();M(()=>e.value.country_id,()=>{N()},{deep:!0});function N(){var u=e.value.country_id.data;V.value=f.value.filter(o=>o.country_id==u)}async function F(){i.value=!0,X({formData:e.value})&&(typeof l.addressId=="number"?await w("/address/"+l.addressId,{baseURL:x,method:"put",headers:I(),body:{title:e.value.title.data,street:e.value.street.data,city:e.value.city.data,phone:e.value.phone.data,pincode:e.value.pincode.data,country_code:e.value.country_code.data,country_id:e.value.country_id.data,state_id:e.value.state_id.data,user_id:l.user.id},key:"AddAddress"},"$bRhwrZSLvD"):await w("/address",{baseURL:x,method:"post",headers:I(),body:{title:e.value.title.data,street:e.value.street.data,city:e.value.city.data,phone:e.value.phone.data,pincode:e.value.pincode.data,country_code:e.value.country_code.data,country_id:e.value.country_id.data,state_id:e.value.state_id.data,user_id:l.user.id},key:"AddAddress"},"$mzsXaH2gaW")),W().UpdateUserInfo()}return(u,o)=>{var A,C,g,U;const B=G,y=H,b=P,v=T,$=j;return q(),K("div",null,[s("div",Q,[s("h3",Y,r(typeof m.addressId=="number"?"Edit Address":"Add Address"),1),d(y,{classes:"btn btn-close",id:"address_modal_close_btn",onOnClick:o[0]||(o[0]=()=>{t(p)("close")})},{default:h(()=>[d(B,{name:"ri-close-line"})]),_:1})]),s("form",null,[s("div",ee,[s("div",te,[s("div",se,[s("div",oe,[ae,d(b,{classes:"form-control",formSubmitted:t(i),modelValue:t(e).title,"onUpdate:modelValue":o[1]||(o[1]=a=>t(e).title=a),id:"title",placeholder:"Enter Title"},null,8,["formSubmitted","modelValue"])])]),s("div",de,[s("div",le,[ie,d(b,{classes:"form-control",formSubmitted:t(i),modelValue:t(e).street,"onUpdate:modelValue":o[2]||(o[2]=a=>t(e).street=a),id:"title",placeholder:"Enter Address"},null,8,["formSubmitted","modelValue"])])]),s("div",re,[s("div",ne,[ue,d(v,{"get-value-key":"id","display-key":"name","form-submitted":t(i),modelValue:t(e).country_id,"onUpdate:modelValue":o[3]||(o[3]=a=>t(e).country_id=a),placeholder:"Select Country",holdKey:!0,"display-value":(C=(A=t(e).country_id)==null?void 0:A.selected)==null?void 0:C.name,options:t(c),initialData:t(c).filter(a=>a.id==t(e).country_id.data)[0]},null,8,["form-submitted","modelValue","display-value","options","initialData"])])]),s("div",ce,[s("div",me,[_e,d(v,{"get-value-key":"id",placeholder:"Select State","display-key":"name","form-submitted":t(i),modelValue:t(e).state_id,"onUpdate:modelValue":o[4]||(o[4]=a=>t(e).state_id=a),"display-value":(U=(g=t(e).state_id)==null?void 0:g.selected)==null?void 0:U.name,options:t(V),initialData:t(f).filter(a=>a.id==t(e).state_id.data)[0]},null,8,["form-submitted","modelValue","display-value","options","initialData"])])]),s("div",pe,[s("div",fe,[be,d(b,{classes:"form-control",formSubmitted:t(i),modelValue:t(e).city,"onUpdate:modelValue":o[5]||(o[5]=a=>t(e).city=a),id:"title",placeholder:"Enter City"},null,8,["formSubmitted","modelValue"])])]),s("div",ye,[s("div",ve,[he,d(b,{classes:"form-control",formSubmitted:t(i),modelValue:t(e).pincode,"onUpdate:modelValue":o[6]||(o[6]=a=>t(e).pincode=a),id:"title",placeholder:"Enter Pincode"},null,8,["formSubmitted","modelValue"])])]),s("div",Se,[s("div",Ve,[s("div",Ae,[Ce,s("span",ge,[d(v,{formSubmitted:t(i),"select-first":!0,getValueKey:"id","display-key":"name",modelValue:t(e).country_code,"onUpdate:modelValue":o[7]||(o[7]=a=>t(e).country_code=a),"form-submitted":t(i),options:t(z)},null,8,["formSubmitted","modelValue","form-submitted","options"])]),s("span",Ue,[d($,{type:"number",formSubmitted:t(i),classes:"form-control",errorMessage:"phone number is required.",modelValue:t(e).phone,"onUpdate:modelValue":o[8]||(o[8]=a=>t(e).phone=a),id:"phone",placeholder:"Enter Phone Number"},null,8,["formSubmitted","modelValue"])])])])])]),s("div",ke,[d(y,{classes:"btn btn-theme-outline btn-md fw-bold",type:"button",id:"cancel_addres_btn",onOnClick:o[9]||(o[9]=()=>{t(p)("close")})},{default:h(()=>[E(r("Cancel"))]),_:1}),d(y,{classes:"btn theme-bg-color btn-md fw-bold text-light",id:"submit_address_btn",onClick:o[10]||(o[10]=Z(a=>F(),["prevent"]))},{default:h(()=>[E(r("Submit"))]),_:1})])])])])}}};export{$e as default};
