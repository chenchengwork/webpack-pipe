const { merge } = require("../lib/depend");


/**
 * 添加webpackbar
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    const WebpackBar = require('webpackbar');
    return merge({
        plugins: [
            new WebpackBar({
                name: 'Webpack',
                minimal: false,
                profile: true
            })
        ]
    }, config || {})
};
