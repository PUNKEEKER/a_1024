/**
 * Created by DDU on 2017/10/31.
 */
$(window).ready(function(){

    $('#dowebok').fullpage({
        //sectionsColor : ['#fff', 'url("../images/03.jpg")', '#7BAABE', '#1bbc9b'],
        verticalCentered: true,
        //navigation: 1,
        css3: 1,
    })
    ////高度自适应
    //$('#scroll>div').css("height",window.innerHeight);
    //window.onresize = function(){
    //    $('#scroll>div').css("height",window.innerHeight);
    //}

    var skill = document.getElementById('asd');
    var sBox= document.querySelector('.skill_box');

    var halfWidth = sBox.offsetWidth / 2;
    var halfHeight = sBox.offsetHeight / 2;

    skill.onmousemove = function (event) {
        var event = event || window.event;

        var left = event.clientX;
        var top = event.clientY;
        //console.log(left)

        var rotX = ((left - halfWidth )/ halfWidth) * 6;
        var rotY = ((halfHeight - top )/ halfHeight) * 8;
        //console.log(rotX + "|" + rotY);

        skill.style.transform = 'rotateX(' + rotY + 'deg) rotateY(' + rotX + 'deg)';// skill.style.transform = 'rotateY(' + rotX + 'deg)';

    }
    skill.onmouseout=function() {
        skill.style.transform = 'none';
    }
})


















