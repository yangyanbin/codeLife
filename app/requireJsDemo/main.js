requirejs.config({
    baseUrl: "../res/js/",
    paths: {
        js: "../../requireJsDemo/js/",
        view: "../../requireJsDemo/views/"
    }
});
require(["js/route", "js/breadCrumb"], function(route) {
    route.run();
});
