import e from "react";

var t=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),(r.prototype=Object.create(t&&t.prototype)).constructor=r,r.prototype.renderPageButtons=function(){var t=this;return Array.from(Array(this.props.pages).keys()).map(function(r, o){return e.createElement("li",{key:o,className:"page-item"+(r+1===t.props.currentPage?" active":""),onClick:function(){t.props.onPageSelected(r+1)}},e.createElement("a",{className:"page-link",href:"#"},r+1))})},r.prototype.render=function(){var t=this,r=this.props.currentPage>=this.props.pages?" disabled":"";return e.createElement("div",null,e.createElement("nav",{"aria-label":"Page navigation example"},e.createElement("ul",{className:"pagination"},e.createElement("li",{className:"page-item"+(this.props.currentPage<=1?" disabled":""),onClick:function(){t.props.onPrevious()}},e.createElement("a",{className:"page-link",href:"#"},"Previous")),this.renderPageButtons(),e.createElement("li",{className:"page-item"+r,onClick:function(){t.props.onNext()}},e.createElement("a",{className:"page-link",href:"#"},"Next")))))},r}(e.Component),r=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),(r.prototype=Object.create(t&&t.prototype)).constructor=r,r.prototype.render=function(){var t=this;return e.createElement("div",null,e.createElement("input",{type:"email",className:"form-control",placeholder:"Search...",onChange:function(e){t.props.onChange(e.target.value)}}))},r}(e.Component),o=function(t){var r=t.id,o=t.sortable,a=t.sortColId,n=t.sortAsc,s=t.onClick,c=function(){s(r,a!==r||!n)};return e.createElement("th",void 0===o||o?a===r?n?{onClick:c,scope:"col",className:"sortable asc"}:{onClick:c,scope:"col",className:"sortable desc"}:{onClick:c,scope:"col",className:"sortable"}:{scope:"col"},t.label)},a=function(a){function n(e){a.call(this,e),this.state={page:1,rowsPerPage:5,searchText:"",sortColId:1,sortAsc:!0}}return a&&(n.__proto__=a),(n.prototype=Object.create(a&&a.prototype)).constructor=n,n.prototype.componentDidUpdate=function(e,t,r){e.data.length!==this.props.data.length&&this.setState({page:1})},n.prototype.render=function(){var a=this,n=this.props,s=n.data,c=n.children.filter(function(e){return!(!e.props||!e.props.field||!e.props.label)}),p=s;this.state.searchText.length>0&&(p=s.filter(function(e){return Object.keys(e).find(function(t){return-1!==e[t].toString().toLowerCase().indexOf(a.state.searchText.toLocaleLowerCase())})}));var l=p.sort(function(e,t){var r=c.find(function(e){return e.props.id===a.state.sortColId});if(!r)return 0;var o=r.props.field;return e[o]<t[o]?a.state.sortAsc?-1:1:e[o]>t[o]?a.state.sortAsc?1:-1:0}),i=Math.ceil(l.length/this.state.rowsPerPage),u=(this.state.page-1)*this.state.rowsPerPage,m=u+this.state.rowsPerPage;m>s.length&&(m=s.length);var f=l.slice(u,m);return e.createElement("div",{className:"react-imba-table"},e.createElement(r,{onChange:function(e){a.setState({searchText:e,page:1})}}),e.createElement("table",{className:"table table-striped"},e.createElement("thead",null,e.createElement("tr",null,c.map(function(t){return e.createElement(o,{id:t.props.id,key:t.props.id,label:t.props.label,sortable:t.props.sortable,sortColId:a.state.sortColId,sortAsc:a.state.sortAsc,onClick:function(e,r){a.setState({sortColId:t.props.id,sortAsc:r})}})}))),e.createElement("tbody",null,f.map(function(t){return e.createElement("tr",{key:t.id},c.map(function(r){return e.createElement("td",{key:r.props.id},t[r.props.field])}))}))),e.createElement(t,{pages:i,currentPage:this.state.page,onPageSelected:function(e){a.setState({page:e})},onPrevious:function(){a.state.page>1&&a.setState({page:a.state.page-1})},onNext:function(){a.state.page<i&&a.setState({page:a.state.page+1})}}),"Showing Page ",this.state.page," of ",i)},n}(e.Component),n=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),(r.prototype=Object.create(t&&t.prototype)).constructor=r,r.prototype.render=function(){return e.createElement("div",null,"col")},r}(e.Component);export default a;export{n as ImbaTableColumn};
//# sourceMappingURL=index.mjs.map
