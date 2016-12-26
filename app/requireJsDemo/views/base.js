define(function(){
	function baseController(id){
		this.id = id;
	}
	baseController.prototype.setModel = function(model){
		this.model = model;
	};
	baseController.prototype.setTemplate = function(template){
		this.template = template;
	};
	baseController.prototype.render = function(dom){
		var modelObj = this.model[this.getLocale()];
		var template = this.template;
		var strRegexp;
		for(var key in modelObj){
			strRegexp = new RegExp("\\{" + key + "\\}", "g");
			template = template.replace(strRegexp,modelObj[key]);
		}
		dom.innerHTML = template;
	};
	baseController.prototype.getLocale = function(dom){
		return sessionStorage.locale||"en";
	};
	baseController.prototype.setLocale = function(language){
		sessionStorage.locale = language;
	};
	return baseController;
});