# 为文本添加样式

[TOC]

## 选择字体系列

`font-family: name`

包含多个单词的字体因该用引号。

字体名可以全为小写

select，textarea，inport不会继承父元素中的字体定义。可以使用`select, textarea, inport{font-family:inherit};`显示的继承。

## 指定替换字体

**字体栈** font stack 一般包含三种字体，当第一个字体在系统中没有找到时使用下一个字体。

## 斜体

`font-style: name`

name包含italic（斜体），oblique（倾斜斜体）normal（取消斜体）。

## 粗体

`font-weight: name`

name中可选100～900数字，400正常粗细，700盒bold同样。可以直接设置bold为伪粗体。

## 字体大小

font-size

rem单位 同em但是它相对于根元素变化大小，root em。

em为父元素的多少倍。%类似。

px为像素大小。

预定义值：xx-small, x-small, small, medium, large, x-large, xx-large

## 行高

line-height: num

行高的值为数字，表示字体的大小的多少倍，无单位

或者使用%比

## font

font可以直接设置字体样式、粗细、变体、大小、行高和字体系列

```css 
font: [normal/italic/oblique] [normal/bold/bolder/lighter/100] [normal/small-caps] [字体大小] [/line-height] [字体系列];
```

必须声明字体大小和系列，大小在前

如果有行高，那么必须跟随字体大小，并且前面加／

## 颜色

color: name;

## 设置背景

### 修改文本的背景颜色

`background-color: transparent/color `

transparent 表示允许透过父元素的背景颜色。

color表示背景颜色值。

### 设置背景图像

`background-image:url(omg.png)／none` none表示不使用

### 设置背景重复

`background-repeat:direction`

direction可以有四个值，repeat，repeat-x，repeat-y，no-repeat 

默认为repeat

## 设置背景图像是否滚动

`background-attachment`

可选值友fixed／scroll 

fixed为固定

scroll为滚动，是默认值。

### 设置背景位置

`background-position: x y;`

xy可以为npx，相对左上角位置。

x的预定义值有left，center，right

y的预定义值有top，center，bottom

## 设置字和字母间距

`word-spacing` `letter-spacing`

值为em或者px，如果是em，那么将继承使用父元素字体大小的em倍。

两个声明会被子元素基础。

normal或0可以取消设置。

## 设置缩进

`text-indent` 设置段落第一行前缩进的距离。

默认对em，strong，cite元素无效果，但是当display为block或者inline-block是就会产生效果。

## 对齐文本

`text-align`

值为left，center，right

## 修改文本大小写

`text-transform`

* capitalize: 每个单词首字母大写。
* uppercase 每个字母大写
* lowercase 每个字母小写
* none 保持本地样式

## 使用小型大小字母

`font-variant`  将大些字母的大小变为和小写字母一样

* nome 原样输出
* small-caps 小型大写

## 装饰文本

`text-decoration` 添加下划线等等

* underline 下划线
* overline 上划线
* line-through 删除线
* none

## 设置空白属性

浏览器默认会讲空格去掉

`white-space`  可以规定如何处理空格

* pre 保留所有显示
* nowrap 保留空格，但是不会换行
* none 浏览器原本样式

