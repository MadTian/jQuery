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


    /* 跟随广告S */
    var oZx=$('.zx');
    $(window).scroll(function(event) {
        
        //实时获取被浏览器卷去的高度（窗口滚动的垂直距离）
        var t=$(window).scrollTop();

        //将该值赋予“咨询框”的top
        // oZx.css('top', t);
        oZx.stop().animate({
            'top':t+100
        }, 'slow');

    });
    /* 跟随广告E */

    /* 弹窗S */
    var oWebimclosebutton=$('#webimclosebutton');
    oWebimclosebutton.click(function(event) {
        
        $(this).parents('#webim').slideUp();

    });
    /* 弹窗E */




});