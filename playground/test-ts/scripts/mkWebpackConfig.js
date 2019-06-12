const { assemble, pipe, depend } = require("../../../index");
const path = require("path")

// 入口配置
const entry = (config) => depend.merge({
    entry:{
        app: ["./src"],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', ".jsx" ],
        alias: {
            "@": path.resolve(__dirname, '../src/'),
        }
    }
}, config);

// 输出配置
const output = (config) => depend.merge({
    output:{
        publicPath: "/public/",
        path: depend.tool.resolveAppPath("public/build"),
    }
}, config);


const resolve = (config) => depend.merge({
    resolve: {
        "modules": [
            // "node_modules",
            "web_modules",
            "src"
        ]
    }
}, config);


/**
 * 组装webpack config
 * @return {*}
 */
module.exports = (pipeNodes = []) => {
    const config = assemble([
        ...pipeNodes,
        pipe.base,
        pipe.staticResource,
        pipe.css,
        pipe.scss,
        pipe.babelAntd,
        pipe.babelTsReact,

        pipe.miniCssExtractPlugin,
        pipe.provideReactPlugin,
        pipe.webpackbarPlugin,

        resolve,
        output,
        entry,
    ]);

    return config;
};
