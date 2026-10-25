import{j as t,w as P,S as y,p as R}from"./quoteService.CxYNSIVr.js";import{r as a}from"./index.DK-fsZOb.js";import"./index.iuzeblgG.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(...e)=>e.filter((r,o,l)=>!!r&&r.trim()!==""&&l.indexOf(r)===o).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,l)=>l?l.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=e=>{const r=F(e);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=a.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:i,iconNode:d,...m},u)=>a.createElement("svg",{ref:u,...B,width:r,height:r,stroke:e,strokeWidth:l?Number(o)*24/Number(r):o,className:A("lucide",c),...!i&&!I(m)&&{"aria-hidden":"true"},...m},[...d.map(([p,x])=>a.createElement(p,x)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,r)=>{const o=a.forwardRef(({className:l,...c},i)=>a.createElement(M,{ref:i,iconNode:r,className:A(`lucide-${O(_(e))}`,`lucide-${e}`,l),...c}));return o.displayName=_(e),o};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Q=Y("chevron-left",H),b=["Do my online class","Research Paper","Take my proctored exam","Class Project","Take my online test","Academic Essay","Other"],g=["Today","24 Hours","2-3 Days","This Week","Flexible Deadline"],$={"Do my online class":"DO_MY_ONLINE_CLASS","Research Paper":"RESEARCH_PAPER","Take my proctored exam":"TAKE_MY_PROCTORED_EXAM","Class Project":"CLASS_PROJECT","Take my online test":"TAKE_MY_ONLINE_TEST","Academic Essay":"ACADEMIC_ESSAY",Other:"OTHER"},q={Today:"TODAY","24 Hours":"24_HOURS","2-3 Days":"2_3_DAYS","This Week":"THIS_WEEK","Flexible Deadline":"FLEXIBLE_DEADLINE"},T=a.memo(()=>{const[e,r]=a.useState(1),[o,l]=a.useState(b[0]),[c,i]=a.useState(g[0]),[d,m]=a.useState(""),[u,p]=a.useState(""),[x,w]=a.useState(""),[f,N]=a.useState(""),[j,C]=a.useState(""),[n,S]=a.useState(!1),k=async()=>{if(e<4){r(e+1);return}if(n)return;const s=u.trim(),E=x.trim(),v=j.trim();if(!s||!E||!v){await y.fire({icon:"warning",title:"Required Fields",text:"Please fill in your name, email, and message before submitting.",confirmButtonColor:"#FF6B00"});return}const L={helpType:$[o]||"OTHER",urgency:q[c]||"FLEXIBLE_DEADLINE",subject:d.trim(),name:s,email:E,...f.trim()&&{phoneNumber:f.trim()},message:v};S(!0);try{const h=await R(L);await y.fire({icon:"success",title:"Submitted",text:h?.message,confirmButtonColor:"#FF6B00"}),r(1),l(b[0]),i(g[0]),m(""),p(""),w(""),N(""),C("")}catch(h){await y.fire({icon:"error",title:"Submission Failed",text:h.message||"Something went wrong. Please try again.",confirmButtonColor:"#FF6B00"})}finally{S(!1)}},D=()=>{e>1&&r(e-1)};return t.jsx("section",{className:"py-14 sm:py-16 lg:py-20 bg-white",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4",children:t.jsxs("div",{className:"relative rounded-lg bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-100 px-5 py-6 sm:px-8 sm:py-7 min-h-[300px] flex flex-col justify-between",children:[e>1&&t.jsxs("button",{onClick:D,className:"absolute left-5 top-6 sm:left-8 sm:top-7 flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors",children:[t.jsx(Q,{className:"w-4 h-4"}),"Back"]}),t.jsxs("div",{className:e>1?"pt-8 sm:pt-0":"",children:[t.jsxs("div",{className:"text-center mt-2 sm:mt-0",children:[t.jsx("h2",{className:"text-2xl sm:text-3xl font-semibold text-slate-800",children:"Get Your Free Custom Quote"}),t.jsx("p",{className:"mt-1.5 text-sm text-slate-500",children:"Fill out the details below and we'll get back to you instantly."})]}),t.jsxs("div",{className:"mt-8 flex items-center justify-center",children:[e===1&&t.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2.5",children:b.map(s=>t.jsx("button",{type:"button",onClick:()=>l(s),className:`rounded-full border px-4 py-2 text-sm transition-colors ${o===s?"border-primary bg-primary text-white font-medium":"border-primary/60 text-slate-700 hover:bg-primary hover:text-white"}`,children:s},s))}),e===2&&t.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mt-2 pt-4",children:g.map(s=>t.jsx("button",{type:"button",onClick:()=>i(s),className:`rounded-full border px-5 py-2 text-sm transition-colors ${c===s?"border-primary bg-primary text-white font-medium":"border-primary/60 text-slate-700 hover:bg-primary hover:text-white"}`,children:s},s))}),e===3&&t.jsx("div",{className:"w-full max-w-2xl",children:t.jsx("input",{type:"text",placeholder:"Subject/course name/course code",value:d,onChange:s=>m(s.target.value),className:"w-full rounded-full border border-primary/60 px-5 py-3 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"})}),e===4&&t.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t.jsx("input",{type:"text",placeholder:"Your Name",value:u,onChange:s=>p(s.target.value),className:"w-full rounded-md border border-primary/60 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all",required:!0,disabled:n}),t.jsx("input",{type:"email",placeholder:"Email address",value:x,onChange:s=>w(s.target.value),className:"w-full rounded-md border border-primary/60 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all",required:!0,disabled:n})]}),t.jsx("input",{type:"tel",placeholder:"Phone number (optional)",value:f,onChange:s=>N(s.target.value),className:"w-full rounded-md border border-primary/60 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all",disabled:n}),t.jsx("textarea",{placeholder:"Message/Project details",rows:"4",value:j,onChange:s=>C(s.target.value),className:"w-full resize-none rounded-md border border-primary/60 px-4 py-3 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all",required:!0,disabled:n})]})]})]}),t.jsxs("div",{className:"mt-10 flex items-center justify-between gap-3",children:[t.jsxs("p",{className:"text-sm font-medium text-slate-600",children:["Step ",e," of 4"]}),t.jsxs("button",{type:"button",onClick:k,disabled:n,className:"inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed",children:[e===4?n?"Submitting...":"Submit":"Next",!n&&t.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})})})});T.displayName="CustomQuoteSection";const X=P(T);export{X as default};
