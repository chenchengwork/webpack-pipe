# webpack-pipe

webpack开发和打包管道

## Change Log
v3.0.0
```
1. 去掉国际化相关的依赖包
    babel-plugin-react-intl-auto
    babel-plugin-react-intl-extractor
    less 
    less-loader
    svg-sprite-loader
    babel-plugin-import
    core-js

2. 删除pipe组件
    rm -rf pipe/extra
    rm -rf pipe/svgSpriteLoader.js
    rm -rf pipe/babelAntd.js pipe/babelAntdMobile.js

3. 替换css优化依赖组件
    移除optimize-css-assets-webpack-plugin，用css-minimizer-webpack-plugin代替, 解决optimize-css-assets-webpack-plugin不依赖宇webpack5的问题

4. solution/mkWebpackConfig.js中内容变更
    (1). webpackConfParams参数中移除字段: antTheme,qiankun,antd
    (2). pipe.styledJsx在solution默认被移除，
    (3). 如果需要使用styled-jsx语法，需要安装依赖styled-jsx styled-jsx-plugin-sass，并在webpackConfParams中传入组件pipe.styledJsx
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