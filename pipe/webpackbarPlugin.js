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
                reporters: ['fancy', 'profile', 'stats'],
            })
        ]
    }, config || {})
};
