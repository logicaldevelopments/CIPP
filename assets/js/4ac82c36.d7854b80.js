"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[8838],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?s.createElement(g,r(r({ref:t},u),{},{components:n})):s.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<a;l++)r[l]=n[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},393:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return f}});var s,i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(5108),c=["components"],l={id:"settings",title:"Settings",description:"View and amend the settings for your CIPP instance.",slug:"/usingcipp/settings/settings"},u=void 0,p={unversionedId:"usingcipp/settings/settings",id:"usingcipp/settings/settings",title:"Settings",description:"View and amend the settings for your CIPP instance.",source:"@site/docs/user/usingcipp/settings/settings.mdx",sourceDirName:"usingcipp/settings",slug:"/usingcipp/settings/settings",permalink:"/docs/user/usingcipp/settings/settings",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/settings/settings.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1647440981,formattedLastUpdatedAt:"16/03/2022",frontMatter:{id:"settings",title:"Settings",description:"View and amend the settings for your CIPP instance.",slug:"/usingcipp/settings/settings"},sidebar:"userSidebar",previous:{title:"Settings",permalink:"/docs/user/usingcipp/settings"},next:{title:"Backend Access",permalink:"/docs/user/usingcipp/settings/backendaccess"}},d={},m=[{value:"Details",id:"details",level:2},{value:"Permissions Settings",id:"permissions-settings",level:3},{value:"Tenant, Best Practice and Domain Analyser Cache",id:"tenant-best-practice-and-domain-analyser-cache",level:3},{value:"Tenant Access Check",id:"tenant-access-check",level:3},{value:"Domain Name System Resolver",id:"domain-name-system-resolver",level:3},{value:"Excluded Tenants",id:"excluded-tenants",level:3},{value:"Access backend",id:"access-backend",level:3},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],g=(s="NoKnownIssues",function(e){return o.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"From the Settings section of the menu you can find the Settings page where you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access diagnostic info"),(0,r.kt)("li",{parentName:"ul"},"Find helpful links to administrative tools"),(0,r.kt)("li",{parentName:"ul"},"Run access or permission checks"),(0,r.kt)("li",{parentName:"ul"},"Change configurable settings and more")),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("h3",{id:"permissions-settings"},"Permissions Settings"),(0,r.kt)("p",null,'You can use the "Run permissions check" button to check that your CIPP Azure AD Application has the correct permissions assigned. This now also performs a check of the correct MFA claims.'),(0,r.kt)("h3",{id:"tenant-best-practice-and-domain-analyser-cache"},"Tenant, Best Practice and Domain Analyser Cache"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Performance & Data")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Clearing this cache can severely impact performance of your CIPP instance and will also remove any personal settings such as the selected theme."))),(0,r.kt)("p",null,"You can clear the cached information used by the tenant selector, best practices analyser and domain analyser features."),(0,r.kt)("h3",{id:"tenant-access-check"},"Tenant Access Check"),(0,r.kt)("p",null,'You can check that the required access and configuration is in place for specific tenants using the tenant selector and "Run access check" button.'),(0,r.kt)("p",null,"If your tenant access checks are failing please see the ",(0,r.kt)("a",{parentName:"p",href:"/troubleshooting"},"Troubleshooting")," page for help."),(0,r.kt)("h3",{id:"domain-name-system-resolver"},"Domain Name System Resolver"),(0,r.kt)("p",null,"You can switch providers to either Google or Cloudflare for your domain analyser results."),(0,r.kt)("h3",{id:"excluded-tenants"},"Excluded Tenants"),(0,r.kt)("p",null,"You can add tenants to the excluded tenant list to prevent CIPP from taking any action on these tenants in addition to removing them from display."),(0,r.kt)("h3",{id:"access-backend"},"Access backend"),(0,r.kt)("p",null,"You can get the URLs to access backend features directly in the Azure AD portal from the Security tab."),(0,r.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,r.kt)(g,{mdxType:"NoKnownIssues"}))}f.isMDXComponent=!0}}]);