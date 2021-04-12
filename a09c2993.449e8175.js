(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(98)),l={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"\ud83e\udd5c goober, a less than 1KB css-in-js solution.",source:"@site/docs/introduction.md",slug:"/",permalink:"/",editUrl:"https://github.com/cristianbote/goober/edit/master/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"styled",permalink:"/api/styled"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Comparison and tradeoffs",id:"comparison-and-tradeoffs",children:[]},{value:"SSR",id:"ssr",children:[]},{value:"Benchmarks",id:"benchmarks",children:[{value:"Browser",id:"browser",children:[]},{value:"SSR",id:"ssr-1",children:[]}]},{value:"Browser support",id:"browser-support",children:[]}],i={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\ud83e\udd5c goober, a less than 1KB css-in-js solution."),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#backers"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://opencollective.com/goober/backers/badge.svg",alt:"Backers on Open Collective"}))),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#sponsors"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://opencollective.com/goober/sponsors/badge.svg",alt:"Sponsors on Open Collective"})))),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/goober"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/goober",alt:"version"}))),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://travis-ci.org/cristianbote/goober"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://travis-ci.org/cristianbote/goober.svg?branch=master",alt:"status"}))),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/goober"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.badgesize.io/https://unpkg.com/goober@latest/dist/goober.js?compression=gzip",alt:"gzip size"}))),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/goober"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/dm/goober",alt:"downloads"}))),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://codecov.io/github/cristianbote/goober?branch=master"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/codecov/c/github/cristianbote/goober.svg?maxAge=2592000",alt:"coverage"}))),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://join.slack.com/t/gooberdev/shared_invite/enQtOTM5NjUyOTcwNzI1LWUwNzg0NTQwODY1NDJmMzQ2NzdlODI4YTM3NWUwYjlkY2ZkNGVmMTFlNGMwZGUyOWQyZmI4OTYwYmRiMzE0NGQ"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/slack-join-orange",alt:"Slack"}))),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://greenkeeper.io/"}),Object(b.b)("img",Object(n.a)({parentName:"a"},{src:"https://badges.greenkeeper.io/cristianbote/goober.svg",alt:"Greenkeeper badge"})))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("p",null,"The API is inspired by emotion, ",Object(b.b)("inlineCode",{parentName:"p"},"styled")," function. Meaning, you call it with your ",Object(b.b)("inlineCode",{parentName:"p"},"tagName")," and returns a vDOM component for that tag. Note, ",Object(b.b)("inlineCode",{parentName:"p"},"setup")," is needed to be run before the ",Object(b.b)("inlineCode",{parentName:"p"},"styled")," function is used."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { h } from 'preact';\nimport { styled, setup } from 'goober';\n\n// Should be called here, and just once\nsetup(h);\n\nconst Icon = styled('span')`\n    display: flex;\n    flex: 1;\n    color: red;\n`;\n\nconst Button = styled('button')`\n    background: dodgerblue;\n    color: white;\n    border: ${Math.random()}px solid white;\n\n    &:focus,\n    &:hover {\n        padding: 1em;\n    }\n\n    .otherClass {\n        margin: 0;\n    }\n\n    ${Icon} {\n        color: black;\n    }\n`;\n")),Object(b.b)("h2",{id:"examples"},"Examples"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/qlywyp7z4q"}),"Vanilla")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/k0mnp40n7v"}),"React")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/r15wj2qm7o"}),"Preact")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/7m9zzl6746"}),"SSR with Preact")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/fre-goober-ffqjv"}),"Fre"))),Object(b.b)("h2",{id:"comparison-and-tradeoffs"},"Comparison and tradeoffs"),Object(b.b)("p",null,"In this section I would like to describe as objectively as I can the comparision between the two most known css-in-js packages: styled-component and emotion. The latest versions to date."),Object(b.b)("p",null,"I would use the follwing markers to reflect the state of each point:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u2705 Supported"),Object(b.b)("li",{parentName:"ul"},"\ud83d\udfe1 Partially supported"),Object(b.b)("li",{parentName:"ul"},"\ud83d\uded1 Not supported")),Object(b.b)("p",null,"Here we go:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Feature name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Goober"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Styled Components"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Emotion"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Base bundle size"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.25 kB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12.6 kB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7.4 kB")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Framework agnostic"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Render with target ","*","1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"css")," api"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"css")," prop"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"styled")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"styled.<tag>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705 ","*","2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"as")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},".withComponent")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},".attrs")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"shouldForwardProp")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"keyframes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Labels"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ClassNames"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83d\uded1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Global styles"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SSR"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Theming"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tagged Templates"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object styles"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dynamic styles"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")))),Object(b.b)("p",null,"Footnotes"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"[1]"," ",Object(b.b)("inlineCode",{parentName:"li"},"goober")," can render in ",Object(b.b)("em",{parentName:"li"},"any")," dom target. Meaning you can use ",Object(b.b)("inlineCode",{parentName:"li"},"goober")," to define scoped styles in any context. Really usefull for web-components."),Object(b.b)("li",{parentName:"ul"},"[2]"," Supported only via ",Object(b.b)("inlineCode",{parentName:"li"},"babel-plugin-transform-goober"))),Object(b.b)("h2",{id:"ssr"},"SSR"),Object(b.b)("p",null,"You can get the critical CSS for SSR, via ",Object(b.b)("inlineCode",{parentName:"p"},"extractCss"),". Take a look at this example: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://codesandbox.io/s/7m9zzl6746"}),"CodeSandbox: SSR with Preact and goober")," and read the full explanation for ",Object(b.b)("inlineCode",{parentName:"p"},"extractCSS")," and ",Object(b.b)("inlineCode",{parentName:"p"},"targets")," below."),Object(b.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(b.b)("p",null,"You results are included inside the build output as well."),Object(b.b)("h3",{id:"browser"},"Browser"),Object(b.b)("p",null,"These are not yet measured. Need some time."),Object(b.b)("h3",{id:"ssr-1"},"SSR"),Object(b.b)("p",null,"The benchmark is testing the following scenario:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import styled from 'package';\n\n// Create the dynamic styled component\nconst Foo = styled('div')((props) => ({\n    opacity: props.counter > 0.5 ? 1 : 0,\n    '@media (min-width: 1px)': {\n        rule: 'all'\n    },\n    '&:hover': {\n        another: 1,\n        display: 'space'\n    }\n}));\n\n// Serialize the component\nrenderToString(<Foo counter={Math.random()} />);\n")),Object(b.b)("p",null,"The results are:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"goober x 169,157 ops/sec \xb11.29% (91 runs sampled)\nstyled-components x 10,558 ops/sec \xb17.44% (55 runs sampled)\nemotion@10.0.27 x 73,287 ops/sec \xb13.69% (88 runs sampled)\n\nFastest is: goober\n")),Object(b.b)("h2",{id:"browser-support"},"Browser support"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"goober")," uses microbundle to bundle and transpile it's src into code that browsers can leverage. As you might figure it out, until now, Internet Explorer was the buggiest of them all. ",Object(b.b)("inlineCode",{parentName:"p"},"goober")," works on IE9, as we've successfully test it."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"IE 9\niOS 9.3\nChrome 42\nFF 34\nSafari 9\n")))}p.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(a),s=n,d=O["".concat(l,".").concat(s)]||O[s]||j[s]||b;return a?r.a.createElement(d,c(c({ref:t},i),{},{components:a})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);