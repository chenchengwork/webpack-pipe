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
        const deps = require("../../../package.json").devDependencies;

        // 联邦模块配置
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
};
