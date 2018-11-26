const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * 格式化不同的样式loader
 * @param otherLoader
 * @return {*}
 */
module.exports = (otherLoader = null) => {
    const baseLoaders = [
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                ident: 'postcss', 	// https://webpack.js.org/guides/migrating/#complex-options
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9' // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009'
                    })
                ]
            }
        }
    ];

    if(otherLoader) {
        // 针对scss进行css-module处理
        if(otherLoader.loader == 'sass-loader'){
            baseLoaders[0] = {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                }
            }
        }

        baseLoaders.push(otherLoader);
    }

    baseLoaders.unshift(MiniCssExtractPlugin.loader);

    return baseLoaders;
};
