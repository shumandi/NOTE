/**
 * Created by shumandi on 2016/11/28.
 */
window.onload = function (){
    var mycanvas =document.getElementById('canvas-club');
    var ctx = mycanvas.getContext('2d');
    var w = mycanvas.width = window.innerWidth;
    var h = mycanvas.height = window.innerHeight;//设置canvas宽、高
    var clearColor = 'rgba(0, 0, 0, .07)';//画板背景,注意最后的透明度0.1 这是产生叠加效果的基础

    function RainDrop() {
        
    }
    RainDrop.prototype = {
        init: function () {
            this.x = 0;//雨滴的位置x
            this.y = 0;//雨滴的位置y
            this.color = 'hsl(180, 100%, 50%)';//雨滴颜色 长方形的填充色
            this.vx = 5;//横向速度
            //椭圆公式 y=±(b/a)√(a²-x²)
            this.vy = 0;//雨滴下落速度
            this.hit = 500;//下落的最大值
            this.size = 5;//长方形宽度
        },
        draw: function () {
            if (this.y < this.hit && this.x < this.hit) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);//绘制长方形，通过多次叠加长方形，形成雨滴下落效果
                ctx.fillStyle=this.color;
                ctx.closePath();
                ctx.fill();
            }
            this.update();//更新位置
        },
        wrap:function () {

        },
        update: function () {
            if (this.y < this.hit) {
                this.y = (5/500)*Math.sqrt(500*500-this.x*this.x);//未达到底部，雨滴y坐标
                this.x += this.vx;//未到达底部，增加y坐标
            } else {
                this.init();
                resize();
            }
        }
    };

    function resize() {
        w = mycanvas.width = window.innerWidth;
        h = mycanvas.height = window.innerHeight;
        ctx.fillStyle ='rgba(0, 0, 0, 1)';
        ctx.clearRect(0,0,w,h);
    }

//初始化一个雨滴
    var r = new RainDrop();
    r.init();

    function anim() {
        ctx.fillStyle = clearColor;//每一帧都填充背景色
        ctx.fillRect(0, 0, w, h);//填充背景色，注意不要用clearRect，否则会清空前面的雨滴，导致不能产生叠加的效果
        r.draw();//绘制雨滴
        requestAnimationFrame(anim);//控制动画帧
    }

    window.addEventListener("resize", resize);
//启动动画
    anim();
};