!function(){var t={612:function(t){var e;self,e=()=>(()=>{"use strict";var t={d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.d(e,{default:()=>A});var n={};function s(t,e,n,s,o={}){e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]);for(const r of e)for(const e of n)r[t](e,s,{capture:!1,...o});return Array.prototype.slice.call(arguments,1)}t.r(n),t.d(n,{adjustableInputNumbers:()=>h,createElementFromString:()=>i,createFromTemplate:()=>a,eventPath:()=>c,off:()=>r,on:()=>o,resolveElement:()=>l});const o=s.bind(null,"addEventListener"),r=s.bind(null,"removeEventListener");function i(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function a(t){const e=(t,e)=>{const n=t.getAttribute(e);return t.removeAttribute(e),n},n=(t,s={})=>{const o=e(t,":obj"),r=e(t,":ref"),i=o?s[o]={}:s;r&&(s[r]=t);for(const s of Array.from(t.children)){const t=e(s,":arr"),o=n(s,t?{}:i);t&&(i[t]||(i[t]=[])).push(Object.keys(o).length?o:s)}return s};return n(i(t))}function c(t){let e=t.path||t.composedPath&&t.composedPath();if(e)return e;let n=t.target.parentElement;for(e=[t.target,n];n=n.parentElement;)e.push(n);return e.push(document,window),e}function l(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce(((t,e,n,s)=>(t=t.querySelector(e),n<s.length-1?t.shadowRoot:t)),document):null}function h(t,e=(t=>t)){function n(n){const s=[.001,.01,.1][Number(n.shiftKey||2*n.ctrlKey)]*(n.deltaY<0?1:-1);let o=0,r=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,((t,n)=>n<=r&&n+t.length>=r?(r=n,e(Number(t),s,o)):(o++,t))),t.focus(),t.setSelectionRange(r,r),n.preventDefault(),t.dispatchEvent(new Event("input"))}o(t,"focus",(()=>o(window,"wheel",n,{passive:!1}))),o(t,"blur",(()=>r(window,"wheel",n)))}const{min:d,max:u,floor:p,round:v}=Math;function g(t,e,n){e/=100,n/=100;const s=p(t=t/360*6),o=t-s,r=n*(1-e),i=n*(1-o*e),a=n*(1-(1-o)*e),c=s%6;return[255*[n,i,r,r,a,n][c],255*[a,n,n,i,r,r][c],255*[r,r,a,n,n,i][c]]}function m(t,e,n){const s=(2-(e/=100))*(n/=100)/2;return 0!==s&&(e=1===s?0:s<.5?e*n/(2*s):e*n/(2-2*s)),[t,100*e,100*s]}function b(t,e,n){const s=d(t/=255,e/=255,n/=255),o=u(t,e,n),r=o-s;let i,a;if(0===r)i=a=0;else{a=r/o;const s=((o-t)/6+r/2)/r,c=((o-e)/6+r/2)/r,l=((o-n)/6+r/2)/r;t===o?i=l-c:e===o?i=1/3+s-l:n===o&&(i=2/3+c-s),i<0?i+=1:i>1&&(i-=1)}return[360*i,100*a,100*o]}function f(t,e,n,s){return e/=100,n/=100,[...b(255*(1-d(1,(t/=100)*(1-(s/=100))+s)),255*(1-d(1,e*(1-s)+s)),255*(1-d(1,n*(1-s)+s)))]}function y(t,e,n){e/=100;const s=2*(e*=(n/=100)<.5?n:1-n)/(n+e)*100,o=100*(n+e);return[t,isNaN(s)?0:s,o]}function w(t){return b(...t.match(/.{2}/g).map((t=>parseInt(t,16))))}function _(t=0,e=0,n=0,s=1){const o=(t,e)=>(n=-1)=>e(~n?t.map((t=>Number(t.toFixed(n)))):t),r={h:t,s:e,v:n,a:s,toHSVA(){const t=[r.h,r.s,r.v,r.a];return t.toString=o(t,(t=>`hsva(${t[0]}, ${t[1]}%, ${t[2]}%, ${r.a})`)),t},toHSLA(){const t=[...m(r.h,r.s,r.v),r.a];return t.toString=o(t,(t=>`hsla(${t[0]}, ${t[1]}%, ${t[2]}%, ${r.a})`)),t},toRGBA(){const t=[...g(r.h,r.s,r.v),r.a];return t.toString=o(t,(t=>`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${r.a})`)),t},toCMYK(){const t=function(t,e,n){const s=g(t,e,n),o=s[0]/255,r=s[1]/255,i=s[2]/255,a=d(1-o,1-r,1-i);return[100*(1===a?0:(1-o-a)/(1-a)),100*(1===a?0:(1-r-a)/(1-a)),100*(1===a?0:(1-i-a)/(1-a)),100*a]}(r.h,r.s,r.v);return t.toString=o(t,(t=>`cmyk(${t[0]}%, ${t[1]}%, ${t[2]}%, ${t[3]}%)`)),t},toHEXA(){const t=function(t,e,n){return g(t,e,n).map((t=>v(t).toString(16).padStart(2,"0")))}(r.h,r.s,r.v),e=r.a>=1?"":Number((255*r.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=()=>`#${t.join("").toUpperCase()}`,t},clone:()=>_(r.h,r.s,r.v,r.a)};return r}const C=t=>Math.max(Math.min(t,1),0);function H(t){const e={options:Object.assign({lock:null,onchange:()=>0,onstop:()=>0},t),_keyboard(t){const{options:n}=e,{type:s,key:o}=t;if(document.activeElement===n.wrapper){const{lock:n}=e.options,r="ArrowUp"===o,i="ArrowRight"===o,a="ArrowDown"===o,c="ArrowLeft"===o;if("keydown"===s&&(r||i||a||c)){let s=0,o=0;"v"===n?s=r||i?1:-1:"h"===n?s=r||i?-1:1:(o=r?-1:a?1:0,s=c?-1:i?1:0),e.update(C(e.cache.x+.01*s),C(e.cache.y+.01*o)),t.preventDefault()}else o.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart(t){o(document,["mouseup","touchend","touchcancel"],e._tapstop),o(document,["mousemove","touchmove"],e._tapmove),t.cancelable&&t.preventDefault(),e._tapmove(t)},_tapmove(t){const{options:n,cache:s}=e,{lock:o,element:r,wrapper:i}=n,a=i.getBoundingClientRect();let c=0,l=0;if(t){const e=t&&t.touches&&t.touches[0];c=t?(e||t).clientX:0,l=t?(e||t).clientY:0,c<a.left?c=a.left:c>a.left+a.width&&(c=a.left+a.width),l<a.top?l=a.top:l>a.top+a.height&&(l=a.top+a.height),c-=a.left,l-=a.top}else s&&(c=s.x*a.width,l=s.y*a.height);"h"!==o&&(r.style.left=`calc(${c/a.width*100}% - ${r.offsetWidth/2}px)`),"v"!==o&&(r.style.top=`calc(${l/a.height*100}% - ${r.offsetHeight/2}px)`),e.cache={x:c/a.width,y:l/a.height};const h=C(c/a.width),d=C(l/a.height);switch(o){case"v":return n.onchange(h);case"h":return n.onchange(d);default:return n.onchange(h,d)}},_tapstop(){e.options.onstop(),r(document,["mouseup","touchend","touchcancel"],e._tapstop),r(document,["mousemove","touchmove"],e._tapmove)},trigger(){e._tapmove()},update(t=0,n=0){const{left:s,top:o,width:r,height:i}=e.options.wrapper.getBoundingClientRect();"h"===e.options.lock&&(n=t),e._tapmove({clientX:s+r*t,clientY:o+i*n})},destroy(){const{options:t,_tapstart:n,_keyboard:s}=e;r(document,["keydown","keyup"],s),r([t.wrapper,t.element],"mousedown",n),r([t.wrapper,t.element],"touchstart",n,{passive:!1})}},{options:n,_tapstart:s,_keyboard:i}=e;return o([n.wrapper,n.element],"mousedown",s),o([n.wrapper,n.element],"touchstart",s,{passive:!1}),o(document,["keydown","keyup"],i),e}function k(t={}){t=Object.assign({onchange:()=>0,className:"",elements:[]},t);const e=o(t.elements,"click",(e=>{t.elements.forEach((n=>n.classList[e.target===n?"add":"remove"](t.className))),t.onchange(e),e.stopPropagation()}));return{destroy:()=>r(...e)}}const S={variantFlipOrder:{start:"sme",middle:"mse",end:"ems"},positionFlipOrder:{top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},position:"bottom",margin:8,padding:0};class A{static utils=n;static version="1.9.0";static I18N_DEFAULTS={"ui:dialog":"color picker dialog","btn:toggle":"toggle color picker dialog","btn:swatch":"color swatch","btn:last-color":"use previous color","btn:save":"Save","btn:cancel":"Cancel","btn:clear":"Clear","aria:btn:save":"save and close","aria:btn:cancel":"cancel and close","aria:btn:clear":"clear and close","aria:input":"color input field","aria:palette":"color selection area","aria:hue":"hue selection slider","aria:opacity":"selection slider"};static DEFAULT_OPTIONS={appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},i18n:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"};_initializingActive=!0;_recalc=!0;_nanopop=null;_root=null;_color=_();_lastColor=_();_swatchColors=[];_setupAnimationFrame=null;_eventListener={init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]};constructor(t){this.options=t=Object.assign({...A.DEFAULT_OPTIONS},t);const{swatches:e,components:n,theme:s,sliders:o,lockOpacity:r,padding:i}=t;["nano","monolith"].includes(s)&&!o&&(t.sliders="h"),n.interaction||(n.interaction={});const{preview:a,opacity:c,hue:l,palette:h}=n;n.opacity=!r&&c,n.palette=h||a||c||l,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach((t=>this.addSwatch(t)));const{button:d,app:u}=this._root;this._nanopop=((t,e,n)=>{const s="object"!=typeof t||t instanceof HTMLElement?{reference:t,popper:e,...n}:t;return{update(t=s){const{reference:e,popper:n}=Object.assign(s,t);if(!n||!e)throw new Error("Popper- or reference-element missing.");return((t,e,n)=>{const{container:s,arrow:o,margin:r,padding:i,position:a,variantFlipOrder:c,positionFlipOrder:l}={container:document.documentElement.getBoundingClientRect(),...S,...n},{left:h,top:d}=e.style;e.style.left="0",e.style.top="0";const u=t.getBoundingClientRect(),p=e.getBoundingClientRect(),v={t:u.top-p.height-r,b:u.bottom+r,r:u.right+r,l:u.left-p.width-r},g={vs:u.left,vm:u.left+u.width/2-p.width/2,ve:u.left+u.width-p.width,hs:u.top,hm:u.bottom-u.height/2-p.height/2,he:u.bottom-p.height},[m,b="middle"]=a.split("-"),f=l[m],y=c[b],{top:w,left:_,bottom:C,right:H}=s;for(const t of f){const n="t"===t||"b"===t;let s=v[t];const[r,a]=n?["top","left"]:["left","top"],[c,l]=n?[p.height,p.width]:[p.width,p.height],[h,d]=n?[C,H]:[H,C],[m,b]=n?[w,_]:[_,w];if(!(s<m||s+c+i>h))for(const h of y){let v=g[(n?"v":"h")+h];if(!(v<b||v+l+i>d)){if(v-=p[a],s-=p[r],e.style[a]=`${v}px`,e.style[r]=`${s}px`,o){const t=n?u.width/2:u.height/2,e=2*t<l?u[a]+t:v+l/2;s<u[r]&&(s+=c),o.style[a]=`${e}px`,o.style[r]=`${s}px`}return t+h}}}return e.style.left=h,e.style.top=d,null})(e,n,s)}}})(d,u,{margin:i}),d.setAttribute("role","button"),d.setAttribute("aria-label",this._t("btn:toggle"));const p=this;this._setupAnimationFrame=requestAnimationFrame((function e(){if(!u.offsetWidth)return requestAnimationFrame(e);p.setColor(t.default),p._rePositioningPicker(),t.defaultRepresentation&&(p._representation=t.defaultRepresentation,p.setColorRepresentation(p._representation)),t.showAlways&&p.show(),p._initializingActive=!1,p._emit("init")}))}static create=t=>new A(t);_preBuild(){const{options:t}=this;for(const e of["el","container"])t[e]=l(t[e]);this._root=(t=>{const{components:e,useAsButton:n,inline:s,appClass:o,theme:r,lockOpacity:i}=t.options,c=t=>t?"":'style="display:none" hidden',l=e=>t._t(e),h=a(`\n      <div :ref="root" class="pickr">\n\n        ${n?"":'<button type="button" :ref="button" class="pcr-button"></button>'}\n\n        <div :ref="app" class="pcr-app ${o||""}" data-theme="${r}" ${s?'style="position: unset"':""} aria-label="${l("ui:dialog")}" role="window">\n          <div class="pcr-selection" ${c(e.palette)}>\n            <div :obj="preview" class="pcr-color-preview" ${c(e.preview)}>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="${l("btn:last-color")}"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="${l("aria:palette")}" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ${c(e.hue)}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="${l("aria:hue")}" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ${c(e.opacity)}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="${l("aria:opacity")}" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ${e.palette?"":"pcr-last"}" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ${c(Object.keys(e.interaction).length)}>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ${c(e.interaction.input)} aria-label="${l("aria:input")}">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="${i?"HEX":"HEXA"}" type="button" ${c(e.interaction.hex)}>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="${i?"RGB":"RGBA"}" type="button" ${c(e.interaction.rgba)}>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="${i?"HSL":"HSLA"}" type="button" ${c(e.interaction.hsla)}>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="${i?"HSV":"HSVA"}" type="button" ${c(e.interaction.hsva)}>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${c(e.interaction.cmyk)}>\n\n            <input :ref="save" class="pcr-save" value="${l("btn:save")}" type="button" ${c(e.interaction.save)} aria-label="${l("aria:btn:save")}">\n            <input :ref="cancel" class="pcr-cancel" value="${l("btn:cancel")}" type="button" ${c(e.interaction.cancel)} aria-label="${l("aria:btn:cancel")}">\n            <input :ref="clear" class="pcr-clear" value="${l("btn:clear")}" type="button" ${c(e.interaction.clear)} aria-label="${l("aria:btn:clear")}">\n          </div>\n        </div>\n      </div>\n    `),d=h.interaction;return d.options.find((t=>!t.hidden&&!t.classList.add("active"))),d.type=()=>d.options.find((t=>t.classList.contains("active"))),h})(this),t.useAsButton&&(this._root.button=t.el),t.container.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){const n=t.el.parentElement;t.el.nextSibling?n.insertBefore(e.app,t.el.nextSibling):n.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,n=(t.options.sliders||"v").repeat(2),[s,o]=n.match(/^[vh]+$/g)?n:[],r=()=>this._color||(this._color=this._lastColor.clone()),i={palette:H({element:t._root.palette.picker,wrapper:t._root.palette.palette,onstop:()=>t._emit("changestop","slider",t),onchange(n,s){if(!e.palette)return;const o=r(),{_root:i,options:a}=t,{lastColor:c,currentColor:l}=i.preview;t._recalc&&(o.s=100*n,o.v=100-100*s,o.v<0&&(o.v=0),t._updateOutput("slider"));const h=o.toRGBA().toString(0);this.element.style.background=h,this.wrapper.style.background=`\n                        linear-gradient(to top, rgba(0, 0, 0, ${o.a}), transparent),\n                        linear-gradient(to left, hsla(${o.h}, 100%, 50%, ${o.a}), rgba(255, 255, 255, ${o.a}))\n                    `,a.comparison?a.useAsButton||t._lastColor||c.style.setProperty("--pcr-color",h):(i.button.style.setProperty("--pcr-color",h),i.button.classList.remove("clear"));const d=o.toHEXA().toString();for(const{el:e,color:n}of t._swatchColors)e.classList[d===n.toHEXA().toString()?"add":"remove"]("pcr-active");l.style.setProperty("--pcr-color",h)}}),hue:H({lock:"v"===o?"h":"v",element:t._root.hue.picker,wrapper:t._root.hue.slider,onstop:()=>t._emit("changestop","slider",t),onchange(n){if(!e.hue||!e.palette)return;const s=r();t._recalc&&(s.h=360*n),this.element.style.backgroundColor=`hsl(${s.h}, 100%, 50%)`,i.palette.trigger()}}),opacity:H({lock:"v"===s?"h":"v",element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onstop:()=>t._emit("changestop","slider",t),onchange(n){if(!e.opacity||!e.palette)return;const s=r();t._recalc&&(s.a=Math.round(100*n)/100),this.element.style.background=`rgba(0, 0, 0, ${s.a})`,i.palette.trigger()}}),selectable:k({elements:t._root.interaction.options,className:"active",onchange(e){t._representation=e.target.getAttribute("data-type").toUpperCase(),t._recalc&&t._updateOutput("swatch")}})};this._components=i}_bindEvents(){const{_root:t,options:e}=this,n=[o(t.interaction.clear,"click",(()=>this._clearColor())),o([t.interaction.cancel,t.preview.lastColor],"click",(()=>{this.setHSVA(...(this._lastColor||this._color).toHSVA(),!0),this._emit("cancel")})),o(t.interaction.save,"click",(()=>{!this.applyColor()&&!e.showAlways&&this.hide()})),o(t.interaction.result,["keyup","input"],(t=>{this.setColor(t.target.value,!0)&&!this._initializingActive&&(this._emit("change",this._color,"input",this),this._emit("changestop","input",this)),t.stopImmediatePropagation()})),o(t.interaction.result,["focus","blur"],(t=>{this._recalc="blur"===t.type,this._recalc&&this._updateOutput(null)})),o([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],(()=>this._recalc=!0),{passive:!0})];if(!e.showAlways){const s=e.closeWithKey;n.push(o(t.button,"click",(()=>this.isOpen()?this.hide():this.show())),o(document,"keyup",(t=>this.isOpen()&&(t.key===s||t.code===s)&&this.hide())),o(document,["touchstart","mousedown"],(e=>{this.isOpen()&&!c(e).some((e=>e===t.app||e===t.button))&&this.hide()}),{capture:!0}))}if(e.adjustableNumbers){const e={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};h(t.interaction.result,((t,n,s)=>{const o=e[this.getColorRepresentation().toLowerCase()];if(o){const e=o[s],r=t+(e>=100?1e3*n:n);return r<=0?0:Number((r<e?r:e).toPrecision(3))}return t}))}if(e.autoReposition&&!e.inline){let t=null;const s=this;n.push(o(window,["scroll","resize"],(()=>{s.isOpen()&&(e.closeOnScroll&&s.hide(),null===t?(t=setTimeout((()=>t=null),100),requestAnimationFrame((function e(){s._rePositioningPicker(),null!==t&&requestAnimationFrame(e)}))):(clearTimeout(t),t=setTimeout((()=>t=null),100)))}),{capture:!0}))}this._eventBindings=n}_rePositioningPicker(){const{options:t}=this;if(!t.inline&&!this._nanopop.update({container:document.body.getBoundingClientRect(),position:t.position})){const t=this._root.app,e=t.getBoundingClientRect();t.style.top=(window.innerHeight-e.height)/2+"px",t.style.left=(window.innerWidth-e.width)/2+"px"}}_updateOutput(t){const{_root:e,_color:n,options:s}=this;if(e.interaction.type()){const t=`to${e.interaction.type().getAttribute("data-type")}`;e.interaction.result.value="function"==typeof n[t]?n[t]().toString(s.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",n,t,this)}_clearColor(t=!1){const{_root:e,options:n}=this;n.useAsButton||e.button.style.setProperty("--pcr-color","rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),n.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear"))}_parseLocalColor(t){const{values:e,type:n,a:s}=function(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";const e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;const e={cmyk:/^cmyk\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)/i,rgba:/^rgba?\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D*?(([\d.]+)(%?)|$)/i,hsla:/^hsla?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i,hsva:/^hsva?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},n=t=>t.map((t=>/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0));let s;t:for(const o in e)if(s=e[o].exec(t))switch(o){case"cmyk":{const[,t,e,r,i]=n(s);if(t>100||e>100||r>100||i>100)break t;return{values:f(t,e,r,i),type:o}}case"rgba":{let[,t,,e,,r,,,i]=n(s);if(t="%"===s[2]?t/100*255:t,e="%"===s[4]?e/100*255:e,r="%"===s[6]?r/100*255:r,i="%"===s[9]?i/100:i,t>255||e>255||r>255||i<0||i>1)break t;return{values:[...b(t,e,r),i],a:i,type:o}}case"hexa":{let[,t]=s;4!==t.length&&3!==t.length||(t=t.split("").map((t=>t+t)).join(""));const e=t.substring(0,6);let n=t.substring(6);return n=n?parseInt(n,16)/255:void 0,{values:[...w(e),n],a:n,type:o}}case"hsla":{let[,t,e,r,,i]=n(s);if(i="%"===s[6]?i/100:i,t>360||e>100||r>100||i<0||i>1)break t;return{values:[...y(t,e,r),i],a:i,type:o}}case"hsva":{let[,t,e,r,,i]=n(s);if(i="%"===s[6]?i/100:i,t>360||e>100||r>100||i<0||i>1)break t;return{values:[t,e,r,i],a:i,type:o}}}return{values:null,type:null}}(t),{lockOpacity:o}=this.options,r=void 0!==s&&1!==s;return e&&3===e.length&&(e[3]=void 0),{values:!e||o&&r?null:e,type:n}}_t(t){return this.options.i18n[t]||A.I18N_DEFAULTS[t]}_emit(t,...e){this._eventListener[t].forEach((t=>t(...e,this)))}on(t,e){return this._eventListener[t].push(e),this}off(t,e){const n=this._eventListener[t]||[],s=n.indexOf(e);return~s&&n.splice(s,1),this}addSwatch(t){const{values:e}=this._parseLocalColor(t);if(e){const{_swatchColors:t,_root:n}=this,s=_(...e),r=i(`<button type="button" style="--pcr-color: ${s.toRGBA().toString(0)}" aria-label="${this._t("btn:swatch")}"/>`);return n.swatches.appendChild(r),t.push({el:r,color:s}),this._eventBindings.push(o(r,"click",(()=>{this.setHSVA(...s.toHSVA(),!0),this._emit("swatchselect",s),this._emit("change",s,"swatch",this)}))),!0}return!1}removeSwatch(t){const e=this._swatchColors[t];if(e){const{el:n}=e;return this._root.swatches.removeChild(n),this._swatchColors.splice(t,1),!0}return!1}applyColor(t=!1){const{preview:e,button:n}=this._root,s=this._color.toRGBA().toString(0);return e.lastColor.style.setProperty("--pcr-color",s),this.options.useAsButton||n.style.setProperty("--pcr-color",s),n.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this}destroy(){cancelAnimationFrame(this._setupAnimationFrame),this._eventBindings.forEach((t=>r(...t))),Object.keys(this._components).forEach((t=>this._components[t].destroy()))}destroyAndRemove(){this.destroy();const{root:t,app:e}=this._root;t.parentElement&&t.parentElement.removeChild(t),e.parentElement.removeChild(e),Object.keys(this).forEach((t=>this[t]=null))}hide(){return!!this.isOpen()&&(this._root.app.classList.remove("visible"),this._emit("hide"),!0)}show(){return!this.options.disabled&&!this.isOpen()&&(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this._color),this)}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,n=0,s=1,o=!1){const r=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||n<0||n>100||s<0||s>1)return!1;this._color=_(t,e,n,s);const{hue:i,opacity:a,palette:c}=this._components;return i.update(t/360),a.update(s),c.update(e/100,1-n/100),o||this.applyColor(),r&&this._updateOutput(),this._recalc=r,!0}setColor(t,e=!1){if(null===t)return this._clearColor(e),!0;const{values:n,type:s}=this._parseLocalColor(t);if(n){const t=s.toUpperCase(),{options:o}=this._root.interaction,r=o.find((e=>e.getAttribute("data-type")===t));if(r&&!r.hidden)for(const t of o)t.classList[t===r?"add":"remove"]("active");return!!this.setHSVA(...n,e)&&this.setColorRepresentation(t)}return!1}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find((e=>e.getAttribute("data-type").startsWith(t)&&!e.click()))}getColorRepresentation(){return this._representation}getColor(){return this._color}getSelectedColor(){return this._lastColor}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}return e.default})(),t.exports=e()}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=class{constructor(t){this.canvasHandler=t,this.setupDrawingEventListeners()}setupDrawingEventListeners(){this.canvasHandler.canvas.addEventListener("mousedown",(t=>this.startDrawing(t))),this.canvasHandler.canvas.addEventListener("mousemove",(t=>this.draw(t))),this.canvasHandler.canvas.addEventListener("mouseup",(()=>this.stopDrawing())),this.canvasHandler.canvas.addEventListener("mouseout",(()=>this.stopDrawing()))}startDrawing(t){this.isDrawing||(this.currentPath=[],this.redoStack=[],this.isDrawing=!0);const e=t.clientX-this.canvasHandler.canvas.offsetLeft,n=t.clientY-this.canvasHandler.canvas.offsetTop;this.canvasHandler.ctx.beginPath(),this.canvasHandler.ctx.moveTo(e,n),this.currentPath.push({x:e,y:n,color:this.canvasHandler.colorHandler.currentColor,brushSize:this.canvasHandler.brushHandler.currentBrushSize}),this.draw(t)}draw(t){if(!this.isDrawing)return;const e=t.clientX-this.canvasHandler.canvas.offsetLeft,n=t.clientY-this.canvasHandler.canvas.offsetTop;this.canvasHandler.ctx.lineTo(e,n);const s=this.canvasHandler.eraseAndClearHandler.eraserCheckbox.checked?this.canvasHandler.colorHandler.bgColor:this.canvasHandler.colorHandler.currentColor;this.canvasHandler.brushHandler.setBrushStyling(s,this.canvasHandler.brushHandler.currentBrushSize),this.canvasHandler.ctx.stroke(),this.currentPath.push({x:e,y:n,color:s,brushSize:this.canvasHandler.brushHandler.currentBrushSize})}stopDrawing(){this.canvasHandler.eraseAndClearHandler.eraserCheckbox.checked&&(this.currentPath.isErase=!0),this.isDrawing&&(this.canvasHandler.undoAndRedoHandler.drawnPaths.push(this.currentPath),this.isDrawing=!1)}},e=n(612),s=n.n(e),o=class{constructor(t){this.canvasHandler=t,this.setupColorPicker(),this.setupColorHandling()}setupColorPicker(){this.brushColorPicker=s().create({el:"#color-picker",theme:"classic",default:"#ECD1E2",components:{preview:!0,hue:!0}}),this.brushColorPicker.show()}setupColorHandling(){this.currentColor="black",this.bgColor="#FFFFFF",this.brushColorPicker.on("change",(t=>{const e=this.getSelectedMode();"background-color-pickr"===e?(this.bgColor=t.toHEXA().toString(),this.bgColorChange()):("brush"===e||"eraser"===e)&&(this.currentColor=t.toHEXA().toString(),this.canvasHandler.brushHandler.setBrushStyling(t.toHEXA().toString()))}))}bgColorChange(){const t=this.canvasHandler.undoAndRedoHandler.drawnPaths,e=this.canvasHandler.undoAndRedoHandler.redoStack;this.canvasHandler.eraseAndClearHandler.clear(),this.canvasHandler.undoAndRedoHandler.drawnPaths=t,this.canvasHandler.undoAndRedoHandler.redoStack=e,t.forEach((t=>this.canvasHandler.undoAndRedoHandler.redrawPath(t))),this.canvasHandler.canvas.style.backgroundColor=this.bgColor}getSelectedMode(){const t=document.getElementsByName("tool");for(const e of t)if(e.checked)return e.id}},r=class{constructor(t){this.canvasHandler=t,this.setupBrushSize()}setupBrushSize(){this.brushSizeInput=document.getElementById("size-slider"),this.brushSizeInput.addEventListener("input",(()=>this.updateBrushSize())),this.currentBrushSize=5}setBrushStyling(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.canvasHandler.colorHandler.currentColor,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBrushSize;this.canvasHandler.ctx.lineCap="round",this.canvasHandler.ctx.lineWidth=e,this.canvasHandler.ctx.strokeStyle=t}updateBrushSize(){this.currentBrushSize=parseInt(this.brushSizeInput.value),this.setBrushStyling()}},i=class{constructor(t){this.canvasHandler=t,this.setupEraser(),this.setupClearBtn()}setupClearBtn(){this.clearBtn=document.getElementById("clear"),this.clearBtn.addEventListener("click",(()=>this.clear()))}setupEraser(){this.eraserCheckbox=document.getElementById("eraser")}clear(){this.canvasHandler.ctx.clearRect(0,0,this.canvasHandler.canvas.width,this.canvasHandler.canvas.height),this.canvasHandler.canvas.style.backgroundColor="white",this.canvasHandler.undoAndRedoHandler.redoStack=[],this.canvasHandler.undoAndRedoHandler.drawnPaths=[]}},a=class{constructor(t){this.canvasHandler=t,this.setupUndoBtn(),this.setupRedoBtn()}setupUndoBtn(){this.drawnPaths=[],this.undoBtn=document.getElementById("undo"),this.undoBtn.addEventListener("click",(()=>this.undo()))}setupRedoBtn(){this.redoStack=[],this.redoBtn=document.getElementById("redo"),this.redoBtn.addEventListener("click",(()=>this.redo()))}undo(){if(this.drawnPaths.length>0){this.canvasHandler.ctx.clearRect(0,0,this.canvasHandler.canvas.width,this.canvasHandler.canvas.height);const t=this.drawnPaths.pop();this.redoStack.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t)))}}redrawPath(t){t.forEach(((e,n)=>{0===n?(this.canvasHandler.ctx.beginPath(),this.canvasHandler.ctx.moveTo(e.x,e.y)):(this.canvasHandler.ctx.lineTo(e.x,e.y),t.isErase&&(e.color=this.canvasHandler.colorHandler.bgColor),this.canvasHandler.brushHandler.setBrushStyling(e.color,e.brushSize),this.canvasHandler.ctx.stroke())}))}redo(){if(this.redoStack.length>0){this.canvasHandler.ctx.clearRect(0,0,this.canvasHandler.canvas.width,this.canvasHandler.canvas.height);const t=this.redoStack.pop();this.drawnPaths.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t)))}}},c=class{constructor(t){this.canvasHandler=t,this.setupDownloadBtn()}setupDownloadBtn(){this.downloadBtn=document.getElementById("download"),this.downloadBtn.addEventListener("click",(()=>this.download()))}download(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=this.canvasHandler.canvas.width,t.height=this.canvasHandler.canvas.height,e.fillStyle=this.canvasHandler.canvas.style.backgroundColor,e.fillRect(0,0,t.width,t.height),e.drawImage(this.canvasHandler.canvas,0,0);const n=t.toDataURL("image/png"),s=document.createElement("a");s.href=n,s.download="canvas.png",s.click()}},l=class{constructor(){this.setupCanvas(),this.setupCanvasProportions(),this.drawingHandler=new t(this),this.colorHandler=new o(this),this.brushHandler=new r(this),this.eraseAndClearHandler=new i(this),this.undoAndRedoHandler=new a(this),this.downloadHandler=new c(this)}setupCanvas(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.isDrawing=!1}setupCanvasProportions(){this.canvas.style.position="absolute",this.canvas.style.top="100px",this.canvas.height=window.innerHeight-100-100,this.canvas.width=window.innerWidth}},h=class{constructor(){this.brushRadio=document.getElementById("brush"),this.eraserRadio=document.getElementById("eraser"),this.bgColorRadio=document.getElementById("background-color-pickr"),this.brushLabel=document.querySelector('label[for="brush"]'),this.eraserLabel=document.querySelector('label[for="eraser"]'),this.bgColorLabel=document.querySelector('label[for="background-color-pickr"]'),this.detectChange(),this.updateIcon()}updateIcon(){this.brushLabel.querySelector("img").src=this.brushRadio.checked?"assets/tab-icon.png":"assets/menu icons/inactive-brush.png",this.eraserLabel.querySelector("img").src=this.eraserRadio.checked?"assets/menu icons/active-eraser.png":"assets/menu icons/inactive-eraser.png",this.bgColorLabel.querySelector("img").src=this.bgColorRadio.checked?"assets/menu icons/active-background-color.png":"assets/menu icons/inactive-background-color.png"}detectChange(){[this.brushRadio,this.eraserRadio,this.bgColorRadio].forEach((t=>{t.addEventListener("change",(()=>this.updateIcon()))}))}};document.addEventListener("DOMContentLoaded",(()=>{new l,new h}))}()}();
//# sourceMappingURL=main.js.map