module.exports = {
    // 设置全局webpack-pipe全局变量
    setWebpackPipeGlobal: (params = {}) => {
        global.webpackPipe = {
            isWebpackHRM: false,
            ...params
        };
    },
    // 第三方依赖
    merge: require("webpack-merge"),
    webpack: require("webpack"),
    webpackDevServer: require("webpack-dev-server"),
    autoprefixer: require("autoprefixer"),
    MiniCssExtractPlugin: require('mini-css-extract-plugin'),
    TerserWebpackPlugin: require("terser-webpack-plugin"),
    CssMinimizerPlugin: require("css-minimizer-webpack-plugin"),

    // 自定义依赖
    formatStyleLoader: require("./formatStyleLoader"),
    tool: require("./tool")
};
