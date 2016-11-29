# 操作表达式

## 外部样式表

@import可以在css文件中引用其他文件

`<link ref="stylesheet" href="main.css"/>`

一个页面中如果出现多个link那么当发生声明冲突的时候，后面加载的将覆盖前面。

media可以现在在不同显示设备上的输出。

## 嵌入样式表

在head元素中使用style元素包裹声明。

当style出现在link后时才会覆盖前面的link。

## 内联样式

在元素中使用style属性定义的样式。

内联样式优先级最高，除了!important

## 样式的层叠顺序

* link和style元素按先后顺序决定覆盖。
* 内联样式优先级最高
* !important优先级最高 在任何时候

## 使用与媒体相关的样式

1. 在link和style元素中使用属性media=“output”来规定在哪些设备上使用当前样式，output值可以为print, screen, all, aural, braille, handheld, projection, tty, tv

2. 可以在样式表中使用@media，达到同样的效果。

   ```css
   @media print{
     body{
       color:red;
     }
   }
   ```

   ​

