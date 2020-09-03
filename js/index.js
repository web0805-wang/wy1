$(function() {
    // 客服服务下拉菜单
    $(".top-right li").eq(2).hover(function() {
        $(".top-right .down").show();
        $(this).find("span").removeClass("icon-huise2");
        $(this).find("span").addClass("icon-een");
    }, function() {
        $(".top-right .down").hide();
        $(this).find("span").removeClass("icon-een");
        $(this).find("span").addClass("icon-huise2");
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
    });


    //头部导航 顶部固定
    $(window).scroll(function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 220) {
            console.log("aaa");
            $(".nav-top").show();
        } else {
            console.log("aaa");
            $(".nav-top").hide();
        }



        //回到顶部显示隐藏
        if ($(window).scrollTop() > 10) {
            $(".right-window .floor5").show();
        } else {
            $(".right-window .floor5").hide();
        }

        // $(".right-window .floor5").click(function() {
        //     $(window).scrollTop() = 0;
        // })


    })






    //轮播图

    var swiper1 = new Swiper('#swiper1', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 点击切换
    var swiper2 = new Swiper('#swiper2', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

})