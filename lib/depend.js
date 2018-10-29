const merge = require("webpack-merge");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const autoprefixer = require("autoprefixer");

const AutoDllPlugin = require("autodll-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const tool = require("./tool");

module.exports = {
    merge,
    webpack,
    webpackDevServer,
    autoprefixer,

    AutoDllPlugin,
    MiniCssExtractPlugin,

    tool
};
