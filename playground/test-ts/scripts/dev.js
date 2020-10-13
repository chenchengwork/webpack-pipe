/**
 * Created by chencheng on 16-11-17.
 */
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';
const mkWebpackConfig = require("./mkWebpackConfig");
const { doDev, pipe, pipeExtra,depend } = require("../../../index");

const host = "0.0.0.0";
const port = "8081";

doDev({
	isInlineHotLoad: false,
	webpackConfig: pipeExtra.qiankun(
		mkWebpackConfig([pipe.development]),
		require("../package.json").name,
		`//${depend.tool.getLocalIP()}:${port}/public/`
	),
    devServerConfig: {},
	host,
	port
});





