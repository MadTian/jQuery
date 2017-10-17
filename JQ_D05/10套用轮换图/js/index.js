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

/* 呼吸灯轮换图S */
$(function() {

    var timer;
    //设置一个变量，用来代表下|上一个标识
    var num=0;

    //jq reset
    $('#slideBox .bd ul li:first').show();

    //手动 自动
    //先手动 再自动，因为自动建立在手动基础上

    var oPrevBtn=$('.prev');
    var oNextBtn=$('.next');
    var aBtn=$('#slideBox .hd ul li');
    var aImg=$('#slideBox .bd ul li');
    var oBanner=$('.slideBox');

    //封装“下一张”功能
    function nextFn(){

        //需要得到下一个按钮、下一张图片   -->     先得有下一个标识

        //将标识做递增
        num++;
        if(num>6){
            num=0;
        }
        //控制完之后，num代表下一个

        //让下一个按钮具备 current，做排他
        aBtn.eq(num).addClass('on').siblings('li').removeClass('on');
        //再让下一张图片淡入，做排他，让其他图片淡出
        aImg.eq(num).stop().fadeIn().siblings('li').stop().fadeOut();

    }

    //封装“上一张”功能 
    function prevFn(){

        // 页面逻辑和“下一张”一样，不同的是标识的控制
        
        //需要得到上一个按钮、上一张图片   -->     先得有上一个标识

        //将标识做递减
        num--;
        if(num<0){
            num=6;
        }
        //控制完之后，num代表上一个

        //让上一个按钮具备 current，做排他
        aBtn.eq(num).addClass('on').siblings('li').removeClass('on');
        //再让上一张图片淡入，做排他，让其他图片淡出
        aImg.eq(num).stop().fadeIn().siblings('li').stop().fadeOut();


    }

    timer=setInterval(nextFn, 2000);

    oBanner.hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer=setInterval(nextFn, 2000);
    });

    //“下一张”切换
    oNextBtn.click(nextFn);
    //“上一张”切换
    oPrevBtn.click(prevFn);

    //角标单击切换
    aBtn.click(function(event) {
        
        //让当前角标具备 current，做排他
        $(this).addClass('on').siblings('li').removeClass('on');

        //单击切换业务逻辑和上、下张不一样
        //实现原理：辞旧迎新

        //1.辞旧：让当前页面上停留的这一张做淡出
        //内存中的num就指向旧图
        aImg.eq(num).stop().fadeOut();

        // 2.迎新：让与当前角标相匹配的那张图片淡入
        // 前角标相匹配的那张图片      -->     得到当前序号
        var i=$(this).index();
        aImg.eq(i).stop().fadeIn();

        //为了不影响上、下张切换，这里要同步全局标识变量！！！
        num=i;

    });

});
/* 呼吸灯轮换图E */