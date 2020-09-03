$(function() {
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
                <input type="checkbox" class="perCheck">
                <span class="all"></span>
                <span class="info">
                    <img src="${data.data[i].pimg}" alt="">
                    <i>${data.data[i].pname}</i>
                </span>
            <span class="price">${data.data[i].pprice}</span>
            <span class="num">
              
            
            <div class="add">
                <span class="iconfont icon-jian1" data-pid=${data.data[i].pid}></span>
                <span class="number">${data.data[i].pnum}</span>
                <span class="iconfont 
                            icon-jia1" data-pid=${data.data[i].pid}>
                </span>
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
        var count;
        let id = JSON.parse(localStorage.getItem("uid"));
        $(per).each(function(i) {
            //加
            $(".icon-jia1").eq(i).click(function() {
                    var num = +$(this).prev().html();
                    num += 1;
                    $(this).prev().html(num);

                    //小计
                    var price = $(this).parent().parent().siblings(".price").html();
                    count = parseFloat(num * price);
                    $(this).parent().parent().siblings(".sub").html(count);
                    //更新数据
                    total();

                    $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                        uid: id,
                        pid: $(this).attr("data-pid"),
                        pnum: num
                    }, data => {
                        console.log(data);
                    })
                })
                //减

            $(".icon-jian1").eq(i).click(function() {
                console.log("fff");
                var num = +$(this).next().html();
                num -= 1;
                if (num <= 1) {
                    num = 1;
                }
                $(this).next().html(num);
                total();
                //小计
                var price = $(this).parent().parent().siblings(".price").html();
                count = parseFloat(num * price);
                $(this).parent().parent().siblings(".sub").html(count);
                //数据更新


                $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                    uid: id,
                    pid: $(this).attr("data-pid"),
                    pnum: num
                }, data => {
                    console.log(data);
                })
            })


            //删除
            $(this).eq(i).find(".del").click(function() {
                //删除dom结构
                $(this).parent().remove();
                //删除购物车数据
                console.log($(this).attr("data-pid"));
                $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                    uid: id,
                    pid: $(this).attr("data-pid")
                }, data => {
                    console.log(data);
                })
                total();
            })

            //判断全选 
            //全选按钮
            $("#checkAll").click(function() {
                $(".perCheck").prop("checked", $(this).prop('checked'));
                total();
            })

            //单选框
            let count2 = 0;
            $(".perCheck").click(function() {
                var flag = true;
                $(".perCheck").each(function(i, v) {
                    console.log(v);
                    if (v.checked === false) {
                        flag = false;
                    }
                })
                $("#checkAll").prop("checked", flag);
                total();
            })

            //计算总价


            function total() {
                let counts = 0;
                $(".cart .sub").each(function(i, v) {

                    console.log(i, v);
                    var num = +$(".number").eq(i).html();
                    console.log(num);
                    var price = $(".cart .price").eq(i).html();
                    console.log(price);

                    if ($(".perCheck").eq(i).prop('checked')) {
                        counts = parseFloat(counts + num * price);
                    }
                    console.log(counts);
                    $("#total").html(`总价：${counts}`);

                })
            }
            // total();



















        })
    })






})