(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:""},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.togglemode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"light"===e.mode?"Enable Dark mode":"Enable light mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("div",{className:"form-floating"},l.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"#042743"}},"Analyze your text here"),l.a.createElement("textarea",{className:"form-control",onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"white":"042743",color:"dark"===e.mode?"black":"dark"},id:"myBox",value:r,rows:"8"}),l.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Text has been converted to uppercase","success")}}," Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Text has been converted to lowercase","success")}}," Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){o(""),console.log("this is will clear you text"),e.showAlert("Text has been cleared","success")}}," Clear")))),l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,r.split(" ").length," ",l.a.createElement("b",null,"Words")," and ",r.length," ",l.a.createElement("b",null,"Letters")),l.a.createElement("p",null,.008*r.split(" ").length," ",l.a.createElement("b",null,"m/s Times, will take to read your all text.")," "),l.a.createElement("p",null," ",l.a.createElement("b",null,"Preview")," ",l.a.createElement("br",null)," ",r.length>0?r:"Enter something in tect to preview")))}s.defaultProps={title:"Set title here",aboutproject:"Set About project here"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type,' role="alert" ')},function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"! ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Textutils",aboutproject:"AboutTexutils",mode:a,togglemode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",g("Dark mode has been enabled","success"),document.title="TextUtils Dark Mode"):(r("light"),document.body.style.backgroundColor="white",g("Light mode has been enabled","success"),document.title="TextUtils Light Mode"),console.log("you are clicking a togglemode")}}),l.a.createElement(i,{alert:d}),l.a.createElement(m,{showAlert:g,heading:"Enter the text to Analyze",mode:a}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.357766ac.chunk.js.map