requirejs.config({
    baseUrl: "../res/js/",
    paths: {
        rd: "../../requireJsDemo/",
        js: "../../requireJsDemo/js/",
        view: "../../requireJsDemo/views/"
    },
    config:{
    	//指定一种本地化语言
    	i18n:{
    		locale:"en-us"
    	}
    }
});
require(["js/route", "js/breadCrumb"], function(route) {
    route.run();
});
