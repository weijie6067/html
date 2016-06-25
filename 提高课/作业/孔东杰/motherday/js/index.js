/**
 * Created by Administrator on 2016/6/20.
 */
//缩放适配
var wid=document.documentElement.clientWidth;
var scale=wid/640
var html = document.getElementsByTagName('html')[0];
html.style.zoom=scale;
window.onresize=function(){
    var wid=document.documentElement.clientWidth;
    var scale=wid/640;
    var html = document.getElementsByTagName('html')[0];
    html.style.zoom=scale;
};

//滑页
window.onload=function(){
    document.addEventListener("touchstart",touchstart,false);
    document.addEventListener("touchmove",touchmove,false);
    document.addEventListener("touchend",touchend,false);
    var startY=endY=0;
    var curIndex=1;
    function touchstart(e){
        try{
            if(e.touches[0]){
                startY= e.touches[0].clientY;
            }
        }catch(e){
            console.log(e.message);
        }
    }
    function touchmove(e){
        try{
            if(e.touches[0]){
                endY= e.touches[0].clientY;
            }
        }catch(e){
            console.log(e.message);
        }
    }
    function touchend(){
        if(startY>endY){
            var _name="#page"+curIndex;
            if(curIndex==9) return;
            $(_name).slideUp(200,function(){
                curIndex++;
                animation(curIndex);
            });
        }else{

            if(curIndex==1) return;
            curIndex--;
            //alert()
            var _name="#page"+curIndex;
            $(_name).slideDown(200,function(){
                animation(curIndex);
            });
        }
    }
    animation(curIndex);
    function animation(index){
        var _bigImgId="#bigimg"+index;
        var _txtImgId="#textimg"+index;
        $("img").css({opacity:0});
        $("#page9img,#share").css({opacity:0});
        $(".txtimg").css({"margin-left":"-138px"});
        $(".txt1").css({left:"0px"})
        switch(index){
            case 1:
                $(_bigImgId).animate({
                    opacity:1
                });
                $("#tree").animate({
                    opacity:1
                });
                $(_txtImgId).delay(500).animate({
                    opacity:1,
                    left:"50%"
                });
                break;
            case 2:
                $(_bigImgId).animate({
                    opacity:1
                },500);
                $(_txtImgId).delay(300).animate({
                    opacity:1,
                    "margin-left":"35px"
                });
                break;
            case 3:
                $(_bigImgId).animate({
                    opacity:1
                },500);
                $(_txtImgId).delay(300).animate({
                    opacity:1,
                    "margin-left":"35px"
                });
                break;
            case 4:
                $(_bigImgId).animate({
                    opacity:1
                },500);
                $(_txtImgId).delay(300).animate({
                    opacity:1,
                    "margin-left":"35px"
                });
                break;
            case 5:
                $(_bigImgId).animate({
                    opacity:1
                },500);
                $(_txtImgId).delay(300).animate({
                    opacity:1,
                    "margin-left":"35px"
                });
                break;
            case 6:
                $(_bigImgId).animate({
                    opacity:1
                },500);
                $(_txtImgId).delay(300).animate({
                    opacity:1,
                    "margin-left":"35px"
                });
                break;
            case 7:
                $(_bigImgId).animate({
                    opacity:1
                },500);
                $(_txtImgId).delay(300).animate({
                    opacity:1,
                    "margin-left":"35px"
                });
                break;
            case 8:
                $(_bigImgId).animate({
                    opacity:1
                },500);
                $(_txtImgId).delay(300).animate({
                    opacity:1,
                    "margin-left":"35px"
                });
                break;
            case 9:
                var ua = window.navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i)){
                    $("#page9img").animate({
                        opacity:1
                    },500);
                    $("#share").delay(300).animate({
                        opacity:1,
                        //left:"50%"
                    },500);
                }else{
                    $("#page9img").animate({
                        opacity:1
                    },500);
                    $("#mark").css({opacity:0});
                    $(_txtImgId).delay(500).animate({
                        opacity:1,
                        left:"50%"
                    });
                }
                break;
        }
    }

}
