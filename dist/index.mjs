import e from"react";var t=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),(r.prototype=Object.create(t&&t.prototype)).constructor=r,r.prototype.render=function(){var t=this.props.children.filter(function(e){return!(!e.props||!e.props.field||!e.props.label)});return e.createElement("div",null,e.createElement("table",{className:"table table-striped"},e.createElement("thead",null,e.createElement("tr",null,t.map(function(t){return e.createElement("th",{scope:"col",key:t.props.id},t.props.label)}))),e.createElement("tbody",null,this.props.data.map(function(r){return e.createElement("tr",{key:r.id},t.map(function(t){return e.createElement("td",{key:t.props.id},r[t.props.field])}))}))))},r}(e.Component),r=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),(r.prototype=Object.create(t&&t.prototype)).constructor=r,r.prototype.render=function(){return e.createElement("div",null,"col")},r}(e.Component);export default t;export{r as ImbaTableColumn};
//# sourceMappingURL=index.mjs.map
