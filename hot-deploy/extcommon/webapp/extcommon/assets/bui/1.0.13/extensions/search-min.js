define("bui/extensions/search",["jquery","bui/common","bui/form","bui/overlay","bui/list","bui/data"],function(e,t,n){function o(e){o.superclass.constructor.call(this,e)}var u=e("jquery"),i=e("bui/common"),r=e("bui/form");i.extend(o,i.Base),o.ATTRS={tpl:{value:'<p><input type="text" name="key"/> <button class="button button-small">\u786e\u5b9a</button></p>'}},i.augment(o,{createDom:function(){var e=this,t=u("<div></div>").append(e.get("tpl")),n=new r.Group({srcNode:t}).render();e.set("el",t),e.set("group",n)},renderUI:function(e){var t=e.get("el");t.before(this.get("el"))},bindUI:function(e){var t=this,n=t.get("el"),o=e.get("store"),u=t.get("group");n.find(".button").on("click",function(){o.load(u.getRecord())})}}),n.exports=o});