/**
 * 打包编译
 */
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';
const path = require('path');
const mkWebpackConfig = require("./mkWebpackConfig");
const { doBuild, pipe, pipeExtra,tool } = require("../../../index");
const buildPath = path.resolve(__dirname, "../build");

const webpackConfig = pipeExtra.qiankun(
    mkWebpackConfig([pipe.production]),
    require("../package.json").name,
    "/"
);

doBuild(webpackConfig, {
    proxyPath: "/",
    buildPath: buildPath,
    isCreateIndexHtml: true,
    buildStart: async () => {
        await tool.delDir(buildPath);
    },
    buildFinished: async () => {
        // await tool.copyDir(path.resolve(__dirname, "buildTpl"), buildPath);
    },
});

