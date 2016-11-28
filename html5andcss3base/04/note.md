# 文本

[TOC]

## 添加段落

html会自动忽略文本编辑器中输入的回车和其他空格字符。

开始一个新段落的时候使用p开始

p有默认的外边距

## 指定细则small

small表示细则一类的旁注（side commemt）。

通常包括免责声明，注意事项，法律限制，版权信息。

small一般不包含其他的元素，只是一小段文本。

## 标记重要和强调strong／em

strong表示内容的重要性。

em表示强调的一段文本，数据。

不要用i和b替代strong和em。

b表示提示读者关注的文字，不代表任何的重要性，变现为粗体。

i表示与不同于其他文字的文字，变现为斜体。

## 创建图figure

此图非彼图。类似于书本中的图例，图片或者视频，等等数据的下方或者上方有一段文字描述的区域。

figure中figcaption元素中表示描述信息。

figcaption不能单独存在，必须包含在figure中。

## 指明引用或参考cite

cite用来引述引用的位置，比如书本的名称，电影的电影名等，不描述具体的数据。

## 引述文本blockquote／q

blockquote表示一段完整的，独立的引述。

q表示一段嵌入其他文本的一段简短的引述。

元素属性cite="url" 可以表示文本的来源。

属性lang='xx' 表示语言。

## 指定时间time

time元素innerhtml中的数据时一个时间。

time元素属性datetime=“xxxx-xx-xxTxx:xx:xx"是为机器阅读准备的数据。

## 解释缩写词abbr

abbr表示缩写

abbr属性中title中的value表示完整的定义。

## 定义术语dfn

dfn表示在文中第一次出现的专用术语。

## 创建上标和下标sub／sup

sub下标。sup上标。

sub／sup会轻微增大行高。使用下面代码可以解决

```css
sub,
sup {
font-size: 75%; line-height: 0; position: relative; vertical-align: baseline;
} 
sup {
top: -0.5em; 
}
sub {
bottom: -0.25em;
}
```

## 添加作者联系信息address

address不只是单单表示通讯地址，他表示的是于本页面或者文章内容有关的作者，相关人士或者组织的联系方式。

## 标记编辑和不再关注的内容

ins表示新添加的内容。

del表示删除的内容。

s元素表示不再准确或者不再相关的内容。

## 标记代码code

code中如果要使用\<或者\>可以使用&lt和*gt，不能使用html标记符号。

不常使用的标记元素kbd（用户输入指示），samp（程序或者系统的输出内容），var（变量或者占位符）。

## 使用预格式化文本pre

pre会保留回车或者空格等输入的显示。

eg：

```html
<pre>
	<code>
				first line
		some code
	</code>
</pre>
```

## 突出显示文本mark

类似于在书本上用荧光笔涂抹的位置。默认黄色背景。

## 创建换行br

br元素中无其他元素。空元素。

## 创建span

与div相似，无任何语义，span是行内元素，div是块元素。

## 其他元素

### u元素

为文本添加一块非文本的注解。

### wbr

表示在一个较长的段落中的一个可以换行的地方。

空元素

### ruby，rp和rt元素

表示旁注，例如中文的拼音，日文的假名

```html
<ruby>
  base<rp>(</rp><rt>ruby chars</rt><rp>)</rp> 
  base<rp>(</rp><rt>ruby chars</rt><rp>)</rp> 
</ruby>
<ruby>
  北 <rp>(</rp><rt>ㄅㄟˇ</rt><rp>)</rp> 
  京 <rp>(</rp><rt>ㄐㄧㄥ</rt><rp>)</rp>
</ruby>
```

### bdi和bdo元素

表示文字的显示方向，从左往右，从右往左。

`<html dir="rtl" lang="he">`这里dir显示的制定文字的显示方向。

### meter元素

表示分数值或者进度，30%，20G等

```html
<p>Project completion status: <meter
value="0.80">80% completed</meter> ➝ </p>
<p>Car brake pad wear: <meter low= ➝"0.25" high="0.75" optimum="0"
                              value="0.21">21% worn</meter></p>
<p>Miles walked during half-marathon:<meter min="0" max="13.1" value="5.5" ➝ title="Miles">4.5</meter></p>
```



Low,high,optimum 表示低高中的最佳选项， value表示当前值，min，max最大最小值。

### progress元素

表示完成进度

```html
<p>Current progress: <progress max="100" value="0">0% saved ➝ </progress></p>
```



