import{r as a,j as t,ac as r}from"./index-60ac2a92.js";function g({id:o,checked:s,disabled:c,onChange:e}){const[l,u]=a.useState(!!s),p=a.useRef(!!s);a.useEffect(()=>{p.current!==s&&u(!!s),p.current=!!s},[s]);const f=a.useCallback(n=>{c||(u(n),e&&e(n))},[c,e]);return t.jsxs("label",{className:r.toggle2,children:[t.jsx("input",{className:r.input,id:o,type:"checkbox",onChange:n=>f(n.target.checked),checked:l,disabled:c}),t.jsx("span",{className:r.track})]})}const x="_select_13zm8_1",m={select:x};function i({options:o,selected:s,onChange:c}){return t.jsx("select",{className:m.select,value:s,onChange:c,children:o.map(([e,l])=>t.jsx("option",{value:e,children:l},e))})}export{i as S,g as T};
