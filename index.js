const compose = require("./lib/compose");
const depend = require("./lib/depend");
const doDev = require("./doDev");
const doBuild = require("./doBuild");
const tool = require('./lib/tool');

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

// /**
//  * 重写管道节点配置
//  * @param pipeNodeFn
//  * @param rewriteConf
//  * @param rewriteMethod 值包括： "deepMerge" | "shallowMerge" | "replace"
//  * @return {function(*=): *}
//  */
// const rewriteNode = (pipeNodeFn, rewriteConf, rewriteMethod = "deepMerge") => {
//     rewriteConf = typeof rewriteConf === "undefined" ? {} : rewriteConf;
//
//     switch (rewriteMethod) {
//         case "deepMerge":
//             return (config) => depend.merge(depend.merge(pipeNodeFn(), rewriteConf), config);
//         case "shallowMerge":
//             return (config) => depend.merge(Object.assign(pipeNodeFn(), rewriteConf), config);
//         case "replace":
//             return (config) => depend.merge(rewriteConf, config);
//         default:
//             throw new Error(`rewriteMethod -> ${rewriteMethod} no found`)
//     }
// };

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
const babelAntdMobile = require("./pipe/babelAntdMobile");
const babelTsReact = require("./pipe/babelTsReact");

// plugins
const miniCssExtractPlugin = require("./pipe/miniCssExtractPlugin");
const provideReactPlugin = require("./pipe/provideReactPlugin");
const autoDllReactPlugin = require("./pipe/autoDllReactPlugin");
const webpackbarPlugin = require("./pipe/webpackbarPlugin");

module.exports = {
    assemble,               // 组装配置
    // rewriteNode,            // 重写管道节点配置
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
        babelReact,
        babelAntd,
        babelTsReact,
        babelAntdMobile,

        miniCssExtractPlugin,
        provideReactPlugin,
        autoDllReactPlugin,
        webpackbarPlugin
    }
};
