import{u as x,g as w,a as g}from"./chunk-RPAL6FHW-jgu6Uodt.js";import{S as h}from"./chunk-ADOCJB6L-B-mXNJjZ.js";import{S as b}from"./chunk-2RQLKDBF-D_P-n1w1.js";import{u as E,D as k}from"./chunk-OYHBAUAW-B9stO7Ze.js";import{a as j,j as t,b as u,H as v,T as S,r as T,Y as C,k as P}from"./index-DVDzS5zo.js";import"./lodash-BcmPklYF.js";import{u as y}from"./chunk-C76H5USB-B9uURp5M.js";import"./chunk-FZFMTVUS-r45_zK-Q.js";import"./chunk-BNLHRJ2A-B9cujPUv.js";import"./chunk-KHOKHZC6-DqhaYBeK.js";import{C as z}from"./container-BXC902rS.js";import{c as D}from"./index-hgvacr-t.js";import"./Trans-gbTvuGyt.js";import"./x-mark-mini-Lz0IIf_4.js";import"./check-CpwEzBp2.js";import"./chunk-YEDAFXMB-DnAK5LyC.js";import"./chunk-AOFGTNG6-YgZz2MjF.js";import"./chunk-WX2SMNCD-Dke7h3Ex.js";import"./plus-mini-DVlS1_gD.js";import"./command-bar-BDrW_KWF.js";import"./index-Cq2HfFFM.js";import"./chunk-IVEEMMLZ-BynqSVwU.js";import"./format-C3w1D3EB.js";import"./date-picker-BeKwFmAI.js";import"./popover-YF60vnb1.js";import"./triangle-left-mini-DKHFqL2j.js";var c=D(),L=()=>{const{t:e}=u();return T.useMemo(()=>[c.accessor("transaction_id",{header:e("workflowExecutions.transactionIdLabel"),cell:({getValue:o})=>t.jsx(C,{size:"2xsmall",children:o()})}),c.accessor("state",{header:e("fields.state"),cell:({getValue:o})=>{const s=o(),r=w(s),a=g(e,s);return t.jsx(h,{color:r,children:t.jsx("span",{className:"capitalize",children:a})})}}),c.accessor("execution",{header:e("workflowExecutions.progressLabel"),cell:({getValue:o})=>{var i;const s=(i=o())==null?void 0:i.steps;if(!s)return"0 of 0 steps";const r=Object.values(s).filter(n=>n.id!==R),a=r.filter(n=>n.invoke.state==="done");return e("workflowExecutions.stepsCompletedLabel",{completed:a.length,count:r.length})}})],[e])},R="_root",W=({pageSize:e=20,prefix:o})=>{const s=y(["q","offset"],o),{offset:r,...a}=s;return{searchParams:{limit:e,offset:r?parseInt(r):0,...a},raw:s}},m=20,I=()=>{const{t:e}=u(),{searchParams:o,raw:s}=W({pageSize:m}),{workflow_executions:r,count:a,isLoading:i,isError:n,error:f}=x({...o},{placeholderData:P}),p=L(),{table:d}=E({data:r||[],columns:p,count:a,pageSize:m,enablePagination:!0,getRowId:l=>l.id});if(n)throw f;return t.jsxs(z,{className:"divide-y p-0",children:[t.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:t.jsxs("div",{children:[t.jsx(v,{children:e("workflowExecutions.domain")}),t.jsx(S,{className:"text-ui-fg-subtle",size:"small",children:e("workflowExecutions.subtitle")})]})}),t.jsx(k,{table:d,columns:p,count:a,isLoading:i,pageSize:m,navigateTo:l=>`${l.id}`,search:!0,pagination:!0,queryObject:s,noRecords:{message:e("workflowExecutions.list.noRecordsMessage")}})]})},ne=()=>{const{getWidgets:e}=j();return t.jsx(b,{widgets:{after:e("workflow.list.after"),before:e("workflow.list.before")},hasOutlet:!1,children:t.jsx(I,{})})};export{ne as Component};
