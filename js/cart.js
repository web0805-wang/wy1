$(function() {

    //     查询用户购物车中的商品 接口

    // 接口地址：http://jx.xuzhixiang.top/ap/api/cart-list.php
    // 接口请求方式：get
    // 接口参数：
    //      id  用户id

    // 使用方式
    //      获取id为1的用户的购物车
    //      http://jx.xuzhixiang.top/ap/api/cart-list.php?id=1


    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id: 38707
    }, data => {
        console.log(data.data); //数组
        var str = "";
        $.each(data.data, function(i) {
            console.log(i);

            str +=
                `
                <div class="cart-con">
                <input type="checkbox">
                <span class="all"></span>
                <span class="info">
                    <img src="${data.data[i].pimg}" alt="">
                    <i>${data.data[i].pname}</i>
                </span>
            <span class="price">${data.data[i].pprice}</span>
            <span class="num">
                <div class="main-num">
                <span></span>
            <div class="add">
                <span class="iconfont icon-jian1"></span>
                <span>${data.data[i].pnum}</span>
                <span class="iconfont 
                            icon-jia1">
                </span>
            </div>
        </div>

        </span>
        <span class="sub">${data.data[i].pnum * data.data[i].pprice}</span>
        <span class="active"></span>
        <span class="del" data-pid=${data.data[i].pid}>X</span>
       </ div>
                `;
            $(".cart-main .cart").html(str);

        })
        console.log($(".cart-main .cart .cart-con"));
        var per = $(".cart-main .cart .cart-con");
        console.log(per);

        //循环
        $(per).each(function(i) {

            //加
            $(this).eq(i).find(".add").find(".icon-jia1").click(function() {
                var num = $(this).parent().find("span").eq(1).html(); //获取数量
                console.log(num);

                console.log($(this).eq(i));
                console.log("hhh");

                num = Number(num);
                num += 1;
                this
                //小计跟着加
                var perPrice = $(this).parent().parent().parent().parent().find(".price").html();
                console.log(perPrice);
                console.log(num * perPrice);
                $(per).eq(i).find(".sub").html(num * perPrice);
                //把num再放回去，保证跟着变
                $(this).parent().find("span").eq(1).html(num);
            })

            //减
            $(this).eq(i).find(".add").find(".icon-jian1").click(function() {
                    var num = $(this).parent().find("span").eq(1).html();
                    console.log(num);
                    console.log("hhh");
                    num = Number(num);
                    num -= 1;
                    var perPrice = $(this).parent().parent().parent().parent().find(".price").html();
                    console.log(perPrice);
                    console.log(num * perPrice);
                    $(per).eq(i).find(".sub").html(num * perPrice);

                    if (num < 1) {
                        // console.log($(this).parent().parent().parent().parent());
                        //减到0直接删除这一条信息
                        $(this).parent().parent().parent().parent().remove();
                        //删除购物车的数据
                        // $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                        //     uid: 38707,
                        //     pid: $(this)
                        // }, data => {
                        //     console.log(data);
                        // })

                    }
                    $(this).parent().find("span").eq(1).html(num);
                })
                //     //删除购物车数据
                // $(this).eq(i).find(".del").click(function() {
                //     console.log($(this).attr("data-pid"));
                //     $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                //         uid: 38707,
                //         pid: $(this).attr("data-pid")
                //     }, data => {
                //         console.log(data);
                //     })
                // })
        })




    })

















})