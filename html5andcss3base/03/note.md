# 基本html结构
[TOC]
## 开始编写网页
每个page都有的元素DOCTYPE html head title body meta（文字说明符)
###编写网页步骤
`<!DOCTYPE html>`
`<html lang="language-code>` codeeg：en
`<head>`开始头部
`<meta charset="utf-8"/>` 确认网页的字符
`<title>` 确认标题
`</head>` 头部编写结束
`<body>` 主体开始

###网页的两个部分
head和body

## 创建页面标题`<title>`
要重视页面标题的作用seo中占比重很大
## 创建分级标题h1～6
###分级标题的重要性
如果标题中的字段与搜索引擎的关键字匹配程度很高，那么他的重要性会越大h1影响最大。
不要使用hn去标记副标题，标语，以及无法成为独立标题的子标题
##普通页面布局
> 带导航的页头
> 显示在主题内容区域的文章
> 显示次要信息的侧边栏
> 页脚

##创建页眉
header
一般包括网站标志，主导航栏，其他链接，或者再包含搜索栏。
`<header role="banner">` 显示的指出这个页眉为页面级的。
header除了作为页面顶级页眉外还能作为某一个区块的导航目录。
##标记导航nav
对重要的链接群进行标记。
nav不能嵌套在address中。
`<nav role="navigation">`
##页面的主体内容main
一个页面中仅仅使用一次。
`<main role="main">`
## 创建文章article
article 元素表示文档、页面、 应用或网站中一个独立的容器，原 则上是可独立分配或可再用的，就 像聚合内容中的各部分。它可以是 一篇论坛帖子、一篇杂志或报纸文 章、一篇博客条目、一则用户提交 的评论、一个交互式的小部件或小 工具，或者任何其他独立的内容项。
article可以互相嵌套，因为article可以表示一个小部件。

## 定义区块section
section 元素代表文档或应用的 一个一般的区块。在这里，section 是具有相似主题的一组内容，通常 包含一个标题。 
section 的例子包含章节、标签 式对话框中的各种标签页、论文中 带编号的区块。比如网站的主页可 以分成介绍、新闻条目、联系信息 等区块。 
##定义附注栏aside
`<aside role="complementary">`
## 定义页脚footer
当footer是body的直接子元素的时候，表示一个页面的页脚。
当footer在article或其他元素中时，表示附录，索引，版权，协议等。
`<footer role="contentinfo">`
##通用容器div
一般在需要为一个区块定义一些样式或者交互方式时，但是语义上无法使用之前的标签的时候使用。
## 使用ARIA改善可访问性
role 地标属性，可以为元素添加额外的标志，用于无障碍阅读
role的value的一些值：
* banner 横幅。用于header中
* navigation 导航。 与nav对应
* main 主体。 与main对应
* complementary 补充性内容。 与aside对应
* contentinfo 内容信息。 关于文档的一大块感知信息，一般用在页眉的footer上。

## 为内容指定类别和id
id／class
id页面必须唯一。
class可以有多个值。
推荐使用class添加样式
value通常使用短横线来连接多个单词。footer-bar

## 为元素添加title属性
与页面的title元素不同。元素的title属性为元素添加描述性信息。可以在内容无法正常呈现的时候提供辅助的提示信息。
无障碍阅读中。阅读器可以阅读title中的内容。
## 添加注释
`<!-- -->`
在元素开头活着结尾添加注释时一种好的编程习惯。

