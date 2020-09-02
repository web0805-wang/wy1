$(function() {

    //详情页加减
    var num = $(".main-num .add span").eq(1).html();
    $(".main-num .icon-jia1").click(function() {
        console.log("aaa");
        num = Number(num);
        num += 1;
        $(".main-num .add span").eq(1).html(num);
    })

    $(".main-num .icon-jian1").click(function() {
        console.log("aaa");
        num = Number(num);
        num -= 1;
        if (num <= 1) {
            num = 1;
        }
        $(".main-num .add span").eq(1).html(num);
    })

    //渲染数据
    var id = location.search.split("=")[1];
    console.log(id);

    $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        id: id,
    }, data => {
        console.log(data);
        $(".main-top .img").html(`
                        <div class="b-img">
                            <img src="${data.data.pimg}" alt="">
                        </div>
                        <div class="s-img">
                            <ul>
                                <li><img src="${data.data.pimg}" alt=""></li>
                                <li><img src="${data.data.pimg}" alt=""></li>
                                <li><img src="${data.data.pimg}" alt=""></li>
                            </ul>
                        </div>
        `)
        $(".main-title").html(`
                            <span>${data.data.pname}</span>
                            <span>${data.data.pname}</span>
                            <div class="main-price">
                                <span>售价：</span>
                                <span>￥</span>
                                <span>${data.data.pprice}</span>
                            </div>
                            <span>服务：&nbsp;.&nbsp;全场满99包邮&nbsp;.&nbsp;部分地区无法配送</span>
        `)
    })

    //点击加入购物车，数据加入购物车

    $(".main-cart i").click(function() {
        console.log("aa");
        $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
            uid: 38707,
            pid: id,
            pnum: num
        }, data => {
            console.log(data);
        })



    })



    // 接口地址：
    // 接口请求方式：get
    // 接口参数：
    // id  商品的id
    // 使用方式
    // 获取id为1的商品的详情
    // http://jx.xuzhixiang.top/ap/api/detail.php?id=1
    // 服务器返回json数据











})