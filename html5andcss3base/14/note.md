# 使用css进行增强

[TOC]

**渐进增强** 网站逐步的使用新的css声明，在新旧浏览器上有着不同的表现，但是都能完成基本的功能。

**polyfill** 让旧浏览器兼容新css的一种解决办法

**厂商前缀**  `-webkit; -moz; -ms; -o;`

## 创建圆角

```css
div{
  -webkit-border-radius: 20px;
  border-radius: 20px;
}
```

value可以为% 相对于本元素大小。

## 文本阴影

`text-shadow: x-offset y-offset blur-radius color;`

前三个位长度单位，blur-radius可选。

可以添加多个阴影，用逗号分隔。

默认值none

## 元素阴影

`box-shadow:x-offset y-offset blur-radius spread color`

## 多重背景

```css
.noght-sky{
  background-color: navy: /*备用*/
  background-img:
    	url(ufo.png), url(stars.png),
    	url(stars.png), url(sky.png);
  
  background-position:
    50% 102%, 10% -150%,
    0 -150px, 50% 100%;
  background-repeat:
    no-repeat, no-repeat,no-repeat, repeat-x;
}
.nn{
  backround: navy url(ufo.png) no-repeat center bottom;
  
  background:
    url(ufo.png) no-repeat 50% 102%,
    url(stars.png) no-repeat 100% -150%;
}/*简写*/
```



## 渐变背景

**线性渐变** linear-gradient

**径向渐变** radial-gradient

线性渐变定义：

```css
background: linear-gradient(to top/right/legt/bottom right/bottom left/top right/top left/方向（45deg）， color1， color2， ...);
```

同后的方向为要渐变的方向，方向值的单位为deg，按顺时针旋转，无to。

方向可以不选，默认to bottom

color后可以接一个渐变位置的停止位置。

定义径向渐变：

1. 输入`background: radial-gradient(`
2. （可选）指定渐变形状。circle／ellipse
3. （可选）指定渐变尺寸。默认farthest-corner（最远的角）。输入size，可以是单值指宽高，双值分别指代。或者使用关键字closest-side／farthest-side／closest-corner／farthest-corner。
4. （可选）指定渐变位置。默认中心点。位置预定义值pos可为at top/right/left/bottom right/bottom left/top right/top left 或者at 200px 43px/at 35% 70%。
5. 输入逗号
6. 指定颜色或者颜色和颜色停止位置。

```css
.dd{
  background: radial-gradient(70% 90% at bottom left, yellow, red);
}
```

## 不透明度

`opacity`

值从0～1

## 生成内容效果

`:before ; :after`

可以在元素之前之后添加元素



```css
.cite:after{
  border: sold transparent;
  border-top-color: #2b2b2b;
  border-width: 15px;
  content: " ";
  heght: 0;
  left: 50%;
  margin-left: -15px;
  position: absolute;
}
```

## 使用sprite拼合图像

使用一张包含多个图像的大图，然后在元素显示时使用background-position显示图片指定位置。