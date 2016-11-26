#网页的构造
>文本类容
>对其他文件的引用
>标记

##基本html页面
包含```<html><!doctype html><title></html><body>```
###网页的顶部和头部
doctype html title meta
###页面的主体：呈现在页面上可以观测的内容
包含在body中
##标签：元素、属性、值及其他
element,attribute,value
###元素
html5中空元素的结尾／可以省略，xhtml不能省略
按照惯例元素都是小写
###属性和值
包裹属性的双引号可以省略，但是通俗的规定不省略。
属性的顺序并不重要
###父元素和子元素
##网页的文本类容
`&copy;(表示©)`
`<meta charset="utf-8"/>`可以大大规划字符的统一性
##链接、图像和其他非文本数据
html5使用内置的audio/video替代了flash的播放
##文件名和文件夹名
应该遵循同一种命名方式，使其统一。
###文件名采用小写字母
###使用正确的扩展名
###用短横线分割单词
##URL
uniform resources locator 统一资源定位符
网络中的每个文件都有一个独立的唯一的URL
一段url：`http://www.baidu.com/todo/index.html`
被分为以下几部分
>模式 http
>主机名 www.baidu.com
>路径 todo/index.html （目录todo，文件名index.html）

如果一个url不以文件名结尾，而使用／结尾，那么会默认调用文件夹下的index.html或其他默认文件
###绝对URL
包含完整的模式，主机名，路径。一般在引用其他网站上的文件数据时使用。
###相对URL
####引用同级下文件
直接使用文件名
####引用子目录下文件
xxx/xxx.xxx
####引用上层目录下文件
../xxx.xxx
####根相对URL
/img/img.png




