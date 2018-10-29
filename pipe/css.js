const { merge } = require("../lib/depend");
const formatStyleLoader = require("../lib/formatStyleLoader");

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
