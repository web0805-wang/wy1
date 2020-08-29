$(function() {
    //手机登录与邮箱登录切换
    $(".box-header li").first().click(function() {
        $(".box-content").show();
        $(this).css({
            "color": "#000"
        })
        $(".box-content2").hide();
        $(".box-header ul li").last().css({
            "color": "#cecece"
        })
    })

    $(".box-header li").last().click(function() {
        $(".box-content2").show();
        $(this).css({
            "color": "#000"
        })
        $(".box-content").hide();
        $(".box-header ul li").first().css({
            "color": "#cecece"
        })
    })



    //表单验证


    var reg = [/^\w+@\w+(\.\w+)+$/, /^[a-zA-Z_]\w{5,14}$/, /^1(3|4|5|6|7|8|9)\d{9}$/]; //邮箱，密码，手机号
    $(".box-content button").click(function() {
        $(this).css({
            "color": "#cecece"
        });

        $(".box-content .notice").show();

        var val1 = $(".box-content .inputs").first().children("input").val();
        var val2 = $(".box-content .inputs").last().children("input").val();
        console.log(val1);
        console.log(val2);

        var oInput = document.querySelectorAll(".box-content input");
        var notice = document.querySelector(".notice");
        var oSpan = notice.children[1];
        console.log(oSpan);
        console.log(oInput[0]);

        // oInput[0].onchange = function() {
        //     console.log("aaa");
        //     if (!(reg[0].test(val1))) {
        //         console.log("bbb");
        //         oSpan.innerHTML("请输入正确的邮箱地址");
        //     }
        // }
        oInput[0].onchange = function() {
            var val = oInput[0].value;
            if (!(reg[0].test(val))) {
                oSpan.innerHTML = "!格式错误";
            }
        }

        // $(".box-content .inputs").first().children("input").change(function() {
        //     console.log("aaa");
        //     if (!(reg[0].test(val1))) {
        //         console.log("bbb");
        //         $(".notice span").eq(1).html("请输入正确的邮箱地址");
        //     }
        // })

        // if (val1 == "" || val2 == "") {
        //     $(".notice span").eq(1).html("请输入账号");
        // }
    })


})