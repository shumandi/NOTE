# 构建响应式网站

## 概述

### 响应式网站的组成

* 灵活的图像和媒体
* 灵活的、基于网格的布局（流式布局）：所有的width都用%设置，其他水平单位通常使用em。
* 媒体查询：可以根据媒体特征对设计进行调整。

## 创建可伸缩图像

步骤：

1. img标签省略width和height属性。
2. 在css中为每个图片应用`max-width: 100%`

width：100%可能使图片拉伸。

`background-size`可以对背景图片进行缩放。

可以使用`video, embed, object{ max-width: 100%}` 对其他媒体进行伸缩。

## 创建弹性布局网格

对于每一个元素，确定好它相对于父元素所需要的width的百分比。

对于root元素，使用max-width：960px 使它可以随不同屏幕改变而改变。

```css
.page{
  max-width: 960px;
}
.main{
  width: 62.5%;
}
.sidebar{
  width: 31.25%
}
```

Max-width: 60em 可以达到相同的效果。

## 媒体查询

媒体查询可用的设置：

* width 宽度
* height 高度
* device-width 设备宽度
* device-height 设备高度
* orientation 方向
* aspect-ratio 高宽比
* device-aspect-ratio 设备高宽比
* color 颜色
* color-index 颜色数
* monochrome 单色
* resolution 分辨率
* scan 扫描
* grid 栅格

除了orientation，scan，grid外都有min和max前缀。

两种声明媒体查询方式：

```html
<link rel='stylesheet' media='logic type and (feature: value)' href='your-stylesheet.css' />
```

```css
@media logic type and (feature: value){};
```

* *logic*: 可选值为noly或not only确保久浏览器不读取余下媒体查询，not表否定，例如`not screen`表示处screen意外设备应用这个样式表。
* *type* : 媒体类型，例如screen，print。
* *feature：value*：可选，可使用多个，但每个必须单独的存在于（）中，且必需出现在and之后。

```css
#media not print and (min-width: 480px) and (max-width: 767px){}
```

**媒体查询中使用em，相对的，在所有响应式设计中尽量不使用px这样的绝对单位。** 

## 理解视觉区域和视觉区域的meta元素

width表示视觉区域（viewport）的宽度，也就是浏览器的宽度。

device-width是设备的屏幕宽度。

而在iphone中视觉区域被设置成为980px，所以不能直接使用width来判断屏幕。

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

这段代码可以减小误差。