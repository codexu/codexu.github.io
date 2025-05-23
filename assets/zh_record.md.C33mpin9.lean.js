import{ad as f,_,c as y,o as g,ae as p,j as d,G as r,a as o,k as s}from"./chunks/framework.Cthp9TdA.js";/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,l)=>l?l.toUpperCase():a.toLowerCase()),b=t=>{const e=x(t);return e.charAt(0).toUpperCase()+e.slice(1)},T=(...t)=>t.filter((e,a,l)=>!!e&&e.trim()!==""&&l.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=({size:t,strokeWidth:e=2,absoluteStrokeWidth:a,color:l,iconNode:u,name:c,class:S,...k},{slots:v})=>f("svg",{...n,width:t||n.width,height:t||n.height,stroke:l||n.stroke,"stroke-width":a?Number(e)*24/Number(t):e,class:T("lucide",...c?[`lucide-${h(b(c))}-icon`,`lucide-${h(c)}`]:["lucide-icon"]),...k},[...u.map(m=>f(...m)),...v.default?[v.default()]:[]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(t,e)=>(a,{slots:l})=>f(A,{...a,iconNode:e,name:t},l);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i("copy-slash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=i("file-plus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=i("image-plus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=i("link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=i("scan-text",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]),j=JSON.parse('{"title":"记录","description":"","frontmatter":{},"headers":[],"relativePath":"zh/record.md","filePath":"zh/record.md"}'),V={name:"zh/record.md"},I=Object.assign(V,{setup(t){return(e,a)=>(g(),y("div",null,[a[5]||(a[5]=p("",6)),d("h3",null,[r(s(q)),a[0]||(a[0]=o("截图记录"))]),a[6]||(a[6]=d("p",null,"从屏幕中框选区域，将框选区域截图，通过 OCR 识别文字，再由 AI 生成记录描述（方便用户分别内容），进行图床上传。",-1)),d("h3",null,[r(s(M)),a[1]||(a[1]=o("插图记录"))]),a[7]||(a[7]=p("",2)),d("h3",null,[r(s(C)),a[2]||(a[2]=o("文件记录"))]),a[8]||(a[8]=d("p",null,[o("从本地选择文件，进行文件记录，暂时只支持 "),d("code",null,"txt"),o("、"),d("code",null,"md"),o("、"),d("code",null,"csv"),o("、"),d("code",null,"pdf"),o(" 格式，将其以文本的形式记录。")],-1)),d("h3",null,[r(s(w)),a[3]||(a[3]=o("文本记录"))]),a[9]||(a[9]=d("p",null,"点击后，弹出文本记录弹窗，用户可直接输入文本，适合大段文本记录或临时记录。",-1)),d("h3",null,[r(s(P)),a[4]||(a[4]=o("链接记录"))]),a[10]||(a[10]=p("",11))]))}}),z=_(I,[["__scopeId","data-v-8219f211"]]);export{j as __pageData,z as default};
