import C from"./Kbd.CyB4EOJ_.js";import{aB as M,_ as O,G as N,H as g,s as B,K as $,L as v,r as A,k as L,v as V,o as s,c as n,R as w,d as u,O as l,b as j,w as b,a as p,a0 as d,t as h,F,N as S,P as U,V as k,U as z}from"./entry.NvCQENbP.js";import{u as K}from"./usePopper.KiADX4aD.js";const P={wrapper:"relative inline-flex",container:"z-20 group",width:"max-w-xs",background:"bg-white dark:bg-gray-900",color:"text-gray-900 dark:text-white",shadow:"shadow",rounded:"rounded",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5",middot:"mx-1 text-gray-700 dark:text-gray-200",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:M},f=N(g.ui.strategy,g.ui.tooltip,P),H=B({components:{UKbd:C},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>f.default.openDelay},closeDelay:{type:Number,default:()=>f.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:y}=$("tooltip",v(e,"ui"),f,v(e,"class")),i=A(()=>L({},e.popper,o.value.popper)),[c,m]=K(i.value),r=V(!1);let a=null,t=null;function T(){t&&(clearTimeout(t),t=null),!r.value&&(a=a||setTimeout(()=>{r.value=!0,a=null},e.openDelay))}function D(){a&&(clearTimeout(a),a=null),r.value&&(t=t||setTimeout(()=>{r.value=!1,t=null},e.closeDelay))}return{ui:o,attrs:y,popper:i,trigger:c,container:m,open:r,onMouseOver:T,onMouseLeave:D}}});function R(e,o,y,i,c,m){const r=C;return s(),n("div",k({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseover:o[0]||(o[0]=(...a)=>e.onMouseOver&&e.onMouseOver(...a)),onMouseleave:o[1]||(o[1]=(...a)=>e.onMouseLeave&&e.onMouseLeave(...a))}),[w(e.$slots,"default",{open:e.open},()=>[u(" Hover ")]),e.open&&!e.prevent?(s(),n("div",{key:0,ref:"container",class:l([e.ui.container,e.ui.width])},[j(z,k({appear:""},e.ui.transition),{default:b(()=>{var a;return[p("div",null,[e.popper.arrow?(s(),n("div",{key:0,"data-popper-arrow":"",class:l(Object.values(e.ui.arrow))},null,2)):d("",!0),p("div",{class:l([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[w(e.$slots,"text",{},()=>[u(h(e.text),1)]),(a=e.shortcuts)!=null&&a.length?(s(),n("span",{key:0,class:l(e.ui.shortcuts)},[p("span",{class:l(e.ui.middot)},"·",2),(s(!0),n(F,null,S(e.shortcuts,t=>(s(),U(r,{key:t,size:"xs"},{default:b(()=>[u(h(t),1)]),_:2},1024))),128))],2)):d("",!0)],2)])]}),_:3},16)],2)):d("",!0)],16)}const q=O(H,[["render",R]]);export{q as default};