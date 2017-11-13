window.onload = function () {
    var menu_lt = $('.menu_mobile>span:eq(0)');
    var menu_lm = $('.menu_mobile span:eq(1)');
    var menu_lb = $('.menu_mobile span:eq(2)');
    var menu = document.querySelector('.menu_mobile');
    var menuBox = document.querySelector('.menu_box');
    menu.addEventListener("click", function () {
        if (menu_lt.hasClass("ml1") == false) {
            menu_lm.css('opacity', '0');
            menu_lt.addClass("ml1");
            menu_lb.addClass("ml3");
            menuBox.style.display = 'block';
        } else {
            menu_lm.css('opacity', '1');
            menu_lt.removeClass("ml1");
            menu_lb.removeClass("ml3");
            menuBox.style.display = 'none';
        }
    })


    $("#slidershow").carousel({
        interval: 2000
    });
    $("#slidershow a.left").click(function () {
        $(".carousel").carousel("prev");
    });
    $("#slidershow a.right").click(function () {
        $(".carousel").carousel("next");
    });



    //for (var i = 0; i <= picShow.length; i++) {
    //    picShow[i].style.backgroundImage = "url(images/lb_0" + (i + 1) + ".jpg)";
    //
    //}
    var picShow = $('.pic_show a');
    var lbAjax = new XMLHttpRequest();
    lbAjax.open('get', 'php/lunbo.php');
    lbAjax.setRequestHeader("Conten-type","application/x-www-form-urlencoded");

    lbAjax.send();

    lbAjax.onreadystatechange = function () {
        if (lbAjax.readyState == 4 && lbAjax.status == 200) {
            //console.log(lbAjax.responseText);
            var json = JSON.parse(lbAjax.responseText);
            console.log(json.path1);
            //console.log(json[0]);
            //picShow[0].style.backgroundImage = "url("+json.path1+")";
            //for (var i = 0; i <= picShow.length; i++) {
                picShow[0].style.backgroundImage = "url("+json.path1+")";
                picShow[1].style.backgroundImage = "url("+json.path2+")";
                picShow[2].style.backgroundImage = "url("+json.path3+")";
                picShow[3].style.backgroundImage = "url("+json.path4+")";
                picShow[4].style.backgroundImage = "url("+json.path5+")";
                picShow[5].style.backgroundImage = "url("+json.path6+")";
                picShow[6].style.backgroundImage = "url("+json.path7+")";
            //}
        }
    }









    }










}