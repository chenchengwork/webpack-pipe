const { AutoDllPlugin, merge } = require("../lib/depend");

/**
 * 自动加载赋值React节点
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    return merge({
        plugins: [
            // 提取动态库到vendor.dll.js中,用于提升webpack编译速度
            new AutoDllPlugin({
                inject: false,
                filename: '[name].dll.js',
                debug: process.env.NODE_ENV === "production" ? false :true,
                entry: {
                    vendor: [
                        'react',
                        'react-dom',
                    ]
                }
            })
        ],
    }, config || {})
};
