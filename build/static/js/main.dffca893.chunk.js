(this.webpackJsonpadmisstion=this.webpackJsonpadmisstion||[]).push([[0],{182:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(88),s=n.n(a),r=(n(98),n(99),n(5)),o=n(91),h=n(38),j=n(7),l=(n(100),n(12)),d="userLogin",b="accessToken",u="http://20.89.111.129",x=n(48);x.initializeApp({apiKey:"AIzaSyDofsuemXE0-R3wEpCrhEi2J94mzIRU0Q8",authDomain:"admission-270c8.firebaseapp.com",projectId:"admission-270c8",storageBucket:"admission-270c8.appspot.com",messagingSenderId:"666914927508",appId:"1:666914927508:web:58b2634b2c4047189c5581",measurementId:"G-99YZZ309FT"});var m=n(0);function g(e){return Object(m.jsx)(r.b,{exact:!0,path:e.path,render:function(t){return localStorage.getItem(b)?Object(m.jsx)("div",{className:"container-fluid p-0 m-0",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-3 p-0",children:Object(m.jsxs)(j.c,{style:{position:"fixed",width:"auto",height:"100%",overflowX:"hidden",overflowY:"auto",zIndex:"101"},children:[Object(m.jsx)(j.f,{children:Object(m.jsx)("h3",{className:"text-center pt-2 pb-2",children:"ADMISSTION"})}),Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.a,{iconShape:"square",children:Object(m.jsxs)(j.g,{title:"Qu\u1ea3n l\xed Tr\u01b0\u1eddng h\u1ecdc",children:[Object(m.jsx)(j.b,{children:Object(m.jsx)(l.a,{to:"/admin/quanLiTruongHoc",children:"Xem danh s\xe1ch tr\u01b0\u1eddng"})}),Object(m.jsx)(j.b,{children:Object(m.jsx)(l.a,{to:"/admin/themTruongHoc",children:"Th\xeam tr\u01b0\u1eddng h\u1ecdc"})}),Object(m.jsxs)(j.g,{title:"Qu\u1ea3n l\xed chuy\xean ng\xe0nh",children:[Object(m.jsx)(j.b,{children:Object(m.jsx)(l.a,{to:"/admin/xemDanhSachChuyenNganh",children:"xem danh s\xe1ch Chuy\xean Ng\xe0nh"})}),Object(m.jsx)(j.b,{children:Object(m.jsx)(l.a,{to:"/admin/themChuyenNganh",children:"Th\xeam Chuy\xean Ng\xe0nh"})})]}),Object(m.jsxs)(j.g,{title:"Qu\u1ea3n l\xed c\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p",children:[Object(m.jsx)(j.b,{children:Object(m.jsx)(l.a,{to:"/admin/xemCauHoi",children:"xem c\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"})}),Object(m.jsx)(j.b,{children:Object(m.jsx)(l.a,{to:"/admin/themCauHoi",children:"Th\xeam c\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"})})]})]})}),Object(m.jsx)(j.a,{iconShape:"square",children:Object(m.jsxs)(j.g,{title:"Qu\u1ea3n l\xed ng\u01b0\u1eddi t\u01b0 v\u1ea5n",children:[Object(m.jsx)(j.b,{children:Object(m.jsx)(l.a,{to:"/admin/quanLiNguoiDung",children:"Danh s\xe1ch nguoi d\xf9ng"})}),Object(m.jsx)(j.b,{children:Object(m.jsx)(l.a,{to:"/admin/themNguoiDung",children:"Th\xeam ng\u01b0\u1eddi d\xf9ng"})})]})})]}),Object(m.jsx)(j.e,{className:"text-center",children:Object(m.jsx)(l.a,{to:"/",onClick:function(){localStorage.removeItem(b),x.auth().signOut(),H.push("/"),window.location.reload()},className:"btn btn-outline-light m-3",children:"Logout"})})]})}),Object(m.jsx)("div",{className:"col-9 p-0 mt-5",children:Object(m.jsx)(e.component,Object(h.a)({},t))})]})}):Object(m.jsx)(r.a,{to:"/login"})}})}function O(e){return Object(m.jsx)(r.b,{exact:!0,path:e.path,render:function(t){return localStorage.getItem(b)?Object(m.jsx)(r.a,{to:"/admin"}):Object(m.jsx)("div",{children:Object(m.jsx)(e.component,Object(h.a)({},t))})}})}var p=n(37),f=n(93),v=n(92),N=n(16),y=n.n(N),T=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).dangNhap=function(e){return y()({url:"".concat(u,"/api/Login"),data:"",method:"GET",headers:{token:e}})},e.layDuLieuDangNhap=function(){return y()({url:"".concat(u,"/api/Login/GetValue"),method:"GET",headers:{}})},e}return n}((function e(){Object(p.a)(this,e),this.get=function(e){return y()({url:"".concat(u,"/").concat(e),method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem(d))}})},this.post=function(e,t){return y()({url:"".concat(u,"/").concat(e),data:t,method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem(d))}})},this.put=function(e,t){return y()({url:"".concat(u,"/").concat(e),data:t,method:"PUT",headers:{Authorization:"Bearer ".concat(localStorage.getItem(d))}})},this.delete=function(e){return y()({url:"".concat(u,"/").concat(e),method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.getItem(d))}})}})),I=new T;var w=function(){return Object(m.jsx)("div",{className:"bg-dark",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"740px"},children:Object(m.jsxs)("form",{className:"p-5  bg-white",style:{width:"500px"},children:[Object(m.jsx)("h1",{className:"text-center p-3",children:"Admisstion"}),Object(m.jsx)("h3",{className:"text-center p-2",children:"Admin manager login"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("div",{class:"form-group",children:Object(m.jsx)("input",{type:"text",class:"form-control",name:"",id:"","aria-describedby":"helpId",placeholder:"t\xe0i kho\u1ea3n"})}),Object(m.jsx)("div",{class:"form-group",children:Object(m.jsx)("input",{type:"text",class:"form-control",name:"",id:"","aria-describedby":"helpId",placeholder:"m\u1eadt kh\u1ea9u"})}),Object(m.jsx)("div",{class:"form-group",children:Object(m.jsx)(l.a,{className:"nav-link btn btn-success",to:"/admin",children:"\u0111\u0103ng nh\u1eadp"})}),Object(m.jsx)("div",{className:"login-buttons",children:Object(m.jsxs)("button",{type:"button",className:"btn btn-danger btn-block",onClick:function(){var e=new x.auth.GoogleAuthProvider;console.log(e),x.auth().signInWithPopup(e).then((function(e){localStorage.setItem(b,e.credential.accessToken),x.auth().currentUser.getIdToken(!0).then((function(e){I.dangNhap(e);var t=I.layDuLieuDangNhap();console.log(t)})).catch((function(e){console.log(e.error)})),H.push("/admin"),window.location.reload()})).catch((function(e){console.log(e)}))},children:[Object(m.jsx)("i",{className:"fab fa-google-plus-g"}),"Login with google"]})})]})]})})};function S(){return Object(m.jsxs)("div",{style:{marginRight:"10rem"},children:[Object(m.jsx)("h1",{className:"text-center p-3",children:"C\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"c\xe2u h\u1ecfi"}),Object(m.jsx)("th",{children:"c\xe2u c\xe2u tr\u1ea3 l\u1eddi"}),Object(m.jsx)("th",{children:"ch\u1ee9c n\u0103ng"})]})}),Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"1+1"}),Object(m.jsx)("td",{children:"2"}),Object(m.jsxs)("td",{children:[Object(m.jsx)("button",{className:"btn btn-warning",children:"s\u1eeda"}),Object(m.jsx)("button",{className:"btn btn-danger",children:"x\xf3a"})]})]})})]})]})}function C(){return Object(m.jsx)("div",{children:"Qu\u1ea3n l\xed tr\u01b0\u1eddng h\u1ecdc"})}function D(){return Object(m.jsx)("div",{children:"Th\xeam c\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"})}function k(){return Object(m.jsx)("div",{children:"Qu\u1ea3n l\xed chuy\xean ng\xe0nh"})}function L(){return Object(m.jsx)("div",{children:"Th\xeam chuy\xean Ng\xe0nh"})}function A(){return Object(m.jsx)("div",{children:"Th\xeam Tr\u01b0\u1eddng h\u1ecdc"})}function E(){return Object(m.jsxs)("div",{style:{marginRight:"10rem"},children:[Object(m.jsx)("h1",{className:"text-center pb-3",children:"Qu\u1ea3n l\xed ng\u01b0\u1eddi d\xf9ng"}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"T\xean Ng\u01b0\u1eddi d\xf9ng"}),Object(m.jsx)("th",{children:"tr\u1ea1ng th\xe1i"}),Object(m.jsx)("th",{children:"quy\u1ec1n"}),Object(m.jsx)("th",{children:"ch\u1ee9c n\u0103ng"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"nguy\u1ec5n v\u0103n A"}),Object(m.jsx)("td",{children:Object(m.jsxs)("select",{name:"",id:"",children:[Object(m.jsx)("option",{value:"true",children:"ho\u1ea1t \u0111\u1ed9ng"}),Object(m.jsx)("option",{value:"false",children:"ng\u01b0ng ho\u1ea1t \u0111\u1ed9ng"})]})}),Object(m.jsx)("td",{children:Object(m.jsxs)("select",{name:"",id:"",children:[Object(m.jsx)("option",{value:"true",children:"admin"}),Object(m.jsx)("option",{value:"false",children:"user"})]})}),Object(m.jsxs)("td",{children:[Object(m.jsx)("button",{className:"btn btn-warning",children:"s\u1eeda"}),Object(m.jsx)("button",{className:"btn btn-danger",children:"x\xf3a"})]})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"nguy\u1ec5n v\u0103n b"}),Object(m.jsx)("td",{children:Object(m.jsxs)("select",{name:"",id:"",children:[Object(m.jsx)("option",{value:"true",children:"ho\u1ea1t \u0111\u1ed9ng"}),Object(m.jsx)("option",{value:"false",children:"ng\u01b0ng ho\u1ea1t \u0111\u1ed9ng"})]})}),Object(m.jsx)("td",{children:Object(m.jsxs)("select",{name:"",id:"",children:[Object(m.jsx)("option",{value:"true",children:"admin"}),Object(m.jsx)("option",{value:"false",children:"user"})]})}),Object(m.jsxs)("td",{children:[Object(m.jsx)("button",{className:"btn btn-warning",children:"s\u1eeda"}),Object(m.jsx)("button",{className:"btn btn-danger",children:"x\xf3a"})]})]})]})]})]})}function z(){return Object(m.jsx)("div",{children:"Th\xeam Ng\u01b0\u1eddi D\xf9ng"})}var H=Object(o.a)();var Q=function(){return Object(m.jsx)(r.c,{history:H,children:Object(m.jsxs)(r.d,{children:[Object(m.jsx)(g,{path:"/admin/quanLiTruongHoc",component:C}),Object(m.jsx)(g,{path:"/admin/themTruongHoc",component:A}),Object(m.jsx)(g,{path:"/admin/xemCauHoi",component:S}),Object(m.jsx)(g,{path:"/admin/themCauHoi",component:D}),Object(m.jsx)(g,{path:"/admin/xemDanhSachChuyenNganh",component:k}),Object(m.jsx)(g,{path:"/admin/themChuyenNganh",component:L}),Object(m.jsx)(g,{path:"/admin/quanLiNguoidung",component:E}),Object(m.jsx)(g,{path:"/admin/themNguoiDung",component:z}),Object(m.jsx)(g,{path:"/admin",component:C}),Object(m.jsx)(O,{path:"/login",component:w}),Object(m.jsx)(O,{path:"/",component:w})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root")),q()},98:function(e,t,n){},99:function(e,t,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.dffca893.chunk.js.map