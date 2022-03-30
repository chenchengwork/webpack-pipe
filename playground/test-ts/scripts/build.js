process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';
const { solution } = require("../../../index");
const { formatWebpackConf, webpackConfParams } = require("./mkWebpackConfig");

// 编译打包
solution.antSolution.build({
    buildOptions: {
        proxyPath: "/",
    },
    webpackConfParams,
    formatWebpackConf,
});

