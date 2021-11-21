"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[8854],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2153:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Avoid unnecessary type assertions",l={unversionedId:"rules/common/avoid-unnecessary-type-assertions",id:"rules/common/avoid-unnecessary-type-assertions",isDocsHomePage:!1,title:"Avoid unnecessary type assertions",description:"Rule id",source:"@site/docs/rules/common/avoid-unnecessary-type-assertions.md",sourceDirName:"rules/common",slug:"/rules/common/avoid-unnecessary-type-assertions",permalink:"/docs/rules/common/avoid-unnecessary-type-assertions",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/common/avoid-unnecessary-type-assertions.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid throw in catch block",permalink:"/docs/rules/common/avoid-throw-in-catch-block"},next:{title:"Avoid unnecessary type casts",permalink:"/docs/rules/common/avoid-unnecessary-type-casts"}},u=[{value:"Rule id",id:"rule-id",children:[],level:2},{value:"Description",id:"description",children:[{value:"Example",id:"example",children:[{value:"Example 1 Check is same type",id:"example-1-check-is-same-type",children:[],level:4},{value:"Example 2 whereType method",id:"example-2-wheretype-method",children:[],level:4}],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"avoid-unnecessary-type-assertions"},"Avoid unnecessary type assertions"),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"avoid-unnecessary-type-assertions"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Warns about unnecessary usage of 'is' and 'whereType' operators."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h4",{id:"example-1-check-is-same-type"},"Example 1 Check is same type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Example {\n  final myList = <int>[1, 2, 3];\n\n  void main() {\n    final result = myList is List<int>; // LINT\n    myList.whereType<int>();\n  }\n}\n")),(0,a.kt)("h4",{id:"example-2-wheretype-method"},"Example 2 whereType method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"main(){\n  ['1', '2'].whereType<String?>(); // LINT\n}\n")))}m.isMDXComponent=!0}}]);