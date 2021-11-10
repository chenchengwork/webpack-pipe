/**
 * 支持typescript 语法检查器
 * @param config
 * @returns {*}
 */
module.exports = (config) => {
    const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
    config.plugins.push(new ForkTsCheckerWebpackPlugin({
        // async 为 false，同步的将错误信息反馈给 webpack，如果报错了，webpack 就会编译失败
        // async 默认为 true，异步的将错误信息反馈给 webpack，如果报错了，不影响 webpack 的编译
        async: true,
    }))

    return config;
};