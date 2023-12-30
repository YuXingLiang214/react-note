import{r as a,u as r,j as e,N as d,O as u}from"./index-vZW9AskM.js";import{A as c,_ as i,u as v}from"./note-ZcGVbkYV.js";var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"}}]},name:"book",theme:"outlined"};const m=h;var f=function(t,n){return a.createElement(c,i({},t,{ref:n,icon:m}))};const x=a.forwardRef(f);var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const O=j;var N=function(t,n){return a.createElement(c,i({},t,{ref:n,icon:O}))};const g=a.forwardRef(N);var z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};const p=z;var w=function(t,n){return a.createElement(c,i({},t,{ref:n,icon:p}))};const H=a.forwardRef(w);var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const V=b;var E=function(t,n){return a.createElement(c,i({},t,{ref:n,icon:V}))};const D=a.forwardRef(E);var k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]},name:"file-add",theme:"outlined"};const B=k;var L=function(t,n){return a.createElement(c,i({},t,{ref:n,icon:B}))};const M=a.forwardRef(L),$=()=>{let s=+new Date;return()=>s++},A=$(),S=()=>({noteId:A(),noteTitle:"untitled",noteContent:"",isStar:!1,isTrash:!1}),R=()=>{const s=r(),{addNote:t,updateLatestId:n}=v(),o=a.useCallback(()=>{const l=S();t(l),n(l.noteId),s("/")},[t,s,n]);return e.jsxs("div",{className:"main",children:[e.jsxs("aside",{children:[e.jsx("div",{className:"empty-aside"}),e.jsxs("div",{className:"aside-container",children:[e.jsxs("div",{className:"btn-container",onClick:o,children:[e.jsx(M,{}),e.jsx("div",{className:"btn-font",children:"新笔记"})]}),e.jsx("div",{className:"menu-item",children:e.jsxs(d,{to:"/",end:!0,children:[e.jsx(D,{}),e.jsx("span",{className:"menu-font",children:"便笺"})]})}),e.jsx("div",{className:"menu-item",children:e.jsxs(d,{to:"/notes",end:!0,children:[e.jsx(g,{}),e.jsx("span",{className:"menu-font",children:"笔记"})]})}),e.jsx("div",{className:"menu-item",children:e.jsxs(d,{to:"/favorites",end:!0,children:[e.jsx(x,{}),e.jsx("span",{className:"menu-font",children:"收藏"})]})}),e.jsx("div",{className:"menu-item",children:e.jsxs(d,{to:"/trash",end:!0,children:[e.jsx(H,{}),e.jsx("span",{className:"menu-font",children:"回收站"})]})})]})]}),e.jsx("section",{children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(u,{})})})]})};export{R as default};
