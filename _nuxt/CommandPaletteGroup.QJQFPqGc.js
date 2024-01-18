import{_ as H,s as N,J as O,Y as U,r as w,A as z,o,c as a,O as s,t as u,a0 as l,a as f,F as I,N as q,P as y,w as S,V as T,ab as V,T as v,d as j}from"./entry.is6ZA6dz.js";import B from"./Kbd.1J30nc9c.js";import{Y as L}from"./combobox.kshXGjmW.js";import"./dom.B5lYat76.js";import"./use-tracked-pointer.I3j0XUhX.js";import"./focus-management.Kg8IpIKE.js";import"./open-closed.9mH1udd_.js";import"./use-resolve-button-type.kHbxmVIk.js";import"./use-outside-click.t--drsEX.js";import"./hidden.XM2H5oBM.js";import"./use-controllable.sYktnlIM.js";import"./disposables.MoseSqH0.js";import"./micro-task.ZxAilEVg.js";const M=N({components:{HComboboxOption:L,UIcon:O,UAvatar:U,UKbd:B},props:{group:{type:Object,required:!0},query:{type:String,default:""},groupAttribute:{type:String,required:!0},commandAttribute:{type:String,required:!0},selectedIcon:{type:String,required:!0},ui:{type:Object,required:!0}},setup(e){const $=w(()=>{const n=e.group[e.groupAttribute];return typeof n=="function"?n(e.query):n});function C(n,{indices:A,value:g}){if(n===g)return"";let i="",d=0;A.forEach(p=>{const r=p[1]+1,k=r-p[0]>=e.query.length;i+=[g.substring(d,p[0]),k&&"<mark>",g.substring(p[0],r),k&&"</mark>"].filter(Boolean).join(""),d=r}),i+=g.substring(d);const h=i.indexOf("<mark>");return h>60&&(i=`...${i.substring(h-60)}`),i}return{label:$,highlight:C}}}),P=["aria-label"],Y=["innerHTML"];function E(e,$,C,n,A,g){const i=O,d=U,h=B,p=z("HComboboxOption");return o(),a("div",{class:s(e.ui.group.wrapper),role:"option"},[e.label?(o(),a("h2",{key:0,class:s(e.ui.group.label)},u(e.label),3)):l("",!0),f("div",{class:s(e.ui.group.container),role:"listbox","aria-label":e.group[e.groupAttribute]},[(o(!0),a(I,null,q(e.group.commands,(r,k)=>(o(),y(p,{key:`${e.group.key}-${k}`,value:r,disabled:r.disabled,as:"template"},{default:S(({active:t,selected:c})=>[f("div",{class:s([e.ui.group.command.base,t?e.ui.group.command.active:e.ui.group.command.inactive,r.disabled?"cursor-not-allowed":"cursor-pointer"])},[f("div",{class:s(e.ui.group.command.container)},[v(e.$slots,`${e.group.key}-icon`,{group:e.group,command:r,active:t,selected:c},()=>[r.icon?(o(),y(i,{key:0,name:r.icon,class:s([e.ui.group.command.icon.base,t?e.ui.group.command.icon.active:e.ui.group.command.icon.inactive,r.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):r.avatar?(o(),y(d,T({key:1},{size:e.ui.group.command.avatar.size,...r.avatar},{class:e.ui.group.command.avatar.base,"aria-hidden":"true"}),null,16,["class"])):r.chip?(o(),a("span",{key:2,class:s(e.ui.group.command.chip.base),style:V({background:`#${r.chip}`})},null,6)):l("",!0)]),f("div",{class:s([e.ui.group.command.label,r.disabled&&e.ui.group.command.disabled])},[v(e.$slots,`${e.group.key}-command`,{group:e.group,command:r,active:t,selected:c},()=>{var b,m;return[r.prefix?(o(),a("span",{key:0,class:s(["flex-shrink-0",r.prefixClass||e.ui.group.command.prefix])},u(r.prefix),3)):l("",!0),f("span",{class:s(["truncate",{"flex-none":r.suffix||((b=r.matches)==null?void 0:b.length)}])},u(r[e.commandAttribute]),3),(m=r.matches)!=null&&m.length?(o(),a("span",{key:1,class:s(["truncate",r.suffixClass||e.ui.group.command.suffix]),innerHTML:e.highlight(r[e.commandAttribute],r.matches[0])},null,10,Y)):r.suffix?(o(),a("span",{key:2,class:s(["truncate",r.suffixClass||e.ui.group.command.suffix])},u(r.suffix),3)):l("",!0)]})],2)],2),c?(o(),y(i,{key:0,name:e.selectedIcon,class:s(e.ui.group.command.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])):t&&(e.group.active||e.$slots[`${e.group.key}-active`])?v(e.$slots,`${e.group.key}-active`,{key:1,group:e.group,command:r,active:t,selected:c},()=>[e.group.active?(o(),a("span",{key:0,class:s(e.ui.group.active)},u(e.group.active),3)):l("",!0)]):v(e.$slots,`${e.group.key}-inactive`,{key:2,group:e.group,command:r,active:t,selected:c},()=>{var b;return[(b=r.shortcuts)!=null&&b.length?(o(),a("span",{key:0,class:s(e.ui.group.command.shortcuts)},[(o(!0),a(I,null,q(r.shortcuts,m=>(o(),y(h,{key:m},{default:S(()=>[j(u(m),1)]),_:2},1024))),128))],2)):!r.disabled&&e.group.inactive?(o(),a("span",{key:1,class:s(e.ui.group.inactive)},u(e.group.inactive),3)):l("",!0)]})],2)]),_:2},1032,["value","disabled"]))),128))],10,P)],2)}const re=H(M,[["render",E]]);export{re as default};
