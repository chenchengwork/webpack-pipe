const { merge } = require("../lib/depend");

module.exports = (config) => {
    return merge({
        entry: {},

        // 指定模块目录名称
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['node_modules'],
            alias: {},
        },

        output: {
            // 公网发布的目录
            publicPath: "auto",
            // 编译的目录
            path: "/tmp/webpackCompilerResult",
            filename: '[name].js',
            // chunkFilename: '[name].[chunkhash:8].bundle.js',
            chunkFilename: '[name].[contenthash].bundle.js',
        },

        cache: {
            type: 'filesystem', // 使用文件缓存
            name: `${process.env.NODE_ENV || 'development'}-cache` ,
            buildDependencies: {
                config: [ __filename ]
            },
        },

        module: {
            rules: [],
        },

        plugins: [],
    }, config || {})
};
