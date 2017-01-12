define(function(){
	window.addEventListener("hashchange",function(e){
		run(true);
	});
	function getPagePath(){
		var hash = location.hash;
		hash = hash.charAt(0)=="#"?hash.substring(1):hash;
		// hash = hash.indexOf("_")>0?hash.substring(0,hash.indexOf("_")):hash;
		hash = hash.replace(/\?.+/,"");
		return hash;
	}
	function run(bl){
		if(!bl){
			return;
		}
		var path = "view/"+getPagePath()+"/index";
		require([path],function(view){
			view.load();
		});
	}

	return {
		run: function(){
			if(location.hash.length<1){
				location.hash="welcome";
			}
			run(true);
		}
	}
});