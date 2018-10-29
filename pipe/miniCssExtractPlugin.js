const { merge, MiniCssExtractPlugin } = require("../lib/depend");

/**
 * 提取css文件节点
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    return merge({
        plugins: [
            // 提取css
            new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
        ],
    }, config || {})
};
