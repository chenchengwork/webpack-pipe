const { merge, formatStyleLoader } = require("../lib/depend");

/**
 * css节点
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    return merge({
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: formatStyleLoader()
                },
            ],
        },
    }, config || {})
};
