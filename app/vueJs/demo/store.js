var store = new Vuex.Store({
	state:{
		currRoute:""
	},
	mutations:{
		changeHash(state,path){
			state.currRoute = path;
		}
	},
	actions:{
		changeHashAsync(content,path){
			content.commit("changeHash",path);
		}
	}
});