import{s as $,G,r as s,v as K,x as L,ad as M,y as C,F as P,_ as R,H as T,I as x,K as A,L as U,M as N,$ as J,a0 as y,B as Q,o as k,Q as W,w as Y,a as q,P as f,c as I,b as S,a1 as z,W as X}from"./entry.qOecQ0k9.js";import{u as Z}from"./id.D2nBIKFp.js";import{d as _,p as ee}from"./form.Be5mLxzt.js";import{I as ae,o as te,E as le,A as ne,T as oe,a as V,l as se}from"./keyboard.DdECLMQg.js";import{s as re}from"./use-resolve-button-type.D80JmMvP.js";import{f as ie,s as ue}from"./hidden.DOYmC_oS.js";import{u as ce}from"./useFormGroup.Bf9ma1EV.js";const de={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500"},default:{onIcon:null,offIcon:null,color:"primary",size:"md"}};let fe=Symbol("GroupContext"),ve=$({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{emit:u,attrs:a,slots:v,expose:m}){var l;let c=(l=e.id)!=null?l:`headlessui-switch-${ae()}`,o=G(fe,null),[n,p]=_(s(()=>e.modelValue),t=>u("update:modelValue",t),s(()=>e.defaultChecked));function g(){p(!n.value)}let b=K(null),r=o===null?b:o.switchRef,w=re(s(()=>({as:e.as,type:a.type})),r);m({el:r,$el:r});function B(t){t.preventDefault(),g()}function E(t){t.key===V.Space?(t.preventDefault(),g()):t.key===V.Enter&&ee(t.currentTarget)}function j(t){t.preventDefault()}let h=s(()=>{var t,i;return(i=(t=te(r))==null?void 0:t.closest)==null?void 0:i.call(t,"form")});return L(()=>{M([h],()=>{if(!h.value||e.defaultChecked===void 0)return;function t(){p(e.defaultChecked)}return h.value.addEventListener("reset",t),()=>{var i;(i=h.value)==null||i.removeEventListener("reset",t)}},{immediate:!0})}),()=>{let{name:t,value:i,form:H,...O}=e,D={checked:n.value},F={id:c,ref:r,role:"switch",type:w.value,tabIndex:0,"aria-checked":n.value,"aria-labelledby":o==null?void 0:o.labelledby.value,"aria-describedby":o==null?void 0:o.describedby.value,onClick:B,onKeyup:E,onKeypress:j};return C(P,[t!=null&&n.value!=null?C(ie,le({features:ue.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:n.value,form:H,name:t,value:i})):null,ne({ourProps:F,theirProps:{...a,...oe(O,["modelValue","defaultChecked"])},slot:D,attrs:a,slots:v,name:"Switch"})])}}});const d=T(x.ui.strategy,x.ui.toggle,de),me=$({components:{HSwitch:ve,UIcon:A},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onIcon:{type:String,default:()=>d.default.onIcon},offIcon:{type:String,default:()=>d.default.offIcon},color:{type:String,default:()=>d.default.color,validator(e){return x.ui.colors.includes(e)}},size:{type:String,default:()=>d.default.size,validator(e){return Object.keys(d.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:u}){const{ui:a,attrs:v}=U("toggle",N(e,"ui"),d),{emitFormChange:m,color:l,inputId:c,name:o}=ce(e),n=s({get(){return e.modelValue},set(w){u("update:modelValue",w),m()}}),p=s(()=>J(y(a.value.base,a.value.size[e.size],a.value.rounded,l.value&&a.value.ring.replaceAll("{color}",l.value),l.value&&(n.value?a.value.active:a.value.inactive).replaceAll("{color}",l.value)),e.class)),g=s(()=>y(a.value.container.base,a.value.container.size[e.size],n.value?a.value.container.active[e.size]:a.value.container.inactive)),b=s(()=>y(a.value.icon.size[e.size],l.value&&a.value.icon.on.replaceAll("{color}",l.value))),r=s(()=>y(a.value.icon.size[e.size],l.value&&a.value.icon.off.replaceAll("{color}",l.value)));return se(()=>Z("$dYnAEgMvRG")),{ui:a,attrs:v,name:o,inputId:c,active:n,switchClass:p,containerClass:g,onIconClass:b,offIconClass:r}}});function pe(e,u,a,v,m,l){const c=A,o=Q("HSwitch");return k(),W(o,X({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":u[0]||(u[0]=n=>e.active=n),name:e.name,disabled:e.disabled,class:e.switchClass},e.attrs),{default:Y(()=>[q("span",{class:f(e.containerClass)},[e.onIcon?(k(),I("span",{key:0,class:f([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[S(c,{name:e.onIcon,class:f(e.onIconClass)},null,8,["name","class"])],2)):z("",!0),e.offIcon?(k(),I("span",{key:1,class:f([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[S(c,{name:e.offIcon,class:f(e.offIconClass)},null,8,["name","class"])],2)):z("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const Ce=R(me,[["render",pe]]);export{Ce as default};