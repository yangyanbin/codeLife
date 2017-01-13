define(function(require) {
    var template = require("text!./welcome.template.html"),
        model = require("./welcome.model"),
        Base = require("../base"),
        store = require("js/store"),
        action = require("js/action");
    var base = new Base("welcome");

    function load() {
        render();
        bind();
        run();
    }

    function render() {
        base.setTemplate(template);
        base.setModel(model);
        base.render(document.getElementById("content"));
    }

    function bind() {
        document.getElementById("switchLang").addEventListener("click", function(e) {
            var locale = base.getLocale() == "zh" ? "en" : "zh";
            base.setLocale(locale);
            load();
        });
    }

    function run() {
        store.dispatch(action.updateUrl("welcome"));
    }
    return {
        load: load
    };
});
