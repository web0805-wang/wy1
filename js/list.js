$(function() {

    var datas = {
            "1001": {

                name: "魔兽世界 咕咕捞月月饼",
                img: "../img/p1.png",
                price: "218"

            },

            "1002": {

                name: "魔兽世界 巫妖王头盔抱枕",
                img: "../img/p2.png",
                price: "98"

            },

            "1003": {

                name: "炉石传说 经典Logo颈枕",
                img: "../img/p3.png",
                price: "85",

            },

            "1004": {

                name: "炉石传说 笔记本电脑防护包",
                img: "../img/p4.png",
                price: "85"

            },


            "1005": {

                name: "守望先锋  源氏茶杯",
                img: "../img/p5.png",
                price: "49",

            },


            "1006": {

                name: "守望先锋 艾什 帆布包",
                img: "../img/p6.png",
                price: "98"

            },

            "1007": {

                name: "守望先锋 D.Va拉杆箱 铝框（附赠行李牌+个性贴纸）",
                img: "../img/p7.png",
                price: "499"

            },


            "1008": {

                name: "破坏球 毛绒抱枕 守望先锋",
                img: "../img/p8.png",
                price: "108"

            },

            "1009": {

                name: "炉石传说 旅店盒子收纳箱",
                img: "../img/p9.png",
                price: "85"

            },

            "10010": {

                name: "D.Va 兔子标志 两折钱包 守望先锋",
                img: "../img/p16.png",
                price: "159"

            },
            "10011": {

                name: "部落 马克杯 魔兽世界",
                img: "../img/p11.png",
                price: "69"

            },
            "10012": {

                name: "炉石传说 酒馆老板酒桶杯 新版",
                img: "../img/p12.png",
                price: "198"

            },

            "10013": {

                name: "枭兽宝宝咕咕抱枕 魔兽世界",
                img: "../img/p13.png",
                price: "198"

            },
            "10014": {

                name: "魔兽世界 军团再临 双肩包",
                img: "../img/p14.png",
                price: "388"

            },

            "10015": {

                name: "防水便携运动包 联盟 魔兽世界",
                img: "../img/p15.png",
                price: "39"

            }
        }
        //存入数据
        // $.each(datas, function(i, n) {
        //     $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
        //         pname: datas[i].name,
        //         pimg: datas[i].img,
        //         pprice: datas[i].price,
        //         poldPrice: datas[i].oldPrice,
        //         uid: 38707
        //     }, data => {
        //         console.log(data);
        //     })
        // })

    // 查询数据
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: 38707,
        pagesize: 100
    }, data => {
        console.log(data.data);
        var str = "";
        $.each(data.data, function(i, n) {
            console.log(i);
            console.log(data.data[i].pname);
            str += `
            <li>
            <a href="detail.html?id=${data.data[i].pid}">
            <img src="${data.data[i].pimg}" alt="">
            </a>
            
            <i>${data.data[i].pname}</i>
            <p>
                <span class="txt">商城价</span>
                <span class="price">￥${data.data[i].pprice}</span>
                <span class="old-price">￥289.00</span>
            </p>
        </li>
           `
        })
        $(".box ul").html(str);

    })












})