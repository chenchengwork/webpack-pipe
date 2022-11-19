# webpack-pipe

webpack开发和打包管道

## Change Log
v3.0.0
```
1. 去掉国际化相关的依赖包
npm uninstall babel-plugin-react-intl-auto babel-plugin-react-intl-extractor  --legacy-peer-deps

移除optimize-css-assets-webpack-plugin，用css-minimizer-webpack-plugin代替, 解决optimize-css-assets-webpack-plugin不依赖宇webpack5的问题

2. 去掉core-js
npm uninstall core-js

3. 移除less
npm uninstall less less-loader

4. 移除svg-sprite-loader
npm uninstall svg-sprite-loader
rm -rf pipe/svgSpriteLoader.js

5. 移除babel-plugin-import, v5版本的antd不再需要该组件
npm uninstall babel-plugin-import
rm -rf pipe/babelAntd.js pipe/babelAntdMobile.js

6. 移除qiankun
rm -rf pipe/extra

```
v1.0.20
```
1. 升级开发依赖包
2. doDev方法中参数中添加isInlineHotLoad参数
3. 添加内置pipe styledJsx，可以支持styled-jsx
4. 添加pipeExtra,主要是添加的一些建议配置
    (1). pipeExtra.styledJsx
    (2). pipeExtra.qiankun
```

v1.0.19
```
1. 升级开发依赖包
2. fixed ant-mobile less文件编译失败的问题
```

v1.0.18
```
1. 升级开发依赖包
2. fixed antd4 less文件编译失败的问题
```