!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(e.reactImbaTables={},e.react)}(this,function(e,t){var r=function(e){function r(){e.apply(this,arguments)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.render=function(){var e=this.props.children.filter(function(e){return!(!e.props||!e.props.field||!e.props.label)});return t.createElement("div",null,t.createElement("table",{className:"table table-striped"},t.createElement("thead",null,t.createElement("tr",null,e.map(function(e){return t.createElement("th",{scope:"col",key:e.props.id},e.props.label)}))),t.createElement("tbody",null,this.props.data.map(function(r){return t.createElement("tr",{key:r.id},e.map(function(e){return t.createElement("td",{key:e.props.id},r[e.props.field])}))}))))},r}((t=t&&t.hasOwnProperty("default")?t.default:t).Component);e.ImbaTableColumn=function(e){function r(){e.apply(this,arguments)}return e&&(r.__proto__=e),(r.prototype=Object.create(e&&e.prototype)).constructor=r,r.prototype.render=function(){return t.createElement("div",null,"col")},r}(t.Component),e.default=r});
//# sourceMappingURL=index.umd.js.map