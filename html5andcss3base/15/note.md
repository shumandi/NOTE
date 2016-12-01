# 列表

**有序列表** ol，li

**无序列表** ul，li

**描述列表** dl，dt，dd



列表ol属性：

* start
* type
* reversed

li属性：

* value

## css

list-style-type：标记类型

* disc 圆点 （默认）
* circle 圆圈
* square 方块
* decimal 数字
* upper-alpha 大写字母
* lower-alpha 小写字母
* lower-roman 罗马数字
* none 无

使用定制列表

1. list-style-type：none
2. margin-left，padding-left设置为0，
3. background-img导入图片
4. 调整重叠位置。

第二种方法：设置list-style-imge属性

*当ol属性种的dir=‘rlt’时li的显示方向反转，这时就要设置边距的right属性。*

`outline: 1px solid blue`设置轮廓，描绘边框外围，不占用空间。

## 标记位置

`list-style-position: inside` 浏览器默认的样式是标记占用一列位置，设置为inside后之占用第一行的位置。默认值为outside。

下拉导航：

```css
.nav .subnav{
  left: -999em;
  position: absolute;
  z-index:1000;
}
.nav li:hover .subnav{
  left: auto;
}
```

