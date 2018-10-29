const { merge } = require("../lib/depend");

/**
 * babel react节点
 * @param config
 * @return {*}
 */
module.exports = (config) => {

    return merge({
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    exclude: /(node_modules|bower_modules)/,
                    test: /\.jsx?$/,
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                loose: true,
                                targets: {
                                    // 根据browserslist来分析支持情况， 具体的配置参照： https://github.com/ai/browserslist
                                    browsers: [
                                        "last 2 versions",
                                        "ie >= 8",
                                    ],
                                },
                                modules: false,              // modules预先将es6模块转成"amd" | "umd" | "systemjs" | "commonjs", 值为false则不转换
                                useBuiltIns: "usage",        // 按需动态加载polyfills
                                debug: process.env.NODE_ENV === "production" ? false :true
                            }],
                            '@babel/preset-react',           // 转换jsx语法
                        ],
                        plugins: [
                            // require("@babel/plugin-proposal-function-bind"),        // 支持::obj.func 等价与obj.func.bind(obj) 参照:https://babeljs.io/docs/en/next/babel-plugin-proposal-function-bind
                            // require("@babel/plugin-syntax-dynamic-import"),         // 支持动态import
                            // [require("@babel/plugin-proposal-decorators"), { "legacy": true }],         // 支持装饰器语法
                            // [require("@babel/plugin-proposal-class-properties"), { "loose": true }],    // 支持class属性初始化和static
                            // require("@babel/plugin-proposal-object-rest-spread"),       // 支持...rest
                            // require("@babel/plugin-proposal-export-default-from"),      // 支持 export v from 'mod'语法
                            // require("@babel/plugin-proposal-export-namespace-from"),    // 支持 export * as ns from 'mod'
                            // require("@babel/plugin-syntax-import-meta"),
                            // require("@babel/plugin-proposal-json-strings"),


                            "@babel/plugin-proposal-function-bind",                         // 支持::obj.func 等价与obj.func.bind(obj) 参照:https://babeljs.io/docs/en/next/babel-plugin-proposal-function-bind
                            "@babel/plugin-syntax-dynamic-import",                          // 支持动态import
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],      // 支持装饰器语法
                            ["@babel/plugin-proposal-class-properties", { "loose": true }], // 支持class属性初始化和static
                            "@babel/plugin-proposal-object-rest-spread",                    // 支持...rest
                            "@babel/plugin-proposal-export-default-from",                   // 支持 export v from 'mod'语法
                            "@babel/plugin-proposal-export-namespace-from",                 // 支持 export * as ns from 'mod'
                            "@babel/plugin-syntax-import-meta",
                            "@babel/plugin-proposal-json-strings",
                        ]
                    }
                }
            ],
        },
    }, config || {})
};
