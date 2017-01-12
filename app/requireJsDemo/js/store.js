define(["redux.min","lodash.min"],function(redux,_){
	debugger;
	var defaultState = {
		url:"home"
	};

	function allAction(state,action){
		switch (action.type){
			case "URL":
				var newState = _.cloneDeep(state);
				newState.url = action.payload.url;
				return newState;
			default:
				return state;
		}
	}

	var store = redux.createStore(allAction,defaultState);
	return store;
});