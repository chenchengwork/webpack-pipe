const { merge } = require("../lib/depend");
module.exports = (config) => {
    return merge({
        // 用于生成源代码的mapping
        devtool: 'cheap-module-source-map',	// cheap-module-source-map,cheap-source-map
        mode: 'development',
    }, config || {});
};
