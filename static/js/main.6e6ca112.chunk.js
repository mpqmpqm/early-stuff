(this["webpackJsonpearly-stuff"]=this["webpackJsonpearly-stuff"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),i=a(3),s=a.n(i),r=(a(14),a(4)),c=a(5),o=a(8),u=a(6),d=a(1),h=a(7);a(15);var m=function(t){return t.loading?l.a.createElement("h3",null,"Loading..."):t.title?l.a.createElement("h3",null,t.title," ",t.year?"(".concat(t.year,")"):null):null};var g=function(t){return t.foundAct?t.loading?l.a.createElement("h3",null,"Loading..."):l.a.createElement("div",null,l.a.createElement(m,{title:t.titles[0],year:t.years[0],loading:t.loading}),l.a.createElement(m,{title:t.titles[1],year:t.years[1],loading:t.loading}),l.a.createElement(m,{title:t.titles[2],year:t.years[2],loading:t.loading})):null};var f=function(t){return t.foundAct?t.loading?null:t.src.length>0?l.a.createElement("img",{src:t.src,alt:t.alt}):null:null};var E=function(t){return t.init?l.a.createElement("h2",null,"Enter a musical act, get back their earliest releases."):t.loading?l.a.createElement("h2",null,"Loading..."):t.foundAct?l.a.createElement("h2",null,l.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},t.name)):l.a.createElement("h2",null,"Not found. Please try again.")},b=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(o.a)(this,Object(u.a)(e).call(this))).handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.state={act:{loading:!1,init:!0,link:"",name:"",foundAct:!1},loading:!1,data:{},value:"",titles:[],years:[],thumb:{src:"",loading:!1}},t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),this.setState({act:{loading:!0,init:!1},loading:!0,thumb:{loading:!0}}),fetch("https://api.discogs.com/database/search?type=artist&q=".concat(this.state.value,"&key=").concat("tYumlFYEMwUXeeIURptE","&secret=").concat("wDhnGZAYPXjdhQDHWdduAXHQAbAjnCAE")).then((function(t){return t.json()})).then((function(t){e.setState({data:t})})).then((function(){e.state.data.results.length>0?(e.setState({act:{foundAct:!0,name:e.state.data.results[0].title,link:"https://www.discogs.com".concat(e.state.data.results[0].uri),loading:!1},thumb:{src:e.state.data.results[0].thumb,loading:!1}}),fetch("https://api.discogs.com/artists/".concat(e.state.data.results[0].id,"/releases?year,asc&page=1&per_page=3&key=").concat("tYumlFYEMwUXeeIURptE","&secret=").concat("wDhnGZAYPXjdhQDHWdduAXHQAbAjnCAE")).then((function(t){return t.json()})).then((function(t){var a=0,n=[],l=[];for(console.log(t);a<t.releases.length&&!(a>2);a++)n.push(t.releases[a].title),l.push(t.releases[a].year);e.setState({titles:n,years:l,loading:!1})}))):e.setState({act:{name:"Not found, please try again."},loading:!1,foundAct:!1})})),t.target.reset(),t.target.focus()}},{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("h1",null,"I liked their early stuff better..."),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",onChange:this.handleChange}),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{class:"thumb"},l.a.createElement(f,{src:this.state.thumb.src,alt:this.state.act.name,foundAct:this.state.act.foundAct,loading:this.state.thumb.loading})),l.a.createElement("div",{className:"text"},l.a.createElement(E,{name:this.state.act.name,link:this.state.act.link,init:this.state.act.init,loading:this.state.act.loading,foundAct:this.state.act.foundAct}),l.a.createElement(g,{titles:this.state.titles,years:this.state.years,loading:this.state.loading,foundAct:this.state.act.foundAct}))))}}]),e}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6e6ca112.chunk.js.map