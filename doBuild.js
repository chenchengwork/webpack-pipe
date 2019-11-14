/**
 * 打包编译
 */

/**
 * 全局配置
 * @type {{proxyPath: string, publicName: string, buildPath: *}}
 */
let G = {
    proxyPath: process.argv[3] ? process.argv[3] : '/',  // 代理的前缀 注意：后面必须带斜线
    publicName: 'static',                                // 公网路径名称
    buildPath: process.argv[2],                          // 编译结果目录
};

const fs = require('fs');
const path = require('path');
const os = require('os');
const clc = require("./lib/console-color");
const webpack = require('webpack');
const Tool = require('./lib/tool');

/**
 * 错误处理方法
 * @param errorMsg
 */
const handleError = (errorMsg) => {
    clc.yellow('错误:');
    clc.red(errorMsg);

    process.exit(0);
};

/**
 * 告警处理方法
 * @param warnMsg
 */
const handleWarn = (warnMsg) => {
    clc.yellow('警告:');
    clc.yellow(warnMsg);
};

/**
 * 格式化webpack配置
 * @param webpackConf
 */
const formatWebpackConf = (webpackConf) => {
    webpackConf.output.publicPath = Tool.rtrimSlash(G.proxyPath) + '/' + G.publicName + '/';
    webpackConf.output.path = Tool.rtrimSlash(G.buildPath) + '/' + G.publicName;
    return webpackConf;
};

/**
 * 获取入口文件内容
 * @param webpackConf
 * @returns {*}
 */
const createIndexHtml = (webpackConf) => new Promise((resolve, reject) => {
    const indexTplStr = require('./lib/indexTpl');

    const indexContent = indexTplStr.replace('{$publicAppCSS}', webpackConf.output.publicPath + 'app.css')
        .replace('{$EnvConfJS}', G.proxyPath + 'config/ENV.js')
        .replace('{$publicVendorJS}', webpackConf.output.publicPath + 'vendor.dll.js')
        .replace('{$publicAppJS}', webpackConf.output.publicPath + 'app.js');

    fs.open(path.resolve(G.buildPath, 'index.html'), 'w', (err, fd) => {
        let buf = new Buffer(indexContent);

        fs.write(fd, buf, 0, buf.length, 0, (err) => {
            if (err) {
                reject(new Error('生成入口文件index.html失败：' + err));
            } else {
                resolve(true);
            }
        });
    });
});

/**
 * 执行编译
 * @param productionConf
 * @returns {*}
 */
const doCompiler = (productionConf) => new Promise((resolve, reject) => {
    webpack(productionConf, (err, stats) => {
        let jsonStats = stats.toJson();
        if (jsonStats.errors.length > 0) reject(new Error(jsonStats.errors));
        if (jsonStats.warnings.length > 0) handleWarn(jsonStats.warnings);

        return resolve(true);
    })
});


/**
 * 编译结束后统计
 * @param startTime
 */
const toEnd = (startTime) => {
    const endTime = Date.now();
    clc.green('  ↓');
    clc.green(`编译完成: ${Tool.dateFormat(endTime)}`);
    clc.green('  ↓');
    clc.green('总计耗时:' + ((endTime - startTime)/ 1000).toFixed(2) + "s");
    clc.green('  ↓');
    clc.green(`附属信息:
        PID: ${process.pid}
        CPU数量: ${os.cpus().length}
        CPU架构: ${os.arch()}
        计算机名称: ${os.hostname()}
        系统类型: ${os.type()}
        系统版本号: ${os.release()}
        系统总内存量: ${(os.totalmem()/1024/1024/1024).toFixed(1)+'G'}
`);
};

const buildStart = () => new Promise((resolve, reject) => {
    resolve(true);
});

const buildFinished = () => new Promise((resolve, reject) => {
    resolve(true);
});

module.exports = (webpackConf, option = {}) => {
    process.env.NODE_ENV = 'production';
    process.env.BABEL_ENV = 'production';

    option.buildStart = option.buildStart || buildStart;
    option.buildFinished = option.buildFinished || buildFinished;
    option.isCreateIndexHtml = option.isCreateIndexHtml === undefined ? true : option.isCreateIndexHtml;

    G = Tool.deepmerge(G, option);

    (async () => {
        const startTime = Date.now();
        clc.green(`编译开始: ${Tool.dateFormat(startTime)}`);

        const productionConf = formatWebpackConf(webpackConf);

        // 1. 回调编译开始
        const startResp = option.buildStart(productionConf)
        if (Tool.isError(startResp)) handleError("编译开始回调失败");

        // 2. 创建发布目录
        if (!await Tool.access(G.buildPath)) fs.mkdirSync(G.buildPath);

        // 3. 执行编译
        const compilerResp = await doCompiler(productionConf);
        if (Tool.isError(compilerResp)) handleError(compilerResp.message);

        // 4. 创建index.html
        if(option.isCreateIndexHtml) {
            const createResp = await createIndexHtml(productionConf);
            if (Tool.isError(createResp)) handleError(createResp.message);
        }

        // 5. 回调编译完成
        const finishedResp = await option.buildFinished(productionConf);
        if (Tool.isError(finishedResp)) handleError("编译结束回调失败");

        toEnd(startTime)
    })();
}
