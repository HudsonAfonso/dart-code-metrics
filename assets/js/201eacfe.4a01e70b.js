"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2971],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},140:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],a={},c="Prefer correct identifier length",u={unversionedId:"rules/common/prefer-correct-identifier-length",id:"rules/common/prefer-correct-identifier-length",title:"Prefer correct identifier length",description:"Configurable",source:"@site/docs/rules/common/prefer-correct-identifier-length.md",sourceDirName:"rules/common",slug:"/rules/common/prefer-correct-identifier-length",permalink:"/docs/rules/common/prefer-correct-identifier-length",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-correct-identifier-length.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer conditional expressions",permalink:"/docs/rules/common/prefer-conditional-expressions"},next:{title:"Prefer correct type name",permalink:"/docs/rules/common/prefer-correct-type-name"}},p={},s=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],f={toc:s};function d(e){var r=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prefer-correct-identifier-length"},"Prefer correct identifier length"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"prefer-correct-identifier-length"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Style"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The rule checks the length of variable names in classes, functions, extensions, mixins, and also checks the value of enum."),(0,o.kt)("p",null,"The rule can be configured using fields ",(0,o.kt)("inlineCode",{parentName:"p"},"max-identifier-length")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"min-identifier-length"),". By\ndefault ",(0,o.kt)("inlineCode",{parentName:"p"},"max-identifier-length = 300")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"min-identifier-length = 3"),". You can also add\nexceptions ",(0,o.kt)("inlineCode",{parentName:"p"},"exceptions"),"."),(0,o.kt)("h3",{id:"config-example"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - prefer-correct-identifier-length:\n        exceptions: [ 'z' ]\n        max-identifier-length: 30\n        min-identifier-length: 4\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"\nvar x = 0; // length equals 1\nvar multiplatformConfigurationPoint = 0; // length equals 31\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"\nvar property = 0; // length equals 8\nvar multiplatformConfiguration = 0; // length equals 26\n")))}d.isMDXComponent=!0}}]);