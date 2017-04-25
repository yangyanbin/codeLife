var Home = {
	template:'<h2>{{currRoute}}</h2>',
	data:function(){
		return {currRoute:store.state.currRoute}
	}
};
var Menu = {
	template:'<h2>{{currRoute}}</h2>',
	data:function(){
		return {currRoute:store.state.currRoute}
	}
};
var NotFound = {
	template:'<h2>{{currRoute}}</h2>',
	//使用计算属性，否则setTimeout异步操作后不能刷新页面
	computed:{
		currRoute(){
			return store.state.currRoute;
		}
	}
};

var routes = [
	{path:"/home",component:Home},
	{path:"/menu",component:Menu},
	{path:"/404",component:NotFound},
	{path:"*",redirect:"/404"},
];

var router = new VueRouter({
	routes:routes
});

router.beforeEach(function(to,from,next){
	if(to.path=="/404"){
		store.commit("changeHash","......");
		setTimeout(function(){
			store.dispatch("changeHashAsync",to.path);
		},2000);
	}else{
		store.commit("changeHash",to.path);
	}
	next();
});
