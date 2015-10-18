// JDU Themes
// Tumblr Streampad Player v2
// http://jduthemes.tumblr.com
// 18 Oct 2015

// Components
// 0. jQuery v2.1.4
// 1. Parse Theme Settings
// 2. sp-player.js revised for Tumblr
// 3. sp-player-blog.js revised for Tumblr
// 4. Dynamic insertion of CSS + cleanup
// 5. Seamless Playback via IFrame + HTML5 history.pushState


/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

var $sp = jQuery.noConflict(true);


/* Parse Theme Settings (minimize code installation size on user end) */

for (var i in SPSettings)
 if (SPSettings[i] == 1)
     SPSettings[i] = 'true';

SPbgcolor = SPSettings[1];
SPprogressbackcolor = SPSettings[2];
SPprogressfrontcolor = SPSettings[3];
SPtrackcolor = SPSettings[4];
SPbtncolor = SPSettings[5];
SPautoplay = SPSettings[6];
SPenablecrosspageplayback = SPSettings[7];
SPenableid3audiocaptions = SPSettings[8];
SPenableshuffle = SPSettings[9];
SPenabletransparency = SPSettings[10];
SPclickimg = SPSettings[11];
SPshowfullscreenbutton = SPSettings[12] ? SPSettings[12] : 'false';
SPshowplaylistbutton = SPSettings[13] ? SPSettings[13] : 'false';
SPshowplaylist = SPSettings[14];
SPshowplayscounter = SPSettings[15];
SPshowpop = SPSettings[16] ? SPSettings[16] : 'false';
SPshowlastfmbutton = SPSettings[17] ? SPSettings[17] : 'false';
SPshowrepeatbutton = SPSettings[18];
SPshowshufflebutton = SPSettings[19];
SPshowunplayabletracks = SPSettings[20];
SPshowvolumebutton = SPSettings[21] ? SPSettings[21] : 'false';
SPapi = SPSettings[22];
SPclicktext = SPSettings[23];
SPdontplaysongstagged = SPSettings[24];
SPplaysongstagged = SPSettings[25];
SPdrawersize = SPSettings[26];
SPcustomizeurl = SPSettings[27];


/*

JDU Themes
Streampad Player V2 sp-player.js revised for Tumblr
http://jduthemes.tumblr.com

Original
name: sp-player
http://o.aolcdn.com/os_merge/?file=/streampad/sp-player.js
$Rev: 63251 $
$Date: 2012-10-12 11:12:23 -0400 (Fri, 12 Oct 2012) $
author: Dan Kantor

*/

