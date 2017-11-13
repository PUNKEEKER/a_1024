function init() {
    //设置地图中心点
    var myLatlng = new qq.maps.LatLng(26.070200,119.280170);

    //定义工厂模式函数
    var myOptions = {
        zoom: 18,               //设置地图缩放级别
        center: myLatlng,      //设置中心点样式
        mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
    }



    //获取dom元素添加地图信息
    var map = new qq.maps.Map(document.getElementById("container"), myOptions);
}
//异步加载地图库函数文件
function loadScript() {
    //创建script标签
    var script = document.createElement("script");
    //设置标签的type属性
    script.type = "text/javascript";
    //设置标签的链接地址
    script.src = "http://map.qq.com/api/js?v=2.exp&callback=init";
    //添加标签到dom
    document.body.appendChild(script);


}

window.onload = loadScript;    // dom文档加载结束开始加载 此段代码