/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(((e, t) => {
  function i(t,n){
    var r;
    var i;
    var o;
    var u=t.nodeName.toLowerCase();
    return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)
  }function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}
  var n=0;
  var r=/^ui-id-\d+$/;
  e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus(t, n) {return typeof t=="number"?this.each(function(){var r=this;setTimeout(() => {e(r).focus(),n&&n.call(r)},t)}):this._focus(...arguments);},scrollParent() {var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex(n) {if(n!==t)return this.css("zIndex",n);if(this.length){
    var r=e(this[0]);
    var i;
    var s;
    while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}
  }return 0},uniqueId() {return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId() {return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(t => n => !!e.data(n,t)):(t, n, r) => !!e.data(t,r[3]),focusable(t) {return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable(t) {
    var n=e.attr(t,"tabindex");
    var r=isNaN(n);
    return(r||n>=0)&&i(t,!r)
  }}),e(() => {
    var t=document.body;
    var n=t.appendChild(n=document.createElement("div"));
    n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"
  }),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],(n, r) => {
    function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}
    var i=r==="Width"?["Left","Right"]:["Top","Bottom"];
    var s=r.toLowerCase();
    var o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};
    e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}
  }),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=(t => function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)})(e.fn.removeData)),(() => {var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6})(),e.fn.extend({disableSelection() {return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",e => {e.preventDefault()});},enableSelection() {return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add(t, n, r) {
    var i;
    var s=e.ui[t].prototype;
    for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])
  },call(e, t, n) {
    var r;
    var i=e.plugins[t];
    if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)
  }},contains:e.contains,hasScroll(t, n) {
    if(e(t).css("overflow")==="hidden")return!1;
    var r=n&&n==="left"?"scrollLeft":"scrollTop";
    var i=!1;
    return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)
  },isOverAxis(e, t, n) {return e>t&&e<t+n},isOver(t, n, r, i, s, o) {return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})
}))(jQuery);(((e, t) => {
  var n=0;
  var r=Array.prototype.slice;
  var i=e.cleanData;
  e.cleanData=t => {for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=(t, n, r) => {
    var i;
    var s;
    var o;
    var u;
    var a=t.split(".")[0];
    t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=t => !!e.data(t,i),e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,(t, i) => {e.isFunction(i)&&(r[t]=(() => {
      var e=function(...args) {return n.prototype[t].apply(this,args);};
      var r=function(e){return n.prototype[t].apply(this,e)};
      return function(...args) {
        var t=this._super;
        var n=this._superApply;
        var s;
        return this._super=e,this._superApply=r,s=i.apply(this,args),this._super=t,this._superApply=n,s;
      };
    })())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,(t, n) => {var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)
  },e.widget.extend=function(n){
    var i=r.call(arguments,1);
    var s=0;
    var o=i.length;
    var u;
    var a;
    for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n
  },e.widget.bridge=(n, i) => {var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){
    var u=typeof o=="string";
    var a=r.call(arguments,1);
    var f=this;
    return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){
      var r;
      var i=e.data(this,s);
      if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o](...a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1
    }):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f;
  }},e.Widget=() => {},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget(t, r) {r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove(e) {e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy() {this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget() {return this.element},option(n, r) {
    var i=n;
    var s;
    var o;
    var u;
    if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this
  },_setOptions(e) {var t;for(t in e)this._setOption(t,e[t]);return this},_setOption(e, t) {return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable() {return this._setOption("disabled",!1)},disable() {return this._setOption("disabled",!0)},_on(t, n, r) {
    var i;
    var s=this;
    typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,(r, o) => {
      function u(...args) {if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return (typeof o=="string"?s[o]:o).apply(s,args);}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);
      var a=r.match(/^(\w+)\s*(.*)$/);
      var f=a[1]+s.eventNamespace;
      var l=a[2];
      l?i.delegate(l,f,u):n.bind(f,u)
    })
  },_off(e, t) {t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay(e, t) {function n(...args) {return (typeof e=="string"?r[e]:e).apply(r,args);}var r=this;return setTimeout(n,t||0)},_hoverable(t) {this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter(t) {e(t.currentTarget).addClass("ui-state-hover")},mouseleave(t) {e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable(t) {this.focusable=this.focusable.add(t),this._on(t,{focusin(t) {e(t.currentTarget).addClass("ui-state-focus")},focusout(t) {e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger(t, n, r) {
    var i;
    var s;
    var o=this.options[t];
    r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())
  }},e.each({show:"fadeIn",hide:"fadeOut"},(t, n) => {e.Widget.prototype["_"+t]=(r, i, s) => {
    typeof i=="string"&&(i={effect:i});
    var o;
    var u=i?i===!0||typeof i=="number"?n:i.effect||n:t;
    i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})
  }}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})
}))(jQuery);(((e, t) => {var n=!1;e(document).mouseup(e => {n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit() {var t=this;this.element.bind("mousedown."+this.widgetName,e => t._mouseDown(e)).bind("click."+this.widgetName,n => {if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy() {this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown(t) {
  if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;
  var r=this;
  var i=t.which===1;
  var s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;
  if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(() => {r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return !0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=e => r._mouseMove(e),this._mouseUpDelegate=e => r._mouseUp(e),e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0;
},_mouseMove(t) {return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp(t) {return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet(e) {return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet(e) {return this.mouseDelayMet},_mouseStart(e) {},_mouseDrag(e) {},_mouseStop(e) {},_mouseCapture(e) {return!0}})}))(jQuery);(((e, t) => {
  function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};
  var n;
  var r=Math.max;
  var i=Math.abs;
  var s=Math.round;
  var o=/left|center|right/;
  var u=/top|center|bottom/;
  var a=/[\+\-]\d+%?/;
  var f=/^\w+/;
  var l=/%$/;
  var c=e.fn.position;
  e.position={scrollbarWidth() {
    if(n!==t)return n;
    var r;
    var i;
    var s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
    var o=s.children()[0];
    return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i
  },getScrollInfo(t) {
    var n=t.isWindow?"":t.element.css("overflow-x");
    var r=t.isWindow?"":t.element.css("overflow-y");
    var i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth;
    var s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;
    return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}
  },getWithinInfo(t) {
    var n=e(t||window);
    var r=e.isWindow(n[0]);
    return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}
  }},e.fn.position=function(t){
    if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);
    var n;
    var l;
    var d;
    var v;
    var m;
    var g=e(t.of);
    var y=e.position.getWithinInfo(t.within);
    var b=e.position.getScrollInfo(y);
    var w=g[0];
    var E=(t.collision||"flip").split(" ");
    var S={};
    return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){
      var e=(t[this]||"").split(" ");
      var n;
      var r;
      e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]
    }),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){
      var o;
      var u;
      var a=e(this);
      var f=a.outerWidth();
      var c=a.outerHeight();
      var w=p(this,"marginLeft");
      var x=p(this,"marginTop");
      var T=f+w+p(this,"marginRight")+b.width;
      var N=c+x+p(this,"marginBottom")+b.height;
      var C=e.extend({},m);
      var k=h(S.my,a.outerWidth(),a.outerHeight());
      t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],(r, i) => {e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){
        var n=v.left-C.left;
        var s=n+l-f;
        var o=v.top-C.top;
        var u=o+d-c;
        var h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};
        l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)
      }),a.offset(e.extend(C,{using:u}))
    });
  },e.ui.position={fit:{left(e, t) {
    var n=t.within;
    var i=n.isWindow?n.scrollLeft:n.offset.left;
    var s=n.width;
    var o=e.left-t.collisionPosition.marginLeft;
    var u=i-o;
    var a=o+t.collisionWidth-s-i;
    var f;
    t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)
  },top(e, t) {
    var n=t.within;
    var i=n.isWindow?n.scrollTop:n.offset.top;
    var s=t.within.height;
    var o=e.top-t.collisionPosition.marginTop;
    var u=i-o;
    var a=o+t.collisionHeight-s-i;
    var f;
    t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)
  }},flip:{left(e, t) {
    var n=t.within;
    var r=n.offset.left+n.scrollLeft;
    var s=n.width;
    var o=n.isWindow?n.scrollLeft:n.offset.left;
    var u=e.left-t.collisionPosition.marginLeft;
    var a=u-o;
    var f=u+t.collisionWidth-s-o;
    var l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0;
    var c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0;
    var h=-2*t.offset[0];
    var p;
    var d;
    if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}
  },top(e, t) {
    var n=t.within;
    var r=n.offset.top+n.scrollTop;
    var s=n.height;
    var o=n.isWindow?n.scrollTop:n.offset.top;
    var u=e.top-t.collisionPosition.marginTop;
    var a=u-o;
    var f=u+t.collisionHeight-s-o;
    var l=t.my[1]==="top";
    var c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0;
    var h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0;
    var p=-2*t.offset[1];
    var d;
    var v;
    a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))
  }},flipfit:{left(...args) {e.ui.position.flip.left.apply(this,args),e.ui.position.fit.left.apply(this,args)},top(...args) {e.ui.position.flip.top.apply(this,args),e.ui.position.fit.top.apply(this,args)}}},(() => {
    var t;
    var n;
    var r;
    var i;
    var s;
    var o=document.getElementsByTagName("body")[0];
    var u=document.createElement("div");
    t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)
  })(),e.uiBackCompat!==!1&&(e => {var n=e.fn.position;e.fn.position=function(r){
    if(!r||!r.offset)return n.call(this,r);
    var i=r.offset.split(" ");
    var s=r.at.split(" ");
    return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))
  }})(jQuery)
}))(jQuery);(((e, t) => {
  var n=0;
  var r={};
  var i={};
  r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create() {
    var t=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);
    var r=this.options;
    this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset"),this.headers=this.element.find(r.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this._hoverable(this.headers),this._focusable(this.headers),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),!r.collapsible&&(r.active===!1||r.active==null)&&(r.active=0),r.active<0&&(r.active+=this.headers.length),this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this._createIcons(),this.refresh(),this.element.attr("role","tablist"),this.headers.attr("role","tab").each(function(n){
      var r=e(this);
      var i=r.attr("id");
      var s=r.next();
      var o=s.attr("id");
      i||(i=t+"-header-"+n,r.attr("id",i)),o||(o=t+"-panel-"+n,s.attr("id",o)),r.attr("aria-controls",o),s.attr("aria-labelledby",i)
    }).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._on(this.headers,{keydown:"_keydown"}),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._setupEvents(r.event)
  },_getCreateEventData() {return{header:this.active,content:this.active.length?this.active.next():e()}},_createIcons() {var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons() {this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy() {var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption(e, t) {if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown(t) {
    if(t.altKey||t.ctrlKey)return;
    var n=e.ui.keyCode;
    var r=this.headers.length;
    var i=this.headers.index(t.target);
    var s=!1;
    switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())
  },_panelKeyDown(t) {t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh() {
    var t;
    var n;
    var r=this.options.heightStyle;
    var i=this.element.parent();
    r==="fill"?(e.support.minHeight||(n=i.css("overflow"),i.css("overflow","hidden")),t=i.height(),this.element.siblings(":visible").each(function(){
      var n=e(this);
      var r=n.css("position");
      if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)
    }),n&&i.css("overflow",n),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):r==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))
  },_activate(t) {var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive(t) {return typeof t=="number"?this.headers.eq(t):e()},_setupEvents(t) {var n={};if(!t)return;e.each(t.split(" "),(e, t) => {n[t]="_eventHandler"}),this._on(this.headers,n)},_eventHandler(t) {
    var n=this.options;
    var r=this.active;
    var i=e(t.currentTarget);
    var s=i[0]===r[0];
    var o=s&&n.collapsible;
    var u=o?e():i.next();
    var a=r.next();
    var f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};
    t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))
  },_toggle(t) {
    var n=t.newPanel;
    var r=this.prevShow.length?this.prevShow:t.oldPanel;
    this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
  },_animate(e, t, n) {
    var s;
    var o;
    var u;
    var a=this;
    var f=0;
    var l=e.length&&(!t.length||e.index()<t.index());
    var c=this.options.animate||{};
    var h=l&&c.down||c;
    var p=() => {a._toggleComplete(n)};
    typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step(e, t) {t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step(e, n) {n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})
  },_toggleComplete(e) {var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.uiBackCompat!==!1&&(((e, t) => {e.extend(t.options,{navigation:!1,navigationFilter() {return this.href.toLowerCase()===location.href.toLowerCase()}});var n=t._create;t._create=function(){if(this.options.navigation){
    var t=this;
    var r=this.element.find(this.options.header);
    var i=r.next();
    var s=r.add(i).find("a").filter(this.options.navigationFilter)[0];
    s&&r.add(i).each(function(n){if(e.contains(this,s))return t.options.active=Math.floor(n/2),!1})
  }n.call(this)}})(jQuery,jQuery.ui.accordion.prototype),((e, t) => {
    e.extend(t.options,{heightStyle:null,autoHeight:!0,clearStyle:!1,fillSpace:!1});
    var n=t._create;
    var r=t._setOption;
    e.extend(t,{_create() {this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle(),n.call(this)},_setOption(e) {if(e==="autoHeight"||e==="clearStyle"||e==="fillSpace")this.options.heightStyle=this._mergeHeightStyle();r.apply(this,arguments)},_mergeHeightStyle() {var e=this.options;if(e.fillSpace)return"fill";if(e.clearStyle)return"content";if(e.autoHeight)return"auto"}})
  })(jQuery,jQuery.ui.accordion.prototype),((e, t) => {e.extend(t.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var n=t._createIcons;t._createIcons=function(){this.options.icons&&(this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected),n.call(this)}})(jQuery,jQuery.ui.accordion.prototype),((e, t) => {t.activate=t._activate;var n=t._findActive;t._findActive=function(e){return e===-1&&(e=!1),e&&typeof e!="number"&&(e=this.headers.index(this.headers.filter(e)),e===-1&&(e=!1)),n.call(this,e)}})(jQuery,jQuery.ui.accordion.prototype),jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh,((e, t) => {e.extend(t.options,{change:null,changestart:null});var n=t._trigger;t._trigger=function(e,t,r){var i=n.apply(this,arguments);return i?(e==="beforeActivate"?i=n.call(this,"changestart",t,{oldHeader:r.oldHeader,oldContent:r.oldPanel,newHeader:r.newHeader,newContent:r.newPanel}):e==="activate"&&(i=n.call(this,"change",t,{oldHeader:r.oldHeader,oldContent:r.oldPanel,newHeader:r.newHeader,newContent:r.newPanel})),i):!1}})(jQuery,jQuery.ui.accordion.prototype),((e, t) => {e.extend(t.options,{animate:null,animated:"slide"});var n=t._create;t._create=function(){var e=this.options;e.animate===null&&(e.animated?e.animated==="slide"?e.animate=300:e.animated==="bounceslide"?e.animate={duration:200,down:{easing:"easeOutBounce",duration:1e3}}:e.animate=e.animated:e.animate=!1),n.call(this)}})(jQuery,jQuery.ui.accordion.prototype))
}))(jQuery);(((e, t) => {var n=0;e.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create() {
  var t;
  var n;
  var r;
  this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown(i) {if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress(r) {if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input(e) {if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus() {this.selectedItem=null,this.previous=this._value()},blur(e) {if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu"),this._on(this.menu.element,{mousedown(t) {t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",r => {r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus(t, n) {if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",() => {e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item")||n.item.data("item.autocomplete");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect(e, t) {
    var n=t.item.data("ui-autocomplete-item")||t.item.data("item.autocomplete");
    var r=this.previous;
    this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n
  }}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),e.fn.bgiframe&&this.menu.element.bgiframe(),this._on(this.window,{beforeunload() {this.element.removeAttr("autocomplete")}})
},_destroy() {clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption(e, t) {this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this.document.find(t||"body")[0]),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_isMultiLine() {return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource() {
  var t;
  var n;
  var r=this;
  e.isArray(this.options.source)?(t=this.options.source,this.source=(n, r) => {r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=(t, i) => {r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success(e) {i(e)},error() {i([])}})}):this.source=this.options.source
},_searchTimeout(e) {clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search(e, t) {e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search(e) {this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response() {
  var e=this;
  var t=++n;
  return r => {t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")};
},__response(e) {e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close(e) {this.cancelSearch=!0,this._close(e)},_close(e) {this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change(e) {this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize(t) {return t.length&&t[0].label&&t[0].value?t:e.map(t,t => typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t));},_suggest(t) {var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu() {var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu(t, n) {var r=this;e.each(n,(e, n) => {r._renderItemData(t,n)})},_renderItemData(e, t) {return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem(t, n) {return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move(e, t) {if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget() {return this.menu.element},_value(...args) {return this.valueMethod.apply(this.element,args);},_keyEvent(e, t) {if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex(e) {return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter(t, n) {var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,e => r.test(e.label||e.value||e));}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results(e) {return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response(e) {var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})}))(jQuery);(((e, t) => {
  var n;
  var r;
  var i;
  var s;
  var o="ui-button ui-widget ui-state-default ui-corner-all";
  var u="ui-state-hover ui-state-active ";
  var a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only";
  var f=function(){var t=e(this).find(":ui-button");setTimeout(() => {t.button("refresh")},1)};
  var l=t => {var n=t.name,r=t.form,i=e([]);return n&&(r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};
  e.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create() {
    this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");
    var t=this;
    var u=this.options;
    var a=this.type==="checkbox"||this.type==="radio";
    var c=a?"":"ui-state-active";
    var h="ui-state-focus";
    u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,e => {u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,() => {t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,() => {t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,() => {if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,e => {if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,e => {if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).toggleClass("ui-state-active"),t.buttonElement.attr("aria-pressed",t.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",() => {n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()
  },_determineButtonType() {
    var e;
    var t;
    var n;
    this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element
  },widget() {return this.buttonElement},_destroy() {this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption(e, t) {this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh() {var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton() {
    if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}
    var t=this.buttonElement.removeClass(a);
    var n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text();
    var r=this.options.icons;
    var i=r.primary&&r.secondary;
    var s=[];
    r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))
  }}),e.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create() {this.element.addClass("ui-buttonset")},_init() {this.refresh()},_setOption(e, t) {e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh() {var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy() {this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})
}))(jQuery);((($, undefined) => {
  function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var n in t)if(t[n]==null||t[n]==undefined)e[n]=t[n];return e}$.extend($.ui,{datepicker:{version:"1.9.2"}});
  var PROP_NAME="datepicker";
  var dpuuid=(new Date).getTime();
  var instActive;
  $.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log(...args) {this.debug&&console.log.apply("",args)},_widgetDatepicker() {return this.dpDiv},setDefaults(e) {return extendRemove(this._defaults,e||{}),this},_attachDatepicker(target, settings) {
    var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}
    var nodeName=target.nodeName.toLowerCase();
    var inline=nodeName=="div"||nodeName=="span";
    target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)
  },_newInst(e, t) {var n=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker(e, t) {var n=$(e);t.append=$([]),t.trigger=$([]);if(n.hasClass(this.markerClassName))return;this._attachments(n,t),n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",(e, n, r) => {t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e)},_attachments(e, t) {
    var n=this._get(t,"appendText");
    var r=this._get(t,"isRTL");
    t.append&&t.append.remove(),n&&(t.append=$('<span class="'+this._appendClass+'">'+n+"</span>"),e[r?"before":"after"](t.append)),e.unbind("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var i=this._get(t,"showOn");(i=="focus"||i=="both")&&e.focus(this._showDatepicker);if(i=="button"||i=="both"){
      var s=this._get(t,"buttonText");
      var o=this._get(t,"buttonImage");
      t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):$('<button type="button"></button>').addClass(this._triggerClass).html(o==""?s:$("<img/>").attr({src:o,alt:s,title:s}))),e[r?"before":"after"](t.trigger),t.trigger.click(() => ($.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]), !1))
    }
  },_autoSize(e) {if(this._get(e,"autoSize")&&!e.inline){
    var t=new Date(2009,11,20);
    var n=this._get(e,"dateFormat");
    if(n.match(/[DM]/)){var r=e => {
      var t=0;
      var n=0;
      for(var r=0;r<e.length;r++)e[r].length>t&&(t=e[r].length,n=r);return n
    };t.setMonth(r(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(r(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)
  }},_inlineDatepicker(e, t) {var n=$(e);if(n.hasClass(this.markerClassName))return;n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",(e, n, r) => {t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block")},_dialogDatepicker(e, t, n, r, i) {var s=this._dialogInst;if(!s){this.uuid+=1;var o="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+o+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),s=this._dialogInst=this._newInst(this._dialogInput,!1),s.settings={},$.data(this._dialogInput[0],PROP_NAME,s)}extendRemove(s.settings,r||{}),t=t&&t.constructor==Date?this._formatDate(s,t):t,this._dialogInput.val(t),this._pos=i?i.length?i:[i.pageX,i.pageY]:null;if(!this._pos){
    var u=document.documentElement.clientWidth;
    var a=document.documentElement.clientHeight;
    var f=document.documentElement.scrollLeft||document.body.scrollLeft;
    var l=document.documentElement.scrollTop||document.body.scrollTop;
    this._pos=[u/2-100+f,a/2-150+l]
  }return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),s.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,s),this},_destroyDatepicker(e) {
    var t=$(e);
    var n=$.data(e,PROP_NAME);
    if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),r=="input"?(n.append.remove(),n.trigger.remove(),t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r=="div"||r=="span")&&t.removeClass(this.markerClassName).empty()
  },_enableDatepicker(e) {
    var t=$(e);
    var n=$.data(e,PROP_NAME);
    if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,t => t==e?null:t)
  },_disableDatepicker(e) {
    var t=$(e);
    var n=$.data(e,PROP_NAME);
    if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,t => t==e?null:t),this._disabledInputs[this._disabledInputs.length]=e
  },_isDisabledDatepicker(e) {if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst(e) {try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker(e, t, n) {var r=this._getInst(e);if(arguments.length==2&&typeof t=="string")return t=="defaults"?$.extend({},$.datepicker._defaults):r?t=="all"?$.extend({},r.settings):this._get(r,t):null;var i=t||{};typeof t=="string"&&(i={},i[t]=n);if(r){
    this._curInst==r&&this._hideDatepicker();
    var s=this._getDateDatepicker(e,!0);
    var o=this._getMinMaxDate(r,"min");
    var u=this._getMinMaxDate(r,"max");
    extendRemove(r.settings,i),o!==null&&i.dateFormat!==undefined&&i.minDate===undefined&&(r.settings.minDate=this._formatDate(r,o)),u!==null&&i.dateFormat!==undefined&&i.maxDate===undefined&&(r.settings.maxDate=this._formatDate(r,u)),this._attachments($(e),r),this._autoSize(r),this._setDate(r,s),this._updateAlternate(r),this._updateDatepicker(r)
  }},_changeDatepicker(e, t, n) {this._optionDatepicker(e,t,n)},_refreshDatepicker(e) {var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker(e, t) {var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker(e, t) {var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown(e) {
    var t=$.datepicker._getInst(e.target);
    var n=!0;
    var r=t.dpDiv.is(".ui-datepicker-rtl");
    t._keyEvent=!0;if($.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),n=!1;break;case 13:var i=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);i[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,i[0]);var s=$.datepicker._get(t,"onSelect");if(s){var o=$.datepicker._formatDate(t);s.apply(t.input?t.input[0]:null,[o,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),n=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),n=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?1:-1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),n=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?-1:1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),n=e.ctrlKey||e.metaKey;break;default:n=!1}else e.keyCode==36&&e.ctrlKey?$.datepicker._showDatepicker(this):n=!1;n&&(e.preventDefault(),e.stopPropagation())
  },_doKeyPress(e) {var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){
    var n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat"));
    var r=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);
    return e.ctrlKey||e.metaKey||r<" "||!n||n.indexOf(r)>-1
  }},_doKeyUp(e) {var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var n=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));n&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(r){$.datepicker.log(r)}return!0},_showDatepicker(e) {
    e=e.target||e,e.nodeName.toLowerCase()!="input"&&(e=$("input",e.parentNode)[0]);if($.datepicker._isDisabledDatepicker(e)||$.datepicker._lastInput==e)return;var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
    var n=$.datepicker._get(t,"beforeShow");
    var r=n?n.apply(e,[e,t]):{};
    if(r===!1)return;extendRemove(t.settings,r),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var i=!1;$(e).parents().each(function(){return i|=$(this).css("position")=="fixed",!i});var s={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),s=$.datepicker._checkOffset(t,s,i),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":i?"fixed":"absolute",display:"none",left:s.left+"px",top:s.top+"px"});if(!t.inline){
      var o=$.datepicker._get(t,"showAnim");
      var u=$.datepicker._get(t,"duration");
      var a=() => {var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(!!e.length){var n=$.datepicker._getBorders(t.dpDiv);e.css({left:-n[0],top:-n[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};
      t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[o]||$.effects[o])?t.dpDiv.show(o,$.datepicker._get(t,"showOptions"),u,a):t.dpDiv[o||"show"](o?u:null,a),(!o||!u)&&a(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t
    }
  },_updateDatepicker(e) {
    this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var n=e.dpDiv.find("iframe.ui-datepicker-cover");!n.length||n.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();
    var r=this._getNumberOfMonths(e);
    var i=r[1];
    var s=17;
    e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),i>1&&e.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",s*i+"em"),e.dpDiv[(r[0]!=1||r[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus();if(e.yearshtml){var o=e.yearshtml;setTimeout(() => {o===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),o=e.yearshtml=null},0)}
  },_getBorders(e) {var t=e => {thin:1,medium:2,thick:3}[e]||e;return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset(e, t, n) {
    var r=e.dpDiv.outerWidth();
    var i=e.dpDiv.outerHeight();
    var s=e.input?e.input.outerWidth():0;
    var o=e.input?e.input.outerHeight():0;
    var u=document.documentElement.clientWidth+(n?0:$(document).scrollLeft());
    var a=document.documentElement.clientHeight+(n?0:$(document).scrollTop());
    return t.left-=this._get(e,"isRTL")?r-s:0,t.left-=n&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=n&&t.top==e.input.offset().top+o?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+r>u&&u>r?Math.abs(t.left+r-u):0),t.top-=Math.min(t.top,t.top+i>a&&a>i?Math.abs(i+o):0),t
  },_findPos(e) {
    var t=this._getInst(e);
    var n=this._get(t,"isRTL");
    while(e&&(e.type=="hidden"||e.nodeType!=1||$.expr.filters.hidden(e)))e=e[n?"previousSibling":"nextSibling"];var r=$(e).offset();return[r.left,r.top]
  },_hideDatepicker(e) {var t=this._curInst;if(!t||e&&t!=$.data(e,PROP_NAME))return;if(this._datepickerShowing){
    var n=this._get(t,"showAnim");
    var r=this._get(t,"duration");
    var i=() => {$.datepicker._tidyDialog(t)};
    $.effects&&($.effects.effect[n]||$.effects[n])?t.dpDiv.hide(n,$.datepicker._get(t,"showOptions"),r,i):t.dpDiv[n=="slideDown"?"slideUp":n=="fadeIn"?"fadeOut":"hide"](n?r:null,i),n||i(),this._datepickerShowing=!1;var s=this._get(t,"onClose");s&&s.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1
  }},_tidyDialog(e) {e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick(e) {
    if(!$.datepicker._curInst)return;
    var t=$(e.target);
    var n=$.datepicker._getInst(t[0]);
    (t[0].id!=$.datepicker._mainDivId&&t.parents("#"+$.datepicker._mainDivId).length==0&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=n)&&$.datepicker._hideDatepicker()
  },_adjustDate(e, t, n) {
    var r=$(e);
    var i=this._getInst(r[0]);
    if(this._isDisabledDatepicker(r[0]))return;this._adjustInstDate(i,t+(n=="M"?this._get(i,"showCurrentAtPos"):0),n),this._updateDatepicker(i)
  },_gotoToday(e) {
    var t=$(e);
    var n=this._getInst(t[0]);
    if(this._get(n,"gotoCurrent")&&n.currentDay)n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear;else{var r=new Date;n.selectedDay=r.getDate(),n.drawMonth=n.selectedMonth=r.getMonth(),n.drawYear=n.selectedYear=r.getFullYear()}this._notifyChange(n),this._adjustDate(t)
  },_selectMonthYear(e, t, n) {
    var r=$(e);
    var i=this._getInst(r[0]);
    i["selected"+(n=="M"?"Month":"Year")]=i["draw"+(n=="M"?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(i),this._adjustDate(r)
  },_selectDay(e, t, n, r) {var i=$(e);if($(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(i[0]))return;var s=this._getInst(i[0]);s.selectedDay=s.currentDay=$("a",r).html(),s.selectedMonth=s.currentMonth=t,s.selectedYear=s.currentYear=n,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate(e) {
    var t=$(e);
    var n=this._getInst(t[0]);
    this._selectDate(t,"")
  },_selectDate(e, t) {
    var n=$(e);
    var r=this._getInst(n[0]);
    t=t!=null?t:this._formatDate(r),r.input&&r.input.val(t),this._updateAlternate(r);var i=this._get(r,"onSelect");i?i.apply(r.input?r.input[0]:null,[t,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],typeof r.input[0]!="object"&&r.input.focus(),this._lastInput=null)
  },_updateAlternate(e) {var t=this._get(e,"altField");if(t){
    var n=this._get(e,"altFormat")||this._get(e,"dateFormat");
    var r=this._getDate(e);
    var i=this.formatDate(n,r,this._getFormatConfig(e));
    $(t).each(function(){$(this).val(i)})
  }},noWeekends(e) {var t=e.getDay();return[t>0&&t<6,""]},iso8601Week(e) {var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1},parseDate(e, t, n) {
    if(e==null||t==null)throw"Invalid arguments";t=typeof t=="object"?t.toString():t+"";if(t=="")return null;var r=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff;r=typeof r!="string"?r:(new Date).getFullYear()%100+parseInt(r,10);
    var i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort;
    var s=(n?n.dayNames:null)||this._defaults.dayNames;
    var o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort;
    var u=(n?n.monthNames:null)||this._defaults.monthNames;
    var a=-1;
    var f=-1;
    var l=-1;
    var c=-1;
    var h=!1;
    var p=t => {var n=y+1<e.length&&e.charAt(y+1)==t;return n&&y++,n};
    var d=e => {var n=p(e),r=e=="@"?14:e=="!"?20:e=="y"&&n?4:e=="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=t.substring(g).match(i);if(!s)throw"Missing number at position "+g;return g+=s[0].length,parseInt(s[0],10)};
    var v=(e, n, r) => {var i=$.map(p(e)?r:n,(e, t) => [[t,e]]).sort((e, t) => -(e[1].length-t[1].length)),s=-1;$.each(i,(e, n) => {var r=n[1];if(t.substr(g,r.length).toLowerCase()==r.toLowerCase())return s=n[0],g+=r.length,!1});if(s!=-1)return s+1;throw"Unknown name at position "+g};
    var m=() => {if(t.charAt(g)!=e.charAt(y))throw"Unexpected literal at position "+g;g++};
    var g=0;
    for(var y=0;y<e.length;y++)if(h)e.charAt(y)=="'"&&!p("'")?h=!1:m();else switch(e.charAt(y)){case"d":l=d("d");break;case"D":v("D",i,s);break;case"o":c=d("o");break;case"m":f=d("m");break;case"M":f=v("M",o,u);break;case"y":a=d("y");break;case"@":var b=new Date(d("@"));a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"!":var b=new Date((d("!")-this._ticksTo1970)/1e4);a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"'":p("'")?m():h=!0;break;default:m()}if(g<t.length){var w=t.substr(g);if(!/^\s+/.test(w))throw"Extra/unparsed characters found in date: "+w}a==-1?a=(new Date).getFullYear():a<100&&(a+=(new Date).getFullYear()-(new Date).getFullYear()%100+(a<=r?0:-100));if(c>-1){f=1,l=c;do{var E=this._getDaysInMonth(a,f-1);if(l<=E)break;f++,l-=E}while(!0)}var b=this._daylightSavingAdjust(new Date(a,f-1,l));if(b.getFullYear()!=a||b.getMonth()+1!=f||b.getDate()!=l)throw"Invalid date";return b
  },ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate(e, t, n) {
    if(!t)return"";
    var r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort;
    var i=(n?n.dayNames:null)||this._defaults.dayNames;
    var s=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort;
    var o=(n?n.monthNames:null)||this._defaults.monthNames;
    var u=t => {var n=h+1<e.length&&e.charAt(h+1)==t;return n&&h++,n};
    var a=(e, t, n) => {var r=""+t;if(u(e))while(r.length<n)r="0"+r;return r};
    var f=(e, t, n, r) => u(e)?r[t]:n[t];
    var l="";
    var c=!1;
    if(t)for(var h=0;h<e.length;h++)if(c)e.charAt(h)=="'"&&!u("'")?c=!1:l+=e.charAt(h);else switch(e.charAt(h)){case"d":l+=a("d",t.getDate(),2);break;case"D":l+=f("D",t.getDay(),r,i);break;case"o":l+=a("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":l+=a("m",t.getMonth()+1,2);break;case"M":l+=f("M",t.getMonth(),s,o);break;case"y":l+=u("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=t.getTime()*1e4+this._ticksTo1970;break;case"'":u("'")?l+="'":c=!0;break;default:l+=e.charAt(h)}return l
  },_possibleChars(e) {
    var t="";
    var n=!1;
    var r=t => {var n=i+1<e.length&&e.charAt(i+1)==t;return n&&i++,n};
    for(var i=0;i<e.length;i++)if(n)e.charAt(i)=="'"&&!r("'")?n=!1:t+=e.charAt(i);else switch(e.charAt(i)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":r("'")?t+="'":n=!0;break;default:t+=e.charAt(i)}return t
  },_get(e, t) {return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField(e, t) {
    if(e.input.val()==e.lastVal)return;
    var n=this._get(e,"dateFormat");
    var r=e.lastVal=e.input?e.input.val():null;
    var i;
    var s;
    i=s=this._getDefaultDate(e);var o=this._getFormatConfig(e);try{i=this.parseDate(n,r,o)||s}catch(u){this.log(u),r=t?"":r}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=r?i.getDate():0,e.currentMonth=r?i.getMonth():0,e.currentYear=r?i.getFullYear():0,this._adjustInstDate(e)
  },_getDefaultDate(e) {return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate(e, t, n) {
    var r=e => {var t=new Date;return t.setDate(t.getDate()+e),t};
    var i=t => {try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(n){}var r=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,i=r.getFullYear(),s=r.getMonth(),o=r.getDate(),u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=u.exec(t);while(a){switch(a[2]||"d"){case"d":case"D":o+=parseInt(a[1],10);break;case"w":case"W":o+=parseInt(a[1],10)*7;break;case"m":case"M":s+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s));break;case"y":case"Y":i+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s))}a=u.exec(t)}return new Date(i,s,o)};
    var s=t==null||t===""?n:typeof t=="string"?i(t):typeof t=="number"?isNaN(t)?n:r(t):new Date(t.getTime());
    return s=s&&s.toString()=="Invalid Date"?n:s,s&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)
  },_daylightSavingAdjust(e) {return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate(e, t, n) {
    var r=!t;
    var i=e.selectedMonth;
    var s=e.selectedYear;
    var o=this._restrictMinMax(e,this._determineDate(e,t,new Date));
    e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!=e.selectedMonth||s!=e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))
  },_getDate(e) {var t=!e.currentYear||e.input&&e.input.val()==""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers(e) {
    var t=this._get(e,"stepMonths");
    var n="#"+e.id.replace(/\\\\/g,"\\");
    e.dpDiv.find("[data-handler]").map(function(){var e={prev() {window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,-t,"M")},next() {window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,+t,"M")},hide() {window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today() {window["DP_jQuery_"+dpuuid].datepicker._gotoToday(n)},selectDay() {return window["DP_jQuery_"+dpuuid].datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth() {return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"M"),!1},selectYear() {return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})
  },_generateHTML(e) {
    var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));
    var n=this._get(e,"isRTL");
    var r=this._get(e,"showButtonPanel");
    var i=this._get(e,"hideIfNoPrevNext");
    var s=this._get(e,"navigationAsDateFormat");
    var o=this._getNumberOfMonths(e);
    var u=this._get(e,"showCurrentAtPos");
    var a=this._get(e,"stepMonths");
    var f=o[0]!=1||o[1]!=1;
    var l=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9));
    var c=this._getMinMaxDate(e,"min");
    var h=this._getMinMaxDate(e,"max");
    var p=e.drawMonth-u;
    var d=e.drawYear;
    p<0&&(p+=12,d--);if(h){var v=this._daylightSavingAdjust(new Date(h.getFullYear(),h.getMonth()-o[0]*o[1]+1,h.getDate()));v=c&&v<c?c:v;while(this._daylightSavingAdjust(new Date(d,p,1))>v)p--,p<0&&(p=11,d--)}e.drawMonth=p,e.drawYear=d;var m=this._get(e,"prevText");m=s?this.formatDate(m,this._daylightSavingAdjust(new Date(d,p-a,1)),this._getFormatConfig(e)):m;
    var g=this._canAdjustMonth(e,-1,d,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>":i?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>";
    var y=this._get(e,"nextText");
    y=s?this.formatDate(y,this._daylightSavingAdjust(new Date(d,p+a,1)),this._getFormatConfig(e)):y;
    var b=this._canAdjustMonth(e,1,d,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>":i?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>";
    var w=this._get(e,"currentText");
    var E=this._get(e,"gotoCurrent")&&e.currentDay?l:t;
    w=s?this.formatDate(w,E,this._getFormatConfig(e)):w;
    var S=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>";
    var x=r?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(n?S:"")+(this._isInRange(e,E)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+w+"</button>":"")+(n?"":S)+"</div>":"";
    var T=parseInt(this._get(e,"firstDay"),10);
    T=isNaN(T)?0:T;
    var N=this._get(e,"showWeek");
    var C=this._get(e,"dayNames");
    var k=this._get(e,"dayNamesShort");
    var L=this._get(e,"dayNamesMin");
    var A=this._get(e,"monthNames");
    var O=this._get(e,"monthNamesShort");
    var M=this._get(e,"beforeShowDay");
    var _=this._get(e,"showOtherMonths");
    var D=this._get(e,"selectOtherMonths");
    var P=this._get(e,"calculateWeek")||this.iso8601Week;
    var H=this._getDefaultDate(e);
    var B="";
    for(var j=0;j<o[0];j++){var F="";this.maxRows=4;for(var I=0;I<o[1];I++){
      var q=this._daylightSavingAdjust(new Date(d,p,e.selectedDay));
      var R=" ui-corner-all";
      var U="";
      if(f){U+='<div class="ui-datepicker-group';if(o[1]>1)switch(I){case 0:U+=" ui-datepicker-group-first",R=" ui-corner-"+(n?"right":"left");break;case o[1]-1:U+=" ui-datepicker-group-last",R=" ui-corner-"+(n?"left":"right");break;default:U+=" ui-datepicker-group-middle",R=""}U+='">'}U+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+R+'">'+(/all|left/.test(R)&&j==0?n?b:g:"")+(/all|right/.test(R)&&j==0?n?g:b:"")+this._generateMonthYearHeader(e,p,d,c,h,j>0||I>0,A,O)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var z=N?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"";for(var W=0;W<7;W++){var X=(W+T)%7;z+="<th"+((W+T+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+C[X]+'">'+L[X]+"</span></th>"}U+=z+"</tr></thead><tbody>";var V=this._getDaysInMonth(d,p);d==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,V));
      var J=(this._getFirstDayOfMonth(d,p)-T+7)%7;
      var K=Math.ceil((J+V)/7);
      var Q=f?this.maxRows>K?this.maxRows:K:K;
      this.maxRows=Q;var G=this._daylightSavingAdjust(new Date(d,p,1-J));for(var Y=0;Y<Q;Y++){U+="<tr>";var Z=N?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(G)+"</td>":"";for(var W=0;W<7;W++){
        var et=M?M.apply(e.input?e.input[0]:null,[G]):[!0,""];
        var tt=G.getMonth()!=p;
        var nt=tt&&!D||!et[0]||c&&G<c||h&&G>h;
        Z+='<td class="'+((W+T+6)%7>=5?" ui-datepicker-week-end":"")+(tt?" ui-datepicker-other-month":"")+(G.getTime()==q.getTime()&&p==e.selectedMonth&&e._keyEvent||H.getTime()==G.getTime()&&H.getTime()==q.getTime()?" "+this._dayOverClass:"")+(nt?" "+this._unselectableClass+" ui-state-disabled":"")+(tt&&!_?"":" "+et[1]+(G.getTime()==l.getTime()?" "+this._currentClass:"")+(G.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+((!tt||_)&&et[2]?' title="'+et[2]+'"':"")+(nt?"":' data-handler="selectDay" data-event="click" data-month="'+G.getMonth()+'" data-year="'+G.getFullYear()+'"')+">"+(tt&&!_?"&#xa0;":nt?'<span class="ui-state-default">'+G.getDate()+"</span>":'<a class="ui-state-default'+(G.getTime()==t.getTime()?" ui-state-highlight":"")+(G.getTime()==l.getTime()?" ui-state-active":"")+(tt?" ui-priority-secondary":"")+'" href="#">'+G.getDate()+"</a>")+"</td>",G.setDate(G.getDate()+1),G=this._daylightSavingAdjust(G)
      }U+=Z+"</tr>"}p++,p>11&&(p=0,d++),U+="</tbody></table>"+(f?"</div>"+(o[0]>0&&I==o[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),F+=U
    }B+=F}return B+=x+($.ui.ie6&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,B
  },_generateMonthYearHeader(e, t, n, r, i, s, o, u) {
    var a=this._get(e,"changeMonth");
    var f=this._get(e,"changeYear");
    var l=this._get(e,"showMonthAfterYear");
    var c='<div class="ui-datepicker-title">';
    var h="";
    if(s||!a)h+='<span class="ui-datepicker-month">'+o[t]+"</span>";else{
      var p=r&&r.getFullYear()==n;
      var d=i&&i.getFullYear()==n;
      h+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var v=0;v<12;v++)(!p||v>=r.getMonth())&&(!d||v<=i.getMonth())&&(h+='<option value="'+v+'"'+(v==t?' selected="selected"':"")+">"+u[v]+"</option>");h+="</select>"
    }l||(c+=h+(s||!a||!f?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!f)c+='<span class="ui-datepicker-year">'+n+"</span>";else{
      var m=this._get(e,"yearRange").split(":");
      var g=(new Date).getFullYear();
      var y=e => {var t=e.match(/c[+-].*/)?n+parseInt(e.substring(1),10):e.match(/[+-].*/)?g+parseInt(e,10):parseInt(e,10);return isNaN(t)?g:t};
      var b=y(m[0]);
      var w=Math.max(b,y(m[1]||""));
      b=r?Math.max(b,r.getFullYear()):b,w=i?Math.min(w,i.getFullYear()):w,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;b<=w;b++)e.yearshtml+='<option value="'+b+'"'+(b==n?' selected="selected"':"")+">"+b+"</option>";e.yearshtml+="</select>",c+=e.yearshtml,e.yearshtml=null
    }}return c+=this._get(e,"yearSuffix"),l&&(c+=(s||!a||!f?"&#xa0;":"")+h),c+="</div>",c
  },_adjustInstDate(e, t, n) {
    var r=e.drawYear+(n=="Y"?t:0);
    var i=e.drawMonth+(n=="M"?t:0);
    var s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n=="D"?t:0);
    var o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));
    e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n=="M"||n=="Y")&&this._notifyChange(e)
  },_restrictMinMax(e, t) {
    var n=this._getMinMaxDate(e,"min");
    var r=this._getMinMaxDate(e,"max");
    var i=n&&t<n?n:t;
    return i=r&&i>r?r:i,i
  },_notifyChange(e) {var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths(e) {var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate(e, t) {return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth(e, t) {return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth(e, t) {return(new Date(e,t,1)).getDay()},_canAdjustMonth(e, t, n, r) {
    var i=this._getNumberOfMonths(e);
    var s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));
    return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)
  },_isInRange(e, t) {
    var n=this._getMinMaxDate(e,"min");
    var r=this._getMinMaxDate(e,"max");
    return(!n||t.getTime()>=n.getTime())&&(!r||t.getTime()<=r.getTime())
  },_getFormatConfig(e) {var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate(e, t, n, r) {t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return typeof e!="string"||e!="isDisabled"&&e!="getDate"&&e!="widget"?e=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+e+"Datepicker"](...[this[0]].concat(t)):this.each(function(){typeof e=="string"?$.datepicker["_"+e+"Datepicker"](...[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"](...[this[0]].concat(t));},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.2",window["DP_jQuery_"+dpuuid]=$
}))(jQuery);(((e, t) => {
  var n="ui-dialog ui-widget ui-widget-content ui-corner-all ";
  var r={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0};
  var i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};
  e.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using(t) {var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create() {
    this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.options.title=this.options.title||this.originalTitle;
    var t=this;
    var r=this.options;
    var i=r.title||"&#160;";
    var s;
    var o;
    var u;
    var a;
    var f;
    s=(this.uiDialog=e("<div>")).addClass(n+r.dialogClass).css({display:"none",outline:0,zIndex:r.zIndex}).attr("tabIndex",-1).keydown(n => {r.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===e.ui.keyCode.ESCAPE&&(t.close(n),n.preventDefault())}).mousedown(e => {t.moveToTop(!1,e)}).appendTo("body"),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s),o=(this.uiDialogTitlebar=e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",() => {s.focus()}).prependTo(s),u=e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(e => {e.preventDefault(),t.close(e)}).appendTo(o),(this.uiDialogTitlebarCloseText=e("<span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u),a=e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o),f=(this.uiDialogButtonPane=e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),(this.uiButtonSet=e("<div>")).addClass("ui-dialog-buttonset").appendTo(f),s.attr({role:"dialog","aria-labelledby":a.attr("id")}),o.find("*").add(o).disableSelection(),this._hoverable(u),this._focusable(u),r.draggable&&e.fn.draggable&&this._makeDraggable(),r.resizable&&e.fn.resizable&&this._makeResizable(),this._createButtons(r.buttons),this._isOpen=!1,e.fn.bgiframe&&s.bgiframe(),this._on(s,{keydown(t) {
      if(!r.modal||t.keyCode!==e.ui.keyCode.TAB)return;
      var n=e(":tabbable",s);
      var i=n.filter(":first");
      var o=n.filter(":last");
      if(t.target===o[0]&&!t.shiftKey)return i.focus(1),!1;if(t.target===i[0]&&t.shiftKey)return o.focus(1),!1
    }})
  },_init() {this.options.autoOpen&&this.open()},_destroy() {
    var e;
    var t=this.oldPosition;
    this.overlay&&this.overlay.destroy(),this.uiDialog.hide(),this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)
  },widget() {return this.uiDialog},close(t) {
    var n=this;
    var r;
    var i;
    if(!this._isOpen)return;if(!1===this._trigger("beforeClose",t))return;return this._isOpen=!1,this.overlay&&this.overlay.destroy(),this.options.hide?this._hide(this.uiDialog,this.options.hide,() => {n._trigger("close",t)}):(this.uiDialog.hide(),this._trigger("close",t)),e.ui.dialog.overlay.resize(),this.options.modal&&(r=0,e(".ui-dialog").each(function(){this!==n.uiDialog[0]&&(i=e(this).css("z-index"),isNaN(i)||(r=Math.max(r,i)))}),e.ui.dialog.maxZ=r),this;
  },isOpen() {return this._isOpen},moveToTop(t, n) {
    var r=this.options;
    var i;
    return r.modal&&!t||!r.stack&&!r.modal?this._trigger("focus",n):(r.zIndex>e.ui.dialog.maxZ&&(e.ui.dialog.maxZ=r.zIndex),this.overlay&&(e.ui.dialog.maxZ+=1,e.ui.dialog.overlay.maxZ=e.ui.dialog.maxZ,this.overlay.$el.css("z-index",e.ui.dialog.overlay.maxZ)),i={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()},e.ui.dialog.maxZ+=1,this.uiDialog.css("z-index",e.ui.dialog.maxZ),this.element.attr(i),this._trigger("focus",n),this)
  },open() {
    if(this._isOpen)return;
    var t;
    var n=this.options;
    var r=this.uiDialog;
    return this._size(),this._position(n.position),r.show(n.show),this.overlay=n.modal?new e.ui.dialog.overlay(this):null,this.moveToTop(!0),t=this.element.find(":tabbable"),t.length||(t=this.uiDialogButtonPane.find(":tabbable"),t.length||(t=r)),t.eq(0).focus(),this._isOpen=!0,this._trigger("open"),this
  },_createButtons(t) {
    var n=this;
    var r=!1;
    this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),typeof t=="object"&&t!==null&&e.each(t,() => !(r=!0)),r?(e.each(t,(t, r) => {
      var i;
      var s;
      r=e.isFunction(r)?{click:r,text:t}:r,r=e.extend({type:"button"},r),s=r.click,r.click=function(...args) {s.apply(n.element[0],args)},i=e("<button></button>",r).appendTo(n.uiButtonSet),e.fn.button&&i.button()
    }),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)):this.uiDialog.removeClass("ui-dialog-buttons")
  },_makeDraggable() {
    function r(e){return{position:e.position,offset:e.offset}}
    var t=this;
    var n=this.options;
    this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start(n, i) {e(this).addClass("ui-dialog-dragging"),t._trigger("dragStart",n,r(i))},drag(e, n) {t._trigger("drag",e,r(n))},stop(i, s) {n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._trigger("dragStop",i,r(s)),e.ui.dialog.overlay.resize()}})
  },_makeResizable(n) {
    function u(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}n=n===t?this.options.resizable:n;
    var r=this;
    var i=this.options;
    var s=this.uiDialog.css("position");
    var o=typeof n=="string"?n:"n,e,s,w,se,sw,ne,nw";
    this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:o,start(t, n) {e(this).addClass("ui-dialog-resizing"),r._trigger("resizeStart",t,u(n))},resize(e, t) {r._trigger("resize",e,u(t))},stop(t, n) {e(this).removeClass("ui-dialog-resizing"),i.height=e(this).height(),i.width=e(this).width(),r._trigger("resizeStop",t,u(n)),e.ui.dialog.overlay.resize()}}).css("position",s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
  },_minHeight() {var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position(t) {
    var n=[];
    var r=[0,0];
    var i;
    if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],(e, t) => {+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()
  },_setOptions(t) {
    var n=this;
    var s={};
    var o=!1;
    e.each(t,(e, t) => {n._setOption(e,t),e in r&&(o=!0),e in i&&(s[e]=t)}),o&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",s)
  },_setOption(t, r) {
    var i;
    var s;
    var o=this.uiDialog;
    switch(t){case"buttons":this._createButtons(r);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+r);break;case"dialogClass":o.removeClass(this.options.dialogClass).addClass(n+r);break;case"disabled":r?o.addClass("ui-dialog-disabled"):o.removeClass("ui-dialog-disabled");break;case"draggable":i=o.is(":data(draggable)"),i&&!r&&o.draggable("destroy"),!i&&r&&this._makeDraggable();break;case"position":this._position(r);break;case"resizable":s=o.is(":data(resizable)"),s&&!r&&o.resizable("destroy"),s&&typeof r=="string"&&o.resizable("option","handles",r),!s&&r!==!1&&this._makeResizable(r);break;case"title":e(".ui-dialog-title",this.uiDialogTitlebar).html(""+(r||"&#160;"))}this._super(t,r)
  },_size() {
    var t;
    var n;
    var r;
    var i=this.options;
    var s=this.uiDialog.is(":visible");
    this.element.show().css({width:"auto",minHeight:0,height:0}),i.minWidth>i.width&&(i.width=i.minWidth),t=this.uiDialog.css({height:"auto",width:i.width}).outerHeight(),n=Math.max(0,i.minHeight-t),i.height==="auto"?e.support.minHeight?this.element.css({minHeight:n,height:"auto"}):(this.uiDialog.show(),r=this.element.css("height","auto").height(),s||this.uiDialog.hide(),this.element.height(Math.max(r,n))):this.element.height(Math.max(i.height-t,0)),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
  }}),e.extend(e.ui.dialog,{uuid:0,maxZ:0,getTitleId(e) {var t=e.attr("id");return t||(this.uuid+=1,t=this.uuid),"ui-dialog-title-"+t},overlay(t) {this.$el=e.ui.dialog.overlay.create(t)}}),e.extend(e.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),e => e+".dialog-overlay").join(" "),create(t) {this.instances.length===0&&(setTimeout(() => {e.ui.dialog.overlay.instances.length&&e(document).bind(e.ui.dialog.overlay.events,t => {if(e(t.target).zIndex()<e.ui.dialog.overlay.maxZ)return!1})},1),e(window).bind("resize.dialog-overlay",e.ui.dialog.overlay.resize));var n=this.oldInstances.pop()||e("<div>").addClass("ui-widget-overlay");return e(document).bind("keydown.dialog-overlay",r => {var i=e.ui.dialog.overlay.instances;i.length!==0&&i[i.length-1]===n&&t.options.closeOnEscape&&!r.isDefaultPrevented()&&r.keyCode&&r.keyCode===e.ui.keyCode.ESCAPE&&(t.close(r),r.preventDefault())}),n.appendTo(document.body).css({width:this.width(),height:this.height()}),e.fn.bgiframe&&n.bgiframe(),this.instances.push(n),n;},destroy(t) {
    var n=e.inArray(t,this.instances);
    var r=0;
    n!==-1&&this.oldInstances.push(this.instances.splice(n,1)[0]),this.instances.length===0&&e([document,window]).unbind(".dialog-overlay"),t.height(0).width(0).remove(),e.each(this.instances,function(){r=Math.max(r,this.css("z-index"))}),this.maxZ=r
  },height() {
    var t;
    var n;
    return e.ui.ie?(t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),n=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),t<n?e(window).height()+"px":t+"px"):e(document).height()+"px"
  },width() {
    var t;
    var n;
    return e.ui.ie?(t=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),n=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),t<n?e(window).width()+"px":t+"px"):e(document).width()+"px"
  },resize() {var t=e([]);e.each(e.ui.dialog.overlay.instances,function(){t=t.add(this)}),t.css({width:0,height:0}).css({width:e.ui.dialog.overlay.width(),height:e.ui.dialog.overlay.height()})}}),e.extend(e.ui.dialog.overlay.prototype,{destroy() {e.ui.dialog.overlay.destroy(this.$el)}})
}))(jQuery);(((e, t) => {e.widget("ui.draggable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create() {this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy() {this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture(t) {var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart(t) {var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag(t, n) {this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop(t) {
  var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);
  var r=this.element[0];
  var i=!1;
  while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),() => {s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1
},_mouseUp(t) {return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel() {return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle(t) {var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper(t) {
  var n=this.options;
  var r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;
  return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r
},_adjustOffsetFromHelper(t) {typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset() {this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset() {if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins() {this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions() {this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment() {var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){
  var n=e(t.containment);
  var r=n[0];
  if(!r)return;
  var i=n.offset();
  var s=e(r).css("overflow")!="hidden";
  this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n
}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo(t, n) {
  n||(n=this.position);
  var r=t=="absolute"?1:-1;
  var i=this.options;
  var s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
  var o=/(html|body)/i.test(s[0].tagName);
  return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}
},_generatePosition(t) {
  var n=this.options;
  var r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
  var i=/(html|body)/i.test(r[0].tagName);
  var s=t.pageX;
  var o=t.pageY;
  if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}
},_clear() {this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger(t, n, r) {return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash(e) {return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start(t, n) {
  var r=e(this).data("draggable");
  var i=r.options;
  var s=e.extend({},n,{item:r.element});
  r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})
},stop(t, n) {
  var r=e(this).data("draggable");
  var i=e.extend({},n,{item:r.element});
  e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})
},drag(t, n) {
  var r=e(this).data("draggable");
  var i=this;
  var s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};
  e.each(r.sortables,function(s){
    var o=!1;
    var u=this;
    this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=() => n.helper[0],t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)
  })
}}),e.ui.plugin.add("draggable","cursor",{start(t, n) {
  var r=e("body");
  var i=e(this).data("draggable").options;
  r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)
},stop(t, n) {var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start(t, n) {
  var r=e(n.helper);
  var i=e(this).data("draggable").options;
  r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)
},stop(t, n) {var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start(t, n) {var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag(t, n) {
  var r=e(this).data("draggable");
  var i=r.options;
  var s=!1;
  if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)
}}),e.ui.plugin.add("draggable","snap",{start(t, n) {
  var r=e(this).data("draggable");
  var i=r.options;
  r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){
    var t=e(this);
    var n=t.offset();
    this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})
  })
},drag(t, n) {
  var r=e(this).data("draggable");
  var i=r.options;
  var s=i.snapTolerance;
  var o=n.offset.left;
  var u=o+r.helperProportions.width;
  var a=n.offset.top;
  var f=a+r.helperProportions.height;
  for(var l=r.snapElements.length-1;l>=0;l--){
    var c=r.snapElements[l].left;
    var h=c+r.snapElements[l].width;
    var p=r.snapElements[l].top;
    var d=p+r.snapElements[l].height;
    if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){
      var v=Math.abs(p-f)<=s;
      var m=Math.abs(d-a)<=s;
      var g=Math.abs(c-u)<=s;
      var y=Math.abs(h-o)<=s;
      v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)
    }var b=v||m||g||y;if(i.snapMode!="outer"){
      var v=Math.abs(p-a)<=s;
      var m=Math.abs(d-f)<=s;
      var g=Math.abs(c-o)<=s;
      var y=Math.abs(h-u)<=s;
      v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)
    }!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b
  }
}}),e.ui.plugin.add("draggable","stack",{start(t, n) {
  var r=e(this).data("draggable").options;
  var i=e.makeArray(e(r.stack)).sort((t, n) => (parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0));
  if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length
}}),e.ui.plugin.add("draggable","zIndex",{start(t, n) {
  var r=e(n.helper);
  var i=e(this).data("draggable").options;
  r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)
},stop(t, n) {var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})}))(jQuery);(((e, t) => {e.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create() {
  var t=this.options;
  var n=t.accept;
  this.isover=0,this.isout=1,this.accept=e.isFunction(n)?n:e => e.is(n),this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")
},_destroy() {var t=e.ui.ddmanager.droppables[this.options.scope];for(var n=0;n<t.length;n++)t[n]==this&&t.splice(n,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption(t, n) {t=="accept"&&(this.accept=e.isFunction(n)?n:e => e.is(n)),e.Widget.prototype._setOption.apply(this,arguments)},_activate(t) {var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate(t) {var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over(t) {var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out(t) {var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop(t, n) {var r=n||e.ui.ddmanager.current;if(!r||(r.currentItem||r.element)[0]==this.element[0])return!1;var i=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope==r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui(e) {return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=(t, n, r) => {
  if(!n.offset)return!1;
  var i=(t.positionAbs||t.position.absolute).left;
  var s=i+t.helperProportions.width;
  var o=(t.positionAbs||t.position.absolute).top;
  var u=o+t.helperProportions.height;
  var a=n.offset.left;
  var f=a+n.proportions.width;
  var l=n.offset.top;
  var c=l+n.proportions.height;
  switch(r){case"fit":return a<=i&&s<=f&&l<=o&&u<=c;case"intersect":return a<i+t.helperProportions.width/2&&s-t.helperProportions.width/2<f&&l<o+t.helperProportions.height/2&&u-t.helperProportions.height/2<c;case "pointer":
    var h=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left;
    var p=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top;
    var d=e.ui.isOver(p,h,l,a,n.proportions.height,n.proportions.width);
    return d;case"touch":return(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c)&&(i>=a&&i<=f||s>=a&&s<=f||i<a&&s>f);default:return!1}
},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets(t, n) {
  var r=e.ui.ddmanager.droppables[t.options.scope]||[];
  var i=n?n.type:null;
  var s=(t.currentItem||t.element).find(":data(droppable)").andSelf();
  e:for(var o=0;o<r.length;o++){if(r[o].options.disabled||t&&!r[o].accept.call(r[o].element[0],t.currentItem||t.element))continue;for(var u=0;u<s.length;u++)if(s[u]==r[o].element[0]){r[o].proportions.height=0;continue e}r[o].visible=r[o].element.css("display")!="none";if(!r[o].visible)continue;i=="mousedown"&&r[o]._activate.call(r[o],n),r[o].offset=r[o].element.offset(),r[o].proportions={width:r[o].element[0].offsetWidth,height:r[o].element[0].offsetHeight}}
},drop(t, n) {var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,n))}),r},dragStart(t, n) {t.element.parentsUntil("body").bind("scroll.droppable",() => {t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag(t, n) {t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){
  if(this.options.disabled||this.greedyChild||!this.visible)return;
  var r=e.ui.intersect(t,this,this.options.tolerance);
  var i=!r&&this.isover==1?"isout":r&&this.isover==0?"isover":null;
  if(!i)return;var s;if(this.options.greedy){
    var o=this.options.scope;
    var u=this.element.parents(":data(droppable)").filter(function(){return e.data(this,"droppable").options.scope===o});
    u.length&&(s=e.data(u[0],"droppable"),s.greedyChild=i=="isover"?1:0)
  }s&&i=="isover"&&(s.isover=0,s.isout=1,s._out.call(s,n)),this[i]=1,this[i=="isout"?"isover":"isout"]=0,this[i=="isover"?"_over":"_out"].call(this,n),s&&i=="isout"&&(s.isout=0,s.isover=1,s._over.call(s,n))
})},dragStop(t, n) {t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}}))(jQuery);jQuery.effects||((e, t) => {
  var n=e.uiBackCompat!==!1;
  var r="ui-effects-";
  e.effects={effect:{}},((t, n) => {
    function p(e,t,n){var r=a[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function d(e){
      var n=o();
      var r=n._rgba=[];
      return e=e.toLowerCase(),h(s,(t, i) => {
        var s;
        var o=i.re.exec(e);
        var a=o&&i.parse(o);
        var f=i.space||"rgba";
        if(a)return s=n[f](a),n[u[f].cache]=s[u[f].cache],r=n._rgba=s._rgba,!1
      }),r.length?(r.join()==="0,0,0,0"&&t.extend(r,c.transparent),n):c[e];
    }function v(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}
    var r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" ");
    var i=/^([\-+])=\s*(\d+\.?\d*)/;
    var s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse(e) {return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse(e) {return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse(e) {return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse(e) {return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse(e) {return[e[1],e[2]/100,e[3]/100,e[4]]}}];
    var o=t.Color=(e, n, r, i) => new t.Color.fn.parse(e,n,r,i);
    var u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}};
    var a={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}};
    var f=o.support={};
    var l=t("<p>")[0];
    var c;
    var h=t.each;
    l.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=l.style.backgroundColor.indexOf("rgba")>-1,h(u,(e, t) => {t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),o.fn=t.extend(o.prototype,{parse(r, i, s, a) {
      if(r===n)return this._rgba=[null,null,null,null],this;if(r.jquery||r.nodeType)r=t(r).css(i),i=n;
      var f=this;
      var l=t.type(r);
      var v=this._rgba=[];
      i!==n&&(r=[r,i,s,a],l="array");if(l==="string")return this.parse(d(r)||c._default);if(l==="array")return h(u.rgba.props,(e, t) => {v[t.idx]=p(r[t.idx],t)}),this;if(l==="object")return r instanceof o?h(u,(e, t) => {r[t.cache]&&(f[t.cache]=r[t.cache].slice())}):h(u,(t, n) => {var i=n.cache;h(n.props,(e, t) => {if(!f[i]&&n.to){if(e==="alpha"||r[e]==null)return;f[i]=n.to(f._rgba)}f[i][t.idx]=p(r[e],t,!0)}),f[i]&&e.inArray(null,f[i].slice(0,3))<0&&(f[i][3]=1,n.from&&(f._rgba=n.from(f[i])))}),this;
    },is(e) {
      var t=o(e);
      var n=!0;
      var r=this;
      return h(u,(e, i) => {
        var s;
        var o=t[i.cache];
        return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],h(i.props,(e, t) => {if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n;
      }),n;
    },_space() {
      var e=[];
      var t=this;
      return h(u,(n, r) => {t[r.cache]&&e.push(n)}),e.pop();
    },transition(e, t) {
      var n=o(e);
      var r=n._space();
      var i=u[r];
      var s=this.alpha()===0?o("transparent"):this;
      var f=s[i.cache]||i.to(s._rgba);
      var l=f.slice();
      return n=n[i.cache],h(i.props,(e, r) => {
        var i=r.idx;
        var s=f[i];
        var o=n[i];
        var u=a[r.type]||{};
        if(o===null)return;s===null?l[i]=o:(u.mod&&(o-s>u.mod/2?s+=u.mod:s-o>u.mod/2&&(s-=u.mod)),l[i]=p((o-s)*t+s,r))
      }),this[r](l);
    },blend(e) {
      if(this._rgba[3]===1)return this;
      var n=this._rgba.slice();
      var r=n.pop();
      var i=o(e)._rgba;
      return o(t.map(n,(e, t) => (1-r)*i[t]+r*e));
    },toRgbaString() {
      var e="rgba(";
      var n=t.map(this._rgba,(e, t) => e==null?t>2?1:0:e);
      return n[3]===1&&(n.pop(),e="rgb("),e+n.join()+")"
    },toHslaString() {
      var e="hsla(";
      var n=t.map(this.hsla(),(e, t) => (e==null&&(e=t>2?1:0), t&&t<3&&(e=Math.round(e*100)+"%"), e));
      return n[3]===1&&(n.pop(),e="hsl("),e+n.join()+")"
    },toHexString(e) {
      var n=this._rgba.slice();
      var r=n.pop();
      return e&&n.push(~~(r*255)),"#"+t.map(n,e => (e=(e||0).toString(16), e.length===1?"0"+e:e)).join("");
    },toString() {return this._rgba[3]===0?"transparent":this.toRgbaString()}}),o.fn.parse.prototype=o.fn,u.hsla.to=e => {
      if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];
      var t=e[0]/255;
      var n=e[1]/255;
      var r=e[2]/255;
      var i=e[3];
      var s=Math.max(t,n,r);
      var o=Math.min(t,n,r);
      var u=s-o;
      var a=s+o;
      var f=a*.5;
      var l;
      var c;
      return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,f===0||f===1?c=f:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]
    },u.hsla.from=e => {
      if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];
      var t=e[0]/360;
      var n=e[1];
      var r=e[2];
      var i=e[3];
      var s=r<=.5?r*(1+n):r+n-r*n;
      var o=2*r-s;
      return[Math.round(v(o,s,t+1/3)*255),Math.round(v(o,s,t)*255),Math.round(v(o,s,t-1/3)*255),i]
    },h(u,(e, r) => {
      var s=r.props;
      var u=r.cache;
      var a=r.to;
      var f=r.from;
      o.fn[e]=function(e){
        a&&!this[u]&&(this[u]=a(this._rgba));if(e===n)return this[u].slice();
        var r;
        var i=t.type(e);
        var l=i==="array"||i==="object"?e:arguments;
        var c=this[u].slice();
        return h(s,(e, t) => {var n=l[i==="object"?e:t.idx];n==null&&(n=c[t.idx]),c[t.idx]=p(n,t)}),f?(r=o(f(c)),r[u]=c,r):o(c);
      },h(s,(n, r) => {if(o.fn[n])return;o.fn[n]=function(s){
        var o=t.type(s);
        var u=n==="alpha"?this._hsla?"hsla":"rgba":e;
        var a=this[u]();
        var f=a[r.idx];
        var l;
        return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=t.type(s)),s==null&&r.empty?this:(o==="string"&&(l=i.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[r.idx]=s,this[u](a)))
      }})
    }),h(r,(e, n) => {t.cssHooks[n]={set(e, r) {
      var i;
      var s;
      var u="";
      if(t.type(r)!=="string"||(i=d(r))){r=o(i||r);if(!f.rgba&&r._rgba[3]!==1){s=n==="backgroundColor"?e.parentNode:e;while((u===""||u==="transparent")&&s&&s.style)try{u=t.css(s,"backgroundColor"),s=s.parentNode}catch(a){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}
    }},t.fx.step[n]=e => {e.colorInit||(e.start=o(e.elem,n),e.end=o(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand(e) {var t={};return h(["Top","Right","Bottom","Left"],(n, r) => {t["border"+r+"Color"]=e}),t;}},c=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
  })(jQuery),(() => {
    function i(){
      var t=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle;
      var n={};
      var r;
      var i;
      if(t&&t.length&&t[0]&&t[t[0]]){i=t.length;while(i--)r=t[i],typeof t[r]=="string"&&(n[e.camelCase(r)]=t[r])}else for(r in t)typeof t[r]=="string"&&(n[r]=t[r]);return n
    }function s(t,n){
      var i={};
      var s;
      var o;
      for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i
    }
    var n=["add","remove","toggle"];
    var r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
    e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],(t, n) => {e.fx.step[n]=e => {if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){
      var r=e(this);
      var o=r.attr("class")||"";
      var u;
      var f=a.children?r.find("*").andSelf():r;
      f=f.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),u=() => {e.each(n,(e, n) => {t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){
        var t=this;
        var n=e.Deferred();
        var r=jQuery.extend({},a,{queue:!1,complete() {n.resolve(t)}});
        return this.el.animate(this.diff,r),n.promise()
      }),e.when(...f.get()).done(function(...args) {u(),e.each(args,function(){var t=this.el;e.each(this.diff,e => {t.css(e,"")})}),a.complete.call(r[0])})
    });},e.fn.extend({_addClass:e.fn.addClass,addClass(t, n, r, i) {return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass(t, n, r, i) {return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass(n, r, i, s, o) {return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass(t, n, r, i, s) {return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})
  })(),(() => {function i(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function s(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]?n&&e.effects[t]?!1:!0:!1}e.extend(e.effects,{version:"1.9.2",save(e, t) {for(var n=0;n<t.length;n++)t[n]!==null&&e.data(r+t[n],e[0].style[t[n]])},restore(e, n) {
    var i;
    var s;
    for(s=0;s<n.length;s++)n[s]!==null&&(i=e.data(r+n[s]),i===t&&(i=""),e.css(n[s],i))
  },setMode(e, t) {return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline(e, t) {
    var n;
    var r;
    switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}
  },createWrapper(t) {
    if(t.parent().is(".ui-effects-wrapper"))return t.parent();
    var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")};
    var r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
    var i={width:t.width(),height:t.height()};
    var s=document.activeElement;
    try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],(e, r) => {n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show();
  },removeWrapper(t) {var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition(t, n, r, i) {return i=i||{},e.each(n,(e, n) => {var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i;}}),e.fn.extend({effect(...args) {
    function a(n){
      function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}
      var r=e(this);
      var i=t.complete;
      var s=t.mode;
      (r.is(":hidden")?s==="hide":s==="show")?u():o.call(r[0],t,u)
    }
    var t=i.apply(this,args);
    var r=t.mode;
    var s=t.queue;
    var o=e.effects.effect[t.effect];
    var u=!o&&n&&e.effects[t.effect];
    return e.fx.off||!o&&!u?r?this[r](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):o?s===!1?this.each(a):this.queue(s||"fx",a):u.call(this,{options:t,duration:t.duration,callback:t.complete,mode:t.mode})
  },_show:e.fn.show,show(e) {if(s(e))return this._show(...arguments);var t=i.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide(e) {if(s(e))return this._hide(...arguments);var t=i.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle(t) {if(s(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle(...arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit(t) {
    var n=this.css(t);
    var r=[];
    return e.each(["em","px","%","pt"],(e, t) => {n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r;
  }})})(),(() => {var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],(e, n) => {t[n]=t => t ** (e + 2)}),e.extend(t,{Sine(e) {return 1-Math.cos(e*Math.PI/2)},Circ(e) {return 1-Math.sqrt(1-e*e)},Elastic(e) {return e===0||e===1?e:-(2 ** (8 * (e - 1)))*Math.sin(((e-1)*80-7.5)*Math.PI/15);},Back(e) {return e*e*(3*e-2)},Bounce(e) {
    var t;
    var n=4;
    while(e<((t=2 ** --n)-1)/11);return 1/(4 ** (3 - n))-7.5625*(((t*3-2)/22 - e) ** 2);
  }}),e.each(t,(t, n) => {e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=e => 1-n(1-e),e.easing["easeInOut"+t]=e => e<.5?n(e*2)/2:1-n(e*-2+2)/2})})()
})(jQuery);(((e, t) => {
  var n=/up|down|vertical/;
  var r=/up|left|vertical|horizontal/;
  e.effects.effect.blind=function(t,i){
    var s=e(this);
    var o=["position","top","bottom","left","right","height","width"];
    var u=e.effects.setMode(s,t.mode||"hide");
    var a=t.direction||"up";
    var f=n.test(a);
    var l=f?"height":"width";
    var c=f?"top":"left";
    var h=r.test(a);
    var p={};
    var d=u==="show";
    var v;
    var m;
    var g;
    s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),o):e.effects.save(s,o),s.show(),v=e.effects.createWrapper(s).css({overflow:"hidden"}),m=v[l](),g=parseFloat(v.css(c))||0,p[l]=d?m:0,h||(s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),p[c]=d?g:m+g),d&&(v.css(l,0),h||v.css(c,g+m)),v.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete() {u==="hide"&&s.hide(),e.effects.restore(s,o),e.effects.removeWrapper(s),i()}})
  }
}))(jQuery);(((e, t) => {e.effects.effect.bounce=function(t,n){
  var r=e(this);
  var i=["position","top","bottom","left","right","height","width"];
  var s=e.effects.setMode(r,t.mode||"effect");
  var o=s==="hide";
  var u=s==="show";
  var a=t.direction||"up";
  var f=t.distance;
  var l=t.times||5;
  var c=l*2+(u||o?1:0);
  var h=t.duration/c;
  var p=t.easing;
  var d=a==="up"||a==="down"?"top":"left";
  var v=a==="up"||a==="left";
  var m;
  var g;
  var y;
  var b=r.queue();
  var w=b.length;
  (u||o)&&i.push("opacity"),e.effects.save(r,i),r.show(),e.effects.createWrapper(r),f||(f=r[d==="top"?"outerHeight":"outerWidth"]()/3),u&&(y={opacity:1},y[d]=0,r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)),o&&(f/=2 ** (l - 1)),y={},y[d]=0;for(m=0;m<l;m++)g={},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p).animate(y,h,p),f=o?f*2:f/2;o&&(g={opacity:0},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p)),r.queue(() => {o&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),w>1&&b.splice(...[1,0].concat(b.splice(w,c+1))),r.dequeue()
}}))(jQuery);(((e, t) => {e.effects.effect.clip=function(t,n){
  var r=e(this);
  var i=["position","top","bottom","left","right","height","width"];
  var s=e.effects.setMode(r,t.mode||"hide");
  var o=s==="show";
  var u=t.direction||"vertical";
  var a=u==="vertical";
  var f=a?"height":"width";
  var l=a?"top":"left";
  var c={};
  var h;
  var p;
  var d;
  e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete() {o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})
}}))(jQuery);(((e, t) => {e.effects.effect.drop=function(t,n){
  var r=e(this);
  var i=["position","top","bottom","left","right","opacity","height","width"];
  var s=e.effects.setMode(r,t.mode||"hide");
  var o=s==="show";
  var u=t.direction||"left";
  var a=u==="up"||u==="down"?"top":"left";
  var f=u==="up"||u==="left"?"pos":"neg";
  var l={opacity:o?1:0};
  var c;
  e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(a,f==="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete() {s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})
}}))(jQuery);(((e, t) => {e.effects.effect.explode=function(t,n){
  function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}
  var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3;
  var i=r;
  var s=e(this);
  var o=e.effects.setMode(s,t.mode||"hide");
  var u=o==="show";
  var a=s.show().css("visibility","hidden").offset();
  var f=Math.ceil(s.outerWidth()/i);
  var l=Math.ceil(s.outerHeight()/r);
  var c=[];
  var h;
  var p;
  var d;
  var v;
  var m;
  var g;
  for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}
}}))(jQuery);(((e, t) => {e.effects.effect.fade=function(t,n){
  var r=e(this);
  var i=e.effects.setMode(r,t.mode||"toggle");
  r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})
}}))(jQuery);(((e, t) => {e.effects.effect.fold=function(t,n){
  var r=e(this);
  var i=["position","top","bottom","left","right","height","width"];
  var s=e.effects.setMode(r,t.mode||"hide");
  var o=s==="show";
  var u=s==="hide";
  var a=t.size||15;
  var f=/([0-9]+)%/.exec(a);
  var l=!!t.horizFirst;
  var c=o!==l;
  var h=c?["width","height"]:["height","width"];
  var p=t.duration/2;
  var d;
  var v;
  var m={};
  var g={};
  e.effects.save(r,i),r.show(),d=e.effects.createWrapper(r).css({overflow:"hidden"}),v=c?[d.width(),d.height()]:[d.height(),d.width()],f&&(a=parseInt(f[1],10)/100*v[u?0:1]),o&&d.css(l?{height:0,width:a}:{height:a,width:0}),m[h[0]]=o?v[0]:a,g[h[1]]=o?v[1]:0,d.animate(m,p,t.easing).animate(g,p,t.easing,() => {u&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()})
}}))(jQuery);(((e, t) => {e.effects.effect.highlight=function(t,n){
  var r=e(this);
  var i=["backgroundImage","backgroundColor","opacity"];
  var s=e.effects.setMode(r,t.mode||"show");
  var o={backgroundColor:r.css("backgroundColor")};
  s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete() {s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})
}}))(jQuery);(((e, t) => {e.effects.effect.pulsate=function(t,n){
  var r=e(this);
  var i=e.effects.setMode(r,t.mode||"show");
  var s=i==="show";
  var o=i==="hide";
  var u=s||i==="hide";
  var a=(t.times||5)*2+(u?1:0);
  var f=t.duration/a;
  var l=0;
  var c=r.queue();
  var h=c.length;
  var p;
  if(s||!r.is(":visible"))r.css("opacity",0).show(),l=1;for(p=1;p<a;p++)r.animate({opacity:l},f,t.easing),l=1-l;r.animate({opacity:l},f,t.easing),r.queue(() => {o&&r.hide(),n()}),h>1&&c.splice(...[1,0].concat(c.splice(h,a+1))),r.dequeue()
}}))(jQuery);(((e, t) => {e.effects.effect.puff=function(t,n){
  var r=e(this);
  var i=e.effects.setMode(r,t.mode||"hide");
  var s=i==="hide";
  var o=parseInt(t.percent,10)||150;
  var u=o/100;
  var a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};
  e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}}),r.effect(t)
},e.effects.effect.scale=function(t,n){
  var r=e(this);
  var i=e.extend(!0,{},t);
  var s=e.effects.setMode(r,t.mode||"effect");
  var o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100);
  var u=t.direction||"both";
  var a=t.origin;
  var f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};
  var l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};
  i.effect="size",i.queue=!1,i.complete=n,s!=="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s==="show"&&(i.from.opacity=0,i.to.opacity=1),s==="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)
},e.effects.effect.size=function(t,n){
  var r;
  var i;
  var s;
  var o=e(this);
  var u=["position","top","bottom","left","right","width","height","overflow","opacity"];
  var a=["position","top","bottom","left","right","overflow","opacity"];
  var f=["width","height","overflow"];
  var l=["fontSize"];
  var c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];
  var h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];
  var p=e.effects.setMode(o,t.mode||"effect");
  var d=t.restore||p!=="effect";
  var v=t.scale||"both";
  var m=t.origin||["middle","center"];
  var g=o.css("position");
  var y=d?u:a;
  var b={height:0,width:0,outerHeight:0,outerWidth:0};
  p==="show"&&o.show(),r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},t.mode==="toggle"&&p==="show"?(o.from=t.to||b,o.to=t.from||r):(o.from=t.from||(p==="show"?b:r),o.to=t.to||(p==="hide"?b:r)),s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both")s.from.y!==s.to.y&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,s.from.y,o.from),o.to=e.effects.setTransition(o,c,s.to.y,o.to)),s.from.x!==s.to.x&&(y=y.concat(h),o.from=e.effects.setTransition(o,h,s.from.x,o.from),o.to=e.effects.setTransition(o,h,s.to.x,o.to));(v==="content"||v==="both")&&s.from.y!==s.to.y&&(y=y.concat(l).concat(f),o.from=e.effects.setTransition(o,l,s.from.y,o.from),o.to=e.effects.setTransition(o,l,s.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(i=e.effects.getBaseline(m,r),o.from.top=(r.outerHeight-o.outerHeight())*i.y,o.from.left=(r.outerWidth-o.outerWidth())*i.x,o.to.top=(r.outerHeight-o.to.outerHeight)*i.y,o.to.left=(r.outerWidth-o.to.outerWidth)*i.x),o.css(o.from);if(v==="content"||v==="both")c=c.concat(["marginTop","marginBottom"]).concat(l),h=h.concat(["marginLeft","marginRight"]),f=u.concat(c).concat(h),o.find("*[width]").each(function(){
    var n=e(this);
    var r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};
    d&&e.effects.save(n,f),n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x},n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x},s.from.y!==s.to.y&&(n.from=e.effects.setTransition(n,c,s.from.y,n.from),n.to=e.effects.setTransition(n,c,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=e.effects.setTransition(n,h,s.from.x,n.from),n.to=e.effects.setTransition(n,h,s.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,() => {d&&e.effects.restore(n,f)})
  });o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete() {o.to.opacity===0&&o.css("opacity",o.from.opacity),p==="hide"&&o.hide(),e.effects.restore(o,y),d||(g==="static"?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],(e, t) => {o.css(t,(t, n) => {
    var r=parseInt(n,10);
    var i=e?o.to.left:o.to.top;
    return n==="auto"?i+"px":r+i+"px"
  })})),e.effects.removeWrapper(o),n()}})
}}))(jQuery);(((e, t) => {e.effects.effect.shake=function(t,n){
  var r=e(this);
  var i=["position","top","bottom","left","right","height","width"];
  var s=e.effects.setMode(r,t.mode||"effect");
  var o=t.direction||"left";
  var u=t.distance||20;
  var a=t.times||3;
  var f=a*2+1;
  var l=Math.round(t.duration/f);
  var c=o==="up"||o==="down"?"top":"left";
  var h=o==="up"||o==="left";
  var p={};
  var d={};
  var v={};
  var m;
  var g=r.queue();
  var y=g.length;
  e.effects.save(r,i),r.show(),e.effects.createWrapper(r),p[c]=(h?"-=":"+=")+u,d[c]=(h?"+=":"-=")+u*2,v[c]=(h?"-=":"+=")+u*2,r.animate(p,l,t.easing);for(m=1;m<a;m++)r.animate(d,l,t.easing).animate(v,l,t.easing);r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(() => {s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),y>1&&g.splice(...[1,0].concat(g.splice(y,f+1))),r.dequeue()
}}))(jQuery);(((e, t) => {e.effects.effect.slide=function(t,n){
  var r=e(this);
  var i=["position","top","bottom","left","right","width","height"];
  var s=e.effects.setMode(r,t.mode||"show");
  var o=s==="show";
  var u=t.direction||"left";
  var a=u==="up"||u==="down"?"top":"left";
  var f=u==="up"||u==="left";
  var l;
  var c={};
  e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete() {s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})
}}))(jQuery);(((e, t) => {e.effects.effect.transfer=function(t,n){
  var r=e(this);
  var i=e(t.to);
  var s=i.css("position")==="fixed";
  var o=e("body");
  var u=s?o.scrollTop():0;
  var a=s?o.scrollLeft():0;
  var f=i.offset();
  var l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()};
  var c=r.offset();
  var h=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,() => {h.remove(),n()});
}}))(jQuery);(((e, t) => {var n=!1;e.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create() {this.activeMenu=this.element,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var r=e(t.target).closest(".ui-menu-item");!n&&r.not(".ui-state-disabled").length&&(n=!0,this.select(t),r.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus(e, t) {var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur(t) {this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click(t) {e(t.target).closest(".ui-menu").length||this.collapseAll(t),n=!1}})},_destroy() {this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown(t) {
  function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}
  var n;
  var r;
  var i;
  var s;
  var o;
  var u=!0;
  switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()
},_activate(e) {this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh() {
  var t;
  var n=this.options.icons.submenu;
  var r=this.element.find(this.options.menus);
  r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){
    var t=e(this);
    var r=t.prev("a");
    var i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);
    r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))
  }),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-—–\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole() {return{menu:"menuitem",listbox:"option"}[this.options.role]},focus(e, t) {
  var n;
  var r;
  this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})
},_scrollIntoView(t) {
  var n;
  var r;
  var i;
  var s;
  var o;
  var u;
  this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))
},blur(e, t) {t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening(e) {clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open(t) {var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll(t, n) {clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close(e) {e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse(e) {var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand(e) {var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next(e) {this._move("next","first",e)},previous(e) {this._move("prev","last",e)},isFirstItem() {return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem() {return this.active&&!this.active.nextAll(".ui-menu-item").length},_move(e, t, n) {var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage(t) {
  var n;
  var r;
  var i;
  if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())
},previousPage(t) {
  var n;
  var r;
  var i;
  if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())
},_hasScroll() {return this.element.outerHeight()<this.element.prop("scrollHeight")},select(t) {this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})}))(jQuery);(((e, t) => {e.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create() {this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},_destroy() {this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value(e) {return e===t?this._value():(this._setOption("value",e),this)},_setOption(e, t) {e==="value"&&(this.options.value=t,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),this._super(e,t)},_value() {var e=this.options.value;return typeof e!="number"&&(e=0),Math.min(this.options.max,Math.max(this.min,e))},_percentage() {return 100*this._value()/this.options.max},_refreshValue() {
  var e=this.value();
  var t=this._percentage();
  this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),this.valueDiv.toggle(e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(t.toFixed(0)+"%"),this.element.attr("aria-valuenow",e)
}})}))(jQuery);(((e, t) => {
  e.widget("ui.resizable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create() {
    var t=this;
    var n=this.options;
    this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!n.aspectRatio,aspectRatio:n.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:n.helper||n.ghost||n.animate?n.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=n.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var r=this.handles.split(",");this.handles={};for(var i=0;i<r.length;i++){
      var s=e.trim(r[i]);
      var o="ui-resizable-"+s;
      var u=e('<div class="ui-resizable-handle '+o+'"></div>');
      u.css({zIndex:n.zIndex}),"se"==s&&u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(u)
    }}this._renderAxis=function(t){t=t||this.element;for(var n in this.handles){this.handles[n].constructor==String&&(this.handles[n]=e(this.handles[n],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){
      var r=e(this.handles[n],this.element);
      var i=0;
      i=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth();var s=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");t.css(s,i),this._proportionallyResize()
    }if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!t.resizing){if(this.className)var e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);t.axis=e&&e[1]?e[1]:"se"}}),n.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(n.disabled)return;e(this).removeClass("ui-resizable-autohide"),t._handles.show()}).mouseleave(function(){if(n.disabled)return;t.resizing||(e(this).addClass("ui-resizable-autohide"),t._handles.hide())})),this._mouseInit()
  },_destroy() {this._mouseDestroy();var t=t => {e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){t(this.element);var n=this.element;this.originalElement.css({position:n.css("position"),width:n.outerWidth(),height:n.outerHeight(),top:n.css("top"),left:n.css("left")}).insertAfter(n),n.remove()}return this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_mouseCapture(t) {var n=!1;for(var r in this.handles)e(this.handles[r])[0]==t.target&&(n=!0);return!this.options.disabled&&n},_mouseStart(t) {
    var r=this.options;
    var i=this.element.position();
    var s=this.element;
    this.resizing=!0,this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()},(s.is(".ui-draggable")||/absolute/.test(s.css("position")))&&s.css({position:"absolute",top:i.top,left:i.left}),this._renderProxy();
    var o=n(this.helper.css("left"));
    var u=n(this.helper.css("top"));
    r.containment&&(o+=e(r.containment).scrollLeft()||0,u+=e(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:o,top:u},this.size=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalSize=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.originalPosition={left:o,top:u},this.sizeDiff={width:s.outerWidth()-s.width(),height:s.outerHeight()-s.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof r.aspectRatio=="number"?r.aspectRatio:this.originalSize.width/this.originalSize.height||1;var a=e(".ui-resizable-"+this.axis).css("cursor");return e("body").css("cursor",a=="auto"?this.axis+"-resize":a),s.addClass("ui-resizable-resizing"),this._propagate("start",t),!0
  },_mouseDrag(e) {
    var t=this.helper;
    var n=this.options;
    var r={};
    var i=this;
    var s=this.originalMousePosition;
    var o=this.axis;
    var u=e.pageX-s.left||0;
    var a=e.pageY-s.top||0;
    var f=this._change[o];
    if(!f)return!1;var l=f.apply(this,[e,u,a]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey)l=this._updateRatio(l,e);return l=this._respectSize(l,e),this._propagate("resize",e),t.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",e,this.ui()),!1
  },_mouseStop(t) {
    this.resizing=!1;
    var n=this.options;
    var r=this;
    if(this._helper){
      var i=this._proportionallyResizeElements;
      var s=i.length&&/textarea/i.test(i[0].nodeName);
      var o=s&&e.ui.hasScroll(i[0],"left")?0:r.sizeDiff.height;
      var u=s?0:r.sizeDiff.width;
      var a={width:r.helper.width()-u,height:r.helper.height()-o};
      var f=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null;
      var l=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;
      n.animate||this.element.css(e.extend(a,{top:l,left:f})),r.helper.height(r.size.height),r.helper.width(r.size.width),this._helper&&!n.animate&&this._proportionallyResize()
    }return e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1
  },_updateVirtualBoundaries(e) {
    var t=this.options;
    var n;
    var i;
    var s;
    var o;
    var u;
    u={minWidth:r(t.minWidth)?t.minWidth:0,maxWidth:r(t.maxWidth)?t.maxWidth:Infinity,minHeight:r(t.minHeight)?t.minHeight:0,maxHeight:r(t.maxHeight)?t.maxHeight:Infinity};if(this._aspectRatio||e)n=u.minHeight*this.aspectRatio,s=u.minWidth/this.aspectRatio,i=u.maxHeight*this.aspectRatio,o=u.maxWidth/this.aspectRatio,n>u.minWidth&&(u.minWidth=n),s>u.minHeight&&(u.minHeight=s),i<u.maxWidth&&(u.maxWidth=i),o<u.maxHeight&&(u.maxHeight=o);this._vBoundaries=u
  },_updateCache(e) {var t=this.options;this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio(e, t) {
    var n=this.options;
    var i=this.position;
    var s=this.size;
    var o=this.axis;
    return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),o=="sw"&&(e.left=i.left+(s.width-e.width),e.top=null),o=="nw"&&(e.top=i.top+(s.height-e.height),e.left=i.left+(s.width-e.width)),e
  },_respectSize(e, t) {
    var n=this.helper;
    var i=this._vBoundaries;
    var s=this._aspectRatio||t.shiftKey;
    var o=this.axis;
    var u=r(e.width)&&i.maxWidth&&i.maxWidth<e.width;
    var a=r(e.height)&&i.maxHeight&&i.maxHeight<e.height;
    var f=r(e.width)&&i.minWidth&&i.minWidth>e.width;
    var l=r(e.height)&&i.minHeight&&i.minHeight>e.height;
    f&&(e.width=i.minWidth),l&&(e.height=i.minHeight),u&&(e.width=i.maxWidth),a&&(e.height=i.maxHeight);
    var c=this.originalPosition.left+this.originalSize.width;
    var h=this.position.top+this.size.height;
    var p=/sw|nw|w/.test(o);
    var d=/nw|ne|n/.test(o);
    f&&p&&(e.left=c-i.minWidth),u&&p&&(e.left=c-i.maxWidth),l&&d&&(e.top=h-i.minHeight),a&&d&&(e.top=h-i.maxHeight);var v=!e.width&&!e.height;return v&&!e.left&&e.top?e.top=null:v&&!e.top&&e.left&&(e.left=null),e
  },_proportionallyResize() {var t=this.options;if(!this._proportionallyResizeElements.length)return;var n=this.helper||this.element;for(var r=0;r<this._proportionallyResizeElements.length;r++){var i=this._proportionallyResizeElements[r];if(!this.borderDif){
    var s=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")];
    var o=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];
    this.borderDif=e.map(s,(e, t) => {
      var n=parseInt(e,10)||0;
      var r=parseInt(o[t],10)||0;
      return n+r
    })
  }i.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy() {
    var t=this.element;
    var n=this.options;
    this.elementOffset=t.offset();if(this._helper){
      this.helper=this.helper||e('<div style="overflow:hidden;"></div>');
      var r=e.ui.ie6?1:0;
      var i=e.ui.ie6?2:-1;
      this.helper.addClass(this._helper).css({width:this.element.outerWidth()+i,height:this.element.outerHeight()+i,position:"absolute",left:this.elementOffset.left-r+"px",top:this.elementOffset.top-r+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()
    }else this.helper=this.element
  },_change:{e(e, t, n) {return{width:this.originalSize.width+t}},w(e, t, n) {
    var r=this.options;
    var i=this.originalSize;
    var s=this.originalPosition;
    return{left:s.left+t,width:i.width-t}
  },n(e, t, n) {
    var r=this.options;
    var i=this.originalSize;
    var s=this.originalPosition;
    return{top:s.top+n,height:i.height-n}
  },s(e, t, n) {return{height:this.originalSize.height+n}},se(t, n, r) {return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw(t, n, r) {return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne(t, n, r) {return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw(t, n, r) {return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate(t, n) {e.ui.plugin.call(this,t,[n,this.ui()]),t!="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui() {return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","alsoResize",{start(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    var s=t => {e(t).each(function(){var t=e(this);t.data("resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};
    typeof i.alsoResize=="object"&&!i.alsoResize.parentNode?i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,e => {s(e)}):s(i.alsoResize)
  },resize(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    var s=r.originalSize;
    var o=r.originalPosition;
    var u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0};
    var a=(t, r) => {e(t).each(function(){var t=e(this),i=e(this).data("resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,(e, t) => {var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};
    typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,(e, t) => {a(e,t)}):a(i.alsoResize)
  },stop(t, n) {e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","animate",{stop(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    var s=r._proportionallyResizeElements;
    var o=s.length&&/textarea/i.test(s[0].nodeName);
    var u=o&&e.ui.hasScroll(s[0],"left")?0:r.sizeDiff.height;
    var a=o?0:r.sizeDiff.width;
    var f={width:r.size.width-a,height:r.size.height-u};
    var l=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null;
    var c=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;
    r.element.animate(e.extend(f,c&&l?{top:c,left:l}:{}),{duration:i.animateDuration,easing:i.animateEasing,step() {var n={width:parseInt(r.element.css("width"),10),height:parseInt(r.element.css("height"),10),top:parseInt(r.element.css("top"),10),left:parseInt(r.element.css("left"),10)};s&&s.length&&e(s[0]).css({width:n.width,height:n.height}),r._updateCache(n),r._propagate("resize",t)}})
  }}),e.ui.plugin.add("resizable","containment",{start(t, r) {
    var i=e(this).data("resizable");
    var s=i.options;
    var o=i.element;
    var u=s.containment;
    var a=u instanceof e?u.get(0):/parent/.test(u)?o.parent().get(0):u;
    if(!a)return;i.containerElement=e(a);if(/document/.test(u)||u==document)i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight};else{
      var f=e(a);
      var l=[];
      e(["Top","Right","Left","Bottom"]).each((e, t) => {l[e]=n(f.css("padding"+t))}),i.containerOffset=f.offset(),i.containerPosition=f.position(),i.containerSize={height:f.innerHeight()-l[3],width:f.innerWidth()-l[1]};
      var c=i.containerOffset;
      var h=i.containerSize.height;
      var p=i.containerSize.width;
      var d=e.ui.hasScroll(a,"left")?a.scrollWidth:p;
      var v=e.ui.hasScroll(a)?a.scrollHeight:h;
      i.parentData={element:a,left:c.left,top:c.top,width:d,height:v}
    }
  },resize(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    var s=r.containerSize;
    var o=r.containerOffset;
    var u=r.size;
    var a=r.position;
    var f=r._aspectRatio||t.shiftKey;
    var l={top:0,left:0};
    var c=r.containerElement;
    c[0]!=document&&/static/.test(c.css("position"))&&(l=o),a.left<(r._helper?o.left:0)&&(r.size.width=r.size.width+(r._helper?r.position.left-o.left:r.position.left-l.left),f&&(r.size.height=r.size.width/r.aspectRatio),r.position.left=i.helper?o.left:0),a.top<(r._helper?o.top:0)&&(r.size.height=r.size.height+(r._helper?r.position.top-o.top:r.position.top),f&&(r.size.width=r.size.height*r.aspectRatio),r.position.top=r._helper?o.top:0),r.offset.left=r.parentData.left+r.position.left,r.offset.top=r.parentData.top+r.position.top;
    var h=Math.abs((r._helper?r.offset.left-l.left:r.offset.left-l.left)+r.sizeDiff.width);
    var p=Math.abs((r._helper?r.offset.top-l.top:r.offset.top-o.top)+r.sizeDiff.height);
    var d=r.containerElement.get(0)==r.element.parent().get(0);
    var v=/relative|absolute/.test(r.containerElement.css("position"));
    d&&v&&(h-=r.parentData.left),h+r.size.width>=r.parentData.width&&(r.size.width=r.parentData.width-h,f&&(r.size.height=r.size.width/r.aspectRatio)),p+r.size.height>=r.parentData.height&&(r.size.height=r.parentData.height-p,f&&(r.size.width=r.size.height*r.aspectRatio))
  },stop(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    var s=r.position;
    var o=r.containerOffset;
    var u=r.containerPosition;
    var a=r.containerElement;
    var f=e(r.helper);
    var l=f.offset();
    var c=f.outerWidth()-r.sizeDiff.width;
    var h=f.outerHeight()-r.sizeDiff.height;
    r._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h}),r._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:l.left-u.left-o.left,width:c,height:h})
  }}),e.ui.plugin.add("resizable","ghost",{start(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    var s=r.size;
    r.ghost=r.originalElement.clone(),r.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:""),r.ghost.appendTo(r.helper)
  },resize(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    r.ghost&&r.ghost.css({position:"relative",height:r.size.height,width:r.size.width})
  },stop(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    r.ghost&&r.helper&&r.helper.get(0).removeChild(r.ghost.get(0))
  }}),e.ui.plugin.add("resizable","grid",{resize(t, n) {
    var r=e(this).data("resizable");
    var i=r.options;
    var s=r.size;
    var o=r.originalSize;
    var u=r.originalPosition;
    var a=r.axis;
    var f=i._aspectRatio||t.shiftKey;
    i.grid=typeof i.grid=="number"?[i.grid,i.grid]:i.grid;
    var l=Math.round((s.width-o.width)/(i.grid[0]||1))*(i.grid[0]||1);
    var c=Math.round((s.height-o.height)/(i.grid[1]||1))*(i.grid[1]||1);
    /^(se|s|e)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c):/^(ne)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c):/^(sw)$/.test(a)?(r.size.width=o.width+l,r.size.height=o.height+c,r.position.left=u.left-l):(r.size.width=o.width+l,r.size.height=o.height+c,r.position.top=u.top-c,r.position.left=u.left-l)
  }});
  var n=e => parseInt(e,10)||0;
  var r=e => !isNaN(parseInt(e,10));
}))(jQuery);(((e, t) => {e.widget("ui.selectable",e.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create() {var t=this;this.element.addClass("ui-selectable"),this.dragged=!1;var n;this.refresh=() => {n=e(t.options.filter,t.element[0]),n.addClass("ui-selectee"),n.each(function(){
  var t=e(this);
  var n=t.offset();
  e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})
})},this.refresh(),this.selectees=n.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy() {this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart(t) {var n=this;this.opos=[t.pageX,t.pageY];if(this.options.disabled)return;var r=this.options;this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.clientX,top:t.clientY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))}),e(t.target).parents().andSelf().each(function(){var r=e.data(this,"selectable-item");if(r){var i=!t.metaKey&&!t.ctrlKey||!r.$element.hasClass("ui-selected");return r.$element.removeClass(i?"ui-unselecting":"ui-selected").addClass(i?"ui-selecting":"ui-unselecting"),r.unselecting=!i,r.selecting=i,r.selected=i,i?n._trigger("selecting",t,{selecting:r.element}):n._trigger("unselecting",t,{unselecting:r.element}),!1}})},_mouseDrag(t) {
  var n=this;this.dragged=!0;if(this.options.disabled)return;
  var r=this.options;
  var i=this.opos[0];
  var s=this.opos[1];
  var o=t.pageX;
  var u=t.pageY;
  if(i>o){var a=o;o=i,i=a}if(s>u){var a=u;u=s,s=a}return this.helper.css({left:i,top:s,width:o-i,height:u-s}),this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!a||a.element==n.element[0])return;var f=!1;r.tolerance=="touch"?f=!(a.left>o||a.right<i||a.top>u||a.bottom<s):r.tolerance=="fit"&&(f=a.left>i&&a.right<o&&a.top>s&&a.bottom<u),f?(a.selected&&(a.$element.removeClass("ui-selected"),a.selected=!1),a.unselecting&&(a.$element.removeClass("ui-unselecting"),a.unselecting=!1),a.selecting||(a.$element.addClass("ui-selecting"),a.selecting=!0,n._trigger("selecting",t,{selecting:a.element}))):(a.selecting&&((t.metaKey||t.ctrlKey)&&a.startselected?(a.$element.removeClass("ui-selecting"),a.selecting=!1,a.$element.addClass("ui-selected"),a.selected=!0):(a.$element.removeClass("ui-selecting"),a.selecting=!1,a.startselected&&(a.$element.addClass("ui-unselecting"),a.unselecting=!0),n._trigger("unselecting",t,{unselecting:a.element}))),a.selected&&!t.metaKey&&!t.ctrlKey&&!a.startselected&&(a.$element.removeClass("ui-selected"),a.selected=!1,a.$element.addClass("ui-unselecting"),a.unselecting=!0,n._trigger("unselecting",t,{unselecting:a.element})))}),!1
},_mouseStop(t) {var n=this;this.dragged=!1;var r=this.options;return e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})}))(jQuery);(((e, t) => {var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create() {
  var t;
  var r;
  var i=this.options;
  var s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all");
  var o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>";
  var u=[];
  this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(i.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),i.range&&(i.range===!0&&(i.values||(i.values=[this._valueMin(),this._valueMin()]),i.values.length&&i.values.length!==2&&(i.values=[i.values[0],i.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(i.range==="min"||i.range==="max"?" ui-slider-range-"+i.range:""))),r=i.values&&i.values.length||1;for(t=s.length;t<r;t++)u.push(o);this.handles=s.add(e(u.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(e => {e.preventDefault()}).mouseenter(function(){i.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){i.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown(t) {
    var r;
    var i;
    var s;
    var o;
    var u=e(t.target).data("ui-slider-handle-index");
    switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)
  },keyup(t) {var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1
},_destroy() {this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture(t) {
  var n;
  var r;
  var i;
  var s;
  var o;
  var u;
  var a;
  var f;
  var l=this;
  var c=this.options;
  return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));i>n&&(i=n,s=e(this),o=t)}),c.range===!0&&this.values(1)===c.min&&(o+=1,s=e(this.handles[o])),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))
},_mouseStart() {return!0},_mouseDrag(e) {
  var t={x:e.pageX,y:e.pageY};
  var n=this._normValueFromMouse(t);
  return this._slide(e,this._handleIndex,n),!1
},_mouseStop(e) {return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation() {this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse(e) {
  var t;
  var n;
  var r;
  var i;
  var s;
  return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)
},_start(e, t) {var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide(e, t, n) {
  var r;
  var i;
  var s;
  this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))
},_stop(e, t) {var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change(e, t) {if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("change",e,n)}},value(e) {if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values(t, n) {
  var r;
  var i;
  var s;
  if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()
},_setOption(t, n) {
  var r;
  var i=0;
  e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}
},_value() {var e=this.options.value;return e=this._trimAlignValue(e),e},_values(e) {
  var t;
  var n;
  var r;
  if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n
},_trimAlignValue(e) {
  if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();
  var t=this.options.step>0?this.options.step:1;
  var n=(e-this._valueMin())%t;
  var r=e-n;
  return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))
},_valueMin() {return this.options.min},_valueMax() {return this.options.max},_refreshValue() {
  var t;
  var n;
  var r;
  var i;
  var s;
  var o=this.options.range;
  var u=this.options;
  var a=this;
  var f=this._animateOff?!1:u.animate;
  var l={};
  this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))
}})}))(jQuery);(((e, t) => {e.widget("ui.sortable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create() {var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy() {this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption(t, n) {t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture(t, n) {
  var r=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(t);
  var i=null;
  var s=e(t.target).parents().each(function(){if(e.data(this,r.widgetName+"-item")==r)return i=e(this),!1});
  e.data(t.target,r.widgetName+"-item")==r&&(i=e(t.target));if(!i)return!1;if(this.options.handle&&!n){var o=!1;e(this.options.handle,i).find("*").andSelf().each(function(){this==t.target&&(o=!0)});if(!o)return!1}return this.currentItem=i,this._removeCurrentsFromItems(),!0
},_mouseStart(t, n, r) {var i=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),i.containment&&this._setContainment(),i.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",i.cursor)),i.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",i.opacity)),i.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",i.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(var s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag(t) {this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){
  var n=this.options;
  var r=!1;
  this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+n.scrollSpeed:t.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+n.scrollSpeed:t.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(t.pageY-e(document).scrollTop()<n.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<n.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+n.scrollSpeed)),t.pageX-e(document).scrollLeft()<n.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<n.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+n.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)
}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var i=this.items.length-1;i>=0;i--){
  var s=this.items[i];
  var o=s.item[0];
  var u=this._intersectsWithPointer(s);
  if(!u)continue;if(s.instance!==this.currentContainer)continue;if(o!=this.currentItem[0]&&this.placeholder[u==1?"next":"prev"]()[0]!=o&&!e.contains(this.placeholder[0],o)&&(this.options.type=="semi-dynamic"?!e.contains(this.element[0],o):!0)){this.direction=u==1?"down":"up";if(this.options.tolerance!="pointer"&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}
}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop(t, n) {if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){
  var r=this;
  var i=this.placeholder.offset();
  this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,() => {r._clear(t)})
}else this._clear(t,n);return!1},cancel() {if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize(t) {
  var n=this._getItemsAsjQuery(t&&t.connected);
  var r=[];
  return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")
},toArray(t) {
  var n=this._getItemsAsjQuery(t&&t.connected);
  var r=[];
  return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r
},_intersectsWith(e) {
  var t=this.positionAbs.left;
  var n=t+this.helperProportions.width;
  var r=this.positionAbs.top;
  var i=r+this.helperProportions.height;
  var s=e.left;
  var o=s+e.width;
  var u=e.top;
  var a=u+e.height;
  var f=this.offset.click.top;
  var l=this.offset.click.left;
  var c=r+f>u&&r+f<a&&t+l>s&&t+l<o;
  return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a
},_intersectsWithPointer(t) {
  var n=this.options.axis==="x"||e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height);
  var r=this.options.axis==="y"||e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width);
  var i=n&&r;
  var s=this._getDragVerticalDirection();
  var o=this._getDragHorizontalDirection();
  return i?this.floating?o&&o=="right"||s=="down"?2:1:s&&(s=="down"?2:1):!1
},_intersectsWithSides(t) {
  var n=e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height);
  var r=e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width);
  var i=this._getDragVerticalDirection();
  var s=this._getDragHorizontalDirection();
  return this.floating&&s?s=="right"&&r||s=="left"&&!r:i&&(i=="down"&&n||i=="up"&&!n)
},_getDragVerticalDirection() {var e=this.positionAbs.top-this.lastPositionAbs.top;return e!=0&&(e>0?"down":"up")},_getDragHorizontalDirection() {var e=this.positionAbs.left-this.lastPositionAbs.left;return e!=0&&(e>0?"right":"left")},refresh(e) {return this._refreshItems(e),this.refreshPositions(),this},_connectWith() {var e=this.options;return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery(t) {
  var n=[];
  var r=[];
  var i=this._connectWith();
  if(i&&t)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&r.push([e.isFunction(a.options.items)?a.options.items.call(a.element):e(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])}}r.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var s=r.length-1;s>=0;s--)r[s][0].each(function(){n.push(this)});return e(n)
},_removeCurrentsFromItems() {var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,e => {for(var n=0;n<t.length;n++)if(t[n]==e.item[0])return!1;return!0})},_refreshItems(t) {
  this.items=[],this.containers=[this];
  var n=this.items;
  var r=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]];
  var i=this._connectWith();
  if(i&&this.ready)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&(r.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a))}}for(var s=r.length-1;s>=0;s--){
    var f=r[s][1];
    var l=r[s][0];
    for(var u=0,c=l.length;u<c;u++){var h=e(l[u]);h.data(this.widgetName+"-item",f),n.push({item:h,instance:f,width:0,height:0,left:0,top:0})}
  }
},refreshPositions(t) {this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var n=this.items.length-1;n>=0;n--){var r=this.items[n];if(r.instance!=this.currentContainer&&this.currentContainer&&r.item[0]!=this.currentItem[0])continue;var i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item;t||(r.width=i.outerWidth(),r.height=i.outerHeight());var s=i.offset();r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var n=this.containers.length-1;n>=0;n--){var s=this.containers[n].element.offset();this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}return this},_createPlaceholder(t) {t=t||this;var n=t.options;if(!n.placeholder||n.placeholder.constructor==String){var r=n.placeholder;n.placeholder={element() {var n=e(document.createElement(t.currentItem[0].nodeName)).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return r||(n.style.visibility="hidden"),n},update(e, i) {if(r&&!n.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}t.placeholder=e(n.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),n.placeholder.update(t,t.placeholder)},_contactContainers(t) {
  var n=null;
  var r=null;
  for(var i=this.containers.length-1;i>=0;i--){if(e.contains(this.currentItem[0],this.containers[i].element[0]))continue;if(this._intersectsWith(this.containers[i].containerCache)){if(n&&e.contains(this.containers[i].element[0],n.element[0]))continue;n=this.containers[i],r=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0)}if(!n)return;if(this.containers.length===1)this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1;else{
    var s=1e4;
    var o=null;
    var u=this.containers[r].floating?"left":"top";
    var a=this.containers[r].floating?"width":"height";
    var f=this.positionAbs[u]+this.offset.click[u];
    for(var l=this.items.length-1;l>=0;l--){
      if(!e.contains(this.containers[r].element[0],this.items[l].item[0]))continue;if(this.items[l].item[0]==this.currentItem[0])continue;
      var c=this.items[l].item.offset()[u];
      var h=!1;
      Math.abs(c-f)>Math.abs(c+this.items[l][a]-f)&&(h=!0,c+=this.items[l][a]),Math.abs(c-f)<s&&(s=Math.abs(c-f),o=this.items[l],this.direction=h?"up":"down")
    }if(!o&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[r],o?this._rearrange(t,o,null,!0):this._rearrange(t,null,this.containers[r].element,!0),this._trigger("change",t,this._uiHash()),this.containers[r]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1
  }
},_createHelper(t) {
  var n=this.options;
  var r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper=="clone"?this.currentItem.clone():this.currentItem;
  return r.parents("body").length||e(n.appendTo!="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(r[0].style.width==""||n.forceHelperSize)&&r.width(this.currentItem.width()),(r[0].style.height==""||n.forceHelperSize)&&r.height(this.currentItem.height()),r
},_adjustOffsetFromHelper(t) {typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset() {this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset() {if(this.cssPosition=="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins() {this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions() {this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment() {var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)){
  var n=e(t.containment)[0];
  var r=e(t.containment).offset();
  var i=e(n).css("overflow")!="hidden";
  this.containment=[r.left+(parseInt(e(n).css("borderLeftWidth"),10)||0)+(parseInt(e(n).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(e(n).css("borderTopWidth"),10)||0)+(parseInt(e(n).css("paddingTop"),10)||0)-this.margins.top,r.left+(i?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(e(n).css("borderLeftWidth"),10)||0)-(parseInt(e(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(i?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(e(n).css("borderTopWidth"),10)||0)-(parseInt(e(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo(t, n) {
  n||(n=this.position);
  var r=t=="absolute"?1:-1;
  var i=this.options;
  var s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
  var o=/(html|body)/i.test(s[0].tagName);
  return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}
},_generatePosition(t) {
  var n=this.options;
  var r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
  var i=/(html|body)/i.test(r[0].tagName);
  this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());
  var s=t.pageX;
  var o=t.pageY;
  if(this.originalPosition){this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top));if(n.grid){var u=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1];o=this.containment?u-this.offset.click.top<this.containment[1]||u-this.offset.click.top>this.containment[3]?u-this.offset.click.top<this.containment[1]?u+n.grid[1]:u-n.grid[1]:u:u;var a=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0];s=this.containment?a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2]?a-this.offset.click.left<this.containment[0]?a+n.grid[0]:a-n.grid[0]:a:a}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}
},_rearrange(e, t, n, r) {n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i==this.counter&&this.refreshPositions(!r)})},_clear(t, n) {this.reverting=!1;var r=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS)if(this._storedCSS[i]=="auto"||this._storedCSS[i]=="static")this._storedCSS[i]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&r.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!n&&r.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(r.push(function(e){this._trigger("remove",e,this._uiHash())}),r.push((e => function(t){e._trigger("receive",t,this._uiHash(this))}).call(this,this.currentContainer)),r.push((e => function(t){e._trigger("update",t,this._uiHash(this))}).call(this,this.currentContainer))));for(var i=this.containers.length-1;i>=0;i--)n||r.push((e => function(t){e._trigger("deactivate",t,this._uiHash(this))}).call(this,this.containers[i])),this.containers[i].containerCache.over&&(r.push((e => function(t){e._trigger("out",t,this._uiHash(this))}).call(this,this.containers[i])),this.containers[i].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger(...args) {e.Widget.prototype._trigger.apply(this,args)===!1&&this.cancel()},_uiHash(t) {var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})}))(jQuery);((e => {function t(e){return function(...args) {var t=this.element.val();e.apply(this,args),this._refresh(),t!==this.element.val()&&this._trigger("change")};}e.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create() {this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload() {this.element.removeAttr("autocomplete")}})},_getCreateOptions() {
  var t={};
  var n=this.element;
  return e.each(["min","max","step"],(e, r) => {var i=n.attr(r);i!==undefined&&i.length&&(t[r]=i)}),t;
},_events:{keydown(e) {this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus() {this.previous=this.element.val()},blur(e) {if(this.cancelBlur){delete this.cancelBlur;return}this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e)},mousewheel(e, t) {if(!t)return;if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()},"mousedown .ui-spinner-button":function(t){function r(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,r.call(this)});if(this._start(t)===!1)return;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(!e(t.currentTarget).hasClass("ui-state-active"))return;if(this._start(t)===!1)return!1;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw() {var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(e.height()*.5)&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown(t) {
  var n=this.options;
  var r=e.ui.keyCode;
  switch(t.keyCode){case r.UP:return this._repeat(null,1,t),!0;case r.DOWN:return this._repeat(null,-1,t),!0;case r.PAGE_UP:return this._repeat(null,n.page,t),!0;case r.PAGE_DOWN:return this._repeat(null,-n.page,t),!0}return!1
},_uiSpinnerHtml() {return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml() {return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start(e) {return!this.spinning&&this._trigger("start",e)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat(e, t, n) {e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,n)},e),this._spin(t*this.options.step,n)},_spin(e, t) {var n=this.value()||0;this.counter||(this.counter=1),n=this._adjustValue(n+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",t,{value:n})!==!1)this._value(n),this.counter++},_increment(t) {var n=this.options.incremental;return n?e.isFunction(n)?n(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision() {var e=this._precisionOf(this.options.step);return this.options.min!==null&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf(e) {
  var t=e.toString();
  var n=t.indexOf(".");
  return n===-1?0:t.length-n-1
},_adjustValue(e) {
  var t;
  var n;
  var r=this.options;
  return t=r.min!==null?r.min:0,n=e-t,n=Math.round(n/r.step)*r.step,e=t+n,e=parseFloat(e.toFixed(this._precision())),r.max!==null&&e>r.max?r.max:r.min!==null&&e<r.min?r.min:e
},_stop(e) {if(!this.spinning)return;clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e)},_setOption(e, t) {if(e==="culture"||e==="numberFormat"){var n=this._parse(this.element.val());this.options[e]=t,this.element.val(this._format(n));return}(e==="max"||e==="min"||e==="step")&&typeof t=="string"&&(t=this._parse(t)),this._super(e,t),e==="disabled"&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse(e) {return typeof e=="string"&&e!==""&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),e===""||isNaN(e)?null:e},_format(e) {return e===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh() {this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value(e, t) {var n;e!==""&&(n=this._parse(e),n!==null&&(t||(n=this._adjustValue(n)),e=this._format(n))),this.element.val(e),this._refresh()},_destroy() {this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp(e) {this._spin((e||1)*this.options.step)},stepDown:t(function(e){this._stepDown(e)}),_stepDown(e) {this._spin((e||1)*-this.options.step)},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value(e) {if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,e)},widget() {return this.uiSpinner}})}))(jQuery);(((e, t) => {
  function i(){return++n}function s(e){return e.hash.length>1&&e.href.replace(r,"")===location.href.replace(r,"").replace(/\s/g,"%20")}
  var n=0;
  var r=/#.*$/;
  e.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create() {
    var t=this;
    var n=this.options;
    var r=n.active;
    var i=location.hash.substring(1);
    this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs();if(r===null){i&&this.tabs.each((t, n) => {if(e(n).attr("aria-controls")===i)return r=t,!1}),r===null&&(r=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(r===null||r===-1)r=this.tabs.length?0:!1}r!==!1&&(r=this.tabs.index(this.tabs.eq(r)),r===-1&&(r=n.collapsible?!1:0)),n.active=r,!n.collapsible&&n.active===!1&&this.anchors.length&&(n.active=0),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),e => t.tabs.index(e)))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(this.options.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)
  },_getCreateEventData() {return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown(t) {
    var n=e(this.document[0].activeElement).closest("li");
    var r=this.tabs.index(n);
    var i=!0;
    if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))
  },_panelKeydown(t) {if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav(t) {if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab(t, n) {function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab(e, t) {return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption(e, t) {if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId(e) {return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector(e) {return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh() {
    var t=this.options;
    var n=this.tablist.children(":has(a[href])");
    t.disabled=e.map(n.filter(".ui-state-disabled"),e => n.index(e)),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()
  },_refresh() {this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs() {var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each((n, r) => {
    var i;
    var o;
    var u;
    var a=e(r).uniqueId().attr("id");
    var f=e(r).closest("li");
    var l=f.attr("aria-controls");
    s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)
  }),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList() {return this.element.find("ol,ul").eq(0)},_createPanel(t) {return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled(t) {e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents(t) {var n={click(e) {e.preventDefault()}};t&&e.each(t.split(" "),(e, t) => {n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle(t) {
    var n;
    var r;
    var i=this.element.parent();
    t==="fill"?(e.support.minHeight||(r=i.css("overflow"),i.css("overflow","hidden")),n=i.height(),this.element.siblings(":visible").each(function(){
      var t=e(this);
      var r=t.css("position");
      if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)
    }),r&&i.css("overflow",r),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))
  },_eventHandler(t) {
    var n=this.options;
    var r=this.active;
    var i=e(t.currentTarget);
    var s=i.closest("li");
    var o=s[0]===r[0];
    var u=o&&n.collapsible;
    var a=u?e():this._getPanelForTab(s);
    var f=r.length?this._getPanelForTab(r):e();
    var l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};
    t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)
  },_toggle(t, n) {
    function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}
    var r=this;
    var i=n.newPanel;
    var s=n.oldPanel;
    this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,() => {n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})
  },_activate(t) {
    var n;
    var r=this._findActive(t);
    if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})
  },_findActive(t) {return t===!1?e():this.tabs.eq(t)},_getIndex(e) {return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy() {this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){
    var t=e(this);
    var n=t.data("ui-tabs-aria-controls");
    n?t.attr("aria-controls",n):t.removeAttr("aria-controls")
  }),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable(n) {var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,e => e!==n?e:null):r=e.map(this.tabs,(e, t) => t!==n?t:null)),this._setupDisabled(r)},disable(n) {var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load(t, n) {
    t=this._getIndex(t);
    var r=this;
    var i=this.tabs.eq(t);
    var o=i.find(".ui-tabs-anchor");
    var u=this._getPanelForTab(i);
    var a={tab:i,panel:u};
    if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(e => {setTimeout(() => {u.html(e),r._trigger("load",n,a)},1)}).complete((e, t) => {setTimeout(() => {t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))
  },_ajaxSettings(t, n, r) {var i=this;return {url:t.attr("href"),beforeSend(t, s) {return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}};},_getPanelForTab(t) {var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}}),e.uiBackCompat!==!1&&(e.ui.tabs.prototype._ui=function(e,t){return{tab:e,panel:t,index:this.anchors.index(e)}},e.widget("ui.tabs",e.ui.tabs,{url(e, t) {this.anchors.eq(e).attr("href",t)}}),e.widget("ui.tabs",e.ui.tabs,{options:{ajaxOptions:null,cache:!1},_create() {this._super();var t=this;this._on({tabsbeforeload(n, r) {if(e.data(r.tab[0],"cache.tabs")){n.preventDefault();return}r.jqXHR.success(() => {t.options.cache&&e.data(r.tab[0],"cache.tabs",!0)})}})},_ajaxSettings(t, n, r) {var i=this.options.ajaxOptions;return e.extend({},i,{error(e, t) {try{i.error(e,t,r.tab.closest("li").index(),r.tab[0])}catch(n){}}},this._superApply(arguments));},_setOption(e, t) {e==="cache"&&t===!1&&this.anchors.removeData("cache.tabs"),this._super(e,t)},_destroy() {this.anchors.removeData("cache.tabs"),this._super()},url(e) {this.anchors.eq(e).removeData("cache.tabs"),this._superApply(arguments)}}),e.widget("ui.tabs",e.ui.tabs,{abort() {this.xhr&&this.xhr.abort()}}),e.widget("ui.tabs",e.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create() {this._super(),this._on({tabsbeforeload(e, t) {
    if(e.target!==this.element[0]||!this.options.spinner)return;
    var n=t.tab.find("span");
    var r=n.html();
    n.html(this.options.spinner),t.jqXHR.complete(() => {n.html(r)})
  }})}}),e.widget("ui.tabs",e.ui.tabs,{options:{enable:null,disable:null},enable(t) {
    var n=this.options;
    var r;
    if(t&&n.disabled===!0||e.isArray(n.disabled)&&e.inArray(t,n.disabled)!==-1)r=!0;this._superApply(arguments),r&&this._trigger("enable",null,this._ui(this.anchors[t],this.panels[t]))
  },disable(t) {
    var n=this.options;
    var r;
    if(t&&n.disabled===!1||e.isArray(n.disabled)&&e.inArray(t,n.disabled)===-1)r=!0;this._superApply(arguments),r&&this._trigger("disable",null,this._ui(this.anchors[t],this.panels[t]))
  }}),e.widget("ui.tabs",e.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add(n, r, i) {
    i===t&&(i=this.anchors.length);
    var s;
    var o;
    var u=this.options;
    var a=e(u.tabTemplate.replace(/#\{href\}/g,n).replace(/#\{label\}/g,r));
    var f=n.indexOf("#")?this._tabId(a):n.replace("#","");
    return a.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",!0),a.attr("aria-controls",f),s=i>=this.tabs.length,o=this.element.find("#"+f),o.length||(o=this._createPanel(f),s?i>0?o.insertAfter(this.panels.eq(-1)):o.appendTo(this.element):o.insertBefore(this.panels[i])),o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),s?a.appendTo(this.tablist):a.insertBefore(this.tabs[i]),u.disabled=e.map(u.disabled,e => e>=i?++e:e),this.refresh(),this.tabs.length===1&&u.active===!1&&this.option("active",0),this._trigger("add",null,this._ui(this.anchors[i],this.panels[i])),this;
  },remove(t) {
    t=this._getIndex(t);
    var n=this.options;
    var r=this.tabs.eq(t).remove();
    var i=this._getPanelForTab(r).remove();
    return r.hasClass("ui-tabs-active")&&this.anchors.length>2&&this._activate(t+(t+1<this.anchors.length?1:-1)),n.disabled=e.map(e.grep(n.disabled,e => e!==t),e => e>=t?--e:e),this.refresh(),this._trigger("remove",null,this._ui(r.find("a")[0],i[0])),this;
  }}),e.widget("ui.tabs",e.ui.tabs,{length() {return this.anchors.length}}),e.widget("ui.tabs",e.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId(t) {var n=t.is("li")?t.find("a[href]"):t;return n=n[0],e(n).closest("li").attr("aria-controls")||n.title&&n.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+i()}}),e.widget("ui.tabs",e.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel(t) {return e(this.options.panelTemplate).attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)}}),e.widget("ui.tabs",e.ui.tabs,{_create() {var e=this.options;e.active===null&&e.selected!==t&&(e.active=e.selected===-1?!1:e.selected),this._super(),e.selected=e.active,e.selected===!1&&(e.selected=-1)},_setOption(e, t) {if(e!=="selected")return this._super(e,t);var n=this.options;this._super("active",t===-1?!1:t),n.selected=n.active,n.selected===!1&&(n.selected=-1)},_eventHandler(...args) {this._superApply(args),this.options.selected=this.options.active,this.options.selected===!1&&(this.options.selected=-1)}}),e.widget("ui.tabs",e.ui.tabs,{options:{show:null,select:null},_create() {this._super(),this.options.active!==!1&&this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))},_trigger(e, t, n) {
    var r;
    var i;
    var s=this._superApply(arguments);
    return s?(e==="beforeActivate"?(r=n.newTab.length?n.newTab:n.oldTab,i=n.newPanel.length?n.newPanel:n.oldPanel,s=this._super("select",t,{tab:r.find(".ui-tabs-anchor")[0],panel:i[0],index:r.closest("li").index()})):e==="activate"&&n.newTab.length&&(s=this._super("show",t,{tab:n.newTab.find(".ui-tabs-anchor")[0],panel:n.newPanel[0],index:n.newTab.closest("li").index()})),s):!1
  }}),e.widget("ui.tabs",e.ui.tabs,{select(e) {e=this._getIndex(e);if(e===-1){if(!this.options.collapsible||this.options.selected===-1)return;e=this.options.selected}this.anchors.eq(e).trigger(this.options.event+this.eventNamespace)}}),(() => {var t=0;e.widget("ui.tabs",e.ui.tabs,{options:{cookie:null},_create() {
    var e=this.options;
    var t;
    e.active==null&&e.cookie&&(t=parseInt(this._cookie(),10),t===-1&&(t=!1),e.active=t),this._super()
  },_cookie(n) {var r=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+ ++t)];return arguments.length&&(r.push(n===!1?-1:n),r.push(this.options.cookie)),e.cookie.apply(null,r)},_refresh() {this._super(),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_eventHandler(...args) {this._superApply(args),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_destroy() {this._super(),this.options.cookie&&this._cookie(null,this.options.cookie)}})})(),e.widget("ui.tabs",e.ui.tabs,{_trigger(t, n, r) {var i=e.extend({},r);return t==="load"&&(i.panel=i.panel[0],i.tab=i.tab.find(".ui-tabs-anchor")[0]),this._super(t,n,i)}}),e.widget("ui.tabs",e.ui.tabs,{options:{fx:null},_getFx() {
    var t;
    var n;
    var r=this.options.fx;
    return r&&(e.isArray(r)?(t=r[0],n=r[1]):t=n=r),r?{show:n,hide:t}:null
  },_toggle(e, t) {
    function o(){n.running=!1,n._trigger("activate",e,t)}function u(){t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),r.length&&s.show?r.animate(s.show,s.show.duration,() => {o()}):(r.show(),o())}
    var n=this;
    var r=t.newPanel;
    var i=t.oldPanel;
    var s=this._getFx();
    if(!s)return this._super(e,t);n.running=!0,i.length&&s.hide?i.animate(s.hide,s.hide.duration,() => {t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),i.hide(),u())
  }}))
}))(jQuery);((e => {function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){
  var n=t.data("ui-tooltip-id");
  var r=(t.attr("aria-describedby")||"").split(/\s+/);
  var i=e.inArray(n,r);
  i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")
}var t=0;e.widget("ui.tooltip",{version:"1.9.2",options:{content() {return e(this).attr("title")},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create() {this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption(t, n) {var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,(e, t) => {r._updateContent(t)})},_disable() {var t=this;e.each(this.tooltips,(n, r) => {var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).andSelf().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable() {this.element.find(this.options.items).andSelf().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open(t) {
  var n=this;
  var r=e(t?t.target:this.element).closest(this.options.items);
  if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){
    var t=e(this);
    var r;
    t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))
  }),this._updateContent(r,t)
},_updateContent(e, t) {
  var n;
  var r=this.options.content;
  var i=this;
  var s=t?t.type:null;
  if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],n => {if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)
},_open(t, r, i) {
  function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}
  var s;
  var o;
  var u;
  var a=e.extend({},this.options.position);
  if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=setInterval(() => {s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup(t) {if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove() {this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)
},close(t) {
  var n=this;
  var i=e(t?t.currentTarget:this.element);
  var s=this._find(i);
  if(this.closing)return;i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,(t, r) => {e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1
},_tooltip(n) {
  var r="ui-tooltip-"+t++;
  var i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
  return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),e.fn.bgiframe&&i.bgiframe(),this.tooltips[r]=n,i
},_find(t) {var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip(e) {e.remove(),delete this.tooltips[e.attr("id")]},_destroy() {var t=this;e.each(this.tooltips,(n, r) => {var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})}))(jQuery);