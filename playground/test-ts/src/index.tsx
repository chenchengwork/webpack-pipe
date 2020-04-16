/**
 * @description 项目入口文件
 */
import React, { Fragment } from 'react';
import ReactDOM  from 'react-dom';

import { Button, Drawer } from 'antd'
import {getA} from './a'

import lazyScreen from '@/utils/test';
// const Main = lazyScreen(import("./Main"));
interface IProps {
    color: string,
    size?: string,
}

interface IState {
    count: number,
}

class Main extends React.Component{

    render(){
        return (
            <Fragment>
                {/*<Drawer />*/}
                <Button>"111"</Button>
            </Fragment>
        )
    }
}


/**
 * 渲染程序
 */
ReactDOM.render(<Main />, document.querySelector('#wrapper'));



