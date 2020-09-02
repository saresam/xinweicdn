/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(n){function t(n,t){if(!(n.originalEvent.touches.length>1)){n.preventDefault();var i=n.originalEvent.changedTouches[0],r=document.createEvent("MouseEvents");r.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null);n.target.dispatchEvent(r)}}if(n.support.touch="ontouchend"in document,n.support.touch){var i=n.ui.mouse.prototype,u=i._mouseInit,r;i._touchStart=function(n){var i=this;!r&&i._mouseCapture(n.originalEvent.changedTouches[0])&&(r=!0,i._touchMoved=!1,t(n,"mouseover"),t(n,"mousemove"),t(n,"mousedown"))};i._touchMove=function(n){r&&(this._touchMoved=!0,t(n,"mousemove"))};i._touchEnd=function(n){r&&(t(n,"mouseup"),t(n,"mouseout"),this._touchMoved||t(n,"click"),r=!1)};i._mouseInit=function(){var t=this;t.element.bind("touchstart",n.proxy(t,"_touchStart")).bind("touchmove",n.proxy(t,"_touchMove")).bind("touchend",n.proxy(t,"_touchEnd"));u.call(t)}}})(jQuery)