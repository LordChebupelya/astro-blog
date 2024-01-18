import{_ as V,G as L,H as v,s as M,J as k,Y as h,ax as w,K as B,L as p,r as D,M as J,Z as K,$ as O,o as r,c as t,F as f,N as y,V as u,b as _,w as j,P as c,a0 as s,T as o,O as g,t as m,d as F,Q as P}from"./entry.LFM_JvCg.js";import C from"./Divider.LtewrnPa.js";const T={wrapper:"relative",base:"group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-3 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-4 h-4",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"3xs"},badge:{base:"relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5",active:"bg-white dark:bg-gray-900",inactive:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900"},divider:{wrapper:{base:"p-2"}}},x=L(v.ui.strategy,v.ui.verticalNavigation,T),E=M({components:{UIcon:k,UAvatar:h,ULink:w,UDivider:C},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:n,attrs:d}=B("verticalNavigation",p(e,"ui"),x,p(e,"class")),b=D(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:n,attrs:d,omit:J,linkSections:b,twMerge:K,twJoin:O}}}),G={key:0,class:"sr-only"};function H(e,n,d,b,I,Q){const $=h,U=k,N=w,S=C;return r(),t("nav",u({class:e.ui.wrapper},e.attrs),[(r(!0),t(f,null,y(e.linkSections,(z,l)=>(r(),t("ul",{key:`linkSection${l}`},[(r(!0),t(f,null,y(z,(a,A)=>(r(),t("li",{key:`linkSection${l}-${A}`},[_(N,u(e.omit(a,["label","labelClass","icon","iconClass","avatar","badge","click"]),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:n[0]||(n[0]=P(i=>i.target.blur(),["enter"]))}),{default:j(({isActive:i})=>[o(e.$slots,"avatar",{link:a,isActive:i},()=>[a.avatar?(r(),c($,u({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):s("",!0)]),o(e.$slots,"icon",{link:a,isActive:i},()=>[a.icon?(r(),c(U,{key:0,name:a.icon,class:g(e.twMerge(e.twJoin(e.ui.icon.base,i?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):s("",!0)]),o(e.$slots,"default",{link:a,isActive:i},()=>[a.label?(r(),t("span",{key:0,class:g(e.twMerge(e.ui.label,a.labelClass))},[i?(r(),t("span",G," Current page: ")):s("",!0),F(" "+m(a.label),1)],2)):s("",!0)]),o(e.$slots,"badge",{link:a,isActive:i},()=>[a.badge?(r(),t("span",{key:0,class:g([e.ui.badge.base,i?e.ui.badge.active:e.ui.badge.inactive])},m(a.badge),3)):s("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),l<e.linkSections.length-1?(r(),c(S,{key:0,ui:e.ui.divider},null,8,["ui"])):s("",!0)]))),128))],16)}const Z=V(E,[["render",H]]);export{Z as default};