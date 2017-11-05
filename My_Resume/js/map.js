var init = function () {
    //var map = new qq.maps.Map(document.getElementById("container"), {
    //    center: new qq.maps.LatLng(26.055987719360242, 119.29263532161713),
    //    zoom: 19
    //});


    var center = new qq.maps.LatLng(26.053689,119.291139);
    var map = new qq.maps.Map(document.getElementById("container"), {
        center: center,
        zoom: 19
    });
    //为中心点添加标记
    var marker = new qq.maps.Marker({
        position: center,
        map: map
    });


    //点击获取坐标
    qq.maps.event.addListener(map, 'click', function (event) {
        console.log('您点击的位置为: [' + event.latLng.getLat() + ', ' +
            event.latLng.getLng() + ']');

        //添加标记
        var marker = new qq.maps.Marker({
            position: event.latLng,
            map: map
        });
        //移除其他标记
        qq.maps.event.addListener(map, 'click', function (event) {
            marker.setMap(null);
        });

    });





}


