/*!
 * jQuery serializeObject - v0.2 - 1/20/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,n){$.fn.serializeObject=function(){var t={};return $.each(this.serializeArray(),function(i,r){var u=r.name,f=r.value;t[u]=t[u]===n?f:$.isArray(t[u])?t[u].concat(f):[t[u],f]}),t}})(jQuery)