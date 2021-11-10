const compose = require("./lib/compose");
const depend = require("./lib/depend");
const doDev = require("./doDev");
const doBuild = require("./doBuild");
const tool = require('./lib/tool');

/*
 管道节点
*/
const base = require("./pipe/base");
const development = require("./pipe/development");
const production = require("./pipe/production");

// loaders
const staticResource = require("./pipe/staticResource");
const css = require("./pipe/css");
const scss = require("./pipe/scss");
const styledJsx = require("./pipe/styledJsx");
const babelAntd = require("./pipe/babelAntd");
const babelAntdMobile = require("./pipe/babelAntdMobile");
const babelTsReact = require("./pipe/babelTsReact");
const svgSpriteLoaderFn = require("./pipe/svgSpriteLoader");

// plugins
const miniCssExtractPlugin = require("./pipe/miniCssExtractPlugin");
const provideReactPlugin = require("./pipe/provideReactPlugin");
const webpackbarPlugin = require("./pipe/webpackbarPlugin");
const tsChecker = require("./pipe/tsChecker");

module.exports = {
    assemble: (nodes) => {
        if(!Array.isArray(nodes)){
            throw new Error("传入参数必须是数组");
        }
        return compose(...nodes)();
    },               // 组装配置
    depend,                 // 对外暴露依赖
    doDev,                  // 执行dev server
    doBuild,                // 执行打包
    tool,                   // 工具包
    pipe: {                 // 管道节点
        base,
        development,
        production,

        staticResource,
        css,
        scss,
        styledJsx,
        svgSpriteLoaderFn,

        babelAntd,
        babelTsReact,
        babelAntdMobile,

        tsChecker,
        miniCssExtractPlugin,
        provideReactPlugin,
        webpackbarPlugin
    },
    pipeExtra: require("./pipe/extra"),
};
