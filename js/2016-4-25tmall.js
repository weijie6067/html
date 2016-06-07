function change () {
	// opacity();
	// time2=setInterval(opacity,1);
	a++;
	var b=a+1
	if(a>=img.length){
		a=0;
	}
	return a;
	return b;
}
function opacity(){
	mn(m,n);
	time2=setInterval(mn,1);
	console.log(m,n);

	img[b].style.opacity=m;
	img[a].style.opacity=n;
}
function mn(a,b){
	m+=speed;
	n-=speed;
	if(m<0){
		m=0;
	}
	if(n>1){
		n=1;
	}

	change()
	console.log(a,b)
	img[b].style.opacity=m;
	img[a].style.opacity=n;
}