const webpack = require("webpack");
const { assemble, pipe, depend } = require("../exportMethod");

// 入口配置
const entry = (config) => depend.merge({
    target: 'web',
    entry:{
        app: ["./src"],
    }
}, config);


// 输出配置
const output = (config) => depend.merge({
    output:{
        publicPath: "auto",
        path: depend.tool.resolveAppPath("public/build"),
    }
}, config);


const resolve = (config) => depend.merge({
    resolve: {
        alias: {
            "@": depend.tool.resolveAppPath('src'),
        },
        extensions: [ '.tsx', '.ts', '.mjs' ],
        modules: []
    }
}, config);

/**
 * 组装webpack config
 */
module.exports = ({
    pipeNodes = [],
    isProdMode = false,         // 是否为生成模式
    isTargetEs5 = true,         // 编译目标是否为es5语法
    isWebpackHRM = true,        // 是否启用webpack热更新
    isStartTsChecker = true,    // 是否启用ts语法检查
    isStartCache = true,        // 是否启用缓存,这样可以加快2次编译速度，但会增加磁盘空间
}) => {
    // 设置全局变量
    depend.setWebpackPipeGlobal({isWebpackHRM});

    let config = assemble([
        ...pipeNodes,
        isProdMode ? pipe.production : pipe.development,
        pipe.base,
        pipe.staticResource,
        pipe.css,
        pipe.scss,
        pipe.babelTsReact,

        isStartTsChecker ? pipe.tsChecker : (config) => config,
        pipe.miniCssExtractPlugin,
        pipe.webpackbarPlugin,
        resolve,
        output,
        entry,
    ]);

    // 编译目标是否为es5语法
    if(isTargetEs5){
        // webpack编译时插入的代码
        config.target = config.target || [];
        if(!Array.isArray(config.target)) config.target = [config.target];
        config.target.push("web");
        config.target.push("es5");

        // js代码编译时的代码
        config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === "babel-loader"){
                rule.options.presets[0][1].targets = {
                    browsers: [
                        "last 2 versions",
                        "ie >= 8",
                    ]
                };
                return rule;
            }

            return rule;
        });
    }

    // 热更新(HRM)
    if(isWebpackHRM){
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    // 不开启开启cache
    if(!isStartCache){
        delete config.cache;
    }

    return config;
};
