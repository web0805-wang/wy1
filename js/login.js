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
    $(".box-content button").click(function() {
        var val3 = $(".inputs input").eq(0).val();
        var val4 = $(".inputs input").eq(1).val();
        var flag1 = false;
        var flag2 = false;
        //验证账户不能为空

        console.log(val3);
        if (/^\s+$/gi.test(val3) || val3.length == 0) {
            $(".notice").show();
            $(".notice .txt").html("!请输入账户名");
            flag1 = true;
        } else if (!/^\w+@\w+(\.\w+)+$/.test(val3)) {
            $(".notice").show();
            $(".notice .txt").html("!请输入正确的邮箱")
        } else {
            $(".notice").hide();
        }

        //验证密码
        if (/^\s+$/gi.test(val4) || val4.length == 0) {
            $(".notice").show();
            $(".notice .txt").html("!请输入密码");
            flag2 = true;
        } else if (!(/^[a-zA-Z0-9_-]{8,16}$/.test(val4))) {
            $(".notice").show();
            $(".notice .txt").html("!密码为8-16个字符")
        } else {
            $(".notice").hide();
        }
        if (flag1 && flag2) {
            $(".notice").show();
            $(".notice .txt").html("!请输入账户名");
        }
        if (flag2 == false && flag1 == true) {
            $(".notice").show();
            $(".notice .txt").html("!请输入密码");
        }

        //登录接口

        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            username: val3,
            password: val4
        }, data => {
            console.log(data);
            if (data.code) {
                alert(data.msg);
                location.href = "index.html";
            } else {
                alert(data.msg);
            }
            localStorage.setItem("uid", data.data.id);

        })



    })


})