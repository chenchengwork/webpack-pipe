const { assemble, depend } = require("../../../index");
const { ModuleFederationPlugin } = require("webpack").container;

/**
 * 组装webpack config
 * @return {*}
 */
module.exports = {
    webpackConfParams:{
        isIntl: true,
        antTheme: require("./ant_theme")
    },
    formatWebpackConf: (config, isProdMode) => {
        const realConfig = assemble([
            setVendor,
            // setModuleFederationPlugin,
            () => config
        ]);


        console.log(realConfig.resolve.alias);

        return realConfig;
    }
};

/**
 * 设置vendor
 */
const setVendor = (config) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        "vendor": depend.tool.resolveAppPath("../vendor"),
    };

    return config;
}

/**
 *  联邦模块配置
 */
const setModuleFederationPlugin = (config) => {
    const deps = require("../../../package.json").devDependencies;

    config.plugins.push(new ModuleFederationPlugin({
        name: "test_ts",
        remotes: {
            // iot_device_web: "iot_device_web@http://localhost:8500/public/remoteEntry.js",
            // iot_device_web: "iot_device_web@/static/remoteEntry.js",
        },
        shared: {
            react: {
                singleton: true,
                requiredVersion: deps.react
            },
            "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"]
            },
        },
    }))

    return config;
}

/**
 * 配置支持sksz bit的库
 */
const formatWebpackConfigForBit = (config) => {
    config.module.rules = config.module.rules.map(rule => {
        // 处理babel loader
        if (rule.loader === "babel-loader"){
            rule.include = [
                depend.tool.resolveAppPath("src"),
                depend.tool.resolveAppPath("../vendor"),
                /node_modules\/@bit\/shikongshuzhi*/
            ];
            delete rule.exclude;

            return rule;
        }

        return rule;
    });

    return config;
}