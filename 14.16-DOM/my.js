function getclass(clName){//全局获取
	var tags=document.all?document.all:document.getElementsByTagName('*');//获取页面中所有标签
	var arr=[];//创建一个空数组
	for (var i = 0; i < tags.length; i++) {//遍历所有标签
		if (tags[i].className==clName) {//判断有某个类名的标签
			arr.push(tags[i]);//插入数组arr
		};
	};
	return arr;//返回数组arr
}

function getclass2(parentID,clName){//局部获取
	var parent=document.getElementById(parentID);
	var tags=parent.all?parent.all:parent.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if (tags[i].className==clName) {
			arr.push(tags[i]);
		};
	};
	return arr;
}

function getStyle(obj,sty){//获取元素样式
	if (obj.currentStyle) {
		return obj.currentStyle[sty];
	} else{
		return getComputedStyle(obj,null)[sty];
	};
}

function nextNode(obj){//获取下一个兄弟节点
	if (obj.nextElementSibling) {
		return obj.nextElementSibling;
	} else{
		return obj.nextSibling;
	};
}


function previousNode (obj) {
	if (obj.previousElementSibling) {
		return obj.previousElementSibling;
	} else{
		return obj.previousSibling;
	};
}

function firstNode (obj) {
	if (obj.firstElementChild) {
		return obj.firstElementChild;
	} else{
		return obj.firstChild;
	};
}

function lastNode (obj) {
	if (obj.lastElementChild) {
		return obj.lastElementChild;
	} else{
		return obj.lastChild;
	};
}