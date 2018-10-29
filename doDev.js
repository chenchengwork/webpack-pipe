/**
 * Created by chencheng on 16-11-17.
 */
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const { webpack, webpackDevServer, merge, tool } = require("./lib/depend");

module.exports = (options) => {
	let { webpackConfig, devServerConfig, host, port } = options;

	host = host || "localhost";
	port = port || 8080;

	// webpack 自动重新加载，采用inline
    Object.keys(webpackConfig.entry).forEach(key => {
        webpackConfig.entry[key].push('webpack-dev-server/client?http://' + host + ':' + port + '/')
    });

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

        proxy: {}
    }, devServerConfig || {})

	// 启动服务
    const server = new webpackDevServer(webpack(webpackConfig), devServerConfig);

	// 将其他路由，全部返回index.html
    server.app.get('*', (req, res) => {
        // res.set("Access-Control-Allow-Origin", "*")
        res.sendFile(`${devServerConfig.contentBase}/index.html`);
    });

    console.log('http://' + host + ':' + port);

    server.listen(port, host);
};

