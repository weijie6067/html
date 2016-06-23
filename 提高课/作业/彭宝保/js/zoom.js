$(document).ready(function(){
var wid=document.documentElement.clientWidth;
	var scale=wid/640
	document.body.style.zoom=scale;
	
})
$(window).resize(function(){
  	var wid=document.documentElement.clientWidth;
	var scale=wid/640 
	document.body.style.zoom=scale;
	
});