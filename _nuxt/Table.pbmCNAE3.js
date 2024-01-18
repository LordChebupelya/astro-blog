import E from"./Checkbox.AkGQrnzn.js";import{_ as x,G as _,H as O,s as ee,z as P,J as q,K as te,L as R,r as m,aw as ae,k as N,ai as A,o,c as i,a as d,O as n,b as F,a0 as k,F as $,N as I,T as v,P as j,t as w,V as M,am as L,a1 as oe,d as ne}from"./entry.LFM_JvCg.js";import"./useFormGroup.7Pt6L2QS.js";import"./uid.KLLbMoZc.js";const le={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"",tbody:"divide-y divide-gray-200 dark:divide-gray-800",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-3 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-3 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function se(e){return e?e[0].toUpperCase()+e.slice(1):""}const f=_(O.ui.strategy,O.ui.table,le);function re(e,s){return e===s}function T(e,s,g){return e===s?0:g==="asc"?e<s?-1:1:e>s?-1:1}const ie=ee({components:{UButton:P,UIcon:q,UCheckbox:E},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>re},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>f.default.sortButton},sortAscIcon:{type:String,default:()=>f.default.sortAscIcon},sortDescIcon:{type:String,default:()=>f.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>f.default.loadingState},emptyState:{type:Object,default:()=>f.default.emptyState},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:s,attrs:g}){const{ui:p,attrs:D}=te("table",R(e,"ui"),f,R(e,"class")),V=m(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:se(t),sortable:!1,class:void 0,sort:T}))),l=ae(e,"sort",s,{passive:!0,defaultValue:N({},e.sort,{column:null,direction:"asc"})}),C={column:l.value.column,direction:null},b=m(()=>{var c;if(!((c=l.value)!=null&&c.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:r}=l.value;return e.rows.slice().sort((Q,W)=>{var U;const X=A(Q,t),Y=A(W,t);return(((U=V.value.find(Z=>Z.key===t))==null?void 0:U.sort)??T)(X,Y,r)})}),a=m({get(){return e.modelValue},set(t){s("update:modelValue",t)}}),y=m(()=>a.value&&a.value.length>0&&a.value.length<e.rows.length),u=m(()=>e.emptyState===null?null:{...p.value.default.emptyState,...e.emptyState}),B=m(()=>e.loadingState===null?null:{...p.value.default.loadingState,...e.loadingState});function h(t,r){if(typeof e.by=="string"){const c=e.by;return(t==null?void 0:t[c])===(r==null?void 0:r[c])}return e.by(t,r)}function S(t){return e.modelValue?a.value.some(r=>h(L(r),L(t))):!1}function z(t){if(l.value.column===t.key){const r=!t.direction||t.direction==="asc"?"desc":"asc";l.value.direction===r?l.value=N({},C,{column:null,direction:"asc"}):l.value={column:l.value.column,direction:l.value.direction==="asc"?"desc":"asc"}}else l.value={column:t.key,direction:t.direction||"asc"}}function G(t){g.onSelect&&g.onSelect(t)}function H(){e.rows.forEach(t=>{S(t)||a.value.push(t)})}function J(t){t.target.checked?H():a.value=[]}function K(t,r,c=""){return A(t,r,c)}return{ui:p,attrs:D,sort:l,columns:V,rows:b,selected:a,indeterminate:y,emptyState:u,loadingState:B,isSelected:S,onSort:z,onSelect:G,onChange:J,getRowData:K}}}),ue={key:1},de={key:0},ce=["colspan"],ye={key:1},me=["colspan"],fe=["onClick"];function ge(e,s,g,p,D,V){const l=E,C=P,b=q;return o(),i("div",M({class:e.ui.wrapper},e.attrs),[d("table",{class:n([e.ui.base,e.ui.divide])},[d("thead",{class:n(e.ui.thead)},[d("tr",{class:n(e.ui.tr.base)},[e.modelValue?(o(),i("th",{key:0,scope:"col",class:n(e.ui.checkbox.padding)},[F(l,{checked:e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate,"aria-label":"Select all",onChange:e.onChange},null,8,["checked","indeterminate","onChange"])],2)):k("",!0),(o(!0),i($,null,I(e.columns,(a,y)=>(o(),i("th",{key:y,scope:"col",class:n([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class])},[v(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(o(),j(C,M({key:0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:u=>e.onSort(a)}),null,16,["icon","label","onClick"])):(o(),i("span",ue,w(a[e.columnAttribute]),1))])],2))),128))],2)],2),d("tbody",{class:n(e.ui.tbody)},[e.loadingState&&e.loading?(o(),i("tr",de,[d("td",{colspan:e.columns.length+(e.modelValue?1:0)},[v(e.$slots,"loading-state",{},()=>[d("div",{class:n(e.ui.loadingState.wrapper)},[e.loadingState.icon?(o(),j(b,{key:0,name:e.loadingState.icon,class:n(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):k("",!0),d("p",{class:n(e.ui.loadingState.label)},w(e.loadingState.label),3)],2)])],8,ce)])):e.emptyState&&!e.rows.length?(o(),i("tr",ye,[d("td",{colspan:e.columns.length+(e.modelValue?1:0)},[v(e.$slots,"empty-state",{},()=>[d("div",{class:n(e.ui.emptyState.wrapper)},[e.emptyState.icon?(o(),j(b,{key:0,name:e.emptyState.icon,class:n(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):k("",!0),d("p",{class:n(e.ui.emptyState.label)},w(e.emptyState.label),3)],2)])],8,me)])):(o(!0),i($,{key:2},I(e.rows,(a,y)=>(o(),i("tr",{key:y,class:n([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(o(),i("td",{key:0,class:n(e.ui.checkbox.padding)},[F(l,{modelValue:e.selected,"onUpdate:modelValue":s[0]||(s[0]=u=>e.selected=u),value:a,"aria-label":"Select row",onClick:s[1]||(s[1]=oe(()=>{},["stop"]))},null,8,["modelValue","value"])],2)):k("",!0),(o(!0),i($,null,I(e.columns,(u,B)=>{var h;return o(),i("td",{key:B,class:n([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,(h=a[u.key])==null?void 0:h.class])},[v(e.$slots,`${u.key}-data`,{column:u,row:a,index:y,getRowData:S=>e.getRowData(a,u.key,S)},()=>[ne(w(e.getRowData(a,u.key)),1)])],2)}),128))],10,fe))),128))],2)],2)],16)}const ve=x(ie,[["render",ge]]);export{ve as default};