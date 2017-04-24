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
    template: '<li :class="{done:state}" @click.self="changeStatus(index)">{{todo}}<i :data-index="index">X</i></li>',
    data:function(){
        return {
            state:false
        }
    },
    methods:{
        changeStatus: function(i){
            this.state = !this.state;
        }
    }
});
