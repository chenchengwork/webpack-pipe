const { assemble, pipe, depend } = require("./index");

const output = (config) => depend.merge({
    output:{
        publicPath: "/public/",
        path: depend.tool.resolveAppPath("public/build"),
    }
}, config);

const entry = (config) => depend.merge({
    entry:{
        app: ["./src"],
    }
}, config);

const config = assemble([
    pipe.base,
    pipe.development,
    // pipe.production,
    pipe.staticResource,
    pipe.css,
    pipe.scss,
    pipe.babelAntd,
    pipe.babelReact,

    pipe.miniCssExtractPlugin,
    pipe.provideReactPlugin,
    pipe.autoDllReactPlugin,

    output,
    entry,
]);

console.log(config);
console.log(config.module.rules[config.module.rules.length - 1]);
// console.log(JSON.stringify(config));
