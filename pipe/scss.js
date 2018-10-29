const { merge } = require("../lib/depend");
const formatStyleLoader = require("../lib/formatStyleLoader");

/**
 * scss节点
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    return merge({
        module: {
            rules: [
                {
                    test: /\.scss/,
                    exclude: /(node_modules|bower_modules)/,
                    use: formatStyleLoader({
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    })
                }
            ],
        },
    }, config || {})
};
