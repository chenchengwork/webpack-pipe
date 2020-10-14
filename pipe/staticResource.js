const { merge } = require("../lib/depend");

/**
 * 静态资源节点
 * @param config
 * @return {*}
 */
module.exports = (config) => {
    return merge({
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
                {
                    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                minetype: "application/font-woff"
                            },
                        },
                    ],
                },
                {
                    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10,
                                minetype: "application/font-woff"
                            },
                        },
                    ],
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10,
                                minetype: "application/octet-stream"
                            },
                        },
                    ],
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(txt|doc|docx|swf)$/,
                    use: 'file-loader?name=[path][name].[ext]'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10,
                                minetype: "image/svg+xml"
                            },
                        },
                    ],
                },
                {
                    test: /\.(md)$/,    // 将markdown转换成文本
                    use:"raw-loader"
                }
            ],
        },
    }, config || {})
};
