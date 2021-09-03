window.addEventListener('load', function () {
    var box = document.querySelector('.box');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var ul = document.querySelector('ul');
    var ol = document.querySelector('ol');
    var num = 0;
    var circle = 0;
    var offset = box.clientWidth;
    box.addEventListener('mouseenter', function () {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    box.addEventListener('mouseleave', function () {
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            right.click();
        }, 2000);
    })
    for (var i = 0; i < ul.children.length; i++) {
        //根据ul中li的多少来创建多少圆点
        var li = document.createElement('li');
        ol.appendChild(li);
    }
    var olli = ol.querySelectorAll('li');
    ol.children[0].className = 'select';
    // 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    for (var i = 0; i < olli.length; i++) {
        //可以给li对象添加属性，也可以给li标签添加一个自定义属性
        olli[i].setAttribute('index', i);
        // console.log(olli[i].index)
        olli[i].addEventListener('click', function () {
            //这个地方很关键，点了小圆点num和circle也要跟着一起变
            num = this.getAttribute('index');
            circle = this.getAttribute('index');

            for (var j = 0; j < olli.length; j++) {
                olli[j].className = '';
            }
            this.className = 'select';
            // console.log(this.index)
            animate(ul, -this.getAttribute('index') * offset)
        })
    }
    //右侧按钮
    right.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * offset)
        //实现小圆点与右键的同步
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'select';

    })
    //左侧按钮
    left.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * offset + 'px';
        }
        num--;
        animate(ul, -num * offset)

        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'select';
    })
    //定时播放
    var timer = setInterval(function () {
        //手动调用点击事件
        right.click();
    }, 2000);

})