if (typeof(SPAPI) == 'undefined'){
	SPAPI = {}
}
SPAPI.QueueNumber = 0;
SPAPI.TotalNumber = 0;
SPAPI.CurrentSong = {};
SPAPI.State = 0;
SPAPI.Listeners = {
	'onSongChange' : [],
	'onStateChange' : [],
	'onQueueChange' : [],
	'onInit' : [],
	'onStart' : [],
	'onQueueEnd' : []
};
SPAPI.Events = {
	onSongChange : function(e){
		SPAPI.State = 1;
		var currentSongVO = streampadPlayer.Playlist.array[streampadPlayer.vars.queueNumber];
		SPAPI.CurrentSong.songTitle = currentSongVO.songTitle;
		SPAPI.CurrentSong.artist = currentSongVO.artist;
		SPAPI.CurrentSong.album = currentSongVO.album;
		SPAPI.CurrentSong.sourceUrl = currentSongVO.sourceUrl;
		SPAPI.CurrentSong.imageUrl = currentSongVO.imageUrl;
		SPAPI.CurrentSong.queue = streampadPlayer.vars.queueNumber;
		SPAPI.CurrentSong.total = streampadPlayer.Playlist.array.length;
		SPAPI.fireEvent('onSongChange', SPAPI.CurrentSong);
	},
	onStateChange : function(e){
		if (streampadPlayer.vars.isPlaying == true){
			SPAPI.State = 1;
		} else {
			SPAPI.State = 0;
		}
		SPAPI.fireEvent('onStateChange', SPAPI.State);
	},
	onQueueChange : function(e){
		var length = streampadPlayer.Playlist.array.length;
		SPAPI.fireEvent('onQueueChange', length);
	},
	onInit : function(e){
		SPAPI.fireEvent('onInit', null);
	},
	onStart : function(e){
		SPAPI.fireEvent('onStart', null);
	},
	onQueueEnd : function(e){
		SPAPI.fireEvent('onQueueEnd', null);
	}
}
SPAPI.fireEvent = function(type, object){
	if (typeof this.Listeners[type] != 'undefined' && this.Listeners[type].length) {
		var newArray = this.Listeners[type].slice();
    	for (var i = 0, l; l = newArray[i]; i++) {
    		l(object);
   		 }
    	return true;           
	}
    return false;
}
SPAPI.addEventListener = function(type, fn){
	switch(type){
		case 'onSongChange' : 
			var len = this.Listeners[type].length;
			this.Listeners[type].push(fn);
		break;
		case 'onStateChange' : 
			var len = this.Listeners[type].length;
			this.Listeners[type].push(fn);
		break; 
		case 'onQueueChange' : 
			var len = this.Listeners[type].length;
			this.Listeners[type].push(fn);
		break;
		case 'onInit' : 
			var len = this.Listeners[type].length;
			this.Listeners[type].push(fn);
		break;
		case 'onStart' : 
			var len = this.Listeners[type].length;
			this.Listeners[type].push(fn);
		break;
		case 'onQueueEnd' : 
			var len = this.Listeners[type].length;
			this.Listeners[type].push(fn);
		break;
		default : 
		break;
	}
}
SPAPI.removeEventListener = function(type, fn){
	if (typeof this.Listeners[type] != 'undefined') {
		for (var i = 0, l; l = this.Listeners[type][i]; i++) {
	    	if (l == fn) break;
	    }
	this.Listeners[type].splice(i, 1);
	}
}
SPAPI.play = function(){
	if (streampadPlayer.vars.isPlaying == false){
		streampadPlayer.vars.isPlaying = true;
		streampadPlayer.UI.showPause();
		if (streampadPlayer.vars.isWinamp){
			window.external.Transport.Play();
		} else {
			streampadPlayer.flash.getSWF("streampadFlash").unPause();
		}
		streampadPlayer.Event.fire(window, 'play', null);
	}
}
SPAPI.pause = function(){
	if (streampadPlayer.vars.isPlaying == true){
		streampadPlayer.vars.isPlaying = false;
		streampadPlayer.UI.showPlay();
		if (streampadPlayer.vars.isWinamp){
			window.external.Transport.Pause();
		} else {
			streampadPlayer.flash.getSWF("streampadFlash").pause();
		}
		streampadPlayer.Event.fire(window, 'pause', null);
	}
}
SPAPI.next = function(){
	streampadPlayer.Events.nextTrack();
}
SPAPI.previous = function(){
	streampadPlayer.Events.previousTrack();
}
SPAPI.skip = function(n){
	if (n <= 0){
		n = 0;
	}
	if (n > streampadPlayer.Playlist.array.length - 1){
		n = streampadPlayer.Playlist.array.length - 1;
	}
	streampadPlayer.vars.queueNumber = n;
	streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
}
SPAPI.state = function(n){
	return SPAPI.State;
}
SPAPI.add = function(songTitle, artist, album, enclosure, sourceUrl, imageUrl, share){
	if (enclosure != null){
		var songVO = new streampadPlayer.SongVO();
		songVO.songTitle = songTitle;
		songVO.artist = artist;
		songVO.album = album;
		songVO.enclosure = enclosure;
		songVO.sourceUrl = sourceUrl;
		songVO.imageUrl = imageUrl;
		songVO.text = '';
		if (share == false){
			songVO.getMeta = false;
			songVO.shareEnclosure = false;
		}
		if (songTitle != null){
			songVO.text = songTitle;
			if (artist != null){
				songVO.text = songTitle+' by '+artist;
			}
		}
		streampadPlayer.Playlist.push(songVO);
	}
}
SPAPI.queue = function(n){
	if (n != null){
		if (n <= 0){
			n = 0;
		}
		if (n > streampadPlayer.Playlist.array.length - 1){
			n = streampadPlayer.Playlist.array.length - 1;
		}
		streampadPlayer.vars.queueNumber = n;
		SPAPI.QueueNumber = streampadPlayer.vars.queueNumber;
		if (streampadPlayer.vars.isWinamp){
			window.external.PlayQueue.cursor = streampadPlayer.vars.queueNumber;
		}
	} else {
		SPAPI.QueueNumber = streampadPlayer.vars.queueNumber;
		return SPAPI.QueueNumber;
	}
}
SPAPI.total = function(){
	SPAPI.TotalNumber = streampadPlayer.Playlist.array.length;
	return SPAPI.TotalNumber;
}
SPAPI.song = function(){
	var currentSongVO = streampadPlayer.Playlist.array[streampadPlayer.vars.queueNumber];
	SPAPI.CurrentSong.songTitle = currentSongVO.songTitle;
	SPAPI.CurrentSong.artist = currentSongVO.artist;
	SPAPI.CurrentSong.album = currentSongVO.album;
	SPAPI.CurrentSong.sourceUrl = currentSongVO.sourceUrl;
	SPAPI.CurrentSong.imageUrl = currentSongVO.imageUrl;
	return SPAPI.CurrentSong;
}
SPAPI.start = function(){
	if (streampadPlayer.vars.init == true && streampadPlayer.vars.built == false){
		streampadPlayer.UI.build();
	}
}
SPAPI.clear = function(){
	streampadPlayer.Playlist.array = [];
	if (streampadPlayer.vars.isWinamp){
		window.external.PlayQueue.ClearQueue();
		window.external.Transport.Stop();
	}
	streampadPlayer.Playlist.onChange();
}
SPAPI.hide = function(){
	var bottomBar = document.getElementById('streampadBottomBar');
	bottomBar.style.opacity = 0;
	bottomBar.style.height = '1px';
	bottomBar.style.width = '1px';
	if (streampadPlayer.browser.engine.trident4){
		bottomBar.style.filter = "alpha(opacity=0)";
	}
	streampadPlayer.params.visible = 'false';
}
SPAPI.show = function(){
	var bottomBar = document.getElementById('streampadBottomBar');
	bottomBar.style.opacity = 1;
	streampadPlayer.params.height = 30;
	bottomBar.style.height = streampadPlayer.params.height+'px';
	bottomBar.style.width = '100%';
	if (streampadPlayer.browser.engine.trident4){
		bottomBar.style.filter = "alpha(opacity=100)";
	}
	streampadPlayer.params.visible = 'true';
	streampadPlayer.UI.resize();
}
SPAPI.visible = function(){
	if (streampadPlayer.params.visible == 'false'){
		return false;
	} else {
		return true;
	}
}
//////////////////////////////////////END API//////////////////////////////
/*

//////////////////////////////////////////////////////////////////////////*/
//////////////////////////////////////////////////////////////////////////////////////
if (typeof(streampadPlayer) == 'undefined'){
	streampadPlayer = {}
}
streampadPlayer.vars = {
	queueNumber : 0,
	isPlaying : false,
	init : false,
	built : false,
	posts : [],
	total : 0,
	poweredBy : 'STREAMPAD',
	poweredByLink : 'http://www.streampad.com/?ncid=edlinkusmusi00000001',
	imgHOST : 'http://o.aolcdn.com/art/sp/',
	playImgPos : '-42px -1px',
	playImgPosOver : '-42px -27px',
	pauseImgPos : '-68px -1px',
	pauseImgPosOver : '-68px -27px',
	prevImgPos : '0 -4px',
	prevImgPosOver : '0 -30px',
	nextImgPos : '-22px -4px',
	nextImgPosOver : '-22px -30px',
	currentSongVO : null,
	fontSize : 12,
	oldPlaylistItem : null,
	isFlashLoaded : false,
	getAudioMeta : true,
	popWindow : location.pathname,
	playlistType : '',
	volumeMouseOn : false,
	volumeButtonMouseOverTimeout : null,
	volumeY : 100,
	volumeDraggerY : 55,
	theVolume : 1,
	marginOffsetLeft : 0,
	isWinamp : false,
	playlistDrawerShowing : false,
	profileDrawerShowing : false,
	sn : null,
	profileDrawerCategory : 'lastfm',
	clientLogin : true,
	siteId : 'Aol_Music_Channel',
	profileHeaderSelected : null,
	flashUID : null,
	oldPlayButton : null,
	lastfmpopup : null,
	lastfmpopupcheck : null,
	usCanada : false
};
streampadPlayer.params = {
	height : 30,
	width : '100%',
	showdrawer : false,
	nowplayingurl : 'http://music.aol.com/api/nowplaying/',
	metaurl : 'http://music.aol.com/api/audio/query',
	swfurl : 'https://streampadv2.github.io/static/BottomBar.swf',
	chartsurl : 'http://music.aol.com/api/charts/',
	aimurl : 'http://api.oscar.aol.com/',
	poweredbycolor : 'A0ABD8',
	visible : 'true',
	btnsprite : 'http://o.aolcdn.com/art/sp/',
	bgimg : 'https://secure.static.tumblr.com/ujjnqse/q5Inv5txp/sp-spinner-bottombar-bg.gif',
	bgcolor : '',
	trackcolor : 'FFFFFF',
	clicktext : '',
	clickimg : 'false',
	autoplay : 'false',
	showpop : 'true',
	progressfrontcolor : 'CCCCCC',
	progressbackcolor : 'FFFFFF',
	showplaylistbutton : 'true',
	showplaylist : 'false',
	drawersize : '215',
	showvolumebutton : 'true',
	btncolor : 'white-gray',
        btnurl : {
           'white-gray' : 'https://secure.static.tumblr.com/ujjnqse/X0Enp5lde/white-gray_buttons.gif',
           'white-black' : 'https://secure.static.tumblr.com/ujjnqse/nPHnp5le7/white-black_buttons.gif',
           'black-gray' : 'https://secure.static.tumblr.com/ujjnqse/4qAnp5lf3/black-gray_buttons.gif',
           'black-white' : 'https://secure.static.tumblr.com/ujjnqse/VdYnp5lfq/black-white_buttons.gif',
           'blue-white' : 'https://secure.static.tumblr.com/ujjnqse/zi9np5lgc/blue-white_buttons.gif'
        },
	lswf : 'https://streampadv2.github.io/static/LoginForm.swf',
	fsswf : 'https://streampadv2.github.io/static/full_screen.swf',
	fsxml : 'https://streampadv2.github.io/static/fs_settings.xml',
	debug : 'false',
	popup : 'false',
	globalcheck : 'false'
};
streampadPlayer.Theme = {
	prevOn : '-209px 9px',
	prevOff : '5px 9px',
	playOn : '-227px 9px',
	playOff : '-13px 9px',
	nextOn : '-247px 9px',
	nextOff : '-33px 9px',
	pauseOn : '-266px 9px',
	pauseOff : '-52px 9px',
	volumeOn : '-285px 8px',
	volumeOff : '-71px 8px',
	profileOn : '-309px 8px',
	profileOff : '-95px 8px',
	playlistOn : '-332px 8px',
	playlistOff : '-118px 8px',
	popoutOn : '-356px 8px',
	popoutOff : '-142px 8px',
	loggedInOn : 4,
	loggedInOff : 4,
	borderOn : 4,
	borderOff : 4,
	volumeBack : '12px -70px',
	volumeDrag : '0 -215px',
	closeOn : '-28px -235px',
	closeOff : '0 -235px',
	borderOff : '-31px -24px',
	borderOn : '0 -24px',
	borderRight : false,
	borderNum : 0,
	signInIcon : '-10px -255px',
	viewProfileOff : '-10px -180px',
	viewProfileOn : '-97px -180px',
	logoutOff : '-10px -208px',
	logoutOn : '-78px -208px',
	itunesOff : '-10px -123px',
	itunesOn : '-144px -123px',
	amazonOff : '-10px -151px',
	amazonOn : '-114px -151px',
	loginOff : '-10px -67px',
	loginOn : '-66px -67px',
	signUpOff : '-10px -95px',
	signUpOn : '-77px -95px'
}
////////////////////////////////////////////////////
/* called on domready. gets params from script tag url and initializes UI */
streampadPlayer.init = function(){
	if (!streampadPlayer.vars.init){
		streampadPlayer.vars.init = true;
		streampadPlayer.vars.siteId = location.protocol+'//'+location.host;
		var scripts = document.getElementsByTagName('SCRIPT');
		for(i=0; i<scripts.length; i++){
			var src = scripts[i].getAttribute('src');
			try {
				if (src.indexOf('sp-player.js') != -1 || src.indexOf('streampad-tumblr.js') != -1){
					var splits = src.split("?");
					var paramString = splits[1];
					streampadPlayer.Events.setParams(paramString);
				}
			} catch(e){}
		}
		var hashParams = location.hash;
		hashParams = hashParams.substring(1);
		streampadPlayer.Events.setParams(hashParams);
		if (streampadPlayer.params.queuenumber) {
			streampadPlayer.vars.queueNumber = parseInt(streampadPlayer.params.queuenumber)-1;
		}
		if (streampadPlayer.params.drawersize == 'full'){
			streampadPlayer.params.drawersize = streampadPlayer.Utils.getBodyHeight() - streampadPlayer.params.height;
		} else {
			if (streampadPlayer.params.drawersize.indexOf('px') != -1){
				streampadPlayer.params.drawersize = streampadPlayer.params.drawersize.slice(0, streampadPlayer.params.drawersize.length-2);
			}
		}
		if (streampadPlayer.params.progressfrontcolor.indexOf('#') != -1){
			streampadPlayer.params.progressfrontcolor = streampadPlayer.params.progressfrontcolor.slice(streampadPlayer.params.progressfrontcolor.indexOf('#'), streampadPlayer.params.progressfrontcolor.indexOf('#')+1);
		}
		if (streampadPlayer.params.progressbackcolor.indexOf('#') != -1){
			streampadPlayer.params.progressbackcolor = streampadPlayer.params.progressbackcolor.slice(streampadPlayer.params.progressbackcolor.indexOf('#'), streampadPlayer.params.progressbackcolor.indexOf('#')+1);
		}
		//if (streampadPlayer.params.visible == 'true'){
			setInterval(streampadPlayer.Utils.scriptClean, 20000);
			streampadPlayer.UI.init();
		//}
	}
};
/* all Events - clicks, remote, etc */
streampadPlayer.Events = {
	/* called when user clicks or when song is finished */
	nextTrack : function(){
		if (streampadPlayer.vars.queueNumber < streampadPlayer.Playlist.array.length-1){
			streampadPlayer.vars.queueNumber++;
			streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
		} else {
			streampadPlayer.Event.fire(window, 'handleMore', null);
		}
	},
	/* called when user clicks */
	previousTrack : function(){
		if (streampadPlayer.vars.queueNumber > 0){
			streampadPlayer.vars.queueNumber--;
			streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
		} else {
			streampadPlayer.Event.fire(window, 'handleLess', null);
		}
	},
	/* called when user clicks play/pause */
	playTrack : function(){
		if (streampadPlayer.vars.isPlaying) {
            streampadPlayer.vars.isPlaying = false;
            streampadPlayer.UI.showPlay();
            if (streampadPlayer.vars.isWinamp){
            	window.external.Transport.Pause();
            } else {
            	streampadPlayer.flash.getSWF("streampadFlash").pause();
            }
            streampadPlayer.Event.fire(window, 'pause', null);
        } else {
            streampadPlayer.vars.isPlaying = true;
            streampadPlayer.UI.showPause();
            if (streampadPlayer.vars.isWinamp) {
            	window.external.Transport.Play();
            } else {
            	streampadPlayer.flash.getSWF("streampadFlash").unPause();
            }
            streampadPlayer.Event.fire(window, 'play', null);
        }
    },
    playTrackMouseOver : function(){
    	var streampadPlayTrack = document.getElementById('streampadPlayTrack');
    	if (streampadPlayer.vars.isPlaying) {
    		streampadPlayTrack.style.backgroundPosition = streampadPlayer.Theme.pauseOn;
    	} else {
    		streampadPlayTrack.style.backgroundPosition = streampadPlayer.Theme.playOn;
    	}
    },
     playTrackMouseOut : function(){
     	var streampadPlayTrack = document.getElementById('streampadPlayTrack');
    	if (streampadPlayer.vars.isPlaying) {
    		streampadPlayTrack.style.backgroundPosition = streampadPlayer.Theme.pauseOff;
    	} else {
    		streampadPlayTrack.style.backgroundPosition = streampadPlayer.Theme.playOff;
    	}
    },
    /* method for Flash to log */
	flash : function(obj){
		streampadPlayer.Debug(obj);
	},
	/* hack for ie6 to scroll since its broken on position:fixed */
	scrollHandler : function(){ 
		if (streampadPlayer.browser.engine.trident4 && streampadPlayer.params.visible != 'false'){
			var bottomBar = document.getElementById('streampadBottomBar');
			var scrollT;
			if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    			scrollT = document.body.scrollTop;
  			} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
   				scrollT = document.documentElement.scrollTop;
  			}
			var height = streampadPlayer.Utils.getBodyHeight();
			if (!scrollT){
				scrollT = 0;
			}
			try {
				bottomBar.style.top = scrollT+height-streampadPlayer.params.height;
			} catch(e){}
			var bodyWidth = streampadPlayer.Utils.getBodyWidth();
			var bottomBarWidth = bottomBar.clientWidth;
			if (bottomBarWidth != bodyWidth && streampadPlayer.Utils.getWidthMarginSize() != 0){
				bottomBar.style.left = '-' + streampadPlayer.Utils.getWidthMarginSize() + 'px';
				bottomBar.style.width = bodyWidth+'px';
				streampadPlayer.vars.marginOffsetLeft = streampadPlayer.Utils.getX(bottomBar);
			}
			if (streampadPlayer.vars.marginOffsetLeft < 0){
				bottomBar.style.left = '0';
			}
			if (streampadPlayer.params.showdrawer){
				var drawer = document.getElementById('streampadDrawer');
				try {
					drawer.style.top = scrollT+height-streampadPlayer.params.height-streampadPlayer.params.drawersize;
					if (streampadPlayer.vars.marginOffsetLeft < 0){
						drawer.style.left = '0';
					} else {
						drawer.style.left = '-' + streampadPlayer.Utils.getWidthMarginSize() + 'px';
					}
					drawer.style.width = bodyWidth+'px';
				} catch(e){}
			}
			if (streampadPlayer.vars.volumeMouseOn == true){
				try {
					var volDiv = document.getElementById('streampadVolDiv');
					volDiv.style.top = scrollT+height-streampadPlayer.params.height-130;
				} catch(e){}
			}
		}
	},
	/* called when user clicks 'powered by STREAMPAD' */
	poweredByClick : function(e){
		streampadPlayer.Event.stop(e);	
	},
	/* called when song is half way done */
	setPlay : function(){
		streampadPlayer.Charts.setPlayData.request();
	},
	/* pop a new window to current location, passing in autoplay=true and current queuenumber */
	popnew : function(e){
		streampadPlayer.Event.stop(e);
		streampadPlayer.vars.isPlaying = false;
		try {
			streampadPlayer.UI.showPlay();
			streampadPlayer.flash.getSWF("streampadFlash").pause();
		} catch(e){};
		window.open(streampadPlayer.vars.popWindow+'#showplaylist=true&showplaylistbutton=true&autoplay=true&showpop=false&popup=true&queuenumber='+(streampadPlayer.vars.queueNumber+1), 'streampadpopup','resizable=yes,scrollbars=no,toolbar=no,width=800,height=246');
	},
	popnewMouseOver : function(){
		var popnew = document.getElementById('streampadPopNew');
		popnew.style.backgroundPosition = streampadPlayer.Theme.popoutOn;
	},
	popnewMouseOut : function(){
		var popnew = document.getElementById('streampadPopNew');
		popnew.style.backgroundPosition = streampadPlayer.Theme.popoutOff;
	},
	/* called when user clicks on progress bar (from flash) */
	seek : function(){
		streampadPlayer.vars.isPlaying = true;
		streampadPlayer.UI.showPause();
	},
	setParams : function(string){
		var params = string.split("&");
		for (j=0; j<params.length; j++){
			var param = params[j].split("=");
			streampadPlayer.params[param[0]] = param[1];
		}
	},
	playlistButtonMouseOver : function(){
		var playlistButton = document.getElementById('streampadPlaylistButton');
		playlistButton.style.backgroundPosition = streampadPlayer.Theme.playlistOn;
	},
	playlistButtonMouseOut : function(){
		var playlistButton = document.getElementById('streampadPlaylistButton');
		if (streampadPlayer.vars.playlistDrawerShowing){
			playlistButton.style.backgroundPosition = streampadPlayer.Theme.playlistOn;
		} else {
			playlistButton.style.backgroundPosition = streampadPlayer.Theme.playlistOff;
		}
	},
	playlistButtonClick : function(obj){
		streampadPlayer.Event.remove(window, 'playlistChange', streampadPlayer.Events.playlistButtonClick);
		var playlistButton = document.getElementById('streampadPlaylistButton');
		if (streampadPlayer.vars.playlistDrawerShowing){
			streampadPlayer.UI.destroyDrawer();
			streampadPlayer.Event.remove(window, 'setCurrent', streampadPlayer.UI.fillPlaylistDrawer);
			streampadPlayer.Event.remove(window, 'playlistChange', streampadPlayer.UI.fillPlaylistItems);
		} else {
			streampadPlayer.UI.destroyDrawer();
			playlistButton.style.backgroundPosition = streampadPlayer.Theme.playlistOn;
			var borderNum = playlistButton.getAttribute('bordernum');
			streampadPlayer.UI.buttonBorder(borderNum, 'borderOn');
			playlistButton.setAttribute('title', 'Close Playlist');
			streampadPlayer.UI.createPlaylistDrawer();
			streampadPlayer.vars.playlistDrawerShowing = true;
			streampadPlayer.UI.fillPlaylistDrawer();
			streampadPlayer.Event.add(window, 'setCurrent', streampadPlayer.UI.fillPlaylistDrawer);
			streampadPlayer.Event.add(window, 'playlistChange', streampadPlayer.UI.fillPlaylistItems);
		}
	},
	gotPlaylistMeta : function(){
		streampadPlayer.Event.remove(window, 'playlistChange', streampadPlayer.Events.gotPlaylistMeta);
		if (streampadPlayer.vars.playlistDrawerShowing){
		
		}
	},
	playlistDrawerClosed : function(){
		var playlistButton = document.getElementById('streampadPlaylistButton');
		playlistButton.style.backgroundPosition = streampadPlayer.Theme.playlistOff;
		var borderNum = playlistButton.getAttribute('bordernum');
		streampadPlayer.UI.buttonBorder(borderNum, 'borderOff');
		playlistButton.setAttribute('title', 'Open Playlist');
		streampadPlayer.vars.playlistDrawerShowing = false;
		streampadPlayer.Event.remove(window, 'setCurrent', streampadPlayer.UI.fillPlaylistDrawer);
		streampadPlayer.Event.remove(window, 'playlistChange', streampadPlayer.UI.fillPlaylistItems);
	},
	playlistItemClick : function(e){
		e = e||window.event
		var target = e.currentTarget||e.srcElement;
		streampadPlayer.Play.queueNumber(parseInt(target.getAttribute('num')));
	},
	id3 : function(id3Object){
	},
	playlistItemMore : function(e){
		e = e||window.event
		var target = e.currentTarget||e.srcElement;
		target.innerHTML = "Load 20 more songs...  <img src='"+streampadPlayer.vars.imgHOST+"'loader-16-7A7A8A' style='textAlign=middle'  />";
	},
	volumeButtonMouseOver : function(e){
		streampadPlayer.vars.volumeMouseOn = true;
		try {
			var volDiv = document.getElementById('streampadVolDiv');
			volDiv.setAttribute('foo', 'bar');
		} catch (e){
			streampadPlayer.UI.showVolume();
		}
	},
	volumeDragDown : function(e){
		streampadPlayer.Event.add(document, 'mousemove', streampadPlayer.Events.volumeDragMove);
		streampadPlayer.Event.add(document, 'mouseup', streampadPlayer.Events.volumeDragUp);
		e.preventDefault();
	},
	volumeDragUp : function(){
		streampadPlayer.Event.remove(document, 'mousemove', streampadPlayer.Events.volumeDragMove);
		streampadPlayer.Event.remove(document, 'mouseup', streampadPlayer.Events.volumeDragUp);
	},
	volumeDragMove : function(e){
		try {
			var volDragger = document.getElementById('streampadVolumeDragger');
			streampadPlayer.vars.volumeDraggerY = e.clientY - streampadPlayer.vars.volumeY + 130;
			if (streampadPlayer.vars.volumeDraggerY > 103){
				streampadPlayer.vars.volumeDraggerY = 103;			
			}
			if (streampadPlayer.vars.volumeDraggerY < 12){
				streampadPlayer.vars.volumeDraggerY = 12;
			}
			volDragger.style.top =  streampadPlayer.vars.volumeDraggerY+'px';
			streampadPlayer.vars.theVolume = ((streampadPlayer.vars.volumeDraggerY*-1)+103);
			streampadPlayer.flash.getSWF("streampadFlash").setVolume(streampadPlayer.vars.theVolume/100);
		} catch (e){}
	},
	volumeButtonMouseOut : function(e){
		streampadPlayer.vars.volumeMouseOn = false;
		streampadPlayer.vars.volumeButtonMouseOverTimeout = setTimeout(streampadPlayer.Events.volumeButtonMouseOutDelay, 1000);
	},
	volumeButtonMouseOutDelay : function(){
		if (streampadPlayer.vars.volumeMouseOn == false){
			try {
				var volDiv = document.getElementById('streampadVolDiv');
				document.body.removeChild(volDiv);
			} catch (e){}
			var volumeButton = document.getElementById('streampadVolumeButton');
			volumeButton.style.backgroundPosition = streampadPlayer.Theme.volumeOff;
		}
	},
	winampTransport : function(event){
		switch (event.event) {
			case 'OnPlay' : 
				try {
					streampadPlayer.UI.showPause();
					streampadPlayer.vars.isPlaying = true;
					streampadPlayer.vars.queueNumber = window.external.PlayQueue.cursor;
					streampadPlayer.vars.currentSongVO = streampadPlayer.Playlist.array[streampadPlayer.vars.queueNumber];
					streampadPlayer.UI.setCurrent(streampadPlayer.Playlist.array[streampadPlayer.vars.queueNumber]);
					streampadPlayer.Event.fire(window, 'setCurrent', streampadPlayer.vars.queueNumber);
					streampadPlayer.Event.fire(window, 'play', null);
				} catch (e) {}
			break;
			case 'OnPause' : 
				try {
					if (event.paused == true){
						streampadPlayer.vars.isPlaying = false;
						streampadPlayer.UI.showPlay();
						streampadPlayer.Event.fire(window, 'pause', null);
					}
					if (event.paused == false){
						streampadPlayer.vars.isPlaying = true;
						streampadPlayer.UI.showPause();
						streampadPlayer.Event.fire(window, 'play', null);
					}
				} catch (e) {}
			break;
			default :
			break;
		}
	},
	profileButtonMouseOver : function(){
		var profileButton = document.getElementById('streampadProfileButton');
		profileButton.style.backgroundPosition = streampadPlayer.Theme.profileOn;
	},
	profileButtonMouseOut : function(){
		var profileButton = document.getElementById('streampadProfileButton');
		if (streampadPlayer.vars.profileDrawerShowing){
			profileButton.style.backgroundPosition = streampadPlayer.Theme.profileOn;
		} else {
			profileButton.style.backgroundPosition = streampadPlayer.Theme.profileOff;
		}
	},
	profileButtonClick : function(){
		var profileButton = document.getElementById('streampadProfileButton');
		if (streampadPlayer.vars.profileDrawerShowing){
			streampadPlayer.UI.destroyDrawer();
			//streampadPlayer.Event.remove(window, 'setCurrent', streampadPlayer.UI.fillProfileDrawerLeft);
		} else {
			streampadPlayer.UI.destroyDrawer();
			//streampadPlayer.Event.add(window, 'setCurrent', streampadPlayer.UI.fillProfileDrawerLeft);
			profileButton.style.backgroundPosition = streampadPlayer.Theme.profileOn;
			var borderNum = profileButton.getAttribute('bordernum');
			streampadPlayer.UI.buttonBorder(borderNum, 'borderOn');
			profileButton.setAttribute('title', 'Close Last.fm Scrobbler');
			streampadPlayer.UI.createProfileDrawer();
			streampadPlayer.vars.profileDrawerShowing = true;
		}
	},
	profileDrawerClosed : function(){
		var profileButton = document.getElementById('streampadProfileButton');
		profileButton.style.backgroundPosition = streampadPlayer.Theme.profileOff;
		var borderNum = profileButton.getAttribute('bordernum');
		streampadPlayer.UI.buttonBorder(borderNum, 'borderOff');
		profileButton.setAttribute('title', 'Open Last.fm Scrobbler');
		streampadPlayer.vars.profileDrawerShowing = false;
	},
	loginSubmit : function(){
		setTimeout(streampadPlayer.Events.loginSubmitDelay, 200);
	},
	loginSubmitDelay : function(){
		document.getElementById('streampadPlayerLoginLoader').style.display = 'block';
		streampadPlayer.flash.getSWF("streampadForm").submit();
	},
	loginBack : function(statusCode, loginId){
		document.getElementById('streampadPlayerLoginLoader').style.display = 'none';
		if (statusCode == 200){
			streampadPlayer.flash.getSWF("streampadFlash").checkt();
			streampadPlayer.vars.sn = loginId;
			streampadPlayer.UI.setLoggedIn();
			streampadPlayer.UI.fillProfileDrawer();
		} else {
			alert("There was problem logging in. Please try again");
		}
		streampadPlayer.Event.fire(window, 'oaLogin', statusCode);
	},
	oaLogout : {
		request : function(){
			document.getElementById('streampadPlayerLoginLoader').style.display = 'block';
			streampadPlayer.flash.getSWF("streampadFlash").oaLogout('streampadPlayer.Events.oaLogout.response');
			
		},
		response : function(statusCode){
			document.getElementById('streampadPlayerLoginLoader').style.display = 'none';
			streampadPlayer.vars.sn = null;
			streampadPlayer.Theme.profileOff = '-309px 8px';
			streampadPlayer.Theme.profileOn = '-95px 8px';
			document.getElementById('streampadProfileButton').style.backgroundPosition = streampadPlayer.Theme.profileOff;
			streampadPlayer.UI.createAOLSignin();
			streampadPlayer.UI.fillProfileDrawer();
		}
	},
	drawerDragDown : function(e){
		streampadPlayer.Event.add(document, 'mousemove', streampadPlayer.Events.drawerDragMove);
		streampadPlayer.Event.add(document, 'mouseup', streampadPlayer.Events.drawerDragUp);
		e.preventDefault();
	},
	drawerDragUp : function(){
		streampadPlayer.Event.remove(document, 'mousemove', streampadPlayer.Events.drawerDragMove);
		streampadPlayer.Event.remove(document, 'mouseup', streampadPlayer.Events.drawerDragUp);
		streampadPlayer.flash.getSWF("streampadFlash").setDrawerSize(streampadPlayer.params.drawersize);
	},
	drawerDragMove : function(e){
		try {
			if (e.clientY > 100){
				streampadPlayer.params.drawersize  = (streampadPlayer.Utils.getBodyHeight() - e.clientY);
				if (streampadPlayer.params.drawersize < 100) {
					streampadPlayer.params.drawersize = 100;
				}
				var drawer = document.getElementById('streampadDrawer');
				drawer.style.height = streampadPlayer.params.drawersize+'px';
				var right = document.getElementById('streampadDrawerRight');
				right.style.height = (streampadPlayer.params.drawersize-1)+'px';
				var left = document.getElementById('streampadDrawerLeft');
				left.style.height = (streampadPlayer.params.drawersize-1)+'px';
			}
		} catch (e){}
		
	},
	insertFullScreen : function(){
		streampadPlayer.Event.remove(window, 'playlistChange', streampadPlayer.Events.insertFullScreen);
		SPAPI.removeEventListener('onStart', streampadPlayer.Events.insertFullScreen);
			if (streampadPlayer.Playlist.array.length > 0){
			var btncolor = 'FFFFFF';
			var btnhover = 'C0C0C0';
			switch (streampadPlayer.params.btncolor){
				case 'white-gray' :
				break;
				case 'white-black' :
					btncolor = 'FFFFFF';
					btnhover = '000000';
				break;
				case 'black-gray' :
					btncolor = '000000';
					btnhover = 'C0C0C0';
				break;
				case 'black-white' :
					btncolor = '000000';
					btnhover = 'FFFFFF';
				break;
				case 'blue-white' :
					btncolor = '449FC1';
					btnhover = 'FFFFFF';
				break;
				default : 
				break;
			}
			try {
				var divFullScreen = document.getElementById('streampadPlayerFullScreenButton');
				var wMode = 'transparent';
				if (streampadPlayer.browser.engine.name == 'trident' && streampadPlayer.flash.majorVersion < 10){
					wMode = 'opaque';
				}
				var bgcolor = '#000000';
				if (streampadPlayer.params.bgcolor != null && streampadPlayer.params.bgcolor != ''){
					bgcolor = streampadPlayer.params.bgcolor;
				}
				divFullScreen.innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="fullscreenFlash" style="margin:0;"><param name=movie value="'+streampadPlayer.params.fsswf+'?'+streampadPlayer.vars.flashUID+'"><param name=swLiveConnect value="true"><param name=allowScriptAccess value="always"><param name=allowFullScreen value="true"><param name=allowNetworking value="all"><param name=wMode value="'+wMode+'"><param name=flashVars value="connection='+streampadPlayer.vars.flashUID+'&settings='+ streampadPlayer.params.fsxml+'&btncolor='+btncolor+'&btnhover='+btnhover+'&debug='+streampadPlayer.params.debug+'&bgcolor='+bgcolor+'"><embed bgcolor="#000000" flashVars="connection='+streampadPlayer.vars.flashUID+'&settings='+ streampadPlayer.params.fsxml+'&btncolor='+btncolor+'&btnhover='+btnhover+'&debug='+streampadPlayer.params.debug+'&bgcolor='+bgcolor+'" src="'+streampadPlayer.params.fsswf+'" type="application/x-shockwave-flash" width="100%" height="100%" wMode="'+wMode+'" allowNetworking="all" allowFullScreen="true" allowScriptAccess="always" name="fullscreenFlash"></embed></object>';
			} catch (e) {}
		} else {
			streampadPlayer.Event.add(window, 'playlistChange', streampadPlayer.Events.insertFullScreen);
		}
	}
	/*scrape : function(){
		var as = document.getElementsByTagName('a');
		var mp3s = 0;
		for(j=0; j<as.length; j++){
			var a = as[j];
			if (a.href.indexOf('.mp3') != -1){
				mp3s ++;
				var songVO = new streampadPlayer.SongVO();
				songVO.text = a.innerHTML;
				songVO.enclosure = a.href;
				songVO.sourceUrl = location.href;
				streampadPlayer.Playlist.push(songVO);
				streampadPlayer.Events.insertPlayButton(a, mp3s);			}
		}
		streampadPlayer.vars.total = mp3s;
		streampadPlayer.Event.add(window, 'setCurrent', streampadPlayer.Events.playButtonChange);
	},
	insertPlayButton : function(element, num){
		var playButton = document.createElement('img');
		streampadPlayer.Utils.setStyles(playButton, {'width' : '16px', 'height' : '16px', 'cursor' : 'pointer', 'marginRight' : '4px', 'verticalAlign' : 'text-bottom'});
		playButton.setAttribute('src', 'http://donkeykong.office.aol.com/~danielkantor07/streampad/prototype/play_blue.png');
		playButton.setAttribute('enclosure', element.href);
		playButton.setAttribute('id', 'streampadPlayerPlayButton'+element.href);
		streampadPlayer.Event.add(playButton, 'click', streampadPlayer.Events.playButtonClick);
		element.parentNode.insertBefore(playButton, element);
	},
	playButtonClick : function(e){
		e = e||window.event
		var target = e.currentTarget||e.srcElement;
		var enclosure = target.getAttribute('enclosure');
		streampadPlayer.vars.queueNumber = streampadPlayer.Events.matchEnclosure(enclosure);
		if (streampadPlayer.vars.built == true){
			streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
		} else {
			streampadPlayer.UI.build();
		}
	},
	pauseButtonClick : function(e){
		e = e||window.event
		var target = e.currentTarget||e.srcElement;
		target.setAttribute('src', 'http://donkeykong.office.aol.com/~danielkantor07/streampad/prototype/play_blue.png');
		streampadPlayer.UI.showPlay();
		streampadPlayer.vars.isPlaying = false;
		streampadPlayer.Event.remove(streampadPlayer.vars.oldPlayButton, 'click', streampadPlayer.Events.pauseButtonClick);
		streampadPlayer.Event.add(streampadPlayer.vars.oldPlayButton, 'click', streampadPlayer.Events.resumeButtonClick);
        if (streampadPlayer.vars.isWinamp){
        	window.external.Transport.Pause();
        } else {
          	streampadPlayer.flash.getSWF("streampadFlash").pause();
        }
        streampadPlayer.Event.fire(window, 'pause', null);
    },
    resumeButtonClick : function(e){
    	e = e||window.event
		var target = e.currentTarget||e.srcElement;
		target.setAttribute('src', 'http://donkeykong.office.aol.com/~danielkantor07/streampad/prototype/pause_blue.png');
		streampadPlayer.UI.showPause();
		streampadPlayer.vars.isPlaying = true;
		streampadPlayer.Event.remove(streampadPlayer.vars.oldPlayButton, 'click', streampadPlayer.Events.resumeButtonClick);
		streampadPlayer.Event.add(streampadPlayer.vars.oldPlayButton, 'click', streampadPlayer.Events.pauseButtonClick);
        if (streampadPlayer.vars.isWinamp){
        	window.external.Transport.Play();
        } else {
          	streampadPlayer.flash.getSWF("streampadFlash").unPause();
        }
        streampadPlayer.Event.fire(window, 'play', null);
    },
	matchEnclosure : function(enclosure){
		for (var i = 0; i < streampadPlayer.Playlist.array.length; i++){
			if (streampadPlayer.Playlist.array[i].enclosure == enclosure){
				return i;
			}
		}
	},
	playButtonChange : function(n){
		try {
			streampadPlayer.vars.oldPlayButton.setAttribute('src', 'http://donkeykong.office.aol.com/~danielkantor07/streampad/prototype/play_blue.png');
			streampadPlayer.Event.remove(streampadPlayer.vars.oldPlayButton, 'click', streampadPlayer.Events.pauseButtonClick);
			streampadPlayer.Event.add(streampadPlayer.vars.oldPlayButton, 'click', streampadPlayer.Events.playButtonClick);
		} catch (e) {}
		var enclosure = streampadPlayer.Playlist.array[n].enclosure;
		streampadPlayer.vars.oldPlayButton = document.getElementById('streampadPlayerPlayButton'+enclosure);
		streampadPlayer.vars.oldPlayButton.setAttribute('src', 'http://donkeykong.office.aol.com/~danielkantor07/streampad/prototype/pause_blue.png');
		streampadPlayer.Event.remove(streampadPlayer.vars.oldPlayButton, 'click', streampadPlayer.Events.playButtonClick);
		streampadPlayer.Event.add(streampadPlayer.vars.oldPlayButton, 'click', streampadPlayer.Events.pauseButtonClick);
	}*/
};
streampadPlayer.UI = {
	/* initilizes bottombar on bottom of page */
	init : function(){
		streampadPlayer.vars.built = false;
		if (streampadPlayer.vars.isWinamp){
			streampadPlayer.params.showvolumebutton = 'false';
			streampadPlayer.params.showpop = 'false';
		}
		streampadPlayer.vars.fontSize = streampadPlayer.params.height/2.5;
		try {
			var old = document.getElementById('streampadBottomBar');
			old.parentNode.removeChild(old);
		} catch(e){}
		var height = streampadPlayer.params.height;
		var width = streampadPlayer.params.width
		if (streampadPlayer.params.visible == 'false'){
			height = 1;
			width = '1px';
		}
		var bottomBar = document.createElement('div');
		document.body.appendChild(bottomBar);
		bottomBar.setAttribute('id', 'streampadBottomBar');
		streampadPlayer.Utils.setStyles(bottomBar, {'position' : 'fixed', 'bottom' : '0', 'left' : '0', 'height' : height+'px', 'width' : width , 'color' : '#FFFFFF', 'fontFamily' : 'Arial, Helvetica, sans-serif', 'fontSize' : '12px', 'cursor' : 'pointer', 'lineHeight' : 'normal', 'zIndex' : '10000', 'textAlign' : 'left'});
		if (streampadPlayer.params.visible == 'false'){
			bottomBar.style.opacity = 0;
		}
		if (streampadPlayer.params.bgcolor != ''){
			if (streampadPlayer.params.bgcolor.indexOf('#') == -1){
				streampadPlayer.params.bgcolor = '#'+streampadPlayer.params.bgcolor;
			}
			bottomBar.style.background = streampadPlayer.params.bgcolor;
		} else {
			bottomBar.style.background ='url('+streampadPlayer.params.bgimg+') repeat-x';	
		}
		if (streampadPlayer.browser.engine.trident4){
			bottomBar.style.position = 'absolute';	
			if (streampadPlayer.params.visible == 'false'){
				bottomBar.style.filter = "alpha(opacity=0)";
			}
		}
		streampadPlayer.Event.add(bottomBar, 'click', streampadPlayer.UI.build);
		var poweredBy = document.createElement('a');
		streampadPlayer.Utils.setStyles(poweredBy, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/hW7np5j4y/streampad-white-logo.gif") no-repeat 0 8px', 'height' : '30px', 'width' : '75px', 'display' : 'block', 'textDecoration' : 'none', 'cssFloat' : 'right', 'styleFloat' : 'right', 'margin' : '0 8px'});
		poweredBy.setAttribute('href', 'http://jduthemes.tumblr.com/streampadv2');
		poweredBy.setAttribute('target', '_blank');
		poweredBy.setAttribute('title', 'Streampad v2 powered by Streampad');
		streampadPlayer.Event.add(poweredBy, 'click', streampadPlayer.Events.poweredByClick);
		bottomBar.appendChild(poweredBy);
		if (streampadPlayer.browser.engine.trident4){
			streampadPlayerFixPNG(poweredBy);
			poweredBy.style.height = '19px';
			poweredBy.style.margin = '8px 8px 0 8px';
		}
		if (streampadPlayer.params.showpop != 'false'){
			if (streampadPlayer.Theme.borderRight == false){
				var borderRight = document.createElement('div');
				streampadPlayer.Theme.borderNum++;
				borderRight.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
				borderRight.className = 'streampadPlayerbutton';
				streampadPlayer.Utils.setStyles(borderRight, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
				bottomBar.appendChild(borderRight);
				streampadPlayer.Theme.borderRight = true;
			}
			var popnew = document.createElement('div');
			popnew.setAttribute('id', 'streampadPopNew');
			popnew.className = 'streampadPlayerbutton';
			streampadPlayer.Utils.setStyles(popnew, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '28px', 'height' : '30px', 'cursor' : 'pointer', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.popoutOff+' no-repeat'});
			popnew.setAttribute('title', 'Pop this player into a new page');
			popnew.setAttribute('bordernum', streampadPlayer.Theme.borderNum);
			streampadPlayer.Event.add(popnew, 'click', streampadPlayer.Events.popnew);
			streampadPlayer.Event.add(popnew, 'mouseover', streampadPlayer.Events.popnewMouseOver);
			streampadPlayer.Event.add(popnew, 'mouseout', streampadPlayer.Events.popnewMouseOut);
			bottomBar.appendChild(popnew);
			var borderLeft = document.createElement('div');
			streampadPlayer.Theme.borderNum++;
			borderLeft.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
			borderLeft.className = 'streampadPlayerbutton';
			streampadPlayer.Utils.setStyles(borderLeft, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
			bottomBar.appendChild(borderLeft);
		}
		var clickToPlay = document.createElement('div');
		var clickToPlayText = "Click to play all audio posts";
		if (streampadPlayer.params.api != null){
			clickToPlayText = "Click to play all audio posts from "+streampadPlayer.params.api;
		}
		if (streampadPlayer.params.clicktext != ''){
			clickToPlayText = streampadPlayer.params.clicktext.replace(/%20/g, ' ');
			clickToPlayText = decodeURIComponent(clickToPlayText);
		}
		clickToPlay.appendChild(document.createTextNode(clickToPlayText));
		clickToPlay.setAttribute('id', 'streampadPlayerClickToPlay');
		if (streampadPlayer.params.trackcolor.indexOf('#') == -1){
			streampadPlayer.params.trackcolor = '#'+streampadPlayer.params.trackcolor;
		}
		bottomBar.appendChild(clickToPlay);
		streampadPlayer.Utils.setStyles(clickToPlay, {'position' : 'absolute', 'left' : '10px', 'fontSize' : streampadPlayer.vars.fontSize+'px', 'top' : (streampadPlayer.params.height/2)-(streampadPlayer.vars.fontSize/2)+'px', 'color' : streampadPlayer.params.trackcolor});
		if (streampadPlayer.params.clickimg == 'true'){
			var clickToPlayImg = document.createElement('div');
			clickToPlayImg.setAttribute('id', 'streampadPlayerClickToPlayImg');
			clickToPlayImg.className = 'streampadPlayerbutton';
			streampadPlayer.Utils.setStyles(clickToPlayImg, {'width' : '20px', 'height' : '30px', 'position' : 'absolute', 'left' : '10px', 'top' : '0', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.playOff+' no-repeat'});
			bottomBar.insertBefore(clickToPlayImg, clickToPlay);
			clickToPlay.style.left = '40px';
		}
		streampadPlayer.UI.resize();
		try {
			onStreampadPlayerReady(SPAPI);
		} catch(e){}
		streampadPlayer.Event.fire(window, 'init', null);
		if (streampadPlayer.params.autoplay == 'true'){
			streampadPlayer.UI.build();
		}
	},
	/* called when user clicks on initilized bottombar. Can be called by playlist or any other js */
	build : function(){
		/*setTimeout(streampadPlayer.Omni.request, 10000);*/
		streampadPlayer.vars.flashUID = new Date().getTime();
		if (streampadPlayer.params.showplaylist == 'true'){
			streampadPlayer.Event.add(window, 'playlistChange', streampadPlayer.Events.playlistButtonClick);
		}
		var bottomBar = document.getElementById('streampadBottomBar');
		streampadPlayer.Event.remove(bottomBar, 'click', streampadPlayer.UI.build);
		bottomBar.style.cursor = 'default';
		var clickToPlay = document.getElementById('streampadPlayerClickToPlay');
		bottomBar.removeChild(clickToPlay);
		try {
			var clickToPlayImg = document.getElementById('streampadPlayerClickToPlayImg');
			bottomBar.removeChild(clickToPlayImg);
		} catch (e){}
		
		
		if (streampadPlayer.params.showfullscreen != 'false'){
			if (streampadPlayer.Theme.borderRight == false){
				var borderRight = document.createElement('div');
				streampadPlayer.Theme.borderNum++;
				borderRight.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
				borderRight.className = 'streampadPlayerbutton';
				streampadPlayer.Utils.setStyles(borderRight, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
				bottomBar.appendChild(borderRight);
				streampadPlayer.Theme.borderRight = true;
			}
			var divFullScreen = document.createElement('div');
			streampadPlayer.Utils.setStyles(divFullScreen, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '28px', 'height' : '30px', 'cursor' : 'pointer', 'position' : 'relative'});
			divFullScreen.setAttribute('id', 'streampadPlayerFullScreenButton');
			bottomBar.appendChild(divFullScreen);
			var borderLeft = document.createElement('div');
			streampadPlayer.Utils.setStyles(borderLeft, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
			streampadPlayer.Theme.borderNum++;
			borderLeft.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
			borderLeft.className = 'streampadPlayerbutton';
			bottomBar.appendChild(borderLeft);
		}		
		
		if (streampadPlayer.params.showvolumebutton != 'false'){
			if (streampadPlayer.Theme.borderRight == false){
				var borderRight = document.createElement('div');
				streampadPlayer.Theme.borderNum++;
				borderRight.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
				borderRight.className = 'streampadPlayerbutton';
				streampadPlayer.Utils.setStyles(borderRight, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
				bottomBar.appendChild(borderRight);
				streampadPlayer.Theme.borderRight = true;
			}
			var volumeButton = document.createElement('div');
			volumeButton.setAttribute('id', 'streampadVolumeButton');
			volumeButton.className = 'streampadPlayerbutton';
			volumeButton.setAttribute('bordernum', streampadPlayer.Theme.borderNum);
			streampadPlayer.Utils.setStyles(volumeButton, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '28px', 'height' : '30px', 'cursor' : 'pointer', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.volumeOff+' no-repeat', 'position' : 'relative'});
			streampadPlayer.Event.add(volumeButton, 'mouseover', streampadPlayer.Events.volumeButtonMouseOver);
			bottomBar.appendChild(volumeButton);
			var borderLeft = document.createElement('div');
			streampadPlayer.Utils.setStyles(borderLeft, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
			streampadPlayer.Theme.borderNum++;
			borderLeft.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
			borderLeft.className = 'streampadPlayerbutton';
			bottomBar.appendChild(borderLeft);
		}
		if (streampadPlayer.params.showplaylistbutton != 'false'){
			if (streampadPlayer.Theme.borderRight == false){
				var borderRight = document.createElement('div');
				streampadPlayer.Theme.borderNum++;
				borderRight.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
				borderRight.className = 'streampadPlayerbutton';
				streampadPlayer.Utils.setStyles(borderRight, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
				bottomBar.appendChild(borderRight);
				streampadPlayer.Theme.borderRight = true;
			}
			var playlistButton = document.createElement('div');
			playlistButton.setAttribute('id', 'streampadPlaylistButton');
			playlistButton.className = 'streampadPlayerbutton';
			playlistButton.setAttribute('bordernum', streampadPlayer.Theme.borderNum);
			streampadPlayer.Utils.setStyles(playlistButton, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '28px', 'height' : '30px', 'cursor' : 'pointer', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.playlistOff+' no-repeat'});
			playlistButton.setAttribute('title', 'Open Playlist');
			streampadPlayer.Event.add(playlistButton, 'click', streampadPlayer.Events.playlistButtonClick);
			streampadPlayer.Event.add(playlistButton, 'mouseover', streampadPlayer.Events.playlistButtonMouseOver);
			streampadPlayer.Event.add(playlistButton, 'mouseout', streampadPlayer.Events.playlistButtonMouseOut);
			streampadPlayer.Event.add(window, 'drawerDestroyed', streampadPlayer.Events.playlistDrawerClosed);
			bottomBar.appendChild(playlistButton);
			var borderLeft = document.createElement('div');
			streampadPlayer.Theme.borderNum++;
			borderLeft.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
			borderLeft.className = 'streampadPlayerbutton';
			streampadPlayer.Utils.setStyles(borderLeft, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
			bottomBar.appendChild(borderLeft);
		}
		if (streampadPlayer.params.showlastfmbutton != 'false'){
		if (streampadPlayer.vars.sn != null && streampadPlayer.vars.sn != ''){
			streampadPlayer.Theme.profileOff = '-170px 8px';
			streampadPlayer.Theme.profileOn = '-384px 8px';
		}
			if (streampadPlayer.Theme.borderRight == false){
				var borderRight = document.createElement('div');
				streampadPlayer.Theme.borderNum++;
				borderRight.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
				borderRight.className = 'streampadPlayerbutton';
				streampadPlayer.Utils.setStyles(borderRight, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
				bottomBar.appendChild(borderRight);
				streampadPlayer.Theme.borderRight = true;
			}
			var profileButton = document.createElement('div');
			profileButton.setAttribute('id', 'streampadProfileButton');
			profileButton.className = 'streampadPlayerbutton';
			profileButton.setAttribute('bordernum', streampadPlayer.Theme.borderNum);
			streampadPlayer.Utils.setStyles(profileButton, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '28px', 'height' : '30px', 'cursor' : 'pointer', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.profileOff+' no-repeat', 'position' : 'relative'});
			profileButton.setAttribute('title', 'Open Last.fm Scrobbler');
			streampadPlayer.Event.add(profileButton, 'click', streampadPlayer.Events.profileButtonClick);
			streampadPlayer.Event.add(profileButton, 'mouseover', streampadPlayer.Events.profileButtonMouseOver);
			streampadPlayer.Event.add(profileButton, 'mouseout', streampadPlayer.Events.profileButtonMouseOut);
			bottomBar.appendChild(profileButton);
			streampadPlayer.Event.add(window, 'drawerDestroyed', streampadPlayer.Events.profileDrawerClosed);
			var borderLeft = document.createElement('div');
			streampadPlayer.Theme.borderNum++;
			borderLeft.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
			borderLeft.className = 'streampadPlayerbutton';
			streampadPlayer.Utils.setStyles(borderLeft, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
			bottomBar.appendChild(borderLeft);
		}
		var audioPlays = document.createElement('div');
		audioPlays.setAttribute('id', 'streampadAudioPlays');
		streampadPlayer.Utils.setStyles(audioPlays, {'cssFloat' : 'right', 'styleFloat' : 'right',  'position' : 'relative', 'color' : '#FFFFFF', 'fontSize' : streampadPlayer.vars.fontSize+'px', 'fontFamily' : 'arial', 'overflow' : 'hidden', 'height' : '30px', 'lineHeight' : '30px', 'marginRight' : '5px'});
		bottomBar.appendChild(audioPlays);
		var controls = document.createElement('div');
		streampadPlayer.Utils.setStyles(controls, {'position' : 'absolute', 'left' : '5px', 'width' : '65px', 'height' : '100%'});
		bottomBar.appendChild(controls);
		var previousTrack = document.createElement('div');
		streampadPlayer.Utils.setStyles(previousTrack, {'width' : '20px', 'height' : '30px', 'cursor' : 'pointer', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.prevOff+' no-repeat', 'cssFloat' : 'left', 'styleFloat' : 'left'});
		streampadPlayer.Event.add(previousTrack, 'mouseover', function(){ previousTrack.style.backgroundPosition = streampadPlayer.Theme.prevOn;});
		streampadPlayer.Event.add(previousTrack, 'mouseout', function(){ previousTrack.style.backgroundPosition = streampadPlayer.Theme.prevOff;});
		streampadPlayer.Event.add(previousTrack, 'click', streampadPlayer.Events.previousTrack);
		previousTrack.className = 'streampadPlayerbutton';
		controls.appendChild(previousTrack);
		var playTrack = document.createElement('div');
		playTrack.setAttribute('id', 'streampadPlayTrack');
		streampadPlayer.Utils.setStyles(playTrack, {'width' : '20px', 'height' : '30px', 'cursor' : 'pointer', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.playOff+' no-repeat', 'cssFloat' : 'left', 'styleFloat' : 'left'});
		streampadPlayer.Event.add(playTrack, 'mouseover', streampadPlayer.Events.playTrackMouseOver)
		streampadPlayer.Event.add(playTrack, 'mouseout', streampadPlayer.Events.playTrackMouseOut)
		streampadPlayer.Event.add(playTrack, 'click', streampadPlayer.Events.playTrack);
		playTrack.className = 'streampadPlayerbutton';
		controls.appendChild(playTrack);
		streampadPlayer.UI.showPause();
		var nextTrack = document.createElement('div');
		streampadPlayer.Utils.setStyles(nextTrack, {'width' : '20px', 'height' : '30px', 'cursor' : 'pointer', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.nextOff+' no-repeat', 'cssFloat' : 'left', 'styleFloat' : 'left'});
		streampadPlayer.Event.add(nextTrack, 'mouseover', function(){ nextTrack.style.backgroundPosition = streampadPlayer.Theme.nextOn; });
		streampadPlayer.Event.add(nextTrack, 'mouseout', function(){ nextTrack.style.backgroundPosition = streampadPlayer.Theme.nextOff; });
		streampadPlayer.Event.add(nextTrack, 'click', streampadPlayer.Events.nextTrack);
		nextTrack.className = 'streampadPlayerbutton';
		controls.appendChild(nextTrack);
		var audioCaption = document.createElement('a');
		audioCaption.setAttribute('id', 'streampadAudioCaption');
		audioCaption.setAttribute('target', '_blank');
		audioCaption.setAttribute('title', 'Click to view post');
		streampadPlayer.Utils.setStyles(audioCaption, {'position' : 'absolute', 'left' : '240px', 'top' : (streampadPlayer.params.height/2)-(streampadPlayer.vars.fontSize/2)+'px', 'height' : streampadPlayer.params.height/2+'px', 'color' : streampadPlayer.params.trackcolor, 'overflow' : 'hidden', 'textDecoration' : 'none', 'fontWeight' : 'bold', 'fontSize' : streampadPlayer.vars.fontSize+'px', 'fontFamily' : 'arial', 'border' : 'none'});
		streampadPlayer.Event.add(audioCaption, 'mouseover', function(){ audioCaption.style.textDecoration = 'underline'; });
		streampadPlayer.Event.add(audioCaption, 'mouseout', function(){ audioCaption.style.textDecoration = 'none'; });
		bottomBar.appendChild(audioCaption);
		var flash = document.createElement('div');
		flash.setAttribute('id', 'streampadAudioPlayer');
		var theWidth = 135;
		var theHeight = streampadPlayer.params.height/3;
		streampadPlayer.Utils.setStyles(flash, {'position' : 'absolute', 'left' : '80px', 'width' : theWidth+'px', 'height' : theHeight+'px', 'top' : (streampadPlayer.params.height/2)-(theHeight/2)+'px', 'lineHeight' : '0'});
		bottomBar.appendChild(flash);
		streampadPlayer.vars.isFlashLoaded = setTimeout(streampadPlayer.Utils.flashLoaded, 5000);
		flash.innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="streampadFlash" style="margin:0;"><param name=movie value="'+streampadPlayer.params.swfurl+'?'+streampadPlayer.vars.flashUID+'"><param name=swLiveConnect value="true"><param name=allowScriptAccess value="always"><param name=allowNetworking value="all"><param name=wMode value="transparent"><param name=flashVars value="onload=streampadPlayer.flash.loaded&theHeight='+theHeight+'&theWidth='+theWidth+'&callback=streampadPlayer&progressBackColor='+streampadPlayer.params.progressbackcolor+'&progressFrontColor='+streampadPlayer.params.progressfrontcolor+'&connection='+streampadPlayer.vars.flashUID+'&debug='+streampadPlayer.params.debug+'&globalCheck='+streampadPlayer.params.globalcheck+'"><embed flashVars="onload=streampadPlayer.flash.loaded&theHeight='+theHeight+'&theWidth='+theWidth+'&callback=streampadPlayer&progressBackColor='+streampadPlayer.params.progressbackcolor+'&progressFrontColor='+streampadPlayer.params.progressfrontcolor+'&connection='+streampadPlayer.vars.flashUID+'&debug='+streampadPlayer.params.debug+'&globalCheck='+streampadPlayer.params.globalcheck+'" src="'+streampadPlayer.params.swfurl+'" type="application/x-shockwave-flash" width="100%" height="100%" allowNetworking="all" allowScriptAccess="always" wMode="transparent" name="streampadFlash"></embed></object>';
		
		var f = document.createElement('object');
		f.id = "flashChromeDummy";
		f.type = "application/x-shockwave-flash";
		f.data = streampadPlayer.params.swfurl;
		streampadPlayer.Utils.setStyles(f, {'position' : 'fixed', 'bottom' : '0', 'width' : '398px', 'height' : '298px', 'visibility' : 'hidden'});
		flash.appendChild(f);

		streampadPlayer.vars.built = true;
		streampadPlayer.UI.resize();
	},
	/* called when window resizes */
	resize : function(){
		try {
			var bottomBar = document.getElementById('streampadBottomBar');
			var s = bottomBar.offsetWidth;
			document.getElementById('streampadAudioCaption').style.width =  (s-690)+'px';
			//document.getElementById('streampadAudioPlays').style.left = (s-280)+'px';
		} catch (e){}
		streampadPlayer.Events.scrollHandler();
	},
	/* sets the UI to the current song playing */
	setCurrent : function(songVO){
		if (streampadPlayer.vars.isWinamp == false){
			document.getElementById('streampadAudioPlayer').style.border = '1px solid #'+streampadPlayer.params.progressbackcolor;
		}
		var queue = "";
		if (streampadPlayer.vars.total){
			queue = (streampadPlayer.vars.queueNumber+1)+" of "+streampadPlayer.vars.total;
		} else {
			queue = (streampadPlayer.vars.queueNumber+1);	
		}
		this.setCaption("<span style='margin-right:5px;'>"+queue+":</span> "+songVO.text, songVO.sourceUrl, songVO.clickFunction);
		if (songVO.plays){
			document.getElementById('streampadAudioPlays').innerHTML = 'Plays : '+songVO.plays;
		}
		streampadPlayer.UI.showPause();
	},
	/* call to set the caption. If clickFunction is not null it will call that onclick. If it is null, it will open sourceUrl in new window */
	setCaption : function(text, sourceUrl, clickFunction){
		var streampadAudioCaption = document.getElementById('streampadAudioCaption');
		streampadAudioCaption.innerHTML = text;
		if (clickFunction != null){
			streampadAudioCaption.setAttribute('href', '#');
			streampadAudioCaption.setAttribute('target', '_self');
			streampadAudioCaption.onclick = clickFunction;
		} else {
			if (sourceUrl != null){
				if (sourceUrl == 'AOL Music'){
					sourceUrl = 'http://music.aol.com/song/id/'+streampadPlayer.vars.currentSongVO.trackAolId;
				}
				streampadAudioCaption.setAttribute('href', sourceUrl);
				streampadAudioCaption.setAttribute('target', '_blank');
				streampadAudioCaption.onclick = null;
			} else {
				streampadAudioCaption.setAttribute('href', '#');
				streampadAudioCaption.setAttribute('target', '_self');
				streampadAudioCaption.onclick = null;
			}
		}
	},
	/* call this if the playlist is empty. */
	noAudioPosts : function(){
		bottomBar = document.getElementById('streampadBottomBar');
		bottomBar.innerHTML = "";
		var poweredBy = document.createElement('a');
		streampadPlayer.Utils.setStyles(poweredBy, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/hW7np5j4y/streampad-white-logo.gif") no-repeat 0 8px', 'height' : '30px', 'width' : '75px', 'display' : 'block', 'textDecoration' : 'none', 'cssFloat' : 'right', 'styleFloat' : 'right', 'margin' : '0 8px'});
		poweredBy.setAttribute('href', streampadPlayer.vars.poweredByLink);
		poweredBy.setAttribute('target', '_blank');
		streampadPlayer.Event.add(poweredBy, 'click', streampadPlayer.Events.poweredByClick);
		bottomBar.appendChild(poweredBy);
		if (streampadPlayer.browser.engine.trident4){
			streampadPlayerFixPNG(poweredBy);
			poweredBy.style.height = '19px';
			poweredBy.style.margin = '8px 8px 0 8px';
		}
		var none = document.createElement('div');
		none.appendChild(document.createTextNode('No Songs'));
		streampadPlayer.Utils.setStyles(none, {'position' : 'absolute', 'left' : '10px', 'top' : '8px'});
		bottomBar.appendChild(none);
	},
	/* call this to show the pause button. Called when user clicks play/pause */
	showPause : function(){
		var streampadPlayTrack = document.getElementById('streampadPlayTrack');
		streampadPlayTrack.style.backgroundPosition = streampadPlayer.Theme.pauseOff;
	},
	/* call this to show the play button. Called when user clicks play/pause */
	showPlay : function(){
		var streampadPlayTrack = document.getElementById('streampadPlayTrack');
		streampadPlayTrack.style.backgroundPosition = streampadPlayer.Theme.playOff;
	},
	/* Create the drawer */
	createDrawer : function(){
		var drawer = document.createElement('div');
		drawer.setAttribute('id', 'streampadDrawer');
		streampadPlayer.Utils.setStyles(drawer, {'height' : streampadPlayer.params.drawersize+'px', 'backgroundColor' : '#FFFFFF', 'position' : 'fixed', 'overflow' : 'auto', 'bottom' : streampadPlayer.params.height+'px', 'left' : '0', 'width' : '100%', 'zIndex' : '99999'});
		if (streampadPlayer.browser.engine.trident4){
				drawer.style.position = 'absolute';	
		}
		document.body.appendChild(drawer);
		var drawerTop = document.createElement('div');
		drawerTop.setAttribute('id', 'streampadDrawerTop');
		streampadPlayer.Utils.setStyles(drawerTop, {'height' : '1px', 'backgroundColor' : '#000000', 'width' : '100%', 'position' : 'absolute', 'cursor' : 'ns-resize', 'left' : '0', 'top' : '0'});
		drawer.appendChild(drawerTop);
		streampadPlayer.Event.add(drawerTop, 'mousedown', streampadPlayer.Events.drawerDragDown);
		streampadPlayer.Event.add(drawerTop, 'mouseup', streampadPlayer.Events.drawerDragUp);
		streampadPlayer.params.showdrawer = true;
		streampadPlayer.Event.fire(window, 'drawerCreated', null);
		streampadPlayer.UI.resize();
		return drawer;
	},
	/* Destroy the drawer */
	destroyDrawer : function(){
		try {
			var drawer = document.getElementById('streampadDrawer');
			document.body.removeChild(drawer);
			streampadPlayer.params.showdrawer = false;
			streampadPlayer.Event.fire(window, 'drawerDestroyed', null);
		} catch(e){}
	},
	/* Create Playlist Drawer */
	createPlaylistDrawer : function(){
		var drawer = this.createDrawer();
		var left = document.createElement('div');
		left.setAttribute('id', 'streampadDrawerLeft');
		streampadPlayer.Utils.setStyles(left, {'position' : 'absolute', 'left' : '0', 'top' : '1px', 'width' : '435px', 'overflow' : 'hidden', 'height' : (streampadPlayer.params.drawersize-1)+'px', 'background' : '#e5e5e5 url("https://secure.static.tumblr.com/ujjnqse/fx5np5jix/drawer-left-break.gif") 100% 0 repeat-y'});
		drawer.appendChild(left);
		var nowPlayingHeader = document.createElement('div');
		streampadPlayer.Utils.setStyles(nowPlayingHeader, {'lineHeight' : 'normal', 'background' : 'url("https://secure.static.tumblr.com/ujjnqse/KUOnp5jpp/sound-wave.gif") 0 2px no-repeat', 'fontSize' : '14px', 'fontFamily' : 'Arial, Helvetica, sans-serif', 'fontWeight' : 'bold', 'margin' : '15px 0 0 15px', 'textIndent' : '30px', 'textAlign' : 'left', 'color' : '#000000'});
		nowPlayingHeader.appendChild(document.createTextNode('Now Playing'));
		left.appendChild(nowPlayingHeader);
		var coverArtDiv = document.createElement('div');
		streampadPlayer.Utils.setStyles(coverArtDiv, {'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '10px 18px 0 15px', 'display' : 'inline', 'height' : '150px', 'width' : '150px'});
		left.appendChild(coverArtDiv);
		var coverArt = document.createElement('img');
		coverArt.setAttribute('id', 'streampadCoverArt');
		coverArt.setAttribute('src', 'https://secure.static.tumblr.com/ujjnqse/ZCtnp5k0g/record-150.gif');
		coverArt.setAttribute('width', '150');
		coverArt.setAttribute('height', '150');
		streampadPlayer.Utils.setStyles(coverArt, {'border' : '1px solid #D4D4D4', 'backgroundColor' : '#FDFDFD', 'padding' : '4px'});
		coverArtDiv.appendChild(coverArt);
		var songTitle = document.createElement('div');
		songTitle.setAttribute('id', 'streampadPlaylistSongTitle');
		streampadPlayer.Utils.setStyles(songTitle, {'fontSize' : '18px', 'fontWeight' : 'bold', 'fontFamily' : 'Arial, Helvetica, sans-serif', 'margin' : '20px 10px 15px 0', 'color' : '#000000', 'textAlign' : 'left'});
		left.appendChild(songTitle);
		var artist = document.createElement('a');
		artist.setAttribute('id', 'streampadPlaylistArtist');
		artist.setAttribute('target', '_blank');
		streampadPlayer.Utils.setStyles(artist, {'fontSize' : '14px', 'fontWeight' : 'bold', 'fontFamily' : 'Arial, Helvetica, sans-serif', 'color' : '#000000', 'textAlign' : 'left'});
		left.appendChild(artist);
		var album = document.createElement('div');
		album.setAttribute('id', 'streampadPlaylistAlbum');
		streampadPlayer.Utils.setStyles(album, {'fontSize' : '12px', 'fontFamily' : 'Arial, Helvetica, sans-serif', 'marginTop' : '4px', 'color' : '#000000', 'textAlign' : 'left'});
		left.appendChild(album);
		var itunes = document.createElement('a');
		itunes.setAttribute('target', '_blank');
		itunes.setAttribute('id', 'streampadPlaylistItunes');
		streampadPlayer.Utils.setStyles(itunes, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.itunesOff, 'width' : '124px', 'height' : '18px', 'lineHeight' : '18px', 'textAlign' : 'center', 'fontSize' : '10px', 'fontWeight' : 'bold', 'fontFamily' : 'Arial, Helvetica, sans-serif', 'textDecoration' : 'none', 'color' : '#FFFFFF', 'display' : 'block', 'margin' : '30px 5px 0 0', 'cssFloat' : 'left', 'styleFloat' : 'left', 'cursor' : 'pointer'});
		streampadPlayer.Event.add(itunes, 'mouseover', function(){ itunes.style.backgroundPosition = streampadPlayer.Theme.itunesOn; });
	    streampadPlayer.Event.add(itunes, 'mouseout', function(){ itunes.style.backgroundPosition = streampadPlayer.Theme.itunesOff; });
		left.appendChild(itunes);
		var amazon = document.createElement('a');
		amazon.setAttribute('target', '_blank');
		amazon.setAttribute('id', 'streampadPlaylistAmazon');
		streampadPlayer.Utils.setStyles(amazon, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.amazonOff, 'width' : '94px', 'height' : '18px', 'lineHeight' : '18px', 'textAlign' : 'center', 'fontSize' : '10px', 'fontWeight' : 'bold', 'fontFamily' : 'Arial, Helvetica, sans-serif', 'textDecoration' : 'none', 'color' : '#FFFFFF', 'display' : 'block', 'marginTop' : '30px', 'cssFloat' : 'left', 'styleFloat' : 'left', 'cursor' : 'pointer'});
		streampadPlayer.Event.add(amazon, 'mouseover', function(){ amazon.style.backgroundPosition = streampadPlayer.Theme.amazonOn; });
		streampadPlayer.Event.add(amazon, 'mouseout', function(){ amazon.style.backgroundPosition = streampadPlayer.Theme.amazonOff; });
		left.appendChild(amazon);
		var purchase = document.createElement('a');
		purchase.setAttribute('target', '_blank');
		purchase.setAttribute('id', 'streampadPlaylistPurchase');
		streampadPlayer.Utils.setStyles(purchase, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat -14px -151px', 'width' : '28px', 'height' : '19px', 'lineHeight' : '19px', 'textAlign' : 'center', 'fontSize' : '10px', 'fontWeight' : 'bold', 'fontFamily' : 'Arial, Helvetica, sans-serif', 'textDecoration' : 'none', 'color' : '#FFFFFF', 'display' : 'block', 'marginTop' : '30px', 'cssFloat' : 'left', 'styleFloat' : 'left', 'cursor' : 'pointer'});
		streampadPlayer.Event.add(purchase, 'mouseover', function(){ purchase.style.backgroundPosition = "-118px -151px"; });
		streampadPlayer.Event.add(purchase, 'mouseout', function(){ purchase.style.backgroundPosition = "-14px -151px"; });
		left.appendChild(purchase);
		var right = document.createElement('div');
		right.setAttribute('id', 'streampadDrawerRight');
		streampadPlayer.Utils.setStyles(right, {'position' : 'absolute', 'left' : '435px', 'top' : '1px', 'right' : '0', 'height' : (streampadPlayer.params.drawersize-1)+'px'});
		if (streampadPlayer.browser.engine.trident4){
			right.style.width = streampadPlayer.Utils.getBodyWidth()-435;
		}
		drawer.appendChild(right);
		var playlistHeader = document.createElement('div');
		playlistHeader.setAttribute('id', 'streampadPlaylistHeader');
		streampadPlayer.Utils.setStyles(playlistHeader, {'height' : '36px', 'lineHeight' : '36px', 'background' : 'url("https://secure.static.tumblr.com/ujjnqse/Ct7np5jw6/drawer-right-header.gif") repeat-x', 'width' : '100%', 'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'color' : '#000000', 'textIndent' : '30px', 'textAlign' : 'left', 'borderBottom' : '1px solid #D3D4D6'});
		right.appendChild(playlistHeader);
		var playlistItemsWrap = document.createElement('div');
		playlistItemsWrap.setAttribute('id', 'streampadPlaylistWrap');
		streampadPlayer.Utils.setStyles(playlistItemsWrap, {'position' : 'absolute', 'top' : '37px', 'left' : '0', 'bottom' : '0', 'width' : '100%', 'overflow' : 'auto'});
		if (streampadPlayer.browser.engine.trident4){
			playlistItemsWrap.style.height = (streampadPlayer.params.drawersize-37)+'px';
		}
                if (streampadPlayer.Playlist.array.length > 1000 && navigator.userAgent.indexOf('AppleWebKit') != -1) streampadPlayer.Event.add(playlistItemsWrap, 'scroll', this.playlistScroll);
		right.appendChild(playlistItemsWrap);
		var playlistItems = document.createElement('div');
		playlistItems.setAttribute('id', 'streampadPlaylistItems');
		streampadPlayer.Utils.setStyles(playlistItems, {'position' : 'relative', 'top' : '0', 'left' : '0'});
		if (streampadPlayer.browser.engine.trident4){
			playlistItems.style.height = (streampadPlayer.params.drawersize-37)+'px';
		}
		playlistItemsWrap.appendChild(playlistItems);
		this.fillPlaylistItems();
		if (streampadPlayer.Playlist.array.length < streampadPlayer.vars.total){
			//this.showLoadMore();
		}
	},
        playlistScroll: function() {
          var n = streampadPlayer.Playlist.array.length;
          var itemHeight = 45;
          var fullHeight = document.getElementById("streampadPlaylistWrap").scrollHeight;
          var viewportHeight = streampadPlayer.params.drawersize;
          var fromTop = document.getElementById("streampadPlaylistWrap").scrollTop;
          var iPos = parseInt(fromTop / itemHeight);
          var lowerPosLimit = Math.max(0, iPos);
          var upperPosLimit = Math.min(n, iPos + parseInt(viewportHeight / itemHeight));
          for (var i = 0; i < lowerPosLimit; i++) document.getElementById("streampadPlaylistItemWrap" + i).className = "sp-playlist-hide";
          for (var i = n - 1; i > upperPosLimit; i--) document.getElementById("streampadPlaylistItemWrap" + i).className = "sp-playlist-hide";
          for (var i = iPos; i > lowerPosLimit; i--) document.getElementById("streampadPlaylistItemWrap" + i).className = "sp-playlist-show";
          for (var i = iPos; i < upperPosLimit; i++) document.getElementById("streampadPlaylistItemWrap" + i).className = "sp-playlist-show";
          document.getElementById("streampadPlaylistItems").style.height = Math.min(n * itemHeight, (n + 1) * itemHeight - fromTop - ((iPos - lowerPosLimit) * itemHeight)) + "px";
          document.getElementById("streampadPlaylistItems").style.top = Math.max(0, fromTop - (iPos - lowerPosLimit) * itemHeight) + "px";
        },
        /*playlistScroll2: function() {
          var n = streampadPlayer.Playlist.array.length;
          var itemHeight = 45;
          var fullHeight = n * itemHeight;
          var viewportHeight = streampadPlayer.params.drawersize;
          var fromTop = document.getElementById("streampadPlaylistWrap").scrollTop;
          var iPos = n - parseInt((fullHeight - fromTop) / itemHeight);
          var lowerPosLimit = Math.max(0, iPos);
          var upperPosLimit = Math.min(n, iPos + parseInt(viewportHeight / itemHeight));
          for (var i = 0; i < lowerPosLimit; i++) document.getElementById("streampadPlaylistItemWrap" + i).className = "sp-playlist-hide";
          for (var i = n - 1; i > upperPosLimit; i--) document.getElementById("streampadPlaylistItemWrap" + i).className = "sp-playlist-hide";
          for (var i = iPos; i > lowerPosLimit; i--) document.getElementById("streampadPlaylistItemWrap" + i).className = "sp-playlist-show";
          for (var i = iPos; i < upperPosLimit; i++) document.getElementById("streampadPlaylistItemWrap" + i).className = "sp-playlist-show";
          document.getElementById("streampadPlaylistItems").style.height = Math.min(fullHeight, fullHeight - fromTop + ((iPos - lowerPosLimit) * itemHeight)) + "px";
          document.getElementById("streampadPlaylistItems").style.top = Math.max(0, fromTop - (iPos - lowerPosLimit) * itemHeight) + "px";
        },*/
	/* Load more songs option */
	showLoadMore : function(){
		var more = 20;
		if (streampadPlayer.vars.total - streampadPlayer.Playlist.array.length < more){
			more = streampadPlayer.vars.total - streampadPlayer.Playlist.array.length;
		}	
		var streampadPlaylistItems = document.getElementById('streampadPlaylistItems');
		var moreDiv = document.createElement('div');
		streampadPlayer.Utils.setStyles(moreDiv, {'height' : '44px', 'lineHeight' : '44px', 'cursor' : 'pointer', 'color' : '#7A7A8A', 'fontFamily' : 'arial', 'fontSize' : '14px', 'fontWeight' : 'bold', 'textIndent' : '50px'});
		moreDiv.appendChild(document.createTextNode('Load '+more+' more songs...'));
		streampadPlayer.Event.add(moreDiv, 'click', streampadPlayer.Events.playlistItemMore);
		streampadPlaylistItems.appendChild(moreDiv);
	},
	/* Fill the playlist with song divs */
	fillPlaylistItems : function(){
		var streampadPlaylistItems = document.getElementById('streampadPlaylistItems');
		streampadPlaylistItems.innerHTML = '';
		for (i=0; i < streampadPlayer.Playlist.array.length; i++){
                        var playlistItemWrap = document.createElement('a');
			playlistItemWrap.setAttribute('id', 'streampadPlaylistItemWrap'+i);
                        playlistItemWrap.setAttribute('href', streampadPlayer.Playlist.array[i].sourceUrl);
                        streampadPlayer.Event.add(playlistItemWrap, 'click', function(e) {if (e.which == 1) e.preventDefault()});
                        streampadPlaylistItems.appendChild(playlistItemWrap);
                        if (streampadPlayer.Playlist.array[i].scplaylist && streampadPlayer.Playlist.array[i].scplaylist.num == 0) {
			var playlistItemPlaylist = document.createElement('div');
			playlistItemPlaylist.setAttribute('id', 'streampadPlaylistItemPlaylist'+i);
			playlistItemPlaylist.setAttribute('num', i);
			playlistItemPlaylist.style.height = '44px';
	                if (streampadPlayer.browser.engine.trident4){
				playlistItemPlaylist.style.width = '97%';
			} else {
				playlistItemPlaylist.style.width = '100%';
			}
			playlistItemPlaylist.style.overflow = 'hidden';
			playlistItemPlaylist.style.cursor = 'default';
			playlistItemPlaylist.style.position = 'relative';
                        playlistItemPlaylist.style.opacity = '0.25';
                        playlistItemPlaylist.style.background = "#FFFFFF";
                        for (var j = i; j < i + streampadPlayer.Playlist.array[i].scplaylist.length; j++) {
                          if (j == streampadPlayer.vars.queueNumber) playlistItemPlaylist.style.background = "#F8F8F8";
                          if (streampadPlayer.Playlist.array[j].enclosure != "404") playlistItemPlaylist.style.opacity = '1';
                        }
                        var seconds = streampadPlayer.Playlist.array[i].scplaylist.duration / 1000;
                        playlistDuration = (Math.floor(seconds / 3600) + ":" + ("0" + Math.floor(seconds % 3600 / 60)).slice(-2) + ":" + ("0" + Math.floor(seconds % 3600 % 60)).slice(-2)).replace(/^(0:0?)/, "");
			playlistItemPlaylist.setAttribute('title', streampadPlayer.Playlist.array[i].scplaylist.length + " track" + (streampadPlayer.Playlist.array[i].scplaylist.length > 1 ? "s" : "") + " [" + playlistDuration + "]");
			playlistItemWrap.appendChild(playlistItemPlaylist);
			var trackNumber = document.createElement('div');
			trackNumber.style.position = 'absolute';
			trackNumber.style.top = '10px';
			trackNumber.style.left = streampadPlayer.Playlist.array[i].scplaylist ? '0' : '0';
			trackNumber.style.width = '50px';
			trackNumber.style.textAlign = 'right';
			trackNumber.style.color = '#7A7A8A';
			trackNumber.style.fontFamily = 'arial';
			trackNumber.style.fontSize = '14px';
			trackNumber.style.fontWeight = 'bold';
			trackNumber.setAttribute('num', i);
			trackNumber.appendChild(document.createTextNode("PL."));
			playlistItemPlaylist.appendChild(trackNumber);
			var playlistTitle = document.createElement('div');
			playlistTitle.setAttribute('id', 'streampadPlaylistItemPlaylistTitle'+i);
			playlistTitle.style.position = 'absolute';
			playlistTitle.style.left = '60px';
			playlistTitle.style.right = '0';
			playlistTitle.style.height = '16px';
			playlistTitle.style.top = '10px';
			playlistTitle.style.color = '#7A7A8A';
			playlistTitle.style.fontFamily = 'arial';
			playlistTitle.style.fontSize = '14px';
			playlistTitle.style.fontWeight = 'bold';
			playlistTitle.style.overflow = 'hidden';
			playlistTitle.style.textAlign = 'left';
			playlistTitle.style.lineHeight = 'normal';
			if (streampadPlayer.Playlist.array[i].scplaylist.title){
				playlistTitle.appendChild(document.createTextNode(streampadPlayer.Playlist.array[i].scplaylist.title));
			} else {
				playlistTitle.innerHTML = "SoundCloud Playlist";
			}
			playlistTitle.setAttribute('num', i);
			playlistItemPlaylist.appendChild(playlistTitle);
			var playlistCreator = document.createElement('div');
			playlistCreator.setAttribute('id', 'streampadPlaylistItemPlaylistCreator'+i);
			playlistCreator.style.color = '#7A7A8A';
			playlistCreator.style.fontFamily = 'arial';
			playlistCreator.style.fontSize = '10px';
			playlistCreator.style.position = 'absolute';
			playlistCreator.style.left = '60px';
			playlistCreator.style.right = '0';
			playlistCreator.style.height = '14px';
			playlistCreator.style.top = '24px';
			playlistCreator.style.overflow = 'hidden';
			playlistCreator.style.textAlign = 'left';
			playlistCreator.style.lineHeight = 'normal';
			if (streampadPlayer.Playlist.array[i].scplaylist.creator){
				playlistCreator.appendChild(document.createTextNode(streampadPlayer.Playlist.array[i].scplaylist.creator));
			} else {
				playlistCreator.appendChild(document.createTextNode(''));
			}
			playlistCreator.setAttribute('num', i);
			playlistItemPlaylist.appendChild(playlistCreator);
			var divider = document.createElement('div');
			divider.style.height = '1px';
			if (streampadPlayer.browser.engine.trident4){
				divider.style.width = '97%';
			} else {
				divider.style.width = '100%';
			}
			divider.style.overflow = 'hidden';
			divider.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/B2dnp5jx6/playlist-item-divider.gif") repeat-x';
                        divider.style.cursor = streampadPlayer.Playlist.array[i].enclosure == "404" ? 'default' : 'pointer';
			playlistItemWrap.appendChild(divider);
                      }
			var playlistItem = document.createElement('div');
			playlistItem.setAttribute('id', 'streampadPlaylistItem'+i);
			playlistItem.setAttribute('num', i);
			playlistItem.style.height = '44px';
			if (streampadPlayer.browser.engine.trident4){
				playlistItem.style.width = '97%';
			} else {
				playlistItem.style.width = '100%';
			}
			playlistItem.style.overflow = 'hidden';
			playlistItem.style.cursor = streampadPlayer.Playlist.array[i].enclosure == "404" ? 'default' : 'pointer';
			playlistItem.style.position = 'relative';
			if (streampadPlayer.Playlist.array[i].enclosure != "404") streampadPlayer.Event.add(playlistItem, 'click', streampadPlayer.Events.playlistItemClick);
                        if (streampadPlayer.Playlist.array[i].enclosure == "404") playlistItem.style.opacity = '0.25';
			if (i == streampadPlayer.vars.queueNumber){
				playlistItem.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/0TLnp5jy9/playlist-item-selected.gif") no-repeat';
				streampadPlayer.vars.oldPlaylistItem = playlistItem;
			}
			playlistItem.setAttribute('title', streampadPlayer.Playlist.array[i].description);
			playlistItemWrap.appendChild(playlistItem);
			var trackNumber = document.createElement('div');
			trackNumber.style.position = 'absolute';
			trackNumber.style.top = '10px';
			trackNumber.style.left = streampadPlayer.Playlist.array[i].scplaylist ? 30 + (Math.ceil(Math.log10((i+2)/10)) - 1) * 7 + 'px' : '0';
			trackNumber.style.width = '50px';
			trackNumber.style.textAlign = 'right';
			trackNumber.style.color = '#7A7A8A';
			trackNumber.style.fontFamily = 'arial';
			trackNumber.style.fontSize = '14px';
			trackNumber.style.fontWeight = 'bold';
			trackNumber.setAttribute('num', i);
			trackNumber.appendChild(document.createTextNode((parseInt(i)+1)+'.'));
			playlistItem.appendChild(trackNumber);
			var songTitle = document.createElement('div');
			songTitle.setAttribute('id', 'streampadPlaylistItemSong'+i);
			songTitle.style.position = 'absolute';
			songTitle.style.left = streampadPlayer.Playlist.array[i].scplaylist ? 90 + (Math.ceil(Math.log10((i+2)/10)) - 1) * 8 + 'px' : '60px';
			songTitle.style.right = '0';
			songTitle.style.height = '16px';
			songTitle.style.top = '10px';
			songTitle.style.color = '#7A7A8A';
			songTitle.style.fontFamily = 'arial';
			songTitle.style.fontSize = '14px';
			songTitle.style.fontWeight = 'bold';
			songTitle.style.overflow = 'hidden';
			songTitle.style.textAlign = 'left';
			songTitle.style.lineHeight = 'normal';
			if (streampadPlayer.Playlist.array[i].songTitle != null){
				songTitle.appendChild(document.createTextNode(streampadPlayer.Playlist.array[i].songTitle));
			} else {
				songTitle.innerHTML = streampadPlayer.Playlist.array[i].text;
			}
			if (i == streampadPlayer.vars.queueNumber){
				songTitle.style.color = '#000000';
				streampadPlayer.vars.oldPlaylistItemSong = songTitle;
			}
			songTitle.setAttribute('num', i);
			playlistItem.appendChild(songTitle);
			var artist = document.createElement('div');
			artist.setAttribute('id', 'streampadPlaylistItemArtist'+i);
			artist.style.color = '#666666';
			artist.style.fontFamily = 'arial';
			artist.style.fontSize = '12px';
			artist.style.position = 'absolute';
			artist.style.left = streampadPlayer.Playlist.array[i].scplaylist ? 90 + (Math.ceil(Math.log10((i+2)/10)) - 1) * 8 + 'px' : '60px';
			artist.style.right = '0';
			artist.style.height = '14px';
			artist.style.top = '26px';
			artist.style.overflow = 'hidden';
			artist.style.textAlign = 'left';
			artist.style.lineHeight = 'normal';
			if (streampadPlayer.Playlist.array[i].artist != null){
				artist.appendChild(document.createTextNode(streampadPlayer.Playlist.array[i].artist));
			} else {
				artist.appendChild(document.createTextNode(''));
			}
			artist.setAttribute('num', i);
			playlistItem.appendChild(artist);
			var divider = document.createElement('div');
			divider.style.height = '1px';
			if (streampadPlayer.browser.engine.trident4){
				divider.style.width = '97%';
			} else {
				divider.style.width = '100%';
			}
			divider.style.overflow = 'hidden';
			divider.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/B2dnp5jx6/playlist-item-divider.gif") repeat-x';
                        divider.style.cursor = streampadPlayer.Playlist.array[i].enclosure == "404" ? 'default' : 'pointer';
			playlistItemWrap.appendChild(divider);
		}
	},
	/* Called on setCurrent */
	fillPlaylistDrawer : function(){
		if (streampadPlayer.vars.currentSongVO != null){
			var coverArt = document.getElementById('streampadCoverArt');
			if (streampadPlayer.vars.currentSongVO.imageUrl != null) {
				coverArt.setAttribute('src', streampadPlayer.vars.currentSongVO.imageUrl);
			} else {
				coverArt.setAttribute('src', 'https://secure.static.tumblr.com/ujjnqse/ZCtnp5k0g/record-150.gif');
			}
			var streampadPlaylistSongTitle = document.getElementById('streampadPlaylistSongTitle');
			if (streampadPlayer.vars.currentSongVO.songTitle != null){
				streampadPlaylistSongTitle.innerHTML = streampadPlayer.Utils.trimString(streampadPlayer.vars.currentSongVO.songTitle, 20);
			} else {
				streampadPlaylistSongTitle.innerHTML = streampadPlayer.Utils.trimString(streampadPlayer.vars.currentSongVO.text, 22);
				streampadPlaylistSongTitle.setAttribute('title', streampadPlayer.vars.currentSongVO.text);
			}
			var streampadPlaylistArtist = document.getElementById('streampadPlaylistArtist');
			if (streampadPlayer.vars.currentSongVO.artist != null){
				streampadPlaylistArtist.innerHTML = streampadPlayer.vars.currentSongVO.artist;
				streampadPlaylistArtist.setAttribute('href', 'http://www.tumblr.com/search/'+streampadPlayer.vars.currentSongVO.artist);
			} else {
				streampadPlaylistArtist.innerHTML = '';
			}
			if (streampadPlayer.vars.currentSongVO.artistAolId != null){
				streampadPlaylistArtist.setAttribute('href', 'http://music.aol.com/artist/id/'+streampadPlayer.vars.currentSongVO.artistAolId);
			} 
			var streampadPlaylistAlbum = document.getElementById('streampadPlaylistAlbum');
			if (streampadPlayer.vars.currentSongVO.album != null && streampadPlayer.vars.currentSongVO.album != streampadPlayer.vars.currentSongVO.songTitle && streampadPlayer.vars.currentSongVO.album != streampadPlayer.vars.currentSongVO.playlistTitle){
				streampadPlaylistAlbum.innerHTML = streampadPlayer.vars.currentSongVO.album;
			} else {
                                streampadPlayer.vars.currentSongVO.album = streampadPlayer.vars.currentSongVO.songTitle;
				streampadPlaylistAlbum.innerHTML = streampadPlayer.vars.currentSongVO.playlistTitle ? streampadPlayer.vars.currentSongVO.playlistTitle : 'Unknown Album';
			}
			var amazon = document.getElementById('streampadPlaylistAmazon');
			var purchase = document.getElementById('streampadPlaylistPurchase');
                        if (streampadPlayer.vars.currentSongVO.purchaseURL) {
                                purchase.setAttribute('href', streampadPlayer.vars.currentSongVO.purchaseURL);
                                purchase.style.display = 'block';
                                amazon.style.display = 'none';
			} else {
				if (streampadPlayer.vars.currentSongVO.album != null) {
                                  amazon.setAttribute('href', 'http://www.amazon.com/s/ref=nb_ss_gw_2_10?url=search-alias%3Dpopular&field-keywords='+streampadPlayer.vars.currentSongVO.artist+'%20'+streampadPlayer.vars.currentSongVO.album+'&tag=streampad-20');
                                } else {
                                  amazon.setAttribute('href', 'http://www.amazon.com/s/ref=nb_ss_gw_2_10?url=search-alias%3Dpopular&field-keywords='+streampadPlayer.vars.currentSongVO.artist+'%20'+streampadPlayer.vars.currentSongVO.songTitle+'&tag=streampad-20');
                                }
				amazon.style.display = 'block';
                                purchase.style.display = 'none';
			}
			var itunes = document.getElementById('streampadPlaylistItunes');
			if (streampadPlayer.vars.currentSongVO.itunes != null) {
				itunes.setAttribute('href', streampadPlayer.vars.currentSongVO.itunes);
				itunes.style.display = 'block';
			} else {
				//if (streampadPlayer.vars.currentSongVO.album != null) {
				        //itunes.setAttribute('href', 'http://phobos.apple.com/WebObjects/MZSearch.woa/wa/com.apple.jingle.search.DirectAction/search?term='+streampadPlayer.vars.currentSongVO.album+'&partnerId=1');
				        //itunes.style.display = 'block';
				//} else {
					itunes.style.display = 'none';
				//}
			}
			try {
                                var oldtracknum = parseInt(streampadPlayer.vars.oldPlaylistItem.getAttribute("num"));
                                var oldtrack = streampadPlayer.Playlist.array[oldtracknum];
                                if (oldtrack.scplaylist) document.getElementById('streampadPlaylistItemPlaylist' + (oldtracknum - oldtrack.scplaylist.num)).style.background = '#FFFFFF';
		        } catch (e){}
			try {
                                var newtracknum = streampadPlayer.vars.queueNumber;
                                var newtrack = streampadPlayer.Playlist.array[newtracknum];
                                if (newtrack.scplaylist) document.getElementById('streampadPlaylistItemPlaylist' + (newtracknum - newtrack.scplaylist.num)).style.background = '#F8F8F8';
			} catch (e){}
			try {
				streampadPlayer.vars.oldPlaylistItem.style.background = '#FFFFFF';
				streampadPlayer.vars.oldPlaylistItemSong.style.color = '#7A7A8A';
			} catch (e){}
			try {
				streampadPlayer.vars.oldPlaylistItem = document.getElementById('streampadPlaylistItem'+streampadPlayer.vars.queueNumber);
				streampadPlayer.vars.oldPlaylistItem.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/0TLnp5jy9/playlist-item-selected.gif") no-repeat';
				streampadPlayer.vars.oldPlaylistItemSong = document.getElementById('streampadPlaylistItemSong'+streampadPlayer.vars.queueNumber);
				streampadPlayer.vars.oldPlaylistItemSong.style.color = '#0F1030';
			} catch (e){}
			var playlistItems = document.getElementById('streampadPlaylistWrap');
			var scrollPosition = document.getElementById('streampadPlaylistItem' + streampadPlayer.vars.queueNumber).offsetTop - 45;
			playlistItems.scrollTop = streampadPlayer.Playlist.array.length > 1000 ? document.getElementById("streampadPlaylistItems").style.top : scrollPosition;
		} 
		var playlistHeader = document.getElementById('streampadPlaylistHeader');
		playlistHeader.innerHTML = '';
		var closeButton = document.createElement('div');
		closeButton.className = 'streampadPlayerbutton';
		closeButton.setAttribute('title', 'Close Playlist');
		streampadPlayer.Utils.setStyles(closeButton, {'width' : '20px', 'height' : '24px', 'styleFloat' : 'right', 'cssFloat' : 'right', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.closeOff+' no-repeat', 'margin' : '5px 10px 0 0', 'cursor' : 'pointer'});
		streampadPlayer.Event.add(closeButton, 'mouseover', function(){ closeButton.style.backgroundPosition = streampadPlayer.Theme.closeOn; });
		streampadPlayer.Event.add(closeButton, 'mouseout', function(){ closeButton.style.backgroundPosition = streampadPlayer.Theme.closeOff; });
		streampadPlayer.Event.add(closeButton, 'click', streampadPlayer.Events.playlistButtonClick);
		playlistHeader.appendChild(closeButton);
		var playlistHeaderTitle = document.createElement('div');
		playlistHeaderTitle.style.textIndent = '30px';
		playlistHeaderTitle.appendChild(document.createTextNode(streampadPlayer.Playlist.title));
		playlistHeader.appendChild(playlistHeaderTitle);
	},
	showVolume : function(){
		var volumeButton = document.getElementById('streampadVolumeButton');
		volumeButton.style.backgroundPosition = streampadPlayer.Theme.volumeOn;
		var x = streampadPlayer.Utils.getX(volumeButton);
		streampadPlayer.vars.volumeY = streampadPlayer.Utils.getBodyHeight() - streampadPlayer.params.height;//streampadPlayer.Utils.getY(volumeButton);
		var volDiv = document.createElement('div');
		volDiv.setAttribute('id', 'streampadVolDiv');
		volDiv.className = 'streampadPlayerbutton';
		var bgcolor = '#000000';
		if (streampadPlayer.params.bgcolor != null && streampadPlayer.params.bgcolor != ''){
			bgcolor = streampadPlayer.params.bgcolor;
		}
		streampadPlayer.Utils.setStyles(volDiv, {'height' : '130px', 'background' : bgcolor+' url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.volumeBack+' no-repeat', 'position' : 'fixed', 'bottom' : streampadPlayer.params.height+'px', 'left' : (x-1)+'px', 'width' : '30px', 'zIndex' : '999999', 'overflow' : 'auto'});
		if (streampadPlayer.browser.engine.trident4){
			volDiv.style.position = 'absolute';
			if (streampadPlayer.vars.marginOffsetLeft < 0){
				volDiv.style.left = x - streampadPlayer.Utils.getWidthMarginSize() - 2 - streampadPlayer.vars.marginOffsetLeft + 'px';
			} else {
				volDiv.style.left = x - streampadPlayer.Utils.getWidthMarginSize() - 2 + 'px';
			}
		}
		document.body.appendChild(volDiv);
		streampadPlayer.Event.add(volDiv, 'mouseover', function(){ streampadPlayer.vars.volumeMouseOn = true });
		streampadPlayer.Event.add(volDiv, 'mouseout', streampadPlayer.Events.volumeButtonMouseOut);
		var volDragger = document.createElement('div');
		volDragger.setAttribute('id', 'streampadVolumeDragger');
		volDragger.className = 'streampadPlayerbutton';
		streampadPlayer.Utils.setStyles(volDragger, {'height' : '16px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.volumeDrag+' no-repeat', 'position' : 'absolute', 'top' : streampadPlayer.vars.volumeDraggerY+'px', 'width' : '16px', 'zIndex' : 10001, 'cursor' : 'pointer', 'left' : '7px'});
		volDiv.appendChild(volDragger);
		streampadPlayer.Event.add(volDragger, 'mousedown', streampadPlayer.Events.volumeDragDown);
		streampadPlayer.Event.add(volDragger, 'mouseup', streampadPlayer.Events.volumeDragUp);
		streampadPlayer.Event.add(volumeButton, 'mouseout', streampadPlayer.Events.volumeButtonMouseOut);
		
		streampadPlayer.UI.resize();
	},
	fillProfileDrawer : function(){
		try {
			streampadPlayer.vars.profileHeaderSelected.style.background = '';
		} catch(e) {}
		switch (streampadPlayer.vars.profileDrawerCategory){
			case "history" : 
				this.fillHistoryDrawer();
			break;
			case "aim" : 
				this.fillAIMDrawer();
			break;
			case "lastfm" : 
				this.fillLastFMDrawer();
			break;
			case "twitter" : 
				this.fillTwitterDrawer();
			break;
			default :
				this.fillHistoryDrawer();
			break;
		}
	},
	fillProfileDrawerTop : function(){
		var right = document.getElementById('streampadDrawerRight');
		right.innerHTML = '';
		var profileHeader = document.createElement('div');
		profileHeader.setAttribute('id', 'streampadProfileHeader');
		streampadPlayer.Utils.setStyles(profileHeader, {'height' : '36px', 'lineHeight' : '36px', 'background' : 'url("https://secure.static.tumblr.com/ujjnqse/Ct7np5jw6/drawer-right-header.gif") repeat-x', 'width' : '100%', 'fontSize' : '20px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'textAlign' : 'left', 'borderBottom' : '1px solid #D3D4D6'});
		right.appendChild(profileHeader);
		
		var closeButton = document.createElement('div');
		closeButton.setAttribute('title', 'Close Last.fm Scrobbler');
		streampadPlayer.Utils.setStyles(closeButton, {'width' : '20px', 'height' : '24px', 'styleFloat' : 'right', 'cssFloat' : 'right', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.closeOff+' no-repeat', 'margin' : '5px 10px 0 0', 'cursor' : 'pointer'});
		streampadPlayer.Event.add(closeButton, 'mouseover', function(){ closeButton.style.backgroundPosition = streampadPlayer.Theme.closeOn; });
		streampadPlayer.Event.add(closeButton, 'mouseout', function(){ closeButton.style.backgroundPosition = streampadPlayer.Theme.closeOff; });
		streampadPlayer.Event.add(closeButton, 'click', streampadPlayer.Events.profileButtonClick);
		closeButton.className = 'streampadPlayerbutton';
		profileHeader.appendChild(closeButton);

    // removed by taber aug 31, 2012 - chart/history urls redirect to dynapub.xyz urls which no longer exist
		/*var historyHeader = document.createElement('div');
		historyHeader.setAttribute('id', 'streampadPlayerHistoryHeader');
		streampadPlayer.Utils.setStyles(historyHeader, {'cssFloat' : 'left', 'styleFloat' : 'left', 'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'margin' : '0 0 0 0', 'width' : '106px', 'height' : '36px', 'cursor' : 'pointer', 'color' : '#000000', 'borderRight' : '1px solid #A7A6AE', 'textAlign' : 'center'});
		historyHeader.appendChild(document.createTextNode('AOL MUSIC'));
		profileHeader.appendChild(historyHeader);
		streampadPlayer.Event.add(historyHeader, 'click', function(){ streampadPlayer.vars.profileDrawerCategory = 'history'; streampadPlayer.UI.fillProfileDrawer() });*/
		
		/*var aimHeader = document.createElement('div');
		aimHeader.setAttribute('id', 'streampadPlayerAimHeader');
		streampadPlayer.Utils.setStyles(aimHeader, {'cssFloat' : 'left', 'styleFloat' : 'left', 'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'margin' : '0 0 0 0', 'width' : '106px', 'height' : '36px', 'cursor' : 'pointer', 'color' : '#000000', 'borderLeft' : '1px solid #FFFFFF', 'borderRight' : '1px solid #A7A6AE', 'textAlign' : 'center'});
		
		aimHeader.appendChild(document.createTextNode('AIM'));
		profileHeader.appendChild(aimHeader);
		streampadPlayer.Event.add(aimHeader, 'click', function(){ streampadPlayer.vars.profileDrawerCategory = 'aim'; streampadPlayer.UI.fillProfileDrawer() });*/
		
		/*var divider = document.createElement('div');
		streampadPlayer.Utils.setStyles(divider, {'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '0 0 0 0', 'width' : '1px', 'height' : '36px', 'color' : '#FFFFFF', 'borderLeft' : '1px solid #FFFFFF'});
		profileHeader.appendChild(divider);*/

		var lastFMHeader = document.createElement('div');
		lastFMHeader.setAttribute('id', 'streampadPlayerLastFMHeader');
		streampadPlayer.Utils.setStyles(lastFMHeader, {'cssFloat' : 'left', 'styleFloat' : 'left', 'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'margin' : '0 0 0 0', 'width' : '106px', 'height' : '36px', 'cursor' : 'pointer', 'color' : '#000000', 'borderLeft' : '1px solid #FFFFFF', 'borderRight' : '1px solid #A7A6AE', 'textAlign' : 'center'});
		
		lastFMHeader.appendChild(document.createTextNode('LAST.FM'));
		profileHeader.appendChild(lastFMHeader);
		streampadPlayer.Event.add(lastFMHeader, 'click', function(){ streampadPlayer.vars.profileDrawerCategory = 'lastfm'; streampadPlayer.UI.fillProfileDrawer() });
		
		/*var twitterHeader = document.createElement('div');
		twitterHeader.setAttribute('id', 'streampadPlayerTwitterHeader');
		streampadPlayer.Utils.setStyles(twitterHeader, {'cssFloat' : 'left', 'styleFloat' : 'left', 'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'margin' : '0 0 0 0', 'width' : '106px', 'height' : '36px', 'cursor' : 'pointer', 'color' : '#000000', 'borderLeft' : '1px solid #FFFFFF', 'borderRight' : '1px solid #A7A6AE', 'textAlign' : 'center'});
		
		twitterHeader.appendChild(document.createTextNode('TWITTER'));
		profileHeader.appendChild(twitterHeader);
		streampadPlayer.Event.add(twitterHeader, 'click', function(){ streampadPlayer.vars.profileDrawerCategory = 'twitter'; streampadPlayer.UI.fillProfileDrawer() });*/
		
		var divider = document.createElement('div');
		streampadPlayer.Utils.setStyles(divider, {'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '0 0 0 0', 'width' : '1px', 'height' : '36px', 'color' : '#FFFFFF', 'borderLeft' : '1px solid #FFFFFF'});
		profileHeader.appendChild(divider);
		
		
	},
	fillAOLProfileDrawerLeft : function(){
		var left = document.getElementById('streampadDrawerLeft');
		left.innerHTML = '';
		var buddyIcon = document.createElement('img');
		buddyIcon.setAttribute('id', 'streampadBuddyIcon');
		buddyIcon.setAttribute('src', streampadPlayer.params.aimurl+'expressions/get?t='+streampadPlayer.vars.sn+'&f=native&type=buddyIcon&defaultId=00052b00003089');
		buddyIcon.setAttribute('height', '50px');
		buddyIcon.setAttribute('width', '50px');
		streampadPlayer.Utils.setStyles(buddyIcon, {'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '20px 10px 20px 20px', 'padding' : '4px', 'border' : '1px solid #D6D7DA', 'background' : '#FFFFFF', 'display' : 'inline'});
		if (streampadPlayer.browser.engine.trident4){
			buddyIcon.style.marginBottom = '0';
		}
		left.appendChild(buddyIcon);
		var buddyName = document.createElement('div');
		streampadPlayer.Utils.setStyles(buddyName, {'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'color' : '#000000', 'margin' : '20px 0 20px 0'});
		buddyName.appendChild(document.createTextNode(streampadPlayer.vars.sn));
		left.appendChild(buddyName);
    // removed by taber, aug 31, 2012 - looks like http://music.aol.com/profile/sn_here urls no longer work?
		/*var buddyProfileA = document.createElement('a');
		buddyProfileA.setAttribute('href', 'http://music.aol.com/profile/'+streampadPlayer.vars.sn);
		buddyProfileA.setAttribute('target', '_blank');
		buddyProfileA.appendChild(document.createTextNode('view profile'));
		streampadPlayer.Utils.setStyles(buddyProfileA, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.viewProfileOff, 'textIndent' : '-3000px', 'cssFloat' : 'left', 'styleFloat' : 'left', 'height' : '18px', 'width' : '77px', 'display' : 'block', 'marginRight' : '10px'});
		streampadPlayer.Event.add(buddyProfileA, 'mouseover', function() {buddyProfileA.style.backgroundPosition = streampadPlayer.Theme.viewProfileOn;});
		streampadPlayer.Event.add(buddyProfileA, 'mouseout', function() {buddyProfileA.style.backgroundPosition = streampadPlayer.Theme.viewProfileOff;});
		left.appendChild(buddyProfileA);*/
		if (streampadPlayer.vars.clientLogin == true) {
			var logout = document.createElement('div');
			streampadPlayer.Utils.setStyles(logout, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.logoutOff, 'cssFloat' : 'left', 'styleFloat' : 'left', 'height' : '18px', 'width' : '58px', 'display' : 'block', 'cursor' : 'pointer'});
			streampadPlayer.Event.add(logout, 'mouseover', function() {logout.style.backgroundPosition = streampadPlayer.Theme.logoutOn;});
			streampadPlayer.Event.add(logout, 'mouseout', function() {logout.style.backgroundPosition = streampadPlayer.Theme.logoutOff;});
			streampadPlayer.Event.add(logout, 'click', streampadPlayer.Events.oaLogout.request);
			left.appendChild(logout);
		}
		var border = document.createElement('div');
		streampadPlayer.Utils.setStyles(border, {'borderTop' : '1px solid #000000', 'clear' : 'both', 'margin' : '20px'});
		left.appendChild(border);
		var statusCheckbox = document.createElement('input');
		streampadPlayer.Utils.setStyles(statusCheckbox, {'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '0 5px 0 20px'});
		statusCheckbox.setAttribute('type', 'checkbox');
		streampadPlayer.Event.add(statusCheckbox, 'click', function(){ streampadPlayer.flash.getSWF("streampadFlash").setasb(statusCheckbox.checked, streampadPlayer.vars.sn) });
		left.appendChild(statusCheckbox);
		var checkedB = streampadPlayer.flash.getSWF("streampadFlash").getasb(streampadPlayer.vars.sn);
		if (checkedB == true){
			statusCheckbox.setAttribute('checked', 'checked');
		}
		var statusText = document.createElement('div');
		streampadPlayer.Utils.setStyles(statusText, {'fontFamily' : 'arial', 'fontSize' : '12px', 'color' : '#666666', 'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '3px 0 15px 0'});
		statusText.appendChild(document.createTextNode('Update AIM with current song'));
		left.appendChild(statusText);
		var historyCheckbox = document.createElement('input');
		streampadPlayer.Utils.setStyles(historyCheckbox, {'clear' : 'both', 'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '0 5px 0 20px'});
		historyCheckbox.setAttribute('type', 'checkbox');
		streampadPlayer.Event.add(historyCheckbox, 'click', function(){ streampadPlayer.flash.getSWF("streampadFlash").setdsb(historyCheckbox.checked, streampadPlayer.vars.sn) });
		left.appendChild(historyCheckbox);
		var checkedH = streampadPlayer.flash.getSWF("streampadFlash").getdsb(streampadPlayer.vars.sn);
		if (checkedH == true){
			historyCheckbox.setAttribute('checked', 'true');
		}
		var historyText = document.createElement('div');
		streampadPlayer.Utils.setStyles(historyText, {'fontFamily' : 'arial', 'fontSize' : '12px', 'color' : '#666666', 'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '1px 0 10px 0'});
		historyText.appendChild(document.createTextNode('Keep listening history'));
		left.appendChild(historyText);
		var loginLoader = document.createElement('div');
		loginLoader.setAttribute('id', 'streampadPlayerLoginLoader');
		streampadPlayer.Utils.setStyles(loginLoader, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/DCHnp5k53/horizontal-loader-black.gif") no-repeat', 'width' : '96px', 'height' : '12px', 'margin' : '0 0 0 75px', 'clear' : 'both', 'display' : 'none'});
		left.appendChild(loginLoader);
	},
	fillHistoryDrawer : function(){
		streampadPlayer.vars.profileDrawerCategory = 'history';
		if (streampadPlayer.vars.sn == null || streampadPlayer.vars.sn == ''){
			this.createAOLSignin();
		} else {
			this.fillAOLProfileDrawerLeft();
		}
		this.fillProfileDrawerTop();
		streampadPlayer.vars.profileHeaderSelected = document.getElementById('streampadPlayerHistoryHeader');
		streampadPlayer.vars.profileHeaderSelected.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/Lzhnp5k79/profile-header-selected.gif") repeat-x';
		if (streampadPlayer.vars.sn == null || streampadPlayer.vars.sn == ''){
			var right = document.getElementById('streampadDrawerRight');
			var promo = document.createElement('div');
			promo.setAttribute('id', 'streampadPlayerHistoryPromo');
			streampadPlayer.Utils.setStyles(promo, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/Vionp5k98/sp-infographic-history.gif") no-repeat', 'width' : '500px', 'height' : '140px', 'margin' : '0 auto'});
			right.appendChild(promo);
		} else {
			streampadPlayer.Charts.getUserPlayHist.request();
		}
	},
	fillAIMDrawer : function(){
		streampadPlayer.vars.profileDrawerCategory = 'aim';
		if (streampadPlayer.vars.sn == null || streampadPlayer.vars.sn == ''){
			this.createAOLSignin();
		} else {
			this.fillAOLProfileDrawerLeft();
		}
		this.fillProfileDrawerTop();
		streampadPlayer.vars.profileHeaderSelected = document.getElementById('streampadPlayerAimHeader');
		streampadPlayer.vars.profileHeaderSelected.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/Lzhnp5k79/profile-header-selected.gif") repeat-x';
		if (streampadPlayer.vars.sn == null || streampadPlayer.vars.sn == ''){
			var right = document.getElementById('streampadDrawerRight');
			var promo = document.createElement('div');
			promo.setAttribute('id', 'streampadPlayerHistoryPromo');
			streampadPlayer.Utils.setStyles(promo, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/iconp5kas/sp-infographic-aim.gif") no-repeat', 'width' : '500px', 'height' : '140px', 'margin' : '0 auto'});
			right.appendChild(promo);
		} else {
			streampadPlayer.AIM.buddylist.request();
		}
	},
	fillLastFMDrawer : function(){
		streampadPlayer.vars.profileDrawerCategory = 'lastfm';
		this.fillProfileDrawerTop();
		streampadPlayer.vars.profileHeaderSelected = document.getElementById('streampadPlayerLastFMHeader');
		streampadPlayer.vars.profileHeaderSelected.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/Lzhnp5k79/profile-header-selected.gif") repeat-x';
		streampadPlayer.lastfm.user.getInfo.request();
	},
	fillLastFMProfileDrawerRight : function(array){
		var len = array.length;
		var right = document.getElementById('streampadDrawerRight');
		var profileItems = document.createElement('div');
		profileItems.setAttribute('id', 'streampadProfileItems');
		streampadPlayer.Utils.setStyles(profileItems, {'position' : 'absolute', 'top' : '37px', 'left' : '0', 'bottom' : '0', 'width' : '100%', 'overflow' : 'auto'});
		if (streampadPlayer.browser.engine.trident4){
			profileItems.style.height = (streampadPlayer.params.drawersize-37)+'px';
		}
		right.appendChild(profileItems);
		for (var i = 0; i < len; i++){
			var historyItem = array[i];
			var playlistItem = document.createElement('div');
			playlistItem.style.height = '50px';
			if (streampadPlayer.browser.engine.trident4){
				playlistItem.style.width = '97%';
			} else {
				playlistItem.style.width = '100%';
			}
			playlistItem.style.overflow = 'hidden';
			playlistItem.style.position = 'relative';
			profileItems.appendChild(playlistItem);
			var d = new Date(parseInt(historyItem.date.uts));
			var ctime = parseInt(historyItem.date.uts);
			d.setTime(ctime * 1000);
			var ampm = "am";
			var timeStringData = d.getHours();
			if (timeStringData > 12){
				timeStringData = timeStringData - 12;
				ampm = "pm";
			}
			var timeString = document.createElement('div');
			timeString.style.position = 'absolute';
			timeString.style.top = '10px';
			timeString.style.left = '30px';
			timeString.style.width = '80px';
			timeString.style.textAlign = 'right';
			timeString.style.color = '#000000';
			timeString.style.fontFamily = 'arial';
			timeString.style.fontSize = '14px';
			timeString.style.fontWeight = 'bold';
			var mins = d.getMinutes();
			if (mins < 10){
				mins = "0"+mins;
			}
			timeString.appendChild(document.createTextNode(timeStringData+":"+mins+" "+ampm));
			playlistItem.appendChild(timeString);
			var dateString = document.createElement('div');
			dateString.style.position = 'absolute';
			dateString.style.top = '27px';
			dateString.style.left = '30px';
			dateString.style.width = '80px';
			dateString.style.textAlign = 'right';
			dateString.style.color = '#666666';
			dateString.style.fontFamily = 'arial';
			dateString.style.fontSize = '12px';
			var year = d.getFullYear();
			year = year+"";
			year = year.substr(2);
			dateString.appendChild(document.createTextNode(d.getMonth()+1+"/"+d.getDate()+"/"+year));
			playlistItem.appendChild(dateString);
			var songTitle = document.createElement('a');
			songTitle.style.position = 'absolute';
			songTitle.style.left = '130px';
			songTitle.style.right = '0';
			songTitle.style.height = '16px';
			songTitle.style.top = '10px';
			songTitle.style.color = '#000000';
			songTitle.style.fontFamily = 'arial';
			songTitle.style.fontSize = '14px';
			songTitle.style.fontWeight = 'bold';
			songTitle.style.overflow = 'hidden';
			songTitle.style.textAlign = 'left';
			songTitle.style.lineHeight = 'normal';
			songTitle.style.textDecoration = 'none';
			if (historyItem.name != null){
				songTitle.appendChild(document.createTextNode(historyItem.name));
			}
			if (historyItem.url != null){
				songTitle.setAttribute('target', 'blank');
				songTitle.setAttribute('href', historyItem.url);
				streampadPlayer.Event.add(songTitle, 'mouseover', streampadPlayer.UI.underlineElement);
				streampadPlayer.Event.add(songTitle, 'mouseout', streampadPlayer.UI.noUnderlineElement);
			}
			playlistItem.appendChild(songTitle);
					
			var artist = document.createElement('a');
			artist.setAttribute('id', 'streampadHistoryArtist'+i);
			artist.style.color = '#666666';
			artist.style.fontFamily = 'arial';
			artist.style.fontSize = '12px';
			artist.style.position = 'absolute';
			artist.style.left = '130px';
			artist.style.right = '0';
			artist.style.height = '14px';
			artist.style.top = '28px';
			artist.style.overflow = 'hidden';
			artist.style.textAlign = 'left';
			artist.style.lineHeight = 'normal';
			artist.style.textDecoration = 'none';
			if (historyItem.artist['#text'] != null){
				artist.appendChild(document.createTextNode(historyItem.artist['#text']));
				artist.setAttribute('target', 'blank');
				artist.setAttribute('href', 'http://last.fm/music/'+historyItem.artist['#text']);
				streampadPlayer.Event.add(artist, 'mouseover', streampadPlayer.UI.underlineElement);
				streampadPlayer.Event.add(artist, 'mouseout', streampadPlayer.UI.noUnderlineElement);
			}
			playlistItem.appendChild(artist);
			var divider = document.createElement('div');
			divider.style.height = '1px';
			if (streampadPlayer.browser.engine.trident4){
				divider.style.width = '97%';
			} else {
				divider.style.width = '100%';
			}
			divider.style.overflow = 'hidden';
			divider.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/B2dnp5jx6/playlist-item-divider.gif") repeat-x';
			playlistItem.appendChild(divider);
		}
	},
	fillLastFMProfileDrawerLeft : function(username, userurl, imageurl, playcount){
		var left = document.getElementById('streampadDrawerLeft');
		left.innerHTML = '';
		var buddyIcon = document.createElement('img');
		buddyIcon.setAttribute('id', 'streampadBuddyIcon');
		buddyIcon.setAttribute('src', imageurl);
		buddyIcon.setAttribute('height', '50px');
		buddyIcon.setAttribute('width', '50px');
		streampadPlayer.Utils.setStyles(buddyIcon, {'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '20px 10px 20px 20px', 'padding' : '4px', 'border' : '1px solid #D6D7DA', 'background' : '#FFFFFF', 'display' : 'inline', 'width' : '50px', 'height' : '50px'});
		if (streampadPlayer.browser.engine.trident4){
			buddyIcon.style.marginBottom = '0';
		}
		left.appendChild(buddyIcon);
		var buddyName = document.createElement('div');
		streampadPlayer.Utils.setStyles(buddyName, {'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'color' : '#000000', 'margin' : '20px 0 20px 0'});
		buddyName.setAttribute('id', 'streampadBuddyName');
		buddyName.appendChild(document.createTextNode(username));
		left.appendChild(buddyName);
		var buddyProfileA = document.createElement('a');
		buddyProfileA.setAttribute('href', userurl);
		buddyProfileA.setAttribute('id', 'streampadProfileLink');
		buddyProfileA.setAttribute('target', '_blank');
		buddyProfileA.appendChild(document.createTextNode('view profile'));
		streampadPlayer.Utils.setStyles(buddyProfileA, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.viewProfileOff, 'textIndent' : '-3000px', 'cssFloat' : 'left', 'styleFloat' : 'left', 'height' : '18px', 'width' : '77px', 'display' : 'block', 'marginRight' : '10px'});
		streampadPlayer.Event.add(buddyProfileA, 'mouseover', function() {buddyProfileA.style.backgroundPosition = streampadPlayer.Theme.viewProfileOn;});
		streampadPlayer.Event.add(buddyProfileA, 'mouseout', function() {buddyProfileA.style.backgroundPosition = streampadPlayer.Theme.viewProfileOff;});
		left.appendChild(buddyProfileA);
		var logout = document.createElement('div');
		streampadPlayer.Utils.setStyles(logout, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.logoutOff, 'cssFloat' : 'left', 'styleFloat' : 'left', 'height' : '18px', 'width' : '58px', 'display' : 'block', 'cursor' : 'pointer'});
		streampadPlayer.Event.add(logout, 'mouseover', function() {logout.style.backgroundPosition = streampadPlayer.Theme.logoutOn;});
		streampadPlayer.Event.add(logout, 'mouseout', function() {logout.style.backgroundPosition = streampadPlayer.Theme.logoutOff;});
		streampadPlayer.Event.add(logout, 'click', streampadPlayer.lastfm.user.logout);
		left.appendChild(logout);
		var border = document.createElement('div');
		streampadPlayer.Utils.setStyles(border, {'borderTop' : '1px solid #000000', 'clear' : 'both', 'margin' : '20px'});
		left.appendChild(border);
		/*var scrobblingCheckbox = document.createElement('input');
		streampadPlayer.Utils.setStyles(scrobblingCheckbox, {'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '0 5px 0 20px'});
		scrobblingCheckbox.setAttribute('type', 'checkbox');
		streampadPlayer.Event.add(scrobblingCheckbox, 'click', function(){ streampadPlayer.flash.getSWF("streampadFlash").setasb(statusCheckbox.checked, streampadPlayer.vars.sn) });
		left.appendChild(scrobblingCheckbox);
		var checkedB = streampadPlayer.flash.getSWF("streampadFlash").getasb(streampadPlayer.vars.sn);
		if (checkedB == true){
			scrobblingCheckbox.setAttribute('checked', 'checked');
		}
		var scrobblingText = document.createElement('div');
		streampadPlayer.Utils.setStyles(scrobblingText, {'fontFamily' : 'arial', 'fontSize' : '12px', 'color' : '#666666', 'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '3px 0 15px 0'});
		scrobblingText.appendChild(document.createTextNode('Enable scrobbling'));
		left.appendChild(scrobblingText);*/
	},
	fillLastFMLoginProfileDrawerLeft : function(token){
		var left = document.getElementById('streampadDrawerLeft');
		left.innerHTML = '';
		var authorize = document.createElement('div');
		streampadPlayer.Utils.setStyles(authorize, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/pNanp5kbn/sp-lastfm-login.gif") no-repeat', 'width' : '101px', 'height' : '18px', 'margin' : '30px 0 0 87px', 'cursor' : 'pointer'});
		streampadPlayer.Event.add(authorize, 'mouseover', function(){ authorize.style.backgroundPosition = '-101px 0'; });
		streampadPlayer.Event.add(authorize, 'mouseout', function(){ authorize.style.backgroundPosition = '0 0'; });
		streampadPlayer.Event.add(authorize, 'click', function(){ streampadPlayer.lastfm.auth.authorizePopup.open(token, '6c946ca5274b2f396e5031c12c39400c') });
		left.appendChild(authorize);
		var loginLoader = document.createElement('div');
		loginLoader.setAttribute('id', 'streampadPlayerLoginLoader');
		streampadPlayer.Utils.setStyles(loginLoader, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/DCHnp5k53/horizontal-loader-black.gif") no-repeat', 'width' : '96px', 'height' : '12px', 'margin' : '10px 0 0 115px', 'clear' : 'both', 'display' : 'none'});
		left.appendChild(loginLoader);
	},
	fillLastFMRightPromo : function(){
		var right = document.getElementById('streampadDrawerRight');
		var promo = document.createElement('div');
		promo.setAttribute('id', 'streampadPlayerLastFMPromo');
		streampadPlayer.Utils.setStyles(promo, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/3lQnp5kcj/sp-infographic-lastfm.gif") no-repeat', 'width' : '500px', 'height' : '140px', 'margin' : '0 auto'});
		right.appendChild(promo);
	},
	fillTwitterDrawer : function(){
		streampadPlayer.vars.profileDrawerCategory = 'twitter';
		this.fillProfileDrawerTop();
		streampadPlayer.vars.profileHeaderSelected = document.getElementById('streampadPlayerTwitterHeader');
		streampadPlayer.vars.profileHeaderSelected.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/Lzhnp5k79/profile-header-selected.gif") repeat-x';
		streampadPlayer.Twitter.shorten.request();
	},
	createProfileDrawer : function(){
		var drawer = this.createDrawer();
		var left = document.createElement('div');
		left.setAttribute('id', 'streampadDrawerLeft');
		streampadPlayer.Utils.setStyles(left, {'position' : 'absolute', 'left' : '0', 'top' : '1px', 'width' : '275px', 'overflow' : 'hidden', 'height' : (streampadPlayer.params.drawersize-1)+'px', 'background' : '#e5e5e5 url("https://secure.static.tumblr.com/ujjnqse/fx5np5jix/drawer-left-break.gif") 100% 0 repeat-y'});
		drawer.appendChild(left);
		var right = document.createElement('div');
		right.setAttribute('id', 'streampadDrawerRight');
		streampadPlayer.Utils.setStyles(right, {'position' : 'absolute', 'left' : '275px', 'top' : '1px', 'right' : '0', 'height' : (streampadPlayer.params.drawersize-1)+'px', 'overflow' : 'hidden'});
		if (streampadPlayer.browser.engine.trident4){
			right.style.width = streampadPlayer.Utils.getBodyWidth()-275;
		}
		drawer.appendChild(right);
		this.fillProfileDrawer();
	},
	createAOLSignin : function(){
		var left = document.getElementById('streampadDrawerLeft');
		left.innerHTML = '';
		var signinHeader = document.createElement('div');
		signinHeader.setAttribute('id', 'streampadSigninLoader');
		signinHeader.appendChild(document.createTextNode("Log in AIM/AOL"));
		streampadPlayer.Utils.setStyles(signinHeader, {'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'color' : '#000000', 'margin' : '15px', 'textIndent' : '30px', 'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.signInIcon});
		left.appendChild(signinHeader);
		if (streampadPlayer.vars.clientLogin == true){
			var form = document.createElement('div');
			streampadPlayer.Utils.setStyles(form, {'width' : '245px', 'height' : '80px', 'margin' : '0 0 0 15px'});
			left.appendChild(form);
			form.innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="streampadForm" style="margin:0;"><param name=movie value="'+streampadPlayer.params.lswf+'"><param name=swLiveConnect value="true"><param name=allowScriptAccess value="always"><param name=allowNetworking value="all"><param name=wMode value="transparent"><param name=flashVars value="&callback=streampadPlayer.Events.loginBack"><embed flashVars="callback=streampadPlayer.Events.loginBack" src="'+streampadPlayer.params.lswf+'" type="application/x-shockwave-flash" width="100%" height="100%" allowNetworking="all" allowScriptAccess="always" wMode="transparent" name="streampadForm"></embed></object>';
			var loginButton = document.createElement('div');
			streampadPlayer.Utils.setStyles(loginButton, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.loginOff, 'width' : '46px', 'height' : '18px', 'textDecoration' : 'none', 'display' : 'block', 'margin' : '10px 10px 0 110px', 'cssFloat' : 'left', 'styleFloat' : 'left', 'cursor' : 'pointer', 'display' : 'inline'});
			streampadPlayer.Event.add(loginButton, 'mouseover', function(){ loginButton.style.backgroundPosition = streampadPlayer.Theme.loginOn; });
		    streampadPlayer.Event.add(loginButton, 'mouseout', function(){ loginButton.style.backgroundPosition = streampadPlayer.Theme.loginOff; });
		    streampadPlayer.Event.add(loginButton, 'click', streampadPlayer.Events.loginSubmit);
			left.appendChild(loginButton);
			
			var signUpButton = document.createElement('a');
			signUpButton.setAttribute('href', 'https://new.aol.com/productsweb/?promocode=824114');
			signUpButton.setAttribute('target', '_blank');
			streampadPlayer.Utils.setStyles(signUpButton, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.signUpOff, 'width' : '58px', 'height' : '18px', 'textDecoration' : 'none', 'display' : 'block', 'margin' : '10px 0 20px 0', 'cssFloat' : 'left', 'styleFloat' : 'left', 'cursor' : 'pointer', 'display' : 'inline'});
			streampadPlayer.Event.add(signUpButton, 'mouseover', function(){ signUpButton.style.backgroundPosition = streampadPlayer.Theme.signUpOn; });
		    streampadPlayer.Event.add(signUpButton, 'mouseout', function(){ signUpButton.style.backgroundPosition = streampadPlayer.Theme.signUpOff; });
			left.appendChild(signUpButton);
			
			var loginLoader = document.createElement('div');
			loginLoader.setAttribute('id', 'streampadPlayerLoginLoader');
			streampadPlayer.Utils.setStyles(loginLoader, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/DCHnp5k53/horizontal-loader-black.gif") no-repeat', 'width' : '96px', 'height' : '12px', 'margin' : '10px 0 0 115px', 'clear' : 'both', 'display' : 'none'});
			left.appendChild(loginLoader);
		} else {
			var loginButton = document.createElement('a');
			loginButton.setAttribute('href', 'http://music.aol.com/signin?siteState=OrigUrl='+encodeURIComponent(location.href));
			if (streampadPlayer.vars.openAuthFunc != null){
				loginButton.setAttribute('href', '#');
				streampadPlayer.Event.add(loginButton, 'click', streampadPlayer.vars.openAuthFunc);
			} 
			streampadPlayer.Utils.setStyles(loginButton, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.loginOff, 'width' : '46px', 'height' : '18px', 'textDecoration' : 'none', 'display' : 'block', 'margin' : '20px 10px 0 20px', 'cssFloat' : 'left', 'styleFloat' : 'left', 'cursor' : 'pointer', 'display' : 'inline'});
			streampadPlayer.Event.add(loginButton, 'mouseover', function(){ loginButton.style.backgroundPosition = streampadPlayer.Theme.loginOn; });
		    streampadPlayer.Event.add(loginButton, 'mouseout', function(){ loginButton.style.backgroundPosition = streampadPlayer.Theme.loginOff; });
			left.appendChild(loginButton);
			
			var signUpButton = document.createElement('a');
			signUpButton.setAttribute('href', 'https://new.aol.com/productsweb/?promocode=824114');
			streampadPlayer.Utils.setStyles(signUpButton, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/8gTnp5jr3/drawer-sprite.gif") no-repeat '+streampadPlayer.Theme.signUpOff, 'width' : '58px', 'height' : '18px', 'textDecoration' : 'none', 'display' : 'block', 'margin' : '20px 0 0 0', 'cssFloat' : 'left', 'styleFloat' : 'left', 'cursor' : 'pointer', 'display' : 'inline'});
			streampadPlayer.Event.add(signUpButton, 'mouseover', function(){ signUpButton.style.backgroundPosition = streampadPlayer.Theme.signUpOn; });
		    streampadPlayer.Event.add(signUpButton, 'mouseout', function(){ signUpButton.style.backgroundPosition = streampadPlayer.Theme.signUpOff; });
			left.appendChild(signUpButton);
		}
	},
	createBuddy : function(buddy){
		var div = document.createElement('div');
		streampadPlayer.Utils.setStyles(div, {'cssFloat' : 'left', 'styleFloat' : 'left', 'width' : '280px', 'height' : '80px', 'overflow' : 'hidden', 'border' : '1px solid #E5E5E5', 'margin' : '10px 0 0 10px'});
		div.setAttribute('id', 'buddyDiv'+buddy.aimId)
		var buddyIcon = document.createElement('img');
		//buddyIcon.setAttribute('id', 'streampadBuddyIcon');
		var img = buddy.buddyIcon;
		if (img == null){
			img = streampadPlayer.params.aimurl+'expressions/getAsset?f=native&type=buddyIcon&id=00052b00003089';
		}
		buddyIcon.setAttribute('src', streampadPlayer.params.aimurl+'expressions/get?t='+buddy.aimId+'&f=native&type=buddyIcon&defaultId=00052b00003089');
		buddyIcon.setAttribute('height', '50px');
		buddyIcon.setAttribute('width', '50px');
		streampadPlayer.Utils.setStyles(buddyIcon, {'cssFloat' : 'left', 'styleFloat' : 'left', 'margin' : '10px 10px 10px 10px', 'padding' : '4px', 'border' : '1px solid #D6D7DA', 'background' : '#FFFFFF', 'display' : 'block'});
		div.appendChild(buddyIcon);
		var buddyName = document.createElement('a');
		buddyName.setAttribute('href', 'http://music.aol.com/profile/'+buddy.aimId);
		buddyName.setAttribute('target', '_blank');
		streampadPlayer.Utils.setStyles(buddyName, {'fontSize' : '14px', 'fontFamily' : 'arial', 'fontWeight' : 'bold', 'color' : '#000000', 'margin' : '10px 0 5px 0', 'cssFloat' : 'left', 'styleFloat' : 'left'});
		buddyName.appendChild(document.createTextNode(buddy.displayId));
		div.appendChild(buddyName);
		
		var buddyStatus = document.createElement('div');
		buddyStatus.setAttribute('id', 'buddyStatus'+buddy.aimId);
		streampadPlayer.Utils.setStyles(buddyStatus, {'fontSize' : '12px', 'fontFamily' : 'arial', 'fontWeight' : 'normal', 'fontStyle' : 'italic', 'color' : '#737487', 'margin' : '0 0 8px 0', 'cssFloat' : 'left', 'styleFloat' : 'left', 'width' : '180px'});
		buddyStatus.appendChild(document.createTextNode(buddy.statusMsg));
		div.appendChild(buddyStatus);
		return div;
	},
	modifyBuddy : function(eventData){
		try {
			if (eventData.statusMsg.indexOf('â™«') != -1){
				var buddyStatus = document.getElementById('buddyStatus'+eventData.aimId);
				if (buddyStatus.innerHTML != eventData.statusMsg){
					buddyStatus.innerHTML = eventData.statusMsg;
					var buddyDiv = document.getElementById('buddyDiv'+eventData.aimId);
					buddyDiv.style.border = '1px solid #000000';
					buddyStatus.style.color = '#000000'
					setTimeout(function(){ buddyDiv.style.border = '1px solid #E5E5E5'; }, 3000);
					setTimeout(function(){ buddyStatus.style.color = '#737487'; }, 3000);
				}
			}
		} catch (e) {}
		try {
			if (eventData.statusMsg.indexOf('â™«') != -1){
				streampadPlayer.flash.getSWF("streampadFlash").presenceEvent(eventData);
			}
		} catch (e) {}
	},
	fillHistoryItems : function(data){
		if (data.userplayhistory.userplayhistoryitem){
			var len = data.userplayhistory.userplayhistoryitem.length;
			if (len > 0){
				var right = document.getElementById('streampadDrawerRight');
				//right.innerHTML = '';
				var profileItems = document.createElement('div');
				profileItems.setAttribute('id', 'streampadProfileItems');
				streampadPlayer.Utils.setStyles(profileItems, {'position' : 'absolute', 'top' : '37px', 'left' : '0', 'bottom' : '0', 'width' : '100%', 'overflow' : 'auto'});
				if (streampadPlayer.browser.engine.trident4){
					profileItems.style.height = (streampadPlayer.params.drawersize-37)+'px';
				}
				right.appendChild(profileItems);
				for (var i = 0; i < len; i++){
					var historyItem = data.userplayhistory.userplayhistoryitem[i];
					var playlistItem = document.createElement('div');
					playlistItem.style.height = '60px';
					if (streampadPlayer.browser.engine.trident4){
						playlistItem.style.width = '97%';
					} else {
						playlistItem.style.width = '100%';
					}
					playlistItem.style.overflow = 'hidden';
					playlistItem.style.position = 'relative';
					profileItems.appendChild(playlistItem);
					
					var d = new Date();
					var ctime = parseInt(historyItem.ctime);
					var tzo = parseInt(historyItem.tzo);
					d.setTime(ctime * 1000 - tzo * 60000);
					var ampm = "am";
					var timeStringData = d.getHours();
					if (timeStringData > 12){
						timeStringData = timeStringData - 12;
						ampm = "pm";
					}
					var timeString = document.createElement('div');
					timeString.style.position = 'absolute';
					timeString.style.top = '10px';
					timeString.style.left = '30px';
					timeString.style.width = '80px';
					timeString.style.textAlign = 'right';
					timeString.style.color = '#000000';
					timeString.style.fontFamily = 'arial';
					timeString.style.fontSize = '14px';
					timeString.style.fontWeight = 'bold';
					var mins = d.getMinutes();
					if (mins < 10){
						mins = "0"+mins;
					}
					timeString.appendChild(document.createTextNode(timeStringData+":"+mins+" "+ampm));
					
					playlistItem.appendChild(timeString);
					var dateString = document.createElement('div');
					dateString.style.position = 'absolute';
					dateString.style.top = '27px';
					dateString.style.left = '30px';
					dateString.style.width = '80px';
					dateString.style.textAlign = 'right';
					dateString.style.color = '#666666';
					dateString.style.fontFamily = 'arial';
					dateString.style.fontSize = '12px';
					var year = d.getFullYear();
					year = year+"";
					year = year.substr(2);
					dateString.appendChild(document.createTextNode(d.getMonth()+1+"/"+d.getDate()+"/"+year));
					playlistItem.appendChild(dateString);
					
					
					/*var timeSplit = historyItem.ctime.split(' ');
					var hourSplit = timeSplit[1].split(':');
					var hour = parseInt(hourSplit[0]);
					var tzo = parseInt(historyItem.tzo);
					tzo = tzo / 60;
					hour = hour - tzo;
					var ampm = 'AM';
					
					if (hour > 12){
						hour = hour - 12;
						ampm = 'PM';
					}
					var timeString = document.createElement('div');
					timeString.style.position = 'absolute';
					timeString.style.top = '10px';
					timeString.style.left = '30px';
					timeString.style.width = '80px';
					timeString.style.textAlign = 'right';
					timeString.style.color = '#000000';
					timeString.style.fontFamily = 'arial';
					timeString.style.fontSize = '14px';
					timeString.style.fontWeight = 'bold';
					var mins = parseInt(hourSplit[1]);
					if (mins < 10){
						mins = "0"+mins;
					}
					timeString.appendChild(document.createTextNode(hour+":"+mins+" "+ampm));
					playlistItem.appendChild(timeString);
					var dateString = document.createElement('div');
					dateString.style.position = 'absolute';
					dateString.style.top = '27px';
					dateString.style.left = '30px';
					dateString.style.width = '80px';
					dateString.style.textAlign = 'right';
					dateString.style.color = '#666666';
					dateString.style.fontFamily = 'arial';
					dateString.style.fontSize = '12px';
					dateString.appendChild(document.createTextNode(timeSplit[0]));*/
					
					playlistItem.appendChild(dateString);
					var songTitle = document.createElement('a');
					songTitle.style.position = 'absolute';
					songTitle.style.left = '130px';
					songTitle.style.right = '0';
					songTitle.style.height = '16px';
					songTitle.style.top = '10px';
					songTitle.style.color = '#000000';
					songTitle.style.fontFamily = 'arial';
					songTitle.style.fontSize = '14px';
					songTitle.style.fontWeight = 'bold';
					songTitle.style.overflow = 'hidden';
					songTitle.style.textAlign = 'left';
					songTitle.style.lineHeight = 'normal';
					songTitle.style.textDecoration = 'none';
					if (historyItem.tracktitle != null){
						songTitle.appendChild(document.createTextNode(historyItem.tracktitle));
					} else {
						//songTitle.innerHTML = streampadPlayer.Playlist.array[i].text;
					}
					if (historyItem.trackaolid != null){
						songTitle.setAttribute('target', 'blank');
						songTitle.setAttribute('href', 'http://music.aol.com/song/id/'+historyItem.trackaolid);
						streampadPlayer.Event.add(songTitle, 'mouseover', streampadPlayer.UI.underlineElement);
						streampadPlayer.Event.add(songTitle, 'mouseout', streampadPlayer.UI.noUnderlineElement);
					}
					playlistItem.appendChild(songTitle);
					var artist = document.createElement('a');
					artist.setAttribute('id', 'streampadHistoryArtist'+i);
					artist.style.color = '#666666';
					artist.style.fontFamily = 'arial';
					artist.style.fontSize = '12px';
					artist.style.position = 'absolute';
					artist.style.left = '130px';
					artist.style.right = '0';
					artist.style.height = '14px';
					artist.style.top = '28px';
					artist.style.overflow = 'hidden';
					artist.style.textAlign = 'left';
					artist.style.lineHeight = 'normal';
					artist.style.textDecoration = 'none';
					if (historyItem.artistname != null){
						artist.appendChild(document.createTextNode(historyItem.artistname));
					} else {
						artist.appendChild(document.createTextNode(''));
					}
					if (historyItem.artistaolid != null){
						artist.setAttribute('target', 'blank');
						artist.setAttribute('href', 'http://music.aol.com/artist/id/'+historyItem.artistaolid);
						streampadPlayer.Event.add(artist, 'mouseover', streampadPlayer.UI.underlineElement);
						streampadPlayer.Event.add(artist, 'mouseout', streampadPlayer.UI.noUnderlineElement);
					}
					playlistItem.appendChild(artist);
					if (historyItem.sourceuri != null){
						var sourceu = document.createElement('a');
						sourceu.appendChild(document.createTextNode("via: "+historyItem.sourceuri));
						sourceu.setAttribute('href', historyItem.sourceuri);
						sourceu.setAttribute('target', 'blank');
						streampadPlayer.Event.add(sourceu, 'mouseover', streampadPlayer.UI.underlineElement);
						streampadPlayer.Event.add(sourceu, 'mouseout', streampadPlayer.UI.noUnderlineElement);
					} else {
						var sourceu = document.createElement('div');
						sourceu.appendChild(document.createTextNode("via: "+historyItem.devicename));
					}
					sourceu.style.color = '#666666';
					sourceu.style.fontFamily = 'arial';
					sourceu.style.fontSize = '10px';
					sourceu.style.position = 'absolute';
					sourceu.style.left = '130px';
					sourceu.style.right = '0';
					sourceu.style.height = '14px';
					sourceu.style.top = '42px';
					sourceu.style.overflow = 'hidden';
					sourceu.style.textAlign = 'left';
					sourceu.style.lineHeight = 'normal';
					sourceu.style.textDecoration = 'none';
					playlistItem.appendChild(sourceu);
					var divider = document.createElement('div');
					divider.style.height = '1px';
					if (streampadPlayer.browser.engine.trident4){
						divider.style.width = '97%';
					} else {
						divider.style.width = '100%';
					}
					divider.style.overflow = 'hidden';
					divider.style.background = 'url("https://secure.static.tumblr.com/ujjnqse/B2dnp5jx6/playlist-item-divider.gif") repeat-x';
					playlistItem.appendChild(divider);
					
					}
			} else {
			
			}
		} else {
		
		}
	},
	underlineElement : function(e){
		e = e||window.event
		var target = e.currentTarget||e.srcElement;
		target.style.textDecoration = 'underline';
	},
	noUnderlineElement : function(e){
		e = e||window.event
		var target = e.currentTarget||e.srcElement;
		target.style.textDecoration = 'none';
	},
	buttonBorder : function(borderNum, onOff){
		document.getElementById('streampadPlayerBorderNum'+borderNum).style.backgroundPosition = streampadPlayer.Theme[onOff];
		var borderNumLeft = (parseInt(borderNum))+(1);
		document.getElementById('streampadPlayerBorderNum'+(borderNumLeft+'')).style.backgroundPosition = streampadPlayer.Theme[onOff];
	},
	setLoggedIn : function(){
		streampadPlayer.Theme.profileOff = '-170px 8px';
		streampadPlayer.Theme.profileOn = '-384px 8px';
		try {
			document.getElementById('streampadProfileButton').style.backgroundPosition = streampadPlayer.Theme.profileOff;
		} catch(e){}
	},
	showRightDrawerLoading : function(){
		try {
			var right = document.getElementById('streampadDrawerRight');
			var loadingDiv = document.createElement('div');
			loadingDiv.setAttribute('id', 'streampadPlayerRightDrawerLoader');
			streampadPlayer.Utils.setStyles(loadingDiv, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/DCHnp5k53/horizontal-loader-black.gif") no-repeat', 'width' : '96px', 'height' : '12px', 'position' : 'absolute', 'top' : '100px', 'left' : '45%'});
			right.appendChild(loadingDiv);
		} catch (e) {}
	},
	hideRightDrawerLoading : function(){
		try {
			var right = document.getElementById('streampadDrawerRight');
			var loadingDiv = document.getElementById('streampadPlayerRightDrawerLoader');
			right.removeChild(loadingDiv);
		} catch(e){}
	},
	profileDrawerLeftLoader : {
		show : function(){
			try {
				var left = document.getElementById('streampadDrawerLeft');
				left.innerHTML = '';
				var loadingDiv = document.createElement('div');
				loadingDiv.setAttribute('id', 'streampadPlayerLeftDrawerLoader');
				streampadPlayer.Utils.setStyles(loadingDiv, {'background' : 'url("https://secure.static.tumblr.com/ujjnqse/DCHnp5k53/horizontal-loader-black.gif") no-repeat', 'width' : '96px', 'height' : '12px', 'position' : 'absolute', 'top' : '100px', 'left' : '80px'});
				left.appendChild(loadingDiv);
			} catch(e){}
		},
		hide : function(){
			try {
				var left = document.getElementById('streampadDrawerLeft');
				var loadingDiv = document.getElementById('streampadPlayerLeftDrawerLoader');
				left.removeChild(loadingDiv);
			} catch(e){}
		}
	}
};
streampadPlayer.flash = {
	majorVersion : 0,
    getSWF : function(n) {
      if (document[n]) {
        return document[n];
      } else {
        return window[n];
      }
    },
    fsLoaded : function(){
    },
    /* called from Flash when the swf is initially loaded */
    loaded : function(volume, sn, drawersize, majorVersion){
	$sp('#flashChromeDummy').remove();
    	window.clearTimeout(streampadPlayer.vars.isFlashLoaded);
    	streampadPlayer.flash.majorVersion = majorVersion;
    	if (streampadPlayer.vars.clientLogin == true){
    		if (sn != null){
    			streampadPlayer.vars.sn = sn;
    			streampadPlayer.UI.setLoggedIn();
    		}
    	}
    	/*streampadPlayer.vars.theVolume = volume;
    	streampadPlayer.vars.volumeDraggerY = (volume*-100)+103;
    	if (streampadPlayer.vars.volumeDraggerY > 103){
			streampadPlayer.vars.volumeDraggerY = 102;			
		}
		if (streampadPlayer.vars.volumeDraggerY < 12){
			streampadPlayer.vars.volumeDraggerY = 12;
		}*/
		streampadPlayer.vars.theVolume = volume*100;
		streampadPlayer.vars.volumeDraggerY = (streampadPlayer.vars.theVolume*-1)+103;
		if (streampadPlayer.vars.volumeDraggerY > 103){
			streampadPlayer.vars.volumeDraggerY = 102; 
		}
		if (streampadPlayer.vars.volumeDraggerY < 12){
			streampadPlayer.vars.volumeDraggerY = 12;
		}

		streampadPlayer.params.drawersize = drawersize;
		if (streampadPlayer.params.popup == 'true'){
			streampadPlayer.params.drawersize = 215;
		}
    	setTimeout(streampadPlayer.flash.fireLoaded, '100');
    },
    fireLoaded : function(){
    	streampadPlayer.Event.fire(window, 'flashLoaded', null);
    },
    setVolume : function(volume){
    	/*streampadPlayer.vars.theVolume = volume;
    	streampadPlayer.vars.volumeDraggerY = (volume*-100)+103;
    	if (streampadPlayer.vars.volumeDraggerY > 103){
			streampadPlayer.vars.volumeDraggerY = 102;			
		}
		if (streampadPlayer.vars.volumeDraggerY < 12){
			streampadPlayer.vars.volumeDraggerY = 12;
		}
		streampadPlayer.flash.getSWF("streampadFlash").setVolume(streampadPlayer.vars.theVolume);*/
		
		
		streampadPlayer.vars.theVolume = volume*100;
		streampadPlayer.vars.volumeDraggerY = (streampadPlayer.vars.theVolume*-1)+103;
		if (streampadPlayer.vars.volumeDraggerY > 103){
			streampadPlayer.vars.volumeDraggerY = 102; 
		}
		if (streampadPlayer.vars.volumeDraggerY < 12){
			streampadPlayer.vars.volumeDraggerY = 12;
		}
		streampadPlayer.flash.getSWF("streampadFlash").setVolume(streampadPlayer.vars.theVolume/100);
		
		
    },
    getVolume : function(){
    	return streampadPlayer.vars.theVolume/100;
    },
    getQueueNumber : function(){
    	return streampadPlayer.vars.queueNumber;
    },
    getPlaylist : function(){
    	return streampadPlayer.Playlist.array;
    },
    setPlaylist : function(){
    	try {
    		streampadPlayer.flash.getSWF("streampadFlash").setPlaylistandTotal(streampadPlayer.Playlist.array, streampadPlayer.Playlist.array.length);
    	} catch(e) {}
    },
    setSongVO : function(){
    	if (streampadPlayer.vars.currentSongVO != null){
    		try {
    			streampadPlayer.flash.getSWF("streampadFlash").setSongVO(streampadPlayer.vars.currentSongVO);
    		} catch(e) {}
    	}
    },
    inFull : function(b){
    	if (b){
    		streampadPlayer.AIM.startSession.request();
    	}
    },
    openWin : function(url){
    	window.open(url);
    },
    globalCheck : function(status){
    	streampadPlayer.vars.usCanada = status;
    	streampadPlayer.Event.fire(window, 'globalCheck', streampadPlayer.vars.usCanada);
    }
};
/* Event object which handles listening and firing of events */
streampadPlayer.Event = {
	listeners : {},
	add : function(target, type, fn){
		if (typeof this.listeners[type+target] == 'undefined') {
            this.listeners[type+target] = [];
        }
    	this.listeners[type+target].push(fn);
		if (target.addEventListener) {
	        target.addEventListener(type, fn, false);
		} else {
			target.attachEvent('on' + type, fn);
		}
	},
	remove : function(target, type, fn){
		if (typeof this.listeners[type+target] != 'undefined') {
			for (var i = 0, l; l = this.listeners[type+target][i]; i++) {
                if (l == fn) break;
            }
            this.listeners[type+target].splice(i, 1);
        }
		if (target.removeEventListener) {
			target.removeEventListener(type, fn, false);
		} else { 
			target.detachEvent('on' + type, fn);
		}
	},
	fire : function(target, type, object){
		if (typeof this.listeners[type+target] != 'undefined' && this.listeners[type+target].length) {
			var newArray = this.listeners[type+target].slice();
            for (var i = 0, l; l = newArray[i]; i++) {
            	l(object);
            }
            return true;           
        }
        return false;
	},
	stop : function(e){
		try {
			e.stopPropagation();
		} catch (e){
			try {
				window.event.cancelBubble = true;
			} catch (e) {}
		}
	}
};
/* playlists should create a songVO and then call streampadPlayer.Playlist.push(songVO)*/
streampadPlayer.SongVO = function(){
	this.text = null;
	this.enclosure = null;
	this.plays = null;
	this.sourceUrl = null;
	this.artist = null;
	this.artistAolId = null;
	this.album = null;
	this.albumAolId = null;
	this.songTitle = null;
	this.trackAolId = null;
	this.imageUrl = null;
	this.timestamp = null;
	this.itunes = null;
	this.amazon = null;
	this.description = null;
	this.clickFunction = null;
	this.nTrack = null;
	this.pubDate - null;
	this.textTitle = null;
	this.shareEnclosure = true;
	this.getMeta = true;
};
/* Main playlist. playlists should push songVO's into this array */
streampadPlayer.Playlist = {
	array : [],
	timer : null,
	push : function(object){
		clearInterval(streampadPlayer.Playlist.timer);
		this.array.push(object);
		if (streampadPlayer.vars.isWinamp){
			if (this.length == null){
				var r = window.external.PlayQueue.ClearQueue();
			}
			window.external.PlayQueue.Enqueue(object.enclosure, object.songTitle);
		}
		this.length = this.array.length;
		streampadPlayer.Playlist.timer = setInterval(streampadPlayer.Playlist.onChange, 1000);
	},
	onChange : function(){
		clearInterval(streampadPlayer.Playlist.timer);
		streampadPlayer.Event.fire(window, 'playlistChange', streampadPlayer.Playlist.array.length);
	},
	title : document.title,
	length : 0
};
/* call these functions to play a song.  */
streampadPlayer.Play = {
	/* internal method */
	play : function(){
		streampadPlayer.vars.isPlaying = true;
		if (streampadPlayer.vars.isWinamp){
			window.external.PlayQueue.cursor = streampadPlayer.vars.queueNumber;
			window.external.Transport.Play();
		} else {
			try {
				streampadPlayer.vars.currentSongVO.nTrack = streampadPlayer.vars.queueNumber;
			} catch (e) {}
			streampadPlayer.flash.getSWF("streampadFlash").playSong(streampadPlayer.vars.currentSongVO);
		} 
		streampadPlayer.Event.fire(window, 'setCurrent', streampadPlayer.vars.queueNumber);
	},
	/* plays a songVO from streampadPlayer.Playlist */
	queueNumber : function(n){
                if (!this.wait || this.timer == 0) {
                  this.wait = setTimeout(function() {
		    if (n >= streampadPlayer.Playlist.array.length)
		      return;
		    streampadPlayer.vars.queueNumber = n;
		    streampadPlayer.vars.currentSongVO = streampadPlayer.Playlist.array[n];
		    streampadPlayer.UI.setCurrent(streampadPlayer.vars.currentSongVO);
		    streampadPlayer.Play.play();
                    clearTimeout(streampadPlayer.Play.wait);
                  }, this.timer);
                }
                this.n = n;
	},
	/* Insert into current queueNumber and immediately play this songVO */
	songVO : function(songVO){
		streampadPlayer.Playlist.array.splice(streampadPlayer.vars.queueNumber, 0, songVO);
		this.queueNumber(streampadPlayer.vars.queueNumber);
	},
	/* immediately play this enclosure */
	enclosure : function(e){
		var songVO = new streampadPlayer.SongVO();
		songVO.enclosure = e;
		this.songVO(songVO);
	},
        timer : 0,
        wait : null,
        n: null
};
/* Utility functions */
streampadPlayer.Utils = {
	trimString : function(string, count){
		if (string.length > count){
			return string.slice(string, count)+'...';
		} else {
			return string;
		}
	},
	getBodyHeight : function(){
		if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			return document.documentElement.clientHeight;
  		} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
   			return document.body.clientHeight;
		}
	},
	getBodyWidth : function(){
		if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			return document.documentElement.clientWidth;
  		} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
   			return document.body.clientWidth;
		}
	},
	getWidthMarginSize : function(){
		var windowWidth = streampadPlayer.Utils.getBodyWidth();
		var bodyWidth = document.body.clientWidth;
		var marginSize = (windowWidth - bodyWidth) / 2;
		if (marginSize > 0) {
			return marginSize;
		} else {
			return 0;
		}
	},
	flashLoaded : function(){
		//alert("It seems you don't have the latest version of Flash installed. Please visit http://get.adobe.com/flashplayer/ to get the latest version.");
	},
	scriptRequest : function(url){
		var s = document.createElement('script');
		s.setAttribute('src', url);
		var bottomBar = document.getElementById('streampadBottomBar');
		bottomBar.appendChild(s);
	},
	scriptClean : function(){
		var bottomBar = document.getElementById('streampadBottomBar');
		var scripts = bottomBar.getElementsByTagName('script');
		for (i=0; i < scripts.length; i++){
			try {
				bottomBar.removeChild(scripts[i]);
			} catch (e){}
		}	
	},
	setStyles : function(element, styleObject){
		for (i in styleObject){
			element.style[i] = styleObject[i];
		}
	},
	getX : function(o){ 
		var x = o.offsetLeft
		if (o.offsetParent) while (o.offsetParent) { o = o.offsetParent; x += o.offsetLeft }
		return x
	},
	getY : function(o){
		var s = o
		var y = o.offsetTop
		if (o.offsetParent) while (o.offsetParent) { o = o.offsetParent; y += o.offsetTop }
		var html = document.getElementsByTagName('html')[0]
		if (s.parentNode) while(s.parentNode) {
			s = s.parentNode
			if (s.scrollTop && s != document && s != document.body && s != html) y -= s.scrollTop
		}
		return y
	},
	chunk : function(a, s){
   // for(var x, i = 0, c = -1, l = a.length, n = []; i < l; i++)
        //(x = i % s) ? n[c][x] = a[i] : n[++c] = [a[i]];
    	//return n;
    	var base = [], i;
    	for(i=0; i<a.length; i+=s ) { 
    		base.push( a.slice( i, i+s ) ); 
    	}    
    	return base;
	},
	getSongArtist : function(){
		var s = "";
		if (streampadPlayer.vars.currentSongVO.text != null){
			s = streampadPlayer.vars.currentSongVO.text;
		}
		if (streampadPlayer.vars.currentSongVO.songTitle != null){
			s = streampadPlayer.vars.currentSongVO.songTitle;
			if (streampadPlayer.vars.currentSongVO.artist != null){
				s += " by "+streampadPlayer.vars.currentSongVO.artist;
			}
		}
		return s;
	}
}
/* Now Playing */
streampadPlayer.NowPlaying = {
	meta : {
		playlistLength : 0,
		determine : function(){
			try {
				if (streampadPlayer.vars.getAudioMeta == true){
					var array = [];
					var l = streampadPlayer.Playlist.array.length - streampadPlayer.NowPlaying.meta.playlistLength;
					for (var i = streampadPlayer.NowPlaying.meta.playlistLength; i < streampadPlayer.Playlist.array.length; i++){
						if (streampadPlayer.Playlist.array[i].getMeta == true){
							var o = {"sourceUrl" : streampadPlayer.Playlist.array[i].sourceUrl, "enclosure" : streampadPlayer.Playlist.array[i].enclosure};
							array.push(o); 
						}
					}
					var bigArray = streampadPlayer.Utils.chunk(array, 20);
					for (var j = 0; j < bigArray.length; j++){
						var newArray = bigArray[j];
						//newArray = streampadPlayer.flash.getSWF("streampadFlash").JSONEncode(newArray);
						newArray = JSON.stringify(newArray);
						newArray = escape(newArray);
						streampadPlayer.NowPlaying.meta.request(newArray);
						streampadPlayer.NowPlaying.meta.playlistLength = streampadPlayer.Playlist.array.length;
					}
				} else {
					streampadPlayer.Event.fire(window, 'gotMetadata', null);
				}
			} catch (e) {}
		},
		request : function(data){
			try {
				streampadPlayer.flash.getSWF("streampadFlash").jsonPoster(streampadPlayer.params.metaurl, 'f=json&data='+data, 'streampadPlayer.NowPlaying.meta.response', "POST");
			} catch (e){
				streampadPlayer.Utils.scriptRequest(streampadPlayer.params.metaurl+'?c=streampadPlayer.NowPlaying.meta.response&f=json&data='+data);
			}
		},
		response : function(json){
			if (json.response.statusCode == 200){
				try {
					if (json.response.data.streams.stream.length != undefined){
						for (j = 0; j < json.response.data.streams.stream.length; j++){
							var object = json.response.data.streams.stream[j];
							this.matchSongs(object);
							if (streampadPlayer.params.showdrawer){
								streampadPlayer.UI.fillPlaylistItems();
								streampadPlayer.UI.fillPlaylistDrawer();
							}
						}	
					} 
				} catch (e){};
				streampadPlayer.vars.currentSongVO = streampadPlayer.Playlist.array[streampadPlayer.vars.queueNumber];
				//streampadPlayer.Event.fire(window, 'setCurrent', streampadPlayer.vars.queueNumber);
				streampadPlayer.Event.fire(window, 'gotMetadata', json);
			}
		},
		matchSongs : function(object){
			for (i = 0; i < streampadPlayer.Playlist.array.length; i++){
				if (object.enclosure == streampadPlayer.Playlist.array[i].enclosure){
					try {
						if (object.songTitle != 'null'){
							streampadPlayer.Playlist.array[i].songTitle = object.songTitle;
						}
					} catch(e){}
					try {
						if (object.artist != 'null'){
							streampadPlayer.Playlist.array[i].artist = object.artist;
						}
					} catch(e){}
					try {
						if (object.album != 'null'){
							streampadPlayer.Playlist.array[i].album = object.album;
						}
					} catch(e){}
					try {
						if (object.imageUrl != 'null' && streampadPlayer.Playlist.array[i].imageUrl == null){
							if (object.imageUrl == 'http://o.aolcdn.com/art/ch_music2/no_art.jpg'){
								object.imageUrl = null;
							}
							streampadPlayer.Playlist.array[i].imageUrl = object.imageUrl;
						}
					} catch(e){}
					try {
						if (object.artistAolId != 'null'){
							streampadPlayer.Playlist.array[i].artistAolId = object.artistAolId;
						}
					} catch(e){}
					try {
						if (object.trackAolId != 'null'){
							streampadPlayer.Playlist.array[i].trackAolId = object.trackAolId;
						}
					} catch(e){}
					try {
						if (object.albumAolId != 'null'){
							streampadPlayer.Playlist.array[i].albumAolId = object.albumAolId;
						}
					} catch(e){}
				}
			}
		}	
	},
	set : {
		request : function(){
			if (streampadPlayer.vars.currentSongVO.enclosure != null){
				object = {};
				if (streampadPlayer.vars.currentSongVO.shareEnclosure == true){
					object.enclosure = streampadPlayer.vars.currentSongVO.enclosure;
				}
				if (streampadPlayer.vars.currentSongVO.songTitle != null){
					object.songTitle = streampadPlayer.vars.currentSongVO.songTitle;
				} else {
					object.songTitle = streampadPlayer.vars.currentSongVO.text.substring(0, 30);
				}
				if (streampadPlayer.vars.currentSongVO.artist != null){
					object.artist = streampadPlayer.vars.currentSongVO.artist;
				}
				if (streampadPlayer.vars.currentSongVO.album != null){
					object.album = streampadPlayer.vars.currentSongVO.album;
				}
				if (streampadPlayer.vars.currentSongVO.imageUrl != null){
					object.imageUrl = streampadPlayer.vars.currentSongVO.imageUrl;
				}
				if (streampadPlayer.vars.currentSongVO.sourceUrl != null){
					object.sourceUrl = streampadPlayer.vars.currentSongVO.sourceUrl;
				}
				if (streampadPlayer.vars.currentSongVO.artistAolId != null){
					object.artistAolId = streampadPlayer.vars.currentSongVO.artistAolId;
				}
				if (streampadPlayer.vars.currentSongVO.trackAolId != null){
					object.trackAolId = streampadPlayer.vars.currentSongVO.trackAolId;
				}
				object.tzo = new Date().getTimezoneOffset();
				//object = streampadPlayer.flash.getSWF("streampadFlash").JSONEncode(object);
				object = JSON.stringify(object);
				object = encodeURIComponent(object);

        // removed by taber, aug 13, 2012 - nowplayingurl redirects to a dynapub url (eg: http://dynapub.music.aol.com/api/nowplaying/set...) which no longer exists
				//streampadPlayer.Utils.scriptRequest(streampadPlayer.params.nowplayingurl+'set?c=streampadPlayer.NowPlaying.set.response&f=json&data='+object);
			}
		},
		response : function(json){
		}
	}
}
streampadPlayer.Event.add(window, 'playlistChange', streampadPlayer.NowPlaying.meta.determine);
streampadPlayer.Event.add(window, 'gotMetadata', streampadPlayer.flash.setPlaylist);
streampadPlayer.Event.add(window, 'gotMetadata', streampadPlayer.flash.setSongVO);
SPAPI.addEventListener('onStart', streampadPlayer.Events.insertFullScreen);
streampadPlayer.Event.add(window, 'setCurrent', streampadPlayer.NowPlaying.set.request);
/* hack for IE6 to show alpha pngs */
function streampadPlayerFixPNG(el) {
    if (streampadPlayer.browser.engine.trident4) {
		var imgURL = el.style.backgroundImage;
		el.style.background = '';
		el.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true', sizingMethod='crop', src=" + imgURL.match(/\((.+)\)/)[1] + ")";
    }
};
/* omniture */
streampadPlayer.Omni = {
	request : function(){
/*		var omnTS=new Date();
		var omnTS1=omnTS.getDate()+'/'+omnTS.getMonth()+'/'+omnTS.getFullYear()+' '+omnTS.getHours()+':'+omnTS.getMinutes()+':'+omnTS.getSeconds()+' '+omnTS.getDay()+' '+omnTS.getTimezoneOffset();
 	var omUrl='http://o.sa.aol.com/b/ss/' + 'aolstreampadapp' + '/1/H.15.1/' +Math.ceil(Math.random()*100000000000000) +'?[AQB]&ndh=1&t='+encodeURIComponent(omnTS1) +'&ns=aolllc&cl=63072000' +'&pageName=' +encodeURIComponent(streampadPlayer.Playlist.title)+'&c1='+streampadPlayer.vars.playlistType+'&c12='+encodeURIComponent(streampadPlayer.vars.siteId) +'&c16='+streampadPlayer.vars.total+'&g='+encodeURIComponent(document.URL)+'&pe=lnk_o' +'&pev2='+encodeURIComponent(streampadPlayer.Playlist.title)+'&[AQE]';
		var i = new Image();
		i.setAttribute('src', omUrl);
		var dlUrl = "http://b.aol.com/ping?h="+encodeURIComponent('streampad.com')+"&ts="+omnTS.getTime()+"&r="+encodeURIComponent(streampadPlayer.vars.siteId)+"&p="+encodeURIComponent(streampadPlayer.Playlist.title)+"&t="+streampadPlayer.vars.playlistType+"&s="+streampadPlayer.vars.total;
		var di = new Image();
		di.setAttribute('src', dlUrl);*/
	}
}
streampadPlayer.AIM = {
	status : {
		set : {
			request : function(){
				if (streampadPlayer.vars.clientLogin == true){
					if (streampadPlayer.flash.getSWF("streampadFlash").getasb(streampadPlayer.vars.sn)){
						streampadPlayer.flash.getSWF("streampadFlash").setStatus(streampadPlayer.vars.currentSongVO, 'streampadPlayer.AIM.status.set.response');
					}
				} else {
					if (streampadPlayer.vars.currentSongVO.songTitle != null){
						var artist = '';
						if (streampadPlayer.vars.currentSongVO.artist != null){
							artist = ' by '+streampadPlayer.vars.currentSongVO.artist;
						}
						if (streampadPlayer.OpenAuth.token != null){
							if (streampadPlayer.flash.getSWF("streampadFlash").getasb(streampadPlayer.vars.sn)){
								streampadPlayer.Utils.scriptRequest(streampadPlayer.params.aimurl+'presence/setStatus?f=json&c=streampadPlayer.AIM.status.set.response&k='+streampadPlayer.OpenAuth.devId+'&a='+streampadPlayer.OpenAuth.token+'&statusMsg=%E2%99%AB%20'+encodeURIComponent(streampadPlayer.vars.currentSongVO.songTitle+artist));
							}
						}
					} 
				}
			},
			response : function(json){
			}
		}
	},
	buddylist : {
		request : function(){
			streampadPlayer.UI.showRightDrawerLoading();
			if (streampadPlayer.vars.clientLogin == true){
				streampadPlayer.flash.getSWF("streampadFlash").getBuddylist('streampadPlayer.AIM.buddylist.response');
			} else {
				if (streampadPlayer.OpenAuth.token != null){
					streampadPlayer.Utils.scriptRequest(streampadPlayer.params.aimurl+'presence/get?f=json&c=streampadPlayer.AIM.buddylist.response&k='+streampadPlayer.OpenAuth.devId+'&a='+streampadPlayer.OpenAuth.token+'&bl=1&presenceIcon=0&capabilities=1&statusMsg=1&location=0');
				}
			}
		},
		response : function(json){
			streampadPlayer.UI.hideRightDrawerLoading();
			if (json.response.statusCode == 200){
				try {
					var musicBuddies = streampadPlayer.AIM.buddylist.getMusicBuddies(json.response.data.groups);
					var right = document.getElementById('streampadDrawerRight');
					var buddyContainer = document.createElement('div');
					buddyContainer.setAttribute('id', 'streampadBuddyContainer');
					streampadPlayer.Utils.setStyles(buddyContainer, {'position' : 'absolute', 'top' : '37px', 'left' : '0', 'bottom' : '0', 'width' : '100%', 'overflow' : 'auto'});
					if (streampadPlayer.browser.engine.trident4){
						buddyContainer.style.height = (streampadPlayer.params.drawersize-37)+'px';
					}
					right.appendChild(buddyContainer);
					var len = musicBuddies.length;
					if (len > 0){
						for (var i = 0; i < len; i++){
							var buddy = streampadPlayer.UI.createBuddy(musicBuddies[i]);
							buddyContainer.appendChild(buddy);
						}
					} else {
						var noBuddies = document.createElement('div');
						noBuddies.appendChild(document.createTextNode('You do not have any buddies listening to music right now'));
						streampadPlayer.Utils.setStyles(noBuddies, {'position' : 'absolute', 'top' : '100px', 'left' : '30%', 'fontFamily' : 'arial', 'fontSize' : '14px', 'fontWeight' : 'bold'});
						right.appendChild(noBuddies);
					}	
				} catch (e){}
			}
			streampadPlayer.Event.fire(window, "buddylistResponse", json);
			streampadPlayer.AIM.startSession.request();
		},
		getMusicBuddies : function(groups){
			var musicBuddies = []
			var len = groups.length;
			for (var i = 0; i < len; i++){
				var buddies = groups[i].buddies;
				var buddiesLen = buddies.length;
				for (var j = 0; j < buddiesLen; j++){
					var buddy = buddies[j];
					try {
						if (buddy.statusMsg.indexOf('â™«') != -1){
							musicBuddies.push(buddy);
						}
					} catch (e) {}
				}
			}
			streampadPlayer.Event.fire(window, "musicBuddies", musicBuddies);
			return musicBuddies;
		}	
	},
	startSession : {
		started : false,
		aimsid : null,
		fetchBaseUrl : null,
		events : 'presence',
		capabilities : '91a3c7404a32bf26cc4048eba5452f0d',
		request : function(){
			if (streampadPlayer.AIM.startSession.started == false){
				if (streampadPlayer.vars.clientLogin == true){
					streampadPlayer.flash.getSWF("streampadFlash").startSession(true, streampadPlayer.AIM.startSession.events, '1', streampadPlayer.AIM.startSession.capabilities, 'streampadPlayer.AIM.startSession.response');
				} else {
					if (streampadPlayer.OpenAuth.token != null){
						streampadPlayer.Utils.scriptRequest(streampadPlayer.params.aimurl+'aim/startSession?f=json&c=streampadPlayer.AIM.startSession.response&k='+streampadPlayer.OpenAuth.devId+'&a='+streampadPlayer.OpenAuth.token+'&events='+streampadPlayer.AIM.startSession.events+'&assertCaps='+streampadPlayer.AIM.startSession.capabilities+'&interestCaps='+streampadPlayer.AIM.startSession.capabilities);
					}
				}
			}
		},
		response : function(json){
			if (json.response.statusCode == 200){
				streampadPlayer.AIM.startSession.started = true;
				streampadPlayer.AIM.startSession.aimsid = json.response.data.aimsid;
				streampadPlayer.AIM.startSession.fetchbaseUrl = json.response.data.fetchBaseURL;
				var obj = streampadPlayer.AIM.fetchEvents.parse();
				streampadPlayer.flash.getSWF("streampadFlash").fetchEventsStart(obj.url, obj.port, obj.get, 'streampadPlayer.AIM.fetchEvents.response');
			}
			if (json.response.statusCode == 607){
				streampadPlayer.AIM.startSession.started = true;
				setTimeout(streampadPlayer.AIM.startSession.rateLimitEnd, 300000);
			}
		},
		rateLimitEnd : function(){
			streampadPlayer.AIM.startSession.started = false;
		}
	},
	fetchEvents : {
		connectData : {},
		parse : function(){
			var fetchBase = streampadPlayer.AIM.startSession.fetchbaseUrl;
			var splits = fetchBase.split("/aim");
			var urlsplits = splits[0].split("http://");
			var url = urlsplits[1];
			var portsplits = url.split(":");
			streampadPlayer.AIM.fetchEvents.connectData.url = portsplits[0];
			streampadPlayer.AIM.fetchEvents.connectData.port = 80;
			if (portsplits[1]){
				streampadPlayer.AIM.fetchEvents.connectData.port = parseInt(portsplits[1]);
			}
			streampadPlayer.AIM.fetchEvents.connectData.get = "/aim"+splits[1];
			return streampadPlayer.AIM.fetchEvents.connectData;
		},
		request : function(){
			streampadPlayer.flash.getSWF("streampadFlash").fetchEventsStart(streampadPlayer.AIM.fetchEvents.connectData.url, streampadPlayer.AIM.fetchEvents.connectData.port, streampadPlayer.AIM.fetchEvents.connectData.get, 'streampadPlayer.AIM.fetchEvents.response');
		},
		response : function(json){
			if (json != null){
				if (json.response.statusCode == 200){
					streampadPlayer.AIM.startSession.fetchbaseUrl = json.response.data.fetchBaseURL;
					var obj = streampadPlayer.AIM.fetchEvents.parse();
					setTimeout(streampadPlayer.AIM.fetchEvents.request, json.response.data.timeToNextFetch);
					var len = json.response.data.events.length;
					for (var i = 0; i < len; i++){
						var eventData = json.response.data.events[i].eventData;
						streampadPlayer.UI.modifyBuddy(eventData);
					}
				}
			streampadPlayer.Event.fire(window, 'aimfetch', json);
			} else {
				streampadPlayer.AIM.fetchEvents.request();
			}
		}
	},
	avTrack : {
		set : {
			request : function(){
				if (streampadPlayer.flash.getSWF("streampadFlash").getasb(streampadPlayer.vars.sn)){
					var str = "";
					if (streampadPlayer.vars.currentSongVO.enclosure != null && streampadPlayer.vars.currentSongVO.shareEnclosure == true){
						str += "&uri="+encodeURIComponent(streampadPlayer.vars.currentSongVO.enclosure);
					}
					if (streampadPlayer.vars.currentSongVO.songTitle != null){
						str += "&title="+encodeURIComponent(streampadPlayer.vars.currentSongVO.songTitle);
					} else {
						str += "&title="+encodeURIComponent(streampadPlayer.vars.currentSongVO.text.substring(0, 30));
					}
					if (streampadPlayer.vars.currentSongVO.artist != null){
						str += "&artist="+encodeURIComponent(streampadPlayer.vars.currentSongVO.artist);
					}
					if (streampadPlayer.vars.currentSongVO.album != null){
						str += "&album="+encodeURIComponent(streampadPlayer.vars.currentSongVO.album);
					}
					if (streampadPlayer.vars.currentSongVO.imageUrl != null){
						str += "&image="+encodeURIComponent("width=200,height=200,src="+streampadPlayer.vars.currentSongVO.imageUrl);
					}
					if (streampadPlayer.vars.currentSongVO.sourceUrl != null){
						str += "&playlistLink="+encodeURIComponent(streampadPlayer.vars.currentSongVO.sourceUrl);
					}
					if (streampadPlayer.vars.currentSongVO.artistAolId != null){
						str += "&artistLink="+encodeURIComponent("http://music.aol.com/artist/artist/"+streampadPlayer.vars.currentSongVO.artistAolId);
					}
					if (streampadPlayer.vars.currentSongVO.trackAolId != null){
						str += "&titleLink="+encodeURIComponent("http://music.aol.com/song/song/"+streampadPlayer.vars.currentSongVO.trackAolId);
					}
					str += "&startDate="+Math.round(new Date().getTime()/1000.0);
					str = str.replace(/%26/g, '%26amp;');
					if (streampadPlayer.vars.clientLogin == true){
						streampadPlayer.flash.getSWF("streampadFlash").setAVTrack(streampadPlayer.vars.currentSongVO, 'streampadPlayer.AIM.avTrack.set.response');
					} else {
						if (streampadPlayer.OpenAuth.token != null){
							streampadPlayer.Utils.scriptRequest(streampadPlayer.params.aimurl+'aim/setAvTrack?f=json&c=streampadPlayer.AIM.avTrack.set.response&k='+streampadPlayer.OpenAuth.devId+'&a='+streampadPlayer.OpenAuth.token+str);
						}
					}
				}	  
			},
			response : function(json){
			}
		},
		get : {
			
		}
	}
}
streampadPlayer.Event.add(window, 'setCurrent', streampadPlayer.AIM.status.set.request);
streampadPlayer.Event.add(window, 'setCurrent', streampadPlayer.AIM.avTrack.set.request);
/* browser detection adapted from MooTools 1.2 */
streampadPlayer.browser = {};
if (window.opera) streampadPlayer.browser.engine = {name: 'presto', version: (document.getElementsByClassName) ? 950 : 925};
else if (window.ActiveXObject) streampadPlayer.browser.engine = {name: 'trident', version: (window.XMLHttpRequest) ? 5 : 4};
else if (!navigator.taintEnabled) streampadPlayer.browser.engine = {name: 'webkit', version: (document.evaluate) ? 420 : 419};
else if (navigator.product == "Gecko") streampadPlayer.browser.engine = {name: 'gecko', version: (document.getElementsByClassName) ? 19 : 18};
streampadPlayer.browser.engine[streampadPlayer.browser.engine.name] = streampadPlayer.browser.engine[streampadPlayer.browser.engine.name + streampadPlayer.browser.engine.version] = true;
try {
	window.external.Transport.RegisterForEvents(streampadPlayer.Events.winampTransport);
	streampadPlayer.vars.isWinamp = true;
} catch (e){
	streampadPlayer.vars.isWinamp = false;
}
(function(){
	var domready = function(){
		if (streampadPlayer.browser.loaded) return;
		streampadPlayer.browser.loaded = true;
		streampadPlayer.init();
		streampadPlayer.Event.fire(window, "ready");
	};
	switch (streampadPlayer.browser.engine.name){
		case 'webkit': (function(){
			if (document.readyState == 'loaded' || document.readyState == 'complete'){
				domready();	
			} else {
				setTimeout(arguments.callee, 50);
			}
		})(); 
		break;
		case 'trident':
			var temp = document.createElement('div');
			(function(){
				try {
					(function(){
						temp.doScroll('left');
						temp.innerHTML = 'temp';
						document.body.appendChild(temp);
						document.body.removeChild(temp);
						domready();
					})();
				} catch (e){
					setTimeout(arguments.callee, 50);
				}
			})();
		break;
		default:
			streampadPlayer.Event.add(window, 'load', domready);
			streampadPlayer.Event.add(document, 'DOMContentLoaded', domready);
		}
})();
/* listen for browser resize events */
streampadPlayer.Event.add(window, 'resize', streampadPlayer.UI.resize);
/* ie6 hack for scrolling */
if (streampadPlayer.browser.engine.trident4){
	document.execCommand("BackgroundImageCache", false, true);
	streampadPlayer.Event.add(window, 'scroll', streampadPlayer.Events.scrollHandler);
}
streampadPlayer.OpenAuth = {
	token : null,
	devId : null,
	setToken : function(_devId, _token, _sn){
		streampadPlayer.OpenAuth.devId = _devId;
		streampadPlayer.OpenAuth.token = _token;
		if (_sn != null){
			streampadPlayer.vars.sn = _sn;
		}
		if (streampadPlayer.OpenAuth.token != null && streampadPlayer.vars.sn != null && streampadPlayer.vars.sn != ''){
			streampadPlayer.UI.setLoggedIn();
		}
	}
}
streampadPlayer.Charts = {
	getUserPlayHist : {
		request : function(){
      return;
      // removed by taber, aug 31, 2012 - getUserPlayHist redirects to a dynapub.xyz url which no longer exists
			/*streampadPlayer.UI.showRightDrawerLoading();
			if (streampadPlayer.vars.clientLogin == true){
				streampadPlayer.flash.getSWF("streampadFlash").getUserPlayHist('streampadPlayer.Charts.getUserPlayHist.response');
			} else {
				if (streampadPlayer.OpenAuth.token != null){
					streampadPlayer.Utils.scriptRequest(streampadPlayer.params.chartsurl+'getUserPlayHist?f=json&t='+streampadPlayer.vars.sn+'&devId='+streampadPlayer.OpenAuth.devId+'&c=streampadPlayer.Charts.getUserPlayHist.response&a='+streampadPlayer.OpenAuth.token+'&rows=20');
				}
			}*/
		},
		response : function(json){
			streampadPlayer.UI.hideRightDrawerLoading();
			if (json.response.statusCode == 200){
				streampadPlayer.UI.fillHistoryItems(json.response.data);
			}
		}
	},
	setPlayData : {
		request : function(){
			var tzo = new Date().getTimezoneOffset();
			var app = encodeURIComponent(location.host);
			if (app.length > 3){
					app = app.slice(0,63);
			}
			var requestString = '&tzo='+tzo;
			if (streampadPlayer.vars.currentSongVO.songTitle != null){
					requestString += '&ttitle='+escape(streampadPlayer.vars.currentSongVO.songTitle);
				} else {
					requestString += '&ttitle='+escape(streampadPlayer.vars.currentSongVO.text.substring(0, 30));
				}
			if (streampadPlayer.vars.currentSongVO.artist != null){
				requestString += '&aname='+escape(streampadPlayer.vars.currentSongVO.artist);
			}
			if (streampadPlayer.vars.currentSongVO.album != null){
				requestString += '&altitle='+escape(streampadPlayer.vars.currentSongVO.album);
			}
			if (streampadPlayer.vars.currentSongVO.sourceUrl != null){
				requestString += '&source='+escape(streampadPlayer.vars.currentSongVO.sourceUrl);
			}
			if (streampadPlayer.vars.currentSongVO.artistAolId != null){
				requestString += '&aid='+escape(streampadPlayer.vars.currentSongVO.artistAolId);
			}
			if (streampadPlayer.vars.currentSongVO.trackAolId != null){
				requestString += '&tid='+escape(streampadPlayer.vars.currentSongVO.trackAolId);
			}
			if (streampadPlayer.vars.currentSongVO.albumAolId != null){
				requestString += '&alid='+escape(streampadPlayer.vars.currentSongVO.albumAolId);
			}
			if (streampadPlayer.vars.currentSongVO.enclosure != null && streampadPlayer.vars.currentSongVO.shareEnclosure == true){
				requestString += '&asset='+escape(streampadPlayer.vars.currentSongVO.enclosure);
			}
			if (streampadPlayer.vars.clientLogin == true){
				if (streampadPlayer.flash.getSWF("streampadFlash").getdsb(streampadPlayer.vars.sn)){
					streampadPlayer.flash.getSWF("streampadFlash").setPlayData(streampadPlayer.vars.currentSongVO, tzo, app, 'streampad', 'streampadPlayer.Charts.setPlayData.response');
				} else {
          // removed by taber, aug 31, 2012 - chartsurl redirects to a dynapub.xyz type of url which no longer exists
					//streampadPlayer.Utils.scriptRequest(streampadPlayer.params.chartsurl+'SetPlayData?f=json&c=streampadPlayer.Charts.setPlayData.response&devId='+streampadPlayer.OpenAuth.devId+'&appname='+app+'&device=streampad'+requestString);
				}
			} else {
        // removed by taber, aug 31, 2012 - chartsurl redirects to a dynapub.xyz type of url which no longer exists
				/*if (streampadPlayer.OpenAuth.token != null){
					if (streampadPlayer.flash.getSWF("streampadFlash").getdsb(streampadPlayer.vars.sn)){
						streampadPlayer.Utils.scriptRequest(streampadPlayer.params.chartsurl+'SetPlayData?f=json&c=streampadPlayer.Charts.setPlayData.response&devId='+streampadPlayer.OpenAuth.devId+'&a='+streampadPlayer.OpenAuth.token+'&appname='+app+'&device=streampad'+requestString)
					}
				} else {
					streampadPlayer.Utils.scriptRequest(streampadPlayer.params.chartsurl+'SetPlayData?f=json&c=streampadPlayer.Charts.setPlayData.response&devId='+streampadPlayer.OpenAuth.devId+'&appname='+app+'&device=streampad'+requestString);
				}*/
			}
		},
		response : function(json){
		}
	}
}
streampadPlayer.lastfm = {
	username : null,
	userurl : null,
	imageurl : null,
	playcount : null,
	auth : {
		token : null,
		getToken : {
			request : function(){
				streampadPlayer.UI.profileDrawerLeftLoader.show();
				streampadPlayer.Utils.scriptRequest('https://ws.audioscrobbler.com/2.0/?method=auth.gettoken&api_key=6c946ca5274b2f396e5031c12c39400c&format=json&callback=streampadPlayer.lastfm.auth.getToken.response');
			},
			response : function(json){
				try {
					streampadPlayer.lastfm.auth.token = json.token;
					streampadPlayer.UI.fillLastFMLoginProfileDrawerLeft(streampadPlayer.lastfm.auth.token);
					streampadPlayer.UI.fillLastFMRightPromo();
				} catch (e) {};
				streampadPlayer.UI.profileDrawerLeftLoader.hide();
			}
		},
		getSession : {
			request : function(){
				streampadPlayer.UI.profileDrawerLeftLoader.show();
				streampadPlayer.flash.getSWF("streampadFlash").lastfmAuthGetSession(streampadPlayer.lastfm.auth.token, 'streampadPlayer.lastfm.user.getInfo.response');
			}
		},
		authorizePopup : {
			open : function(token, key){
				streampadPlayer.vars.lastfmpopup = window.open('http://www.last.fm/api/auth/?api_key=6c946ca5274b2f396e5031c12c39400c&token='+token, 'streampadlastfm','resizable=yes,scrollbars=yes,toolbar=no,width=980,height=500');
			streampadPlayer.vars.lastfmpopupcheck = setInterval(streampadPlayer.lastfm.auth.authorizePopup.check, 1000);
			},
			check : function(){
				if (streampadPlayer.vars.lastfmpopup.closed == true){
					clearInterval(streampadPlayer.vars.lastfmpopupcheck);
					streampadPlayer.lastfm.auth.getSession.request();
				} 
			}
		}
	},
	user : {
		getInfo : {
			request : function(){
				if (streampadPlayer.lastfm.username == null){
					streampadPlayer.flash.getSWF("streampadFlash").lastfmUserGetInfo('streampadPlayer.lastfm.user.getInfo.response');
				} else {
					streampadPlayer.UI.fillLastFMProfileDrawerLeft(streampadPlayer.lastfm.username, streampadPlayer.lastfm.userurl, streampadPlayer.lastfm.imageurl, streampadPlayer.lastfm.playcount);
					streampadPlayer.lastfm.user.getRecentTracks.request();
				}
			},
			response : function(username, userurl, imageurl, playcount){
				try {
					document.getElementById('streampadPlayerLoginLoader').style.display = 'none';
				} catch (e){};
				try {
					var right = document.getElementById('streampadDrawerRight');
					var promo = document.getElementById('streampadPlayerLastFMPromo');
					right.removeChild(promo);
				} catch(e){};
				streampadPlayer.UI.profileDrawerLeftLoader.hide();
				streampadPlayer.lastfm.username = username;
				streampadPlayer.lastfm.userurl = userurl;
                                if (streampadPlayer.lastfm.username != null) {
					streampadPlayer.lastfm.imageurl = imageurl.indexOf(".jpg") != -1 ? imageurl.split('"medium">')[1].split('</image>')[0] : 'https://secure.static.tumblr.com/ujjnqse/eSwnbifrf/default_user_60_g1_1_.png';
                                } else {
                                        streampadPlayer.lastfm.imageurl = imageurl;
                                }
				streampadPlayer.lastfm.playcount = playcount;
				if (streampadPlayer.lastfm.username != null){
					streampadPlayer.UI.fillLastFMProfileDrawerLeft(streampadPlayer.lastfm.username, streampadPlayer.lastfm.userurl, streampadPlayer.lastfm.imageurl, streampadPlayer.lastfm.playcount);
					streampadPlayer.lastfm.user.getRecentTracks.request();
				} else {
					streampadPlayer.lastfm.auth.getToken.request();
				}
			}
		},
		getRecentTracks : {
			request : function(){
				streampadPlayer.UI.showRightDrawerLoading();
				streampadPlayer.Utils.scriptRequest('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&api_key=6c946ca5274b2f396e5031c12c39400c&format=json&callback=streampadPlayer.lastfm.user.getRecentTracks.response&user='+streampadPlayer.lastfm.username);
			},
			response : function(json){
				streampadPlayer.UI.hideRightDrawerLoading();
				if (!json.error){
					streampadPlayer.UI.fillLastFMProfileDrawerRight(json.recenttracks.track);
				} else {
				}
			}
		},
		logout : function(){
			streampadPlayer.flash.getSWF("streampadFlash").lastfmLogout();
			streampadPlayer.lastfm.username = null;
			streampadPlayer.lastfm.userurl = null;
			streampadPlayer.lastfm.imageurl = null;
			streampadPlayer.lastfm.playcount = null;
			streampadPlayer.UI.fillLastFMDrawer();
		}
	}
}
streampadPlayer.Bitly = {
	url : 'http://api.bit.ly/',
	version : '2.0.1',
	login : 'streampad',
	apiKey : 'R_c9d8ee14fd2afba2ebb387d9977d3259',
	shorten : {
		request : function(longUrl){
			longUrl = encodeURIComponent(longUrl);
			streampadPlayer.Utils.scriptRequest(streampadPlayer.Bitly.url+'shorten?history=1&callback=streampadPlayer.Bitly.shorten.response&version='+streampadPlayer.Bitly.version+'&longUrl='+longUrl+'&login='+streampadPlayer.Bitly.login+'&apiKey='+streampadPlayer.Bitly.apiKey);
		},
		response : function(json){
			var shortUrl = "";
			if (json.errorCode == 0){
				for (var i in json.results){
					shortUrl = json.results[i].shortUrl;
				}
			}
			streampadPlayer.Event.fire(window, 'bitlyShorten', shortUrl);
		}
	}
}
streampadPlayer.Twitter = {
	shorten : {
		request : function(){
			streampadPlayer.Event.add(window, 'bitlyShorten', streampadPlayer.Twitter.shorten.response);
			var enclosure = streampadPlayer.vars.currentSongVO.enclosure;
			var encryptedUrl = encodeURIComponent(streampadPlayer.flash.getSWF("streampadFlash").getEncryptedSong(enclosure));
			var songArtist = streampadPlayer.Utils.getSongArtist();
			var url = 'http://www.streampad.com/play/'+songArtist+'/'+encryptedUrl;
			streampadPlayer.Bitly.shorten.request(url);
		},
		response : function(url){
			streampadPlayer.Event.remove(window, 'bitlyShorten', streampadPlayer.Twitter.shorten.response);
			var textArea = document.createElement('textarea');
			var songArtist = streampadPlayer.Utils.getSongArtist();
			var textNode = "â™« Listening to "+songArtist+" on @streampad "+url;
			textArea.appendChild(document.createTextNode(textNode));
			streampadPlayer.Utils.setStyles(textArea, {'width' : '500px', 'height' : '60px', 'margin' : '20px', 'border' : '2px solid #C0DEED', 'padding' : '10px'});
			var right = document.getElementById('streampadDrawerRight');
			right.appendChild(textArea);
			var a = document.createElement('a');
			a.appendChild(document.createTextNode('Tweet!'))
			a.setAttribute('href', 'http://twitter.com/home?status='+encodeURIComponent(textNode));
			a.setAttribute('target', '_blank');
			right.appendChild(a);
		}
	}
}
streampadPlayer.Debug = function(obj){
	if (streampadPlayer.params.debug == 'true'){
		try {
			console.log(obj);
		} catch(e){ }
	}
}
streampadPlayer.Event.add(window, 'setCurrent', SPAPI.Events.onSongChange);
streampadPlayer.Event.add(window, 'play', SPAPI.Events.onStateChange);
streampadPlayer.Event.add(window, 'pause', SPAPI.Events.onStateChange);
streampadPlayer.Event.add(window, 'playlistChange', SPAPI.Events.onQueueChange);
streampadPlayer.Event.add(window, 'init', SPAPI.Events.onInit);
streampadPlayer.Event.add(window, 'flashLoaded', SPAPI.Events.onStart);
streampadPlayer.Event.add(window, 'handleMore', SPAPI.Events.onQueueEnd);

var JSON=JSON||{};(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());


/* 

JDU Themes
Tumblr Streampad Player v2 sp-player-tumblr.js revised for Tumblr
http://jduthemes.tumblr.com

Original
name: sp-player-tumblr
http://o.aolcdn.com/os_merge/?file=/streampad/sp-player-tumblr.js
$Rev: 33729 $
$Date: 2008-12-08 17:29:22 -0500 (Mon, 08 Dec 2008) $
author: Dan Kantor

*/
        streampadPlayerBlogV2 = {
            start: 0,
            num: SPenableshuffle === "true" || SPshowplaylistbutton === "true" ? 50 : 20,
            total: 0,
            isHandleMore: false,
            fireHandleMore: false,
            oldArray: 0,
            randomQueueNumber: 0,
            isMuted: false,
            volume: 0,
            shuffle: SPenableshuffle === "true" ? true : false,
            shuffleButton: "",
            shuffleHoverButton: "",
            repeat: false,
            repeatButton: "",
            repeatHoverButton: "",
            init: function() {
                streampadPlayer.Event.remove(window, "init", streampadPlayerBlogV2.init);
                streampadPlayer.Event.add(window, "getTotal", streampadPlayerBlogV2.getTotal);
                streampadPlayer.vars.playlistType = "tumblr";
                if (streampadPlayer.params.api === null) {
                    streampadPlayerBlogV2.playlistParam = location.hostname;
                } else {
                    streampadPlayerBlogV2.playlistParam = streampadPlayer.params.api;
                }
                if (streampadPlayerBlogV2.shuffle === true) {
                    streampadPlayer.Events.nextTrack = streampadPlayerBlogV2.shuffleNextTrack;
                    streampadPlayer.Events.previousTrack = streampadPlayerBlogV2.shufflePreviousTrack;
                } else {
                    streampadPlayer.Events.nextTrack = streampadPlayerBlogV2.oldNextTrack;
                    streampadPlayer.Events.previousTrack = streampadPlayerBlogV2.oldPreviousTrack;
                }
            },
            getAudio: function() {
                streampadPlayer.UI.setCaption("Loading Audio Posts... " + streampadPlayerBlogV2.start + " of " + streampadPlayer.vars.total);
                streampadPlayer.Utils.scriptRequest("https://api.tumblr.com/v2/blog/" + streampadPlayerBlogV2.playlistParam + "/posts/audio?api_key=K4hYOnMPH0eB7OYpUY66dOC3t4Z90nSqq7xW3Qnauzb7JX2mI4&callback=streampadPlayerBlogV2.getAudioResponse&offset=" + streampadPlayerBlogV2.start + "&limit=" + streampadPlayerBlogV2.num);
            },
            getAudioResponse: function(c) {
                streampadPlayer.Event.fire(window, 'getTotal', c.response.total_posts);
                if (c.response.posts.length > 0) {
                    var scArr = [];
                    for (var i = 0; i < c.response.posts.length; i++) {
                        var m = c.response.posts[i];
                        var k = m.player;
                    	var a = new streampadPlayer.SongVO();
                        a.id3artist = m.artist;
                        a.id3title = m.track_name;
                        if (SPenableid3audiocaptions === "true") {
                            if (a.id3artist === undefined && a.id3title === undefined) {
                                a.text = m.caption.replace(/(<([^>]+)>)/ig, "");
                            } else {
                                if (a.id3artist === undefined && a.id3title !== undefined) {
                                    a.text = /*"Unknown Artist - " + */a.id3title;
                                } else {
                                    if (a.id3artist !== undefined && a.id3title === undefined) {
                                        a.text = a.id3artist/* + " - Unknown Track Title"*/;
                                    } else {
                                        a.text = a.id3artist + " - " + a.id3title;
                                    }
                                }
                            }
                        } else {
                            a.text = m.caption.replace(/(<([^>]+)>)/ig, "");
                        }
                        a.description = m.caption;
                        a.sourceUrl = m.post_url;
                        a.plays = m.plays;
                        a.artist = a.id3artist;
                        a.songTitle = a.id3title;
                        if (!a.id3artist && a.id3title) {
                          if (a.id3title.indexOf('-') != -1) {
                            a.artist = a.id3title.split('-')[0].trim();
                            a.songTitle = a.id3title.split('-')[1].trim();
                          }
                        }
                        a.album = m.album;
                        a.imageUrl = m.album_art;
                        if (!SPshowunplayabletracks && (!k.match(/assets.tumblr.com|api.soundcloud.com|bandcamp.com.*track=/) || !m.tags && SPplaysongstagged || SPplaysongstagged && $sp.inArray(SPplaysongstagged, m.tags) < 0 || SPdontplaysongstagged && $sp.inArray(SPdontplaysongstagged, m.tags) > -1)) {
                          var t = c.response.posts.splice(i, 1);
                          streampadPlayer.vars.total = streampadPlayer.vars.total - t.length;
                          i--;
                          continue;
                        }
                        var d = "404";
                        if (!m.audio_type.match(/tumblr|soundcloud|bandcamp/) || !m.tags && SPplaysongstagged || SPplaysongstagged && $sp.inArray(SPplaysongstagged, m.tags) < 0 || SPdontplaysongstagged && $sp.inArray(SPdontplaysongstagged, m.tags) > -1 || !m.audio_url) {
                            d = "404";
                        } else if (m.audio_type.match(/tumblr/)) {
                            d = m.audio_url + "?plead=please-dont-download-this-or-our-lawyers-wont-let-us-host-audio";
                        } else if (m.audio_type.match(/bandcamp/)) {
                            d = m.audio_url;
                        } else if (m.audio_type.match(/soundcloud/)) {
                            var e = decodeURIComponent(k).split("url=");
                            var b = e[1].match(/.*?[0-9]+/g);
                            a.scID = b[0].match(/[0-9].*/)[0];
                            if (b[0].match("/tracks")) a.scID += "t";
 			    if ($sp.inArray(b[0].split("tracks/")[1], scArr) != -1) {
                              scArr.push(b[0].split("tracks/")[1]);
                            } else {
  			      $sp.ajax({
 			        url: b[0],
 			        type: 'GET',
                                cache: true,
 			        data: {
 			          client_id: '3cQaPshpEeLqMsNFAUw1Q',
  			          linked_partitioning: '1'
 			        },
 			        dataType: 'json',
 			        complete: function(data, status) {
 			          streampadPlayerBlogV2.getSoundCloudResponse(data, status, 1);
 			        }
 			      });
                              streampadPlayer.Play.timer += 1000;
                            }
                        }
                        a.enclosure = decodeURIComponent(d);
                        streampadPlayer.Playlist.push(a);
                    }
                    if (scArr.length > 0) {
                    $sp.ajax({
                        url: "https://api.soundcloud.com/tracks?ids=" + scArr.toString(),
                        type: 'GET',
                        cache: true,
                        data: {
                            client_id: '3cQaPshpEeLqMsNFAUw1Q',
                            linked_partitioning: '1'
                        },
                        dataType: 'json',
                        context: {
                            num: scArr.length
                        },
                        complete: function(data, status) {
                            streampadPlayerBlogV2.getSoundCloudResponse(data, status, this.num);
                        }
                    });
                    streampadPlayer.Play.timer += scArr.length * 1000;
                    }
                    streampadPlayer.Playlist.title = c.response.blog.name;
                    streampadPlayerBlogV2.start = streampadPlayerBlogV2.start + streampadPlayerBlogV2.num;
                    if (streampadPlayerBlogV2.shuffle === true) {
                        if (streampadPlayerBlogV2.start < streampadPlayerBlogV2.total) {
                            streampadPlayerBlogV2.getAudio();
                        } else {
                            streampadPlayer.vars.queueNumber = -1;
                            streampadPlayer.Events.nextTrack();
                        }
                    } else if (streampadPlayer.params.showplaylistbutton === 'true') {
                        if (streampadPlayerBlogV2.start < streampadPlayerBlogV2.total) {
                            streampadPlayerBlogV2.getAudio();
                        } else {
                            streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
                        }
                    } else if (streampadPlayer.vars.isPlaying === undefined && streampadPlayer.Event.listeners['click' + document.getElementById('streampadPlayTrack')]) {
                        streampadPlayer.Event.add(document.getElementById('streampadPlayTrack'), 'click', streampadPlayer.Events.playTrack);
                        streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
                    } else if (streampadPlayer.vars.isPlaying === false && streampadPlayer.vars.queueNumber === 0) {
                        streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
                    }
                } else if (streampadPlayerBlogV2.total > 0 && streampadPlayerBlogV2.start < streampadPlayerBlogV2.total - 1 && streampadPlayer.vars.queueNumber !== undefined) {
                    streampadPlayerBlogV2.start = streampadPlayerBlogV2.start + streampadPlayerBlogV2.num;
                    streampadPlayerBlogV2.getAudio();
                } else if (streampadPlayer.vars.total === 0) {
                    streampadPlayer.UI.noAudioPosts();
                } else if (streampadPlayer.vars.queueNumber === undefined) {
                    if (streampadPlayerBlogV2.oldArray === streampadPlayer.vars.total && streampadPlayerBlogV2.isHandleMore === true) {
                        streampadPlayerBlogV2.fireHandleMore = true;
                    }
                    streampadPlayerBlogV2.start = streampadPlayerBlogV2.start + streampadPlayerBlogV2.num;
                } else if (streampadPlayerBlogV2.shuffle === true) {
                    streampadPlayer.vars.queueNumber = -1;
                    streampadPlayer.Events.nextTrack();
                } else {
                    streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
                }
                streampadPlayer.Event.fire(window, 'gotPlaylist', c);
                streampadPlayer.Event.fire(window, 'skipCallback', streampadPlayer.Playlist.array.length);
            },
            getSoundCloudResponse: function(data, status, num) {
                if (status == "success" || status == "notmodified") {
                    var sx = $sp.parseJSON(data.responseText);
                    if (!sx.collection) sx.collection = $sp.makeArray(sx);
                    for (var st = 0; st < sx.collection.length; st++) {
                        var sc = sx.collection[st];
                        var k;
                        for (var j = 0, arr = streampadPlayer.Playlist.array; j < arr.length; j++) {
                            if ('scID' in arr[j] && arr[j].scID.match("^" + sc.id.toString() + (sc.kind == "track" ? "t" : "") + "$")) {
                                arr[j].scID = "done";
                                k = j;
                                break;
                            }
                        }
                        if (sc.kind == "track") {
                            var sp = streampadPlayer.Playlist.array[k];
                            sp.artist = sp.artist ? sp.artist : sc.user.username;
                            sp.songTitle = sp.songTitle ? sp.songTitle : sc.title;
                            sp.plays = sc.playback_count;
                            sp.purchaseURL = sc.purchase_url;
                            sp.imageUrl = (sc.artwork_url ? sc.artwork_url : (sc.user.avatar_url ? (sc.user.avatar_url == "https://a1.sndcdn.com/images/default_avatar_large.png" ? sp.imageUrl : sc.user.avatar_url) : sp.imageUrl));
                            if (sp.imageUrl != null) sp.imageUrl = sp.imageUrl.replace("large", "t200x200");
                            if (sc.stream_url) sp.enclosure = sc.stream_url + "?client_id=3cQaPshpEeLqMsNFAUw1Q";
                            if (!sc.streamable) sp.enclosure = "404";
                            if (SPenableid3audiocaptions) sp.text = sp.artist + " - " + sp.songTitle;
                        } else if (sc.kind == "playlist") {
                            for (var j = 0; j < sc.tracks.length; j++) {
                                var scj = sc.tracks[j];
                                var songVO = new streampadPlayer.SongVO();
                                songVO.artist = scj.user.username;
                                songVO.songTitle = scj.title;
                                songVO.plays = scj.playback_count;
                                songVO.purchaseURL = scj.purchase_url;
                                songVO.imageUrl = (scj.artwork_url ? scj.artwork_url : (scj.user.avatar_url ? (scj.user.avatar_url == "https://a1.sndcdn.com/images/default_avatar_large.png" ? songVO.imageUrl : scj.user.avatar_url) : songVO.imageUrl));
                                if (songVO.imageUrl != null) songVO.imageUrl = songVO.imageUrl.replace("large", "t200x200");
                                if (scj.stream_url) songVO.enclosure = scj.stream_url + "?client_id=3cQaPshpEeLqMsNFAUw1Q";
                                if (scj.title.indexOf('-') != -1) {
                                    songVO.artist = scj.title.split('-')[0].trim();
                                    songVO.songTitle = scj.title.split('-')[1].trim();
                                }
                                songVO.text = songVO.artist + " - " + songVO.songTitle;
                                songVO.sourceUrl = streampadPlayer.Playlist.array[k].sourceUrl;
                                songVO.playlistTitle = sc.title;
                                songVO.description = 'Track ' + (j + 1) + ' of ' + sc.track_count + ' in "' + sc.title + '" by ' + sc.user.username;
                                songVO.scplaylist = { "title" : sc.title, "creator" : sc.user.username, "duration" : sc.duration, "length" : sc.tracks.length, "num" : j };
                                if (!scj.streamable) {
                                    songVO.enclosure = "404";
                                    songVO.description = '[DISABLED] ' + songVO.description;
                                }
                                streampadPlayer.Playlist.array.splice(k + j, 0, songVO);
                                streampadPlayer.vars.total += 1;
                            }
                            if (sc.track_count > 0) {
                                streampadPlayer.Playlist.array.splice(k + j, 1);
                                streampadPlayer.vars.total -= 1;
                            } else {
                                var sp = streampadPlayer.Playlist.array[k];
                                sp.enclosure = "404";
                                sp.description = '[DISABLED - EMPTY PLAYLIST]';
                                sp.artist = sc.user.username;
                                sp.songTitle = sc.title;
                                sp.imageUrl = (sc.artwork_url ? sc.artwork_url : (sc.user.avatar_url ? (sc.user.avatar_url == "https://a1.sndcdn.com/images/default_avatar_large.png" ? sp.imageUrl : sc.user.avatar_url) : sp.imageUrl));
                                if (sp.imageUrl != null) sp.imageUrl = sp.imageUrl.replace("large", "t200x200");
                            }
                        }
                    }
                    if (streampadPlayer.params.showdrawer) {
                        streampadPlayer.UI.fillPlaylistItems();
                        streampadPlayer.UI.fillPlaylistDrawer();
                    }
                }
                streampadPlayer.Play.timer -= num * 1000;
                if (streampadPlayer.Play.timer == 0 && !((streampadPlayerBlogV2.shuffle || streampadPlayer.params.showplaylistbutton) && streampadPlayerBlogV2.start < streampadPlayerBlogV2.total)) {
                    clearTimeout(streampadPlayer.Play.wait);
                    streampadPlayer.Play.wait = null;
                    streampadPlayer.Play.queueNumber(streampadPlayer.Play.n);
                }
            },
            oldPreviousTrack: function () {
                if (streampadPlayer.vars.queueNumber > 0) {
                    streampadPlayer.vars.queueNumber--;
                    streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
                } else {
                    streampadPlayer.Event.fire(window, 'handleLess', null);
                }
            },
            oldNextTrack: function () {
                if (streampadPlayer.vars.queueNumber < streampadPlayer.Playlist.array.length - 1) {
                    streampadPlayer.vars.queueNumber++;
                    streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
                } else {
                    streampadPlayer.Event.fire(window, 'handleMore', null);
                }
            },
            handleMore: function() {
                if (streampadPlayer.vars.queueNumber < streampadPlayer.vars.total - 1 && streampadPlayer.vars.queueNumber <= streampadPlayer.Playlist.array.length - 1) {
                    streampadPlayerBlogV2.isHandleMore = true;
                    SPAPI.skip(streampadPlayer.vars.queueNumber + 1);
                } else if (streampadPlayer.vars.queueNumber === streampadPlayer.vars.total - 1) {
                    streampadPlayer.vars.queueNumber = 0;
                    streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
                }
            },
            handleLess: function() {
                SPAPI.skip(streampadPlayer.vars.total - 1);
            },
            getTotal: function(total) {
                streampadPlayer.Event.remove(window, "getTotal", streampadPlayerBlogV2.getTotal);
                streampadPlayerBlogV2.total = total;
                streampadPlayer.vars.total = total;
            },
            volumeMuteBuild: function() {
                var volumeMute = document.createElement('div');
                volumeMute.setAttribute('id', 'streampadVolumeMute');
                volumeMute.setAttribute('title', 'Click to mute');
                streampadPlayer.Utils.setStyles(volumeMute, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '0px', 'height' : '30px', 'cursor' : 'pointer', 'position' : 'relative'});
                document.getElementById('streampadVolumeButton').parentNode.insertBefore(volumeMute, document.getElementById('streampadVolumeButton'));
                streampadPlayer.Event.add(volumeMute, 'mouseover', streampadPlayer.Events.volumeButtonMouseOver);
                streampadPlayer.Event.add(volumeMute, 'mouseout', streampadPlayer.Events.volumeButtonMouseOut);
                streampadPlayer.Event.add(volumeMute, 'click', streampadPlayerBlogV2.volumeMuteToggle);
                streampadPlayer.Event.add(document.getElementById('streampadVolumeButton'), 'click', streampadPlayerBlogV2.volumeMuteToggle);
                document.getElementById('streampadVolumeButton').setAttribute('title', 'Click to mute');
                streampadPlayerBlogV2.isMuted = (streampadPlayer.vars.theVolume === 0) ? true : false;
                if (streampadPlayerBlogV2.isMuted === true) {
                    streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeButton'), {'width' : '16px'});
                    streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeMute'), {'width' : '12px'});
                } else if (streampadPlayerBlogV2.isMuted === false) {
                    streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeButton'), {'width' : '28px'});
                    streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeMute'), {'width' : '0px'});
                }
                streampadPlayer.Events.volumeDragDown = function (e) {
                    streampadPlayer.Event.add(document, 'mousemove', streampadPlayer.Events.volumeDragMove);
                    streampadPlayer.Event.add(document, 'mouseup', streampadPlayer.Events.volumeDragUp);
                    streampadPlayer.Event.add(document, 'mousemove', streampadPlayerBlogV2.volumeDragDownMouseMoveEventIntercept);
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                }
                streampadPlayer.Events.volumeDragUp = function (e) {
                    streampadPlayer.Event.remove(document, 'mousemove', streampadPlayer.Events.volumeDragMove);
                    streampadPlayer.Event.remove(document, 'mouseup', streampadPlayer.Events.volumeDragUp);
                    streampadPlayer.Event.remove(document, 'mousemove', streampadPlayerBlogV2.volumeDragDownMouseMoveEventIntercept);
                }
            },
            volumeDragDownMouseMoveEventIntercept: function() {
                streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeButton'), {'width' : '28px'});
                streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeMute'), {'width' : '0px'});
                streampadPlayerBlogV2.isMuted = false;
                if (streampadPlayer.vars.theVolume === 0) {
                   streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeButton'), {'width' : '16px'});
                   streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeMute'), {'width' : '12px'});
                   streampadPlayerBlogV2.volume = streampadPlayer.vars.theVolume;
                   streampadPlayerBlogV2.isMuted = true;
                }
            },
            volumeMuteToggle: function() {
                (streampadPlayerBlogV2.isMuted === false) ? streampadPlayerBlogV2.volumeMute() : streampadPlayerBlogV2.volumeUnMute();
            },
            volumeMute: function() {
                streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeButton'), {'width' : '16px'});
                streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeMute'), {'width' : '12px'});
                streampadPlayerBlogV2.volume = streampadPlayer.vars.theVolume;
                streampadPlayer.vars.theVolume = 0;
                streampadPlayer.flash.getSWF("streampadFlash").setVolume(0);
                streampadPlayerBlogV2.isMuted = true;
            },
            volumeUnMute: function() {
                streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeButton'), {'width' : '28px'});
                streampadPlayer.Utils.setStyles(document.getElementById('streampadVolumeMute'), {'width' : '0px'});
                streampadPlayer.vars.theVolume = streampadPlayerBlogV2.volume;
                streampadPlayer.flash.getSWF("streampadFlash").setVolume(streampadPlayer.vars.theVolume/100);
                streampadPlayerBlogV2.isMuted = false;
            },
            setVolume: function() {
                streampadPlayer.vars.theVolume = 91;
                streampadPlayer.flash.getSWF("streampadFlash").setVolume(streampadPlayer.vars.theVolume/100);
            },
            shuffleToggleBuild: function () {
                var shuffleToggle = document.createElement('div');
                shuffleToggle.setAttribute('id', 'streampadShuffleToggle');
                shuffleToggle.setAttribute('title', 'Toggle Shuffle');
                streampadPlayer.Utils.setStyles(shuffleToggle, {
                    'cssFloat': 'right',
                    'styleFloat': 'right',
                    'width': '32px',
                    'height': '30px',
                    'cursor': 'pointer',
                    'position': 'relative',
                    'backgroundImage': 'url("' + streampadPlayerBlogV2.shuffleHoverButton + '")',
                    'backgroundPosition': '6px 7px',
                    'backgroundRepeat': 'no-repeat'
                });
                if (!streampadPlayerBlogV2.shuffle) streampadPlayer.Utils.setStyles(shuffleToggle, {'backgroundImage': 'url("' + streampadPlayerBlogV2.shuffleButton + '")'});
                document.getElementById('streampadAudioPlays').parentNode.insertBefore(shuffleToggle, document.getElementById('streampadAudioPlays'));
                streampadPlayer.Event.add(shuffleToggle, 'mouseover', streampadPlayerBlogV2.shuffleToggleMouseOver);
                streampadPlayer.Event.add(shuffleToggle, 'mouseout', streampadPlayerBlogV2.shuffleToggleMouseOut);
                streampadPlayer.Event.add(shuffleToggle, 'click', streampadPlayerBlogV2.shuffleToggle);
		streampadPlayer.Theme.borderNum++;
                var border = document.createElement('div');
                border.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
                border.className = 'streampadPlayerbutton';
                streampadPlayer.Utils.setStyles(border, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
                document.getElementById('streampadAudioPlays').parentNode.insertBefore(border, document.getElementById('streampadAudioPlays'));
            },
            shuffleToggleMouseOver: function () {
                var shuffleToggle = document.getElementById('streampadShuffleToggle');
                if (!streampadPlayerBlogV2.shuffle) {
                    shuffleToggle.style.backgroundImage = 'url("' + streampadPlayerBlogV2.shuffleHoverButton + '")';
                }
            },
            shuffleToggleMouseOut: function () {
                var shuffleToggle = document.getElementById('streampadShuffleToggle');
                if (streampadPlayerBlogV2.shuffle) {
                    shuffleToggle.style.backgroundImage = 'url("' + streampadPlayerBlogV2.shuffleHoverButton + '")';
                } else {
                    shuffleToggle.style.backgroundImage = 'url("' + streampadPlayerBlogV2.shuffleButton + '")';
                }
            },
            shuffleToggle: function () {
                if (streampadPlayerBlogV2.shuffle === true) {
                    streampadPlayerBlogV2.shuffle = false;
                    document.getElementById('streampadShuffleToggle').style.backgroundImage = 'url("' + streampadPlayerBlogV2.shuffleButton + '")';
                    streampadPlayer.Event.remove(document.getElementById('streampadPlayTrack').previousSibling, 'click', streampadPlayerBlogV2.shufflePreviousTrack);
                    streampadPlayer.Event.remove(document.getElementById('streampadPlayTrack').nextSibling, 'click', streampadPlayerBlogV2.shuffleNextTrack);
                    if (streampadPlayerBlogV2.repeat === false) {
                        streampadPlayer.Events.previousTrack = streampadPlayerBlogV2.oldPreviousTrack;
                        streampadPlayer.Events.nextTrack = streampadPlayerBlogV2.oldNextTrack;
                    }
                    streampadPlayer.Event.add(document.getElementById('streampadPlayTrack').previousSibling, 'click', streampadPlayerBlogV2.oldPreviousTrack);
                    streampadPlayer.Event.add(document.getElementById('streampadPlayTrack').nextSibling, 'click', streampadPlayerBlogV2.oldNextTrack);
                } else if (streampadPlayerBlogV2.shuffle === false) {
                    streampadPlayerBlogV2.shuffle = true;
                    document.getElementById('streampadShuffleToggle').style.backgroundImage = 'url("' + streampadPlayerBlogV2.shuffleHoverButton + '")';
                    streampadPlayer.Event.remove(document.getElementById('streampadPlayTrack').previousSibling, 'click', streampadPlayerBlogV2.oldPreviousTrack);
                    streampadPlayer.Event.remove(document.getElementById('streampadPlayTrack').nextSibling, 'click', streampadPlayerBlogV2.oldNextTrack);
                    if (streampadPlayerBlogV2.repeat === false) {
                        streampadPlayer.Events.previousTrack = streampadPlayerBlogV2.shufflePreviousTrack;
                        streampadPlayer.Events.nextTrack = streampadPlayerBlogV2.shuffleNextTrack;
                    }
                    streampadPlayer.Event.add(document.getElementById('streampadPlayTrack').previousSibling, 'click', streampadPlayerBlogV2.shufflePreviousTrack);
                    streampadPlayer.Event.add(document.getElementById('streampadPlayTrack').nextSibling, 'click', streampadPlayerBlogV2.shuffleNextTrack);
                }
            },
            shufflePreviousTrack: function () {
                if (streampadPlayer.vars.total > 0) {
                    do {
                        streampadPlayerBlogV2.randomQueueNumber = Math.floor(Math.random() * streampadPlayer.Playlist.array.length);
                    }
                    while (streampadPlayer.vars.queueNumber === streampadPlayerBlogV2.randomQueueNumber && streampadPlayer.vars.total !== 1);
                    streampadPlayer.vars.queueNumber = streampadPlayerBlogV2.randomQueueNumber;
                }
                streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
            },
            shuffleNextTrack: function () {
                if (streampadPlayer.vars.total > 0) {
                    do {
                        streampadPlayerBlogV2.randomQueueNumber = Math.floor(Math.random() * streampadPlayer.Playlist.array.length);
                    }
                    while (streampadPlayer.vars.queueNumber === streampadPlayerBlogV2.randomQueueNumber && streampadPlayer.vars.total !== 1);
                    streampadPlayer.vars.queueNumber = streampadPlayerBlogV2.randomQueueNumber;
                }
                streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
            },
            repeatToggleBuild: function () {
                var repeatToggle = document.createElement('div');
                repeatToggle.setAttribute('id', 'streampadRepeatToggle');
                repeatToggle.setAttribute('title', 'Toggle Repeat');
                streampadPlayer.Utils.setStyles(repeatToggle, {
                    'cssFloat': 'right',
                    'styleFloat': 'right',
                    'width': '28px',
                    'height': '30px',
                    'cursor': 'pointer',
                    'position': 'relative',
                    'backgroundImage': 'url("' + streampadPlayerBlogV2.repeatButton + '")',
                    'backgroundPosition': '0px 1px',
                    'backgroundRepeat': 'no-repeat'
                });
                document.getElementById('streampadAudioPlays').parentNode.insertBefore(repeatToggle, document.getElementById('streampadAudioPlays'));
                streampadPlayer.Event.add(repeatToggle, 'mouseover', streampadPlayerBlogV2.repeatToggleMouseOver);
                streampadPlayer.Event.add(repeatToggle, 'mouseout', streampadPlayerBlogV2.repeatToggleMouseOut);
                streampadPlayer.Event.add(repeatToggle, 'click', streampadPlayerBlogV2.repeatToggle);
		streampadPlayer.Theme.borderNum++;
                var border = document.createElement('div');
                border.setAttribute('id', 'streampadPlayerBorderNum'+streampadPlayer.Theme.borderNum);
                border.className = 'streampadPlayerbutton';
                streampadPlayer.Utils.setStyles(border, {'cssFloat' : 'right', 'styleFloat' : 'right', 'width' : '1px', 'height' : '30px', 'background' : 'url("'+streampadPlayer.params.btnurl[streampadPlayer.params.btncolor]+'") '+streampadPlayer.Theme.borderOff+' no-repeat'});
                document.getElementById('streampadAudioPlays').parentNode.insertBefore(border, document.getElementById('streampadAudioPlays'));
            },
            repeatToggleMouseOver: function () {
                var repeatToggle = document.getElementById('streampadRepeatToggle');
                if (!streampadPlayerBlogV2.repeat) {
                    repeatToggle.style.backgroundImage = 'url("' + streampadPlayerBlogV2.repeatHoverButton + '")';
                }
            },
            repeatToggleMouseOut: function () {
                var repeatToggle = document.getElementById('streampadRepeatToggle');
                if (streampadPlayerBlogV2.repeat) {
                    repeatToggle.style.backgroundImage = 'url("' + streampadPlayerBlogV2.repeatHoverButton + '")';
                } else {
                    repeatToggle.style.backgroundImage = 'url("' + streampadPlayerBlogV2.repeatButton + '")';
                }
            },
            repeatToggle: function () {
                if (streampadPlayerBlogV2.repeat === true) {
                    streampadPlayerBlogV2.repeat = false;
                    document.getElementById('streampadRepeatToggle').style.backgroundImage = 'url("' + streampadPlayerBlogV2.repeatButton + '")';
                    if (streampadPlayerBlogV2.shuffle === true) {
                        streampadPlayer.Events.previousTrack = streampadPlayerBlogV2.shufflePreviousTrack;
                        streampadPlayer.Events.nextTrack = streampadPlayerBlogV2.shuffleNextTrack;
                    } else {
                        streampadPlayer.Events.previousTrack = streampadPlayerBlogV2.oldPreviousTrack;
                        streampadPlayer.Events.nextTrack = streampadPlayerBlogV2.oldNextTrack;
                    }
                } else if (streampadPlayerBlogV2.repeat === false) {
                    streampadPlayerBlogV2.repeat = true;
                    document.getElementById('streampadRepeatToggle').style.backgroundImage = 'url("' + streampadPlayerBlogV2.repeatHoverButton + '")';
                    streampadPlayer.Events.previousTrack = streampadPlayerBlogV2.repeatTrack;
                    streampadPlayer.Events.nextTrack = streampadPlayerBlogV2.repeatTrack;
                }
            },
            repeatTrack: function () {
                streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
            }
        };
        streampadPlayer.Event.add(window, "init", streampadPlayerBlogV2.init);
        streampadPlayer.Event.add(window, "flashLoaded", streampadPlayerBlogV2.getAudio);
        streampadPlayer.Event.add(window, "handleMore", streampadPlayerBlogV2.handleMore);
        streampadPlayer.Event.add(window, "handleLess", streampadPlayerBlogV2.handleLess);
        if (SPshowvolumebutton === "true") {
            streampadPlayer.Event.add(window, "flashLoaded", streampadPlayerBlogV2.volumeMuteBuild);
        } else {
            streampadPlayer.Event.add(window, "flashLoaded", streampadPlayerBlogV2.setVolume);
        }
        if (SPshowshufflebutton === "true") {
            streampadPlayer.Event.add(window, "flashLoaded", streampadPlayerBlogV2.shuffleToggleBuild);
        }
        if (SPshowrepeatbutton === "true") {
            streampadPlayer.Event.add(window, "flashLoaded", streampadPlayerBlogV2.repeatToggleBuild);
        }


        SPAPI.skip = function(n) {
            if (n <= 0) {
                n = 0;
            }
            if (n > streampadPlayer.vars.total - 1) {
                n = streampadPlayer.vars.total - 1;
            }
            if (n > streampadPlayer.Playlist.array.length - 1 && streampadPlayer.vars.queueNumber >= 0) {
                skipCallback = function(arrayLength) {
                    if (n > streampadPlayer.vars.total - 1) {
                        n = streampadPlayer.vars.total - 1;
                    }
                    if (n > arrayLength - 1) {
                        streampadPlayerBlogV2.getAudio();
                    } else if (n <= arrayLength - 1) {
                        streampadPlayer.Event.remove(window, 'skipCallback', skipCallback);
                        streampadPlayer.Event.add(document.getElementById('streampadPlayTrack'), 'click', streampadPlayer.Events.playTrack);
                        streampadPlayer.vars.queueNumber = n;
                        if (streampadPlayerBlogV2.fireHandleMore === true) {
                            streampadPlayerBlogV2.isHandleMore = false;
                            streampadPlayerBlogV2.fireHandleMore = false;
                            streampadPlayerBlogV2.handleMore();
                        } else {
                            streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
                        }
                    }
                };
                streampadPlayerBlogV2.oldArray = streampadPlayer.Playlist.array.length;
                streampadPlayer.vars.queueNumber = undefined;
                streampadPlayer.Event.remove(document.getElementById('streampadPlayTrack'), 'click', streampadPlayer.Events.playTrack);
                streampadPlayer.Event.add(window, 'skipCallback', skipCallback);
                streampadPlayerBlogV2.getAudio();
            } else if (streampadPlayer.vars.queueNumber >= 0) {
                streampadPlayer.vars.queueNumber = n;
                streampadPlayer.Play.queueNumber(streampadPlayer.vars.queueNumber);
            }
        };

        streampadPlayer.params.bgcolor = SPbgcolor;
        streampadPlayer.params.bgcolor = streampadPlayer.params.bgcolor.replace(/^#+/, "");
        streampadPlayer.params.trackcolor = SPtrackcolor;
        streampadPlayer.params.trackcolor = streampadPlayer.params.trackcolor.replace(/^#+/, "");
        if (streampadPlayer.params.trackcolor === "") {
            streampadPlayer.params.trackcolor = 'FFFFFF';
        }
        streampadPlayer.params.clicktext = SPclicktext;
        streampadPlayer.params.clickimg = SPclickimg;
        streampadPlayer.params.autoplay = SPautoplay;
        streampadPlayer.params.showpop = SPshowpop;
        streampadPlayer.params.progressfrontcolor = SPprogressfrontcolor;
        streampadPlayer.params.progressfrontcolor = streampadPlayer.params.progressfrontcolor.replace(/^#+/, "");
        if (streampadPlayer.params.progressfrontcolor === "") {
            streampadPlayer.params.progressfrontcolor = 'FFFFFF';
        }
        streampadPlayer.params.progressbackcolor = SPprogressbackcolor;
        streampadPlayer.params.progressbackcolor = streampadPlayer.params.progressbackcolor.replace(/^#+/, "");
        if (streampadPlayer.params.progressbackcolor === "") {
            streampadPlayer.params.progressbackcolor = 'CCCCCC';
        }
        streampadPlayer.params.showplaylistbutton = SPshowplaylistbutton;
        streampadPlayer.params.showplaylist = SPshowplaylist;
        if (streampadPlayer.params.showplaylistbutton == 'false') {
            streampadPlayer.params.showplaylist = 'false';
        }
        streampadPlayer.params.drawersize = SPdrawersize
        streampadPlayer.params.drawersize = streampadPlayer.params.drawersize.replace(/(px)+$/, "");
        if (streampadPlayer.params.drawersize === "") {
            streampadPlayer.params.drawersize = '215';
        }
        streampadPlayer.params.showvolumebutton = SPshowvolumebutton;
        streampadPlayer.params.btncolor = SPbtncolor;
        streampadPlayer.params.api = SPapi;
        if (SPcustomizeurl && streampadPlayer.params.api === "") {
            streampadPlayer.params.api = SPcustomizeurl;
        }
        streampadPlayer.params.api = streampadPlayer.params.api.replace(/.*?:\/\//g, "");
        streampadPlayer.params.api = streampadPlayer.params.api.replace(/^www\./i, "");
        streampadPlayer.params.api = streampadPlayer.params.api.replace(/\/$/, "");
        if (streampadPlayer.params.api === location.hostname || streampadPlayer.params.api === "") {
            streampadPlayer.params.api = null;
        }

        switch (streampadPlayer.params.btncolor) {
        case "white-gray":
            streampadPlayerBlogV2.shuffleButton = "https://secure.static.tumblr.com/ujjnqse/9xtmlhfqv/shuffle_white-gray.png";
            streampadPlayerBlogV2.shuffleHoverButton = "https://secure.static.tumblr.com/ujjnqse/Jt2mlhfr4/shuffle_white-gray-hover.png";
            streampadPlayerBlogV2.repeatButton = "https://secure.static.tumblr.com/ujjnqse/s7Lmljh3s/repeat_white-gray.png";
            streampadPlayerBlogV2.repeatHoverButton = "https://secure.static.tumblr.com/ujjnqse/8xOmljh44/repeat_white-gray-hover.png";
            break;
        case "white-black":
            streampadPlayerBlogV2.shuffleButton = "https://secure.static.tumblr.com/ujjnqse/x4jmlhfre/shuffle_white-black.png";
            streampadPlayerBlogV2.shuffleHoverButton = "https://secure.static.tumblr.com/ujjnqse/Ok0mlhfrl/shuffle_white-black-hover.png";
            streampadPlayerBlogV2.repeatButton = "https://secure.static.tumblr.com/ujjnqse/43ymljh4e/repeat_white-black.png";
            streampadPlayerBlogV2.repeatHoverButton = "https://secure.static.tumblr.com/ujjnqse/Pkfmljh4r/repeat_white-black-hover.png";
            break;
        case "black-gray":
            streampadPlayerBlogV2.shuffleButton = "https://secure.static.tumblr.com/ujjnqse/qTimlhfrv/shuffle_black-gray.png";
            streampadPlayerBlogV2.shuffleHoverButton = "https://secure.static.tumblr.com/ujjnqse/A4Jmlhfs5/shuffle_black-gray-hover.png";
            streampadPlayerBlogV2.repeatButton = "https://secure.static.tumblr.com/ujjnqse/aIJmljh58/repeat_black-gray.png";
            streampadPlayerBlogV2.repeatHoverButton = "https://secure.static.tumblr.com/ujjnqse/BVrmljh5q/repeat_black-gray-hover.png";
            break;
        case "black-white":
            streampadPlayerBlogV2.shuffleButton = "https://secure.static.tumblr.com/ujjnqse/v3kmlhfsj/shuffle_black-white.png";
            streampadPlayerBlogV2.shuffleHoverButton = "https://secure.static.tumblr.com/ujjnqse/7zEmlhfsq/shuffle_black-white-hover.png";
            streampadPlayerBlogV2.repeatButton = "https://secure.static.tumblr.com/ujjnqse/LPgmljh63/repeat_black-white.png";
            streampadPlayerBlogV2.repeatHoverButton = "https://secure.static.tumblr.com/ujjnqse/It8mljh6i/repeat_black-white-hover.png";
            break;
        case "blue-white":
            streampadPlayerBlogV2.shuffleButton = "https://secure.static.tumblr.com/ujjnqse/YUOmlhfsz/shuffle_blue-white.png";
            streampadPlayerBlogV2.shuffleHoverButton = "https://secure.static.tumblr.com/ujjnqse/tSsmlhft7/shuffle_blue-white-hover.png";
            streampadPlayerBlogV2.repeatButton = "https://secure.static.tumblr.com/ujjnqse/Zu1mljh6w/repeat_blue-white.png";
            streampadPlayerBlogV2.repeatHoverButton = "https://secure.static.tumblr.com/ujjnqse/T8umljh78/repeat_blue-white-hover.png";
            break;
        default:
            streampadPlayerBlogV2.shuffleButton = "https://secure.static.tumblr.com/ujjnqse/9xtmlhfqv/shuffle_white-gray.png";
            streampadPlayerBlogV2.shuffleHoverButton = "https://secure.static.tumblr.com/ujjnqse/Jt2mlhfr4/shuffle_white-gray-hover.png";
            streampadPlayerBlogV2.repeatButton = "https://secure.static.tumblr.com/ujjnqse/s7Lmljh3s/repeat_white-gray.png";
            streampadPlayerBlogV2.repeatHoverButton = "https://secure.static.tumblr.com/ujjnqse/8xOmljh44/repeat_white-gray-hover.png";
        }


/*

JDU Themes
Tumblr Streampad Player v2 Dynamic insertion of CSS + cleanup
http://jduthemes.tumblr.com

*/

(function () {
    var cssCode = '#streampadAudioCaption { width:auto!important; }';
    cssCode += '#streampadBottomBar,#streampadBottomBar > div{color:'+SPtrackcolor+'!important}';
    cssCode += SPshowrepeatbutton != 'true' ? '#streampadRepeatToggle{display:none}' : '';
    cssCode += SPshowshufflebutton != 'true' ? '#streampadShuffleToggle{display:none}' : '';
    cssCode += SPshowplayscounter != 'true' ? '#streampadAudioPlays{display:none}' : '';
    cssCode += SPshowlastfmbutton != 'true' ? '#streampadProfileButton{display:none}' : '';
    cssCode += SPshowfullscreenbutton != 'true' ? '#streampadPlayerFullScreenButton{display:none}' : '';
    cssCode += SPenabletransparency === 'true' ? '#streampadBottomBar{background:transparent!important}#streampadVolDiv{background-color:transparent!important}#streampadPlayerBorderNum1,#streampadPlayerBorderNum2,#streampadPlayerBorderNum3,#streampadPlayerBorderNum4,#streampadPlayerBorderNum5,#streampadPlayerBorderNum6,#streampadPlayerBorderNum7,#streampadPlayerBorderNum8{display:none}' : '';
    cssCode += '.sp-playlist-show{display:block}.sp-playlist-hide{display:none}streampadBottomBar a,streampadDrawer a {outline:0}';
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = cssCode;
    } else {
        styleElement.appendChild(document.createTextNode(cssCode));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    streampadPlayer.Event.add(window, "flashLoaded", function () {
        var n = document.getElementById('streampadBottomBar').childNodes.length;
        for (var i = (n - 1); i >= 0; i--) {
            var element = document.getElementById('streampadBottomBar').childNodes[i];
            if (element.offsetWidth === 0 && element.id != "streampadVolumeButton" && element.id != "streampadVolumeMute" && element.id != "streampadAudioPlays" && element.tagName != "SCRIPT") element.parentNode.removeChild(element);
            if (element.nextSibling && element.offsetWidth === 1 && element.nextSibling.offsetWidth === 1) element.parentNode.removeChild(element);
        }
        if (SPshowplaylistbutton === 'true') {
            var id = 'streampadPlayerBorderNum' + (parseInt(document.getElementById('streampadPlaylistButton').getAttribute('bordernum')));
            if (!document.getElementById(id)) {
                var border = document.createElement('div');
                border.setAttribute('id', id);
                border.setAttribute('style', 'display:none');
                border.className = 'streampadPlayerbutton';
                streampadPlayer.Utils.setStyles(border, {
                    'cssFloat': 'right',
                    'styleFloat': 'right',
                    'width': '1px',
                    'height': '30px',
                    'background': 'url("' + streampadPlayer.params.btnurl[streampadPlayer.params.btncolor] + '") ' + streampadPlayer.Theme.borderOff + ' no-repeat'
                });
                document.getElementById('streampadPlaylistButton').parentNode.insertBefore(border, document.getElementById('streampadPlaylistButton'));
            }
            var id2 = 'streampadPlayerBorderNum' + (parseInt(document.getElementById('streampadPlaylistButton').getAttribute('bordernum')) + 1);
            if (!document.getElementById(id2)) {
                var border = document.createElement('div');
                border.setAttribute('id', id2);
                border.setAttribute('style', 'display:none');
                border.className = 'streampadPlayerbutton';
                streampadPlayer.Utils.setStyles(border, {
                    'cssFloat': 'right',
                    'styleFloat': 'right',
                    'width': '1px',
                    'height': '30px',
                    'background': 'url("' + streampadPlayer.params.btnurl[streampadPlayer.params.btncolor] + '") ' + streampadPlayer.Theme.borderOff + ' no-repeat'
                });
                document.getElementById('streampadPlaylistButton').parentNode.insertBefore(border, document.getElementById('streampadPlaylistButton').nextSibling);
            }
        }
        if (SPshowlastfmbutton === 'true') {
            var id = 'streampadPlayerBorderNum' + (parseInt(document.getElementById('streampadProfileButton').getAttribute('bordernum')));
            if (!document.getElementById(id)) {
                var border = document.createElement('div');
                border.setAttribute('id', id);
                border.setAttribute('style', 'display:none');
                border.className = 'streampadPlayerbutton';
                streampadPlayer.Utils.setStyles(border, {
                    'cssFloat': 'right',
                    'styleFloat': 'right',
                    'width': '1px',
                    'height': '30px',
                    'background': 'url("' + streampadPlayer.params.btnurl[streampadPlayer.params.btncolor] + '") ' + streampadPlayer.Theme.borderOff + ' no-repeat'
                });
                document.getElementById('streampadProfileButton').parentNode.insertBefore(border, document.getElementById('streampadProfileButton'));
            }
            var id2 = 'streampadPlayerBorderNum' + (parseInt(document.getElementById('streampadProfileButton').getAttribute('bordernum')) + 1);
            if (!document.getElementById(id2)) {
                var border = document.createElement('div');
                border.setAttribute('id', id2);
                border.setAttribute('style', 'display:none');
                border.className = 'streampadPlayerbutton';
                streampadPlayer.Utils.setStyles(border, {
                    'cssFloat': 'right',
                    'styleFloat': 'right',
                    'width': '1px',
                    'height': '30px',
                    'background': 'url("' + streampadPlayer.params.btnurl[streampadPlayer.params.btncolor] + '") ' + streampadPlayer.Theme.borderOff + ' no-repeat'
                });
                document.getElementById('streampadProfileButton').parentNode.insertBefore(border, document.getElementById('streampadProfileButton').nextSibling);
            }
        }
    });
})();

/*

JDU Themes 
Tumblr Streampad Player v2 Seamless Playback via IFrame + HTML5 history.pushState
http://jduthemes.tumblr.com

*/

if (SPenablecrosspageplayback) {
  if (window == window.top || !window.parent.streampadPlayer) {
    function SPattach(context) {
      for (var hrefs = context.document.links, i = hrefs.length; i-- > 0;) {
        hrefs[i].addEventListener('click', function (e) {
          var regex = new RegExp(window.parent.location.protocol + '\\/\\/' + window.parent.location.hostname + '(?!\\/rss$)', 'i');
          var illegals = this.getAttribute('href').match(/^#|^javascript/);
          if (this.href.match(regex) && !(illegals)) {
            if (context == window.parent) {
              e.preventDefault();
            }
            window.parent.SPclicked(this.href);
          } else if (this.href.indexOf('.') != -1 && !(illegals)) {
            //e.preventDefault();
            //window.parent.location.href = this.href;
          }
        });
      }
    }

    function SPclicked(link) {
      if (document.getElementById('SPframe')) {
        if (document.getElementById('SPframe').style.visibility != 'hidden') window.top.history.replaceState(null, null, link);
      } else {
        var iframe = document.createElement('iframe');
        iframe.id = 'SPframe';
        iframe.style.display = 'block';
        iframe.style.visibility = 'hidden';
        iframe.setAttribute('frameborder', '0');
        iframe.width = '0';
        iframe.height = '0';
        iframe.onload = function () {
          while (document.body.firstChild != document.getElementById('streampadBottomBar')) {
            document.body.removeChild(document.body.firstChild);
          }
          document.body.setAttribute('style', 'width: 100%; height: 100%; position: absolute; margin: 0; padding: 0; border: 0;');
          iframe.width = '100%'
          iframe.height = window.innerHeight;
          iframe.style.visibility = 'visible';
          iframe.onload = null;
        };
        iframe.addEventListener('load', function () {
          SPattach(iframe.contentWindow);
          document.getElementById('streampadBottomBar').style.bottom = (window.innerHeight - iframe.contentWindow.document.documentElement.clientHeight) + 'px';
          document.getElementById('streampadBottomBar').style.width = iframe.contentWindow.document.documentElement.clientWidth + 'px';
          document.title = iframe.contentWindow.document.title;
          if (window.parent.location.href != iframe.contentWindow.location.href) {
            window.top.history.replaceState(null, null, iframe.contentWindow.location.href);
          }
        });
        var clear;
        window.addEventListener('resize', function () {
          window.clearTimeout(clear);
          clear = window.setTimeout(function () {
            iframe.height = window.innerHeight;
            document.getElementById('streampadBottomBar').style.bottom = (window.innerHeight - iframe.contentWindow.document.documentElement.clientHeight) + 'px';
            document.getElementById('streampadBottomBar').style.width = iframe.contentWindow.document.documentElement.clientWidth + 'px';
          }, 20);
        });
        document.body.appendChild(iframe);
        window.top.history.pushState(null, null, link);
        iframe.contentWindow.location.replace(link);
      }
    }

    window.parent.history.replaceState({SPlandingpage: window.parent.location.href}, null, window.parent.location.href);
    window.parent.addEventListener('popstate', function (e) {
      if (typeof e !== 'undefined') if (e.state) window.parent.location.href = e.state.SPlandingpage;
    });
    document.addEventListener('DOMContentLoaded', function () {
      SPattach(window);
    });

  } else {
    streampadPlayer = {};
    streampadPlayer.browser = {};
    streampadPlayer.browser.loaded = true;
    streampadPlayer.UI = {};
    streampadPlayer.UI.resize = function () {};
    window.removeEventListener('resize', streampadPlayer.UI.resize);
    streampadPlayer.Events = {};
    streampadPlayer.Events.scrollHandler = function () {};
    window.removeEventListener('scroll', streampadPlayer.Events.scrollHandler);
  }
}