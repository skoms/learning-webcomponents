let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),r=(e,t,n)=>{n&&n.map((([n,l,s])=>{const c=u(e,n),i=a(t,s),r=f(n);o.ael(c,l,i,r),(t.o=t.o||[]).push((()=>o.rel(c,l,i,r)))}))},a=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){J(e)}},u=(e,t)=>16&t?s.body:e,f=e=>0!=(2&e),d=new WeakMap,h=e=>"sc-"+e.h,p={},m=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!m(l))&&(l+=""),s&&o?c[c.length-1].p+=l:c.push(s?y(null,l):l),o=s)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const r=y(e,null);return r.m=t,c.length>0&&(r.$=c),r},y=(e,t)=>({t:0,S:e,p:t,g:null,$:null,m:null}),b={},w=(e,t,n,s,c,i)=>{if(n!==s){let r=I(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,l=g(n),o=g(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if("ref"===t)s&&s(e);else if(r||"o"!==t[0]||"n"!==t[1]){const l=m(s);if((r||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?r=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&i||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):I(l,a)?a.slice(2):a[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},S=/\s/,g=e=>e?e.split(S):[],j=(e,t,n,l)=>{const s=11===t.g.nodeType&&t.g.host?t.g.host:t.g,o=e&&e.m||p,c=t.m||p;for(l in o)l in c||w(s,l,o[l],void 0,n,t.t);for(l in c)w(s,l,o[l],c[l],n,t.t)},v=(t,n,l)=>{let o,c,i=n.$[l],r=0;if(null!==i.p)o=i.g=s.createTextNode(i.p);else if(o=i.g=s.createElement(i.S),j(null,i,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),i.$)for(r=0;r<i.$.length;++r)c=v(t,i,r),c&&o.appendChild(c);return o},M=(e,n,l,s,o,c)=>{let i,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);o<=c;++o)s[o]&&(i=v(null,l,o),i&&(s[o].g=i,r.insertBefore(i,n)))},k=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.g,P(l),s.remove())},C=(e,t)=>e.S===t.S,O=(e,t)=>{const n=t.g=e.g,l=e.$,s=t.$,o=t.p;null===o?("slot"===t.S||j(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,i=t.length-1,r=t[0],a=t[i],u=l.length-1,f=l[0],d=l[u];for(;o<=i&&c<=u;)null==r?r=t[++o]:null==a?a=t[--i]:null==f?f=l[++c]:null==d?d=l[--u]:C(r,f)?(O(r,f),r=t[++o],f=l[++c]):C(a,d)?(O(a,d),a=t[--i],d=l[--u]):C(r,d)?(O(r,d),e.insertBefore(r.g,a.g.nextSibling),r=t[++o],d=l[--u]):C(a,f)?(O(a,f),e.insertBefore(a.g,r.g),a=t[--i],f=l[++c]):(s=v(t&&t[c],n,c),f=l[++c],s&&r.g.parentNode.insertBefore(s,r.g));o>i?M(e,null==l[u+1]?null:l[u+1].g,n,l,c,u):c>u&&k(t,o,i)})(n,l,t,s):null!==s?(null!==e.p&&(n.textContent=""),M(n,null,t,s,0,s.length-1)):null!==l&&k(l,0,l.length-1)):e.p!==o&&(n.data=o)},P=e=>{e.m&&e.m.ref&&e.m.ref(null),e.$&&e.$.map(P)},L=(e,t,n)=>{const l=(e=>z(e).j)(e);return{emit:e=>U(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},U=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},W=(e,t)=>{t&&!e.v&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.v=t)))},x=(e,t)=>{if(e.t|=16,!(4&e.t))return W(e,e.M),se((()=>E(e,t)));e.t|=512},E=(e,t)=>{const n=e.i;let l;return t?(e.t|=256,e.u&&(e.u.map((([e,t])=>R(n,e,t))),e.u=null),l=R(n,"componentWillLoad")):l=R(n,"componentWillUpdate"),q(l,(()=>T(e,n,t)))},T=async(e,t,n)=>{const l=e.j,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.j,l=t.t,o=((e,t)=>{let n=h(t),l=X.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=d.get(e=e.head||e);o||d.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);A(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>D(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},A=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.j,o=n.k,c=n.C||y(null,null),i=(e=>e&&e.S===b)(l)?l:$(null,null,l);t=s.tagName,o.O&&(i.m=i.m||{},o.O.map((([e,t])=>i.m[t]=s[e]))),i.S=null,i.t|=4,n.C=i,i.g=c.g=s.shadowRoot||s,e=s["s-sc"],O(c,i)})(n,l)}catch(e){J(e,n.j)}return null},D=e=>{const t=e.j,n=e.i,l=e.M;64&e.t?R(n,"componentDidUpdate"):(e.t|=64,F(t),R(n,"componentDidLoad"),e.P(t),l||H()),e.L(t),e.v&&(e.v(),e.v=void 0),512&e.t&&le((()=>x(e,!1))),e.t&=-517},H=()=>{F(s.documentElement),le((()=>U(l,"appload",{detail:{namespace:"stencil-webcomponents"}})))},R=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){J(e)}},q=(e,t)=>e&&e.then?e.then(t):t(),F=e=>e.classList.add("hydrated"),N=(e,t,n)=>{if(t.U){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.U),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>z(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=z(e),o=s.j,c=s.T.get(t),i=s.t,r=s.i;if(n=((e,t)=>null==e||m(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.U[t][0]),!(8&i&&void 0!==c||n===c)&&(s.T.set(t,n),r)){if(l.W&&128&i){const e=l.W[t];e&&e.map((e=>{try{r[e](n,c,t)}catch(e){J(e,o)}}))}2==(18&i)&&x(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=z(this);return n.A.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.O.push([e,s]),s}))}}return e},V=(e,t={})=>{const n=[],c=t.exclude||[],a=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),d=s.createElement("style"),p=[];let m,$=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],h:t[1],U:t[2],D:t[3]};l.U=t[2],l.D=t[3],l.O=[],l.W={};const s=l.h,u=class extends HTMLElement{constructor(e){super(e),G(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),$?p.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=z(e),n=t.k,l=()=>{};if(1&t.t)r(e,t,n.D);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){W(t,t.M=n);break}}n.U&&Object.entries(n.U).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=Q(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.W=s.watchers,N(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){J(e)}t.t&=-9,t.t|=128,e()}if(s.style){let e=s.style;const t=h(n);if(!X.has(t)){const l=()=>{};((e,t,n)=>{let l=X.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,X.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,c=()=>x(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{if(0==(1&o.t)){const e=z(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),R(t,"disconnectedCallback")}})()))}componentOnReady(){return z(this).H}};l.R=e[0],c.includes(s)||a.get(s)||(n.push(s),a.define(s,N(u,l,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u.insertBefore(d,f?f.nextSibling:u.firstChild),$=!1,p.length?p.map((e=>e.connectedCallback())):o.jmp((()=>m=setTimeout(H,30)))},_=new WeakMap,z=e=>_.get(e),B=(e,t)=>_.set(t.i=e,t),G=(e,t)=>{const n={t:0,j:e,k:t,T:new Map};return n.A=new Promise((e=>n.L=e)),n.H=new Promise((e=>n.P=e)),e["s-p"]=[],e["s-rc"]=[],r(e,n,t.D),_.set(e,n)},I=(e,t)=>t in e,J=(e,t)=>(0,console.error)(e,t),K=new Map,Q=e=>{const t=e.h.replace(/-/g,"_"),n=e.R,l=K.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(K.set(n,e),e[t])),J)},X=new Map,Y=[],Z=[],ee=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?le(ne):o.raf(ne))},te=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){J(e)}e.length=0},ne=()=>{te(Y),te(Z),(n=Y.length>0)&&o.raf(ne)},le=e=>c().then(e),se=ee(Z,!0);export{b as H,V as b,L as c,$ as h,c as p,B as r}