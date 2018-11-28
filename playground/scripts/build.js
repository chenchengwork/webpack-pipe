/**
 * 打包编译
 */
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';
const mkWebpackConfig = require("./mkWebpackConfig");
const { doBuild, pipe } = require("../../index");

doBuild(mkWebpackConfig([pipe.production, pipe.autoDllReactPlugin]));

