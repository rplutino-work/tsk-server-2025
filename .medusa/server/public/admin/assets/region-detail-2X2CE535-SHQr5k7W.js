import{u as q,a as L,b as z}from"./chunk-NOAFLTPV-DRvt1dGq.js";import{L as B}from"./chunk-I3VB6NM2-q0wJ6Toc.js";import{f as M}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{c as O}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{S as f}from"./chunk-LFLGEXIG-C6Hod-Xu.js";import{S as Q}from"./chunk-2RQLKDBF-D_P-n1w1.js";import{u as H,D as W}from"./chunk-OYHBAUAW-B9stO7Ze.js";import{el as T,j as r,q as b,d as Y,R as G,l as J,a as K,dJ as F,em as U,s as X,b as x,r as P,en as R,H as E,A as j,Y as Z,T as $,u as V,ej as ee,t as d}from"./index-DVDzS5zo.js";import"./lodash-BcmPklYF.js";import"./chunk-FZFMTVUS-r45_zK-Q.js";import"./chunk-BNLHRJ2A-B9cujPUv.js";import"./chunk-KHOKHZC6-DqhaYBeK.js";import{P as se}from"./plus-mini-DVlS1_gD.js";import{P as te}from"./pencil-square-HcvTqo4T.js";import{T as D}from"./trash-BdZ7d_uU.js";import{u as h}from"./use-prompt-Dfdk2dg_.js";import{C as k}from"./container-BXC902rS.js";import{C as w}from"./checkbox-VBH6vfOi.js";import{c as re}from"./index-hgvacr-t.js";import"./chunk-C76H5USB-B9uURp5M.js";import"./Trans-gbTvuGyt.js";import"./x-mark-mini-Lz0IIf_4.js";import"./check-CpwEzBp2.js";import"./chunk-YEDAFXMB-DnAK5LyC.js";import"./chunk-AOFGTNG6-YgZz2MjF.js";import"./chunk-WX2SMNCD-Dke7h3Ex.js";import"./command-bar-BDrW_KWF.js";import"./index-Cq2HfFFM.js";import"./chunk-IVEEMMLZ-BynqSVwU.js";import"./format-C3w1D3EB.js";import"./date-picker-BeKwFmAI.js";import"./popover-YF60vnb1.js";import"./triangle-left-mini-DKHFqL2j.js";import"./prompt-BT4Q14j5.js";var S="*payment_providers,*countries,+automatic_taxes",Ge=t=>{const{id:s}=t.params||{},{region:e}=T(s,{fields:S},{initialData:t.data,enabled:!!s});return e?r.jsx("span",{children:e.name}):null},ie=t=>({queryKey:U.detail(t),queryFn:async()=>X.admin.region.retrieve(t,{fields:S})}),Je=async({params:t})=>{const s=t.id,e=ie(s);return b.getQueryData(e.queryKey)??await b.fetchQuery(e)},y="c",v=10,ae=({region:t})=>{const{t:s}=x(),e=h(),[i,o]=P.useState({}),{searchParams:a,raw:u}=q({pageSize:v,prefix:y}),{countries:c,count:n}=L({countries:t.countries||[],...a}),m=ne(),{table:p}=H({data:c||[],columns:m,count:n,enablePagination:!0,enableRowSelection:!0,getRowId:g=>g.iso_2,pageSize:v,rowSelection:{state:i,updater:o},prefix:y,meta:{region:t}}),{mutateAsync:I}=R(t.id),A=async()=>{var C;const g=Object.keys(i).filter(l=>i[l]);if(!await e({title:s("general.areYouSure"),description:s("regions.removeCountriesWarning",{count:g.length}),verificationText:s("actions.remove"),verificationInstruction:s("general.typeToConfirm"),cancelText:s("actions.cancel"),confirmText:s("actions.remove")}))return;const N=(C=t.countries)==null?void 0:C.filter(l=>!g.includes(l.iso_2)).map(l=>l.iso_2);await I({countries:N},{onSuccess:()=>{d.success(s("regions.toast.countries"))},onError:l=>{d.error(l.message)}})};return r.jsxs(k,{className:"divide-y p-0",children:[r.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[r.jsx(E,{level:"h2",children:s("fields.countries")}),r.jsx(j,{groups:[{actions:[{label:s("regions.addCountries"),icon:r.jsx(se,{}),to:"countries/add"}]}]})]}),r.jsx(W,{table:p,columns:m,pageSize:v,count:n,orderBy:[{key:"display_name",label:s("fields.name")},{key:"iso_2",label:s("fields.code")}],search:!0,pagination:!0,queryObject:u,prefix:y,commands:[{action:A,label:s("actions.remove"),shortcut:"r"}]})]})},oe=({country:t,region:s})=>{var c;const{t:e}=x(),i=h(),{mutateAsync:o}=R(s.id),a=(c=s.countries)==null?void 0:c.filter(n=>n.iso_2!==t.iso_2).map(n=>n.iso_2),u=async()=>{await i({title:e("general.areYouSure"),description:e("regions.removeCountryWarning",{name:t.display_name}),verificationText:t.display_name,verificationInstruction:e("general.typeToConfirm"),cancelText:e("actions.cancel"),confirmText:e("actions.remove")})&&await o({countries:a},{onSuccess:()=>{d.success(e("regions.toast.countries"))},onError:m=>{d.error(m.message)}})};return r.jsx(j,{groups:[{actions:[{label:e("actions.remove"),onClick:u,icon:r.jsx(D,{})}]}]})},_=re(),ne=()=>{const t=z();return P.useMemo(()=>[_.display({id:"select",header:({table:s})=>r.jsx(w,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:e=>s.toggleAllPageRowsSelected(!!e)}),cell:({row:s})=>r.jsx(w,{checked:s.getIsSelected(),onCheckedChange:e=>s.toggleSelected(!!e),onClick:e=>{e.stopPropagation()}})}),...t,_.display({id:"actions",cell:({row:s,table:e})=>{const{region:i}=e.options.meta;return r.jsx(oe,{country:s.original,region:i})}})],[t])},ce=({region:t,pricePreferences:s})=>{var o;const{t:e}=x(),i=s==null?void 0:s.find(a=>a.attribute==="region_id"&&a.value===t.id);return r.jsxs(k,{className:"divide-y p-0",children:[r.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[r.jsx(E,{children:t.name}),r.jsx(le,{region:t})]}),r.jsx(f,{title:e("fields.currency"),value:r.jsxs("div",{className:"flex items-center gap-x-2",children:[r.jsx(Z,{size:"2xsmall",className:"uppercase",children:t.currency_code}),r.jsx($,{size:"small",leading:"compact",children:O[t.currency_code.toUpperCase()].name})]})}),r.jsx(f,{title:e("fields.automaticTaxes"),value:t.automatic_taxes?e("fields.true"):e("fields.false")}),r.jsx(f,{title:e("fields.taxInclusivePricing"),value:i!=null&&i.is_tax_inclusive?e("fields.true"):e("fields.false")}),r.jsx(f,{title:e("fields.paymentProviders"),value:r.jsx("div",{className:"inline-flex",children:(o=t.payment_providers)!=null&&o.length?r.jsx(B,{list:t.payment_providers.map(a=>M(a.id))}):"-"})})]})},le=({region:t})=>{const s=V(),{t:e}=x(),{mutateAsync:i}=ee(t.id),o=h(),a=async()=>{await o({title:e("general.areYouSure"),description:e("regions.deleteRegionWarning",{name:t.name}),verificationText:t.name,verificationInstruction:e("general.typeToConfirm"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await i(void 0,{onSuccess:()=>{d.success(e("regions.toast.delete")),s("/settings/regions",{replace:!0})},onError:c=>{d.error(c.message)}})};return r.jsx(j,{groups:[{actions:[{icon:r.jsx(te,{}),label:e("actions.edit"),to:`/settings/regions/${t.id}/edit`}]},{actions:[{icon:r.jsx(D,{}),label:e("actions.delete"),onClick:a}]}]})},Ke=()=>{const t=Y(),{id:s}=G(),{region:e,isPending:i,isError:o,error:a}=T(s,{fields:S},{initialData:t}),{price_preferences:u,isPending:c,isError:n,error:m}=J({attribute:"region_id",value:s},{enabled:!!e}),{getWidgets:p}=K();if(i||c||!e)return r.jsx(F,{sections:2,showJSON:!0,showMetadata:!0});if(o)throw a;if(n)throw m;return r.jsxs(Q,{widgets:{before:p("region.details.before"),after:p("region.details.after")},data:e,showMetadata:!0,showJSON:!0,children:[r.jsx(ce,{region:e,pricePreferences:u??[]}),r.jsx(ae,{region:e})]})};export{Ge as Breadcrumb,Ke as Component,Je as loader};
