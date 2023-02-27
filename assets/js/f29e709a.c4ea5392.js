"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={slug:"2023-day27",title:"27. \ud83d\ude80API Management & Power Platform",authors:["julia"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power-platform","custom-connector","api-management","apim","authn","authentication","authorization"],image:"https://microsoft.github.io/Low-Code/img/og/30-27.png",description:"Introducing Authorizations in Azure API Management and showcasing its capabilities together with the Microsoft Power Platform. - join us at #30DaysOfLowCode and #LowCodeFebruary https://aka.ms/lowcode-february.",tags:["low-code-february","30-days-of-lowcode","zero-to-hero","fusion-teams","power-platform","API Management"]},i=void 0,s={permalink:"/Low-Code/blog/2023-day27",source:"@site/blog/2023-lcf/2023-02-27/index.md",title:"27. \ud83d\ude80API Management & Power Platform",description:"Introducing Authorizations in Azure API Management and showcasing its capabilities together with the Microsoft Power Platform. - join us at #30DaysOfLowCode and #LowCodeFebruary https://aka.ms/lowcode-february.",date:"2023-02-27T00:00:00.000Z",formattedDate:"February 27, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"zero-to-hero",permalink:"/Low-Code/blog/tags/zero-to-hero"},{label:"fusion-teams",permalink:"/Low-Code/blog/tags/fusion-teams"},{label:"power-platform",permalink:"/Low-Code/blog/tags/power-platform"},{label:"API Management",permalink:"/Low-Code/blog/tags/api-management"}],readingTime:7.725,hasTruncateMarker:!1,authors:[{name:"Julia Kasper",title:"Program Manager II",url:"https://github.com/juliajuju93",imageURL:"https://github.com/juliajuju93.png",key:"julia"}],frontMatter:{slug:"2023-day27",title:"27. \ud83d\ude80API Management & Power Platform",authors:["julia"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power-platform","custom-connector","api-management","apim","authn","authentication","authorization"],image:"https://microsoft.github.io/Low-Code/img/og/30-27.png",description:"Introducing Authorizations in Azure API Management and showcasing its capabilities together with the Microsoft Power Platform. - join us at #30DaysOfLowCode and #LowCodeFebruary https://aka.ms/lowcode-february.",tags:["low-code-february","30-days-of-lowcode","zero-to-hero","fusion-teams","power-platform","API Management"]},nextItem:{title:"26. Recap - Dev Experience Week \u2728",permalink:"/Low-Code/blog/2023-day26"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is API Management Authorizations",id:"what-is-api-management-authorizations",level:2},{value:"Scenario - Power Apps integration with GitHub and API Management Authorizations",id:"scenario---power-apps-integration-with-github-and-api-management-authorizations",level:2},{value:"Scenario Overview",id:"scenario-overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Register an application in GitHub for your organization",id:"step-1-register-an-application-in-github-for-your-organization",level:3},{value:"Step 2: Configure an authorization in API Management",id:"step-2-configure-an-authorization-in-api-management",level:3},{value:"Step 3: Create an API in API Management and configure a policy",id:"step-3-create-an-api-in-api-management-and-configure-a-policy",level:3},{value:"Step 4: Create a custom connector for the Microsoft Power Platform using API Management",id:"step-4-create-a-custom-connector-for-the-microsoft-power-platform-using-api-management",level:3},{value:"Step 5: Call your web API via your Power App",id:"step-5-call-your-web-api-via-your-power-app",level:3}],m={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/img/og/30-27.png"}),(0,r.kt)("meta",{name:"twitter:title",content:"27. API Managemetn and Power Platform"}),(0,r.kt)("meta",{name:"twitter:description",content:"Introducing Authorizations in Azure API Management and showcasing its capabilities together with the Microsoft Power Platform. - join us at #30DaysOfLowCode and #LowCodeFebruary https://aka.ms/lowcode-february."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-27.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@Jujujuliakasper"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/img/og/30-27.png"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 27")," of #30DaysOfLowCode!"),(0,r.kt)("p",null,"Introducing ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/api-management/authorizations-overview?WT.mc_id=javascript-82212-ninarasi"},"Authorizations")," in Azure API Management and showcasing its capabilities together with the Microsoft Power Platform. Last time, we talked about how we can provide extra ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/Low-Code/blog/2023-day10"},"security to our web APIs using Azure API Management"),". In this section, we will talk about the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/api-management/authorizations-overview?WT.mc_id=javascript-82212-ninarasi"},"Authorizations")," feature in Azure API Management and how this can elevate your low-code journey with web APIs."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-api-management-authorizations"},"What is API Management Authorizations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scenario---power-apps-integration-with-github-and-api-management-authorizations"},"Scenario - Power Apps integration with GitHub and API Management Authorizations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scenario-overview"},"Scenario Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-1-register-an-application-in-github-for-your-organization"},"Step 1: Register an application in GitHub for your organization")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-2-configure-an-authorization-in-api-management"},"Step 2: Configure an authorization in API Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-3-create-an-api-in-api-management-and-configure-a-policy"},"Step 3: Create an API in API Management and configure a policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-4-create-a-custom-connector-for-the-microsoft-power-platform-using-api-management"},"Step 4: Create a custom connector for the Microsoft Power Platform using API Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-5-call-your-web-api-via-your-power-app"},"Step 5: Call your web API via your Power App"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"feb27",src:a(84326).Z,width:"1334",height:"560"})),(0,r.kt)("h2",{id:"what-is-api-management-authorizations"},"What is API Management Authorizations"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/api-management/authorizations-overview"},"API Management authorizations")," allows you to delegate authentication to API Management to let it authenticate against a given backend service or a given SaaS platform. It greatly simplifies the process for authenticating and authorizing users across these services and reduces development costs in ramping up, implementing and maintaining security features with service integrations. It lets you configure OAuth, Consent, Acquire Tokens, Cache Tokens and refreshes tokens for multiple services without writing a single line of code. API Management does all the heavy lifting for you, while you can focus on the application/domain logic."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note: It differs from managed identity in that it spans multiple identity providers (IDP), as it is not tight to Azure Active Directory. It also leverages OAuth flows, such as the Authorization code flow, while managed identities stick to the Client Credentials Grant."))),(0,r.kt)("h2",{id:"scenario---power-apps-integration-with-github-and-api-management-authorizations"},"Scenario - Power Apps integration with GitHub and API Management Authorizations"),(0,r.kt)("h3",{id:"scenario-overview"},"Scenario Overview"),(0,r.kt)("p",null,"Imagine having a GitHub organization with multiple ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/organizations/collaborating-with-your-team/about-team-discussions"},"team discussions"),". In one of your team discussions, you want to collect issues from users via comments. Now, to post a GitHub comment, every user requires a GitHub account and needs to understand where to find the relevant team discussion."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Let's create a Power App that uses a custom connector to call the right GitHub API to post a comment about an issues to a team's discussion.")),(0,r.kt)("p",null,"Note: Microsoft Power Platform offers wide varity of pre-installed connectors, one of them for ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/connectors/github/"},"GitHub"),". For our scenarios however, this connector doesn't provide us with the right capability. Creating a custom connector using Azure API Management is an easy and secure way to expose your microservices/APIs directly. This way, you can expand the possibilities with the Microsoft Power Platform and adapt it according to your organization's use cases."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A GitHub account is required."),(0,r.kt)("li",{parentName:"ul"},"A team discussion in your GitHub organization. Follow ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/organizations/collaborating-with-your-team/creating-a-team-discussion"},"Creating a team discussion")," for more information."),(0,r.kt)("li",{parentName:"ul"},"A running API Management instance. Complete the following\xa0",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/api-management/get-started-create-service-instance"},"Quickstart: Create a new Azure API Management service instance by using the Azure portal"),"."),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-use-managed-service-identity"},"managed service identiy")," for API Management in the API Management instance."),(0,r.kt)("li",{parentName:"ul"},"Make sure you have a Power Apps or Power Automate ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/power-apps/powerapps-overview#power-apps-for-developers"},"environment"),".")),(0,r.kt)("h3",{id:"step-1-register-an-application-in-github-for-your-organization"},"Step 1: Register an application in GitHub for your organization"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to GitHub.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your account profile, go to ",(0,r.kt)("strong",{parentName:"p"},"Your organizations")," and select the organization that the scenario is for."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"feb27",src:a(26590).Z,width:"874",height:"2023"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your organization's profile, go to\xa0",(0,r.kt)("strong",{parentName:"p"},"Settings > Developer Settings > OAuth Apps > New OAuth App")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("em",{parentName:"li"},"teamdiscussion")," as your ",(0,r.kt)("strong",{parentName:"li"},"Application name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://portal.azure.com"},"https://portal.azure.com"))," as your ",(0,r.kt)("strong",{parentName:"li"},"Homepage URL")),(0,r.kt)("li",{parentName:"ul"},"Optionally, add an\xa0application description."),(0,r.kt)("li",{parentName:"ul"},"In\xa0",(0,r.kt)("strong",{parentName:"li"},"Authorization callback URL"),"\xa0(the redirect URL), enter ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://authorization-manager.consent.azure-apim.net/redirect/apim/%7BYOUR-APIM-SERVICENAME%7D"},"https://authorization-manager.consent.azure-apim.net/redirect/apim/{YOUR-APIM-SERVICENAME}"))," (substituting the API Management service name that is used).")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select\xa0",(0,r.kt)("strong",{parentName:"p"},"Register application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the\xa0General\xa0page, copy the\xa0",(0,r.kt)("strong",{parentName:"p"},"Client ID"),", which you'll use in a later step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select\xa0",(0,r.kt)("strong",{parentName:"p"},"Generate a new client secret"),". Copy the secret, which won't be displayed again, and which you'll use in a later step."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"feb27",src:a(58281).Z,width:"3540",height:"2319"})))),(0,r.kt)("h3",{id:"step-2-configure-an-authorization-in-api-management"},"Step 2: Configure an authorization in API Management"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign into Azure portal and go to your API Management instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left menu, select\xa0",(0,r.kt)("strong",{parentName:"p"},"Authorizations\xa0>\xa0+ Create"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"feb27",src:a(56397).Z,width:"1217",height:"636"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the\xa0",(0,r.kt)("strong",{parentName:"p"},"Create authorization\xa0window"),", enter the following settings, and select\xa0",(0,r.kt)("strong",{parentName:"p"},"Create"),":"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Provider name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"github-discussion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Identity provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Select\xa0",(0,r.kt)("em",{parentName:"td"},"GitHub"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grant type"),(0,r.kt)("td",{parentName:"tr",align:null},"Select\xa0",(0,r.kt)("em",{parentName:"td"},"Authorization code"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client id"),(0,r.kt)("td",{parentName:"tr",align:null},"Paste the value you copied earlier from the app registration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Paste the value you copied earlier from the app registration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scope"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"write:discussion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"auth-discussion")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the authorization provider and authorization are created, select\xa0",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the\xa0",(0,r.kt)("strong",{parentName:"p"},"Login\xa0tab"),", select\xa0",(0,r.kt)("strong",{parentName:"p"},"Login with GitHub"),". Before the authorization will work, it needs to be authorized at GitHub.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to your GitHub account if you're prompted to do so. If prompted during redirection, select\xa0",(0,r.kt)("strong",{parentName:"p"},"Allow access"),".\n",(0,r.kt)("img",{alt:"feb27",src:a(78941).Z,width:"1850",height:"1197"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After authorization, the browser is redirected to API Management and the window is closed. In API Management, select\xa0",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the\xa0Access policy\xa0page, create an access policy so that API Management has access to use the authorization. ",(0,r.kt)("em",{parentName:"p"},"Note: Ensure that a ",(0,r.kt)("a",{parentName:"em",href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-use-managed-service-identity#create-a-system-assigned-managed-identity"},"managed identity")," is configured for API Management."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select\xa0",(0,r.kt)("strong",{parentName:"p"},"Managed identity\xa0+ Add members"),"\xa0and then select your subscription.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In\xa0",(0,r.kt)("strong",{parentName:"p"},"Select managed identity"),", select\xa0",(0,r.kt)("strong",{parentName:"p"},"API Management service"),", and then select the API Management instance that is used. Click\xa0",(0,r.kt)("strong",{parentName:"p"},"Select"),"\xa0and then\xa0",(0,r.kt)("strong",{parentName:"p"},"Complete"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"feb27",src:a(66156).Z,width:"1247",height:"618"})))),(0,r.kt)("h3",{id:"step-3-create-an-api-in-api-management-and-configure-a-policy"},"Step 3: Create an API in API Management and configure a policy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign into Azure portal and go to your API Management instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left menu, select\xa0",(0,r.kt)("strong",{parentName:"p"},"APIs > + Add API")," and select ",(0,r.kt)("strong",{parentName:"p"},"HTTP"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"feb27",src:a(97816).Z,width:"3652",height:"2257"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following settings. Then select\xa0",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"githubdiscussion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"githubdiscussion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Web service URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://api.github.com"},"https://api.github.com")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API URL suffix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"githubdiscussion")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the newly created API and select\xa0",(0,r.kt)("strong",{parentName:"p"},"Add Operation"),". Enter the following settings and select\xa0",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"POSTdiscussioncomment"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL for ",(0,r.kt)("strong",{parentName:"td"},"POST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"))))))),(0,r.kt)("p",null,"Please find here an example of a POST URL: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/orgs/AuthorizationsOrganization/teams/AuthorizationEngineering/discussions/1/comments\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"feb27",src:a(918).Z,width:"4152",height:"1807"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, we need to add a ",(0,r.kt)("strong",{parentName:"p"},"Request Body")," to your API. For this, within your Frontend section scroll down and select ",(0,r.kt)("strong",{parentName:"p"},"Request"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"feb27",src:a(45858).Z,width:"4142",height:"1801"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now ",(0,r.kt)("strong",{parentName:"p"},"Add representation")," and insert the following information:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Representations"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CONTENT TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DEFINITION"),(0,r.kt)("td",{parentName:"tr",align:null},'{"body":"This is a test issue"}')))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"feb27",src:a(95883).Z,width:"3136",height:"1501"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"All operations")," and in the\xa0",(0,r.kt)("strong",{parentName:"p"},"Inbound processing"),"\xa0section, select the ",(0,r.kt)("inlineCode",{parentName:"p"},"(</>)")," (code editor) icon.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the following, and paste in the policy editor. Make sure the provider-id and authorization-id correspond to the names in our previous step. Select\xa0",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("p",null,"Inbound policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<policies>\n    <inbound>\n        <base />\n        <get-authorization-context provider-id="github-discussion" authorization-id="auth-discussion" context-variable-name="auth-context" identity-type="managed" ignore-error="false" />\n        <set-header name="Authorization" exists-action="override">\n            <value>@("Bearer " + ((Authorization)context.Variables.GetValueOrDefault("auth-context"))?.AccessToken)</value>\n        </set-header>\n        <set-header name="Accept" exists-action="override">\n            <value>application/vnd.github+json</value>\n        </set-header>\n        <set-header name="X-GitHub-Api-Version" exists-action="override">\n            <value>2022-11-28</value>\n        </set-header>\n        <set-header name="User-Agent" exists-action="override">\n            <value>API Management</value>\n        </set-header>\n    </inbound>\n    <backend>\n        <base />\n    </backend>\n    <outbound>\n        <base />\n    </outbound>\n    <on-error>\n        <base />\n    </on-error>\n</policies>\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The policy to be used consists of five parts."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"1. Fetch an authorization token.\n2. Create an HTTP header with the fetched authorization token.\n3. Create an HTTP header with an accept header [(API requirement)](https://docs.github.com/en/rest/teams/discussion-comments?apiVersion=2022-11-28#create-a-discussion-comment).\n4. Create an HTTP header with a X-GitHub-Api-Version header [(API requirement)](https://docs.github.com/en/rest/teams/discussion-comments?apiVersion=2022-11-28#create-a-discussion-comment).\n5. Create an HTTP header with a\xa0User-Agent\xa0header [(GitHub requirement)](https://docs.github.com/rest/overview/resources-in-the-rest-api#user-agent-required).\n"))),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Test the API in Azure API Management:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select your operation."),(0,r.kt)("li",{parentName:"ul"},"Go to the\xa0Test\xa0tab."),(0,r.kt)("li",{parentName:"ul"},"Select\xa0Send.")),(0,r.kt)("p",null,"You should get a ",(0,r.kt)("strong",{parentName:"p"},"HTTP/1.1 201 Created")," response and a comment should have been posted in your team's discussion."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"feb27",src:a(75833).Z,width:"3470",height:"1911"})),(0,r.kt)("h3",{id:"step-4-create-a-custom-connector-for-the-microsoft-power-platform-using-api-management"},"Step 4: Create a custom connector for the Microsoft Power Platform using API Management"),(0,r.kt)("p",null,"As soon as your API was tested successfully, you are now able to export your web API to the Microsoft Power Platform. Please find a detailed guide here: ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/api-management/export-api-power-platform"},"Export APIs from Azure API Management to the Power Platform"),".\nIf you want to add additional security to your API, check out our blog post on ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.com"},"10. Providing Power Platform custom connector with additional security via Azure API Management")),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"feb27",src:a(159).Z,width:"3025",height:"2291"})),(0,r.kt)("h3",{id:"step-5-call-your-web-api-via-your-power-app"},"Step 5: Call your web API via your Power App"),(0,r.kt)("p",null,"Next, we want to make an API call within your Power App. For this, we created a very simple Power App as our front-end with a ",(0,r.kt)("strong",{parentName:"p"},"Send")," Button and a ",(0,r.kt)("strong",{parentName:"p"},"TextInput")," field."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your Power App, add your custom connector to your Power App via the tab ",(0,r.kt)("strong",{parentName:"p"},"data > + Add data"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"feb27",src:a(56013).Z,width:"1677",height:"2259"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, we modify our ",(0,r.kt)("strong",{parentName:"p"},"Send")," Button with the following PowerFX formular:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'githubdiscussion.postdiscussioncomment({body:TextInputFeedback.Text}); Reset(TextInputFeedback); Notify("Success: 201 Created",NotificationType.Success)\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"powerappsinput",src:a(69868).Z,width:"3971",height:"1773"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Now, you are able to test your Power App and create a new comment in your GitHub team's discussion.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Enjoy this fun little tutorial and let us know what you think! ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/jukasper/"},"@jukasper"))))}u.isMDXComponent=!0},66156:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/accesspolicy-4c18a37d9595eb544b65daf33b419dfc.png"},97816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addapi-5638e6105cd44f8b422bacd5c4381ea0.png"},918:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addoperation-e8876236039bbb1a213dbc47325da5d1.png"},78941:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/allowaccess-9b85a0c416587117976bbe267716e53c.png"},56397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/authportal-0524f17569c382a5e8bddb5547b8a7e0.png"},159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createpower-c06b51552a8aa8f48d939d4037c0953b.png"},56013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/customconnectorpower-fd0c3bb897cde1e1311feb60ffb79a29.png"},26590:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/organization-2977eb3612ff11eee08f1ac4ce8f1e6c.png"},69868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/powerappsinput-0df6c0cdd028beaa33603424c87a7305.png"},95883:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/representation-310ea5ecb1de1ed30be5b7f3fc600bc8.png"},45858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/request-14c26d1fbe35ed10ee43b342f4f489cf.png"},58281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamdiscussion-eacad1d173d327416fc4a8d934d980cb.png"},75833:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/test-0a0ecc26dba34f3ad59d309195d11089.png"},84326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/30-27-c59d588b7a5514e6518adcbe834049e1.png"}}]);