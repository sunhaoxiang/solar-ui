import{j as a}from"./jsx-runtime-94f6e698.js";import{r as n}from"./index-8db94870.js";import{c as S,I as E}from"./index-ba4924d9.js";import{I as x}from"./input-f62b4761.js";import{T as z}from"./index-c2560314.js";import{u as B}from"./useClickOutside-d9e6f0b7.js";try{x.displayName="Input",x.__docgenInfo={description:"",displayName:"Input",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const O=n.createContext({selectedValues:[]}),V=t=>{const{defaultValue:r,placeholder:d,children:C,multiple:s,name:g,disabled:m,onChange:h,onVisibleChange:l}=t,o=n.useRef(null),u=n.useRef(null),c=n.useRef(0),[i,b]=n.useState(Array.isArray(r)?r:[]),[f,q]=n.useState(!1),[j,v]=n.useState(typeof r=="string"?r:""),N=(e,y)=>{s?v(""):(q(!1),v(e),l&&l(!1));let p=[e];s&&(p=y?i.filter($=>$!==e):[...i,e],b(p)),h&&h(e,p)};n.useEffect(()=>{o.current&&(o.current.focus(),s&&i.length>0?o.current.placeholder="":d&&(o.current.placeholder=d))},[i,s,d]),n.useEffect(()=>{u.current&&(c.current=u.current.getBoundingClientRect().width)}),B(u,()=>{q(!1),l&&f&&l(!1)});const I={onSelect:N,selectedValues:i,multiple:s},k=e=>{e.preventDefault(),m||(q(!f),l&&l(!f))},R=()=>n.Children.map(C,(e,y)=>{const p=e;if(p.type.displayName==="Option")return n.cloneElement(p,{index:`select-${y}`});console.error("Warning: Select has a child which is not a Option component")}),w=S("a-select",{"menu-is-open":f,"is-disabled":m,"is-multiple":s});return a.jsxs("div",{className:w,ref:u,children:[a.jsx("div",{className:"a-select-input",onClick:k,children:a.jsx(x,{ref:o,placeholder:d,value:j,readOnly:!0,icon:"angle-down",disabled:m,name:g})}),a.jsx(O.Provider,{value:I,children:a.jsx(z,{in:f,animation:"zoom-in-top",timeout:300,children:a.jsx("ul",{className:"a-select-dropdown",children:R()})})}),s&&a.jsx("div",{className:"a-selected-tags",style:{maxWidth:c.current-32},children:i.map((e,y)=>a.jsxs("span",{className:"a-tag",children:[e,a.jsx(E,{icon:"times",onClick:()=>{N(e,!0)}})]},`tag-${y}`))})]})};V.defaultProps={name:"a-select",placeholder:"请选择"};const J=V;try{V.displayName="Select",V.__docgenInfo={description:"",displayName:"Select",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | string[]"}},placeholder:{defaultValue:{value:"请选择"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"a-select"},description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((selectedValue: string, selectedValues: string[]) => void)"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}try{select.displayName="select",select.__docgenInfo={description:"",displayName:"select",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | string[]"}},placeholder:{defaultValue:{value:"请选择"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"a-select"},description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((selectedValue: string, selectedValues: string[]) => void)"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const _=({value:t,label:r,disabled:d,children:C,index:s})=>{const{onSelect:g,selectedValues:m,multiple:h}=n.useContext(O),l=m.includes(t),o=S("a-select-item",{"is-disabled":d,"is-selected":l}),u=(c,i,b)=>{c.preventDefault(),g&&!d&&g(i,b)};return a.jsxs("li",{className:o,onClick:c=>{u(c,t,l)},children:[C||r||t,h&&l&&a.jsx(E,{icon:"check"})]},s)};_.displayName="Option";const X=_;try{_.displayName="Option",_.__docgenInfo={description:"",displayName:"Option",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{X as O,J as S};
//# sourceMappingURL=option-e2d7fd08.js.map
