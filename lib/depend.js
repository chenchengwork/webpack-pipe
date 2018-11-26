module.exports = {
    merge: require("webpack-merge"),
    webpack: require("webpack"),
    webpackDevServer: require("webpack-dev-server"),
    autoprefixer: require("autoprefixer"),

    AutoDllPlugin: require("autodll-webpack-plugin"),
    MiniCssExtractPlugin: require('mini-css-extract-plugin'),

    formatStyleLoader: require("./formatStyleLoader"),

    tool: require("./tool")
};
