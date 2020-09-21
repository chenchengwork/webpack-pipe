/**
 * Created by chencheng on 16-11-17.
 */
const { webpack, webpackDevServer, merge, tool } = require("./lib/depend");

module.exports = (options) => {
    process.env.NODE_ENV = 'development';
    process.env.BABEL_ENV = 'development';

	let { webpackConfig, devServerConfig, host, port, isInlineHotLoad = false } = options;

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
        publicPath: "/public/",

        // 指定服务器内容指定目录
        contentBase: tool.resolveAppPath("public"),

        // 监听指定服务器内容指定目录
        watchContentBase: true,

        // 对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用,这个选项可以排除一些巨大的文件夹
        watchOptions: {
            ignored: /node_modules/
        },

        // 开启服务器的模块热替换(HMR)
        hot: false,

        // 当请求不存在的路由时，直接返回首页
        historyApiFallback: {
            index: '/public/',
            disableDotRule: true,
        },

        stats: {
            colors: true,
        },

        headers: {
            'Access-Control-Allow-Origin': '*',
        },

        proxy: {}
    }, devServerConfig || {})

	// 启动服务
    const server = new webpackDevServer(webpack(webpackConfig), devServerConfig);

    server.app.get('*', (req, res) => {
        res.sendFile(`${devServerConfig.contentBase}/index.html`);
    });

    console.log('http://' + host + ':' + port);

    server.listen(port, host);
};

