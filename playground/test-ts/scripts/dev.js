const { solution } = require("../../../index");
const { formatWebpackConf, webpackConfParams } = require("./mkWebpackConfig");
solution.antSolution.dev({
	port: "8090",
	webpackConfParams,
	formatWebpackConf,
	devServerConfig: {
		hotOnly: false
	}
});


