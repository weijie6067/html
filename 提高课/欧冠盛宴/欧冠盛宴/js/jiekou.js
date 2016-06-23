//必须引入JQ
//btn是按钮，xm是姓名，sj是手机号
function queRen(btn,xm,sj){
			function Px(na,value){
				var dat={name:na,mobile:value}
				$.ajax({
					type:"POST",
					url:"http://sjz.bokanedu.com/tgr/api/?day=52&&type=og",
					data:dat,
					success:function(data){
						alert("注册成功")
					},
					error:function(){
						console.log(1)
					},
					async:true
				});
			}
			$(btn).click(function(){
				Px($(xm).val(),$(sj).val())
			})
		}


//先声明数组， arr数组名
function get(arr){
	$.ajax({
		type:"get",
		url:"http://sjz.bokanedu.com/tgr/api/?day=52-2&&type=zj",
		success:function(data){
			var dat=JSON.parse(data)
//						console.log(dat.data)
			for (var i=0;i<dat.data.length;i++) {
				arr.push([dat.data[i].gift,dat.data[i].name,dat.data[i].tele])
			}
//						console.log(arr)
			
			
		},
		error:function(){
			console.log(1)
		},
		async:true
	});
	return arr
}