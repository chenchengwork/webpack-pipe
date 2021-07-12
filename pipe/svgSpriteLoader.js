const { merge } = require("../lib/depend");
module.exports = (iconPath) => (config) => {
    // const iconPath = path.resolve(__dirname,'../src/components/AppIcon/icon');
    config = merge({
        module:{
            rules:[
                {
                    test: /.svg$/,
                    loader: 'svg-sprite-loader',
                    include:[iconPath],
                    options: {
                        // extract: true,
                        // spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
                    }
                }
            ]
        }
    }, config);

    config.module.rules = config.module.rules.map(item => {
        if(Array.isArray(item.use) && item.use[0].loader == "url-loader"){
            if(item.use[0].options && item.use[0].options.minetype == "image/svg+xml"){
                // item.exclude = [path.resolve(__dirname, iconPath)]
                item.exclude = [iconPath]
                return item;
            }
        }

        return item;
    });

    return config;
}