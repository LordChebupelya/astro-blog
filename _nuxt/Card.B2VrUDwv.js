import{_ as l,H as g,I as u,s as p,o as s,Q as c,w as b,c as r,P as d,S as o,a1 as n,W as f,ag as y,L as m,M as k,r as v,$ as h,a0 as $}from"./entry.qOecQ0k9.js";const C={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},w=g(u.ui.strategy,u.ui.card,C),S=p({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:i}=m("card",k(a,"ui"),w),t=v(()=>h($(e.value.base,e.value.rounded,e.value.divide,e.value.ring,e.value.shadow,e.value.background),a.class));return{ui:e,attrs:i,cardClass:t}}});function B(a,e,i,t,j,A){return s(),c(y(a.$attrs.onSubmit?"form":a.as),f({class:a.cardClass},a.attrs),{default:b(()=>[a.$slots.header?(s(),r("div",{key:0,class:d([a.ui.header.base,a.ui.header.padding,a.ui.header.background])},[o(a.$slots,"header")],2)):n("",!0),a.$slots.default?(s(),r("div",{key:1,class:d([a.ui.body.base,a.ui.body.padding,a.ui.body.background])},[o(a.$slots,"default")],2)):n("",!0),a.$slots.footer?(s(),r("div",{key:2,class:d([a.ui.footer.base,a.ui.footer.padding,a.ui.footer.background])},[o(a.$slots,"footer")],2)):n("",!0)]),_:3},16,["class"])}const M=l(S,[["render",B]]);export{M as default};