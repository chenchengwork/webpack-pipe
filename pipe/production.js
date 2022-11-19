const { merge, TerserWebpackPlugin, CssMinimizerPlugin,} = require("../lib/depend");
module.exports = (config) => {
    return merge({
        devtool: false,	// cheap-module-source-map,cheap-source-map
        mode: 'production',
        // minimize: true,
        optimization: {
            minimizer:[
                // 优化js
                new TerserWebpackPlugin({
                    test: /\.js(\?.*)?$/i,
                    // cache: true,
                    // devtool: false,
                    parallel: true,
                    terserOptions:{
                        output: {
                            // 最紧凑的输出
                            beautify: false,
                            // 删除所有的注释
                            comments: false,
                        },
                        compress: {
                            // 在UglifyJs删除没有用到的代码时不输出警告
                            warnings: false,
                            drop_console: false,
                            // 内嵌定义了但是只用到一次的变量
                            collapse_vars: true,
                            // 提取出出现多次但是没有定义成变量去引用的静态值
                            reduce_vars: true,
                        },
                        toplevel: false,     // 如果你要混淆（和干掉没引用的）最高作用域中的变量和函数名，就传true。
                        ie8: false,         // 传 true 来支持 IE8.
                    }
                }),

                // 优化css
                new CssMinimizerPlugin({})  // 优化css
            ]
        }
    }, config || {});
};
