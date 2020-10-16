const { doDev, depend } = require("../../../index");

const webpackConfig = {
	mode: "development",
	entry: {
		app: ["./src"]
	},

	// 指定模块目录名称
	resolve: {
		alias: {
			"@": depend.tool.resolveAppPath('src'),
			"vendor": "../../vendor"
		},
		extensions: ['.ts', '.tsx','.js', '.jsx'],
		modules: ['node_modules'],
	},
	module: {
		rules: [
			// 参照https://webpack.docschina.org/configuration/module/#resolve-fully-specified
			{
				test: /\.m?js/,
				resolve: {
					fullySpecified: false // disable the behaviour
				}
			},
			{
				loader: 'babel-loader',
				exclude: /(node_modules|bower_modules)/,
				test: /(\.tsx?)|(\.jsx?)$/,
				options: {
					cacheDirectory: true,
					sourceType: 'unambiguous', // 这个一定要配，自动处理es和js模块
					"env": {
						// 生产环境下去掉prop-types
						"production": {
							"plugins": ["transform-react-remove-prop-types"]
						}
					},
					presets: [
						['@babel/preset-env', {
							loose: true,
							corejs: ">3",
							targets: {
								// 根据browserslist来分析支持情况， 具体的配置参照： https://github.com/ai/browserslist
								// browsers: [
								//     "last 2 versions",
								//     "ie >= 8",
								// ],
								chrome: "80",
							},
							modules: false,              // modules预先将es6模块转成"amd" | "umd" | "systemjs" | "commonjs", 值为false则不转换
							useBuiltIns: "usage",        // 按需动态加载polyfills
							debug: false
						}],
						'@babel/preset-react',           // 转换jsx语法
						['@babel/preset-typescript', {
							isTSX: true,
							jsxPragma: "react",
							allExtensions: true
						}]
					],
					plugins: [
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
};

doDev({ port: '8081', webpackConfig });

