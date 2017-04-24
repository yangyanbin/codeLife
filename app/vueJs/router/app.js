//从动态组件实现简易路由
var Home = {
	template:'<h2>Home</h2>'
};
var About = {
	template:'<h2>About</h2>'
};
var NotFound = {
	template:'<h2>Page not found</h2>'
};

var router = {
	home:Home,
	about:About,
	notFound:NotFound
};

var vm = new Vue({
	el:"#app",
	data:{
		currentView:"home"
	},
	components:{
		home:Home,
		about:About,
		notFound:NotFound
	}
});

window.onhashchange = function(){
	var view = location.hash.replace("#","");
	vm.currentView = router[view]?view:"notFound";
};

location.hash = "home";