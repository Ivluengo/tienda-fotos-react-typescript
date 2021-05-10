(this["webpackJsonpreact-ts-template"]=this["webpackJsonpreact-ts-template"]||[]).push([[0],{10:function(t,e,n){t.exports={fotoItem:"FotoItem_fotoItem__QXtzv",fotoImg:"FotoItem_fotoImg__2HKVi",heart:"FotoItem_heart__2mdMV",iconCart:"FotoItem_iconCart__21sOe"}},16:function(t,e,n){t.exports={pageSection:"src_pageSection__1jtlM"}},31:function(t,e,n){t.exports={fotoGrid:"Productos_fotoGrid__A1QrH"}},32:function(t,e,n){t.exports={carritoImgItem:"Carrito_carritoImgItem__1idug"}},45:function(t,e,n){"use strict";n.r(e);var c,a=n(23),r=n(4),o=n(2),i=n(24),s=n(25),u=n(16),j=n.n(u),d=n(0),l="#ff5555",b=s.a.p(c||(c=Object(i.a)(["\nfont-size: 1.2em;\ncolor: ",";\n& span {\n    font-weight: bold;\n        /** Styled Components puede utilizar las props como una funci\xf3n an\xf3nima que recibe estas props en su primer par\xe1metro **/\n        color: ","\n    }\n"])),l,(function(t){return t.colorBlue?"blue":l})),h=function(){var t=Object(o.h)(),e=new URLSearchParams(t.search);return console.log(e.get("id")),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:j.a.titulo,children:"\xa1Bienvenid@ a mi homepage!"}),Object(d.jsxs)(b,{children:["Este es un ",Object(d.jsx)("span",{children:"subtitulo"})," creado con Styled Components"]})]})},m=n(9),f=n.n(m),O=function(){return Object(d.jsx)("header",{className:f.a.mainHeader,children:Object(d.jsxs)("div",{className:f.a.container,children:[Object(d.jsx)("h1",{children:Object(d.jsx)(r.b,{to:"/",children:"MiTienda"})}),Object(d.jsx)("nav",{className:f.a.navigation,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{activeClassName:f.a.activo,to:"/productos",children:"Productos"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{activeClassName:f.a.activo,to:"/nosotros",children:"Sobre Nosotros"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{to:"/carrito",activeClassName:f.a.activo,children:Object(d.jsx)("i",{className:"fas fa-shopping-cart"})})})]})})]})})},p=n(12),x=n(1),v=n(30),g=n(15),_=function(t,e){switch(e.type){case"addToFavoritas":return t.map((function(t){return t.id===e.payload?Object(g.a)(Object(g.a)({},t),{},{esFavorita:!t.esFavorita}):t}));case"toggleCarrito":return t.map((function(t){return t.id===e.payload?Object(g.a)(Object(g.a)({},t),{},{enCarrito:!t.enCarrito}):t}));case"fetch fotos":return e.payload;default:return t}},C=n(21),N=n.n(C),y=n(29),I=function(){var t=Object(y.a)(N.a.mark((function t(){var e,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/Ivluengo/react-tienda-fotos/main/listaFotos.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=[{id:0,url:"",esFavorita:!1,enCarrito:!1}],P=Object(x.createContext)({}),S=function(t){var e=t.children,n=Object(x.useReducer)(_,F),c=Object(p.a)(n,2),a=c[0],r=c[1];return Object(x.useEffect)((function(){I().then((function(t){r({type:"fetch fotos",payload:t})}))}),[]),Object(d.jsx)(P.Provider,{value:[a,r],children:e})},k=function(){return Object(x.useContext)(P)[0]},w=function(){return Object(x.useContext)(P)[1]},T=n(10),q=n.n(T),B=function(t){var e=t.foto,n=w(),c=Object(x.useState)(!1),a=Object(p.a)(c,2),r=a[0],o=a[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:q.a.fotoItem,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:[e.esFavorita?Object(d.jsx)("i",{onClick:function(){return n({type:"addToFavoritas",payload:e.id})},className:"fas fa-heart ".concat(q.a.heart)}):r?Object(d.jsx)("i",{onClick:function(){return n({type:"addToFavoritas",payload:e.id})},className:"far fa-heart ".concat(q.a.heart)}):void 0,e.enCarrito?Object(d.jsx)("i",{onClick:function(){return n({type:"toggleCarrito",payload:e.id})},className:"fas fa-shopping-cart ".concat(q.a.iconCart)}):r?Object(d.jsx)("i",{onClick:function(){return n({type:"toggleCarrito",payload:e.id})},className:"fas fa-plus-circle ".concat(q.a.iconCart)}):void 0,Object(d.jsx)(v.a,{smooth:!0,to:"/productos/".concat(e.id,"#detalle"),children:Object(d.jsx)("img",{className:q.a.fotoImg,src:e.url,alt:e.url})})]})})},E=function(){var t=Object(o.i)(),e=k().find((function(e){return Number(e.id)===Number(t.productId)}));return Object(d.jsxs)("div",{id:"detalle",children:[Object(d.jsx)("h1",{children:"\xa1Producto al detalle!"}),Object(d.jsx)(B,{foto:e}),Object(d.jsx)("h4",{children:"Precio: 3,99\u20ac"})]})},H=n(31),M=n.n(H),z=function(){var t=k();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"P\xe1gina de Productos"}),Object(d.jsx)("main",{className:M.a.fotoGrid,children:t.map((function(t){return Object(d.jsx)(B,{foto:t},t.id)}))}),Object(d.jsx)(o.b,{exact:!0,path:"/productos/:productId/",children:Object(d.jsx)(E,{})})]})},G=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in nulla nobis doloribus facilis illo accusantium officiis veniam dolorum voluptas, tempore consectetur iste ullam sequi alias modi quibusdam quod ipsa! Distinctio minima odio dicta doloremque non alias expedita, architecto fugit debitis vel consequuntur quibusdam earum laudantium. Dolores distinctio expedita dolor."})})},L=function(){var t=Object(o.g)();return setTimeout((function(){t.push("/")}),3e3),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Te has confundido y esta p\xe1gina no existe"}),Object(d.jsx)("h4",{children:"En unos segundos vas a ser redirigido a nuestra p\xe1gina de inicio"})]})},V=n(32),A=n.n(V),D=function(){var t=k(),e=w(),n=t.filter((function(t){return t.enCarrito})),c=Object(x.useState)(0),a=Object(p.a)(c,2),r=a[0],o=a[1];return Object(x.useEffect)((function(){o(3.99*n.length)}),[n.length]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Carrito de fotos"}),n.map((function(t){return Object(d.jsxs)("div",{className:A.a.carritoImgItem,children:[Object(d.jsx)("img",{src:t.url,alt:t.url}),Object(d.jsx)("h4",{children:"Precio: 3.99\u20ac"}),Object(d.jsx)("button",{onClick:function(){return e({type:"toggleCarrito",payload:t.id})},children:"-"})]},t.id)})),Object(d.jsxs)("h3",{children:["Total = ",r]})]})},J=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(S,{children:[Object(d.jsx)(O,{}),Object(d.jsx)("section",{className:j.a.pageSection,children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"/",children:Object(d.jsx)(h,{})}),Object(d.jsx)(o.b,{path:"/home",children:Object(d.jsx)(o.a,{to:"/"})}),Object(d.jsx)(o.b,{path:"/productos",children:Object(d.jsx)(z,{})}),Object(d.jsx)(o.b,{path:"/nosotros",children:Object(d.jsx)(G,{})}),Object(d.jsx)(o.b,{path:"/carrito",component:D}),Object(d.jsx)(o.b,{path:"*",children:Object(d.jsx)(L,{})})]})})]})})};a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={mainHeader:"NavBar_mainHeader__yuaaP",container:"NavBar_container__2g_6V",navigation:"NavBar_navigation__1SkrY",activo:"NavBar_activo__TyZe1"}}},[[45,1,2]]]);
//# sourceMappingURL=main.fd36acf4.chunk.js.map