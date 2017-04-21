define(function() {
    //禁止浏览器后退功能
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });
    window.addEventListener("hashchange", function(e) {
        history.pushState(null, null, document.URL);
        run(true);
    });

    function getPagePath() {
        var hash = location.hash;
        hash = hash.charAt(0) == "#" ? hash.substring(1) : hash;
        // hash = hash.indexOf("_")>0?hash.substring(0,hash.indexOf("_")):hash;
        hash = hash.replace(/\?.+/, "");
        return hash;
    }

    function run(bl) {
        if (!bl) {
            return;
        }
        var url = getPagePath()||"welcome";
        var path = "view/" + url + "/" + url;
        require([path], function(view) {
            view.load();
        });
    }

    function go(page) {
        location.hash = page;
    }

    return {
        run: function() {
            run(true);
        },
        go: go
    }
});
