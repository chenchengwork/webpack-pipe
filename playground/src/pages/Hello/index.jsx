import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Hello extends PureComponent{
    // TODO 不起作用的原因是, 使用autodll-webpack-plugin插件后,它会加载 *.production.js的文件,这样就不能检查propTypes了
    // 可以通过在配置中去掉autodll插件来,实现检查功能
    static propTypes = {
        id: PropTypes.object.isRequired
    }

    render(){

        return(
            <div>
                <h2>Test Webpack Pipe</h2>
            </div>
        )
    }
}
