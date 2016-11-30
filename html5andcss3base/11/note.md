# 用css进行布局

[TOC]

## 注意事项

* 内容与显示分离
* 布局方法： 固定／响应式（流式）
* 浏览器兼容性注意。

## 构建页面

* 恰当的使用article，aside，nav，section，header，footer，div
* 按照合理的顺序放置元素，使其在不使用css的情况下也是合理的。
* 以一致的方式使用页面标签（h1～6）
* 使用合理的语义标记标记元素
* 如果有必要，使用注释。

> html shiv可以在ie8之前使用html5中的元素

## 重制浏览器的默认样式

使用外界的css库讲各种不同的浏览器的样式重复为相同的样式。

例如Eric Meyer

## 盒模型

**盒模型** css处理网页时，认为每一个元素都被包裹在一个看不见的盒子里。

这个盒子分为：内容区域，内边距（padding），边框（border），外边距（margin）

默认情况下width指的是内边距里面的内容区域的宽度。

`box-sizing: border-box` 模式下，width表示的是内容区域，内边距，边框加和的宽。

## 控制元素的显示类型和可见性

li默认`display: list-item`

inline元素会忽略width，height，margin-top，margin-bottom声明

> **文档流** 默认情况下html元素会按照文档中自上而下的顺序显示元素。
>
> 并在每个非行内元素的开头和结尾处换行

### 可见性

`visibility:name`

* hidden 
* visible 
* inherit

Visibility 中的隐藏hidden不会使所占用的空间小时，display不显示的话所占用空间同时消失。

inline元素不接受padding，但是padding-top/bottom会越界进入其他元素中

## 设置宽高

width，height适用于block，inline-block

单位可以为%，px，em等

auto是浏览器默认的值。

```css
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}/*将所有元素的边框和内边距包裹在width/height中
```

不能为inline元素设置宽高

min-width min-height max-width max-height可以现在宽高的值。

## 内边距（padding）

* 一个值，设置上下左右
* 两个值： 前一个表示上下，后一个表示左右
* 三个值：第一个为上，第二个为左右，第三个为下
* 四个值：上 右 下 左

## 边框（border）

* border-style：边框风格 none，dotted（点线），dashed（虚线），solid（实线），double（双线），groove（槽线），ridge（脊线），inset（凹边），outset（凸边）。
* border-width：宽度
* border-color：颜色
* border-image 边框图像

如果没有定义边框样式，那么边框不会显示出来，默认none。



## 外边距（margin）

margin如果为auto，那么它依赖于width的值

两个相互接触的margin会重合为一个。

外边距不会继承

**如果内外边距使用了em，那么它们相对的是元素的字体大小，而不是父元素的字体大小**

## 浮动（float）

* left
* right
* none

如果一个图片的下面有一段文字，而文字没有设置宽，当图片设置`float:left`时，文字会显示在图片周围，

## 清除浮动

`clear: both/left/right`

浮动的元素会相对于父元素进行浮动，但是她不会占用父元素的高，使用clear：both后将会清除这个元素的浮动效果，使其在下一行进行显示。

为父元素添加清理浮动，使其子元素的浮动后不会越界

```css
.clearfix::befor,
.clearfix::after{
  content: " ";
  display: table;
}
.clearfix::after{
  clear: both
}
.clearfix{
  *zoom: 1;
}
```

浮动元素的display会自动的变为block，包括inline元素也会变为block。

## 相对定位

每个元素都有一个自然定位，相对定位只改变当前元素相对于自然定位的位置，不会改变其他任何元素的位置。会在原先的位置留下空白。

```css
.example{
  position: relative;
  top; 30px;
  left: 90px;
}
```

left 和top可以为负数。

位置有四个值：

* left
* top
* right
* bottom

**对于相对定位，绝对定位，固定定位的重叠元素可以使用z-index来设置显示元素。

`position: static` 是元素的默认值，可以覆盖relative。



## 绝对定位

绝对定位相对于body或者他的祖先中最接近它的一个已经进行定位（相对定位或者绝对定位）的元素进行相对的定位。

绝对定位于相对定位不同，不会在自然定位的位置上留下空白，其他元素感知不到他的存在。

`position: absolute;` 

如果不设置top，left等值，那么元素还会在自然定位的位置上。

## 固定定位

`positon: fixed` 

元素相对于浏览器定位。



## 定位栈（z-index）



## 处理益处

`overflow: hidden`

* hidden 始终隐藏超出范围的元素
* scroll 始终显示滚动条
* auto 滚动条只在益处时显示



## 垂直对齐

浏览器默认的对齐方式为竖直方向上以文本的基线对齐。

`vertical-align: value`

* basiline: 以元素的基本线对齐父元素的基准线。
* middle： 使元素位于父元素中间。
* sub：使元素成为父元素的下标。
* super： 使元素成为父元素的上标
* text-top：使元素的顶部对齐父元素的顶部
* text-bottom：使元素的底部对齐父元素的底部。
* top：使元素对齐当前行里最高元素的顶部
* bottom：使元素对齐当前行最低的元素的底部。
* 输入元素行高的百分比
* 输入某个值（正／负，单位px，em）：按照特定的值向上向下位移

vertical-align应该用于inline元素，不应该用于block元素。



## 鼠标指针

`cursor: value`

* pointer 手的样子
* default 默认
* crosshair 加号
* move 坐标符号
* wait 沙漏
* help 问号
* text 文字输入
* progress 鼠标指针加问号
* auto
* *x*-resize 双向箭头，x可以为n（北），nw（西北），e（东）等。