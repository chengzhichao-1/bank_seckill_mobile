(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b486a78"],{"0e3f":function(e,t,n){},1148:function(e,t,n){"use strict";var r=n("da84"),c=n("5926"),o=n("577e"),a=n("1d80"),i=r.RangeError;e.exports=function(e){var t=o(a(this)),n="",r=c(e);if(r<0||r==1/0)throw i("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n}},"46ad":function(e,t,n){},a479:function(e,t,n){},b680:function(e,t,n){"use strict";var r=n("23e7"),c=n("da84"),o=n("e330"),a=n("5926"),i=n("408a"),l=n("1148"),u=n("d039"),d=c.RangeError,s=c.String,b=Math.floor,p=o(l),m=o("".slice),f=o(1..toFixed),O=function(e,t,n){return 0===t?n:t%2===1?O(e,t-1,n*e):O(e*e,t/2,n)},j=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},v=function(e,t,n){var r=-1,c=n;while(++r<6)c+=t*e[r],e[r]=c%1e7,c=b(c/1e7)},h=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=b(r/t),r=r%t*1e7},N=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=s(e[t]);n=""===n?r:n+p("0",7-r.length)+r}return n},E=u((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!u((function(){f({})}));r({target:"Number",proto:!0,forced:E},{toFixed:function(e){var t,n,r,c,o=i(this),l=a(e),u=[0,0,0,0,0,0],b="",f="0";if(l<0||l>20)throw d("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return s(o);if(o<0&&(b="-",o=-o),o>1e-21)if(t=j(o*O(2,69,1))-69,n=t<0?o*O(2,-t,1):o/O(2,t,1),n*=4503599627370496,t=52-t,t>0){v(u,0,n),r=l;while(r>=7)v(u,1e7,0),r-=7;v(u,O(10,r,1),0),r=t-1;while(r>=23)h(u,1<<23),r-=23;h(u,1<<r),v(u,1,1),h(u,2),f=N(u)}else v(u,0,n),v(u,1<<-t,0),f=N(u)+p("0",l);return l>0?(c=f.length,f=b+(c<=l?"0."+p("0",l-c)+f:m(f,0,c-l)+"."+m(f,c-l))):f=b+f,f}})},c641:function(e,t,n){"use strict";n("0e3f")},d310:function(e,t,n){"use strict";var r=n("8bbf"),c={class:"nav-title"};function o(e,t,n,o,a,i){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,Object(r["toDisplayString"])(e.title),1)}var a=Object(r["defineComponent"])({props:{title:{type:String,required:!0}},setup:function(){return{}}}),i=(n("c641"),n("6b0d")),l=n.n(i);const u=l()(a,[["render",o],["__scopeId","data-v-7ffa35a6"]]);var d=u;t["a"]=d},dcb3:function(e,t,n){"use strict";n("ed48")},ebc1:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("8bbf"),c={class:"product-detail"};function o(e,t,n,o,a,i){var l,u=Object(r["resolveComponent"])("nav-title"),d=Object(r["resolveComponent"])("product-detail-main"),s=Object(r["resolveComponent"])("product-detail-other");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createVNode"])(u,{title:"产品详情"}),Object(r["createVNode"])(d,{productDetail:e.productDetail},null,8,["productDetail"]),Object(r["createVNode"])(s,{productName:null===(l=e.productDetail)||void 0===l?void 0:l.name},null,8,["productName"])])}var a=n("5880"),i=n("6389"),l=n("d310"),u={class:"product-detail-main"};function d(e,t,n,c,o,a){var i=Object(r["resolveComponent"])("order-detail"),l=Object(r["resolveComponent"])("van-overlay"),d=Object(r["resolveComponent"])("product-detail-info");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,[Object(r["createVNode"])(d,{onOrderShowChange:e.orderShowChange,currentProducts:[e.productDetail],currentIndex:0},{order:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{class:"my-overlay",show:e.isOrderShow,onClick:t[1]||(t[1]=function(t){return e.isOrderShow=!1})},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{class:"wrapper",onClick:t[0]||(t[0]=Object(r["withModifiers"])((function(){}),["stop"]))},[Object(r["createVNode"])(i,{productDetail:e.productDetail,onOrderShowChange:e.orderShowChange},null,8,["productDetail","onOrderShowChange"])])]})),_:1},8,["show"])]})),_:1},8,["onOrderShowChange","currentProducts"])])}var s=n("b8bc"),b=function(e){return Object(r["pushScopeId"])("data-v-356df687"),e=e(),Object(r["popScopeId"])(),e},p={class:"order-detail"},m=b((function(){return Object(r["createElementVNode"])("h4",null,"订单详情",-1)})),f={class:"item"},O={class:"key"},j={class:"item"},v=b((function(){return Object(r["createElementVNode"])("div",{class:"key"},"存入金额",-1)})),h={class:"value"},N={class:"item"},E=b((function(){return Object(r["createElementVNode"])("div",{class:"key"},"产品期限",-1)})),V={class:"value"},g={class:"item"},D=b((function(){return Object(r["createElementVNode"])("div",{class:"key"},"年利率",-1)})),w={class:"value"},C={class:"item"},k=b((function(){return Object(r["createElementVNode"])("div",{class:"key"},"到期日期",-1)})),S={class:"value"},y={class:"btns"};function I(e,t,n,c,o,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",p,[m,Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("div",O,Object(r["toDisplayString"])(e.productDetail.name),1)]),Object(r["createElementVNode"])("div",j,[v,Object(r["createElementVNode"])("div",h,Object(r["toDisplayString"])(e.productDetail.initialAmount)+"元",1)]),Object(r["createElementVNode"])("div",N,[E,Object(r["createElementVNode"])("div",V,Object(r["toDisplayString"])(e.productDetail.deadLine)+"天",1)]),Object(r["createElementVNode"])("div",g,[D,Object(r["createElementVNode"])("div",w,Object(r["toDisplayString"])(e.productDetail.rateOfReturn)+"%",1)]),Object(r["createElementVNode"])("div",C,[k,Object(r["createElementVNode"])("div",S,Object(r["toDisplayString"])(e.$filters.formatTime((new Date).getTime()+24*e.productDetail.deadLine*60*60*1e3)),1)]),Object(r["createElementVNode"])("div",y,[Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return e.handleCannel&&e.handleCannel.apply(e,arguments)})},"取消"),Object(r["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(){return e.handleClick&&e.handleClick.apply(e,arguments)})},"确认并前往支付")])])}var x=n("1da1"),B=(n("b680"),n("96cf"),n("3089")),T=n("b7e8"),R=n("d80c"),L=Object(r["defineComponent"])({props:["productDetail"],setup:function(e,t){var n=t.emit,r=Object(i["useRouter"])(),c=Object(a["useStore"])(),o=function(){n("orderShowChange",!1)},l=function(){var e,t;11!==c.state.phone.length?(B["Toast"].fail("请先登录"),r.push("/login")):null!==(e=c.state.login.userBaseInfo)&&void 0!==e&&e.customerName&&null!==(t=c.state.login.userBaseInfo)&&void 0!==t&&t.customerBankCard?u():(B["Toast"].fail("请先完善个人信息"),r.push("/myinformation"))},u=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(T["e"])(c.state.phone,e.productDetail.activityID,String(3));case 2:n=t.sent,200===n.code?s(n.obj):B["Toast"].fail(n.message);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(T["f"])(c.state.phone,e.productDetail.activityID);case 2:n=t.sent,"Failed"===n.message?d():"SUCCESS"===n.message&&(B["Toast"].success("抢购成功"),c.dispatch("login/accountLoginAction",{tel:R["a"].getCache("userBaseInfo").customerPhoneNumber,password:R["a"].getCache("userBaseInfo").customerPassword,noToast:!0}),r.push({path:"/pay",name:"Pay",params:{name:e.productDetail.name,initialAmount:e.productDetail.initialAmount,deadLine:e.productDetail.deadLine,rateOfReturn:e.productDetail.rateOfReturn,deadLineDate:b(e.productDetail.deadLine),expectedIncome:p(e.productDetail.rateOfReturn,e.productDetail.initialAmount,e.productDetail.deadLine),localCacheExpirationTimestamp:(new Date).getTime()+864e5,orderID:n.obj}}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(T["g"])(c.state.phone,e.productDetail.activityID,String(3),n);case 2:r=t.sent,0===r.code||200===r.code?(B["Toast"].success("排队中"),setTimeout((function(){d()}),1e3)):B["Toast"].fail(r.message);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){var t=new Date((new Date).getTime()+24*e*60*60*1e3);return t.getFullYear()+(t.getMonth()+1<10?"-0":"-")+(t.getMonth()+1)+(t.getDate()<10?"-0":"-")+t.getDate()},p=function(e,t,n){return(e*t*n/100/365).toFixed(2)};return{handleCannel:o,handleClick:l,handleGetPath:u}}}),P=(n("f1bd"),n("6b0d")),_=n.n(P);const A=_()(L,[["render",I],["__scopeId","data-v-356df687"]]);var F=A,M=Object(r["defineComponent"])({components:{ProductDetailInfo:s["a"],OrderDetail:F},props:["productDetail"],setup:function(){var e=Object(r["ref"])(!1),t=function(t){e.value=t};return{isOrderShow:e,orderShowChange:t}}});n("fb24");const J=_()(M,[["render",d],["__scopeId","data-v-284b5653"]]);var q=J,z=function(e){return Object(r["pushScopeId"])("data-v-2d6ca4e8"),e=e(),Object(r["popScopeId"])(),e},G={class:"product-detail-other"},U={class:"top"},W=["onClick"],Y={class:"inner"},Z={class:"content"},$=z((function(){return Object(r["createElementVNode"])("td",null,"名称",-1)})),H=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"全国银行业理财信息登记系统登记编号"),Object(r["createElementVNode"])("td",null," 产品登记编码：Z7001621000402（养老），投资者可以根据该登记编号在中国理财网查询产品信息。 ")],-1)})),K=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"产品代码"),Object(r["createElementVNode"])("td",null,"103507")],-1)})),Q=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"理财币种"),Object(r["createElementVNode"])("td",null,"人民币")],-1)})),X=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"产品类型"),Object(r["createElementVNode"])("td",null,"固定收益类")],-1)})),ee=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"产品代码"),Object(r["createElementVNode"])("td",null,"103507")],-1)})),te=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"募集方式"),Object(r["createElementVNode"])("td",null,"公募发行")],-1)})),ne=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"运作方式"),Object(r["createElementVNode"])("td",null," 封闭式，原则上存续期间不得申购和赎回，符合监管提前赎回情形或本理财计划产品说明书有特别约定的除外 ")],-1)})),re=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"发行对象"),Object(r["createElementVNode"])("td",null,"持有试点地区（湖南）身份证的湖南三湘银行个人")],-1)})),ce=z((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"发行规则"),Object(r["createElementVNode"])("td",null," 产品合计发行规模下限1亿元，上限30亿元。若本理财计划发行规模超出上限，销售服务机构及管理人有权暂停接受认购申请。详细内容见本《产品说明书之》“理财计划认购”。 ")],-1)}));function oe(e,t,n,c,o,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",G,[Object(r["createElementVNode"])("div",U,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.topTitleList,(function(t,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:Object(r["normalizeClass"])([{active:e.activeTitleIndex===n},"item"]),key:n,onClick:function(t){return e.activeTitleIndex=n}},[Object(r["createElementVNode"])("div",Y,Object(r["toDisplayString"])(t),1)],10,W)})),128))]),Object(r["createElementVNode"])("div",Z,[Object(r["createElementVNode"])("table",null,[Object(r["createElementVNode"])("tr",null,[$,Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(e.productName),1)]),H,K,Q,X,ee,te,ne,re,ce])])])}var ae=Object(r["defineComponent"])({props:["productName"],setup:function(){var e=["产品概览","购买说明","产品说明书","风险揭示书","产品公告","产品净值","投资报告"],t=Object(r["ref"])(0);return{topTitleList:e,activeTitleIndex:t}}});n("dcb3");const ie=_()(ae,[["render",oe],["__scopeId","data-v-2d6ca4e8"]]);var le=ie,ue=Object(r["defineComponent"])({components:{NavTitle:l["a"],ProductDetailMain:q,ProductDetailOther:le},setup:function(){var e=Object(i["useRoute"])(),t=Object(a["useStore"])(),n=Object(r["ref"])({}),c=e.params.id,o=t.dispatch("product/getProductDetailAction",{id:c});return o.then((function(e){console.log(e),n.value=e})),{productDetail:n}}});const de=_()(ue,[["render",o]]);t["default"]=de},ed48:function(e,t,n){},f1bd:function(e,t,n){"use strict";n("46ad")},fb24:function(e,t,n){"use strict";n("a479")}}]);
//# sourceMappingURL=chunk-7b486a78.297030dd.js.map