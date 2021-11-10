/**
 * Created by chencheng on 16-11-17.
 */
const { webpack, webpackDevServer, merge, tool } = require("./lib/depend");

module.exports = (options) => {
    process.env.NODE_ENV = 'development';
    process.env.BABEL_ENV = 'development';

	let { webpackConfig, devServerConfig, host, port, isInlineHotLoad = true, isWebpackHRM = true } = options;

    host = host || "0.0.0.0";
	port = port || 8080;

	// webpack 自动重新加载，采用inline
    if(isInlineHotLoad) {
        const hotLoadUrl = 'webpack-dev-server/client?http://' + host + ':' + port + '/';

        if (typeof webpackConfig.entry == "string") {
            webpackConfig.entry = [webpackConfig.entry, hotLoadUrl]
        } else if (Array.isArray(webpackConfig.entry)) {
            webpackConfig.entry.push(hotLoadUrl)
        } else {
            Object.keys(webpackConfig.entry).forEach(key => {
                webpackConfig.entry[key].push(hotLoadUrl)
            });
        }
    }

    devServerConfig = merge({
        host,
        port,
        static: {
            directory: tool.resolveAppPath("public"),
            staticOptions: {},
            // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
            // Can be:
            // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
            publicPath: ["/public/", "/"],
            // Can be:
            // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
            serveIndex: true,
            // Can be:
            // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
            // watch: true,
            watch: {
                ignored: /node_modules/
            },
        },

        client: {
            logging: 'error',
        },

        // 当请求不存在的路由时，直接返回首页
        historyApiFallback: {
            index: '/index.html',
            disableDotRule: true,
        },

        devMiddleware:{
            publicPath: "/public/",
            index: true,
            serverSideRender: true,
            writeToDisk: false,
            mimeTypes: { "text/html": ["phtml"] },
            stats: {
                colors: true,
            },
        },

        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        proxy: {}
    }, devServerConfig || {})

    // 开启服务器的模块热替换(HMR)
    if(isWebpackHRM){
        devServerConfig.hot = "only";
    }

    // 兼容v3的配置
    delete devServerConfig.hotOnly;
    delete devServerConfig.clientLogLevel;

	// 启动服务
    const compiler = webpack(webpackConfig);
    const server = new webpackDevServer(devServerConfig, compiler);
    server.startCallback(() => {
        console.log("Running");
    });

};

