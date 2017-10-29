// window.onload = function () {
// }

$(window).ready(function () {
    var banner = document.querySelector('.banner-3d');
    var slide = document.querySelector('.banner-3d-slide');
    var shadow = document.querySelector('.banner-3d-shadow');
    var box1 = document.querySelector('.banner-3d-box1');
    var box2 = document.querySelector('.banner-3d-box2');
    var box3 = document.querySelector('.banner-3d-box3');


    var halfWidth = slide.offsetWidth / 2;
    var halfHeight = slide.offsetHeight / 2;

    banner.onmousemove = function (event) {
        event = event || window.event;
        //获取鼠标到盒子边界的距离,获取鼠标到盒子中心的坐标距离
        var left = event.offsetX;
        var top = event.offsetY;

        var rotX = (left - halfWidth )/ halfWidth * 6;
        var rotY = (halfHeight - top )/ halfHeight * 8;
        // console.log(left - halfWidth + "|" + halfHeight - top);
        // console.log(rotX + "|" + rotY);



        //盒子（容器）部分
        // slide.style.transform="rotateX(8deg) rotateY(-6deg)"//设置最大旋转角度
        slide.style.transform = 'rotateX(' + rotY + 'deg) rotateY(' + rotX + 'deg)';

        slide.style.transform='rotateX('+rotY+'deg) rotateY('+rotX+'deg)';
        setTimeout(function(){
            slide.style.transition = 'all 0s';
        },1000)
        //内容部分
        var moveX = (left - halfWidth ) / halfWidth;
        var moveY = (top - halfHeight ) / halfHeight;

        box1.style.transform='translateX('+(-moveX*5)+'px) translateY('+(-moveY*5)+'px)';
        box2.style.transform='translateX('+moveX*5+'px) translateY('+moveY*5+'px)';
        box3.style.transform='translateX('+(-moveX*5)+'px) translateY('+(-moveY*5)+'px)';

        //阴影
        shadow.style.opacity=0.3;
        shadow.style.transform='translateX('+(-moveX*30)+'px) translateY('+(-moveX*30)+'px)';
    }

    banner.onmouseout=function() {
        slide.style.transform = "none";
        box1.style.transform = "none";
        box2.style.transform = "none";
        box3.style.transform = "none";
        shadow.style.transform = "none" ;
        slide.style.transition = 'all 0.3s ease-in-out';
    }


})




