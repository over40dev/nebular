(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{nVOV:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),u=function(){return function(){}}(),i=e("pMnS"),o=e("ZYCi"),a=e("F/XL"),r=e("vubp"),c=e("jvbL"),b=(e("cwSc"),e("hzLA"),function(){function n(n,t,e,l,u){this.communicator=n,this.themeService=t,this.router=e,this.analytics=l,this.document=u,this.alive=!0}return n.prototype.ngOnInit=function(){this.setupId(),this.subscribeOnThemeSwitch(),this.analytics.trackEvent("example-view",this.id)},n.prototype.ngAfterViewInit=function(){var n=this;Object(a.a)(null).pipe(Object(r.a)(500)).subscribe(function(){return n.sendHeight()})},n.prototype.ngOnDestroy=function(){this.alive=!1},n.prototype.setupId=function(){this.id=this.getId()},n.prototype.subscribeOnThemeSwitch=function(){var n=this;this.communicator.receive(this.id).pipe(Object(c.a)(function(){return n.alive})).subscribe(function(t){return n.changeTheme(t)})},n.prototype.changeTheme=function(n){this.themeService.changeTheme(n.theme),this.sendHeight()},n.prototype.getId=function(){var n=this.router.url.split("/");return n.splice(0,2),n.join("/")},n.prototype.sendHeight=function(){this.communicator.send({id:this.id,height:this.document.body.clientHeight})},n}()),s=e("VkvS"),h=e("4vXS"),p=e("LA7j"),d=e("MGne"),f=l.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;background-color:#f1f2f3}"]],data:{}});function m(n){return l.Mb(0,[(n()(),l.sb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.rb(1,212992,null,0,o.q,[o.b,l.Q,l.j,[8,null],l.h],null,null)],function(n,t){n(t,1,0)},null)}function g(n){return l.Mb(0,[(n()(),l.sb(0,0,null,null,1,"ngd-example",[],null,null,null,m,f)),l.rb(1,4440064,null,0,b,[s.a,h.a,o.l,p.a,d.b],null,null)],function(n,t){n(t,1,0)},null)}var w=l.ob("ngd-example",b,g,{},{},[]),y=e("KM9H"),A=e("vuB0"),v=e("7uv5"),x=e("NfCQ"),k=e("kztb"),S=e("V+dw"),C=e("8bEz"),M=e("k6ER"),j=function(){return function(n){this.themeService=n,this.themeService.changeTheme("default")}}(),V=l.qb({encapsulation:0,styles:[["nb-layout-column{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;color:gray;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:5rem}"]],data:{}});function E(n){return l.Mb(0,[(n()(),l.sb(0,0,null,null,4,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null]],[["window","scroll"],["window","resize"]],function(n,t,e){var u=!0;return"window:scroll"===t&&(u=!1!==l.Cb(n,1).onScroll(e)&&u),"window:resize"===t&&(u=!1!==l.Cb(n,1).onResize(e)&&u),u},y.f,y.b)),l.rb(1,4374528,null,0,A.b,[h.a,v.a,l.k,l.E,d.f,d.b,l.B,x.c,k.a,S.a,C.a,M.a],null,null),(n()(),l.sb(2,0,null,3,2,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,y.e,y.a)),l.rb(3,49152,null,0,A.a,[],null,null),(n()(),l.Kb(-1,0,["Example not found."]))],null,function(n,t){n(t,0,0,l.Cb(t,1).windowModeValue,l.Cb(t,1).withScrollValue,l.Cb(t,1).withSubheader),n(t,2,0,l.Cb(t,3).leftValue,l.Cb(t,3).startValue)})}function O(n){return l.Mb(0,[(n()(),l.sb(0,0,null,null,1,"ngd-example-404",[],null,null,null,E,V)),l.rb(1,49152,null,0,j,[h.a],null,null)],null,null)}var I=l.ob("ngd-example-404",j,O,{},{},[]),z=e("Ip0R"),T=e("gIcY"),H=function(){return function(){}}(),J=e("i6JN"),K=e("F4EV"),N=e("q1xA"),q=e("0AKQ"),L=e("gM8K"),Q=e("sQZK"),B=e("9bB3"),F=e("DJEY"),R=e("lnUJ");e.d(t,"NgdExampleModuleNgFactory",function(){return Y});var Y=l.pb(u,[],function(n){return l.zb([l.Ab(512,l.j,l.db,[[8,[i.a,w,I]],[3,l.j],l.x]),l.Ab(4608,z.p,z.o,[l.u,[2,z.E]]),l.Ab(4608,T.A,T.A,[]),l.Ab(4608,C.a,C.a,[o.l]),l.Ab(4608,T.d,T.d,[]),l.Ab(1073742336,o.p,o.p,[[2,o.v],[2,o.l]]),l.Ab(1073742336,H,H,[]),l.Ab(1073742336,z.c,z.c,[]),l.Ab(1073742336,T.y,T.y,[]),l.Ab(1073742336,T.i,T.i,[]),l.Ab(1073742336,J.a,J.a,[]),l.Ab(1073742336,K.a,K.a,[]),l.Ab(1073742336,N.a,N.a,[]),l.Ab(1073742336,q.a,q.a,[]),l.Ab(1073742336,L.a,L.a,[]),l.Ab(1073742336,Q.a,Q.a,[]),l.Ab(1073742336,B.a,B.a,[]),l.Ab(1073742336,T.u,T.u,[]),l.Ab(1073742336,F.a,F.a,[]),l.Ab(1073742336,R.a,R.a,[]),l.Ab(1073742336,u,u,[]),l.Ab(1024,o.j,function(){return[[{path:"",component:b,children:[{path:"",loadChildren:"../../../src/playground/playground.module#NbPlaygroundModule"},{path:"**",component:j}]}]]},[])])})}}]);