const { merge, formatStyleLoader } = require("../lib/depend");

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
