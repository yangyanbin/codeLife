define(function(){
	var actions = {};

	//修改url
	actions.updateUrl = function(url){
		return {
			type:"URL",
			payload:{
				url:url
			}
		};
	}
	//修改locale
	actions.updateLocale = function(locale){
		return {
			type:"LANG",
			payload:{
				locale:locale
			}
		};
	}


	return actions;
});