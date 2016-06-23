window.addEventListener("load",function(){
//定义保存坐标的变量
var startY = endY = 0,curIndex = 1,stop=false;
//添加页面元素的滑动事件
document.addEventListener('touchstart', touchstart, false);
document.addEventListener('touchmove', touchmove, false);
document.addEventListener('touchend', touchend, false);
//编写事件执行的对应函数
function touchstart(e) {
			startY = e.touches[0].clientY;
}

function touchmove(e) {
			endY = e.touches[0].clientY;
}

function touchend() {
	if (startY > endY) {
		console.log('向上');
		if (curIndex == 9||stop==true) return;
		//根据当前页面索引号组合元素名称
		var _name = "#page" + curIndex; 
		stop=true;
		$(_name).slideUp(500, function() {
			stop=false;
			animate(curIndex)
		});
		curIndex++;
	} else {
		console.log('向下');
		if (curIndex == 1||stop==true) return;
		stop=true;
		curIndex--;
		var_name = "#page"+curIndex;
		
		$(_name).slideDown(500, function() {
			stop=false;
			animate(curIndex)
		});
	}
}
//页面动画
animate(curIndex);
function animate(index) {
	//初始化动画
	$("img").css({opacity:"0"});
	var _n = "page" + index;
	switch (index) {
		case 1:
			console.log(_n)
			$(".img1_1").animate({
				opacity: 1,
			}, 1500)
			$(".img1_2").animate({
				opacity: 1,
			}, 1500)
			$(".img1_3").animate({
				opacity: 1,
			}, 1500)
			break;
		case 2:
			$(".img2_1").animate({
				opacity: 1,
				
			}, 2500)
			$(".img2_2").animate({
				opacity: 1,
				marginLeft:"0.5rem"
			}, 2000)
			break;

		case 3:
			$(".img3_1").animate({
				opacity: 1,
				
			},2500)
			$(".img3_2").animate({
				opacity: 1,
				marginLeft:"0.5rem"
			}, 2000)
			break;
		case 4:
			$(".img4_1").animate({
				opacity: 1,
				
			}, 2500)
			$(".img4_2").animate({
				opacity: 1,
				marginLeft:"0.5rem"
			}, 2000)
			break;
		case 5:
			$(".img5_1").animate({
				opacity: 1,
				
			}, 2500)
			$(".img5_2").animate({
				opacity: 1,
				marginLeft:"0.5rem"
			}, 2000)
			break;
		case 6:
			$(".img6_1").animate({
				opacity: 1,
				
			}, 2500)
			$(".img6_2").animate({
				opacity: 1,
				marginLeft:"0.5rem"
			}, 2000)
			break;
		case 7:
			$(".img7_1").animate({
				opacity: 1,
				
			}, 2500)
			$(".img7_2").animate({
				opacity: 1,
				marginLeft:"0.5rem"
			}, 2000)
			break;
		case 8:
			$(".img8_1").animate({
				opacity: 1,
				
			}, 2500)
			$(".img8_2").animate({
				opacity: 1,
				marginLeft:"0.5rem"
			}, 2000)
			break;
		case 9:
			$(".img9_1").animate({
				opacity: 1,
				
			}, 2500)
			
	}
}
})

