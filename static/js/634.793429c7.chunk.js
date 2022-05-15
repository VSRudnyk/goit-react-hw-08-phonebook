"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[634],{634:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var i,t,a,s,d,o,l,c,u=r(7762),x=r(885),m=r(6140),h=r(375),Z=r(2791),p=r(1413),f=r(4259),j=r(1265),v=r(2292),b=r(8392),g=r(703),w=r(4554),P=r(1889),y=r(6167),C=r(890),k=r(3736),z=r(168),_=r(7939),q=_.ZP.div(i||(i=(0,z.Z)(["\n  width: 450px;\n"]))),L=r(184),S=function(n){var e,r,i=n.addContact,t=(0,b.Tn)().isLoading,a=v.Ry().shape({name:v.Z_().required(),number:v.Z_().required("This field is Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid")}),s=(0,f.cI)({resolver:(0,j.X)(a)}),d=s.register,o=s.handleSubmit,l=s.resetField,c=s.formState.errors;return(0,L.jsx)(q,{children:(0,L.jsx)(g.Z,{elevation:3,sx:{width:"auto"},children:(0,L.jsxs)(w.Z,{sx:{width:"auto"},px:3,py:2,children:[(0,L.jsxs)(P.ZP,{children:[(0,L.jsxs)(P.ZP,{item:!0,xs:5,sm:5,children:[(0,L.jsx)(y.Z,(0,p.Z)((0,p.Z)({required:!0,id:"name",name:"name",label:"Name",size:"small",fullWidth:!0,margin:"dense"},d("name")),{},{error:!!c.name})),(0,L.jsx)(C.Z,{variant:"inherit",color:"textSecondary",children:null===(e=c.name)||void 0===e?void 0:e.message})]}),(0,L.jsxs)(P.ZP,{item:!0,xs:5,sm:5,children:[(0,L.jsx)(y.Z,(0,p.Z)((0,p.Z)({required:!0,id:"number",name:"number",label:"Number",size:"small",fullWidth:!0,margin:"dense"},d("number")),{},{error:!!c.number})),(0,L.jsx)(C.Z,{variant:"inherit",color:"textSecondary",children:null===(r=c.number)||void 0===r?void 0:r.message})]})]}),(0,L.jsx)(w.Z,{mt:1,children:(0,L.jsx)(k.Z,{variant:"contained",color:"primary",onClick:o((function(n){i(n),l("name"),l("number")})),disabled:t,size:"small",children:"Add"})})]})})})},N=_.ZP.div(t||(t=(0,z.Z)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 25px;\n"]))),T=_.ZP.div(a||(a=(0,z.Z)(["\n  width: 450px;\n"]))),F=function(n){var e=n.value,r=n.onChange;return(0,L.jsx)(T,{children:(0,L.jsx)(y.Z,{id:"outlined-basic",label:"Find contact by name",variant:"outlined",onChange:r,value:e,autoComplete:"off",size:"small"})})},I=_.ZP.div(s||(s=(0,z.Z)(["\n  border-radius: 4px;\n  width: 450px;\n  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),\n    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);\n"]))),R=_.ZP.ul(d||(d=(0,z.Z)(["\n  padding: 15px;\n"]))),W=r(7247),A=_.ZP.div(o||(o=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n"]))),D=_.ZP.li(l||(l=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: auto;\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 20px;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),G=_.ZP.a(c||(c=(0,z.Z)(["\n  margin-right: 15px;\n  color: inherit;\n  text-decoration: none;\n"]))),X=function(n){var e=n.id,r=n.name,i=n.number,t=(0,b.Nt)(),a=(0,x.Z)(t,2),s=a[0],d=a[1].isLoading;return(0,L.jsxs)(D,{children:[(0,L.jsx)("p",{children:r}),(0,L.jsxs)(A,{children:[(0,L.jsx)(G,{href:"tel: ".concat(i),children:i}),(0,L.jsx)(k.Z,{variant:"outlined",color:"primary",startIcon:(0,L.jsx)(W.Z,{}),onClick:function(){return s(e)},disabled:d,size:"small",children:"Delete"})]})]})},B=function(n){var e=n.items;return(0,L.jsx)(I,{children:e&&(0,L.jsx)(R,{children:e.map((function(n){return(0,L.jsx)(X,(0,p.Z)({},n),n.id)}))})})};function E(){var n=(0,Z.useState)(""),e=(0,x.Z)(n,2),r=e[0],i=e[1],t=(0,b.pG)().data,a=(0,b.Tn)(),s=(0,x.Z)(a,2),d=s[0],o=s[1].isLoading,l=function(){var n=r.toLowerCase();if(t)return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,L.jsxs)(N,{children:[(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("h1",{children:"Phonebook"}),(0,L.jsx)(S,{addContact:function(n){var e,r=(0,u.Z)(t);try{for(r.s();!(e=r.n()).done;){if(e.value.name===n.name)return void m.ZP.error("".concat(n.name," is already in contacts."))}}catch(i){r.e(i)}finally{r.f()}d(n),m.ZP.success("Contact ".concat(n.name," has been added"))}}),(0,L.jsx)("h2",{children:"Contacts"}),(0,L.jsx)(F,{value:r,onChange:function(n){i(n.currentTarget.value)}}),o?(0,L.jsx)(h.Nx,{color:"grey"}):(0,L.jsx)(B,{items:l})]}),(0,L.jsx)(m.x7,{})]})}}}]);
//# sourceMappingURL=634.793429c7.chunk.js.map