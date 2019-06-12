import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

export default class Hello extends PureComponent{
    // TODO 不起作用的原因是, 使用autodll-webpack-plugin插件后,它会加载 *.production.js的文件,这样就不能检查propTypes了
    // 可以通过在配置中去掉autodll插件来,实现检查功能
    static propTypes = {
        myId: PropTypes.object.isRequired
    }

    render(){
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }];



        return(
            <div>
                <h2>Test Webpack Pipe</h2>

                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}
