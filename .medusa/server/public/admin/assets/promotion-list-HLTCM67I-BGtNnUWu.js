import{u as x,a as b,b as v}from"./chunk-6KEI7WC2-DIntW7xl.js";import{q as h,a as j,j as o,dk as P,s as T,b as u,d as w,dl as C,H as D,B as S,L as k,O as q,r as L,k as A,u as E,dm as Q,A as z}from"./index-DVDzS5zo.js";import{S as H}from"./chunk-2RQLKDBF-D_P-n1w1.js";import{u as B,D as I}from"./chunk-OYHBAUAW-B9stO7Ze.js";import"./lodash-BcmPklYF.js";import"./chunk-FZFMTVUS-r45_zK-Q.js";import"./chunk-BNLHRJ2A-B9cujPUv.js";import"./chunk-KHOKHZC6-DqhaYBeK.js";import{P as K}from"./pencil-square-HcvTqo4T.js";import{T as N}from"./trash-BdZ7d_uU.js";import{u as O}from"./use-prompt-Dfdk2dg_.js";import{C as _}from"./container-BXC902rS.js";import{c as $}from"./index-hgvacr-t.js";import"./chunk-KDXAFTVE-BIJQy-Te.js";import"./chunk-MSDRGCRR-DOcwFlHQ.js";import"./chunk-P3UUX2T6-COyyrLOg.js";import"./chunk-ADOCJB6L-B-mXNJjZ.js";import"./chunk-C76H5USB-B9uURp5M.js";import"./Trans-gbTvuGyt.js";import"./x-mark-mini-Lz0IIf_4.js";import"./check-CpwEzBp2.js";import"./chunk-YEDAFXMB-DnAK5LyC.js";import"./chunk-AOFGTNG6-YgZz2MjF.js";import"./chunk-WX2SMNCD-Dke7h3Ex.js";import"./plus-mini-DVlS1_gD.js";import"./command-bar-BDrW_KWF.js";import"./index-Cq2HfFFM.js";import"./chunk-IVEEMMLZ-BynqSVwU.js";import"./format-C3w1D3EB.js";import"./date-picker-BeKwFmAI.js";import"./popover-YF60vnb1.js";import"./triangle-left-mini-DKHFqL2j.js";import"./prompt-BT4Q14j5.js";var p={limit:20,offset:0},F=()=>({queryKey:P.list(p),queryFn:async()=>T.admin.promotion.list(p)}),Se=e=>async()=>{const t=F();return h.getQueryData(t.queryKey)??await e.fetchQuery(t)},m=20,M=()=>{const{t:e}=u(),t=w(),{searchParams:a,raw:i}=x({pageSize:m}),{promotions:s,count:r,isLoading:c,isError:d,error:y}=C({...a},{initialData:t,placeholderData:A}),f=b(),l=G(),{table:g}=B({data:s??[],columns:l,count:r,enablePagination:!0,pageSize:m,getRowId:n=>n.id});if(d)throw y;return o.jsxs(_,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(D,{level:"h2",children:e("promotions.domain")}),o.jsx(S,{size:"small",variant:"secondary",asChild:!0,children:o.jsx(k,{to:"create",children:e("actions.create")})})]}),o.jsx(I,{table:g,columns:l,count:r,pageSize:m,filters:f,search:!0,pagination:!0,isLoading:c,queryObject:i,navigateTo:n=>`${n.original.id}`,orderBy:[{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]}),o.jsx(q,{})]})},R=({promotion:e})=>{const{t}=u(),a=O(),i=E(),{mutateAsync:s}=Q(e.id),r=async()=>{if(await a({title:t("general.areYouSure"),description:t("promotions.deleteWarning",{code:e.code}),confirmText:t("actions.delete"),cancelText:t("actions.cancel"),verificationInstruction:t("general.typeToConfirm"),verificationText:e.code}))try{await s(void 0,{onSuccess:()=>{i("/promotions",{replace:!0})}})}catch{throw new Error(`Promotion with code ${e.code} could not be deleted`)}};return o.jsx(z,{groups:[{actions:[{icon:o.jsx(K,{}),label:t("actions.edit"),to:`/promotions/${e.id}/edit`},{icon:o.jsx(N,{}),label:t("actions.delete"),onClick:r}]}]})},W=$(),G=()=>{const e=v();return L.useMemo(()=>[...e,W.display({id:"actions",cell:({row:t})=>o.jsx(R,{promotion:t.original})})],[e])},ke=()=>{const{getWidgets:e}=j();return o.jsx(H,{widgets:{before:e("promotion.list.before"),after:e("promotion.list.after")},children:o.jsx(M,{})})};export{ke as Component,Se as promotionsLoader};
