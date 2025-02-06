import{o as p,a as y}from"./chunk-ZQRKUG6J-CwGpvon8.js";import{a5 as e,an as j,b as w,r as _,j as s,w as c}from"./index-DVDzS5zo.js";import{F as k}from"./chunk-TYTNUPXB-ZiC-XSSL.js";import{c as m}from"./chunk-6GU6IDUA-CDc7wW5L.js";var D=i=>{var t,r,g,d,l,u,h;const n=(r=(t=i.media)==null?void 0:t.find(o=>o.isThumbnail))==null?void 0:r.url,a=(g=i.media)==null?void 0:g.filter(o=>!o.isThumbnail).map(o=>({url:o.url}));return{status:i.status,is_giftcard:!1,tags:(d=i==null?void 0:i.tags)!=null&&d.length?(l=i.tags)==null?void 0:l.map(o=>({id:o})):void 0,sales_channels:(u=i==null?void 0:i.sales_channels)!=null&&u.length?(h=i.sales_channels)==null?void 0:h.map(o=>({id:o.id})):void 0,images:a,collection_id:i.collection_id||void 0,categories:i.categories.map(o=>({id:o})),type_id:i.type_id||void 0,handle:i.handle||void 0,origin_country:i.origin_country||void 0,material:i.material||void 0,mid_code:i.mid_code||void 0,hs_code:i.hs_code||void 0,thumbnail:n,title:i.title,subtitle:i.subtitle||void 0,description:i.description||void 0,discountable:i.discountable||void 0,width:i.width?parseFloat(i.width):void 0,length:i.length?parseFloat(i.length):void 0,height:i.height?parseFloat(i.height):void 0,weight:i.weight?parseFloat(i.weight):void 0,options:i.options.filter(o=>o.title),variants:F(i.variants.filter(o=>o.should_create),i.regionsCurrencyMap)}},F=(i,n)=>i.map(a=>({title:a.title||Object.values(a.options||{}).join(" / "),options:a.options,sku:a.sku||void 0,manage_inventory:!!a.manage_inventory,allow_backorder:!!a.allow_backorder,inventory_items:a.inventory.map(t=>{const r=t.required_quantity?m(t.required_quantity):null;return!t.inventory_item_id||!r?!1:{...t,required_quantity:r}}).filter(t=>t!==!1),prices:Object.entries(a.prices||{}).map(([t,r])=>{if(!(r===""||r===void 0))return t.startsWith("reg_")?{currency_code:n[t],amount:m(r),rules:{region_id:t}}:{currency_code:t,amount:m(r)}}).filter(t=>!!t)})),E=i=>i.map(n=>({...n,title:n.title||"",sku:n.sku||"",manage_inventory:n.manage_inventory||!1,allow_backorder:n.allow_backorder||!1,inventory_kit:n.inventory_kit||!1})),b=e.object({id:e.string().optional(),url:e.string(),isThumbnail:e.boolean(),file:e.any().nullable()}),x=e.object({should_create:e.boolean(),is_default:e.boolean().optional(),title:e.string(),upc:e.string().optional(),ean:e.string().optional(),barcode:e.string().optional(),mid_code:e.string().optional(),hs_code:e.string().optional(),width:p,height:p,length:p,weight:p,material:e.string().optional(),origin_country:e.string().optional(),sku:e.string().optional(),manage_inventory:e.boolean().optional(),allow_backorder:e.boolean().optional(),inventory_kit:e.boolean().optional(),options:e.record(e.string(),e.string()),variant_rank:e.number(),prices:e.record(e.string(),y).optional(),inventory:e.array(e.object({inventory_item_id:e.string(),required_quantity:p})).optional()}),S=e.object({title:e.string(),values:e.array(e.string()).min(1)}),O=e.object({title:e.string().min(1),subtitle:e.string().optional(),handle:e.string().optional(),description:e.string().optional(),discountable:e.boolean(),type_id:e.string().optional(),collection_id:e.string().optional(),categories:e.array(e.string()),tags:e.array(e.string()).optional(),sales_channels:e.array(e.object({id:e.string(),name:e.string()})).optional(),origin_country:e.string().optional(),material:e.string().optional(),width:e.string().optional(),length:e.string().optional(),height:e.string().optional(),weight:e.string().optional(),mid_code:e.string().optional(),hs_code:e.string().optional(),options:e.array(S).min(1),enable_variants:e.boolean(),variants:e.array(x).min(1),media:e.array(b).optional()}).superRefine((i,n)=>{if(i.variants.every(t=>!t.should_create))return n.addIssue({code:e.ZodIssueCode.custom,path:["variants"],message:"invalid_length"});const a=new Set;i.variants.forEach((t,r)=>{t.sku&&(a.has(t.sku)&&n.addIssue({code:e.ZodIssueCode.custom,path:[`variants.${r}.sku`],message:j.t("products.create.errors.uniqueSku")}),a.add(t.sku))})}),R=e.object({media:e.array(b)}),M={discountable:!0,tags:[],sales_channels:[],options:[{title:"Default option",values:["Default option value"]}],variants:E([{title:"Default variant",should_create:!0,variant_rank:0,options:{"Default option":"Default option value"},inventory:[{inventory_item_id:"",required_quantity:""}],is_default:!0}]),enable_variants:!1,media:[],categories:[],collection_id:"",description:"",handle:"",height:"",hs_code:"",length:"",material:"",mid_code:"",origin_country:"",subtitle:"",title:"",type_id:"",weight:"",width:""},f=["image/jpeg","image/png","image/gif","image/webp","image/heic","image/svg+xml"],T=[".jpeg",".png",".gif",".webp",".heic",".svg"],U=({form:i,append:n,showHint:a=!0})=>{const{t}=w(),r=_.useCallback(d=>{const l=d.find(u=>!f.includes(u.file.type));return l?(i.setError("media",{type:"invalid_file",message:t("products.media.invalidFileType",{name:l.file.name,types:T.join(", ")})}),!0):!1},[i,t]),g=_.useCallback(d=>{i.clearErrors("media"),!r(d)&&d.forEach(l=>n({...l,isThumbnail:!1}))},[i,n,r]);return s.jsx(c.Field,{control:i.control,name:"media",render:()=>s.jsx(c.Item,{children:s.jsxs("div",{className:"flex flex-col gap-y-2",children:[s.jsxs("div",{className:"flex flex-col gap-y-1",children:[s.jsx(c.Label,{optional:!0,children:t("products.media.label")}),a&&s.jsx(c.Hint,{children:t("products.media.editHint")})]}),s.jsx(c.Control,{children:s.jsx(k,{label:t("products.media.uploadImagesLabel"),hint:t("products.media.uploadImagesHint"),hasError:!!i.formState.errors.media,formats:f,onUploaded:g})}),s.jsx(c.ErrorMessage,{})]})})})};export{R as E,M as P,U,O as a,E as d,D as n};
