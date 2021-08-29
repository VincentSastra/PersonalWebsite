var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function s(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(p)}function h(t){let e;return 0===f.size&&d(p),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}function m(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e.host?e:document}function v(t){const e=$("style");return function(t,e){m(t.head||t,e)}(g(t),e),e}function b(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function k(){return w(" ")}function _(){return w("")}function z(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}const C=new Set;let O,j=0;function M(t,e,n,o,r,i,l,c=0){const s=16.666/o;let a="{\n";for(let t=0;t<=1;t+=s){const o=e+(n-e)*i(t);a+=100*t+`%{${l(o,1-o)}}\n`}const u=a+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,f=g(t);C.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=v(t).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${r}ms 1 both`,j+=1,d}function P(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),j-=r,j||d((()=>{j||(C.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),C.clear())})))}function L(t){O=t}function R(){if(!O)throw new Error("Function called outside component initialization");return O}const A=[],F=[],H=[],N=[],D=Promise.resolve();let G=!1;function J(t){H.push(t)}let B=!1;const I=new Set;function W(){if(!B){B=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];L(e),q(e.$$)}for(L(null),A.length=0;F.length;)F.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];I.has(e)||(I.add(e),e())}H.length=0}while(A.length);for(;N.length;)N.pop()();G=!1,B=!1,I.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}let Q;function K(){return Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q}function U(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const V=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||r(X.c),X=X.p}function tt(t,e){t&&t.i&&(V.delete(t),t.i(e))}function et(t,e,n,o){if(t&&t.o){if(V.has(t))return;V.add(t),X.c.push((()=>{V.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const nt={duration:0};function ot(n,o,l,c){let s=o(n,l),a=c?0:1,d=null,f=null,p=null;function m(){p&&P(n,p)}function g(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(o){const{delay:i=0,duration:l=300,easing:c=e,tick:v=t,css:b}=s||nt,y={start:u()+i,b:o};o||(y.group=X,X.r+=1),d||f?f=y:(b&&(m(),p=M(n,a,o,l,i,c,b)),o&&v(0,1),d=g(y,l),J((()=>U(n,o,"start"))),h((t=>{if(f&&t>f.start&&(d=g(f,l),f=null,U(n,d.b,"start"),b&&(m(),p=M(n,a,d.b,d.duration,0,c,s.css))),d)if(t>=d.end)v(a=d.b,1-a),U(n,d.b,"end"),f||(d.b?m():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;a=d.a+d.d*c(e/d.duration),v(a,1-a)}return!(!d&&!f)})))}return{run(t){i(s)?K().then((()=>{s=s(),v(t)})):v(t)},end(){m(),d=f=null}}}const rt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function it(t){t&&t.c()}function lt(t,e,o,l){const{fragment:c,on_mount:s,on_destroy:a,after_update:u}=t.$$;c&&c.m(e,o),l||J((()=>{const e=s.map(n).filter(i);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(J)}function ct(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(A.push(t),G||(G=!0,D.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(e,n,i,l,c,s,a,u=[-1]){const d=O;L(e);const f=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(f.root);let p=!1;if(f.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&st(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&tt(e.$$.fragment),lt(e,n.target,n.anchor,n.customElement),W()}L(d)}class ut{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function dt(t){const e=t-1;return e*e*e+1}function ft(t){return--t*t*t*t*t+1}function pt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const i=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*i}}function ht(t,{delay:e=0,duration:n=400,easing:o=dt,x:r=0,y:i=0,opacity:l=0}={}){const c=getComputedStyle(t),s=+c.opacity,a="none"===c.transform?"":c.transform,u=s*(1-l);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*i}px);\n\t\t\topacity: ${s-u*e}`}}function mt(t,{delay:e=0,duration:n=400,easing:o=dt}={}){const r=getComputedStyle(t),i=+r.opacity,l=parseFloat(r.height),c=parseFloat(r.paddingTop),s=parseFloat(r.paddingBottom),a=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*i};height: ${t*l}px;padding-top: ${t*c}px;padding-bottom: ${t*s}px;margin-top: ${t*a}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function gt(t,e,n){const o=t.slice();return o[6]=e[n],o[13]=e,o[14]=n,o}function vt(t,e,n){const o=t.slice();return o[9]=e[n],o}function bt(t,e,n){const o=t.slice();return o[6]=e[n],o[8]=n,o}function yt(t,e,n){const o=t.slice();return o[9]=e[n],o}function xt(t,e,n){const o=t.slice();return o[6]=e[n],o[8]=n,o}function $t(e){let n,o=e[1],r=[];for(let t=0;t<o.length;t+=1)r[t]=_t(gt(e,o,t));return{c(){n=$("div");for(let t=0;t<r.length;t+=1)r[t].c();S(n,"class","flex flex-col text-white z-10 w-full max-w-lg")},m(t,e){b(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,e){if(2&e){let i;for(o=t[1],i=0;i<o.length;i+=1){const l=gt(t,o,i);r[i]?r[i].p(l,e):(r[i]=_t(l),r[i].c(),r[i].m(n,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=o.length}},i:t,o:t,d(t){t&&y(n),x(r,t)}}}function wt(t){let e,n,o,r,i,l,c,s=t[1],a=[];for(let e=0;e<s.length;e+=1)a[e]=zt(xt(t,s,e));let u=t[1],d=[];for(let e=0;e<u.length;e+=1)d[e]=Tt(bt(t,u,e));const f=t=>et(d[t],1,1,(()=>{d[t]=null}));return{c(){e=$("div"),n=$("div");for(let t=0;t<a.length;t+=1)a[t].c();o=k(),r=$("div"),r.innerHTML='<div class="absolute p-8 sm:p-14"><div class="bg-none table-size absolute border-8 z-0"></div></div>',i=k(),l=$("div");for(let t=0;t<d.length;t+=1)d[t].c();S(n,"class","flex flex-col z-10 mt-1 "),S(l,"class","bg-tertiary m-1 p-8 table-size z-10"),S(e,"class","flex flex-row text-white z-10")},m(t,s){b(t,e,s),m(e,n);for(let t=0;t<a.length;t+=1)a[t].m(n,null);m(e,o),m(e,r),m(e,i),m(e,l);for(let t=0;t<d.length;t+=1)d[t].m(l,null);c=!0},p(t,e){if(3&e){let o;for(s=t[1],o=0;o<s.length;o+=1){const r=xt(t,s,o);a[o]?a[o].p(r,e):(a[o]=zt(r),a[o].c(),a[o].m(n,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=s.length}if(3&e){let n;for(u=t[1],n=0;n<u.length;n+=1){const o=bt(t,u,n);d[n]?(d[n].p(o,e),tt(d[n],1)):(d[n]=Tt(o),d[n].c(),tt(d[n],1),d[n].m(l,null))}for(Y(),n=u.length;n<d.length;n+=1)f(n);Z()}},i(t){if(!c){for(let t=0;t<u.length;t+=1)tt(d[t]);c=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)et(d[t]);c=!1},d(t){t&&y(e),x(a,t),x(d,t)}}}function kt(t){let e,n,o=t[9]+"";return{c(){e=$("div"),n=w(o),S(e,"class","z-10")},m(t,o){b(t,e,o),m(e,n)},p(t,e){2&e&&o!==(o=t[9]+"")&&E(n,o)},d(t){t&&y(e)}}}function _t(t){let e,n,o,r,i,l,c,s,a=t[6].key+"";function u(){return t[5](t[6],t[13],t[14])}let d=t[6].value,f=[];for(let e=0;e<d.length;e+=1)f[e]=kt(vt(t,d,e));return{c(){e=$("div"),n=w(a),o=k(),r=$("div");for(let t=0;t<f.length;t+=1)f[t].c();i=k(),S(e,"class","p-2 bg-secondary z-10 w-full border-t-2 border-primary transition-all"),S(r,"class",l="border-l-8 border-secondary border-opacity-40 bg-tertiary p-2 transition-all overflow-hidden "+(t[6].active?"":"h-0 p-0"))},m(t,l){b(t,e,l),m(e,n),b(t,o,l),b(t,r,l);for(let t=0;t<f.length;t+=1)f[t].m(r,null);m(r,i),c||(s=z(e,"click",u),c=!0)},p(e,o){if(t=e,2&o&&a!==(a=t[6].key+"")&&E(n,a),2&o){let e;for(d=t[6].value,e=0;e<d.length;e+=1){const n=vt(t,d,e);f[e]?f[e].p(n,o):(f[e]=kt(n),f[e].c(),f[e].m(r,i))}for(;e<f.length;e+=1)f[e].d(1);f.length=d.length}2&o&&l!==(l="border-l-8 border-secondary border-opacity-40 bg-tertiary p-2 transition-all overflow-hidden "+(t[6].active?"":"h-0 p-0"))&&S(r,"class",l)},d(t){t&&y(e),t&&y(o),t&&y(r),x(f,t),c=!1,s()}}}function zt(t){let e,n,o,r,i,l,c=t[6].key+"";function s(){return t[4](t[8])}return{c(){e=$("div"),n=w(c),o=k(),S(e,"class",r="p-4 z-10 border-l-4 border-opacity-30 transition-all "+(t[0]===t[8]?"bg-secondary":"border-secondary "))},m(t,r){b(t,e,r),m(e,n),m(e,o),i||(l=z(e,"click",s),i=!0)},p(o,i){t=o,2&i&&c!==(c=t[6].key+"")&&E(n,c),1&i&&r!==(r="p-4 z-10 border-l-4 border-opacity-30 transition-all "+(t[0]===t[8]?"bg-secondary":"border-secondary "))&&S(e,"class",r)},d(t){t&&y(e),i=!1,l()}}}function St(t){let e,n,o=t[6].value,r=[];for(let e=0;e<o.length;e+=1)r[e]=Et(yt(t,o,e));const i=t=>et(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=_()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);b(t,e,o),n=!0},p(t,n){if(2&n){let l;for(o=t[6].value,l=0;l<o.length;l+=1){const i=yt(t,o,l);r[l]?(r[l].p(i,n),tt(r[l],1)):(r[l]=Et(i),r[l].c(),tt(r[l],1),r[l].m(e.parentNode,e))}for(Y(),l=o.length;l<r.length;l+=1)i(l);Z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)tt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)et(r[t]);n=!1},d(t){x(r,t),t&&y(e)}}}function Et(n){let o,l,c,s,a,d,f,p=n[9]+"";return{c(){o=$("div"),l=w("• "),c=w(p),s=k()},m(t,e){b(t,o,e),m(o,l),m(o,c),m(o,s),f=!0},p(t,e){(!f||2&e)&&p!==(p=t[9]+"")&&E(c,p)},i(n){f||(J((()=>{d&&d.end(1),a=function(n,o,r){let l,c,s=o(n,r),a=!1,d=0;function f(){l&&P(n,l)}function p(){const{delay:o=0,duration:r=300,easing:i=e,tick:p=t,css:m}=s||nt;m&&(l=M(n,0,1,r,o,i,m,d++)),p(0,1);const g=u()+o,v=g+r;c&&c.abort(),a=!0,J((()=>U(n,!0,"start"))),c=h((t=>{if(a){if(t>=v)return p(1,0),U(n,!0,"end"),f(),a=!1;if(t>=g){const e=i((t-g)/r);p(e,1-e)}}return a}))}let m=!1;return{start(){m||(m=!0,P(n),i(s)?(s=s(),K().then(p)):p())},invalidate(){m=!1},end(){a&&(f(),a=!1)}}}(o,ht,{y:200,duration:1e3}),a.start()})),f=!0)},o(n){a&&a.invalidate(),d=function(n,o,l){let c,s=o(n,l),a=!0;const d=X;function f(){const{delay:o=0,duration:i=300,easing:l=e,tick:f=t,css:p}=s||nt;p&&(c=M(n,1,0,i,o,l,p));const m=u()+o,g=m+i;J((()=>U(n,!1,"start"))),h((t=>{if(a){if(t>=g)return f(0,1),U(n,!1,"end"),--d.r||r(d.c),!1;if(t>=m){const e=l((t-m)/i);f(1-e,e)}}return a}))}return d.r+=1,i(s)?K().then((()=>{s=s(),f()})):f(),{end(t){t&&s.tick&&s.tick(1,0),a&&(c&&P(n,c),a=!1)}}}(o,pt,{}),f=!1},d(t){t&&y(o),t&&d&&d.end()}}}function Tt(t){let e,n,o,r=t[8]===t[0]&&St(t);return{c(){e=$("div"),r&&r.c(),n=k(),S(e,"class","absolute table-size h-auto grid grid-cols-2 place-content-evenly")},m(t,i){b(t,e,i),r&&r.m(e,null),m(e,n),o=!0},p(t,o){t[8]===t[0]?r?(r.p(t,o),1&o&&tt(r,1)):(r=St(t),r.c(),tt(r,1),r.m(e,n)):r&&(Y(),et(r,1,1,(()=>{r=null})),Z())},i(t){o||(tt(r),o=!0)},o(t){et(r),o=!1},d(t){t&&y(e),r&&r.d()}}}function Ct(t){let e,n,o,r,i,l;J(t[3]);const c=[wt,$t],s=[];function a(t,e){return t[2]>1100?0:1}return e=a(t),n=s[e]=c[e](t),{c(){n.c(),o=_()},m(n,c){s[e].m(n,c),b(n,o,c),r=!0,i||(l=z(window,"resize",t[3]),i=!0)},p(t,[r]){let i=e;e=a(t),e===i?s[e].p(t,r):(Y(),et(s[i],1,1,(()=>{s[i]=null})),Z(),n=s[e],n?n.p(t,r):(n=s[e]=c[e](t),n.c()),tt(n,1),n.m(o.parentNode,o))},i(t){r||(tt(n),r=!0)},o(t){et(n),r=!1},d(t){s[e].d(t),t&&y(o),i=!1,l()}}}function Ot(t,e,n){let o=0,r=[{key:"General Skills",value:["JavaScript","SQL","AWS","Linux","Git"],active:!0},{key:"Programming Language",value:["JavaScript","Java","Python","C#","Golang","HTML","CSS"],active:!1},{key:"Web Development",value:["React","Node","JavaScript","HTML","CSS","GraphQL","Svelte","SCSS","Tailwind"],active:!1},{key:"Automation and Deployment",value:["Jenkins","Docker","Kubernetes","Helm Chart","AWS","Linux"],active:!1},{key:"Game Development",value:["Unity","C#"],active:!1},{key:"Mobile Development",value:["Android","iOS","Flutter"],active:!1}],i=0;return[o,r,i,function(){n(2,i=window.outerWidth)},t=>n(0,o=t),(t,e,o)=>n(1,e[o].active=!t.active,r)]}class jt extends ut{constructor(t){super(),at(this,t,Ot,Ct,l,{})}}const{window:Mt}=rt,Pt=t=>({percent:2&t,unobserve:4&t,intersectionObserverSupport:8&t}),Lt=t=>({percent:t[1],unobserve:t[2],intersectionObserverSupport:t[3]});function Rt(t){let e,n,o,r;J(t[12]);const i=t[11].default,l=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(i,t,t[10],Lt);return{c(){e=$("div"),l&&l.c()},m(i,c){b(i,e,c),l&&l.m(e,null),t[13](e),n=!0,o||(r=z(Mt,"resize",t[12]),o=!0)},p(t,[e]){l&&l.p&&(!n||1038&e)&&function(t,e,n,o,r,i){if(r){const l=s(e,n,o,i);t.p(l,r)}}(l,i,t,t[10],n?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(i,t[10],e,Pt):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[10]),Lt)},i(t){n||(tt(l,t),n=!0)},o(t){et(l,t),n=!1},d(n){n&&y(e),l&&l.d(n),t[13](null),o=!1,r()}}}function At(t){return[...Array(t).keys()].map((e=>e/t))}function Ft(t,e,n){let o,r,i,{$$slots:l={},$$scope:c}=e,{top:s=0}=e,{bottom:a=0}=e,{left:u=0}=e,{right:d=0}=e,{steps:f=100}=e,p=()=>{},h=!1;function m(t){t.forEach((t=>{console.log(v),console.log(t.intersectionRect),n(1,r=Math.round(Math.ceil(100*Math.max(t.intersectionRatio,t.intersectionRect.height/v))))}))}var g;g=()=>{n(3,h="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype);const t={rootMargin:`${s}px ${d}px ${a}px ${u}px`,threshold:At(f)};return h&&(i=new IntersectionObserver(m,t),i.observe(o),n(2,p=()=>i.unobserve(o))),p},R().$$.on_mount.push(g);let v=0;return t.$$set=t=>{"top"in t&&n(5,s=t.top),"bottom"in t&&n(6,a=t.bottom),"left"in t&&n(7,u=t.left),"right"in t&&n(8,d=t.right),"steps"in t&&n(9,f=t.steps),"$$scope"in t&&n(10,c=t.$$scope)},[o,r,p,h,v,s,a,u,d,f,c,l,function(){n(4,v=Mt.outerHeight)},function(t){F[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}class Ht extends ut{constructor(t){super(),at(this,t,Ft,Rt,l,{top:5,bottom:6,left:7,right:8,steps:9})}}function Nt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Dt(t){let e,n,o;return{c(){e=$("div"),e.innerHTML='<div class="flex-grow content-center flex"><div class="text-white m-auto flex flex-grow flex-col max-w-4xl 2xl:mr-20"><div class="text-5xl md:text-8xl pb-6 md:pb-12 2xl:pl-16">Hi, I&#39;m</div> \n\t\t\t\t\t<div class="text-6xl md:text-9xl pb-6 md:pb-12 2xl:pl-36 font-extrabold text-center 2xl:text-left max-w-4xl futura-bold">Vincent!</div> \n\t\t\t\t\t<div class="text-xl pb-6 md:pb-12 md:text-4xl font-sans max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n\t\t\t\t\t\tsed do eiusmod tempor incididunt ut labore et dolore\n\t\t\t\t\t\tmagna aliqua.</div> \n\t\t\t\t\t<div class="pb-12 md:pb-24 flex-row flex justify-evenly 2xl:justify-start w-full"><div class="icon-size"><i class="fab fa-github fa-3x 2xl:pr-8"></i></div> \n\t\t\t\t\t\t<div class="icon-size"><i class="fab fa-linkedin fa-3x 2xl:pr-8"></i></div> \n\t\t\t\t\t\t<div class="icon-size"><i class="fas fa-inbox fa-3x 2xl:pr-8"></i></div></div></div></div> \n\t\t\t<div class="flex-grow content-center flex photo-size mb-16 mr-16"><div class="m-auto pl-12 pt-16 photo-size relative"><div class="photo-size bg-primary"><div class="border-8 border-white photo-size relative -top-6 right-6 z-10"><img class="photo-size object-cover -top-8 right-6 relative z-20" src="ProfilePhoto.JPG" alt="profile"/></div></div></div></div>',S(e,"class","flex-col 2xl:flex-row flex-nowrap flex m-auto")},m(t,n){b(t,e,n),o=!0},p(t,e){},i(t){o||(J((()=>{n||(n=ot(e,mt,{delay:0,duration:2e3,easing:ft},!0)),n.run(1)})),o=!0)},o(t){n||(n=ot(e,mt,{delay:0,duration:2e3,easing:ft},!1)),n.run(0),o=!1},d(t){t&&y(e),t&&n&&n.end()}}}function Gt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Jt(t){let e,n,o;return n=new jt({}),{c(){e=$("div"),it(n.$$.fragment),T(e,"opacity",t[2]/40-1)},m(t,r){b(t,e,r),lt(n,e,null),o=!0},p(t,n){(!o||4&n)&&T(e,"opacity",t[2]/40-1)},i(t){o||(tt(n.$$.fragment,t),o=!0)},o(t){et(n.$$.fragment,t),o=!1},d(t){t&&y(e),ct(n)}}}function Bt(t){let e,n,o,r,i,l,s,a,u,d,f,p,h,g,v,x,w,_,E,C,O,j,M,P,A=!1,F=()=>{A=!1};J(t[1]);let H={ctx:t,current:null,token:null,hasCatch:!1,pending:Gt,then:Dt,catch:Nt,value:5,blocks:[,,,]};return function(t,e){const n=e.token={};function o(t,o,r,i){if(e.token!==n)return;e.resolved=i;let l=e.ctx;void 0!==r&&(l=l.slice(),l[r]=i);const c=t&&(e.current=t)(l);let s=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(Y(),et(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),Z())})):e.block.d(1),c.c(),tt(c,1),c.m(e.mount(),e.anchor),s=!0),e.block=c,e.blocks&&(e.blocks[o]=c),s&&W()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=R();if(t.then((t=>{L(n),o(e.then,1,e.value,t),L(null)}),(t=>{if(L(n),o(e.catch,2,e.error,t),L(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}(new Promise((async t=>{let e=new Image;e.onload=t,e.src="ProfilePhoto.JPG"})),H),E=new Ht({props:{steps:100,$$slots:{default:[Jt,({percent:t,unobserve:e,intersectionObserverSupport:n})=>({2:t,3:e,4:n}),({percent:t,unobserve:e,intersectionObserverSupport:n})=>(t?4:0)|(e?8:0)|(n?16:0)]},$$scope:{ctx:t}}}),{c(){var e,m;n=$("script"),r=k(),i=$("link"),l=k(),s=$("link"),a=k(),u=$("link"),d=k(),f=$("div"),f.innerHTML='<div class="navigation-button">Skills</div> \n\t<div class="navigation-button">Portfolio</div> \n\t<div class="navigation-button">Contact</div> \n\t<div class="navigation-button">Resume</div>',p=k(),h=$("div"),H.block.c(),g=k(),v=$("div"),x=$("div"),x.innerHTML='<i class="fas fa-arrow-down text-5xl flex h-12 my-4 lg:h-24 lg:text-8xl lg:my-4 "></i>',w=k(),_=$("div"),it(E.$$.fragment),C=k(),O=$("div"),e=n.src,m=o="https://kit.fontawesome.com/b43798ce01.js",c||(c=document.createElement("a")),c.href=m,e!==c.href&&S(n,"src","https://kit.fontawesome.com/b43798ce01.js"),S(n,"crossorigin","anonymous"),S(i,"rel","preconnect"),S(i,"href","https://fonts.googleapis.com"),S(s,"rel","preconnect"),S(s,"href","https://fonts.gstatic.com"),S(s,"crossorigin",""),S(u,"href","https://fonts.googleapis.com/css2?family=Poppins&display=swap"),S(u,"rel","stylesheet"),S(f,"class","text-white z-50 flex flex-row justify-end fixed w-screen top-0 pr-4"),S(h,"class","flex content-center p-12 md:p-24 2xl:my-0 min-h-screen"),S(x,"class","bg-primary flex justify-center content-center border-2 rounded-full w-20 h-20 -mt-32 lg:w-32 lg:h-32 lg:-mt-48"),T(v,"opacity",(100-t[0])/100),S(v,"class","fixed top-full w-full flex flex-row justify-center z-40"),S(_,"class","flex content-center p-12 md:p-24 2xl:my-0 2xl:h-screen bg-primary justify-center"),S(O,"class","h-screen bg-secondary")},m(o,c){m(document.head,n),b(o,r,c),b(o,i,c),b(o,l,c),b(o,s,c),b(o,a,c),b(o,u,c),b(o,d,c),b(o,f,c),b(o,p,c),b(o,h,c),H.block.m(h,H.anchor=null),H.mount=()=>h,H.anchor=null,b(o,g,c),b(o,v,c),m(v,x),b(o,w,c),b(o,_,c),lt(E,_,null),b(o,C,c),b(o,O,c),j=!0,M||(P=z(window,"scroll",(()=>{A=!0,clearTimeout(e),e=setTimeout(F,100),t[1]()})),M=!0)},p(n,[o]){t=n,1&o&&!A&&(A=!0,clearTimeout(e),scrollTo(window.pageXOffset,t[0]),e=setTimeout(F,100)),function(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}(H,t,o),(!j||1&o)&&T(v,"opacity",(100-t[0])/100);const r={};68&o&&(r.$$scope={dirty:o,ctx:t}),E.$set(r)},i(t){j||(tt(H.block),tt(E.$$.fragment,t),j=!0)},o(t){for(let t=0;t<3;t+=1){et(H.blocks[t])}et(E.$$.fragment,t),j=!1},d(t){y(n),t&&y(r),t&&y(i),t&&y(l),t&&y(s),t&&y(a),t&&y(u),t&&y(d),t&&y(f),t&&y(p),t&&y(h),H.block.d(),H.token=null,H=null,t&&y(g),t&&y(v),t&&y(w),t&&y(_),ct(E),t&&y(C),t&&y(O),M=!1,P()}}}function It(t,e,n){let o;return[o,function(){n(0,o=window.pageYOffset)}]}return new class extends ut{constructor(t){super(),at(this,t,It,Bt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
