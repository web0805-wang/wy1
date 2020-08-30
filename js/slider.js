function Slider() {
    this.sliderBox = document.getElementById("sliderBox");
    console.log(this.sliderBox);
    this.sliderUl = document.getElementById("sliderList");
    console.log(this.sliderUl);
    this.sliderList = this.sliderUl.children;
    this.perWidth = this.sliderList[0].offsetWidth;
    this.len = this.sliderList.length;
    this.sliderUl.style.width = this.len * this.perWidth + "px";
    this.timer = null;
    this.count = 0;

    this.autoPlay();
    this.clearInterval();
}
Slider.prototype.move = function() {
    this.count++;
    if (this.count == this.len) {
        this.count = 1;
        this.sliderUl.style.left = 0;
    }
    if (this.count == -1) {
        this.count = this.len - 2;
        this.sliderUl.style.left = -(this.len - 1) * this.perWidth + "px";
    }
    if (this.aNums) { //如果某个轮播图没有小圆点，直接用this.aNums会出错

        for (let i = 0; i < this.aNums.length; i++) {
            this.aNums[i].className = "";
        }
        if (this.count == this.len - 1) {
            this.aNums[0].className = "hover";
        } else {
            this.aNums[this.count].className = "hover";
        }


    }


    startMove(this.sliderUl, {
        "left": -this.count * this.perWidth
    });
}

//自动轮播
Slider.prototype.autoPlay = function() {
    this.timer = setInterval(() => {
        this.move();
    }, 3000);
}

//带箭头
Slider.prototype.showBtns = function() {
        var oBtn = document.createElement("div");
        oBtn.id = "btn";
        oBtn.innerHTML = "<span>&lt;</span><span>&gt;</span>";
        this.sliderBox.appendChild(oBtn);
        var aBtns = oBtn.children;
        aBtns[0].onclick = () => {
            this.count -= 2;
            this.move();
        }
        aBtns[1].onclick = () => {
            this.move();
        }
    }
    //带圆点
Slider.prototype.showNums = function() {
    var oUl = document.createElement("ul");
    oUl.id = "numList";
    var str = "";
    for (let i = 0; i < this.len - 1; i++) {
        str += `<li>${i+1}</li>`;
    }
    oUl.innerHTML = str;
    this.sliderBox.appendChild(oUl);
    this.aNums = oUl.children;
    this.aNums[0].className = "hover";
    for (let i = 0; i < this.aNums.length; i++) {
        this.aNums[i].onmouseover = () => {
            this.count = i - 1;
            this.move();
        }
    }
}

//清定时器
Slider.prototype.clearInterval = function() {
    this.sliderBox.onmouseover = () => {
        clearInterval(this.timer);
    }
    this.sliderBox.onmouseout = () => {
        this.timer = setInterval(() => {
            this.move();
        }, 3000)
    }
}