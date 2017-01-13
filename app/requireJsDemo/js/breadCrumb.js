define(["js/store"], function(store) {
    var model = {
        en: {
            home: "Home",
            welcome: "Welcome"
        },
        zh: {
            home: "主页",
            welcome: "欢迎页"
        }
    }

    function render() {
        var state = store.getState();
        document.getElementById("breadCrumb").innerHTML = "#" + model[state.locale][state.url]
    }

    store.subscribe(render);
});
