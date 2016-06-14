function resetPage(){
    //判断浏览器是否是火狐
    var isFirefox = navigator.userAgent.toUpperCase().indexOf("FIREFOX");
    if(isFirefox!=-1){
        var body = document.getElementsByTagName("body")[0]
        var deviceWidth=document.documentElement.clientWidth;
        //获取整屏的宽度然后除以640（640根据设计图总宽自行调整）
        //从而计算出一个新的比例，用来对整页进行统一缩放，以适配各种分辨率
        //火狐不支持Zoom属性，所以改用以下方法
        var scale=deviceWidth/640;
        body.style.MozTransform = "scale("+scale+")";
        body.style.MozTransformOrigin = "top left";
    }else{
        //其他浏览器适配
        var deviceWidth=document.documentElement.clientWidth;
        var scale=deviceWidth/640;
        document.body.style.zoom=scale;
    }
}
// $(document).ready(function(){
//   resetPage();
//     $(".lg").each(function(i){
//         $(this).css({
//             background:"url(img/img"+(i+2)+".png)"
//         });
//     });
// });

// $(window).resize(function(){
//     resetPage();
// });
