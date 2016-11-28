# 链接

[TOC]

分为目标和标签两种

## 创建指向另一个地址的链接

`<a href="page.html">page</a>`

rel属性表示当前页面与href中的链接的关系，external表示外链的链接。

title属性表解释性文字。

## 块级链接

html5中a链接中的标签部分可以为几乎任意的html标签，当为一个p标签时，a链接将以块的形式显示。

如果想添加背景，边框，内外边距，那么在css中应该`display: block`这样的形式将a变为一个块元素。

*target属性应该少用，应该由用户自己决定打开方式*

## 创建锚并链接到锚

id属性可以声明一个锚点

`<a href="#main">main</>`跳转到id为main的锚上。

如果锚点位于另外一个文档，那么`<a href="page.html#main">`这样的方式。

## 创建其他类型的链接

* rss
* 图像
* 下载文件
* 电子邮件地址 href="maillto:xxxx@xxx.xxx"
* 电话号码 href="tel:+18000000000"
* …...

