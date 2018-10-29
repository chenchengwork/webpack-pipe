const { merge } = require("../lib/depend");

module.exports = (config) => {
    return merge({
        // 用于生成源代码的mapping
        optimization: {
            // 代码分割策略配置
            splitChunks: {
                cacheGroups: {}
            },
        },

        entry: {},

        // 指定模块目录名称
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['node_modules'],
            // alias: {}
        },

        node: {
            net: "empty",
            fs: "empty",
        },

        output: {
            // 公网发布的目录
            publicPath: null,
            // 编译的目录
            path: null,
            filename: '[name].js',
            chunkFilename: '[name].[chunkhash:8].bundle.js',
        },

        module: {
            rules: [],
        },

        plugins: []
    }, config || {})
};
