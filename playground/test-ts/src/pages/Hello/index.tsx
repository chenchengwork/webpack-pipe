import React from 'react';
import { Table, Drawer, Switch } from 'antd';
import {FormattedMessage} from 'react-intl';
import A from "./A";

const Hello: React.FC = () => {
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
            <h2>Test Webpack Pipe11</h2>
            <img src={require("./img/logo512.png").default} style={{width: 100, height: 100}}/>
            <Drawer />
            <Switch defaultChecked />
            <div>
                <p>国际化</p>
                {/*<FormattedMessage defaultMessage="foo" id="bar" />*/}
                <FormattedMessage
                    defaultMessage="Today is {ts, date, ::yyyyMMdd}"
                    values={{ts: Date.now()}}
                />
                <FormattedMessage defaultMessage="中国11211" />
            </div>
            <div>
                <A />
            </div>
            <Table dataSource={dataSource} columns={columns} />

            <div className="test">
                测试styled-jsx
                {/*language=SCSS*/}
                <style jsx>{`
                  .test{
                    width: 100%;
                    background-color: #056D8B;
                    display: flex;
                  }
                `}</style>
            </div>
        </div>
    )
}

export default Hello;
