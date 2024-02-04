import{v as k,x as I,C as U,_ as z,G as A,H as g,s as V,z as P,K as W,L as h,a6 as X,a7 as D,a8 as G,a9 as H,r as B,Z as K,o as n,c as i,a as L,F as M,N as $,O as d,R as v,P as E,V as y,a0 as p}from"./entry.NvCQENbP.js";const T={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},Z=e=>{const r=k(0);function u(o){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",r.value=o.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",s)}function s(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",s)}function a(o){o.preventDefault();const l=o.pageX-r.value;r.value=o.pageX,e.value.scrollBy(-l,0)}I(()=>{e.value&&e.value.addEventListener("mousedown",u)}),U(()=>{e.value&&e.value.removeEventListener("mousedown",u)})},b=A(g.ui.strategy,g.ui.carousel,T),q=V({components:{UButton:P},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>b.default.prevButton},nextButton:{type:Object,default:()=>b.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e){const{ui:r,attrs:u}=W("carousel",h(e,"ui"),b,h(e,"class")),s=k(),a=k(0),{x:o,arrivedState:l}=X(s,{behavior:"smooth"}),{width:t}=D(s),{left:c,right:N}=G(l);Z(s),H(s,f=>{var w,C;const[m]=f;a.value=((C=(w=m==null?void 0:m.target)==null?void 0:w.firstElementChild)==null?void 0:C.clientWidth)||0});const S=B(()=>Math.round(o.value/a.value)+1),j=B(()=>a.value?e.items.length-Math.round(t.value/a.value)+1:0);function O(){o.value+=a.value}function R(){o.value-=a.value}function F(f){o.value=(f-1)*a.value}return{ui:r,attrs:u,isFirst:c,isLast:N,carouselRef:s,indicatorsCount:j,currentIndex:S,onClickNext:O,onClickPrev:R,onClick:F,twMerge:K}}}),J=["aria-label","onClick"];function Q(e,r,u,s,a,o){const l=P;return n(),i("div",y({class:e.ui.wrapper},e.attrs),[L("div",{ref:"carouselRef",class:d([e.ui.container,"no-scrollbar"])},[(n(!0),i(M,null,$(e.items,(t,c)=>(n(),i("div",{key:c,class:d(e.ui.item)},[v(e.$slots,"default",{item:t,index:c},void 0,!0)],2))),128))],2),e.arrows?(n(),i("div",{key:0,class:d(e.ui.arrows.wrapper)},[v(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(n(),E(l,y({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):p("",!0)]},!0),v(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(n(),E(l,y({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):p("",!0)]},!0)],2)):p("",!0),e.indicators?(n(),i("div",{key:1,class:d(e.ui.indicators.wrapper)},[(n(!0),i(M,null,$(e.indicatorsCount,t=>v(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentIndex,index:t},()=>[L("button",{type:"button",class:d([e.ui.indicators.base,t===e.currentIndex?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:c=>e.onClick(t)},null,10,J)],!0)),128))],2)):p("",!0)],16)}const x=z(q,[["render",Q],["__scopeId","data-v-80ca82c6"]]);export{x as default};