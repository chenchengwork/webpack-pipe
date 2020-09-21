/**
 * 支持styled-jsx
 * @param config
 * @returns {*}
 */
module.exports = (config) => {
    const isProd = process.env.NODE_ENV === 'production';

    if(!isProd){
        console.log(`
使用pipeExtra.styledJsx,需要依赖styled-jsx，styled-jsx-plugin-sass         
`)
    }

    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            // styled-jsx
            rule.options.plugins.push([
                "styled-jsx/babel",
                {
                    "vendorPrefixes": true,     // 为css自动添加前缀
                    "optimizeForSpeed": isProd ? true : false,   //
                    "plugins": [
                        ["styled-jsx-plugin-sass",{sassOptions: {}}]
                    ]
                }
            ]);

            return rule;
        }

        return rule;
    });

    return config;
};
