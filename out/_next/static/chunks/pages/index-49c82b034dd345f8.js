(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8313)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(9361).Z,s=i(4941).Z,n=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,l=e.src,r=e.sizes,v=e.unoptimized,p=void 0!==v&&v,x=e.priority,z=void 0!==x&&x,A=e.loading,k=e.lazyRoot,L=e.lazyBoundary,C=e.className,I=e.quality,E=e.width,O=e.height,R=e.style,M=e.objectFit,P=e.objectPosition,q=e.onLoadingComplete,D=e.placeholder,H=void 0===D?"empty":D,W=e.blurDataURL,B=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=d.useContext(m.ImageConfigContext),T=d.useMemo(function(){var e=h||F||g.imageConfigDefault,t=n(e.deviceSizes).concat(n(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return o({},e,{allSizes:t,deviceSizes:i})},[F]),Z=r?"responsive":"intrinsic";"layout"in B&&(B.layout&&(Z=B.layout),delete B.layout);var V=S;if("loader"in B){if(B.loader){var J=B.loader;V=function(e){e.config;var t=c(e,["config"]);return J(t)}}delete B.loader}var U="";if(function(e){var t;return"object"==typeof e&&(j(e)||void 0!==e.src)}(l)){var G=j(l)?l.default:l;if(!G.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(W=W||G.blurDataURL,U=G.src,(!Z||"fill"!==Z)&&(O=O||G.height,E=E||G.width,!G.height||!G.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}l="string"==typeof l?l:U;var Q=!z&&("lazy"===A||void 0===A);(l.startsWith("data:")||l.startsWith("blob:"))&&(p=!0,Q=!1),y.has(l)&&(Q=!1),T.unoptimized&&(p=!0);var X=s(d.useState(!1),2),Y=X[0],K=X[1],$=s(f.useIntersection({rootRef:void 0===k?null:k,rootMargin:L||"200px",disabled:!Q}),3),ee=$[0],et=$[1],ei=$[2],ea=!Q||et,es={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},en={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo=!1,el=w(E),er=w(O),ec=w(I),ed=Object.assign({},R,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:P}),eu="blur"!==H||Y?{}:{backgroundSize:M||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===Z)es.display="block",es.position="absolute",es.top=0,es.left=0,es.bottom=0,es.right=0;else if(void 0!==el&&void 0!==er){var eg=er/el,ef=isNaN(eg)?"100%":"".concat(100*eg,"%");"responsive"===Z?(es.display="block",es.position="relative",eo=!0,en.paddingTop=ef):"intrinsic"===Z?(es.display="inline-block",es.position="relative",es.maxWidth="100%",eo=!0,en.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(er,"%27/%3e")):"fixed"===Z&&(es.display="inline-block",es.position="relative",es.width=el,es.height=er)}var em={src:b,srcSet:void 0,sizes:void 0};ea&&(em=N({config:T,src:l,unoptimized:p,layout:Z,width:el,quality:ec,sizes:r,loader:V}));var ev=l,ep="imagesizes";ep="imageSizes";var eh=(a(i={},"imageSrcSet",em.srcSet),a(i,ep,em.sizes),a(i,"crossOrigin",B.crossOrigin),i),ey=d.default.useLayoutEffect,eb=d.useRef(q),ex=d.useRef(l);d.useEffect(function(){eb.current=q},[q]),ey(function(){ex.current!==l&&(ei(),ex.current=l)},[ei,l]);var ej=o({isLazy:Q,imgAttributes:em,heightInt:er,widthInt:el,qualityInt:ec,layout:Z,className:C,imgStyle:ed,blurStyle:eu,loading:A,config:T,unoptimized:p,placeholder:H,loader:V,srcString:ev,onLoadingCompleteRef:eb,setBlurComplete:K,setIntersection:ee,isVisible:ea,noscriptSizes:r},B);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:es},eo?d.default.createElement("span",{style:en},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(_,Object.assign({},ej))),z?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+em.src+em.srcSet+em.sizes,rel:"preload",as:"image",href:em.srcSet?void 0:em.src},eh))):null)};var o=i(6495).Z,l=i(2648).Z,r=i(1598).Z,c=i(7273).Z,d=r(i(7294)),u=l(i(5443)),g=i(9309),f=i(7190),m=i(9977);i(3794);var v=i(2392);function p(e){return"/"===e[0]?e.slice(1):e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},y=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,i=e.src,a=e.width,s=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(v.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(a,"&q=").concat(s||75)}],["imgix",function(e){var t=e.config,i=e.src,a=e.width,s=e.quality,n=new URL("".concat(t.path).concat(p(i))),o=n.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||a.toString()),s&&o.set("q",s.toString()),n.href}],["cloudinary",function(e){var t,i=e.config,a=e.src,s=e.width,n=["f_auto","c_limit","w_"+s,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(n).concat(p(a))}],["akamai",function(e){var t=e.config,i=e.src,a=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(a)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function j(e){return void 0!==e.default}function N(e){var t=e.config,i=e.src,a=e.unoptimized,s=e.layout,o=e.width,l=e.quality,r=e.sizes,c=e.loader;if(a)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,a){var s=e.deviceSizes,o=e.allSizes;if(a&&("fill"===i||"responsive"===i)){for(var l=/(^|\s)(1?\d?\d)vw/g,r=[];c=l.exec(a);c)r.push(parseInt(c[2]));if(r.length){var c,d,u=.01*(d=Math).min.apply(d,n(r));return{widths:o.filter(function(e){return e>=s[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:s,kind:"w"}:{widths:n(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,s,r),u=d.widths,g=d.kind,f=u.length-1;return{sizes:r||"w"!==g?r:"100vw",srcSet:u.map(function(e,a){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===g?e:a+1).concat(g)}).join(", "),src:c({config:t,src:i,quality:l,width:u[f]})}}function w(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function S(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",a=x.get(i);if(a)return a(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(g.VALID_LOADERS.join(", "),". Received: ").concat(i))}function z(e,t,i,a,s,n){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(y.add(t),"blur"===a&&n(!0),null==s?void 0:s.current)){var i=e.naturalWidth,o=e.naturalHeight;s.current({naturalWidth:i,naturalHeight:o})}}))}var _=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),a=e.qualityInt,s=e.layout,n=e.className,l=e.imgStyle,r=e.blurStyle,u=e.isLazy,g=e.placeholder,f=e.loading,m=e.srcString,v=e.config,p=e.unoptimized,h=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,x=e.setIntersection,j=e.onLoad,w=e.onError,S=(e.isVisible,e.noscriptSizes),_=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return f=u?"lazy":f,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":s,className:n,style:o({},l,r),ref:d.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&z(e,m,s,g,y,b)},[x,m,s,g,y,b,]),onLoad:function(e){z(e.currentTarget,m,s,g,y,b),j&&j(e)},onError:function(e){"blur"===g&&b(!0),w&&w(e)}})),(u||"blur"===g)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},_,N({config:v,src:m,unoptimized:p,layout:s,width:i,quality:a,sizes:S,loader:h}),{decoding:"async","data-nimg":s,style:l,className:n,loading:f}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,c=e.rootMargin,d=e.disabled||!o,u=a(s.useState(!1),2),g=u[0],f=u[1],m=a(s.useState(null),2),v=m[0],p=m[1];return s.useEffect(function(){if(o){if(!d&&!g&&v&&v.tagName){var e,t,a,s,u,m,p;return t=function(e){return e&&f(e)},u=(s=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},a=r.find(function(e){return e.root===i.root&&e.margin===i.margin});if(a&&(t=l.get(a)))return t;var s=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=s.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:s},r.push(i),l.set(i,t),t}(a={root:null==i?void 0:i.current,rootMargin:c})).id,m=s.observer,(p=s.elements).set(v,t),m.observe(v),function(){if(p.delete(v),m.unobserve(v),0===p.size){m.disconnect(),l.delete(u);var e=r.findIndex(function(e){return e.root===u.root&&e.margin===u.margin});e>-1&&r.splice(e,1)}}}}else if(!g){var h=n.requestIdleCallback(function(){return f(!0)});return function(){return n.cancelIdleCallback(h)}}},[v,d,c,i,g]),[p,g,s.useCallback(function(){f(!1)},[])]};var s=i(7294),n=i(9311),o="function"==typeof IntersectionObserver,l=new Map,r=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8313:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return v}});var a=i(5893),s=function(){return(0,a.jsx)("footer",{children:(0,a.jsx)("div",{className:"flex h-32 items-center justify-center bg-gray-900",children:(0,a.jsx)("div",{className:"font-thin text-slate-300 transition ease-in-out hover:scale-110",children:(0,a.jsxs)("a",{href:"https://github.com/DamnStraight/website",children:[(0,a.jsx)("span",{className:"text-slate-700",children:"<"}),"View Source on GitHub",(0,a.jsx)("span",{className:"text-slate-700",children:"/>"})]})})})})},n=i(5675),o=i.n(n);function l(e){var t,i,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=l(e[t]))&&(a&&(a+=" "),a+=i);else for(t in e)e[t]&&(a&&(a+=" "),a+=t)}return a}var r=function(){for(var e,t,i=0,a="";i<arguments.length;)(e=arguments[i++])&&(t=l(e))&&(a&&(a+=" "),a+=t);return a},c=i(1957),d=i.n(c),u="/website",g={hero:"absolute h-screen w-full","content-wrapper":"\n    relative z-10 h-full w-full \n    flex flex-col content-center items-center justify-center\n  ","grid-container":"\n    h-[70%] w-full overflow-hidden opacity-[0.03] \n    grid grid-cols-6 gap-4 md:grid-cols-9 lg:grid-cols-10 \n    [&>*]:rounded-md [&>*:not:has(span)]:bg-slate-600\n  ","title-container":r(d()["linear-bg"],"flex h-screen w-full items-center justify-center"),"title-wrapper":"z-20 text-white","name-header":r(d()["text-shadow-hero"],"text-center text-6xl md:text-8xl lg:text-9xl"),subtitle:"text-center text-4xl font-thin"},f=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{className:g.hero,children:(0,a.jsx)("div",{className:g["content-wrapper"],children:(0,a.jsxs)("div",{className:g["grid-container"],children:[(0,a.jsx)("div",{className:"opacity-5"}),(0,a.jsx)("div",{className:"opacity-10"}),(0,a.jsx)("div",{className:"opacity-30"}),(0,a.jsx)("div",{className:"opacity-30"}),(0,a.jsx)("div",{className:"opacity-30 md:hidden lg:block"}),(0,a.jsx)("div",{className:"opacity-30"}),(0,a.jsx)("div",{className:"opacity-30"}),(0,a.jsx)("div",{className:"opacity-30"}),(0,a.jsx)("div",{className:"opacity-10"}),(0,a.jsx)("div",{className:"opacity-5"}),(0,a.jsx)("div",{className:"relative opacity-20",children:(0,a.jsx)(o(),{src:u+"/CSS.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-30"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"relative opacity-70",children:(0,a.jsx)(o(),{src:u+"/JavaScript.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"relative opacity-30",children:(0,a.jsx)(o(),{src:u+"/HTML.svg",alt:"HTML Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(o(),{src:u+"/NodeJS.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-0"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"relative opacity-60",children:(0,a.jsx)(o(),{src:u+"/TypeScript.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-30"}),(0,a.jsx)("div",{className:""}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(o(),{src:u+"/React.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(o(),{src:u+"/PostgreSQL.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-0"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-30"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(o(),{src:u+"/git.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-40"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(o(),{src:u+"/Java.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"relative opacity-50 md:hidden lg:block",children:(0,a.jsx)(o(),{src:u+"/Spring.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-0"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(o(),{src:u+"/Sass.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"relative opacity-40 md:hidden lg:block",children:(0,a.jsx)(o(),{src:u+"/Docker.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-0"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-50"}),(0,a.jsx)("div",{className:"relative opacity-30",children:(0,a.jsx)(o(),{src:u+"/Tailwindcss.svg",alt:"CSS3 Logo",layout:"fill"})}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-40"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-10"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-5"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-10"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20 md:hidden lg:block"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-20"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-10"}),(0,a.jsx)("div",{className:"bg-slate-600 opacity-5"})]})})}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:g["title-container"],children:(0,a.jsxs)("div",{className:g["title-wrapper"],children:[(0,a.jsx)("h1",{className:g["name-header"],children:"Steven Labelle"}),(0,a.jsx)("p",{className:g.subtitle,children:"Software Developer"})]})})})]})},m=function(){return(0,a.jsxs)("div",{className:"absolute z-20 flex w-full items-center justify-center space-x-16 py-6 text-2xl font-thin uppercase tracking-wide text-zinc-300 underline decoration-1 underline-offset-4",children:[(0,a.jsx)("a",{href:"#about",className:"transition ease-in hover:-translate-y-1",children:"About"}),(0,a.jsx)("a",{href:"#projects",className:"transition ease-in hover:-translate-y-1",children:"Projects"}),(0,a.jsx)("a",{href:"#skills",className:"transition ease-in hover:-translate-y-1",children:"Skills"})]})},v=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{}),(0,a.jsx)(f,{}),(0,a.jsx)(s,{})]})}},1957:function(e){e.exports={glass:"Hero_glass__DFV0S","linear-bg":"Hero_linear-bg__aYRdq","text-shadow-hero":"Hero_text-shadow-hero__yIFyJ"}},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);