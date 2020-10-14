import React, {useState} from 'react';
import { Table, Drawer, Switch, Spin, Button, Card } from 'antd';
import {FormattedMessage} from 'react-intl';
import LoadJsx from "./LoadJsx";
import LoadStaticResource from "./LoadStaticResource";

const Hello: React.FC = () => {
    const [ loading, setLoading ] = useState(true);

    return(
        <div>
            <h2>测试Webpack Pipe</h2>
            <Card>
                <LoadStaticResource />
            </Card>
            <Drawer />
            <Switch defaultChecked />
            <div>
                <p>国际化</p>
                {/*<FormattedMessage defaultMessage="foo" id="bar" />*/}
                <FormattedMessage
                    defaultMessage="Today is {ts, date, ::yyyyMMdd}"
                    values={{ts: Date.now()}}
                />
                <FormattedMessage defaultMessage="中国" />
            </div>
            <div>
               <p>加载的js或jsx文件</p>
                <LoadJsx />
                <div>中国</div>
            </div>
            <div>
                <Button onClick={() => setLoading(!loading)}>{loading ? "关闭loading" : "开启loading"}</Button>
                { loading && <Spin />}
            </div>

            <Table dataSource={dataSource} columns={columns} />

            <div className="test">
                测试styled-jsx
                {/*language=SCSS*/}
                <style jsx>{`
                  .test{
                    width: 100%;
                    background-color: red;
                    display: flex;
                  }
                `}</style>
            </div>
        </div>
    )
}

export default Hello;


const dataSource = [
    {
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