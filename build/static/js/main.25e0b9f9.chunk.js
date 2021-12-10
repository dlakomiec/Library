(this.webpackJsonplibrary=this.webpackJsonplibrary||[]).push([[0],{126:function(e,n,t){},225:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,s,l=t(0),d=t.n(l),b=t(86),j=t.n(b),u=t(4),p=t(3),h=Object(p.b)(r||(r=Object(u.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\n    html{\n        box-sizing: border-box;\n    }\n    \n    *,*::before, *::after {\n        box-sizing: inherit  ;\n    }\n    body{\n        font-family: 'Montserrat', sans-serif;\n        padding:0 ;\n        margin: 0;\n    }   \n    a, button{\n        font-family: 'Montserrat', sans-serif;\n    }\n"]))),x={colors:{black:"#1d3557",lightGrey:"#F6F6F6",blue:"#00A3FF",red:"#D00000",yellow:"#fca311"},fontSize:{xl:"35px",l:"20px"},mediaQuery:{mobile:"(min-width: 320px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)"}},m=t(18),f=t.n(m),O=t(30),g={images:{books:t.p+"static/media/books.10591f62.png"},icons:{}},v=p.c.div(c||(c=Object(u.a)(["\n  display: flex;\n"]))),k=p.c.div(a||(a=Object(u.a)(["\n  background: center center url(",");\n  background-size: cover;\n  width: 50%;\n  height: 100vh;\n"])),g.images.books),y=p.c.div(i||(i=Object(u.a)(["\n  width: 50%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-size: ",";\n    text-transform: uppercase;\n    margin-bottom: 45px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    input {\n      height: 60px;\n      width: 400px;\n      margin: 5px 0 40px 0;\n      background-color: ",";\n      font-size: ",";\n    }\n  }\n"])),(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.fontSize.l})),w=p.c.button(o||(o=Object(u.a)(["\n  width: 400px;\n  height: 60px;\n  background-color: ",";\n  font-size: ",";\n  color: white;\n  margin-top: 30px;\n  text-transform: uppercase;\n  border: none;\n  cursor: pointer;\n"])),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.fontSize.l})),z=p.c.button(s||(s=Object(u.a)(["\n  cursor: pointer;\n  width: 400px;\n  height: 60px;\n  background-color: ",";\n  border: none;\n  font-size: ",";\n  color: white;\n  margin-top: 30px;\n  text-transform: uppercase;\n  margin-top: 10px;\n"])),(function(e){return e.theme.colors.yellow}),(function(e){return e.theme.fontSize.l})),S=t(15),C=t(5),E=t(58),F=t.n(E);F.a.initializeApp({apiKey:"AIzaSyCGxgmK6cuW08EET1n9ywhBgW5TM4u7ENk",authDomain:"login-auth-21784.firebaseapp.com",databaseURL:"https://login-auth-21784-default-rtdb.europe-west1.firebasedatabase.app",projectId:"login-auth-21784",storageBucket:"login-auth-21784.appspot.com",messagingSenderId:"576349871661",appId:"1:576349871661:web:f8c73aa96bf2f66cfce2a4",measurementId:"G-X7PW0R7TXS"});var L,A,B,G,I,P,W,D,N,T,U,M,V,Z,q,K,J,R=F.a,X=t(14),Q=t(1),H=d.a.createContext(),Y=function(e){var n=e.children,t=Object(l.useState)(null),r=Object(X.a)(t,2),c=r[0],a=r[1],i=Object(l.useState)(!0),o=Object(X.a)(i,2),s=o[0],d=o[1];return Object(l.useEffect)((function(){R.auth().onAuthStateChanged((function(e){a(e),d(!1)}))}),[]),s?Object(Q.jsx)(Q.Fragment,{children:"Loading..."}):Object(Q.jsx)(H.Provider,{value:{currentUser:c},children:n})},$=function(e){var n=e.history,t=Object(l.useCallback)(function(){var e=Object(O.a)(f.a.mark((function e(t){var r,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements,c=r.email,a=r.password,e.prev=2,e.next=5,R.auth().signInWithEmailAndPassword(c.value,a.value);case 5:n.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}(),[n]);return Object(l.useContext)(H).currentUser?Object(Q.jsx)(C.a,{to:"/dashboard"}):Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(v,{children:[Object(Q.jsx)(k,{}),Object(Q.jsxs)(y,{children:[Object(Q.jsx)("h1",{children:"ksiegarnia"}),Object(Q.jsxs)("form",{onSubmit:t,children:[Object(Q.jsx)("label",{children:Object(Q.jsx)("input",{name:"email",type:"email",placeholder:"Email"})}),Object(Q.jsx)("label",{children:Object(Q.jsx)("input",{name:"password",type:"password",placeholder:"Password"})}),Object(Q.jsx)(w,{type:"submit",children:"Zaloguj sie"}),Object(Q.jsx)(S.b,{to:"/signup",children:Object(Q.jsx)(z,{children:"Zarejestruj sie"})})]})]})]})})},_=t(16),ee=p.c.div(L||(L=Object(u.a)(["\n  div {\n    h2 {\n      text-align: center;\n    }\n  }\n  /* height: 100vh;\n  width: 500px; */\n  /* background-color: #eff2f1; */\n  /* overflow-y: scroll; */\n"]))),ne=p.c.div(A||(A=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),te=(t(126),p.c.div(B||(B=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  /* width: 500px; */\n  margin: 15px 0 0 0;\n\n  p {\n    span {\n      font-weight: bold;\n    }\n  }\n"])))),re=p.c.button(G||(G=Object(u.a)(["\n  cursor: pointer;\n  background-color: ",";\n  border: none;\n  border-radius: 20px;\n  color: white;\n  padding: 4px;\n  width: 150px;\n  margin: 5px;\n  font-weight: bold;\n  text-transform: uppercase;\n"])),(function(e){return e.theme.colors.red})),ce=p.c.button(I||(I=Object(u.a)(["\n  cursor: pointer;\n  background-color: ",";\n  border: none;\n  border-radius: 20px;\n  color: white;\n  width: 150px;\n  margin: 5px;\n\n  padding: 4px;\n  font-weight: bold;\n  text-transform: uppercase;\n"])),(function(e){return e.theme.colors.yellow})),ae=function(e){var n=e.book;return Object(Q.jsxs)(te,{children:[Object(Q.jsxs)("p",{className:n.complete?"complete":"",children:[Object(Q.jsx)("span",{children:"Tytu\u0142 ksi\u0105zki: "})," ",n.title]}),Object(Q.jsxs)("p",{className:n.complete?"complete":"",children:[Object(Q.jsx)("span",{children:"Autor ksiazki: "}),n.author]}),Object(Q.jsxs)("p",{className:n.complete?"complete":"",children:[Object(Q.jsx)("span",{children:"Gatunek ksi\u0105zki: "}),n.title]}),Object(Q.jsx)(re,{onClick:function(){R.database().ref("Lista ksiazek").child(n.id).remove()},children:"Usu\u0144 ksiazke"}),Object(Q.jsx)(ce,{onClick:function(){R.database().ref("Lista ksiazek").child(n.id).update({complete:!n.complete})},children:"Complete"})]})},ie=p.c.nav(P||(P=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* position: absolute; */\n  position: fixed;\n  height: 100vh;\n  width: 220px;\n  background-color: #edf6f9;\n"]))),oe=p.c.button(W||(W=Object(u.a)(["\n  cursor: pointer;\n  background-color: ",";\n  border: none;\n  border-radius: 20px;\n  color: white;\n  padding: 4px;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-top: 450px;\n"])),(function(e){return e.theme.colors.red})),se=Object(p.c)(S.c).attrs({activeClassName:"active-link"})(D||(D=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n  margin: 20px 0;\n  width: 120px;\n  &:hover {\n    text-decoration: none;\n  }\n  &:visited {\n    color: black;\n  }\n  &.active-link {\n    border-bottom: black 1px solid;\n    padding-bottom: 5px;\n  }\n"]))),le=function(){return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(ie,{children:[Object(Q.jsx)("h2",{children:"Ksi\u0119garnia"}),Object(Q.jsx)(se,{to:"/welcomedashboard",children:"Dashboard"}),Object(Q.jsx)(se,{to:"/form",children:"Dodaj ksi\u0105\u017ck\u0119 "}),Object(Q.jsx)(se,{to:"/bookList",children:"Lista ksi\u0105\u017cek"}),Object(Q.jsx)(oe,{onClick:function(){return R.auth().signOut()},children:"Wyloguj"})]})})},de=function(){var e=Object(l.useState)([]),n=Object(X.a)(e,2),t=n[0],r=n[1];return Object(l.useEffect)((function(){return R.database().ref("Lista ksiazek").on("value",(function(e){var n=e.val(),t=[];Object.keys(n).forEach((function(e){t.push(Object(_.a)(Object(_.a)({},n[e]),{},{id:e}))})),r(t)})),function(){r([])}}),[]),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(le,{}),Object(Q.jsx)(ne,{children:Object(Q.jsx)(ee,{children:Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h2",{children:"Lista ksiazek"}),Object(Q.jsx)("ul",{children:t?t.map((function(e,n){return Object(Q.jsx)(ae,{book:e},n)})):""})]})})})]})},be=t(96),je=t(37),ue=p.c.div(N||(N=Object(u.a)(["\n  margin: 0 0 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  div {\n    display: flex;\n    flex-direction: column;\n    label {\n      width: 100px;\n    }\n  }\n"]))),pe=p.c.input(T||(T=Object(u.a)(["\n  padding: 5px 8px;\n  /* margin-left: 100px; */\n  border: 1px solid black;\n  border-radius: 20px;\n  width: 250px;\n  &:focus {\n    outline: none;\n    box-shadow: -1px 2px 8px rgba(115, 124, 142, 0.3);\n  }\n"]))),he=Object(p.d)(U||(U=Object(u.a)(["\n0%{\n  transform: scale(0.9);\n}\n50%{\n  transform: scale(1.1)\n}\n100%{\n  transform: scale(0.9);\n}\n"]))),xe=p.c.div(M||(M=Object(u.a)(["\n  color: red;\n  animation: "," 2s linear infinite;\n"])),he),me=function(e){var n=e.id,t=e.placeholder,r=e.type,c=e.values,a=e.onChange,i=e.onBlur,o=e.errors,s=e.touched,l=e.labelValue;return Object(Q.jsx)(ue,{children:Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("label",{htmlFor:n,children:[l,Object(Q.jsx)(pe,{id:n,name:n,placeholder:t,type:r,value:c[n],onChange:a,onBlur:i,className:o[n]&&s[n]?"text-input error":"text-input"})]}),o[n]&&s[n]&&Object(Q.jsx)(xe,{children:o[n]})]})})},fe=p.c.div(V||(V=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  label {\n    margin: 10px 0;\n  }\n"]))),Oe={author:"",title:"",genre:""},ge=function(){var e=function(){var e=Object(O.a)(f.a.mark((function e(n,t){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=R.database().ref("Lista ksiazek"),c=Object(_.a)(Object(_.a)({},n),{},{complete:!1}),r.push(c),t.resetForm();case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),n=je.a().shape({author:je.b().required("Autor jest wymagany"),title:je.b().required("Tytu\u0142 jest wymagany"),genre:je.b().required("Gatunek jest wymagany")});return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(le,{}),Object(Q.jsx)(fe,{children:Object(Q.jsx)(be.a,{initialValues:Oe,onSubmit:e,validationSchema:n,children:function(e){var n=e.values,t=e.touched,r=e.errors,c=e.isSubmitting,a=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return Object(Q.jsxs)("form",{onSubmit:o,children:[Object(Q.jsx)(me,{id:"author",placeholder:"Enter author",type:"text",values:n,onChange:a,onBlur:i,errors:r,touched:t,labelValue:"Author: "}),Object(Q.jsx)(me,{id:"title",placeholder:"Enter title",type:"text",values:n,onChange:a,onBlur:i,errors:r,touched:t,labelValue:"Title: "}),Object(Q.jsx)(me,{id:"genre",placeholder:"genre",type:"text",values:n,onChange:a,onBlur:i,errors:r,touched:t,labelValue:"Gatunek: "}),Object(Q.jsx)("button",{type:"submit",disabled:c,children:"Submit"})]})}})})]})},ve=t(95),ke=["component"],ye=function(e){var n=e.component,t=Object(ve.a)(e,ke),r=Object(l.useContext)(H).currentUser;return Object(Q.jsx)(C.b,Object(_.a)(Object(_.a)({},t),{},{render:function(e){return r?Object(Q.jsx)(n,Object(_.a)({},e)):Object(Q.jsx)(C.a,{to:"/login"})}}))},we=p.c.div(Z||(Z=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* padding-left: 120px; */\n"]))),ze=p.c.div(q||(q=Object(u.a)(["\n  height: 100vh;\n  width: 60%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),Se=function(){return Object(Q.jsx)(we,{children:Object(Q.jsxs)(ze,{children:[Object(Q.jsx)("h2",{children:"Witaj w panelu"}),Object(Q.jsx)("p",{children:"lorem ipsum cos tam cos tam "})]})})},Ce=p.c.div(K||(K=Object(u.a)(["\n  margin-left: 220px;\n\n  div {\n    margin: 0;\n    padding: 0;\n  }\n"]))),Ee=function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(le,{}),Object(Q.jsx)(Ce,{children:Object(Q.jsxs)(C.d,{children:[Object(Q.jsx)(ye,{path:"/bookList",children:Object(Q.jsx)(de,{})}),Object(Q.jsx)(ye,{path:"/form",children:Object(Q.jsx)(ge,{})}),Object(Q.jsx)(ye,{path:"/welcomedashboard",children:Object(Q.jsx)(Se,{})})]})})]})},Fe=Object(C.g)((function(e){var n=e.history,t=Object(l.useCallback)(function(){var e=Object(O.a)(f.a.mark((function e(t){var r,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements,c=r.email,a=r.password,e.prev=2,e.next=5,R.auth().createUserWithEmailAndPassword(c.value,a.value);case 5:n.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}(),[n]);return Object(Q.jsxs)(v,{children:[Object(Q.jsx)(k,{}),Object(Q.jsxs)(y,{children:[Object(Q.jsx)("h1",{children:"Zarejestruj sie"}),Object(Q.jsxs)("form",{onSubmit:t,children:[Object(Q.jsx)("label",{children:Object(Q.jsx)("input",{name:"email",type:"email",placeholder:"Email"})}),Object(Q.jsx)("label",{children:Object(Q.jsx)("input",{name:"password",type:"password",placeholder:"Password"})}),Object(Q.jsx)("button",{type:"submit",children:"Zarejestruj si\u0119"})]}),Object(Q.jsx)(S.b,{to:"/",children:Object(Q.jsx)("button",{children:"Powr\xf3t do strony g\u0142ownej"})})]})]})})),Le=(p.c.div(J||(J=Object(u.a)(["\n  margin-left: 220px;\n"]))),function(){return Object(Q.jsx)(S.a,{children:Object(Q.jsxs)(p.a,{theme:x,children:[Object(Q.jsx)(h,{}),Object(Q.jsx)(Y,{children:Object(Q.jsxs)("div",{children:[Object(Q.jsx)(ye,{exact:!0,path:"/",component:Ee}),Object(Q.jsx)(C.b,{exact:!0,path:"/login",component:$}),Object(Q.jsx)(C.b,{exact:!0,path:"/signup",component:Fe}),Object(Q.jsx)(ye,{exact:!0,path:"/form",component:ge}),Object(Q.jsx)(ye,{exact:!0,path:"/booklist",component:de})]})})]})})});j.a.render(Object(Q.jsx)(d.a.StrictMode,{children:Object(Q.jsx)(Le,{})}),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.25e0b9f9.chunk.js.map