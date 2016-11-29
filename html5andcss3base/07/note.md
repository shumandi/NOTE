# css构造块`<link rel="stylesheet" href="style.css">`

[TOC]

## 构造样式规则

## 为样式规则添加注释

`/****/`

## 继承

如果子元素中没有定义特殊的样式，那么它会继承父元素中的某些样式。

会继承的样式：

	1. 文本
     * color (a元素除外)
     * direction 方向
     * font
     * font-family 字体系列
     * font-size 字体大小
     * font-style 设置斜体
     * font-variant 设置小型大写字体
     * font-weight 粗体
     * letter-spacing 字母间距
     * line-height 行高
     * text-align 字体对其方式
     * text-indent 首行缩进
     * text-transform 大小写转换
     * visibility 可见性
     * white-space 如何处理空格
     * word-spacing 词间距
	2. 列表
     * list-style 列表样式
     * list-style-image 制定列表标记
     * list-style-position 指定标记位置
     * list-style-type 指定标记的类型
	3. 表格
     * border-collapse 用于控制相邻的两个边框是否合并
     * border-spacing 用于控制边框之间距离大小
     * caption-side 表头位置
     * empty-cells 是否显示表格中的空单元格
	4. 页面设置 （用于印刷物）
     * orphans 用于设置当前元素内部发生分页时在底部保留行数
     * page-break-inside 设置元素内部分页模式
     * widows 设置元素发生分页时顶部保留行数
	5. 其他
     * cursor 鼠标指针
     * quotes 引号样式



## 层叠：当规则发生冲突时

推荐使用外部样式表

内连：在元素style属性中设置样式

外部引用文件可以出现在page任意位置，但推荐倒入到head中。

### 特殊性

选择器越特殊，规则就越强，在选择时就越会优先考虑。

id>class>element

### 顺序

当特殊性无法区分时，在后面出现的选择器会有更加强的规则。

### 重要性

当以上两种都无法确定时使用!important 来声明这条属性的重要性

```css
p{
  color:red !important
}
```

### 小结

不管样式出现在任何地方，他们首先比较的时重要性，当无法区分的时候才使用顺序方式来判定。内连为最高规则。但是important可以打破这一条规则。

## 属性的值

虽然属性能接受的值的类型各不相同，但是有一些比较特殊的值类型。

### inherit

这个值用来继承父元素的属性的值`color: inherit;`，这样元素久继承了父元素的color属性。

### 预定义的值

例如left，right，none这些值都不需要用双引号修饰。

但是大多数的值都不需要用双引号包裹起来。

### 长度和百分数

长度单位为px，百分数使用%

em单位的大小由元素内的字体的大小决定nem表示字体的n倍。

0一般不带单位。

### 纯数字

只有极少数属性接受纯数字：line-height，z-index，opacity等。

### URL

`background: url(bg.png);`

### css颜色

`rgb(89,9,123)`

`rgb(12%,24%,8%)`

`#ffffff`

如果颜色由三对重复值出现`#f73` === `#ff7733`

以上都表示rgb颜色值

其他颜色：

* RGBA `rgba(33,55,66,0.12)` 最后一位表示透明度
* HSL 色相hue，饱和度saturation， 亮度lightness。hue取值范围0～360，饱和度取值范围为0～100%。`property: hsl(hue, saturation, lightness)`  `color: hsl(33,45%,56%)`
* HSLA `property: hsla(hue, saturation, lightness, alpha transparency)`