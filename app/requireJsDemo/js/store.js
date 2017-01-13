define(["redux.min", "lodash.min"], function(redux, _) {
    var defaultState = {
        url: "home",
        locale: "en"
    };

    function allAction(state, action) {
        if(!state)return;
        var newState = _.cloneDeep(state);
        switch (action.type) {
            case "URL":
                newState.url = action.payload.url;
                return newState;
            case "LANG":
                newState.locale = action.payload.locale;
                return newState;
            default:
                return state;
        }
    }

    var store = redux.createStore(allAction, defaultState);
    return store;
});
