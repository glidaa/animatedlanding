/*!
 * ABC.Bundle.Platforms 1.0:
 * - json2.js 2013-05-26
 * - ABC.Storage.Cookies r15721
 * - ABC.Platforms r17210
 */
;if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());var ABC=ABC||{};ABC.Storage=ABC.Storage||{};ABC.Storage.Cookies=(function(f,a){var g=f;
    /*!
         * jQuery Cookie Plugin v1.3.1
         * https://github.com/carhartl/jquery-cookie
         *
         * Copyright 2013 Klaus Hartl
         * Released under the MIT license
         */
    (function(l,m,i){var k=/\+/g;function n(q){return q}function o(q){return j(decodeURIComponent(q.replace(k," ")))}function j(q){if(q.indexOf('"')===0){q=q.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}return q}function p(q){return h.json?JSON.parse(q):q}var h=l.cookie=function(y,x,C){if(x!==i){C=l.extend({},h.defaults,C);if(x===null){C.expires=-1}if(typeof C.expires==="number"){var z=C.expires,B=C.expires=new Date();B.setDate(B.getDate()+z)}x=h.json?JSON.stringify(x):String(x);return(m.cookie=[encodeURIComponent(y),"=",h.raw?x:encodeURIComponent(x),C.expires?"; expires="+C.expires.toUTCString():"",C.path?"; path="+C.path:"",C.domain?"; domain="+C.domain:"",C.secure?"; secure":""].join(""))}var q=h.raw?n:o;var A=m.cookie.split("; ");var D=y?null:{};for(var w=0,u=A.length;w<u;w++){var v=A[w].split("=");var r=q(v.shift());var s=q(v.join("="));if(y&&y===r){D=p(s);break}if(!y){D[r]=p(s)}}return D};h.defaults={};l.removeCookie=function(r,q){if(l.cookie(r)!==null){l.cookie(r,null,q);return true}return false}})(g,a);
    /*! end jQuery Cookie Plugin */
    ;function c(h){return(h&&h.indexOf("ABC.")===0?h.replace(/\./g,"_"):h)}function b(k,m,i,h){var l=!!f.cookie.raw,j=!!f.cookie.json;f.cookie.raw=false;f.cookie.json=(h===true);var n=f.cookie(c(k),m,i);f.cookie.raw=l;f.cookie.json=j;return n}function e(i,j,h){return b(i,j,h,true)}function d(i,h){return f.removeCookie(c(i),h)}return{get:b,set:b,getJson:e,setJson:e,remove:d}})(jQuery,document);var ABC=ABC||{};ABC.Platforms=(function(h){var l={expires:3,domain:".abc.net.au",path:"/"},e="ABC_PP",i="ABC_FF",n="pfm",d="(\\w)(\\w)";var g={NOTSPECIFIED:{value:null,name:"Not specified"},STANDARD:{value:"s",name:"Standard",accept:["s","desktop"]},MOBILE:{value:"m",name:"Mobile",accept:["m","mobile"]},TABLET:{value:null,name:"Tablet",accept:["tablet"]}};function j(o){switch(o){case g.NOTSPECIFIED:case g.STANDARD:case g.MOBILE:case g.TABLET:return o}return null}function c(o){for(var p in g){if(g.hasOwnProperty(p)&&g[p].accept&&g[p].accept.indexOf(o)>-1){return g[p]}}return g.NOTSPECIFIED}function a(){return c(ABC.Storage.Cookies.get(i))}function m(){return c(ABC.Storage.Cookies.get(e))}function f(o){o=j(o);if(o&&o.value){ABC.Storage.Cookies.set(e,o.value,l);return o}else{throw new Error("Form factor invalid or not specified; cookie not set")}}function k(){return ABC.Storage.Cookies.remove(e,l)}function b(){var q,p,o=h.location.search.match(new RegExp("(?:\\?|&)"+n+"="+d+"(?:&|$)"));if(o){q=c(o[1]);p=c(o[2]);if(q.value&&p.value){return[q,p]}}return null}return{FORMFACTOR:g,getDetected:a,getPref:m,setPref:f,removePref:k,getFlow:b}})(window);
