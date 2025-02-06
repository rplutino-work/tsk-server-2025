import{r as x,j as R,bq as ce,bm as Ze,bn as we,bp as It,by as be,br as re,bt as Je,bz as zt,bA as Vt,bx as $t,bB as Yt,bC as Xt,bD as qt,aC as Gt,bo as Kt,bs as Ut,bE as Zt}from"./index-DVDzS5zo.js";var Jt=["top","right","bottom","left"],X=Math.min,L=Math.max,he=Math.round,de=Math.floor,q=e=>({x:e,y:e}),Qt={left:"right",right:"left",bottom:"top",top:"bottom"},en={start:"end",end:"start"};function Ae(e,t,n){return L(e,X(t,n))}function V(e,t){return typeof e=="function"?e(t):e}function $(e){return e.split("-")[0]}function ee(e){return e.split("-")[1]}function Ce(e){return e==="x"?"y":"x"}function Re(e){return e==="y"?"height":"width"}function te(e){return["top","bottom"].includes($(e))?"y":"x"}function Oe(e){return Ce(te(e))}function tn(e,t,n){n===void 0&&(n=!1);const o=ee(e),r=Oe(e),i=Re(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=ge(s)),[s,ge(s)]}function nn(e){const t=ge(e);return[Pe(e),t,Pe(t)]}function Pe(e){return e.replace(/start|end/g,t=>en[t])}function on(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function rn(e,t,n,o){const r=ee(e);let i=on($(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(Pe)))),i}function ge(e){return e.replace(/left|right|bottom|top/g,t=>Qt[t])}function sn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Qe(e){return typeof e!="number"?sn(e):{top:e,right:e,bottom:e,left:e}}function me(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function ze(e,t,n){let{reference:o,floating:r}=e;const i=te(t),s=Oe(t),c=Re(s),a=$(t),l=i==="y",d=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let u;switch(a){case"top":u={x:d,y:o.y-r.height};break;case"bottom":u={x:d,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:f};break;case"left":u={x:o.x-r.width,y:f};break;default:u={x:o.x,y:o.y}}switch(ee(t)){case"start":u[s]-=p*(n&&l?-1:1);break;case"end":u[s]+=p*(n&&l?-1:1);break}return u}var cn=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:f}=ze(l,o,a),p=o,u={},h=0;for(let g=0;g<c.length;g++){const{name:w,fn:m}=c[g],{x:v,y:b,data:y,reset:A}=await m({x:d,y:f,initialPlacement:o,placement:p,strategy:r,middlewareData:u,rects:l,platform:s,elements:{reference:e,floating:t}});d=v??d,f=b??f,u={...u,[w]:{...u[w],...y}},A&&h<=50&&(h++,typeof A=="object"&&(A.placement&&(p=A.placement),A.rects&&(l=A.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):A.rects),{x:d,y:f}=ze(l,p,a)),g=-1)}return{x:d,y:f,placement:p,strategy:r,middlewareData:u}};async function ie(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:a}=e,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:u=0}=V(t,e),h=Qe(u),w=c[p?f==="floating"?"reference":"floating":f],m=me(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:l,rootBoundary:d,strategy:a})),v=f==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),y=await(i.isElement==null?void 0:i.isElement(b))?await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1}:{x:1,y:1},A=me(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:b,strategy:a}):v);return{top:(m.top-A.top+h.top)/y.y,bottom:(A.bottom-m.bottom+h.bottom)/y.y,left:(m.left-A.left+h.left)/y.x,right:(A.right-m.right+h.right)/y.x}}var an=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:a}=t,{element:l,padding:d=0}=V(e,t)||{};if(l==null)return{};const f=Qe(d),p={x:n,y:o},u=Oe(r),h=Re(u),g=await s.getDimensions(l),w=u==="y",m=w?"top":"left",v=w?"bottom":"right",b=w?"clientHeight":"clientWidth",y=i.reference[h]+i.reference[u]-p[u]-i.floating[h],A=p[u]-i.reference[u],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let O=P?P[b]:0;(!O||!await(s.isElement==null?void 0:s.isElement(P)))&&(O=c.floating[b]||i.floating[h]);const D=y/2-A/2,F=O/2-g[h]/2-1,H=X(f[m],F),j=X(f[v],F),S=H,_=O-g[h]-j,T=O/2-g[h]/2+D,E=Ae(S,T,_),M=!a.arrow&&ee(r)!=null&&T!==E&&i.reference[h]/2-(T<S?H:j)-g[h]/2<0,C=M?T<S?T-S:T-_:0;return{[u]:p[u]+C,data:{[u]:E,centerOffset:T-E-C,...M&&{alignmentOffset:C}},reset:M}}}),ln=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:a,elements:l}=t,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=V(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const m=$(r),v=$(c)===c,b=await(a.isRTL==null?void 0:a.isRTL(l.floating)),y=p||(v||!g?[ge(c)]:nn(c));!p&&h!=="none"&&y.push(...rn(c,g,h,b));const A=[c,...y],P=await ie(t,w),O=[];let D=((o=i.flip)==null?void 0:o.overflows)||[];if(d&&O.push(P[m]),f){const S=tn(r,s,b);O.push(P[S[0]],P[S[1]])}if(D=[...D,{placement:r,overflows:O}],!O.every(S=>S<=0)){var F,H;const S=(((F=i.flip)==null?void 0:F.index)||0)+1,_=A[S];if(_)return{data:{index:S,overflows:D},reset:{placement:_}};let T=(H=D.filter(E=>E.overflows[0]<=0).sort((E,M)=>E.overflows[1]-M.overflows[1])[0])==null?void 0:H.placement;if(!T)switch(u){case"bestFit":{var j;const E=(j=D.map(M=>[M.placement,M.overflows.filter(C=>C>0).reduce((C,N)=>C+N,0)]).sort((M,C)=>M[1]-C[1])[0])==null?void 0:j[0];E&&(T=E);break}case"initialPlacement":T=c;break}if(r!==T)return{reset:{placement:T}}}return{}}}};function Ve(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function $e(e){return Jt.some(t=>e[t]>=0)}var fn=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=V(e,t);switch(o){case"referenceHidden":{const i=await ie(t,{...r,elementContext:"reference"}),s=Ve(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:$e(s)}}}case"escaped":{const i=await ie(t,{...r,altBoundary:!0}),s=Ve(i,n.floating);return{data:{escapedOffsets:s,escaped:$e(s)}}}default:return{}}}}};async function un(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=$(n),c=ee(n),a=te(n)==="y",l=["left","top"].includes(s)?-1:1,d=i&&a?-1:1,f=V(t,e);let{mainAxis:p,crossAxis:u,alignmentAxis:h}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof h=="number"&&(u=c==="end"?h*-1:h),a?{x:u*d,y:p*l}:{x:p*l,y:u*d}}var dn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=t,a=await un(t,e);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:s}}}}},pn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:m,y:v}=w;return{x:m,y:v}}},...a}=V(e,t),l={x:n,y:o},d=await ie(t,a),f=te($(r)),p=Ce(f);let u=l[p],h=l[f];if(i){const w=p==="y"?"top":"left",m=p==="y"?"bottom":"right",v=u+d[w],b=u-d[m];u=Ae(v,u,b)}if(s){const w=f==="y"?"top":"left",m=f==="y"?"bottom":"right",v=h+d[w],b=h-d[m];h=Ae(v,h,b)}const g=c.fn({...t,[p]:u,[f]:h});return{...g,data:{x:g.x-n,y:g.y-o}}}}},hn=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:c=0,mainAxis:a=!0,crossAxis:l=!0}=V(e,t),d={x:n,y:o},f=te(r),p=Ce(f);let u=d[p],h=d[f];const g=V(c,t),w=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(a){const b=p==="y"?"height":"width",y=i.reference[p]-i.floating[b]+w.mainAxis,A=i.reference[p]+i.reference[b]-w.mainAxis;u<y?u=y:u>A&&(u=A)}if(l){var m,v;const b=p==="y"?"width":"height",y=["top","left"].includes($(r)),A=i.reference[f]-i.floating[b]+(y&&((m=s.offset)==null?void 0:m[f])||0)+(y?0:w.crossAxis),P=i.reference[f]+i.reference[b]+(y?0:((v=s.offset)==null?void 0:v[f])||0)-(y?w.crossAxis:0);h<A?h=A:h>P&&(h=P)}return{[p]:u,[f]:h}}}},gn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:r,elements:i}=t,{apply:s=()=>{},...c}=V(e,t),a=await ie(t,c),l=$(n),d=ee(n),f=te(n)==="y",{width:p,height:u}=o.floating;let h,g;l==="top"||l==="bottom"?(h=l,g=d===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(g=l,h=d==="end"?"top":"bottom");const w=u-a[h],m=p-a[g],v=!t.middlewareData.shift;let b=w,y=m;if(f){const P=p-a.left-a.right;y=d||v?X(m,P):P}else{const P=u-a.top-a.bottom;b=d||v?X(w,P):P}if(v&&!d){const P=L(a.left,0),O=L(a.right,0),D=L(a.top,0),F=L(a.bottom,0);f?y=p-2*(P!==0||O!==0?P+O:L(a.left,a.right)):b=u-2*(D!==0||F!==0?D+F:L(a.top,a.bottom))}await s({...t,availableWidth:y,availableHeight:b});const A=await r.getDimensions(i.floating);return p!==A.width||u!==A.height?{reset:{rects:!0}}:{}}}};function ne(e){return et(e)?(e.nodeName||"").toLowerCase():"#document"}function k(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(et(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function et(e){return e instanceof Node||e instanceof k(e).Node}function B(e){return e instanceof Element||e instanceof k(e).Element}function I(e){return e instanceof HTMLElement||e instanceof k(e).HTMLElement}function Ye(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof k(e).ShadowRoot}function ae(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function mn(e){return["table","td","th"].includes(ne(e))}function Ee(e){const t=Se(),n=W(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function xn(e){let t=G(e);for(;I(t)&&!J(t);){if(Ee(t))return t;t=G(t)}return null}function Se(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(e){return["html","body","#document"].includes(ne(e))}function W(e){return k(e).getComputedStyle(e)}function ve(e){return B(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function G(e){if(ne(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ye(e)&&e.host||Y(e);return Ye(t)?t.host:t}function tt(e){const t=G(e);return J(t)?e.ownerDocument?e.ownerDocument.body:e.body:I(t)&&ae(t)?t:tt(t)}function se(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=tt(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),s=k(r);return i?t.concat(s,s.visualViewport||[],ae(r)?r:[],s.frameElement&&n?se(s.frameElement):[]):t.concat(r,se(r,[],n))}function nt(e){const t=W(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=I(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,c=he(n)!==i||he(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function De(e){return B(e)?e:e.contextElement}function Z(e){const t=De(e);if(!I(t))return q(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=nt(t);let s=(i?he(n.width):n.width)/o,c=(i?he(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}var wn=q(0);function ot(e){const t=k(e);return!Se()||!t.visualViewport?wn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function vn(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==k(e)?!1:t}function U(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=De(e);let s=q(1);t&&(o?B(o)&&(s=Z(o)):s=Z(e));const c=vn(i,n,o)?ot(i):q(0);let a=(r.left+c.x)/s.x,l=(r.top+c.y)/s.y,d=r.width/s.x,f=r.height/s.y;if(i){const p=k(i),u=o&&B(o)?k(o):o;let h=p,g=h.frameElement;for(;g&&o&&u!==h;){const w=Z(g),m=g.getBoundingClientRect(),v=W(g),b=m.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,y=m.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;a*=w.x,l*=w.y,d*=w.x,f*=w.y,a+=b,l+=y,h=k(g),g=h.frameElement}}return me({width:d,height:f,x:a,y:l})}var yn=[":popover-open",":modal"];function Te(e){return yn.some(t=>{try{return e.matches(t)}catch{return!1}})}function bn(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",s=Y(o),c=t?Te(t.floating):!1;if(o===s||c&&i)return n;let a={scrollLeft:0,scrollTop:0},l=q(1);const d=q(0),f=I(o);if((f||!f&&!i)&&((ne(o)!=="body"||ae(s))&&(a=ve(o)),I(o))){const p=U(o);l=Z(o),d.x=p.x+o.clientLeft,d.y=p.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-a.scrollLeft*l.x+d.x,y:n.y*l.y-a.scrollTop*l.y+d.y}}function An(e){return Array.from(e.getClientRects())}function rt(e){return U(Y(e)).left+ve(e).scrollLeft}function Pn(e){const t=Y(e),n=ve(e),o=e.ownerDocument.body,r=L(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=L(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+rt(e);const c=-n.scrollTop;return W(o).direction==="rtl"&&(s+=L(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function Cn(e,t){const n=k(e),o=Y(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,a=0;if(r){i=r.width,s=r.height;const l=Se();(!l||l&&t==="fixed")&&(c=r.offsetLeft,a=r.offsetTop)}return{width:i,height:s,x:c,y:a}}function Rn(e,t){const n=U(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=I(e)?Z(e):q(1),s=e.clientWidth*i.x,c=e.clientHeight*i.y,a=r*i.x,l=o*i.y;return{width:s,height:c,x:a,y:l}}function Xe(e,t,n){let o;if(t==="viewport")o=Cn(e,n);else if(t==="document")o=Pn(Y(e));else if(B(t))o=Rn(t,n);else{const r=ot(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return me(o)}function it(e,t){const n=G(e);return n===t||!B(n)||J(n)?!1:W(n).position==="fixed"||it(n,t)}function On(e,t){const n=t.get(e);if(n)return n;let o=se(e,[],!1).filter(c=>B(c)&&ne(c)!=="body"),r=null;const i=W(e).position==="fixed";let s=i?G(e):e;for(;B(s)&&!J(s);){const c=W(s),a=Ee(s);!a&&c.position==="fixed"&&(r=null),(i?!a&&!r:!a&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ae(s)&&!a&&it(e,s))?o=o.filter(d=>d!==s):r=c,s=G(s)}return t.set(e,o),o}function En(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?Te(t)?[]:On(t,this._c):[].concat(n),o],c=s[0],a=s.reduce((l,d)=>{const f=Xe(t,d,r);return l.top=L(f.top,l.top),l.right=X(f.right,l.right),l.bottom=X(f.bottom,l.bottom),l.left=L(f.left,l.left),l},Xe(t,c,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Sn(e){const{width:t,height:n}=nt(e);return{width:t,height:n}}function Dn(e,t,n){const o=I(t),r=Y(t),i=n==="fixed",s=U(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const a=q(0);if(o||!o&&!i)if((ne(t)!=="body"||ae(r))&&(c=ve(t)),o){const f=U(t,!0,i,t);a.x=f.x+t.clientLeft,a.y=f.y+t.clientTop}else r&&(a.x=rt(r));const l=s.left+c.scrollLeft-a.x,d=s.top+c.scrollTop-a.y;return{x:l,y:d,width:s.width,height:s.height}}function ye(e){return W(e).position==="static"}function qe(e,t){return!I(e)||W(e).position==="fixed"?null:t?t(e):e.offsetParent}function st(e,t){const n=k(e);if(Te(e))return n;if(!I(e)){let r=G(e);for(;r&&!J(r);){if(B(r)&&!ye(r))return r;r=G(r)}return n}let o=qe(e,t);for(;o&&mn(o)&&ye(o);)o=qe(o,t);return o&&J(o)&&ye(o)&&!Ee(o)?n:o||xn(e)||n}var Tn=async function(e){const t=this.getOffsetParent||st,n=this.getDimensions,o=await n(e.floating);return{reference:Dn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Mn(e){return W(e).direction==="rtl"}var _n={convertOffsetParentRelativeRectToViewportRelativeRect:bn,getDocumentElement:Y,getClippingRect:En,getOffsetParent:st,getElementRects:Tn,getClientRects:An,getDimensions:Sn,getScale:Z,isElement:B,isRTL:Mn};function Nn(e,t){let n=null,o;const r=Y(e);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),i();const{left:l,top:d,width:f,height:p}=e.getBoundingClientRect();if(c||t(),!f||!p)return;const u=de(d),h=de(r.clientWidth-(l+f)),g=de(r.clientHeight-(d+p)),w=de(l),v={rootMargin:-u+"px "+-h+"px "+-g+"px "+-w+"px",threshold:L(0,X(1,a))||1};let b=!0;function y(A){const P=A[0].intersectionRatio;if(P!==a){if(!b)return s();P?s(!1,P):o=setTimeout(()=>{s(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(y,{...v,root:r.ownerDocument})}catch{n=new IntersectionObserver(y,v)}n.observe(e)}return s(!0),i}function Ln(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=De(e),d=r||i?[...l?se(l):[],...se(t)]:[];d.forEach(m=>{r&&m.addEventListener("scroll",n,{passive:!0}),i&&m.addEventListener("resize",n)});const f=l&&c?Nn(l,n):null;let p=-1,u=null;s&&(u=new ResizeObserver(m=>{let[v]=m;v&&v.target===l&&u&&(u.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=u)==null||b.observe(t)})),n()}),l&&!a&&u.observe(l),u.observe(t));let h,g=a?U(e):null;a&&w();function w(){const m=U(e);g&&(m.x!==g.x||m.y!==g.y||m.width!==g.width||m.height!==g.height)&&n(),g=m,h=requestAnimationFrame(w)}return n(),()=>{var m;d.forEach(v=>{r&&v.removeEventListener("scroll",n),i&&v.removeEventListener("resize",n)}),f==null||f(),(m=u)==null||m.disconnect(),u=null,a&&cancelAnimationFrame(h)}}var kn=dn,Fn=pn,jn=ln,Hn=gn,Wn=fn,Ge=an,Bn=hn,In=(e,t,n)=>{const o=new Map,r={platform:_n,...n},i={...r.platform,_c:o};return cn(e,t,{...r,platform:i})},zn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Ge({element:o.current,padding:r}).fn(n):{}:o?Ge({element:o,padding:r}).fn(n):{}}}},pe=typeof document<"u"?x.useLayoutEffect:x.useEffect;function xe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!xe(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!xe(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function ct(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ke(e,t){const n=ct(e);return Math.round(t*n)/n}function Ue(e){const t=x.useRef(e);return pe(()=>{t.current=e}),t}function Vn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:a,open:l}=e,[d,f]=x.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,u]=x.useState(o);xe(p,o)||u(o);const[h,g]=x.useState(null),[w,m]=x.useState(null),v=x.useCallback(C=>{C!==P.current&&(P.current=C,g(C))},[]),b=x.useCallback(C=>{C!==O.current&&(O.current=C,m(C))},[]),y=i||h,A=s||w,P=x.useRef(null),O=x.useRef(null),D=x.useRef(d),F=a!=null,H=Ue(a),j=Ue(r),S=x.useCallback(()=>{if(!P.current||!O.current)return;const C={placement:t,strategy:n,middleware:p};j.current&&(C.platform=j.current),In(P.current,O.current,C).then(N=>{const z={...N,isPositioned:!0};_.current&&!xe(D.current,z)&&(D.current=z,Gt.flushSync(()=>{f(z)}))})},[p,t,n,j]);pe(()=>{l===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,f(C=>({...C,isPositioned:!1})))},[l]);const _=x.useRef(!1);pe(()=>(_.current=!0,()=>{_.current=!1}),[]),pe(()=>{if(y&&(P.current=y),A&&(O.current=A),y&&A){if(H.current)return H.current(y,A,S);S()}},[y,A,S,H,F]);const T=x.useMemo(()=>({reference:P,floating:O,setReference:v,setFloating:b}),[v,b]),E=x.useMemo(()=>({reference:y,floating:A}),[y,A]),M=x.useMemo(()=>{const C={position:n,left:0,top:0};if(!E.floating)return C;const N=Ke(E.floating,d.x),z=Ke(E.floating,d.y);return c?{...C,transform:"translate("+N+"px, "+z+"px)",...ct(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:N,top:z}},[n,c,E.floating,d.x,d.y]);return x.useMemo(()=>({...d,update:S,refs:T,elements:E,floatingStyles:M}),[d,S,T,E,M])}var $n="Arrow",at=x.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return R.jsx(ce.svg,{...i,ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:R.jsx("polygon",{points:"0,0 30,0 15,10"})})});at.displayName=$n;var Yn=at;function Xn(e){const[t,n]=x.useState(void 0);return be(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,c;if("borderBoxSize"in i){const a=i.borderBoxSize,l=Array.isArray(a)?a[0]:a;s=l.inlineSize,c=l.blockSize}else s=e.offsetWidth,c=e.offsetHeight;n({width:s,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}var Me="Popper",[lt,ft]=Ze(Me),[qn,ut]=lt(Me),dt=e=>{const{__scopePopper:t,children:n}=e,[o,r]=x.useState(null);return R.jsx(qn,{scope:t,anchor:o,onAnchorChange:r,children:n})};dt.displayName=Me;var pt="PopperAnchor",ht=x.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=ut(pt,n),s=x.useRef(null),c=we(t,s);return x.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:R.jsx(ce.div,{...r,ref:c})});ht.displayName=pt;var _e="PopperContent",[Gn,Kn]=lt(_e),gt=x.forwardRef((e,t)=>{var ke,Fe,je,He,We,Be;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:a=!0,collisionBoundary:l=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:p=!1,updatePositionStrategy:u="optimized",onPlaced:h,...g}=e,w=ut(_e,n),[m,v]=x.useState(null),b=we(t,oe=>v(oe)),[y,A]=x.useState(null),P=Xn(y),O=(P==null?void 0:P.width)??0,D=(P==null?void 0:P.height)??0,F=o+(i!=="center"?"-"+i:""),H=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},j=Array.isArray(l)?l:[l],S=j.length>0,_={padding:H,boundary:j.filter(Zn),altBoundary:S},{refs:T,floatingStyles:E,placement:M,isPositioned:C,middlewareData:N}=Vn({strategy:"fixed",placement:F,whileElementsMounted:(...oe)=>Ln(...oe,{animationFrame:u==="always"}),elements:{reference:w.anchor},middleware:[kn({mainAxis:r+D,alignmentAxis:s}),a&&Fn({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Bn():void 0,..._}),a&&jn({..._}),Hn({..._,apply:({elements:oe,rects:Ie,availableWidth:jt,availableHeight:Ht})=>{const{width:Wt,height:Bt}=Ie.reference,ue=oe.floating.style;ue.setProperty("--radix-popper-available-width",`${jt}px`),ue.setProperty("--radix-popper-available-height",`${Ht}px`),ue.setProperty("--radix-popper-anchor-width",`${Wt}px`),ue.setProperty("--radix-popper-anchor-height",`${Bt}px`)}}),y&&zn({element:y,padding:c}),Jn({arrowWidth:O,arrowHeight:D}),p&&Wn({strategy:"referenceHidden",..._})]}),[z,Mt]=wt(M),fe=It(h);be(()=>{C&&(fe==null||fe())},[C,fe]);const _t=(ke=N.arrow)==null?void 0:ke.x,Nt=(Fe=N.arrow)==null?void 0:Fe.y,Lt=((je=N.arrow)==null?void 0:je.centerOffset)!==0,[kt,Ft]=x.useState();return be(()=>{m&&Ft(window.getComputedStyle(m).zIndex)},[m]),R.jsx("div",{ref:T.setFloating,"data-radix-popper-content-wrapper":"",style:{...E,transform:C?E.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:kt,"--radix-popper-transform-origin":[(He=N.transformOrigin)==null?void 0:He.x,(We=N.transformOrigin)==null?void 0:We.y].join(" "),...((Be=N.hide)==null?void 0:Be.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:R.jsx(Gn,{scope:n,placedSide:z,onArrowChange:A,arrowX:_t,arrowY:Nt,shouldHideArrow:Lt,children:R.jsx(ce.div,{"data-side":z,"data-align":Mt,...g,ref:b,style:{...g.style,animation:C?void 0:"none"}})})})});gt.displayName=_e;var mt="PopperArrow",Un={top:"bottom",right:"left",bottom:"top",left:"right"},xt=x.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,i=Kn(mt,o),s=Un[i.placedSide];return R.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:R.jsx(Yn,{...r,ref:n,style:{...r.style,display:"block"}})})});xt.displayName=mt;function Zn(e){return e!==null}var Jn=e=>({name:"transformOrigin",options:e,fn(t){var w,m,v;const{placement:n,rects:o,middlewareData:r}=t,s=((w=r.arrow)==null?void 0:w.centerOffset)!==0,c=s?0:e.arrowWidth,a=s?0:e.arrowHeight,[l,d]=wt(n),f={start:"0%",center:"50%",end:"100%"}[d],p=(((m=r.arrow)==null?void 0:m.x)??0)+c/2,u=(((v=r.arrow)==null?void 0:v.y)??0)+a/2;let h="",g="";return l==="bottom"?(h=s?f:`${p}px`,g=`${-a}px`):l==="top"?(h=s?f:`${p}px`,g=`${o.floating.height+a}px`):l==="right"?(h=`${-a}px`,g=s?f:`${u}px`):l==="left"&&(h=`${o.floating.width+a}px`,g=s?f:`${u}px`),{data:{x:h,y:g}}}});function wt(e){const[t,n="center"]=e.split("-");return[t,n]}var Qn=dt,vt=ht,eo=gt,to=xt,Ne="Popover",[yt,uo]=Ze(Ne,[ft]),le=ft(),[no,K]=yt(Ne),bt=e=>{const{__scopePopover:t,children:n,open:o,defaultOpen:r,onOpenChange:i,modal:s=!1}=e,c=le(t),a=x.useRef(null),[l,d]=x.useState(!1),[f=!1,p]=Kt({prop:o,defaultProp:r,onChange:i});return R.jsx(Qn,{...c,children:R.jsx(no,{scope:t,contentId:Ut(),triggerRef:a,open:f,onOpenChange:p,onOpenToggle:x.useCallback(()=>p(u=>!u),[p]),hasCustomAnchor:l,onCustomAnchorAdd:x.useCallback(()=>d(!0),[]),onCustomAnchorRemove:x.useCallback(()=>d(!1),[]),modal:s,children:n})})};bt.displayName=Ne;var At="PopoverAnchor",Pt=x.forwardRef((e,t)=>{const{__scopePopover:n,...o}=e,r=K(At,n),i=le(n),{onCustomAnchorAdd:s,onCustomAnchorRemove:c}=r;return x.useEffect(()=>(s(),()=>c()),[s,c]),R.jsx(vt,{...i,...o,ref:t})});Pt.displayName=At;var Ct="PopoverTrigger",Rt=x.forwardRef((e,t)=>{const{__scopePopover:n,...o}=e,r=K(Ct,n),i=le(n),s=we(t,r.triggerRef),c=R.jsx(ce.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":Tt(r.open),...o,ref:s,onClick:re(e.onClick,r.onOpenToggle)});return r.hasCustomAnchor?c:R.jsx(vt,{asChild:!0,...i,children:c})});Rt.displayName=Ct;var Le="PopoverPortal",[oo,ro]=yt(Le,{forceMount:void 0}),Ot=e=>{const{__scopePopover:t,forceMount:n,children:o,container:r}=e,i=K(Le,t);return R.jsx(oo,{scope:t,forceMount:n,children:R.jsx(Je,{present:n||i.open,children:R.jsx(Zt,{asChild:!0,container:r,children:o})})})};Ot.displayName=Le;var Q="PopoverContent",Et=x.forwardRef((e,t)=>{const n=ro(Q,e.__scopePopover),{forceMount:o=n.forceMount,...r}=e,i=K(Q,e.__scopePopover);return R.jsx(Je,{present:o||i.open,children:i.modal?R.jsx(io,{...r,ref:t}):R.jsx(so,{...r,ref:t})})});Et.displayName=Q;var io=x.forwardRef((e,t)=>{const n=K(Q,e.__scopePopover),o=x.useRef(null),r=we(t,o),i=x.useRef(!1);return x.useEffect(()=>{const s=o.current;if(s)return zt(s)},[]),R.jsx(Vt,{as:$t,allowPinchZoom:!0,children:R.jsx(St,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:re(e.onCloseAutoFocus,s=>{var c;s.preventDefault(),i.current||(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:re(e.onPointerDownOutside,s=>{const c=s.detail.originalEvent,a=c.button===0&&c.ctrlKey===!0,l=c.button===2||a;i.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:re(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),so=x.forwardRef((e,t)=>{const n=K(Q,e.__scopePopover),o=x.useRef(!1),r=x.useRef(!1);return R.jsx(St,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var s,c;(s=e.onCloseAutoFocus)==null||s.call(e,i),i.defaultPrevented||(o.current||(c=n.triggerRef.current)==null||c.focus(),i.preventDefault()),o.current=!1,r.current=!1},onInteractOutside:i=>{var a,l;(a=e.onInteractOutside)==null||a.call(e,i),i.defaultPrevented||(o.current=!0,i.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const s=i.target;((l=n.triggerRef.current)==null?void 0:l.contains(s))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&r.current&&i.preventDefault()}})}),St=x.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:i,disableOutsidePointerEvents:s,onEscapeKeyDown:c,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:d,...f}=e,p=K(Q,n),u=le(n);return Yt(),R.jsx(Xt,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:i,children:R.jsx(qt,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:d,onEscapeKeyDown:c,onPointerDownOutside:a,onFocusOutside:l,onDismiss:()=>p.onOpenChange(!1),children:R.jsx(eo,{"data-state":Tt(p.open),role:"dialog",id:p.contentId,...u,...f,ref:t,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),Dt="PopoverClose",co=x.forwardRef((e,t)=>{const{__scopePopover:n,...o}=e,r=K(Dt,n);return R.jsx(ce.button,{type:"button",...o,ref:t,onClick:re(e.onClick,()=>r.onOpenChange(!1))})});co.displayName=Dt;var ao="PopoverArrow",lo=x.forwardRef((e,t)=>{const{__scopePopover:n,...o}=e,r=le(n);return R.jsx(to,{...r,...o,ref:t})});lo.displayName=ao;function Tt(e){return e?"open":"closed"}var po=bt,ho=Pt,go=Rt,mo=Ot,xo=Et;export{ho as A,xo as C,mo as P,po as R,go as T,Xn as u};
