import{u as T}from"./chunk-IDXWB5O6-CPEOcK0t.js";import{u as h}from"./chunk-D2UCOBBT-qOcYuKn7.js";import{q as m,a as b,j as a,eR as x,s as j,b as p,d as P,b9 as v,k as D,H as w,B as C,L,r as S,A as q}from"./index-DVDzS5zo.js";import{a as k}from"./chunk-5R4UGQUP-DMBOF0FF.js";import{a as A}from"./chunk-IRV425DP-D5bEGd4E.js";import{S as E}from"./chunk-2RQLKDBF-D_P-n1w1.js";import{u as _,D as O}from"./chunk-OYHBAUAW-B9stO7Ze.js";import"./lodash-BcmPklYF.js";import"./chunk-FZFMTVUS-r45_zK-Q.js";import"./chunk-BNLHRJ2A-B9cujPUv.js";import"./chunk-KHOKHZC6-DqhaYBeK.js";import{P as Q}from"./pencil-square-HcvTqo4T.js";import{T as R}from"./trash-BdZ7d_uU.js";import{C as z}from"./container-BXC902rS.js";import{c as H}from"./index-hgvacr-t.js";import"./use-prompt-Dfdk2dg_.js";import"./prompt-BT4Q14j5.js";import"./chunk-B4FQDBC3-BYH5HbI6.js";import"./chunk-P3UUX2T6-COyyrLOg.js";import"./format-C3w1D3EB.js";import"./chunk-MSDRGCRR-DOcwFlHQ.js";import"./chunk-C76H5USB-B9uURp5M.js";import"./chunk-W7625H47-D-wJnBO2.js";import"./Trans-gbTvuGyt.js";import"./x-mark-mini-Lz0IIf_4.js";import"./check-CpwEzBp2.js";import"./chunk-YEDAFXMB-DnAK5LyC.js";import"./chunk-AOFGTNG6-YgZz2MjF.js";import"./chunk-WX2SMNCD-Dke7h3Ex.js";import"./plus-mini-DVlS1_gD.js";import"./command-bar-BDrW_KWF.js";import"./index-Cq2HfFFM.js";import"./chunk-IVEEMMLZ-BynqSVwU.js";import"./date-picker-BeKwFmAI.js";import"./popover-YF60vnb1.js";import"./triangle-left-mini-DKHFqL2j.js";var N=t=>({queryKey:x.list(t),queryFn:async()=>j.admin.productTag.list(t)}),Ct=async({request:t})=>{const e=new URL(t.url).searchParams,r={};e.forEach((i,s)=>{try{r[s]=JSON.parse(i)}catch{r[s]=i}});const o=N(r);return m.getQueryData(o.queryKey)??await m.fetchQuery(o)},c=20,B=()=>{const{t}=p(),{searchParams:e,raw:r}=k({pageSize:c}),o=P(),{product_tags:i,count:s,isPending:l,isError:d,error:g}=v(e,{initialData:o,placeholderData:D}),u=F(),f=A(),{table:y}=_({data:i,count:s,columns:u,getRowId:n=>n.id,pageSize:c});if(d)throw g;return a.jsxs(z,{className:"divide-y px-0 py-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsx(w,{children:t("productTags.domain")}),a.jsx(C,{variant:"secondary",size:"small",asChild:!0,children:a.jsx(L,{to:"create",children:t("actions.create")})})]}),a.jsx(O,{table:y,filters:f,queryObject:r,isLoading:l,columns:u,pageSize:c,count:s,navigateTo:n=>n.original.id,search:!0,pagination:!0,orderBy:[{key:"value",label:t("fields.value")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}]})]})},K=({productTag:t})=>{const{t:e}=p(),r=T({productTag:t});return a.jsx(q,{groups:[{actions:[{icon:a.jsx(Q,{}),label:e("actions.edit"),to:`${t.id}/edit`}]},{actions:[{icon:a.jsx(R,{}),label:e("actions.delete"),onClick:r}]}]})},M=H(),F=()=>{const t=h();return S.useMemo(()=>[...t,M.display({id:"actions",cell:({row:e})=>a.jsx(K,{productTag:e.original})})],[t])},Lt=()=>{const{getWidgets:t}=b();return a.jsx(E,{showMetadata:!1,showJSON:!1,hasOutlet:!0,widgets:{after:t("product_tag.list.after"),before:t("product_tag.list.before")},children:a.jsx(B,{})})};export{Lt as Component,Ct as loader};
