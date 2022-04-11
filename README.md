# rpx2vmin

将需要转译的 `.wxss` 文件复制粘贴到 `input` 文件下，在项目目录下执行如下命令行 ，会在 `ouput` 目录下生成对应的文件名称，需要提前安装 [nodejs](http://nodejs.cn/)。

```sh
# 安装依赖
npm install

# 将 rpx 转译为 vmin
npm run rpx2vmin

# 将 px 转译为 vmin
npm run px2vmin
```

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

或者是：

```css
font-size: 12px;
height: 60px;
padding: 12px 16px;
border-left: 2px dashed #5DA5FF;

width: calc(100vw - 50px - 80px);
```

转移为

```css
font-size: calc(12vmin / 7.5);
height: calc(60vmin / 7.5);
padding: calc(12vmin / 7.5) calc(16vmin / 7.5);
border-left: calc(2vmin / 7.5) dashed #5DA5FF;

width: calc(100vw - 50vmin / 7.5 - 80vmin / 7.5);
```
