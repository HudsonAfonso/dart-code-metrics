"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[6430],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||c;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},318:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={},m="Format comments",s={unversionedId:"rules/common/format-comment",id:"rules/common/format-comment",title:"Format comments",description:"Rule id",source:"@site/docs/rules/common/format-comment.md",sourceDirName:"rules/common",slug:"/rules/common/format-comment",permalink:"/docs/rules/common/format-comment",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/format-comment.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Double literal format",permalink:"/docs/rules/common/double-literal-format"},next:{title:"Member ordering extended",permalink:"/docs/rules/common/member-ordering-extended"}},l={},u=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"format-comments"},"Format comments"),(0,c.kt)("h2",{id:"rule-id"},"Rule id"),(0,c.kt)("p",null,"format-comment"),(0,c.kt)("h2",{id:"severity"},"Severity"),(0,c.kt)("p",null,"Style"),(0,c.kt)("h2",{id:"description"},"Description"),(0,c.kt)("p",null,"Prefer format comments like sentences."),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("p",null,"Bad:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-dart"},"// prefer format comments like sentences // LINT\nclass Test {\n  /// with start space with dot. // LINT\n  Test() {\n    // with start space with dot. // LINT\n  }\n\n  /// With start space without dot // LINT\n  function() {\n    //Without start space without dot // LINT\n  }\n}\n/* prefer format comments \nlike sentences */ // LINT\n")),(0,c.kt)("p",null,"Good:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-dart"},"// Prefer format comments like sentences.\nclass Test {\n  /// With start space with dot.\n  Test() {\n    // With start space with dot.\n  }\n\n  /// With start space without dot.\n  function() {\n    // Without start space without dot.\n  }\n}\n/* Prefer format comments \nlike sentences. */ \n")))}d.isMDXComponent=!0}}]);