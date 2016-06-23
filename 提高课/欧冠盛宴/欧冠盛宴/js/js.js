var wid=document.documentElement.clientWidth;
var scale=wid/640
var html = document.getElementsByTagName('html')[0];
html.style.zoom=scale;
window.onresize=function(){
  	var wid=document.documentElement.clientWidth;
	var scale=wid/640
	var html = document.getElementsByTagName('html')[0];
	html.style.zoom=scale;
};
window.onload=function(){
	$.ajax({
		type:"get",
	 	url: "http://sjz.bokanedu.com/tgr/api/?day=52-2&&type=zj",
	  	cache: false,
	  	success: function(data){
	  		var winData=JSON.parse(data);
	  		var winLen=winData.data.length;
	  		var num=1;
	  		$("#next").click(
	  			function(){
	  				$(".listbody:lt(9)").hide();
	  				$(".listbody:gt(10)").show();
	  			}
	  		)
	  		$("#back").click(  			
	  			function(){
	  				$(".listbody:gt(10)").hide();
	  				$(".listbody:lt(9)").show();
	  			}
	  		)
	  		
	  		window.localStorage.setItem("data",data)
	  		var arra=[];
	  		
	  		for(var i=0;i<winLen;i++){
	  			arra.push(winData.data[i].tele)
	  			x=arra[i].split("")
	  			y=x.splice(4,3,"***");
	  			// var aa=winData.data[i].tele.splice()
	  			if(i<9){
	  				$("#winners").append(
		  				'<ul class="listbody" id="listbody">'+
							'<li class="col1"><span class="rowid">0'+num+'</span><span class="qi">期</span></li>'+
							'<li class="col2">'+winData.data[i].name+'</li>'+
							'<li class="col3 tel">'+winData.data[i].tele+'</li>'+
							'<li class="col4">'+winData.data[i].gift+'</li>'+
						'</ul>'
		  			)
	  			}else{
	  				$("#winners").append(
		  				'<ul class="listbody" id="listbody">'+
							'<li class="col1"><span class="rowid">'+num+'</span><span class="qi">期</span></li>'+
							'<li class="col2">'+winData.data[i].name+'</li>'+
							'<li class="col3 tel">'+winData.data[i].tele+'</li>'+
							'<li class="col4">'+winData.data[i].gift+'</li>'+
						'</ul>'
		  			)
	  			}
	  			num++;
	  		}
	  		
	  		
	  		
		 }
	});
	function postmessage(name,tel){
		var d={name:name,mobile:tel}
		console.log(d)
		$.ajax({
			type:"POST",
		 	url: "http://sjz.bokanedu.com/tgr/api/?day=52&&type=og",  
		  	data:d,
		  	success:function(d){
		  		if(eval('('+d+')').code==0){
		  			
		  			window.open("success.html");
		  		}else{
		  			alert(eval('('+d+')').msg)
		  		}
		  	}
		})
	}	
	
	$("#drivesub").click(function(){
		var nameaa=$("#yourname").val();
		var telaa=$("#yourtel").val();
		postmessage(nameaa,telaa);	
	})
	
}
