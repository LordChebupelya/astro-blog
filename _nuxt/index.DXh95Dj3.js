import{h as W,g as T,j as z,i as H,k as E,l as F,m as B,n as V,q as C,r as _,s as G,v as M,u as Q,x as Y,y as J,o as L,c as P,b as y,z as U,A as K,a as r,w as x,F as X,B as Z,d as S}from"./entry.qOecQ0k9.js";import ee from"./Card.B2VrUDwv.js";async function te(e,t){return await ie(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function ie(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,n)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>n(o),i.src=e})}function N(e){return t=>t?e[t]||t:e.missingValue}function ne({formatter:e,keyMap:t,joinWith:n="/",valueMap:i}={}){e||(e=(s,a)=>`${s}=${a}`),t&&typeof t!="function"&&(t=N(t));const o=i||{};return Object.keys(o).forEach(s=>{typeof o[s]!="function"&&(o[s]=N(o[s]))}),(s={})=>Object.entries(s).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const u=o[d];return typeof u=="function"&&(c=u(s[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(n)}function m(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function oe(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const n of e.split(" ")){const i=parseInt(n.replace("x",""));i&&t.add(i)}return Array.from(t)}function se(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function re(e){const t={};if(typeof e=="string")for(const n of e.split(/[\s,]+/).filter(i=>i)){const i=n.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ae(e){const t={options:e},n=(o,s={})=>O(t,o,s),i=(o,s={},a={})=>n(o,{...a,modifiers:E(s,a.modifiers||{})}).url;for(const o in e.presets)i[o]=(s,a,d)=>i(s,a,{...e.presets[o],...d});return i.options=e,i.getImage=n,i.getMeta=(o,s)=>le(t,o,s),i.getSizes=(o,s)=>ue(t,o,s),t.$img=i,i}async function le(e,t,n){const i=O(e,t,{...n});return typeof i.getMeta=="function"?await i.getMeta():await te(e,i.url)}function O(e,t,n){var u,f;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=de(e,n.provider||e.options.provider),s=ce(e,n.preset);if(t=W(t)?t:T(t),!i.supportsAlias)for(const p in e.options.alias)t.startsWith(p)&&(t=z(e.options.alias[p],t.substr(p.length)));if(i.validateDomains&&W(t)){const p=H(t).host;if(!e.options.domains.find(b=>b===p))return{url:t}}const a=E(n,s,o);a.modifiers={...a.modifiers};const d=a.modifiers.format;(u=a.modifiers)!=null&&u.width&&(a.modifiers.width=m(a.modifiers.width)),(f=a.modifiers)!=null&&f.height&&(a.modifiers.height=m(a.modifiers.height));const c=i.getImage(t,a,e);return c.format=c.format||d||"",c}function de(e,t){const n=e.options.providers[t];if(!n)throw new Error("Unknown provider: "+t);return n}function ce(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ue(e,t,n){var g,$,I,j,k;const i=m((g=n.modifiers)==null?void 0:g.width),o=m(($=n.modifiers)==null?void 0:$.height),s=re(n.sizes),a=(I=n.densities)!=null&&I.trim()?oe(n.densities.trim()):e.options.densities;se(a);const d=i&&o?o/i:0,c=[],u=[];if(Object.keys(s).length>=1){for(const h in s){const v=A(h,String(s[h]),o,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const w of a)u.push({width:v._cWidth*w,src:q(e,t,n,v,w)})}}fe(c)}else for(const h of a){const v=Object.keys(s)[0];let w=A(v,String(s[v]),o,d,e);w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(j=n.modifiers)==null?void 0:j.width,_cHeight:(k=n.modifiers)==null?void 0:k.height}),u.push({width:h,src:q(e,t,n,w,h)})}he(u);const f=u[u.length-1],p=c.length?c.map(h=>`${h.media?h.media+" ":""}${h.size}`).join(", "):void 0,b=p?"w":"x",l=u.map(h=>`${h.src} ${h.width}${b}`).join(", ");return{sizes:p,srcset:l,src:f==null?void 0:f.src}}function A(e,t,n,i,o){const s=o.options.screens&&o.options.screens[e]||parseInt(e),a=t.endsWith("vw");if(!a&&/^\d+$/.test(t)&&(t=t+"px"),!a&&!t.endsWith("px"))return;let d=parseInt(t);if(!s||!d)return;a&&(d=Math.round(d/100*s));const c=i?Math.round(d*i):n;return{size:t,screenMaxWidth:s,_cWidth:d,_cHeight:c}}function q(e,t,n,i,o){return e.$img(t,{...n.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},n)}function fe(e){var n;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((n=e[i+1])==null?void 0:n.media)||""}function he(e){e.sort((n,i)=>n.width-i.width);let t=null;for(let n=e.length-1;n>=0;n--){const i=e[n];i.width===t&&e.splice(n,1),t=i.width}}const ge=ne({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>B(e)+"_"+B(t)}),me=(e,{modifiers:t={},baseURL:n}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=ge(t)||"_";return n||(n=z(i.options.nuxt.baseURL,"/_ipx")),{url:z(n,o,F(e))}},pe=!0,ve=!0,_e=Object.freeze(Object.defineProperty({__proto__:null,getImage:me,supportsAlias:ve,validateDomains:pe},Symbol.toStringTag,{value:"Module"})),D={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};D.providers={ipxStatic:{provider:_e,defaults:{}}};const R=()=>{const e=V(),t=C();return t.$img||t._img||(t._img=ae({...D,nuxt:{baseURL:e.app.baseURL}}))},we={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ye=e=>{const t=_(()=>({provider:e.provider,preset:e.preset})),n=_(()=>({width:m(e.width),height:m(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=R(),o=_(()=>({...e.modifiers,width:m(e.width),height:m(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:n,modifiers:o}},be={...we,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},xe=G({name:"NuxtImg",props:be,emits:["load","error"],setup:(e,t)=>{const n=R(),i=ye(e),o=M(!1),s=_(()=>n.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:m(e.width),height:m(e.height)}})),a=_(()=>{const l={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(l.sizes=s.value.sizes,l.srcset=s.value.srcset),l}),d=_(()=>{let l=e.placeholder;if(l===""&&(l=!0),!l||o.value)return!1;if(typeof l=="string")return l;const g=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return n(e.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},i.options.value)}),c=_(()=>e.sizes?s.value.src:n(e.src,i.modifiers.value,i.options.value)),u=_(()=>d.value?d.value:c.value);if(e.preload){const l=Object.values(s.value).every(g=>g);Q({link:[{rel:"preload",as:"image",nonce:e.nonce,...l?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:u.value}}]})}const f=M(),b=C().isHydrating;return Y(()=>{if(d.value){const l=new Image;l.src=c.value,e.sizes&&(l.sizes=s.value.sizes||"",l.srcset=s.value.srcset),l.onload=g=>{o.value=!0,t.emit("load",g)};return}f.value&&(f.value.complete&&b&&(f.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),f.value.onload=l=>{t.emit("load",l)},f.value.onerror=l=>{t.emit("error",l)})}),()=>J("img",{ref:f,src:u.value,...a.value,...t.attrs})}}),Se={__name:"LinkBtn",props:{label:{type:String,required:!0},url:{type:String,required:!0},icon:{type:String,required:!0}},setup(e){return(t,n)=>{const i=U;return L(),P("div",null,[y(i,{label:e.label,class:"transition-colors",icon:e.icon,"trailing-icon":"i-tabler-arrow-up-right",to:e.url,target:"_self",ui:{rounded:"rounded-full"},variant:"outline"},null,8,["label","icon","to"])])}}},ze=Se,$e=r("title",null,"/",-1),Ie={class:"flex flex-col md:flex-row gap-2"},je=r("p",{class:"text-lg"},"_shork",-1),ke=r("p",{class:"text-gray-500 dark:text-gray-400"},"@shork_dev",-1),We=r("h2",{class:"font-bold"},"about me",-1),Be={class:"text-lg"},Me=r("br",null,null,-1),Ne=r("h4",{class:"font-semibold"},"languages i use:",-1),Ae={class:"list-disc pl-4"},qe=r("li",null,"HTML",-1),Ee=r("li",null,"CSS",-1),Ce=r("li",null,"JS",-1),Le=r("h4",null,"libraries i use: ",-1),Pe=r("ul",null,[r("li",null,[r("h5",null,"frontend"),r("ul",{class:"list-disc pl-4"},[r("li",null,"TailwindCSS"),r("li",null,"Nuxt UI"),r("li",null,"Bootstrap")])]),r("li",null,[r("h5",null,"backend"),r("ul",{class:"list-disc pl-4"},[r("li",null,"discord.js"),r("li",null,"express.js"),r("li",null,"Nuxt"),r("li",null,"Astro")])])],-1),Ue=r("h2",null,"links",-1),Oe={class:"flex flex-col gap-2 w-fit"},De="86XvLm6rnK6TcnVfq6ARmoKu4dNVZ87nCYBbNPkN3AaeUDYAoEQ1L6sgp81sicYG1j8WuD2nDRFKaaExQqYBKU3w3ECRQDf",He={__name:"index",setup(e){const t=K(),n=()=>{navigator.clipboard.writeText(De),t.add({title:"Copied to clipboard",description:"Copied address to clipboard!",icon:"i-tabler-clipboard-check"})};return(i,o)=>{const s=xe,a=Z("strike"),d=ze,c=U,u=ee;return L(),P(X,null,[$e,r("div",null,[y(u,{class:"w-full md:w-[48rem]"},{header:x(()=>[r("div",Ie,[r("div",null,[y(s,{src:"https://avatars.githubusercontent.com/u/111064437?v=4",class:"w-auto h-64 rounded-lg"}),je,ke]),r("div",null,[We,r("p",Be,[S("hi! i am shork, a web developer "),Me,Ne,r("ul",Ae,[qe,Ee,Ce,r("li",null,[y(a,null,{default:x(()=>[S("Luau")]),_:1}),S(" (fuck you roblox)")])]),Le,Pe])])])]),default:x(()=>[Ue,r("div",Oe,[y(d,{label:"G I T H U B",icon:"i-tabler-brand-github",url:"https://github.com/shorkd3v"}),y(c,{label:"Donate (Monero)",class:"transition-colors","trailing-icon":"i-tabler-clipboard",ui:{rounded:"rounded-full"},variant:"outline",onClick:o[0]||(o[0]=f=>n())})])]),_:1})])],64)}}};export{He as default};