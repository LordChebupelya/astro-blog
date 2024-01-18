import{s as V,J as _,K as A,L as q,r as a,a2 as D,a3 as F,$ as p,y as i,G as I,H as g}from"./entry.LFM_JvCg.js";import{m as Q}from"./meter.G0RBEG4z.js";const T={wrapper:"flex flex-col gap-2 w-full",base:"flex flex-row flex-nowrap flex-shrink overflow-hidden",background:"bg-gray-200 dark:bg-gray-700",transition:"transition-all",rounded:"rounded-full",shadow:"",list:"list-disc list-inside",orientation:{"rounded-none":{left:"rounded-s-none",right:"rounded-e-none"},"rounded-sm":{left:"rounded-s-sm",right:"rounded-e-sm"},rounded:{left:"rounded-s",right:"rounded-e"},"rounded-md":{left:"rounded-s-md",right:"rounded-e-md"},"rounded-lg":{left:"rounded-s-lg",right:"rounded-e-lg"},"rounded-xl":{left:"rounded-s-xl",right:"rounded-e-xl"},"rounded-2xl":{left:"rounded-s-2xl",right:"rounded-e-2xl"},"rounded-3xl":{left:"rounded-s-3xl",right:"rounded-e-3xl"},"rounded-full":{left:"rounded-s-full",right:"rounded-e-full"}},default:{size:"md",icon:"i-heroicons-minus-20-solid"}},x=I(g.ui.strategy,g.ui.meter,Q),B=I(g.ui.strategy,g.ui.meterGroup,T),Y=V({components:{UIcon:_},inheritAttrs:!1,slots:Object,props:{min:{type:Number,default:0},max:{type:Number,default:100},size:{type:String,default:()=>x.default.size,validator(t){return Object.keys(x.meter.bar.size).includes(t)}},indicator:{type:Boolean,default:!1},icon:{type:String,default:()=>B.default.icon},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t,{slots:v}){const{ui:n,attrs:J}=A("meterGroup",q(t,"ui"),B),{ui:o}=A("meter",void 0,x);if(!v.default)throw new Error("Meter Group has no Meter children.");const P=a(()=>t.min>t.max?t.max:t.min),U=a(()=>t.max<t.min?t.min:t.max),f=a(()=>D(v)),w=a(()=>n.value.orientation[n.value.rounded]);function E(r,l,e){if(l==e)return r<l?0:100;l>e&&(e=[l,l=e][0]);const u=(r-l)/(e-l)*100;return Math.max(0,Math.min(100,u))}const z=a(()=>f.value.map(r=>r.props.label)),h=a(()=>f.value.map(r=>E(r.props.value,t.min,t.max))),b=a(()=>Math.max(0,Math.max(h.value.reduce((r,l)=>r+l,0)))),m=a(()=>f.value.map((r,l)=>{var d,s,c,y,C,M,$,G,j,k,N,S,O;const e={};e.style={width:`${h.value[l]}%`},e.size=t.size,e.min=P.value,e.max=U.value,e.ui=((d=r.props)==null?void 0:d.ui)||{},e.ui.wrapper=((c=(s=r.props)==null?void 0:s.ui)==null?void 0:c.wrapper)||"",e.ui.wrapper+=[(C=(y=r.props)==null?void 0:y.ui)==null?void 0:C.wrapper,n.value.background,n.value.transition].filter(Boolean).join(" "),e.ui.meter=(($=(M=r.props)==null?void 0:M.ui)==null?void 0:$.meter)||{},e.ui.meter.background=`bg-${r.props.color}-500 dark:bg-${r.props.color}-400`,e.ui.meter.rounded="rounded-none",e.ui.meter.bar=((k=(j=(G=r.props)==null?void 0:G.ui)==null?void 0:j.meter)==null?void 0:k.bar)||{},l===0&&(e.ui.meter.rounded=`${w.value.left} rounded-e-none`),l===f.value.length-1&&(e.ui.meter.rounded=`${w.value.right} rounded-s-none`),z.value[l]=r.props.label;const u=F(r,e);return(N=u.children)==null||delete N.label,(S=u.props)==null||delete S.indicator,(O=u.props)==null||delete O.label,u})),H=a(()=>p(n.value.base,n.value.background,n.value.rounded,n.value.shadow,o.value.meter.size[t.size])),K=a(()=>p(o.value.indicator.container)),L=a(()=>p(o.value.indicator.text,o.value.indicator.size[t.size])),R=a(()=>{const r=[void 0,i("div",{class:H.value},m.value),void 0];return t.indicator?r[0]=i("div",{class:K.value},[i("div",{class:L.value,style:{width:`${b.value}%`}},Math.round(b.value)+"%")]):v.indicator&&(r[0]=v.indicator({percent:b.value})),r[2]=i("ol",{class:n.value.list},z.value.map((l,e)=>{var d;const u=a(()=>{var s,c;return p(o.value.label.base,o.value.label.text,o.value.color[(s=m.value[e])==null?void 0:s.props.color]??o.value.label.color.replaceAll("{color}",((c=m.value[e])==null?void 0:c.props.color)??o.value.default.color),o.value.label.size[t.size])});return i("li",{class:u.value},[i(_,{name:((d=m.value[e])==null?void 0:d.props.icon)??t.icon}),`${l} (${Math.round(h.value[e])}%)`])})),r});return()=>i("div",{class:n.value.wrapper,...J.value},R.value)}});export{Y as default};
