"use strict";(self.webpackChunklogos_docusaurus_docs_template=self.webpackChunklogos_docusaurus_docs_template||[]).push([[918],{78375:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbsBase=void 0;const l=a(70655),n=a(31665),o=l.__importDefault(a(88746)),r=a(4452),d=a(93945),s=a(18279),i=a(11614),u=l.__importDefault(a(86010)),c=l.__importDefault(a(67294)),m=l.__importDefault(a(37921));function f(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?c.default.createElement(n.Typography,{variant:"body3",component:"span",className:r,itemProp:"name"},t):a?c.default.createElement(o.default,{className:r,href:a,itemProp:"item"},c.default.createElement(n.Typography,{variant:"body3",component:"span",itemProp:"name"},t)):c.default.createElement(n.Typography,{variant:"body3",component:"span",className:r},t)}function p(e){let{children:t,active:a,index:l,addMicrodata:n}=e;return c.default.createElement("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.default)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,c.default.createElement("meta",{itemProp:"position",content:String(l+1)}))}t.BreadcrumbsBase=e=>{let{homePage:t,homePageLink:a,breadcrumbs:l}=e;if(!l)return null;const r=["events"];return c.default.createElement("nav",{className:(0,u.default)(d.ThemeClassNames.docs.docBreadcrumbs,m.default.breadcrumbsContainer),"aria-label":(0,i.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},c.default.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},!!t&&c.default.createElement(o.default,{to:a,className:(0,u.default)("breadcrumbs__item")},c.default.createElement(n.Typography,{variant:"body3",component:"span"},t)),l.map(((e,t)=>{const a=t===l.length-1,n=r.includes(e.label);return c.default.createElement(p,{key:t,active:a,index:t,addMicrodata:!!e.href},n?c.default.createElement(o.default,{to:`/${e.label}`},c.default.createElement(f,{href:e.href,isLast:a},e.label)):c.default.createElement(f,{href:e.href,isLast:a},e.label))}))))},t.default=function(){const e=(0,s.useSidebarBreadcrumbs)(),a=(0,s.useHomePageRoute)(),l=(0,r.useActivePlugin)();if(!e)return null;const n=null==l?void 0:l.pluginData.path;return c.default.createElement(t.BreadcrumbsBase,{homePage:a&&(0,i.translate)({id:"theme.docs.breadcrumbs.homePageLabel",message:"Home"}),breadcrumbs:e,homePageLink:n})}},81768:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),r=a(93945),d=a(18279),s=l.__importDefault(a(16927)),i=l.__importDefault(a(99276));t.default=function(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=(0,d.useDoc)();return t.hide_title||void 0!==a?null:e.title}();return n.default.createElement("div",{className:(0,o.default)(r.ThemeClassNames.docs.docMarkdown,"markdown")},a&&n.default.createElement("header",null,n.default.createElement(i.default,{as:"h1"},a)),n.default.createElement(s.default,null,t))}},72103:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDocTOC=void 0;const l=a(70655),n=a(93945),o=a(18279),r=l.__importDefault(a(78375)),d=l.__importDefault(a(81768)),s=l.__importDefault(a(70331)),i=l.__importDefault(a(4316)),u=l.__importDefault(a(80578)),c=l.__importDefault(a(37721)),m=l.__importDefault(a(74054)),f=l.__importDefault(a(18554)),p=l.__importDefault(a(86010)),_=l.__importDefault(a(67294)),b=a(89164),g=a(11679),v=l.__importDefault(a(22221));function h(){const{frontMatter:e,toc:t}=(0,o.useDoc)(),a=(0,n.useWindowSize)(),l=(0,b.useMedia)("(min-width: 1200px)"),r=e.hide_table_of_contents,d=!r&&t.length>0;return{hidden:r,mobile:d?_.default.createElement("div",{className:v.default.tocMobile},_.default.createElement(c.default,null)):void 0,desktop:d&&(l||"ssr"===a)?_.default.createElement(u.default,null):void 0}}t.useDocTOC=h,t.default=function(e){let{children:t}=e;const a=h();return _.default.createElement("div",{className:(0,p.default)("row",v.default.docItemGrid)},_.default.createElement("div",{className:(0,p.default)(v.default.docItemCol)},_.default.createElement(f.default,null),_.default.createElement("div",{className:v.default.docItemContainer},_.default.createElement("article",null,_.default.createElement(r.default,null),_.default.createElement(m.default,null),_.default.createElement(g.MDXEnhancementContext.Provider,{value:{items:[{component:"heading",position:"after",render:e=>"h1"===e.as&&a.mobile}]}},_.default.createElement(d.default,null,t)),_.default.createElement(s.default,null)),_.default.createElement(i.default,null))),_.default.createElement("div",{className:v.default.gap1}),a.desktop&&_.default.createElement("div",{className:(0,p.default)(v.default.toc)},a.desktop))}},59047:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=l.__importDefault(a(67294)),o=a(93945),r=a(18279),d=l.__importDefault(a(80900)),s=l.__importDefault(a(72103));t.default=function(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.default.createElement(r.DocProvider,{content:e.content},n.default.createElement(o.HtmlClassNameProvider,{className:t},n.default.createElement(d.default,null),n.default.createElement(s.default,null,n.default.createElement(a,null))))}},74054:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),r=l.__importDefault(a(11614)),d=a(93945),s=a(18279),i=l.__importDefault(a(22420)),u=a(31665);t.default=function(e){let{className:t}=e;const a=(0,s.useDocsVersion)();return a.badge?n.default.createElement("span",{className:(0,o.default)(t,d.ThemeClassNames.docs.docVersionBadge,"badge badge--secondary",i.default.badge)},n.default.createElement(u.Typography,{variant:"body3"},n.default.createElement(r.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}"))):null}},45039:(e,t,a)=>{const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(11614)),r=a(93945),d=a(6980),s=a(31665);t.Z=function(e){let{editUrl:t}=e;return n.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.ThemeClassNames.common.editThisPage},n.default.createElement(d.IconEdit,null),n.default.createElement(s.Typography,{variant:"body2"},n.default.createElement(o.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")))}},79255:(e,t,a)=>{const l=a(70655),n=a(31665),o=l.__importDefault(a(88746)),r=a(6980),d=l.__importDefault(a(86010)),s=l.__importDefault(a(67294));t.Z=function(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return s.default.createElement(o.default,{className:(0,d.default)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i?null:s.default.createElement(r.IconArrowLeft,null),s.default.createElement(n.Typography,{variant:"body2",className:"pagination-nav__label"},a),i?s.default.createElement(r.IconArrowRight,null):null)}},20079:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=a(31665),o=l.__importDefault(a(11614)),r=l.__importDefault(a(86010)),d=l.__importDefault(a(67294)),s=l.__importDefault(a(47834));t.default=function(e){let{collapsed:t,...a}=e;return d.default.createElement("button",{type:"button",...a,className:(0,r.default)("clean-btn",s.default.tocCollapsibleButton,!t&&s.default.tocCollapsibleButtonExpanded,a.className)},d.default.createElement("div",null),d.default.createElement(n.Typography,{variant:"body2"},d.default.createElement(o.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),t?d.default.createElement(n.ChevronDownIcon,null):d.default.createElement(n.ChevronUpIcon,null))}},80466:(e,t,a)=>{const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),r=a(93945),d=l.__importDefault(a(1014)),s=l.__importDefault(a(20079)),i=l.__importDefault(a(2530));t.Z=function(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:u}=e;const{collapsed:c,toggleCollapsed:m}=(0,r.useCollapsible)({initialState:!0});return n.default.createElement("div",{className:(0,o.default)(i.default.tocCollapsible,!c&&i.default.tocCollapsibleExpanded,a)},n.default.createElement(s.default,{collapsed:c,onClick:m}),n.default.createElement(r.Collapsible,{lazy:!0,className:i.default.tocCollapsibleContent,collapsed:c},n.default.createElement(d.default,{toc:t,minHeadingLevel:l,maxHeadingLevel:u})))}},1842:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),r=l.__importDefault(a(88746)),d=l.__importDefault(a(65507)),s=a(31665);t.default=function(e){let{permalink:t,label:a,count:l}=e;return n.default.createElement(r.default,{href:t,className:(0,o.default)(l?d.default.tagWithCount:d.default.tagRegular)},n.default.createElement(s.Tag,{disabled:!1,size:"small"},a,l&&n.default.createElement("span",null,l)))}},18189:(e,t,a)=>{const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),r=l.__importDefault(a(11614)),d=l.__importDefault(a(1842)),s=l.__importDefault(a(53867)),i=a(31665);t.Z=function(e){let{tags:t}=e;return n.default.createElement("div",{className:s.default.root},n.default.createElement(i.Typography,{variant:"body2",component:"div"},n.default.createElement(r.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.default.createElement("ul",{className:(0,o.default)(s.default.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.default.createElement("li",{key:a,className:s.default.tag},n.default.createElement(d.default,{label:t,permalink:a}))}))))}},70331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(67294),n=a(86010),o=a(18015),r=a(2791),d=a(11614);function s(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return l.createElement(d.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l.createElement("b",null,l.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function i(e){let{lastUpdatedBy:t}=e;return l.createElement(d.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l.createElement("b",null,t)}}," by {user}")}function u(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:n}=e;return l.createElement("span",{className:o.k.common.lastUpdated},l.createElement(d.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?l.createElement(s,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?l.createElement(i,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var c=a(45039),m=a(18189);const f="lastUpdated_vwxv";function p(e){return l.createElement("div",{className:(0,n.default)(o.k.docs.docFooterTagsRow,"row margin-bottom--sm")},l.createElement("div",{className:"col"},l.createElement(m.Z,e)))}function _(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:d}=e;return l.createElement("div",{className:(0,n.default)(o.k.docs.docFooterEditMetaRow,"row")},l.createElement("div",{className:"col"},t&&l.createElement(c.Z,{editUrl:t})),l.createElement("div",{className:(0,n.default)("col",f)},(a||r)&&l.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:d,lastUpdatedBy:r})))}function b(){const{metadata:e}=(0,r.k)(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:d,lastUpdatedBy:s,tags:i}=e,u=i.length>0,c=!!(t||a||s);return u||c?l.createElement("footer",{className:(0,n.default)(o.k.docs.docFooter,"docusaurus-mt-lg")},u&&l.createElement(p,{tags:i}),c&&l.createElement(_,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:d})):null}},80900:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(67294),n=a(44873),o=a(2791);function r(){const{metadata:e,frontMatter:t,assets:a}=(0,o.k)();return l.createElement(n.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}},4316:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(67294),n=a(2791),o=a(87462),r=a(11614),d=a(79255);function s(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(d.Z,(0,o.Z)({},t,{subLabel:l.createElement(r.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(d.Z,(0,o.Z)({},a,{subLabel:l.createElement(r.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function i(){const{metadata:e}=(0,n.k)();return l.createElement(s,{previous:e.previous,next:e.next})}},80578:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),n=a(18015),o=a(2791),r=a(95967);function d(){const{toc:e,frontMatter:t}=(0,o.k)();return l.createElement(r.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:n.k.docs.docTocDesktop})}},37721:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(67294),n=a(86010),o=a(18015),r=a(2791),d=a(80466);const s="tocMobile_ITEo";function i(){const{toc:e,frontMatter:t}=(0,r.k)();return l.createElement(d.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,n.default)(o.k.docs.docTocMobile,s)})}},18554:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(67294),n=a(86010),o=a(6832),r=a(88746),d=a(11614),s=a(4452),i=a(18015),u=a(4049),c=a(6141);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return l.createElement(d.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:l.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return l.createElement(d.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:l.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function f(e){const t=m[e.versionMetadata.banner];return l.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:n}=e;return l.createElement(d.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:l.createElement("b",null,l.createElement(r.default,{to:a,onClick:n},l.createElement(d.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,o.default)(),{pluginId:d}=(0,s.useActivePlugin)({failfast:!0}),{savePreferredVersionName:c}=(0,u.J)(d),{latestDocSuggestion:m,latestVersionSuggestion:_}=(0,s.useDocVersionSuggestions)(d),b=m??(g=_).docs.find((e=>e.id===g.mainDocId));var g;return l.createElement("div",{className:(0,n.default)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},l.createElement("div",null,l.createElement(f,{siteTitle:r,versionMetadata:a})),l.createElement("div",{className:"margin-top--md"},l.createElement(p,{versionLabel:_.label,to:b.path,onClick:()=>c(_.name)})))}function b(e){let{className:t}=e;const a=(0,c.E)();return a.banner?l.createElement(_,{className:t,versionMetadata:a}):null}},22221:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={docItemContainer:"docItemContainer_hrrU",docItemGrid:"docItemGrid_SzoZ",gap1:"gap1_XuuQ",toc:"toc_pP_5",tocMobile:"tocMobile_imaF",docItemCol:"docItemCol_F52z"}},22420:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={badge:"badge_AsjZ"}},37921:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={breadcrumbsContainer:"breadcrumbsContainer_RLvU"}},47834:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={tocCollapsibleButton:"tocCollapsibleButton_dxRj",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_TSyC"}},2530:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={tocCollapsible:"tocCollapsible_ROek",tocCollapsibleContent:"tocCollapsibleContent_Qsjj",tocCollapsibleExpanded:"tocCollapsibleExpanded_zTjk"}},65507:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={tag:"tag_dtsN",tagRegular:"tagRegular_SGIC",tagWithCount:"tagWithCount_gIvh"}},53867:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={root:"root_UH70",tags:"tags_LT8x",tag:"tag_NdBD"}}}]);