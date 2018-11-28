module.exports = {
    // 第三方依赖
    merge: require("webpack-merge"),
    webpack: require("webpack"),
    webpackDevServer: require("webpack-dev-server"),
    autoprefixer: require("autoprefixer"),
    AutoDllPlugin: require("autodll-webpack-plugin"),
    MiniCssExtractPlugin: require('mini-css-extract-plugin'),
    UglifyJsPlugin: require("uglifyjs-webpack-plugin"),
    OptimizeCSSAssetsPlugin: require("optimize-css-assets-webpack-plugin"),

    // 自定义依赖
    formatStyleLoader: require("./formatStyleLoader"),
    tool: require("./tool")
};
