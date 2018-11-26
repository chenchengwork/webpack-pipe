const { merge, formatStyleLoader } = require("../lib/depend");

/**
 * babel antd 支持antd 配置
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    /**
     * 自定义antd的样式
     * @type {{"@primary-color": string, "@font-size-base": string, "@body-background": string, "@layout-body-background": string}}
     */
    const customAntdStyle = {};

    config.module.rules.push({
        test: /\.less/,
        use: formatStyleLoader({
            loader: 'less-loader',
            options: {
                sourceMap: process.env.NODE_ENV === "production" ? false :true,
                modifyVars: customAntdStyle
            }
        })
    });

    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            // `style: true` for less
            // babel-plugin-import
            rule.options.plugins.push(['import', {libraryName: 'antd-mobile', 'libraryDirectory': 'es', style: true}]);

            return rule;
        }

        return rule;
    });

    return config;
};

