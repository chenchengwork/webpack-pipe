const { solution } = require("../../../index");

solution.antSolution.dev({
	port: "8081",
	webpackConfParams:{
		isIntl: true,
		isWebpackHRM: false,
	},
	devServerConfig: {
		hotOnly: false
	}
});


