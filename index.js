const compose = require("./lib/compose");
const depend = require("./lib/depend");
const doDev = require("./doDev");
// const doBuild = require("./doBuild");

/**
 * 组装节点配置
 * @param nodes
 * @return {*}
 */
const assemble = (nodes) => {
    if(!Array.isArray(nodes)){
        throw new Error("传入参数必须是数组");
    }

    return compose(...nodes)();
};

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
const babelReact = require("./pipe/babelReact");
const babelAntd = require("./pipe/babelAntd");

// plugins
const miniCssExtractPlugin = require("./pipe/miniCssExtractPlugin");
const provideReactPlugin = require("./pipe/provideReactPlugin");
const autoDllReactPlugin = require("./pipe/autoDllReactPlugin");
const webpackbarPlugin = require("./pipe/webpackbarPlugin");

module.exports = {
    assemble,               // 组装配置
    depend,                 // 对外暴露依赖
    doDev,                  // 执行dev server
    // doBuild,                // 执行打包
    pipe: {                 // 管道节点
        base,
        development,
        production,

        staticResource,
        css,
        scss,
        babelReact,
        babelAntd,

        miniCssExtractPlugin,
        provideReactPlugin,
        autoDllReactPlugin,
        webpackbarPlugin
    }
};
