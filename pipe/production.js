const { merge } = require("../lib/depend");

module.exports = (config) => {
    return merge({
        devtool: false,	// cheap-module-source-map,cheap-source-map
        mode: 'production',
    }, config || {});
};
