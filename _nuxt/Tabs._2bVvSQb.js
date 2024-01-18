import{s as $,v as h,y as D,r as g,B as W,x as B,a9 as te,D as ue,F as q,C as ae,E as M,_ as ie,G as oe,H as K,K as de,L as J,aA as ve,A as H,o as E,P as V,w as C,O as A,aa as pe,a as L,t as Q,T as X,N as Y,c as Z,b as _,d as ce,V as fe}from"./entry.LFM_JvCg.js";import{o as m,A as N,T as be,t as le,N as ee,u as j,a as I}from"./keyboard.IE1kcyyG.js";import{s as me}from"./use-resolve-button-type.8VLVHwJT.js";import{s as ge,f as ne}from"./hidden.2aPAslxq.js";import{O as F,T as R,i as he,P as O,N as k}from"./focus-management.QsA4ecDa.js";import{t as ye}from"./micro-task.ZxAilEVg.js";const Te={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:""}}};let we=$({props:{onFocus:{type:Function,required:!0}},setup(e){let d=h(!0);return()=>d.value?D(ne,{as:"button",type:"button",features:ge.Focusable,onFocus(p){p.preventDefault();let v,s=50;function a(){var r;if(s--<=0){v&&cancelAnimationFrame(v);return}if((r=e.onFocus)!=null&&r.call(e)){d.value=!1,cancelAnimationFrame(v);return}v=requestAnimationFrame(a)}v=requestAnimationFrame(a)}}):null}});var xe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(xe||{}),Ie=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ie||{});let se=Symbol("TabsContext");function z(e){let d=M(se,null);if(d===null){let p=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,z),p}return d}let U=Symbol("TabsSSRContext"),ke=$({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:d,attrs:p,emit:v}){var s;let a=h((s=e.selectedIndex)!=null?s:e.defaultIndex),r=h([]),o=h([]),c=g(()=>e.selectedIndex!==null),f=g(()=>c.value?e.selectedIndex:a.value);function i(l){var t;let u=F(n.tabs.value,m),y=F(n.panels.value,m),P=u.filter(w=>{var x;return!((x=m(w))!=null&&x.hasAttribute("disabled"))});if(l<0||l>u.length-1){let w=j(a.value===null?0:Math.sign(l-a.value),{[-1]:()=>1,0:()=>j(Math.sign(l),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),x=j(w,{0:()=>u.indexOf(P[0]),1:()=>u.indexOf(P[P.length-1])});x!==-1&&(a.value=x),n.tabs.value=u,n.panels.value=y}else{let w=u.slice(0,l),x=[...u.slice(l),...w].find(re=>P.includes(re));if(!x)return;let G=(t=u.indexOf(x))!=null?t:n.selectedIndex.value;G===-1&&(G=n.selectedIndex.value),a.value=G,n.tabs.value=u,n.panels.value=y}}let n={selectedIndex:g(()=>{var l,t;return(t=(l=a.value)!=null?l:e.defaultIndex)!=null?t:null}),orientation:g(()=>e.vertical?"vertical":"horizontal"),activation:g(()=>e.manual?"manual":"auto"),tabs:r,panels:o,setSelectedIndex(l){f.value!==l&&v("change",l),c.value||i(l)},registerTab(l){var t;if(r.value.includes(l))return;let u=r.value[a.value];r.value.push(l),r.value=F(r.value,m);let y=(t=r.value.indexOf(u))!=null?t:a.value;y!==-1&&(a.value=y)},unregisterTab(l){let t=r.value.indexOf(l);t!==-1&&r.value.splice(t,1)},registerPanel(l){o.value.includes(l)||(o.value.push(l),o.value=F(o.value,m))},unregisterPanel(l){let t=o.value.indexOf(l);t!==-1&&o.value.splice(t,1)}};W(se,n);let b=h({tabs:[],panels:[]}),T=h(!1);B(()=>{T.value=!0}),W(U,g(()=>T.value?null:b.value));let S=g(()=>e.selectedIndex);return B(()=>{te([S],()=>{var l;return i((l=e.selectedIndex)!=null?l:e.defaultIndex)},{immediate:!0})}),ue(()=>{if(!c.value||f.value==null||n.tabs.value.length<=0)return;let l=F(n.tabs.value,m);l.some((t,u)=>m(n.tabs.value[u])!==m(t))&&n.setSelectedIndex(l.findIndex(t=>m(t)===m(n.tabs.value[f.value])))}),()=>{let l={selectedIndex:a.value};return D(q,[r.value.length<=0&&D(we,{onFocus:()=>{for(let t of r.value){let u=m(t);if((u==null?void 0:u.tabIndex)===0)return u.focus(),!0}return!1}}),N({theirProps:{...p,...be(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:l,slots:d,attrs:p,name:"TabGroup"})])}}}),Pe=$({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:d,slots:p}){let v=z("TabList");return()=>{let s={selectedIndex:v.selectedIndex.value},a={role:"tablist","aria-orientation":v.orientation.value};return N({ourProps:a,theirProps:e,slot:s,attrs:d,slots:p,name:"TabList"})}}}),Se=$({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${le()}`}},setup(e,{attrs:d,slots:p,expose:v}){let s=z("Tab"),a=h(null);v({el:a,$el:a}),B(()=>s.registerTab(a)),ae(()=>s.unregisterTab(a));let r=M(U),o=g(()=>{if(r.value){let t=r.value.tabs.indexOf(e.id);return t===-1?r.value.tabs.push(e.id)-1:t}return-1}),c=g(()=>{let t=s.tabs.value.indexOf(a);return t===-1?o.value:t}),f=g(()=>c.value===s.selectedIndex.value);function i(t){var u;let y=t();if(y===R.Success&&s.activation.value==="auto"){let P=(u=he(a))==null?void 0:u.activeElement,w=s.tabs.value.findIndex(x=>m(x)===P);w!==-1&&s.setSelectedIndex(w)}return y}function n(t){let u=s.tabs.value.map(y=>m(y)).filter(Boolean);if(t.key===I.Space||t.key===I.Enter){t.preventDefault(),t.stopPropagation(),s.setSelectedIndex(c.value);return}switch(t.key){case I.Home:case I.PageUp:return t.preventDefault(),t.stopPropagation(),i(()=>O(u,k.First));case I.End:case I.PageDown:return t.preventDefault(),t.stopPropagation(),i(()=>O(u,k.Last))}if(i(()=>j(s.orientation.value,{vertical(){return t.key===I.ArrowUp?O(u,k.Previous|k.WrapAround):t.key===I.ArrowDown?O(u,k.Next|k.WrapAround):R.Error},horizontal(){return t.key===I.ArrowLeft?O(u,k.Previous|k.WrapAround):t.key===I.ArrowRight?O(u,k.Next|k.WrapAround):R.Error}}))===R.Success)return t.preventDefault()}let b=h(!1);function T(){var t;b.value||(b.value=!0,!e.disabled&&((t=m(a))==null||t.focus({preventScroll:!0}),s.setSelectedIndex(c.value),ye(()=>{b.value=!1})))}function S(t){t.preventDefault()}let l=me(g(()=>({as:e.as,type:d.type})),a);return()=>{var t;let u={selected:f.value},{id:y,...P}=e,w={ref:a,onKeydown:n,onMousedown:S,onClick:T,id:y,role:"tab",type:l.value,"aria-controls":(t=m(s.panels.value[c.value]))==null?void 0:t.id,"aria-selected":f.value,tabIndex:f.value?0:-1,disabled:e.disabled?!0:void 0};return N({ourProps:w,theirProps:P,slot:u,attrs:d,slots:p,name:"Tab"})}}}),$e=$({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:d,attrs:p}){let v=z("TabPanels");return()=>{let s={selectedIndex:v.selectedIndex.value};return N({theirProps:e,ourProps:{},slot:s,attrs:p,slots:d,name:"TabPanels"})}}}),Ae=$({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${le()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:d,slots:p,expose:v}){let s=z("TabPanel"),a=h(null);v({el:a,$el:a}),B(()=>s.registerPanel(a)),ae(()=>s.unregisterPanel(a));let r=M(U),o=g(()=>{if(r.value){let i=r.value.panels.indexOf(e.id);return i===-1?r.value.panels.push(e.id)-1:i}return-1}),c=g(()=>{let i=s.panels.value.indexOf(a);return i===-1?o.value:i}),f=g(()=>c.value===s.selectedIndex.value);return()=>{var i;let n={selected:f.value},{id:b,tabIndex:T,...S}=e,l={ref:a,id:b,role:"tabpanel","aria-labelledby":(i=m(s.tabs.value[c.value]))==null?void 0:i.id,tabIndex:f.value?T:-1};return!f.value&&e.unmount&&!e.static?D(ne,{as:"span","aria-hidden":!0,...l}):N({ourProps:l,theirProps:S,slot:n,attrs:d,slots:p,features:ee.Static|ee.RenderStrategy,visible:f.value,name:"TabPanel"})}}});const Oe=oe(K.ui.strategy,K.ui.tabs,Te),He=$({components:{HTabGroup:ke,HTabList:Pe,HTab:Se,HTabPanels:$e,HTabPanel:Ae},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:d}){const{ui:p,attrs:v}=de("tabs",J(e,"ui"),Oe,J(e,"class")),s=h(),a=h([]),r=h(),o=h(e.modelValue||e.defaultIndex);function c(i){var b;const n=(b=a.value[i])==null?void 0:b.$el;n&&r.value&&(r.value.style.top=`${n.offsetTop}px`,r.value.style.left=`${n.offsetLeft}px`,r.value.style.width=`${n.offsetWidth}px`,r.value.style.height=`${n.offsetHeight}px`)}function f(i){o.value=i,d("change",i),e.modelValue!==void 0&&d("update:modelValue",o.value),c(o.value)}return ve(s,()=>{c(o.value)}),te(()=>e.modelValue,i=>{o.value=i,c(o.value)}),B(()=>c(o.value)),{ui:p,attrs:v,listRef:s,itemRefs:a,markerRef:r,selectedIndex:o,onChange:f}}}),Ee={class:"truncate"};function Ce(e,d,p,v,s,a){const r=H("HTab"),o=H("HTabList"),c=H("HTabPanel"),f=H("HTabPanels"),i=H("HTabGroup");return E(),V(i,fe({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:C(()=>[_(o,{ref:"listRef",class:A([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:pe([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:C(()=>[L("div",{ref:"markerRef",class:A(e.ui.list.marker.wrapper)},[L("div",{class:A([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(E(!0),Z(q,null,Y(e.items,(n,b)=>(E(),V(r,{key:b,ref_for:!0,ref:"itemRefs",disabled:n.disabled,as:"template"},{default:C(({selected:T,disabled:S})=>[L("button",{class:A([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,T?e.ui.list.tab.active:e.ui.list.tab.inactive])},[X(e.$slots,"default",{item:n,index:b,selected:T,disabled:S},()=>[L("span",Ee,Q(n.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),_(f,{class:A(e.ui.container)},{default:C(()=>[(E(!0),Z(q,null,Y(e.items,(n,b)=>(E(),V(c,{key:b,class:A(e.ui.base),tabindex:"-1"},{default:C(({selected:T})=>[X(e.$slots,n.slot||"item",{item:n,index:b,selected:T},()=>[ce(Q(n.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const je=ie(He,[["render",Ce]]);export{je as default};
