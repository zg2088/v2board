(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("3a4m"),r=a.n(s),l=a("/MKj"),c=a("20nU"),m=a("yWgo");class o extends i.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],t=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speech"})}];Object(m["b"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:t}):this.setState({nav:e})}renderMenu(e,t,a,n){switch(e){case"heading":return i.a.createElement("li",{className:"nav-main-heading"},t);case"item":return i.a.createElement("li",{className:"nav-main-item"},i.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===a&&"active"),onClick:()=>{r.a.push(a),this.props.dispatch({type:"header/showNav"})}},n&&n,i.a.createElement("span",{className:"nav-main-link-name"},t)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return i.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},i.a.createElement("div",{className:"smini-visible-block"},i.a.createElement("div",{className:"content-header bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},"X"),i.a.createElement("span",{className:"text-white"},"H")))),i.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},i.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),i.a.createElement("div",{className:"d-lg-none"},i.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-times-circle"}))))),i.a.createElement("div",{className:"content-side content-side-full"},i.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(l["c"])(e=>{var t=e.header;return{header:t}})(o),h=a("t3Un");class p extends i.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(t){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return i.a.createElement("header",{id:"page-header"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},i.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&i.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},i.a.createElement("i",{className:"fa fa-fw fa-search"})," ",i.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),i.a.createElement("div",null),i.a.createElement("div",null,this.state.loading?i.a.createElement("div",{className:"spinner-grow text-primary"}):i.a.createElement("div",{className:"dropdown d-inline-block"},i.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},i.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),i.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),i.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},i.a.createElement("div",{className:"p-2"},i.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",i.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&i.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},i.a.createElement("div",{className:"content-header bg-dark"},i.a.createElement("div",{className:"w-100"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},i.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),i.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var u=Object(l["c"])(e=>{var t=e.header;return{header:t}})(p);class v extends i.a.Component{render(){return i.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},i.a.createElement("div",{className:"content py-0"},i.a.createElement("div",{className:"row font-size-sm"},i.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},i.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),i.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},i.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),i.a.createElement("span",{"data-toggle":"year-copy"})))))}}class b extends i.a.Component{render(){return i.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},i.a.createElement(d,this.props),i.a.createElement(u,{search:this.props.search}),this.props.loading?i.a.createElement("main",{id:"main-container"},i.a.createElement("div",{className:"content content-full"},i.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,i.a.createElement(v,null))}}t["a"]=Object(l["c"])(e=>{var t=e.header;return{header:t}})(b)},LbTH:function(e,t,a){"use strict";t["a"]={cycleText:{month_price:"\u6708\u4ed8",quarter_price:"\u5b63\u4ed8",half_year_price:"\u534a\u5e74\u4ed8",year_price:"\u5e74\u4ed8"},orderStatusText:["\u5f85\u652f\u4ed8","\u5f00\u901a\u4e2d","\u5df2\u53d6\u6d88","\u5df2\u5b8c\u6210"],commissionStatusText:["\u786e\u8ba4\u4e2d","\u5df2\u786e\u8ba4","\u5df2\u5b8c\u6210"]}},Yzce:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});var n=a("jehZ"),i=a.n(n),s=(a("2qtc"),a("kLXV")),r=(a("5NDa"),a("5rEg")),l=a("p0pE"),c=a.n(l),m=(a("g9YV"),a("wCAj")),o=(a("Pwec"),a("CtXQ")),d=(a("/zsF"),a("PArb")),h=a("q1tI"),p=a.n(h),u=a("Bl7J"),v=a("t3Un"),b=(a("LbTH"),a("wd/R")),E=a.n(b);class g extends p.a.Component{constructor(){super(...arguments),this.state={visible:!1,submit:{},notices:[],loading:!0}}componentDidMount(){this.fetchData()}fetchData(){Object(v["a"])("/admin/notice").then(e=>{200===e.code&&this.setState({notices:e.data,loading:!1})})}modalVisible(){this.setState({visible:!this.state.visible},()=>{this.state.visible||this.setState({submit:{}})})}save(){var e="/admin/notice/save";this.state.submit.id&&(e="/admin/notice/update"),Object(v["b"])(e,this.state.submit).then(e=>{200===e.code&&(this.modalVisible(),this.fetchData())})}drop(e){Object(v["b"])("/admin/notice/drop",{id:e.id}).then(e=>{200===e.code&&this.fetchData()})}render(){var e=[{title:"#",dataIndex:"id",key:"id"},{title:"\u6807\u9898",dataIndex:"title",key:"title"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at",key:"created_at",align:"right",render:e=>{return E()(1e3*e).format("YYYY/MM/DD HH:mm")}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"right",render:(e,t,a)=>{return p.a.createElement("div",null,p.a.createElement("a",{onClick:()=>this.setState({submit:this.state.notices[a]},()=>this.modalVisible()),href:"javascript:;"},"\u7f16\u8f91"),p.a.createElement(d["a"],{type:"vertical"}),p.a.createElement("a",{onClick:()=>this.drop(t),href:"javascript:;"},"\u5220\u9664"))}}];return p.a.createElement(u["a"],i()({},this.props,{loading:this.state.loading}),p.a.createElement("main",{id:"main-container"},p.a.createElement("div",{className:"content content-full"},p.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},p.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u516c\u544a\u7ba1\u7406"),p.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3",onClick:()=>this.modalVisible()},p.a.createElement(o["a"],{type:"plus"})," \u65b0\u5efa\u516c\u544a")),p.a.createElement("div",{className:"bg-white"},p.a.createElement(m["a"],{dataSource:this.state.notices,pagination:this.state.pagination,columns:e,scroll:{x:950}})))),p.a.createElement(s["a"],{title:"".concat(this.state.submit.id?"\u7f16\u8f91\u516c\u544a":"\u65b0\u5efa\u516c\u544a"),visible:this.state.visible,onCancel:()=>this.modalVisible(),onOk:()=>this.save()},p.a.createElement("div",null,p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{for:"example-text-input-alt"},"\u6807\u9898"),p.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165\u516c\u544a\u6807\u9898",value:this.state.submit.title,onChange:e=>{this.setState({submit:c()({},this.state.submit,{title:e.target.value})})}})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{for:"example-text-input-alt"},"\u516c\u544a\u5185\u5bb9"),p.a.createElement(r["a"].TextArea,{rows:12,value:this.state.submit.content,placeholder:"\u8bf7\u8f93\u5165\u516c\u544a\u5185\u5bb9",onChange:e=>{this.setState({submit:c()({},this.state.submit,{content:e.target.value})})}})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{for:"example-text-input-alt"},"\u56fe\u7247URL"),p.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165\u56fe\u7247URL",value:this.state.submit.img_url,onChange:e=>{this.setState({submit:c()({},this.state.submit,{img_url:e.target.value})})}})))))}}}}]);