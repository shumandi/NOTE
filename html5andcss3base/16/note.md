# 表单

输入和元素

| 输入或者元素  | type值                                    |
| ------- | ---------------------------------------- |
| 电子邮件    | email                                    |
| 搜索框     | search                                   |
| 电话框     | tel                                      |
| url框    | url                                      |
| 日期      | date                                     |
| 数字      | number                                   |
| 范围      | range                                    |
| 数据列表    | `<input type='text' name='favfruit' list='fruit'/><datalist id='fruit'><opthon>Grapes</option></datalist>` |
| 颜色      | color                                    |
| 全局日期和时间 | datetime                                 |
| 局部日期和时间 | datetime-local                           |
| 月       | month                                    |
| 时间      | time                                     |
| 周       | week                                     |
| 输出      | `<output></output>`                      |

属性

| 属性             | 总结                                       |
| -------------- | ---------------------------------------- |
| accept         | 限制用户可上传文件类型                              |
| autocomplete   | 如果form属性`autocomplete="off"`，就会关闭浏览器对表单的自动填写 |
| atutofocus     | 页面加载后自动焦点元素                              |
| multiple       | 允许输入多个值                                  |
| list           | 将datalist与input联系起来                      |
| maxlength      | textarea最大字符数                            |
| pattern        | 正则验证                                     |
| placeholder    | 提示文本                                     |
| required       | 必须填写字段                                   |
| formnovalidate | 关闭html5自动验证功能，用于提交按钮                     |
| novalidate     | 关闭验证，用于表单元素                              |

## form元素

属性

* action 地址
* method post／get等方式
* novalidate 关闭验证

## 表单元素组织

`<fieldset><legend>Some</legend>more</fieldset>`

将一类元素归为一组，legend表示主的标签，可以用h1～6代替。

## label

label元素中的for与输入元素中的id匹配，当点击label时焦点会自动进入匹配的元素中。

## 单选按钮radio

name相同，value不同

checked属性设置默认选择状态

## 复选框checkbox

name相同 value不同

## 文本区域`<textrea>`

cols行 row列

css中resize:none后用户无法修改大小。

## 选择框`<select>`

option元素为一个选项，

optgroup为分组。

## 文件上传

form属性中`enctype='multipart/form-data'` 可以确保正确的上传格式。

`<input type="file" id="picture" name="picture"/>`

## 隐藏字段

`<input type="hidden" name='step' value='6'/>`

可以用来保存用户的输入。

## 提交按钮submit

不带图片的按钮`<input type="submit" value="submit"/>`

带图 type为imge 属性中有src

带图和文字的按钮

```html
<button type='submit' class='btn'>
  <img src='check.png' width='4em' height="2em" alt=""/>
  Creat Profile
</button>
```

## 禁用表单元素

disabled属性

## 表单元素状态

| 选择器       | 应用             |
| --------- | -------------- |
| :focus    | 获取焦点的字段        |
| :checked  | 选中的单复选框        |
| :disabled | 禁用的元素          |
| :enable   | 启用元素           |
| :required | 必填字段           |
| :optional | 随意字段           |
| :invalid  | pattern验证不通过元素 |
| :valid    | 验证通过元素。        |

