(this.webpackJsonpexpences_note=this.webpackJsonpexpences_note||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),l=n.n(s),r=(n(14),n(9)),i=n(3),o=n(4),j=(n(15),n(2)),u=n(0);function d(e){var t=e.id,n=e.charge,c=e.amount,a=e.handleEdit,s=e.handleDelete;return Object(u.jsxs)("li",{className:"item",children:[Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("span",{className:"expense",children:n}),Object(u.jsxs)("span",{className:"amount",children:["$",c]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"edit-btn","aria-label":"edit button",onClick:function(){return a(t)},children:Object(u.jsx)(j.c,{})}),Object(u.jsx)("button",{className:"clear-btn","aria-label":"delete button",onClick:function(){return s(t)},children:Object(u.jsx)(j.a,{})})]})]})}function b(e){var t=e.expenses,n=e.handleClearList,c=e.handleEdit,a=e.handleDelete;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"list",children:t.map((function(e){return Object(u.jsx)(d,Object(i.a)(Object(i.a)({},e),{},{handleEdit:c,handleDelete:a}),e.id)}))}),t.length>0&&Object(u.jsxs)("button",{className:"btn",onClick:n,children:["clear all",Object(u.jsx)(j.b,{className:"btn-icon"})]})]})}function h(e){var t=e.charge,n=e.amount,c=e.handleCharge,a=e.handleAmount,s=e.handleSubmit,l=e.edit;return Object(u.jsxs)("form",{style:{padding:"1rem"},onSubmit:s,children:[Object(u.jsxs)("fieldset",{style:{border:"1px solid #ccc",marginBottom:"2rem"},className:"form-center",children:[Object(u.jsx)("legend",{children:"add expenses"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"charge",children:"charge"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"charge",name:"charge",value:t,onChange:c,placeholder:"e.g. shopping"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"amount",children:"amount"}),Object(u.jsx)("input",{type:"number",className:"form-control",id:"amount",name:"amount",value:n,onChange:a,placeholder:"e.g. 17"})]})]}),Object(u.jsxs)("button",{className:"btn",type:"submit",children:[l?"edit":"submit",Object(u.jsx)(j.d,{className:"btn-icon"})]})]})}var m=function(e){var t=e.type,n=e.text,c=e.show;return Object(u.jsx)("div",{className:"alert ".concat(c?"alert-"+t:""," "),children:n})};m.defaultProps={text:"This is Alert component",show:!1};var O=m,x=n(19),p=JSON.parse(localStorage.getItem("expenses"))||[];console.log(p);var f=function(){var e=Object(c.useState)(p),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),l=Object(o.a)(s,2),j=l[0],d=l[1],m=Object(c.useState)(""),f=Object(o.a)(m,2),g=f[0],v=f[1],N=Object(c.useState)({show:!1}),y=Object(o.a)(N,2),S=y[0],w=y[1],C=Object(c.useState)(!1),E=Object(o.a)(C,2),k=E[0],D=E[1],A=Object(c.useState)(0),F=Object(o.a)(A,2),I=F[0],J=F[1];Object(c.useEffect)((function(){console.log("this is useEffect"),localStorage.setItem("expenses",JSON.stringify(n))}),[n]);var B=function(e){var t=e.type,n=e.text;w({show:!0,type:t,text:n}),setTimeout((function(){w({show:!1})}),3e3)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,Object(i.a)({},S)),Object(u.jsx)("h1",{children:"budget calculator"}),Object(u.jsxs)("main",{className:"App",children:[Object(u.jsx)(h,{charge:j,amount:g,handleAmount:function(e){v(e.target.value)},handleCharge:function(e){d(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),j.trim()&&g>0){if(k){var t=n.map((function(e){return e.id===I?Object(i.a)(Object(i.a)({},e),{},{charge:j,amount:g}):e}));a(t),D(!1),B({show:!0,type:"success",text:"item was edited"})}else a([].concat(Object(r.a)(n),[{charge:j,amount:g,id:Object(x.a)()}])),B({type:"success",text:"item was added"});d(""),v("")}else B({type:"danger",text:"please fill the form"})},edit:k}),Object(u.jsx)(b,{expenses:n,handleClearList:function(){a([]),B({show:!0,type:"success",text:"list is clear"})},handleDelete:function(e){var t=n.filter((function(t){return t.id!==e}));a(t),B({show:!0,type:"success",text:"item was deleted"})},handleEdit:function(e){var t=n.find((function(t){return t.id===e})),c=t.charge,a=t.amount;d(c),v(a),D(!0),J(e)}})]}),Object(u.jsxs)("h1",{children:["total expenses:",Object(u.jsxs)("span",{className:"total",children:["$",n.reduce((function(e,t){return e+parseInt(t.amount)}),0)]})]})]})};l.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.443ced1d.chunk.js.map