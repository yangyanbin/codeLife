define(function() {
    window.addEventListener("hashchange", function(e) {
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
        var url = getPagePath();
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
