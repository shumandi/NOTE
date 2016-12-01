# 视频、音频和其他媒体

`<video><audio>`

属性：

| 属性       | 描述                                       |
| -------- | ---------------------------------------- |
| src      | 源                                        |
| autoplay | 自动播放                                     |
| controls | 控件                                       |
| muted    | 静音                                       |
| loop     | 循环                                       |
| poster   | 海报（url地址）                                |
| width    | 宽                                        |
| height   | 高                                        |
| preload  | 预加载none表示不加载任何视频,netadata表示加载元数据，auto浏览器自动 |

`<source>` 媒体源信息，当video或者audio包含source元素时就不指定src元素

属性：

| 名称    | 描述                                       |
| ----- | ---------------------------------------- |
| src   | 源                                        |
| type  | 媒体类型：video/mp4，video/webm，video/ogg，audio/mp3 |
| media | 为来源指定css查询                               |