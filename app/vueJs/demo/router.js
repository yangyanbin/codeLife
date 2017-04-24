var Home = {
	template:'<h2>Home</h2>'
};
var Menu = {
	template:'<h2>Menu</h2>'
};
var NotFound = {
	template:'<h2>Page not found</h2>'
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