(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(8),i=a.n(l),r=(a(22),a(9)),d=a(10),o=a(14),u=a(11),s=a(15),h=(a(23),a(24),function(e){return c.a.createElement("div",{className:"button-wrapper \n        ".concat((t=e.children,isNaN(t)&&"."!==t&&"="!==t?"operator":null)),onClick:function(){return e.handleClick(e.children)}},e.children);var t}),p=(a(25),function(e){return c.a.createElement("div",{className:"input"},e.input)}),m=(a(26),function(e){return c.a.createElement("div",{className:"clear-button",onClick:e.handleClear},e.children)}),E=a(30),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addToInput=function(e){"x"===e&&(e="*"),"ERROR"===a.state.input||"Infinity"===a.state.input?a.setState({input:""+e}):a.setState({input:a.state.input+e})},a.handleEqual=function(){try{a.setState({input:E.a(a.state.input)})}catch(e){a.setState({input:"ERROR"})}},a.backSpaceClear=function(){"ERROR"===a.state.input||"Infinity"===a.state.input?a.setState({input:""}):a.setState({input:a.state.input.slice(0,-1)})},a.clearAll=function(){a.setState({input:""})},a.state={input:""},a}return Object(s.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"calc-wrapper"},c.a.createElement(p,{input:this.state.input}),c.a.createElement("div",{className:"row"},c.a.createElement(m,{handleClear:function(){return e.backSpaceClear()}},"CE"),c.a.createElement(m,{handleClear:function(){return e.clearAll()}},"C"),c.a.createElement(h,{handleClick:this.addToInput},"("),c.a.createElement(h,{handleClick:this.addToInput},")")),c.a.createElement("div",{className:"row"},c.a.createElement(h,{handleClick:this.addToInput},"1"),c.a.createElement(h,{handleClick:this.addToInput},"2"),c.a.createElement(h,{handleClick:this.addToInput},"3"),c.a.createElement(h,{handleClick:this.addToInput},"+")),c.a.createElement("div",{className:"row"},c.a.createElement(h,{handleClick:this.addToInput},"4"),c.a.createElement(h,{handleClick:this.addToInput},"5"),c.a.createElement(h,{handleClick:this.addToInput},"6"),c.a.createElement(h,{handleClick:this.addToInput},"-")),c.a.createElement("div",{className:"row"},c.a.createElement(h,{handleClick:this.addToInput},"7"),c.a.createElement(h,{handleClick:this.addToInput},"8"),c.a.createElement(h,{handleClick:this.addToInput},"9"),c.a.createElement(h,{handleClick:this.addToInput},"x")),c.a.createElement("div",{className:"row"},c.a.createElement(h,{handleClick:this.addToInput},"."),c.a.createElement(h,{handleClick:this.addToInput},"0"),c.a.createElement(h,{handleClick:function(){return e.handleEqual()}},"="),c.a.createElement(h,{handleClick:this.addToInput},"/"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.519397f0.chunk.js.map