import{j as e}from"./jsx-runtime-94f6e698.js";import{r as f}from"./index-8db94870.js";import{c as y,I as g}from"./index-ba4924d9.js";const p=f.forwardRef((n,d)=>{const{disabled:s,size:u,icon:r,prepend:a,append:t,style:o,...l}=n,c=y("a-input-wrapper",{[`a-input-size-${u}`]:u,"a-is-disabled":s,"a-input-group":a||t,"a-input-group-append-wrapper":!!t,"a-input-group-prepend-wrapper":!!a}),m=i=>typeof i>"u"||i===null?"":i;return"value"in n&&(delete l.defaultValue,l.value=m(n.value)),e.jsxs("div",{className:c,style:o,children:[a&&e.jsx("div",{className:"a-input-group-prepend",children:a}),r&&e.jsx("div",{className:"a-icon-wrapper",children:e.jsx(g,{icon:r,title:`title-${r}`})}),e.jsx("input",{ref:d,className:"a-input-inner",disabled:s,...l}),t&&e.jsx("div",{className:"a-input-group-append",children:t})]})}),V=p;try{p.displayName="Input",p.__docgenInfo={description:"",displayName:"Input",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}try{input.displayName="input",input.__docgenInfo={description:"",displayName:"input",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}export{V as I};
//# sourceMappingURL=input-f62b4761.js.map
