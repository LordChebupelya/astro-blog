import{_ as P,G as R,ad as Z,H as f,s as Q,J as h,K as X,L as j,a5 as Y,r as i,v as k,k as _,x,Z as ee,$ as c,o as y,c as I,a as ae,V as le,T as b,O as g,b as O,a0 as V,ae as ne}from"./entry.LFM_JvCg.js";import{u as ie}from"./useFormGroup.7Pt6L2QS.js";import"./uid.KLLbMoZc.js";const t=R(f.ui.strategy,f.ui.input,Z),te=Q({components:{UIcon:h},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>t.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(t.size).includes(e)}},color:{type:String,default:()=>t.default.color,validator(e){return[...f.ui.colors,...Object.keys(t.color)].includes(e)}},variant:{type:String,default:()=>t.default.variant,validator(e){return[...Object.keys(t.variant),...Object.values(t.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:n,slots:p}){const{ui:a,attrs:C}=X("input",j(e,"ui"),t,j(e,"class")),{size:B,rounded:v}=Y({ui:a,props:e}),{emitFormBlur:r,emitFormInput:M,size:w,color:u,inputId:A,name:F}=ie(e,t),o=i(()=>B.value||w.value),s=k(_({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),S=k(null),G=()=>{var l;e.autofocus&&((l=S.value)==null||l.focus())},z=l=>{s.value.trim&&(l=l.trim()),(s.value.number||e.type==="number")&&(l=ne(l)),n("update:modelValue",l),M()},T=l=>{s.value.lazy||z(l.target.value)},q=l=>{const d=l.target.value;s.value.lazy&&z(d),s.value.trim&&(l.target.value=d.trim())},W=l=>{r(),n("blur",l)};x(()=>{setTimeout(()=>{G()},e.autofocusDelay)});const L=i(()=>{var d,$;const l=(($=(d=a.value.color)==null?void 0:d[u.value])==null?void 0:$[e.variant])||a.value.variant[e.variant];return ee(c(a.value.base,a.value.form,v.value,a.value.placeholder,a.value.size[o.value],e.padded?a.value.padding[o.value]:"p-0",l==null?void 0:l.replaceAll("{color}",u.value),(m.value||p.leading)&&a.value.leading.padding[o.value],(N.value||p.trailing)&&a.value.trailing.padding[o.value]),e.inputClass)}),m=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),N=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),U=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),D=i(()=>e.loading&&!m.value?e.loadingIcon:e.trailingIcon||e.icon),J=i(()=>c(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[o.value])),E=i(()=>c(a.value.icon.base,u.value&&f.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[o.value],e.loading&&a.value.icon.loading)),H=i(()=>c(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[o.value])),K=i(()=>c(a.value.icon.base,u.value&&f.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[o.value],e.loading&&!m.value&&a.value.icon.loading));return{ui:a,attrs:C,name:F,inputId:A,input:S,isLeading:m,isTrailing:N,inputClass:L,leadingIconName:U,leadingIconClass:E,leadingWrapperIconClass:J,trailingIconName:D,trailingIconClass:K,trailingWrapperIconClass:H,onInput:T,onChange:q,onBlur:W}}}),ue=["id","name","value","type","required","placeholder","disabled"];function oe(e,n,p,a,C,B){const v=h;return y(),I("div",{class:g(e.ui.wrapper)},[ae("input",le({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:n[1]||(n[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:n[2]||(n[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,ue),b(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),I("span",{key:0,class:g(e.leadingWrapperIconClass)},[b(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[O(v,{name:e.leadingIconName,class:g(e.leadingIconClass)},null,8,["name","class"])])],2)):V("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),I("span",{key:1,class:g(e.trailingWrapperIconClass)},[b(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[O(v,{name:e.trailingIconName,class:g(e.trailingIconClass)},null,8,["name","class"])])],2)):V("",!0)],2)}const ce=P(te,[["render",oe]]);export{ce as default};
