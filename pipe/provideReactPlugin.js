const { merge, webpack } = require("../lib/depend");

/**
 * 自动加载赋值React节点
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    return merge({
        plugins: [
            // 自动加载赋值模块
            new webpack.ProvidePlugin({
                React: 'react'
            }),
        ],
    }, config || {})
};
