# 定义选择器

**选择器** 决定将格式引用到哪些区域

**声明** 决定如何显示元素

## 构造选择器

* 元素的类型或名称 class
* 元素的上下文 body p （body元素里面的p）
* 元素的id
* 元素的伪类或伪元素。
* 元素是否有某些属性或者值。

## 按名称选择元素

\*通配符匹配所有元素名称。

使用一组元素选择器时，因该使用逗号分隔开，不然会变成上下文选择器。

## 按类或者id选择

.class

\#id

h1.news只会影响class伪news的h1元素

尽量不要使用id选择器，id权重太大。

.aaa.bbb与.aaa .bbb不同，前者会选择包含aaa和bbb的所有元素，后者有空号，那么选择的是aaa所在元素中的bbb表示的元素。

## 按上下文选择元素

**祖先** 包含的 **后代** 不管相隔多少代，都会包含进去

`Body p{}` body元素为祖先 p为后代，不管p包含在任何元素中，只要在body中，那么久会匹配选择器中的声明。

`parent > p`只会选择parent元素或者其他的直接子元素p。

**相邻同胞选择符** `parent p+p` 这个选择器只会选择parent元素下的 p元素后跟随的p元素。

## 第一个或者最后一个子元素选择器

`:first-child` `:last-child` 

```css
li:first-child{
  color: red;
}
li:last-child{
  color: blue;
}
```

以上的选择器会选择li的父元素中的第一个li和最后一个li元素。

`.archit li:first-child` 对class为archit的元素中的第一个li选择。

## 选择元素的第一个字母和第一行

`:first-letter` `:first-line`

第一个字母前的符号会被一同包含在第一个字母中，ie8以下除外。

## 伪元素，伪类

在css中伪元素使用两个冒号链接`::first-line` `::first-letter` `::before` `::after`这四个元素作为css3中的伪元素。

伪类使用一个冒号声明。例如`:first-child`

## 按状态选择元素

* link 没有被激活状态

* visited 已经激活

* focus 焦点时，（键盘选择并准备激活)

* hover 鼠标进入元素时

* active 激活过后

  以上的定义顺序也是当发生冲突时的优先级顺序

`a{color: red}`会将a的所有状态的字体颜色变为红色

## 按属性或属性值选择

```css
p[class]{
  color:red
}/*选择所有具有class属性的值*／
```

值选择方式：

* `="value"` 等于value
* `~="value"` 包含value这个单词，value表示一个完整单词
* `|="value"` 以value-开头
* `^="value"` 以value开头
* `$="value"` 以value结尾
* `*="value"` 包含value一次或者多次，不强制要求是一个单词。

选择包含多个属性的元素`p[class][onclick]`



## 指定元素组

用逗号分隔每个元素，同时设置这些元素的样式