(this["webpackJsonpmarx-antd"]=this["webpackJsonpmarx-antd"]||[]).push([[0],{302:function(e,t,n){e.exports=n(704)},307:function(e,t,n){},314:function(e,t,n){},316:function(e,t,n){},632:function(e,t,n){},633:function(e,t,n){},647:function(e,t,n){},690:function(e,t,n){},693:function(e,t,n){},704:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(7),r=n.n(c),i=(n(307),n(308),n(11)),o=n(119),u=n(120),m=n(134),s=n(121),d=n(135),p=(n(285),n(41)),f=(n(312),n(69)),E=(n(314),n(298)),h=n(57),y=(n(193),n(122)),g=(n(316),function(e){return l.a.createElement("div",{className:"usercard"},l.a.createElement(y.a,{style:{verticalAlign:"middle",fontSize:128},size:e.size||128},e.name||"Temp"),l.a.createElement("h2",null,e.name||"Temp"),l.a.createElement("h3",null,l.a.createElement("label",null,"\u6743\u9650\uff1a"),(e.privilege||["\u7cfb\u7edf\u7ba1\u7406\u5458"]).join(" ")))}),b=(n(357),n(295)),v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={ModalText:"Content of the modal",confirmLoading:!1},n.handleOk=function(){n.setState({confirmLoading:!0}),setTimeout((function(){n.setState({visible:!1,confirmLoading:!1})}),2e3)},n.handleCancel=function(){console.log("Clicked cancel button"),n.setState({visible:!1})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.confirmLoading;return l.a.createElement("div",null,l.a.createElement(b.a,{title:"\u8bf7\u586b\u5199\u8868\u5355",visible:this.props.visible,onOk:this.props.handleOk||this.props.doHide,confirmLoading:e,onCancel:this.props.doHide||this.handleCancel},this.props.children))}}]),t}(l.a.Component),k=n(20),x=n(287),j=n.n(x),O=function(e){var t=Object(a.useState)({}),n=Object(k.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)([]),o=Object(k.a)(i,2),u=(o[0],o[1]);return l.a.createElement(j.a,{propsSchema:e.schema,formData:c,onChange:r,onValidate:u})},C={type:"object",properties:{name:{title:"\u5b66\u9662\u540d\u79f0",type:"string"}}},N={type:"object",properties:{name:{title:"\u7ae0\u8282\u540d\u79f0",type:"string"}}},S={type:"object",properties:{name:{title:"\u73ed\u7ea7\u540d\u79f0",type:"string"}}},I={type:"object",properties:{name:{title:"\u5b66\u9662\u540d\u79f0",type:"string"},studentList:{title:"\u9009\u62e9\u5b66\u751f",type:"string"}}},w={type:"object",properties:{name:{title:"\u6d4b\u9a8c\u540d\u79f0",type:"string"},type:{title:"\u7c7b\u578b",type:"string",enum:["\u5927\u8003","\u7ec3\u4e60"]},startAt:{title:"\u5f00\u59cb\u65f6\u95f4",type:"string",format:"datetime"},paperId:{title:"\u9009\u62e9\u8bd5\u5377",type:"string"}}},B={type:"object",properties:{name:{title:"\u4e13\u4e1a\u540d\u79f0",type:"string"}}},H={type:"object",properties:{singleNum:{title:"\u5355\u9009\u9898\u76ee\u6570",type:"number",default:0},singleList:{title:"\u5355\u9009\u9898\u8303\u56f4\u9009\u62e9",type:"string","ui:disabled":function(e,t){return e.singleNum<=0},default:"{}"},multiNum:{title:"\u591a\u9009\u9898\u76ee\u6570",type:"number",default:0},multiList:{title:"\u591a\u9009\u9898\u8303\u56f4\u9009\u62e9",type:"string","ui:disabled":function(e,t){return e.multiNum<=0},default:"{}"},truefalseNum:{title:"\u5224\u65ad\u9898\u76ee\u6570",type:"number",default:0},truefalseList:{title:"\u5224\u65ad\u9898\u8303\u56f4\u9009\u62e9",type:"string","ui:disabled":function(e){return e.truefalseNum<=0},default:"{}"}}},L={type:"object",properties:{id:{title:"\u4e0a\u4f20excel\u6587\u4ef6",type:"string",format:"image"}}},q={type:"object",properties:{name:{title:"\u5b66\u79d1\u540d\u79f0",type:"string"}}},A={type:"object",properties:{name:{title:"\u6559\u5e08\u540d\u79f0",type:"string"},id:{title:"\u767b\u5f55id",type:"string"},password:{title:"\u767b\u5f55\u5bc6\u7801",type:"string",format:"password",default:"123456"}}},z={type:"object",properties:{id:{title:"\u4e0a\u4f20excel\u6587\u4ef6",type:"string",format:"image"}}},J=function(){return l.a.createElement(O,{schema:C})},T=function(){return l.a.createElement(O,{schema:N})},W=function(){return l.a.createElement(O,{schema:S})},D=function(){return l.a.createElement(O,{schema:I})},F=function(){return l.a.createElement(O,{schema:w})},K=function(){return l.a.createElement(O,{schema:B})},M=function(){return l.a.createElement(O,{schema:H})},P=function(){return l.a.createElement(O,{schema:L})},R=function(){return l.a.createElement(O,{schema:q})},G=function(){return l.a.createElement(O,{schema:A})},V=function(){return l.a.createElement(O,{schema:z})},Y={home:{display:"flex",flexDirection:"column",minHeight:"100%"},main:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}},$=function(e){return l.a.createElement("div",{style:Y.home},l.a.createElement("div",null),l.a.createElement("div",{style:Y.main},l.a.createElement(g,null),l.a.createElement(v,null,l.a.createElement(M,null))))},Q=(n(65),n(27)),U=(n(91),n(45)),X=(n(35),n(12)),Z=(n(713),n(296)),_=n(299),ee=(n(632),function(e){var t=Object(_.a)({},e,{extra:void 0!==e.action?l.a.createElement(X.a,{onClick:e.action.handler},e.action.name):void 0});return l.a.createElement(Z.a,Object.assign({style:{border:"1px solid rgb(235, 237, 240)"},title:e.title||"Title"},t))}),te=(n(633),function(e){return l.a.createElement(Q.a,{className:"container",gutter:[24,16],style:{margin:16}},e.children)}),ne=(n(707),n(294)),ae=(n(645),n(300)),le=(n(647),[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}]),ce=function(e){var t=Object(a.useState)([]),n=Object(k.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(k.a)(i,2),u=o[0];o[1];return l.a.createElement("div",null,l.a.createElement("div",{style:{marginBottom:16},className:"actions"},l.a.createElement("div",null,l.a.createElement(X.a,{type:"primary",onClick:function(){r([])},disabled:0===r.length,loading:u},"\u6e05\u9664\u9009\u62e9"),(e.actions||[]).map((function(e,t){return l.a.createElement(X.a,{loading:u,onClick:function(){return e.handler(c.map((function(e){return le.find((function(t){return t.key===e}))})))},key:t},e.title)}))),c.length>0&&l.a.createElement(ae.a,{style:{marginTop:16},message:"\u4f60\u5df2\u9009\u62e9".concat(c.length,"\u9879"),type:"info",className:"selectedInfo"})),l.a.createElement(ne.a,{rowSelection:{selectedRowKeys:c,onChange:function(e){console.log("selectedRowKeys changed: ",e),r(e)}},columns:e.columns||[],dataSource:le,pagination:!1}))},re=(n(184),n(29)),ie=(n(714),n(136)),oe=(n(690),function(e){return l.a.createElement(re.a,{xs:24,sm:12,md:6},l.a.createElement(ie.a,{title:e.collegeName||"College",bordered:!0,style:{maxWidth:300},actions:[l.a.createElement(X.a,{onClick:function(){return(e.handler||function(){})(e)}},"\u67e5\u770b")]},e.majorNum&&l.a.createElement("p",null,"\u4e13\u4e1a\u6570\uff1a",e.majorNum),e.classNum&&l.a.createElement("p",null,"\u73ed\u7ea7\u6570\uff1a",e.classNum)))}),ue=function(e){return l.a.createElement(re.a,{xs:24,sm:12,md:6},l.a.createElement(ie.a,{title:e.majorName||"College",bordered:!0,style:{maxWidth:300},actions:[l.a.createElement(X.a,{onClick:function(){return(e.handler||function(){})(e)}},"\u67e5\u770b")]},e.classNum&&l.a.createElement("p",null,"\u73ed\u7ea7\u6570\uff1a",e.classNum)))},me=function(e){return l.a.createElement(re.a,{xs:24,sm:12,md:6},l.a.createElement(ie.a,{title:e.name||"Subject",bordered:!0,style:{maxWidth:300},actions:[l.a.createElement(X.a,{onClick:function(){(e.handleCourse||function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)})(e)}},"\u67e5\u770b\u8bfe\u7a0b"),l.a.createElement(X.a,{onClick:function(){(e.handleChapter||function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)})(e)}},"\u67e5\u770b\u7ae0\u8282")]},e.chapterNum&&l.a.createElement("p",null,"\u7ae0\u8282\u6570\uff1a",e.chapterNum),e.questionNum&&l.a.createElement("p",null,"\u9898\u76ee\u6570\uff1a",e.questionNum)))},se=function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(F,null)),l.a.createElement(ee,{title:"\u6d4b\u9a8c\u7ba1\u7406",onBack:function(){e.history.goBack()},action:{name:"\u6dfb\u52a0\u6d4b\u9a8c",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(ce,{columns:[{title:"\u8003\u8bd5\u540d\u79f0",dataIndex:"name"},{title:"\u4eba\u6570",dataIndex:"count"},{title:"\u8003\u8bd5\u65f6\u95f4",dataIndex:"startAt"},{title:"\u7c7b\u578b",dataIndex:"type",filters:[{text:"\u672a\u5f00\u59cb",value:"before"},{text:"\u8fdb\u884c\u4e2d",value:"active"},{text:"\u5df2\u7ed3\u675f",value:"end"}],onFilter:function(e,t){return t.name.includes(e)}},{title:"\u72b6\u6001",dataIndex:"status",filters:[{text:"\u672a\u5f00\u59cb",value:"before"},{text:"\u8fdb\u884c\u4e2d",value:"active"},{text:"\u5df2\u7ed3\u675f",value:"end"}],onFilter:function(e,t){return t.name.includes(e)}},{title:"\u64cd\u4f5c",render:function(t,n){return l.a.createElement("span",null,l.a.createElement(X.a,{onClick:function(){console.log(n)}},"\u7f16\u8f91"),l.a.createElement(U.a,{type:"vertical"}),l.a.createElement(X.a,{onClick:function(){e.history.push({pathname:"/educational/examinfo",query:n})}},"\u8be6\u60c5"))}}]})))},de=(n(691),n(297)),pe=(n(693),function(e){return e.data?l.a.createElement(Q.a,{className:"dataShower"},e.data.map((function(e,t){return l.a.createElement(re.a,{xs:12,sm:6,md:3,key:t},l.a.createElement(de.a,{value:e.value,title:e.title}))}))):null}),fe=[{exact:!0,path:"/",name:"\u9996\u9875",icon:"desktop",component:$},{path:"/instruction",name:"\u6559\u5b66\u7ba1\u7406",icon:"desktop",component:$},{path:"/educational",name:"\u6559\u52a1\u7ba1\u7406",icon:"desktop",routes:[{path:"/educational/teacher",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(G,null)),l.a.createElement(ee,{title:"\u6559\u5e08\u7ba1\u7406",action:{name:"\u6dfb\u52a0\u6559\u5e08",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(Q.a,{gutter:[24,16]},l.a.createElement(ce,{columns:[{title:"\u5de5\u53f7",dataIndex:"id"},{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u64cd\u4f5c",render:function(e,t){return l.a.createElement("span",null,l.a.createElement(X.a,{href:"#",onClick:function(){console.log(t)}},"\u91cd\u7f6e\u5bc6\u7801"),l.a.createElement(U.a,{type:"vertical"}),l.a.createElement(X.a,{href:"#",onClick:function(){console.log(t)}},"\u5206\u914d\u8bfe\u7a0b"))}}],actions:[{title:"\u63d0\u4ea4",handler:function(e){console.log(e)}}]}))))},name:"\u6559\u5e08\u7ba1\u7406",display:!0},{path:"/educational/subject",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(R,null)),l.a.createElement(ee,{title:"\u5b66\u79d1\u7ba1\u7406",action:{name:"\u6dfb\u52a0\u5b66\u79d1",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(me,{name:"\u9a6c\u539f",questionNum:12,chapterNum:3,handleCourse:function(t){e.history.push({pathname:"/educational/course",query:t})},handleChapter:function(t){e.history.push({pathname:"/educational/chapter",query:t})}})))},name:"\u5b66\u79d1\u7ba1\u7406",display:!0},{path:"/educational/course",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return console.log(e.location),l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(D,null)),l.a.createElement(ee,{title:"\u8bfe\u7a0b\u7ba1\u7406",onBack:function(){e.history.goBack()},action:{name:"\u6dfb\u52a0\u8bfe\u7a0b",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(ce,{columns:[{title:"\u8bfe\u7a0b\u540d\u79f0",dataIndex:"name"},{title:"\u4eba\u6570",dataIndex:"count"},{title:"\u72b6\u6001",dataIndex:"status",filters:[{text:"\u8fdb\u884c\u4e2d",value:"active"},{text:"\u5df2\u7ed3\u675f",value:"end"}],onFilter:function(e,t){return t.name.includes(e)}},{title:"\u64cd\u4f5c",render:function(e,t){return l.a.createElement("span",null,l.a.createElement(X.a,{href:"#",onClick:function(){console.log(t)}},"\u7f16\u8f91"))}}]})))},name:"\u8bfe\u7a0b\u7ba1\u7406"},{path:"/educational/exam",component:se,name:"\u6d4b\u9a8c\u7ba1\u7406"},{path:"/educational/examinfo",component:function(e){return l.a.createElement("div",null,l.a.createElement(ee,{title:"\u8003\u8bd5\u8be6\u60c5",onBack:function(){e.history.goBack()}}),l.a.createElement(te,null,l.a.createElement(pe,{data:[{title:"\u5e73\u5747\u5206",value:61},{title:"\u6700\u9ad8\u5206",value:99},{title:"\u53ca\u683c\u4eba\u6570",value:30}]}),l.a.createElement(ce,{columns:[{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u5b66\u53f7",dataIndex:"id"},{title:"\u5206\u6570",dataIndex:"grade"}]})))},name:"\u8003\u8bd5\u4fe1\u606f"},{path:"/educational/chapter",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(T,null)),l.a.createElement(ee,{title:"\u7ae0\u8282\u7ba1\u7406",onBack:function(){e.history.goBack()},action:{name:"\u6dfb\u52a0\u7ae0\u8282",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(ce,{columns:[{title:"\u7ae0\u8282\u540d\u79f0",dataIndex:"name"},{title:"\u64cd\u4f5c",render:function(t,n){return l.a.createElement("span",null,l.a.createElement(X.a,{href:"#",onClick:function(){e.history.push({pathname:"/educational/question",query:n})}},"\u67e5\u770b\u8be6\u60c5"))}}]})))},name:"\u7ae0\u8282\u7ba1\u7406"},{path:"/educational/question",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(V,null)),l.a.createElement(ee,{title:"\u9898\u76ee\u7ba1\u7406",onBack:function(){e.history.goBack()},action:{name:"\u6dfb\u52a0\u9898\u76ee",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(ce,{columns:[{title:"\u9898\u5e72",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u64cd\u4f5c",render:function(e,t){return l.a.createElement("span",null,l.a.createElement(X.a,{onClick:function(){console.log(t)}},"\u7f16\u8f91"),l.a.createElement(U.a,{type:"vertical"}),l.a.createElement(X.a,{onClick:function(){console.log(t)}},"\u8be6\u60c5"))}}],actions:[{title:"\u7981\u7528",handler:function(e){console.log(e)}}]})))},name:"\u9898\u76ee\u7ba1\u7406"}]},{path:"/examination",name:"\u8003\u52a1\u7ba1\u7406",icon:"desktop",routes:[{path:"/examination/quiz",name:"\u6d4b\u9a8c\u7ba1\u7406",component:se,display:!0},{path:"/examination/paper",name:"\u8bd5\u5377\u7ba1\u7406",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(M,null)),l.a.createElement(ee,{title:"\u8bd5\u5377\u7ba1\u7406",onBack:function(){e.history.goBack()},action:{name:"\u6dfb\u52a0\u8bd5\u5377",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(ce,{columns:[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u79d1\u76ee",dataIndex:"type"},{title:"\u64cd\u4f5c",render:function(e,t){return l.a.createElement("span",null,l.a.createElement(X.a,{onClick:function(){console.log(t)}},"\u7f16\u8f91"),l.a.createElement(U.a,{type:"vertical"}),l.a.createElement(X.a,{onClick:function(){console.log(t)}},"\u8be6\u60c5"))}}],actions:[{title:"\u7981\u7528",handler:function(e){console.log(e)}}]})))},display:!0}]},{path:"/school",name:"\u5b66\u7c4d\u7ba1\u7406",icon:"mobile",routes:[{path:"/school/college",name:"\u5b66\u9662\u4e00\u89c8",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(J,null)),l.a.createElement(ee,{title:"\u5b66\u9662\u4e00\u89c8",action:{name:"\u6dfb\u52a0\u5b66\u9662",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(Q.a,{gutter:[24,16]},l.a.createElement(oe,{collegeName:"\u8ba1\u7b97\u673a\u5b66\u9662",majorNum:12,classNum:10,handler:function(t){e.history.push({pathname:"/school/major",query:t})}}))))},display:!0},{path:"/school/major",name:"\u4e13\u4e1a\u7ba1\u7406",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(K,null)),l.a.createElement(ee,{title:"\u4e13\u4e1a\u4e00\u89c8",action:{name:"\u6dfb\u52a0\u4e13\u4e1a",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(Q.a,{gutter:[24,16]},l.a.createElement(ue,{MajorName:"\u8ba1\u7b97\u673a\u5b66\u9662",majorNum:12,classNum:10,handler:function(t){e.history.push({pathname:"/school/class",query:t})}}))))}},{path:"/school/class",name:"\u73ed\u7ea7\u7ba1\u7406",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(W,null)),l.a.createElement(ee,{title:"\u73ed\u7ea7\u7ba1\u7406",onBack:function(){e.history.goBack()},action:{name:"\u6dfb\u52a0\u73ed\u7ea7",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(ce,{columns:[{title:"\u73ed\u7ea7\u540d\u79f0",dataIndex:"name"},{title:"\u4eba\u6570",dataIndex:"count"},{title:"\u64cd\u4f5c",render:function(t,n){return l.a.createElement("span",null,l.a.createElement(X.a,{onClick:function(){console.log(n)}},"\u7f16\u8f91"),l.a.createElement(U.a,{type:"vertical"}),l.a.createElement(X.a,{onClick:function(){e.history.push({pathname:"/school/class",query:n})}},"\u8be6\u60c5"))}}]})))}},{path:"/school/student",name:"\u5b66\u751f\u7ba1\u7406",component:function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),c=n[0],r=n[1],i=function(){r(!c)};return l.a.createElement("div",null,l.a.createElement(v,{visible:c,doHide:function(){i()}},l.a.createElement(P,null)),l.a.createElement(ee,{title:"\u5b66\u751f\u7ba1\u7406",action:{name:"\u6dfb\u52a0\u5b66\u751f",handler:function(){i()}}}),l.a.createElement(te,null,l.a.createElement(Q.a,{gutter:[24,16]},l.a.createElement(ce,{columns:[{title:"\u5de5\u53f7",dataIndex:"id"},{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u64cd\u4f5c",render:function(e,t){return l.a.createElement("span",null,l.a.createElement(X.a,{href:"#",onClick:function(){console.log(t)}},"\u91cd\u7f6e\u5bc6\u7801"))}}],actions:[{title:"\u63d0\u4ea4",handler:function(e){console.log(e)}}]}))))}}]}],Ee=function(){return l.a.createElement(h.c,null,function e(t){return t.map((function(t){if(t.routes){var n=e(t.routes);return Object(E.a)(n)}return l.a.createElement(h.a,Object.assign({},t,{key:t.path}))}))}(fe))},he=n(82),ye=f.a.Header,ge=f.a.Content,be=f.a.Footer,ve=f.a.Sider,ke=p.a.SubMenu,xe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).onCollapse=function(e){n.setState({collapsed:e})},n.state={collapsed:!1,active:window.location.pathname},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{style:{minHeight:"100vh"}},l.a.createElement(ve,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},l.a.createElement("div",{className:"logo"}),l.a.createElement(p.a,{theme:"dark",defaultOpenKeys:["/school","/examination","/educational"],defaultSelectedKeys:[this.state.active],mode:"inline"},fe.map((function(e){return e.routes?l.a.createElement(ke,{key:e.path,title:l.a.createElement("span",null,e.icon&&l.a.createElement(i.a,{type:e.icon}),l.a.createElement("span",null,e.name))},e.routes.map((function(e){return!0===e.display&&l.a.createElement(p.a.Item,{key:e.path},l.a.createElement(he.b,{to:e.path},e.name))}))):!0===e.display&&l.a.createElement(p.a.Item,{key:e.path},l.a.createElement(he.b,{to:e.path},e.icon&&l.a.createElement(i.a,{type:e.icon}),l.a.createElement("span",null,e.name)))})))),l.a.createElement(f.a,{style:{display:"flex",flexDirection:"column"}},l.a.createElement(ye,{style:{flex:0,background:"#fff",padding:0,display:"flex",flexDirection:"row-reverse"}},l.a.createElement("div",{style:{position:"relative",right:"16px"}},"zuoteng.jzt")),l.a.createElement(ge,{style:{margin:"24px 16px 0",flex:1}},l.a.createElement("div",{style:{padding:24,background:"#fff",height:"100%"}},l.a.createElement(Ee,null))),l.a.createElement(be,{style:{textAlign:"center",flex:0}},"Marx - \u6811\u4eba\u5927\u5b66\u8003\u8bd5\u7cfb\u7edf")))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(he.a,null,l.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[302,1,2]]]);
//# sourceMappingURL=main.47020f2e.chunk.js.map