/**
 * 打包编译
 */
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';
const path = require("path");
const mkWebpackConfig = require("./mkWebpackConfig");
const { doBuild, pipe, tool } = require("../../../index");

const buildPath = path.resolve(__dirname, "../build");
doBuild(mkWebpackConfig([pipe.production, pipe.autoDllReactPlugin]),{
    buildPath: buildPath,
    isCreateIndexHtml: false,
    buildStart: async () => {
        await tool.delDir(buildPath);
    },
    buildFinished: async () => {
        await tool.copyDir(path.resolve(__dirname, "buildTpl/config"), buildPath);
        await tool.copyFileToDir(path.resolve(__dirname, "buildTpl/index.html"), buildPath, "index.html");
    },
});

