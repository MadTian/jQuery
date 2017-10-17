$(function() {
    

    /* 模态窗口S */

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
    //获取元素

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


    /* 回滚按钮S */

    var oBack=$('#back');
    $(window).scroll(function(event) {
        
        //当页面滚动超过一屏时，让回滚按钮显示
        //否则，隐藏该按钮
        if( $(this).scrollTop() > $(this).height() ){

            oBack.css('visibility', 'visible');

        }else{

            oBack.css('visibility', 'hidden');

        }
        

    });

    //单击回滚按钮
    oBack.click(function(event) {
        
        //让页面一瞬间回到顶部
        // $(window).scrollTop(0);
        $('html,body').animate({
            'scrollTop':0
        }, 'slow');

    });

    /* 回滚按钮 */

});