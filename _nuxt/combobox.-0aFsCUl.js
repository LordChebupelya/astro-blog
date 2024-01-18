import{r as y,aq as W,ar as me,a9 as N,as as ae,at as be,s as L,v as F,au as ge,B as se,x as le,y as J,F as he,D as Z,E as ve,C as xe,a7 as j,a3 as Se,am as k}from"./entry.LFM_JvCg.js";import{d as ye,e as Oe}from"./form.B8z1LJL_.js";import{u as K,o as I,E as Ie,A as H,T as oe,t as ee,N as Y,a as D}from"./keyboard.IE1kcyyG.js";import{w as Re,n as Ce}from"./use-outside-click.V7AUcKez.js";import{s as Ee}from"./use-resolve-button-type.8VLVHwJT.js";import{c as z,f as ie,i as Te,u as we}from"./calculate-active-index.mkObhLki.js";import{f as Me,s as Pe}from"./hidden.2aPAslxq.js";import{t as ze,i as G,l as $e}from"./open-closed.-z27p9Q9.js";import{o as re,t as ue}from"./disposables.HMegUYH-.js";import{i as Fe,O as De}from"./focus-management.QsA4ecDa.js";/**
 * vue-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Q(){return Q=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(o[l]=e[l])}return o},Q.apply(this,arguments)}/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(){return X=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(o[l]=e[l])}return o},X.apply(this,arguments)}/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(o,s,e){var l,t=(l=e.initialDeps)!=null?l:[],n;return function(){var i;e.key&&e.debug!=null&&e.debug()&&(i=Date.now());var a=o(),r=a.length!==t.length||a.some(function(P,w){return t[w]!==P});if(!r)return n;t=a;var c;if(e.key&&e.debug!=null&&e.debug()&&(c=Date.now()),n=s.apply(void 0,a),e.key&&e.debug!=null&&e.debug()){var m=Math.round((Date.now()-i)*100)/100,p=Math.round((Date.now()-c)*100)/100,T=p/16,O=function(w,V){for(w=String(w);w.length<V;)w=" "+w;return w};console.info("%c⏱ "+O(p,5)+" /"+O(m,5)+" ms",`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(`+Math.max(0,Math.min(120-120*T,120))+"deg 100% 31%);",e==null?void 0:e.key)}return e==null||e.onChange==null||e.onChange(n),n}}function ne(o,s){if(o===void 0)throw new Error("Unexpected undefined"+(s?": "+s:""));return o}var Ve=function(s,e){return Math.abs(s-e)<1};/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ae=function(s){return s},Be=function(s){for(var e=Math.max(s.startIndex-s.overscan,0),l=Math.min(s.endIndex+s.overscan,s.count-1),t=[],n=e;n<=l;n++)t.push(n);return t},ke=function(s,e){var l=s.scrollElement;if(l){var t=function(a){var r=a.width,c=a.height;e({width:Math.round(r),height:Math.round(c)})};t(l.getBoundingClientRect());var n=new ResizeObserver(function(i){var a=i[0];if(a!=null&&a.borderBoxSize){var r=a.borderBoxSize[0];if(r){t({width:r.inlineSize,height:r.blockSize});return}}t(l.getBoundingClientRect())});return n.observe(l,{box:"border-box"}),function(){n.unobserve(l)}}},je=function(s,e){var l=s.scrollElement;if(l){var t=function(){e(l[s.options.horizontal?"scrollLeft":"scrollTop"])};return t(),l.addEventListener("scroll",t,{passive:!0}),function(){l.removeEventListener("scroll",t)}}},Ne=function(s,e,l){if(e!=null&&e.borderBoxSize){var t=e.borderBoxSize[0];if(t){var n=Math.round(t[l.options.horizontal?"inlineSize":"blockSize"]);return n}}return Math.round(s.getBoundingClientRect()[l.options.horizontal?"width":"height"])},_e=function(s,e,l){var t,n,i=e.adjustments,a=i===void 0?0:i,r=e.behavior,c=s+a;(t=l.scrollElement)==null||t.scrollTo==null||t.scrollTo((n={},n[l.options.horizontal?"left":"top"]=c,n.behavior=r,n))},Ke=function(s){var e=this;this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=function(){var l=null,t=function(){return l||(typeof ResizeObserver<"u"?l=new ResizeObserver(function(i){i.forEach(function(a){e._measureElement(a.target,a)})}):null)};return{disconnect:function(){var i;return(i=t())==null?void 0:i.disconnect()},observe:function(i){var a;return(a=t())==null?void 0:a.observe(i,{box:"border-box"})},unobserve:function(i){var a;return(a=t())==null?void 0:a.unobserve(i)}}}(),this.range=null,this.setOptions=function(l){Object.entries(l).forEach(function(t){var n=t[0],i=t[1];typeof i>"u"&&delete l[n]}),e.options=X({debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Ae,rangeExtractor:Be,onChange:function(){},measureElement:Ne,initialRect:{width:0,height:0},scrollMargin:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1},l)},this.notify=function(l){e.options.onChange==null||e.options.onChange(e,l)},this.maybeNotify=_(function(){return e.calculateRange(),[e.isScrolling,e.range?e.range.startIndex:null,e.range?e.range.endIndex:null]},function(l){e.notify(l)},{key:!1,debug:function(){return e.options.debug},initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=function(){e.unsubs.filter(Boolean).forEach(function(l){return l()}),e.unsubs=[],e.scrollElement=null},this._didMount=function(){return e.measureElementCache.forEach(e.observer.observe),function(){e.observer.disconnect(),e.cleanup()}},this._willUpdate=function(){var l=e.options.getScrollElement();e.scrollElement!==l&&(e.cleanup(),e.scrollElement=l,e._scrollToOffset(e.scrollOffset,{adjustments:void 0,behavior:void 0}),e.unsubs.push(e.options.observeElementRect(e,function(t){e.scrollRect=t,e.maybeNotify()})),e.unsubs.push(e.options.observeElementOffset(e,function(t){e.scrollAdjustments=0,e.scrollOffset!==t&&(e.isScrollingTimeoutId!==null&&(clearTimeout(e.isScrollingTimeoutId),e.isScrollingTimeoutId=null),e.isScrolling=!0,e.scrollDirection=e.scrollOffset<t?"forward":"backward",e.scrollOffset=t,e.maybeNotify(),e.isScrollingTimeoutId=setTimeout(function(){e.isScrollingTimeoutId=null,e.isScrolling=!1,e.scrollDirection=null,e.maybeNotify()},e.options.scrollingDelay))})))},this.getSize=function(){return e.scrollRect[e.options.horizontal?"width":"height"]},this.memoOptions=_(function(){return[e.options.count,e.options.paddingStart,e.options.scrollMargin,e.options.getItemKey]},function(l,t,n,i){return e.pendingMeasuredCacheIndexes=[],{count:l,paddingStart:t,scrollMargin:n,getItemKey:i}},{key:!1}),this.getFurthestMeasurement=function(l,t){for(var n=new Map,i=new Map,a=t-1;a>=0;a--){var r=l[a];if(!n.has(r.lane)){var c=i.get(r.lane);if(c==null||r.end>c.end?i.set(r.lane,r):r.end<c.end&&n.set(r.lane,!0),n.size===e.options.lanes)break}}return i.size===e.options.lanes?Array.from(i.values()).sort(function(m,p){return m.end-p.end})[0]:void 0},this.getMeasurements=_(function(){return[e.memoOptions(),e.itemSizeCache]},function(l,t){var n=l.count,i=l.paddingStart,a=l.scrollMargin,r=l.getItemKey,c=e.pendingMeasuredCacheIndexes.length>0?Math.min.apply(Math,e.pendingMeasuredCacheIndexes):0;e.pendingMeasuredCacheIndexes=[];for(var m=e.measurementsCache.slice(0,c),p=c;p<n;p++){var T=r(p),O=e.options.lanes===1?m[p-1]:e.getFurthestMeasurement(m,p),P=O?O.end:i+a,w=t.get(T),V=typeof w=="number"?w:e.options.estimateSize(p),x=P+V,u=O?O.lane:p%e.options.lanes;m[p]={index:p,start:P,size:V,end:x,key:T,lane:u}}return e.measurementsCache=m,m},{key:!1,debug:function(){return e.options.debug}}),this.calculateRange=_(function(){return[e.getMeasurements(),e.getSize(),e.scrollOffset]},function(l,t,n){return e.range=l.length>0&&t>0?Le({measurements:l,outerSize:t,scrollOffset:n}):null},{key:!1,debug:function(){return e.options.debug}}),this.getIndexes=_(function(){return[e.options.rangeExtractor,e.calculateRange(),e.options.overscan,e.options.count]},function(l,t,n,i){return t===null?[]:l(X({},t,{overscan:n,count:i}))},{key:!1,debug:function(){return e.options.debug}}),this.indexFromElement=function(l){var t=e.options.indexAttribute,n=l.getAttribute(t);return n?parseInt(n,10):(console.warn("Missing attribute name '"+t+"={index}' on measured element."),-1)},this._measureElement=function(l,t){var n=e.measurementsCache[e.indexFromElement(l)];if(!n||!l.isConnected){e.measureElementCache.forEach(function(r,c){r===l&&(e.observer.unobserve(l),e.measureElementCache.delete(c))});return}var i=e.measureElementCache.get(n.key);i!==l&&(i&&e.observer.unobserve(i),e.observer.observe(l),e.measureElementCache.set(n.key,l));var a=e.options.measureElement(l,t,e);e.resizeItem(n,a)},this.resizeItem=function(l,t){var n,i=(n=e.itemSizeCache.get(l.key))!=null?n:l.size,a=t-i;a!==0&&(l.start<e.scrollOffset&&e._scrollToOffset(e.scrollOffset,{adjustments:e.scrollAdjustments+=a,behavior:void 0}),e.pendingMeasuredCacheIndexes.push(l.index),e.itemSizeCache=new Map(e.itemSizeCache.set(l.key,t)),e.notify(!1))},this.measureElement=function(l){l&&e._measureElement(l,void 0)},this.getVirtualItems=_(function(){return[e.getIndexes(),e.getMeasurements()]},function(l,t){for(var n=[],i=0,a=l.length;i<a;i++){var r=l[i],c=t[r];n.push(c)}return n},{key:!1,debug:function(){return e.options.debug}}),this.getVirtualItemForOffset=function(l){var t=e.getMeasurements();return ne(t[de(0,t.length-1,function(n){return ne(t[n]).start},l)])},this.getOffsetForAlignment=function(l,t){var n=e.getSize();t==="auto"&&(l<=e.scrollOffset?t="start":l>=e.scrollOffset+n?t="end":t="start"),t==="start"?l=l:t==="end"?l=l-n:t==="center"&&(l=l-n/2);var i=e.options.horizontal?"scrollWidth":"scrollHeight",a=e.scrollElement?"document"in e.scrollElement?e.scrollElement.document.documentElement[i]:e.scrollElement[i]:0,r=a-e.getSize();return Math.max(Math.min(r,l),0)},this.getOffsetForIndex=function(l,t){t===void 0&&(t="auto"),l=Math.max(0,Math.min(l,e.options.count-1));var n=ne(e.getMeasurements()[l]);if(t==="auto")if(n.end>=e.scrollOffset+e.getSize()-e.options.scrollPaddingEnd)t="end";else if(n.start<=e.scrollOffset+e.options.scrollPaddingStart)t="start";else return[e.scrollOffset,t];var i=t==="end"?n.end+e.options.scrollPaddingEnd:n.start-e.options.scrollPaddingStart;return[e.getOffsetForAlignment(i,t),t]},this.isDynamicMode=function(){return e.measureElementCache.size>0},this.cancelScrollToIndex=function(){e.scrollToIndexTimeoutId!==null&&(clearTimeout(e.scrollToIndexTimeoutId),e.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(l,t){var n=t===void 0?{}:t,i=n.align,a=i===void 0?"start":i,r=n.behavior;e.cancelScrollToIndex(),r==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.getOffsetForAlignment(l,a),{adjustments:void 0,behavior:r})},this.scrollToIndex=function(l,t){var n=t===void 0?{}:t,i=n.align,a=i===void 0?"auto":i,r=n.behavior;l=Math.max(0,Math.min(l,e.options.count-1)),e.cancelScrollToIndex(),r==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");var c=e.getOffsetForIndex(l,a),m=c[0],p=c[1];e._scrollToOffset(m,{adjustments:void 0,behavior:r}),r!=="smooth"&&e.isDynamicMode()&&(e.scrollToIndexTimeoutId=setTimeout(function(){e.scrollToIndexTimeoutId=null;var T=e.measureElementCache.has(e.options.getItemKey(l));if(T){var O=e.getOffsetForIndex(l,p),P=O[0];Ve(P,e.scrollOffset)||e.scrollToIndex(l,{align:p,behavior:r})}else e.scrollToIndex(l,{align:p,behavior:r})}))},this.scrollBy=function(l,t){var n=t===void 0?{}:t,i=n.behavior;e.cancelScrollToIndex(),i==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.scrollOffset+l,{adjustments:void 0,behavior:i})},this.getTotalSize=function(){var l;return(((l=e.getMeasurements()[e.options.count-1])==null?void 0:l.end)||e.options.paddingStart)-e.options.scrollMargin+e.options.paddingEnd},this._scrollToOffset=function(l,t){var n=t.adjustments,i=t.behavior;e.options.scrollToFn(l,{behavior:i,adjustments:n},e)},this.measure=function(){e.itemSizeCache=new Map,e.notify(!1)},this.setOptions(s),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(function(l){e.itemSizeCache.set(l.key,l.size)}),this.maybeNotify()},de=function(s,e,l,t){for(;s<=e;){var n=(s+e)/2|0,i=l(n);if(i<t)s=n+1;else if(i>t)e=n-1;else return n}return s>0?s-1:0};function Le(o){for(var s=o.measurements,e=o.outerSize,l=o.scrollOffset,t=s.length-1,n=function(c){return s[c].start},i=de(0,t,n,l),a=i;a<t&&s[a].end<l+e;)a++;return{startIndex:i,endIndex:a}}/**
 * vue-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ue(o){var s=new Ke(W(o)),e=me(s),l=s._didMount();return N(function(){return W(o).getScrollElement()},function(t){t&&s._willUpdate()},{immediate:!0}),N(function(){return W(o)},function(t){s.setOptions(Q({},t,{onChange:function(i,a){ae(e),t.onChange==null||t.onChange(i,a)}})),s._willUpdate(),ae(e)},{immediate:!0}),be(l),e}function qe(o){return Ue(y(function(){return Q({observeElementRect:ke,observeElementOffset:je,scrollToFn:_e},W(o))}))}var He={};function We(o,s){return o===s}var Je=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Je||{}),Ze=(o=>(o[o.Single=0]="Single",o[o.Multi=1]="Multi",o))(Ze||{}),Ye=(o=>(o[o.Pointer=0]="Pointer",o[o.Focus=1]="Focus",o[o.Other=2]="Other",o))(Ye||{});let ce=Symbol("ComboboxContext");function U(o){let s=ve(ce,null);if(s===null){let e=new Error(`<${o} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,U),e}return s}let fe=Symbol("VirtualContext"),Ge=L({name:"VirtualProvider",setup(o,{slots:s}){let e=U("VirtualProvider"),l=y(()=>{let a=I(e.optionsRef);if(!a)return{start:0,end:0};let r=window.getComputedStyle(a);return{start:parseFloat(r.paddingBlockStart||r.paddingTop),end:parseFloat(r.paddingBlockEnd||r.paddingBottom)}}),t=qe(y(()=>({scrollPaddingStart:l.value.start,scrollPaddingEnd:l.value.end,count:e.virtual.value.options.length,estimateSize(){return 40},getScrollElement(){return I(e.optionsRef)},overscan:12}))),n=y(()=>{var a;return(a=e.virtual.value)==null?void 0:a.options}),i=F(0);return N([n],()=>{i.value+=1}),se(fe,e.virtual.value?t:null),()=>[J("div",{style:{position:"relative",width:"100%",height:`${t.value.getTotalSize()}px`},ref:a=>{if(a){if(typeof process<"u"&&He.JEST_WORKER_ID!==void 0||e.activationTrigger.value===0)return;e.activeOptionIndex.value!==null&&e.virtual.value.options.length>e.activeOptionIndex.value&&t.value.scrollToIndex(e.activeOptionIndex.value)}}},t.value.getVirtualItems().map(a=>Se(s.default({option:e.virtual.value.options[a.index],open:e.comboboxState.value===0})[0],{key:`${i.value}-${a.index}`,"data-index":a.index,"aria-setsize":e.virtual.value.options.length,"aria-posinset":a.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${a.start}px)`,overflowAnchor:"none"}})))]}}),ut=L({name:"Combobox",emits:{"update:modelValue":o=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],nullable:!0,default:null},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1},immediate:{type:[Boolean],default:!1},virtual:{type:Object,default:null}},inheritAttrs:!1,setup(o,{slots:s,attrs:e,emit:l}){let t=F(1),n=F(null),i=F(null),a=F(null),r=F(null),c=F({static:!1,hold:!1}),m=F([]),p=F(null),T=F(2),O=F(!1);function P(v=f=>f){let f=p.value!==null?m.value[p.value]:null,g=v(m.value.slice()),b=g.length>0&&g[0].dataRef.order.value!==null?g.sort((E,B)=>E.dataRef.order.value-B.dataRef.order.value):De(g,E=>I(E.dataRef.domRef)),C=f?b.indexOf(f):null;return C===-1&&(C=null),{options:b,activeOptionIndex:C}}let w=y(()=>o.multiple?1:0),V=y(()=>o.nullable),[x,u]=ye(y(()=>o.modelValue),v=>l("update:modelValue",v),y(()=>o.defaultValue)),h=y(()=>x.value===void 0?K(w.value,{1:[],0:void 0}):x.value),S=null,M=null;function R(v){return K(w.value,{0(){return u==null?void 0:u(v)},1:()=>{let f=k(d.value.value).slice(),g=k(v),b=f.findIndex(C=>d.compare(g,k(C)));return b===-1?f.push(g):f.splice(b,1),u==null?void 0:u(f)}})}let $=y(()=>{});N([$],([v],[f])=>{if(d.virtual.value&&v&&f&&p.value!==null){let g=v.indexOf(f[p.value]);g!==-1?p.value=g:p.value=null}});let d={comboboxState:t,value:h,mode:w,compare(v,f){if(typeof o.by=="string"){let g=o.by;return(v==null?void 0:v[g])===(f==null?void 0:f[g])}return o.by===null?We(v,f):o.by(v,f)},calculateIndex(v){return d.virtual.value?o.by===null?d.virtual.value.options.indexOf(v):d.virtual.value.options.findIndex(f=>d.compare(f,v)):m.value.findIndex(f=>d.compare(f.dataRef.value,v))},defaultValue:y(()=>o.defaultValue),nullable:V,immediate:y(()=>!1),virtual:y(()=>null),inputRef:i,labelRef:n,buttonRef:a,optionsRef:r,disabled:y(()=>o.disabled),options:m,change(v){u(v)},activeOptionIndex:y(()=>{if(O.value&&p.value===null&&(d.virtual.value?d.virtual.value.options.length>0:m.value.length>0)){if(d.virtual.value){let f=d.virtual.value.options.findIndex(g=>{var b;return!((b=d.virtual.value)!=null&&b.disabled(g))});if(f!==-1)return f}let v=m.value.findIndex(f=>!f.dataRef.disabled);if(v!==-1)return v}return p.value}),activationTrigger:T,optionsPropsRef:c,closeCombobox(){O.value=!1,!o.disabled&&t.value!==1&&(t.value=1,p.value=null)},openCombobox(){if(O.value=!0,!o.disabled&&t.value!==0){if(d.value.value){let v=d.calculateIndex(d.value.value);v!==-1&&(p.value=v)}t.value=0}},setActivationTrigger(v){T.value=v},goToOption(v,f,g){O.value=!1,S!==null&&cancelAnimationFrame(S),S=requestAnimationFrame(()=>{if(o.disabled||r.value&&!c.value.static&&t.value===1)return;if(d.virtual.value){p.value=v===z.Specific?f:ie({focus:v},{resolveItems:()=>d.virtual.value.options,resolveActiveIndex:()=>{var E,B;return(B=(E=d.activeOptionIndex.value)!=null?E:d.virtual.value.options.findIndex(te=>{var q;return!((q=d.virtual.value)!=null&&q.disabled(te))}))!=null?B:null},resolveDisabled:E=>d.virtual.value.disabled(E),resolveId(){throw new Error("Function not implemented.")}}),T.value=g??2;return}let b=P();if(b.activeOptionIndex===null){let E=b.options.findIndex(B=>!B.dataRef.disabled);E!==-1&&(b.activeOptionIndex=E)}let C=v===z.Specific?f:ie({focus:v},{resolveItems:()=>b.options,resolveActiveIndex:()=>b.activeOptionIndex,resolveId:E=>E.id,resolveDisabled:E=>E.dataRef.disabled});p.value=C,T.value=g??2,m.value=b.options})},selectOption(v){let f=m.value.find(b=>b.id===v);if(!f)return;let{dataRef:g}=f;R(g.value)},selectActiveOption(){if(d.activeOptionIndex.value!==null){if(d.virtual.value)R(d.virtual.value.options[d.activeOptionIndex.value]);else{let{dataRef:v}=m.value[d.activeOptionIndex.value];R(v.value)}d.goToOption(z.Specific,d.activeOptionIndex.value)}},registerOption(v,f){let g=ge({id:v,dataRef:f});if(d.virtual.value){m.value.push(g);return}M&&cancelAnimationFrame(M);let b=P(C=>(C.push(g),C));p.value===null&&d.isSelected(f.value.value)&&(b.activeOptionIndex=b.options.indexOf(g)),m.value=b.options,p.value=b.activeOptionIndex,T.value=2,b.options.some(C=>!I(C.dataRef.domRef))&&(M=requestAnimationFrame(()=>{let C=P();m.value=C.options,p.value=C.activeOptionIndex}))},unregisterOption(v,f){if(S!==null&&cancelAnimationFrame(S),f&&(O.value=!0),d.virtual.value){m.value=m.value.filter(b=>b.id!==v);return}let g=P(b=>{let C=b.findIndex(E=>E.id===v);return C!==-1&&b.splice(C,1),b});m.value=g.options,p.value=g.activeOptionIndex,T.value=2},isSelected(v){return K(w.value,{0:()=>d.compare(k(d.value.value),k(v)),1:()=>k(d.value.value).some(f=>d.compare(k(f),k(v)))})},isActive(v){return p.value===d.calculateIndex(v)}};Re([i,a,r],()=>d.closeCombobox(),y(()=>t.value===0)),se(ce,d),ze(y(()=>K(t.value,{0:G.Open,1:G.Closed})));let A=y(()=>{var v;return(v=I(i))==null?void 0:v.closest("form")});return le(()=>{N([A],()=>{if(!A.value||o.defaultValue===void 0)return;function v(){d.change(o.defaultValue)}return A.value.addEventListener("reset",v),()=>{var f;(f=A.value)==null||f.removeEventListener("reset",v)}},{immediate:!0})}),()=>{var v,f,g;let{name:b,disabled:C,form:E,...B}=o,te={open:t.value===0,disabled:C,activeIndex:d.activeOptionIndex.value,activeOption:d.activeOptionIndex.value===null?null:d.virtual.value?d.virtual.value.options[(v=d.activeOptionIndex.value)!=null?v:0]:(g=(f=d.options.value[d.activeOptionIndex.value])==null?void 0:f.dataRef.value.value)!=null?g:null,value:h.value};return J(he,[...b!=null&&h.value!=null?Oe({[b]:h.value}).map(([q,pe])=>J(Me,Ie({features:Pe.Hidden,key:q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:E,name:q,value:pe}))):[],H({theirProps:{...e,...oe(B,["by","defaultValue","immediate","modelValue","multiple","nullable","onUpdate:modelValue","virtual"])},ourProps:{},slot:te,slots:s,attrs:e,name:"Combobox"})])}}}),st=L({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-combobox-button-${ee()}`}},setup(o,{attrs:s,slots:e,expose:l}){let t=U("ComboboxButton");l({el:t.buttonRef,$el:t.buttonRef});function n(r){t.disabled.value||(t.comboboxState.value===0?t.closeCombobox():(r.preventDefault(),t.openCombobox()),j(()=>{var c;return(c=I(t.inputRef))==null?void 0:c.focus({preventScroll:!0})}))}function i(r){switch(r.key){case D.ArrowDown:r.preventDefault(),r.stopPropagation(),t.comboboxState.value===1&&t.openCombobox(),j(()=>{var c;return(c=t.inputRef.value)==null?void 0:c.focus({preventScroll:!0})});return;case D.ArrowUp:r.preventDefault(),r.stopPropagation(),t.comboboxState.value===1&&(t.openCombobox(),j(()=>{t.value.value||t.goToOption(z.Last)})),j(()=>{var c;return(c=t.inputRef.value)==null?void 0:c.focus({preventScroll:!0})});return;case D.Escape:if(t.comboboxState.value!==0)return;r.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&r.stopPropagation(),t.closeCombobox(),j(()=>{var c;return(c=t.inputRef.value)==null?void 0:c.focus({preventScroll:!0})});return}}let a=Ee(y(()=>({as:o.as,type:s.type})),t.buttonRef);return()=>{var r,c;let m={open:t.comboboxState.value===0,disabled:t.disabled.value,value:t.value.value},{id:p,...T}=o,O={ref:t.buttonRef,id:p,type:a.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(r=I(t.optionsRef))==null?void 0:r.id,"aria-expanded":t.comboboxState.value===0,"aria-labelledby":t.labelRef.value?[(c=I(t.labelRef))==null?void 0:c.id,p].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:i,onClick:n};return H({ourProps:O,theirProps:T,slot:m,attrs:s,slots:e,name:"ComboboxButton"})}}}),vt=L({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:()=>`headlessui-combobox-input-${ee()}`}},emits:{change:o=>!0},setup(o,{emit:s,attrs:e,slots:l,expose:t}){let n=U("ComboboxInput"),i=y(()=>Fe(I(n.inputRef))),a={value:!1};t({el:n.inputRef,$el:n.inputRef});function r(){n.change(null);let u=I(n.optionsRef);u&&(u.scrollTop=0),n.goToOption(z.Nothing)}let c=y(()=>{var u;let h=n.value.value;return I(n.inputRef)?typeof o.displayValue<"u"&&h!==void 0?(u=o.displayValue(h))!=null?u:"":typeof h=="string"?h:"":""});le(()=>{N([c,n.comboboxState,i],([u,h],[S,M])=>{if(a.value)return;let R=I(n.inputRef);R&&((M===0&&h===1||u!==S)&&(R.value=u),requestAnimationFrame(()=>{var $;if(a.value||!R||(($=i.value)==null?void 0:$.activeElement)!==R)return;let{selectionStart:d,selectionEnd:A}=R;Math.abs((A??0)-(d??0))===0&&d===0&&R.setSelectionRange(R.value.length,R.value.length)}))},{immediate:!0}),N([n.comboboxState],([u],[h])=>{if(u===0&&h===1){if(a.value)return;let S=I(n.inputRef);if(!S)return;let M=S.value,{selectionStart:R,selectionEnd:$,selectionDirection:d}=S;S.value="",S.value=M,d!==null?S.setSelectionRange(R,$,d):S.setSelectionRange(R,$)}})});let m=F(!1);function p(){m.value=!0}function T(){re().nextFrame(()=>{m.value=!1})}function O(u){switch(a.value=!0,u.key){case D.Enter:if(a.value=!1,n.comboboxState.value!==0||m.value)return;if(u.preventDefault(),u.stopPropagation(),n.activeOptionIndex.value===null){n.closeCombobox();return}n.selectActiveOption(),n.mode.value===0&&n.closeCombobox();break;case D.ArrowDown:return a.value=!1,u.preventDefault(),u.stopPropagation(),K(n.comboboxState.value,{0:()=>n.goToOption(z.Next),1:()=>n.openCombobox()});case D.ArrowUp:return a.value=!1,u.preventDefault(),u.stopPropagation(),K(n.comboboxState.value,{0:()=>n.goToOption(z.Previous),1:()=>{n.openCombobox(),j(()=>{n.value.value||n.goToOption(z.Last)})}});case D.Home:if(u.shiftKey)break;return a.value=!1,u.preventDefault(),u.stopPropagation(),n.goToOption(z.First);case D.PageUp:return a.value=!1,u.preventDefault(),u.stopPropagation(),n.goToOption(z.First);case D.End:if(u.shiftKey)break;return a.value=!1,u.preventDefault(),u.stopPropagation(),n.goToOption(z.Last);case D.PageDown:return a.value=!1,u.preventDefault(),u.stopPropagation(),n.goToOption(z.Last);case D.Escape:if(a.value=!1,n.comboboxState.value!==0)return;u.preventDefault(),n.optionsRef.value&&!n.optionsPropsRef.value.static&&u.stopPropagation(),n.nullable.value&&n.mode.value===0&&n.value.value===null&&r(),n.closeCombobox();break;case D.Tab:if(a.value=!1,n.comboboxState.value!==0)return;n.mode.value===0&&n.activationTrigger.value!==1&&n.selectActiveOption(),n.closeCombobox();break}}function P(u){s("change",u),n.nullable.value&&n.mode.value===0&&u.target.value===""&&r(),n.openCombobox()}function w(u){var h,S,M;let R=(h=u.relatedTarget)!=null?h:ue.find($=>$!==u.currentTarget);if(a.value=!1,!((S=I(n.optionsRef))!=null&&S.contains(R))&&!((M=I(n.buttonRef))!=null&&M.contains(R))&&n.comboboxState.value===0)return u.preventDefault(),n.mode.value===0&&(n.nullable.value&&n.value.value===null?r():n.activationTrigger.value!==1&&n.selectActiveOption()),n.closeCombobox()}function V(u){var h,S,M;let R=(h=u.relatedTarget)!=null?h:ue.find($=>$!==u.currentTarget);(S=I(n.buttonRef))!=null&&S.contains(R)||(M=I(n.optionsRef))!=null&&M.contains(R)||n.disabled.value||n.immediate.value&&n.comboboxState.value!==0&&(n.openCombobox(),re().nextFrame(()=>{n.setActivationTrigger(1)}))}let x=y(()=>{var u,h,S,M;return(M=(S=(h=o.defaultValue)!=null?h:n.defaultValue.value!==void 0?(u=o.displayValue)==null?void 0:u.call(o,n.defaultValue.value):null)!=null?S:n.defaultValue.value)!=null?M:""});return()=>{var u,h,S,M,R,$,d;let A={open:n.comboboxState.value===0},{id:v,displayValue:f,onChange:g,...b}=o,C={"aria-controls":(u=n.optionsRef.value)==null?void 0:u.id,"aria-expanded":n.comboboxState.value===0,"aria-activedescendant":n.activeOptionIndex.value===null?void 0:n.virtual.value?(h=n.options.value.find(E=>!n.virtual.value.disabled(E.dataRef.value)&&n.compare(E.dataRef.value,n.virtual.value.options[n.activeOptionIndex.value])))==null?void 0:h.id:(S=n.options.value[n.activeOptionIndex.value])==null?void 0:S.id,"aria-labelledby":($=(M=I(n.labelRef))==null?void 0:M.id)!=null?$:(R=I(n.buttonRef))==null?void 0:R.id,"aria-autocomplete":"list",id:v,onCompositionstart:p,onCompositionend:T,onKeydown:O,onInput:P,onFocus:V,onBlur:w,role:"combobox",type:(d=e.type)!=null?d:"text",tabIndex:0,ref:n.inputRef,defaultValue:x.value,disabled:n.disabled.value===!0?!0:void 0};return H({ourProps:C,theirProps:b,slot:A,attrs:e,slots:l,features:Y.RenderStrategy|Y.Static,name:"ComboboxInput"})}}}),dt=L({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(o,{attrs:s,slots:e,expose:l}){let t=U("ComboboxOptions"),n=`headlessui-combobox-options-${ee()}`;l({el:t.optionsRef,$el:t.optionsRef}),Z(()=>{t.optionsPropsRef.value.static=o.static}),Z(()=>{t.optionsPropsRef.value.hold=o.hold});let i=$e(),a=y(()=>i!==null?(i.value&G.Open)===G.Open:t.comboboxState.value===0);return Te({container:y(()=>I(t.optionsRef)),enabled:y(()=>t.comboboxState.value===0),accept(r){return r.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}}),()=>{var r,c,m;let p={open:t.comboboxState.value===0},T={"aria-labelledby":(m=(r=I(t.labelRef))==null?void 0:r.id)!=null?m:(c=I(t.buttonRef))==null?void 0:c.id,id:n,ref:t.optionsRef,role:"listbox","aria-multiselectable":t.mode.value===1?!0:void 0},O=oe(o,["hold"]);return H({ourProps:T,theirProps:O,slot:p,attrs:s,slots:t.virtual.value&&t.comboboxState.value===0?{...e,default:()=>[J(Ge,{},e.default)]}:e,features:Y.RenderStrategy|Y.Static,visible:a.value,name:"ComboboxOptions"})}}}),ct=L({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},order:{type:[Number],default:null}},setup(o,{slots:s,attrs:e,expose:l}){let t=U("ComboboxOption"),n=`headlessui-combobox-option-${ee()}`,i=F(null);l({el:i,$el:i});let a=y(()=>{var x;return t.virtual.value?t.activeOptionIndex.value===t.calculateIndex(o.value):t.activeOptionIndex.value===null?!1:((x=t.options.value[t.activeOptionIndex.value])==null?void 0:x.id)===n}),r=y(()=>t.isSelected(o.value)),c=ve(fe,null),m=y(()=>({disabled:o.disabled,value:o.value,domRef:i,order:y(()=>o.order)}));le(()=>t.registerOption(n,m)),xe(()=>t.unregisterOption(n,a.value)),Z(()=>{let x=I(i);x&&(c==null||c.value.measureElement(x))}),Z(()=>{t.comboboxState.value===0&&a.value&&(t.virtual.value||t.activationTrigger.value!==0&&j(()=>{var x,u;return(u=(x=I(i))==null?void 0:x.scrollIntoView)==null?void 0:u.call(x,{block:"nearest"})}))});function p(x){var u;if(o.disabled||(u=t.virtual.value)!=null&&u.disabled(o.value))return x.preventDefault();t.selectOption(n),Ce()||requestAnimationFrame(()=>{var h;return(h=I(t.inputRef))==null?void 0:h.focus({preventScroll:!0})}),t.mode.value===0&&requestAnimationFrame(()=>t.closeCombobox())}function T(){var x;if(o.disabled||(x=t.virtual.value)!=null&&x.disabled(o.value))return t.goToOption(z.Nothing);let u=t.calculateIndex(o.value);t.goToOption(z.Specific,u)}let O=we();function P(x){O.update(x)}function w(x){var u;if(!O.wasMoved(x)||o.disabled||(u=t.virtual.value)!=null&&u.disabled(o.value)||a.value)return;let h=t.calculateIndex(o.value);t.goToOption(z.Specific,h,0)}function V(x){var u;O.wasMoved(x)&&(o.disabled||(u=t.virtual.value)!=null&&u.disabled(o.value)||a.value&&(t.optionsPropsRef.value.hold||t.goToOption(z.Nothing)))}return()=>{let{disabled:x}=o,u={active:a.value,selected:r.value,disabled:x},h={id:n,ref:i,role:"option",tabIndex:x===!0?void 0:-1,"aria-disabled":x===!0?!0:void 0,"aria-selected":r.value,disabled:void 0,onClick:p,onFocus:T,onPointerenter:P,onMouseenter:P,onPointermove:w,onMousemove:w,onPointerleave:V,onMouseleave:V},S=oe(o,["order","value"]);return H({ourProps:h,theirProps:S,slot:u,attrs:e,slots:s,name:"ComboboxOption"})}}});export{ut as Z,ct as a,dt as l,vt as o,st as t};