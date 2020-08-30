$(function() {
    // 客服服务下拉菜单
    $(".top-right .iconfont").hover(function() {
        $(".top-right .down").show();
        $(this).removeClass("icon-huise2");
        $(this).addClass("icon-een");
    }, function() {
        $(".top-right .down").hide();
        $(this).removeClass("icon-een");
        $(this).addClass("icon-huise2");
    })

    //导航下拉
    console.log($("nav>ul>li"));
    $("nav>ul>li").each(function(i) {
        console.log(i);
        $("nav>ul>li").eq(i).hover(function() {
            $("nav>ul>li").eq(i).find(".list").show()
                .end()
                .find("a").css({
                    "color": "#00aeff"
                }); //鼠标移入li里颜色变蓝

            //鼠标移入二级菜单，颜色变蓝
            $("nav>ul>li").eq(i).find(".list").find("li").hover(function() {
                $(this).find("span").css({
                    "color": "#00aeff"
                });
            }, function() {
                $(this).find("span").css({
                    "color": "#cfd2d7"
                });
            })


        }, function() {
            $("nav>ul>li").eq(i).find(".list").hide()
                .end()
                .find("a").css({
                    "color": "#cfd2d7"
                });
        })
    })


    //头部导航
    console.log($(".nav-con>ul>li"));
    $(".nav-con>ul>li").each(function(j) {
        console.log($(".nav-con>ul>li").eq(j));
        $(".nav-con>ul>li").eq(j).click(function() {
            $(".nav-con>ul>li").eq(j).find(".list").show();
        })
    })



    //轮播图
    // var slider = new Slider();
    // slider.showBtns();
    // slider.showNums();









})