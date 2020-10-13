const { merge } = require("../lib/depend");
const { getBabelReact } = require("../lib/baseConf");

/**
 * babel react节点
 * @param config
 * @return {*}
 */
module.exports = (config) => {

    return merge({
        module: {
            rules: [
                // 参照https://webpack.docschina.org/configuration/module/#resolve-fully-specified
                {
                    test: /\.m?js/,
                    resolve: {
                        fullySpecified: false // disable the behaviour
                    }
                },
                getBabelReact(),
            ],
        },
    }, config || {})
};
