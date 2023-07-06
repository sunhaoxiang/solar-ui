import{j as s}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{c as g,I as V}from"./index-ba4924d9.js";import{T as C}from"./index-c2560314.js";const b=u.createContext({index:"0"}),M=n=>{const{defaultIndex:e,defaultOpenSubMenus:o,className:a,mode:i,style:c,onSelect:l,children:m}=n,[r,p]=u.useState(e),N=g("a-menu",a,{"a-menu-vertical":i==="vertical","a-menu-horizontal":i!=="vertical"}),f={index:r||"0",defaultOpenSubMenus:o,mode:i,onSelect:d=>{p(d),l&&l(d)}},y=()=>u.Children.map(m,d=>{const h=d,{displayName:v}=h.type;if(v==="MenuItem"||v==="SubMenu")return h;console.error("Warning: Menu has a child which is not a MenuItem component")});return s.jsx("ul",{className:N,style:c,role:"menu",children:s.jsx(b.Provider,{value:f,children:y()})})};M.defaultProps={defaultIndex:"0",defaultOpenSubMenus:[],mode:"horizontal"};const E=M;try{M.displayName="Menu",M.__docgenInfo={description:"",displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"string"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}}}}}catch{}try{menu.displayName="menu",menu.__docgenInfo={description:"",displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"string"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}}}}}catch{}const S=n=>{const e=u.useContext(b),o=e.defaultOpenSubMenus,{index:a,title:i,className:c,children:l}=n,m=a&&e.mode==="vertical"?o.includes(a):!1,[r,p]=u.useState(m),N=g("a-menu-item a-submenu-item",c,{"is-active":e.index===a,"is-opened":r,"is-vertical":e.mode==="vertical"}),I=t=>{t.preventDefault(),p(!r)};let f;const y=(t,x)=>{clearTimeout(f),t.preventDefault(),f=setTimeout(()=>{p(x)},300)},d=e.mode==="vertical"?{onClick:I}:{},h=e.mode!=="vertical"?{onMouseEnter:t=>{y(t,!0)},onMouseLeave:t=>{y(t,!1)}}:{},v=()=>u.Children.map(l,t=>{const x=t,{displayName:q}=x.type;if(q==="MenuItem")return x;console.error("Warning: SubMenu has a child which is not a MenuItem component")});return s.jsxs("li",{className:N,...h,children:[s.jsxs("div",{className:"a-submenu-title",...d,children:[i,s.jsx(V,{icon:"angle-down",className:"arrow-icon"})]}),s.jsx(C,{in:r,timeout:300,animation:"zoom-in-top",children:s.jsx("ul",{className:"a-submenu",children:v()})})]},a)};S.displayName="SubMenu";const P=S;try{S.displayName="SubMenu",S.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=n=>{const{index:e,disabled:o,className:a,style:i,children:c}=n,l=u.useContext(b),m=g("a-menu-item",a,{"is-disabled":o,"is-active":l.index===e}),r=()=>{l.onSelect&&!o&&l.onSelect(e)};return s.jsx("li",{className:m,style:i,onClick:r,children:c})};_.displayName="MenuItem";const w=_;try{_.displayName="MenuItem",_.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{w as M,P as S,E as a};
//# sourceMappingURL=menuItem-3d1e0681.js.map
