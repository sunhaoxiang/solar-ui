import{j as t}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{I as U,c as K}from"./index-ba4924d9.js";import{I as B}from"./input-f62b4761.js";import{T as H}from"./index-c2560314.js";import{u as L}from"./useClickOutside-d9e6f0b7.js";import{p as j}from"./storybook-utils-35978611.js";function Q(a,u=300){const[c,n]=l.useState(a);return l.useEffect(()=>{const r=window.setTimeout(()=>{n(a)},u);return()=>{clearTimeout(r)}},[a,u]),c}const A=a=>{const{value:u,fetchSuggestions:c,renderOption:n,onSelect:r,onChange:i,...s}=a,[o,d]=l.useState(u),[g,p]=l.useState([]),[q,x]=l.useState(!1),[G,h]=l.useState(!1),[f,D]=l.useState(-1),v=l.useRef(!1),T=l.useRef(null),V=Q(o);L(T,()=>{p([]),h(!1)}),l.useEffect(()=>{if(V&&v.current){p([]);const e=c(V);e instanceof Promise?(x(!0),e.then(m=>{x(!1),p(m),m.length>0&&h(!0)})):(p(e),e.length>0&&h(!0))}else p([]),h(!1);D(-1)},[V,c]);const N=e=>{e<0&&(e=0),e>=g.length&&(e=g.length-1),D(e)},M=e=>{switch(e.code){case"Enter":g[f]&&k(g[f]);break;case"ArrowUp":N(f-1);break;case"ArrowDown":N(f+1);break;case"Escape":p([]),h(!1);break}},z=e=>{const m=e.target.value.trim();d(m),i&&i(m),v.current=!0},k=e=>{d(e.value),p([]),h(!1),r&&r(e),v.current=!1},J=e=>n?n(e):e.value,X=()=>t.jsx(H,{in:G||q,animation:"zoom-in-top",timeout:300,onExited:()=>{p([])},children:t.jsxs("ul",{className:"a-suggestion-list",children:[q&&t.jsx("div",{className:"suggestion-loading-icon",children:t.jsx(U,{icon:"spinner",spin:!0})}),g.map((e,m)=>{const $=K("suggestion-item",{"is-active":m===f});return t.jsx("li",{className:$,onClick:()=>k(e),children:J(e)},m)})]})});return t.jsxs("div",{className:"a-auto-complete",ref:T,children:[t.jsx(B,{...s,value:o,onChange:z,onKeyDown:M}),X()]})},b=A;try{A.displayName="AutoComplete",A.__docgenInfo={description:"",displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<object>[] | Promise<DataSourceType<object>[]>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<object>) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceType<object>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:"",displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<object>[] | Promise<DataSourceType<object>[]>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<object>) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceType<object>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const Y={title:"Data Entry/AutoComplete",component:b,decorators:[a=>t.jsx("div",{style:{width:"350px",paddingBottom:"200px"},children:t.jsx(a,{})})]},Z=`
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'

const App = () => {
  const [value, setValue] = useState('')
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat)
  })
  const handleFetch = (query: string) => {
    return !query
      ? []
      : [mockVal(query), mockVal(query, 2), mockVal(query, 3)]
  }
  const handleSelect = (item: DataSourceType) => {
    setValue(item.value)
  }
  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      onSelect={handleSelect}
      placeholder="Simple AutoComplete"
    />
  )
}
`,S={render:a=>{const[u,c]=l.useState(""),n=(s,o=1)=>({value:s.repeat(o)}),r=s=>s?[n(s),n(s,2),n(s,3)]:[],i=s=>{c(s.value)};return t.jsx(b,{...a,value:u,fetchSuggestions:r,onSelect:i,placeholder:"Simple AutoComplete"})},parameters:j({code:Z})},ee=`
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'

const App = () => {
  const [value, setValue] = useState('')
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
    number: Math.floor(Math.random() * 1000)
  })
  const handleFetch = (query: string) => {
    return !query
      ? []
      : [mockVal(query), mockVal(query, 2), mockVal(query, 3)]
  }
  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<CustomProps>
    return (
      <>
        <b>Name: {itemWithNumber.value}</b>
        <span> - </span>
        <span>Number: {itemWithNumber.number}</span>
      </>
    )
  }

  const handleSelect = (item: DataSourceType) => {
    setValue(item.value)
  }

  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      placeholder="Custom AutoComplete"
      renderOption={renderOption}
      onSelect={handleSelect}
    />
  )
}
`,y={render:a=>{const[u,c]=l.useState(""),n=(o,d=1)=>({value:o.repeat(d),number:Math.floor(Math.random()*1e3)}),r=o=>o?[n(o),n(o,2),n(o,3)]:[],i=o=>{const d=o;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["Name: ",d.value]}),t.jsx("span",{children:" - "}),t.jsxs("span",{children:["Number: ",d.number]})]})},s=o=>{c(o.value)};return t.jsx(b,{...a,value:u,fetchSuggestions:r,placeholder:"Custom AutoComplete",renderOption:i,onSelect:s})},parameters:j({code:ee})},te=`
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'

const App = () => {
  const [value, setValue] = useState('')
  const handleFetch = (query: string) => {
    return fetch(\`https://api.github.com/search/users?q=\${query}\`)
      .then(res => res.json())
      .then(({ items }) => {
        return (
          items
            .slice(0, 10)
            .map((item: any) => ({ value: item.login, ...item }))
        )
      })
  }

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    )
  }
  
  const handleSelect = (item: DataSourceType) => {
    setValue(item.value)
  }

  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      placeholder="Ajax AutoComplete"
      renderOption={renderOption}
      onSelect={handleSelect}
    />
  )
}
`,C={render:a=>{const u=n=>fetch(`https://api.github.com/search/users?q=${n}`).then(r=>r.json()).then(({items:r})=>r.slice(0,10).map(i=>({value:i.login,...i}))),c=n=>{const r=n;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["Name: ",r.value]}),t.jsxs("span",{children:["url: ",r.url]})]})};return t.jsx(b,{...a,fetchSuggestions:u,placeholder:"Ajax AutoComplete",renderOption:c})},parameters:j({code:te})};var O,_,E;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const handleFetch = (query: string) => {
      return !query ? [] : [mockVal(query), mockVal(query, 2), mockVal(query, 3)];
    };
    const handleSelect = (item: DataSourceType) => {
      setValue(item.value);
    };
    return <AutoComplete {...args} value={value} fetchSuggestions={handleFetch} onSelect={handleSelect} placeholder="Simple AutoComplete" />;
  },
  parameters: parameters({
    code: simpleAutoCompleteCode
  })
}`,...(E=(_=S.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,w,W;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat),
      number: Math.floor(Math.random() * 1000)
    });
    const handleFetch = (query: string) => {
      return !query ? [] : [mockVal(query), mockVal(query, 2), mockVal(query, 3)];
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithNumber = (item as DataSourceType<CustomProps>);
      return <>
          <b>Name: {itemWithNumber.value}</b>
          <span> - </span>
          <span>Number: {itemWithNumber.number}</span>
        </>;
    };
    const handleSelect = (item: DataSourceType) => {
      setValue(item.value);
    };
    return <AutoComplete {...args} value={value} fetchSuggestions={handleFetch} placeholder="Custom AutoComplete" renderOption={renderOption} onSelect={handleSelect} />;
  },
  parameters: parameters({
    code: customAutoCompleteCode
  })
}`,...(W=(w=y.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var I,P,R;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const handleFetch = (query: string) => {
      return fetch(\`https://api.github.com/search/users?q=\${query}\`).then(res => res.json()).then(({
        items
      }) => {
        return items.slice(0, 10)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((item: any) => ({
          value: item.login,
          ...item
        }));
      });
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithGithub = (item as DataSourceType<GithubUserProps>);
      return <>
          <b>Name: {itemWithGithub.value}</b>
          <span>url: {itemWithGithub.url}</span>
        </>;
    };
    return <AutoComplete {...args} fetchSuggestions={handleFetch} placeholder="Ajax AutoComplete" renderOption={renderOption} />;
  },
  parameters: parameters({
    code: ajaxAutoCompleteCode
  })
}`,...(R=(P=C.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const ne=["SimpleAutoComplete","CustomAutoComplete","AjaxAutoComplete"],ie=Object.freeze(Object.defineProperty({__proto__:null,AjaxAutoComplete:C,CustomAutoComplete:y,SimpleAutoComplete:S,__namedExportsOrder:ne,default:Y},Symbol.toStringTag,{value:"Module"}));export{ie as A};
//# sourceMappingURL=autoComplete.stories-d303c8fe.js.map
