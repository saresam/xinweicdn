(function(n){return this.version="(beta)(0.0.3)",this.all={},this.special_keys={27:"esc",9:"tab",32:"space",13:"return",8:"backspace",145:"scroll",20:"capslock",144:"numlock",19:"pause",45:"insert",36:"home",46:"del",35:"end",33:"pageup",34:"pagedown",37:"left",38:"up",39:"right",40:"down",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12"},this.shift_nums={"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},this.add=function(t,i,r){var e;n.isFunction(i)&&(r=i,i={});var u={},o={type:"keydown",propagate:!1,disableInInput:!1,target:n("html")[0]},f=this;return u=n.extend(u,o,i||{}),t=t.toLowerCase(),e=function(t){var r=t.target,s,e,i;if(!u.disableInInput||(s=n(r),!(s.is("input")||s.is("textarea"))||u.noDisable&&s.is(u.noDisable))){for(var c=t.which,w=t.type,h=String.fromCharCode(c).toLowerCase(),l=f.special_keys[c],a=t.shiftKey,v=t.ctrlKey,y=t.altKey,p=t.metaKey,o=null;!f.all[r]&&r.parentNode;)r=r.parentNode;return e=f.all[r].events[w].callbackMap,a||v||y||p?(i="",y&&(i+="alt+"),v&&(i+="ctrl+"),a&&(i+="shift+"),p&&(i+="meta+"),o=e[i+l]||e[i+h]||e[i+f.shift_nums[h]]):o=e[l]||e[h],o&&(o.cb(t),!o.propagate)?(t.stopPropagation(),t.preventDefault(),!1):void 0}},this.all[u.target]||(this.all[u.target]={events:{}}),this.all[u.target].events[u.type]||(this.all[u.target].events[u.type]={callbackMap:{}},n.event.add(u.target,u.type,e)),this.all[u.target].events[u.type].callbackMap[t]={cb:r,propagate:u.propagate},n},this.remove=function(t,i){return i=i||{},target=i.target||n("html")[0],type=i.type||"keydown",t=t.toLowerCase(),delete this.all[target].events[type].callbackMap[t],n},n.hotkeys=this,n})(jQuery)