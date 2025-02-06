import{u as E,a as F,b as z}from"./chunk-6KEI7WC2-DIntW7xl.js";import{a1 as M,ad as B,a3 as H,R as N,dB as O,j as e,b as k,a8 as V,a9 as K,dC as L,r as D,dl as q,t as A,E as G,B as T,V as C,k as Q}from"./index-DVDzS5zo.js";import{u as Z,D as $}from"./chunk-OYHBAUAW-B9stO7Ze.js";import"./lodash-BcmPklYF.js";import"./chunk-FZFMTVUS-r45_zK-Q.js";import"./chunk-BNLHRJ2A-B9cujPUv.js";import"./chunk-KHOKHZC6-DqhaYBeK.js";import{K as J}from"./chunk-6HTZNHPT-CRPKDwNX.js";import{R as n,u as U}from"./chunk-6DAFMWMA-DOplJBJA.js";import{C as R}from"./checkbox-VBH6vfOi.js";import{c as W}from"./index-hgvacr-t.js";import"./chunk-KDXAFTVE-BIJQy-Te.js";import"./chunk-MSDRGCRR-DOcwFlHQ.js";import"./chunk-P3UUX2T6-COyyrLOg.js";import"./chunk-ADOCJB6L-B-mXNJjZ.js";import"./chunk-C76H5USB-B9uURp5M.js";import"./chunk-YEDAFXMB-DnAK5LyC.js";import"./chunk-AOFGTNG6-YgZz2MjF.js";import"./chunk-WX2SMNCD-Dke7h3Ex.js";import"./plus-mini-DVlS1_gD.js";import"./command-bar-BDrW_KWF.js";import"./index-Cq2HfFFM.js";import"./chunk-IVEEMMLZ-BynqSVwU.js";import"./format-C3w1D3EB.js";import"./date-picker-BeKwFmAI.js";import"./popover-YF60vnb1.js";import"./x-mark-mini-Lz0IIf_4.js";import"./triangle-left-mini-DKHFqL2j.js";import"./prompt-BT4Q14j5.js";var X=M({promotion_ids:B(H()).min(1)}),P=50,Y=({campaign:s})=>{var _,v;const{t:o}=k(),{handleSuccess:t}=U(),r=V({defaultValues:{promotion_ids:[]},resolver:K(X)}),{setValue:u}=r,{mutateAsync:x,isPending:b}=L(s.id),[g,d]=D.useState({}),c=i=>{const f=typeof i=="function"?i(g):i,w=Object.keys(f);u("promotion_ids",w,{shouldDirty:!0,shouldTouch:!0}),d(f)},{searchParams:l,raw:j}=E({pageSize:P}),{promotions:S,count:a,isPending:h}=q({...l},{placeholderData:Q}),m=oe(),y=F(),{table:p}=Z({data:S??[],columns:m,enableRowSelection:i=>i.original.campaign_id!==s.id,enablePagination:!0,getRowId:i=>i.id,pageSize:P,count:a,rowSelection:{state:g,updater:c},meta:{campaignId:s.id,currencyCode:(_=s==null?void 0:s.budget)==null?void 0:_.currency_code,budgetType:(v=s==null?void 0:s.budget)==null?void 0:v.type}}),I=r.handleSubmit(async i=>{await x({add:i.promotion_ids},{onSuccess:()=>{A.success(o("campaigns.promotions.toast.success",{count:i.promotion_ids.length})),t()},onError:f=>A.error(f.message)})});return e.jsx(n.Form,{form:r,children:e.jsxs(J,{onSubmit:I,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(n.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:r.formState.errors.promotion_ids&&e.jsx(G,{variant:"error",children:r.formState.errors.promotion_ids.message})})}),e.jsx(n.Body,{className:"flex size-full flex-col overflow-y-auto",children:e.jsx($,{table:p,count:a,columns:m,pageSize:P,isLoading:h,filters:y,orderBy:[{key:"code",label:o("fields.code")},{key:"type",label:o("fields.type")},{key:"created_at",label:o("fields.createdAt")},{key:"updated_at",label:o("fields.updatedAt")}],queryObject:j,layout:"fill",pagination:!0,search:"autofocus",noRecords:{message:o("campaigns.promotions.add.list.noRecordsMessage")}})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(T,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(T,{size:"small",type:"submit",isLoading:b,children:o("actions.save")})]})})]})})},ee=W(),oe=()=>{const s=z(),{t:o}=k();return D.useMemo(()=>[ee.display({id:"select",header:({table:t})=>e.jsx(R,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:r=>t.toggleAllRowsSelected(!!r)}),cell:({row:t,table:r})=>{var h,m,y;const{campaignId:u,currencyCode:x,budgetType:b}=r.options.meta,g=b==="spend",d=t.original.campaign_id===u,c=!!t.original.campaign_id&&t.original.campaign_id!==u,l=g&&((h=t.original.application_method)==null?void 0:h.currency_code)!==x,j=t.getIsSelected()||d,S=l||c,a=e.jsx(R,{checked:S?"indeterminate":j,disabled:d||c||l,onCheckedChange:p=>t.toggleSelected(!!p),onClick:p=>{p.stopPropagation()}});return c?e.jsx(C,{content:o("campaigns.promotions.alreadyAddedDiffCampaign",{name:(y=(m=t.original)==null?void 0:m.campaign)==null?void 0:y.name}),side:"right",children:a}):l?e.jsx(C,{content:o("campaigns.promotions.currencyMismatch"),side:"right",children:a}):d?e.jsx(C,{content:o("campaigns.promotions.alreadyAdded"),side:"right",children:a}):a}}),...s],[o,s])},Ie=()=>{const{id:s}=N(),{campaign:o,isError:t,error:r}=O(s);if(t)throw r;return e.jsx(n,{children:o&&e.jsx(Y,{campaign:o})})};export{Ie as Component};
