/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var p;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(c,d,e,f,h,k,l){b.C.Init.call(this,c.u(),"none"==d?null:d,a.j.Xe,e,f,h,k,null,!0,l);this.Ji=c}function c(a){this.Init(a)}function d(a,b){this.Init(a,b)}function e(a,b,c,d,f,h,k,l,u,B){e.C.Init.call(this,a.u(),b,c,d,f,null,h,k,l,u,B);this.Ji=a}function f(){this.Init({alta:f.ji})}function h(a){this.Init(a.u(),a.dispatchEvent,a);this.Ji=a}function k(a){this.Ji=a}a.gi=function(a,b,c){this.Init(a,b,c)};a.v.D(a.gi,a.xe);a.gi.newInstance=function(b,c,d){return new a.gi(b,c,d)};a.gi.prototype.Init=
function(b,d,e){a.gi.C.Init.call(this,b,d,e);this.H=new h(this);this.H.ig(this);a.B.Ua()||this.H.ws(new c(this.H));this.hh=new f;this.Xb=[]};a.gi.prototype.QI=function(b,c){if(!b||!c){var d=l.zo(this,b,c);this.jla=d;b||(b=d.items?d.KLa*d.L$:0);c||(c=d.items?d.vQa*d.dca:0)}return new a.hk(b,c)};a.gi.prototype.ya=function(b,c,d){this.jj=this.Ca;var e=this.ht,f=this.Cb?this.Cb:0,h=this.Pb?this.Pb:0;this.H.ce();this.Xb=[];this.ht=[];this.jla=null;this.Wp&&(this.Ca.removeChild(this.Wp),this.Wp=null);this.Os();
this.Hf(b);var k=this.u();if(c||d)this.Cb=c,this.Pb=d;else if(k.Gb.style.display="block",c=this.QI(),a.L.w2(k,c.a,c.b),d=a.L.Wqa(k),c.a==d.a&&c.b!=d.b?(this.Pb=d.b,c=this.QI(null,this.Pb),a.L.w2(k,c.a,this.Pb),this.Cb=a.L.Wqa(k).a):c.a!=d.a&&c.b==d.b?(this.Cb=d.a,c=this.QI(this.Cb,null),a.L.w2(k,this.Cb,c.b),this.Pb=a.L.Wqa(k).b):(this.Cb=d.a,this.Pb=d.b),this.Cb!=c.a||this.Pb!=c.b)this.jla=null;this.Ca=new a.ia(k);this.A(this.Ca);l.ya(this,this.Ca,new a.Y(0,0,this.Cb,this.Pb),this.jla);this.jj?"none"!=
this.X.animationOnDataChange&&b&&(b=new a.Gp(k,null),b.jq(e,this.ht),this.wc=b.pv()):this.wc=this.l4a();this.wc?(a.L.w2(k,Math.max(f,this.Cb),Math.max(h,this.Pb)),this.H.cm(this),this.Wp&&this.Ca.removeChild(this.Wp),this.wc.Pf(this.R8,this),this.wc.play()):this.R8()};a.gi.prototype.Hf=function(b){b?this.X=this.hh.an(b):this.X||(this.X=this.jE());a.B.Xi()||(this.X.animationOnDisplay="none",this.X.animationOnDataChange="none");b=this.X.selectionMode;this.ad="single"==b?new a.Uc(a.Uc.Kz):"multiple"==
b?new a.Uc(a.Uc.Jz):null;this.H.wB(this.ad)};a.gi.prototype.R8=function(){this.jj&&(this.removeChild(this.jj),this.jj.va(),this.jj=null);this.wc&&(this.H.ig(this),this.Wp&&this.Ca.A(this.Wp));a.L.w2(this.u(),this.Cb,this.Pb);for(var b,c=0;c<this.Xb.length&&(b=this.Xb[c],"none"==b.zc());c++);this.H.vs(b);this.ad&&this.ad.Rt(this.X.selection,this.Xb);a.Vg.Oe(this.X.highlightedCategories,this.Xb,"any"==this.X.highlightMatch);this.Br();this.Mn||this.su();this.wc=null;this.Mn=!1};a.gi.prototype.Vsa=function(a){this.Xb=
a};a.gi.prototype.Fk=function(){return this.Xb};a.gi.prototype.Yib=function(a){this.ht.push(a)};a.gi.prototype.Xib=function(a){this.Wp=a};a.gi.prototype.Vfb=function(){for(var a=0,b=0;b<this.Xb.length;b++)a+=this.Xb[b].getCount();return a};a.gi.prototype.ob=function(){return a.Sa.hs(this.X.animationDuration)/1E3};a.gi.prototype.l4a=function(){var b=this.X.animationOnDisplay,c=this.ob(),d=this.u(),e=new a.Y(0,0,this.Cb,this.Pb);if(a.fc.isSupported(b))return a.fc.yD(d,b,this.Ca,e,c);var f=[];if("popIn"==
b)for(b=0;b<this.ht.length;b++){var h=this.ht[b];f.push(new a.Cs(d,h,!0,c))}else if("none"!=b){for(b=0;b<this.ht.length;b++){var h=this.ht[b],k=new a.Nd(d,h,c),z,u;l.Rb(this)?(z=l.asa(this)?this.Cb:0,u=h.Hj(),h.ts(z),k.ka.O(a.I.W,h,h.Hj,h.ts,u)):(z=l.$ra(this)?this.Pb:0,u=h.Ij(),h.us(z),k.ka.O(a.I.W,h,h.Ij,h.us,u));f.push(k)}f.push(a.fc.yD(d,a.fc.zB,this.Ca,e,c))}return 0<f.length?new a.Hh(d,f):null};a.gi.prototype.Oe=function(b){var c=this.F();c.highlightedCategories=a.Ec.clone(b);a.Vg.Oe(b,this.Fk(),
"any"==c.highlightMatch)};a.gi.prototype.select=function(b){this.F().selection=a.Ec.clone(b);this.ad&&this.ad.Rt(b,this.Fk())};a.gi.prototype.Im=function(){return a.K.Qg(this.F(),"componentName",a.K.Ma,"PICTOCHART")};a.gi.prototype.ti=function(){this.XBa||(this.XBa=new k(this));return this.XBa};a.v.D(k,a.Ud);k.prototype.Po=function(a){return(a=this.Ji.Za().kb(a))&&a instanceof d?"item["+this.Ji.Fk().indexOf(a)+"]":null};k.prototype.vi=function(b){if(b==a.Ud.UB)return this.nE(this.Ji);var c=b.indexOf("[");
return 0<c&&"item"===b.substring(0,c)&&(b=parseInt(b.substring(c+1,b.length-1)),b=this.Ji.Fk()[b])?b.pb():null};k.prototype.getItem=function(a){if(a=this.Ji.Fk()[a]){var b={};b.color=a.tl();b.tooltip=a.be();b.id=a.getId();b.name=a.getName();b.count=a.getCount();b.selected=a.xb();return b}return null};k.prototype.fK=function(){return this.Ji.Fk().length};a.v.D(h,a.H);h.prototype.Jp=function(b,c,d){b=this.Ji.F();"none"!=b.hoverBehavior&&(c=c.we?c.we():[],b.highlightedCategories=d?c.slice():null,d=a.Xa.RG(b.highlightedCategories,
d),c=a.Sa.hs(b.hoverBehaviorDelay),this.NH.Ef(d,this.Ji.Fk(),c,"any"==b.highlightMatch))};h.prototype.HQ=function(a){(a=this.kb(a.target))&&(a.rb&&a.rb()||this.lx(a))};h.prototype.xE=function(a){(a=this.kb(a.target))&&a.rb&&a.rb()&&this.lx(a)};h.prototype.KW=function(a){(a=this.kb(a.target))&&(a.rb&&a.rb()||this.lx(a))};h.prototype.Uv=function(a){(a=this.kb(a.target))&&(a.rb&&a.rb()||this.lx(a))};h.prototype.AH=function(a){var b=this.kb(a.target);b&&b.rb&&b.rb()&&(a.preventDefault(),a.stopPropagation(),
this.lx(b))};h.prototype.lx=function(b){b instanceof d&&b.Jj()&&this.Kk(a.Xa.Mba(b.getId()))};a.v.D(f,a.ab);f.ji={animationOnDisplay:"none",animationOnDataChange:"none",animationDuration:750,drilling:"off",hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,layout:"horizontal",layoutOrigin:"topStart",selection:[],selectionMode:"none",_defaultColor:"#a6acb1",_noneShapeColor:"rgba(255,255,255,0)",_defaultSize:32,_defaultShape:"rectangle",_gapRatio:.25,
_textStyle:new a.j(a.ab.t3+"color: #252525;"),_statusMessageStyle:new a.j(a.ab.t3+"color: #252525;"),_tooltipStyle:new a.j("border-collapse: separate; border-spacing: 1px"),_tooltipLabelStyle:new a.j("color: #737373; padding: 0px 2px"),_tooltipValueStyle:new a.j("color: #333333; padding: 0px 2px")};a.v.D(e,a.zf);e.prototype.qh=function(b,c){var d=new a.Nd(this.u(),this,.75*this.Ji.ob()),e=d.ka,f=this.ho();this.eq(c.ho());e.O(a.I.dg,this,this.ho,this.eq,f);c.U(0);b.add(d,1)};e.prototype.bk=function(b){b.add(new a.Lj(this.u(),
this,.5*this.Ji.ob()),0)};e.prototype.Si=function(b){this.U(0);b.add(new a.Dh(this.u(),this,.5*this.Ji.ob()),2)};e.prototype.ho=function(){return[this.Hj(),this.Ij(),this.getWidth(),this.getHeight()]};e.prototype.eq=function(a){this.ts(a[0]);this.us(a[1]);this.$a(a[2]);this.wb(a[3])};a.v.D(d,a.ia);d.dA=0;d.prototype.Init=function(b,c){d.C.Init.call(this,b.u(),null,c.id);this.Ji=b;this.jo=c;this.nc=null!=c.id?c.id:null!=c.name?c.name:"_defaultId"+d.dA;d.dA++;this.bN="none"==c.shape;this.dd=this.ml=
!1;this.rGa=new a.R(0,0);(this.rb()||this.Jj())&&this.setCursor("pointer");b.Za().mb(this,this)};d.prototype.XMa=function(){var a=this.jo.columnSpan;return null!=a&&0<=a?a:1};d.prototype.wOa=function(){var a=this.jo.rowSpan;return null!=a&&0<=a?a:1};d.prototype.getCount=function(){var a=this.jo.count;return null!=a?Math.max(a,0):1};d.prototype.zc=function(){return this.jo.shape||this.Ji.F()._defaultShape};d.prototype.sc=function(){return this.bN?this.Ji.F()._noneShapeColor:this.jo.color||this.Ji.F()._defaultColor};
d.prototype.kq=function(){return this.jo.borderColor};d.prototype.Fj=function(){return this.jo.borderWidth};d.prototype.o1=function(){return this.jo.source};d.prototype.nra=function(){return this.jo.sourceSelected};d.prototype.lra=function(){return this.jo.sourceHover};d.prototype.mra=function(){return this.jo.sourceHoverSelected};d.prototype.getName=function(){return this.jo.name};d.prototype.getId=function(){return this.nc};d.prototype.be=function(){return this.jo.shortDesc};d.prototype.Jj=function(){if(this.bN)return!1;
var a=this.jo.drilling;return a&&"inherit"!=a?"on"==a:"on"==this.Ji.F().drilling};d.prototype.Hk=function(){return this.rb()&&this.Jj()&&!this.bN};d.prototype.tlb=function(){this.Of("img");this.iv()};d.prototype.ug=function(){if(this.bN)return"";var b=this.Ji.F(),c=this.Ji.F().tooltip;if(c=c?c.renderer:null){var b=this.Ji.u().jf(),d={id:this.getId(),name:this.getName(),count:this.getCount(),color:this.sc()};return b.Zw(c,d)}if(null!=this.be())return this.be();c="";(d=this.getName())&&(c=a.Qe.jU("td",
b._tooltipLabelStyle)+d+"\x3c/td\x3e");d=a.B.fa(this.Ji.u());b._tooltipLabelStyle.la(a.j.FE,d?"left":"right");b._tooltipValueStyle.la(a.j.FE,d?"right":"left");return a.Qe.jU("table",b._tooltipStyle)+"\x3ctr\x3e"+c+a.Qe.jU("td",b._tooltipValueStyle)+this.pka()+"\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"};d.prototype.tl=function(){return this.sc()};d.prototype.pka=function(){return a.K.Qg(this.Ji.F(),"labelCountWithTotal",a.K.Ma,"COUNT_WITH_TOTAL",[this.getCount(),this.Ji.Vfb()])};d.prototype.rb=function(){return"none"!=
this.Ji.F().selectionMode&&!this.bN};d.prototype.xb=function(){return this.ml};d.prototype.qc=function(a){this.ml=a;this.iv();for(var c=0;c<this.Hb();c++){var d=this.bb(c);(d instanceof b||d instanceof e)&&d.qc(a)}};d.prototype.zd=function(){for(var a=0;a<this.Hb();a++){var c=this.bb(a);(c instanceof b||c instanceof e)&&c.zd()}};d.prototype.Rc=function(){for(var a=0;a<this.Hb();a++){var c=this.bb(a);(c instanceof b||c instanceof e)&&c.Rc()}};d.prototype.Ce=function(){return[this]};d.prototype.Fd=
function(){var b=[],c=this.Ji.F();this.rb()&&b.push(a.K.Qg(c,this.xb()?"stateSelected":"stateUnselected",a.K.Ma,this.xb()?"STATE_SELECTED":"STATE_UNSELECTED"));this.Jj()&&b.push(a.K.Qg(c,"stateDrillable",a.K.Ma,"STATE_DRILLABLE"));c=this.getName();c=null!=this.be()?this.be():null==c?this.pka():a.K.ua(a.K.Ma,"COLON_SEP_LIST",[c,this.pka()]);return a.oa.Ck(c,b)};d.prototype.iv=function(){a.B.Ki()||this.yd("label",this.Fd())};d.prototype.we=function(){return this.jo.categories||[this.getId()]};d.prototype.Xd=
function(b){var d=this.Ji.Za().Eb;return b.type==a.MouseEvent.ye||d.Cv(b)?this:d.Yi(b)?c.Xd(this.Ji,this,b):null};d.prototype.wf=function(a){return this.aa(a)};d.prototype.Bm=function(){return this.pb()};d.prototype.Qf=function(){this.bN||(this.dd=!0,this.zd())};d.prototype.Md=function(){this.bN||(this.dd=!1,this.Rc())};d.prototype.Od=function(){return this.dd};d.prototype.mkb=function(a){this.rGa=a};d.prototype.Gqa=function(){return this.rGa};a.v.D(c,a.Eb);c.prototype.ND=function(a){return this.Yi(a)&&
!a.ctrlKey};c.prototype.Cv=function(b){return b.keyCode==a.KeyboardEvent.Di&&b.ctrlKey};c.Xd=function(b,d,e,f){var h=b.Fk();f||(f=d);if("none"==d.zc()&&d!=f){var k=a.na.qb(h,d);if(0==k||k==h.length-1)return f}var w=l.asa(b),z=l.$ra(b),u=l.Rb(b),k=d,w=e.keyCode==a.KeyboardEvent.ag&&w||e.keyCode==a.KeyboardEvent.bg&&!w||e.keyCode==a.KeyboardEvent.Vh&&z||e.keyCode==a.KeyboardEvent.mg&&!z,u=e.keyCode==a.KeyboardEvent.ag&&u||e.keyCode==a.KeyboardEvent.bg&&u||e.keyCode==a.KeyboardEvent.Vh&&!u||e.keyCode==
a.KeyboardEvent.mg&&!u,w=a.na.qb(h,d)+(w?1:-1);u?k=a.Eb.Xd(d,e,h):w<h.length&&0<=w&&(k=h[w]);"none"==k.zc()&&(k=k!=d?c.Xd(b,k,e,f):f);return k};c.prototype.Ik=function(b){var d=this.ub.$e();return d&&b.keyCode==a.KeyboardEvent.Ci?(this.ub.lx(d),a.H.oc(b),d):c.C.Ik.call(this,b)};a.v.D(b,a.wa);b.prototype.qh=function(b,c){var d=new a.Nd(this.u(),this,.75*this.Ji.ob()),e=d.ka,f=this.Hd();this.ra(c.Hd().clone());e.O(a.I.Dq,this,this.Hd,this.ra,f);f=this.ho();this.eq(c.ho());e.O(a.I.dg,this,this.ho,this.eq,
f);c.U(0);b.add(d,1)};b.prototype.bk=function(b){b.add(new a.Lj(this.u(),this,.5*this.Ji.ob()),0)};b.prototype.Si=function(b){this.U(0);b.add(new a.Dh(this.u(),this,.5*this.Ji.ob()),2)};b.prototype.ho=function(){return[this.Hj(),this.Ij(),this.getWidth(),this.getHeight()]};b.prototype.eq=function(a){this.ts(a[0]);this.us(a[1]);this.$a(a[2]);this.wb(a[3])};var l={};a.v.D(l,a.v);l.ya=function(c,d,f,h){var k=c.u(),x=new a.Rect(k,f.x,f.y,f.a,f.b);x.Ub();d.A(x);h||(h=l.zo(c,f.a,f.b));if(h.items){c.Vsa(h.items);
for(var x=c.F()._gapRatio,w=l.Rb(c),z=l.$ra(c),u=l.asa(c),B=new a.BL,y=0,C=0,G=0,J=0;J<h.items.length;J++){for(var A=h.items[J],F=A.XMa(),O=A.wOa(),V=F*h.L$,S=O*h.dca,ia=A.getCount(),fa=0,ga=!0,ja;0<ia;){if(F!=y||O!=C)G=0;0==G&&(ja=l.jEa(B,F,O,h.KLa,h.vQa,w));if(null==ja)break;var la=ja.opa*h.L$+V/2,aa=ja.cta*h.dca+S/2,la=f.x+(u?f.a-la:la),aa=f.y+(z?f.b-aa:aa),ca=Math.min(1-G,ia),N,W,P,X;w?(N=la-V/2,W=z?aa+S*(.5-ca-G):aa+S*(G-.5),P=V,X=S*ca):(N=u?la+V*(.5-ca-G):la+V*(G-.5),W=aa-S/2,P=V*ca,X=S);var T;
1==ca?(T=A.getId()+"_"+fa,fa++):T=Math.random();if(A.o1())T=new e(c,la,aa,V,S,A.o1(),A.nra(),A.lra(),A.mra(),T+"_I");else{var M=new a.Rect(k,N,W,P,X);M.Ub();A.A(M);T=new b(c,A.zc(),la,aa,V-h.L$*x,S-h.dca*x,T+"_S");T.fb(A.sc());T.Nb(A.kq(),null,A.Fj());T.tV(A.sc())}1>ca&&(M=new a.Id,M.Me(N,W,P,X),T.Ee(M));ga&&(A.mkb(new a.R(la,aa)),ga=!1);A.A(T);c.Yib(T);ia-=ca;G=(G+ca)%1}d.A(A);A.tlb();y=F;C=O}}else l.uq(c,d,f)};l.zo=function(b,c,e){var f=b.F(),h=f.items;if(!h)return{};for(var k=a.na.wO(f.hiddenCategories),
w=[],z=0,u=1,B=1,y=0;y<h.length;y++)if(null!=h[y]){var C=new d(b,h[y]);if(!k||!a.na.UU(k,C.we())){var G=C.XMa(),J=C.wOa();G>u&&(u=G);J>B&&(B=J);z+=G*J*C.getCount();w.push(C)}}if(0==z)return{};h=f.columnWidth;k=f.rowHeight;c&&e||(h||(h=k?k:f._defaultSize),k||(k=h));b=l.Rb(b);y=f.columnCount;f=f.rowCount;y||f||(c&&e?b?f=l.JR(Math.sqrt(z*e/c),B):y=l.JR(Math.sqrt(z*c/e),u):c?y=Math.max(Math.floor(c/h),1):e?f=Math.max(Math.floor(e/k),1):b?f=l.JR(Math.sqrt(z),B):y=l.JR(Math.sqrt(z),u));y?f||(f=l.JR(z/y,
B)):y=l.JR(z/f,u);c&&e&&(h||(h=k?k:Math.min(c/y,e/f)),k||(k=h));return 0>=y||0>=f||0>=h||0>=k?{}:{items:w,KLa:y,vQa:f,L$:h,dca:k}};l.JR=function(a,b){return Math.ceil(a/b)*b};l.jEa=function(a,b,c,d,e,f){if(f)return(a=l.jEa(a,c,b,e,d,!1))?{opa:a.cta,cta:a.opa}:null;for(f=0;f<e-c+1;f++)for(var h=0;h<d-b+1;h++)if(l.t1a(a,h,f,b,c))return l.A7a(a,h,f,b,c),{opa:h,cta:f};return null};l.t1a=function(a,b,c,d,e){for(var f=0;f<e;f++)for(var h=0;h<d;h++)if(a.get(b+h,c+f))return!1;return!0};l.A7a=function(a,b,
c,d,e){for(var f=0;f<e;f++)for(var h=0;h<d;h++)a.put(b+h,c+f,!0)};l.uq=function(b,c,d){var e=b.F(),f=a.K.Qg(e,"labelNoData",a.K.Ma,"NO_DATA");c=a.Da.uq(c,f,d.clone(),b.Za(),e._statusMessageStyle);b.Xib(c)};l.Rb=function(a){return"vertical"==a.F().layout};l.$ra=function(a){a=a.F().layoutOrigin;return"bottomStart"==a||"bottomEnd"==a};l.asa=function(b){var c=b.F().layoutOrigin,c="topEnd"==c||"bottomEnd"==c;return a.B.fa(b.u())?!c:c};a.Ta(a,"PictoChart",a.gi);a.Ta(a.gi,"newInstance",a.gi.newInstance);
a.Ta(a.gi.prototype,"destroy",a.gi.prototype.va);a.Ta(a.gi.prototype,"getAutomation",a.gi.prototype.ti);a.Ta(a.gi.prototype,"highlight",a.gi.prototype.Oe);a.Ta(a.gi.prototype,"render",a.gi.prototype.ya);a.Ta(a.gi.prototype,"select",a.gi.prototype.select);a.Ta(k.prototype,"getDomElementForSubId",k.prototype.vi);a.Ta(k.prototype,"getItem",k.prototype.getItem);a.Ta(k.prototype,"getItemCount",k.prototype.fK)})(dvt);
  return dvt;
});