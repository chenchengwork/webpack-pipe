/**
 * 支持qiankun webpack配置
 * 参考: https://qiankun.umijs.org/zh/guide/getting-started#2-%E9%85%8D%E7%BD%AE%E5%BE%AE%E5%BA%94%E7%94%A8%E7%9A%84%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7
 */
module.exports = (config, name, publicPath = null) => {
    if(publicPath){
        config.output.publicPath = publicPath;
    }

    config.output.library = name;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject ="window";

    return config;
};
