(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3378],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,k=u["".concat(l,".").concat(f)]||u[f]||d[f]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3851:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={title:"responsibilities",description:"Overview of maintenance responsibilities in LIDO for Solana",keywords:["maintenance","maintainers","responsibilities","lido","solido","solana"],sidebar_position:2},s={unversionedId:"Guides/Maintenance/MaintainerResponsibilities",id:"Guides/Maintenance/MaintainerResponsibilities",isDocsHomePage:!1,title:"Maintenance Responsibilities",description:"Overview of maintenance responsibilities in LIDO for Solana",source:"@site/docs/Guides/Maintenance/MaintainerResponsibilities.md",sourceDirName:"Guides/Maintenance",slug:"/Guides/Maintenance/MaintainerResponsibilities",permalink:"/solido/docs/Guides/Maintenance/MaintainerResponsibilities",version:"current",sidebarPosition:2,frontMatter:{title:"responsibilities",description:"Overview of maintenance responsibilities in LIDO for Solana",keywords:["maintenance","maintainers","responsibilities","lido","solido","solana"],sidebar_position:2},sidebar:"solidoSidebar",previous:{title:"Maintenance Overview",permalink:"/solido/docs/Guides/Maintenance/Maintenance"},next:{title:"Using the Solido CLI for Maintenance",permalink:"/solido/docs/Guides/Maintenance/UsingCLIForMaintenance"}},l=[{value:"Deposit Stake in the Stake Pool",id:"deposit-stake-in-the-stake-pool",children:[]},{value:"Deposit Any Active Stakes to Stake Pool",id:"deposit-any-active-stakes-to-stake-pool",children:[]},{value:"Distributing Fees",id:"distributing-fees",children:[]},{value:"Increasing / Decreasing stake associated to a validator",id:"increasing--decreasing-stake-associated-to-a-validator",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The responsibilities of maintainers in regards to LIDO for Solana can be summarized in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Responsibility"),(0,r.kt)("th",{parentName:"tr",align:null},"Associated CLI Operation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deposit Stake in the Stake Pool"),(0,r.kt)("td",{parentName:"tr",align:null},"StakeDeposit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deposit Any Active Stakes to Stake Pool"),(0,r.kt)("td",{parentName:"tr",align:null},"DepositActiveStakeToPool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Distributing Fees"),(0,r.kt)("td",{parentName:"tr",align:null},"DistributeFees")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Increasing stake associated to a validator"),(0,r.kt)("td",{parentName:"tr",align:null},"IncreaseValidatorStake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decreasing stake associated to a validator"),(0,r.kt)("td",{parentName:"tr",align:null},"DecreaseValidatorStake")))),(0,r.kt)("h2",{id:"deposit-stake-in-the-stake-pool"},"Deposit Stake in the Stake Pool"),(0,r.kt)("p",null,"This operation will start the cycle to deposit stake into the stake pool.  This operation can only be run my those who are fulfilling the  role of maintainer."),(0,r.kt)("h2",{id:"deposit-any-active-stakes-to-stake-pool"},"Deposit Any Active Stakes to Stake Pool"),(0,r.kt)("p",null,"Once stakes are active they can be pushed to the stake pool.  This operation can only be run my those who are fulfilling the  role of maintainer."),(0,r.kt)("h2",{id:"distributing-fees"},"Distributing Fees"),(0,r.kt)("p",null,"Fees are required to be distributed to fee payers.  This operation can only be run my those who are fulfilling the  role of maintainer."),(0,r.kt)("h2",{id:"increasing--decreasing-stake-associated-to-a-validator"},"Increasing / Decreasing stake associated to a validator"),(0,r.kt)("p",null,"Changing the stake associated to a validator, whether increasing or decreasing, is an operation that can only be performed by those fulfilling the role of maintainer."))}p.isMDXComponent=!0}}]);