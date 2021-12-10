(this.webpackJsonplibrary=this.webpackJsonplibrary||[]).push([[0],{126:function(e,n,t){},225:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,s,l=t(0),j=t.n(l),d=t(86),b=t.n(d),u=t(4),h=t(3),p=Object(h.b)(r||(r=Object(u.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\n    html{\n        box-sizing: border-box;\n    }\n    \n    *,*::before, *::after {\n        box-sizing: inherit  ;\n    }\n    body{\n        font-family: 'Montserrat', sans-serif;\n        padding:0 ;\n        margin: 0;\n    }   \n    a, button{\n        font-family: 'Montserrat', sans-serif;\n    }\n"]))),x={colors:{black:"#1d3557",lightGrey:"#F6F6F6",blue:"#00A3FF",red:"#D00000",yellow:"#fca311"},fontSize:{xl:"35px",l:"20px"},mediaQuery:{mobile:"(min-width: 320px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)"}},m=t(18),f=t.n(m),O=t(30),g={images:{books:t.p+"static/media/books.10591f62.png"},icons:{}},v=h.c.div(c||(c=Object(u.a)(["\n  display: flex;\n"]))),k=h.c.div(a||(a=Object(u.a)(["\n  background: center center url(",");\n  background-size: cover;\n  width: 50%;\n  height: 100vh;\n"])),g.images.books),y=h.c.div(i||(i=Object(u.a)(["\n  width: 50%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-size: ",";\n    text-transform: uppercase;\n    margin-bottom: 45px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    input {\n      height: 60px;\n      width: 400px;\n      margin: 5px 0 40px 0;\n      background-color: ",";\n      font-size: ",";\n    }\n  }\n"])),(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.fontSize.l})),w=h.c.button(o||(o=Object(u.a)(["\n  width: 400px;\n  height: 60px;\n  background-color: ",";\n  font-size: ",";\n  color: white;\n  margin-top: 30px;\n  text-transform: uppercase;\n  border: none;\n  cursor: pointer;\n"])),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.fontSize.l})),z=h.c.button(s||(s=Object(u.a)(["\n  cursor: pointer;\n  width: 400px;\n  height: 60px;\n  background-color: ",";\n  border: none;\n  font-size: ",";\n  color: white;\n  margin-top: 30px;\n  text-transform: uppercase;\n  margin-top: 10px;\n"])),(function(e){return e.theme.colors.yellow}),(function(e){return e.theme.fontSize.l})),S=t(15),C=t(5),E=t(58),F=t.n(E);F.a.initializeApp({apiKey:"AIzaSyCGxgmK6cuW08EET1n9ywhBgW5TM4u7ENk",authDomain:"login-auth-21784.firebaseapp.com",databaseURL:"https://login-auth-21784-default-rtdb.europe-west1.firebasedatabase.app",projectId:"login-auth-21784",storageBucket:"login-auth-21784.appspot.com",messagingSenderId:"576349871661",appId:"1:576349871661:web:f8c73aa96bf2f66cfce2a4",measurementId:"G-X7PW0R7TXS"});var L,A,B,G,I,P,D,N,T,U,W,M,V,Z,q,K,J=F.a,R=t(14),X=t(1),Q=j.a.createContext(),H=function(e){var n=e.children,t=Object(l.useState)(null),r=Object(R.a)(t,2),c=r[0],a=r[1],i=Object(l.useState)(!0),o=Object(R.a)(i,2),s=o[0],j=o[1];return Object(l.useEffect)((function(){J.auth().onAuthStateChanged((function(e){a(e),j(!1)}))}),[]),s?Object(X.jsx)(X.Fragment,{children:"Loading..."}):Object(X.jsx)(Q.Provider,{value:{currentUser:c},children:n})},Y=function(e){var n=e.history,t=Object(l.useCallback)(function(){var e=Object(O.a)(f.a.mark((function e(t){var r,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements,c=r.email,a=r.password,e.prev=2,e.next=5,J.auth().signInWithEmailAndPassword(c.value,a.value);case 5:n.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}(),[n]);return Object(l.useContext)(Q).currentUser?Object(X.jsx)(C.a,{to:"/dashboard"}):Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(v,{children:[Object(X.jsx)(k,{}),Object(X.jsxs)(y,{children:[Object(X.jsx)("h1",{children:"ksiegarnia"}),Object(X.jsxs)("form",{onSubmit:t,children:[Object(X.jsx)("label",{children:Object(X.jsx)("input",{name:"email",type:"email",placeholder:"Email"})}),Object(X.jsx)("label",{children:Object(X.jsx)("input",{name:"password",type:"password",placeholder:"Password"})}),Object(X.jsx)(w,{type:"submit",children:"Zaloguj sie"}),Object(X.jsx)(S.b,{to:"/signup",children:Object(X.jsx)(z,{children:"Zarejestruj sie"})})]})]})]})})},$=t(16),_=h.c.div(L||(L=Object(u.a)(["\n  div {\n    h2 {\n      text-align: center;\n    }\n  }\n  /* height: 100vh;\n  width: 500px; */\n  /* background-color: #eff2f1; */\n  /* overflow-y: scroll; */\n"]))),ee=h.c.div(A||(A=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),ne=(t(126),h.c.div(B||(B=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  /* width: 500px; */\n  margin: 15px 0 0 0;\n\n  p {\n    span {\n      font-weight: bold;\n    }\n  }\n"])))),te=h.c.button(G||(G=Object(u.a)(["\n  cursor: pointer;\n  background-color: ",";\n  border: none;\n  border-radius: 20px;\n  color: white;\n  padding: 4px;\n  width: 150px;\n  margin: 5px;\n  font-weight: bold;\n  text-transform: uppercase;\n"])),(function(e){return e.theme.colors.red})),re=h.c.button(I||(I=Object(u.a)(["\n  cursor: pointer;\n  background-color: ",";\n  border: none;\n  border-radius: 20px;\n  color: white;\n  width: 150px;\n  margin: 5px;\n\n  padding: 4px;\n  font-weight: bold;\n  text-transform: uppercase;\n"])),(function(e){return e.theme.colors.yellow})),ce=function(e){var n=e.book;return Object(X.jsxs)(ne,{children:[Object(X.jsxs)("p",{className:n.complete?"complete":"",children:[Object(X.jsx)("span",{children:"Tytu\u0142 ksi\u0105zki: "})," ",n.title]}),Object(X.jsxs)("p",{className:n.complete?"complete":"",children:[Object(X.jsx)("span",{children:"Autor ksiazki: "}),n.author]}),Object(X.jsxs)("p",{className:n.complete?"complete":"",children:[Object(X.jsx)("span",{children:"Gatunek ksi\u0105zki: "}),n.title]}),Object(X.jsx)(te,{onClick:function(){J.database().ref("Lista ksiazek").child(n.id).remove()},children:"Usu\u0144 ksiazke"}),Object(X.jsx)(re,{onClick:function(){J.database().ref("Lista ksiazek").child(n.id).update({complete:!n.complete})},children:"Complete"})]})},ae=h.c.nav(P||(P=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* position: absolute; */\n  position: fixed;\n  height: 100vh;\n  width: 220px;\n  background-color: #edf6f9;\n"]))),ie=Object(h.c)(S.c).attrs({activeClassName:"active-link"})(D||(D=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n  margin: 20px 0;\n  width: 120px;\n  &:hover {\n    text-decoration: none;\n  }\n  &:visited {\n    color: black;\n  }\n  &.active-link {\n    border-bottom: black 1px solid;\n    padding-bottom: 5px;\n  }\n"]))),oe=function(){return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(ae,{children:[Object(X.jsx)("h2",{children:"Ksi\u0119garnia"}),Object(X.jsx)(ie,{to:"/welcomedashboard",children:"Dashboard"}),Object(X.jsx)(ie,{to:"/form",children:"Dodaj ksi\u0105\u017ck\u0119 "}),Object(X.jsx)(ie,{to:"/bookList",children:"Lista ksi\u0105\u017cek"}),Object(X.jsx)("button",{onClick:function(){return J.auth().signOut()},children:"Sign out"})]})})},se=function(){var e=Object(l.useState)([]),n=Object(R.a)(e,2),t=n[0],r=n[1];return Object(l.useEffect)((function(){return J.database().ref("Lista ksiazek").on("value",(function(e){var n=e.val(),t=[];Object.keys(n).forEach((function(e){t.push(Object($.a)(Object($.a)({},n[e]),{},{id:e}))})),r(t)})),function(){r([])}}),[]),Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(oe,{}),Object(X.jsx)(ee,{children:Object(X.jsx)(_,{children:Object(X.jsxs)("div",{children:[Object(X.jsx)("h2",{children:"Lista ksiazek"}),Object(X.jsx)("ul",{children:t?t.map((function(e,n){return Object(X.jsx)(ce,{book:e},n)})):""})]})})})]})},le=t(96),je=t(37),de=h.c.div(N||(N=Object(u.a)(["\n  margin: 0 0 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  div {\n    display: flex;\n    flex-direction: column;\n    label {\n      width: 100px;\n    }\n  }\n"]))),be=h.c.input(T||(T=Object(u.a)(["\n  padding: 5px 8px;\n  /* margin-left: 100px; */\n  border: 1px solid black;\n  border-radius: 20px;\n  width: 250px;\n  &:focus {\n    outline: none;\n    box-shadow: -1px 2px 8px rgba(115, 124, 142, 0.3);\n  }\n"]))),ue=Object(h.d)(U||(U=Object(u.a)(["\n0%{\n  transform: scale(0.9);\n}\n50%{\n  transform: scale(1.1)\n}\n100%{\n  transform: scale(0.9);\n}\n"]))),he=h.c.div(W||(W=Object(u.a)(["\n  color: red;\n  animation: "," 2s linear infinite;\n"])),ue),pe=function(e){var n=e.id,t=e.placeholder,r=e.type,c=e.values,a=e.onChange,i=e.onBlur,o=e.errors,s=e.touched,l=e.labelValue;return Object(X.jsx)(de,{children:Object(X.jsxs)("div",{children:[Object(X.jsxs)("label",{htmlFor:n,children:[l,Object(X.jsx)(be,{id:n,name:n,placeholder:t,type:r,value:c[n],onChange:a,onBlur:i,className:o[n]&&s[n]?"text-input error":"text-input"})]}),o[n]&&s[n]&&Object(X.jsx)(he,{children:o[n]})]})})},xe=h.c.div(M||(M=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  label {\n    margin: 10px 0;\n  }\n"]))),me={author:"",title:"",genre:""},fe=function(){var e=function(){var e=Object(O.a)(f.a.mark((function e(n,t){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=J.database().ref("Lista ksiazek"),c=Object($.a)(Object($.a)({},n),{},{complete:!1}),r.push(c),t.resetForm();case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),n=je.a().shape({author:je.b().required("Autor jest wymagany"),title:je.b().required("Tytu\u0142 jest wymagany"),genre:je.b().required("Gatunek jest wymagany")});return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(oe,{}),Object(X.jsx)(xe,{children:Object(X.jsx)(le.a,{initialValues:me,onSubmit:e,validationSchema:n,children:function(e){var n=e.values,t=e.touched,r=e.errors,c=e.isSubmitting,a=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return Object(X.jsxs)("form",{onSubmit:o,children:[Object(X.jsx)(pe,{id:"author",placeholder:"Enter author",type:"text",values:n,onChange:a,onBlur:i,errors:r,touched:t,labelValue:"Author: "}),Object(X.jsx)(pe,{id:"title",placeholder:"Enter title",type:"text",values:n,onChange:a,onBlur:i,errors:r,touched:t,labelValue:"Title: "}),Object(X.jsx)(pe,{id:"genre",placeholder:"genre",type:"text",values:n,onChange:a,onBlur:i,errors:r,touched:t,labelValue:"Gatunek: "}),Object(X.jsx)("button",{type:"submit",disabled:c,children:"Submit"})]})}})})]})},Oe=t(95),ge=["component"],ve=function(e){var n=e.component,t=Object(Oe.a)(e,ge),r=Object(l.useContext)(Q).currentUser;return Object(X.jsx)(C.b,Object($.a)(Object($.a)({},t),{},{render:function(e){return r?Object(X.jsx)(n,Object($.a)({},e)):Object(X.jsx)(C.a,{to:"/login"})}}))},ke=h.c.div(V||(V=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* padding-left: 120px; */\n"]))),ye=h.c.div(Z||(Z=Object(u.a)(["\n  height: 100vh;\n  width: 60%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),we=function(){return Object(X.jsx)(ke,{children:Object(X.jsxs)(ye,{children:[Object(X.jsx)("h2",{children:"Witaj w panelu"}),Object(X.jsx)("p",{children:"lorem ipsum cos tam cos tam "})]})})},ze=h.c.div(q||(q=Object(u.a)(["\n  margin-left: 220px;\n\n  div {\n    margin: 0;\n    padding: 0;\n  }\n"]))),Se=function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(oe,{}),Object(X.jsx)(ze,{children:Object(X.jsxs)(C.d,{children:[Object(X.jsx)(ve,{path:"/bookList",children:Object(X.jsx)(se,{})}),Object(X.jsx)(ve,{path:"/form",children:Object(X.jsx)(fe,{})}),Object(X.jsx)(ve,{path:"/welcomedashboard",children:Object(X.jsx)(we,{})})]})})]})},Ce=Object(C.g)((function(e){var n=e.history,t=Object(l.useCallback)(function(){var e=Object(O.a)(f.a.mark((function e(t){var r,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements,c=r.email,a=r.password,e.prev=2,e.next=5,J.auth().createUserWithEmailAndPassword(c.value,a.value);case 5:n.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}(),[n]);return Object(X.jsxs)(v,{children:[Object(X.jsx)(k,{}),Object(X.jsxs)(y,{children:[Object(X.jsx)("h1",{children:"Zarejestruj sie"}),Object(X.jsxs)("form",{onSubmit:t,children:[Object(X.jsx)("label",{children:Object(X.jsx)("input",{name:"email",type:"email",placeholder:"Email"})}),Object(X.jsx)("label",{children:Object(X.jsx)("input",{name:"password",type:"password",placeholder:"Password"})}),Object(X.jsx)("button",{type:"submit",children:"Zarejestruj si\u0119"})]}),Object(X.jsx)(S.b,{to:"/",children:Object(X.jsx)("button",{children:"Powr\xf3t do strony g\u0142ownej"})})]})]})})),Ee=(h.c.div(K||(K=Object(u.a)(["\n  margin-left: 220px;\n"]))),function(){return Object(X.jsx)(S.a,{children:Object(X.jsxs)(h.a,{theme:x,children:[Object(X.jsx)(p,{}),Object(X.jsx)(H,{children:Object(X.jsxs)("div",{children:[Object(X.jsx)(ve,{exact:!0,path:"/",component:Se}),Object(X.jsx)(C.b,{exact:!0,path:"/login",component:Y}),Object(X.jsx)(C.b,{exact:!0,path:"/signup",component:Ce}),Object(X.jsx)(ve,{exact:!0,path:"/form",component:fe}),Object(X.jsx)(ve,{exact:!0,path:"/booklist",component:se})]})})]})})});b.a.render(Object(X.jsx)(j.a.StrictMode,{children:Object(X.jsx)(Ee,{})}),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.d2a0036c.chunk.js.map