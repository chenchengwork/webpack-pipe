const webpack = require("webpack");
const { assemble, pipe, depend, pipeExtra } = require("../exportMethod");

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
        // publicPath: "/public/",
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

// ant-design主题配置
const themeAntd = (config, antTheme) => {
    config.module.rules = config.module.rules.map(rule => {
        (Array.isArray(rule.use) ? rule.use : []).forEach(item => {
            if (item.loader === "less-loader"){
                item.options = {
                    ...item.options,
                    lessOptions:{
                        ...item.options.lessOptions,
                        modifyVars: antTheme || {}
                    },
                };

                return item;
            }
        })
        return rule;
    });

    return config;
};

/**
 * babel支持国际化配置
 */
const intl =  (config) => {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            //****************以下配置使用的安装包******************
            // https://acme.top/react-intl
            // babel-plugin-react-intl-auto, babel-plugin-react-intl-extractor, @babel/plugin-transform-typescript

            // 自动生成id
            rule.options.plugins.push([
                "react-intl-auto",
                {
                    // 移除的前缀：true - ID 中将不包含任何文件路径前缀
                    removePrefix: "src.",
                    // 使用文件名生成 ID
                    filebase: false,
                    // 使用前导注释作为消息说明
                    // 仅适用于使用 defineMessages 定义语音包的时候
                    extractComments: true,
                    // https://github.com/akameco/babel-plugin-react-intl-auto#usekey
                    useKey: true,
                    // ID 中单词之间的分隔符
                    separator: ".",
                    // 是否使用自定义模块作为定义Messages等的源
                    // https://github.com/akameco/babel-plugin-react-intl-auto/issues/74#issuecomment-528562743
                    // moduleSourceName: "react-intl"
                }
            ]);

            // 提取react-intl文件
            rule.options.plugins.push([
                "react-intl",
                {
                    messagesDir: "./locales/origin"
                }
            ]);

            // 提取待翻译的文件
            rule.options.plugins.push([
                "react-intl-extractor",
                {
                    // 文件需要提前创建好，确保内容为正确的 json 格式，例如：[]
                    // 提取后聚合文件，包含了消息的 id、defaultMessage、description
                    extractedFile: "./locales/default.json",
                    langFiles: [
                        {
                            // 文件需要提前创建好，确保内容为正确的 json 格式，例如：{}
                            path: "./locales/zh.json",
                            cleanUpNewMessages: false
                        },
                        {
                            // 文件需要提前创建好，确保内容为正确的 json 格式，例如：{}
                            path: "./locales/en.json",
                            cleanUpNewMessages: true
                        }
                    ]
                }
            ])

            return rule;
        }

        return rule;
    });

    return config;
};

/**
 * 组装webpack config
 */
module.exports = ({
    pipeNodes = [],
    isProdMode = false,
    isIntl = false,
    antTheme = {},
    qiankun,
    antd,
    isTargetEs5 = true,
    isWebpackHRM = true,
    isStartTsChecker = true,
    isStartCache = true,
}) => {
    // 设置全局变量
    depend.setWebpackPipeGlobal({isWebpackHRM});

    // 设置antd
    let antdPipe = (config) => config;
    if (antd == "web"){
        antdPipe =  pipe.babelAntd;
    }else if(antd == "mobile"){
        antdPipe =  pipe.babelAntdMobile;
    }

    let config = assemble([
        ...pipeNodes,
        isProdMode ? pipe.production : pipe.development,
        pipe.styledJsx,
        pipe.base,
        pipe.staticResource,
        pipe.css,
        pipe.scss,
        antdPipe,
        pipe.babelTsReact,

        isStartTsChecker ? pipe.tsChecker : (config) => config,
        pipe.miniCssExtractPlugin,
        pipe.webpackbarPlugin,
        resolve,
        output,
        entry,
    ]);

    if(isIntl){
        config = intl(config);
    }

    if(antTheme){
        config = themeAntd(config, antTheme);
    }

    if(qiankun){
        let { name, publicPath } = qiankun;
        if(name && publicPath) {
            config = pipeExtra.qiankun(
                config,
                name,
                publicPath
            );
        }
    }

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
