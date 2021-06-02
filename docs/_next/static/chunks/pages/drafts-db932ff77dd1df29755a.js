(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{6937:function(e,t,r){"use strict";r.d(t,{C:function(){return h}});var n=r(7757),a=r.n(n),s=r(2137),i=r(6156),o=r(5893),l=r(7375),c=(r(7294),r(9008)),d=r(6829),u=r(1100),x=r(2340);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=null;function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ssr,i=void 0===n||n,u=function(t){var r=t.apolloClient,n=t.apolloState,a=(0,l.Z)(t,["apolloClient","apolloState"]),s=r||b(n);return(0,o.jsx)(d.ApolloProvider,{client:s,children:(0,o.jsx)(e,f({},a))})};return(i||e.getInitialProps)&&(u.getInitialProps=function(){var t=(0,s.Z)(a().mark((function t(n){var s,l,d,u,x,p;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=n.AppTree,l=n.apolloClient=b(),d={},!e.getInitialProps){t.next=7;break}return t.next=6,e.getInitialProps(n);case 6:d=t.sent;case 7:t.next=24;break;case 10:if(!i){t.next=24;break}return t.prev=11,t.next=14,Promise.all([r.e(774),r.e(603)]).then(r.bind(r,6603));case 14:return u=t.sent,x=u.getDataFromTree,t.next=18,x((0,o.jsx)(s,{pageProps:f(f({},d),{},{apolloClient:l})}));case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(11),console.error("Error while running `getDataFromTree`",t.t0);case 23:c.default.rewind();case 24:return p=l.cache.extract(),t.abrupt("return",f(f({},d),{},{apolloState:p}));case 26:case"end":return t.stop()}}),t,null,[[11,20]])})));return function(e){return t.apply(this,arguments)}}()),u}function b(e){return j||(j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!1,r=(new x.h4).restore(e);return new u.fe({ssrMode:t,link:m(),cache:r})}(e)),j}function m(){return new(0,r(6624).HttpLink)({uri:"http://localhost:3000/api",credentials:"same-origin"})}},7513:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(5988),s=r(1664),i=r(1163),o=function(){var e=(0,i.useRouter)();function t(t){return e.pathname===t}return(0,n.jsxs)("nav",{className:"jsx-598980782",children:[(0,n.jsxs)("div",{className:"jsx-598980782 left",children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{"data-active":t("/"),className:"jsx-598980782 bold",children:"Blog"})}),(0,n.jsx)(s.default,{href:"/drafts",children:(0,n.jsx)("a",{"data-active":t("/drafts"),className:"jsx-598980782",children:"Drafts"})})]}),(0,n.jsxs)("div",{className:"jsx-598980782 right",children:[(0,n.jsx)(s.default,{href:"/signup",children:(0,n.jsx)("a",{"data-active":t("/signup"),className:"jsx-598980782",children:"Signup"})}),(0,n.jsx)(s.default,{href:"/create",children:(0,n.jsx)("a",{"data-active":t("/create"),className:"jsx-598980782",children:"+ Create draft"})})]}),(0,n.jsx)(a.default,{id:"598980782",children:["nav.jsx-598980782{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".bold.jsx-598980782{font-weight:bold;}","a.jsx-598980782{-webkit-text-decoration:none;text-decoration:none;color:#000;display:inline-block;}",'.left.jsx-598980782 a[data-active="true"].jsx-598980782{color:gray;}',"a.jsx-598980782+a.jsx-598980782{margin-left:1rem;}",".right.jsx-598980782{margin-left:auto;}",".right.jsx-598980782 a.jsx-598980782{border:1px solid black;padding:0.5rem 1rem;border-radius:3px;}"]})]})},l=function(e){return(0,n.jsxs)("div",{className:"jsx-1678097691",children:[(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:"jsx-1678097691 layout",children:e.children}),(0,n.jsx)(a.default,{id:"540019051",children:["html{box-sizing:border-box;}","*,*:before,*:after{box-sizing:inherit;}","body{margin:0;padding:0;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto, Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol';background:rgba(0,0,0,0.05);}","input,textarea{font-size:16px;}","button{cursor:pointer;}"]}),(0,n.jsx)(a.default,{id:"1179425017",children:[".layout.jsx-1678097691{padding:0 2rem;}"]})]})}},7640:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(2465),s=r(5988),i=r(7513),o=r(1664),l=r(6937),c=r(3121),d=r(6829);function u(){var e=(0,a.Z)(["\n  query DraftsQuery {\n    drafts {\n      id\n      title\n      content\n      published\n      author {\n        id\n        name\n      }\n    }\n  }\n"]);return u=function(){return e},e}var x=(0,c.ZP)(u()),p=function(e){var t=e.post;return(0,n.jsx)(o.default,{href:"/p/[id]",as:"/p/".concat(t.id),children:(0,n.jsxs)("a",{className:"jsx-4035363373",children:[(0,n.jsx)("h2",{className:"jsx-4035363373",children:t.title}),(0,n.jsxs)("small",{className:"jsx-4035363373",children:["By ",t.author?t.author.name:"Unknown Author"]}),(0,n.jsx)("p",{className:"jsx-4035363373",children:t.content}),(0,n.jsx)(s.default,{id:"4035363373",children:["a.jsx-4035363373{-webkit-text-decoration:none;text-decoration:none;color:inherit;padding:2rem;display:block;}"]})]})})};t.default=(0,l.C)((function(){var e=(0,d.useQuery)(x),t=e.loading,r=e.error,a=e.data;return t?(0,n.jsx)("div",{children:"Loading ..."}):r?(0,n.jsxs)("div",{children:["Error: ",r.message]}):(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)("div",{className:"jsx-3495282894 page",children:[(0,n.jsx)("h1",{className:"jsx-3495282894",children:"Drafts"}),(0,n.jsx)("main",{className:"jsx-3495282894",children:a.drafts.map((function(e){return(0,n.jsx)("div",{className:"jsx-3495282894 post",children:(0,n.jsx)(p,{post:e})},e.id)}))})]}),(0,n.jsx)(s.default,{id:"3495282894",children:[".post.jsx-3495282894{background:white;-webkit-transition:box-shadow 0.1s ease-in;transition:box-shadow 0.1s ease-in;}",".post.jsx-3495282894:hover{box-shadow:1px 1px 3px #aaa;}",".post.jsx-3495282894+.post.jsx-3495282894{margin-top:2rem;}"]})]})}))},2313:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drafts",function(){return r(7640)}])}},function(e){e.O(0,[774,351,240],(function(){return t=2313,e(e.s=t);var t}));var t=e.O();_N_E=t}]);