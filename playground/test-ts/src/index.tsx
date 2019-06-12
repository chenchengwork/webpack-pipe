/**
 * @description 项目入口文件
 */
import * as React from 'react';
import * as ReactDOM  from 'react-dom';

import { Button } from 'antd'
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
        console.log(getA())
        return <Button>"111"</Button>
    }
}


/**
 * 渲染程序
 */
ReactDOM.render(<Main />, document.querySelector('#wrapper'));



