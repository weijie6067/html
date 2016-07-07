
	var wid = document.documentElement.clientWidth;
	var newfs = wid*100/640;
	var html = document.getElementsByTagName('html')[0];
	html.style.fontSize = newfs+"px";
	
window.onresize=function(){
	var wid = document.documentElement.clientWidth;
	var newfs = wid*100/640;
	var html = document.getElementsByTagName('html')[0];
	html.style.fontSize = newfs+"px";
			
}
$(function(){
	$("#tab").swipeLeft(function(){
		left()
	})
	$("#tab").swipeRight(function(){
		right()
	})
	$("#tabt span:first").tap(function(){
		right()
	})
	$("#tabt span:last").tap(function(){
		left()
	})
	$.ajax({
		type:"GET",
		url:"url",
		dataType:"json",
		success:function(data){
			
		},
		error:function(){
			
		}
	})
})	
	function left(){
		$("#newsa").animate({opacity:0},300);
		$("#newsb").animate({opacity:1},300);
		$("#tabt span:first").removeClass("active");	
		$("#tabt span:last").addClass("active");
	}
	function right(){
		$("#newsa").animate({opacity:1},300);
		$("#newsb").animate({opacity:0},300);
		$("#tabt span:first").addClass("active");
		$("#tabt span:last").removeClass("active");
	}

