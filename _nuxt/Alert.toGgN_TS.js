import{_ as M,H as I,I as y,s as N,K as S,Z as j,z as U,L as V,M as F,r as L,$,a0 as P,o,c as i,a as w,Q as u,P as s,a1 as a,W as c,S as h,d as B,t as C,F as A,O,a2 as k}from"./entry.qOecQ0k9.js";const D={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},r=I(y.ui.strategy,y.ui.alert,D),E=N({components:{UIcon:S,UAvatar:j,UButton:U},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>r.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>r.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>r.default.color,validator(e){return[...y.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(t=>Object.keys(t))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:t,attrs:m}=V("alert",F(e,"ui"),r),v=L(()=>{var d,p;const n=((p=(d=t.value.color)==null?void 0:d[e.color])==null?void 0:p[e.variant])||t.value.variant[e.variant];return $(P(t.value.wrapper,t.value.rounded,t.value.shadow,t.value.padding,n==null?void 0:n.replaceAll("{color}",e.color)),e.class)});function b(n){n.click&&n.click()}return{ui:t,attrs:m,alertClass:v,onAction:b,twMerge:$}}});function H(e,t,m,v,b,n){const d=S,p=j,g=U;return o(),i("div",c({class:e.alertClass},e.attrs),[w("div",{class:s(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[e.icon?(o(),u(d,{key:0,name:e.icon,class:s(e.ui.icon.base)},null,8,["name","class"])):a("",!0),e.avatar?(o(),u(p,c({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):a("",!0),w("div",{class:s(e.ui.inner)},[e.title||e.$slots.title?(o(),i("p",{key:0,class:s(e.ui.title)},[h(e.$slots,"title",{title:e.title},()=>[B(C(e.title),1)])],2)):a("",!0),e.description||e.$slots.description?(o(),i("p",{key:1,class:s(e.ui.description)},[h(e.$slots,"description",{description:e.description},()=>[B(C(e.description),1)])],2)):a("",!0),(e.description||e.$slots.description)&&e.actions.length?(o(),i("div",{key:2,class:s(e.ui.actions)},[(o(!0),i(A,null,O(e.actions,(l,f)=>(o(),u(g,c({key:f},{...e.ui.default.actionButton||{},...l},{onClick:k(z=>e.onAction(l),["stop"])}),null,16,["onClick"]))),128))],2)):a("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(o(),i("div",{key:2,class:s(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(o(!0),i(A,{key:0},O(e.actions,(l,f)=>(o(),u(g,c({key:f},{...e.ui.default.actionButton||{},...l},{onClick:k(z=>e.onAction(l),["stop"])}),null,16,["onClick"]))),128)):a("",!0),e.closeButton?(o(),u(g,c({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:t[0]||(t[0]=k(l=>e.$emit("close"),["stop"]))}),null,16)):a("",!0)],2)):a("",!0)],2)],16)}const K=M(E,[["render",H]]);export{K as default};