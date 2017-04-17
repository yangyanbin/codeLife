//全局组件
Vue.component("todo-item", {
    // props: ["todo", "index"],
    //涉及props验证则不能使用数组形式,必须使用对象
    props: {
    	todo:[String,Number,Object],
    	index:{
    		type:Number,
    		required:true,
    		default:0
    	}
    },
    template: '<li class= @click="changeStatus(index)">{{todo}}<i :data-index="index">X</i></li>'
});
