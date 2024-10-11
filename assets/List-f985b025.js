import{r as t,a as O,i as k,ay as it,_ as ut,h as ze,q as T,d as $e,Q as U,l as Et,n as wt,az as _t,s as Se,b as Lt,aA as Ze,aB as Je}from"./index-53b8b073.js";var lt=t.forwardRef(function(e,c){var a=e.height,f=e.offsetY,v=e.offsetX,d=e.children,s=e.prefixCls,o=e.onInnerResize,b=e.innerProps,h=e.rtl,R=e.extra,n={},S={display:"flex",flexDirection:"column"};return f!==void 0&&(n={height:a,position:"relative",overflow:"hidden"},S=O(O({},S),{},k(k(k(k(k({transform:"translateY(".concat(f,"px)")},h?"marginRight":"marginLeft",-v),"position","absolute"),"left",0),"right",0),"top",0))),t.createElement("div",{style:n},t.createElement(it,{onResize:function(m){var l=m.offsetHeight;l&&o&&o()}},t.createElement("div",ut({style:S,className:ze(k({},"".concat(s,"-holder-inner"),s)),ref:c},b),d,R)))});lt.displayName="Filler";function zt(e){var c=e.children,a=e.setRef,f=t.useCallback(function(v){a(v)},[]);return t.cloneElement(c,{ref:f})}function Tt(e,c,a,f,v,d,s,o){var b=o.getKey;return e.slice(c,a+1).map(function(h,R){var n=c+R,S=s(h,n,{style:{width:f},offsetX:v}),i=b(h);return t.createElement(zt,{key:i,setRef:function(l){return d(h,l)}},S)})}function Ct(e,c,a){var f=e.length,v=c.length,d,s;if(f===0&&v===0)return null;f<v?(d=e,s=c):(d=c,s=e);var o={__EMPTY_ITEM__:!0};function b(m){return m!==void 0?a(m):o}for(var h=null,R=Math.abs(f-v)!==1,n=0;n<s.length;n+=1){var S=b(d[n]),i=b(s[n]);if(S!==i){h=n,R=R||S!==b(s[n+1]);break}}return h===null?null:{index:h,multiple:R}}function Dt(e,c,a){var f=t.useState(e),v=T(f,2),d=v[0],s=v[1],o=t.useState(null),b=T(o,2),h=b[0],R=b[1];return t.useEffect(function(){var n=Ct(d||[],e||[],c);(n==null?void 0:n.index)!==void 0&&(a==null||a(n.index),R(e[n.index])),s(e)},[e]),[h]}var et=(typeof navigator>"u"?"undefined":$e(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const ot=function(e,c,a,f){var v=t.useRef(!1),d=t.useRef(null);function s(){clearTimeout(d.current),v.current=!0,d.current=setTimeout(function(){v.current=!1},50)}var o=t.useRef({top:e,bottom:c,left:a,right:f});return o.current.top=e,o.current.bottom=c,o.current.left=a,o.current.right=f,function(b,h){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=b?h<0&&o.current.left||h>0&&o.current.right:h<0&&o.current.top||h>0&&o.current.bottom;return R&&n?(clearTimeout(d.current),v.current=!1):(!n||v.current)&&s(),!v.current&&n}};function Ht(e,c,a,f,v,d,s){var o=t.useRef(0),b=t.useRef(null),h=t.useRef(null),R=t.useRef(!1),n=ot(c,a,f,v);function S(g,y){if(U.cancel(b.current),!n(!1,y)){var _=g;if(!_._virtualHandled)_._virtualHandled=!0;else return;o.current+=y,h.current=y,et||_.preventDefault(),b.current=U(function(){var V=R.current?10:1;s(o.current*V,!1),o.current=0})}}function i(g,y){s(y,!0),et||g.preventDefault()}var m=t.useRef(null),l=t.useRef(null);function p(g){if(e){U.cancel(l.current),l.current=U(function(){m.current=null},2);var y=g.deltaX,_=g.deltaY,V=g.shiftKey,Y=y,x=_;(m.current==="sx"||!m.current&&V&&_&&!y)&&(Y=_,x=0,m.current="sx");var W=Math.abs(Y),$=Math.abs(x);m.current===null&&(m.current=d&&W>$?"x":"y"),m.current==="y"?S(g,x):i(g,Y)}}function w(g){e&&(R.current=g.detail===h.current)}return[p,w]}function It(e,c,a,f){var v=t.useMemo(function(){return[new Map,[]]},[e,a.id,f]),d=T(v,2),s=d[0],o=d[1],b=function(R){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R,S=s.get(R),i=s.get(n);if(S===void 0||i===void 0)for(var m=e.length,l=o.length;l<m;l+=1){var p,w=e[l],g=c(w);s.set(g,l);var y=(p=a.get(g))!==null&&p!==void 0?p:f;if(o[l]=(o[l-1]||0)+y,g===R&&(S=l),g===n&&(i=l),S!==void 0&&i!==void 0)break}return{top:o[S-1]||0,bottom:o[i]}};return b}var Pt=function(){function e(){wt(this,e),k(this,"maps",void 0),k(this,"id",0),this.maps=Object.create(null)}return Et(e,[{key:"set",value:function(a,f){this.maps[a]=f,this.id+=1}},{key:"get",value:function(a){return this.maps[a]}}]),e}();function kt(e,c,a){var f=t.useState(0),v=T(f,2),d=v[0],s=v[1],o=t.useRef(new Map),b=t.useRef(new Pt),h=t.useRef();function R(){U.cancel(h.current)}function n(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;R();var m=function(){o.current.forEach(function(p,w){if(p&&p.offsetParent){var g=_t(p),y=g.offsetHeight;b.current.get(w)!==y&&b.current.set(w,g.offsetHeight)}}),s(function(p){return p+1})};i?m():h.current=U(m)}function S(i,m){var l=e(i),p=o.current.get(l);m?(o.current.set(l,m),n()):o.current.delete(l),!p!=!m&&(m?c==null||c(i):a==null||a(i))}return t.useEffect(function(){return R},[]),[S,n,b.current,d]}var tt=14/15;function Ot(e,c,a){var f=t.useRef(!1),v=t.useRef(0),d=t.useRef(0),s=t.useRef(null),o=t.useRef(null),b,h=function(i){if(f.current){var m=Math.ceil(i.touches[0].pageX),l=Math.ceil(i.touches[0].pageY),p=v.current-m,w=d.current-l,g=Math.abs(p)>Math.abs(w);g?v.current=m:d.current=l;var y=a(g,g?p:w,!1,i);y&&i.preventDefault(),clearInterval(o.current),y&&(o.current=setInterval(function(){g?p*=tt:w*=tt;var _=Math.floor(g?p:w);(!a(g,_,!0)||Math.abs(_)<=.1)&&clearInterval(o.current)},16))}},R=function(){f.current=!1,b()},n=function(i){b(),i.touches.length===1&&!f.current&&(f.current=!0,v.current=Math.ceil(i.touches[0].pageX),d.current=Math.ceil(i.touches[0].pageY),s.current=i.target,s.current.addEventListener("touchmove",h,{passive:!1}),s.current.addEventListener("touchend",R,{passive:!0}))};b=function(){s.current&&(s.current.removeEventListener("touchmove",h),s.current.removeEventListener("touchend",R))},Se(function(){return e&&c.current.addEventListener("touchstart",n,{passive:!0}),function(){var S;(S=c.current)===null||S===void 0||S.removeEventListener("touchstart",n),b(),clearInterval(o.current)}},[e])}var $t=10;function Nt(e,c,a,f,v,d,s,o){var b=t.useRef(),h=t.useState(null),R=T(h,2),n=R[0],S=R[1];return Se(function(){if(n&&n.times<$t){if(!e.current){S(function(C){return O({},C)});return}d();var i=n.targetAlign,m=n.originAlign,l=n.index,p=n.offset,w=e.current.clientHeight,g=!1,y=i,_=null;if(w){for(var V=i||m,Y=0,x=0,W=0,$=Math.min(c.length-1,l),G=0;G<=$;G+=1){var j=v(c[G]);x=Y;var Z=a.get(j);W=x+(Z===void 0?f:Z),Y=W}for(var J=V==="top"?p:w-p,N=$;N>=0;N-=1){var te=v(c[N]),I=a.get(te);if(I===void 0){g=!0;break}if(J-=I,J<=0)break}switch(V){case"top":_=x-p;break;case"bottom":_=W-w+p;break;default:{var Q=e.current.scrollTop,B=Q+w;x<Q?y="top":W>B&&(y="bottom")}}_!==null&&s(_),_!==n.lastTop&&(g=!0)}g&&S(O(O({},n),{},{times:n.times+1,targetAlign:y,lastTop:_}))}},[n,e.current]),function(i){if(i==null){o();return}if(U.cancel(b.current),typeof i=="number")s(i);else if(i&&$e(i)==="object"){var m,l=i.align;"index"in i?m=i.index:m=c.findIndex(function(g){return v(g)===i.key});var p=i.offset,w=p===void 0?0:p;S({times:0,index:m,offset:w,originAlign:l})}}}function rt(e,c){var a="touches"in e?e.touches[0]:e;return a[c?"pageX":"pageY"]}var nt=t.forwardRef(function(e,c){var a=e.prefixCls,f=e.rtl,v=e.scrollOffset,d=e.scrollRange,s=e.onStartMove,o=e.onStopMove,b=e.onScroll,h=e.horizontal,R=e.spinSize,n=e.containerSize,S=e.style,i=e.thumbStyle,m=t.useState(!1),l=T(m,2),p=l[0],w=l[1],g=t.useState(null),y=T(g,2),_=y[0],V=y[1],Y=t.useState(null),x=T(Y,2),W=x[0],$=x[1],G=!f,j=t.useRef(),Z=t.useRef(),J=t.useState(!1),N=T(J,2),te=N[0],I=N[1],Q=t.useRef(),B=function(){clearTimeout(Q.current),I(!0),Q.current=setTimeout(function(){I(!1)},3e3)},C=d-n||0,le=n-R||0,L=t.useMemo(function(){if(v===0||C===0)return 0;var P=v/C;return P*le},[v,C,le]),ee=function(E){E.stopPropagation(),E.preventDefault()},re=t.useRef({top:L,dragging:p,pageY:_,startTop:W});re.current={top:L,dragging:p,pageY:_,startTop:W};var ne=function(E){w(!0),V(rt(E,h)),$(re.current.top),s(),E.stopPropagation(),E.preventDefault()};t.useEffect(function(){var P=function(ae){ae.preventDefault()},E=j.current,X=Z.current;return E.addEventListener("touchstart",P,{passive:!1}),X.addEventListener("touchstart",ne,{passive:!1}),function(){E.removeEventListener("touchstart",P),X.removeEventListener("touchstart",ne)}},[]);var me=t.useRef();me.current=C;var oe=t.useRef();oe.current=le,t.useEffect(function(){if(p){var P,E=function(ae){var se=re.current,pe=se.dragging,Me=se.pageY,be=se.startTop;U.cancel(P);var ye=j.current.getBoundingClientRect(),ie=n/(h?ye.width:ye.height);if(pe){var ce=(rt(ae,h)-Me)*ie,fe=be;!G&&h?fe-=ce:fe+=ce;var xe=me.current,Ee=oe.current,Te=Ee?fe/Ee:0,K=Math.ceil(Te*xe);K=Math.max(K,0),K=Math.min(K,xe),P=U(function(){b(K,h)})}},X=function(){w(!1),o()};return window.addEventListener("mousemove",E,{passive:!0}),window.addEventListener("touchmove",E,{passive:!0}),window.addEventListener("mouseup",X,{passive:!0}),window.addEventListener("touchend",X,{passive:!0}),function(){window.removeEventListener("mousemove",E),window.removeEventListener("touchmove",E),window.removeEventListener("mouseup",X),window.removeEventListener("touchend",X),U.cancel(P)}}},[p]),t.useEffect(function(){return B(),function(){clearTimeout(Q.current)}},[v]),t.useImperativeHandle(c,function(){return{delayHidden:B}});var D="".concat(a,"-scrollbar"),F={position:"absolute",visibility:te?null:"hidden"},A={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return h?(F.height=8,F.left=0,F.right=0,F.bottom=0,A.height="100%",A.width=R,G?A.left=L:A.right=L):(F.width=8,F.top=0,F.bottom=0,G?F.right=0:F.left=0,A.width="100%",A.height=R,A.top=L),t.createElement("div",{ref:j,className:ze(D,k(k(k({},"".concat(D,"-horizontal"),h),"".concat(D,"-vertical"),!h),"".concat(D,"-visible"),te)),style:O(O({},F),S),onMouseDown:ee,onMouseMove:B},t.createElement("div",{ref:Z,className:ze("".concat(D,"-thumb"),k({},"".concat(D,"-thumb-moving"),p)),style:O(O({},A),i),onMouseDown:ne}))}),Yt=20;function at(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=e/c*e;return isNaN(a)&&(a=0),a=Math.max(a,Yt),Math.floor(a)}var Ft=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],Xt=[],Wt={overflowY:"auto",overflowAnchor:"none"};function Bt(e,c){var a=e.prefixCls,f=a===void 0?"rc-virtual-list":a,v=e.className,d=e.height,s=e.itemHeight,o=e.fullHeight,b=o===void 0?!0:o,h=e.style,R=e.data,n=e.children,S=e.itemKey,i=e.virtual,m=e.direction,l=e.scrollWidth,p=e.component,w=p===void 0?"div":p,g=e.onScroll,y=e.onVirtualScroll,_=e.onVisibleChange,V=e.innerProps,Y=e.extraRender,x=e.styles,W=Lt(e,Ft),$=t.useCallback(function(u){return typeof S=="function"?S(u):u==null?void 0:u[S]},[S]),G=kt($,null,null),j=T(G,4),Z=j[0],J=j[1],N=j[2],te=j[3],I=!!(i!==!1&&d&&s),Q=t.useMemo(function(){return Object.values(N.maps).reduce(function(u,r){return u+r},0)},[N.id,N.maps]),B=I&&R&&(Math.max(s*R.length,Q)>d||!!l),C=m==="rtl",le=ze(f,k({},"".concat(f,"-rtl"),C),v),L=R||Xt,ee=t.useRef(),re=t.useRef(),ne=t.useRef(),me=t.useState(0),oe=T(me,2),D=oe[0],F=oe[1],A=t.useState(0),P=T(A,2),E=P[0],X=P[1],Re=t.useState(!1),ae=T(Re,2),se=ae[0],pe=ae[1],Me=function(){pe(!0)},be=function(){pe(!1)},ye={getKey:$};function ie(u){F(function(r){var M;typeof u=="function"?M=u(r):M=u;var z=ht(M);return ee.current.scrollTop=z,z})}var ce=t.useRef({start:0,end:L.length}),fe=t.useRef(),xe=Dt(L,$),Ee=T(xe,1),Te=Ee[0];fe.current=Te;var K=t.useMemo(function(){if(!I)return{scrollHeight:void 0,start:0,end:L.length-1,offset:void 0};if(!B){var u;return{scrollHeight:((u=re.current)===null||u===void 0?void 0:u.offsetHeight)||0,start:0,end:L.length-1,offset:void 0}}for(var r=0,M,z,H,qe=L.length,ge=0;ge<qe;ge+=1){var yt=L[ge],xt=$(yt),Qe=N.get(xt),Oe=r+(Qe===void 0?s:Qe);Oe>=D&&M===void 0&&(M=ge,z=r),Oe>D+d&&H===void 0&&(H=ge),r=Oe}return M===void 0&&(M=0,z=0,H=Math.ceil(d/s)),H===void 0&&(H=L.length-1),H=Math.min(H+1,L.length-1),{scrollHeight:r,start:M,end:H,offset:z}},[B,I,D,L,te,d]),ue=K.scrollHeight,ve=K.start,de=K.end,Ne=K.offset;ce.current.start=ve,ce.current.end=de;var st=t.useState({width:0,height:d}),Ye=T(st,2),q=Ye[0],ct=Ye[1],ft=function(r){ct({width:r.offsetWidth,height:r.offsetHeight})},Fe=t.useRef(),Xe=t.useRef(),vt=t.useMemo(function(){return at(q.width,l)},[q.width,l]),dt=t.useMemo(function(){return at(q.height,ue)},[q.height,ue]),Ce=ue-d,De=t.useRef(Ce);De.current=Ce;function ht(u){var r=u;return Number.isNaN(De.current)||(r=Math.min(r,De.current)),r=Math.max(r,0),r}var we=D<=0,_e=D>=Ce,We=E<=0,Be=E>=l,gt=ot(we,_e,We,Be),He=function(){return{x:C?-E:E,y:D}},Ie=t.useRef(He()),Le=Ze(function(u){if(y){var r=O(O({},He()),u);(Ie.current.x!==r.x||Ie.current.y!==r.y)&&(y(r),Ie.current=r)}});function Ve(u,r){var M=u;r?(Je.flushSync(function(){X(M)}),Le()):ie(M)}function St(u){var r=u.currentTarget.scrollTop;r!==D&&ie(r),g==null||g(u),Le()}var Pe=function(r){var M=r,z=l?l-q.width:0;return M=Math.max(M,0),M=Math.min(M,z),M},mt=Ze(function(u,r){r?(Je.flushSync(function(){X(function(M){var z=M+(C?-u:u);return Pe(z)})}),Le()):ie(function(M){var z=M+u;return z})}),Rt=Ht(I,we,_e,We,Be,!!l,mt),je=T(Rt,2),ke=je[0],Ae=je[1];Ot(I,ee,function(u,r,M,z){var H=z;return gt(u,r,M)?!1:!H||!H._virtualHandled?(H&&(H._virtualHandled=!0),ke({preventDefault:function(){},deltaX:u?r:0,deltaY:u?0:r}),!0):!1}),Se(function(){function u(M){var z=we&&M.detail<0,H=_e&&M.detail>0;I&&!z&&!H&&M.preventDefault()}var r=ee.current;return r.addEventListener("wheel",ke,{passive:!1}),r.addEventListener("DOMMouseScroll",Ae,{passive:!0}),r.addEventListener("MozMousePixelScroll",u,{passive:!1}),function(){r.removeEventListener("wheel",ke),r.removeEventListener("DOMMouseScroll",Ae),r.removeEventListener("MozMousePixelScroll",u)}},[I,we,_e]),Se(function(){if(l){var u=Pe(E);X(u),Le({x:u})}},[q.width,l]);var Ke=function(){var r,M;(r=Fe.current)===null||r===void 0||r.delayHidden(),(M=Xe.current)===null||M===void 0||M.delayHidden()},Ue=Nt(ee,L,N,s,$,function(){return J(!0)},ie,Ke);t.useImperativeHandle(c,function(){return{nativeElement:ne.current,getScrollInfo:He,scrollTo:function(r){function M(z){return z&&$e(z)==="object"&&("left"in z||"top"in z)}M(r)?(r.left!==void 0&&X(Pe(r.left)),Ue(r.top)):Ue(r)}}}),Se(function(){if(_){var u=L.slice(ve,de+1);_(u,L)}},[ve,de,L]);var pt=It(L,$,N,s),Mt=Y==null?void 0:Y({start:ve,end:de,virtual:B,offsetX:E,offsetY:Ne,rtl:C,getSize:pt}),bt=Tt(L,ve,de,l,E,Z,n,ye),he=null;d&&(he=O(k({},b?"height":"maxHeight",d),Wt),I&&(he.overflowY="hidden",l&&(he.overflowX="hidden"),se&&(he.pointerEvents="none")));var Ge={};return C&&(Ge.dir="rtl"),t.createElement("div",ut({ref:ne,style:O(O({},h),{},{position:"relative"}),className:le},Ge,W),t.createElement(it,{onResize:ft},t.createElement(w,{className:"".concat(f,"-holder"),style:he,ref:ee,onScroll:St,onMouseEnter:Ke},t.createElement(lt,{prefixCls:f,height:ue,offsetX:E,offsetY:Ne,scrollWidth:l,onInnerResize:J,ref:re,innerProps:V,rtl:C,extra:Mt},bt))),B&&ue>d&&t.createElement(nt,{ref:Fe,prefixCls:f,scrollOffset:D,scrollRange:ue,rtl:C,onScroll:Ve,onStartMove:Me,onStopMove:be,spinSize:dt,containerSize:q.height,style:x==null?void 0:x.verticalScrollBar,thumbStyle:x==null?void 0:x.verticalScrollBarThumb}),B&&l>q.width&&t.createElement(nt,{ref:Xe,prefixCls:f,scrollOffset:E,scrollRange:l,rtl:C,onScroll:Ve,onStartMove:Me,onStopMove:be,spinSize:vt,containerSize:q.width,horizontal:!0,style:x==null?void 0:x.horizontalScrollBar,thumbStyle:x==null?void 0:x.horizontalScrollBarThumb}))}var Vt=t.forwardRef(Bt);Vt.displayName="List";export{Vt as L};