import{s as Z,v as V,r as s,B as we,x as ue,a9 as re,y as pe,F as fe,C as Le,D as Ae,a7 as U,E as Re,am as B,_ as Ve,G as ge,al as Be,H as W,an as Te,J as me,Y as ye,K as ve,L as oe,k as Pe,a5 as De,Z as He,$,ag as je,ah as ze,A as Ne,o as f,P as j,w as G,O as p,c as R,a0 as H,ab as Q,V as ie,b as X,T as z,t as K,a as N,U as qe,aa as Ee,N as Fe,d as ce,ai as Ue}from"./entry.LFM_JvCg.js";import{u as We}from"./usePopper.jlYbm5qE.js";import{u as Ge}from"./useFormGroup.7Pt6L2QS.js";import{d as Ke,e as $e}from"./form.B8z1LJL_.js";import{u as q,o as L,E as Qe,A as ee,T as Ze,t as se,N as be,a as M}from"./keyboard.IE1kcyyG.js";import{w as Je}from"./use-outside-click.V7AUcKez.js";import{s as Ye}from"./use-resolve-button-type.8VLVHwJT.js";import{p as Xe}from"./use-text-value._Qxvx0jn.js";import{f as xe,c as A,u as _e}from"./calculate-active-index.mkObhLki.js";import{f as ea,s as aa}from"./hidden.2aPAslxq.js";import{t as la,i as _,l as ta}from"./open-closed.-z27p9Q9.js";import{w as na,h as oa,O as ia}from"./focus-management.QsA4ecDa.js";import{Z as ua,t as ra,l as sa,a as da,o as pa}from"./combobox.-0aFsCUl.js";import"./uid.KLLbMoZc.js";import"./disposables.HMegUYH-.js";import"./micro-task.ZxAilEVg.js";function va(e,v){return e===v}var ca=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ca||{}),ba=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ba||{}),fa=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(fa||{});function ga(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let he=Symbol("ListboxContext");function ae(e){let v=Re(he,null);if(v===null){let w=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(w,ae),w}return v}let ma=Z({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>va},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:v,attrs:w,emit:u}){let a=V(1),m=V(null),c=V(null),h=V(null),b=V([]),t=V(""),l=V(null),I=V(1);function C(n=i=>i){let i=l.value!==null?b.value[l.value]:null,r=ia(n(b.value.slice()),k=>L(k.dataRef.domRef)),d=i?r.indexOf(i):null;return d===-1&&(d=null),{options:r,activeOptionIndex:d}}let O=s(()=>e.multiple?1:0),[g,E]=Ke(s(()=>e.modelValue),n=>u("update:modelValue",n),s(()=>e.defaultValue)),P=s(()=>g.value===void 0?q(O.value,{1:[],0:void 0}):g.value),o={listboxState:a,value:P,mode:O,compare(n,i){if(typeof e.by=="string"){let r=e.by;return(n==null?void 0:n[r])===(i==null?void 0:i[r])}return e.by(n,i)},orientation:s(()=>e.horizontal?"horizontal":"vertical"),labelRef:m,buttonRef:c,optionsRef:h,disabled:s(()=>e.disabled),options:b,searchQuery:t,activeOptionIndex:l,activationTrigger:I,closeListbox(){e.disabled||a.value!==1&&(a.value=1,l.value=null)},openListbox(){e.disabled||a.value!==0&&(a.value=0)},goToOption(n,i,r){if(e.disabled||a.value===1)return;let d=C(),k=xe(n===A.Specific?{focus:A.Specific,id:i}:{focus:n},{resolveItems:()=>d.options,resolveActiveIndex:()=>d.activeOptionIndex,resolveId:F=>F.id,resolveDisabled:F=>F.dataRef.disabled});t.value="",l.value=k,I.value=r??1,b.value=d.options},search(n){if(e.disabled||a.value===1)return;let i=t.value!==""?0:1;t.value+=n.toLowerCase();let r=(l.value!==null?b.value.slice(l.value+i).concat(b.value.slice(0,l.value+i)):b.value).find(k=>k.dataRef.textValue.startsWith(t.value)&&!k.dataRef.disabled),d=r?b.value.indexOf(r):-1;d===-1||d===l.value||(l.value=d,I.value=1)},clearSearch(){e.disabled||a.value!==1&&t.value!==""&&(t.value="")},registerOption(n,i){let r=C(d=>[...d,{id:n,dataRef:i}]);b.value=r.options,l.value=r.activeOptionIndex},unregisterOption(n){let i=C(r=>{let d=r.findIndex(k=>k.id===n);return d!==-1&&r.splice(d,1),r});b.value=i.options,l.value=i.activeOptionIndex,I.value=1},theirOnChange(n){e.disabled||E(n)},select(n){e.disabled||E(q(O.value,{0:()=>n,1:()=>{let i=B(o.value.value).slice(),r=B(n),d=i.findIndex(k=>o.compare(r,B(k)));return d===-1?i.push(r):i.splice(d,1),i}}))}};Je([c,h],(n,i)=>{var r;o.closeListbox(),na(i,oa.Loose)||(n.preventDefault(),(r=L(c))==null||r.focus())},s(()=>a.value===0)),we(he,o),la(s(()=>q(a.value,{0:_.Open,1:_.Closed})));let S=s(()=>{var n;return(n=L(c))==null?void 0:n.closest("form")});return ue(()=>{re([S],()=>{if(!S.value||e.defaultValue===void 0)return;function n(){o.theirOnChange(e.defaultValue)}return S.value.addEventListener("reset",n),()=>{var i;(i=S.value)==null||i.removeEventListener("reset",n)}},{immediate:!0})}),()=>{let{name:n,modelValue:i,disabled:r,form:d,...k}=e,F={open:a.value===0,disabled:r,value:P.value};return pe(fe,[...n!=null&&P.value!=null?$e({[n]:P.value}).map(([J,le])=>pe(ea,Qe({features:aa.Hidden,key:J,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:d,name:J,value:le}))):[],ee({ourProps:{},theirProps:{...w,...Ze(k,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:F,slots:v,attrs:w,name:"Listbox"})])}}}),ya=Z({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${se()}`}},setup(e,{attrs:v,slots:w,expose:u}){let a=ae("ListboxButton");u({el:a.buttonRef,$el:a.buttonRef});function m(t){switch(t.key){case M.Space:case M.Enter:case M.ArrowDown:t.preventDefault(),a.openListbox(),U(()=>{var l;(l=L(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(A.First)});break;case M.ArrowUp:t.preventDefault(),a.openListbox(),U(()=>{var l;(l=L(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(A.Last)});break}}function c(t){switch(t.key){case M.Space:t.preventDefault();break}}function h(t){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),U(()=>{var l;return(l=L(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(t.preventDefault(),a.openListbox(),ga(()=>{var l;return(l=L(a.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let b=Ye(s(()=>({as:e.as,type:v.type})),a.buttonRef);return()=>{var t,l;let I={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{id:C,...O}=e,g={ref:a.buttonRef,id:C,type:b.value,"aria-haspopup":"listbox","aria-controls":(t=L(a.optionsRef))==null?void 0:t.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(l=L(a.labelRef))==null?void 0:l.id,C].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:m,onKeyup:c,onClick:h};return ee({ourProps:g,theirProps:O,slot:I,attrs:v,slots:w,name:"ListboxButton"})}}}),ha=Z({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${se()}`}},setup(e,{attrs:v,slots:w,expose:u}){let a=ae("ListboxOptions"),m=V(null);u({el:a.optionsRef,$el:a.optionsRef});function c(t){switch(m.value&&clearTimeout(m.value),t.key){case M.Space:if(a.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),a.search(t.key);case M.Enter:if(t.preventDefault(),t.stopPropagation(),a.activeOptionIndex.value!==null){let l=a.options.value[a.activeOptionIndex.value];a.select(l.dataRef.value)}a.mode.value===0&&(a.closeListbox(),U(()=>{var l;return(l=L(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case q(a.orientation.value,{vertical:M.ArrowDown,horizontal:M.ArrowRight}):return t.preventDefault(),t.stopPropagation(),a.goToOption(A.Next);case q(a.orientation.value,{vertical:M.ArrowUp,horizontal:M.ArrowLeft}):return t.preventDefault(),t.stopPropagation(),a.goToOption(A.Previous);case M.Home:case M.PageUp:return t.preventDefault(),t.stopPropagation(),a.goToOption(A.First);case M.End:case M.PageDown:return t.preventDefault(),t.stopPropagation(),a.goToOption(A.Last);case M.Escape:t.preventDefault(),t.stopPropagation(),a.closeListbox(),U(()=>{var l;return(l=L(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case M.Tab:t.preventDefault(),t.stopPropagation();break;default:t.key.length===1&&(a.search(t.key),m.value=setTimeout(()=>a.clearSearch(),350));break}}let h=ta(),b=s(()=>h!==null?(h.value&_.Open)===_.Open:a.listboxState.value===0);return()=>{var t,l;let I={open:a.listboxState.value===0},{id:C,...O}=e,g={"aria-activedescendant":a.activeOptionIndex.value===null||(t=a.options.value[a.activeOptionIndex.value])==null?void 0:t.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(l=L(a.buttonRef))==null?void 0:l.id,"aria-orientation":a.orientation.value,id:C,onKeydown:c,role:"listbox",tabIndex:0,ref:a.optionsRef};return ee({ourProps:g,theirProps:O,slot:I,attrs:v,slots:w,features:be.RenderStrategy|be.Static,visible:b.value,name:"ListboxOptions"})}}}),Oa=Z({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${se()}`}},setup(e,{slots:v,attrs:w,expose:u}){let a=ae("ListboxOption"),m=V(null);u({el:m,$el:m});let c=s(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===e.id:!1),h=s(()=>q(a.mode.value,{0:()=>a.compare(B(a.value.value),B(e.value)),1:()=>B(a.value.value).some(o=>a.compare(B(o),B(e.value)))})),b=s(()=>q(a.mode.value,{1:()=>{var o;let S=B(a.value.value);return((o=a.options.value.find(n=>S.some(i=>a.compare(B(i),B(n.dataRef.value)))))==null?void 0:o.id)===e.id},0:()=>h.value})),t=Xe(m),l=s(()=>({disabled:e.disabled,value:e.value,get textValue(){return t()},domRef:m}));ue(()=>a.registerOption(e.id,l)),Le(()=>a.unregisterOption(e.id)),ue(()=>{re([a.listboxState,h],()=>{a.listboxState.value===0&&h.value&&q(a.mode.value,{1:()=>{b.value&&a.goToOption(A.Specific,e.id)},0:()=>{a.goToOption(A.Specific,e.id)}})},{immediate:!0})}),Ae(()=>{a.listboxState.value===0&&c.value&&a.activationTrigger.value!==0&&U(()=>{var o,S;return(S=(o=L(m))==null?void 0:o.scrollIntoView)==null?void 0:S.call(o,{block:"nearest"})})});function I(o){if(e.disabled)return o.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),U(()=>{var S;return(S=L(a.buttonRef))==null?void 0:S.focus({preventScroll:!0})}))}function C(){if(e.disabled)return a.goToOption(A.Nothing);a.goToOption(A.Specific,e.id)}let O=_e();function g(o){O.update(o)}function E(o){O.wasMoved(o)&&(e.disabled||c.value||a.goToOption(A.Specific,e.id,0))}function P(o){O.wasMoved(o)&&(e.disabled||c.value&&a.goToOption(A.Nothing))}return()=>{let{disabled:o}=e,S={active:c.value,selected:h.value,disabled:o},{id:n,value:i,disabled:r,...d}=e,k={id:n,ref:m,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":h.value,disabled:void 0,onClick:I,onFocus:C,onPointerenter:g,onMouseenter:g,onPointermove:E,onMousemove:E,onPointerleave:P,onMouseleave:P};return ee({ourProps:k,theirProps:d,slot:S,attrs:w,slots:v,name:"ListboxOption"})}}});const T=ge(W.ui.strategy,W.ui.select,Be),x=ge(W.ui.strategy,W.ui.selectMenu,Te),Sa=Z({components:{HCombobox:ua,HComboboxButton:ra,HComboboxOptions:sa,HComboboxOption:da,HComboboxInput:pa,HListbox:ma,HListboxButton:ya,HListboxOptions:ha,HListboxOption:Oa,UIcon:me,UAvatar:ye},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>T.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>T.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>x.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},clearSearchOnClose:{type:Boolean,default:()=>x.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:String,default:()=>x.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(T.size).includes(e)}},color:{type:String,default:()=>T.default.color,validator(e){return[...W.ui.colors,...Object.keys(T.color)].includes(e)}},variant:{type:String,default:()=>T.default.variant,validator(e){return[...Object.keys(T.variant),...Object.values(T.color).flatMap(v=>Object.keys(v))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:v,slots:w}){const{ui:u,attrs:a}=ve("select",oe(e,"ui"),T,oe(e,"class")),{ui:m}=ve("selectMenu",oe(e,"uiMenu"),x),c=s(()=>Pe({},e.popper,m.value.popper)),[h,b]=We(c.value),{size:t,rounded:l}=De({ui:u,props:e}),{emitFormBlur:I,emitFormChange:C,inputId:O,color:g,size:E,name:P}=Ge(e,T),o=s(()=>t.value||E.value),S=V(""),n=s({get(){return e.query??S.value},set(y){S.value=y,v("update:query",y)}}),i=s(()=>{var D,Y;const y=((Y=(D=u.value.color)==null?void 0:D[g.value])==null?void 0:Y[e.variant])||u.value.variant[e.variant];return He($(u.value.base,m.value.select,l.value,u.value.size[o.value],u.value.gap[o.value],e.padded?u.value.padding[o.value]:"p-0",y==null?void 0:y.replaceAll("{color}",g.value),(r.value||w.leading)&&u.value.leading.padding[o.value],(d.value||w.trailing)&&u.value.trailing.padding[o.value]),e.selectClass)}),r=s(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),d=s(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),k=s(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),F=s(()=>e.loading&&!r.value?e.loadingIcon:e.trailingIcon||e.icon),J=s(()=>$(u.value.icon.leading.wrapper,u.value.icon.leading.pointer,u.value.icon.leading.padding[o.value])),le=s(()=>$(u.value.icon.base,g.value&&W.ui.colors.includes(g.value)&&u.value.icon.color.replaceAll("{color}",g.value),u.value.icon.size[o.value],e.loading&&u.value.icon.loading)),Oe=s(()=>$(u.value.icon.trailing.wrapper,u.value.icon.trailing.pointer,u.value.icon.trailing.padding[o.value])),Se=s(()=>$(u.value.icon.base,g.value&&W.ui.colors.includes(g.value)&&u.value.icon.color.replaceAll("{color}",g.value),u.value.icon.size[o.value],e.loading&&!r.value&&u.value.icon.loading)),de=typeof e.searchable=="function"?je(e.searchable,e.debounce):void 0,te=ze(async()=>e.searchable&&de?await de(n.value):n.value===""?e.options:e.options.filter(y=>{var D;return((D=e.searchAttributes)!=null&&D.length?e.searchAttributes:[e.optionAttribute]).some(Y=>{if(["string","number"].includes(typeof y))return String(y).search(new RegExp(n.value,"i"))!==-1;const ne=Ue(y,Y);return ne!=null&&String(ne).search(new RegExp(n.value,"i"))!==-1})})),Me=s(()=>n.value===""||e.showCreateOptionWhen==="empty"&&te.value.length||e.showCreateOptionWhen==="always"&&te.value.find(D=>["string","number"].includes(typeof D)?D===n.value:D[e.optionAttribute]===n.value)?null:["string","number"].includes(typeof e.modelValue)?n.value:{[e.optionAttribute]:n.value});function Ie(){e.clearSearchOnClose&&(n.value="")}re(b,y=>{y?v("open"):(Ie(),v("close"),I())});function Ce(y){v("update:modelValue",y),v("change",y),C()}function ke(y){n.value=y.target.value}return{ui:u,uiMenu:m,attrs:a,name:P,inputId:O,popper:c,trigger:h,container:b,isLeading:r,isTrailing:d,selectClass:i,leadingIconName:k,leadingIconClass:le,leadingWrapperIconClass:J,trailingIconName:F,trailingIconClass:Se,trailingWrapperIconClass:Oe,filteredOptions:te,createOption:Me,query:n,onUpdate:Ce,onChange:ke}}}),Ma=["value","required"],Ia=["id","disabled"],Ca={class:"truncate"};function ka(e,v,w,u,a,m){const c=me,h=Ne("HComboboxInput"),b=ye;return f(),j(Q(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:p(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:G(({open:t})=>[e.required?(f(),R("input",{key:0,value:e.modelValue,required:e.required,class:p(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,Ma)):H("",!0),(f(),j(Q(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:p(e.uiMenu.trigger)},{default:G(()=>[z(e.$slots,"default",{open:t,disabled:e.disabled,loading:e.loading},()=>[N("button",ie({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(f(),R("span",{key:0,class:p(e.leadingWrapperIconClass)},[z(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[X(c,{name:e.leadingIconName,class:p(e.leadingIconClass)},null,8,["name","class"])])],2)):H("",!0),z(e.$slots,"label",{},()=>[e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length?(f(),R("span",{key:0,class:p(e.uiMenu.label)},K(e.modelValue.length)+" selected",3)):!e.multiple&&e.modelValue?(f(),R("span",{key:1,class:p(e.uiMenu.label)},K(["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]),3)):(f(),R("span",{key:2,class:p(e.uiMenu.label)},K(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(f(),R("span",{key:1,class:p(e.trailingWrapperIconClass)},[z(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[X(c,{name:e.trailingIconName,class:p(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):H("",!0)],16,Ia)])]),_:2},1032,["class"])),t?(f(),R("div",{key:1,ref:"container",class:p([e.uiMenu.container,e.uiMenu.width])},[X(qe,ie({appear:""},e.uiMenu.transition),{default:G(()=>[N("div",null,[e.popper.arrow?(f(),R("div",{key:0,"data-popper-arrow":"",class:p(Object.values(e.uiMenu.arrow))},null,2)):H("",!0),(f(),j(Q(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:p([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:G(()=>[e.searchable?(f(),j(h,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:p(e.uiMenu.input),onChange:e.onChange},null,8,["display-value","placeholder","class","onChange"])):H("",!0),(f(!0),R(fe,null,Fe(e.filteredOptions,(l,I)=>(f(),j(Q(e.searchable?"HComboboxOption":"HListboxOption"),{key:I,as:"template",value:e.valueAttribute?l[e.valueAttribute]:l,disabled:l.disabled},{default:G(({active:C,selected:O,disabled:g})=>[N("li",{class:p([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,C?e.uiMenu.option.active:e.uiMenu.option.inactive,O&&e.uiMenu.option.selected,g&&e.uiMenu.option.disabled])},[N("div",{class:p(e.uiMenu.option.container)},[z(e.$slots,"option",{option:l,active:C,selected:O},()=>[l.icon?(f(),j(c,{key:0,name:l.icon,class:p([e.uiMenu.option.icon.base,C?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,l.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):l.avatar?(f(),j(b,ie({key:1},{size:e.uiMenu.option.avatar.size,...l.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):l.chip?(f(),R("span",{key:2,class:p(e.uiMenu.option.chip.base),style:Ee({background:`#${l.chip}`})},null,6)):H("",!0),N("span",Ca,K(["string","number"].includes(typeof l)?l:l[e.optionAttribute]),1)])],2),O?(f(),R("span",{key:0,class:p([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[X(c,{name:e.selectedIcon,class:p(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):H("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(f(),j(Q(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:G(({active:l,selected:I})=>[N("li",{class:p([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,l?e.uiMenu.option.active:e.uiMenu.option.inactive])},[N("div",{class:p(e.uiMenu.option.container)},[z(e.$slots,"option-create",{option:e.createOption,active:l,selected:I},()=>[N("span",{class:p(e.uiMenu.option.create)},'Create "'+K(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!e.filteredOptions.length?(f(),R("p",{key:2,class:p(e.uiMenu.option.empty)},[z(e.$slots,"option-empty",{query:e.query},()=>[ce(' No results for "'+K(e.query)+'". ',1)])],2)):e.filteredOptions.length?H("",!0):(f(),R("p",{key:3,class:p(e.uiMenu.empty)},[z(e.$slots,"empty",{query:e.query},()=>[ce(" No options. ")])],2))]),_:3},8,["class"]))])]),_:3},16)],2)):H("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const Ua=Ve(Sa,[["render",ka]]);export{Ua as default};