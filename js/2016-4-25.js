function count(x,y){
	console.log(x+y);
	console.log(x-y);
	console.log(x*y);
	console.log(x/y);
}
function getAnyClassName(lei){
	var arr = [];
	var x = document.getElementsByTagName('*');
	for(var i=0;i<x.length;i++){
		if(x[i].className == lei){
			arr.push(x[i]);
		}
	}
	return arr;
}
function getElmClassName(element,lei){
	var arr = [];
	var element = document.getElementsByTagName(element);
	for(var i=0;i<element.length;i++){
		if(element[i].className == lei){
			arr.push(element[i]);
		}
	}
	return arr;
}
function styleChange(ele){
	var x=ipt[1].value;
	var y=ipt[2].value;
	ele.style[x]=y;

}
