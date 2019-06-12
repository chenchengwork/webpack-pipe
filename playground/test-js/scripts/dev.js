/**
 * Created by chencheng on 16-11-17.
 */
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';
const mkWebpackConfig = require("./mkWebpackConfig");
const { doDev, pipe } = require("../../../index");

doDev({
	webpackConfig: mkWebpackConfig([pipe.development]),
    devServerConfig: {
	    // contentBase: ""
    },
	host: "localhost",
	port: 8081
});





