"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(a),k=l,d=u["".concat(m,".").concat(k)]||u[k]||c[k]||r;return a?n.createElement(d,o(o({ref:t},i),{},{components:a})):n.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[u]="string"==typeof e?e:l,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={},o="JavaScript\u6a21\u5757\u5316",p={permalink:"/blog/2023/01/06/js_moduler/JS\u6a21\u5757\u5316",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-06-js_moduler/JS\u6a21\u5757\u5316.md",source:"@site/blog/2023-01-06-js_moduler/JS\u6a21\u5757\u5316.md",title:"JavaScript\u6a21\u5757\u5316",description:"1.\u6a21\u5757\u5316\u5165\u95e8",date:"2023-01-06T00:00:00.000Z",formattedDate:"2023\u5e741\u67086\u65e5",tags:[],readingTime:10.81,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"\u6d4b\u8bd5\u6587\u4ef6",permalink:"/blog/2022/12/09/test/test01"}},m={authorsImageUrls:[]},s=[{value:"1.\u6a21\u5757\u5316\u5165\u95e8",id:"1\u6a21\u5757\u5316\u5165\u95e8",level:2},{value:"1.1\u4ec0\u4e48\u662f\u6a21\u5757\u5316",id:"11\u4ec0\u4e48\u662f\u6a21\u5757\u5316",level:3},{value:"1.2\u4e3a\u4ec0\u4e48\u8981\u6a21\u5757\u5316",id:"12\u4e3a\u4ec0\u4e48\u8981\u6a21\u5757\u5316",level:3},{value:"1.3\u6a21\u5757\u5316\u6982\u5ff5\u6240\u5e26\u6765\u7684\u95ee\u9898",id:"13\u6a21\u5757\u5316\u6982\u5ff5\u6240\u5e26\u6765\u7684\u95ee\u9898",level:3},{value:"2.\u6a21\u5757\u5316\u89c4\u8303",id:"2\u6a21\u5757\u5316\u89c4\u8303",level:2},{value:"2.1CommonJS",id:"21commonjs",level:3},{value:"2.1.1\u89c4\u8303",id:"211\u89c4\u8303",level:4},{value:"2.1.2\u57fa\u672c\u8bed\u6cd5",id:"212\u57fa\u672c\u8bed\u6cd5",level:4},{value:"2.1.3 CommonJS\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c\u793a\u4f8b",id:"213-commonjs\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c\u793a\u4f8b",level:4},{value:"2.1.4 CommonJS\u5728\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c",id:"214-commonjs\u5728\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c",level:4},{value:"2.2 ES6\u6a21\u5757\u5316\u89c4\u8303",id:"22-es6\u6a21\u5757\u5316\u89c4\u8303",level:3},{value:"2.2.1 \u89c4\u8303",id:"221-\u89c4\u8303",level:4},{value:"2.2.2 \u57fa\u672c\u8bed\u6cd5",id:"222-\u57fa\u672c\u8bed\u6cd5",level:4},{value:"2.2.3 ES6\u6a21\u5757\u5316\u793a\u4f8b",id:"223-es6\u6a21\u5757\u5316\u793a\u4f8b",level:4}],i={toc:s};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u6a21\u5757\u5316\u5165\u95e8"},"1.\u6a21\u5757\u5316\u5165\u95e8"),(0,l.kt)("h3",{id:"11\u4ec0\u4e48\u662f\u6a21\u5757\u5316"},"1.1\u4ec0\u4e48\u662f\u6a21\u5757\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4e00\u4e2a\u590d\u6742\u7684\u7a0b\u5e8f\u4f9d\u636e\u4e00\u5b9a\u7684\u89c4\u5219(\u89c4\u8303)",(0,l.kt)("font",{color:"red"},"\u62c6"),"\u6210\u51e0\u4e2a\u5757(\u6587\u4ef6), \u5e76\u8fdb\u884c\u7ec4",(0,l.kt)("font",{color:"red"},"\u5408"),"\u5728\u4e00\u8d77\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5757\u7684 \u5185\u90e8\u6570\u636e/\u5b9e\u73b0 \u662f\u79c1\u6709\u7684, \u53ea\u662f\u5411\u5916\u90e8\u66b4\u9732\u4e00\u4e9b\u63a5\u53e3(\u65b9\u6cd5)\u4e0e\u5916\u90e8\u5176\u5b83\u6a21\u5757\u901a\u4fe1\u3002")),(0,l.kt)("hr",null),(0,l.kt)("font",{color:"blue",size:"2"},"\u81ea\u5df1\u7684\u7406\u89e3\uff1a\u5f62\u8c61\u7684\u8bf4\u5c31\u662f\u5c06\u4e00\u4e2a\u5927\u7684JavaScript\u6587\u4ef6(\u5177\u6709\u591a\u4e2a\u529f\u80fd)\uff0c\u62c6\u5c01\u6210\u591a\u4e2a\u5c0f\u7684JavaScript\u6587\u4ef6(\u53ea\u6709\u4e00\u4e2a\u6216\u5c11\u8bb8\u51e0\u4e2a\u529f\u80fd)\uff0c\u5728\u4f7f\u7528\u8fd9\u4e9b\u6587\u4ef6\u65f6\uff0c\u518d\u5c06\u5b83\u4eec\u7ec4\u5408\u5728\u4e00\u8d77\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"12\u4e3a\u4ec0\u4e48\u8981\u6a21\u5757\u5316"},"1.2\u4e3a\u4ec0\u4e48\u8981\u6a21\u5757\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u590d\u6742\u5ea6\uff0c\u63d0\u9ad8\u89e3\u8026\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u547d\u540d\u51b2\u7a81"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u5206\u79bb\uff0c\u6309\u9700\u52a0\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u9ad8\u590d\u7528\u6027\uff0c\u9ad8\u53ef\u7ef4\u62a4\u6027")),(0,l.kt)("h3",{id:"13\u6a21\u5757\u5316\u6982\u5ff5\u6240\u5e26\u6765\u7684\u95ee\u9898"},"1.3\u6a21\u5757\u5316\u6982\u5ff5\u6240\u5e26\u6765\u7684\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8fc7\u591a"),(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u6a21\u7cca"),(0,l.kt)("li",{parentName:"ul"},"\u96be\u4ee5\u7ef4\u62a4")),(0,l.kt)("h2",{id:"2\u6a21\u5757\u5316\u89c4\u8303"},"2.\u6a21\u5757\u5316\u89c4\u8303"),(0,l.kt)("p",null,"\u524d\u8a00\uff1a\u4e00\u4e2a\u5927\u7684\u9879\u76ee\u5fc5\u5b9a\u4f1a\u4f7f\u7528\u6a21\u5757\u5316\u6280\u672f\uff0c\u4f7f\u7528\u6a21\u5757\u5316\u5c31\u4f1a\u4f7f\u7528\u76f8\u5e94\u7684\u6a21\u5757\u5316\u89c4\u8303\uff0c\u73b0\u5728\u6bd4\u8f83\u6d41\u884c\u7684\u89c4\u8303\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1aCommonJS\u3001ES6"),(0,l.kt)("h3",{id:"21commonjs"},"2.1CommonJS"),(0,l.kt)("h4",{id:"211\u89c4\u8303"},"2.1.1\u89c4\u8303"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u6587\u4ef6\uff08js\uff09\u90fd\u53ef\u5f53\u4f5c\u4e00\u4e2a\u6a21\u5757"),(0,l.kt)("li",{parentName:"ol"},"CommonJS\u6a21\u5757\u5316\u7684\u4ee3\u7801\u65e2\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u670d\u52a1\u5668\u7aef\uff1a\u6a21\u5757\u5316\u7684\u4ee3\u7801\u53ef\u76f4\u63a5\u8fd0\u884c------------------------Node.js"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u6d4f\u89c8\u5668\u7aef\uff1a\u6a21\u5757\u5316\u7684\u4ee3\u7801\u8981\u7ecf\u8fc7Browserify\u7f16\u8bd1---------Browserify (\u7f16\u8bd1\u5668\uff1a\u5c06require\u53d8\u4e3a\u6d4f\u89c8\u5668\u53ef\u4ee5\u8ba4\u8bc6\u7684\u4e1c\u897f)")),(0,l.kt)("h4",{id:"212\u57fa\u672c\u8bed\u6cd5"},"2.1.2\u57fa\u672c\u8bed\u6cd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u66b4\u9732\u6a21\u5757\u8bed\u6cd5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u79cd\u65b9\u5f0f\uff1amodule.exports = value"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff1aexports.xxx = value"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f15\u5165\u6a21\u5757\u8bed\u6cd5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f15\u5165\u7b2c\u4e09\u65b9\u6a21\u5757\uff1arequire(xxx), xxx\u4e3a\u6a21\u5757\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u5165\u81ea\u5b9a\u4e49\u6a21\u5757\uff1arequire(xxx),xxx\u4e3a\u6a21\u5757\u6587\u4ef6\u8def\u5f84"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5907\u6ce8\uff1a\u5185\u7f6e\u5173\u7cfb"),(0,l.kt)("p",{parentName:"li"},"module.exports\u548cexports\u90fd\u6307\u5411\u540c\u4e00\u4e2a\u5730\u5740\uff0c\u521d\u59cb\u5316\u65f6module.exports === exports\u4e3atrue"),(0,l.kt)("font",{color:"red"},"\u66b4\u9732\u7684\u672c\u8d28\u662fmodule.exports\u7684\u5185\u5bb9"),"\uff1a\u4e0d\u7ba1\u4ec0\u4e48\u65f6\u5019\uff0c\u66b4\u9732\u7684\u5185\u5bb9\u6c38\u8fdc\u662fmodule.exports\u6307\u5411\u7684\u5185\u5bb9",(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"CommonJS\u66b4\u9732\u5185\u7f6e\u5173\u7cfb",src:a(241).Z,width:"487",height:"317"})))),(0,l.kt)("h4",{id:"213-commonjs\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c\u793a\u4f8b"},"2.1.3 CommonJS\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c\u793a\u4f8b"),(0,l.kt)("p",null,"   \u2460.module.exports = value\u66b4\u9732\u65b9\u5f0f\u548c\u5f15\u5165\u81ea\u5b9a\u4e49\u6a21\u5757"),(0,l.kt)("p",null,"   \u200b\t\ud83d\udcc41_CommonJS_Node\\module1.js\u6587\u4ef6\u8fdb\u884c\u66b4\u9732"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/* \n    module1\u4f7f\u7528module.exports = xxxx \u53bb\u66b4\u9732\uff0cxxx\u5c31\u662f\u66b4\u9732\u7684\u5185\u5bb9\n    module.exports\u548cexports\u4e0d\u80fd\u6df7\u7528\uff0c\u82e5\u6df7\u7528\u4e86\uff0c\u66b4\u9732\u7684\u662fmodule.exports\u4e2d\u7684\u5185\u5bb9\n*/\n//\u6ca1\u6709\u66b4\u9732\u7684data\u548cmsg(\u88ab\u4fdd\u62a4\u4e86)\nconst data = 'atguigu'\nconst msg = 'hello'\n\nmodule.exports = {\n    showData (){\n        console.log(data);\n    },\n    showMsg(){\n        console.log(msg);\n    }\n}\n\n/*\n    \u6b64\u884c\u4ee3\u7801\u4e0d\u4f1a\u66b4\u9732\u51fa\u53bb\u3002\n    \u56e0\u4e3a\u4e0a\u65b9\u4fee\u6539\u4e86module.exports\uff0cmodule.exports === exports\u4e3afalse,\n    \u66b4\u9732\u7684\u5185\u5bb9\u6c38\u8fdc\u662fmodule.exports\u6307\u5411\u7684\u5185\u5bb9\u3002\n*/\nexports.x = 100 \n")),(0,l.kt)("p",null,"   \u200b\t\ud83d\udcc41_CommonJS_Node\\app.js\u6587\u4ef6\u5f15\u5165\u81ea\u5b9a\u4e49\u6a21\u5757"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u66b4\u9732\u7684\u672c\u8d28\u662fmodule.exports\u7684\u5185\u5bb9\n// \u5f15\u5165\u7684\u5185\u5bb9\u662f\u4ec0\u4e48\uff0c\u53d6\u51b3\u4e8e\u66b4\u9732\u7684\u662f\u4ec0\u4e48\nconst m1 = require('./module1') //\u5f15\u5165\u81ea\u5b9a\u4e49\u6a21\u5757\nm1.showData()\nm1.showMsg()\n\n//\u8fd0\u884c\u65b9\u5f0f\uff1a\u53f3\u952e1_CommonJS_Node\u6587\u4ef6\uff0c\u70b9\u51fb\u2018\u5728\u96c6\u6210\u7ec8\u7aef\u4e2d\u6253\u5f00\u2019\uff0c\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u201cnode app\u201d\n//\u7ed3\u679c\uff1aatguigu \uff08\u56de\u8f66\uff09  hello\n")),(0,l.kt)("p",null,"   \u2461.exports.xxx = value\u66b4\u9732\u65b9\u5f0f\u548c\u5f15\u5165\u81ea\u5b9a\u4e49\u6a21\u5757"),(0,l.kt)("p",null,"   \u200b\t\ud83d\udcc41_CommonJS_Node\\module2.js\u6587\u4ef6\u8fdb\u884c\u66b4\u9732"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/* \n    module2\u4f7f\u7528exports.xxxxx = value \u53bb\u66b4\u9732\uff0cvalue\u5c31\u662f\u66b4\u9732\u7684\u5185\u5bb9,xxxxx\u662f\u4ed6\u7684\u540d\u5b57\n*/\n\nexports.data  = 'atguigu2'\nexports.msg = 'hello2'\n\nexports.sum = function (a,b){\n    console.log(a+b);\n}\n\nexports.sub = function (a,b){\n    console.log(a-b);\n}\n")),(0,l.kt)("p",null,"   \u200b\t\ud83d\udcc41_CommonJS_Node\\app.js\u6587\u4ef6\u5f15\u5165\u81ea\u5b9a\u4e49\u6a21\u5757"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const m2 = require('./module2') //\u5f15\u5165\u81ea\u5b9a\u4e49\u6a21\u5757\nm2.sum(1,2)\nm2.sub(3,4)\n//\u7ed3\u679c 3 (\u56de\u8f66) -1\n")),(0,l.kt)("p",null,"   \u2462\u5f15\u5165\u7b2c\u4e09\u65b9\u6a21\u5757"),(0,l.kt)("p",null,"   \ud83d\udcc41_CommonJS_Node\\app.js\u6587\u4ef6\u5f15\u5165\u7b2c\u4e09\u65b9\u6a21\u5757"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/* \n    \u5f15\u5165\u7b2c\u4e09\u65b9\u6a21\u5757\uff1a\n    1.npm init --yes \uff08nodejs\u521d\u59cb\u5316\uff0c\u751f\u6210\u7684\u9ed8\u8ba4\u7684package.json\uff09\n        package.json\u5305\u542b\u5185\u5bb9\uff1a\n            version \u7248\u672c\u53f7\uff0c\u4e00\u822c\u4ece0.1.0\u5f00\u59cb\n            description\u63cf\u8ff0\n            keywords \u5173\u952e\u8bcd\u7528\u9017\u53f7\u9694\u5f00\n            author\u540d\u5b57\u52a0\u90ae\u7bb1\n            license UNLICENSE\uff0c\u4e00\u822c\u4e0d\u6388\u6743\u516c\u7528\n    2.npm install uniq --save\uff08\u5b89\u88c5uniq\uff09\n    3.\u4f7f\u7528\u7b2c\u4e09\u65b9\u6a21\u5757\n*/\n\nconst uniq = require('uniq')//\u5f15\u5165\u7b2c\u4e09\u65b9\u6a21\u5757\n\nconst arr = [1,3,3,4,2,5]\n//\u53bb\u91cd\uff0c\u5e76\u6309\u7167\u4ece\u5c0f\u5230\u5927\u6392\u5e8f\uff08\u5728\u5199\u4ee3\u7801\u65f6\u4e00\u822c\u4e0d\u4f7f\u7528\u3002\u6570\u7ec4\u7684\u65b9\u6cd5\u4f7f\u7528lodash\uff09\nconsole.log(uniq(arr));\n")),(0,l.kt)("h4",{id:"214-commonjs\u5728\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c"},"2.1.4 CommonJS\u5728\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5168\u5c40\u5b89\u88c5Browserify==>  ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install -g browserify"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u6307\u5b9a\u6587\u4ef6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\u53f3\u952e2_CommonJS_Browserify\u6587\u4ef6\uff0c\u70b9\u51fb\u2018\u5728\u96c6\u6210\u7ec8\u7aef\u4e2d\u6253\u5f00\u2019\uff0c\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\nbrowserify app.js -o build.js\nbrowserify <\u5f15\u5165\u6a21\u5757\u5316\u7684\u6587\u4ef6> -o(\u8f93\u51fa\u5230) <html\u5f15\u5165\u7684js\u6587\u4ef6>\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"html\u9875\u9762\u4e2d\u5f15\u5165build.js\u6587\u4ef6"))),(0,l.kt)("h3",{id:"22-es6\u6a21\u5757\u5316\u89c4\u8303"},"2.2 ES6\u6a21\u5757\u5316\u89c4\u8303"),(0,l.kt)("h4",{id:"221-\u89c4\u8303"},"2.2.1 \u89c4\u8303"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2ajs\u6587\u4ef6\u90fd\u662f\u4e00\u4e2a\u6a21\u5757"),(0,l.kt)("li",{parentName:"ol"},"\u8981\u501f\u52a9 Babel \u548c Browserify \u4f9d\u6b21\u7f16\u8bd1\u4ee3\u7801\uff0c\u624d\u80fd\u5728\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"Babel \u4e2d\u6587\u7f51\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://babel.docschina.org/"},"https://babel.docschina.org/"))),(0,l.kt)("h4",{id:"222-\u57fa\u672c\u8bed\u6cd5"},"2.2.2 \u57fa\u672c\u8bed\u6cd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u66b4\u9732\u8bed\u6cd5\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("font",{color:"red"},"\u5206\u522b\u66b4\u9732"),"\uff1aexport \u66b4\u9732\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("font",{color:"red"},"\u7edf\u4e00\u66b4\u9732"),"\uff1aexport ","\u66b4\u9732\u5185\u5bb92"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("font",{color:"red"},"\u9ed8\u8ba4\u66b4\u9732"),"\uff1aexport default \u66b4\u9732\u5185\u5bb9"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f15\u5165\u6a21\u5757\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e00\uff1aimport {xxx,yyy} from './module1'"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e8c\uff1aimport module2 from './module2'"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u89c4\u5219\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528",(0,l.kt)("font",{color:"red"},"\u5206\u522b\u66b4\u9732\u3001\u7edf\u4e00\u66b4\u9732"),"\u7684\u65b9\u5f0f\u66b4\u9732\u5185\u5bb9\uff0c\u90a3\u4e48\u5c31\u7528\u65b9\u6cd5\u4e00\u5f15\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528",(0,l.kt)("font",{color:"red"},"\u9ed8\u8ba4\u66b4\u9732"),"\u7684\u65b9\u5f0f\u66b4\u9732\u5185\u5bb9\uff0c\u90a3\u4e48\u5c31\u7528\u65b9\u6cd5\u4e8c\u5f15\u5165"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u6587\u4ef6\u7ed3\u6784\u548c\u51c6\u5907\u76f8\u5173\u7684\u4f9d\u8d56\u5305"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-3_ES6_modular\n    -src\n        -app.js\n        -module1.js\n    -index.html\n    -.babelrc\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5168\u5c40\u5b89\u88c5 babel-cli\uff08babel\u547d\u4ee4\u884c\u7684\u4e00\u4e2a\u5de5\u5177\uff09\u3001Browserify\uff0c\u6267\u884c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#Browserify\u5df2\u5728\u4f7f\u7528CommonJS\u65f6\u5df2\u5b89\u88c5\nnpm install babel-cli -g\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c40\u90e8\u5b89\u88c5 babel-preset-env\uff0c\u6267\u884c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#\u57282017\u5e74\u7b2c\u4e09\u5b63\u5ea6\u6211\u4eec\u7ec8\u4e8e\u8981\u548c ES2015 preset \u8bf4\u518d\u89c1\u4e86\n#npm install babel-preset-es2015 ---\x3e\u4e0d\u518d\u4f7f\u7528\n#"babel-preset-env": "1.7.0"\nnpm install --save-dev babel-preset-env@1.7.0#Babel 6\u7248\u672c\u5199\u6cd5\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9a\u4e49 .babelrc \u6587\u4ef6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#Babel 6.x:Preset:- babel-preset-env ---\x3eBabel 6.x\u7248\u672c\u5199\u6cd5\nnpm install --save-dev babel-preset-env@1.7.0\n{ "presets": [ "env" ],}\n\n#\u672a\u5b9e\u8df5\n# Babel 7.x:Preset:- @babel/preset-env ---\x3eBabel 7.x\u7248\u672c\u5199\u6cd5\nnpm install --save-dev @babel/preset-env\n{ "presets": ["@babel/preset-env"] }\n'))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u4ee3\u7801\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u8fdb\u5165 "3_ES6_modular" \u76ee\u5f55\uff0c\u4f7f\u7528Babel\u5c06ES6\u7f16\u8bd1\u4e3aES5\u8bed\u6cd5'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#src\u6587\u4ef6\u5939\u4e2d\u5b58\u653e\u4f7f\u7528ES6\u8bed\u6cd5\u7684\u6587\u4ef6(\u4e3b\u8981\u662fimport export)\n#\u751f\u6210\u7684build\u6587\u4ef6\u5939\u4e2d\u7684\u6587\u4ef6\u662f\u5c06src\u4e2d\u7684\u6587\u4ef6\u7684ES6\u5199\u6cd5\u8f6c\u6362\u6210CommonJS\u5199\u6cd5\nbabel ./src -d ./build\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7ee7\u7eed\u4f7f\u7528Browserify\u7f16\u8bd1\u4e0a\u4e00\u6b65\u7684js"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"browserify ./build/app.js -o ./build/build.js\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("font",{color:"blue"},"\u5f53\u539f\u6587\u4ef6\u4fee\u6539\u65f6\uff0c\u9700\u8981\u91cd\u65b0\u7528\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("font",{color:"red"},"\u5907\u6ce8\uff1a\u547d\u4ee4\u4e0d\u8981\u8bb0\uff01\uff01\u6211\u4eec\u5b66\u4e60\u7684\u662f\u6a21\u5757\u5316\u7684\u66b4\u9732\u3001\u5f15\u5165\u8bed\u6cd5\uff0c\u4e0d\u662f\u547d\u4ee4\uff0c\u4ee5\u540e\u4e5f\u4e0d\u6572\u547d\u4ee4\u3002")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u9875\u9762\u4e2d\u5f15\u5165build.js\u8fdb\u884c\u6d4b\u8bd5"))),(0,l.kt)("h4",{id:"223-es6\u6a21\u5757\u5316\u793a\u4f8b"},"2.2.3 ES6\u6a21\u5757\u5316\u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5206\u522b\u66b4\u9732\u548c\u5f15\u5165"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5206\u522b\u66b4\u9732"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//module1\u4e2d\u4f7f\u7528\u3010\u5206\u522b\u66b4\u9732\u3011\nexport const data = 'atguigu'\nexport const msg = 'hello,0826'\n\nexport function showData(){\n    console.log(data);\n}\nexport function showMsg(){\n    console.log(msg);\n}\n\n//module2\u4e2d\u4f7f\u7528\u3010\u5206\u522b\u66b4\u9732\u3011\uff0c\u4f46\u66b4\u9732\u4e86\u4e00\u4e2a\u548cmodule1\u91cd\u540d\u7684\u4e00\u4e2adata\nexport const data = '\u5317\u4e03\u5bb6\u9547\u5b8f\u798f\u79d1\u6280\u56ed'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5206\u522b\u66b4\u9732\u7684\u5f15\u5165(app.js)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u5f15\u5165\u3010\u5206\u522b\u66b4\u9732\u3011\u7684\u6a21\u5757\n//{data,showData,showMsg} \u4e0d\u662f\u89e3\u6784\u8d4b\u503c\uff0c\u53ea\u662fES6\u7684\u4e00\u79cd\u5199\u6cd5\nimport {data,showData,showMsg} from './module1'\n\n//\u5f15\u5165\u3010\u5206\u522b\u66b4\u9732\u3011\u7684\u6a21\u5757+\u91cd\u547d\u540d\nimport {data as data2} from './module2'\n\n//\u5f15\u5165\u3010\u5206\u522b\u66b4\u9732\u3011\u7684\u6a21\u5757+\u6253\u5305\u5f15\u5165\nimport * as module1 from './module1'\n//\u6b64\u65f6module1\u4e3a\u4e00\u4e2a\u5bf9\u8c61\n//\u53ef\u4ee5\u8fdb\u884c\u89e3\u6784\u8d4b\u503c\uff0ckey\u4e3a\u5b9a\u4e49\u7684\u53d8\u91cf\u3001\u65b9\u6cd5\u540d\uff1bvalue\u4e3a\u53d8\u91cf\u503c\u3001function\nconst {data,msg} = module1\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7edf\u4e00\u66b4\u9732"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7edf\u4e00\u66b4\u9732"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/* \n    module3\u4e2d\u4f7f\u7528\u3010\u7edf\u4e00\u66b4\u9732\u3011\n*/\nconst school = '\u5c1a\u7845\u8c37'\nconst person = {\n    name:'\u8001\u5218',\n    age:19,\n    sex:'\u5973'\n}\nfunction getLaoliu(){\n    console.log(person);\n}\n\n//\u7edf\u4e00\u66b4\u9732(\u7cbe\u7b80\u7248)---\u7528\u7684\u591a\nexport {school,person,getLaoliu}\n\n//\u7edf\u4e00\u66b4\u9732(\u5b8c\u6574\u7248)---\u8d77\u522b\u540d\u540e\uff0c\u5f15\u5165\u65f6\u8981\u662f\u7528\u65b0\u540d\u5b57\n// export {school as a,person as b,getLaoliu as c}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7edf\u4e00\u66b4\u9732\u7684\u5f15\u5165(app.js)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u5f15\u5165\u3010\u7edf\u4e00\u66b4\u9732\u3011\u7684\u6a21\u5757\uff08\u7edf\u4e00\u66b4\u9732\u548c\u5206\u522b\u66b4\u9732\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u4e0a\u65b9\u4e09\u79cd\u5f15\u5165\u7684\u65b9\u5f0f\uff09\nimport {school,person,getLaoliu} from './module3'\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u66b4\u9732"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u66b4\u9732"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* \n    module4\u4e2d\u4f7f\u7528\u3010\u9ed8\u8ba4\u66b4\u9732\u3011-----\u4e00\u4e2a\u6587\u4ef6\u4e2d\u53ea\u80fd\u66b4\u9732\u4e00\u6b21\uff01\uff01\uff01\uff01\n*/\nexport default {\n    name:"wc",\n    age:5,\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u66b4\u9732\u7684\u5f15\u5165"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u5f15\u5165\u3010\u9ed8\u8ba4\u66b4\u9732\u3011\u7684\u6a21\u5757\n//module4 \u4e0d\u80fd\u5199\u4e3a{name,age}----\x3e\u8fd9\u6837\u4f1a\u8ba4\u4e3a\u53bbmodule4\u6587\u4ef6\u4e2d\u627eexport{}\nimport module4 from './module4'\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u591a\u79cd\u66b4\u9732\u65b9\u5f0f\u7684\u4f7f\u7528"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u591a\u79cd\u66b4\u9732\u65b9\u5f0f"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/* \u6df7\u5408\u4f7f\u7528\u66b4\u9732\u65b9\u5f0f */\n//\u4f7f\u7528\u3010\u5206\u522b\u66b4\u9732\u3011\nexport const teacher1 = {name:'\u5f3a\u54e5',age:15}\nexport const teacher2 = {name:'\u6b4c\u795e',age:17}\n\n//\u4f7f\u7528\u3010\u7edf\u4e00\u66b4\u9732\u3011\nconst stu1 = {name:'\u738b\u5b87',age:18}\nconst stu2 = {name:'\u5b87\u822a',age:19}\nexport {stu1,stu2}\n\n//\u4f7f\u7528\u3010\u9ed8\u8ba4\u66b4\u9732\u3011\nexport default {\n    school:'\u5c1a\u7845\u8c37',\n    address:'\u5b8f\u798f\u79d1\u6280\u56ed',\n    subjects:['\u524d\u7aef','java','\u5927\u6570\u636e']\n}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f15\u5165\u591a\u79cd\u66b4\u9732\u65b9\u5f0f\u7684\u6a21\u5757"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import module5,{teacher1,teacher2,stu1,stu2} from './module5'\nconsole.log(module5);//\u9ed8\u8ba4\u66b4\u9732\u4e2d\u7684\u5185\u5bb9{school:'\u5c1a\u7845\u8c37',address:'\u5b8f\u798f\u79d1\u6280\u56ed',..}\nconsole.log(teacher1);//{name:'\u5f3a\u54e5',age:15}\nconsole.log(teacher2);//{name:'\u6b4c\u795e',age:17}\nconsole.log(stu1);//{name:'\u738b\u5b87',age:18}\nconsole.log(stu2);//{name:'\u5b87\u822a',age:19}\n")))))))}u.isMDXComponent=!0},241:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20221130212232681-566b2eeca9e5e2d515f36e089738a7c2.png"}}]);