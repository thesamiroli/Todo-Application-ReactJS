(this["webpackJsonptodo-application-reactjs"]=this["webpackJsonptodo-application-reactjs"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/emptyList.bd1c9bd8.png"},,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),i=a(9),o=a(1),l=a(2),u=a(4),d=a(3),p=a(5),h=(a(15),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.checked?"list-item checked":"list-item",t=this.props.checked?c.a.createElement("i",{className:"fas fa-check-circle"}):c.a.createElement("i",{className:"far fa-circle"}),a=c.a.createElement("i",{className:"fas fa-trash-alt delete-icon"});return c.a.createElement("div",{className:e},this.props.itemTitle,c.a.createElement("span",{className:"tick check",onClick:this.props.onItemClicked},t),c.a.createElement("span",{onClick:this.props.onDeleteIconClicked,className:"tick"},a))}}]),t}(n.Component)),m=(a(16),a(17),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"add-wrapper"},c.a.createElement("input",{type:"text",className:"add-item",placeholder:"Add notes...",value:this.props.value,onChange:this.props.onChange,onKeyDown:this.props.onEnter}),c.a.createElement("i",{className:"fas fa-plus-circle add-icon",onClick:this.props.onIconClick}))}}]),t}(n.Component)),f=(a(18),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"search-wrapper"},c.a.createElement("input",{type:"text",onChange:this.props.onChange,className:"search-input",placeholder:"Search your todos...",value:this.props.searchTerm}))}}]),t}(n.Component)),b=(a(19),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.selected?"tab selected":"tab";return c.a.createElement("div",{className:e,onClick:this.props.onClick},this.props.tabName)}}]),t}(n.Component)),k=(a(20),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"logo-wrapper"},"TAREA")}}]),t}(n.Component)),v=a(8),C=a.n(v),j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).updateTabs=function(t){for(var a=e.state.tabs,n=0;n<a.length;n++)a[n].selected=!1,a[n].title==t&&(a[n].selected=!0);return a},e.onInputChange=function(t){e.setState({inputTerm:t.target.value})},e.addTodo=function(){var t=document.querySelector(".add-item").value;if(""!=t){var a=e.updateTabs(e.state.currentTab),n={id:e.state.todos.length,title:t,checked:!1};e.setState({inputTerm:"",todos:[].concat(Object(i.a)(e.state.todos),[n]),tabs:a})}},e.onEnter=function(t){13===t.keyCode&&(t.preventDefault(),e.addTodo())},e.state={currentTab:"All",todos:[],inputTerm:"",searchTerm:"",tabs:[{title:"All",selected:!0},{title:"Completed",selected:!1},{title:"Remaining",selected:!1}]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getItemsToDisplay",value:function(e){var t=this;console.log("Tab : ",e);var a="";return"All"===e?a=this.state.todos.filter((function(e){return!0})):"Completed"===e?a=this.state.todos.filter((function(e){return e.checked})):"Remaining"===e&&(a=this.state.todos.filter((function(e){return!e.checked}))),""!=this.state.searchTerm?a.filter((function(e){return e.title.toLowerCase().includes(t.state.searchTerm.toLowerCase())})):a}},{key:"tabClickedHandler",value:function(e,t){var a=this.updateTabs(this.state.tabs[t].title);this.setState({tabs:a,currentTab:e.title,inputTerm:""})}},{key:"onItemClickedHandler",value:function(e,t){for(var a=this.state.todos,n=0;n<a.length;n++)a[n].id==e.id&&(a[n].checked=!a[n].checked);this.setState({todos:a})}},{key:"onDeleteIconClickedHandler",value:function(e,t){for(var a=[],n=0;n<this.state.todos.length;n++)t!=n&&a.push(this.state.todos[n]);this.setState({todos:a})}},{key:"render",value:function(){var e=this,t=this.getItemsToDisplay(this.state.currentTab);return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"header-wrapper"},c.a.createElement("div",{className:"logo-search-wrapper"},c.a.createElement(k,null),c.a.createElement(f,{value:this.state.searchTerm,onChange:function(t){return e.setState({searchTerm:t.target.value})}})),c.a.createElement("div",{className:"tab-wrapper"},this.state.tabs.map((function(t,a){return c.a.createElement(b,{key:a,selected:t.selected,tabName:t.title,onClick:function(n){e.tabClickedHandler(t,a)}})})))),c.a.createElement("div",{className:"body-wrapper"},c.a.createElement(m,{onIconClick:this.addTodo,onEnter:this.onEnter,onChange:function(t){return e.setState({inputTerm:t.target.value})},value:this.state.inputTerm}),t.length>0?t.map((function(t,a){return c.a.createElement("div",null,c.a.createElement(h,{onItemClicked:function(n){e.onItemClickedHandler(t,a)},onDeleteIconClicked:function(n){e.onDeleteIconClickedHandler(t,a)},index:a,itemTitle:t.title,checked:t.checked}))})):c.a.createElement("div",{className:"empty-list"},c.a.createElement("img",{src:C.a}))))}}]),t}(n.Component);s.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4f784cc8.chunk.js.map