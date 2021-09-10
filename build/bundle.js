var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,c;function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function p(){return m(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t){c=t}const v=[],$=[],b=[],y=[],w=Promise.resolve();let _=!1;function k(t){b.push(t)}let C=!1;const j=new Set;function S(){if(!C){C=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];h(e),A(e.$$)}for(h(null),v.length=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];j.has(e)||(j.add(e),e())}b.length=0}while(v.length);for(;y.length;)y.pop()();_=!1,C=!1,j.clear()}}function A(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const E=new Set;let L;function M(){L={r:0,c:[],p:L}}function R(){L.r||l(L.c),L=L.p}function H(t,e){t&&t.i&&(E.delete(t),t.i(e))}function T(t,e,n,l){if(t&&t.o){if(E.has(t))return;E.add(t),L.c.push((()=>{E.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function W(t){t&&t.c()}function q(t,n,i,r){const{fragment:c,on_mount:s,on_destroy:a,after_update:f}=t.$$;c&&c.m(n,i),r||k((()=>{const n=s.map(e).filter(o);a?a.push(...n):l(n),t.$$.on_mount=[]})),f.forEach(k)}function D(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,w.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,o,i,r,s,a,u,d=[-1]){const m=c;h(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:o.context||[]),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||m.$$.root};u&&u(p.root);let g=!1;if(p.ctx=i?i(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),g&&N(e,t)),n})):[],p.update(),g=!0,l(p.before_update),p.fragment=!!r&&r(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();o.intro&&H(e.$$.fragment),q(e,o.target,o.anchor,o.customElement),S()}h(m)}class B{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n,l,o,i,c,u,h,v,$,b=e[0].title+"",y=e[0].type+"";return{c(){var t,e;n=d("div"),l=d("img"),i=p(),c=d("div"),u=m(b),h=p(),v=d("div"),$=m(y),g(l,"class","portfolio-size object-cover mx-auto"),g(l,"alt","project"),t=l.src,e=o="https://via.placeholder.com/350",r||(r=document.createElement("a")),r.href=e,t!==r.href&&g(l,"src","https://via.placeholder.com/350"),g(c,"class","text-center text-4xl mt-8"),g(v,"class","text-center text-lg italic font-extralight mt-2"),g(n,"class","flex flex-col content-center mt-16")},m(t,e){a(t,n,e),s(n,l),s(n,i),s(n,c),s(c,u),s(n,h),s(n,v),s(v,$)},p(t,[e]){1&e&&b!==(b=t[0].title+"")&&x(u,b),1&e&&y!==(y=t[0].type+"")&&x($,y)},i:t,o:t,d(t){t&&f(n)}}}function P(t,e,n){let{data:l}=e;return t.$$set=t=>{"data"in t&&n(0,l=t.data)},[l]}class Q extends B{constructor(t){super(),O(this,t,P,G,i,{data:0})}}function U(t,e,n){const l=t.slice();return l[1]=e[n],l}function V(t){let e,n,l,o,i=t[1]+"";return{c(){e=d("div"),n=m("└ "),l=d("span"),o=m(i),g(l,"class","text-2xl"),g(e,"class","text-4xl ml-2")},m(t,i){a(t,e,i),s(e,n),s(e,l),s(l,o)},p(t,e){1&e&&i!==(i=t[1]+"")&&x(o,i)},d(t){t&&f(e)}}}function I(e){let n,l,o,i,r=e[0].title+"",c=e[0].list,h=[];for(let t=0;t<c.length;t+=1)h[t]=V(U(e,c,t));return{c(){n=d("div"),l=d("div"),o=m(r),i=p();for(let t=0;t<h.length;t+=1)h[t].c();g(l,"class","text-4xl font-bold mb-2"),g(n,"class","my-6")},m(t,e){a(t,n,e),s(n,l),s(l,o),s(n,i);for(let t=0;t<h.length;t+=1)h[t].m(n,null)},p(t,[e]){if(1&e&&r!==(r=t[0].title+"")&&x(o,r),1&e){let l;for(c=t[0].list,l=0;l<c.length;l+=1){const o=U(t,c,l);h[l]?h[l].p(o,e):(h[l]=V(o),h[l].c(),h[l].m(n,null))}for(;l<h.length;l+=1)h[l].d(1);h.length=c.length}},i:t,o:t,d(t){t&&f(n),u(h,t)}}}function z(t,e,n){let{data:l}=e;return t.$$set=t=>{"data"in t&&n(0,l=t.data)},[l]}class J extends B{constructor(t){super(),O(this,t,z,I,i,{data:0})}}var K=["I'm graduating from University of British Columbia class of 2023","Looking forward to learning new things."],F=[{title:"Modern Waiter",type:"Android Restaurant Ordering System"},{title:"SpellRise",type:"Unity 2D Game"},{title:"Chess Website",type:"React Chess Website"},{title:"Virtual Wardrobe",type:"AR IOS Application"}],X=[{title:"💻 Web Dev",list:["Node","React","Express","GraphQL","SQL","HTML + CSS"]},{title:"⚙ Deployment",list:["AWS","Docker","Kubernetes","Jenkins","Helm Chart"]},{title:"🎮 Game Dev",list:["Unity","C#","C++"]}];function Y(t,e,n){const l=t.slice();return l[0]=e[n],l}function Z(t,e,n){const l=t.slice();return l[3]=e[n],l}function tt(e){let n,l;return n=new Q({props:{data:e[3]}}),{c(){W(n.$$.fragment)},m(t,e){q(n,t,e),l=!0},p:t,i(t){l||(H(n.$$.fragment,t),l=!0)},o(t){T(n.$$.fragment,t),l=!1},d(t){D(n,t)}}}function et(e){let n,l;return n=new J({props:{data:e[0]}}),{c(){W(n.$$.fragment)},m(t,e){q(n,t,e),l=!0},p:t,i(t){l||(H(n.$$.fragment,t),l=!0)},o(t){T(n.$$.fragment,t),l=!1},d(t){D(n,t)}}}function nt(t){let e,n,l,o,i,r,c,m,x,h,v,$,b,y,w,_,k,C,j,S,A,E,L,W,q,D,N,O,B,G,P=F,Q=[];for(let e=0;e<P.length;e+=1)Q[e]=tt(Z(t,P,e));const U=t=>T(Q[t],1,1,(()=>{Q[t]=null}));let V=X,I=[];for(let e=0;e<V.length;e+=1)I[e]=et(Y(t,V,e));const z=t=>T(I[t],1,1,(()=>{I[t]=null}));return{c(){e=d("div"),e.innerHTML='<div class="flex w-full py-5 bg-orange bg-opacity-80"><div class="flex-grow flex justify-center content-center text-4xl my-auto"><div class="bg-black rounded-full h-8 w-8 my-auto mr-2"></div> Vincent Sastra</div> \n\t\t<div class="flex-grow flex justify-evenly content-center text-2xl m-auto"><div>Skills</div> \n\t\t\t<div>Portfolio</div> \n\t\t\t<div>Contact</div> \n\t\t\t<div>Resume</div></div></div>',n=p(),l=d("div"),o=d("div"),i=d("div"),i.textContent="Hi, it's me",r=p(),c=d("div"),c.innerHTML='Vincent<div class="w-8 h-8 bg-orange rounded-full ml-2 mb-4 my-auto"></div>',m=p(),x=d("div"),x.textContent="A software developer",h=p(),v=d("div"),v.textContent=`${K[0]}`,$=p(),b=d("div"),b.textContent=`${K[1]}`,y=p(),w=d("div"),w.innerHTML='<div class="profile-picture" alt="me"></div>',_=p(),k=d("div"),C=d("div"),C.textContent="My Portfolio",j=p(),S=d("div");for(let t=0;t<Q.length;t+=1)Q[t].c();A=p(),E=d("div"),L=d("div"),W=d("div"),W.textContent="me, myself, and i",q=p(),D=d("div"),D.textContent="Nulla culpa et consequat commodo non amet voluptate aliquip id non cillum reprehenderit eu. Quis quis magna laboris aliquip excepteur anim pariatur dolor eiusmod. Reprehenderit do magna irure et.",N=p(),O=d("div"),B=d("div");for(let t=0;t<I.length;t+=1)I[t].c();g(e,"class","fixed w-full bg-white flex"),g(i,"class","text-6xl mb-8"),g(c,"class","text-9xl mb-8 flex"),g(x,"class","text-6xl mb-4 title-color"),g(v,"class","text-2xl"),g(b,"class","text-2xl"),g(o,"class","flex flex-col justify-center pl-16"),g(w,"class","flex flex-col min-w-0 justify-center"),g(l,"class","min-h-full min-w-full flex bg-black text-white justify-center pt-20"),g(C,"class","p-6 pl-st mt-12 text-6xl"),g(S,"class","grid portfolio-grid"),g(k,"class","min-w-full flex flex-col bg-white text-black pb-32"),g(W,"class","text-6xl mb-10 pl-st pr-52 pt-36"),g(D,"class","text-2xl pl-st pr-52"),g(L,"class","flex flex-col flex-grow flex-basis-0 skill-bg"),g(B,"class","grid grid-cols-2 grid-rows-2 my-auto"),g(O,"class","flex-grow flex-basis-0 flex justify-center"),g(E,"class","min-w-full min-h-full flex bg-white text-black")},m(t,f){a(t,e,f),a(t,n,f),a(t,l,f),s(l,o),s(o,i),s(o,r),s(o,c),s(o,m),s(o,x),s(o,h),s(o,v),s(o,$),s(o,b),s(l,y),s(l,w),a(t,_,f),a(t,k,f),s(k,C),s(k,j),s(k,S);for(let t=0;t<Q.length;t+=1)Q[t].m(S,null);a(t,A,f),a(t,E,f),s(E,L),s(L,W),s(L,q),s(L,D),s(E,N),s(E,O),s(O,B);for(let t=0;t<I.length;t+=1)I[t].m(B,null);G=!0},p(t,[e]){if(0&e){let n;for(P=F,n=0;n<P.length;n+=1){const l=Z(t,P,n);Q[n]?(Q[n].p(l,e),H(Q[n],1)):(Q[n]=tt(l),Q[n].c(),H(Q[n],1),Q[n].m(S,null))}for(M(),n=P.length;n<Q.length;n+=1)U(n);R()}if(0&e){let n;for(V=X,n=0;n<V.length;n+=1){const l=Y(t,V,n);I[n]?(I[n].p(l,e),H(I[n],1)):(I[n]=et(l),I[n].c(),H(I[n],1),I[n].m(B,null))}for(M(),n=V.length;n<I.length;n+=1)z(n);R()}},i(t){if(!G){for(let t=0;t<P.length;t+=1)H(Q[t]);for(let t=0;t<V.length;t+=1)H(I[t]);G=!0}},o(t){Q=Q.filter(Boolean);for(let t=0;t<Q.length;t+=1)T(Q[t]);I=I.filter(Boolean);for(let t=0;t<I.length;t+=1)T(I[t]);G=!1},d(t){t&&f(e),t&&f(n),t&&f(l),t&&f(_),t&&f(k),u(Q,t),t&&f(A),t&&f(E),u(I,t)}}}return new class extends B{constructor(t){super(),O(this,t,null,nt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map