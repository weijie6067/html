window.onload=function(){
//	双向绑定
	new Vue({
		data:{
			message:"hello vue.js"
		},
		
	})
//	渲染列表
	new Vue({
		el:"#app2",
		data:{
			todosa:[
				{text:"learn js"},
				{text:"learn vue"},
				{text:"learn jq"}
			]
		}
	})
//	用户输入处理
	new Vue({
		el:"#input",
		data:{
			message:"uesr input "
		},
		methods:{
			reverseMessage:function(){
				this.message=this.message.split('').reverse().join('')
			}
		}
	})
//	综合
	new Vue({
		el:"#zonghe",
		data:{
			newTodo:'',
			todos:[
				{text:"add some thing"}
			]
			
		},
		methods:{
			addTodo: function (){
				var text=this.newTodo
				if(text){
					this.todos.push({ text : text})
					this.newTodo=""
				}
			},
			removeTodo: function (index) {
		      this.todos.splice(index, 1)
		    }
			
		}
		
		
	})

}
