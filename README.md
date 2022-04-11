# rpx2vmin

将需要转译的 `.wxss` 文件复制粘贴到 `input` 文件下，在项目目录下执行 `npm run rpx2vmin` ，会在 `ouput` 目录下生成对应的文件名称，需要提前安装 [nodejs](http://nodejs.cn/)。

主要处理的如下：

```css
font-size: 12rpx;
height: 60rpx;
padding: 12rpx 16rpx;
border-left: 2rpx dashed #5DA5FF;

width: calc(100vw - 50rpx - 80rpx);
```

转移为

```css
font-size: calc(12vmin / 7.5);
height: calc(60vmin / 7.5);
padding: calc(12vmin / 7.5) calc(16vmin / 7.5);
border-left: calc(2vmin / 7.5) dashed #5DA5FF;

width: calc(100vw - 50vmin / 7.5 - 80vmin / 7.5);
```
