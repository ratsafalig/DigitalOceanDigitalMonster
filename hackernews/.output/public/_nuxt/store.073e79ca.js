import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";import{o as m,c as p,C as v,D as h,g as _,r as d,E as g}from"./entry.719d578a.js";const b={},w={class:"spinner"};function y(e,t){return m(),p("div",w)}const k=f(b,[["render",y],["__scopeId","data-v-f491500a"]]);function E(e){const s=e.replace(/^https?:\/\//,"").replace(/\/.*$/,"").replace("?id=","/").split(".").slice(-3);return s[0]==="www"&&s.shift(),s.join(".")}function B(e){const t=Date.now()/1e3-Number(e);return t<3600?i(~~(t/60)," minute"):t<86400?i(~~(t/3600)," hour"):i(~~(t/86400)," day")}function i(e,t){return e===1?e+t:`${e+t}s`}function F(e){return/^https?:\/\//.test(e)}const u=()=>v("store",()=>({items:{},users:{},comments:{},feeds:Object.fromEntries(h.map(e=>[e,{}]))}));function $(e,{feed:t,page:s}){var a,o;const n=(o=(a=e.feeds)==null?void 0:a[t])==null?void 0:o[s];if(n!=null&&n.length)return n.map(c=>e.items[c])}function O(e){const t=u(),{feed:s,page:n}=e;return l(()=>$(t.value,e),a=>{const o=a.map(c=>c.id);t.value.feeds[s][n]=o,a.filter(Boolean).forEach(c=>{t.value.items[c.id]?Object.assign(t.value.items[c.id],c):t.value.items[c.id]=c})},()=>$fetch("/api/hn/feeds",{params:{feed:s,page:n}}),(t.value.feeds[s][n]||[]).map(a=>t.value.items[a]))}function S(e){const t=u();return l(()=>t.value.items[e],s=>{t.value.items[e]=s},()=>$fetch("/api/hn/item",{params:{id:e}}))}function A(e){const t=u();return l(()=>t.value.comments[e],s=>{t.value.comments[e]=s},()=>$fetch("/api/hn/item",{params:{id:e}}).then(s=>s.comments))}function C(e){const t=u();return l(()=>t.value.users[e],s=>{t.value.users[e]=s},()=>$fetch("/api/hn/user",{params:{id:e}}))}async function l(e,t,s,n){const a=_({get:e,set:t}),o=d(!1);return a.value==null&&(n!=null&&(a.value=n),(async()=>{try{o.value=!0;const r=await s();a.value!=null?a.value=Object.assign(a.value,r):a.value=r}catch(r){console.error(r),a.value=void 0}finally{o.value=!1}})()),g({loading:o,data:a})}export{k as _,S as a,A as b,C as c,O as f,$ as g,E as h,F as i,B as t,u};