import React, {useState} from 'react';
import { Table, Drawer, Switch, Spin, Button, Card, Row } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { testVendor } from "vendor/test";
import LoadJsx from "./LoadJsx";
import LoadStaticResource from "./LoadStaticResource";
import Test from './Test';
import css from "styled-jsx/css"
import "./css/test.css";

const Hello: React.FC = () => {
    const { className, styles } = getResolveStyle();
    const [ loading, setLoading ] = useState(true);
    const color = "red";

    testVendor("我是vendor包中的testVendor");

    return(
        <div>
            <h2>测试Webpack Pipe</h2>
            <Row>1111111111111</Row>
            <Card>
                <LoadStaticResource />
            </Card>
            <Drawer />
            <Switch defaultChecked />
            <div className="test">test css</div>
            {/*<div>*/}
            {/*    <p>国际化</p>*/}
            {/*    /!*<FormattedMessage defaultMessage="foo" id="bar" />*!/*/}
            {/*    <FormattedMessage*/}
            {/*        defaultMessage="Today is {ts, date, ::yyyyMMdd}"*/}
            {/*        values={{ts: Date.now()}}*/}
            {/*    />*/}
            {/*    <FormattedMessage defaultMessage="中国" />*/}
            {/*</div>*/}
            <div>
               <p>加载的js或jsx文件</p>
                <LoadJsx />
                <div>中国</div>
            </div>
            <div>
                <Button
                    icon={<CopyOutlined />}
                    onClick={() => setLoading(!loading)}>{loading ? "关闭loading" : "开启loading"}</Button>
                { loading && <Spin />}
            </div>

            <Table dataSource={dataSource} columns={columns} />

            <Test />

            <div className="test">
                <span>测试styled-jsx</span>
                <div className="font-color">我是styled-jsx scss的嵌套样式的文字颜色</div>
                {/*language=SCSS*/}
                <style jsx>{`
                  .test {
                    width: 100%;
                    background-color: ${color};
                    display: flex;

                    & > .font-color {
                      color: #73e089;
                    }
                  }
                `}</style>
            </div>

            <div className={`test_resolve ${className}`}>css.resolve``样式11111</div>
            {styles}
        </div>
    )
}

export default Hello;

// resolve样式
// language=SCSS
const getResolveStyle = () => css.resolve`
  .test_resolve {
    color: #b388de;
    font-size: 30px;
  }
`;

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
    }
];

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
    dataIndex: 'ad                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          dress',
    key: 'address',
}];