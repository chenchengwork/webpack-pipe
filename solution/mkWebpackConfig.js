const path = require("path");
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
        publicPath: "/public/",
        path: depend.tool.resolveAppPath("public/build"),
    }
}, config);


const resolve = (config) => depend.merge({
    resolve: {
        alias: {
            // "@": path.resolve(__dirname, '../src/'),
            "@": depend.tool.resolveAppPath('src'),
        },
        extensions: [ '.tsx', '.ts', '.mjs' ],
        modules: [
            // path.resolve(__dirname, "../../node_modules")
        ]
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
            // 使用的babel插件是: babel-plugin-react-intl
            // rule.options.cacheDirectory = false; // 保证提取的信息是最新的
            // rule.options.plugins.push(['react-intl', {"messagesDir": "./i18n-messages"}]);
            rule.options.plugins.push(['react-intl', {
                "extractSourceLocation": true,
                "idInterpolationPattern": "[sha512:contenthash:base64:6]",
                "extractFromFormatMessageCall": true,
                "ast": true,
                pragma: "@intl-meta"
            }]);

            return rule;
        }

        return rule;
    });

    return config;
};

const formatWebpackConfigForBit = (config) => {
    config.module.rules = config.module.rules.map(rule => {
        // 处理babel loader
        if (rule.loader === "babel-loader"){
            rule.include = [
                depend.tool.resolveAppPath("src"),
                /node_modules\/@bit\/shikongshuzhi*/
            ];
            delete rule.exclude;

            return rule;
        }

        return rule;
    });

    return config;
}

/**
 * 组装webpack config
 * @return {*}
 */
module.exports = ({
    pipeNodes = [],
    isProdMode = false,
    isStartSkszBit = true,
    isTsx = true,
    isIntl = false,
    antTheme = {},
    qiankun,
    isTargetEs5 = true,
}) => {

    let config = assemble([
        ...pipeNodes,
        isProdMode ? pipe.production : pipe.development,
        pipe.styledJsx,
        pipe.base,
        pipe.staticResource,
        pipe.css,
        pipe.scss,
        pipe.babelAntd,
        isTsx ? pipe.babelTsReact : pipe.babelReact,

        pipe.miniCssExtractPlugin,
        pipe.provideReactPlugin,
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

    return isStartSkszBit ? formatWebpackConfigForBit(config) : config;
};
