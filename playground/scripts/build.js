/**
 * 打包编译
 */
const mkWebpackConfig = require("./mkWebpackConfig");
const { doBuild, pipe } = require("../../index");

doBuild(mkWebpackConfig([pipe.production]));

