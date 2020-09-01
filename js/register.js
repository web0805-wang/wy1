$(function() {
    //表单验证
    console.log($(".main .box button"));
    $(".box button").click(function() {

        var flag1 = false;
        var flag2 = false;
        //验证账户不能为空
        var val1 = $(".box .email input").val();
        console.log(val1);
        if (/^\s+$/gi.test(val1) || val1.length == 0) {
            $(".warn1").show().html("!请输入账户名")
        } else if (!/^\w+@\w+(\.\w+)+$/.test(val1)) {
            $(".warn1").show().html("!请输入正确的邮箱")
        } else {
            $(".warn1").hide();
            flag1 = true;
        }

        //验证密码
        var val2 = $(".box .password input").val();

        if (/^\s+$/gi.test(val2) || val2.length == 0) {
            $(".warn2").show().html("!请输入密码")
        } else if (!(/^[a-zA-Z0-9_-]{8,16}$/.test(val2))) {
            $(".warn2").show().html("!密码为8-16个字符"); //当输入时验证密码格式
        } else {
            $(".warn2").hide();
            flag2 = true;
        }
        //勾选同意才能点击下一步
        var agree = document.querySelector(".agree");
        var oInput = agree.children[0];
        console.log(oInput.checked);
        if (flag1 && flag2) {
            if (oInput.checked == false) {
                console.log("ddd");
                alert("您需要同意相关条款才能注册");
            }
        }


        //三者都相同进行下一步
        console.log(flag1 && flag2 && oInput.checked);
        if (flag1 && flag2 && oInput.checked) {
            $("#step1 .num").css({
                "background": "#2c82ff",
                "color": "white"
            }).html('√');
            $(".line1").css({
                "background": "#2c82ff"
            })
            $("#step2").addClass("one");
            $(".box").hide();
            $(".box2").show();
        }



        //点击手机注册
        $(".box2 button").click(function() {
            var num = $(".num input").val();
            console.log(num);
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(num))) {
                $(".notice .txt").html("请输入正确的手机号");
            } else {
                $("#step2 .num").css({
                    "background": "#2c82ff",
                    "color": "white"
                }).html('√');
                $(".line2").css({
                    "background": "#2c82ff"
                })

                $(".box2").hide();
                $(".box3").show();

                $(".box3 button").click(
                    function() {
                        $("#step3 .num").css({
                            "background": "#2c82ff",
                            "color": "white"
                        }).html('√');

                        //存数据
                        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
                            username: val1,
                            password: val2
                        }, data => {
                            console.log(data);
                            if (data.code == 1) {
                                alert(data.msg);
                                // 注册完成跳转登录页
                                location.href = "login.html";
                            } else {
                                alert(data.msg);
                            }

                        })

                    }
                )

            }






        })

    })


























})