const clc = require("../lib/console-color");
const { doDev, doBuild, depend } = require("../exportMethod");

const mkWebpackConfig = require("./mkWebpackConfig");

const defaultWebpackConfParams = {
    isProdMode: false,
    isStartSkszBit: true,
    qiankun: {
        name: "",
        publicPath: null
    },
    isTargetEs5: true,
    isIntl: false,
    antTheme: {}
}

const getConfig = (webpackConfParams, formatWebpackConf, port) => {
    webpackConfParams = Object.assign(defaultWebpackConfParams, webpackConfParams);
    const { qiankun, isProdMode } = webpackConfParams;

    if(isProdMode){
        qiankun.publicPath = qiankun.publicPath || "/";
    }else {
        qiankun.publicPath = qiankun.publicPath || `//${depend.tool.getLocalIP()}:${port}/public/`;
    }

    let webpackConfig = mkWebpackConfig(webpackConfParams)
    if(formatWebpackConf){
        webpackConfig = formatWebpackConf(webpackConfig);
    }

    return webpackConfig;
}

exports.antSolution = {
    dev: ({port, host, isInlineHotLoad = true, devServerConfig, webpackConfParams = {}, formatWebpackConf}) => {
        if(!port) return clc.red("请传入端口号(port)...");
        webpackConfParams.isProdMode = false;

        doDev({
            webpackConfig: getConfig(webpackConfParams, formatWebpackConf, port),
            devServerConfig: Object.assign({
                open: true,
                historyApiFallback: {
                    index: '/',
                    disableDotRule: true,
                },
            }, devServerConfig || {}),
            host: host || "0.0.0.0",
            port,
            isInlineHotLoad: isInlineHotLoad,
        });
    },
    build: ({buildOptions, webpackConfParams = {}, formatWebpackConf}) => {
        webpackConfParams.isProdMode = true;
        let buildPath = depend.tool.resolveAppPath("dist");
        if(buildOptions){
            buildPath = buildOptions.buildPath || buildPath;
        }

        doBuild(
            getConfig(webpackConfParams, formatWebpackConf),
            Object.assign({
                proxyPath: "/",
                buildPath,
                isCreateIndexHtml: true,
                buildStart: async () => {
                    await depend.tool.delDir(buildPath);
                },
                buildFinished: async () => {
                    // await tool.copyDir(path.resolve(__dirname, "buildTpl"), buildPath);
                },
            }, buildOptions || {})
        );
    }
}