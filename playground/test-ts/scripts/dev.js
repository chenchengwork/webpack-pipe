const { solution } = require("../../../index");
const { formatWebpackConf, webpackConfParams } = require("./mkWebpackConfig");
const fs = require("fs");
const path = require("path");
solution.antSolution.dev({
	port: "8090",
	webpackConfParams,
	formatWebpackConf,
	devServerConfig: {
		hotOnly: false,
		// clientLogLevel: "error",
		http2: true,
		compress: false,
		https: {
			key: fs.readFileSync(path.resolve(__dirname, './ssl/key.pem')),
			cert: fs.readFileSync(path.resolve(__dirname,'./ssl/cert.pem')),
		}
	}
});


