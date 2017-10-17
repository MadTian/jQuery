$(function() {
    

    /* 模态窗口S */

    //获取元素
    var oLayerBtn=$('#layerBtn');
    var oBlackBg=$('.blackBg');
    var oLoginLayer=$('.loginLayer');
    var closeLayer=$('.closeLayer');

    //初始化半透明层
    oBlackBg.css('opacity', 0.5);

    //单击“云课堂”链接...
    oLayerBtn.click(function(event) {

        //让半透明层、登录窗口执行“淡入”
        oBlackBg.fadeIn('slow');
        oLoginLayer.fadeIn('slow');
        
    });

    //单击“关闭窗口”按钮...
    closeLayer.click(function(event) {

        //让半透明层、登录窗口执行“隐藏”
        oBlackBg.hide();
        oLoginLayer.hide();

    });

    /* 模态窗口E */



});