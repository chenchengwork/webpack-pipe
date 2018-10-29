const { merge } = require("../lib/depend");
const formatStyleLoader  = require("../lib/formatStyleLoader");

/**
 * babel antd 支持antd 配置
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    /*
       依赖说明：
           antd, less(less)
           npm install antd --save
           npm install less@2.7.2 less-loader babel-plugin-import --save-dev
    */

    /**
     * 自定义antd的样式
     * @type {{"@primary-color": string, "@font-size-base": string, "@body-background": string, "@layout-body-background": string}}
     */
    const customAntdStyle = {
        '@primary-color': '#108ee9',		            // 更改antd的主题颜色;
        // "@icon-url":"'/antd_font/iconfont'",            // 更改字体地址; 注意:必须再加额外的“'”,将icon字体部署到本地
        '@font-size-base': '12px',                      // 修改基础字体大小
        '@body-background': '#fff',                     // 修改body的背景颜色
        '@layout-body-background': '#fff',              // 修改layout布局的body背景颜色
    };

    config.module.rules.push({
        test: /\.less/,
        use: formatStyleLoader({
            loader: 'less-loader',
            options: {
                sourceMap: true,
                modifyVars: customAntdStyle
            }
        })
    });

    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            // `style: true` for less
            // babel-plugin-import
            rule.options.plugins.push(['import', {libraryName: 'antd', 'libraryDirectory': 'es', style: true}]);

            return rule;
        }

        return rule;
    });

    return config;
};
