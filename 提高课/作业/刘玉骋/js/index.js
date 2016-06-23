//定义几个保存坐标的变量
var startY=endY=0;
//当前页面index
var curIndex=1;
//绑定滑动事件
document.addEventListener('touchstart',touchStart,false);
document.addEventListener('touchmove',touchMove,false);
document.addEventListener('touchend',touchEnd,false);
//各个对应的滑动事件函数
function touchStart(e){
	try{//判断是否存在touch事件
		if(e.touches[0]){
			startY=e.touches[0].clientY;
		}
	}catch(e){
			alert('请升级浏览器后查看!')
		}
	}
function touchMove(e){
	try{//判断是否存在touch事件
		if(e.touches[0]){
			endY=e.touches[0].clientY;
		}
	}catch(e){
			alert('请升级浏览器后查看!')
		}
	}
	// alert("#page"+curIndex)
function touchEnd(){
	//根据坐标值判断方向
	if(startY>endY){//向上滑动
		var _name="#page"+curIndex;
		if(curIndex==9){
			return;
		}
		//向上滑页效果
		
		$(_name).slideUp(1000,function(){
			curIndex++;
			animate(curIndex);
		});
	}else{//向下滑动
		if(curIndex==1){
			return;
		}
		curIndex--;
		var _name="#page"+curIndex;
		//向下滑页效果
		$(_name).slideDown(1000,function(){
			animate(curIndex);
		})
	}	
}
//初始化首页
animate(curIndex);
function  animate(index){
	var _name="#page"+curIndex;
	$(_name+' .img1').animate({
		opacity:'1'
	},3000);
	$(_name+' .img2').delay(500).animate({
		marginLeft:'5.5%'
	},1000)
}
//最后一页的效果
var ua = window.navigator.userAgent.toLowerCase();
if(ua.match(/MicroMessenger/i)&&curIndex==9){
	$("#mask").css({
		display:'block'
	})
}
