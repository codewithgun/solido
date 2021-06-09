(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[503],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=l,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5983:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return r},toc:function(){return s},default:function(){return c}});var o=n(2122),l=n(9756),i=(n(7294),n(3905)),a={title:"localtestnet",description:"Notes for running a local testnet for Solido",keywords:["development","developers","lido","solido","solana","testnet"],sidebar_position:2},r={unversionedId:"Guides/Development/LocalTestNet",id:"Guides/Development/LocalTestNet",isDocsHomePage:!1,title:"Local TestNet",description:"Notes for running a local testnet for Solido",source:"@site/docs/Guides/Development/LocalTestNet.md",sourceDirName:"Guides/Development",slug:"/Guides/Development/LocalTestNet",permalink:"/solido/docs/Guides/Development/LocalTestNet",version:"current",sidebarPosition:2,frontMatter:{title:"localtestnet",description:"Notes for running a local testnet for Solido",keywords:["development","developers","lido","solido","solana","testnet"],sidebar_position:2},sidebar:"solidoSidebar",previous:{title:"Development Overview",permalink:"/solido/docs/Guides/Development/Development"},next:{title:"Buiding a Docker image locally",permalink:"/solido/docs/Guides/Development/BuildingDockerImage"}},s=[{value:"Running the local testnet",id:"running-the-local-testnet",children:[{value:"Running the local cluster",id:"running-the-local-cluster",children:[]},{value:"Interacting with the Solido/Solana pod",id:"interacting-with-the-solidosolana-pod",children:[]},{value:"Terminating the testnet",id:"terminating-the-testnet",children:[]}]}],u={toc:s};function c(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"running-the-local-testnet"},"Running the local testnet"),(0,i.kt)("p",null,"The Solido code base includes a simple way to spin up a local Solana test validator with the Solido build packaged alongside to ease testing on local machine.  The local testnet uses ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/explore.html"},"Nix")," to try to ensure consistent build and development environments.  To use the testnet, install Nix using the standard install ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/download.html"},"instructions")," which, at time of writing, just entails running the install script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://nixos.org/nix/install | sh\n")),(0,i.kt)("p",null,"Once Nix is installed you can then run 'nix-shell' in the root of the repository to get a shell with all components required to run the testnet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"rust toolchain")),(0,i.kt)("li",{parentName:"ul"},"libs required for the rust project",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"libudev"),(0,i.kt)("li",{parentName:"ul"},"hidapi"),(0,i.kt)("li",{parentName:"ul"},"pkg-config"),(0,i.kt)("li",{parentName:"ul"},"openssl"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/"},"minikube")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://k9scli.io/"},"k9s")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tilt.dev/"},"tilt"))),(0,i.kt)("h3",{id:"running-the-local-cluster"},"Running the local cluster"),(0,i.kt)("p",null,"Once you have a Nix shell with all the required dependencies you will be able to spin up a Solido image that starts a test validator.  Simply run the testnetup shell script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sh testnetup.sh start\n")),(0,i.kt)("p",null,"This will start up minikube, run a nix build of the cargo project and then use Tilt to package Solido and Solana into a container and spin up the test validator locally. Tilt makes a dashboard available locally to monitor and/or inspect the Solido/Solana deployment.  Additionally, there is an option to stream any logs in the shell."),(0,i.kt)("h3",{id:"interacting-with-the-solidosolana-pod"},"Interacting with the Solido/Solana pod"),(0,i.kt)("p",null,"To use any of the Solana SDK tools or deploy the Solido contract, you can execute into the pod using the minikube flavoured kubectl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"minikube kubectl exec ....\n")),(0,i.kt)("p",null,"A more efficient way is to use k9s that comes with the nix-shell. Spin up an additional nix shell from the root of the project and run the k9s binary."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"k9s",src:n(3632).Z})),(0,i.kt)("p",null,"This will allow you to see the solido namespace and pod.  Run a shell into the solido pod with the 's' command and you will be able to access the Solana SDK tools and interact with the running test validator."),(0,i.kt)("p",null,"When executing into the solido pod, the working directory will be the same as the Solana tools (unless otherwise specified). The artefacts from the Solido build will be in a subdirectory called 'solido'."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"solido_dir",src:n(3755).Z})),(0,i.kt)("h3",{id:"terminating-the-testnet"},"Terminating the testnet"),(0,i.kt)("p",null,"To exit the testnet, Ctrl+C to exit the terminal running tilt and then run the stop command in the testnet shell script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sh testnetup.sh stop\n")))}c.isMDXComponent=!0},3632:function(e,t,n){"use strict";t.Z=n.p+"assets/images/k9s_solido-230d2a28680f43af5f264282a02df5f7.png"},3755:function(e,t,n){"use strict";t.Z=n.p+"assets/images/soldio_dir-383344b99f155bf20b498a989546b4a2.png"}}]);