import{G as x}from"./chunk-D7HOMTJV-BcXF4q-k.js";import{G as j}from"./chunk-PYIO3TDQ-D8Zv8hXV.js";import{a5 as l,R as v,aS as g,ar as S,j as e,b as y,a8 as w,d2 as F,a9 as Z,t as h,H as b,B as _}from"./index-DVDzS5zo.js";import"./chunk-X5VECN6S-CH6SKZ8-.js";import"./chunk-OYHBAUAW-B9stO7Ze.js";import"./lodash-BcmPklYF.js";import"./chunk-FZFMTVUS-r45_zK-Q.js";import"./chunk-BNLHRJ2A-B9cujPUv.js";import"./chunk-KHOKHZC6-DqhaYBeK.js";import{c as A}from"./chunk-BQTJIUCF-9OCJpUjo.js";import{K as E}from"./chunk-6HTZNHPT-CRPKDwNX.js";import{R as n,u as z,S as L}from"./chunk-6DAFMWMA-DOplJBJA.js";import"./chunk-NOAFLTPV-DRvt1dGq.js";import"./chunk-C76H5USB-B9uURp5M.js";import"./index-hgvacr-t.js";import"./checkbox-VBH6vfOi.js";import"./x-mark-mini-Lz0IIf_4.js";import"./chunk-YEDAFXMB-DnAK5LyC.js";import"./chunk-AOFGTNG6-YgZz2MjF.js";import"./chunk-WX2SMNCD-Dke7h3Ex.js";import"./plus-mini-DVlS1_gD.js";import"./command-bar-BDrW_KWF.js";import"./index-Cq2HfFFM.js";import"./chunk-IVEEMMLZ-BynqSVwU.js";import"./format-C3w1D3EB.js";import"./date-picker-BeKwFmAI.js";import"./popover-YF60vnb1.js";import"./triangle-left-mini-DKHFqL2j.js";import"./chunk-CUT7UDIA-DFt7s1wX.js";import"./prompt-BT4Q14j5.js";var N=l.object({countries:l.array(l.object({iso_2:l.string().min(2),display_name:l.string()})).min(1)});function C({fulfillmentSetId:a,locationId:d,zone:t}){const{t:o}=y(),{handleSuccess:p}=z(),r=w({defaultValues:{countries:t.geo_zones.map(i=>{const s=F.find(m=>m.iso_2===i.country_code);return{iso_2:i.country_code,display_name:(s==null?void 0:s.display_name)||i.country_code.toUpperCase()}})},resolver:Z(N)}),{mutateAsync:u,isPending:f}=A(a,t.id),c=r.handleSubmit(async i=>{await u({geo_zones:i.countries.map(({iso_2:s})=>({country_code:s,type:"country"}))},{onSuccess:()=>{h.success(o("stockLocations.serviceZones.manageAreas.successToast",{name:t.name})),p(`/settings/locations/${d}`)},onError:s=>{h.error(s.message)}})});return e.jsx(n.Form,{form:r,children:e.jsxs(E,{className:"flex h-full flex-col overflow-hidden",onSubmit:c,children:[e.jsx(n.Header,{}),e.jsx(n.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsxs(L,{id:j,children:[e.jsx("div",{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsx(b,{children:o("stockLocations.serviceZones.manageAreas.header",{name:t.name})}),e.jsx(x,{form:r})]})}),e.jsx(x.AreaDrawer,{form:r})]})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(_,{variant:"secondary",size:"small",children:o("actions.cancel")})}),e.jsx(_,{type:"submit",size:"small",isLoading:f,children:o("actions.save")})]})})]})})}var me=()=>{var i,s;const{location_id:a,fset_id:d,zone_id:t}=v(),{stock_location:o,isPending:p,isFetching:r,isError:u,error:f}=g(a,{fields:"*fulfillment_sets.service_zones.geo_zones,fulfillment_sets.service_zones.name"}),c=(s=(i=o==null?void 0:o.fulfillment_sets)==null?void 0:i.find(m=>m.id===d))==null?void 0:s.service_zones.find(m=>m.id===t);if(!p&&!r&&!c)throw S({message:`Service zone with ID ${t} was not found`},404);if(u)throw f;return e.jsx(n,{prev:`/settings/locations/${a}`,children:c&&e.jsx(C,{zone:c,fulfillmentSetId:d,locationId:a})})};export{me as Component};
