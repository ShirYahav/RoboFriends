(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),o=n(7),a=n.n(o),i=(n(13),n(2)),h=n(3),l=n(5),b=n(4),j=function(e){var t=e.id,n=e.name,c=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})]})},u=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},d=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"2px solid white",height:"800px"},children:e.children})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"ooops!"}):this.props.children}}]),n}(c.Component),p=(n(14),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(d,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(O,{children:Object(r.jsx)(u,{robots:c})})})]}):Object(r.jsx)("h1",{children:"Loading"})}}]),n}(c.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.43114fc8.chunk.js.map